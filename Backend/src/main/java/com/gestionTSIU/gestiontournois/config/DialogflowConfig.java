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

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Configuration
public class DialogflowConfig {

    @Bean
    public GoogleCredentials googleCredentials() throws IOException {
        // 1. Chemin utilisé sur Render (secret monté par volume)
        File file = new File("/etc/secrets/chatbot-tournify-sxev-9978e5cfb5ad.json");
        InputStream inputStream;
        System.out.println("👀 Checking if file exists: " + file.getAbsolutePath());
        System.out.println("✅ Exists? " + file.exists());
        System.out.println("✅ Can read? " + file.canRead());


        if (file.exists() && file.canRead()) {
            inputStream = new FileInputStream(file);
            System.out.println("✅ Credentials loaded from /etc/secrets");
        } else {
            // 2. Sinon, fallback sur les ressources locales pour le dev
            inputStream = new ClassPathResource("credentials/chatbot-tournify-sxev-9978e5cfb5ad.json").getInputStream();
            System.out.println("✅ Credentials loaded from classpath (local dev)");
        }

        return GoogleCredentials.fromStream(inputStream)
                .createScoped("https://www.googleapis.com/auth/cloud-platform");
    }
}
