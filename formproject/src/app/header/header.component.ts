import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  public loginform!: FormGroup;
  constructor(private formbilder :FormBuilder,private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.formbilder.group({
      name:[''],
      password:['']
    })
  }
  login()
  {
 this._http.get<any>("http://localhost:3000/createaccount")
 .subscribe(res=>{
   const user=res.find((a:any)=>{
    return a.name ===this.loginform.value.name && a.password === this.loginform.value.password
   });
   if(user)
   {
     alert('Login is Success');
     this.loginform.reset();
     this.router.navigate(['home']);
   }
   else{
     alert('User Not Found')
   }
  
 })
  }

  
  }


