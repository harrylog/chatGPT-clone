import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInputComponent {

}
