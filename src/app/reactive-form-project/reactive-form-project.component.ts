import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-reactive-form-project',
  templateUrl: './reactive-form-project.component.html',
  styleUrls: ['./reactive-form-project.component.css']
})
export class ReactiveFormProjectComponent {
  registerForm!: FormGroup;
  submitted:boolean=false;

constructor(private formBuilder:FormBuilder){}

ngOnInit(){
this.registerForm = this.formBuilder.group(
  {
  title:['',Validators.required],
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(6)]],
  confirmPassword:['',Validators.required],
  acceptTerms:[false,Validators.requiredTrue]
},
{
  validator:MustMatch('password','confirmPassword'), // CUSTOM VALIDATOR
}
)
  
}
get f(){
  return this.registerForm.controls;
}
onSubmit(){
  this.submitted=true;

  if(this.registerForm.invalid){
    return;
  }
  alert('Success' + JSON.stringify(this.registerForm.value,null,4));
  
}

}

