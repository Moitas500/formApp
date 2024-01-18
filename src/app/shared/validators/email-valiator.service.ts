import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{
    
    constructor() { }

    validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
        
        const email = control.value;

        const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

            if ( email === '' ){
                subscriber.next({ emailTaken: true });
                subscriber.complete();
                return;
            }

            subscriber.next(null);
            subscriber.complete();

        })

        return httpCallObservable;

    } 
}