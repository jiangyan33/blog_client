import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
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
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get('category/categoryList').toPromise().then((data: any) => {
      if (data.success === 1) {
        this.categoryList = data.message;
        // 上面导航栏最多显示5个
        this.categoryList.length = 5;
      }
    });
  }

  search() {
    let searchKey = this.formData.value;
    if (searchKey.trim()) {
      this.router.navigate(['/articles'], { queryParams: { searchKey } });
    }
  }

}
