import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':id', component: BlogSingleComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'tag', component: TagsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
