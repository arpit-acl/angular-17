// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
// import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
// import { CardComponent } from './components/card/card.component';
// import { DataFilterPipe } from './filter/data-filter.pipe';
// import { SpinnerComponent } from './components/spinner/spinner.component';

// third party
// import { NgScrollbarModule } from 'ngx-scrollbar';
import 'mousetrap';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // CardComponent,
    // BreadcrumbComponent,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    // NgScrollbarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // CardComponent,
    // BreadcrumbComponent,
    // DataFilterPipe,
    // SpinnerComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    RouterModule,
    // NgScrollbarModule
  ],
//   declarations: [DataFilterPipe, SpinnerComponent]
})
export class SharedModule {}
