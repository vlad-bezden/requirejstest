#Example on how to use asynchronous modules in the browser using AMD.

In index.html I use 

``` javascript
<script data-main="./main" async 
  src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.18/require.min.js"></script>
```
this way it loads modules asynchroniously. 
  
If I were using 

``` javascript  
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.18/require.min.js"></script>
<script src="main.js"></script>
```
code would loaded synchroniously.

This project was created in Visual Studio Code (VS Code), and in order to run **index.html** page from it I added tasks.json file that lanches index.html page in browser. Even though it says **explorer**, it will open page in whatever default browser is set up on the system.

Here is an example on how to configure tasks.json so it will open index.html page in default browser by just pressing **Ctrl+Shift+B**
``` javascript
{
	"version": "0.1.0",
	"command": "explorer",
	"windows": {
		"command": "explorer.exe"
	},
	"args": [
		"index.html"
	]
}
```