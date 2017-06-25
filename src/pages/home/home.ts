import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Comment, User } from '../../models/chat'; // 追加
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; // 追加
import { AlertController } from 'ionic-angular';  // 追加

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  CURRENT_USER = new User(1, 'Tanaka Jiro'); // 自分のUser情報を追加
  ANOTHER_USER = new User(2, 'Suzuki Taro'); // 相手のUser情報を追加

  public FB_comments: FirebaseListObservable<any[]>; // 追加
  public content = '';
  public comments: Comment[] = [];  // 更新
  public current_user = this.CURRENT_USER;

  // DI（依存性注入する機能を指定）
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public alertCtrl: AlertController) {
    this.FB_comments = db.list('/comments'); // 追加
    this.FB_comments.subscribe((snapshots: any[]) => {
      this.comments = []; // コメントを初期化
      snapshots.forEach((snapshot: any) => {
        // 取得したデータを反映
        this.comments.push(new Comment(snapshot.user, snapshot.content).setData(snapshot));
      });
    });
  }

  // 新しいコメントを追加
  addComment(comment: string) {
     if (comment) {
       this.FB_comments.push(new Comment(this.current_user, comment)); // 更新
       this.content = '';
     }
  }

  // 編集フィールドの切り替え
  toggleEditComment(num: number) {
    this.comments[num].edit_flag = (this.comments[num].edit_flag) ? false : true;
  }

  // コメントを更新する
  saveEditComment(num: number, key: string) {
    this.FB_comments.update(key, {
      content: this.comments[num].content, 
      date: this.comments[num].date
    });
    this.comments[num].edit_flag = false;
  }

  // コメントをリセットする
  resetEditComment(num: number) {
    this.comments[num].content = '';
  }

  // コメントを削除する
  deleteComment(key: string) {
    this.FB_comments.remove(key);
  }

}
