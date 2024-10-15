import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-display',
  standalone: true,
  imports: [],
  templateUrl: './msg-display.component.html',
  styleUrl: './msg-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MsgDisplayComponent {

}
