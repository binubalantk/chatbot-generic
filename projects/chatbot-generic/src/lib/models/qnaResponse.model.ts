export interface QnaResponse {
    answers: QNAAnswer[],
    activeLearningEnabled: boolean
}

export interface QNAAnswer {
    questions: string[],
    answer: string,
    score: number,
    id: number,
    source: string,
    isDocumentText: boolean,
    metadata: [],
    context: {
        isContextOnly: boolean,
        prompts: []
    }
}