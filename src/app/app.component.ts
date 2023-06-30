import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DevHub';

toggleHeight() {
  var div = document.getElementById('a1d')!;
  div.classList.add('transition');
  div.classList.add('expanded');
  
  setTimeout(()=>{
    div.classList.add('after-a1d');    
  },400)
  setTimeout(()=>{
    console.log('234')
      div.classList.remove('transition');
      div.classList.remove('expanded');
    div.classList.remove('after-a1d');    
  },700);
}

}
