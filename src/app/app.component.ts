import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'circleci-project';
  _btnVal = 'hello world'

  public setButtonText(newTitle: string) {
    this._btnVal = newTitle;
  }

  public get btnVal() {
    return this._btnVal;  
}
}
