import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { GraficosComponent } from './graficos/graficos/graficos.component';
import { EditarComponent } from './editar/editar/editar.component';
import { LoginComponent } from './login/login/login.component';
import { CrearComponent } from './crear/crear/crear.component';
import { BackgroundComponent } from './background/background/background.component';
import { MiInfoComponent } from './mi-info/mi-info/mi-info.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
 import { FormsModule } from '@angular/forms';
  import { ReactiveFormsModule } from '@angular/forms'; 
import { interceptorProvider } from './model/service/interceptor.service';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import {RouterModule} from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    HeaderComponent,
    FooterComponent,
    GraficosComponent,
    EditarComponent,
    LoginComponent,
    CrearComponent,
    BackgroundComponent,
    MiInfoComponent,
    HomeComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot()
    ,HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
     RouterModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
