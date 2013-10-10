var element_unordered_list = document.getElementById("liste");


function printToOutputBox(selectedobj)
{
var e_lang = document.getElementById("lang"); 
var e_outputbox = document.getElementById("outputbox");
e_outputbox.innerHTML = "Du har valgt programmeringsspråket " + e_lang.options[selectedobj.selectedIndex].text;
}


function popupboks(beskjed){
alert("Siden er under konstruksjon!")
}
