import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ChatbotGenericComponent } from './chatbot-generic.component';
import { MessageControlComponent } from './components/message-control/message-control.component';
import { MessageTextInputComponent } from './components/message-text-input/message-text-input.component';
import { MessageVoiceInputComponent } from './components/message-voice-input/message-voice-input.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MessageBaseComponent } from './components/message-base/message-base.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { MessagetItemComponent } from './components/messaget-item/messaget-item.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { MessageHeaderComponent } from './components/message-header/message-header.component';
import { MessageBoxLauncherComponent } from './components/message-box-launcher/message-box-launcher.component';



@NgModule({
  declarations: [
    ChatbotGenericComponent,
    MessageControlComponent,
    MessageTextInputComponent,
    MessageVoiceInputComponent,
    LoaderComponent,
    MessageBaseComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    MessagetItemComponent,
    MessageListComponent,
    MessageBoxComponent,
    MessageHeaderComponent,
    MessageBoxLauncherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ChatbotGenericComponent,
    MessageTextInputComponent,
    MessageControlComponent,
    MessageVoiceInputComponent,
    LoaderComponent,
    SendMessageComponent,
    ReceiveMessageComponent,
    MessagetItemComponent,
    MessageListComponent,
    MessageBoxComponent,
    MessageHeaderComponent,
    MessageBoxLauncherComponent
  ]
})
export class ChatbotGenericModule { }
