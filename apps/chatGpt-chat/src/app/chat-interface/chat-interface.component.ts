import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chat-interface',
  standalone: true,
  imports: [],
  templateUrl: './chat-interface.component.html',
  styleUrl: './chat-interface.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatInterfaceComponent {

}
