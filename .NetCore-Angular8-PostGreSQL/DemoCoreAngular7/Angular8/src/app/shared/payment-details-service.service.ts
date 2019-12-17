import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsServiceService {
readonly rootUrl= 'http://localhost:64443'
  formData:PaymentDetail;
  list : PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(formData:PaymentDetail){
    return this.http.post(this.rootUrl+'/api/PaymentDetails',formData)
  }

  getAllPaymentDetails(){
    this.http.get(this.rootUrl + '/api/PaymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }


}
