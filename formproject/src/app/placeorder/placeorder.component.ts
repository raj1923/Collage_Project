import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
fullname : string ='';
email :string ='';
state :string ='';
district :string ='';
mandal: string ='';
village :string ='';
phone :number=0;
pincode :number=0;
  constructor(public api:OrderService,public route:Router) { }

  ngOnInit(): void {

    this.api.getdata().subscribe((res:any)=>{
      console.log(res);

      
    })

    

  }
  place()
  {
    var obj=
    {
      fullname :this.fullname,
    
      email :this.email,
      sta :this.state,
      district :this.district,
      mandal :this.mandal,
      village : this.village,
      phone : this.phone,
      pincode :this.pincode,
    }
    
    this.api.postdata(obj).subscribe((res:any)=>
    {
      console.log(res);
      
    })
    localStorage.setItem('ord',JSON.stringify(obj));
      this.route.navigateByUrl('/conform')
  }

}
