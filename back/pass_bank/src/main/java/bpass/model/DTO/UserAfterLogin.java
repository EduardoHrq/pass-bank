package bpass.model.DTO;

import java.util.UUID;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class UserAfterLogin {
  
  private UUID id;
  private String username;

}
