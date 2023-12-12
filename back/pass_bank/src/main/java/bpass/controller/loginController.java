package bpass.controller;

import at.favre.lib.crypto.bcrypt.BCrypt;
import bpass.model.User;
import bpass.model.DTO.UserAfterLogin;
import bpass.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class loginController {

    @Autowired
    private UserRepository userQuery;

    @Autowired
    private UserAfterLogin logedUser;

    @PostMapping("/logar")
    public ResponseEntity<UserAfterLogin> logar(@RequestBody User usuario, HttpSession session) {

        System.out.println(usuario.getUsername());

        var foundedUser = this.userQuery.findByUsername(usuario.getUsername());

        if (foundedUser == null) {
       	    logedUser.setId(null);
            logedUser.setUsername(null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(logedUser);
        }

        var passVerify = BCrypt.verifyer().verify(usuario.getPassword().toCharArray(), foundedUser.getPassword());

        if (!passVerify.verified) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        session.setAttribute("userID", foundedUser.getId());
        session.setAttribute("username", foundedUser.getUsername());

        logedUser.setId(foundedUser.getId());
        logedUser.setUsername(foundedUser.getUsername());

        return ResponseEntity.status(HttpStatus.OK).body(logedUser);
    }

    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();

        return "redirect:/";
    }

}
