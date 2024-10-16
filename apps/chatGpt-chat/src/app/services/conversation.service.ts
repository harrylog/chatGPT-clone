import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  openaiApiKey =
    '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';
  constructor(private http: HttpClient) {}
  sendMessage(message: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.openaiApiKey}`,
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
    };

    return this.http.post<string>(this.apiUrl, body, { headers });
  }
}
