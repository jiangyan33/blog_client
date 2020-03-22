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
import { httpInterceptorProviders } from './utils/global.interceptor';
import { ContentComponent } from './content/content.component';
import { SafeHtmlPipe } from './utils/safe-html.pipe';
import { LoginComponent } from './login/login.component';
import { AddArticleComponent } from './add-article/add-article.component';

@NgModule({
  // 声明该模块使用的组件
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ArticleListComponent,
    ArticleInfoComponent,
    LayoutComponent,
    ContentComponent,
    SafeHtmlPipe,
    LoginComponent,
    AddArticleComponent
  ],
  // 该模块的依赖模块
  imports: [
    BrowserModule,
    // 响应式表单
    ReactiveFormsModule,
    // 路由导航
    AppRoutingModule,
    // http服务
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent] // 该模块的启动组件
})
export class AppModule { }
