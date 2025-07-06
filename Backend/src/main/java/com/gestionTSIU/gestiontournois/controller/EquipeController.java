package com.gestionTSIU.gestiontournois.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.gestionTSIU.gestiontournois.model.Equipe;
import com.gestionTSIU.gestiontournois.model.JsonViews;
import com.gestionTSIU.gestiontournois.model.Membre;
import com.gestionTSIU.gestiontournois.service.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:5173"})
@RestController
@RequestMapping("/api/teams")
public class EquipeController {

    @Autowired
    private EquipeService equipeService;

    @GetMapping
    @JsonView(JsonViews.EquipeWithTournoi.class)
    public List<Equipe> getAllEquipes() {
        List<Equipe> equipes = equipeService.getAllEquipes();
        return equipes;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipe> getEquipeById(@PathVariable Long id) {
        Equipe equipe = equipeService.findById(id);
        if (equipe == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(equipe);
    }

    @PostMapping
    public ResponseEntity<?> createEquipe(@RequestBody Equipe equipe) {
        if (equipe.getNom() == null || equipe.getNom().isEmpty() ||
                equipe.getCategorie() == null || equipe.getCategorie().isEmpty() ||
                equipe.getTournoi() == null) {
            return ResponseEntity.badRequest().body("Tous les champs sont obligatoires");
        }

        try {
            if (equipe.getTournoi() == null) {
                return ResponseEntity.badRequest().body("Le tournoi est obligatoire");
            }

            Equipe newEquipe = equipeService.createEquipe(equipe);
            return ResponseEntity.ok(newEquipe);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la création de l'équipe : " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEquipe(@PathVariable Long id, @RequestBody Equipe equipeDetails) {
        try {
            Equipe updatedEquipe = equipeService.updateEquipe(id, equipeDetails);
            if (updatedEquipe == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Équipe non trouvée");
            }
            return ResponseEntity.ok(updatedEquipe);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la mise à jour de l'équipe : " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipe(@PathVariable Long id) {
        equipeService.deleteEquipe(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{teamId}/members")
    public ResponseEntity<List<Membre>> getTeamMembers(@PathVariable Long teamId) {
        List<Membre> members = equipeService.getMembersByTeamId(teamId);
        if (members != null) {
            return ResponseEntity.ok(members);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{teamId}/members")
    public ResponseEntity<?> addMemberToTeam(@PathVariable Long teamId, @RequestBody Membre membre) {
        try {
            Membre newMembre = equipeService.addMemberToTeam(teamId, membre);
            return ResponseEntity.ok(newMembre);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de l'ajout du membre : " + e.getMessage());
        }
    }

    @PutMapping("/{teamId}/members/{memberId}")
    public ResponseEntity<?> updateMember(@PathVariable Long teamId, @PathVariable Long memberId, @RequestBody Membre membreDetails) {
        try {
            Membre updatedMembre = equipeService.updateMemberInTeam(teamId, memberId, membreDetails);
            return ResponseEntity.ok(updatedMembre);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la modification du membre : " + e.getMessage());
        }
    }

    @DeleteMapping("/{teamId}/members/{memberId}")
    public ResponseEntity<?> deleteMember(@PathVariable Long teamId, @PathVariable Long memberId) {
        try {
            equipeService.deleteMemberFromTeam(teamId, memberId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de la suppression du membre : " + e.getMessage());
        }
    }

    // Nouvel endpoint pour récupérer un membre spécifique par ID
    @GetMapping("/{teamId}/members/{memberId}")
    public ResponseEntity<Membre> getMemberById(@PathVariable Long teamId, @PathVariable Long memberId) {
        try {
            Membre membre = equipeService.getMemberById(teamId, memberId);
            if (membre == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            return ResponseEntity.ok(membre);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}