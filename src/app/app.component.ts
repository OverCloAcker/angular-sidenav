import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-sidenav';
  showFiller = false;

  public isSidenavOpened: boolean = true;
  public isSideNavMaximized: boolean = true;
  public sidenavButtonText: string = 'Close';
  public sidenavSizeButtonText: string = 'Hide Text';

  constructor(
    private matIconRegistry: MatIconRegistry
  ) {
  }

  ngOnInit(): void {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-sharp');
  }

  public toggleSideNav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    switch(this.isSidenavOpened) {
      case true:
        this.sidenavButtonText = 'Close'
        break;
      case false:
        this.sidenavButtonText = 'Open'
        break;
    }
  }

  public toggleSideNavSize() {
    this.isSideNavMaximized = !this.isSideNavMaximized;
    switch(this.isSideNavMaximized) {
      case true:
        this.sidenavSizeButtonText = 'Hide Text'
        break;
      case false:
        this.sidenavSizeButtonText = 'Show Text'
        break;
    }
  }
}
