import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css', './util.css']
})
export class LoginComponent implements OnInit {
  formData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  errMsg: string;
  constructor(
    private http: HttpClient, private router: Router, private message: MessageService
  ) { }

  ngOnInit() {
  }
  login() {
    const formData = this.formData.value;
    this.http.get(`${this.message.baseUrl}user/login`, { params: formData }).toPromise().then((data: any) => {
      if (data.code === 200) {
        window.localStorage.setItem('token', data.data.token);
        // 用户信息存储
        // window.localStorage.setItem('userInfo', JSON.stringify(data.user));
        this.router.navigate(['/addArticle']);
      } else {
        this.errMsg = "用户名或者密码错误";
      }
    })
  }

}
