import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

const routes: Routes = [
    { path: 'phones-list', component: PhoneListComponent },
    { path: 'item/:id', component: PhoneDetailComponent },
    { path: '', redirectTo: '/phones-list', pathMatch: 'full' },
];

@NgModule({

    imports: [
      CommonModule,
      [RouterModule.forRoot(routes, { useHash: true })]

    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

