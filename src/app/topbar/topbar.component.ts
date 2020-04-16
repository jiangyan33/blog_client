import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryList = JSON.parse(window.localStorage.getItem('categoryList'));
    this.categoryList.length = 5;
  }

  search() {
    const formData = this.formData.value;
    if (formData.searchKey.trim()) {
      this.router.navigate(['/articles'], { queryParams: formData });
    }
  }

}
