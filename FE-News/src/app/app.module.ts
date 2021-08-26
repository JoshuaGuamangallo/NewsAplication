import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RemoteComponent } from './remote/remote.component';
import { LocalComponent } from './local/local.component';
import { RemotePlusComponent } from './remote-plus/remote-plus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocalStorageService } from './service/local-storage.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    RemoteComponent,
    LocalComponent,
    RemotePlusComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
