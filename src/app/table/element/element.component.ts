import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Output()saveButtonClicked=new EventEmitter<{userid:number,updated_content:string[]}>();
  @Output()deleteButtonClicked=new EventEmitter<{userid:number}>();
  @Input()entry:{u_id:number,firstname:string,middlename:string,lastname:string,email:string,phone:string,address:string,role_id:string};
   @Input()s:number;
   num:number;
   editable:boolean=false;
   previous_state:string[]=[];
  constructor() { 
  
  }
 ngOnInit()
 {
    
    
 }
 get S()
 {
   return this.s.toString()
 }
  editButton(id:number,a:string)
  {
    this.editable=true
    console.log(a);
    this.num=parseInt(a);
    const row=document.getElementsByClassName('data-row')[this.num] as HTMLTableRowElement;

    const childNodes =row.children;
    console.log(childNodes)
    for(let i:number=0;i<childNodes.length-2;i++)
    {     this.previous_state.push(childNodes[i].textContent)
          childNodes[i].setAttribute('contenteditable','true')
    }
    
    
  }
  saveButton(id:number,a:string)
  {
    this.num=parseInt(a);
    const row=document.getElementsByClassName('data-row')[this.num] as HTMLTableRowElement;
     let updated_content:string[]=[]
    const childNodes =row.children;
    for(let i:number=0;i<childNodes.length-2;i++)
    {
          updated_content.push(childNodes[i].textContent);
    }
    
    this.saveButtonClicked.emit({userid:id,updated_content:updated_content})
    this.editable=false;
    for(let i:number=0;i<childNodes.length-2;i++)
   {
         
         childNodes[i].removeAttribute('contenteditable')
   }
  }
  cancelButton(a:string)
  {
   this.editable=false;
   
   this.num=parseInt(a);
   const row=document.getElementsByClassName('data-row')[this.num] as HTMLTableRowElement;

   const childNodes =row.children;
   console.log(childNodes)
   
   for(let i:number=0;i<childNodes.length-2;i++)
   {
         childNodes[i].textContent=this.previous_state[i];
         childNodes[i].removeAttribute('contenteditable')
   }
  }
  deleteButton(id:number)
  {
    this.deleteButtonClicked.emit({userid:id})
  }
}
