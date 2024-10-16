export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'ai';
  type: 'text' | 'image' | 'code';
  status?: 'sending' | 'sent' | 'error';
}
