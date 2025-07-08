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

    private static final String SECRET_PATH = "/etc/secrets/chatbot-tournify-sxev-9978e5cfb5ad.json";
    private static final String CLASSPATH_RESOURCE = "credentials/chatbot-tournify-sxev-9978e5cfb5ad.json";

    @Bean
    public GoogleCredentials googleCredentials() {
        try {
            InputStream inputStream;
            File secretFile = new File(SECRET_PATH);

            System.out.println("🔍 Checking credentials file at: " + secretFile.getAbsolutePath());
            System.out.println("📄 Exists? " + secretFile.exists());
            System.out.println("🔐 Can read? " + secretFile.canRead());

            if (secretFile.exists() && secretFile.canRead()) {
                inputStream = new FileInputStream(secretFile);
                System.out.println("✅ Loaded credentials from /etc/secrets");
            } else {
                inputStream = new ClassPathResource(CLASSPATH_RESOURCE).getInputStream();
                System.out.println("✅ Loaded credentials from classpath (local development)");
            }

            return GoogleCredentials.fromStream(inputStream)
                    .createScoped("https://www.googleapis.com/auth/cloud-platform");

        } catch (IOException e) {
            throw new IllegalStateException("❌ Failed to load Google credentials for Dialogflow", e);
        }
    }
}
