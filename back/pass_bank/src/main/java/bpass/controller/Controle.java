package bpass.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class Controle {

    // @Autowired
    // private AccountsRepo contaQuery;

    // @RequestMapping("/")
    // public String login(HttpSession session) {
    //     System.out.println(session.getAttribute("userID"));

    //     if (session.getAttribute("userID") != null){
    //         return "redirect:vault";
    //     }

    //     return "login";
    // }

    // @RequestMapping("/vault")
    // public String vault(HttpSession session, Model model) {

    //     if (session.getAttribute("userID") == null) {
    //         return "redirect:/";
    //     }

    //     model.addAttribute("username", session.getAttribute("username"));

    //     var contas = this.contaQuery.findByUserId((UUID) session.getAttribute("userID"));

    //     contas.forEach(c -> System.out.println(c.getName()));

    //     model.addAttribute("contas", contas);

    //     return "index";
    // }

    // @RequestMapping("/warns/{aviso}")
    // public String aviso(@PathVariable String aviso) {

    //     return  "warns/"+aviso;
    // }

}
