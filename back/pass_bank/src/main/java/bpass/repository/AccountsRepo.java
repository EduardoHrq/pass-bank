package bpass.repository;

import bpass.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface AccountsRepo extends JpaRepository<Account, UUID> {

    @Query("SELECT c FROM tb_accounts c WHERE usuario.id = ?1")
    List<Account> findByUserId(UUID userId);
}
