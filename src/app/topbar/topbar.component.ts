import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  formData = new FormGroup({
    searchKey: new FormControl('')
  });
  categoryList: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    if (!window.localStorage.getItem('categoryList')) {
      this.http.get(`${this.message.baseUrl}category/categoryList`).toPromise().then((data: any) => {
        if (data.code === 200) {
          window.localStorage.setItem('categoryList', JSON.stringify(data.data));
          this.categoryList = data.data;
          this.categoryList.length = 5;
        }
      });
    } else {
      this.categoryList = JSON.parse(window.localStorage.getItem('categoryList'));
      this.categoryList.length = 5;
    }
  }

  search() {
    const formData = this.formData.value;
    if (formData.searchKey.trim()) {
      this.router.navigate(['/articles'], { queryParams: formData });
    }
  }

}
