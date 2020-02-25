import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  // 声明该模块使用的组件
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ArticleListComponent,
    ArticleInfoComponent,
    LayoutComponent
  ],
  // 该模块的依赖模块
  imports: [
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 该模块的启动组件
})
export class AppModule { }
