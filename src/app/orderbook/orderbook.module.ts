import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderbookComponent } from './orderbook.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [OrderbookComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatTableModule
  ],
  exports: [OrderbookComponent],
})
export class OrderbookModule { }
