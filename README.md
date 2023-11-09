# INFO910
Lancer votre minikube avec la commande `minikube start`

Pour lancer la création des pods et services lancer la commande:  `kubectl apply -f .\kub -R`

Pour lier les ports faire la commande : `kubectl port-forward service/back-api-service 3000:80`

Pour voir l'application tourner, lancer le front avec : `minikube service front-ui-service`

Si vous avez fait le port-forward avant la commande du minikube service, vous verrez sur la page de l'application un [object object]. Cliquez une fois sur le bouton pour que l'affichage normal se fasse.
L'application sert à afficher aléatoirement des pokémons.
