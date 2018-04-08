import { Component, OnInit,ViewChild,ContentChild } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Search} from "../search.service";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  constructor(private searchsrv:Search) { }
  
  ngOnInit() {
  }
  
  changename(e){
	let val=e.target.value;
	if(val==''){
		this.searchsrv.searchname=val;
		this.searchsrv.searchUser.emit(this.searchsrv.searchname);
	}
  }
  
  onSubmitForm(f:NgForm){
	this.searchsrv.searchname=f.value.user;
	this.searchsrv.searchUser.emit(this.searchsrv.searchname);
  }

}
