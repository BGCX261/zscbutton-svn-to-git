/*
* ======================================================================
* ----------------------------------------------------------------------
* zSCbutton-hor:   zon Share Counters and Buttons Horizontal Wide Widget
* Author:          zon - http://inimu.com
* Script Homepage: http://inimu.com/widget/zscbutton/
* ----------------------------------------------------------------------
* You may use the codes below and its associated files
* as long as you leave the author credit remain intact
* ----------------------------------------------------------------------
* ======================================================================
*/

var zlt=unescape('%3C'); var zgt=unescape('%3E');
var zscbhorwNode = document.getElementById('zscbhorw');
var zscbhorwcntrNode = document.getElementById('zscbhorwcntr');
var zscbhorwDivNode = document.getElementById('zscbhorwdiv');
zscbhorwDivNode.style.marginTop='10px';
zscbhorwDivNode.style.marginBottom='10px';
zscbhorwcntrNode.style.display='inline-block';
function zscbhorwSetStyleTextDo(zStyleTextContent,zStyleTextId,zStyleTextMedia) {
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
var zscbhorwStyleText1 = ''
	+'#zscbhorw { margin:0; padding:0; list-style-type:none !important; display:inline-block !important; line-height:21px; background-color:#fff; border-width:1px; border-style:solid; border-radius:5px; -moz-border-radius:5px; border-color:#ccc; box-shadow:0 1px 5px #ccc; -moz-box-shadow:0 1px 5px #ccc; background: #ffffff; background: -moz-linear-gradient(top, #ffffff 0%, #dddddd 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#dddddd)); background: -webkit-linear-gradient(top, #ffffff 0%,#dddddd 100%); background: -o-linear-gradient(top, #ffffff 0%,#dddddd 100%); background: -ms-linear-gradient(top, #ffffff 0%,#dddddd 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=#ffffff, endColorstr=#dddddd,GradientType=0 ); background: linear-gradient(top, #ffffff 0%,#dddddd 100%); }'
	+'#zscbhorw li { list-style-type:none !important; display:inline-block !important; height:21px; vertical-align:middle; margin:7px 8px; }'
	+'#zscbhorw li:last-child { margin-right:5px; }'
	+'#zscbhorwlb iframe { height:21px; overflow:hidden; }'
	+'#zscbhorwc { display:none; }'
	+'#zscbhorwCred, .zscbhorwCred, a.zscbhorwCred { display:block; padding:0; margin:0 7px; text-align:center; font-size:10px; line-height:10px; font-weight:bold; font-family:Arial,sans-serif; text-decoration:none; color:#bbb; background-color:transparent; border-radius:0 0 3px 3px; -moz-border-radius:0 0 3px 3px; }'
	+'#zscbhorwCred:hover, .zscbhorwCred:hover, a.zscbhorwCred:hover { text-decoration:none; color:#fff; background-color:#ccc; }'
	+'';
zscbhorwSetStyleTextDo(zscbhorwStyleText1,'','');

var zscbhorwLiLength = zscbhorwNode.getElementsByTagName('li').length;
var zscbhorwLastLiCount = zscbhorwLiLength-1;
zscbhorwNode.getElementsByTagName('li')[zscbhorwLastLiCount].style.marginRight = '5px';

if (document.getElementById('zscbhorwc')) {
	var zscbhorwFakeCred = document.getElementById('zscbhorwc');
	if (zscbhorwFakeCred.style.display) {
		zscbhorwFakeCred.style.display = 'none !important';
	}
	zscbhorwFakeCred.innerHTML = '';
}
var zscbhorwCredHTML = zlt+'a id="zscbhorwCred" class="zscbhorwCred" title="Share Counters + Buttons widget" href="http://inimu.com/widget/zscbutton/" target="_blank"'+zgt+'S H A R E'+zlt+'/a'+zgt;
var zscbhorwCredNode = document.createElement('li');
document.write(zscbhorwCredHTML);

zscbhorwNode.style.position = 'static';
