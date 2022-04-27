import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotForm.value, null, 4));
}
}
