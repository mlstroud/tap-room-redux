# _Tap Room_

#### Epicodus Indivual Project - Last Updated July 3rd, 2020

#### By _**Matt Stroud**_

## Description
_React web application for a tap room._  
_The user can add, edit, remove,and view details of kegs which are displayed in a list._  

## Component Diagram

![Component diagram for tap room application.](https://raw.githubusercontent.com/mlstroud/tap-room/master/diagram.drawio.png)

## User Stories
|  |
|--|
| :heavy_check_mark: As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent |
| - [x] As a user, I want to submit a form to add a new keg to a list. |
| [x] As a user, I want to be able to click on a keg to see its detail page. |
| [x] As a user, I want to see how many pints are left in a keg. Hint: A full keg has roughly 124 pints. |
| [x] As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0. |

## Stretch Goals
| |
|--|
| [ ] As a user, I want the option to edit a keg's properties after entering them just in case I make a mistake. |
| [ ] As a user, I want to be able to delete a keg. |
| [x] As a user, I want a keg to update to say "Out of Stock" once it's empty. |
| [x] As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone! |
| [ ]As a user, I want to have kegs prices to be color-coded for easy readability. This could be based on their price, the style of beer, or the amount of pints left. |
| [ ]As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!) |

- [x] test
- [] test
:heavy_check_mark: test

## Setup/Installation Requirements

1. Navigate to the parent directory you would like to store the project's directory in.
```
cd DIRECTORYNAME
```
2. Clone the repository from github, and navigate to its directory.
```
git clone https://github.com/mlstroud/tap-room.git
cd merch-site
```
3. Install required dependencies.
```
npm install
```
4. Run the application and view it in your browser.
```
npm run start
```
> If the browser does not automatically launch, you can generally view it at https://localhost:3000

## Known Bugs
 
## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/mlstroud/tap-room/issues) here on GitHub._

## Technologies Used

* React
* JavaScript
* JSX
* Reactstrap
* HTML
* CSS
* Git

### License

This software is licensed under the MIT license.

Copyright © 2020 **_Matt Stroud_**