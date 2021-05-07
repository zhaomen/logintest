import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  validateForm!: FormGroup;

  submitForm(): void {
    if(this.validateForm.value.password === "admin" &&  this.validateForm.value.userName === "admin"){
      localStorage.setItem("username",this.validateForm.value.userName)
      this.route.navigate(["index"])
    }else{
      this.route.navigate(["error"])
    }
  }

}
