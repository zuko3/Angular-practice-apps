import { Component,OnInit,ViewChild,ContentChild} from '@angular/core';
import { FormGroup,FormControl,FormArray } from "@angular/forms";
import {Search} from "./search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
 constructor(private searchServ:Search){
 }
 ngOnInit(){
 }

}
