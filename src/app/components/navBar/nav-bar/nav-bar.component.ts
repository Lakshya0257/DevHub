import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() navigate = new EventEmitter<void>();

  navigation() {
    // Function to be called when the button is clicked in the child component
    this.navigate.emit();
  }
}
