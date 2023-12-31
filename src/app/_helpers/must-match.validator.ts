import { FormGroup } from "@angular/forms";

export function MustMatch(controlName:string,matchingControlName:string){
    return (formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName]; // PASSWORD
        const matchingControl = formGroup.controls[matchingControlName]; // CONFIRM PASSWORD

        if(matchingControl.errors && !matchingControl.errors['mustMatch']){
         return;
        }

        // set error on matchingControl if validation fails.

        if(control.value!==matchingControl.value){
            matchingControl.setErrors({mustMatch:true}) //
        }
        else{
            matchingControl.setErrors(null);
        }
    }
}