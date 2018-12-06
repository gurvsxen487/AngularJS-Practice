import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	userName:string = "gurvsxen487";
	response:string = "";
	constructor(private http: HttpClient) {
	}
	ngOnInIt() {
	}

	search() {
		this.http.get('https://api.github.com/users/'+this.userName)
		.subscribe((response)=>{
			this.response = response;
			console.log(response);
		})
	}


}
