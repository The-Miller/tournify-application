package com.gestionTSIU.gestiontournois.controller;

import com.gestionTSIU.gestiontournois.model.Utilisateur;
import com.gestionTSIU.gestiontournois.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/utilisateurs")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUtilisateur(@RequestBody Utilisateur utilisateur) {
        try {
            utilisateur.setRole("USER");
            Utilisateur newUser = utilisateurService.createUtilisateur(utilisateur);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Erreur lors de l'inscription : " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUtilisateur(@RequestBody Utilisateur utilisateur) {
        System.out.println("Tentative de connexion pour l'email : " + utilisateur.getEmail());
        try {
            Utilisateur existingUser = utilisateurService.authenticate(utilisateur.getEmail(), utilisateur.getPassword());
            if (existingUser != null) {
                String token = utilisateurService.generateToken(existingUser);
                System.out.println("Connexion réussie pour l'utilisateur : " + utilisateur.getEmail());
                return ResponseEntity.ok(new LoginResponse(existingUser, token));
            } else {
                System.out.println("Échec de la connexion pour l'email : " + utilisateur.getEmail());
                return ResponseEntity.status(401).body("Échec de la connexion. Informations de connexion invalides.");
            }
        } catch (Exception e) {
            System.err.println("Erreur lors de la connexion : " + e.getMessage());
            return ResponseEntity.badRequest().body("Erreur lors de la connexion : " + e.getMessage());
        }
    }

    @GetMapping
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurService.getAllUtilisateurs();
    }

    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.getUtilisateurById(id);
    }

    @PutMapping("/{id}")
    public Utilisateur updateUtilisateur(@PathVariable Long id, @RequestBody Utilisateur utilisateur) {
        return utilisateurService.updateUtilisateur(id, utilisateur);
    }

    @DeleteMapping("/{id}")
    public void deleteUtilisateur(@PathVariable Long id) {
        utilisateurService.deleteUtilisateur(id);
    }

    @PostMapping("/create-with-role")
    public ResponseEntity<Utilisateur> createUser(@RequestBody Utilisateur user) {
        Utilisateur createdUser = utilisateurService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    static class LoginResponse {
        private Utilisateur user;
        private String token;

        public LoginResponse(Utilisateur user, String token) {
            this.user = user;
            this.token = token;
        }

        public Utilisateur getUser() {
            return user;
        }

        public String getToken() {
            return token;
        }
    }
}