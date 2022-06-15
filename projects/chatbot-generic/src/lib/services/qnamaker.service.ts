import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { ExtractorModel } from '../models/extractor.model';
import { QnaResponse } from '../models/qnaResponse.model';
import { ReceiveMessageModel } from '../models/receiveMessage.model';
import { SendMessageModel } from '../models/sendMessage.model';
import { CommonConstants } from '../constants/commons';

@Injectable({
	providedIn: 'root'
})
export class QnamakerService {

	constructor(private httpClient: HttpClient) { }

	async askQuestion({ text, messageInputMode }: SendMessageModel): Promise<ReceiveMessageModel | undefined> {
		const { host, endpointGenAnswer, authorization } = environment.qna;
		const url = host + endpointGenAnswer;
		const headers = {
			Authorization: authorization
		}
		const result = await this.httpClient.post<QnaResponse>(url, { question: text }, { headers }).toPromise();
		if (!result || !result.answers || !result.answers.length) {
			return;
		}

		const receivedMessageModel = new ReceiveMessageModel(messageInputMode);

		let textCleaned = result.answers[0].id != -1 ? result.answers[0].answer : 'I am not sure about that';

		if (result.answers[0].id != -1) {
			textCleaned = this.cleanupTextAnswer(textCleaned);

			const videoExtracted = this.extractYoutubeEmbeddedUrls(textCleaned);
			textCleaned = videoExtracted.text;
			receivedMessageModel.addVideos(videoExtracted.urls);

			const videoWatchExtracted = this.extractAndConvertYoutubeWatchUrls(textCleaned);
			textCleaned = videoWatchExtracted.text;
			receivedMessageModel.addVideos(videoWatchExtracted.urls);

			const imageExtracted = this.extractImageUrls(textCleaned);
			textCleaned = imageExtracted.text;
			receivedMessageModel.addImages(imageExtracted.urls);

			const otherUrlExtracted = this.extractOtherUrls(textCleaned);
			textCleaned = otherUrlExtracted.text;
			receivedMessageModel.addUrls(otherUrlExtracted.urls);
		}

		receivedMessageModel.text = textCleaned;

		return receivedMessageModel;
	}

	cleanupTextAnswer(answer: string): string {
		return answer.replace(/\*\*.*\*\*\s*/g, '');
	}

	extractYoutubeEmbeddedUrls(inputText: string): ExtractorModel {
		const regex = /https:\/\/www.youtube.com\/embed\/[a-zA-Z0-9]+/g;
		return this.extractorCompile(regex, inputText);
	}

	extractAndConvertYoutubeWatchUrls(inputText: string): ExtractorModel {
		const regex = /https:\/\/www.youtube.com\/watch\?v=(?<youtubeId>[a-zA-Z0-9]+)/g;
		let match = regex.exec(inputText);
		const extractor: ExtractorModel = {
			text: '',
			urls: []
		};
		do {
			if (match && match.groups) {
				const youtubeId = match.groups['youtubeId'];
				extractor.urls.push(`${CommonConstants.YOUTUBE_EMBED_URL_PREFIX}${youtubeId}`);
			}
		} while ((match = regex.exec(inputText)) !== null);

		extractor.text = inputText.replace(regex, '');
		return extractor;
	}

	extractImageUrls(inputText: string): ExtractorModel {
		const regex = /http(s)?:\/\/[^\s]*\.(png|jpg|jpeg|gif)/g;
		return this.extractorCompile(regex, inputText);
	}

	extractOtherUrls(inputText: string): ExtractorModel {
		const regex = /http(s)?:\/\/[^\s|\(|\)|\[|\]|\,]*/g;
		return this.extractorCompile(regex, inputText);
	}

	extractorCompile(regex: RegExp, inputText: string): ExtractorModel {
		const extractor: ExtractorModel = {
			text: '',
			urls: []
		};

		inputText.match(regex)?.forEach((match) => {
			extractor.urls.push(match);
		});
		extractor.text = inputText.replace(regex, '');
		return extractor;
	}
}

