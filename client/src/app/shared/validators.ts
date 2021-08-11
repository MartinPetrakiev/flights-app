import { AbstractControl, ValidationErrors, ValidatorFn  } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) { return null; }
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp
        .test(control.value) ? null : {
        invalidEmail: true
    };
}


export class Validation {
    static match(controlName: string, checkControlName: string): ValidatorFn {
      return (controls: AbstractControl) => {
        const control = controls.get(controlName);
        const checkControl = controls.get(checkControlName);
  
        if (checkControl?.errors && !checkControl?.errors.matching) {
          return null;
        }
  
        if (control!.value !== checkControl!.value) {
          controls?.get(checkControlName)?.setErrors({ matching: true });
          return { matching: true };
        } else {
          return null;
        }
      };
    }
  }