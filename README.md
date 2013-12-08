#bibleRef.js

Javascript script to detect Bible references and link to a website where they may be read online.

---

##Usage

To use in your project, simply link to the `bibleRef.js` file in your `<head>`, and define the `bibleRef` variable as an empty object to initiate bibleRef.js:

```
	<script src="http://code.jquery.com/jquery-latest.min.js"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="bibleRef.min.js"></script>
	<script>
		bibleRef = {};
	</script>
```

With this default configuration, the source of the Bible reference links will be to [esvbible.org](http://www.esvbible.org/). bibleRef.js is also preconfigured to also handle reference links to [biblegateway.com](http://www.biblegateway.com/) by setting `bibleRef.src` to `'biblegateway'`:

```
	<script src="http://code.jquery.com/jquery-latest.min.js"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="bibleRef.min.js"></script>
	<script>
		bibleRef = {
			src: 'biblegateway'
		};
	</script>
```

The default version for the `'biblegateway'` configuration is NIV, but you are free to specify whatever verion you would like by setting the `bibleRef.version` to your desired version:

```
	<script src="http://code.jquery.com/jquery-latest.min.js"></script> 
	<!-- Must have jQuery library defined first -->
	<script src="bibleRef.min.js"></script>
	<script>
		bibleRef = {
			src: 'biblegateway',
			version: 'KJV'
		};
	</script>
```

##Contributing

If you find a bug, or would like to help out with development, just follow some simple steps:

  1. [Make an issue.](https://github.com/JoahG/bibleRef.js/issues/new)
  2. [Fork the repo.](https://github.com/JoahG/bibleRef.js/fork)
  3. Make your changes.
  4. Commit and create a pull request.

##Author

bibleRef.js is written and maintained by [Joah Gerstenberg](http://www.joahg.com), copyright 2013. All code contained within these files are licensed under an [MIT license](https://github.com/JoahG/bibleRef.js/blob/master/MIT-LICENSE).