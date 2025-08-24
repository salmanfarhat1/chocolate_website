#!/bin/bash

# deployInPods.sh
# Restarts frontend and backend deployments in Kubernetes

set -e  # exit if any command fails

echo "🚀 Restarting frontend pods..."
kubectl rollout restart deployment frontend-deploy

echo "🚀 Restarting backend pods..."
kubectl rollout restart deployment backend-deploy

echo "✅ Done! Pods are being restarted with the latest images."
