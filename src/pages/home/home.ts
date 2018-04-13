import { Component } from '@angular/core';
import { NavController,  IonicPage, NavParams, ActionSheetController} from 'ionic-angular';
import { ConsorciourlProvider } from '../../providers/consorciourl/consorciourl';
import {Pagina2Page} from '../pagina2/pagina2'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   providers: [ConsorciourlProvider]
})
export class HomePage {
	

 constructor(public navCtrl: NavController,public navParams: NavParams, public consorciourlProvider:ConsorciourlProvider ) {
 	this.getDataConsorcio();
  	
  }

 	

  goPagina2():void{
  	
 	this.navCtrl.push('pagina2', { param: 'adbdksk' });
 	}

 	getDataConsorcio(){
 	    this.consorciourlProvider.conexionConsorcio();
 		
 	}

   	saveData(){
   		
   		
   		
   	}

   	
 
  }


