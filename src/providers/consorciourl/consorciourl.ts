import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ConsorciourlProvider provider.

  See https://angular.io/guide/dependency-showStreets() {
    for (var i = 0; i < this.dbData.length; i++) {
      return this.dbData[i].id;
    }injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ConsorciourlProvider {

  	constructor(public http: HttpClient) {
    console.log('Hello ConsorciourlProvider Provider');
  }

conexionConsorcio(){
   var request;

	var options = { 
	method: 'POST',
  	url: 'https://api.us.apiconnect.ibmcloud.com/app-mobile-consorcio-prod/desarrolladores/obtenervehiculo/getDatos',
  	headers: 
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': 'K0cM5uL0mI4kG1rX3sX3iC0cM4eQ2qU4sC5yC0jS5kC4lN5yL3',
     'x-ibm-client-id': '3ecbfaed-bf13-4304-900d-59c172c64351' },
  body: 
   { header: { token: 'tokentoken' },
     request: { patente: 'AZ9318', rutPagador: '123456789' } 
    },
  json: true };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  		var obj = JSON.stringify(body);

  		

		for (const key of Object.keys(body)) {
		    var a =  body[key];
		    var b =JSON.stringify(a['data']);  
		   
        console.log(b);
		    
		    	
		    
		}

  

}); 
  /*console.log('Success: ', body);	console.log('body: ', body.data[1].Ano_Fab);console.log('body: ', body.data.Ano_Fab);
	console.log('response: ', this.response.json().item));*/

  

}

}

