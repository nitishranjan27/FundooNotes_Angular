import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token : any;

  constructor(private formBuilder: FormBuilder, private user : UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      console.log("invalid data");
    }
    else{
      console.log("Password Reset Successfully");
      let reqData={
        password:this.resetForm.value.password,
        confirmPassword:this.resetForm.value.confirmpassword
      }
      this.user.reset(reqData,this.token).subscribe((response:any)=> {
        console.log(response);
        
      })
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value, null, 4));
}
}
