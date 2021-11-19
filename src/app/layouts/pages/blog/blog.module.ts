import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    CategoriesComponent,
    TagsComponent,
    BlogComponent,
    BlogSingleComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
