import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleInfoComponent } from './article-info/article-info.component';


const routes: Routes = [
  { path: 'home', component: ArticleListComponent },
  { path: 'article_info', component: ArticleInfoComponent },
  // { path: 'add_book', component: AddBookComponent },
  // { path: 'book_list', component: BookListComponent },
  // { path: 'file_import', component: FileImportComponent },
  // { path: 'add_chapter', component: ChapterContentComponent },
  // { path: 'question_list', component: QuestionListComponent },
  // { path: 'fix_content', component: FixContentComponent },
  // { path: 'fix_book', component: FixBookComponent },
  // // 默认路由
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
