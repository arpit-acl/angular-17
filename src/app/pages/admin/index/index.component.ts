import { Component } from '@angular/core';
import { AdminNavComponent } from '../../../components/admin-nav/admin-nav.component';
import { LocationStrategy, NgClass, PlatformLocation } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConfigurationComponent } from '../../../components/configuration/configuration.component';
import { NavBarComponent } from '../../../components/admin-nav/nav-bar/nav-bar.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [AdminNavComponent, NgClass, RouterOutlet, ConfigurationComponent, NavBarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  // public props
  navCollapsed!: boolean;
  navCollapsedMob: boolean;
  windowWidth: number;

  // constructor
  constructor(
    private platformLocation: PlatformLocation,
    private locationStrategy: LocationStrategy
  ) {
    let current_url = this.getCurrentPath();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.getCurrentPath();
    }
    this.windowWidth = window.innerWidth;
    this.navCollapsedMob = false;
  }

  // public method
  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }


  getCurrentPath = (): string  => {
    return this?.platformLocation.pathname;
  }
}
