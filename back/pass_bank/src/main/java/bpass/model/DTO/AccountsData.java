package bpass.model.DTO;

import java.io.Serializable;
import java.util.UUID;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@Component
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AccountsData implements Serializable {
  
  private UUID id;
  private String name;
  private String username;
  private String password;
  private String image;

}
