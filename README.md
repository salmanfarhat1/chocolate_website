GitHub Container Registry (GHCR) Login & Docker Image Push
1. Login to GHCR in Terminal
bash
echo "REMOVED" | docker login ghcr.io -u salmanfarhat1 --password-stdin
2. Build and Push Docker Images
bash
# Build Backend Image
docker build -t ghcr.io/salmanfarhat1/backend:1.0 ./backend

# Build Frontend Image
docker build -t ghcr.io/salmanfarhat1/frontend:1.0 ./frontend

# Push Images to GHCR

docker push ghcr.io/salmanfarhat1/backend:1.0
docker push ghcr.io/salmanfarhat1/frontend:1.0


Kubernetes Setup for Private GHCR Images
3. Create Docker Registry Secret
Allows Kubernetes to pull private images from GHCR:

bash
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=salmanfarhat1 \
  --docker-password=REMOVED \
  --docker-email=salmanfarhat098@gmail.com
4. Deploy Stack
Apply the Kubernetes configuration (stack.yaml):

bash
kubectl apply -f stack.yaml

5. Forward application to localhost  

Import PostgreSQL Dump File
6. Copy and Restore SQL Dump
bash
# Copy dump file into PostgreSQL pod
kubectl cp dump.sql postgres-deploy-758bc54d8d-cpjj5:/tmp/dumpfile.sql

# Enter the pod's shell
kubectl exec -it postgres-deploy-758bc54d8d-cpjj5 -- /bin/bash

# Restore the dump (inside the pod)
psql -U chocolate_admin -d chocolate_db -f /tmp/dumpfile.sql
