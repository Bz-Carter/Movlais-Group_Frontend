import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './layouts/pages/about-page/about-page.component';
import { ContactPageComponent } from './layouts/pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './layouts/pages/error-page/error-page.component';
import { HomePageComponent } from './layouts/pages/home-page/home-page.component';
import { ServicesPageComponent } from './layouts/pages/services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'catalogue', 
    loadChildren: () => import('./layouts/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'actualité', 
    loadChildren: () => import('./layouts/pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'galerie', 
    loadChildren: () => import('./layouts/pages/galerie/galerie.module').then(m => m.GalerieModule)
  },
  { path: 'nos-services', component: ServicesPageComponent },
  { path: 'a-propos', component: AboutPageComponent },
  { path: 'contactez-nous', component: ContactPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
