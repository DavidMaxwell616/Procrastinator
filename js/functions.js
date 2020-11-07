const GigFields=[
  'Day',
  'Date',
  'Time',
  'Venue',
  'Location',
  'Phone'
];

function loadXMLDoc(issue,file) {
  var xmlhttp = new XMLHttpRequest();
  var doc= this.document;
  xmlhttp.onreadystatechange = function() {
    if (doc.readyState == 'complete' && xmlhttp.status ==200) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlhttp.responseText, "application/xml");
      LoadGigs(xmlDoc,issue);
    }
  };
  xmlhttp.open("GET", file, true);
  xmlhttp.send();
}

function LoadGigs(xml, issue) {
var x = xml.getElementsByTagName("gigs")[0];
if(x!==undefined){
  var children = x.childNodes;
  var table = '<table>\n<tr>\n';
  for(var item=0;item<GigFields.length;item++)
  {
    table+='<th>'+ GigFields[item]+ '</th>\n';
  }
  table+='</tr>';
  for(var item=1;item<children.length;item+=2)
  {
    console.log(children[item]);
  var issue_num = parseInt(children[item].getElementsByTagName('issue_num')[0].textContent);
  if(issue_num===issue){
    table += "<tr>\n";
    for(var item2=0;item2<GigFields.length;item2++)
  {
  var cellContents = children[item].getElementsByTagName(GigFields[item2].toLowerCase())[0].textContent;
  table+='<td>'+ cellContents +  '</td>';
  }
  table+='</tr>\n';
  }
    }
    table+='</table>';
}

document.getElementById("gigs").innerHTML = table;
}
