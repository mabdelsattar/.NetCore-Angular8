import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailsListComponent } from './payment-details/payment-details-list/payment-details-list.component';
import { PaymentDetailsServiceService } from './shared/payment-details-service.service';
import { FormsModule } from '@angular/forms'
import { HttpClientModule  } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PaymentDetailsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
