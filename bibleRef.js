/*!
 * bibleRef.js v1.0 (https://github.com/JoahG/bibleRef.js)
 * Copyright 2013 Joah Gerstenberg
 * Licensed under MIT License (https://github.com/JoahG/bibleRef.js/blob/master/MIT-LICENSE)
 */
 $(document).ready(function(){
	var src;
	var version;

	if (bibleRef && bibleRef.src === 'biblegateway') {
		src = 'biblegateway';
		if (bibleRef.version) {
			version = bibleRef.version;
		} else {
			version = 'NIV';
		}
	} 

	if (bibleRef.src === 'esvbible' || !src) {
		src = 'esvbible';
	}

	function esvbibleURL(p) {
		return "http://www.esvbible.org/"+p.replace(/\s/, '+');
	}

	function biblegatewayURL(p) {
		return "http://www.biblegateway.com/passage/?search="+p.replace(/\s/, '%20')+"&version="+version;
	}

	refs = document.body.innerHTML.match(/(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|ezra|nehemiah|esther|job|psalm|proverbs|ecclesiastes|song of solomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|galatians|ephesians|philippians|colossians|titus|philemon|hebrews|james|jude|revelation)\s\d+:\d+/ig).concat(document.body.innerHTML.match(/\d+\s(samuel|kings|chronicles|corinthians|thessalonians|timothy|john|peter)\s\d+:\d+/ig));
	
	for (i in refs) {
		j = refs[i];
		if (j) {
			k = new RegExp(j, "g");
			$('html > *:contains("'+j+'")').each(function(){
				$(this).html($(this).html().replace(k, "<a data-bible-ref href='"+ (src === 'esvbible' ? esvbibleURL(j) : src === 'biblegateway' ? biblegatewayURL(j) : esvbibleURL(j)) +"'>"+j+"</a>"));
			})
		}
	}
});