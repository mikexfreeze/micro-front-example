import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { 
    path: 'first-component', 
    component: FirstComponent 
  },
  { path: 'second-component', component: SecondComponent },
  { path: 'lazyloading', loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [{ 
    provide: APP_BASE_HREF, 
    // @ts-ignore
    useValue: window.__POWERED_BY_QIANKUN__ ? '/angular9' : '/subapp/angular9/' 
  }]
})
export class AppRoutingModule { }
