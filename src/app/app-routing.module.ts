import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AuthGuard } from './utils/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'addArticle',
    component: AddArticleComponent,
    canActivate: [AuthGuard], // 路由守卫
  },
  {
    path: 'articles',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: 'article/:id',
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
