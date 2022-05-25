import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  public veg1:any=[];
  public addarry:any=[];
  total:number=0;
  vegdata:any;
  constructor() { }

  ngOnInit(): void {
    this.veg1=[
      {
        id:9,
        Name:'beera',
        img:'../../assets/images/beera.jpg',
        weight:'1kg',
        rate:25,
      },
      {
        id:10,
        Name:'capsi',
        img:'../../assets/images/capsi.jpg',
        weight:'1kg',
        rate:30,
      },
        {
          id:11,
          Name:"Tamatoa",
          img:'../../assets/images/tamato.jpg',
          weight:'1kg',
          rate :50,
        },
        {
          id:12,
          Name:"Sweet Corn",
          img:'../../assets/images/sweetcone.jpg',
          weight:'1kg',
          rate:30,
        },
     
        {
          id:13,
          Name:'Keera',
          img:'../../assets/images/keera.jpg',
          weight:'1kg',
          rate:25,
        },
        {
          id:14,
          Name:"potato",
          img:'../../assets/images/potato.jpg',
          weight:'1kg',
          rate:25,
        },
          {
            id:15,
            Name:"Bringle",
            img:'../../assets/images/bringle.jpg',
            weight:'1kg',
            rate:20,
          },
          {
            id:16,
            Name:"Cabbage",
            img:'../../assets/images/cabgge.jpg',
            weight:'1kg',
            rate:30,
          }

        ]

    

  }
  addveg(arr:any)
  {
    this.addarry.push(arr)
    this.total+=arr.rate

    localStorage.setItem('cart2',JSON.stringify(this.addarry))
  }

}
