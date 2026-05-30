#!/usr/bin/env bash
set -euo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/opt/portfolio-personal}"
SERVICE_NAME="${SERVICE_NAME:-portfolio}"

cd "$DEPLOY_PATH"

echo "Pulling latest code from origin/master..."
git fetch origin master
git pull --ff-only origin master

echo "Rebuilding and restarting ${SERVICE_NAME}..."
docker compose up -d --build "$SERVICE_NAME"

echo "Deployment complete."
docker compose ps "$SERVICE_NAME"
