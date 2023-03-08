
package com.portfolio.dach.controler;

import com.portfolio.dach.entity.Persona;
import com.portfolio.dach.interfaz.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {
@Autowired IPersonaService ipersonaservice;

    /**
     *
     * @return
     */
    @GetMapping("personas/traer")
public List<Persona> getPersona(){
    return ipersonaservice.getPersona();
}

    /**
     *
     * @param persona
     * @return
     */
    @PostMapping("personas/crear")
public String createPersona(@RequestBody Persona persona){
    ipersonaservice.savePersona(persona);
    return "la persona fue creada correctamente";
}

    /**
     *
     * @param id
     * @return
     */
    @DeleteMapping("personas/borrar/{id}")
public String deletePersona(@PathVariable("id") Long id){
    ipersonaservice.deletePersona(id);
    return "la persona fue eliminada correctamente";
}

    /**
     *
     * @param id
     * @param nuevoNombre
     * @param nuevoApellido
     * @param nuevoImg
     * @return
     */
    @PutMapping("personas/editar/{id}")
public Persona editPersona(@PathVariable("id") Long id,
@RequestParam("nombre") String nuevoNombre, 
@RequestParam("apellido") String nuevoApellido,
@RequestParam("img") String nuevoImg){
    Persona persona = ipersonaservice.findPersona(id);
    persona.setNombre(nuevoNombre);
    persona.setApellido(nuevoApellido);
    persona.setImg(nuevoImg);
    ipersonaservice.savePersona(persona);
    return persona;
}
@GetMapping("personas/traer/perfil")
public Persona findPersona(){
    return ipersonaservice.findPersona((long)1);
}
}
