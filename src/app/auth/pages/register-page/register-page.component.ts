import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validatos.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-valiator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validorsService.firstNameAndLastnamePattern ) ]],
    email: ['', [ Validators.required, Validators.pattern( this.validorsService.emailPattern ) ], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.validorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  },{
    Validators: [
      this.validorsService.isFieldOneEqualFieldTow('password', 'password2')
    ]
  });

  constructor ( 
    private fb: FormBuilder,
    private validorsService: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  isValidField( field: string ){
    return this.validorsService.isValidField( this.myForm, field );
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
