import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user : UserService,private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("Login Unsuccessfull");
    }
    else{
      console.log("Login Successfully Completed");
      let reqData={
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((response:any)=> {
        console.log(response);  
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("firstName",response.data.firstName);
        localStorage.setItem("lastName",response.data.lastName);
        localStorage.setItem("email",response.data.email);
        this.router.navigateByUrl('/dashboard/notes'); 
      })
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}
}
