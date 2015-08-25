/*
* ======================================================================
* ----------------------------------------------------------------------
* zSCbutton:	Share Counters and Buttons Widget by zon
* Author:		zon
* Website:		http://inimu.com
* ----------------------------------------------------------------------
* You may use and/or modify the codes below and its associated files
* as long as you leave the author credit remain intact
* ----------------------------------------------------------------------
* ======================================================================
*/
var zscbSRadd = '';
if (document.getElementsByName('zscbLC').length > 1) {
 zscbSRadd = 'iframe { vertical-align:bottom; }';
}
var zscbS = document.createElement('style'); zscbS.type = 'text/css';
var zscbSR = ''
 +'#zscbCntnr { clear:both; margin:10px 0; }'
 +'.FBConnectButton_Small .FBConnectButton_Text { padding:2px 6px 4px; }'
 +'#zscbAL { font-weight:bold; text-decoration:none; color:#999; background-color:#fff; opacity:0.4; filter:alpha(opacity=40); }'
 +'#zscbAL:hover { color:#000; opacity:1.0; filter:alpha(opacity=100); }'
 +zscbSRadd;
if (!!(window.attachEvent && !window.opera)) {
 zscbS.styleSheet.cssText = zscbSR;
 } else {
 var zscbST = document.createTextNode(zscbSR);
 zscbS.appendChild(zscbST);
}
document.getElementsByTagName('head')[0].appendChild(zscbS);
var zscbCE = document.getElementById('zscbCntnr');
var z = 0;
for (z = 0; z < zscbCE.getElementsByTagName('iframe').length; z++) {
 zscbCE.getElementsByTagName('iframe')[z].style.verticalAlign = 'bottom';
}
