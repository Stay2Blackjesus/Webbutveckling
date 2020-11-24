//------------------- Första delen av instruktioner----------------------->

// Navigerar sig till id: "first", gör texten grön
var first = document.getElementById("first");
first.style.color = "green"
 
// Navigerar till alla p-element, gör texten kursiv
var p = document.getElementsByTagName("p");
for(var i = 0; i < p.length; i++)
{
     p[i].style.fontStyle = "italic";
}
 
// Navigerar till föregående syskon från p-taggen "Min första paragraf" (taggen h1, "Min sida") och gör texten röd
var h1 = prev(first);
h1.style.color = "red";
 
// Navigerar till nästa syskon från p-taggen "Min första paragraf" (andra p-taggen, "Min andra paragraf") och gör texten rosa
var p2 = next(first);
p2.style.color = "pink";
 
// Funktionen next(elem) letar upp (och returnerar) syskon element-noden efter det element som man skickar in som argument
function next(elem) {
    do {
        elem = elem.nextSibling; // Sparar kommande nod i variabeln elem
    } while (elem && elem.nodeType != 1); // Om noden är en element-nod returneras noden. Annars så fortsätter loopen till vi hittar en element-nod eller att det inte finns någon mer nod
    return elem; // Returnerar en ev. element-nod            
}
 
// Funktionen prev(elem) letar upp (och returnerar) syskon element-noden före det element som man skickar in som argument
function prev(elem) {
    do {
        elem = elem.previousSibling; // Sparar föregående nod i variabeln elem
    } while (elem && elem.nodeType != 1); // Om noden är en element-nod returneras noden. Annars så fortsätter loopen till vi hittar en element-nod eller att det inte finns någon mer nod
    return elem; // Returnerar en ev. element-nod        
}


//------------------- Andra delen av instruktioner----------------------->


// Sparar elementet med id "color" i variabeln "color"
var color = document.getElementById("color");
 
// Sparar alla nod-barn till elementet "color" i variabeln colorNodes (de sparas i en array)
var colorNodes = color.childNodes;
 
// Loppar igenom alla nod-barnen
for(var i = 0; i < colorNodes.length; i++)
{
     
    // If-satsen kontrollerar att nod-barnet är en element-nod (och inte whitespace)
    // Detta för att det ska fungera både i Internet Explorer/Firefox/Opera/Chrome
    if(colorNodes[i].nodeType == 1)
    {
     
        // Gör bakgrundsfärgen till röd på nod-barnet
        colorNodes[i].style.backgroundColor = "red";
    }
}
 
 
if(navigator.appName == "Microsoft Internet Explorer")
{
 
    // Om webbläsaren är Internet Explorer, kör denna kod
     
    // Letar upp det första nodbarnet coh färger texten blå
    var firstChildNode = colorNodes[0];
    firstChildNode.style.color = "blue";
     
    // Letar upp det andra nodbarnet coh färger texten grön   
    var secondChildNode = colorNodes[1];
    secondChildNode.style.color = "green";
     
    // Letar upp det tredje nodbarnet coh färger texten rosa  
    var thirdChildNode = colorNodes[2];
    thirdChildNode.style.color = "pink";
}
else
{
 
    // Om webbläsaren är Firefox/Chrome/Opera, kör denna kod
 
    // Letar upp det första nodbarnet coh färger texten blå
    var firstChildNode = colorNodes[1];
    firstChildNode.style.color = "blue";
     
    // Letar upp det andra nodbarnet coh färger texten grön   
    var secondChildNode = colorNodes[3];
    secondChildNode.style.color = "green";
     
    // Letar upp det tredje nodbarnet coh färger texten rosa  
    var thirdChildNode = colorNodes[5];
    thirdChildNode.style.color = "pink";
}

//------------------- Tredje delen av instruktioner----------------------->

function viewParent()
{
    // Sparar element-typen i variabeln "parentTag"
    var parentTag = this.parentNode.tagName;
     
    // Sparar elementets id i variabeln "parentId"
    var parentId = this.parentNode.id;
     
    // Skriver ut informationen som samlats in ovan
    alert("Föräldern till denna nod är av element-typen: " + parentTag + "\nOch har id: " + parentId);
}
 
 
function init()
{
 
    // Läggen event-handlers på våra knappar
 
    var button1 = document.getElementById("button1")
    button1.onclick = viewParent;
     
    var button2 = document.getElementById("button2")
    button2.onclick = viewParent;
     
    var button3 = document.getElementById("button3")
    button3.onclick = viewParent;   
}
 
window.onload = init;

//------------------- Fjärde delen av instruktioner----------------------->

function changeText()
{
    // Sparar värdet som är inskrivet i textrutan i variabeln "value"
    var value = this.value;
     
    // Letar upp elementet med id "textbox" (Där texten ska ändra sig)
    var textBox = document.getElementById("textBox");
     
    // Ändrar texten i elementet som ligger i variabeln textBox till variabeln "value" värde
    textBox.childNodes[0].nodeValue = value;
}
 
 
function toggling()
{
    // Sparar det efterföljande nod-syskonet i variabeln "nextElement"
    var nextElement = next(this);
     
    if(nextElement.style.display == "none")
    {
        // Om det efterföljande elementet är dolt, så visar vi det
        nextElement.style.display = "block";    
    }
    else
    {
        // Om det efterföljande elementet är synligt, så döljer vi det
        nextElement.style.display = "none"; 
    }
}
 
function init()
{
    // Lägger på våra event-handlers
 
    var text = document.getElementById("text");
    text.onkeyup = changeText;
     
    var toggle = document.getElementById("toggle");
    toggle.onclick = toggling;
}
 
window.onload = init;
 
// Vår hjälpfunktion "next"
 
function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType != 1);
    return elem;                
}