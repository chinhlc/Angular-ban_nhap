import { AbstractControl } from '@angular/forms';

export function ValidateInteger(control: AbstractControl) {
  const input = Number(control.value);
  if (!Number.isInteger(input)) {
    console.log('not an integer');
    return { validInteger: true };
  }
  return null;
}
