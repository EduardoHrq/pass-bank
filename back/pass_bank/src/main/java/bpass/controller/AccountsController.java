package bpass.controller;

import java.util.List;

import bpass.model.Account;
import bpass.model.DTO.AccountsData;
import bpass.repository.AccountsRepo;
import bpass.repository.UserRepository;
import bpass.utils.CopyObject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class AccountsController {

    @Autowired
    private UserRepository userQuery;

    @Autowired
    private AccountsRepo contaQuery;

    @Autowired
    private AccountsData accountsData;

    @PostMapping("/data/saves/accounts")
    public ResponseEntity<AccountsData> saveAccount(@RequestBody Account conta, HttpServletRequest request)
            throws IllegalAccessException {

        System.out.println(conta.toString());

        System.out.println(request.getHeader("Authorization"));

        var usuario = this.userQuery.findById(UUID.fromString(request.getHeader("Authorization")));

        System.out.println(usuario.isPresent());

        conta.setUsuario(usuario.get());

        if (conta.getImage() == null) {
            conta.setImage("https://img.icons8.com/?size=512&id=q1fuILsG4z8D&format=png&color=60A5FA");
        }

        this.contaQuery.save(conta);

        // accountsData.setId(conta.getId());
        // accountsData.setName(conta.getName());
        // accountsData.setUsername(conta.getUsername());
        // accountsData.setPassword(conta.getPassword());
        // accountsData.setImage(conta.getImage());

        CopyObject.copiar(conta, accountsData);

        return ResponseEntity.status(HttpStatus.CREATED).body(accountsData);
    }

    @GetMapping("/accounts")
    public ResponseEntity<List<AccountsData>> contas(HttpServletRequest request) {

        var userAccounts = this.contaQuery.findByUserId(UUID.fromString(request.getHeader("Authorization")));

        // var userAccounts = this.contaQuery.findAll();

        // System.out.println(session.getAttribute("userID"));

        List<AccountsData> contas = userAccounts.stream().map(conta -> {

            accountsData = null;

            accountsData = new AccountsData();
            try {
                CopyObject.copiar(conta, accountsData);
            } catch (IllegalAccessException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            return accountsData;

        }).toList();

        // System.out.println(contas.size());

        contas.forEach(c -> System.out.println(c.getName()));

        return ResponseEntity.ok(contas);

    }

}
