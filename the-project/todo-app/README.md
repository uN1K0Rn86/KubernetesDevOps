# The Project

Create the cluster with `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`

## Server

Deploy with `kubectl apply -f manifests/deployment.yaml`

Once service is deployed, the application can be accessed at `http://localhost:8082`

## Service

Deploy with `kubectl apply -f manifests/service.yaml`
