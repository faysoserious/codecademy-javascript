# JavaScript Runtime Environments
A `runtime environment` is where your program will be executed. JavaScript code may be executed in one of two runtime environments:

1. a browser’s runtime environment
1. the Node runtime environment

In each of these environments, different data values and functions are available, and these differences help distinguish front-end applications from back-end applications.

- Front-end JavaScript applications are executed in a browser’s runtime environment and have access to the window object.
- Back-end JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks attached to the server.

## Implementing Modules using ES6 Syntax

Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

### ES6 Named Export Syntax

A module must be entirely contained within a file. So, let’s first consider where a new module may be placed within the file system. Since it needs to be used by both of these projects, you may want to put it in a mutually accessible location. The entire file structure containing both projects and this new module, let’s call it dom-functions.js, could look like this:

```bash
secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file
```

Inside dom-functions.js, the functions you wish to reuse can be exported using the named export syntax below:

```javascript
export { resourceToExportA, resourceToExportB, ...}
```

Individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration. Here is the same example using this syntax:

```javascript
/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}
 
export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}
```

### ES6 Import Syntax

The ES6 syntax for importing named resources from modules is similar to the export syntax:

```javascript
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
```

### Renaming Imports to Avoid Naming Collisions

ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:

```js
import { exportedResource as newlyNamedResource } from '/path/to/module'
```

### Default Exports and Imports

Every module also has the option to export a single value to represent the entire module called **the default export**. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

The syntax for exporting **a default object** looks like this:

```javascript
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };
```

With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the resources object is being exported as a named export. However, the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value.

You may also see this shorthand syntax where the value follows export default is the default value to be exported:

```javascript
const resources = {
  valueA,
  valueB
}
export default resources;
```

### Importing default values.

The syntax for importing default exports looks like this:

```javascript
import importedResources from 'module.js';
```

Notice that the curly braces are gone from the import statement. This syntax is actually shorthand for `import { default as importedResources } from 'module.js'` and the imported `default` value may be given any name the programmer chooses.

It should be noted that **if the default export is an object**, the values inside cannot be extracted until after the object is imported, like so:

```javascript
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```