import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-project2',
  templateUrl: './reactive-form-project2.component.html',
  styleUrls: ['./reactive-form-project2.component.css'],
})
export class ReactiveFormProject2Component {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: FormBuilder) {}
  onSubmit() {
    console.warn(this.profileForm.value);
    
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName:'Ishu',
      address:{
        street:'Varanasi'
      }
    })
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
}
