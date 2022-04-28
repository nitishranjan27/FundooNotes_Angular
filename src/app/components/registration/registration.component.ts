import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      // service : "advance"
  });

}

onSubmit() {
    this.submitted = true;
    console.log("Submited Successfully", this.registerForm.value);

    // stop here if form is invalid
    if (this.registerForm.valid) {
        // return;
        console.log("Data inserted Successfully");
      let reqData={
        FirstName:this.registerForm.value.firstName,
        LastName:this.registerForm.value.lastName,
        Email:this.registerForm.value.email,
        Password:this.registerForm.value.password
        // service : this.registerForm.value.service
      }
      this.user.Registration(reqData).subscribe((response:any)=> {
        console.log(response);
      });
    }
    
    

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
}
