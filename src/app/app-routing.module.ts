import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormValidatorsComponent } from './form-validators/form-validators.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'validators', component: FormValidatorsComponent},
  {
    //loadChildren to load the PostDetailModule lazily when the route /post/:id is accessed.
    path: 'post/:id',
    loadChildren: () =>
      import('./post-detail/post-detail.module').then((m) => m.PostDetailModule),
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
