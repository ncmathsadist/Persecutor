/*Author: Morrison*/
/*
 * Directions:   Each roster array reprsents a section of class
 * In each, put the name of an image file for each student.
 * Name that file studentName.jpg, studentName.gif, or studentName.png
 *
 * If you need more sections addd more roster arrays and for each you
 * need to do the following
 *     1. Add a button for each new section in the .html file. Give each an ID
 *     2. Create a pointer to that button using document.getElementById
 *     3. Add an event listener for each new button.
 * Most of this operation should be easy copy-paste.
 *
 * Make sure all files have permission 664 or 644.
 */
window.addEventListener("load", main)
function main()
{
    
    let rosterC = [];
    let rosterF = [];
    let rosterB = [];
    let image = document.getElementById("image");
    let chosen = document.getElementById("chosen");
    let cBlock = document.getElementById("C");   
    let bBlock = document.getElementById("B");   
    let fBlock = document.getElementById("F");   
    cBlock.addEventListener("click", e => refresh(rosterC));
    bBlock.addEventListener("click", e => refresh(rosterB));
    fBlock.addEventListener("click", e => refresh(rosterF));
    function refresh(roster)
    {
        let name = roster[randomNumber(0, roster.length)];
        chosen.innerHTML = name.substring(0, name.length - 4);
        image.src = name;
    }
}
function randomNumber(m, n)
{
    return m + Math.floor( (n - m)*Math.random() );
}
