import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { TeardownCleanObservableComponent } from './teardown-clean-observable/teardown-clean-observable.component';

@NgModule({
  declarations: [		
    AppComponent,
      OperatorsComponent,
      TeardownCleanObservableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
