import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleInfoComponent } from './article-info/article-info.component';


const routes: Routes = [
  { path: 'home', component: ArticleListComponent },
  { path: 'article_info', component: ArticleInfoComponent },
  // 默认路由
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
