import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
