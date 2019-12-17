import { Component, OnInit } from '@angular/core';
import { PaymentDetailsServiceService } from 'src/app/shared/payment-details-service.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service:PaymentDetailsServiceService) { 
      

  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm){
    if(form != null)
    {
    form.resetForm();
    }
    this.service.formData = {
PMId : 0,
 CardOwnerName:'',
 CardNumber :'',
 ExpirationDate:'',
 CVVNumber:''
    };

  }

  OnSubmit(form:NgForm){
    //this function will submit and we  have the valid inside this form 
    //form.value  --contains a jsonobject contains all fields 
    //so we can path it to the service directly 

    this.service.postPaymentDetail(form.value).subscribe(
      res => { 
      alert('Success');
        this.resetForm(form);
      },
      error =>{ console.log(error); }
    )

  }


}
