## Description

Frontend repository du projet de pokedex

## Installation

```bash
$ curl https://get.volta.sh | bash #installation de Volta
$ yarn
```

## Running the app

```bash
$ yarn start
```

## Le projet

Voici les liens du projet :

- [Pokedex](http://localhost:300O) Site web du pokedex


## Réponse Question :

### Question : 
Si 5 devs rejoignent ton équipe demain et que ton application est en production: 
Quelles sont les améliorations à apporter à l'environnement de Dev et pourquoi ?
Les classer par ordre de priorité (J'ai ajouté l'information de priorité entre parenthèses après chaques améliorations)

### Réponse :

**Évolutions fonctionnelles :**
- Il n'y a pas de changements souvent sur les pokémons et être dépendant de l'api de pokémon peut jouer sur les performances. C'est pourquoi je proposerai, comme alternative à cette totale dépendance, de créer notre propre bdd.
  Pour ce faire on pourrait créer un cron, qui toutes les nuits, par exemple, compare nos pokémons à ceux de l'api pour vérifier s'il n'y a pas de nouveaux pokémons ou de changement sur nos pokémons.
  De plus, hormis des problèmes de dépendance à une api externe cette alternative pourrait être synonyme d'optimisation. En effet, aujourd'hui, puisque l'appel 'https://pokeapi.co/api/v2/pokemon?limit=LIMIT&offset=OFFSET' ne nous donne pas toutes les informations du pokémon nous devons en plus de cet appel faire LIMIT appels supplémentaires pour avoir les informations des pokémons de cette page. Avoir une bdd nous permettrait de faire nos propres appels interne et éviter ces (X + 1) appels, et ne faire qu'une unique recherche dans notre bdd. (3)
- Si nous ajoutons une bdd il nous sera possible d'ajouter des fonctionnalités comme faire une recherche par texte, filtrer la recherche ou même trier les pokémons. Mais cela n'est pas possible avec l'api actuelle car cette dernière ne nous donne pas ces possibilités (5)
- Sinon nous pouvons ajouter tout simplement la fonctionnalité de voir plus de caractéristiques sur un pokémon en cliquant dessus par exemple. (4)

**Évolution technique :**
- Nous pourrions mettre en place des tests pour éviter les régressions. (En même temps que le développement des évolutions)
- Si l'application se complexifie, nous pourrons organiser davantage les logs, par dossiers par exemple (En même temps que le développement des évolutions)
- Modifier l'architecture pour utiliser une architecture hexagonale (Solution alternative : pas prioritaire mais si le choix est fait de faire la modification - mieux de la faire le plus tôt possible)

**Évolution travail d'équipe/mise en production :**
- Mise en place de normes et de communication dans l'équipe sur le projet (0)
- Ajouter un Changelog afin de suivre les évolutions des fonctionnalités (1)
- Mise en place d'environnements (pour des tests fonctionnels par exemple) et un suivi CI (2)