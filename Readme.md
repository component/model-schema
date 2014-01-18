
# hades-schema

  A plugin that creates Hades model attributes from a schema.

## Installation

    $ component install segmentio/hades-schema
    $ npm install hades-schema

## Example

```js
var hades = require('hades');
var schema = require('hades-schema');

var json = {
  id: {
    type: 'string',
    required: true,
    validators: [Function, Function]
  },
  name: {
    type: 'string',
    validators: [Function]
  }
};

var User = hades()
  .use(schema(json));
```

## API

#### schema(json)

  Return the plugin function for a given `json` schema.