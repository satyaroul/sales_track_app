import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetupPage } from './setup.page';
//import { AddFormModelComponent } from '../../components/add-form-model/add-form-model.component';
//import { InitialSetupComponent } from '../../components/initial-setup/initial-setup.component';
import { FinalSetupComponent } from '../../components/final-setup/final-setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetupPage, FinalSetupComponent]
})
export class SetupPageModule {}
