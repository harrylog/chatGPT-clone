// import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInputComponent } from '../user-input/user-input.component';
import { MsgDisplayComponent } from '../msg-display/msg-display.component';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [CommonModule, UserInputComponent, MsgDisplayComponent],
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatInterfaceComponent {
  messages: Message[] = [];

  onMessageSent(content: string) {
    const newMessage: Message = {
      content,
      isUser: true,
      timestamp: new Date(),
      id: '',
      sender: 'user',
      type: 'text',
    };
    this.messages.push(newMessage);
    // Here you would typically call a service to get a response from the AI
    // For now, we'll just echo the message back as if it were from the AI
    setTimeout(() => {
      const aiResponse: Message = {
        content: `You said: ${content}`,
        isUser: false,
        timestamp: new Date(),
        id: '',
        sender: 'ai',
        type: 'text',
      };
      this.messages.push(aiResponse);
    }, 1000);
  }
}
