/**
 * This function marks a form as dirty and scroll to the first invalid control.
 * @param formGroup The form group to mark as dirty. Required Parameter.
 * @param refElement The reference element to scroll to.
 * refElement is required to scroll to the first invalid control. You can pass the ref element by invoking `private el: ElementRef` in
 * the constructor of the component and then pass `this.el` to function as a second parameter.
 */

import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ElementRef } from '@angular/core';

export function markInvalidFormControls(control: AbstractControl, elRef: ElementRef): void {
  if (control instanceof FormGroup) {
    markFormGroupAsDirty(control);
  } else if (control instanceof FormArray) {
    markFormArrayAsDirty(control);
  } else if (control instanceof FormControl) {
    markFormControlAsDirty(control);
  } else {
    throw new Error('Error: unexpected control value');
  }
  scrollToFirstInvalidControl(elRef);
}

function markFormGroupAsDirty(formGroup: FormGroup): void {
  formGroup.markAllAsTouched();
  Object.values(formGroup.controls).forEach(control => {
    control.markAsDirty();
    markInvalidFormControls(control, new ElementRef({}));
  });
}

function markFormArrayAsDirty(formArray: FormArray): void {
  formArray.controls.forEach(control => {
    control.markAsDirty();
    control.markAsTouched();
  });
}

function markFormControlAsDirty(formControl: FormControl): void {
  formControl.markAsDirty();
  formControl.markAsTouched();
}

function scrollToFirstInvalidControl(refElement: ElementRef): void {
  const firstInvalidControl: HTMLElement = refElement.nativeElement.querySelector('form .ng-invalid');
  if (firstInvalidControl) {
    firstInvalidControl.scrollIntoView({ block: 'start', behavior: 'smooth' });
    (firstInvalidControl as HTMLElement).focus();
  }
}
