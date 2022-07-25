import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TransitionComponent } from './pages/transition/transition.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
//import { AppserviceService } from './services/appservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    HowItWorksComponent,
    LogoutComponent,
    DemoComponent,
    TransitionComponent,
    
  ],
  imports: [
      RouterModule,  
      BrowserModule,
      AppRoutingModule,
      DataTablesModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpClientJsonpModule,
    // BrowserAnimationsModule,
    // CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
