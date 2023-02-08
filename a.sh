cp .env.example .env
echo "SITE_URL=$CODESPACE_NAME-3001" >> .env
echo "API_URL=$CODESPACE_NAME-8000" >> .env
echo "GITPOD_WORKSPACE_URL=$CODESPACE_NAME-3001" >> .env
chmod +x generate-open-api.sh
api_url=$CODESPACE_NAME-8000 ./generate-open-api.sh
sudo docker-compose cp vue-app-dev:/app/node_modules ./client-ui/
sudo docker-compose cp server-dev:/app/node_modules ./server/
