import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class   FruitsComponent implements OnInit {
public fruits1:any=[];
public fruits2:any=[];
public fruits3:any=[];
public fruits4:any=[];
public addarr:any=[];
data:any;
total:number=0;

  constructor() { }

  ngOnInit(): void 
  {
    this.fruits1=[{
      id:1,
      Name:'Mango',
      img:'../../assets/images/2.jpg',
      rate:200,
      weight:'1kg',

    },{
      id:2,
      Name:'Orange',
      img:'../../assets/images/3.jpg',
      rate:70,
      weight:'1kg',
    },
    {
      id:3,
      Name:'Guava',
      img:'../../assets/images/guava.jpg',
      rate:50,
      weight:'1kg',
    },{
      id:4,
      Name:'kiwi',
      img:'../../assets/images/kiwi.jpg',
      rate:500,
      weight:'1kg',
    },
      {
          id:5,
          Name:'Pine Apple',
          img:'../../assets/images/4.jpg',
          rate:150,
          weight:'1kg',
        },
        {
          id:6,
          Name:'Pomegranate',
          img:'../../assets/images/5.jpg',
          rate:75,
          weight:'1kg',
        },
        {
          id:7,
          Name:'Banana',
          img:'../../assets/images/banana.jpg',
          rate:50,
          weight:'1kg',
        },{
          id:8,
          Name:'Water Melon',
          img:'../../assets/images/6.jpg',
          rate:20,
          weight:'1kg',
        },
      ]

  
  }

addfn(arr:any)
{
   this.addarr.push(arr);
   this.total+=arr.rate
  // this.addarr.push(this.total);

localStorage.setItem('cart',JSON.stringify(this.addarr))

}


}
