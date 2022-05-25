import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conform',
  templateUrl: './conform.component.html',
  styleUrls: ['./conform.component.css']
})
export class ConformComponent implements OnInit {

  todaydate: Date= new Date();

   
  constructor() { }


  

 orderdetail:any=[];
 amount:any=[];
 total=0;
  ngOnInit(): void {
   
 var obj:any=localStorage.getItem('ord');

 this.orderdetail.push(JSON.parse(obj))
  console.log(this.orderdetail)


  var obj1:any=localStorage.getItem('main');
 
   var dm1=JSON.parse(obj1);
   
   this.amount.push(...dm1)

  for(var i=0;i<this.amount.length;i++)
    {
      this.total+=this.amount[i].rate
    

    }
  console.log(this.amount)

  }

 


}
