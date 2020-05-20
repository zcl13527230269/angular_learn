import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  phone: string;
  password: string;
  Tip: any = '请输入登录手机号码';
  pasd: any = '请输入密码';

  constructor(
    private fb: FormBuilder,
    private router: Router) {
    }

  ngOnInit(): void {
    this.Tip = '请输入11位手机号码';
    this.pasd = '请输入密码';
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(11), Validators.pattern(new RegExp(/^1[3456789]\d{9}$/))]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('1111', this.validateForm.value);
    }
  }

  Tips(): void {
    this.Tip = '请输入11位手机号码';
  }

  Psws(): void {
    this.pasd = '至少6位字符';
  }
}
