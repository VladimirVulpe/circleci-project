import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'circleci-project';
  btnVal = 'hello world'

  public setButtonText(newTitle: string) {
    this.btnVal = newTitle;
  }
}
