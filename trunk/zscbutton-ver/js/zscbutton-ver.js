/*
* ======================================================================
* ----------------------------------------------------------------------
* zSCbutton-ver:   zon Share Counters and Buttons - Vertical Widget
* Author:          zon - http://inimu.com
* Script Homepage: http://inimu.com/widget/zscbutton/
* ----------------------------------------------------------------------
* You may use the codes below and its associated files
* as long as you leave the author credit remain intact
* ----------------------------------------------------------------------
* ======================================================================
*/

var zlt=unescape('%3C'); var zgt=unescape('%3E');
var zscbverNode = document.getElementById('zscbver');
var zscbverDivNode = document.getElementById('zscbverdiv');
if (navigator.appName == 'Microsoft Internet Explorer') {
	zscbverDivNode.style.width='70px';
}
function zscbverSetStyleTextDo(zStyleTextContent,zStyleTextId,zStyleTextMedia) {
	var zStyleTextNode = document.createElement('style');
	zStyleTextNode.type = 'text/css';
	if (zStyleTextId!='') {	zStyleTextNode.setAttribute('id',zStyleTextId);	}
	if (zStyleTextMedia!='') {	zStyleTextNode.setAttribute('media',zStyleTextMedia);	}
	if (zStyleTextNode.styleSheet) {
		zStyleTextNode.styleSheet.cssText = zStyleTextContent;
	} else {
		zStyleTextNode.appendChild(document.createTextNode(zStyleTextContent));
	}
	document.getElementsByTagName('head')[0].appendChild(zStyleTextNode);
}
var zscbverStyleText1 = ''
	+'#zscbver { display:block; width:60px; margin:0 auto; padding:7px; text-align:center; list-style-type:none; line-height:0; background-color:#f9f9f9; border-width:1px; border-style:solid; border-color:#ddd; border-radius:5px; -moz-border-radius:5px; }'
	+'#zscbver li { text-align:center; list-style-type:none; margin-bottom:7px; }'
	+'#zscbver li:last-child { margin-bottom:0; }'
	+'#zscbverlb iframe { width:33px; height:52px; overflow:hidden; }'
	+'#zscbverc { display:none; }'
	+'#zscbverCred, .zscbverCred, a.zscbverCred { display:block; width:40px; margin:0 auto; padding:0 2px; font-size:10px; line-height:10px; font-weight:bold; font-family:Arial,sans-serif; color:#fff; text-align:center; text-decoration:none; background-color:#ccc; border-radius:0 0 3px 3px; -moz-border-radius:0 0 3px 3px; }'
	+'#zscbverCred:hover, .zscbverCred:hover, a.zscbverCred:hover { text-decoration:none; background-color:#000; }'
	+'';
zscbverSetStyleTextDo(zscbverStyleText1,'','');

var zscbverLiLength = zscbverNode.getElementsByTagName('li').length;
var zscbverLastLiCount = zscbverLiLength-1;
zscbverNode.getElementsByTagName('li')[zscbverLastLiCount].style.marginBottom = '0';

if (document.getElementById('zscbverc')) {
	var zscbverFakeCred = document.getElementById('zscbverc');
	if (zscbverFakeCred.style.display) {
		zscbverFakeCred.style.display = 'none !important';
	}
	zscbverFakeCred.innerHTML = '';
}
var zscbverCredHTML = zlt+'a id="zscbverCred" class="zscbverCred" title="Share Counter Buttons widget" href="http://inimu.com/widget/zscbutton/" target="_blank"'+zgt+'SHARE'+zlt+'/a'+zgt;
var zscbverCredNode = document.createElement('li');
document.write(zscbverCredHTML);

zscbverNode.style.position = 'static';
