import { AbstractControl } from '@angular/forms';

export function phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value && (isNaN(control.value) || control.value.length != 10)) {
    return { 'invalidPhone': true };
  }
  return null;
}
