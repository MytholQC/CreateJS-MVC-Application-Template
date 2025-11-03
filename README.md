# CreateJS-MVC-Application-Template
'One Page Application' Template that uses CreateJS libraries to create web games (or applications).

## manifest file
https://createjs.com/docs/preloadjs/classes/LoadQueue.html  
The manifest.json file is used by the PreloadJS library to load files
If a file is not recognized, and is of one of theses types:
   * BINARY: Raw binary data via XHR
   * CSS: CSS files
   * IMAGE: Common image formats
   * JAVASCRIPT: JavaScript files
   * JSON: JSON data
   * JSONP: JSON files cross-domain
   * MANIFEST: A list of files to load in JSON format, see AbstractLoader/loadManifest
   * SOUND: Audio file formats
   * SPRITESHEET: JSON SpriteSheet definitions. This will also load sub-images, and provide a SpriteSheet instance.
   * SVG: SVG files
   * TEXT: Text files - XHR only
   * VIDEO: Video objects
   * XML: XML data
you can try to force its type by addind a type key to your item with the file type in lowercase:
```json
{"id":"test", "src":"/exemple.avif", "type":"image"}
```

## notice
One thing that differs from the mvc pattern is that the Application class manage navigation between pages and not a controller. You could see Application.js as the main controller.
