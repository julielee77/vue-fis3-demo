# fis-postprocessor-autoprefixer

a postprocessor for fis to autoprefixer css with [postcss/autoprefixer](https://github.com/postcss/autoprefixer)

1. install fis-postprocessor-autoprefixer  
	`npm install -g fis-postprocessor-autoprefixer`
2. modify fis-conf.js  
	`fis.config.set('modules.postprocessor.css', 'autoprefixer');`
3. set the browsers option of `postcss/autoprefixer`  

	```
	fis.config.merge({
	    settings : {
	        postprocessor : {
	          autoprefixer : {
	              // detail config (https://github.com/postcss/autoprefixer#browsers)
	              "browsers": ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4"],
	              "cascade": true
	            }
	        }
	    }
	});
	```
4. fis release
`fis release`
