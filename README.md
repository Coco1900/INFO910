# INFO910
Lancer votre minikube avec la commande `minikube start`

Pour lancer la création des pods et services lancer la commande:  `kubectl apply -f .\kub -R`

Pour lier les ports fair ela commande : `kubectl port-forward service/back-api-service 3000:80`

Pour voir l'application tourner, lancer le front avec : `minikube service front-ui-service`

L'application sert à afficher aléatoirement des pokémons.
