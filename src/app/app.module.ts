import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './registered/login/login.component';
import { RecoverComponent } from './registered/recover/recover.component';
import { RegisterComponent } from './registered/register/register.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
