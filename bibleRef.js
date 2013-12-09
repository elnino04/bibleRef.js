/*!
 * bibleRef.js v1.1.2 (https://github.com/JoahG/bibleRef.js)
 * Copyright 2013 Joah Gerstenberg
 * Licensed under MIT License (https://github.com/JoahG/bibleRef.js/blob/master/MIT-LICENSE)
 */
$(document).ready(function(){
	var src, version, target, range;

	if (bibleRef && bibleRef.src === 'biblegateway') {
		src = 'biblegateway';
		if (bibleRef.version) {
			version = bibleRef.version;
		} else {
			version = 'NIV';
		}
	}

	if (bibleRef && bibleRef.target !== '_self') {
		target = bibleRef.target;
	}

	if (bibleRef && bibleRef.range !== 'body') {
		range = bibleRef.range;
	}

	if (bibleRef.src === 'esvbible' || !src) {
		src = 'esvbible';
	}

	function esvbibleURL(p) {
		return "http://www.esvbible.org/"+p.replace(/\s/g, '+');
	}

	function biblegatewayURL(p) {
		return "http://www.biblegateway.com/passage/?search="+p.replace(/\s/g, '%20')+"&version="+version;
	}


	refs = (range ? document.getElementById(range) : document.body).innerHTML.match(/(\d+\s)?(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|samuel|kings|chronicles|ruth|ezra|nehemiah|esther|job|psalm|psalms|proverbs|ecclesiastes|song of solomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation)\s\d+(:\d+)?(\-\d+)?(:\d+)?((\,\s\d+)?(:\d+)?(\-\d+)?(:\d+)?)*/ig);
	
	for (i in refs) {
		j = refs[i];
		if (j) {
			k = new RegExp(j+"(?!\\,\\s\\d+(:\\d+)?)", "g");
			$(range ? '#' + range : 'body').html($(range ? '#' + range : 'body').html().replace(k, "<a data-bible-ref href='"+ (src === 'esvbible' ? esvbibleURL(j) : src === 'biblegateway' ? biblegatewayURL(j) : esvbibleURL(j)) +"' target="+ (target ? target : '_self') +">"+j+"</a>"));
		}
	}
});