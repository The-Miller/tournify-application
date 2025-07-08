// package com.gestionTSIU.gestiontournois.config;

// import com.google.auth.oauth2.GoogleCredentials;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// import java.io.FileInputStream;
// import java.io.IOException;

// @Configuration
// public class DialogflowConfig {

//     @Bean
//     public GoogleCredentials googleCredentials() throws IOException {
//         return GoogleCredentials.fromStream(new FileInputStream("src/main/resources/credentials/chatbot-tournify-sxev-9978e5cfb5ad.json"))
//                 .createScoped("https://www.googleapis.com/auth/cloud-platform");
//     }
// }

// package com.gestionTSIU.gestiontournois.config;

// import com.google.auth.oauth2.GoogleCredentials;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.core.io.ClassPathResource;

// import java.io.IOException;

// @Configuration
// public class DialogflowConfig {

//     @Bean
//     public GoogleCredentials googleCredentials() throws IOException {
//         return GoogleCredentials.fromStream(
//                 new ClassPathResource("credentials/chatbot-tournify-sxev-9978e5cfb5ad.json").getInputStream()
//         ).createScoped("https://www.googleapis.com/auth/cloud-platform");
//     }
// }   
package com.gestionTSIU.gestiontournois.config;

import com.google.auth.oauth2.GoogleCredentials;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class DialogflowConfig {

    @Bean
    public GoogleCredentials googleCredentials() throws IOException {
        String credentialsPath = System.getenv("GOOGLE_APPLICATION_CREDENTIALS");

        if (credentialsPath != null && !credentialsPath.isEmpty()) {
            // Chargement via le chemin absolu défini dans la variable d'env
            try (FileInputStream serviceAccountStream = new FileInputStream(credentialsPath)) {
                return GoogleCredentials.fromStream(serviceAccountStream)
                        .createScoped("https://www.googleapis.com/auth/cloud-platform");
            }
        } else {
            // Chargement depuis le classpath (local dev)
            try (var resourceStream = new ClassPathResource("credentials/chatbot-tournify-local.json").getInputStream()) {
                return GoogleCredentials.fromStream(resourceStream)
                        .createScoped("https://www.googleapis.com/auth/cloud-platform");
            }
        }
    }
}
