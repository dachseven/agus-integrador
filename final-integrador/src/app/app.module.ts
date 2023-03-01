import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrarComponent } from './component/borrar/borrar.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { GraficosComponent } from './graficos/graficos/graficos.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { EditarComponent } from './editar/editar/editar.component';
import { DescripcionComponent } from './descripcion/descripcion/descripcion.component';
import { LoginComponent } from './login/login/login.component';
import { LogedComponent } from './loged/loged/loged.component';
import { CrearComponent } from './crear/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrarComponent,
    HeaderComponent,
    FooterComponent,
    GraficosComponent,
    ExperienceComponent,
    EditarComponent,
    DescripcionComponent,
    LoginComponent,
    LogedComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
