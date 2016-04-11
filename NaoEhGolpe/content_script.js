walk(document.body);

function walk(node) 
{	
	var child, next;
	
  if (node.tagName) {
    if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
      return;
    }
  }

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bNaoVaiTerGolpe\b/g, "ImpeachmentJá");
	v = v.replace(/\bNAOVAITERGOLPE\b/g, "ImpeachmentJá");
	v = v.replace(/\bnaovaitergolpe\b/g, "ImpeachmentJá");
	v = v.replace(/\bNãoVaiTerGolpe\b/g, "ImpeachmentJá");
  
	v = v.replace(/\bFicaDilma\b/g, "TchauQuerida");
	v = v.replace(/\bficadilma\b/g, "TchauQuerida");
	v = v.replace(/\bDilmaFica\b/g, "TchauQuerida");
	v = v.replace(/\bdilmafica\b/g, "TchauQuerida");
	v = v.replace(/\bfica dilma\b/g, "Tchau Querida");
	v = v.replace(/\bFica Dilma\b/g, "Tchau Querida");
  
	v = v.replace(/\bgolpista\b/g, "legítimo");
	v = v.replace(/\bGolpista\b/g, "Legítimo");
  v = v.replace(/\bGOLPISTA\b/g, "LEGITIMO");
	v = v.replace(/\bNÃO VAI TER GOLPE\b/g, "NÃO VAI TER GOLPE - VAI TER IMPEACHMENT!");
	v = v.replace(/\bNão vai ter Golpe\b/g, "Não vai ter Golpe - VAI TER IMPEACHMENT!");
	v = v.replace(/\bnão vai ter golpe\b/g, "não vai ter golpe - VAI TER IMPEACHMENT!");
	v = v.replace(/\bNAO VAI TER GOLPE\b/g, "NAO VAI TER GOLPE - VAI TER IMPEACHMENT!");
	v = v.replace(/\bNao vai ter Golpe\b/g, "Nao vai ter Golpe - VAI TER IMPEACHMENT!");
	v = v.replace(/\bnao vai ter golpe\b/g, "nao vai ter golpe - VAI TER IMPEACHMENT!");
	v = v.replace(/\bGOLPE\b/g, "IMPEACHMENT");
	v = v.replace(/\bGolpe\b/g, "Impeachment");
	v = v.replace(/\bgolpe\b/g, "impeachment");
  
	textNode.nodeValue = v;
}


