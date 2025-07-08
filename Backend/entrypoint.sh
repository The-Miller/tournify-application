#!/bin/bash
set -e

SECRET_PATH="/etc/secrets/chatbot-tournify-sxev-9978e5cfb5ad.json"

echo "🔍 Checking if secret file exists at $SECRET_PATH"
if [ -f "$SECRET_PATH" ]; then
    echo "📄 Exists"
    echo "🔐 Changing permissions to be readable"
    chmod 644 "$SECRET_PATH"
else
    echo "⚠️ Secret file not found at $SECRET_PATH"
fi

echo "🚀 Starting the application..."
exec java -jar /app/app.jar
