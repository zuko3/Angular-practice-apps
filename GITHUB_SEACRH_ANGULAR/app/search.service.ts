import {EventEmitter,Injectable} from '@angular/core';
import {Headers,Http} from "@angular/http";

@Injectable()
export class Search{
	searchname;
	searchUser=new EventEmitter<any>();
	
	constructor(private http:Http){
		this.searchname="";
	}
	
	getUserList(name){
		return this.http.get('https://api.github.com/search/users?q='+name);
	}
}