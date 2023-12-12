package bpass.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * Configurando o CORS manualmente
 */

@Configuration
public class CorsConfig {

  @Bean
  public CorsFilter corsFilter() {
  UrlBasedCorsConfigurationSource source = new
  UrlBasedCorsConfigurationSource();
  CorsConfiguration config = new CorsConfiguration();

  // Permitir solicitações de qualquer origem
  config.addAllowedOrigin("*");

  // Permitir solicitações com os métodos HTTP desejados
  config.addAllowedMethod("GET");
  config.addAllowedMethod("POST");
  config.addAllowedMethod("PUT");
  config.addAllowedMethod("DELETE");

  // Permitir cabeçalhos específicos
  config.addAllowedHeader("Origin");
  config.addAllowedHeader("Content-Type");
  config.addAllowedHeader("Accept");
  config.addAllowedHeader("Authorization");

  // Configurar a validade máxima do CORS
  config.setMaxAge((long) 3600);

  source.registerCorsConfiguration("/**", config);
  return new CorsFilter(source);
  }
}
