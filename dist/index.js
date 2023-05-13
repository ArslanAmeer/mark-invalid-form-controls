"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markInvalidFormControls = void 0;
/**
 * This function marks a form as dirty and scroll to the first invalid control.
 * @param formGroup The form group to mark as dirty. Required Parameter.
 * @param refElement The reference element to scroll to.
 * refElement is required to scroll to the first invalid control. You can pass the ref element by invoking `private el: ElementRef` in
 * the constructor of the component and then pass `this.el` to function as a second parameter.
 */
const forms_1 = require("@angular/forms");
const core_1 = require("@angular/core");
function markInvalidFormControls(control, elRef) {
    if (control instanceof forms_1.FormGroup || control instanceof forms_1.UntypedFormGroup) {
        markFormGroupAsDirty(control);
    }
    else if (control instanceof forms_1.FormArray || control instanceof forms_1.UntypedFormArray) {
        markFormArrayAsDirty(control);
    }
    else if (control instanceof forms_1.FormControl || control instanceof forms_1.UntypedFormControl) {
        markFormControlAsDirty(control);
    }
    else {
        throw new Error('Error: unexpected control value, it must be an instance of FormGroup, FormArray or FormControl');
    }
    scrollToFirstInvalidControl(elRef);
}
exports.markInvalidFormControls = markInvalidFormControls;
function markFormGroupAsDirty(formGroup) {
    formGroup.markAllAsTouched();
    Object.values(formGroup.controls).forEach(control => {
        control.markAsDirty();
        markInvalidFormControls(control, new core_1.ElementRef({}));
    });
}
function markFormArrayAsDirty(formArray) {
    formArray.controls.forEach(control => {
        control.markAsDirty();
        control.markAsTouched();
    });
}
function markFormControlAsDirty(formControl) {
    formControl.markAsDirty();
    formControl.markAsTouched();
}
function scrollToFirstInvalidControl(refElement) {
    const firstInvalidControl = refElement.nativeElement.querySelector('form .ng-invalid');
    if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({ block: 'start', behavior: 'smooth' });
        firstInvalidControl.focus();
    }
}
