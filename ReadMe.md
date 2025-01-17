# VPN Service

## Overview

This repository contains a VPN service built using a microservices architecture. It includes user authentication, payment integration, and VPN connectivity. The project uses Node.js, Express, Kafka, MongoDB, Docker, Kubernetes, and React.

## Microservices

1. **User Service**: Handles user registration, authentication, and profile management.
2. **Payment Service**: Manages payments via PayU integration.
3. **VPN Service**: Manages VPN connections.
4. **API Gateway**: Routes requests to appropriate services.
5. **Frontend**: A React-based frontend for user interaction.

## Prerequisites

- Docker
- Kubernetes cluster (GKE, EKS, or AKS)
- Docker Hub account

## Build and Push Docker Images

1. Build Docker images:

    ```bash
    cd user-service
    docker build -t your-dockerhub-username/user-service:latest .
    cd ../payment-service
    docker build -t your-dockerhub-username/payment-service:latest .
    cd ../vpn-service
    docker build -t your-dockerhub-username/vpn-service:latest .
    cd ../api-gateway
    docker build -t your-dockerhub-username/api-gateway:latest .
    cd ../vpn-frontend
    docker build -t your-dockerhub-username/vpn-frontend:latest .
    ```

2. Push Docker images to Docker Hub:

    ```bash
    docker push your-dockerhub-username/user-service:latest
    docker push your-dockerhub-username/payment-service:latest
    docker push your-dockerhub-username/vpn-service:latest
    docker push your-dockerhub-username/api-gateway:latest
    docker push your-dockerhub-username/vpn-frontend:latest
    ```

## Deploy to Kubernetes

1. Set up and authenticate your Kubernetes cluster (GKE, EKS, or AKS).

2. Apply Kubernetes manifests:

    ```bash
    cd D:\vpn\K8s
    kubectl apply -f kafka-deployment.yaml
    kubectl apply -f user-service-deployment.yaml
    kubectl apply -f payment-service-deployment.yaml
    kubectl apply -f vpn-service-deployment.yaml
    kubectl apply -f api-gateway.yaml
    ```

3. Expose the frontend service and check the external IP:

    ```bash
    kubectl get services
    ```

## Accessing the Application

Open a web browser and navigate to the external IP of the `vpn-frontend` service.

## License

This project is licensed under the MIT License.
#   E a s y V p n  
 