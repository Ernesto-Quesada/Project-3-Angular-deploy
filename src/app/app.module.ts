import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SenderService } from './sender.service';


// import { AppRoutingModule } from './app-routing.module';
// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
// import { PhoneListComponent } from './phone-list/phone-list.component';
import {  MiniprofileComponent } from './miniprofile/miniprofile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { EmiterComponent } from './emiter/emiter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import {AgencyService} from './agency.service';
import { RelativeComponent } from './relative/relative.component';

import { AccountPlaidComponent } from './account-plaid/account-plaid.component';
import {AccountPlaidService} from './accountPlaid.service';
import { FooterComponent } from './footer/footer.component';
import { RelativeListComponent } from './relative-list/relative-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PortalComponent } from './portal/portal.component';
import { MinistartComponent } from './ministart/ministart.component';
import { MiniplaidComponent } from './miniplaid/miniplaid.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SearchAgencyComponent } from './search-agency/search-agency.component';
import { AgencySearchService} from './agency-search.service';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'agency',  component: AgencyComponent },
  { path: 'agency/:id',  component: AgencyDetailsComponent },
  { path: 'portal',  component:  PortalComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/edit', component: EditprofileComponent},
  { path: 'relativelist', component: RelativeListComponent},
  { path: 'fundingaccount', component: AccountPlaidComponent},
  { path: 'relatives', component:  RelativeListComponent},
  // { path: 'phone/:id', component: PhoneDetailsComponent }

  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    MiniprofileComponent,
    SignupComponent,
    LoginComponent,
    // EmiterComponent,
    NavigationComponent,
    HomeComponent,
    AgencyComponent,
    AgencyDetailsComponent,
    RelativeComponent,
    AccountPlaidComponent,
    RelativeListComponent,
    FooterComponent,
    ProfileComponent,
    PortalComponent,
    MinistartComponent,
    MiniplaidComponent,
    EditprofileComponent,
    SearchAgencyComponent,
    PaymentComponent
    // MaterialModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    // AppRoutingModule
  ],
  providers: [SenderService, AgencyService, AccountPlaidService, AgencySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
