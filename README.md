# Angular : Gestion d'achats


## Différences  par rapport à la dernière version 

- Gestion d'achats au lieu de gestion de devoirs 

- Une description aussi sous forme de tableau qui s'affiche aprés avoir cliqué sur la ligne relatif au produit consulté réalisé à l'aide de mat-expansion également avec une colonne pour la suppression.

- Le tableau principal contenant les produits se caratérise par :
	- Un header fix (sticky)
	- Pagination (tableau filtré en recherchant dans tous ces colonnes à partir d'un mot clé)


- Deux boutons sous forme d'icones:
	- Delete : 
		- Supprime l'élement
		- Affiche un snackBar qui permet d'annuler la suppression
	- Validate
		- Affiche un snackBar Informatif 

- Une interface divisé en 3 TAB à l'aide de mat-tab et mat-tab-nav-bar(pour les anchors) : 
	- Achat Validé
	- Achat Non Validé
	- Ajout Achat
		- Formulaire qui se réinitialise après validation du formulaire
		- Affiche un snackBar informatif après ajout du produit 

- Fonctionement des SnackBar:
	- Validation si et seulement si:
		- L'achat n'est pas validé
		- OU l'achat est validé mais la date de validation n'est pa initiée

- Les Services initialisent également les tableaux(validé/non validé) avec les nouvelles valeurs

