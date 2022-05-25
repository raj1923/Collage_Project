import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  router: any;
  cartdata:any;

 

  constructor() { }
  public addarr:any=[];
  public total:number=0;
  public cartval:any=[];
  public cartval1:any=[];
  public num:any=[];
  ngOnInit(): void {
    let cartval=JSON.parse(localStorage.getItem('cart')||'{}')
    let cartval2=JSON.parse(localStorage.getItem('cart2')||'{}')
    var k=0;
    if (cartval.length != 0 && cartval2.length!=0 && cartval2.length!=undefined&&cartval.length!=undefined)
    {
           this.cartval.push(...cartval)
        this.cartval.push(...cartval2)
    }
    else  {
      if (cartval.length>0)
      {
        this.cartval.push(...cartval)

      }
      else if(cartval2.length>0)
      {
        this.cartval.push(...cartval2)

      }

      
    }
   

    console.log(this.cartval)
    for(var i=0;i<this.cartval.length;i++)
    {
      k+=1;
      this.total+=this.cartval[i].rate
      this.cartval1.push({
        id:k,
        Name:this.cartval[i].Name,
        rate:this.cartval[i].rate,
      })

    }
    console.log(this.cartval1)
    console.log(this.cartval);

    
    localStorage.setItem('main',JSON.stringify(this.cartval))


  }
  remove(Name:any)
  {
    var res=  this.cartval1.findIndex((a:any)=>a.id==Name);
    var del=this.cartval1.splice(res,1);
    console.log(del);
    localStorage.removeItem('main');
    localStorage.setItem('main',JSON.stringify(this.cartval1))

    this.total= this.total-del[0].rate
  }

  



}
