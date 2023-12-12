package bpass.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.UUID;

@Data
@Entity(name = "tb_accounts")
public class Account implements Serializable {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private String image;
    private String name;
    private String username;
    private String password;

    @ManyToOne
    private User usuario;

}
