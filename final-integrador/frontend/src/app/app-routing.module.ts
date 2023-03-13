import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
