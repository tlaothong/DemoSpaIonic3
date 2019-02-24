import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValuesApiProvider } from '../../providers/values-api/values-api';

/**
 * Generated class for the ValuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-value',
  templateUrl: 'value.html',
})
export class ValuePage {

  public items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ValuesApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValuePage');
    this.items = this.api.getValues();
  }

}
