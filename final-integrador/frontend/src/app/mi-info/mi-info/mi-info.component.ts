import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/model/service/persona.service';

@Component({
  selector: 'app-mi-info',
  templateUrl: './mi-info.component.html',
  styleUrls: ['./mi-info.component.css']
})
export class MiInfoComponent implements OnInit {
persona: persona = new persona ("","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
