import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  email: string = ''
  password: string = ''
  firstName: string = ''
  lastName: string = ''

  constructor(public uiservice: UiService){}

}
