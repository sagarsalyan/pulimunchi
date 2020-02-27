import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestuarantmenuComponent } from './restuarantmenu/restuarantmenu.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},//Default Component
  // {path:'',component:Component1Component},//Default Component
  // {path:'home',component:HomeComponent},
  // {path:'search',component:SearchComponent},
  // {path:'about',component:AboutComponent},
  // {path:'contactus',component:ContactusComponent},
  // {path:'myorders',component:MyordersComponent},
  // {path:'mycart',component:MycartComponent},
  // {path:'myprofile',component:MyprofileComponent},
  {path:'admin',component:AdminComponent},
  {path:'',component:UserComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'restaurant',component:RestaurantComponent},
    {path:'restaurantmenu',component:RestuarantmenuComponent},
    {path:'about',component:AboutComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'myorders',component:MyordersComponent},
    {path:'mycart',component:MycartComponent},
    {path:'myprofile',component:MyprofileComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,RestaurantComponent,RestuarantmenuComponent,ContactusComponent,MyordersComponent,MycartComponent,MyprofileComponent,AdminComponent,UserComponent,PagenotfoundComponent];
