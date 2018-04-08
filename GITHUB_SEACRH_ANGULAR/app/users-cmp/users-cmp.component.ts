import { Component, OnInit } from '@angular/core';
import {Search} from "../search.service";
@Component({
  selector: 'app-users-cmp',
  templateUrl: './users-cmp.component.html',
  styleUrls: ['./users-cmp.component.css']
})
export class UsersCmpComponent implements OnInit {

  listUsers;
  loading:boolean;
  error:boolean;
  userDeatils;
  constructor(private searchServ:Search) {
	this.listUsers=null;
	this.loading=false;
	this.error=false;
	this.userDeatils=null;
  }
  ngOnInit() {
	this.searchServ.searchUser.subscribe((name)=>{
		this.loading=true;
		this.error=false;
		this.listUsers=null;
		if(name.trim()!=''){
			this.searchServ.getUserList(name).subscribe((response)=>{
				let res=response.json();
				this.loading=false;
				this.error=false;
				this.listUsers=res.items;
				
			},
			(error)=>{
				this.loading=false;
				this.error=true;
				this.listUsers=null;
			});
		}else{
			this.loading=false;
			this.error=false;
			this.listUsers=null;
			this.userDeatils=null;
		}
		
	})
  }
  
  showDetails(objDeatils){
	this.userDeatils=objDeatils;
  }

}
