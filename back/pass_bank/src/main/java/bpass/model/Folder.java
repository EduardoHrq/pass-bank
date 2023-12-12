package bpass.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.UUID;

@Data
@Entity(name = "tb_folders")
public class Folder {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private String name;

    @ManyToOne
    private User usuario;

}
