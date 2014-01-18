
/**
 * Expose `schema`.
 */

module.exports = schema;

/**
 * Return a `plugin` function with a `json` schema.
 *
 * @param {Object} json
 * @return {Function}
 */

function schema (json) {
  return function plugin (Model) {
    for (var key in json) Model.attr(key, json[key]);
  };
}