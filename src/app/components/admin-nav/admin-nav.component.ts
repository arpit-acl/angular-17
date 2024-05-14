import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavContentComponent } from './nav-content/nav-content.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../../modules/shared/shared.module';
import { NavigationItems } from './navigation';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [NavContentComponent, SharedModule],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.scss'
})
export class AdminNavComponent implements OnInit{
ngOnInit(): void {
  console.log(this.item);
}
  // public props
  windowWidth = window.innerWidth;
  @Output() NavMobCollapse = new EventEmitter();
  item = NavigationItems
  // public method
  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }
}
