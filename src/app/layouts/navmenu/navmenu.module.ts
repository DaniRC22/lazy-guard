import { NgModule } from '@angular/core';
import { NavmenuComponent } from './navmenu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
      NavmenuComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule
    ],
    exports: [
      NavmenuComponent
    ]
  })
  export class navmenu { }
  