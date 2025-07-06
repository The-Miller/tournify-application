package com.gestionTSIU.gestiontournois.config;

import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.security.Key;
import java.util.Base64;

@Configuration
public class JwtConfig {

    @Value("${jwt.secret:myDefaultSecretKeyForJwtThatIsLongEnoughForHmacSha256}")
    private String secretKey;

    @Value("${jwt.expiration:86400000}")
    private int expiration;

    @Bean
    public Key jwtSigningKey() {
        // Utiliser directement la clé secrète sans double encodage
        return Keys.hmacShaKeyFor(secretKey.getBytes());
    }

    public String getSecretKey() {
        return secretKey;
    }

    public int getExpiration() {
        return expiration;
    }

    @PostConstruct
    public void init() {
        System.out.println("Loaded Secret Key: " + secretKey);
        System.out.println("Key length: " + secretKey.getBytes().length);
    }
}