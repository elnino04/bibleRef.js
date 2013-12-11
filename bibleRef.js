/*!
 * bibleRef.js v1.1.4 (https://github.com/JoahG/bibleRef.js)
 * Copyright 2013 Joah Gerstenberg
 * Licensed under MIT License (https://github.com/JoahG/bibleRef.js/blob/master/MIT-LICENSE)
 */
$(document).ready(function(){
	// Declare all variables
	var src, target, range, class_, version, refs, selector, esv, bg, url;

	// Set source to default to esvbible if it is not already set to biblegateway
	src = bibleRef && bibleRef.src === 'biblegateway' ? 'biblegateway' : 'esvbible';

	// Set target to default to _self if not already defined
	target = bibleRef && bibleRef.target !== '_self' ? bibleRef.target : '_self';

	// Set class to empty string if bibleRef.class is not defined
	class_ = bibleRef && bibleRef.class ? bibleRef.class : '';

	// Set range to default to body if not already defined
	range = bibleRef && bibleRef.range !== 'body' ? bibleRef.range : 'body';

	// Set version to default to NIV if not already defined
	version = bibleRef && bibleRef.version ? bibleRef.version : 'NIV';

	// Collect all Bible references in [range]
	refs = (range ? document.getElementById(range) : document.body).innerHTML.match(/(\d+\s)?((I*)+\s)?(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|samuel|kings|chronicles|ruth|ezra|nehemiah|esther|job|psalm|psalms|proverbs|ecclesiastes|song of solomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|corinthians|galatians|ephesians|philippians|colossians|thessalonians|timothy|titus|philemon|hebrews|james|peter|jude|revelation)\s\d+(:\d+)?(\-\d+)?(:\d+)?((\,\s\d+)?(:\d+)?(\-\d+)?(:\d+)?)*/ig);
	
	// Set selector to default to body if range is not defined.
	selector = range ? '#' + range : 'body';

	// Set esv to function returning esvbible.org Bible ref URL
	esv = function(p) {
		return "http://www.esvbible.org/" + p.replace(/\s/g, '+');
	}

	// Set bg to function returning biblegateway.com Bible ref URL
	bg = function(p) {
		return "http://www.biblegateway.com/passage/?search=" + p.replace(/\s/g, '%20') + "&version=" + version;
	}

	// Set url to return appropriate url according to src setting
	url = function(p) {
		return src === 'esv' ? esv(p) : src === 'biblegateway' ? bg(p) : esv(p);
	}

	// Loop through refs
	for (i in refs) {
		j = refs[i];

		// If ref is not undefined
		if (j) {

			// Create a new Regex to check for another trailing reference 
			k = new RegExp(j + "(?!\\,\\s\\d+(:\\d+)?)", "g");

			// Replaces all occurrences of the reference with the appropriate link
			$(selector).html($(selector).html().replace(k, "<a data-bible-ref href='" + url(j) + "' target=" + target + " class='" + class_ + "'>" + j + "</a>"));
		}
	}
});