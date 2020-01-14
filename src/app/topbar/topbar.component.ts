import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  private categoryList: Array<Object>;
  constructor(private requestService: RequestService) {
    this.categoryList = [{ name: "首页" }];
  }

  ngOnInit() {
    this.requestService.getCategoryList().subscribe(result => {
      if (result['success'] === 1) {
        this.categoryList.push(...result['message']);
        // 上面导航栏最多显示5个
        this.categoryList.length = 5;
      }
    });
  }

}
