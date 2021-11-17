import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    CategoriesComponent,
    TagsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
