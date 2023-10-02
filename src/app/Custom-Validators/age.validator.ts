import { AbstractControl } from '@angular/forms';

export function ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value && (isNaN(control.value) || control.value < 18 || control.value > 99)) {
    return { 'invalidAge': true };
  }
  return null;
}
