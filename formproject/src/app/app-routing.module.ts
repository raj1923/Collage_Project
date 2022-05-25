import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ConformComponent } from './conform/conform.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { FruitsComponent } from './fruits/fruits.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent } from './home/home.component';
import { OrderconformComponent } from './orderconform/orderconform.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { VegetablesComponent } from './vegetables/vegetables.component';


const routes: Routes = [{
  path:'',
  component:HeaderComponent,
 
},

{
  path:'fruits',
  component:FruitsComponent,
},

{
  path:'vegatables',
  component:VegetablesComponent,
},
{
  path:'createaccount',
  component:CreateaccountComponent,
},
{
  path:'home',
  component:HomeComponent,
},
{
  path:'cart',
  component:CartComponent,
},
{
  path:'placeorder',
  component:PlaceorderComponent,
},
{
  path: 'conform',
  component: ConformComponent,
},

{
  path:'orderconform',
  component:OrderconformComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
