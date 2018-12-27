import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PAGE_ROUTES: Routes = [
  {
    path: 'store',
    loadChildren: '../produce/product.module#ProductModule',
    data: {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forChild(PAGE_ROUTES)],
  exports: [RouterModule]
})
export class WrapRouterRoutingModule { }
