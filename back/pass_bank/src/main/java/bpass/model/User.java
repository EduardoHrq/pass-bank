package bpass.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Entity(name = "tb_users")
public class User {

    @Id
    @GeneratedValue(generator = "UUI")
    private UUID id;

    private String name;

    @Column(unique = true)
    private String username;
    private String password;

    @OneToMany(mappedBy = "usuario")
    private List<Account> accounts;

    @OneToMany(mappedBy = "usuario")
    private List<Folder> folders;

}
