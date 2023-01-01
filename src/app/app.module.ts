import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChessComponent } from './chess/chess.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Board } from './classes/Board';
import { Spot } from './classes/Spot';
import { HelperService } from './service/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    ChessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [NgbModalConfig, NgbModal, Board, HelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
