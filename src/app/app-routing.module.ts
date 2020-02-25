import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: "articles",
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: '/:id',
        component: ArticleInfoComponent
      }
    ]
  },
  // 默认路由
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  // { path: '**', component: PageNotFindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
