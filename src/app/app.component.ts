import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  applyForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email: new FormControl('')
  });
  submitApplication(){
    console.log(this.applyForm.value?.firstName); //?. optional chaining operator ()
    console.log(this.applyForm.value?.lastName);
    console.log(this.applyForm.value?.email);
    
    
  }
}
