# Neu
<br/><br/>
###### Experience how just an import statement can make your webpage look cool
<br/><br/>

## Installation
<br/><br/>
*Neu* is available as open source node package to all developers to use in projects.
It can be installed by running the following node command: <br/>
```npm install neu --save```
<br/><br/>

## Description
<br/><br/>
*Neu* is a simple node package that can convert your HTML skeleton to an awesome looking webpage. It makes use of the concept of Neomorphism to give stunning effects.
<br/><br/>
Following are the functions available for your use - 
<br/><br/>
**applyNeu()** to apply *Neu* to your webpage.
<br/><br/>
**alignElement(element, alignment)** to align a particular element to left, right or center.
<br/><br/>
**applyNeuToElement(element)** to apply *Neu* for a particular Element.
<br/><br/>
**removeNeuFromElement(element)** to remove *Neu* from a particular Element.
<br/><br/>

## Usage
After installation, following functions can be utilised in your javascript file.
<br/>
Import *Neu* using the following code
<br/>
```
let neu = require('neu');
```
<br/>
To apply Neu, use the following code
```
applyNeu();
```
Following parameters can be passed on with the above function - 
```
applyNeu(option)
option = "TL" *DEFAULT - To place light source on top left of the screen
option = "T" *To place light source on top of the screen
option = "TR" *To place light source on top right of the screen
option = "R" To place light source on right of the screen
option = "BR" *To place light source on bottom right of the screen
option = "B" *To place light source on bottom of the screen
option = "BL" *To place light source on bottom left of the screen
option = "L" *To place light source on left of the screen
```
<br/>
To apply Neu to a particular element,
```
applyNeuToElement(element)
element - can be a tag, class name has to start with '.', ID name has to start with '#'
```
<br/>
To remove Neu from a particular element,
```
removeNeuFromElement(element)
element - can be a tag, class name has to start with '.', ID name has to start with '#'
```
<br/>
To align element,
```
applyNeuToElement(element,alignment)
element - can be a tag, class name has to start with '.', ID name has to start with '#'
alignment - can be 'center', 'left' and 'right
```