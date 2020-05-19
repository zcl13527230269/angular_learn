import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.less']
})
export class RecoverComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  Tip:any = '请输入手机号码';
  Psw:any = '请输入密码';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.Tip='请输入手机号码';
    this.Psw = '请输入密码';
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required,Validators.minLength(11),Validators.pattern(new RegExp(/^1[3456789]\d{9}$/),)]],
      password: [null, [Validators.required,Validators.minLength(6),]],
      yzm: [null, [Validators.required,Validators.minLength(4),]],
      confirm: ['', [this.confirmValidator,Validators.required]],
    });
  }
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  Tips():void {
    this.Tip = '请输入11位手机号码'
  }
  Psws():void {
    this.Psw = '至少6位字符'
  }
  
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

}
