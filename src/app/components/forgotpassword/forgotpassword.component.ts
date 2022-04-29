import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      console.log("invalid data");
    }
    else{
      console.log("Forgot Password Successfully");
      let reqData={
        email:this.forgotForm.value.email
      }
      this.user.forgot(reqData).subscribe((response:any)=> {
        console.log(response);
        
      })

    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgotForm.value, null, 4));
}
}
