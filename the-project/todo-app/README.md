# Todo-App

Create the cluster with `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`

The application, service, and ingress can be deployed with `kubectl apply -f manifests`

## Server

Deploy with `kubectl apply -f manifests/deployment.yaml`

Once service and ingress are deployed, the application can be accessed at `http://localhost:8081`

## Service

Deploy with `kubectl apply -f manifests/service.yaml`

## Ingress

Deploy with `kubectl apply -f manifests/ingress.yaml`
