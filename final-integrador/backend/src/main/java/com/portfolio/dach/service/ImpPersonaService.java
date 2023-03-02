
package com.portfolio.dach.service;

import com.portfolio.dach.entity.Persona;
import com.portfolio.dach.interfaz.IPersonaService;
import com.portfolio.dach.repository.IPersonaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService{
@Autowired IPersonaRepository ipersonarepository;
    
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> Persona = ipersonarepository.findAll();
        return Persona;
    }

    @Override
    public void savePersona(Persona persona) {
     ipersonarepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
      ipersonarepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonarepository.findById(id).orElse(null);
                return persona;
    }
    
    
}
