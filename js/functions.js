function loadXMLDoc(i) {
  var xmlhttp = new XMLHttpRequest();
  var doc= this.document;
  xmlhttp.onreadystatechange = function() {
    if (doc.readyState == 'complete' && xmlhttp.status ==200) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlhttp.responseText, "application/xml");
      LoadGigs(xmlDoc,i);
    }
  };
  xmlhttp.open("GET", "../assets/xml/gigs.xml", true);
  xmlhttp.send();
}

function LoadGigs(xml, i) {
var x = xml.getElementsByTagName("gigs")[0];
if(x!==undefined){
var children = x.childNodes;
var issue_num = children;
console.log(issue_num);
for (j = 0; j <children.length; j++) {
  table += "<tr><td>" +
  children[j].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "</td><td>" +
  children[j].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "</td></tr>";
}
}
document.getElementById("demo").innerHTML = table;
}