import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { TextInputComponent } from './exercises/text-input/text-input.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaComponent } from './exercises/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { MathComponent } from './exercises/math/math.component';
import { SqlConsultComponent } from './exercises/sql-consult/sql-consult.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    HeaderComponent,
    AboutComponent,
    TextInputComponent,
    ConsultaComponent,
    MathComponent,
    SqlConsultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
