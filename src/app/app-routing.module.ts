import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HeaderComponent } from './pages/header/header.component';
import { TransitionComponent } from './pages/transition/transition.component';


const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "transition",
    pathMatch: "full",
    component: TransitionComponent,
  },
  {
    path: "how-it-works",
    pathMatch: "full",
    component: HowItWorksComponent,
  },
  {
    path: "about-us",
    pathMatch: "full",
    component: AboutUsComponent,
  },
  {
    path: "demo",
    pathMatch: "full",
    component: DemoComponent,
  },
  {
    path: "logout",
    pathMatch: "full",
    component: LogoutComponent,
  },

  {
    path: "header",
    pathMatch: "full",
    component: HeaderComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

