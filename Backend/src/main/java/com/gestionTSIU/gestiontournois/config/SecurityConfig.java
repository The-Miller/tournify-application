    // package com.gestionTSIU.gestiontournois.config;

    // import org.springframework.context.annotation.Bean;
    // import org.springframework.context.annotation.Configuration;
    // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
    // import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
    // import org.springframework.security.config.http.SessionCreationPolicy;
    // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    // import org.springframework.security.web.SecurityFilterChain;
    // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
    // import org.springframework.web.cors.CorsConfiguration;
    // import org.springframework.web.cors.CorsConfigurationSource;
    // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

    // @Configuration
    // @EnableWebSecurity
    // public class SecurityConfig {

    //     @Bean
    //     public BCryptPasswordEncoder passwordEncoder() {
    //         return new BCryptPasswordEncoder();
    //     }

    //     @Bean
    //     public JwtAuthenticationFilter jwtAuthenticationFilter(JwtConfig jwtConfig) {
    //         return new JwtAuthenticationFilter(jwtConfig);
    //     }

    //     @Bean
    //     public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthenticationFilter jwtAuthenticationFilter) throws Exception {
    //         http
    //             .csrf(csrf -> csrf.disable())
    //             .cors(cors -> cors.configurationSource(corsConfigurationSource()))
    //             .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
    //             .authorizeHttpRequests(auth -> auth
    //                 .requestMatchers("/api/utilisateurs/create-with-role", 
    //                             "/api/utilisateurs/login", 
    //                             "/api/utilisateurs/register", 
    //                             "/api-docs/**", 
    //                             "/swagger-ui/**",
    //                             "/v3/api-docs/**",
    //                             "/swagger-ui.html").permitAll()
    //                 .requestMatchers("/api/utilisateurs").hasRole("ADMINISTRATEUR")
    //                 .requestMatchers("/api/matches/**").permitAll()

    //                 .anyRequest().authenticated()
    //             )
    //             .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    //         return http.build();
    //     }

    //     @Bean
    //     public CorsConfigurationSource corsConfigurationSource() {
    //         CorsConfiguration configuration = new CorsConfiguration();
    //         configuration.addAllowedOrigin("http://localhost:5173");
    //         configuration.addAllowedMethod("*");
    //         configuration.addAllowedHeader("*");
    //         configuration.setAllowCredentials(true);
    //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //         source.registerCorsConfiguration("/**", configuration);
    //         return source;
    //     }
    // }

package com.gestionTSIU.gestiontournois.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(JwtConfig jwtConfig) {
        return new JwtAuthenticationFilter(jwtConfig);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthenticationFilter jwtAuthenticationFilter) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/utilisateurs/create-with-role", 
                                 "/api/utilisateurs/login", 
                                 "/api/utilisateurs/register", 
                                 "/api-docs/**", 
                                 "/swagger-ui/**",
                                 "/v3/api-docs/**",
                                 "/swagger-ui.html").permitAll()
                .requestMatchers("/api/utilisateurs/**").hasRole("ADMINISTRATEUR")
                .requestMatchers("/api/matches/**", "/api/users/**","/api/teams/**", "/api/tournaments/**", "/api/reservations/**", "/api/paiements/**", "/api/membres/**").permitAll()
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:[*]", "https://your-production-domain.com"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
