import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CompanyAccountComponent } from './company-account/company-account.component';

const routes: Routes = [
  {path: 'contact-list',
  component: ContactListComponent},
  {path: 'company-account',
  component: CompanyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
