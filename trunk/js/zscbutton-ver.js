/*
* ======================================================================
* ----------------------------------------------------------------------
* zSCbutton-ver:   zon Share Counters and Buttons Vertical Widget
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
var zscbvercntrNode = document.getElementById('zscbvercntr');
var zscbverDivNode = document.getElementById('zscbverdiv');
zscbverNode.style.listStyleType='none';
if (navigator.appName == 'Microsoft Internet Explorer') {
	zscbverDivNode.style.width='73px';
}
zscbvercntrNode.style.display='inline-block';
if (zscbverDivNode.style.cssFloat == 'right') {
	zscbverDivNode.style.margin = '0 7px 10px 10px';
} else if (zscbverDivNode.style.cssFloat == 'left') {
	zscbverDivNode.style.margin = '0 10px 10px 7px';
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
	+'#zscbver { margin:0; padding:0; list-style-type:none !important; display:block !important; text-align:center; list-style-type:none; line-height:0; border-width:1px; border-style:solid; border-radius:5px; -moz-border-radius:5px; border-color:#ccc; box-shadow:0 1px 5px #ccc; -moz-box-shadow:0 1px 5px #ccc; background: #ffffff; background: -moz-linear-gradient(top, #ffffff 0%, #dddddd 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#dddddd)); background: -webkit-linear-gradient(top, #ffffff 0%,#dddddd 100%); background: -o-linear-gradient(top, #ffffff 0%,#dddddd 100%); background: -ms-linear-gradient(top, #ffffff 0%,#dddddd 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=#ffffff, endColorstr=#dddddd,GradientType=0 ); background: linear-gradient(top, #ffffff 0%,#dddddd 100%); }'
	+'#zscbver li { text-align:center; list-style-type:none !important; display:block !important; margin:8px 8px 0; }'
	+'#zscbver li:last-child { margin-bottom:8px; }'
	+'#zscbverfb iframe { width:45px !important; }'
	+'#zscbverlb iframe { width:33px; height:52px; overflow:hidden; }'
	+'#zscbverc { display:none; }'
	+'#zscbverCred, .zscbverCred, a.zscbverCred { display:block; padding:0; margin:0 7px; text-align:center; font-size:10px; line-height:10px; font-weight:bold; font-family:Arial,sans-serif; text-decoration:none; color:#bbb; background-color:transparent; border-radius:0 0 3px 3px; -moz-border-radius:0 0 3px 3px; }'
	+'#zscbverCred:hover, .zscbverCred:hover, a.zscbverCred:hover { text-decoration:none; color:#fff; background-color:#ccc; }'
	+'';
zscbverSetStyleTextDo(zscbverStyleText1,'','');

var zscbverLiLength = zscbverNode.getElementsByTagName('li').length;
var zscbverLastLiCount = zscbverLiLength-1;
zscbverNode.getElementsByTagName('li')[zscbverLastLiCount].style.marginBottom = '8px';

if (document.getElementById('zscbverc')) {
	var zscbverFakeCred = document.getElementById('zscbverc');
	if (zscbverFakeCred.style.display) {
		zscbverFakeCred.style.display = 'none !important';
	}
	zscbverFakeCred.innerHTML = '';
}
var zscbverCredHTML = zlt+'a id="zscbverCred" class="zscbverCred" title="Share Counters + Buttons widget" href="http://inimu.com/widget/zscbutton/" target="_blank"'+zgt+'S H A R E'+zlt+'/a'+zgt;
var zscbverCredNode = document.createElement('li');
document.write(zscbverCredHTML);

zscbverNode.style.position = 'static';
