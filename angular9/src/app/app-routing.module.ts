import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ 
    provide: APP_BASE_HREF, 
    // @ts-ignore
    useValue: window.__POWERED_BY_QIANKUN__ ? '/angular9' : '/subapp/angular9/' 
  }]
})
export class AppRoutingModule { }
