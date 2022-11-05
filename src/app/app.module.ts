import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { OperationsComponent } from './operations/operations.component';
import { HomeOperationsComponent } from './home-operations/home-operations.component';
import { HomeMonitoringComponent } from './home-monitoring/home-monitoring.component';
import { HomeReportsComponent } from './home-reports/home-reports.component';
import { HomeConfigurationComponent } from './home-configuration/home-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDashboardComponent,
    LoginComponent,
    OperationsComponent,
    HomeOperationsComponent,
    HomeMonitoringComponent,
    HomeReportsComponent,
    HomeConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// git add .
// git commit -m "Ordinery Push"
// git push origin main
