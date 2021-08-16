import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 
  

index:number=0;
users:any[];
  //users:any[;]=[{id:1,name:"cbdhbcd",website:"cbdhc",address:"xbhsvc",role:"ncdj",key:"23",description:"xnjs"},{id:2,name:"cbdhbcd",website:"cbdhc",address:"xbhsvc",role:"ncdj",key:"23",description:"xnjs"}];
  constructor(private http:HttpClient) { 
    this.http.get('http://localhost:3000/user').subscribe(response=>
    {
      console.log("cdc")
      this.users=response['students']
      console.log(this.users)
    })
  }
  ngOnInit(): void {
  }
    saveUser(e:{userid:number,updated_content:(string)[]})
    {
     
      let data={
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        roleid:0,
      };
      
      let c=0;
         for(let key in data)
          {
            if(key==='roleid')
           data[key]=parseInt(e.updated_content[c]);
           else
           data[key]=e.updated_content[c];
             c+=1;
             
          }
          console.log(data)
      console.log(e.updated_content);
      this.http.put(`http://localhost:3000/user/${e.userid}`,data).subscribe(response=>
       {
         console.log(response)
         // console.log("cdc")
      //   // this.users=response['students']
      //   // console.log(this.users)
      })
     
    }
    deleteUser(e:{userid:number})
    {
      this.http.delete(`http://localhost:3000/user/${e.userid}`).subscribe(response=>
      {
        console.log(response)
        this.http.get('http://localhost:3000/user').subscribe(response=>
    {
      console.log("cdc")
      this.users=response['students']
      console.log(this.users)
    })
     })
    }
}
