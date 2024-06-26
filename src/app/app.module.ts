import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { AlimentacionModule } from './alimentacion/alimentacion.module';
import { SharedModule } from './shared/shared.module';
import { EjercicioModule } from './ejercicios/ejercicios.module';
import { ObjetivosModule } from './objetivos/objetivos.module';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule,
    AlimentacionModule,
    EjercicioModule,
    ObjetivosModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
