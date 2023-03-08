import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { GraficosComponent } from './graficos/graficos/graficos.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { EditarComponent } from './editar/editar/editar.component';
import { DescripcionComponent } from './descripcion/descripcion/descripcion.component';
import { LoginComponent } from './login/login/login.component';
import { LogedComponent } from './loged/loged/loged.component';
import { CrearComponent } from './crear/crear/crear.component';
import { BackgroundComponent } from './background/background/background.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { MisEstudiosComponent } from './mis-estudios/mis-estudios/mis-estudios.component';
import { MiInfoComponent } from './mi-info/mi-info/mi-info.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GraficosComponent,
    ExperienceComponent,
    EditarComponent,
    DescripcionComponent,
    LoginComponent,
    LogedComponent,
    CrearComponent,
    BackgroundComponent,
    EstudiosComponent,
    MisEstudiosComponent,
    MiInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot()
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
