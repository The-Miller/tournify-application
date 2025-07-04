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
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    // Inscription d'un utilisateur
    @PostMapping("/register")
    public ResponseEntity<?> registerUtilisateur(@RequestBody Utilisateur utilisateur) {
        try {
            // Définir le rôle automatiquement sur "Administrateur"
            utilisateur.setRole("Administrateur");

            // Enregistrer l'utilisateur
            Utilisateur newUser = utilisateurService.createUtilisateur(utilisateur);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            e.printStackTrace(); // Log complet de l'erreur
            return ResponseEntity.badRequest().body("Erreur lors de l'inscription : " + e.getMessage());
        }
    }

    // Connexion d'un utilisateur
    @PostMapping("/login")
    public ResponseEntity<?> loginUtilisateur(@RequestBody Utilisateur utilisateur) {
        try {
            Utilisateur existingUser = utilisateurService.authenticate(utilisateur.getEmail(), utilisateur.getPassword());
            if (existingUser != null) {
                // Vérifiez le rôle de l'utilisateur et renvoyez le rôle approprié
                return ResponseEntity.ok(existingUser);
            } else {
                return ResponseEntity.status(401).body("Échec de la connexion. Informations de connexion invalides.");
            }
        } catch (Exception e) {
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

    // Créer un utilisateur avec un rôle spécifique
    @PostMapping("/create-with-role")
    public ResponseEntity<Utilisateur> createUser(@RequestBody Utilisateur user) {
        // Logique pour créer un utilisateur avec le rôle spécifié
        Utilisateur createdUser = utilisateurService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
}

