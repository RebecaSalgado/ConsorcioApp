import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'pagina2', segment:'pagina-2/:param'})
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  patente:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  	
  	this.patente = navParams.get('param');
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  goback():void{

  this.navCtrl.pop();

  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Seguro Auto Total',
    subTitle: 'EL mejor seguro que encontramos para ti es el siguiente: "Seguro auto total"',
    buttons: ['Aceptar']
    
  });
  alert.present();
	}

}
