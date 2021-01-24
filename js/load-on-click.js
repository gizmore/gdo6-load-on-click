"use strict";

function loadOnClick() {
	if (this.href && this.href.toLowerCase().startsWith('javascript')) {
		return; // not a page load.
	}
	if (this.classList.contains('gdt-like-button')) {
		return; // Special like button. @TODO ugly cross reference
	}
	if (this.classList.contains('tbscode_standard_link')) {
		return; // TBSBBCode @TODO ugly cross reference
	}
	var loadingPane = window.document.getElementById('gdt-loading-pane');
	loadingPane.classList.remove('done');
	return true; // for submit
}

// Query all anchors
var nodes = window.document.querySelectorAll('a');
var len = nodes.length;
for (var i = 0; i < len; i++) {
	nodes[i].addEventListener('click', loadOnClick);
}

//Query all forms
var nodes = window.document.querySelectorAll('form');
var len = nodes.length;
for (var i = 0; i < len; i++) {
	nodes[i].addEventListener('submit', loadOnClick);
}
