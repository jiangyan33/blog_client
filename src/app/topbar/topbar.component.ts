import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  private categoryList: Array<Object>;
  searchKey: FormGroup;
  constructor(private requestService: RequestService, private formBuilder: FormBuilder, private router: Router) {
    this.searchKey = this.formBuilder.group({
      value: undefined
    });
  }

  ngOnInit() {
    this.requestService.getCategoryList().subscribe(result => {
      if (result['success'] === 1) {
        this.categoryList = result['message'];
        // 上面导航栏最多显示5个
        this.categoryList.length = 5;
      }
    });
  }

  onSubmit() {
    let searchKey = this.searchKey.value.value;
    if (searchKey) {
      this.router.navigate(['/home'], { queryParams: { searchKey } });
    }
  }

}
