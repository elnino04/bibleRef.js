$(document).ready(function(){
	refs = document.body.innerHTML.match(/(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|ezra|nehemiah|esther|job|psalms|proverbs|ecclesiastes|song of solomon|isaiah|jeremiah|lamentations|ezekiel|daniel|hosea|joel|amos|obadiah|jonah|micah|nahum|habakkuk|zephaniah|haggai|zechariah|malachi|matthew|mark|luke|john|acts|romans|galatians|ephesians|philippians|colossians|titus|philemon|hebrews|james|jude|revelation)\s\d+:\d+/ig).concat(document.body.innerHTML.match(/\d+\s(samuel|kings|chronicles|corinthians|thessalonians|timothy|john|peter)\s\d+:\d+/ig));
	for (i in refs) {
		j = refs[i];
		if (j) {
			k = new RegExp(j, "g")
			$('html > *:contains("'+j+'")').each(function(){
				$(this).html($(this).html().replace(k, "<a href='http://www.esvbible.org/"+j.replace(/\s/, '+')+"'>"+j+"</a>"));
			})
		}
	}
});