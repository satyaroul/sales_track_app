import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddFormPage } from './add-form.page';
import { NewBusinessComponent } from "../../components/new-business/new-business.component";

const routes: Routes = [
  {
    path: '',
    component: AddFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddFormPage, NewBusinessComponent]
})
export class AddFormPageModule {}
