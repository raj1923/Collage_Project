import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderconform',
  templateUrl: './orderconform.component.html',
  styleUrls: ['./orderconform.component.css']
})
export class OrderconformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  remove()
  {
    
    if (!localStorage.getItem('cart2')  || (!localStorage.getItem('cart')))
    { 
     localStorage.removeItem('cart2') 
     localStorage.removeItem('cart')
     localStorage.removeItem('ord')
     localStorage.removeItem('main')
   } 
   else
    {
     localStorage.removeItem('cart2') 
     localStorage.removeItem('cart')
     localStorage.removeItem('ord')
     localStorage.removeItem('main')
   }

  }
  

}
