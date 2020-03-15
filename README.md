# Nue
###### Experience how just an import statement can make your webpage look cool
<br/><br/>

Please find live demo at https://codepen.io/vijay1996/pen/eYNrdGq

## Installation
<br/><br/>
*Nue* is available as open source node package to all developers to use in projects.
It can be installed by running the following node command: <br/><br/>
```npm install nue.js --save```
<br/><br/>

## Description
<br/><br/>
*Nue* is a simple node package that can convert your HTML skeleton to an awesome looking webpage. It makes use of the concept of Neomorphism to give stunning effects.
<br/><br/>
Following are the functions available for your use - 
<br/><br/>
**applyNue()** to apply *Nue* to your webpage.
<br/><br/>
**alignElement(element, alignment)** to align a particular element to left, right or center.
<br/><br/>
**applyNueToElement(element)** to apply *Nue* for a particular Element.
<br/><br/>
**removeNueFromElement(element)** to remove *Nue* from a particular Element.
<br/><br/>

## Usage
In your HTML file kindly include require.js, which is a client side require alternative by adding the following script tag at the bottom of your body tag.
```
<script src="https://requirejs.org/docs/release/2.3.6/minified/require.js"></script>
```
<br/><br/>
After installation, following functions can be utilised in your javascript file.<br/><br/>
Import *Nue* using the following code<br/><br/>
```
require(['./node_modules/nue.js/index']);
```
<br/><br/>
To apply Nue, use the following code <br/><br/>
```
applyNue();
```
Following parameters can be passed on with the above function - <br/><br/>
```
applyNue(option)
option = "TL" *DEFAULT - To place light source on top left of the screen
option = "T" *To place light source on top of the screen
option = "TR" *To place light source on top right of the screen
option = "R" To place light source on right of the screen
option = "BR" *To place light source on bottom right of the screen
option = "B" *To place light source on bottom of the screen
option = "BL" *To place light source on bottom left of the screen
option = "L" *To place light source on left of the screen
```
<br/><br/>
To apply Nue to a particular element,
```
applyNueToElement(element)
element - can be a tag, class name has to start with '.', ID name has to start with '#'
```
<br/><br/>
To remove Nue from a particular element,
```
removeNueFromElement(element)
element - can be a tag, class name has to start with '.', ID name has to start with '#'
```
<br/><br/>
To align element,
```
applyNueToElement(element,alignment)
element - can be a tag, class name has to start with '.', ID name has to start with '#'
alignment - can be 'center', 'left' and 'right
```
