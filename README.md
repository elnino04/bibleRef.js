#bibleRef.js

Javascript script to detect Bible references and link to a website where they may be read online.

---

##Usage

####Initialization

To use in your project, simply link to the `bibleRef.min.js` file in your `<head>`, and define the `bibleRef` variable as an empty object to initiate bibleRef.js:

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {};
	</script>
```

####Configuration

######`bibleRef.src`

With the default configuration, the source of the Bible reference links will be to [esvbible.org](http://www.esvbible.org/). bibleRef.js is also preconfigured to also handle reference links to [biblegateway.com](http://www.biblegateway.com/) by setting `bibleRef.src` to `'biblegateway'`:

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {
			src: 'biblegateway'
		};
	</script>
```

######`bibleRef.version`

The default version for the `'biblegateway'` configuration is NIV, but you are free to specify whatever verion you would like by setting the `bibleRef.version` to your desired version:

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {
			src: 'biblegateway',
			version: 'KJV'
		};
	</script>
```

######`bibleRef.target`

You are also able to configure the `target` of the `<a>`s that bibleRef generates by setting `bibleRef.target` to your desired setting (the default is `'_self'`):

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {
			target: '_blank'
		};
	</script>
```

######`bibleRef.range`

`bibleRef.range` may be set to only search a specific area of a webpage. `bibleRef.range` may be set as any selector recognizable by jQuery (i.e. any combination of `id`, `class`, element name, pseudoselectors, etc.). `bibleRef.range` defaults to `body`.

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {
			range: '#myID, .myClass:first-child'
		};
	</script>
```

######`bibleRef.class`

Setting `bibleRef.class` allows you to put a custom `class` on all Bible references that bibleRef replaces.

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {
			class: 'myClass'
		};
	</script>
```

######`bibleRef.abbr`

`bibleRef.js` also supports Bible book abbreviations. For false case prevention purposes, abbreviations are turned **off** by default. To turn abbreviation searching/replacement, set `bibleRef.abbr` to `true`. (Defaults to `false`).

```html
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="http://www.joahg.com/bibleRef.js/bibleRef.min.js" type="text/javascript"></script>
	<script>
		bibleRef = {
			abbr: true
		};
	</script>
```

####Translation

After bibleRef.js is initialized, it will search for all references in the range you provided. When it finds a reference, it will replace it with a link to the source you provided in the form:

```html
	<a data-bible-ref href="...">bookName x:y</a>
```

Note that all Bible reference links will have the `data-bible-ref` attribute for easy targeting.

If you have set a custom class with `bibleRef.class`, it will be applied to the `a`s as well:

```html
	<a data-bible-ref href="..." class="customClass">bookName x:y</a>
```

##Contributing

If you find a bug, or would like to help out with development, just follow some simple steps:

  1. [Make an issue.](https://github.com/JoahG/bibleRef.js/issues/new)
  2. [Fork the repo.](https://github.com/JoahG/bibleRef.js/fork)
  3. Make your changes.
  4. Commit and create a pull request.

##Author

bibleRef.js is written and maintained by [Joah Gerstenberg](http://www.joahg.com), copyright 2014. All code contained within these files are licensed under an [MIT license](https://github.com/JoahG/bibleRef.js/blob/master/MIT-LICENSE).

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/JoahG/bibleref.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
![](https://ga-beacon.appspot.com/UA-45765973-7/bibleRef.js/home?pixel)
