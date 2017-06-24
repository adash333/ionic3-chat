import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comment, User } from '../../models/chat'; // 追加

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  CURRENT_USER = new User(1, 'Tanaka Jiro'); // 自分のUser情報を追加
  ANOTHER_USER = new User(2, 'Suzuki Taro'); // 相手のUser情報を追加

  COMMENTS: Comment[] = [ // クラスを元にコメントを作成
    new Comment(this.ANOTHER_USER, 'Suzukiの１つ目のコメントです。'),
    new Comment(this.ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
    new Comment(this.CURRENT_USER, 'Tanakaの１つ目のコメントです。'),
    new Comment(this.ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
    new Comment(this.CURRENT_USER, 'Tanakaの2つ目のコメントです。')
  ];

  public content = '';
  public comments = this.COMMENTS;
  public current_user = this.CURRENT_USER;

  // 新しいコメントを追加
  addComment(comment: string) {
     if (comment) {
       this.comments.push(new Comment(this.current_user, comment));
     }
  }

  /*
  const COMMENTS: Comment[] = [
    { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
  ]
  */
  /*
  comments:[{ name: string, content: string }] = [
    { name: "Suzuki Taro",  content: "１つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "２つ目のコメントです。"},
    { name: "Suzuki Taro",  content: "３つ目のコメントです。"}
  ]
  */

  constructor(public navCtrl: NavController) {

  }

}
