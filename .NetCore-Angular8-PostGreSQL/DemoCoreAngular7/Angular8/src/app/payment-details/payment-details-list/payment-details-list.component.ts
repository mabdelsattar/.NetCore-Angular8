import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailsServiceService } from 'src/app/shared/payment-details-service.service';

@Component({
  selector: 'app-payment-details-list',
  templateUrl: './payment-details-list.component.html',
  styleUrls: ['./payment-details-list.component.css']
})
export class PaymentDetailsListComponent implements OnInit {

  allPaymentDetails: PaymentDetail[];

  constructor(private service:PaymentDetailsServiceService) {
    this.InitAll();

   }


   populateForm(paymentitem:PaymentDetail){
     alert(paymentitem);
     this.service.formData = Object.assign({},paymentitem);
   }

   ngOnInit() {
    
   }

   InitAll(){

      this.service.getAllPaymentDetails();

   }

}
