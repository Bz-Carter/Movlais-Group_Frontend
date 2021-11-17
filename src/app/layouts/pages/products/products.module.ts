import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    TagsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
