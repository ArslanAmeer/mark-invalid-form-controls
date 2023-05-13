/**
 * This function marks a form as dirty and scroll to the first invalid control.
 * @param formGroup The form group to mark as dirty. Required Parameter.
 * @param refElement The reference element to scroll to.
 * refElement is required to scroll to the first invalid control. You can pass the ref element by invoking `private el: ElementRef` in
 * the constructor of the component and then pass `this.el` to function as a second parameter.
 */
import { AbstractControl } from '@angular/forms';
import { ElementRef } from '@angular/core';
export declare function markInvalidFormControls<T extends AbstractControl>(control: T, elRef: ElementRef): void;
