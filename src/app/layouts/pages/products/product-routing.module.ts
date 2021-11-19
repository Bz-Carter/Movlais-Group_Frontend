import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: '/categories', component: CategoriesComponent },
  { path: '/tag', component: TagsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
