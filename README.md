## Author : Mr.Maverick
# Tic-Tac-Toe Projet : WIP - R.V 01 (last release 03/06/2019) 

<img src="imgs/Tic-Tac-Toe - .png"
     alt="Markdown Monster icon"
     style="float: left; margin-right: 10px;" />

A Tic Tac Toe project in HTML, CSS and JS. 

Welcome to the Tic-Tac-Toe project. 
In this WebApp you can play Tic-Tac-Toe with a real player or with an AI. 
**Please, check the following patch notes for see the new features added to the project. 
Also, please be aware the fact that the project is still Working In Progress**


The ***old-version*** branch is the first version of this game. 
The code is not optimised because the gameState paradigm has to managed with the DOM, witch bring the app to always running request between DOM and JS Script.
A beta of the player VS AI mode were started. 

The ***rework-version*** branch is a fully rework version from scratch witch the JS script is fully optimised, with a funtionnal paradigm.
The gameState is managed in the script himself, and update the DOM when it is only needed.
For now, only the player VS player mode is available.


## Patch-Notes : 

***N.B : The abreviation of "R.V" is release version. It means that is a useable and stable version of the app.
The abrevation "V" is for "version", just used for development version of the app.***



### [R.V 01 : First Release Version (03/06/2019): ](https://gitlab.com/alex.ray.dupont/tic-tac-toe/releases)

First stable and fully useable version of the app. 

**Features :**

- Player VS Player mode
- Score keeper
- Player's name are colorized (Player X : blue / Player O : Oorange)
- The winner combination is colorized in green on the grid
- Player's turn name is displayed

### V6 Beta : WIP (last update 03/06/2019) (Branch rework-version)

- add a function for colorized at the client side, the player's choice( Player X has a blue cross, whereas Player O has an orange circle) (have conflict issue)

### V5 Final : (last stable dev version 03/06/2019) (Branch MASTER)

- optimised code 

Only player VS player mode is available

### V4 Beta : (last update 03/06/2019) (branch rework-version) 

- optimised code
- player VS AI mode in progress
- design in progress
