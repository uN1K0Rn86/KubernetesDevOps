# Log output

Start the cluster with `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`

Deploy with

```
kubectl apply -f manifests
```

Ingress shared with ping-pong app. Deploy ingress from repo root folder with `kubectl apply -f manifests`

Access the status at `http://localhost:8081/status`
