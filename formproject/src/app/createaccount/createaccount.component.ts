import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {



  public createaccount!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.createaccount = this.formBuilder.group({
      name: [''],
      password: [''],
      repassword: ['']
    })

  }
  sigup() {
    console.warn(this.createaccount.value)
    console.log("success")
    
    this._http.post<any>("http://localhost:3000/createaccount", this.createaccount.value).subscribe(res => {
      alert("Registration SuccessFull");
      this.createaccount.reset();
      this.router.navigate(['/'])
    }, err => {
      alert("Some Thing Wrong")
    })

  }
          
}
