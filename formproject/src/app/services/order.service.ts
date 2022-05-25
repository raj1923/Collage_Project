import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }
  public getdata()
  {
    var url='http://localhost:10686/api/userinfo/getAll'
     return this.http.get(url);
  }
  public postdata(data:any)
  {
    var url="http://localhost:10686/api/userinfo/placeOrder"
    return this.http.post(url,data);
  }

}
