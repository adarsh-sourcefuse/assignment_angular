import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  id:number;
  customer_name:string;
  role_name:string;
  constructor(private route:ActivatedRoute,private http:HttpClient) { 
    this.id=this.route.snapshot.params['userId'];
    this.http.get(`http://localhost:3000/user/${this.id}`).subscribe(response=>
    {
      console.log("hhjh")
      const c_id=response['students']['customer_id'];
      const r_id=response['students']['role_id'];
      this.http.get(`http://localhost:3000/customer/${c_id}`).subscribe(response=>
      {
       
          this.customer_name=response['students']['customername'];
          console.log(this.customer_name)
      })
      this.http.get(`http://localhost:3000/role/${r_id}`).subscribe(response=>
      {
          this.role_name=response['students']['rolename'];
      })
    })
  }

  ngOnInit(): void {
    
     
  }

}
