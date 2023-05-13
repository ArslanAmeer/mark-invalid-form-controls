<p align="center" float="left">
     <img src="./angular-reactive-forms.png" alt="angular-reactive-form" width="80">
</p>

# Angular Mark Invalid Form Controls Utility

The markInvalidFormControls function is a utility function for Angular applications to be used with Reactive Forms that helps you mark all invalid form controls as dirty and scrolls smoothly to the first invalid control. This utility is useful for providing better user experience in forms with validation, making it easier for users to identify and correct the invalid inputs.

## Why use this utility?

When working with Angular forms, you might have scenarios where a user submits a form without filling in all required fields or providing invalid data. In such cases, it is essential to inform the user about these errors and guide them to correct the inputs. The markInvalidFormControls utility function helps you achieve this by marking all invalid controls as dirty and scrolling to the first invalid control on the form.

## When to use it?

You should use this utility function when you have a form with validation, and you want to provide a better user experience by guiding the user to the first invalid input when the form is submitted with invalid data.

## How to use it?

1. Install the package using npm:

    ```npm install mark-invalid-form-controls```

2. Import the markInvalidFormControls function in your component:
    
    ```typescript 
    import { markInvalidFormControls } from 'mark-invalid-form-controls';
    ```
3. Use the markInvalidFormControls function in your component, typically in the submit event handler:

    ```typescript
    onSubmit() {
        if (this.myForm.invalid) {
            markInvalidFormControls(this.myForm, this.el);
        } else {
            // Handle successful form submission
        }
    }
    ```
4. Pass the ElementRef instance of the component as the second parameter to the function. You can get the ElementRef by injecting it into your component's constructor:

    ```typescript
    constructor(private el: ElementRef) {}
    ```
    Then pass this.el as the second parameter when calling the markInvalidFormControls function:

    ```typescript
    markInvalidFormControls(this.myForm, this.el);
    ```

## Dependencies

To use this utility function, you must have the following dependencies installed in your Angular project:

    @angular/core: This is a core dependency of any Angular application.
    @angular/forms: This is required to work with Angular forms.

The utility function relies on the AbstractControl, FormArray, FormControl, and FormGroup classes from the @angular/forms package, and the ElementRef class from the @angular/core package.

## Function signature
- `control`: An AbstractControl instance representing the form control, form group, or form array you want to mark as dirty.

- `elRef`: An ElementRef instance representing the component where the form resides. This parameter is required for scrolling to the first invalid control.


## License

This project is licensed under the MIT License. For more information, please see the [LICENSE](LICENSE) file.

## Author

- [Arslan Ameer](https://github.com/arslanameer) - Initial work

## Contributing

Contributions are welcome! If you find a bug or would like to request a new feature, please feel free to open an issue or submit a pull request on the project's GitHub repository.

To contribute:

1. Fork the repository on GitHub.
2. Clone your fork and create a new branch for your feature or bugfix.
3. Commit your changes, and push the branch to your fork.
4. Create a pull request from your fork to the original repository.

Please make sure to follow the project's coding style and include tests and documentation for any new features or bugfixes.
