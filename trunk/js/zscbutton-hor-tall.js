/*
* ======================================================================
* ----------------------------------------------------------------------
* zSCbutton-hor:   zon Share Counters and Buttons Horizontal Tall Widget
* Author:          zon - http://inimu.com
* Script Homepage: http://inimu.com/widget/zscbutton/
* ----------------------------------------------------------------------
* You may use the codes below and its associated files
* as long as you leave the author credit remain intact
* ----------------------------------------------------------------------
* ======================================================================
*/

var zlt=unescape('%3C'); var zgt=unescape('%3E');
var zscbhortNode = document.getElementById('zscbhort');
var zscbhortcntrNode = document.getElementById('zscbhortcntr');
var zscbhortDivNode = document.getElementById('zscbhortdiv');
zscbhortNode.style.listStyleType='none';
zscbhortDivNode.style.marginTop='10px';
zscbhortDivNode.style.marginBottom='10px';
zscbhortcntrNode.style.display='inline-block';
function zscbhortSetStyleTextDo(zStyleTextContent,zStyleTextId,zStyleTextMedia) {
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
var zscbhortStyleText1 = ''
	+'#zscbhort { margin:0; padding:0; list-style-type:none !important; display:inline-block !important; line-height:62px; background-color:#fff; border-width:1px; border-style:solid; border-radius:5px; -moz-border-radius:5px; border-color:#ccc; box-shadow:0 1px 5px #ccc; -moz-box-shadow:0 1px 5px #ccc; background: #ffffff; background: -moz-linear-gradient(top, #ffffff 0%, #dddddd 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#dddddd)); background: -webkit-linear-gradient(top, #ffffff 0%,#dddddd 100%); background: -o-linear-gradient(top, #ffffff 0%,#dddddd 100%); background: -ms-linear-gradient(top, #ffffff 0%,#dddddd 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=#ffffff, endColorstr=#dddddd,GradientType=0 ); background: linear-gradient(top, #ffffff 0%,#dddddd 100%); }'
	+'#zscbhort li { list-style-type:none !important; display:inline-block !important; height:62px; vertical-align:bottom; margin:8px 0 8px 9px; }'
	+'#zscbhort li:last-child { margin-right:9px; }'
	+'#zscbhort li iframe { vertical-align:bottom; }'
	+'#zscbhortfb iframe { width:45px !important; }'
	+'#zscbhortlb { padding:0 2px; border:1px solid #ccc; border-radius:3px; height:60px !important; background: #f9f9f9; }'
	+'#zscbhortlb iframe { width:33px; height:52px; margin:4px 0; overflow:hidden; }'
	+'#zscbhortc { display:none; }'
	+'#zscbhortCred, .zscbhortCred, a.zscbhortCred { display:block; padding:0; margin:0 7px; text-align:center; font-size:10px; line-height:10px; font-weight:bold; font-family:Arial,sans-serif; text-decoration:none; color:#bbb; background-color:transparent; border-radius:0 0 3px 3px; -moz-border-radius:0 0 3px 3px; }'
	+'#zscbhortCred:hover, .zscbhortCred:hover, a.zscbhortCred:hover { text-decoration:none; color:#fff; background-color:#ccc; }'
	+'';
zscbhortSetStyleTextDo(zscbhortStyleText1,'','');

var zscbhortLiLength = zscbhortNode.getElementsByTagName('li').length;
var zscbhortLastLiCount = zscbhortLiLength-1;
zscbhortNode.getElementsByTagName('li')[zscbhortLastLiCount].style.marginRight = '9px';

if (document.getElementById('zscbhortc')) {
	var zscbhortFakeCred = document.getElementById('zscbhortc');
	if (zscbhortFakeCred.style.display) {
		zscbhortFakeCred.style.display = 'none !important';
	}
	zscbhortFakeCred.innerHTML = '';
}
var zscbhortCredHTML = zlt+'a id="zscbhortCred" class="zscbhortCred" title="Share Counters + Buttons widget" href="http://inimu.com/widget/zscbutton/" target="_blank"'+zgt+'S H A R E'+zlt+'/a'+zgt;
var zscbhortCredNode = document.createElement('li');
document.write(zscbhortCredHTML);

zscbhortNode.style.position = 'static';
