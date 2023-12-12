package bpass.controller;

import at.favre.lib.crypto.bcrypt.BCrypt;
import bpass.model.User;
import bpass.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CadController {

    @Autowired
    private UserRepository userQuery;

    // @RequestMapping("/cadastro")
    // public String toCadatro() {

    //     return "cadastro";
    // }

    // @RequestMapping("/cadastro/0")
    // public String tryAgainCadatro(Model model) {
    //     model.addAttribute("erro", "erro");
    //     return "cadastro";
    // }

    @PostMapping("/user/saves")
    public ResponseEntity<String> saveUser(@RequestBody User usuario) {
        var exists = userQuery.findByUsername(usuario.getUsername());

        if (exists != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuario já existe");
            // return "redirect:/cadastro/0";
        }

        var passwordHashred = BCrypt.withDefaults().hashToString(12, usuario.getPassword().toCharArray());

        usuario.setPassword(passwordHashred);

        this.userQuery.save(usuario);

        return ResponseEntity.status(HttpStatus.CREATED).body("OK");
    }

}
