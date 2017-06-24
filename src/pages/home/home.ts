import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comment } from '../../models/chat'; // 追加

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public content = '';
  /*
  const COMMENTS: Comment[] = [
    { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
  ]
  */

  comments:[{ name: string, content: string }] = [
    { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
  ]

  constructor(public navCtrl: NavController) {

  }

}
