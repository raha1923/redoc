/*!
 * ReDoc - OpenAPI/Swagger-generated API Reference Documentation
 * -------------------------------------------------------------
 *   Version: "2.0.0-rc.23"
 *   Repo: https://github.com/Redocly/redoc
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['Redoc'] = factory();
  else root['Redoc'] = factory();
})(this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode,
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key),
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 89));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = require('react');

        /***/
      },
      /* 1 */
      /***/ function(module, exports) {
        module.exports = require('tslib');

        /***/
      },
      /* 2 */
      /***/ function(module, exports) {
        module.exports = require('polished');

        /***/
      },
      /* 3 */
      /***/ function(module, exports) {
        module.exports = require('mobx');

        /***/
      },
      /* 4 */
      /***/ function(module, exports) {
        module.exports = require('mobx-react');

        /***/
      },
      /* 5 */
      /***/ function(module, exports) {
        module.exports = require('url');

        /***/
      },
      /* 6 */
      /***/ function(module, exports) {
        module.exports = require('json-pointer');

        /***/
      },
      /* 7 */
      /***/ function(module, exports) {
        module.exports = require('lunr');

        /***/
      },
      /* 8 */
      /***/ function(module, exports) {
        module.exports = require('react-tabs');

        /***/
      },
      /* 9 */
      /***/ function(module, exports) {
        module.exports = require('prismjs');

        /***/
      },
      /* 10 */
      /***/ function(module, exports) {
        module.exports = undefined;

        /***/
      },
      /* 11 */
      /***/ function(module, exports) {
        var g;

        // This works in non-strict mode
        g = (function() {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function('return this')();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },
      /* 12 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(process) {
          // .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
          // backported and transplited with Babel, with backwards-compat fixes

          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.

          // resolves . and .. elements in a path array with directory names there
          // must be no slashes, empty elements, or device names (c:\) in the array
          // (so also no leading and trailing slashes - it does not distinguish
          // relative and absolute paths)
          function normalizeArray(parts, allowAboveRoot) {
            // if the path tries to go above the root, `up` ends up > 0
            var up = 0;
            for (var i = parts.length - 1; i >= 0; i--) {
              var last = parts[i];
              if (last === '.') {
                parts.splice(i, 1);
              } else if (last === '..') {
                parts.splice(i, 1);
                up++;
              } else if (up) {
                parts.splice(i, 1);
                up--;
              }
            }

            // if the path is allowed to go above the root, restore leading ..s
            if (allowAboveRoot) {
              for (; up--; up) {
                parts.unshift('..');
              }
            }

            return parts;
          }

          // path.resolve([from ...], to)
          // posix version
          exports.resolve = function() {
            var resolvedPath = '',
              resolvedAbsolute = false;

            for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
              var path = i >= 0 ? arguments[i] : process.cwd();

              // Skip empty and invalid entries
              if (typeof path !== 'string') {
                throw new TypeError('Arguments to path.resolve must be strings');
              } else if (!path) {
                continue;
              }

              resolvedPath = path + '/' + resolvedPath;
              resolvedAbsolute = path.charAt(0) === '/';
            }

            // At this point the path should be resolved to a full absolute path, but
            // handle relative paths to be safe (might happen when process.cwd() fails)

            // Normalize the path
            resolvedPath = normalizeArray(
              filter(resolvedPath.split('/'), function(p) {
                return !!p;
              }),
              !resolvedAbsolute,
            ).join('/');

            return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
          };

          // path.normalize(path)
          // posix version
          exports.normalize = function(path) {
            var isAbsolute = exports.isAbsolute(path),
              trailingSlash = substr(path, -1) === '/';

            // Normalize the path
            path = normalizeArray(
              filter(path.split('/'), function(p) {
                return !!p;
              }),
              !isAbsolute,
            ).join('/');

            if (!path && !isAbsolute) {
              path = '.';
            }
            if (path && trailingSlash) {
              path += '/';
            }

            return (isAbsolute ? '/' : '') + path;
          };

          // posix version
          exports.isAbsolute = function(path) {
            return path.charAt(0) === '/';
          };

          // posix version
          exports.join = function() {
            var paths = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(
              filter(paths, function(p, index) {
                if (typeof p !== 'string') {
                  throw new TypeError('Arguments to path.join must be strings');
                }
                return p;
              }).join('/'),
            );
          };

          // path.relative(from, to)
          // posix version
          exports.relative = function(from, to) {
            from = exports.resolve(from).substr(1);
            to = exports.resolve(to).substr(1);

            function trim(arr) {
              var start = 0;
              for (; start < arr.length; start++) {
                if (arr[start] !== '') break;
              }

              var end = arr.length - 1;
              for (; end >= 0; end--) {
                if (arr[end] !== '') break;
              }

              if (start > end) return [];
              return arr.slice(start, end - start + 1);
            }

            var fromParts = trim(from.split('/'));
            var toParts = trim(to.split('/'));

            var length = Math.min(fromParts.length, toParts.length);
            var samePartsLength = length;
            for (var i = 0; i < length; i++) {
              if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
              }
            }

            var outputParts = [];
            for (var i = samePartsLength; i < fromParts.length; i++) {
              outputParts.push('..');
            }

            outputParts = outputParts.concat(toParts.slice(samePartsLength));

            return outputParts.join('/');
          };

          exports.sep = '/';
          exports.delimiter = ':';

          exports.dirname = function(path) {
            if (typeof path !== 'string') path = path + '';
            if (path.length === 0) return '.';
            var code = path.charCodeAt(0);
            var hasRoot = code === 47 /*/*/;
            var end = -1;
            var matchedSlash = true;
            for (var i = path.length - 1; i >= 1; --i) {
              code = path.charCodeAt(i);
              if (code === 47 /*/*/) {
                if (!matchedSlash) {
                  end = i;
                  break;
                }
              } else {
                // We saw the first non-path separator
                matchedSlash = false;
              }
            }

            if (end === -1) return hasRoot ? '/' : '.';
            if (hasRoot && end === 1) {
              // return '//';
              // Backwards-compat fix:
              return '/';
            }
            return path.slice(0, end);
          };

          function basename(path) {
            if (typeof path !== 'string') path = path + '';

            var start = 0;
            var end = -1;
            var matchedSlash = true;
            var i;

            for (i = path.length - 1; i >= 0; --i) {
              if (path.charCodeAt(i) === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                  start = i + 1;
                  break;
                }
              } else if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // path component
                matchedSlash = false;
                end = i + 1;
              }
            }

            if (end === -1) return '';
            return path.slice(start, end);
          }

          // Uses a mixed approach for backwards-compatibility, as ext behavior changed
          // in new Node.js versions, so only basename() above is backported here
          exports.basename = function(path, ext) {
            var f = basename(path);
            if (ext && f.substr(-1 * ext.length) === ext) {
              f = f.substr(0, f.length - ext.length);
            }
            return f;
          };

          exports.extname = function(path) {
            if (typeof path !== 'string') path = path + '';
            var startDot = -1;
            var startPart = 0;
            var end = -1;
            var matchedSlash = true;
            // Track the state of characters (if any) we see before our first dot and
            // after any path separator we find
            var preDotState = 0;
            for (var i = path.length - 1; i >= 0; --i) {
              var code = path.charCodeAt(i);
              if (code === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                  startPart = i + 1;
                  break;
                }
                continue;
              }
              if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
              }
              if (code === 46 /*.*/) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
              } else if (startDot !== -1) {
                // We saw a non-dot and non-path separator before our dot, so we should
                // have a good chance at having a non-empty extension
                preDotState = -1;
              }
            }

            if (
              startDot === -1 ||
              end === -1 ||
              // We saw a non-dot character immediately before the dot
              preDotState === 0 ||
              // The (right-most) trimmed path component is exactly '..'
              (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
            ) {
              return '';
            }
            return path.slice(startDot, end);
          };

          function filter(xs, f) {
            if (xs.filter) return xs.filter(f);
            var res = [];
            for (var i = 0; i < xs.length; i++) {
              if (f(xs[i], i, xs)) res.push(xs[i]);
            }
            return res;
          }

          // String.prototype.substr - negative index don't work in IE8
          var substr =
            'ab'.substr(-1) === 'b'
              ? function(str, start, len) {
                  return str.substr(start, len);
                }
              : function(str, start, len) {
                  if (start < 0) start = str.length + start;
                  return str.substr(start, len);
                };

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(16)));

        /***/
      },
      /* 13 */
      /***/ function(module, exports) {
        module.exports = require('prop-types');

        /***/
      },
      /* 14 */
      /***/ function(module, exports) {
        module.exports = require('decko');

        /***/
      },
      /* 15 */
      /***/ function(module, exports) {
        module.exports = require('marked');

        /***/
      },
      /* 16 */
      /***/ function(module, exports) {
        // shim for using process in browser
        var process = (module.exports = {});

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
          throw new Error('clearTimeout has not been defined');
        }
        (function() {
          try {
            if (typeof setTimeout === 'function') {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === 'function') {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
          }
          // if clearTimeout wasn't available but was latter defined
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }

        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;

          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }

        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function(name) {
          return [];
        };

        process.binding = function(name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function() {
          return '/';
        };
        process.chdir = function(dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function() {
          return 0;
        };

        /***/
      },
      /* 17 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /**
         * escapes JSON Pointer using ~0 for ~ and ~1 for /
         * @param s the string to escape
         * @return the escaped string
         */
        function jpescape(s) {
          s = s.split('~').join('~0');
          s = s.split('/').join('~1');
          return s;
        }
        /**
         * unescapes JSON Pointer using ~0 for ~ and ~1 for /
         * @param s the string to unescape
         * @return the unescaped string
         */
        function jpunescape(s) {
          s = s.split('~1').join('/');
          s = s.split('~0').join('~');
          return s;
        }
        // JSON Pointer specification: http://tools.ietf.org/html/rfc6901
        /**
         * from obj, return the property with a JSON Pointer prop, optionally setting it
         * to newValue
         * @param obj the object to point into
         * @param prop the JSON Pointer or JSON Reference
         * @param newValue optional value to set the property to
         * @return the found property, or false
         */
        function jptr(obj, prop, newValue) {
          if (typeof obj === 'undefined') return false;
          if (!prop || prop === '#') return typeof newValue !== 'undefined' ? newValue : obj;
          if (prop.indexOf('#') >= 0) {
            var parts = prop.split('#');
            var uri = parts[0];
            if (uri) return false; // we do internal resolution only
            prop = parts[1];
            prop = decodeURIComponent(
              prop
                .slice(1)
                .split('+')
                .join(' '),
            );
          }
          if (prop.startsWith('/')) prop = prop.slice(1);
          var components = prop.split('/');
          for (var i = 0; i < components.length; i++) {
            components[i] = jpunescape(components[i]);
            var setAndLast = typeof newValue !== 'undefined' && i == components.length - 1;
            var index = parseInt(components[i], 10);
            if (!Array.isArray(obj) || isNaN(index) || index.toString() !== components[i]) {
              index = Array.isArray(obj) && components[i] === '-' ? -2 : -1;
            } else {
              components[i] = i > 0 ? components[i - 1] : ''; // backtrack to indexed property name
            }
            if (index != -1 || obj.hasOwnProperty(components[i])) {
              if (index >= 0) {
                if (setAndLast) {
                  obj[index] = newValue;
                }
                obj = obj[index];
              } else if (index === -2) {
                if (setAndLast) {
                  if (Array.isArray(obj)) {
                    obj.push(newValue);
                  }
                  return newValue;
                } else return undefined;
              } else {
                if (setAndLast) {
                  obj[components[i]] = newValue;
                }
                obj = obj[components[i]];
              }
            } else {
              if (
                typeof newValue !== 'undefined' &&
                typeof obj === 'object' &&
                !Array.isArray(obj)
              ) {
                obj[components[i]] = setAndLast
                  ? newValue
                  : components[i + 1] === '0' || components[i + 1] === '-'
                  ? []
                  : {};
                obj = obj[components[i]];
              } else return false;
            }
          }
          return obj;
        }
        module.exports = {
          jptr: jptr,
          jpescape: jpescape,
          jpunescape: jpunescape,
        };

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var tslib_1 = __webpack_require__(1);
        /**
         * a collection of cloning functions
         */
        /**
         * a no-op placeholder which returns the given object unchanged
         * useful for when a clone function needs to be passed but cloning is not
         * required
         * @param obj the input object
         * @return the input object, unchanged
         */
        function nop(obj) {
          return obj;
        }
        /**
         * clones the given object using JSON.parse and JSON.stringify
         * @param obj the object to clone
         * @return the cloned object
         */
        function clone(obj) {
          return JSON.parse(JSON.stringify(obj));
        }
        /**
         * clones the given object's properties shallowly, ignores properties from prototype
         * @param obj the object to clone
         * @return the cloned object
         */
        function shallowClone(obj) {
          var result = {};
          for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
              result[p] = obj[p];
            }
          }
          return result;
        }
        /**
         * clones the given object's properties deeply, ignores properties from prototype
         * @param obj the object to clone
         * @return the cloned object
         */
        function deepClone(obj) {
          var result = Array.isArray(obj) ? [] : {};
          for (var p in obj) {
            if (obj.hasOwnProperty(p) || Array.isArray(obj)) {
              result[p] = typeof obj[p] === 'object' ? deepClone(obj[p]) : obj[p];
            }
          }
          return result;
        }
        /**
         * clones the given object's properties shallowly, using Object.assign
         * @param obj the object to clone
         * @return the cloned object
         */
        function fastClone(obj) {
          return Object.assign({}, obj);
        }
        /**
         * Source: stackoverflow http://bit.ly/2A1Kha6
         */
        function circularClone(obj, hash) {
          if (!hash) hash = new WeakMap();
          // Do not try to clone primitives or functions
          if (Object(obj) !== obj || obj instanceof Function) return obj;
          if (hash.has(obj)) return hash.get(obj); // Cyclic reference
          try {
            // Try to run constructor (without arguments, as we don't know them)
            var result = new obj.constructor();
          } catch (e) {
            // Constructor failed, create object without running the constructor
            result = Object.create(Object.getPrototypeOf(obj));
          }
          // Optional: support for some standard constructors (extend as desired)
          /*if (obj instanceof Map)
        Array.from(obj, ([key, val]) => result.set(circularClone(key, hash),
                                                   circularClone(val, hash)) );
    else if (obj instanceof Set)
        Array.from(obj, (key) => result.add(circularClone(key, hash)) );
    */
          // Register in hash
          hash.set(obj, result);
          // Clone and assign enumerable own properties recursively
          return Object.assign.apply(
            Object,
            tslib_1.__spreadArrays(
              [result],
              Object.keys(obj).map(function(key) {
                var _a;
                return (_a = {}), (_a[key] = circularClone(obj[key], hash)), _a;
              }),
            ),
          );
        }
        module.exports = {
          nop: nop,
          clone: clone,
          shallowClone: shallowClone,
          deepClone: deepClone,
          fastClone: fastClone,
          circularClone: circularClone,
        };

        /***/
      },
      /* 19 */
      /***/ function(module, exports) {
        module.exports = require('eventemitter3');

        /***/
      },
      /* 20 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        function isRef(obj, key) {
          return key === '$ref' && !!obj && typeof obj[key] === 'string';
        }
        module.exports = {
          isRef: isRef,
        };

        /***/
      },
      /* 21 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var jpescape = __webpack_require__(17).jpescape;
        function defaultState() {
          return {
            path: '#',
            depth: 0,
            pkey: '',
            parent: {},
            payload: {},
            seen: new WeakMap(),
            identity: false,
            identityDetection: false,
          };
        }
        /**
         * recurses through the properties of an object, given an optional starting state
         * anything you pass in state.payload is passed to the callback each time
         * @param object the object to recurse through
         * @param state optional starting state, can be set to null or {}
         * @param callback the function which receives object,key,state on each property
         */
        function recurse(object, state, callback) {
          if (!state) state = { depth: 0 };
          if (!state.depth) {
            state = Object.assign({}, defaultState(), state);
          }
          if (typeof object !== 'object') return;
          var oPath = state.path;
          for (var key in object) {
            state.key = key;
            state.path = state.path + '/' + encodeURIComponent(jpescape(key));
            state.identityPath = state.seen.get(object[key]);
            state.identity = typeof state.identityPath !== 'undefined';
            callback(object, key, state);
            if (typeof object[key] === 'object' && !state.identity) {
              if (state.identityDetection && !Array.isArray(object[key]) && object[key] !== null) {
                state.seen.set(object[key], state.path);
              }
              var newState = {};
              newState.parent = object;
              newState.path = state.path;
              newState.depth = state.depth ? state.depth + 1 : 1;
              newState.pkey = key;
              newState.payload = state.payload;
              newState.seen = state.seen;
              newState.identity = false;
              newState.identityDetection = state.identityDetection;
              recurse(object[key], newState, callback);
            }
            state.path = oPath;
          }
        }
        module.exports = {
          recurse: recurse,
        };

        /***/
      },
      /* 22 */
      /***/ function(module, exports) {
        module.exports = require('mark.js');

        /***/
      },
      /* 23 */
      /***/ function(module, exports) {
        module.exports = require('openapi-sampler');

        /***/
      },
      /* 24 */
      /***/ function(module, exports) {
        module.exports = require('perfect-scrollbar');

        /***/
      },
      /* 25 */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(82)(false);
        // Module
        exports.push([
          module.i,
          "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n",
          '',
        ]);

        /***/
      },
      /* 26 */
      /***/ function(module, exports) {
        /***/
      },
      /* 27 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(process) {
          var sjs = __webpack_require__(10);
          var colour = process.env.NODE_DISABLE_COLORS
            ? { red: '', yellow: '', green: '', normal: '' }
            : { red: '\x1b[31m', yellow: '\x1b[33;1m', green: '\x1b[32m', normal: '\x1b[0m' };
          function uniqueOnly(value, index, self) {
            return self.indexOf(value) === index;
          }
          function hasDuplicates(array) {
            return new Set(array).size !== array.length;
          }
          function allSame(array) {
            return new Set(array).size <= 1;
          }
          function deepEquals(obj1, obj2) {
            function _equals(obj1, obj2) {
              return sjs.stringify(obj1) === sjs.stringify(Object.assign({}, obj1, obj2));
            }
            return _equals(obj1, obj2) && _equals(obj2, obj1);
          }
          function compressArray(arr) {
            var result = [];
            var _loop_1 = function(candidate) {
              var dupe = result.find(function(e, i, a) {
                return deepEquals(e, candidate);
              });
              if (!dupe) result.push(candidate);
            };
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
              var candidate = arr_1[_i];
              _loop_1(candidate);
            }
            return result;
          }
          function distinctArray(arr) {
            return arr.length === compressArray(arr).length;
          }
          function firstDupe(arr) {
            return arr.find(function(e, i, a) {
              return arr.indexOf(e) < i;
            });
          }
          /**
           * simple hash implementation based on https://stackoverflow.com/a/7616484/1749888
           * @param {string} s - string to hash
           * @returns {number} numerical hash code
           */
          function hash(s) {
            var hash = 0;
            var chr;
            if (s.length === 0) return hash;
            for (var i = 0; i < s.length; i++) {
              chr = s.charCodeAt(i);
              hash = (hash << 5) - hash + chr;
              hash |= 0; // Convert to 32bit integer
            }
            return hash;
          }
          String.prototype.toCamelCase = function camelize() {
            return this.toLowerCase().replace(/[-_ \/\.](.)/g, function(match, group1) {
              return group1.toUpperCase();
            });
          };
          var parameterTypeProperties = [
            'format',
            'minimum',
            'maximum',
            'exclusiveMinimum',
            'exclusiveMaximum',
            'minLength',
            'maxLength',
            'multipleOf',
            'minItems',
            'maxItems',
            'uniqueItems',
            'minProperties',
            'maxProperties',
            'additionalProperties',
            'pattern',
            'enum',
            'default',
          ];
          var arrayProperties = ['items', 'minItems', 'maxItems', 'uniqueItems'];
          var httpMethods = ['get', 'post', 'put', 'delete', 'patch', 'head', 'options', 'trace'];
          function sanitise(s) {
            s = s.replace('[]', 'Array');
            var components = s.split('/');
            components[0] = components[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm, '_');
            return components.join('/');
          }
          function sanitiseAll(s) {
            return sanitise(s.split('/').join('_'));
          }
          module.exports = {
            colour: colour,
            uniqueOnly: uniqueOnly,
            hasDuplicates: hasDuplicates,
            allSame: allSame,
            distinctArray: distinctArray,
            firstDupe: firstDupe,
            hash: hash,
            parameterTypeProperties: parameterTypeProperties,
            arrayProperties: arrayProperties,
            httpMethods: httpMethods,
            sanitise: sanitise,
            sanitiseAll: sanitiseAll,
          };

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(16)));

        /***/
      },
      /* 28 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(global) {
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <http://feross.org>
           * @license  MIT
           */
          /* eslint-disable no-proto */

          var base64 = __webpack_require__(51);
          var ieee754 = __webpack_require__(52);
          var isArray = __webpack_require__(53);

          exports.Buffer = Buffer;
          exports.SlowBuffer = SlowBuffer;
          exports.INSPECT_MAX_BYTES = 50;

          /**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
          Buffer.TYPED_ARRAY_SUPPORT =
            global.TYPED_ARRAY_SUPPORT !== undefined
              ? global.TYPED_ARRAY_SUPPORT
              : typedArraySupport();

          /*
           * Export kMaxLength after typed array support is determined.
           */
          exports.kMaxLength = kMaxLength();

          function typedArraySupport() {
            try {
              var arr = new Uint8Array(1);
              arr.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function() {
                  return 42;
                },
              };
              return (
                arr.foo() === 42 && // typed array instances can be augmented
                typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                arr.subarray(1, 1).byteLength === 0
              ); // ie10 has broken `subarray`
            } catch (e) {
              return false;
            }
          }

          function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
          }

          function createBuffer(that, length) {
            if (kMaxLength() < length) {
              throw new RangeError('Invalid typed array length');
            }
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              // Return an augmented `Uint8Array` instance, for best performance
              that = new Uint8Array(length);
              that.__proto__ = Buffer.prototype;
            } else {
              // Fallback: Return an object instance of the Buffer class
              if (that === null) {
                that = new Buffer(length);
              }
              that.length = length;
            }

            return that;
          }

          /**
           * The Buffer constructor returns instances of `Uint8Array` that have their
           * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
           * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
           * and the `Uint8Array` methods. Square bracket notation works as expected -- it
           * returns a single octet.
           *
           * The `Uint8Array` prototype remains unmodified.
           */

          function Buffer(arg, encodingOrOffset, length) {
            if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
              return new Buffer(arg, encodingOrOffset, length);
            }

            // Common case.
            if (typeof arg === 'number') {
              if (typeof encodingOrOffset === 'string') {
                throw new Error(
                  'If encoding is specified then the first argument must be a string',
                );
              }
              return allocUnsafe(this, arg);
            }
            return from(this, arg, encodingOrOffset, length);
          }

          Buffer.poolSize = 8192; // not used by this implementation

          // TODO: Legacy, not needed anymore. Remove in next major version.
          Buffer._augment = function(arr) {
            arr.__proto__ = Buffer.prototype;
            return arr;
          };

          function from(that, value, encodingOrOffset, length) {
            if (typeof value === 'number') {
              throw new TypeError('"value" argument must not be a number');
            }

            if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
              return fromArrayBuffer(that, value, encodingOrOffset, length);
            }

            if (typeof value === 'string') {
              return fromString(that, value, encodingOrOffset);
            }

            return fromObject(that, value);
          }

          /**
           * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
           * if value is a number.
           * Buffer.from(str[, encoding])
           * Buffer.from(array)
           * Buffer.from(buffer)
           * Buffer.from(arrayBuffer[, byteOffset[, length]])
           **/
          Buffer.from = function(value, encodingOrOffset, length) {
            return from(null, value, encodingOrOffset, length);
          };

          if (Buffer.TYPED_ARRAY_SUPPORT) {
            Buffer.prototype.__proto__ = Uint8Array.prototype;
            Buffer.__proto__ = Uint8Array;
            if (
              typeof Symbol !== 'undefined' &&
              Symbol.species &&
              Buffer[Symbol.species] === Buffer
            ) {
              // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
              Object.defineProperty(Buffer, Symbol.species, {
                value: null,
                configurable: true,
              });
            }
          }

          function assertSize(size) {
            if (typeof size !== 'number') {
              throw new TypeError('"size" argument must be a number');
            } else if (size < 0) {
              throw new RangeError('"size" argument must not be negative');
            }
          }

          function alloc(that, size, fill, encoding) {
            assertSize(size);
            if (size <= 0) {
              return createBuffer(that, size);
            }
            if (fill !== undefined) {
              // Only pay attention to encoding if it's a string. This
              // prevents accidentally sending in a number that would
              // be interpretted as a start offset.
              return typeof encoding === 'string'
                ? createBuffer(that, size).fill(fill, encoding)
                : createBuffer(that, size).fill(fill);
            }
            return createBuffer(that, size);
          }

          /**
           * Creates a new filled Buffer instance.
           * alloc(size[, fill[, encoding]])
           **/
          Buffer.alloc = function(size, fill, encoding) {
            return alloc(null, size, fill, encoding);
          };

          function allocUnsafe(that, size) {
            assertSize(size);
            that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
            if (!Buffer.TYPED_ARRAY_SUPPORT) {
              for (var i = 0; i < size; ++i) {
                that[i] = 0;
              }
            }
            return that;
          }

          /**
           * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
           * */
          Buffer.allocUnsafe = function(size) {
            return allocUnsafe(null, size);
          };
          /**
           * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
           */
          Buffer.allocUnsafeSlow = function(size) {
            return allocUnsafe(null, size);
          };

          function fromString(that, string, encoding) {
            if (typeof encoding !== 'string' || encoding === '') {
              encoding = 'utf8';
            }

            if (!Buffer.isEncoding(encoding)) {
              throw new TypeError('"encoding" must be a valid string encoding');
            }

            var length = byteLength(string, encoding) | 0;
            that = createBuffer(that, length);

            var actual = that.write(string, encoding);

            if (actual !== length) {
              // Writing a hex string, for example, that contains invalid characters will
              // cause everything after the first invalid character to be ignored. (e.g.
              // 'abxxcd' will be treated as 'ab')
              that = that.slice(0, actual);
            }

            return that;
          }

          function fromArrayLike(that, array) {
            var length = array.length < 0 ? 0 : checked(array.length) | 0;
            that = createBuffer(that, length);
            for (var i = 0; i < length; i += 1) {
              that[i] = array[i] & 255;
            }
            return that;
          }

          function fromArrayBuffer(that, array, byteOffset, length) {
            array.byteLength; // this throws if `array` is not a valid ArrayBuffer

            if (byteOffset < 0 || array.byteLength < byteOffset) {
              throw new RangeError("'offset' is out of bounds");
            }

            if (array.byteLength < byteOffset + (length || 0)) {
              throw new RangeError("'length' is out of bounds");
            }

            if (byteOffset === undefined && length === undefined) {
              array = new Uint8Array(array);
            } else if (length === undefined) {
              array = new Uint8Array(array, byteOffset);
            } else {
              array = new Uint8Array(array, byteOffset, length);
            }

            if (Buffer.TYPED_ARRAY_SUPPORT) {
              // Return an augmented `Uint8Array` instance, for best performance
              that = array;
              that.__proto__ = Buffer.prototype;
            } else {
              // Fallback: Return an object instance of the Buffer class
              that = fromArrayLike(that, array);
            }
            return that;
          }

          function fromObject(that, obj) {
            if (Buffer.isBuffer(obj)) {
              var len = checked(obj.length) | 0;
              that = createBuffer(that, len);

              if (that.length === 0) {
                return that;
              }

              obj.copy(that, 0, 0, len);
              return that;
            }

            if (obj) {
              if (
                (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer) ||
                'length' in obj
              ) {
                if (typeof obj.length !== 'number' || isnan(obj.length)) {
                  return createBuffer(that, 0);
                }
                return fromArrayLike(that, obj);
              }

              if (obj.type === 'Buffer' && isArray(obj.data)) {
                return fromArrayLike(that, obj.data);
              }
            }

            throw new TypeError(
              'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
            );
          }

          function checked(length) {
            // Note: cannot use `length < kMaxLength()` here because that fails when
            // length is NaN (which is otherwise coerced to zero.)
            if (length >= kMaxLength()) {
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum ' +
                  'size: 0x' +
                  kMaxLength().toString(16) +
                  ' bytes',
              );
            }
            return length | 0;
          }

          function SlowBuffer(length) {
            if (+length != length) {
              // eslint-disable-line eqeqeq
              length = 0;
            }
            return Buffer.alloc(+length);
          }

          Buffer.isBuffer = function isBuffer(b) {
            return !!(b != null && b._isBuffer);
          };

          Buffer.compare = function compare(a, b) {
            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
              throw new TypeError('Arguments must be Buffers');
            }

            if (a === b) return 0;

            var x = a.length;
            var y = b.length;

            for (var i = 0, len = Math.min(x, y); i < len; ++i) {
              if (a[i] !== b[i]) {
                x = a[i];
                y = b[i];
                break;
              }
            }

            if (x < y) return -1;
            if (y < x) return 1;
            return 0;
          };

          Buffer.isEncoding = function isEncoding(encoding) {
            switch (String(encoding).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return true;
              default:
                return false;
            }
          };

          Buffer.concat = function concat(list, length) {
            if (!isArray(list)) {
              throw new TypeError('"list" argument must be an Array of Buffers');
            }

            if (list.length === 0) {
              return Buffer.alloc(0);
            }

            var i;
            if (length === undefined) {
              length = 0;
              for (i = 0; i < list.length; ++i) {
                length += list[i].length;
              }
            }

            var buffer = Buffer.allocUnsafe(length);
            var pos = 0;
            for (i = 0; i < list.length; ++i) {
              var buf = list[i];
              if (!Buffer.isBuffer(buf)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
              }
              buf.copy(buffer, pos);
              pos += buf.length;
            }
            return buffer;
          };

          function byteLength(string, encoding) {
            if (Buffer.isBuffer(string)) {
              return string.length;
            }
            if (
              typeof ArrayBuffer !== 'undefined' &&
              typeof ArrayBuffer.isView === 'function' &&
              (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)
            ) {
              return string.byteLength;
            }
            if (typeof string !== 'string') {
              string = '' + string;
            }

            var len = string.length;
            if (len === 0) return 0;

            // Use a for loop to avoid recursion
            var loweredCase = false;
            for (;;) {
              switch (encoding) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return len;
                case 'utf8':
                case 'utf-8':
                case undefined:
                  return utf8ToBytes(string).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return len * 2;
                case 'hex':
                  return len >>> 1;
                case 'base64':
                  return base64ToBytes(string).length;
                default:
                  if (loweredCase) return utf8ToBytes(string).length; // assume utf8
                  encoding = ('' + encoding).toLowerCase();
                  loweredCase = true;
              }
            }
          }
          Buffer.byteLength = byteLength;

          function slowToString(encoding, start, end) {
            var loweredCase = false;

            // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
            // property of a typed array.

            // This behaves neither like String nor Uint8Array in that we set start/end
            // to their upper/lower bounds if the value passed is out of range.
            // undefined is handled specially as per ECMA-262 6th Edition,
            // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
            if (start === undefined || start < 0) {
              start = 0;
            }
            // Return early if start > this.length. Done here to prevent potential uint32
            // coercion fail below.
            if (start > this.length) {
              return '';
            }

            if (end === undefined || end > this.length) {
              end = this.length;
            }

            if (end <= 0) {
              return '';
            }

            // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
            end >>>= 0;
            start >>>= 0;

            if (end <= start) {
              return '';
            }

            if (!encoding) encoding = 'utf8';

            while (true) {
              switch (encoding) {
                case 'hex':
                  return hexSlice(this, start, end);

                case 'utf8':
                case 'utf-8':
                  return utf8Slice(this, start, end);

                case 'ascii':
                  return asciiSlice(this, start, end);

                case 'latin1':
                case 'binary':
                  return latin1Slice(this, start, end);

                case 'base64':
                  return base64Slice(this, start, end);

                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return utf16leSlice(this, start, end);

                default:
                  if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                  encoding = (encoding + '').toLowerCase();
                  loweredCase = true;
              }
            }
          }

          // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
          // Buffer instances.
          Buffer.prototype._isBuffer = true;

          function swap(b, n, m) {
            var i = b[n];
            b[n] = b[m];
            b[m] = i;
          }

          Buffer.prototype.swap16 = function swap16() {
            var len = this.length;
            if (len % 2 !== 0) {
              throw new RangeError('Buffer size must be a multiple of 16-bits');
            }
            for (var i = 0; i < len; i += 2) {
              swap(this, i, i + 1);
            }
            return this;
          };

          Buffer.prototype.swap32 = function swap32() {
            var len = this.length;
            if (len % 4 !== 0) {
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            }
            for (var i = 0; i < len; i += 4) {
              swap(this, i, i + 3);
              swap(this, i + 1, i + 2);
            }
            return this;
          };

          Buffer.prototype.swap64 = function swap64() {
            var len = this.length;
            if (len % 8 !== 0) {
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            }
            for (var i = 0; i < len; i += 8) {
              swap(this, i, i + 7);
              swap(this, i + 1, i + 6);
              swap(this, i + 2, i + 5);
              swap(this, i + 3, i + 4);
            }
            return this;
          };

          Buffer.prototype.toString = function toString() {
            var length = this.length | 0;
            if (length === 0) return '';
            if (arguments.length === 0) return utf8Slice(this, 0, length);
            return slowToString.apply(this, arguments);
          };

          Buffer.prototype.equals = function equals(b) {
            if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
            if (this === b) return true;
            return Buffer.compare(this, b) === 0;
          };

          Buffer.prototype.inspect = function inspect() {
            var str = '';
            var max = exports.INSPECT_MAX_BYTES;
            if (this.length > 0) {
              str = this.toString('hex', 0, max)
                .match(/.{2}/g)
                .join(' ');
              if (this.length > max) str += ' ... ';
            }
            return '<Buffer ' + str + '>';
          };

          Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
            if (!Buffer.isBuffer(target)) {
              throw new TypeError('Argument must be a Buffer');
            }

            if (start === undefined) {
              start = 0;
            }
            if (end === undefined) {
              end = target ? target.length : 0;
            }
            if (thisStart === undefined) {
              thisStart = 0;
            }
            if (thisEnd === undefined) {
              thisEnd = this.length;
            }

            if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
              throw new RangeError('out of range index');
            }

            if (thisStart >= thisEnd && start >= end) {
              return 0;
            }
            if (thisStart >= thisEnd) {
              return -1;
            }
            if (start >= end) {
              return 1;
            }

            start >>>= 0;
            end >>>= 0;
            thisStart >>>= 0;
            thisEnd >>>= 0;

            if (this === target) return 0;

            var x = thisEnd - thisStart;
            var y = end - start;
            var len = Math.min(x, y);

            var thisCopy = this.slice(thisStart, thisEnd);
            var targetCopy = target.slice(start, end);

            for (var i = 0; i < len; ++i) {
              if (thisCopy[i] !== targetCopy[i]) {
                x = thisCopy[i];
                y = targetCopy[i];
                break;
              }
            }

            if (x < y) return -1;
            if (y < x) return 1;
            return 0;
          };

          // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
          // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
          //
          // Arguments:
          // - buffer - a Buffer to search
          // - val - a string, Buffer, or number
          // - byteOffset - an index into `buffer`; will be clamped to an int32
          // - encoding - an optional encoding, relevant is val is a string
          // - dir - true for indexOf, false for lastIndexOf
          function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
            // Empty buffer means no match
            if (buffer.length === 0) return -1;

            // Normalize byteOffset
            if (typeof byteOffset === 'string') {
              encoding = byteOffset;
              byteOffset = 0;
            } else if (byteOffset > 0x7fffffff) {
              byteOffset = 0x7fffffff;
            } else if (byteOffset < -0x80000000) {
              byteOffset = -0x80000000;
            }
            byteOffset = +byteOffset; // Coerce to Number.
            if (isNaN(byteOffset)) {
              // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
              byteOffset = dir ? 0 : buffer.length - 1;
            }

            // Normalize byteOffset: negative offsets start from the end of the buffer
            if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
            if (byteOffset >= buffer.length) {
              if (dir) return -1;
              else byteOffset = buffer.length - 1;
            } else if (byteOffset < 0) {
              if (dir) byteOffset = 0;
              else return -1;
            }

            // Normalize val
            if (typeof val === 'string') {
              val = Buffer.from(val, encoding);
            }

            // Finally, search either indexOf (if dir is true) or lastIndexOf
            if (Buffer.isBuffer(val)) {
              // Special case: looking for empty string/buffer always fails
              if (val.length === 0) {
                return -1;
              }
              return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
            } else if (typeof val === 'number') {
              val = val & 0xff; // Search for a byte value [0-255]
              if (
                Buffer.TYPED_ARRAY_SUPPORT &&
                typeof Uint8Array.prototype.indexOf === 'function'
              ) {
                if (dir) {
                  return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                } else {
                  return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                }
              }
              return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
            }

            throw new TypeError('val must be string, number or Buffer');
          }

          function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
            var indexSize = 1;
            var arrLength = arr.length;
            var valLength = val.length;

            if (encoding !== undefined) {
              encoding = String(encoding).toLowerCase();
              if (
                encoding === 'ucs2' ||
                encoding === 'ucs-2' ||
                encoding === 'utf16le' ||
                encoding === 'utf-16le'
              ) {
                if (arr.length < 2 || val.length < 2) {
                  return -1;
                }
                indexSize = 2;
                arrLength /= 2;
                valLength /= 2;
                byteOffset /= 2;
              }
            }

            function read(buf, i) {
              if (indexSize === 1) {
                return buf[i];
              } else {
                return buf.readUInt16BE(i * indexSize);
              }
            }

            var i;
            if (dir) {
              var foundIndex = -1;
              for (i = byteOffset; i < arrLength; i++) {
                if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                  if (foundIndex === -1) foundIndex = i;
                  if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                } else {
                  if (foundIndex !== -1) i -= i - foundIndex;
                  foundIndex = -1;
                }
              }
            } else {
              if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
              for (i = byteOffset; i >= 0; i--) {
                var found = true;
                for (var j = 0; j < valLength; j++) {
                  if (read(arr, i + j) !== read(val, j)) {
                    found = false;
                    break;
                  }
                }
                if (found) return i;
              }
            }

            return -1;
          }

          Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
            return this.indexOf(val, byteOffset, encoding) !== -1;
          };

          Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
          };

          Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
          };

          function hexWrite(buf, string, offset, length) {
            offset = Number(offset) || 0;
            var remaining = buf.length - offset;
            if (!length) {
              length = remaining;
            } else {
              length = Number(length);
              if (length > remaining) {
                length = remaining;
              }
            }

            // must be an even number of digits
            var strLen = string.length;
            if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

            if (length > strLen / 2) {
              length = strLen / 2;
            }
            for (var i = 0; i < length; ++i) {
              var parsed = parseInt(string.substr(i * 2, 2), 16);
              if (isNaN(parsed)) return i;
              buf[offset + i] = parsed;
            }
            return i;
          }

          function utf8Write(buf, string, offset, length) {
            return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
          }

          function asciiWrite(buf, string, offset, length) {
            return blitBuffer(asciiToBytes(string), buf, offset, length);
          }

          function latin1Write(buf, string, offset, length) {
            return asciiWrite(buf, string, offset, length);
          }

          function base64Write(buf, string, offset, length) {
            return blitBuffer(base64ToBytes(string), buf, offset, length);
          }

          function ucs2Write(buf, string, offset, length) {
            return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
          }

          Buffer.prototype.write = function write(string, offset, length, encoding) {
            // Buffer#write(string)
            if (offset === undefined) {
              encoding = 'utf8';
              length = this.length;
              offset = 0;
              // Buffer#write(string, encoding)
            } else if (length === undefined && typeof offset === 'string') {
              encoding = offset;
              length = this.length;
              offset = 0;
              // Buffer#write(string, offset[, length][, encoding])
            } else if (isFinite(offset)) {
              offset = offset | 0;
              if (isFinite(length)) {
                length = length | 0;
                if (encoding === undefined) encoding = 'utf8';
              } else {
                encoding = length;
                length = undefined;
              }
              // legacy write(string, encoding, offset, length) - remove in v0.13
            } else {
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported',
              );
            }

            var remaining = this.length - offset;
            if (length === undefined || length > remaining) length = remaining;

            if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
              throw new RangeError('Attempt to write outside buffer bounds');
            }

            if (!encoding) encoding = 'utf8';

            var loweredCase = false;
            for (;;) {
              switch (encoding) {
                case 'hex':
                  return hexWrite(this, string, offset, length);

                case 'utf8':
                case 'utf-8':
                  return utf8Write(this, string, offset, length);

                case 'ascii':
                  return asciiWrite(this, string, offset, length);

                case 'latin1':
                case 'binary':
                  return latin1Write(this, string, offset, length);

                case 'base64':
                  // Warning: maxLength not taken into account in base64Write
                  return base64Write(this, string, offset, length);

                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return ucs2Write(this, string, offset, length);

                default:
                  if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                  encoding = ('' + encoding).toLowerCase();
                  loweredCase = true;
              }
            }
          };

          Buffer.prototype.toJSON = function toJSON() {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          };

          function base64Slice(buf, start, end) {
            if (start === 0 && end === buf.length) {
              return base64.fromByteArray(buf);
            } else {
              return base64.fromByteArray(buf.slice(start, end));
            }
          }

          function utf8Slice(buf, start, end) {
            end = Math.min(buf.length, end);
            var res = [];

            var i = start;
            while (i < end) {
              var firstByte = buf[i];
              var codePoint = null;
              var bytesPerSequence =
                firstByte > 0xef ? 4 : firstByte > 0xdf ? 3 : firstByte > 0xbf ? 2 : 1;

              if (i + bytesPerSequence <= end) {
                var secondByte, thirdByte, fourthByte, tempCodePoint;

                switch (bytesPerSequence) {
                  case 1:
                    if (firstByte < 0x80) {
                      codePoint = firstByte;
                    }
                    break;
                  case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xc0) === 0x80) {
                      tempCodePoint = ((firstByte & 0x1f) << 0x6) | (secondByte & 0x3f);
                      if (tempCodePoint > 0x7f) {
                        codePoint = tempCodePoint;
                      }
                    }
                    break;
                  case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xc0) === 0x80 && (thirdByte & 0xc0) === 0x80) {
                      tempCodePoint =
                        ((firstByte & 0xf) << 0xc) |
                        ((secondByte & 0x3f) << 0x6) |
                        (thirdByte & 0x3f);
                      if (
                        tempCodePoint > 0x7ff &&
                        (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
                      ) {
                        codePoint = tempCodePoint;
                      }
                    }
                    break;
                  case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if (
                      (secondByte & 0xc0) === 0x80 &&
                      (thirdByte & 0xc0) === 0x80 &&
                      (fourthByte & 0xc0) === 0x80
                    ) {
                      tempCodePoint =
                        ((firstByte & 0xf) << 0x12) |
                        ((secondByte & 0x3f) << 0xc) |
                        ((thirdByte & 0x3f) << 0x6) |
                        (fourthByte & 0x3f);
                      if (tempCodePoint > 0xffff && tempCodePoint < 0x110000) {
                        codePoint = tempCodePoint;
                      }
                    }
                }
              }

              if (codePoint === null) {
                // we did not generate a valid codePoint so insert a
                // replacement char (U+FFFD) and advance only 1 byte
                codePoint = 0xfffd;
                bytesPerSequence = 1;
              } else if (codePoint > 0xffff) {
                // encode to utf16 (surrogate pair dance)
                codePoint -= 0x10000;
                res.push(((codePoint >>> 10) & 0x3ff) | 0xd800);
                codePoint = 0xdc00 | (codePoint & 0x3ff);
              }

              res.push(codePoint);
              i += bytesPerSequence;
            }

            return decodeCodePointsArray(res);
          }

          // Based on http://stackoverflow.com/a/22747272/680742, the browser with
          // the lowest limit is Chrome, with 0x10000 args.
          // We go 1 magnitude less, for safety
          var MAX_ARGUMENTS_LENGTH = 0x1000;

          function decodeCodePointsArray(codePoints) {
            var len = codePoints.length;
            if (len <= MAX_ARGUMENTS_LENGTH) {
              return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
            }

            // Decode in chunks to avoid "call stack size exceeded".
            var res = '';
            var i = 0;
            while (i < len) {
              res += String.fromCharCode.apply(
                String,
                codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH)),
              );
            }
            return res;
          }

          function asciiSlice(buf, start, end) {
            var ret = '';
            end = Math.min(buf.length, end);

            for (var i = start; i < end; ++i) {
              ret += String.fromCharCode(buf[i] & 0x7f);
            }
            return ret;
          }

          function latin1Slice(buf, start, end) {
            var ret = '';
            end = Math.min(buf.length, end);

            for (var i = start; i < end; ++i) {
              ret += String.fromCharCode(buf[i]);
            }
            return ret;
          }

          function hexSlice(buf, start, end) {
            var len = buf.length;

            if (!start || start < 0) start = 0;
            if (!end || end < 0 || end > len) end = len;

            var out = '';
            for (var i = start; i < end; ++i) {
              out += toHex(buf[i]);
            }
            return out;
          }

          function utf16leSlice(buf, start, end) {
            var bytes = buf.slice(start, end);
            var res = '';
            for (var i = 0; i < bytes.length; i += 2) {
              res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
            }
            return res;
          }

          Buffer.prototype.slice = function slice(start, end) {
            var len = this.length;
            start = ~~start;
            end = end === undefined ? len : ~~end;

            if (start < 0) {
              start += len;
              if (start < 0) start = 0;
            } else if (start > len) {
              start = len;
            }

            if (end < 0) {
              end += len;
              if (end < 0) end = 0;
            } else if (end > len) {
              end = len;
            }

            if (end < start) end = start;

            var newBuf;
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              newBuf = this.subarray(start, end);
              newBuf.__proto__ = Buffer.prototype;
            } else {
              var sliceLen = end - start;
              newBuf = new Buffer(sliceLen, undefined);
              for (var i = 0; i < sliceLen; ++i) {
                newBuf[i] = this[i + start];
              }
            }

            return newBuf;
          };

          /*
           * Need to make sure that buffer isn't trying to write out of bounds.
           */
          function checkOffset(offset, ext, length) {
            if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
            if (offset + ext > length)
              throw new RangeError('Trying to access beyond buffer length');
          }

          Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
            offset = offset | 0;
            byteLength = byteLength | 0;
            if (!noAssert) checkOffset(offset, byteLength, this.length);

            var val = this[offset];
            var mul = 1;
            var i = 0;
            while (++i < byteLength && (mul *= 0x100)) {
              val += this[offset + i] * mul;
            }

            return val;
          };

          Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
            offset = offset | 0;
            byteLength = byteLength | 0;
            if (!noAssert) {
              checkOffset(offset, byteLength, this.length);
            }

            var val = this[offset + --byteLength];
            var mul = 1;
            while (byteLength > 0 && (mul *= 0x100)) {
              val += this[offset + --byteLength] * mul;
            }

            return val;
          };

          Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 1, this.length);
            return this[offset];
          };

          Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length);
            return this[offset] | (this[offset + 1] << 8);
          };

          Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length);
            return (this[offset] << 8) | this[offset + 1];
          };

          Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length);

            return (
              (this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16)) +
              this[offset + 3] * 0x1000000
            );
          };

          Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length);

            return (
              this[offset] * 0x1000000 +
              ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
            );
          };

          Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
            offset = offset | 0;
            byteLength = byteLength | 0;
            if (!noAssert) checkOffset(offset, byteLength, this.length);

            var val = this[offset];
            var mul = 1;
            var i = 0;
            while (++i < byteLength && (mul *= 0x100)) {
              val += this[offset + i] * mul;
            }
            mul *= 0x80;

            if (val >= mul) val -= Math.pow(2, 8 * byteLength);

            return val;
          };

          Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
            offset = offset | 0;
            byteLength = byteLength | 0;
            if (!noAssert) checkOffset(offset, byteLength, this.length);

            var i = byteLength;
            var mul = 1;
            var val = this[offset + --i];
            while (i > 0 && (mul *= 0x100)) {
              val += this[offset + --i] * mul;
            }
            mul *= 0x80;

            if (val >= mul) val -= Math.pow(2, 8 * byteLength);

            return val;
          };

          Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 1, this.length);
            if (!(this[offset] & 0x80)) return this[offset];
            return (0xff - this[offset] + 1) * -1;
          };

          Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length);
            var val = this[offset] | (this[offset + 1] << 8);
            return val & 0x8000 ? val | 0xffff0000 : val;
          };

          Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length);
            var val = this[offset + 1] | (this[offset] << 8);
            return val & 0x8000 ? val | 0xffff0000 : val;
          };

          Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length);

            return (
              this[offset] |
              (this[offset + 1] << 8) |
              (this[offset + 2] << 16) |
              (this[offset + 3] << 24)
            );
          };

          Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length);

            return (
              (this[offset] << 24) |
              (this[offset + 1] << 16) |
              (this[offset + 2] << 8) |
              this[offset + 3]
            );
          };

          Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length);
            return ieee754.read(this, offset, true, 23, 4);
          };

          Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length);
            return ieee754.read(this, offset, false, 23, 4);
          };

          Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 8, this.length);
            return ieee754.read(this, offset, true, 52, 8);
          };

          Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
            if (!noAssert) checkOffset(offset, 8, this.length);
            return ieee754.read(this, offset, false, 52, 8);
          };

          function checkInt(buf, value, offset, ext, max, min) {
            if (!Buffer.isBuffer(buf))
              throw new TypeError('"buffer" argument must be a Buffer instance');
            if (value > max || value < min)
              throw new RangeError('"value" argument is out of bounds');
            if (offset + ext > buf.length) throw new RangeError('Index out of range');
          }

          Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
            value = +value;
            offset = offset | 0;
            byteLength = byteLength | 0;
            if (!noAssert) {
              var maxBytes = Math.pow(2, 8 * byteLength) - 1;
              checkInt(this, value, offset, byteLength, maxBytes, 0);
            }

            var mul = 1;
            var i = 0;
            this[offset] = value & 0xff;
            while (++i < byteLength && (mul *= 0x100)) {
              this[offset + i] = (value / mul) & 0xff;
            }

            return offset + byteLength;
          };

          Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
            value = +value;
            offset = offset | 0;
            byteLength = byteLength | 0;
            if (!noAssert) {
              var maxBytes = Math.pow(2, 8 * byteLength) - 1;
              checkInt(this, value, offset, byteLength, maxBytes, 0);
            }

            var i = byteLength - 1;
            var mul = 1;
            this[offset + i] = value & 0xff;
            while (--i >= 0 && (mul *= 0x100)) {
              this[offset + i] = (value / mul) & 0xff;
            }

            return offset + byteLength;
          };

          Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
            if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
            this[offset] = value & 0xff;
            return offset + 1;
          };

          function objectWriteUInt16(buf, value, offset, littleEndian) {
            if (value < 0) value = 0xffff + value + 1;
            for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
              buf[offset + i] =
                (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
                ((littleEndian ? i : 1 - i) * 8);
            }
          }

          Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value & 0xff;
              this[offset + 1] = value >>> 8;
            } else {
              objectWriteUInt16(this, value, offset, true);
            }
            return offset + 2;
          };

          Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value >>> 8;
              this[offset + 1] = value & 0xff;
            } else {
              objectWriteUInt16(this, value, offset, false);
            }
            return offset + 2;
          };

          function objectWriteUInt32(buf, value, offset, littleEndian) {
            if (value < 0) value = 0xffffffff + value + 1;
            for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
              buf[offset + i] = (value >>> ((littleEndian ? i : 3 - i) * 8)) & 0xff;
            }
          }

          Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset + 3] = value >>> 24;
              this[offset + 2] = value >>> 16;
              this[offset + 1] = value >>> 8;
              this[offset] = value & 0xff;
            } else {
              objectWriteUInt32(this, value, offset, true);
            }
            return offset + 4;
          };

          Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value >>> 24;
              this[offset + 1] = value >>> 16;
              this[offset + 2] = value >>> 8;
              this[offset + 3] = value & 0xff;
            } else {
              objectWriteUInt32(this, value, offset, false);
            }
            return offset + 4;
          };

          Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) {
              var limit = Math.pow(2, 8 * byteLength - 1);

              checkInt(this, value, offset, byteLength, limit - 1, -limit);
            }

            var i = 0;
            var mul = 1;
            var sub = 0;
            this[offset] = value & 0xff;
            while (++i < byteLength && (mul *= 0x100)) {
              if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                sub = 1;
              }
              this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
            }

            return offset + byteLength;
          };

          Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) {
              var limit = Math.pow(2, 8 * byteLength - 1);

              checkInt(this, value, offset, byteLength, limit - 1, -limit);
            }

            var i = byteLength - 1;
            var mul = 1;
            var sub = 0;
            this[offset + i] = value & 0xff;
            while (--i >= 0 && (mul *= 0x100)) {
              if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                sub = 1;
              }
              this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
            }

            return offset + byteLength;
          };

          Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
            if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
            if (value < 0) value = 0xff + value + 1;
            this[offset] = value & 0xff;
            return offset + 1;
          };

          Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value & 0xff;
              this[offset + 1] = value >>> 8;
            } else {
              objectWriteUInt16(this, value, offset, true);
            }
            return offset + 2;
          };

          Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value >>> 8;
              this[offset + 1] = value & 0xff;
            } else {
              objectWriteUInt16(this, value, offset, false);
            }
            return offset + 2;
          };

          Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value & 0xff;
              this[offset + 1] = value >>> 8;
              this[offset + 2] = value >>> 16;
              this[offset + 3] = value >>> 24;
            } else {
              objectWriteUInt32(this, value, offset, true);
            }
            return offset + 4;
          };

          Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
            value = +value;
            offset = offset | 0;
            if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
            if (value < 0) value = 0xffffffff + value + 1;
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              this[offset] = value >>> 24;
              this[offset + 1] = value >>> 16;
              this[offset + 2] = value >>> 8;
              this[offset + 3] = value & 0xff;
            } else {
              objectWriteUInt32(this, value, offset, false);
            }
            return offset + 4;
          };

          function checkIEEE754(buf, value, offset, ext, max, min) {
            if (offset + ext > buf.length) throw new RangeError('Index out of range');
            if (offset < 0) throw new RangeError('Index out of range');
          }

          function writeFloat(buf, value, offset, littleEndian, noAssert) {
            if (!noAssert) {
              checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
            }
            ieee754.write(buf, value, offset, littleEndian, 23, 4);
            return offset + 4;
          }

          Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
            return writeFloat(this, value, offset, true, noAssert);
          };

          Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
            return writeFloat(this, value, offset, false, noAssert);
          };

          function writeDouble(buf, value, offset, littleEndian, noAssert) {
            if (!noAssert) {
              checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
            }
            ieee754.write(buf, value, offset, littleEndian, 52, 8);
            return offset + 8;
          }

          Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
            return writeDouble(this, value, offset, true, noAssert);
          };

          Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
            return writeDouble(this, value, offset, false, noAssert);
          };

          // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
          Buffer.prototype.copy = function copy(target, targetStart, start, end) {
            if (!start) start = 0;
            if (!end && end !== 0) end = this.length;
            if (targetStart >= target.length) targetStart = target.length;
            if (!targetStart) targetStart = 0;
            if (end > 0 && end < start) end = start;

            // Copy 0 bytes; we're done
            if (end === start) return 0;
            if (target.length === 0 || this.length === 0) return 0;

            // Fatal error conditions
            if (targetStart < 0) {
              throw new RangeError('targetStart out of bounds');
            }
            if (start < 0 || start >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (end < 0) throw new RangeError('sourceEnd out of bounds');

            // Are we oob?
            if (end > this.length) end = this.length;
            if (target.length - targetStart < end - start) {
              end = target.length - targetStart + start;
            }

            var len = end - start;
            var i;

            if (this === target && start < targetStart && targetStart < end) {
              // descending copy from end
              for (i = len - 1; i >= 0; --i) {
                target[i + targetStart] = this[i + start];
              }
            } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
              // ascending copy from start
              for (i = 0; i < len; ++i) {
                target[i + targetStart] = this[i + start];
              }
            } else {
              Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
            }

            return len;
          };

          // Usage:
          //    buffer.fill(number[, offset[, end]])
          //    buffer.fill(buffer[, offset[, end]])
          //    buffer.fill(string[, offset[, end]][, encoding])
          Buffer.prototype.fill = function fill(val, start, end, encoding) {
            // Handle string cases:
            if (typeof val === 'string') {
              if (typeof start === 'string') {
                encoding = start;
                start = 0;
                end = this.length;
              } else if (typeof end === 'string') {
                encoding = end;
                end = this.length;
              }
              if (val.length === 1) {
                var code = val.charCodeAt(0);
                if (code < 256) {
                  val = code;
                }
              }
              if (encoding !== undefined && typeof encoding !== 'string') {
                throw new TypeError('encoding must be a string');
              }
              if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                throw new TypeError('Unknown encoding: ' + encoding);
              }
            } else if (typeof val === 'number') {
              val = val & 255;
            }

            // Invalid ranges are not set to a default, so can range check early.
            if (start < 0 || this.length < start || this.length < end) {
              throw new RangeError('Out of range index');
            }

            if (end <= start) {
              return this;
            }

            start = start >>> 0;
            end = end === undefined ? this.length : end >>> 0;

            if (!val) val = 0;

            var i;
            if (typeof val === 'number') {
              for (i = start; i < end; ++i) {
                this[i] = val;
              }
            } else {
              var bytes = Buffer.isBuffer(val)
                ? val
                : utf8ToBytes(new Buffer(val, encoding).toString());
              var len = bytes.length;
              for (i = 0; i < end - start; ++i) {
                this[i + start] = bytes[i % len];
              }
            }

            return this;
          };

          // HELPER FUNCTIONS
          // ================

          var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

          function base64clean(str) {
            // Node strips out invalid characters like \n and \t from the string, base64-js does not
            str = stringtrim(str).replace(INVALID_BASE64_RE, '');
            // Node converts strings with length < 2 to ''
            if (str.length < 2) return '';
            // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
            while (str.length % 4 !== 0) {
              str = str + '=';
            }
            return str;
          }

          function stringtrim(str) {
            if (str.trim) return str.trim();
            return str.replace(/^\s+|\s+$/g, '');
          }

          function toHex(n) {
            if (n < 16) return '0' + n.toString(16);
            return n.toString(16);
          }

          function utf8ToBytes(string, units) {
            units = units || Infinity;
            var codePoint;
            var length = string.length;
            var leadSurrogate = null;
            var bytes = [];

            for (var i = 0; i < length; ++i) {
              codePoint = string.charCodeAt(i);

              // is surrogate component
              if (codePoint > 0xd7ff && codePoint < 0xe000) {
                // last char was a lead
                if (!leadSurrogate) {
                  // no lead yet
                  if (codePoint > 0xdbff) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                    continue;
                  } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                    continue;
                  }

                  // valid lead
                  leadSurrogate = codePoint;

                  continue;
                }

                // 2 leads in a row
                if (codePoint < 0xdc00) {
                  if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                  leadSurrogate = codePoint;
                  continue;
                }

                // valid surrogate pair
                codePoint = (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) + 0x10000;
              } else if (leadSurrogate) {
                // valid bmp char, but last char was a lead
                if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
              }

              leadSurrogate = null;

              // encode utf8
              if (codePoint < 0x80) {
                if ((units -= 1) < 0) break;
                bytes.push(codePoint);
              } else if (codePoint < 0x800) {
                if ((units -= 2) < 0) break;
                bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
              } else if (codePoint < 0x10000) {
                if ((units -= 3) < 0) break;
                bytes.push(
                  (codePoint >> 0xc) | 0xe0,
                  ((codePoint >> 0x6) & 0x3f) | 0x80,
                  (codePoint & 0x3f) | 0x80,
                );
              } else if (codePoint < 0x110000) {
                if ((units -= 4) < 0) break;
                bytes.push(
                  (codePoint >> 0x12) | 0xf0,
                  ((codePoint >> 0xc) & 0x3f) | 0x80,
                  ((codePoint >> 0x6) & 0x3f) | 0x80,
                  (codePoint & 0x3f) | 0x80,
                );
              } else {
                throw new Error('Invalid code point');
              }
            }

            return bytes;
          }

          function asciiToBytes(str) {
            var byteArray = [];
            for (var i = 0; i < str.length; ++i) {
              // Node's code seems to be doing this and not & 0x7F..
              byteArray.push(str.charCodeAt(i) & 0xff);
            }
            return byteArray;
          }

          function utf16leToBytes(str, units) {
            var c, hi, lo;
            var byteArray = [];
            for (var i = 0; i < str.length; ++i) {
              if ((units -= 2) < 0) break;

              c = str.charCodeAt(i);
              hi = c >> 8;
              lo = c % 256;
              byteArray.push(lo);
              byteArray.push(hi);
            }

            return byteArray;
          }

          function base64ToBytes(str) {
            return base64.toByteArray(base64clean(str));
          }

          function blitBuffer(src, dst, offset, length) {
            for (var i = 0; i < length; ++i) {
              if (i + offset >= dst.length || i >= src.length) break;
              dst[i + offset] = src[i];
            }
            return i;
          }

          function isnan(val) {
            return val !== val; // eslint-disable-line no-self-compare
          }

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(11)));

        /***/
      },
      /* 29 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global) {
          exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream);

          exports.writableStream = isFunction(global.WritableStream);

          exports.abortController = isFunction(global.AbortController);

          exports.blobConstructor = false;
          try {
            new Blob([new ArrayBuffer(1)]);
            exports.blobConstructor = true;
          } catch (e) {}

          // The xhr request to example.com may violate some restrictive CSP configurations,
          // so if we're running in a browser that supports `fetch`, avoid calling getXHR()
          // and assume support for certain features below.
          var xhr;
          function getXHR() {
            // Cache the xhr value
            if (xhr !== undefined) return xhr;

            if (global.XMLHttpRequest) {
              xhr = new global.XMLHttpRequest();
              // If XDomainRequest is available (ie only, where xhr might not work
              // cross domain), use the page location. Otherwise use example.com
              // Note: this doesn't actually make an http request.
              try {
                xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com');
              } catch (e) {
                xhr = null;
              }
            } else {
              // Service workers don't have XHR
              xhr = null;
            }
            return xhr;
          }

          function checkTypeSupport(type) {
            var xhr = getXHR();
            if (!xhr) return false;
            try {
              xhr.responseType = type;
              return xhr.responseType === type;
            } catch (e) {}
            return false;
          }

          // For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
          // Safari 7.1 appears to have fixed this bug.
          var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined';
          var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice);

          // If fetch is supported, then arraybuffer will be supported too. Skip calling
          // checkTypeSupport(), since that calls getXHR().
          exports.arraybuffer =
            exports.fetch || (haveArrayBuffer && checkTypeSupport('arraybuffer'));

          // These next two tests unavoidably show warnings in Chrome. Since fetch will always
          // be used if it's available, just return false for these to avoid the warnings.
          exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream');
          exports.mozchunkedarraybuffer =
            !exports.fetch && haveArrayBuffer && checkTypeSupport('moz-chunked-arraybuffer');

          // If fetch is supported, then overrideMimeType will be supported too. Skip calling
          // getXHR().
          exports.overrideMimeType =
            exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);

          exports.vbArray = isFunction(global.VBArray);

          function isFunction(value) {
            return typeof value === 'function';
          }

          xhr = null; // Help gc

          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(11)));

        /***/
      },
      /* 30 */
      /***/ function(module, exports) {
        module.exports = require('inherits');

        /***/
      },
      /* 31 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(process, Buffer, global) {
          var capability = __webpack_require__(29);
          var inherits = __webpack_require__(30);
          var stream = __webpack_require__(32);

          var rStates = (exports.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          });

          var IncomingMessage = (exports.IncomingMessage = function(
            xhr,
            response,
            mode,
            fetchTimer,
          ) {
            var self = this;
            stream.Readable.call(self);

            self._mode = mode;
            self.headers = {};
            self.rawHeaders = [];
            self.trailers = {};
            self.rawTrailers = [];

            // Fake the 'close' event, but only once 'end' fires
            self.on('end', function() {
              // The nextTick is necessary to prevent the 'request' module from causing an infinite loop
              process.nextTick(function() {
                self.emit('close');
              });
            });

            if (mode === 'fetch') {
              self._fetchResponse = response;

              self.url = response.url;
              self.statusCode = response.status;
              self.statusMessage = response.statusText;

              response.headers.forEach(function(header, key) {
                self.headers[key.toLowerCase()] = header;
                self.rawHeaders.push(key, header);
              });

              if (capability.writableStream) {
                var writable = new WritableStream({
                  write: function(chunk) {
                    return new Promise(function(resolve, reject) {
                      if (self._destroyed) {
                        reject();
                      } else if (self.push(new Buffer(chunk))) {
                        resolve();
                      } else {
                        self._resumeFetch = resolve;
                      }
                    });
                  },
                  close: function() {
                    global.clearTimeout(fetchTimer);
                    if (!self._destroyed) self.push(null);
                  },
                  abort: function(err) {
                    if (!self._destroyed) self.emit('error', err);
                  },
                });

                try {
                  response.body.pipeTo(writable).catch(function(err) {
                    global.clearTimeout(fetchTimer);
                    if (!self._destroyed) self.emit('error', err);
                  });
                  return;
                } catch (e) {} // pipeTo method isn't defined. Can't find a better way to feature test this
              }
              // fallback for when writableStream or pipeTo aren't available
              var reader = response.body.getReader();
              function read() {
                reader
                  .read()
                  .then(function(result) {
                    if (self._destroyed) return;
                    if (result.done) {
                      global.clearTimeout(fetchTimer);
                      self.push(null);
                      return;
                    }
                    self.push(new Buffer(result.value));
                    read();
                  })
                  .catch(function(err) {
                    global.clearTimeout(fetchTimer);
                    if (!self._destroyed) self.emit('error', err);
                  });
              }
              read();
            } else {
              self._xhr = xhr;
              self._pos = 0;

              self.url = xhr.responseURL;
              self.statusCode = xhr.status;
              self.statusMessage = xhr.statusText;
              var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
              headers.forEach(function(header) {
                var matches = header.match(/^([^:]+):\s*(.*)/);
                if (matches) {
                  var key = matches[1].toLowerCase();
                  if (key === 'set-cookie') {
                    if (self.headers[key] === undefined) {
                      self.headers[key] = [];
                    }
                    self.headers[key].push(matches[2]);
                  } else if (self.headers[key] !== undefined) {
                    self.headers[key] += ', ' + matches[2];
                  } else {
                    self.headers[key] = matches[2];
                  }
                  self.rawHeaders.push(matches[1], matches[2]);
                }
              });

              self._charset = 'x-user-defined';
              if (!capability.overrideMimeType) {
                var mimeType = self.rawHeaders['mime-type'];
                if (mimeType) {
                  var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
                  if (charsetMatch) {
                    self._charset = charsetMatch[1].toLowerCase();
                  }
                }
                if (!self._charset) self._charset = 'utf-8'; // best guess
              }
            }
          });

          inherits(IncomingMessage, stream.Readable);

          IncomingMessage.prototype._read = function() {
            var self = this;

            var resolve = self._resumeFetch;
            if (resolve) {
              self._resumeFetch = null;
              resolve();
            }
          };

          IncomingMessage.prototype._onXHRProgress = function() {
            var self = this;

            var xhr = self._xhr;

            var response = null;
            switch (self._mode) {
              case 'text:vbarray': // For IE9
                if (xhr.readyState !== rStates.DONE) break;
                try {
                  // This fails in IE8
                  response = new global.VBArray(xhr.responseBody).toArray();
                } catch (e) {}
                if (response !== null) {
                  self.push(new Buffer(response));
                  break;
                }
              // Falls through in IE8
              case 'text':
                try {
                  // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
                  response = xhr.responseText;
                } catch (e) {
                  self._mode = 'text:vbarray';
                  break;
                }
                if (response.length > self._pos) {
                  var newData = response.substr(self._pos);
                  if (self._charset === 'x-user-defined') {
                    var buffer = new Buffer(newData.length);
                    for (var i = 0; i < newData.length; i++)
                      buffer[i] = newData.charCodeAt(i) & 0xff;

                    self.push(buffer);
                  } else {
                    self.push(newData, self._charset);
                  }
                  self._pos = response.length;
                }
                break;
              case 'arraybuffer':
                if (xhr.readyState !== rStates.DONE || !xhr.response) break;
                response = xhr.response;
                self.push(new Buffer(new Uint8Array(response)));
                break;
              case 'moz-chunked-arraybuffer': // take whole
                response = xhr.response;
                if (xhr.readyState !== rStates.LOADING || !response) break;
                self.push(new Buffer(new Uint8Array(response)));
                break;
              case 'ms-stream':
                response = xhr.response;
                if (xhr.readyState !== rStates.LOADING) break;
                var reader = new global.MSStreamReader();
                reader.onprogress = function() {
                  if (reader.result.byteLength > self._pos) {
                    self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))));
                    self._pos = reader.result.byteLength;
                  }
                };
                reader.onload = function() {
                  self.push(null);
                };
                // reader.onerror = ??? // TODO: this
                reader.readAsArrayBuffer(response);
                break;
            }

            // The ms-stream case handles end separately in reader.onload()
            if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
              self.push(null);
            }
          };

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(16),
          __webpack_require__(28).Buffer,
          __webpack_require__(11),
        ));

        /***/
      },
      /* 32 */
      /***/ function(module, exports) {
        module.exports = require('readable-stream');

        /***/
      },
      /* 33 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'add',
          function() {
            return add;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'done',
          function() {
            return done;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'toJS',
          function() {
            return toJS;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'load',
          function() {
            return load;
          },
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'search',
          function() {
            return search;
          },
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          tslib__WEBPACK_IMPORTED_MODULE_0__,
        );
        /* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
        /* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          lunr__WEBPACK_IMPORTED_MODULE_1__,
        );

        try {
          // tslint:disable-next-line
          __webpack_require__(81); // bundle into worker
        } catch (_) {} // nope
        /* just for better typings */
        var Worker = /** @class */ (function() {
          function Worker() {
            this.add = add;
            this.done = done;
            this.search = search;
            this.toJS = toJS;
            this.load = load;
          }
          return Worker;
        })();
        /* harmony default export */ __webpack_exports__['default'] = Worker;
        var store = [];
        var resolveIndex = function() {
          throw new Error('Should not be called');
        };
        var index = new Promise(function(resolve) {
          resolveIndex = resolve;
        });
        lunr__WEBPACK_IMPORTED_MODULE_1__['tokenizer'].separator = /\s+/;
        var builder = new lunr__WEBPACK_IMPORTED_MODULE_1__['Builder']();
        builder.field('title');
        builder.field('description');
        builder.ref('ref');
        builder.pipeline.add(
          lunr__WEBPACK_IMPORTED_MODULE_1__['trimmer'],
          lunr__WEBPACK_IMPORTED_MODULE_1__['stopWordFilter'],
          lunr__WEBPACK_IMPORTED_MODULE_1__['stemmer'],
        );
        var expandTerm = function(term) {
          return (
            '*' +
            lunr__WEBPACK_IMPORTED_MODULE_1__['stemmer'](
              new lunr__WEBPACK_IMPORTED_MODULE_1__['Token'](term, {}),
            ) +
            '*'
          );
        };
        function add(title, description, meta) {
          var ref = store.push(meta) - 1;
          var item = {
            title: title.toLowerCase(),
            description: description.toLowerCase(),
            ref: ref,
          };
          builder.add(item);
        }
        function done() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'])(this, function(_a) {
                resolveIndex(builder.build());
                return [2 /*return*/];
              });
            },
          );
        }
        function toJS() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function() {
              var _a;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'])(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    _a = {
                      store: store,
                    };
                    return [4 /*yield*/, index];
                  case 1:
                    return [2 /*return*/, ((_a.index = _b.sent().toJSON()), _a)];
                }
              });
            },
          );
        }
        function load(state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function() {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'])(this, function(_a) {
                store = state.store;
                resolveIndex(lunr__WEBPACK_IMPORTED_MODULE_1__['Index'].load(state.index));
                return [2 /*return*/];
              });
            },
          );
        }
        function search(q, limit) {
          if (limit === void 0) {
            limit = 0;
          }
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function() {
              var searchResults;
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'])(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (q.trim().length === 0) {
                      return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, index];
                  case 1:
                    searchResults = _a.sent().query(function(t) {
                      q.trim()
                        .toLowerCase()
                        .split(/\s+/)
                        .forEach(function(term) {
                          var exp = expandTerm(term);
                          t.term(exp, {});
                        });
                    });
                    if (limit > 0) {
                      searchResults = searchResults.slice(0, limit);
                    }
                    return [
                      2 /*return*/,
                      searchResults.map(function(res) {
                        return {
                          meta: store[res.ref],
                          score: res.score,
                        };
                      }),
                    ];
                }
              });
            },
          );
        }

        /***/
      },
      /* 34 */
      /***/ function(module, exports) {
        module.exports = require('slugify');

        /***/
      },
      /* 35 */
      /***/ function(module, exports) {
        module.exports = require('styled-components');

        /***/
      },
      /* 36 */
      /***/ function(module, exports) {
        module.exports = require('json-schema-ref-parser');

        /***/
      },
      /* 37 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        // @ts-check

        var tslib_1 = __webpack_require__(1);
        var fs = __webpack_require__(26);
        var url = __webpack_require__(5);
        var pathlib = __webpack_require__(12);
        var maybe = __webpack_require__(44);
        var fetch = __webpack_require__(10);
        var yaml = __webpack_require__(10);
        var jptr = __webpack_require__(17);
        var resolveInternal = jptr.jptr;
        var isRef = __webpack_require__(20).isRef;
        var clone = __webpack_require__(18).clone;
        var cclone = __webpack_require__(18).circularClone;
        var recurse = __webpack_require__(21).recurse;
        var resolver = __webpack_require__(45);
        var sw = __webpack_require__(47);
        var common = __webpack_require__(27);
        var statusCodes = __webpack_require__(48).statusCodes;
        var ourVersion = __webpack_require__(57).version;
        // TODO handle specification-extensions with plugins?
        var targetVersion = '3.0.0';
        var componentNames; // initialised in main
        var S2OError = /** @class */ (function(_super) {
          tslib_1.__extends(S2OError, _super);
          function S2OError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'S2OError';
            return _this;
          }
          return S2OError;
        })(Error);
        function throwError(message, options) {
          var err = new S2OError(message);
          err.options = options;
          if (options.promise) {
            options.promise.reject(err);
          } else {
            throw err;
          }
        }
        function throwOrWarn(message, container, options) {
          if (options.warnOnly) {
            container[options.warnProperty || 'x-s2o-warning'] = message;
          } else {
            throwError(message, options);
          }
        }
        function fixUpSubSchema(schema, parent, options) {
          if (schema.discriminator && typeof schema.discriminator === 'string') {
            schema.discriminator = { propertyName: schema.discriminator };
          }
          if (schema.items && Array.isArray(schema.items)) {
            if (schema.items.length === 0) {
              schema.items = {};
            } else if (schema.items.length === 1) {
              schema.items = schema.items[0];
            } else schema.items = { anyOf: schema.items };
          }
          if (schema.type && Array.isArray(schema.type)) {
            if (options.patch) {
              if (schema.type.length === 0) {
                delete schema.type;
              } else {
                if (!schema.oneOf) schema.oneOf = [];
                for (var _i = 0, _a = schema.type; _i < _a.length; _i++) {
                  var type = _a[_i];
                  var newSchema = {};
                  if (type === 'null') {
                    schema.nullable = true;
                  } else {
                    newSchema.type = type;
                    for (var _b = 0, _c = common.arrayProperties; _b < _c.length; _b++) {
                      var prop = _c[_b];
                      if (typeof schema.prop !== 'undefined') {
                        newSchema[prop] = schema[prop];
                        delete schema[prop];
                      }
                    }
                  }
                  if (newSchema.type) {
                    schema.oneOf.push(newSchema);
                  }
                }
                delete schema.type;
                if (schema.oneOf.length === 0) {
                  delete schema.oneOf; // means was just null => nullable
                } else if (schema.oneOf.length < 2) {
                  schema.type = schema.oneOf[0].type;
                  if (Object.keys(schema.oneOf[0]).length > 1) {
                    throwOrWarn('Lost properties from oneOf', schema, options);
                  }
                  delete schema.oneOf;
                }
              }
              // do not else this
              if (schema.type && Array.isArray(schema.type) && schema.type.length === 1) {
                schema.type = schema.type[0];
              }
            } else {
              throwError('(Patchable) schema type must not be an array', options);
            }
          }
          if (schema.type && schema.type === 'null') {
            delete schema.type;
            schema.nullable = true;
          }
          if (schema.type === 'array' && !schema.items) {
            schema.items = {};
          }
          if (typeof schema.required === 'boolean') {
            if (schema.required && schema.name) {
              if (typeof parent.required === 'undefined') {
                parent.required = [];
              }
              if (Array.isArray(parent.required)) parent.required.push(schema.name);
            }
            delete schema.required;
          }
          // TODO if we have a nested properties (object inside an object) and the
          // *parent* type is not set, force it to object
          // TODO if default is set but type is not set, force type to typeof default
          if (schema.xml && typeof schema.xml.namespace === 'string') {
            if (!schema.xml.namespace) delete schema.xml.namespace;
          }
        }
        function fixUpSubSchemaExtensions(schema, parent) {
          if (schema['x-required'] && Array.isArray(schema['x-required'])) {
            if (!schema.required) schema.required = [];
            schema.required = schema.required.concat(schema['x-required']);
            delete schema['x-required'];
          }
          if (schema['x-anyOf']) {
            schema.anyOf = schema['x-anyOf'];
            delete schema['x-anyOf'];
          }
          if (schema['x-oneOf']) {
            schema.oneOf = schema['x-oneOf'];
            delete schema['x-oneOf'];
          }
          if (schema['x-not']) {
            schema.not = schema['x-not'];
            delete schema['x-not'];
          }
          if (typeof schema['x-nullable'] === 'boolean') {
            schema.nullable = schema['x-nullable'];
            delete schema['x-nullable'];
          }
          if (
            typeof schema['x-discriminator'] === 'object' &&
            typeof schema['x-discriminator'].propertyName === 'string'
          ) {
            schema.discriminator = schema['x-discriminator'];
            delete schema['x-discriminator'];
            for (var entry in schema.discriminator.mapping) {
              var schemaOrRef = schema.discriminator.mapping[entry];
              if (schemaOrRef.startsWith('#/definitions/')) {
                schema.discriminator.mapping[entry] = schemaOrRef.replace(
                  '#/definitions/',
                  '#/components/schemas/',
                );
              }
            }
          }
        }
        function fixUpSchema(schema, options) {
          sw.walkSchema(schema, {}, {}, function(schema, parent, state) {
            fixUpSubSchemaExtensions(schema, parent);
            fixUpSubSchema(schema, parent, options);
          });
        }
        function getMiroComponentName(ref) {
          if (ref.indexOf('#') >= 0) {
            ref = ref
              .split('#')[1]
              .split('/')
              .pop();
          } else {
            ref = ref
              .split('/')
              .pop()
              .split('.')[0];
          }
          return encodeURIComponent(common.sanitise(ref));
        }
        function fixupRefs(obj, key, state) {
          var options = state.payload.options;
          if (isRef(obj, key)) {
            if (obj[key].startsWith('#/components/')) {
              // no-op
            } else if (obj[key] === '#/consumes') {
              // people are *so* creative
              delete obj[key];
              state.parent[state.pkey] = clone(options.openapi.consumes);
            } else if (obj[key] === '#/produces') {
              // and by creative, I mean devious
              delete obj[key];
              state.parent[state.pkey] = clone(options.openapi.produces);
            } else if (obj[key].startsWith('#/definitions/')) {
              //only the first part of a schema component name must be sanitised
              var keys = obj[key].replace('#/definitions/', '').split('/');
              var newKey = componentNames.schemas[decodeURIComponent(keys[0])]; // lookup, resolves a $ref
              if (newKey) {
                keys[0] = newKey;
              } else {
                throwOrWarn('Could not resolve reference ' + obj[key], obj, options);
              }
              obj[key] = '#/components/schemas/' + keys.join('/');
            } else if (obj[key].startsWith('#/parameters/')) {
              // for extensions like Apigee's x-templates
              obj[key] =
                '#/components/parameters/' + common.sanitise(obj[key].replace('#/parameters/', ''));
            } else if (obj[key].startsWith('#/responses/')) {
              // for extensions like Apigee's x-templates
              obj[key] =
                '#/components/responses/' + common.sanitise(obj[key].replace('#/responses/', ''));
            } else if (obj[key].startsWith('#')) {
              // fixes up direct $refs or those created by resolvers
              var target = clone(jptr.jptr(options.openapi, obj[key]));
              if (target === false) throwOrWarn('direct $ref not found ' + obj[key], obj, options);
              else if (options.refmap[obj[key]]) {
                obj[key] = options.refmap[obj[key]];
              } else {
                // we use a heuristic to determine what kind of thing is being referenced
                var oldRef = obj[key];
                oldRef = oldRef.replace('/properties/headers/', '');
                oldRef = oldRef.replace('/properties/responses/', '');
                oldRef = oldRef.replace('/properties/parameters/', '');
                oldRef = oldRef.replace('/properties/schemas/', '');
                var type = 'schemas';
                var schemaIndex = oldRef.lastIndexOf('/schema');
                type =
                  oldRef.indexOf('/headers/') > schemaIndex
                    ? 'headers'
                    : oldRef.indexOf('/responses/') > schemaIndex
                    ? 'responses'
                    : oldRef.indexOf('/example') > schemaIndex
                    ? 'examples'
                    : oldRef.indexOf('/x-') > schemaIndex
                    ? 'extensions'
                    : oldRef.indexOf('/parameters/') > schemaIndex
                    ? 'parameters'
                    : 'schemas';
                // non-body/form parameters have not moved in the overall structure (like responses)
                // but extracting the requestBodies can cause the *number* of parameters to change
                if (type === 'schemas') {
                  fixUpSchema(target, options);
                }
                if (type !== 'responses' && type !== 'extensions') {
                  var prefix = type.substr(0, type.length - 1);
                  if (
                    prefix === 'parameter' &&
                    target.name &&
                    target.name === common.sanitise(target.name)
                  ) {
                    prefix = encodeURIComponent(target.name);
                  }
                  var suffix = 1;
                  if (obj['x-miro']) {
                    prefix = getMiroComponentName(obj['x-miro']);
                    suffix = '';
                  }
                  while (
                    jptr.jptr(options.openapi, '#/components/' + type + '/' + prefix + suffix)
                  ) {
                    suffix = suffix === '' ? 2 : ++suffix;
                  }
                  var newRef = '#/components/' + type + '/' + prefix + suffix;
                  var refSuffix = '';
                  if (type === 'examples') {
                    target = { value: target };
                    refSuffix = '/value';
                  }
                  jptr.jptr(options.openapi, newRef, target);
                  options.refmap[obj[key]] = newRef + refSuffix;
                  obj[key] = newRef + refSuffix;
                }
              }
            }
            delete obj['x-miro'];
            // do this last - rework cases where $ref object has sibling properties
            if (Object.keys(obj).length > 1) {
              var tmpRef = obj[key];
              var inSchema = state.path.indexOf('/schema') >= 0; // not perfect, but in the absence of a reasonably-sized and complete OAS 2.0 parser...
              if (options.refSiblings === 'preserve') {
                // no-op
              } else if (inSchema && options.refSiblings === 'allOf') {
                delete obj.$ref;
                state.parent[state.pkey] = { allOf: [{ $ref: tmpRef }, obj] };
              } else {
                // remove, or not 'preserve' and not in a schema
                state.parent[state.pkey] = { $ref: tmpRef };
              }
            }
          }
          if (key === 'x-ms-odata' && typeof obj[key] === 'string' && obj[key].startsWith('#/')) {
            var keys = obj[key]
              .replace('#/definitions/', '')
              .replace('#/components/schemas/', '')
              .split('/');
            var newKey = componentNames.schemas[decodeURIComponent(keys[0])]; // lookup, resolves a $ref
            if (newKey) {
              keys[0] = newKey;
            } else {
              throwOrWarn('Could not resolve reference ' + obj[key], obj, options);
            }
            obj[key] = '#/components/schemas/' + keys.join('/');
          }
        }
        /*
         * This has to happen as a separate pass because multiple $refs may point
         * through elements of the same path
         */
        function dedupeRefs(openapi, options) {
          for (var ref in options.refmap) {
            jptr.jptr(openapi, ref, { $ref: options.refmap[ref] });
          }
        }
        function processSecurity(securityObject) {
          for (var s in securityObject) {
            for (var k in securityObject[s]) {
              var sname = common.sanitise(k);
              if (k != sname) {
                securityObject[s][sname] = securityObject[s][k];
                delete securityObject[s][k];
              }
            }
          }
        }
        function processSecurityScheme(scheme, options) {
          if (scheme.type === 'basic') {
            scheme.type = 'http';
            scheme.scheme = 'basic';
          }
          if (scheme.type === 'oauth2') {
            var flow = {};
            var flowName = scheme.flow;
            if (scheme.flow === 'application') flowName = 'clientCredentials';
            if (scheme.flow === 'accessCode') flowName = 'authorizationCode';
            if (typeof scheme.authorizationUrl !== 'undefined')
              flow.authorizationUrl = scheme.authorizationUrl.split('?')[0].trim() || '/';
            if (typeof scheme.tokenUrl === 'string')
              flow.tokenUrl = scheme.tokenUrl.split('?')[0].trim() || '/';
            flow.scopes = scheme.scopes || {};
            scheme.flows = {};
            scheme.flows[flowName] = flow;
            delete scheme.flow;
            delete scheme.authorizationUrl;
            delete scheme.tokenUrl;
            delete scheme.scopes;
            if (typeof scheme.name !== 'undefined') {
              if (options.patch) {
                delete scheme.name;
              } else {
                throwError(
                  '(Patchable) oauth2 securitySchemes should not have name property',
                  options,
                );
              }
            }
          }
        }
        function keepParameters(value) {
          return value && !value['x-s2o-delete'];
        }
        function processHeader(header, options) {
          if (header.$ref) {
            header.$ref = header.$ref.replace('#/responses/', '#/components/responses/');
          } else {
            if (header.type && !header.schema) {
              header.schema = {};
            }
            if (header.type) header.schema.type = header.type;
            if (header.items && header.items.collectionFormat) {
              if (header.items.type && header.items.type != 'array') {
                if (header.items.collectionFormat != header.collectionFormat) {
                  throwOrWarn('Nested collectionFormats are not supported', header, options);
                }
                delete header.items.collectionFormat;
              }
            }
            if (typeof header.collectionFormat !== 'undefined') {
              if (header.type != 'array') {
                if (options.patch) {
                  delete header.collectionFormat;
                } else {
                  throwError(
                    '(Patchable) collectionFormat is only applicable to header.type array',
                    options,
                  );
                }
              }
              if (header.collectionFormat === 'csv') {
                header.style = 'simple';
              }
              if (header.collectionFormat === 'ssv') {
                throwOrWarn(
                  'collectionFormat:ssv is no longer supported for headers',
                  header,
                  options,
                ); // not lossless
              }
              if (header.collectionFormat === 'pipes') {
                throwOrWarn(
                  'collectionFormat:pipes is no longer supported for headers',
                  header,
                  options,
                ); // not lossless
              }
              if (header.collectionFormat === 'multi') {
                header.explode = true;
              }
              if (header.collectionFormat === 'tsv') {
                throwOrWarn('collectionFormat:tsv is no longer supported', header, options); // not lossless
                header['x-collectionFormat'] = 'tsv';
              }
              delete header.collectionFormat;
            }
            delete header.type;
            for (var _i = 0, _a = common.parameterTypeProperties; _i < _a.length; _i++) {
              var prop = _a[_i];
              if (typeof header[prop] !== 'undefined') {
                header.schema[prop] = header[prop];
                delete header[prop];
              }
            }
            for (var _b = 0, _c = common.arrayProperties; _b < _c.length; _b++) {
              var prop = _c[_b];
              if (typeof header[prop] !== 'undefined') {
                header.schema[prop] = header[prop];
                delete header[prop];
              }
            }
          }
        }
        function fixParamRef(param, options) {
          if (param.$ref.indexOf('#/parameters/') >= 0) {
            var refComponents = param.$ref.split('#/parameters/');
            param.$ref =
              refComponents[0] + '#/components/parameters/' + common.sanitise(refComponents[1]);
          }
          if (param.$ref.indexOf('#/definitions/') >= 0) {
            throwOrWarn('Definition used as parameter', param, options);
          }
        }
        function attachRequestBody(op, options) {
          var newOp = {};
          for (var _i = 0, _a = Object.keys(op); _i < _a.length; _i++) {
            var key = _a[_i];
            newOp[key] = op[key];
            if (key === 'parameters') {
              newOp.requestBody = {};
              if (options.rbname) newOp[options.rbname] = '';
            }
          }
          newOp.requestBody = {}; // just in case there are no parameters
          return newOp;
        }
        /**
         * @returns op, as it may have changed
         */
        function processParameter(param, op, path, method, index, openapi, options) {
          var result = {};
          var singularRequestBody = true;
          var originalType;
          if (op && op.consumes && typeof op.consumes === 'string') {
            if (options.patch) {
              op.consumes = [op.consumes];
            } else {
              return throwError('(Patchable) operation.consumes must be an array', options);
            }
          }
          if (!Array.isArray(openapi.consumes)) delete openapi.consumes;
          var consumes = ((op ? op.consumes : null) || openapi.consumes || []).filter(
            common.uniqueOnly,
          );
          if (param && param.$ref && typeof param.$ref === 'string') {
            // if we still have a ref here, it must be an internal one
            fixParamRef(param, options);
            var ptr = decodeURIComponent(param.$ref.replace('#/components/parameters/', ''));
            var rbody = false;
            var target = openapi.components.parameters[ptr]; // resolves a $ref, must have been sanitised already
            if ((!target || target['x-s2o-delete']) && param.$ref.startsWith('#/')) {
              // if it's gone, chances are it's a requestBody component now unless spec was broken
              param['x-s2o-delete'] = true;
              rbody = true;
            }
            // shared formData parameters from swagger or path level could be used in any combination.
            // we dereference all op.requestBody's then hash them and pull out common ones later
            if (rbody) {
              var ref = param.$ref;
              var newParam = resolveInternal(openapi, param.$ref);
              if (!newParam && ref.startsWith('#/')) {
                throwOrWarn('Could not resolve reference ' + ref, param, options);
              } else {
                if (newParam) param = newParam; // preserve reference
              }
            }
          }
          if (param && (param.name || param.in)) {
            // if it's a real parameter OR we've dereferenced it
            if (typeof param['x-deprecated'] === 'boolean') {
              param.deprecated = param['x-deprecated'];
              delete param['x-deprecated'];
            }
            if (typeof param['x-example'] !== 'undefined') {
              param.example = param['x-example'];
              delete param['x-example'];
            }
            if (param.in != 'body' && !param.type) {
              if (options.patch) {
                param.type = 'string';
              } else {
                throwError(
                  '(Patchable) parameter.type is mandatory for non-body parameters',
                  options,
                );
              }
            }
            if (param.type && typeof param.type === 'object' && param.type.$ref) {
              // $ref anywhere sensibility
              param.type = resolveInternal(openapi, param.type.$ref);
            }
            if (param.type === 'file') {
              param['x-s2o-originalType'] = param.type;
              originalType = param.type;
            }
            if (
              param.description &&
              typeof param.description === 'object' &&
              param.description.$ref
            ) {
              // $ref anywhere sensibility
              param.description = resolveInternal(openapi, param.description.$ref);
            }
            if (param.description === null) delete param.description;
            var oldCollectionFormat_1 = param.collectionFormat;
            if (param.collectionFormat) {
              if (param.type != 'array') {
                if (options.patch) {
                  delete param.collectionFormat;
                } else {
                  throwError(
                    '(Patchable) collectionFormat is only applicable to param.type array',
                    options,
                  );
                }
              }
              if (
                param.collectionFormat === 'csv' &&
                (param.in === 'query' || param.in === 'cookie')
              ) {
                param.style = 'form';
                param.explode = false;
              }
              if (
                param.collectionFormat === 'csv' &&
                (param.in === 'path' || param.in === 'header')
              ) {
                param.style = 'simple';
              }
              if (param.collectionFormat === 'ssv') {
                if (param.in === 'query') {
                  param.style = 'spaceDelimited';
                } else {
                  throwOrWarn(
                    'collectionFormat:ssv is no longer supported except for in:query parameters',
                    param,
                    options,
                  ); // not lossless
                }
              }
              if (param.collectionFormat === 'pipes') {
                if (param.in === 'query') {
                  param.style = 'pipeDelimited';
                } else {
                  throwOrWarn(
                    'collectionFormat:pipes is no longer supported except for in:query parameters',
                    param,
                    options,
                  ); // not lossless
                }
              }
              if (param.collectionFormat === 'multi') {
                param.explode = true;
              }
              if (param.collectionFormat === 'tsv') {
                throwOrWarn('collectionFormat:tsv is no longer supported', param, options); // not lossless
                param['x-collectionFormat'] = 'tsv';
              }
              delete param.collectionFormat;
            }
            if (
              param.type &&
              param.type != 'object' &&
              param.type != 'body' &&
              param.in != 'formData'
            ) {
              if (param.items && param.schema) {
                throwOrWarn('parameter has array,items and schema', param, options);
              } else {
                if (!param.schema || typeof param.schema !== 'object') param.schema = {};
                param.schema.type = param.type;
                if (param.items) {
                  param.schema.items = param.items;
                  delete param.items;
                  recurse(param.schema.items, null, function(obj, key, state) {
                    if (key === 'collectionFormat' && typeof obj[key] === 'string') {
                      if (oldCollectionFormat_1 && obj[key] !== oldCollectionFormat_1) {
                        throwOrWarn('Nested collectionFormats are not supported', param, options);
                      }
                      delete obj[key]; // not lossless
                    }
                    // items in 2.0 was a subset of JSON-Schema items object, it gets
                    // fixed up below
                  });
                }
                for (var _i = 0, _a = common.parameterTypeProperties; _i < _a.length; _i++) {
                  var prop = _a[_i];
                  if (typeof param[prop] !== 'undefined') param.schema[prop] = param[prop];
                  delete param[prop];
                }
              }
            }
            if (param.schema) {
              fixUpSchema(param.schema, options);
            }
            if (param['x-ms-skip-url-encoding']) {
              if (param.in === 'query') {
                // might be in:path, not allowed in OAS3
                param.allowReserved = true;
                delete param['x-ms-skip-url-encoding'];
              }
            }
          }
          if (param && param.in === 'formData') {
            // convert to requestBody component
            singularRequestBody = false;
            result.content = {};
            var contentType = 'application/x-www-form-urlencoded';
            if (consumes.length && consumes.indexOf('multipart/form-data') >= 0) {
              contentType = 'multipart/form-data';
            }
            result.content[contentType] = {};
            if (param.schema) {
              result.content[contentType].schema = param.schema;
              if (param.schema.$ref) {
                result['x-s2o-name'] = decodeURIComponent(
                  param.schema.$ref.replace('#/components/schemas/', ''),
                );
              }
            } else {
              result.content[contentType].schema = {};
              result.content[contentType].schema.type = 'object';
              result.content[contentType].schema.properties = {};
              result.content[contentType].schema.properties[param.name] = {};
              var schema = result.content[contentType].schema;
              var target = result.content[contentType].schema.properties[param.name];
              if (param.description) target.description = param.description;
              if (param.example) target.example = param.example;
              if (param.type) target.type = param.type;
              for (var _b = 0, _c = common.parameterTypeProperties; _b < _c.length; _b++) {
                var prop = _c[_b];
                if (typeof param[prop] !== 'undefined') target[prop] = param[prop];
              }
              if (param.required === true) {
                if (!schema.required) schema.required = [];
                schema.required.push(param.name);
              }
              if (typeof param.default !== 'undefined') target.default = param.default;
              if (target.properties) target.properties = param.properties;
              if (param.allOf) target.allOf = param.allOf; // new are anyOf, oneOf, not
              if (param.type === 'array' && param.items) {
                target.items = param.items;
                if (target.items.collectionFormat) delete target.items.collectionFormat;
              }
              if (originalType === 'file' || param['x-s2o-originalType'] === 'file') {
                target.type = 'string';
                target.format = 'binary';
              }
              // Copy any extensions on the form param to the target schema property.
              copyExtensions(param, target);
            }
          } else if (param && param.type === 'file') {
            // convert to requestBody
            if (param.required) result.required = param.required;
            result.content = {};
            result.content['application/octet-stream'] = {};
            result.content['application/octet-stream'].schema = {};
            result.content['application/octet-stream'].schema.type = 'string';
            result.content['application/octet-stream'].schema.format = 'binary';
            copyExtensions(param, result);
          }
          if (param && param.in === 'body') {
            result.content = {};
            if (param.name)
              result['x-s2o-name'] =
                (op && op.operationId ? common.sanitiseAll(op.operationId) : '') +
                ('_' + param.name).toCamelCase();
            if (param.description) result.description = param.description;
            if (param.required) result.required = param.required;
            // Set the "request body name" extension on the operation if requested.
            if (op && options.rbname && param.name) {
              op[options.rbname] = param.name;
            }
            if (param.schema && param.schema.$ref) {
              result['x-s2o-name'] = decodeURIComponent(
                param.schema.$ref.replace('#/components/schemas/', ''),
              );
            } else if (
              param.schema &&
              param.schema.type === 'array' &&
              param.schema.items &&
              param.schema.items.$ref
            ) {
              result['x-s2o-name'] =
                decodeURIComponent(param.schema.items.$ref.replace('#/components/schemas/', '')) +
                'Array';
            }
            if (!consumes.length) {
              consumes.push('application/json'); // TODO verify default
            }
            for (var _d = 0, consumes_1 = consumes; _d < consumes_1.length; _d++) {
              var mimetype = consumes_1[_d];
              result.content[mimetype] = {};
              result.content[mimetype].schema = clone(param.schema || {});
              fixUpSchema(result.content[mimetype].schema, options);
            }
            // Copy any extensions from the original parameter to the new requestBody
            copyExtensions(param, result);
          }
          if (Object.keys(result).length > 0) {
            param['x-s2o-delete'] = true;
            // work out where to attach the requestBody
            if (op) {
              if (op.requestBody && singularRequestBody) {
                op.requestBody['x-s2o-overloaded'] = true;
                var opId = op.operationId || index;
                throwOrWarn('Operation ' + opId + ' has multiple requestBodies', op, options);
              } else {
                if (!op.requestBody) {
                  op = path[method] = attachRequestBody(op, options); // make sure we have one
                }
                if (
                  op.requestBody.content &&
                  op.requestBody.content['multipart/form-data'] &&
                  op.requestBody.content['multipart/form-data'].schema &&
                  op.requestBody.content['multipart/form-data'].schema.properties &&
                  result.content['multipart/form-data'] &&
                  result.content['multipart/form-data'].schema &&
                  result.content['multipart/form-data'].schema.properties
                ) {
                  op.requestBody.content['multipart/form-data'].schema.properties = Object.assign(
                    op.requestBody.content['multipart/form-data'].schema.properties,
                    result.content['multipart/form-data'].schema.properties,
                  );
                  op.requestBody.content['multipart/form-data'].schema.required = (
                    op.requestBody.content['multipart/form-data'].schema.required || []
                  ).concat(result.content['multipart/form-data'].schema.required || []);
                  if (!op.requestBody.content['multipart/form-data'].schema.required.length) {
                    delete op.requestBody.content['multipart/form-data'].schema.required;
                  }
                } else if (
                  op.requestBody.content &&
                  op.requestBody.content['application/x-www-form-urlencoded'] &&
                  op.requestBody.content['application/x-www-form-urlencoded'].schema &&
                  op.requestBody.content['application/x-www-form-urlencoded'].schema.properties &&
                  result.content['application/x-www-form-urlencoded'] &&
                  result.content['application/x-www-form-urlencoded'].schema &&
                  result.content['application/x-www-form-urlencoded'].schema.properties
                ) {
                  op.requestBody.content[
                    'application/x-www-form-urlencoded'
                  ].schema.properties = Object.assign(
                    op.requestBody.content['application/x-www-form-urlencoded'].schema.properties,
                    result.content['application/x-www-form-urlencoded'].schema.properties,
                  );
                  op.requestBody.content['application/x-www-form-urlencoded'].schema.required = (
                    op.requestBody.content['application/x-www-form-urlencoded'].schema.required ||
                    []
                  ).concat(
                    result.content['application/x-www-form-urlencoded'].schema.required || [],
                  );
                  if (
                    !op.requestBody.content['application/x-www-form-urlencoded'].schema.required
                      .length
                  ) {
                    delete op.requestBody.content['application/x-www-form-urlencoded'].schema
                      .required;
                  }
                } else {
                  op.requestBody = Object.assign(op.requestBody, result);
                  if (!op.requestBody['x-s2o-name']) {
                    if (op.requestBody.schema && op.requestBody.schema.$ref) {
                      op.requestBody['x-s2o-name'] = decodeURIComponent(
                        op.requestBody.schema.$ref.replace('#/components/schemas/', ''),
                      )
                        .split('/')
                        .join('');
                    } else if (op.operationId) {
                      op.requestBody['x-s2o-name'] = common.sanitiseAll(op.operationId);
                    }
                  }
                }
              }
            }
          }
          // tidy up
          if (param && !param['x-s2o-delete']) {
            delete param.type;
            for (var _e = 0, _f = common.parameterTypeProperties; _e < _f.length; _e++) {
              var prop = _f[_e];
              delete param[prop];
            }
            if (
              param.in === 'path' &&
              (typeof param.required === 'undefined' || param.required !== true)
            ) {
              if (options.patch) {
                param.required = true;
              } else {
                throwError(
                  '(Patchable) path parameters must be required:true [' +
                    param.name +
                    ' in ' +
                    index +
                    ']',
                  options,
                );
              }
            }
          }
          return op;
        }
        function copyExtensions(src, tgt) {
          for (var prop in src) {
            if (prop.startsWith('x-') && !prop.startsWith('x-s2o')) {
              tgt[prop] = src[prop];
            }
          }
        }
        function processResponse(response, name, op, openapi, options) {
          if (!response) return false;
          if (response.$ref && typeof response.$ref === 'string') {
            if (response.$ref.indexOf('#/definitions/') >= 0) {
              //response.$ref = '#/components/schemas/'+common.sanitise(response.$ref.replace('#/definitions/',''));
              throwOrWarn('definition used as response: ' + response.$ref, response, options);
            } else {
              if (response.$ref.startsWith('#/responses/')) {
                response.$ref =
                  '#/components/responses/' +
                  common.sanitise(decodeURIComponent(response.$ref.replace('#/responses/', '')));
              }
            }
          } else {
            if (
              typeof response.description === 'undefined' ||
              response.description === null ||
              (response.description === '' && options.patch)
            ) {
              if (options.patch) {
                if (typeof response === 'object' && !Array.isArray(response)) {
                  response.description = statusCodes[response] || '';
                }
              } else {
                throwError('(Patchable) response.description is mandatory', options);
              }
            }
            if (typeof response.schema !== 'undefined') {
              fixUpSchema(response.schema, options);
              if (
                response.schema.$ref &&
                typeof response.schema.$ref === 'string' &&
                response.schema.$ref.startsWith('#/responses/')
              ) {
                response.schema.$ref =
                  '#/components/responses/' +
                  common.sanitise(
                    decodeURIComponent(response.schema.$ref.replace('#/responses/', '')),
                  );
              }
              if (op && op.produces && typeof op.produces === 'string') {
                if (options.patch) {
                  op.produces = [op.produces];
                } else {
                  return throwError('(Patchable) operation.produces must be an array', options);
                }
              }
              if (openapi.produces && !Array.isArray(openapi.produces)) delete openapi.produces;
              var produces = ((op ? op.produces : null) || openapi.produces || []).filter(
                common.uniqueOnly,
              );
              if (!produces.length) produces.push('*/*'); // TODO verify default
              response.content = {};
              for (var _i = 0, produces_1 = produces; _i < produces_1.length; _i++) {
                var mimetype = produces_1[_i];
                response.content[mimetype] = {};
                response.content[mimetype].schema = clone(response.schema);
                if (response.examples && response.examples[mimetype]) {
                  var example = {};
                  example.value = response.examples[mimetype];
                  response.content[mimetype].examples = {};
                  response.content[mimetype].examples.response = example;
                  delete response.examples[mimetype];
                }
                if (response.content[mimetype].schema.type === 'file') {
                  response.content[mimetype].schema = { type: 'string', format: 'binary' };
                }
              }
              delete response.schema;
            }
            // examples for content-types not listed in produces
            for (var mimetype in response.examples) {
              if (!response.content) response.content = {};
              if (!response.content[mimetype]) response.content[mimetype] = {};
              response.content[mimetype].examples = {};
              response.content[mimetype].examples.response = {};
              response.content[mimetype].examples.response.value = response.examples[mimetype];
            }
            delete response.examples;
            if (response.headers) {
              for (var h in response.headers) {
                if (h.toLowerCase() === 'status code') {
                  if (options.patch) {
                    delete response.headers[h];
                  } else {
                    throwError('(Patchable) "Status Code" is not a valid header', options);
                  }
                } else {
                  processHeader(response.headers[h], options);
                }
              }
            }
          }
        }
        function processPaths(container, containerName, options, requestBodyCache, openapi) {
          for (var p in container) {
            var path = container[p];
            // path.$ref is external only
            if (path && path['x-trace'] && typeof path['x-trace'] === 'object') {
              path.trace = path['x-trace'];
              delete path['x-trace'];
            }
            if (path && path['x-summary'] && typeof path['x-summary'] === 'string') {
              path.summary = path['x-summary'];
              delete path['x-summary'];
            }
            if (path && path['x-description'] && typeof path['x-description'] === 'string') {
              path.description = path['x-description'];
              delete path['x-description'];
            }
            if (path && path['x-servers'] && Array.isArray(path['x-servers'])) {
              path.servers = path['x-servers'];
              delete path['x-servers'];
            }
            for (var method in path) {
              if (
                common.httpMethods.indexOf(method) >= 0 ||
                method === 'x-amazon-apigateway-any-method'
              ) {
                var op = path[method];
                if (op && op.parameters && Array.isArray(op.parameters)) {
                  if (path.parameters) {
                    var _loop_1 = function(param) {
                      if (typeof param.$ref === 'string') {
                        fixParamRef(param, options);
                        param = resolveInternal(openapi, param.$ref);
                      }
                      var match = op.parameters.find(function(e, i, a) {
                        return e.name === param.name && e.in === param.in;
                      });
                      if (
                        !match &&
                        (param.in === 'formData' || param.in === 'body' || param.type === 'file')
                      ) {
                        op = processParameter(param, op, path, method, p, openapi, options);
                        if (options.rbname && op[options.rbname] === '') {
                          delete op[options.rbname];
                        }
                      }
                    };
                    for (var _i = 0, _a = path.parameters; _i < _a.length; _i++) {
                      var param = _a[_i];
                      _loop_1(param);
                    }
                  }
                  for (var _b = 0, _c = op.parameters; _b < _c.length; _b++) {
                    var param = _c[_b];
                    op = processParameter(
                      param,
                      op,
                      path,
                      method,
                      method + ':' + p,
                      openapi,
                      options,
                    );
                  }
                  if (options.rbname && op[options.rbname] === '') {
                    delete op[options.rbname];
                  }
                  if (!options.debug) {
                    op.parameters = op.parameters.filter(keepParameters);
                  }
                }
                if (op && op.security) processSecurity(op.security);
                //don't need to remove requestBody for non-supported ops as they "SHALL be ignored"
                // responses
                if (typeof op === 'object') {
                  if (!op.responses) {
                    var defaultResp = {};
                    defaultResp.description = 'Default response';
                    op.responses = { default: defaultResp };
                  }
                  for (var r in op.responses) {
                    var response = op.responses[r];
                    processResponse(response, r, op, openapi, options);
                  }
                }
                if (op && op['x-servers'] && Array.isArray(op['x-servers'])) {
                  op.servers = op['x-servers'];
                  delete op['x-servers'];
                } else if (op && op.schemes && op.schemes.length) {
                  for (var _d = 0, _e = op.schemes; _d < _e.length; _d++) {
                    var scheme = _e[_d];
                    if (!openapi.schemes || openapi.schemes.indexOf(scheme) < 0) {
                      if (!op.servers) {
                        op.servers = [];
                      }
                      if (Array.isArray(openapi.servers)) {
                        for (var _f = 0, _g = openapi.servers; _f < _g.length; _f++) {
                          var server = _g[_f];
                          var newServer = clone(server);
                          var serverUrl = url.parse(newServer.url);
                          serverUrl.protocol = scheme;
                          newServer.url = serverUrl.format();
                          op.servers.push(newServer);
                        }
                      }
                    }
                  }
                }
                if (options.debug) {
                  op['x-s2o-consumes'] = op.consumes || [];
                  op['x-s2o-produces'] = op.produces || [];
                }
                if (op) {
                  delete op.consumes;
                  delete op.produces;
                  delete op.schemes;
                  if (op['x-ms-examples']) {
                    for (var e in op['x-ms-examples']) {
                      var example = op['x-ms-examples'][e];
                      var se = common.sanitiseAll(e);
                      if (example.parameters) {
                        for (var p_1 in example.parameters) {
                          var value = example.parameters[p_1];
                          for (
                            var _h = 0, _j = (op.parameters || []).concat(path.parameters || []);
                            _h < _j.length;
                            _h++
                          ) {
                            var param = _j[_h];
                            if (param.$ref) {
                              param = jptr.jptr(openapi, param.$ref);
                            }
                            if (param.name === p_1 && !param.example) {
                              if (!param.examples) {
                                param.examples = {};
                              }
                              param.examples[e] = { value: value };
                            }
                          }
                        }
                      }
                      if (example.responses) {
                        for (var r in example.responses) {
                          if (example.responses[r].headers) {
                            for (var h in example.responses[r].headers) {
                              var value = example.responses[r].headers[h];
                              for (var rh in op.responses[r].headers) {
                                if (rh === h) {
                                  var header = op.responses[r].headers[rh];
                                  header.example = value;
                                }
                              }
                            }
                          }
                          if (example.responses[r].body) {
                            openapi.components.examples[se] = {
                              value: clone(example.responses[r].body),
                            };
                            if (op.responses[r] && op.responses[r].content) {
                              for (var ct in op.responses[r].content) {
                                var contentType = op.responses[r].content[ct];
                                if (!contentType.examples) {
                                  contentType.examples = {};
                                }
                                contentType.examples[e] = { $ref: '#/components/examples/' + se };
                              }
                            }
                          }
                        }
                      }
                    }
                    delete op['x-ms-examples'];
                  }
                  if (op.parameters && op.parameters.length === 0) delete op.parameters;
                  if (op.requestBody) {
                    var effectiveOperationId = op.operationId
                      ? common.sanitiseAll(op.operationId)
                      : common.sanitiseAll(method + p).toCamelCase();
                    var rbName = common.sanitise(
                      op.requestBody['x-s2o-name'] || effectiveOperationId || '',
                    );
                    delete op.requestBody['x-s2o-name'];
                    var rbStr = JSON.stringify(op.requestBody);
                    var rbHash = common.hash(rbStr);
                    if (!requestBodyCache[rbHash]) {
                      var entry = {};
                      entry.name = rbName;
                      entry.body = op.requestBody;
                      entry.refs = [];
                      requestBodyCache[rbHash] = entry;
                    }
                    var ptr =
                      '#/' +
                      containerName +
                      '/' +
                      encodeURIComponent(jptr.jpescape(p)) +
                      '/' +
                      method +
                      '/requestBody';
                    requestBodyCache[rbHash].refs.push(ptr);
                  }
                }
              }
            }
            if (path && path.parameters) {
              for (var p2 in path.parameters) {
                var param = path.parameters[p2];
                processParameter(param, null, path, null, p, openapi, options); // index here is the path string
              }
              if (!options.debug && Array.isArray(path.parameters)) {
                path.parameters = path.parameters.filter(keepParameters);
              }
            }
          }
        }
        function main(openapi, options) {
          var requestBodyCache = {};
          componentNames = { schemas: {} };
          if (openapi.security) processSecurity(openapi.security);
          for (var s in openapi.components.securitySchemes) {
            var sname = common.sanitise(s);
            if (s != sname) {
              if (openapi.components.securitySchemes[sname]) {
                throwError('Duplicate sanitised securityScheme name ' + sname, options);
              }
              openapi.components.securitySchemes[sname] = openapi.components.securitySchemes[s];
              delete openapi.components.securitySchemes[s];
            }
            processSecurityScheme(openapi.components.securitySchemes[sname], options);
          }
          for (var s in openapi.components.schemas) {
            var sname = common.sanitiseAll(s);
            var suffix = '';
            if (s != sname) {
              while (openapi.components.schemas[sname + suffix]) {
                // @ts-ignore
                suffix = suffix ? ++suffix : 2;
              }
              openapi.components.schemas[sname + suffix] = openapi.components.schemas[s];
              delete openapi.components.schemas[s];
            }
            componentNames.schemas[s] = sname + suffix;
            fixUpSchema(openapi.components.schemas[sname + suffix], options);
          }
          // fix all $refs to their new locations (and potentially new names)
          options.refmap = {};
          recurse(openapi, { payload: { options: options } }, fixupRefs);
          dedupeRefs(openapi, options);
          for (var p in openapi.components.parameters) {
            var sname = common.sanitise(p);
            if (p != sname) {
              if (openapi.components.parameters[sname]) {
                throwError('Duplicate sanitised parameter name ' + sname, options);
              }
              openapi.components.parameters[sname] = openapi.components.parameters[p];
              delete openapi.components.parameters[p];
            }
            var param = openapi.components.parameters[sname];
            processParameter(param, null, null, null, sname, openapi, options);
          }
          for (var r in openapi.components.responses) {
            var sname = common.sanitise(r);
            if (r != sname) {
              if (openapi.components.responses[sname]) {
                throwError('Duplicate sanitised response name ' + sname, options);
              }
              openapi.components.responses[sname] = openapi.components.responses[r];
              delete openapi.components.responses[r];
            }
            var response = openapi.components.responses[sname];
            processResponse(response, sname, null, openapi, options);
            if (response.headers) {
              for (var h in response.headers) {
                if (h.toLowerCase() === 'status code') {
                  if (options.patch) {
                    delete response.headers[h];
                  } else {
                    throwError('(Patchable) "Status Code" is not a valid header', options);
                  }
                } else {
                  processHeader(response.headers[h], options);
                }
              }
            }
          }
          for (var r in openapi.components.requestBodies) {
            // converted ones
            var rb = openapi.components.requestBodies[r];
            var rbStr = JSON.stringify(rb);
            var rbHash = common.hash(rbStr);
            var entry = {};
            entry.name = r;
            entry.body = rb;
            entry.refs = [];
            requestBodyCache[rbHash] = entry;
          }
          processPaths(openapi.paths, 'paths', options, requestBodyCache, openapi);
          if (openapi['x-ms-paths']) {
            processPaths(openapi['x-ms-paths'], 'x-ms-paths', options, requestBodyCache, openapi);
          }
          if (!options.debug) {
            for (var p in openapi.components.parameters) {
              var param = openapi.components.parameters[p];
              if (param['x-s2o-delete']) {
                delete openapi.components.parameters[p];
              }
            }
          }
          if (options.debug) {
            openapi['x-s2o-consumes'] = openapi.consumes || [];
            openapi['x-s2o-produces'] = openapi.produces || [];
          }
          delete openapi.consumes;
          delete openapi.produces;
          delete openapi.schemes;
          var rbNamesGenerated = [];
          openapi.components.requestBodies = {}; // for now as we've dereffed them
          if (!options.resolveInternal) {
            var counter = 1;
            for (var e in requestBodyCache) {
              var entry = requestBodyCache[e];
              if (entry.refs.length > 1) {
                // create a shared requestBody
                var suffix = '';
                if (!entry.name) {
                  entry.name = 'requestBody';
                  // @ts-ignore
                  suffix = counter++;
                }
                while (rbNamesGenerated.indexOf(entry.name + suffix) >= 0) {
                  // @ts-ignore - this can happen if descriptions are not exactly the same (e.g. bitbucket)
                  suffix = suffix ? ++suffix : 2;
                }
                entry.name = entry.name + suffix;
                rbNamesGenerated.push(entry.name);
                openapi.components.requestBodies[entry.name] = clone(entry.body);
                for (var r in entry.refs) {
                  var ref = {};
                  ref.$ref = '#/components/requestBodies/' + entry.name;
                  jptr.jptr(openapi, entry.refs[r], ref);
                }
              }
            }
          }
          if (
            openapi.components.responses &&
            Object.keys(openapi.components.responses).length === 0
          ) {
            delete openapi.components.responses;
          }
          if (
            openapi.components.parameters &&
            Object.keys(openapi.components.parameters).length === 0
          ) {
            delete openapi.components.parameters;
          }
          if (
            openapi.components.examples &&
            Object.keys(openapi.components.examples).length === 0
          ) {
            delete openapi.components.examples;
          }
          if (
            openapi.components.requestBodies &&
            Object.keys(openapi.components.requestBodies).length === 0
          ) {
            delete openapi.components.requestBodies;
          }
          if (
            openapi.components.securitySchemes &&
            Object.keys(openapi.components.securitySchemes).length === 0
          ) {
            delete openapi.components.securitySchemes;
          }
          if (openapi.components.headers && Object.keys(openapi.components.headers).length === 0) {
            delete openapi.components.headers;
          }
          if (openapi.components.schemas && Object.keys(openapi.components.schemas).length === 0) {
            delete openapi.components.schemas;
          }
          if (openapi.components && Object.keys(openapi.components).length === 0) {
            delete openapi.components;
          }
          return openapi;
        }
        function extractServerParameters(server) {
          if (!server || !server.url || typeof server.url !== 'string') return server;
          server.url = server.url.split('{{').join('{');
          server.url = server.url.split('}}').join('}');
          server.url.replace(/\{(.+?)\}/g, function(match, group1) {
            if (!server.variables) {
              server.variables = {};
            }
            server.variables[group1] = { default: 'unknown' };
          });
          return server;
        }
        function fixInfo(openapi, options, reject) {
          if (typeof openapi.info === 'undefined' || openapi.info === null) {
            if (options.patch) {
              openapi.info = { version: '', title: '' };
            } else {
              return reject(new S2OError('(Patchable) info object is mandatory'));
            }
          }
          if (typeof openapi.info !== 'object' || Array.isArray(openapi.info)) {
            return reject(new S2OError('info must be an object'));
          }
          if (typeof openapi.info.title === 'undefined' || openapi.info.title === null) {
            if (options.patch) {
              openapi.info.title = '';
            } else {
              return reject(new S2OError('(Patchable) info.title cannot be null'));
            }
          }
          if (typeof openapi.info.version === 'undefined' || openapi.info.version === null) {
            if (options.patch) {
              openapi.info.version = '';
            } else {
              return reject(new S2OError('(Patchable) info.version cannot be null'));
            }
          }
          if (typeof openapi.info.version !== 'string') {
            if (options.patch) {
              openapi.info.version = openapi.info.version.toString();
            } else {
              return reject(new S2OError('(Patchable) info.version must be a string'));
            }
          }
          if (typeof openapi.info.logo !== 'undefined') {
            if (options.patch) {
              openapi.info['x-logo'] = openapi.info.logo;
              delete openapi.info.logo;
            } else return reject(new S2OError('(Patchable) info should not have logo property'));
          }
          if (typeof openapi.info.termsOfService !== 'undefined') {
            if (openapi.info.termsOfService === null) {
              if (options.patch) {
                openapi.info.termsOfService = '';
              } else {
                return reject(new S2OError('(Patchable) info.termsOfService cannot be null'));
              }
            }
            if (url.URL && options.whatwg) {
              try {
                url.URL.parse(openapi.info.termsOfService);
              } catch (ex) {
                if (options.patch) {
                  delete openapi.info.termsOfService;
                } else return reject(new S2OError('(Patchable) info.termsOfService must be a URL'));
              }
            }
          }
        }
        function fixPaths(openapi, options, reject) {
          if (typeof openapi.paths === 'undefined') {
            if (options.patch) {
              openapi.paths = {};
            } else {
              return reject(new S2OError('(Patchable) paths object is mandatory'));
            }
          }
        }
        function convertObj(swagger, options, callback) {
          return maybe(
            callback,
            new Promise(function(resolve, reject) {
              if (!swagger) swagger = {};
              options.original = swagger;
              if (!options.text) options.text = yaml.stringify(swagger);
              options.externals = [];
              options.externalRefs = {};
              options.rewriteRefs = true; // avoids stack explosions
              options.preserveMiro = true;
              options.promise = {};
              options.promise.resolve = resolve;
              options.promise.reject = reject;
              if (!options.cache) options.cache = {};
              if (options.source) options.cache[options.source] = options.original;
              if (
                swagger.openapi &&
                typeof swagger.openapi === 'string' &&
                swagger.openapi.startsWith('3.')
              ) {
                options.openapi = cclone(swagger);
                fixInfo(options.openapi, options, reject);
                fixPaths(options.openapi, options, reject);
                resolver
                  .optionalResolve(options) // is a no-op if options.resolve is not set
                  .then(function() {
                    if (options.direct) {
                      return resolve(options.openapi);
                    } else {
                      return resolve(options);
                    }
                  })
                  .catch(function(ex) {
                    console.warn(ex);
                    reject(ex);
                  });
                return; // we should have resolved or rejected by now
              }
              if (!swagger.swagger || swagger.swagger != '2.0') {
                return reject(
                  new S2OError(
                    'Unsupported swagger/OpenAPI version: ' +
                      (swagger.openapi ? swagger.openapi : swagger.swagger),
                  ),
                );
              }
              var openapi = (options.openapi = {});
              openapi.openapi =
                typeof options.targetVersion === 'string' && options.targetVersion.startsWith('3.')
                  ? options.targetVersion
                  : targetVersion; // semver
              if (options.origin) {
                if (!openapi['x-origin']) {
                  openapi['x-origin'] = [];
                }
                var origin = {};
                origin.url = options.source || options.origin;
                origin.format = 'swagger';
                origin.version = swagger.swagger;
                origin.converter = {};
                origin.converter.url = 'https://github.com/mermade/oas-kit';
                origin.converter.version = ourVersion;
                openapi['x-origin'].push(origin);
              }
              // we want the new and existing properties to appear in a sensible order. Not guaranteed
              openapi = Object.assign(openapi, cclone(swagger));
              delete openapi.swagger;
              recurse(openapi, {}, function(obj, key, state) {
                if (
                  obj[key] === null &&
                  !key.startsWith('x-') &&
                  key !== 'default' &&
                  state.path.indexOf('/example') < 0
                )
                  delete obj[key]; // this saves *so* much grief later
              });
              if (swagger.host) {
                for (
                  var _i = 0, _a = Array.isArray(swagger.schemes) ? swagger.schemes : [''];
                  _i < _a.length;
                  _i++
                ) {
                  var s = _a[_i];
                  var server = {};
                  server.url =
                    (s ? s + ':' : '') +
                    '//' +
                    swagger.host +
                    (swagger.basePath ? swagger.basePath : '');
                  extractServerParameters(server);
                  if (!openapi.servers) openapi.servers = [];
                  openapi.servers.push(server);
                }
              } else if (swagger.basePath) {
                var server = {};
                server.url = swagger.basePath;
                extractServerParameters(server);
                if (!openapi.servers) openapi.servers = [];
                openapi.servers.push(server);
              }
              delete openapi.host;
              delete openapi.basePath;
              if (openapi['x-servers'] && Array.isArray(openapi['x-servers'])) {
                openapi.servers = openapi['x-servers'];
                delete openapi['x-servers'];
              }
              // TODO APIMatic extensions (x-server-configuration) ?
              if (swagger['x-ms-parameterized-host']) {
                var xMsPHost = swagger['x-ms-parameterized-host'];
                var server_1 = {};
                server_1.url = xMsPHost.hostTemplate + (swagger.basePath ? swagger.basePath : '');
                server_1.variables = {};
                for (var msp in xMsPHost.parameters) {
                  var param = xMsPHost.parameters[msp];
                  if (param.$ref) {
                    param = clone(resolveInternal(openapi, param.$ref));
                  }
                  if (!msp.startsWith('x-')) {
                    delete param.required; // all true
                    delete param.type; // all strings
                    delete param.in; // all 'host'
                    if (typeof param.default === 'undefined') {
                      if (param.enum) {
                        param.default = param.enum[0];
                      } else {
                        param.default = '';
                      }
                    }
                    server_1.variables[param.name] = param;
                    delete param.name;
                  }
                }
                if (!openapi.servers) openapi.servers = [];
                if (xMsPHost.useSchemePrefix === false) {
                  // The server URL already includes a protocol scheme
                  openapi.servers.push(server_1);
                } else {
                  // Define this server once for each given protocol scheme
                  swagger.schemes.forEach(function(scheme) {
                    openapi.servers.push(
                      Object.assign({}, server_1, { url: scheme + '://' + server_1.url }),
                    );
                  });
                }
                delete openapi['x-ms-parameterized-host'];
              }
              fixInfo(openapi, options, reject);
              fixPaths(openapi, options, reject);
              if (typeof openapi.consumes === 'string') {
                openapi.consumes = [openapi.consumes];
              }
              if (typeof openapi.produces === 'string') {
                openapi.produces = [openapi.produces];
              }
              openapi.components = {};
              if (openapi['x-callbacks']) {
                openapi.components.callbacks = openapi['x-callbacks'];
                delete openapi['x-callbacks'];
              }
              openapi.components.examples = {};
              openapi.components.headers = {};
              if (openapi['x-links']) {
                openapi.components.links = openapi['x-links'];
                delete openapi['x-links'];
              }
              openapi.components.parameters = openapi.parameters || {};
              openapi.components.responses = openapi.responses || {};
              openapi.components.requestBodies = {};
              openapi.components.securitySchemes = openapi.securityDefinitions || {};
              openapi.components.schemas = openapi.definitions || {};
              delete openapi.definitions;
              delete openapi.responses;
              delete openapi.parameters;
              delete openapi.securityDefinitions;
              resolver
                .optionalResolve(options) // is a no-op if options.resolve is not set
                .then(function() {
                  main(options.openapi, options);
                  if (options.direct) {
                    resolve(options.openapi);
                  } else {
                    resolve(options);
                  }
                })
                .catch(function(ex) {
                  console.warn(ex);
                  reject(ex);
                });
            }),
          );
        }
        function convertStr(str, options, callback) {
          return maybe(
            callback,
            new Promise(function(resolve, reject) {
              var obj = null;
              try {
                obj = JSON.parse(str);
                options.text = JSON.stringify(obj, null, 2);
              } catch (ex) {
                try {
                  obj = yaml.parse(str, { schema: 'core' });
                  options.sourceYaml = true;
                  options.text = str;
                } catch (ex) {}
              }
              if (obj) {
                convertObj(obj, options)
                  .then(function(options) {
                    return resolve(options);
                  })
                  .catch(function(ex) {
                    return reject(ex);
                  });
              } else {
                reject(new S2OError('Could not parse string'));
              }
            }),
          );
        }
        function convertUrl(url, options, callback) {
          return maybe(
            callback,
            new Promise(function(resolve, reject) {
              options.origin = true;
              if (!options.source) {
                options.source = url;
              }
              if (options.verbose) {
                console.warn('GET ' + url);
              }
              fetch(url, { agent: options.agent })
                .then(function(res) {
                  if (res.status !== 200) throw new S2OError('Received status code ' + res.status);
                  return res.text();
                })
                .then(function(body) {
                  convertStr(body, options)
                    .then(function(options) {
                      return resolve(options);
                    })
                    .catch(function(ex) {
                      return reject(ex);
                    });
                })
                .catch(function(err) {
                  reject(err);
                });
            }),
          );
        }
        function convertFile(filename, options, callback) {
          return maybe(
            callback,
            new Promise(function(resolve, reject) {
              fs.readFile(filename, options.encoding || 'utf8', function(err, s) {
                if (err) {
                  reject(err);
                } else {
                  options.sourceFile = filename;
                  convertStr(s, options)
                    .then(function(options) {
                      return resolve(options);
                    })
                    .catch(function(ex) {
                      return reject(ex);
                    });
                }
              });
            }),
          );
        }
        function convertStream(readable, options, callback) {
          return maybe(
            callback,
            new Promise(function(resolve, reject) {
              var data = '';
              readable
                .on('data', function(chunk) {
                  data += chunk;
                })
                .on('end', function() {
                  convertStr(data, options)
                    .then(function(options) {
                      return resolve(options);
                    })
                    .catch(function(ex) {
                      return reject(ex);
                    });
                });
            }),
          );
        }
        module.exports = {
          S2OError: S2OError,
          targetVersion: targetVersion,
          convert: convertObj,
          convertObj: convertObj,
          convertUrl: convertUrl,
          convertStr: convertStr,
          convertFile: convertFile,
          convertStream: convertStream,
        };

        /***/
      },
      /* 38 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        function areInputsEqual(newInputs, lastInputs) {
          if (newInputs.length !== lastInputs.length) {
            return false;
          }
          for (var i = 0; i < newInputs.length; i++) {
            if (newInputs[i] !== lastInputs[i]) {
              return false;
            }
          }
          return true;
        }

        function memoizeOne(resultFn, isEqual) {
          if (isEqual === void 0) {
            isEqual = areInputsEqual;
          }
          var lastThis;
          var lastArgs = [];
          var lastResult;
          var calledOnce = false;
          function memoized() {
            var newArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              newArgs[_i] = arguments[_i];
            }
            if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
              return lastResult;
            }
            lastResult = resultFn.apply(this, newArgs);
            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            return lastResult;
          }
          return memoized;
        }

        module.exports = memoizeOne;

        /***/
      },
      /* 39 */
      /***/ function(module, exports) {
        module.exports = require('react-dropdown');

        /***/
      },
      /* 40 */
      /***/ function(module, exports) {
        module.exports = require('dompurify');

        /***/
      },
      /* 41 */
      /***/ function(module, exports) {
        module.exports = require('react-ace');

        /***/
      },
      /* 42 */
      /***/ function(module, exports) {
        module.exports = require('react-switch');

        /***/
      },
      /* 43 */
      /***/ function(module, exports) {
        module.exports = require('classnames');

        /***/
      },
      /* 44 */
      /***/ function(module, exports) {
        module.exports = require('call-me-maybe');

        /***/
      },
      /* 45 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var tslib_1 = __webpack_require__(1);
        var fs = __webpack_require__(26);
        var path = __webpack_require__(12);
        var url = __webpack_require__(5);
        var fetch = __webpack_require__(10);
        var yaml = __webpack_require__(10);
        var jptr = __webpack_require__(17).jptr;
        var recurse = __webpack_require__(21).recurse;
        var clone = __webpack_require__(18).clone;
        var deRef = __webpack_require__(46).dereference;
        var isRef = __webpack_require__(20).isRef;
        var common = __webpack_require__(27);
        function unique(arr) {
          return tslib_1.__spreadArrays(new Set(arr));
        }
        function readFileAsync(filename, encoding) {
          return new Promise(function(resolve, reject) {
            fs.readFile(filename, encoding, function(err, data) {
              if (err) reject(err);
              else resolve(data);
            });
          });
        }
        function resolveAllFragment(obj, context, src, parentPath, base, options) {
          var attachPoint = options.externalRefs[src + parentPath].paths[0];
          var baseUrl = url.parse(base);
          var seen = {}; // seen is indexed by the $ref value and contains path replacements
          var changes = 1;
          while (changes) {
            changes = 0;
            recurse(obj, { identityDetection: true }, function(obj, key, state) {
              if (isRef(obj, key)) {
                if (obj[key].startsWith('#')) {
                  if (!seen[obj[key]] && !obj.$fixed) {
                    var target = clone(jptr(context, obj[key]));
                    if (options.verbose > 1)
                      console.warn(
                        (target === false ? common.colour.red : common.colour.green) +
                          'Fragment resolution',
                        obj[key],
                        common.colour.normal,
                      );
                    /*
                            ResolutionCase:A is where there is a local reference in an externally
                            referenced document, and we have not seen it before. The reference
                            is replaced by a copy of the data pointed to, which may be outside this fragment
                            but within the context of the external document
                        */
                    if (target === false) {
                      state.parent[state.pkey] = {}; /* case:A(2) where the resolution fails */
                      if (options.fatal) {
                        var ex = new Error('Fragment $ref resolution failed ' + obj[key]);
                        if (options.promise) options.promise.reject(ex);
                        else throw ex;
                      }
                    } else {
                      changes++;
                      state.parent[state.pkey] = target;
                      seen[obj[key]] = state.path.replace('/%24ref', '');
                    }
                  } else {
                    if (!obj.$fixed) {
                      var newRef = (attachPoint + '/' + seen[obj[key]]).split('/#/').join('/');
                      state.parent[state.pkey] = { $ref: newRef, 'x-miro': obj[key], $fixed: true };
                      if (options.verbose > 1) console.warn('Replacing with', newRef);
                      changes++;
                    }
                    /*
                            ResolutionCase:B is where there is a local reference in an externally
                            referenced document, and we have seen this reference before and resolved it.
                            We create a new object containing the (immutable) $ref string
                        */
                  }
                } else if (baseUrl.protocol) {
                  var newRef = url.resolve(base, obj[key]).toString();
                  if (options.verbose > 1)
                    console.warn(
                      common.colour.yellow + 'Rewriting external url ref',
                      obj[key],
                      'as',
                      newRef,
                      common.colour.normal,
                    );
                  obj['x-miro'] = obj[key];
                  obj[key] = newRef;
                } else if (!obj['x-miro']) {
                  var newRef = url.resolve(base, obj[key]).toString();
                  if (options.verbose > 1)
                    console.warn(
                      common.colour.yellow + 'Rewriting external ref',
                      obj[key],
                      'as',
                      newRef,
                      common.colour.normal,
                    );
                  obj['x-miro'] = obj[key]; // we use x-miro as a flag so we don't do this > once
                  obj[key] = newRef;
                }
              }
            });
          }
          recurse(obj, {}, function(obj, key, state) {
            if (isRef(obj, key)) {
              if (typeof obj.$fixed !== 'undefined') delete obj.$fixed;
            }
          });
          if (options.verbose > 1) console.warn('Finished fragment resolution');
          return obj;
        }
        function filterData(data, options) {
          if (!options.filters || !options.filters.length) return data;
          for (var _i = 0, _a = options.filters; _i < _a.length; _i++) {
            var filter = _a[_i];
            data = filter(data, options);
          }
          return data;
        }
        function testProtocol(input, backup) {
          if (input && input.length > 2) return input;
          if (backup && backup.length > 2) return backup;
          return 'file:';
        }
        function resolveExternal(root, pointer, options, callback) {
          var u = url.parse(options.source);
          var base = options.source
            .split('\\')
            .join('/')
            .split('/');
          var doc = base.pop(); // drop the actual filename
          if (!doc) base.pop(); // in case it ended with a /
          var fragment = '';
          var fnComponents = pointer.split('#');
          if (fnComponents.length > 1) {
            fragment = '#' + fnComponents[1];
            pointer = fnComponents[0];
          }
          base = base.join('/');
          var u2 = url.parse(pointer);
          var effectiveProtocol = testProtocol(u2.protocol, u.protocol);
          var target;
          if (effectiveProtocol === 'file:') {
            target = path.resolve(base ? base + '/' : '', pointer);
          } else {
            target = url.resolve(base ? base + '/' : '', pointer);
          }
          if (options.cache[target]) {
            if (options.verbose) console.warn('CACHED', target, fragment);
            /*
            resolutionSource:A this is where we have cached the externally-referenced document from a
            file, http or custom handler
        */
            var context = clone(options.cache[target]);
            var data = (options.externalRef = context);
            if (fragment) {
              data = jptr(data, fragment);
              if (data === false) {
                data = {}; // case:A(2) where the resolution fails
                if (options.fatal) {
                  var ex = new Error('Cached $ref resolution failed ' + target + fragment);
                  if (options.promise) options.promise.reject(ex);
                  else throw ex;
                }
              }
            }
            data = resolveAllFragment(data, context, pointer, fragment, target, options);
            data = filterData(data, options);
            callback(clone(data), target, options);
            return Promise.resolve(data);
          }
          if (options.verbose) console.warn('GET', target, fragment);
          if (options.handlers && options.handlers[effectiveProtocol]) {
            return options.handlers[effectiveProtocol](base, pointer, fragment, options)
              .then(function(data) {
                options.externalRef = data;
                data = filterData(data, options);
                options.cache[target] = data;
                callback(data, target, options);
                return data;
              })
              .catch(function(ex) {
                if (options.verbose) console.warn(ex);
                throw ex;
              });
          } else if (effectiveProtocol && effectiveProtocol.startsWith('http')) {
            return fetch(target, { agent: options.agent })
              .then(function(res) {
                if (res.status !== 200) throw new Error('Received status code ' + res.status);
                return res.text();
              })
              .then(function(data) {
                try {
                  var context = yaml.parse(data, { schema: 'core' });
                  data = options.externalRef = context;
                  options.cache[target] = clone(data);
                  /* resolutionSource:B, from the network, data is fresh, but we clone it into the cache */
                  if (fragment) {
                    data = jptr(data, fragment);
                    if (data === false) {
                      data = {}; /* case:B(2) where the resolution fails */
                      if (options.fatal) {
                        var ex = new Error('Remote $ref resolution failed ' + target + fragment);
                        if (options.promise) options.promise.reject(ex);
                        else throw ex;
                      }
                    }
                  }
                  data = resolveAllFragment(data, context, pointer, fragment, target, options);
                  data = filterData(data, options);
                } catch (ex) {
                  if (options.verbose) console.warn(ex);
                  if (options.promise && options.fatal) options.promise.reject(ex);
                  else throw ex;
                }
                callback(data, target, options);
                return data;
              })
              .catch(function(err) {
                if (options.verbose) console.warn(err);
                options.cache[target] = {};
                if (options.promise && options.fatal) options.promise.reject(err);
                else throw err;
              });
          } else {
            return readFileAsync(target, options.encoding || 'utf8')
              .then(function(data) {
                try {
                  var context = yaml.parse(data, { schema: 'core' });
                  data = options.externalRef = context;
                  /*
                    resolutionSource:C from a file, data is fresh but we clone it into the cache
                */
                  options.cache[target] = clone(data);
                  if (fragment) {
                    data = jptr(data, fragment);
                    if (data === false) {
                      data = {}; /* case:C(2) where the resolution fails */
                      if (options.fatal) {
                        var ex = new Error('File $ref resolution failed ' + target + fragment);
                        if (options.promise) options.promise.reject(ex);
                        else throw ex;
                      }
                    }
                  }
                  data = resolveAllFragment(data, context, pointer, fragment, target, options);
                  data = filterData(data, options);
                } catch (ex) {
                  if (options.verbose) console.warn(ex);
                  if (options.promise && options.fatal) options.promise.reject(ex);
                  else throw ex;
                }
                callback(data, target, options);
                return data;
              })
              .catch(function(err) {
                if (options.verbose) console.warn(err);
                if (options.promise && options.fatal) options.promise.reject(err);
                else throw err;
              });
          }
        }
        function scanExternalRefs(options) {
          return new Promise(function(res, rej) {
            function inner(obj, key, state) {
              if (obj[key] && isRef(obj[key], '$ref')) {
                var $ref_1 = obj[key].$ref;
                if (!$ref_1.startsWith('#')) {
                  // is external
                  var $extra = '';
                  if (!refs[$ref_1]) {
                    var potential = Object.keys(refs).find(function(e, i, a) {
                      return $ref_1.startsWith(e + '/');
                    });
                    if (potential) {
                      if (options.verbose) console.warn('Found potential subschema at', potential);
                      $extra =
                        '/' + ($ref_1.split('#')[1] || '').replace(potential.split('#')[1] || '');
                      $extra = $extra.split('/undefined').join(''); // FIXME
                      $ref_1 = potential;
                    }
                  }
                  if (!refs[$ref_1]) {
                    refs[$ref_1] = {
                      resolved: false,
                      paths: [],
                      extras: {},
                      description: obj[key].description,
                    };
                  }
                  if (refs[$ref_1].resolved) {
                    if (options.rewriteRefs) {
                      // we've already seen it
                      var newRef = refs[$ref_1].resolvedAt;
                      if (options.verbose > 1) console.warn('Rewriting ref', $ref_1, newRef);
                      obj[key]['x-miro'] = $ref_1;
                      obj[key].$ref = newRef + $extra; // resolutionCase:C (new string)
                    } else {
                      obj[key] = clone(refs[$ref_1].data); // resolutionCase:D (cloned:yes)
                    }
                  } else {
                    refs[$ref_1].paths.push(state.path);
                    refs[$ref_1].extras[state.path] = $extra;
                  }
                }
              }
            }
            var refs = options.externalRefs;
            if (options.resolver.depth > 0 && options.source === options.resolver.base) {
              // we only need to do any of this when called directly on pass #1
              return res(refs);
            }
            recurse(
              options.openapi.definitions,
              { identityDetection: true, path: '#/definitions' },
              inner,
            );
            recurse(
              options.openapi.components,
              { identityDetection: true, path: '#/components' },
              inner,
            );
            recurse(options.openapi, { identityDetection: true }, inner);
            res(refs);
          });
        }
        function findExternalRefs(options) {
          return new Promise(function(res, rej) {
            scanExternalRefs(options)
              .then(function(refs) {
                var _loop_1 = function(ref) {
                  if (!refs[ref].resolved) {
                    var depth = options.resolver.depth;
                    if (depth > 0) depth++;
                    options.resolver.actions[depth].push(function() {
                      return resolveExternal(options.openapi, ref, options, function(
                        data,
                        source,
                        options,
                      ) {
                        if (!refs[ref].resolved) {
                          var external = {};
                          external.context = refs[ref];
                          external.$ref = ref;
                          external.original = clone(data);
                          external.updated = data;
                          external.source = source;
                          options.externals.push(external);
                          refs[ref].resolved = true;
                        }
                        var localOptions = Object.assign({}, options, {
                          source: '',
                          resolver: {
                            actions: options.resolver.actions,
                            depth: options.resolver.actions.length - 1,
                            base: options.resolver.base,
                          },
                        });
                        if (
                          options.patch &&
                          refs[ref].description &&
                          !data.description &&
                          typeof data === 'object'
                        ) {
                          data.description = refs[ref].description;
                        }
                        refs[ref].data = data;
                        // sorting $refs by length causes bugs (due to overlapping regions?)
                        var pointers = unique(refs[ref].paths);
                        pointers = pointers.sort(function(a, b) {
                          var aComp =
                            a.startsWith('#/components/') || a.startsWith('#/definitions/');
                          var bComp =
                            b.startsWith('#/components/') || b.startsWith('#/definitions/');
                          if (aComp && !bComp) return -1;
                          if (bComp && !aComp) return +1;
                          return 0;
                        });
                        for (var _i = 0, pointers_1 = pointers; _i < pointers_1.length; _i++) {
                          var ptr = pointers_1[_i];
                          // shared x-ms-examples $refs confuse the fixupRefs heuristic in index.js
                          if (
                            refs[ref].resolvedAt &&
                            ptr !== refs[ref].resolvedAt &&
                            ptr.indexOf('x-ms-examples/') < 0
                          ) {
                            if (options.verbose > 1)
                              console.warn('Creating pointer to data at', ptr);
                            jptr(options.openapi, ptr, {
                              $ref: refs[ref].resolvedAt + refs[ref].extras[ptr],
                              'x-miro': ref + refs[ref].extras[ptr],
                            }); // resolutionCase:E (new object)
                          } else {
                            if (refs[ref].resolvedAt) {
                              if (options.verbose > 1) console.warn('Avoiding circular reference');
                            } else {
                              refs[ref].resolvedAt = ptr;
                              if (options.verbose > 1)
                                console.warn('Creating initial clone of data at', ptr);
                            }
                            var cdata = clone(data);
                            jptr(options.openapi, ptr, cdata); // resolutionCase:F (cloned:yes)
                          }
                        }
                        if (options.resolver.actions[localOptions.resolver.depth].length === 0) {
                          //options.resolver.actions[localOptions.resolver.depth].push(function () { return scanExternalRefs(localOptions) });
                          options.resolver.actions[localOptions.resolver.depth].push(function() {
                            return findExternalRefs(localOptions);
                          }); // findExternalRefs calls scanExternalRefs
                        }
                      });
                    });
                  }
                };
                for (var ref in refs) {
                  _loop_1(ref);
                }
              })
              .catch(function(ex) {
                if (options.verbose) console.warn(ex);
                rej(ex);
              });
            var result = { options: options };
            result.actions = options.resolver.actions[options.resolver.depth];
            res(result);
          });
        }
        var serial = function(funcs) {
          return funcs.reduce(function(promise, func) {
            return promise.then(function(result) {
              return func().then(Array.prototype.concat.bind(result));
            });
          }, Promise.resolve([]));
        };
        function loopReferences(options, res, rej) {
          options.resolver.actions.push([]);
          findExternalRefs(options)
            .then(function(data) {
              serial(data.actions)
                .then(function() {
                  if (options.resolver.depth >= options.resolver.actions.length) {
                    console.warn('Ran off the end of resolver actions');
                    return res(true);
                  } else {
                    options.resolver.depth++;
                    if (options.resolver.actions[options.resolver.depth].length) {
                      setTimeout(function() {
                        loopReferences(data.options, res, rej);
                      }, 0);
                    } else {
                      if (options.verbose > 1)
                        console.warn(
                          common.colour.yellow + 'Finished external resolution!',
                          common.colour.normal,
                        );
                      if (options.resolveInternal) {
                        if (options.verbose > 1)
                          console.warn(
                            common.colour.yellow + 'Starting internal resolution!',
                            common.colour.normal,
                          );
                        options.openapi = deRef(options.openapi, options.original, {
                          verbose: options.verbose - 1,
                        });
                        if (options.verbose > 1)
                          console.warn(
                            common.colour.yellow + 'Finished internal resolution!',
                            common.colour.normal,
                          );
                      }
                      recurse(options.openapi, {}, function(obj, key, state) {
                        if (isRef(obj, key)) {
                          if (!options.preserveMiro) delete obj['x-miro'];
                        }
                      });
                      res(options);
                    }
                  }
                })
                .catch(function(ex) {
                  if (options.verbose) console.warn(ex);
                  rej(ex);
                });
            })
            .catch(function(ex) {
              if (options.verbose) console.warn(ex);
              rej(ex);
            });
        }
        function setupOptions(options) {
          if (!options.cache) options.cache = {};
          if (options.source) {
            var srcUrl = url.parse(options.source);
            if (!srcUrl.protocol || srcUrl.protocol.length <= 2) {
              // windows drive-letters
              options.source = path.resolve(options.source);
            }
          }
          if (!options.externals) options.externals = [];
          if (!options.externalRefs) options.externalRefs = [];
          options.rewriteRefs = true;
          options.resolver = {};
          options.resolver.depth = 0;
          options.resolver.base = options.source;
          options.resolver.actions = [[]];
        }
        /** compatibility function for swagger2openapi */
        function optionalResolve(options) {
          setupOptions(options);
          return new Promise(function(res, rej) {
            if (options.resolve) loopReferences(options, res, rej);
            else res(options);
          });
        }
        function resolve(openapi, source, options) {
          if (!options) options = {};
          options.openapi = openapi;
          options.source = source;
          options.resolve = true;
          setupOptions(options);
          return new Promise(function(res, rej) {
            loopReferences(options, res, rej);
          });
        }
        module.exports = {
          optionalResolve: optionalResolve,
          resolve: resolve,
        };

        /***/
      },
      /* 46 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var recurse = __webpack_require__(21).recurse;
        var clone = __webpack_require__(18).shallowClone;
        var jptr = __webpack_require__(17).jptr;
        var isRef = __webpack_require__(20).isRef;
        var getLogger = function(options) {
          if (options && options.verbose) {
            return {
              warn: function() {
                var args = Array.prototype.slice.call(arguments);
                console.warn.apply(console, args);
              },
            };
          } else {
            return {
              warn: function() {
                //nop
              },
            };
          }
        };
        /**
         * dereferences the given object
         * @param o the object to dereference
         * @definitions a source of definitions to reference
         * @options optional settings (used recursively)
         * @return the dereferenced object
         */
        function dereference(o, definitions, options) {
          if (!options) options = {};
          if (!options.cache) options.cache = {};
          if (!options.state) options.state = {};
          options.state.identityDetection = true;
          // options.depth allows us to limit cloning to the first invocation
          options.depth = options.depth ? options.depth + 1 : 1;
          var obj = options.depth > 1 ? o : clone(o);
          var container = { data: obj };
          var defs = options.depth > 1 ? definitions : clone(definitions);
          // options.master is the top level object, regardless of depth
          if (!options.master) options.master = obj;
          var logger = getLogger(options);
          var changes = 1;
          while (changes > 0) {
            changes = 0;
            recurse(container, options.state, function(obj, key, state) {
              if (isRef(obj, key)) {
                var $ref = obj[key]; // immutable
                changes++;
                if (!options.cache[$ref]) {
                  var entry = {};
                  entry.path = state.path.split('/$ref')[0];
                  entry.key = $ref;
                  logger.warn('Dereffing %s at %s', $ref, entry.path);
                  entry.source = defs;
                  entry.data = jptr(entry.source, entry.key);
                  if (entry.data === false) {
                    entry.data = jptr(options.master, entry.key);
                    entry.source = options.master;
                  }
                  if (entry.data === false) {
                    logger.warn('Missing $ref target', entry.key);
                  }
                  options.cache[$ref] = entry;
                  entry.data = state.parent[state.pkey] = dereference(
                    jptr(entry.source, entry.key),
                    entry.source,
                    options,
                  );
                  if (options.$ref && typeof state.parent[state.pkey] === 'object')
                    state.parent[state.pkey][options.$ref] = $ref;
                  entry.resolved = true;
                } else {
                  var entry = options.cache[$ref];
                  if (entry.resolved) {
                    // we have already seen and resolved this reference
                    logger.warn('Patching %s for %s', $ref, entry.path);
                    state.parent[state.pkey] = entry.data;
                    if (options.$ref && typeof state.parent[state.pkey] === 'object')
                      state.parent[state.pkey][options.$ref] = $ref;
                  } else if ($ref === entry.path) {
                    // reference to itself, throw
                    throw new Error('Tight circle at ' + entry.path);
                  } else {
                    // we're dealing with a circular reference here
                    logger.warn('Unresolved ref');
                    state.parent[state.pkey] = jptr(entry.source, entry.path);
                    if (state.parent[state.pkey] === false) {
                      state.parent[state.pkey] = jptr(entry.source, entry.key);
                    }
                    if (options.$ref && typeof state.parent[state.pkey] === 'object')
                      state.parent[options.$ref] = $ref;
                  }
                }
              }
            });
          }
          return container.data;
        }
        module.exports = {
          dereference: dereference,
        };

        /***/
      },
      /* 47 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /**
         * functions to walk an OpenAPI schema object and traverse all subschemas
         * calling a callback function on each one
         */
        /**
         * obtains the default starting state for the `state` object used
         * by walkSchema
         * @return the state object suitable for use in walkSchema
         */
        function getDefaultState() {
          return {
            depth: 0,
            seen: new WeakMap(),
            top: true,
            combine: false,
            allowRefSiblings: false,
          };
        }
        /**
         * begins the walk of a schema object, or the `state` object used
         * by walkSchema
         * @param parent the parent schema, if any. Use empty object if none
         * @param state the initial starting state of the walker, usually obtained from `getDefaultState`
         * @param callback, a function taking a schema, parent and state to be called on this and all subschemas
         * @return the schema object
         */
        function walkSchema(schema, parent, state, callback) {
          if (typeof state.depth === 'undefined') state = getDefaultState();
          if (schema === null || typeof schema === 'undefined') return schema;
          if (typeof schema.$ref !== 'undefined') {
            var temp = { $ref: schema.$ref };
            if (state.allowRefSiblings && schema.description) {
              temp.description = schema.description;
            }
            callback(temp, parent, state);
            return temp; // all other properties SHALL be ignored
          }
          if (state.combine) {
            if (schema.allOf && Array.isArray(schema.allOf) && schema.allOf.length === 1) {
              schema = Object.assign({}, schema.allOf[0], schema);
              delete schema.allOf;
            }
            if (schema.anyOf && Array.isArray(schema.anyOf) && schema.anyOf.length === 1) {
              schema = Object.assign({}, schema.anyOf[0], schema);
              delete schema.anyOf;
            }
            if (schema.oneOf && Array.isArray(schema.oneOf) && schema.oneOf.length === 1) {
              schema = Object.assign({}, schema.oneOf[0], schema);
              delete schema.oneOf;
            }
          }
          callback(schema, parent, state);
          if (state.seen.has(schema)) {
            return schema;
          }
          //else
          if (typeof schema === 'object' && schema !== null) state.seen.set(schema, true);
          state.top = false;
          state.depth++;
          if (typeof schema.items !== 'undefined') {
            state.property = 'items';
            walkSchema(schema.items, schema, state, callback);
          }
          if (schema.additionalItems) {
            if (typeof schema.additionalItems === 'object') {
              state.property = 'additionalItems';
              walkSchema(schema.additionalItems, schema, state, callback);
            }
          }
          if (schema.additionalProperties) {
            if (typeof schema.additionalProperties === 'object') {
              state.property = 'additionalProperties';
              walkSchema(schema.additionalProperties, schema, state, callback);
            }
          }
          if (schema.properties) {
            for (var prop in schema.properties) {
              var subSchema = schema.properties[prop];
              state.property = 'properties/' + prop;
              walkSchema(subSchema, schema, state, callback);
            }
          }
          if (schema.patternProperties) {
            for (var prop in schema.patternProperties) {
              var subSchema = schema.patternProperties[prop];
              state.property = 'patternProperties/' + prop;
              walkSchema(subSchema, schema, state, callback);
            }
          }
          if (schema.allOf) {
            for (var index in schema.allOf) {
              var subSchema = schema.allOf[index];
              state.property = 'allOf/' + index;
              walkSchema(subSchema, schema, state, callback);
            }
          }
          if (schema.anyOf) {
            for (var index in schema.anyOf) {
              var subSchema = schema.anyOf[index];
              state.property = 'anyOf/' + index;
              walkSchema(subSchema, schema, state, callback);
            }
          }
          if (schema.oneOf) {
            for (var index in schema.oneOf) {
              var subSchema = schema.oneOf[index];
              state.property = 'oneOf/' + index;
              walkSchema(subSchema, schema, state, callback);
            }
          }
          if (schema.not) {
            state.property = 'not';
            walkSchema(schema.not, schema, state, callback);
          }
          state.depth--;
          return schema;
        }
        module.exports = {
          getDefaultState: getDefaultState,
          walkSchema: walkSchema,
        };

        /***/
      },
      /* 48 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var http = __webpack_require__(49);
        var ours = {
          default: 'Default response',
          '1XX': 'Informational',
          '103': 'Early hints',
          '2XX': 'Successful',
          '3XX': 'Redirection',
          '4XX': 'Client Error',
          '5XX': 'Server Error',
          '7XX': 'Developer Error', // April fools RFC
        };
        module.exports = {
          statusCodes: Object.assign({}, ours, http.STATUS_CODES),
        };

        /***/
      },
      /* 49 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global) {
          var ClientRequest = __webpack_require__(50);
          var response = __webpack_require__(31);
          var extend = __webpack_require__(55);
          var statusCodes = __webpack_require__(56);
          var url = __webpack_require__(5);

          var http = exports;

          http.request = function(opts, cb) {
            if (typeof opts === 'string') opts = url.parse(opts);
            else opts = extend(opts);

            // Normally, the page is loaded from http or https, so not specifying a protocol
            // will result in a (valid) protocol-relative url. However, this won't work if
            // the protocol is something else, like 'file:'
            var defaultProtocol =
              global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : '';

            var protocol = opts.protocol || defaultProtocol;
            var host = opts.hostname || opts.host;
            var port = opts.port;
            var path = opts.path || '/';

            // Necessary for IPv6 addresses
            if (host && host.indexOf(':') !== -1) host = '[' + host + ']';

            // This may be a relative url. The browser should always be able to interpret it correctly.
            opts.url = (host ? protocol + '//' + host : '') + (port ? ':' + port : '') + path;
            opts.method = (opts.method || 'GET').toUpperCase();
            opts.headers = opts.headers || {};

            // Also valid opts.auth, opts.mode

            var req = new ClientRequest(opts);
            if (cb) req.on('response', cb);
            return req;
          };

          http.get = function get(opts, cb) {
            var req = http.request(opts, cb);
            req.end();
            return req;
          };

          http.ClientRequest = ClientRequest;
          http.IncomingMessage = response.IncomingMessage;

          http.Agent = function() {};
          http.Agent.defaultMaxSockets = 4;

          http.globalAgent = new http.Agent();

          http.STATUS_CODES = statusCodes;

          http.METHODS = [
            'CHECKOUT',
            'CONNECT',
            'COPY',
            'DELETE',
            'GET',
            'HEAD',
            'LOCK',
            'M-SEARCH',
            'MERGE',
            'MKACTIVITY',
            'MKCOL',
            'MOVE',
            'NOTIFY',
            'OPTIONS',
            'PATCH',
            'POST',
            'PROPFIND',
            'PROPPATCH',
            'PURGE',
            'PUT',
            'REPORT',
            'SEARCH',
            'SUBSCRIBE',
            'TRACE',
            'UNLOCK',
            'UNSUBSCRIBE',
          ];
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(11)));

        /***/
      },
      /* 50 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(Buffer, global, process) {
          var capability = __webpack_require__(29);
          var inherits = __webpack_require__(30);
          var response = __webpack_require__(31);
          var stream = __webpack_require__(32);
          var toArrayBuffer = __webpack_require__(54);

          var IncomingMessage = response.IncomingMessage;
          var rStates = response.readyStates;

          function decideMode(preferBinary, useFetch) {
            if (capability.fetch && useFetch) {
              return 'fetch';
            } else if (capability.mozchunkedarraybuffer) {
              return 'moz-chunked-arraybuffer';
            } else if (capability.msstream) {
              return 'ms-stream';
            } else if (capability.arraybuffer && preferBinary) {
              return 'arraybuffer';
            } else if (capability.vbArray && preferBinary) {
              return 'text:vbarray';
            } else {
              return 'text';
            }
          }

          var ClientRequest = (module.exports = function(opts) {
            var self = this;
            stream.Writable.call(self);

            self._opts = opts;
            self._body = [];
            self._headers = {};
            if (opts.auth)
              self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'));
            Object.keys(opts.headers).forEach(function(name) {
              self.setHeader(name, opts.headers[name]);
            });

            var preferBinary;
            var useFetch = true;
            if (
              opts.mode === 'disable-fetch' ||
              ('requestTimeout' in opts && !capability.abortController)
            ) {
              // If the use of XHR should be preferred. Not typically needed.
              useFetch = false;
              preferBinary = true;
            } else if (opts.mode === 'prefer-streaming') {
              // If streaming is a high priority but binary compatibility and
              // the accuracy of the 'content-type' header aren't
              preferBinary = false;
            } else if (opts.mode === 'allow-wrong-content-type') {
              // If streaming is more important than preserving the 'content-type' header
              preferBinary = !capability.overrideMimeType;
            } else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
              // Use binary if text streaming may corrupt data or the content-type header, or for speed
              preferBinary = true;
            } else {
              throw new Error('Invalid value for opts.mode');
            }
            self._mode = decideMode(preferBinary, useFetch);
            self._fetchTimer = null;

            self.on('finish', function() {
              self._onFinish();
            });
          });

          inherits(ClientRequest, stream.Writable);

          ClientRequest.prototype.setHeader = function(name, value) {
            var self = this;
            var lowerName = name.toLowerCase();
            // This check is not necessary, but it prevents warnings from browsers about setting unsafe
            // headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
            // http-browserify did it, so I will too.
            if (unsafeHeaders.indexOf(lowerName) !== -1) return;

            self._headers[lowerName] = {
              name: name,
              value: value,
            };
          };

          ClientRequest.prototype.getHeader = function(name) {
            var header = this._headers[name.toLowerCase()];
            if (header) return header.value;
            return null;
          };

          ClientRequest.prototype.removeHeader = function(name) {
            var self = this;
            delete self._headers[name.toLowerCase()];
          };

          ClientRequest.prototype._onFinish = function() {
            var self = this;

            if (self._destroyed) return;
            var opts = self._opts;

            var headersObj = self._headers;
            var body = null;
            if (opts.method !== 'GET' && opts.method !== 'HEAD') {
              if (capability.arraybuffer) {
                body = toArrayBuffer(Buffer.concat(self._body));
              } else if (capability.blobConstructor) {
                body = new global.Blob(
                  self._body.map(function(buffer) {
                    return toArrayBuffer(buffer);
                  }),
                  {
                    type: (headersObj['content-type'] || {}).value || '',
                  },
                );
              } else {
                // get utf8 string
                body = Buffer.concat(self._body).toString();
              }
            }

            // create flattened list of headers
            var headersList = [];
            Object.keys(headersObj).forEach(function(keyName) {
              var name = headersObj[keyName].name;
              var value = headersObj[keyName].value;
              if (Array.isArray(value)) {
                value.forEach(function(v) {
                  headersList.push([name, v]);
                });
              } else {
                headersList.push([name, value]);
              }
            });

            if (self._mode === 'fetch') {
              var signal = null;
              var fetchTimer = null;
              if (capability.abortController) {
                var controller = new AbortController();
                signal = controller.signal;
                self._fetchAbortController = controller;

                if ('requestTimeout' in opts && opts.requestTimeout !== 0) {
                  self._fetchTimer = global.setTimeout(function() {
                    self.emit('requestTimeout');
                    if (self._fetchAbortController) self._fetchAbortController.abort();
                  }, opts.requestTimeout);
                }
              }

              global
                .fetch(self._opts.url, {
                  method: self._opts.method,
                  headers: headersList,
                  body: body || undefined,
                  mode: 'cors',
                  credentials: opts.withCredentials ? 'include' : 'same-origin',
                  signal: signal,
                })
                .then(
                  function(response) {
                    self._fetchResponse = response;
                    self._connect();
                  },
                  function(reason) {
                    global.clearTimeout(self._fetchTimer);
                    if (!self._destroyed) self.emit('error', reason);
                  },
                );
            } else {
              var xhr = (self._xhr = new global.XMLHttpRequest());
              try {
                xhr.open(self._opts.method, self._opts.url, true);
              } catch (err) {
                process.nextTick(function() {
                  self.emit('error', err);
                });
                return;
              }

              // Can't set responseType on really old browsers
              if ('responseType' in xhr) xhr.responseType = self._mode.split(':')[0];

              if ('withCredentials' in xhr) xhr.withCredentials = !!opts.withCredentials;

              if (self._mode === 'text' && 'overrideMimeType' in xhr)
                xhr.overrideMimeType('text/plain; charset=x-user-defined');

              if ('requestTimeout' in opts) {
                xhr.timeout = opts.requestTimeout;
                xhr.ontimeout = function() {
                  self.emit('requestTimeout');
                };
              }

              headersList.forEach(function(header) {
                xhr.setRequestHeader(header[0], header[1]);
              });

              self._response = null;
              xhr.onreadystatechange = function() {
                switch (xhr.readyState) {
                  case rStates.LOADING:
                  case rStates.DONE:
                    self._onXHRProgress();
                    break;
                }
              };
              // Necessary for streaming in Firefox, since xhr.response is ONLY defined
              // in onprogress, not in onreadystatechange with xhr.readyState = 3
              if (self._mode === 'moz-chunked-arraybuffer') {
                xhr.onprogress = function() {
                  self._onXHRProgress();
                };
              }

              xhr.onerror = function() {
                if (self._destroyed) return;
                self.emit('error', new Error('XHR error'));
              };

              try {
                xhr.send(body);
              } catch (err) {
                process.nextTick(function() {
                  self.emit('error', err);
                });
                return;
              }
            }
          };

          /**
           * Checks if xhr.status is readable and non-zero, indicating no error.
           * Even though the spec says it should be available in readyState 3,
           * accessing it throws an exception in IE8
           */
          function statusValid(xhr) {
            try {
              var status = xhr.status;
              return status !== null && status !== 0;
            } catch (e) {
              return false;
            }
          }

          ClientRequest.prototype._onXHRProgress = function() {
            var self = this;

            if (!statusValid(self._xhr) || self._destroyed) return;

            if (!self._response) self._connect();

            self._response._onXHRProgress();
          };

          ClientRequest.prototype._connect = function() {
            var self = this;

            if (self._destroyed) return;

            self._response = new IncomingMessage(
              self._xhr,
              self._fetchResponse,
              self._mode,
              self._fetchTimer,
            );
            self._response.on('error', function(err) {
              self.emit('error', err);
            });

            self.emit('response', self._response);
          };

          ClientRequest.prototype._write = function(chunk, encoding, cb) {
            var self = this;

            self._body.push(chunk);
            cb();
          };

          ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function() {
            var self = this;
            self._destroyed = true;
            global.clearTimeout(self._fetchTimer);
            if (self._response) self._response._destroyed = true;
            if (self._xhr) self._xhr.abort();
            else if (self._fetchAbortController) self._fetchAbortController.abort();
          };

          ClientRequest.prototype.end = function(data, encoding, cb) {
            var self = this;
            if (typeof data === 'function') {
              cb = data;
              data = undefined;
            }

            stream.Writable.prototype.end.call(self, data, encoding, cb);
          };

          ClientRequest.prototype.flushHeaders = function() {};
          ClientRequest.prototype.setTimeout = function() {};
          ClientRequest.prototype.setNoDelay = function() {};
          ClientRequest.prototype.setSocketKeepAlive = function() {};

          // Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
          var unsafeHeaders = [
            'accept-charset',
            'accept-encoding',
            'access-control-request-headers',
            'access-control-request-method',
            'connection',
            'content-length',
            'cookie',
            'cookie2',
            'date',
            'dnt',
            'expect',
            'host',
            'keep-alive',
            'origin',
            'referer',
            'te',
            'trailer',
            'transfer-encoding',
            'upgrade',
            'via',
          ];

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(28).Buffer,
          __webpack_require__(11),
          __webpack_require__(16),
        ));

        /***/
      },
      /* 51 */
      /***/ function(module, exports) {
        module.exports = require('base64-js');

        /***/
      },
      /* 52 */
      /***/ function(module, exports) {
        module.exports = require('ieee754');

        /***/
      },
      /* 53 */
      /***/ function(module, exports) {
        module.exports = require('isarray');

        /***/
      },
      /* 54 */
      /***/ function(module, exports) {
        module.exports = require('to-arraybuffer');

        /***/
      },
      /* 55 */
      /***/ function(module, exports) {
        module.exports = require('xtend');

        /***/
      },
      /* 56 */
      /***/ function(module, exports) {
        module.exports = require('builtin-status-codes');

        /***/
      },
      /* 57 */
      /***/ function(module) {
        module.exports = JSON.parse(
          '{"name":"swagger2openapi","version":"5.3.1","description":"Convert Swagger 2.0 definitions to OpenApi 3.0 and validate","main":"index.js","bin":{"swagger2openapi":"./swagger2openapi.js","oas-validate":"./oas-validate.js","boast":"./boast.js"},"scripts":{"test":"mocha"},"browserify":{"transform":[["babelify",{"presets":["es2015"]}]]},"repository":{"url":"https://github.com/Mermade/oas-kit.git","type":"git"},"bugs":{"url":"https://github.com/mermade/oas-kit/issues"},"author":"Mike Ralphson <mike.ralphson@gmail.com>","license":"BSD-3-Clause","dependencies":{"better-ajv-errors":"^0.6.1","call-me-maybe":"^1.0.1","node-fetch-h2":"^2.3.0","node-readfiles":"^0.2.0","oas-kit-common":"^1.0.7","oas-resolver":"^2.2.5","oas-schema-walker":"^1.1.2","oas-validator":"^3.3.1","reftools":"^1.0.8","yaml":"^1.3.1","yargs":"^12.0.5"},"keywords":["swagger","openapi","openapi2","openapi3","converter","conversion","validator","validation","resolver","lint","linter"],"gitHead":"bb9737783f5c8e192bdf2cc33edcaec1f7fa5720"}',
        );

        /***/
      },
      /* 58 */
      /***/ function(module, exports) {
        module.exports = require('url-template');

        /***/
      },
      /* 59 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-bash.js');

        /***/
      },
      /* 60 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-c.js');

        /***/
      },
      /* 61 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-clike.js');

        /***/
      },
      /* 62 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-coffeescript.js');

        /***/
      },
      /* 63 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-cpp.js');

        /***/
      },
      /* 64 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-csharp.js');

        /***/
      },
      /* 65 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-go.js');

        /***/
      },
      /* 66 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-http.js');

        /***/
      },
      /* 67 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-java.js');

        /***/
      },
      /* 68 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-lua.js');

        /***/
      },
      /* 69 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-markup-templating.js');

        /***/
      },
      /* 70 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-markup.js');

        /***/
      },
      /* 71 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-objectivec.js');

        /***/
      },
      /* 72 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-perl.js');

        /***/
      },
      /* 73 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-php.js');

        /***/
      },
      /* 74 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-python.js');

        /***/
      },
      /* 75 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-ruby.js');

        /***/
      },
      /* 76 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-scala.js');

        /***/
      },
      /* 77 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-sql.js');

        /***/
      },
      /* 78 */
      /***/ function(module, exports) {
        module.exports = require('prismjs/components/prism-swift.js');

        /***/
      },
      /* 79 */
      /***/ function(module, exports, __webpack_require__) {
        var addMethods = __webpack_require__(80);
        var methods = ['add', 'done', 'toJS', 'load', 'search'];
        module.exports = function() {
          var w = new Worker(__webpack_require__.p + '6b277c8514aaf28442c4.worker.js', {
            name: '[hash].worker.js',
          });
          addMethods(w, methods);

          return w;
        };

        /***/
      },
      /* 80 */
      /***/ function(module, exports) {
        function addMethods(worker, methods) {
          var c = 0;
          var callbacks = {};
          worker.addEventListener('message', function(e) {
            var d = e.data;
            if (d.type !== 'RPC') {
              return;
            }

            if (d.id) {
              var f = callbacks[d.id];

              if (f) {
                delete callbacks[d.id];

                if (d.error) {
                  f[1](Object.assign(Error(d.error.message), d.error));
                } else {
                  f[0](d.result);
                }
              }
            } else {
              var evt = document.createEvent('Event');
              evt.initEvent(d.method, false, false);
              evt.data = d.params;
              worker.dispatchEvent(evt);
            }
          });
          methods.forEach(function(method) {
            worker[method] = function() {
              var params = [],
                len = arguments.length;
              while (len--) params[len] = arguments[len];

              return new Promise(function(a, b) {
                var id = ++c;
                callbacks[id] = [a, b];
                worker.postMessage({
                  type: 'RPC',
                  id: id,
                  method: method,
                  params: params,
                });
              });
            };
          });
        }

        module.exports = addMethods;

        /***/
      },
      /* 81 */
      /***/ function(module, exports) {
        module.exports = require('core-js/es/promise');

        /***/
      },
      /* 82 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function(useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return '@media '.concat(item[2], '{').concat(content, '}');
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names

          list.i = function(modules, mediaQuery) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = modules[_i]; // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              // when a module is imported multiple times with different media queries.
              // I hope this will never occur (Hey this way we have smaller bundles)

              if (item[0] == null || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = '('.concat(item[2], ') and (').concat(mediaQuery, ')');
                }

                list.push(item);
              }
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return '/*# sourceURL='.concat(cssMapping.sourceRoot).concat(source, ' */');
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)

        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(base64);
          return '/*# '.concat(data, ' */');
        }

        /***/
      },
      /* 83 */
      /***/ function(module, exports) {
        module.exports = require('brace/mode/curly');

        /***/
      },
      /* 84 */
      /***/ function(module, exports) {
        module.exports = require('brace/mode/json');

        /***/
      },
      /* 85 */
      /***/ function(module, exports) {
        module.exports = require('brace/theme/github');

        /***/
      },
      /* 86 */
      /***/ function(module, exports) {
        module.exports = require('brace/theme/monokai');

        /***/
      },
      /* 87 */
      /***/ function(module, exports) {
        module.exports = require('qs');

        /***/
      },
      /* 88 */
      /***/ function(module, exports) {
        module.exports = require('stickyfill');

        /***/
      },
      /* 89 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external "tslib"
        var external_tslib_ = __webpack_require__(1);

        // EXTERNAL MODULE: external "prop-types"
        var external_prop_types_ = __webpack_require__(13);

        // EXTERNAL MODULE: external "react"
        var external_react_ = __webpack_require__(0);

        // EXTERNAL MODULE: external "polished"
        var external_polished_ = __webpack_require__(2);

        // CONCATENATED MODULE: ./src/theme.ts

        var defaultTheme = {
          spacing: {
            unit: 5,
            sectionHorizontal: function(_a) {
              var spacing = _a.spacing;
              return spacing.unit * 8;
            },
            sectionVertical: function(_a) {
              var spacing = _a.spacing;
              return spacing.unit * 8;
            },
          },
          breakpoints: {
            small: '50rem',
            medium: '85rem',
            large: '105rem',
          },
          colors: {
            tonalOffset: 0.3,
            primary: {
              main: '#32329f',
              light: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['lighten'])(
                  colors.tonalOffset,
                  colors.primary.main,
                );
              },
              dark: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['darken'])(
                  colors.tonalOffset,
                  colors.primary.main,
                );
              },
              contrastText: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['readableColor'])(colors.primary.main);
              },
            },
            success: {
              main: '#00aa13',
              light: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['lighten'])(
                  colors.tonalOffset,
                  colors.success.main,
                );
              },
              dark: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['darken'])(
                  colors.tonalOffset,
                  colors.success.main,
                );
              },
              contrastText: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['readableColor'])(colors.success.main);
              },
            },
            warning: {
              main: '#d4ad03',
              light: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['lighten'])(
                  colors.tonalOffset,
                  colors.warning.main,
                );
              },
              dark: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['darken'])(
                  colors.tonalOffset,
                  colors.warning.main,
                );
              },
              contrastText: '#ffffff',
            },
            error: {
              main: '#e53935',
              light: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['lighten'])(colors.tonalOffset, colors.error.main);
              },
              dark: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['darken'])(colors.tonalOffset, colors.error.main);
              },
              contrastText: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['readableColor'])(colors.error.main);
              },
            },
            text: {
              primary: '#333333',
              secondary: function(_a) {
                var colors = _a.colors;
                return Object(external_polished_['lighten'])(
                  colors.tonalOffset,
                  colors.text.primary,
                );
              },
            },
            border: {
              dark: 'rgba(0,0,0, 0.1)',
              light: '#ffffff',
            },
            responses: {
              success: {
                color: function(_a) {
                  var colors = _a.colors;
                  return colors.success.main;
                },
                backgroundColor: function(_a) {
                  var colors = _a.colors;
                  return Object(external_polished_['transparentize'])(0.9, colors.success.main);
                },
              },
              error: {
                color: function(_a) {
                  var colors = _a.colors;
                  return colors.error.main;
                },
                backgroundColor: function(_a) {
                  var colors = _a.colors;
                  return Object(external_polished_['transparentize'])(0.9, colors.error.main);
                },
              },
              redirect: {
                color: '#ffa500',
                backgroundColor: function(_a) {
                  var colors = _a.colors;
                  return Object(external_polished_['transparentize'])(
                    0.9,
                    colors.responses.redirect.color,
                  );
                },
              },
              info: {
                color: '#87ceeb',
                backgroundColor: function(_a) {
                  var colors = _a.colors;
                  return Object(external_polished_['transparentize'])(
                    0.9,
                    colors.responses.info.color,
                  );
                },
              },
            },
            http: {
              get: '#6bbd5b',
              post: '#248fb2',
              put: '#9b708b',
              options: '#d3ca12',
              patch: '#e09d43',
              delete: '#e27a7a',
              basic: '#999',
              link: '#31bbb6',
              head: '#c167e4',
            },
          },
          schema: {
            linesColor: function(theme) {
              return Object(external_polished_['lighten'])(
                theme.colors.tonalOffset,
                Object(external_polished_['desaturate'])(
                  theme.colors.tonalOffset,
                  theme.colors.primary.main,
                ),
              );
            },
            defaultDetailsWidth: '75%',
            typeNameColor: function(theme) {
              return theme.colors.text.secondary;
            },
            typeTitleColor: function(theme) {
              return theme.schema.typeNameColor;
            },
            requireLabelColor: function(theme) {
              return theme.colors.error.main;
            },
            labelsTextSize: '0.9em',
            nestingSpacing: '1em',
            nestedBackground: '#fafafa',
            arrow: {
              size: '1.1em',
              color: function(theme) {
                return theme.colors.text.secondary;
              },
            },
          },
          typography: {
            fontSize: '14px',
            lineHeight: '1.5em',
            fontWeightRegular: '400',
            fontWeightBold: '600',
            fontWeightLight: '300',
            fontFamily: 'Roboto, sans-serif, Vazir',
            smoothing: 'antialiased',
            optimizeSpeed: true,
            headings: {
              fontFamily: 'Montserrat, sans-serif, Vazir',
              fontWeight: '400',
              lineHeight: '1.6em',
            },
            code: {
              fontSize: '13px',
              fontFamily: 'Courier, monospace, Vazir',
              lineHeight: function(_a) {
                var typography = _a.typography;
                return typography.lineHeight;
              },
              fontWeight: function(_a) {
                var typography = _a.typography;
                return typography.fontWeightRegular;
              },
              color: '#e53935',
              backgroundColor: 'rgba(38, 50, 56, 0.05)',
              wrap: false,
            },
            links: {
              color: function(_a) {
                var colors = _a.colors;
                return colors.primary.main;
              },
              visited: function(_a) {
                var typography = _a.typography;
                return typography.links.color;
              },
              hover: function(_a) {
                var typography = _a.typography;
                return Object(external_polished_['lighten'])(0.2, typography.links.color);
              },
            },
          },
          menu: {
            width: '260px',
            backgroundColor: '#fafafa',
            textColor: '#333333',
            activeTextColor: function(theme) {
              return theme.menu.textColor !== defaultTheme.menu.textColor
                ? theme.menu.textColor
                : theme.colors.primary.main;
            },
            groupItems: {
              textTransform: 'uppercase',
            },
            level1Items: {
              textTransform: 'none',
            },
            arrow: {
              size: '1.5em',
              color: function(theme) {
                return theme.menu.textColor;
              },
            },
          },
          logo: {
            maxHeight: function(_a) {
              var menu = _a.menu;
              return menu.width;
            },
            maxWidth: function(_a) {
              var menu = _a.menu;
              return menu.width;
            },
            gutter: '2px',
          },
          rightPanel: {
            backgroundColor: '#263238',
            width: '40%',
            textColor: '#ffffff',
          },
          codeSample: {
            backgroundColor: function(_a) {
              var rightPanel = _a.rightPanel;
              return Object(external_polished_['darken'])(0.1, rightPanel.backgroundColor);
            },
            textColor: function(_a) {
              var rightPanel = _a.rightPanel;
              return rightPanel.textColor;
            },
          },
          styledPre: {
            maxHeight: '500px',
          },
        };
        /* harmony default export */ var src_theme = defaultTheme;
        function resolveTheme(theme) {
          var resolvedValues = {};
          var counter = 0;
          var setProxy = function(obj, path) {
            Object.keys(obj).forEach(function(k) {
              var currentPath = (path ? path + '.' : '') + k;
              var val = obj[k];
              if (typeof val === 'function') {
                Object.defineProperty(obj, k, {
                  get: function() {
                    if (!resolvedValues[currentPath]) {
                      counter++;
                      if (counter > 1000) {
                        throw new Error(
                          'Theme probably contains circular dependency at ' +
                            currentPath +
                            ': ' +
                            val.toString(),
                        );
                      }
                      resolvedValues[currentPath] = val(theme);
                    }
                    return resolvedValues[currentPath];
                  },
                  enumerable: true,
                });
              } else if (typeof val === 'object') {
                setProxy(val, currentPath);
              }
            });
          };
          setProxy(theme, '');
          return JSON.parse(JSON.stringify(theme));
        }

        // CONCATENATED MODULE: ./src/utils/dom.ts
        var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
        function querySelector(selector) {
          if (typeof document !== 'undefined') {
            return document.querySelector(selector);
          }
          return null;
        }
        /**
         * Drop everything inside <...> (i.e., tags/elements), and keep the text.
         * Unlike browser innerText, this removes newlines; it also doesn't handle
         * un-encoded `<` or `>` characters very well, so don't feed it malformed HTML
         */
        function html2Str(html) {
          return html
            .split(/<[^>]+>/)
            .map(function(chunk) {
              return chunk.trim();
            })
            .filter(function(trimmedChunk) {
              return trimmedChunk.length > 0;
            })
            .join(' ');
        } // scrollIntoViewIfNeeded polyfill
        if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoViewIfNeeded) {
          Element.prototype.scrollIntoViewIfNeeded = function(centerIfNeeded) {
            centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;
            var parent = this.parentNode;
            var parentComputedStyle = window.getComputedStyle(parent, undefined);
            var parentBorderTopWidth = parseInt(
              parentComputedStyle.getPropertyValue('border-top-width'),
              10,
            );
            var parentBorderLeftWidth = parseInt(
              parentComputedStyle.getPropertyValue('border-left-width'),
              10,
            );
            var overTop = this.offsetTop - parent.offsetTop < parent.scrollTop;
            var overBottom =
              this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth >
              parent.scrollTop + parent.clientHeight;
            var overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft;
            var overRight =
              this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth >
              parent.scrollLeft + parent.clientWidth;
            var alignWithTop = overTop && !overBottom;
            if ((overTop || overBottom) && centerIfNeeded) {
              parent.scrollTop =
                this.offsetTop -
                parent.offsetTop -
                parent.clientHeight / 2 -
                parentBorderTopWidth +
                this.clientHeight / 2;
            }
            if ((overLeft || overRight) && centerIfNeeded) {
              parent.scrollLeft =
                this.offsetLeft -
                parent.offsetLeft -
                parent.clientWidth / 2 -
                parentBorderLeftWidth +
                this.clientWidth / 2;
            }
            if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
              this.scrollIntoView(alignWithTop);
            }
          };
        }

        // EXTERNAL MODULE: external "slugify"
        var external_slugify_ = __webpack_require__(34);
        var external_slugify_default = /*#__PURE__*/ __webpack_require__.n(external_slugify_);

        // EXTERNAL MODULE: external "url"
        var external_url_ = __webpack_require__(5);

        // CONCATENATED MODULE: ./src/utils/helpers.ts

        /**
         * Maps over array passing `isLast` bool to iterator as the second argument
         */
        function mapWithLast(array, iteratee) {
          var res = [];
          for (var i = 0; i < array.length - 1; i++) {
            res.push(iteratee(array[i], false));
          }
          if (array.length !== 0) {
            res.push(iteratee(array[array.length - 1], true));
          }
          return res;
        }
        /**
         * Creates an object with the same keys as object and values generated by running each
         * own enumerable string keyed property of object thru iteratee.
         * The iteratee is invoked with three arguments: (value, key, object).
         *
         * @param object the object to iterate over
         * @param iteratee the function invoked per iteration.
         */
        function mapValues(object, iteratee) {
          var res = {};
          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              res[key] = iteratee(object[key], key, object);
            }
          }
          return res;
        }
        /**
         * flattens collection using `prop` field as a children
         * @param collectionItems collection items
         * @param prop item property with child elements
         */
        function flattenByProp(collectionItems, prop) {
          var res = [];
          var iterate = function(items) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
              var item = items_1[_i];
              res.push(item);
              if (item[prop]) {
                iterate(item[prop]);
              }
            }
          };
          iterate(collectionItems);
          return res;
        }
        function stripTrailingSlash(path) {
          if (path.endsWith('/')) {
            return path.substring(0, path.length - 1);
          }
          return path;
        }
        function isNumeric(n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
        }
        function appendToMdHeading(md, heading, content) {
          // if  heading is already in md and append to the end of it
          var testRegex = new RegExp('(^|\\n)#\\s?' + heading + '\\s*\\n', 'i');
          var replaceRegex = new RegExp(
            '((\\n|^)#\\s*' + heading + '\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)',
            'i',
          );
          if (testRegex.test(md)) {
            return md.replace(replaceRegex, '$1\n\n' + content + '\n$4');
          } else {
            // else append heading itself
            var br = md === '' || md.endsWith('\n\n') ? '' : md.endsWith('\n') ? '\n' : '\n\n';
            return '' + md + br + '# ' + heading + '\n\n' + content;
          }
        } // credits https://stackoverflow.com/a/46973278/1749888
        var mergeObjects = function(target) {
          var sources = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
          }
          if (!sources.length) {
            return target;
          }
          var source = sources.shift();
          if (source === undefined) {
            return target;
          }
          if (isMergebleObject(target) && isMergebleObject(source)) {
            Object.keys(source).forEach(function(key) {
              if (isMergebleObject(source[key])) {
                if (!target[key]) {
                  target[key] = {};
                }
                mergeObjects(target[key], source[key]);
              } else {
                target[key] = source[key];
              }
            });
          }
          return mergeObjects.apply(
            void 0,
            Object(external_tslib_['__spreadArrays'])([target], sources),
          );
        };
        var isObject = function(item) {
          return item !== null && typeof item === 'object';
        };
        var isMergebleObject = function(item) {
          return isObject(item) && !Array.isArray(item);
        };
        /**
         * slugify() returns empty string when failed to slugify.
         * so try to return minimum slugified-string with failed one which keeps original value
         * the regex codes are referenced with https://gist.github.com/mathewbyrne/1280286
         */
        function safeSlugify(value) {
          return (
            external_slugify_default()(value) ||
            value
              .toString()
              .toLowerCase()
              .replace(/\s+/g, '-') // Replace spaces with -
              .replace(/&/g, '-and-') // Replace & with 'and'
              .replace(/\--+/g, '-') // Replace multiple - with single -
              .replace(/^-+/, '') // Trim - from start of text
              .replace(/-+$/, '')
          ); // Trim - from end of text
        }
        function isAbsoluteUrl(url) {
          return /(?:^[a-z][a-z0-9+.-]*:|\/\/)/i.test(url);
        }
        /**
         * simple resolve URL which doesn't break on strings with url fragments
         * e.g. resolveUrl('http://test.com:{port}', 'path') results in http://test.com:{port}/path
         */
        function resolveUrl(url, to) {
          var res;
          if (to.startsWith('//')) {
            var specProtocol = Object(external_url_['parse'])(url).protocol;
            res = '' + (specProtocol || 'https:') + to;
          } else if (isAbsoluteUrl(to)) {
            res = to;
          } else if (!to.startsWith('/')) {
            res = stripTrailingSlash(url) + '/' + to;
          } else {
            var urlObj = Object(external_url_['parse'])(url);
            res = Object(external_url_['format'])(
              Object(external_tslib_['__assign'])(Object(external_tslib_['__assign'])({}, urlObj), {
                pathname: to,
              }),
            );
          }
          return stripTrailingSlash(res);
        }
        function getBasePath(serverUrl) {
          try {
            return parseURL(serverUrl).pathname;
          } catch (e) {
            // when using with redoc-cli serverUrl can be empty resulting in crash
            return serverUrl;
          }
        }
        function titleize(text) {
          return text.charAt(0).toUpperCase() + text.slice(1);
        }
        function removeQueryString(serverUrl) {
          try {
            var url = parseURL(serverUrl);
            url.search = '';
            return url.toString();
          } catch (e) {
            // when using with redoc-cli serverUrl can be empty resulting in crash
            return serverUrl;
          }
        }
        function parseURL(url) {
          if (typeof URL === 'undefined') {
            // node
            return new (__webpack_require__(5).URL)(url);
          } else {
            return new URL(url);
          }
        }
        function unescapeHTMLChars(str) {
          return str.replace(/&#(\d+);/g, function(_m, code) {
            return String.fromCharCode(parseInt(code, 10));
          });
        }

        // CONCATENATED MODULE: ./src/services/Labels.ts
        var labels = {
          enum: 'Enum',
          enumSingleValue: 'Value',
          enumArray: 'Items',
          default: 'Default',
          deprecated: 'Deprecated',
          example: 'Example',
          nullable: 'Nullable',
          recursive: 'Recursive',
          arrayOf: 'Array of ',
        };
        function setRedocLabels(_labels) {
          Object.assign(labels, _labels);
        }
        function l(key, idx) {
          var label = labels[key];
          if (idx !== undefined) {
            return label[idx];
          }
          return label;
        }

        // CONCATENATED MODULE: ./src/services/RedocNormalizedOptions.ts

        function argValueToBoolean(val, defaultValue) {
          if (val === undefined) {
            return defaultValue || false;
          }
          if (typeof val === 'string') {
            return val === 'false' ? false : true;
          }
          return val;
        }
        var RedocNormalizedOptions_RedocNormalizedOptions = /** @class */ (function() {
          function RedocNormalizedOptions(raw, defaults) {
            if (defaults === void 0) {
              defaults = {};
            }
            raw = Object(external_tslib_['__assign'])(
              Object(external_tslib_['__assign'])({}, defaults),
              raw,
            );
            var hook = raw.theme && raw.theme.extensionsHook;
            this.theme = resolveTheme(
              mergeObjects(
                {},
                src_theme,
                Object(external_tslib_['__assign'])(
                  Object(external_tslib_['__assign'])({}, raw.theme),
                  { extensionsHook: undefined },
                ),
              ),
            );
            this.theme.extensionsHook = hook; // do not support dynamic labels changes. Labels should be configured before
            setRedocLabels(raw.labels);
            this.scrollYOffset = RedocNormalizedOptions.normalizeScrollYOffset(raw.scrollYOffset);
            this.hideHostname = RedocNormalizedOptions.normalizeHideHostname(raw.hideHostname);
            this.expandResponses = RedocNormalizedOptions.normalizeExpandResponses(
              raw.expandResponses,
            );
            this.requiredPropsFirst = argValueToBoolean(raw.requiredPropsFirst);
            this.sortPropsAlphabetically = argValueToBoolean(raw.sortPropsAlphabetically);
            this.noAutoAuth = argValueToBoolean(raw.noAutoAuth);
            this.nativeScrollbars = argValueToBoolean(raw.nativeScrollbars);
            this.pathInMiddlePanel = argValueToBoolean(raw.pathInMiddlePanel);
            this.untrustedSpec = argValueToBoolean(raw.untrustedSpec);
            this.hideDownloadButton = argValueToBoolean(raw.hideDownloadButton);
            this.disableSearch = argValueToBoolean(raw.disableSearch);
            this.onlyRequiredInSamples = argValueToBoolean(raw.onlyRequiredInSamples);
            this.showExtensions = RedocNormalizedOptions.normalizeShowExtensions(
              raw.showExtensions,
            );
            this.hideSingleRequestSampleTab = argValueToBoolean(raw.hideSingleRequestSampleTab);
            this.menuToggle = argValueToBoolean(raw.menuToggle, true);
            this.jsonSampleExpandLevel = RedocNormalizedOptions.normalizeJsonSampleExpandLevel(
              raw.jsonSampleExpandLevel,
            );
            this.enumSkipQuotes = argValueToBoolean(raw.enumSkipQuotes);
            this.hideSchemaTitles = argValueToBoolean(raw.hideSchemaTitles);
            this.payloadSampleIdx = RedocNormalizedOptions.normalizePayloadSampleIdx(
              raw.payloadSampleIdx,
            );
            this.enableConsole = argValueToBoolean(raw.enableConsole);
            this.additionalHeaders = raw.additionalHeaders || {};
            this.providedByName = raw.providedByName || 'Documentation Powered by ReDoc';
            this.providedByUri = raw.providedByUri || 'https://github.com/Rebilly/ReDoc';
            this.queryParamPrefix = raw.queryParamPrefix || '{';
            this.queryParamSuffix = raw.queryParamSuffix || '}';
            this.unstable_ignoreMimeParameters = argValueToBoolean(
              raw.unstable_ignoreMimeParameters,
            );
            this.allowedMdComponents = raw.allowedMdComponents || {};
            this.expandDefaultServerVariables = argValueToBoolean(raw.expandDefaultServerVariables);
          }
          RedocNormalizedOptions.normalizeExpandResponses = function(value) {
            if (value === 'all') {
              return 'all';
            }
            if (typeof value === 'string') {
              var res_1 = {};
              value.split(',').forEach(function(code) {
                res_1[code.trim()] = true;
              });
              return res_1;
            } else if (value !== undefined) {
              console.warn(
                'expandResponses must be a string but received value "' +
                  value +
                  '" of type ' +
                  typeof value,
              );
            }
            return {};
          };
          RedocNormalizedOptions.normalizeHideHostname = function(value) {
            return !!value;
          };
          RedocNormalizedOptions.normalizeScrollYOffset = function(value) {
            // just number is not valid selector and leads to crash so checking if isNumeric here
            if (typeof value === 'string' && !isNumeric(value)) {
              var el = querySelector(value);
              if (!el) {
                console.warn(
                  'scrollYOffset value is a selector to non-existing element. Using offset 0 by default',
                );
              }
              var bottom_1 = (el && el.getBoundingClientRect().bottom) || 0;
              return function() {
                return bottom_1;
              };
            } else if (typeof value === 'number' || isNumeric(value)) {
              return function() {
                return typeof value === 'number' ? value : parseFloat(value);
              };
            } else if (typeof value === 'function') {
              return function() {
                var res = value();
                if (typeof res !== 'number') {
                  console.warn(
                    'scrollYOffset should return number but returned value "' +
                      res +
                      '" of type ' +
                      typeof res,
                  );
                }
                return res;
              };
            } else if (value !== undefined) {
              console.warn(
                'Wrong value for scrollYOffset ReDoc option: should be string, number or function',
              );
            }
            return function() {
              return 0;
            };
          };
          RedocNormalizedOptions.normalizeShowExtensions = function(value) {
            if (typeof value === 'undefined') {
              return false;
            }
            if (value === '') {
              return true;
            }
            if (typeof value === 'string') {
              return value.split(',').map(function(ext) {
                return ext.trim();
              });
            }
            return value;
          };
          RedocNormalizedOptions.normalizePayloadSampleIdx = function(value) {
            if (typeof value === 'number') {
              return Math.max(0, value); // always greater or equal than 0
            }
            if (typeof value === 'string') {
              return isFinite(value) ? parseInt(value, 10) : 0;
            }
            return 0;
          };
          RedocNormalizedOptions.normalizeJsonSampleExpandLevel = function(level) {
            if (level === 'all') {
              return +Infinity;
            }
            if (!isNaN(Number(level))) {
              return Math.ceil(Number(level));
            }
            return 2;
          };
          return RedocNormalizedOptions;
        })();

        // EXTERNAL MODULE: external "styled-components"
        var external_styled_components_ = __webpack_require__(35);

        // CONCATENATED MODULE: ./src/styled-components.ts

        var styled_components_a = external_styled_components_,
          styled = styled_components_a.default,
          css = styled_components_a.css,
          createGlobalStyle = styled_components_a.createGlobalStyle,
          keyframes = styled_components_a.keyframes,
          ThemeProvider = styled_components_a.ThemeProvider;
        var media = {
          lessThan: function(breakpoint, print) {
            return function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return css(
                templateObject_1 ||
                  (templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
                    [
                      '\n      @media ',
                      ' screen and (max-width: ',
                      ') {\n        ',
                      ';\n      }\n    ',
                    ],
                    [
                      '\n      @media ',
                      ' screen and (max-width: ',
                      ') {\n        ',
                      ';\n      }\n    ',
                    ],
                  )),
                print ? 'print, ' : '',
                function(props) {
                  return props.theme.breakpoints[breakpoint];
                },
                css.apply(void 0, args),
              );
            };
          },
          greaterThan: function(breakpoint) {
            return function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return css(
                templateObject_2 ||
                  (templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
                    ['\n      @media (min-width: ', ') {\n        ', ';\n      }\n    '],
                    ['\n      @media (min-width: ', ') {\n        ', ';\n      }\n    '],
                  )),
                function(props) {
                  return props.theme.breakpoints[breakpoint];
                },
                css.apply(void 0, args),
              );
            };
          },
          between: function(firstBreakpoint, secondBreakpoint) {
            return function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return css(
                templateObject_3 ||
                  (templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
                    [
                      '\n      @media (min-width: ',
                      ') and (max-width: ',
                      ') {\n        ',
                      ';\n      }\n    ',
                    ],
                    [
                      '\n      @media (min-width: ',
                      ') and (max-width: ',
                      ') {\n        ',
                      ';\n      }\n    ',
                    ],
                  )),
                function(props) {
                  return props.theme.breakpoints[firstBreakpoint];
                },
                function(props) {
                  return props.theme.breakpoints[secondBreakpoint];
                },
                css.apply(void 0, args),
              );
            };
          },
        };

        /* harmony default export */ var styled_components = styled;
        function extensionsHook(styledName) {
          return function(props) {
            if (!props.theme.extensionsHook) {
              return;
            }
            return props.theme.extensionsHook(styledName, props);
          };
        }
        var templateObject_1, templateObject_2, templateObject_3;

        // CONCATENATED MODULE: ./src/components/ErrorBoundary.tsx

        var ErrorWrapper = styled_components.div(
          ErrorBoundary_templateObject_1 ||
            (ErrorBoundary_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  padding: 20px;\n  color: red;\n'],
              ['\n  padding: 20px;\n  color: red;\n'],
            )),
        );
        var ErrorBoundary_ErrorBoundary = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ErrorBoundary, _super);
          function ErrorBoundary(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
              error: undefined,
            };
            return _this;
          }
          ErrorBoundary.prototype.componentDidCatch = function(error) {
            this.setState({
              error: error,
            });
            return false;
          };
          ErrorBoundary.prototype.render = function() {
            if (this.state.error) {
              return external_react_['createElement'](
                ErrorWrapper,
                null,
                external_react_['createElement']('h1', null, 'Something went wrong...'),
                external_react_['createElement']('small', null, ' ', this.state.error.message, ' '),
                external_react_['createElement'](
                  'p',
                  null,
                  external_react_['createElement'](
                    'details',
                    null,
                    external_react_['createElement']('summary', null, 'Stack trace'),
                    external_react_['createElement']('pre', null, this.state.error.stack),
                  ),
                ),
                external_react_['createElement']('small', null, ' ReDoc Version: ', '2.0.0-rc.23'),
                ' ',
                external_react_['createElement']('br', null),
                external_react_['createElement']('small', null, ' Commit: ', 'e3e1fda9'),
              );
            }
            return external_react_['Children'].only(this.props.children);
          };
          return ErrorBoundary;
        })(external_react_['Component']);

        var ErrorBoundary_templateObject_1;

        // CONCATENATED MODULE: ./src/components/Loading/Spinner.svg.tsx

        var _Spinner = function(props) {
          return external_react_['createElement'](
            'svg',
            {
              className: props.className,
              version: '1.1',
              width: '512',
              height: '512',
              viewBox: '0 0 512 512',
            },
            external_react_['createElement']('path', {
              d:
                'M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z',
            }),
            external_react_['createElement']('path', {
              d:
                'M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z',
            }),
            external_react_['createElement']('path', {
              d:
                'M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z',
            }),
            external_react_['createElement']('path', {
              d:
                'M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z',
            }),
            external_react_['createElement']('path', {
              d:
                'M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z',
            }),
            external_react_['createElement']('path', {
              d:
                'M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z',
            }),
            external_react_['createElement']('path', {
              d:
                'M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z',
            }),
            external_react_['createElement']('path', {
              d:
                'M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z',
            }),
          );
        };
        var rotate = keyframes(
          Spinner_svg_templateObject_1 ||
            (Spinner_svg_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg);\n  }\n',
              ],
              [
                '\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg);\n  }\n',
              ],
            )),
        );
        var Spinner = styled_components(_Spinner)(
          Spinner_svg_templateObject_2 ||
            (Spinner_svg_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  animation: 2s ',
                " linear infinite;\n  width: 50px;\n  height: 50px;\n  content: '';\n  display: inline-block;\n  margin-left: -25px;\n\n  path {\n    fill: ",
                ';\n  }\n',
              ],
              [
                '\n  animation: 2s ',
                " linear infinite;\n  width: 50px;\n  height: 50px;\n  content: '';\n  display: inline-block;\n  margin-left: -25px;\n\n  path {\n    fill: ",
                ';\n  }\n',
              ],
            )),
          rotate,
          function(props) {
            return props.color;
          },
        );
        var Spinner_svg_templateObject_1, Spinner_svg_templateObject_2;

        // CONCATENATED MODULE: ./src/components/Loading/Loading.tsx

        var LoadingMessage = styled_components.div(
          Loading_templateObject_1 ||
            (Loading_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-family: helvetica, sans;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0 20px 0;\n  color: ',
                ';\n',
              ],
              [
                '\n  font-family: helvetica, sans;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0 20px 0;\n  color: ',
                ';\n',
              ],
            )),
          function(props) {
            return props.color;
          },
        );
        var Loading_Loading = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Loading, _super);
          function Loading() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Loading.prototype.render = function() {
            return external_react_['createElement'](
              'div',
              {
                style: {
                  textAlign: 'center',
                },
              },
              external_react_['createElement'](
                LoadingMessage,
                { color: this.props.color },
                'Loading ...',
              ),
              external_react_['createElement'](Spinner, { color: this.props.color }),
            );
          };
          return Loading;
        })(external_react_['PureComponent']);

        var Loading_templateObject_1;

        // CONCATENATED MODULE: ./src/components/OptionsProvider.ts

        var OptionsContext = external_react_['createContext'](
          new RedocNormalizedOptions_RedocNormalizedOptions({}),
        );
        var OptionsProvider = OptionsContext.Provider;
        var OptionsConsumer = OptionsContext.Consumer;

        // EXTERNAL MODULE: external "mobx"
        var external_mobx_ = __webpack_require__(3);

        // EXTERNAL MODULE: external "json-schema-ref-parser"
        var external_json_schema_ref_parser_ = __webpack_require__(36);
        var external_json_schema_ref_parser_default = /*#__PURE__*/ __webpack_require__.n(
          external_json_schema_ref_parser_,
        );

        // EXTERNAL MODULE: ./node_modules/swagger2openapi/index.js
        var swagger2openapi = __webpack_require__(37);

        // CONCATENATED MODULE: ./src/utils/loadAndBundleSpec.ts

        /* tslint:disable-next-line:no-implicit-dependencies */

        function loadAndBundleSpec(specUrlOrObject) {
          return Object(external_tslib_['__awaiter'])(this, void 0, void 0, function() {
            var parser, spec, v2Specs;
            return Object(external_tslib_['__generator'])(this, function(_a) {
              switch (_a.label) {
                case 0:
                  parser = new external_json_schema_ref_parser_default.a();
                  return [
                    4 /*yield*/,
                    parser.bundle(specUrlOrObject, {
                      resolve: {
                        http: {
                          withCredentials: false,
                        },
                      },
                    }),
                  ];
                case 1:
                  spec = _a.sent();
                  v2Specs = spec;
                  if (!(spec.swagger !== undefined)) return [3 /*break*/, 3];
                  return [4 /*yield*/, convertSwagger2OpenAPI(spec)];
                case 2:
                  v2Specs = _a.sent();
                  _a.label = 3;
                case 3: // we can derefrence the schema here for future use.
                  // import { cloneDeep } from 'lodash';
                  // const derefrencedSpec = await parser.dereference(cloneDeep(spec));
                  // const derefed = await parser.dereference(v2Specs, {
                  //  resolve: { http: { withCredentials: false } },
                  // } as object);
                  return [2 /*return*/, v2Specs];
              }
            });
          });
        }
        function convertSwagger2OpenAPI(spec) {
          console.warn('[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0');
          return new Promise(function(resolve, reject) {
            return Object(swagger2openapi['convertObj'])(
              spec,
              {
                patch: true,
                warnOnly: true,
                text: '{}',
              },
              function(err, res) {
                // TODO: log any warnings
                if (err) {
                  return reject(err);
                }
                resolve(res && res.openapi);
              },
            );
          });
        }

        // EXTERNAL MODULE: external "decko"
        var external_decko_ = __webpack_require__(14);

        // EXTERNAL MODULE: external "eventemitter3"
        var external_eventemitter3_ = __webpack_require__(19);
        var external_eventemitter3_default = /*#__PURE__*/ __webpack_require__.n(
          external_eventemitter3_,
        );

        // EXTERNAL MODULE: external "json-pointer"
        var external_json_pointer_ = __webpack_require__(6);

        // CONCATENATED MODULE: ./src/utils/JsonPointer.ts

        var origParse = external_json_pointer_['parse'];
        /**
         * Wrapper for JsonPointer. Provides common operations
         */
        var JsonPointer_JsonPointer = /** @class */ (function() {
          function JsonPointer() {}
          /**
           * returns last JsonPointer token
           * if level > 1 returns levels last (second last/third last)
           * @example
           * // returns subpath
           * JsonPointerHelper.baseName('/path/0/subpath')
           * // returns foo
           * JsonPointerHelper.baseName('/path/foo/subpath', 2)
           */
          JsonPointer.baseName = function(pointer, level) {
            if (level === void 0) {
              level = 1;
            }
            var tokens = JsonPointer.parse(pointer);
            return tokens[tokens.length - level];
          };
          /**
           * returns dirname of pointer
           * if level > 1 returns corresponding dirname in the hierarchy
           * @example
           * // returns /path/0
           * JsonPointerHelper.dirName('/path/0/subpath')
           * // returns /path
           * JsonPointerHelper.dirName('/path/foo/subpath', 2)
           */
          JsonPointer.dirName = function(pointer, level) {
            if (level === void 0) {
              level = 1;
            }
            var tokens = JsonPointer.parse(pointer);
            return external_json_pointer_['compile'](tokens.slice(0, tokens.length - level));
          };
          /**
           * returns relative path tokens
           * @example
           * // returns ['subpath']
           * JsonPointerHelper.relative('/path/0', '/path/0/subpath')
           * // returns ['foo', 'subpath']
           * JsonPointerHelper.relative('/path', '/path/foo/subpath')
           */
          JsonPointer.relative = function(from, to) {
            var fromTokens = JsonPointer.parse(from);
            var toTokens = JsonPointer.parse(to);
            return toTokens.slice(fromTokens.length);
          };
          /**
           * overridden JsonPointer original parse to take care of prefixing '#' symbol
           * that is not valid JsonPointer
           */
          JsonPointer.parse = function(pointer) {
            var ptr = pointer;
            if (ptr.charAt(0) === '#') {
              ptr = ptr.substring(1);
            }
            return origParse(ptr);
          };
          /**
           * Creates a JSON pointer path, by joining one or more tokens to a base path.
           *
           * @param {string} base - The base path
           * @param {string|string[]} tokens - The token(s) to append (e.g. ["name", "first"])
           * @returns {string}
           */
          JsonPointer.join = function(base, tokens) {
            // TODO: optimize
            var baseTokens = JsonPointer.parse(base);
            var resTokens = baseTokens.concat(tokens);
            return external_json_pointer_['compile'](resTokens);
          };
          JsonPointer.get = function(object, pointer) {
            return external_json_pointer_['get'](object, pointer);
          };
          JsonPointer.compile = function(tokens) {
            return external_json_pointer_['compile'](tokens);
          };
          JsonPointer.escape = function(pointer) {
            return external_json_pointer_['escape'](pointer);
          };
          return JsonPointer;
        })();

        external_json_pointer_['parse'] = JsonPointer_JsonPointer.parse;
        Object.assign(JsonPointer_JsonPointer, external_json_pointer_);
        /* harmony default export */ var utils_JsonPointer = JsonPointer_JsonPointer;

        // EXTERNAL MODULE: ./node_modules/path-browserify/index.js
        var path_browserify = __webpack_require__(12);

        // CONCATENATED MODULE: ./src/utils/openapi.ts

        var URLtemplate = __webpack_require__(58);

        function isWildcardStatusCode(statusCode) {
          return typeof statusCode === 'string' && /\dxx/i.test(statusCode);
        }
        function isStatusCode(statusCode) {
          return (
            statusCode === 'default' || isNumeric(statusCode) || isWildcardStatusCode(statusCode)
          );
        }
        function getStatusCodeType(statusCode, defaultAsError) {
          if (defaultAsError === void 0) {
            defaultAsError = false;
          }
          if (statusCode === 'default') {
            return defaultAsError ? 'error' : 'success';
          }
          var code = typeof statusCode === 'string' ? parseInt(statusCode, 10) : statusCode;
          if (isWildcardStatusCode(statusCode)) {
            code *= 100; // parseInt('2xx') parses to 2
          }
          if (code < 100 || code > 599) {
            throw new Error('invalid HTTP code');
          }
          var res = 'success';
          if (code >= 300 && code < 400) {
            res = 'redirect';
          } else if (code >= 400) {
            res = 'error';
          } else if (code < 200) {
            res = 'info';
          }
          return res;
        }
        var operationNames = {
          get: true,
          post: true,
          put: true,
          head: true,
          patch: true,
          delete: true,
          options: true,
        };
        function isOperationName(key) {
          return key in operationNames;
        }
        function getOperationSummary(operation) {
          return (
            operation.summary ||
            operation.operationId ||
            (operation.description && operation.description.substring(0, 50)) ||
            '<no summary>'
          );
        }
        var schemaKeywordTypes = {
          multipleOf: 'number',
          maximum: 'number',
          exclusiveMaximum: 'number',
          minimum: 'number',
          exclusiveMinimum: 'number',
          maxLength: 'string',
          minLength: 'string',
          pattern: 'string',
          items: 'array',
          maxItems: 'array',
          minItems: 'array',
          uniqueItems: 'array',
          maxProperties: 'object',
          minProperties: 'object',
          required: 'object',
          additionalProperties: 'object',
          properties: 'object',
        };
        function detectType(schema) {
          if (schema.type !== undefined) {
            return schema.type;
          }
          var keywords = Object.keys(schemaKeywordTypes);
          for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
            var keyword = keywords_1[_i];
            var type = schemaKeywordTypes[keyword];
            if (schema[keyword] !== undefined) {
              return type;
            }
          }
          return 'any';
        }
        function isPrimitiveType(schema, type) {
          if (type === void 0) {
            type = schema.type;
          }
          if (schema.oneOf !== undefined || schema.anyOf !== undefined) {
            return false;
          }
          if (type === 'object') {
            return schema.properties !== undefined
              ? Object.keys(schema.properties).length === 0
              : schema.additionalProperties === undefined;
          }
          if (type === 'array') {
            if (schema.items === undefined) {
              return true;
            }
            return false;
          }
          return true;
        }
        function isJsonLike(contentType) {
          return contentType.search(/json/i) !== -1;
        }
        function isFormUrlEncoded(contentType) {
          return contentType === 'application/x-www-form-urlencoded';
        }
        function delimitedEncodeField(fieldVal, fieldName, delimiter) {
          if (Array.isArray(fieldVal)) {
            return fieldVal
              .map(function(v) {
                return v.toString();
              })
              .join(delimiter);
          } else if (typeof fieldVal === 'object') {
            return Object.keys(fieldVal)
              .map(function(k) {
                return '' + k + delimiter + fieldVal[k];
              })
              .join(delimiter);
          } else {
            return fieldName + '=' + fieldVal.toString();
          }
        }
        function deepObjectEncodeField(fieldVal, fieldName) {
          if (Array.isArray(fieldVal)) {
            console.warn('deepObject style cannot be used with array value:' + fieldVal.toString());
            return '';
          } else if (typeof fieldVal === 'object') {
            return Object.keys(fieldVal)
              .map(function(k) {
                return fieldName + '[' + k + ']=' + fieldVal[k];
              })
              .join('&');
          } else {
            console.warn(
              'deepObject style cannot be used with non-object value:' + fieldVal.toString(),
            );
            return '';
          }
        }
        function serializeFormValue(name, explode, value) {
          var _a;
          // Use RFC6570 safe name ([a-zA-Z0-9_]) and replace with our name later
          // e.g. URI.template doesn't parse names with hyphen (-) which are valid query param names
          var safeName = '__redoc_param_name__';
          var suffix = explode ? '*' : '';
          var template = URLtemplate.parse('{?' + safeName + suffix + '}');
          return template
            .expand(((_a = {}), (_a[safeName] = value), _a))
            .substring(1)
            .replace(/__redoc_param_name__/g, name);
        }
        /*
         * Should be used only for url-form-encoded body payloads
         * To be used for parameters should be extended with other style values
         */
        function urlFormEncodePayload(payload, encoding) {
          if (encoding === void 0) {
            encoding = {};
          }
          if (Array.isArray(payload)) {
            throw new Error('Payload must have fields: ' + payload.toString());
          } else {
            return Object.keys(payload)
              .map(function(fieldName) {
                var fieldVal = payload[fieldName];
                var _a = encoding[fieldName] || {},
                  _b = _a.style,
                  style = _b === void 0 ? 'form' : _b,
                  _c = _a.explode,
                  explode = _c === void 0 ? true : _c;
                switch (style) {
                  case 'form':
                    return serializeFormValue(fieldName, explode, fieldVal);
                  case 'spaceDelimited':
                    return delimitedEncodeField(fieldVal, fieldName, '%20');
                  case 'pipeDelimited':
                    return delimitedEncodeField(fieldVal, fieldName, '|');
                  case 'deepObject':
                    return deepObjectEncodeField(fieldVal, fieldName);
                  default:
                    // TODO implement rest of styles for path parameters
                    console.warn('Incorrect or unsupported encoding style: ' + style);
                    return '';
                }
              })
              .join('&');
          }
        }
        function serializePathParameter(name, style, explode, value) {
          var _a;
          var suffix = explode ? '*' : '';
          var prefix = '';
          if (style === 'label') {
            prefix = '.';
          } else if (style === 'matrix') {
            prefix = ';';
          } // Use RFC6570 safe name ([a-zA-Z0-9_]) and replace with our name later
          // e.g. URI.template doesn't parse names with hyphen (-) which are valid query param names
          var safeName = '__redoc_param_name__';
          var template = URLtemplate.parse('{' + prefix + safeName + suffix + '}');
          return template
            .expand(((_a = {}), (_a[safeName] = value), _a))
            .replace(/__redoc_param_name__/g, name);
        }
        function serializeQueryParameter(name, style, explode, value) {
          switch (style) {
            case 'form':
              return serializeFormValue(name, explode, value);
            case 'spaceDelimited':
              if (!Array.isArray(value)) {
                console.warn('The style spaceDelimited is only applicable to arrays');
                return '';
              }
              if (explode) {
                return serializeFormValue(name, explode, value);
              }
              return name + '=' + value.join('%20');
            case 'pipeDelimited':
              if (!Array.isArray(value)) {
                console.warn('The style pipeDelimited is only applicable to arrays');
                return '';
              }
              if (explode) {
                return serializeFormValue(name, explode, value);
              }
              return name + '=' + value.join('|');
            case 'deepObject':
              if (!explode || Array.isArray(value) || typeof value !== 'object') {
                console.warn(
                  'The style deepObject is only applicable for objects with explode=true',
                );
                return '';
              }
              return deepObjectEncodeField(value, name);
            default:
              console.warn('Unexpected style for query: ' + style);
              return '';
          }
        }
        function serializeHeaderParameter(style, explode, value) {
          var _a;
          switch (style) {
            case 'simple':
              var suffix = explode ? '*' : ''; // name is not important here, so use RFC6570 safe name ([a-zA-Z0-9_])
              var name_1 = '__redoc_param_name__';
              var template = URLtemplate.parse('{' + name_1 + suffix + '}');
              return decodeURIComponent(template.expand(((_a = {}), (_a[name_1] = value), _a)));
            default:
              console.warn('Unexpected style for header: ' + style);
              return '';
          }
        }
        function serializeCookieParameter(name, style, explode, value) {
          switch (style) {
            case 'form':
              return serializeFormValue(name, explode, value);
            default:
              console.warn('Unexpected style for cookie: ' + style);
              return '';
          }
        }
        function serializeParameterValueWithMime(value, mime) {
          if (isJsonLike(mime)) {
            return JSON.stringify(value);
          } else {
            console.warn('Parameter serialization as ' + mime + ' is not supported');
            return '';
          }
        }
        function serializeParameterValue(parameter, value) {
          var name = parameter.name,
            style = parameter.style,
            _a = parameter.explode,
            explode = _a === void 0 ? false : _a,
            serializationMime = parameter.serializationMime;
          if (serializationMime) {
            switch (parameter.in) {
              case 'path':
              case 'header':
                return serializeParameterValueWithMime(value, serializationMime);
              case 'cookie':
              case 'query':
                return name + '=' + serializeParameterValueWithMime(value, serializationMime);
              default:
                console.warn('Unexpected parameter location: ' + parameter.in);
                return '';
            }
          }
          if (!style) {
            console.warn('Missing style attribute or content for parameter ' + name);
            return '';
          }
          switch (parameter.in) {
            case 'path':
              return serializePathParameter(name, style, explode, value);
            case 'query':
              return serializeQueryParameter(name, style, explode, value);
            case 'header':
              return serializeHeaderParameter(style, explode, value);
            case 'cookie':
              return serializeCookieParameter(name, style, explode, value);
            default:
              console.warn('Unexpected parameter location: ' + parameter.in);
              return '';
          }
        }
        function langFromMime(contentType) {
          if (contentType.search(/xml/i) !== -1) {
            return 'xml';
          }
          return 'clike';
        }
        function isNamedDefinition(pointer) {
          return /^#\/components\/schemas\/[^\/]+$/.test(pointer || '');
        }
        function humanizeMultipleOfConstraint(multipleOf) {
          if (multipleOf === undefined) {
            return;
          }
          var strigifiedMultipleOf = multipleOf.toString(10);
          if (!/^0\.0*1$/.test(strigifiedMultipleOf)) {
            return 'multiple of ' + strigifiedMultipleOf;
          }
          return 'decimal places <= ' + strigifiedMultipleOf.split('.')[1].length;
        }
        function humanizeRangeConstraint(description, min, max) {
          var stringRange;
          if (min !== undefined && max !== undefined) {
            if (min === max) {
              stringRange = min + ' ' + description;
            } else {
              stringRange = '[ ' + min + ' .. ' + max + ' ] ' + description;
            }
          } else if (max !== undefined) {
            stringRange = '<= ' + max + ' ' + description;
          } else if (min !== undefined) {
            if (min === 1) {
              stringRange = 'non-empty';
            } else {
              stringRange = '>= ' + min + ' ' + description;
            }
          }
          return stringRange;
        }
        function humanizeConstraints(schema) {
          var res = [];
          var stringRange = humanizeRangeConstraint(
            'characters',
            schema.minLength,
            schema.maxLength,
          );
          if (stringRange !== undefined) {
            res.push(stringRange);
          }
          var arrayRange = humanizeRangeConstraint('items', schema.minItems, schema.maxItems);
          if (arrayRange !== undefined) {
            res.push(arrayRange);
          }
          var multipleOfConstraint = humanizeMultipleOfConstraint(schema.multipleOf);
          if (multipleOfConstraint !== undefined) {
            res.push(multipleOfConstraint);
          }
          var numberRange;
          if (schema.minimum !== undefined && schema.maximum !== undefined) {
            numberRange = schema.exclusiveMinimum ? '( ' : '[ ';
            numberRange += schema.minimum;
            numberRange += ' .. ';
            numberRange += schema.maximum;
            numberRange += schema.exclusiveMaximum ? ' )' : ' ]';
          } else if (schema.maximum !== undefined) {
            numberRange = schema.exclusiveMaximum ? '< ' : '<= ';
            numberRange += schema.maximum;
          } else if (schema.minimum !== undefined) {
            numberRange = schema.exclusiveMinimum ? '> ' : '>= ';
            numberRange += schema.minimum;
          }
          if (numberRange !== undefined) {
            res.push(numberRange);
          }
          return res;
        }
        function sortByRequired(fields, order) {
          if (order === void 0) {
            order = [];
          }
          var unrequiredFields = [];
          var orderedFields = [];
          var unorderedFields = [];
          fields.forEach(function(field) {
            if (field.required) {
              order.includes(field.name) ? orderedFields.push(field) : unorderedFields.push(field);
            } else {
              unrequiredFields.push(field);
            }
          });
          orderedFields.sort(function(a, b) {
            return order.indexOf(a.name) - order.indexOf(b.name);
          });
          return Object(external_tslib_['__spreadArrays'])(
            orderedFields,
            unorderedFields,
            unrequiredFields,
          );
        }
        function sortByField(fields, param) {
          return Object(external_tslib_['__spreadArrays'])(fields).sort(function(a, b) {
            return a[param].localeCompare(b[param]);
          });
        }
        function mergeParams(parser, pathParams, operationParams) {
          if (pathParams === void 0) {
            pathParams = [];
          }
          if (operationParams === void 0) {
            operationParams = [];
          }
          var operationParamNames = {};
          operationParams.forEach(function(param) {
            param = parser.shalowDeref(param);
            operationParamNames[param.name + '_' + param.in] = true;
          }); // filter out path params overridden by operation ones with the same name
          pathParams = pathParams.filter(function(param) {
            param = parser.shalowDeref(param);
            return !operationParamNames[param.name + '_' + param.in];
          });
          return pathParams.concat(operationParams);
        }
        function mergeSimilarMediaTypes(types) {
          var mergedTypes = {};
          Object.keys(types).forEach(function(name) {
            var mime = types[name]; // ignore content type parameters (e.g. charset) and merge
            var normalizedMimeName = name.split(';')[0].trim();
            if (!mergedTypes[normalizedMimeName]) {
              mergedTypes[normalizedMimeName] = mime;
              return;
            }
            mergedTypes[normalizedMimeName] = Object(external_tslib_['__assign'])(
              Object(external_tslib_['__assign'])({}, mergedTypes[normalizedMimeName]),
              mime,
            );
          });
          return mergedTypes;
        }
        function expandDefaultServerVariables(url, variables) {
          if (variables === void 0) {
            variables = {};
          }
          return url.replace(/(?:{)(\w+)(?:})/g, function(match, name) {
            return (variables[name] && variables[name].default) || match;
          });
        }
        function normalizeServers(specUrl, servers) {
          var getHref = function() {
            if (!IS_BROWSER) {
              return '';
            }
            var href = window.location.href;
            return href.endsWith('.html') ? Object(path_browserify['dirname'])(href) : href;
          };
          var baseUrl =
            specUrl === undefined
              ? removeQueryString(getHref())
              : Object(path_browserify['dirname'])(specUrl);
          if (servers.length === 0) {
            // Behaviour defined in OpenAPI spec: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#openapi-object
            servers = [
              {
                url: '/',
              },
            ];
          }
          function normalizeUrl(url) {
            return resolveUrl(baseUrl, url);
          }
          return servers.map(function(server) {
            return Object(external_tslib_['__assign'])(
              Object(external_tslib_['__assign'])({}, server),
              { url: normalizeUrl(server.url), description: server.description || '' },
            );
          });
        }
        var SECURITY_DEFINITIONS_COMPONENT_NAME = 'security-definitions';
        var SECURITY_DEFINITIONS_JSX_NAME = 'SecurityDefinitions';
        var SCHEMA_DEFINITION_JSX_NAME = 'SchemaDefinition';
        var SECURITY_SCHEMES_SECTION_PREFIX = 'section/Authentication/';
        function setSecuritySchemePrefix(prefix) {
          SECURITY_SCHEMES_SECTION_PREFIX = prefix;
        }
        var shortenHTTPVerb = function(verb) {
          return (
            {
              delete: 'del',
              options: 'opts',
            }[verb] || verb
          );
        };
        function isRedocExtension(key) {
          var redocExtensions = {
            'x-circular-ref': true,
            'x-code-samples': true,
            'x-displayName': true,
            'x-examples': true,
            'x-ignoredHeaderParameters': true,
            'x-logo': true,
            'x-nullable': true,
            'x-servers': true,
            'x-tagGroups': true,
            'x-traitTag': true,
            'x-additionalPropertiesName': true,
          };
          return key in redocExtensions;
        }
        function extractExtensions(obj, showExtensions) {
          return Object.keys(obj)
            .filter(function(key) {
              if (showExtensions === true) {
                return key.startsWith('x-') && !isRedocExtension(key);
              }
              return key.startsWith('x-') && showExtensions.indexOf(key) > -1;
            })
            .reduce(function(acc, key) {
              acc[key] = obj[key];
              return acc;
            }, {});
        }
        function pluralizeType(displayType) {
          return displayType
            .split(' or ')
            .map(function(type) {
              return type.replace(/^(string|object|number|integer|array|boolean)s?( ?.*)/, '$1s$2');
            })
            .join(' or ');
        }

        // EXTERNAL MODULE: external "prismjs"
        var external_prismjs_ = __webpack_require__(9);

        // EXTERNAL MODULE: external "prismjs/components/prism-bash.js"
        var prism_bash_js_ = __webpack_require__(59);

        // EXTERNAL MODULE: external "prismjs/components/prism-c.js"
        var prism_c_js_ = __webpack_require__(60);

        // EXTERNAL MODULE: external "prismjs/components/prism-clike.js"
        var prism_clike_js_ = __webpack_require__(61);

        // EXTERNAL MODULE: external "prismjs/components/prism-coffeescript.js"
        var prism_coffeescript_js_ = __webpack_require__(62);

        // EXTERNAL MODULE: external "prismjs/components/prism-cpp.js"
        var prism_cpp_js_ = __webpack_require__(63);

        // EXTERNAL MODULE: external "prismjs/components/prism-csharp.js"
        var prism_csharp_js_ = __webpack_require__(64);

        // EXTERNAL MODULE: external "prismjs/components/prism-go.js"
        var prism_go_js_ = __webpack_require__(65);

        // EXTERNAL MODULE: external "prismjs/components/prism-http.js"
        var prism_http_js_ = __webpack_require__(66);

        // EXTERNAL MODULE: external "prismjs/components/prism-java.js"
        var prism_java_js_ = __webpack_require__(67);

        // EXTERNAL MODULE: external "prismjs/components/prism-lua.js"
        var prism_lua_js_ = __webpack_require__(68);

        // EXTERNAL MODULE: external "prismjs/components/prism-markup-templating.js"
        var prism_markup_templating_js_ = __webpack_require__(69);

        // EXTERNAL MODULE: external "prismjs/components/prism-markup.js"
        var prism_markup_js_ = __webpack_require__(70);

        // EXTERNAL MODULE: external "prismjs/components/prism-objectivec.js"
        var prism_objectivec_js_ = __webpack_require__(71);

        // EXTERNAL MODULE: external "prismjs/components/prism-perl.js"
        var prism_perl_js_ = __webpack_require__(72);

        // EXTERNAL MODULE: external "prismjs/components/prism-php.js"
        var prism_php_js_ = __webpack_require__(73);

        // EXTERNAL MODULE: external "prismjs/components/prism-python.js"
        var prism_python_js_ = __webpack_require__(74);

        // EXTERNAL MODULE: external "prismjs/components/prism-ruby.js"
        var prism_ruby_js_ = __webpack_require__(75);

        // EXTERNAL MODULE: external "prismjs/components/prism-scala.js"
        var prism_scala_js_ = __webpack_require__(76);

        // EXTERNAL MODULE: external "prismjs/components/prism-sql.js"
        var prism_sql_js_ = __webpack_require__(77);

        // EXTERNAL MODULE: external "prismjs/components/prism-swift.js"
        var prism_swift_js_ = __webpack_require__(78);

        // CONCATENATED MODULE: ./src/utils/highlight.ts

        // dep of php
        // xml

        var DEFAULT_LANG = 'clike';
        external_prismjs_['languages'].insertBefore(
          'javascript',
          'string',
          {
            'property string': {
              pattern: /([{,]\s*)"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
              lookbehind: true,
            },
          },
          undefined,
        );
        external_prismjs_['languages'].insertBefore(
          'javascript',
          'punctuation',
          {
            property: {
              pattern: /([{,]\s*)[a-z]\w*(?=\s*:)/i,
              lookbehind: true,
            },
          },
          undefined,
        );
        /**
         * map language names to Prism.js names
         */
        function mapLang(lang) {
          return (
            {
              json: 'js',
              'c++': 'cpp',
              'c#': 'csharp',
              'objective-c': 'objectivec',
              shell: 'bash',
              viml: 'vim',
            }[lang] || DEFAULT_LANG
          );
        }
        /**
         * Highlight source code string using Prism.js
         * @param source source code to highlight
         * @param lang highlight language
         * @return highlighted source code as **html string**
         */
        function highlight(source, lang) {
          if (lang === void 0) {
            lang = DEFAULT_LANG;
          }
          lang = lang.toLowerCase();
          var grammar = external_prismjs_['languages'][lang];
          if (!grammar) {
            grammar = external_prismjs_['languages'][mapLang(lang)];
          }
          return external_prismjs_['highlight'](source, grammar, lang);
        }

        // CONCATENATED MODULE: ./src/utils/decorators.ts
        function throttle(func, wait) {
          var context;
          var args;
          var result;
          var timeout = null;
          var previous = 0;
          var later = function() {
            previous = new Date().getTime();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          };
          return function() {
            var now = new Date().getTime();
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout) {
                context = args = null;
              }
            } else if (!timeout) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
        }
        function Throttle(delay) {
          return function(_, _2, desc) {
            desc.value = throttle(desc.value, delay);
          };
        }

        // CONCATENATED MODULE: ./src/utils/debug.ts
        function debugTime(label) {
          if (false) {
          }
        }
        function debugTimeEnd(label) {
          if (false) {
          }
        }

        // CONCATENATED MODULE: ./src/utils/memoize.ts

        // source: https://github.com/andreypopp/memoize-decorator
        var SENTINEL = {};
        function memoize(target, name, descriptor) {
          if (typeof descriptor.value === 'function') {
            return _memoizeMethod(target, name, descriptor);
          } else if (typeof descriptor.get === 'function') {
            return _memoizeGetter(target, name, descriptor);
          } else {
            throw new Error(
              '@memoize decorator can be applied to methods or getters, got ' +
                String(descriptor.value) +
                ' instead',
            );
          }
        }
        function _memoizeGetter(target, name, descriptor) {
          var memoizedName = '_memoized_' + name;
          var get = descriptor.get;
          target[memoizedName] = SENTINEL;
          return Object(external_tslib_['__assign'])(
            Object(external_tslib_['__assign'])({}, descriptor),
            {
              get: function() {
                if (this[memoizedName] === SENTINEL) {
                  this[memoizedName] = get.call(this);
                }
                return this[memoizedName];
              },
            },
          );
        }
        function _memoizeMethod(target, name, descriptor) {
          if (!descriptor.value || descriptor.value.length > 0) {
            throw new Error('@memoize decorator can only be applied to methods of zero arguments');
          }
          var memoizedName = '_memoized_' + name;
          var value = descriptor.value;
          target[memoizedName] = SENTINEL;
          return Object(external_tslib_['__assign'])(
            Object(external_tslib_['__assign'])({}, descriptor),
            {
              value: function() {
                if (this[memoizedName] === SENTINEL) {
                  this[memoizedName] = value.call(this);
                }
                return this[memoizedName];
              },
            },
          );
        }

        // CONCATENATED MODULE: ./src/utils/index.ts

        // CONCATENATED MODULE: ./src/services/HistoryService.ts

        var EVENT = 'hashchange';
        var HistoryService_HistoryService = /** @class */ (function() {
          function HistoryService() {
            var _this = this;
            this.emit = function() {
              _this._emiter.emit(EVENT, _this.currentId);
            };
            this._emiter = new external_eventemitter3_['EventEmitter']();
            this.bind();
          }
          Object.defineProperty(HistoryService.prototype, 'currentId', {
            get: function() {
              return IS_BROWSER ? decodeURIComponent(window.location.hash.substring(1)) : '';
            },
            enumerable: true,
            configurable: true,
          });
          HistoryService.prototype.linkForId = function(id) {
            if (!id) {
              return '';
            }
            return '#' + id;
          };
          HistoryService.prototype.subscribe = function(cb) {
            var emmiter = this._emiter.addListener(EVENT, cb);
            return function() {
              return emmiter.removeListener(EVENT, cb);
            };
          };
          HistoryService.prototype.bind = function() {
            if (IS_BROWSER) {
              window.addEventListener('hashchange', this.emit, false);
            }
          };
          HistoryService.prototype.dispose = function() {
            if (IS_BROWSER) {
              window.removeEventListener('hashchange', this.emit);
            }
          };
          HistoryService.prototype.replace = function(id, rewriteHistory) {
            if (rewriteHistory === void 0) {
              rewriteHistory = false;
            }
            if (!IS_BROWSER) {
              return;
            }
            if (id == null || id === this.currentId) {
              return;
            }
            if (rewriteHistory) {
              window.history.replaceState(
                null,
                '',
                window.location.href.split('#')[0] + this.linkForId(id),
              );
              return;
            }
            window.history.pushState(
              null,
              '',
              window.location.href.split('#')[0] + this.linkForId(id),
            );
            this.emit();
          };
          Object(external_tslib_['__decorate'])(
            [external_decko_['bind'], external_decko_['debounce']],
            HistoryService.prototype,
            'replace',
            null,
          );
          return HistoryService;
        })();

        var HistoryService_history = new HistoryService_HistoryService();
        if (false) {
        }

        // EXTERNAL MODULE: external "mark.js"
        var external_mark_js_ = __webpack_require__(22);
        var external_mark_js_default = /*#__PURE__*/ __webpack_require__.n(external_mark_js_);

        // CONCATENATED MODULE: ./src/services/MarkerService.ts

        var MarkerService_MarkerService = /** @class */ (function() {
          function MarkerService() {
            this.map = new Map();
            this.prevTerm = '';
          }
          MarkerService.prototype.add = function(el) {
            this.map.set(el, new external_mark_js_default.a(el));
          };
          MarkerService.prototype.delete = function(el) {
            this.map.delete(el);
          };
          MarkerService.prototype.addOnly = function(elements) {
            var _this = this;
            this.map.forEach(function(inst, elem) {
              if (elements.indexOf(elem) === -1) {
                inst.unmark();
                _this.map.delete(elem);
              }
            });
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
              var el = elements_1[_i];
              if (!this.map.has(el)) {
                this.map.set(el, new external_mark_js_default.a(el));
              }
            }
          };
          MarkerService.prototype.clearAll = function() {
            this.unmark();
            this.map.clear();
          };
          MarkerService.prototype.mark = function(term) {
            var _this = this;
            if (!term && !this.prevTerm) {
              return;
            }
            this.map.forEach(function(val) {
              val.unmark();
              val.mark(term || _this.prevTerm);
            });
            this.prevTerm = term || this.prevTerm;
          };
          MarkerService.prototype.unmark = function() {
            this.map.forEach(function(val) {
              return val.unmark();
            });
            this.prevTerm = '';
          };
          return MarkerService;
        })();

        // EXTERNAL MODULE: external "marked"
        var external_marked_ = __webpack_require__(15);
        var external_marked_default = /*#__PURE__*/ __webpack_require__.n(external_marked_);

        // CONCATENATED MODULE: ./src/services/MarkdownRenderer.ts

        var MarkdownRenderer_renderer = new external_marked_default.a.Renderer();
        external_marked_default.a.setOptions({
          renderer: MarkdownRenderer_renderer,
          highlight: function(str, lang) {
            return highlight(str, lang);
          },
        });
        var LEGACY_REGEXP = '^ {0,3}<!-- ReDoc-Inject:\\s+?<({component}).*?/?>\\s+?-->\\s*$'; // prettier-ignore
        var MDX_COMPONENT_REGEXP =
          '(?:^ {0,3}<({component})([\\s\\S]*?)>([\\s\\S]*?)</\\2>' + // with children
          '|^ {0,3}<({component})([\\s\\S]*?)(?:/>|\\n{2,}))'; // self-closing
        var COMPONENT_REGEXP = '(?:' + LEGACY_REGEXP + '|' + MDX_COMPONENT_REGEXP + ')';
        function buildComponentComment(name) {
          return '<!-- ReDoc-Inject: <' + name + '> -->';
        }
        var MarkdownRenderer_MarkdownRenderer = /** @class */ (function() {
          function MarkdownRenderer(options) {
            var _this = this;
            this.options = options;
            this.headings = [];
            this.headingRule = function(text, level, raw, slugger) {
              if (level === 1) {
                _this.currentTopHeading = _this.saveHeading(text, level);
              } else if (level === 2) {
                _this.saveHeading(
                  text,
                  level,
                  _this.currentTopHeading && _this.currentTopHeading.items,
                  _this.currentTopHeading && _this.currentTopHeading.id,
                );
              }
              return _this.originalHeadingRule(text, level, raw, slugger);
            };
            this.headingEnhanceRenderer = new external_marked_default.a.Renderer();
            this.originalHeadingRule = this.headingEnhanceRenderer.heading.bind(
              this.headingEnhanceRenderer,
            );
            this.headingEnhanceRenderer.heading = this.headingRule;
          }
          MarkdownRenderer.containsComponent = function(rawText, componentName) {
            var compRegexp = new RegExp(
              COMPONENT_REGEXP.replace(/{component}/g, componentName),
              'gmi',
            );
            return compRegexp.test(rawText);
          };
          MarkdownRenderer.getTextBeforeHading = function(md, heading) {
            var headingLinePos = md.search(new RegExp('^##?\\s+' + heading, 'm'));
            if (headingLinePos > -1) {
              return md.substring(0, headingLinePos);
            }
            return md;
          };
          MarkdownRenderer.prototype.saveHeading = function(name, level, container, parentId) {
            if (container === void 0) {
              container = this.headings;
            }
            name = unescapeHTMLChars(name);
            var item = {
              id: parentId ? parentId + '/' + safeSlugify(name) : 'section/' + safeSlugify(name),
              name: name,
              level: level,
              items: [],
            };
            container.push(item);
            return item;
          };
          MarkdownRenderer.prototype.flattenHeadings = function(container) {
            if (container === undefined) {
              return [];
            }
            var res = [];
            for (var _i = 0, container_1 = container; _i < container_1.length; _i++) {
              var heading = container_1[_i];
              res.push(heading);
              res.push.apply(res, this.flattenHeadings(heading.items));
            }
            return res;
          };
          MarkdownRenderer.prototype.attachHeadingsDescriptions = function(rawText) {
            var buildRegexp = function(heading) {
              return new RegExp('##?\\s+' + heading.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
            };
            var flatHeadings = this.flattenHeadings(this.headings);
            if (flatHeadings.length < 1) {
              return;
            }
            var prevHeading = flatHeadings[0];
            var prevRegexp = buildRegexp(prevHeading);
            var prevPos = rawText.search(prevRegexp);
            for (var i = 1; i < flatHeadings.length; i++) {
              var heading = flatHeadings[i];
              var regexp = buildRegexp(heading);
              var currentPos = rawText.substr(prevPos + 1).search(regexp) + prevPos + 1;
              prevHeading.description = rawText
                .substring(prevPos, currentPos)
                .replace(prevRegexp, '')
                .trim();
              prevHeading = heading;
              prevRegexp = regexp;
              prevPos = currentPos;
            }
            prevHeading.description = rawText
              .substring(prevPos)
              .replace(prevRegexp, '')
              .trim();
          };
          MarkdownRenderer.prototype.renderMd = function(rawText, extractHeadings) {
            if (extractHeadings === void 0) {
              extractHeadings = false;
            }
            var opts = extractHeadings
              ? {
                  renderer: this.headingEnhanceRenderer,
                }
              : undefined;
            var res = external_marked_default()(rawText.toString(), opts);
            return res;
          };
          MarkdownRenderer.prototype.extractHeadings = function(rawText) {
            this.renderMd(rawText, true);
            this.attachHeadingsDescriptions(rawText);
            var res = this.headings;
            this.headings = [];
            return res;
          }; // regexp-based 👎: remark is slow and too big so for now using marked + regexps soup
          MarkdownRenderer.prototype.renderMdWithComponents = function(rawText) {
            var components = this.options && this.options.allowedMdComponents;
            if (!components || Object.keys(components).length === 0) {
              return [this.renderMd(rawText)];
            }
            var names = Object.keys(components).join('|');
            var componentsRegexp = new RegExp(
              COMPONENT_REGEXP.replace(/{component}/g, names),
              'mig',
            );
            var htmlParts = [];
            var componentDefs = [];
            var match = componentsRegexp.exec(rawText);
            var lasxtIdx = 0;
            while (match) {
              htmlParts.push(rawText.substring(lasxtIdx, match.index));
              lasxtIdx = componentsRegexp.lastIndex;
              var compName = match[1] || match[2] || match[5];
              var componentMeta = components[compName];
              var props = match[3] || match[6];
              var children = match[4];
              if (componentMeta) {
                componentDefs.push({
                  component: componentMeta.component,
                  propsSelector: componentMeta.propsSelector,
                  props: Object(external_tslib_['__assign'])(
                    Object(external_tslib_['__assign'])(
                      Object(external_tslib_['__assign'])({}, parseProps(props)),
                      componentMeta.props,
                    ),
                    { children: children },
                  ),
                });
              }
              match = componentsRegexp.exec(rawText);
            }
            htmlParts.push(rawText.substring(lasxtIdx));
            var res = [];
            for (var i = 0; i < htmlParts.length; i++) {
              var htmlPart = htmlParts[i];
              if (htmlPart) {
                res.push(this.renderMd(htmlPart));
              }
              if (componentDefs[i]) {
                res.push(componentDefs[i]);
              }
            }
            return res;
          };
          return MarkdownRenderer;
        })();

        function parseProps(props) {
          if (!props) {
            return {};
          }
          var regex = /([\w-]+)\s*=\s*(?:{([^}]+?)}|"([^"]+?)")/gim;
          var parsed = {};
          var match; // tslint:disable-next-line
          while ((match = regex.exec(props)) !== null) {
            if (match[3]) {
              // string prop match (in double quotes)
              parsed[match[1]] = match[3];
            } else if (match[2]) {
              // jsx prop match (in curly braces)
              var val = void 0;
              try {
                val = JSON.parse(match[2]);
              } catch (e) {
                /* noop */
              }
              parsed[match[1]] = val;
            }
          }
          return parsed;
        }

        // CONCATENATED MODULE: ./src/services/models/ApiInfo.ts

        var ApiInfo_ApiInfoModel = /** @class */ (function() {
          function ApiInfoModel(parser) {
            this.parser = parser;
            Object.assign(this, parser.spec.info);
            this.description = parser.spec.info.description || '';
            var firstHeadingLinePos = this.description.search(/^##?\s+/m);
            if (firstHeadingLinePos > -1) {
              this.description = this.description.substring(0, firstHeadingLinePos);
            }
            this.downloadLink = this.getDownloadLink();
            this.downloadFileName = this.getDownloadFileName();
          }
          ApiInfoModel.prototype.getDownloadLink = function() {
            if (this.parser.specUrl) {
              return this.parser.specUrl;
            }
            if (IS_BROWSER && window.Blob && window.URL && window.URL.createObjectURL) {
              var blob = new Blob([JSON.stringify(this.parser.spec, null, 2)], {
                type: 'application/json',
              });
              return window.URL.createObjectURL(blob);
            }
          };
          ApiInfoModel.prototype.getDownloadFileName = function() {
            if (!this.parser.specUrl) {
              return 'swagger.json';
            }
            return undefined;
          };
          return ApiInfoModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/SecuritySchemes.ts

        var SecuritySchemes_SecuritySchemeModel = /** @class */ (function() {
          function SecuritySchemeModel(parser, id, scheme) {
            this.token = '';
            Object(external_mobx_['makeObservable'])(this);
            var info = parser.deref(scheme);
            this.id = id;
            this.sectionId = SECURITY_SCHEMES_SECTION_PREFIX + id;
            this.type = info.type;
            this.description = info.description || '';
            if (info.type === 'apiKey') {
              this.apiKey = {
                name: info.name,
                in: info.in,
              };
            }
            if (info.type === 'http') {
              this.http = {
                scheme: info.scheme,
                bearerFormat: info.bearerFormat,
              };
            }
            if (info.type === 'openIdConnect') {
              this.openId = {
                connectUrl: info.openIdConnectUrl,
              };
            }
            if (info.type === 'oauth2' && info.flows) {
              this.flows = info.flows;
            }
          }
          SecuritySchemeModel.prototype.setToken = function(token) {
            this.token = token;
          };
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            SecuritySchemeModel.prototype,
            'token',
            void 0,
          );
          return SecuritySchemeModel;
        })();

        var SecuritySchemes_SecuritySchemesModel = /** @class */ (function() {
          function SecuritySchemesModel(parser) {
            Object(external_mobx_['makeObservable'])(this);
            var schemes = (parser.spec.components && parser.spec.components.securitySchemes) || {};
            this.schemes = Object.keys(schemes).map(function(name) {
              return new SecuritySchemes_SecuritySchemeModel(parser, name, schemes[name]);
            });
          }
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            SecuritySchemesModel.prototype,
            'schemes',
            void 0,
          );
          return SecuritySchemesModel;
        })();

        // CONCATENATED MODULE: ./src/services/OpenAPIParser.ts

        /**
         * Helper class to keep track of visited references to avoid
         * endless recursion because of circular refs
         */
        var RefCounter = /** @class */ (function() {
          function RefCounter() {
            this._counter = {};
          }
          RefCounter.prototype.reset = function() {
            this._counter = {};
          };
          RefCounter.prototype.visit = function(ref) {
            this._counter[ref] = this._counter[ref] ? this._counter[ref] + 1 : 1;
          };
          RefCounter.prototype.exit = function(ref) {
            this._counter[ref] = this._counter[ref] && this._counter[ref] - 1;
          };
          RefCounter.prototype.visited = function(ref) {
            return !!this._counter[ref];
          };
          return RefCounter;
        })();
        /**
         * Loads and keeps spec. Provides raw spec operations
         */
        var OpenAPIParser_OpenAPIParser = /** @class */ (function() {
          function OpenAPIParser(spec, specUrl, options) {
            var _this = this;
            if (options === void 0) {
              options = new RedocNormalizedOptions_RedocNormalizedOptions({});
            }
            this.options = options;
            this._refCounter = new RefCounter();
            /**
             * get spec part by JsonPointer ($ref)
             */
            this.byRef = function(ref) {
              var res;
              if (!_this.spec) {
                return;
              }
              if (ref.charAt(0) !== '#') {
                ref = '#' + ref;
              }
              ref = decodeURIComponent(ref);
              try {
                res = JsonPointer_JsonPointer.get(_this.spec, ref);
              } catch (e) {
                // do nothing
              }
              return res || {};
            };
            this.validate(spec);
            this.preprocess(spec);
            this.spec = spec;
            this.mergeRefs = new Set();
            var href = IS_BROWSER ? window.location.href : '';
            if (typeof specUrl === 'string') {
              this.specUrl = Object(external_url_['resolve'])(href, specUrl);
            }
          }
          OpenAPIParser.prototype.validate = function(spec) {
            if (spec.openapi === undefined) {
              throw new Error('Document must be valid OpenAPI 3.0.0 definition');
            }
          };
          OpenAPIParser.prototype.preprocess = function(spec) {
            if (
              !this.options.noAutoAuth &&
              spec.info &&
              spec.components &&
              spec.components.securitySchemes
            ) {
              // Automatically inject Authentication section with SecurityDefinitions component
              var description = spec.info.description || '';
              if (
                !MarkdownRenderer_MarkdownRenderer.containsComponent(
                  description,
                  SECURITY_DEFINITIONS_COMPONENT_NAME,
                ) &&
                !MarkdownRenderer_MarkdownRenderer.containsComponent(
                  description,
                  SECURITY_DEFINITIONS_JSX_NAME,
                )
              ) {
                var comment = buildComponentComment(SECURITY_DEFINITIONS_COMPONENT_NAME);
                spec.info.description = appendToMdHeading(description, 'Authentication', comment);
              }
            }
          };
          /**
           * checks if the object is OpenAPI reference (contains $ref property)
           */
          OpenAPIParser.prototype.isRef = function(obj) {
            if (!obj) {
              return false;
            }
            return obj.$ref !== undefined && obj.$ref !== null;
          };
          /**
           * resets visited endpoints. should be run after
           */
          OpenAPIParser.prototype.resetVisited = function() {
            if (false) {
              var k;
            }
            this._refCounter = new RefCounter();
          };
          OpenAPIParser.prototype.exitRef = function(ref) {
            if (!this.isRef(ref)) {
              return;
            }
            this._refCounter.exit(ref.$ref);
          };
          /**
           * Resolve given reference object or return as is if it is not a reference
           * @param obj object to dereference
           * @param forceCircular whether to dereference even if it is circular ref
           */
          OpenAPIParser.prototype.deref = function(obj, forceCircular) {
            if (forceCircular === void 0) {
              forceCircular = false;
            }
            if (this.isRef(obj)) {
              var resolved = this.byRef(obj.$ref);
              var visited = this._refCounter.visited(obj.$ref);
              this._refCounter.visit(obj.$ref);
              if (visited && !forceCircular) {
                // circular reference detected
                // tslint:disable-next-line
                return Object.assign({}, resolved, {
                  'x-circular-ref': true,
                });
              } // deref again in case one more $ref is here
              if (this.isRef(resolved)) {
                var res = this.deref(resolved);
                this.exitRef(resolved);
                return res;
              }
              return resolved;
            }
            return obj;
          };
          OpenAPIParser.prototype.shalowDeref = function(obj) {
            if (this.isRef(obj)) {
              return this.byRef(obj.$ref);
            }
            return obj;
          };
          /**
           * Merge allOf constraints.
           * @param schema schema with allOF
           * @param $ref pointer of the schema
           * @param forceCircular whether to dereference children even if it is a circular ref
           */
          OpenAPIParser.prototype.mergeAllOf = function(schema, $ref, forceCircular, used$Refs) {
            var _this = this;
            if (forceCircular === void 0) {
              forceCircular = false;
            }
            if (used$Refs === void 0) {
              used$Refs = new Set();
            }
            if ($ref) {
              used$Refs.add($ref);
            }
            schema = this.hoistOneOfs(schema);
            if (schema.allOf === undefined) {
              return schema;
            }
            var receiver = Object(external_tslib_['__assign'])(
              Object(external_tslib_['__assign'])({}, schema),
              {
                allOf: undefined,
                parentRefs: [],
                title:
                  schema.title ||
                  (isNamedDefinition($ref) ? JsonPointer_JsonPointer.baseName($ref) : undefined),
              },
            ); // avoid mutating inner objects
            if (receiver.properties !== undefined && typeof receiver.properties === 'object') {
              receiver.properties = Object(external_tslib_['__assign'])({}, receiver.properties);
            }
            if (receiver.items !== undefined && typeof receiver.items === 'object') {
              receiver.items = Object(external_tslib_['__assign'])({}, receiver.items);
            }
            var allOfSchemas = schema.allOf
              .map(function(subSchema) {
                var _a;
                if (subSchema && subSchema.$ref && used$Refs.has(subSchema.$ref)) {
                  return undefined;
                }
                var resolved = _this.deref(subSchema, forceCircular);
                var subRef = subSchema.$ref || undefined;
                var subMerged = _this.mergeAllOf(resolved, subRef, forceCircular, used$Refs);
                (_a = receiver.parentRefs).push.apply(_a, subMerged.parentRefs || []);
                return {
                  $ref: subRef,
                  schema: subMerged,
                };
              })
              .filter(function(child) {
                return child !== undefined;
              });
            for (var _i = 0, allOfSchemas_1 = allOfSchemas; _i < allOfSchemas_1.length; _i++) {
              var _a = allOfSchemas_1[_i],
                subSchemaRef = _a.$ref,
                subSchema = _a.schema;
              if (
                receiver.type !== subSchema.type &&
                receiver.type !== undefined &&
                subSchema.type !== undefined
              ) {
                throw new Error('Incompatible types in allOf at "' + $ref + '"');
              }
              if (subSchema.type !== undefined) {
                receiver.type = subSchema.type;
              }
              if (subSchema.properties !== undefined) {
                receiver.properties = receiver.properties || {};
                for (var prop in subSchema.properties) {
                  if (!receiver.properties[prop]) {
                    receiver.properties[prop] = subSchema.properties[prop];
                  } else {
                    // merge inner properties
                    receiver.properties[prop] = this.mergeAllOf(
                      {
                        allOf: [receiver.properties[prop], subSchema.properties[prop]],
                      },
                      $ref + '/properties/' + prop,
                    );
                  }
                }
              }
              if (subSchema.items !== undefined) {
                receiver.items = receiver.items || {}; // merge inner properties
                receiver.items = this.mergeAllOf(
                  {
                    allOf: [receiver.items, subSchema.items],
                  },
                  $ref + '/items',
                );
              }
              if (subSchema.required !== undefined) {
                receiver.required = (receiver.required || []).concat(subSchema.required);
              } // merge rest of constraints
              // TODO: do more intelligent merge
              receiver = Object(external_tslib_['__assign'])(
                Object(external_tslib_['__assign'])({}, subSchema),
                receiver,
              );
              if (subSchemaRef) {
                receiver.parentRefs.push(subSchemaRef);
                if (receiver.title === undefined && isNamedDefinition(subSchemaRef)) {
                  // this is not so correct behaviour. commented out for now
                  // ref: https://github.com/Redocly/redoc/issues/601
                  // receiver.title = JsonPointer.baseName(subSchemaRef);
                }
              }
            }
            return receiver;
          };
          /**
           * Find all derived definitions among #/components/schemas from any of $refs
           * returns map of definition pointer to definition name
           * @param $refs array of references to find derived from
           */
          OpenAPIParser.prototype.findDerived = function($refs) {
            var res = {};
            var schemas = (this.spec.components && this.spec.components.schemas) || {};
            for (var defName in schemas) {
              var def = this.deref(schemas[defName]);
              if (
                def.allOf !== undefined &&
                def.allOf.find(function(obj) {
                  return obj.$ref !== undefined && $refs.indexOf(obj.$ref) > -1;
                })
              ) {
                res['#/components/schemas/' + defName] = [def['x-discriminator-value'] || defName];
              }
            }
            return res;
          };
          OpenAPIParser.prototype.exitParents = function(shema) {
            for (var _i = 0, _a = shema.parentRefs || []; _i < _a.length; _i++) {
              var parent$ref = _a[_i];
              this.exitRef({
                $ref: parent$ref,
              });
            }
          };
          OpenAPIParser.prototype.hoistOneOfs = function(schema) {
            var _this = this;
            if (schema.allOf === undefined) {
              return schema;
            }
            var allOf = schema.allOf;
            var _loop_1 = function(i) {
              var sub = allOf[i];
              if (Array.isArray(sub.oneOf)) {
                var beforeAllOf_1 = allOf.slice(0, i);
                var afterAllOf_1 = allOf.slice(i + 1);
                return {
                  value: {
                    oneOf: sub.oneOf.map(function(part) {
                      var merged = _this.mergeAllOf({
                        allOf: Object(external_tslib_['__spreadArrays'])(
                          beforeAllOf_1,
                          [part],
                          afterAllOf_1,
                        ),
                      }); // each oneOf should be independent so exiting all the parent refs
                      // otherwise it will cause false-positive recursive detection
                      _this.exitParents(merged);
                      return merged;
                    }),
                  },
                };
              }
            };
            for (var i = 0; i < allOf.length; i++) {
              var state_1 = _loop_1(i);
              if (typeof state_1 === 'object') return state_1.value;
            }
            return schema;
          };
          return OpenAPIParser;
        })();

        // CONCATENATED MODULE: ./src/services/SpecStore.ts

        /**
         * Store that contains all the specification related information in the form of tree
         */
        var SpecStore_SpecStore = /** @class */ (function() {
          function SpecStore(spec, specUrl, options) {
            this.options = options;
            this.parser = new OpenAPIParser_OpenAPIParser(spec, specUrl, options);
            this.info = new ApiInfo_ApiInfoModel(this.parser);
            this.externalDocs = this.parser.spec.externalDocs;
            this.contentItems = MenuBuilder_MenuBuilder.buildStructure(this.parser, this.options);
            this.securitySchemes = new SecuritySchemes_SecuritySchemesModel(this.parser);
          }
          return SpecStore;
        })();

        // CONCATENATED MODULE: ./src/services/models/Group.model.ts

        /**
         * Operations Group model ready to be used by components
         */
        var Group_model_GroupModel = /** @class */ (function() {
          function GroupModel(type, tagOrGroup, parent) {
            this.items = [];
            this.active = false;
            this.expanded = false;
            Object(external_mobx_['makeObservable'])(this); // markdown headings already have ids calculated as they are needed for heading anchors
            this.id = tagOrGroup.id || type + '/' + safeSlugify(tagOrGroup.name);
            this.type = type;
            this.name = tagOrGroup['x-displayName'] || tagOrGroup.name;
            this.level = tagOrGroup.level || 1; // remove sections from markdown, same as in ApiInfo
            this.description = tagOrGroup.description || '';
            var items = tagOrGroup.items;
            if (items && items.length) {
              this.description = MarkdownRenderer_MarkdownRenderer.getTextBeforeHading(
                this.description,
                items[0].name,
              );
            }
            this.parent = parent;
            this.externalDocs = tagOrGroup.externalDocs; // groups are active (expanded) by default
            if (this.type === 'group') {
              this.expanded = true;
            }
          }
          GroupModel.prototype.activate = function() {
            this.active = true;
          };
          GroupModel.prototype.expand = function() {
            if (this.parent) {
              this.parent.expand();
            }
            this.expanded = true;
          };
          GroupModel.prototype.collapse = function() {
            // disallow collapsing groups
            if (this.type === 'group') {
              return;
            }
            this.expanded = false;
          };
          GroupModel.prototype.deactivate = function() {
            this.active = false;
          };
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            GroupModel.prototype,
            'active',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            GroupModel.prototype,
            'expanded',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            GroupModel.prototype,
            'activate',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            GroupModel.prototype,
            'expand',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            GroupModel.prototype,
            'collapse',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            GroupModel.prototype,
            'deactivate',
            null,
          );
          return GroupModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/SecurityRequirement.ts

        var SecurityRequirement_SecurityRequirementModel = /** @class */ (function() {
          function SecurityRequirementModel(requirement, parser) {
            var schemes = (parser.spec.components && parser.spec.components.securitySchemes) || {};
            this.schemes = Object.keys(requirement || {})
              .map(function(id) {
                var scheme = parser.deref(schemes[id]);
                var scopes = requirement[id] || [];
                if (!scheme) {
                  console.warn('Non existing security scheme referenced: ' + id + '. Skipping');
                  return undefined;
                }
                return Object(external_tslib_['__assign'])(
                  Object(external_tslib_['__assign'])({}, scheme),
                  { id: id, sectionId: SECURITY_SCHEMES_SECTION_PREFIX + id, scopes: scopes },
                );
              })
              .filter(function(scheme) {
                return scheme !== undefined;
              });
          }
          return SecurityRequirementModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/Schema.ts

        // TODO: refactor this model, maybe use getters instead of copying all the values
        var Schema_SchemaModel = /** @class */ (function() {
          /**
           * @param isChild if schema discriminator Child
           * When true forces dereferencing in allOfs even if circular
           */
          function SchemaModel(parser, schemaOrRef, pointer, options, isChild) {
            if (isChild === void 0) {
              isChild = false;
            }
            this.options = options;
            this.typePrefix = '';
            this.isCircular = false;
            this.activeOneOf = 0;
            Object(external_mobx_['makeObservable'])(this);
            this.pointer = schemaOrRef.$ref || pointer || '';
            this.rawSchema = parser.deref(schemaOrRef);
            this.schema = parser.mergeAllOf(this.rawSchema, this.pointer, isChild);
            this.init(parser, isChild);
            parser.exitRef(schemaOrRef);
            parser.exitParents(this.schema);
            if (options.showExtensions) {
              this.extensions = extractExtensions(this.schema, options.showExtensions);
            }
          }
          /**
           * Set specified alternative schema as active
           * @param idx oneOf index
           */
          SchemaModel.prototype.activateOneOf = function(idx) {
            this.activeOneOf = idx;
          };
          SchemaModel.prototype.init = function(parser, isChild) {
            var _this = this;
            var schema = this.schema;
            this.isCircular = schema['x-circular-ref'];
            this.title =
              schema.title ||
              (isNamedDefinition(this.pointer) && JsonPointer_JsonPointer.baseName(this.pointer)) ||
              '';
            this.description = schema.description || '';
            this.type = schema.type || detectType(schema);
            this.format = schema.format;
            this.nullable = !!schema.nullable;
            this.enum = schema.enum || [];
            this.example = schema.example;
            this.deprecated = !!schema.deprecated;
            this.pattern = schema.pattern;
            this.externalDocs = schema.externalDocs;
            this.constraints = humanizeConstraints(schema);
            this.displayType = this.type;
            this.displayFormat = this.format;
            this.isPrimitive = isPrimitiveType(schema, this.type);
            this.default = schema.default;
            this.readOnly = !!schema.readOnly;
            this.writeOnly = !!schema.writeOnly;
            if (this.isCircular) {
              return;
            }
            if (!isChild && getDiscriminator(schema) !== undefined) {
              this.initDiscriminator(schema, parser);
              return;
            } else if (
              isChild &&
              Array.isArray(schema.oneOf) &&
              schema.oneOf.find(function(s) {
                return s.$ref === _this.pointer;
              })
            ) {
              // we hit allOf of the schema with the parent discriminator
              delete schema.oneOf;
            }
            if (schema.oneOf !== undefined) {
              this.initOneOf(schema.oneOf, parser);
              this.oneOfType = 'One of';
              if (schema.anyOf !== undefined) {
                console.warn(
                  'oneOf and anyOf are not supported on the same level. Skipping anyOf at ' +
                    this.pointer,
                );
              }
              return;
            }
            if (schema.anyOf !== undefined) {
              this.initOneOf(schema.anyOf, parser);
              this.oneOfType = 'Any of';
              return;
            }
            if (this.type === 'object') {
              this.fields = buildFields(parser, schema, this.pointer, this.options);
            } else if (this.type === 'array' && schema.items) {
              this.items = new SchemaModel(
                parser,
                schema.items,
                this.pointer + '/items',
                this.options,
              );
              this.displayType = pluralizeType(this.items.displayType);
              this.displayFormat = this.items.format;
              this.typePrefix = this.items.typePrefix + l('arrayOf');
              this.title = this.title || this.items.title;
              this.isPrimitive = this.items.isPrimitive;
              if (this.example === undefined && this.items.example !== undefined) {
                this.example = [this.items.example];
              }
              if (this.items.isPrimitive) {
                this.enum = this.items.enum;
              }
            }
          };
          SchemaModel.prototype.initOneOf = function(oneOf, parser) {
            var _this = this;
            this.oneOf = oneOf.map(function(variant, idx) {
              var derefVariant = parser.deref(variant);
              var merged = parser.mergeAllOf(derefVariant, _this.pointer + '/oneOf/' + idx); // try to infer title
              var title =
                isNamedDefinition(variant.$ref) && !merged.title
                  ? JsonPointer_JsonPointer.baseName(variant.$ref)
                  : merged.title;
              var schema = new SchemaModel(
                parser,
                Object(external_tslib_['__assign'])(
                  Object(external_tslib_['__assign'])({}, merged),
                  {
                    title: title,
                    allOf: [
                      Object(external_tslib_['__assign'])(
                        Object(external_tslib_['__assign'])({}, _this.schema),
                        { oneOf: undefined, anyOf: undefined },
                      ),
                    ],
                  },
                ),
                _this.pointer + '/oneOf/' + idx,
                _this.options,
              );
              parser.exitRef(variant); // each oneOf should be independent so exiting all the parent refs
              // otherwise it will cause false-positive recursive detection
              parser.exitParents(merged);
              return schema;
            });
            this.displayType = this.oneOf
              .map(function(schema) {
                var name =
                  schema.typePrefix +
                  (schema.title
                    ? schema.title + ' (' + schema.displayType + ')'
                    : schema.displayType);
                if (name.indexOf(' or ') > -1) {
                  name = '(' + name + ')';
                }
                return name;
              })
              .join(' or ');
          };
          SchemaModel.prototype.initDiscriminator = function(schema, parser) {
            var _this = this;
            var discriminator = getDiscriminator(schema);
            this.discriminatorProp = discriminator.propertyName;
            var implicitInversedMapping = parser.findDerived(
              Object(external_tslib_['__spreadArrays'])(schema.parentRefs || [], [this.pointer]),
            );
            if (schema.oneOf) {
              for (var _i = 0, _a = schema.oneOf; _i < _a.length; _i++) {
                var variant = _a[_i];
                if (variant.$ref === undefined) {
                  continue;
                }
                var name_1 = JsonPointer_JsonPointer.baseName(variant.$ref);
                implicitInversedMapping[variant.$ref] = name_1;
              }
            }
            var mapping = discriminator.mapping || {};
            var explicitInversedMapping = {};
            for (var name_2 in mapping) {
              var $ref = mapping[name_2];
              if (Array.isArray(explicitInversedMapping[$ref])) {
                explicitInversedMapping[$ref].push(name_2);
              } else {
                // overrides implicit mapping here
                explicitInversedMapping[$ref] = [name_2];
              }
            }
            var inversedMapping = Object(external_tslib_['__assign'])(
              Object(external_tslib_['__assign'])({}, implicitInversedMapping),
              explicitInversedMapping,
            );
            var refs = [];
            for (var _b = 0, _c = Object.keys(inversedMapping); _b < _c.length; _b++) {
              var $ref = _c[_b];
              var names = inversedMapping[$ref];
              if (Array.isArray(names)) {
                for (var _d = 0, names_1 = names; _d < names_1.length; _d++) {
                  var name_3 = names_1[_d];
                  refs.push({
                    $ref: $ref,
                    name: name_3,
                  });
                }
              } else {
                refs.push({
                  $ref: $ref,
                  name: names,
                });
              }
            }
            this.oneOf = refs.map(function(_a) {
              var $ref = _a.$ref,
                name = _a.name;
              var innerSchema = new SchemaModel(
                parser,
                parser.byRef($ref),
                $ref,
                _this.options,
                true,
              );
              innerSchema.title = name;
              return innerSchema;
            });
          };
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            SchemaModel.prototype,
            'activeOneOf',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            SchemaModel.prototype,
            'activateOneOf',
            null,
          );
          return SchemaModel;
        })();

        function buildFields(parser, schema, $ref, options) {
          var props = schema.properties || {};
          var additionalProps = schema.additionalProperties;
          var defaults = schema.default || {};
          var fields = Object.keys(props || []).map(function(fieldName) {
            var field = props[fieldName];
            if (!field) {
              console.warn(
                'Field "' +
                  fieldName +
                  '" is invalid, skipping.\n Field must be an object but got ' +
                  typeof field +
                  ' at "' +
                  $ref +
                  '"',
              );
              field = {};
            }
            var required =
              schema.required === undefined ? false : schema.required.indexOf(fieldName) > -1;
            return new Field_FieldModel(
              parser,
              {
                name: fieldName,
                required: required,
                schema: Object(external_tslib_['__assign'])(
                  Object(external_tslib_['__assign'])({}, field),
                  { default: field.default === undefined ? defaults[fieldName] : field.default },
                ),
              },
              $ref + '/properties/' + fieldName,
              options,
            );
          });
          if (options.sortPropsAlphabetically) {
            fields = sortByField(fields, 'name');
          }
          if (options.requiredPropsFirst) {
            // if not sort alphabetically sort in the order from required keyword
            fields = sortByRequired(
              fields,
              !options.sortPropsAlphabetically ? schema.required : undefined,
            );
          }
          if (typeof additionalProps === 'object' || additionalProps === true) {
            fields.push(
              new Field_FieldModel(
                parser,
                {
                  name: (typeof additionalProps === 'object'
                    ? additionalProps['x-additionalPropertiesName'] || 'property name'
                    : 'property name'
                  ).concat('*'),
                  required: false,
                  schema: additionalProps === true ? {} : additionalProps,
                  kind: 'additionalProperties',
                },
                $ref + '/additionalProperties',
                options,
              ),
            );
          }
          return fields;
        }
        function getDiscriminator(schema) {
          return schema.discriminator || schema['x-discriminator'];
        }

        // CONCATENATED MODULE: ./src/services/models/Field.ts

        function getDefaultStyleValue(parameterLocation) {
          switch (parameterLocation) {
            case 'header':
              return 'simple';
            case 'query':
              return 'form';
            case 'path':
              return 'simple';
            default:
              return 'form';
          }
        }
        /**
         * Field or Parameter model ready to be used by components
         */
        var Field_FieldModel = /** @class */ (function() {
          function FieldModel(parser, infoOrRef, pointer, options) {
            this.expanded = false;
            this.$value = '';
            Object(external_mobx_['makeObservable'])(this);
            var info = parser.deref(infoOrRef);
            this.kind = infoOrRef.kind || 'field';
            this.name = infoOrRef.name || info.name;
            this.in = info.in;
            this.required = !!info.required;
            var fieldSchema = info.schema;
            var serializationMime = '';
            if (!fieldSchema && info.in && info.content) {
              serializationMime = Object.keys(info.content)[0];
              fieldSchema =
                info.content[serializationMime] && info.content[serializationMime].schema;
            }
            this.schema = new Schema_SchemaModel(parser, fieldSchema || {}, pointer, options);
            this.description =
              info.description === undefined ? this.schema.description || '' : info.description;
            this.example = info.example || this.schema.example;
            if (serializationMime) {
              this.serializationMime = serializationMime;
            } else if (info.style) {
              this.style = info.style;
            } else if (this.in) {
              this.style = getDefaultStyleValue(this.in);
            }
            this.explode = !!info.explode;
            this.deprecated =
              info.deprecated === undefined ? !!this.schema.deprecated : info.deprecated;
            parser.exitRef(infoOrRef);
            if (options.showExtensions) {
              this.extensions = extractExtensions(info, options.showExtensions);
            }
          }
          FieldModel.prototype.toggle = function() {
            this.expanded = !this.expanded;
          };
          FieldModel.prototype.setValue = function(value) {
            this.$value = value;
          };
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            FieldModel.prototype,
            'expanded',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            FieldModel.prototype,
            '$value',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            FieldModel.prototype,
            'toggle',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            FieldModel.prototype,
            'setValue',
            null,
          );
          return FieldModel;
        })();

        // EXTERNAL MODULE: external "openapi-sampler"
        var external_openapi_sampler_ = __webpack_require__(23);

        // CONCATENATED MODULE: ./src/services/models/Example.ts

        var externalExamplesCache = {};
        var Example_ExampleModel = /** @class */ (function() {
          function ExampleModel(parser, infoOrRef, mime, encoding) {
            this.mime = mime;
            var example = parser.deref(infoOrRef);
            this.value = example.value;
            this.summary = example.summary;
            this.description = example.description;
            if (example.externalValue) {
              this.externalValueUrl = Object(external_url_['resolve'])(
                parser.specUrl || '',
                example.externalValue,
              );
            }
            parser.exitRef(infoOrRef);
            if (isFormUrlEncoded(mime) && this.value && typeof this.value === 'object') {
              this.value = urlFormEncodePayload(this.value, encoding);
            }
          }
          ExampleModel.prototype.getExternalValue = function(mimeType) {
            if (!this.externalValueUrl) {
              return Promise.resolve(undefined);
            }
            if (externalExamplesCache[this.externalValueUrl]) {
              return externalExamplesCache[this.externalValueUrl];
            }
            externalExamplesCache[this.externalValueUrl] = fetch(this.externalValueUrl).then(
              function(res) {
                return res.text().then(function(txt) {
                  if (!res.ok) {
                    return Promise.reject(new Error(txt));
                  }
                  if (isJsonLike(mimeType)) {
                    try {
                      return JSON.parse(txt);
                    } catch (e) {
                      return txt;
                    }
                  } else {
                    return txt;
                  }
                });
              },
            );
            return externalExamplesCache[this.externalValueUrl];
          };
          return ExampleModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/MediaType.ts

        var MediaType_MediaTypeModel = /** @class */ (function() {
          /**
           * @param isRequestType needed to know if skipe RO/RW fields in objects
           */
          function MediaTypeModel(parser, name, isRequestType, info, options) {
            this.name = name;
            this.isRequestType = isRequestType;
            this.schema = info.schema && new Schema_SchemaModel(parser, info.schema, '', options);
            this.onlyRequiredInSamples = options.onlyRequiredInSamples;
            if (info.examples !== undefined) {
              this.examples = mapValues(info.examples, function(example) {
                return new Example_ExampleModel(parser, example, name, info.encoding);
              });
            } else if (info.example !== undefined) {
              this.examples = {
                default: new Example_ExampleModel(
                  parser,
                  {
                    value: parser.shalowDeref(info.example),
                  },
                  name,
                  info.encoding,
                ),
              };
            } else if (isJsonLike(name)) {
              this.generateExample(parser, info);
            }
          }
          MediaTypeModel.prototype.generateExample = function(parser, info) {
            var samplerOptions = {
              skipReadOnly: this.isRequestType,
              skipNonRequired: this.isRequestType && this.onlyRequiredInSamples,
              skipWriteOnly: !this.isRequestType,
            };
            if (this.schema && this.schema.oneOf) {
              this.examples = {};
              for (var _i = 0, _a = this.schema.oneOf; _i < _a.length; _i++) {
                var subSchema = _a[_i];
                var sample = external_openapi_sampler_['sample'](
                  subSchema.rawSchema,
                  samplerOptions,
                  parser.spec,
                );
                if (this.schema.discriminatorProp && typeof sample === 'object' && sample) {
                  sample[this.schema.discriminatorProp] = subSchema.title;
                }
                this.examples[subSchema.title] = new Example_ExampleModel(
                  parser,
                  {
                    value: sample,
                  },
                  this.name,
                  info.encoding,
                );
              }
            } else if (this.schema) {
              this.examples = {
                default: new Example_ExampleModel(
                  parser,
                  {
                    value: external_openapi_sampler_['sample'](
                      info.schema,
                      samplerOptions,
                      parser.spec,
                    ),
                  },
                  this.name,
                  info.encoding,
                ),
              };
            }
          };
          return MediaTypeModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/MediaContent.ts

        /**
         * MediaContent model ready to be sued by React components
         * Contains multiple MediaTypes and keeps track of the currently active one
         */
        var MediaContent_MediaContentModel = /** @class */ (function() {
          /**
           * @param isRequestType needed to know if skipe RO/RW fields in objects
           */
          function MediaContentModel(parser, info, isRequestType, options) {
            this.isRequestType = isRequestType;
            this.activeMimeIdx = 0;
            Object(external_mobx_['makeObservable'])(this);
            if (options.unstable_ignoreMimeParameters) {
              info = mergeSimilarMediaTypes(info);
            }
            this.mediaTypes = Object.keys(info).map(function(name) {
              var mime = info[name]; // reset deref cache just in case something is left there
              parser.resetVisited();
              return new MediaType_MediaTypeModel(parser, name, isRequestType, mime, options);
            });
          }
          /**
           * Set active media type by index
           * @param idx media type index
           */
          MediaContentModel.prototype.activate = function(idx) {
            this.activeMimeIdx = idx;
          };
          Object.defineProperty(MediaContentModel.prototype, 'active', {
            get: function() {
              return this.mediaTypes[this.activeMimeIdx];
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(MediaContentModel.prototype, 'hasSample', {
            get: function() {
              return (
                this.mediaTypes.filter(function(mime) {
                  return !!mime.examples;
                }).length > 0
              );
            },
            enumerable: true,
            configurable: true,
          });
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            MediaContentModel.prototype,
            'activeMimeIdx',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            MediaContentModel.prototype,
            'activate',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['computed']],
            MediaContentModel.prototype,
            'active',
            null,
          );
          return MediaContentModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/RequestBody.ts

        var RequestBody_RequestBodyModel = /** @class */ (function() {
          function RequestBodyModel(parser, infoOrRef, options) {
            var info = parser.deref(infoOrRef);
            this.description = info.description || '';
            this.required = !!info.required;
            parser.exitRef(infoOrRef);
            if (info.content !== undefined) {
              this.content = new MediaContent_MediaContentModel(
                parser,
                info.content,
                true,
                options,
              );
            }
          }
          return RequestBodyModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/Response.ts

        var Response_ResponseModel = /** @class */ (function() {
          function ResponseModel(parser, code, defaultAsError, infoOrRef, options) {
            this.headers = [];
            Object(external_mobx_['makeObservable'])(this);
            this.expanded = options.expandResponses === 'all' || options.expandResponses[code];
            var info = parser.deref(infoOrRef);
            parser.exitRef(infoOrRef);
            this.code = code;
            if (info.content !== undefined) {
              this.content = new MediaContent_MediaContentModel(
                parser,
                info.content,
                false,
                options,
              );
            }
            if (info['x-summary'] !== undefined) {
              this.summary = info['x-summary'];
              this.description = info.description || '';
            } else {
              this.summary = info.description || '';
              this.description = '';
            }
            this.type = getStatusCodeType(code, defaultAsError);
            var headers = info.headers;
            if (headers !== undefined) {
              this.headers = Object.keys(headers).map(function(name) {
                var header = headers[name];
                return new Field_FieldModel(
                  parser,
                  Object(external_tslib_['__assign'])(
                    Object(external_tslib_['__assign'])({}, header),
                    { name: name },
                  ),
                  '',
                  options,
                );
              });
            }
          }
          ResponseModel.prototype.toggle = function() {
            this.expanded = !this.expanded;
          };
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            ResponseModel.prototype,
            'expanded',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            ResponseModel.prototype,
            'toggle',
            null,
          );
          return ResponseModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/Operation.ts

        function isPayloadSample(sample) {
          return sample.lang === 'payload' && sample.requestBodyContent;
        }
        /**
         * Operation model ready to be used by components
         */
        var Operation_OperationModel = /** @class */ (function() {
          function OperationModel(parser, operationSpec, parent, options) {
            this.parser = parser;
            this.operationSpec = operationSpec;
            this.options = options;
            this.type = 'operation';
            this.items = [];
            this.ready = true;
            this.active = false;
            this.expanded = false; //#endregion
            Object(external_mobx_['makeObservable'])(this);
            this.pointer = JsonPointer_JsonPointer.compile([
              'paths',
              operationSpec.pathName,
              operationSpec.httpVerb,
            ]);
            this.id =
              operationSpec.operationId !== undefined
                ? 'operation/' + operationSpec.operationId
                : parent !== undefined
                ? parent.id + this.pointer
                : this.pointer;
            this.name = getOperationSummary(operationSpec);
            this.description = operationSpec.description;
            this.parent = parent;
            this.externalDocs = operationSpec.externalDocs;
            this.deprecated = !!operationSpec.deprecated;
            this.httpVerb = operationSpec.httpVerb;
            this.deprecated = !!operationSpec.deprecated;
            this.operationId = operationSpec.operationId;
            this.path = operationSpec.pathName;
            var pathInfo = parser.byRef(
              JsonPointer_JsonPointer.compile(['paths', operationSpec.pathName]),
            );
            this.servers = normalizeServers(
              parser.specUrl,
              operationSpec.servers || (pathInfo && pathInfo.servers) || parser.spec.servers || [],
            );
            this.security = (operationSpec.security || parser.spec.security || []).map(function(
              security,
            ) {
              return new SecurityRequirement_SecurityRequirementModel(security, parser);
            });
            if (options.showExtensions) {
              this.extensions = extractExtensions(operationSpec, options.showExtensions);
            }
          }
          /**
           * set operation as active (used by side menu)
           */
          OperationModel.prototype.activate = function() {
            this.active = true;
          };
          /**
           * set operation as inactive (used by side menu)
           */
          OperationModel.prototype.deactivate = function() {
            this.active = false;
          };
          OperationModel.prototype.expand = function() {
            if (this.parent) {
              this.parent.expand();
            }
          };
          OperationModel.prototype.collapse = function() {
            /* do nothing */
          };
          Object.defineProperty(OperationModel.prototype, 'requestBody', {
            get: function() {
              return (
                this.operationSpec.requestBody &&
                new RequestBody_RequestBodyModel(
                  this.parser,
                  this.operationSpec.requestBody,
                  this.options,
                )
              );
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(OperationModel.prototype, 'codeSamples', {
            get: function() {
              var samples = this.operationSpec['x-code-samples'] || [];
              var requestBodyContent = this.requestBody && this.requestBody.content;
              if (requestBodyContent && requestBodyContent.hasSample) {
                var insertInx = Math.min(samples.length, this.options.payloadSampleIdx);
                samples = Object(external_tslib_['__spreadArrays'])(
                  samples.slice(0, insertInx),
                  [
                    {
                      lang: 'payload',
                      label: 'Payload',
                      source: '',
                      requestBodyContent: requestBodyContent,
                    },
                  ],
                  samples.slice(insertInx),
                );
              }
              return samples;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(OperationModel.prototype, 'parameters', {
            get: function() {
              var _this = this;
              var _parameters = mergeParams(
                this.parser,
                this.operationSpec.pathParameters,
                this.operationSpec.parameters, // TODO: fix pointer
              ).map(function(paramOrRef) {
                return new Field_FieldModel(_this.parser, paramOrRef, _this.pointer, _this.options);
              });
              if (this.options.sortPropsAlphabetically) {
                return sortByField(_parameters, 'name');
              }
              if (this.options.requiredPropsFirst) {
                return sortByRequired(_parameters);
              }
              return _parameters;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(OperationModel.prototype, 'responses', {
            get: function() {
              var _this = this;
              var hasSuccessResponses = false;
              return Object.keys(this.operationSpec.responses || [])
                .filter(function(code) {
                  if (code === 'default') {
                    return true;
                  }
                  if (getStatusCodeType(code) === 'success') {
                    hasSuccessResponses = true;
                  }
                  return isStatusCode(code);
                }) // filter out other props (e.g. x-props)
                .map(function(code) {
                  return new Response_ResponseModel(
                    _this.parser,
                    code,
                    hasSuccessResponses,
                    _this.operationSpec.responses[code],
                    _this.options,
                  );
                });
            },
            enumerable: true,
            configurable: true,
          });
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            OperationModel.prototype,
            'ready',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            OperationModel.prototype,
            'active',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            OperationModel.prototype,
            'expanded',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            OperationModel.prototype,
            'activate',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            OperationModel.prototype,
            'deactivate',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [memoize],
            OperationModel.prototype,
            'requestBody',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [memoize],
            OperationModel.prototype,
            'codeSamples',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [memoize],
            OperationModel.prototype,
            'parameters',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [memoize],
            OperationModel.prototype,
            'responses',
            null,
          );
          return OperationModel;
        })();

        // CONCATENATED MODULE: ./src/services/models/index.ts

        // CONCATENATED MODULE: ./src/services/MenuBuilder.ts

        var GROUP_DEPTH = 0;
        var MenuBuilder_MenuBuilder = /** @class */ (function() {
          function MenuBuilder() {}
          /**
           * Builds page content structure based on tags
           */
          MenuBuilder.buildStructure = function(parser, options) {
            var spec = parser.spec;
            var items = [];
            var tagsMap = MenuBuilder.getTagsWithOperations(spec);
            items.push.apply(
              items,
              MenuBuilder.addMarkdownItems(spec.info.description || '', undefined, 1, options),
            );
            if (spec['x-tagGroups'] && spec['x-tagGroups'].length > 0) {
              items.push.apply(
                items,
                MenuBuilder.getTagGroupsItems(
                  parser,
                  undefined,
                  spec['x-tagGroups'],
                  tagsMap,
                  options,
                ),
              );
            } else {
              items.push.apply(
                items,
                MenuBuilder.getTagsItems(parser, tagsMap, undefined, undefined, options),
              );
            }
            return items;
          };
          /**
           * extracts items from markdown description
           * @param description - markdown source
           */
          MenuBuilder.addMarkdownItems = function(description, parent, initialDepth, options) {
            var renderer = new MarkdownRenderer_MarkdownRenderer(options);
            var headings = renderer.extractHeadings(description || '');
            if (headings.length && parent && parent.description) {
              parent.description = MarkdownRenderer_MarkdownRenderer.getTextBeforeHading(
                parent.description,
                headings[0].name,
              );
            }
            var mapHeadingsDeep = function(_parent, items, depth) {
              if (depth === void 0) {
                depth = 1;
              }
              return items.map(function(heading) {
                var group = new Group_model_GroupModel('section', heading, _parent);
                group.depth = depth;
                if (heading.items) {
                  group.items = mapHeadingsDeep(group, heading.items, depth + 1);
                }
                if (
                  MarkdownRenderer_MarkdownRenderer.containsComponent(
                    group.description || '',
                    SECURITY_DEFINITIONS_COMPONENT_NAME,
                  )
                ) {
                  setSecuritySchemePrefix(group.id + '/');
                }
                return group;
              });
            };
            return mapHeadingsDeep(parent, headings, initialDepth);
          };
          /**
           * Returns array of OperationsGroup items for the tag groups (x-tagGroups vendor extension)
           * @param tags value of `x-tagGroups` vendor extension
           */
          MenuBuilder.getTagGroupsItems = function(parser, parent, groups, tags, options) {
            var res = [];
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
              var group = groups_1[_i];
              var item = new Group_model_GroupModel('group', group, parent);
              item.depth = GROUP_DEPTH;
              item.items = MenuBuilder.getTagsItems(parser, tags, item, group, options);
              res.push(item);
            } // TODO checkAllTagsUsedInGroups
            return res;
          };
          /**
           * Returns array of OperationsGroup items for the tags of the group or for all tags
           * @param tagsMap tags info returned from `getTagsWithOperations`
           * @param parent parent item
           * @param group group which this tag belongs to. if not provided gets all tags
           */
          MenuBuilder.getTagsItems = function(parser, tagsMap, parent, group, options) {
            var tagNames;
            if (group === undefined) {
              tagNames = Object.keys(tagsMap); // all tags
            } else {
              tagNames = group.tags;
            }
            var tags = tagNames.map(function(tagName) {
              if (!tagsMap[tagName]) {
                console.warn(
                  'Non-existing tag "' + tagName + '" is added to the group "' + group.name + '"',
                );
                return null;
              }
              tagsMap[tagName].used = true;
              return tagsMap[tagName];
            });
            var res = [];
            for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
              var tag = tags_1[_i];
              if (!tag) {
                continue;
              }
              var item = new Group_model_GroupModel('tag', tag, parent);
              item.depth = GROUP_DEPTH + 1; // don't put empty tag into content, instead put its operations
              if (tag.name === '') {
                var items = Object(external_tslib_['__spreadArrays'])(
                  MenuBuilder.addMarkdownItems(
                    tag.description || '',
                    item,
                    item.depth + 1,
                    options,
                  ),
                  this.getOperationsItems(parser, undefined, tag, item.depth + 1, options),
                );
                res.push.apply(res, items);
                continue;
              }
              item.items = Object(external_tslib_['__spreadArrays'])(
                MenuBuilder.addMarkdownItems(tag.description || '', item, item.depth + 1, options),
                this.getOperationsItems(parser, item, tag, item.depth + 1, options),
              );
              res.push(item);
            }
            return res;
          };
          /**
           * Returns array of Operation items for the tag
           * @param parent parent OperationsGroup
           * @param tag tag info returned from `getTagsWithOperations`
           * @param depth items depth
           */
          MenuBuilder.getOperationsItems = function(parser, parent, tag, depth, options) {
            if (tag.operations.length === 0) {
              return [];
            }
            var res = [];
            for (var _i = 0, _a = tag.operations; _i < _a.length; _i++) {
              var operationInfo = _a[_i];
              var operation = new Operation_OperationModel(parser, operationInfo, parent, options);
              operation.depth = depth;
              res.push(operation);
            }
            return res;
          };
          /**
           * collects tags and maps each tag to list of operations belonging to this tag
           */
          MenuBuilder.getTagsWithOperations = function(spec) {
            var tags = {};
            for (var _i = 0, _a = spec.tags || []; _i < _a.length; _i++) {
              var tag = _a[_i];
              tags[tag.name] = Object(external_tslib_['__assign'])(
                Object(external_tslib_['__assign'])({}, tag),
                { operations: [] },
              );
            }
            var paths = spec.paths;
            for (var _b = 0, _c = Object.keys(paths); _b < _c.length; _b++) {
              var pathName = _c[_b];
              var path = paths[pathName];
              var operations = Object.keys(path).filter(isOperationName);
              for (var _d = 0, operations_1 = operations; _d < operations_1.length; _d++) {
                var operationName = operations_1[_d];
                var operationInfo = path[operationName];
                var operationTags = operationInfo.tags;
                if (!operationTags || !operationTags.length) {
                  // empty tag
                  operationTags = [''];
                }
                for (
                  var _e = 0, operationTags_1 = operationTags;
                  _e < operationTags_1.length;
                  _e++
                ) {
                  var tagName = operationTags_1[_e];
                  var tag = tags[tagName];
                  if (tag === undefined) {
                    tag = {
                      name: tagName,
                      operations: [],
                    };
                    tags[tagName] = tag;
                  }
                  if (tag['x-traitTag']) {
                    continue;
                  }
                  tag.operations.push(
                    Object(external_tslib_['__assign'])(
                      Object(external_tslib_['__assign'])({}, operationInfo),
                      {
                        pathName: pathName,
                        httpVerb: operationName,
                        pathParameters: path.parameters || [],
                      },
                    ),
                  );
                }
              }
            }
            return tags;
          };
          return MenuBuilder;
        })();

        // CONCATENATED MODULE: ./src/services/MenuStore.ts

        var SECTION_ATTR = 'data-section-id';
        /**
         * Stores all side-menu related information
         */
        var MenuStore_MenuStore = /** @class */ (function() {
          /**
           *
           * @param spec [SpecStore](#SpecStore) which contains page content structure
           * @param scroll scroll service instance used by this menu
           */
          function MenuStore(spec, scroll, history) {
            var _this = this;
            this.scroll = scroll;
            this.history = history;
            /**
             * active item absolute index (when flattened). -1 means nothing is selected
             */
            this.activeItemIdx = -1;
            /**
             * whether sidebar with menu is opened or not
             */
            this.sideBarOpened = false;
            /**
             * update active items on scroll
             * @param isScrolledDown whether last scroll was downside
             */
            this.updateOnScroll = function(isScrolledDown) {
              var step = isScrolledDown ? 1 : -1;
              var itemIdx = _this.activeItemIdx;
              while (true) {
                if (itemIdx === -1 && !isScrolledDown) {
                  break;
                }
                if (itemIdx >= _this.flatItems.length - 1 && isScrolledDown) {
                  break;
                }
                if (isScrolledDown) {
                  var el = _this.getElementAtOrFirstChild(itemIdx + 1);
                  if (_this.scroll.isElementBellow(el)) {
                    break;
                  }
                } else {
                  var el = _this.getElementAt(itemIdx);
                  if (_this.scroll.isElementAbove(el)) {
                    break;
                  }
                }
                itemIdx += step;
              }
              _this.activate(_this.flatItems[itemIdx], true, true);
            };
            /**
             * update active items on hash change
             * @param id current hash
             */
            this.updateOnHistory = function(id) {
              if (id === void 0) {
                id = _this.history.currentId;
              }
              if (!id) {
                return;
              }
              var item;
              item = _this.flatItems.find(function(i) {
                return i.id === id;
              });
              if (item) {
                _this.activateAndScroll(item, false);
              } else {
                if (id.startsWith(SECURITY_SCHEMES_SECTION_PREFIX)) {
                  item = _this.flatItems.find(function(i) {
                    return SECURITY_SCHEMES_SECTION_PREFIX.startsWith(i.id);
                  });
                  _this.activate(item);
                }
                _this.scroll.scrollIntoViewBySelector('[' + SECTION_ATTR + '="' + id + '"]');
              }
            };
            this.getItemById = function(id) {
              return _this.flatItems.find(function(item) {
                return item.id === id;
              });
            };
            Object(external_mobx_['makeObservable'])(this);
            this.items = spec.contentItems;
            this.flatItems = flattenByProp(this.items || [], 'items');
            this.flatItems.forEach(function(item, idx) {
              return (item.absoluteIdx = idx);
            });
            this.subscribe();
          }
          /**
           * Statically try update scroll position
           * Used before hydrating from server-side rendered html to scroll page faster
           */
          MenuStore.updateOnHistory = function(id, scroll) {
            if (id === void 0) {
              id = HistoryService_history.currentId;
            }
            if (!id) {
              return;
            }
            scroll.scrollIntoViewBySelector('[' + SECTION_ATTR + '="' + id + '"]');
          };
          MenuStore.prototype.subscribe = function() {
            this._unsubscribe = this.scroll.subscribe(this.updateOnScroll);
            this._hashUnsubscribe = this.history.subscribe(this.updateOnHistory);
          };
          MenuStore.prototype.toggleSidebar = function() {
            this.sideBarOpened = this.sideBarOpened ? false : true;
          };
          MenuStore.prototype.closeSidebar = function() {
            this.sideBarOpened = false;
          };
          /**
           * get section/operation DOM Node related to the item or null if it doesn't exist
           * @param idx item absolute index
           */
          MenuStore.prototype.getElementAt = function(idx) {
            var item = this.flatItems[idx];
            return (item && querySelector('[' + SECTION_ATTR + '="' + item.id + '"]')) || null;
          };
          /**
           * get section/operation DOM Node related to the item or if it is group item, returns first item of the group
           * @param idx item absolute index
           */
          MenuStore.prototype.getElementAtOrFirstChild = function(idx) {
            var item = this.flatItems[idx];
            if (item && item.type === 'group') {
              item = item.items[0];
            }
            return (item && querySelector('[' + SECTION_ATTR + '="' + item.id + '"]')) || null;
          };
          Object.defineProperty(MenuStore.prototype, 'activeItem', {
            /**
             * current active item
             */
            get: function() {
              return this.flatItems[this.activeItemIdx] || undefined;
            },
            enumerable: true,
            configurable: true,
          });
          /**
           * activate menu item
           * @param item item to activate
           * @param updateLocation [true] whether to update location
           * @param rewriteHistory [false] whether to rewrite browser history (do not create new entry)
           */
          MenuStore.prototype.activate = function(item, updateLocation, rewriteHistory) {
            if (updateLocation === void 0) {
              updateLocation = true;
            }
            if (rewriteHistory === void 0) {
              rewriteHistory = false;
            }
            if ((this.activeItem && this.activeItem.id) === (item && item.id)) {
              return;
            }
            if (item && item.type === 'group') {
              return;
            }
            this.deactivate(this.activeItem);
            if (!item) {
              this.history.replace('', rewriteHistory);
              return;
            } // do not allow activating group items
            // TODO: control over options
            if (item.depth <= GROUP_DEPTH) {
              return;
            }
            this.activeItemIdx = item.absoluteIdx;
            if (updateLocation) {
              this.history.replace(item.id, rewriteHistory);
            }
            item.activate();
            item.expand();
          };
          /**
           * makes item and all the parents not active
           * @param item item to deactivate
           */
          MenuStore.prototype.deactivate = function(item) {
            if (item === undefined) {
              return;
            }
            item.deactivate();
            while (item !== undefined) {
              item.collapse();
              item = item.parent;
            }
          };
          /**
           * activate menu item and scroll to it
           * @see MenuStore.activate
           */
          MenuStore.prototype.activateAndScroll = function(item, updateLocation, rewriteHistory) {
            // item here can be a copy from search results so find corresponding item from menu
            var menuItem = (item && this.getItemById(item.id)) || item;
            this.activate(menuItem, updateLocation, rewriteHistory);
            this.scrollToActive();
            if (!menuItem || !menuItem.items.length) {
              this.closeSidebar();
            }
          };
          /**
           * scrolls to active section
           */
          MenuStore.prototype.scrollToActive = function() {
            this.scroll.scrollIntoView(this.getElementAt(this.activeItemIdx));
          };
          MenuStore.prototype.dispose = function() {
            this._unsubscribe();
            this._hashUnsubscribe();
          };
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            MenuStore.prototype,
            'activeItemIdx',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['observable']],
            MenuStore.prototype,
            'sideBarOpened',
            void 0,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            MenuStore.prototype,
            'toggleSidebar',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            MenuStore.prototype,
            'closeSidebar',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action']],
            MenuStore.prototype,
            'activate',
            null,
          );
          Object(external_tslib_['__decorate'])(
            [external_mobx_['action'].bound],
            MenuStore.prototype,
            'activateAndScroll',
            null,
          );
          return MenuStore;
        })();

        // CONCATENATED MODULE: ./src/services/ScrollService.ts

        var ScrollService_EVENT = 'scroll';
        var ScrollService_ScrollService = /** @class */ (function() {
          function ScrollService(options) {
            this.options = options;
            this._prevOffsetY = 0;
            this._scrollParent = IS_BROWSER ? window : undefined;
            this._emiter = new external_eventemitter3_default.a();
            this.bind();
          }
          ScrollService.prototype.bind = function() {
            this._prevOffsetY = this.scrollY();
            if (this._scrollParent) {
              this._scrollParent.addEventListener('scroll', this.handleScroll);
            }
          };
          ScrollService.prototype.dispose = function() {
            if (this._scrollParent) {
              this._scrollParent.removeEventListener('scroll', this.handleScroll);
            }
            this._emiter.removeAllListeners(ScrollService_EVENT);
          };
          ScrollService.prototype.scrollY = function() {
            if (typeof HTMLElement !== 'undefined' && this._scrollParent instanceof HTMLElement) {
              return this._scrollParent.scrollTop;
            } else if (this._scrollParent !== undefined) {
              return this._scrollParent.pageYOffset;
            } else {
              return 0;
            }
          };
          ScrollService.prototype.isElementBellow = function(el) {
            if (el === null) {
              return;
            }
            return el.getBoundingClientRect().top > this.options.scrollYOffset();
          };
          ScrollService.prototype.isElementAbove = function(el) {
            if (el === null) {
              return;
            }
            var top = el.getBoundingClientRect().top;
            return (top > 0 ? Math.floor(top) : Math.ceil(top)) <= this.options.scrollYOffset();
          };
          ScrollService.prototype.subscribe = function(cb) {
            var emmiter = this._emiter.addListener(ScrollService_EVENT, cb);
            return function() {
              return emmiter.removeListener(ScrollService_EVENT, cb);
            };
          };
          ScrollService.prototype.scrollIntoView = function(element) {
            if (element === null) {
              return;
            }
            element.scrollIntoView();
            if (this._scrollParent && this._scrollParent.scrollBy) {
              // adding 1 account rounding errors in case scrollYOffset is float-number
              this._scrollParent.scrollBy(0, -this.options.scrollYOffset() + 1);
            }
          };
          ScrollService.prototype.scrollIntoViewBySelector = function(selector) {
            var element = querySelector(selector);
            this.scrollIntoView(element);
          };
          ScrollService.prototype.handleScroll = function() {
            var scrollY = this.scrollY();
            var isScrolledDown = scrollY - this._prevOffsetY > 0;
            this._prevOffsetY = this.scrollY();
            this._emiter.emit(ScrollService_EVENT, isScrolledDown);
          };
          Object(external_tslib_['__decorate'])(
            [external_decko_['bind'], Throttle(100)],
            ScrollService.prototype,
            'handleScroll',
            null,
          );
          return ScrollService;
        })();

        // CONCATENATED MODULE: ./src/services/SearchStore.ts

        var worker;
        if (IS_BROWSER) {
          try {
            // tslint:disable-next-line
            worker = __webpack_require__(79);
          } catch (e) {
            worker = __webpack_require__(33).default;
          }
        } else {
          worker = __webpack_require__(33).default;
        }
        var SearchStore_SearchStore = /** @class */ (function() {
          function SearchStore() {
            this.searchWorker = new worker();
          }
          SearchStore.prototype.indexItems = function(groups) {
            var _this = this;
            var recurse = function(items) {
              items.forEach(function(group) {
                if (group.type !== 'group') {
                  _this.add(group.name, group.description || '', group.id);
                }
                recurse(group.items);
              });
            };
            recurse(groups);
            this.searchWorker.done();
          };
          SearchStore.prototype.add = function(title, body, meta) {
            this.searchWorker.add(title, body, meta);
          };
          SearchStore.prototype.dispose = function() {
            this.searchWorker.terminate();
          };
          SearchStore.prototype.search = function(q) {
            return this.searchWorker.search(q);
          };
          SearchStore.prototype.toJS = function() {
            return Object(external_tslib_['__awaiter'])(this, void 0, void 0, function() {
              return Object(external_tslib_['__generator'])(this, function(_a) {
                return [2 /*return*/, this.searchWorker.toJS()];
              });
            });
          };
          SearchStore.prototype.load = function(state) {
            this.searchWorker.load(state);
          };
          return SearchStore;
        })();

        // CONCATENATED MODULE: ./src/common-elements/panels.ts

        var MiddlePanel = styled_components.div(
          panels_templateObject_2 ||
            (panels_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  width: calc(100% - ',
                ');\n  padding: 0 ',
                'px;\n  direction: ',
                ';\n  text-align: ',
                ';\n\n  ',
                ';\n',
              ],
              [
                '\n  width: calc(100% - ',
                ');\n  padding: 0 ',
                'px;\n  direction: ',
                ';\n  text-align: ',
                ';\n\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.rightPanel.width;
          },
          function(props) {
            return props.theme.spacing.sectionHorizontal;
          },
          function(props) {
            return props.theme.typography.direction || 'ltr';
          },
          function(props) {
            return props.theme.typography.direction === 'rtl' ? 'right' : 'inherit';
          },
          function(_a) {
            var compact = _a.compact,
              theme = _a.theme;
            return media.lessThan('medium', true)(
              panels_templateObject_1 ||
                (panels_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
                  ['\n    width: 100%;\n    padding: ', ';\n  '],
                  ['\n    width: 100%;\n    padding: ', ';\n  '],
                )),
              (compact ? 0 : theme.spacing.sectionVertical) +
                'px ' +
                theme.spacing.sectionHorizontal +
                'px',
            );
          },
        );
        var Section = styled_components.div.attrs(function(props) {
          var _a;
          return (_a = {}), (_a[SECTION_ATTR] = props.id), _a;
        })(
          templateObject_4 ||
            (templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  padding: ',
                'px 0;\n\n  &:last-child {\n    min-height: calc(100vh + 1px);\n  }\n\n  & > &:last-child {\n    min-height: initial;\n  }\n\n  ',
                '\n  ',
                '\n',
              ],
              [
                '\n  padding: ',
                'px 0;\n\n  &:last-child {\n    min-height: calc(100vh + 1px);\n  }\n\n  & > &:last-child {\n    min-height: initial;\n  }\n\n  ',
                '\n  ',
                '\n',
              ],
            )),
          function(props) {
            return props.theme.spacing.sectionVertical;
          },
          media.lessThan(
            'medium',
            true,
          )(
            panels_templateObject_3 ||
              (panels_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
                ['\n    padding: 0;\n  '],
                ['\n    padding: 0;\n  '],
              )),
          ),
          function(props) {
            return (
              (props.underlined &&
                "\n    position: relative;\n\n    &:not(:last-of-type):after {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      display: block;\n      content: '';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    }\n  ") ||
              ''
            );
          },
        );
        var RightPanel = styled_components.div(
          templateObject_6 ||
            (templateObject_6 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  width: ',
                ';\n  color: ',
                ';\n  background-color: ',
                ';\n  padding: 0 ',
                'px;\n\n  ',
                ';\n',
              ],
              [
                '\n  width: ',
                ';\n  color: ',
                ';\n  background-color: ',
                ';\n  padding: 0 ',
                'px;\n\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.rightPanel.width;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.textColor;
          },
          function(props) {
            return props.theme.rightPanel.backgroundColor;
          },
          function(props) {
            return props.theme.spacing.sectionHorizontal;
          },
          media.lessThan('medium', true)(
            templateObject_5 ||
              (templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
                ['\n    width: 100%;\n    padding: ', ';\n  '],
                ['\n    width: 100%;\n    padding: ', ';\n  '],
              )),
            function(props) {
              return (
                props.theme.spacing.sectionVertical +
                'px ' +
                props.theme.spacing.sectionHorizontal +
                'px'
              );
            },
          ),
        );
        var DarkRightPanel = styled_components(RightPanel)(
          templateObject_7 ||
            (templateObject_7 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  background-color: ', ';\n'],
              ['\n  background-color: ', ';\n'],
            )),
          function(props) {
            return props.theme.rightPanel.backgroundColor;
          },
        );
        var Row = styled_components.div(
          templateObject_9 ||
            (templateObject_9 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  display: flex;\n  width: 100%;\n  padding: 0;\n\n  ', ';\n'],
              ['\n  display: flex;\n  width: 100%;\n  padding: 0;\n\n  ', ';\n'],
            )),
          media.lessThan(
            'medium',
            true,
          )(
            templateObject_8 ||
              (templateObject_8 = Object(external_tslib_['__makeTemplateObject'])(
                ['\n    flex-direction: column;\n  '],
                ['\n    flex-direction: column;\n  '],
              )),
          ),
        );
        var FlexLayout = styled_components.div(
          templateObject_10 ||
            (templateObject_10 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  align-items: flex-end;\n  display: flex;\n  width: 100%;\n'],
              ['\n  align-items: flex-end;\n  display: flex;\n  width: 100%;\n'],
            )),
        );
        var FlexLayoutReverse = styled_components(FlexLayout)(
          templateObject_11 ||
            (templateObject_11 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  flex-direction: row-reverse;\n'],
              ['\n  flex-direction: row-reverse;\n'],
            )),
        );
        var panels_templateObject_1,
          panels_templateObject_2,
          panels_templateObject_3,
          templateObject_4,
          templateObject_5,
          templateObject_6,
          templateObject_7,
          templateObject_8,
          templateObject_9,
          templateObject_10,
          templateObject_11;

        // CONCATENATED MODULE: ./src/common-elements/headers.ts

        var headerFontSize = {
          1: '1.85714em',
          2: '1.57143em',
          3: '1.27em',
        };
        var headerCommonMixin = function(level) {
          return css(
            headers_templateObject_1 ||
              (headers_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
                [
                  '\n  font-family: ',
                  ';\n  font-weight: ',
                  ';\n  font-size: ',
                  ';\n  line-height: ',
                  ';\n',
                ],
                [
                  '\n  font-family: ',
                  ';\n  font-weight: ',
                  ';\n  font-size: ',
                  ';\n  line-height: ',
                  ';\n',
                ],
              )),
            function(_a) {
              var theme = _a.theme;
              return theme.typography.headings.fontFamily;
            },
            function(_a) {
              var theme = _a.theme;
              return theme.typography.headings.fontWeight;
            },
            headerFontSize[level],
            function(_a) {
              var theme = _a.theme;
              return theme.typography.headings.lineHeight;
            },
          );
        };
        var H1 = styled_components.h1(
          headers_templateObject_2 ||
            (headers_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  ', ';\n  color: ', ';\n\n  ', ';\n'],
              ['\n  ', ';\n  color: ', ';\n\n  ', ';\n'],
            )),
          headerCommonMixin(1),
          function(_a) {
            var theme = _a.theme;
            return theme.colors.primary.main;
          },
          extensionsHook('H1'),
        );
        var H2 = styled_components.h2(
          headers_templateObject_3 ||
            (headers_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  ', ';\n  color: black;\n\n  ', ';\n'],
              ['\n  ', ';\n  color: black;\n\n  ', ';\n'],
            )),
          headerCommonMixin(2),
          extensionsHook('H2'),
        );
        var H3 = styled_components.h2(
          headers_templateObject_4 ||
            (headers_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  ', ';\n  color: black;\n\n  ', ';\n'],
              ['\n  ', ';\n  color: black;\n\n  ', ';\n'],
            )),
          headerCommonMixin(3),
          extensionsHook('H3'),
        );
        var RightPanelHeader = styled_components.h3(
          headers_templateObject_5 ||
            (headers_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: ', ';\n\n  ', ';\n'],
              ['\n  color: ', ';\n\n  ', ';\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.textColor;
          },
          extensionsHook('RightPanelHeader'),
        );
        var UnderlinedHeader = styled_components.h5(
          headers_templateObject_6 ||
            (headers_templateObject_6 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  border-bottom: 1px solid rgba(38, 50, 56, 0.3);\n  margin: 1em 0 1em 0;\n  color: rgba(38, 50, 56, 0.5);\n  font-weight: normal;\n  text-transform: uppercase;\n  font-size: 0.929em;\n  line-height: 20px;\n\n  ',
                ';\n',
              ],
              [
                '\n  border-bottom: 1px solid rgba(38, 50, 56, 0.3);\n  margin: 1em 0 1em 0;\n  color: rgba(38, 50, 56, 0.5);\n  font-weight: normal;\n  text-transform: uppercase;\n  font-size: 0.929em;\n  line-height: 20px;\n\n  ',
                ';\n',
              ],
            )),
          extensionsHook('UnderlinedHeader'),
        );
        var headers_templateObject_1,
          headers_templateObject_2,
          headers_templateObject_3,
          headers_templateObject_4,
          headers_templateObject_5,
          headers_templateObject_6;

        // EXTERNAL MODULE: ./node_modules/memoize-one/dist/memoize-one.cjs.js
        var memoize_one_cjs = __webpack_require__(38);

        // CONCATENATED MODULE: ./src/components/StoreBuilder.ts

        // fixme: https://github.com/alexreardon/memoize-one/issues/37

        var StoreBuilder_a = Object(external_react_['createContext'])(undefined),
          Provider = StoreBuilder_a.Provider,
          Consumer = StoreBuilder_a.Consumer;

        var StoreBuilder_StoreBuilder = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(StoreBuilder, _super);
          function StoreBuilder() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.state = {
              loading: true,
              resolvedSpec: null,
            };
            return _this;
          }
          StoreBuilder.getDerivedStateFromProps = function(nextProps, prevState) {
            if (
              nextProps.specUrl !== prevState.prevSpecUrl ||
              nextProps.spec !== prevState.prevSpec
            ) {
              return {
                loading: true,
                resolvedSpec: null,
                prevSpec: nextProps.spec,
                prevSpecUrl: nextProps.specUrl,
              };
            }
            return null;
          };
          StoreBuilder.prototype.makeStore = function(spec, specUrl, options) {
            if (!spec) {
              return undefined;
            }
            try {
              return new AppStore_AppStore(spec, specUrl, options);
            } catch (e) {
              if (this.props.onLoaded) {
                this.props.onLoaded(e);
              }
              throw e;
            }
          };
          StoreBuilder.prototype.componentDidMount = function() {
            this.load();
          };
          StoreBuilder.prototype.componentDidUpdate = function() {
            if (this.state.resolvedSpec === null) {
              this.load();
            } else if (!this.state.loading && this.props.onLoaded) {
              // may run multiple time
              this.props.onLoaded();
            }
          };
          StoreBuilder.prototype.load = function() {
            return Object(external_tslib_['__awaiter'])(this, void 0, void 0, function() {
              var _a, specUrl, spec, resolvedSpec, e_1;
              return Object(external_tslib_['__generator'])(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    (_a = this.props), (specUrl = _a.specUrl), (spec = _a.spec);
                    _b.label = 1;
                  case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, loadAndBundleSpec(spec || specUrl)];
                  case 2:
                    resolvedSpec = _b.sent();
                    this.setState({
                      resolvedSpec: resolvedSpec,
                      loading: false,
                    });
                    return [3 /*break*/, 4];
                  case 3:
                    e_1 = _b.sent();
                    if (this.props.onLoaded) {
                      this.props.onLoaded(e_1);
                    }
                    this.setState({
                      error: e_1,
                    });
                    return [3 /*break*/, 4];
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          StoreBuilder.prototype.render = function() {
            if (this.state.error) {
              throw this.state.error;
            }
            var _a = this.props,
              specUrl = _a.specUrl,
              options = _a.options;
            var _b = this.state,
              loading = _b.loading,
              resolvedSpec = _b.resolvedSpec;
            return this.props.children({
              loading: loading,
              store: this.makeStore(resolvedSpec, specUrl, options),
            });
          };
          Object(external_tslib_['__decorate'])(
            [memoize_one_cjs],
            StoreBuilder.prototype,
            'makeStore',
            null,
          );
          return StoreBuilder;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/common-elements/linkify.tsx

        var linkifyMixin = function(className) {
          return css(
            linkify_templateObject_1 ||
              (linkify_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
                [
                  '\n  ',
                  ' {\n    cursor: pointer;\n    margin-left: -20px;\n    padding: 0;\n    line-height: 1;\n    width: 20px;\n    display: inline-block;\n  }\n  ',
                  ":before {\n    content: '';\n    width: 15px;\n    height: 15px;\n    background-size: contain;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');\n    opacity: 0.5;\n    visibility: hidden;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  h1:hover > ",
                  '::before, h2:hover > ',
                  '::before, ',
                  ':hover::before {\n    visibility: visible;\n  }\n',
                ],
                [
                  '\n  ',
                  ' {\n    cursor: pointer;\n    margin-left: -20px;\n    padding: 0;\n    line-height: 1;\n    width: 20px;\n    display: inline-block;\n  }\n  ',
                  ":before {\n    content: '';\n    width: 15px;\n    height: 15px;\n    background-size: contain;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');\n    opacity: 0.5;\n    visibility: hidden;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  h1:hover > ",
                  '::before, h2:hover > ',
                  '::before, ',
                  ':hover::before {\n    visibility: visible;\n  }\n',
                ],
              )),
            className,
            className,
            className,
            className,
            className,
          );
        };
        var isModifiedEvent = function(event) {
          return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        };
        var linkify_Link = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Link, _super);
          function Link() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.navigate = function(history, event) {
              if (
                !event.defaultPrevented && // onClick prevented default
                event.button === 0 && // ignore everything but left clicks
                !isModifiedEvent(event) // ignore clicks with modifier keys
              ) {
                event.preventDefault();
                history.replace(_this.props.to);
              }
            };
            return _this;
          }
          Link.prototype.render = function() {
            var _this = this;
            return external_react_['createElement'](Consumer, null, function(store) {
              return external_react_['createElement'](
                'a',
                {
                  className: _this.props.className,
                  href: store.menu.history.linkForId(_this.props.to),
                  onClick: _this.navigate.bind(_this, store.menu.history),
                },
                _this.props.children,
              );
            });
          };
          return Link;
        })(external_react_['Component']);

        var StyledShareLink = styled_components(linkify_Link)(
          linkify_templateObject_2 ||
            (linkify_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  ', ';\n'],
              ['\n  ', ';\n'],
            )),
          linkifyMixin('&'),
        );
        function ShareLink(props) {
          return external_react_['createElement'](StyledShareLink, { to: props.to });
        }
        var linkify_templateObject_1, linkify_templateObject_2;

        // CONCATENATED MODULE: ./src/common-elements/shelfs.tsx

        var directionMap = {
          left: '90deg',
          right: '-90deg',
          up: '-180deg',
          down: '0',
        };
        var shelfs_IntShelfIcon = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(IntShelfIcon, _super);
          function IntShelfIcon() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          IntShelfIcon.prototype.render = function() {
            return external_react_['createElement'](
              'svg',
              {
                className: this.props.className,
                style: this.props.style,
                version: '1.1',
                viewBox: '0 0 24 24',
                x: '0',
                xmlns: 'http://www.w3.org/2000/svg',
                y: '0',
              },
              external_react_['createElement']('polygon', {
                points: '17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 ',
              }),
            );
          };
          return IntShelfIcon;
        })(external_react_['PureComponent']);
        var ShelfIcon = styled_components(shelfs_IntShelfIcon)(
          shelfs_templateObject_1 ||
            (shelfs_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  height: ',
                ';\n  width: ',
                ';\n  vertical-align: middle;\n  float: ',
                ';\n  transition: transform 0.2s ease-out;\n  transform: rotateZ(',
                ');\n\n  polygon {\n    fill: ',
                ';\n  }\n',
              ],
              [
                '\n  height: ',
                ';\n  width: ',
                ';\n  vertical-align: middle;\n  float: ',
                ';\n  transition: transform 0.2s ease-out;\n  transform: rotateZ(',
                ');\n\n  polygon {\n    fill: ',
                ';\n  }\n',
              ],
            )),
          function(props) {
            return props.size || '18px';
          },
          function(props) {
            return props.size || '18px';
          },
          function(props) {
            return props.theme.typography.direction === 'rtl' ? 'right' : props.float || '';
          },
          function(props) {
            return props.theme.typography.direction === 'rtl'
              ? directionMap[props.direction === 'right' ? 'left' : 'down' || false]
              : directionMap[props.direction || 'down'];
          },
          function(props) {
            return (
              (props.color &&
                props.theme.colors[props.color] &&
                props.theme.colors[props.color].main) ||
              props.color
            );
          },
        );
        var Badge = styled_components.span(
          shelfs_templateObject_2 ||
            (shelfs_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  display: inline-block;\n  padding: 0 5px;\n  margin: 0;\n  background-color: ',
                ';\n  color: ',
                ';\n  font-size: ',
                ';\n  vertical-align: text-top;\n',
              ],
              [
                '\n  display: inline-block;\n  padding: 0 5px;\n  margin: 0;\n  background-color: ',
                ';\n  color: ',
                ';\n  font-size: ',
                ';\n  vertical-align: text-top;\n',
              ],
            )),
          function(props) {
            return props.theme.colors[props.type].main;
          },
          function(props) {
            return props.theme.colors[props.type].contrastText;
          },
          function(props) {
            return props.theme.typography.code.fontSize;
          },
        );
        var shelfs_templateObject_1, shelfs_templateObject_2;

        // CONCATENATED MODULE: ./src/common-elements/mixins.ts

        var deprecatedCss = css(
          mixins_templateObject_1 ||
            (mixins_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  text-decoration: line-through;\n  color: #bdccd3;\n'],
              ['\n  text-decoration: line-through;\n  color: #bdccd3;\n'],
            )),
        );
        var mixins_templateObject_1;

        // CONCATENATED MODULE: ./src/common-elements/fields-layout.ts

        // import { transparentize } from 'polished';

        var PropertiesTableCaption = styled_components.caption(
          fields_layout_templateObject_1 ||
            (fields_layout_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  text-align: right;\n  font-size: 0.9em;\n  font-weight: normal;\n  color: ',
                ';\n',
              ],
              [
                '\n  text-align: right;\n  font-size: 0.9em;\n  font-weight: normal;\n  color: ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.colors.text.secondary;
          },
        );
        var PropertyCell = styled_components.td(
          fields_layout_templateObject_2 ||
            (fields_layout_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  border-left: ',
                ' ',
                ';\n  border-right: ',
                ' ',
                ';\n  box-sizing: border-box;\n  position: relative;\n  padding: ',
                '\n\n  tr:first-of-type > &,\n  tr.last > & {\n    border-width: 0;\n    background-position: ',
                ';\n    background-repeat: no-repeat;\n    background-size: 1px 100%;\n  }\n\n  tr:first-of-type > & {\n    background-image: linear-gradient(\n      to bottom,\n      transparent 0%,\n      transparent 22px,\n      ',
                ' 22px,\n      ',
                ' 100%\n    );\n  }\n\n  tr.last > & {\n    background-image: linear-gradient(\n      to bottom,\n      ',
                ' 0%,\n      ',
                ' 22px,\n      transparent 22px,\n      transparent 100%\n    );\n  }\n\n  tr.last + tr > & {\n    border-left-color: transparent;\n  }\n\n  tr.last:first-child > & {\n    background: none;\n    border-left-color: transparent;\n  }\n',
              ],
              [
                '\n  border-left: ',
                ' ',
                ';\n  border-right: ',
                ' ',
                ';\n  box-sizing: border-box;\n  position: relative;\n  padding: ',
                '\n\n  tr:first-of-type > &,\n  tr.last > & {\n    border-width: 0;\n    background-position: ',
                ';\n    background-repeat: no-repeat;\n    background-size: 1px 100%;\n  }\n\n  tr:first-of-type > & {\n    background-image: linear-gradient(\n      to bottom,\n      transparent 0%,\n      transparent 22px,\n      ',
                ' 22px,\n      ',
                ' 100%\n    );\n  }\n\n  tr.last > & {\n    background-image: linear-gradient(\n      to bottom,\n      ',
                ' 0%,\n      ',
                ' 22px,\n      transparent 22px,\n      transparent 100%\n    );\n  }\n\n  tr.last + tr > & {\n    border-left-color: transparent;\n  }\n\n  tr.last:first-child > & {\n    background: none;\n    border-left-color: transparent;\n  }\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 0 : '1px solid ';
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? '1px solid ' : 0;
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? '10px 0 10px 10px' : '10px 10px 10px 0';
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'top right' : 'top left';
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
        );
        var PropertyCellWithInner = styled_components(PropertyCell)(
          fields_layout_templateObject_3 ||
            (fields_layout_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  padding: 0;\n'],
              ['\n  padding: 0;\n'],
            )),
        );
        var PropertyNameCell = styled_components(PropertyCell)(
          fields_layout_templateObject_4 ||
            (fields_layout_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  vertical-align: top;\n  line-height: 20px;\n  white-space: nowrap;\n  font-size: 0.929em;\n  font-family: ',
                ';\n\n  &.deprecated {\n    ',
                ';\n  }\n\n  ',
                ';\n\n  ',
                ';\n',
              ],
              [
                '\n  vertical-align: top;\n  line-height: 20px;\n  white-space: nowrap;\n  font-size: 0.929em;\n  font-family: ',
                ';\n\n  &.deprecated {\n    ',
                ';\n  }\n\n  ',
                ';\n\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          deprecatedCss,
          function(_a) {
            var kind = _a.kind;
            return kind !== 'field' ? 'font-style: italic' : '';
          },
          extensionsHook('PropertyNameCell'),
        );
        var PropertyDetailsCell = styled_components.td(
          fields_layout_templateObject_5 ||
            (fields_layout_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  border-bottom: 1px solid #9fb4be;\n  padding: 10px 0;\n  width: ',
                ';\n  box-sizing: border-box;\n  direction: ltr;\n\n  tr.expanded & {\n    border-bottom: none;\n  }\n',
              ],
              [
                '\n  border-bottom: 1px solid #9fb4be;\n  padding: 10px 0;\n  width: ',
                ';\n  box-sizing: border-box;\n  direction: ltr;\n\n  tr.expanded & {\n    border-bottom: none;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.schema.defaultDetailsWidth;
          },
        );
        var PropertyBullet = styled_components.span(
          fields_layout_templateObject_6 ||
            (fields_layout_templateObject_6 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  color: ',
                ';\n  font-family: ',
                ';\n  margin: ',
                "\n\n  &::before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 10px;\n    height: 1px;\n    background: ",
                ";\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 1px;\n    background: ",
                ';\n    height: 7px;\n  }\n',
              ],
              [
                '\n  color: ',
                ';\n  font-family: ',
                ';\n  margin: ',
                "\n\n  &::before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 10px;\n    height: 1px;\n    background: ",
                ";\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    width: 1px;\n    background: ",
                ';\n    height: 7px;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? '0 0 0 10px ' : '0 10px 0 0';
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
          function(props) {
            return props.theme.schema.linesColor;
          },
        );
        var WrappedShelfIcon = styled_components.i(
          fields_layout_templateObject_7 ||
            (fields_layout_templateObject_7 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  display: inline-block\n'],
              ['\n  display: inline-block\n'],
            )),
        );
        var InnerPropertiesWrap = styled_components.div(
          fields_layout_templateObject_8 ||
            (fields_layout_templateObject_8 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  padding: ', ';\n'],
              ['\n  padding: ', ';\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.schema.nestingSpacing;
          },
        );
        var PropertiesTable = styled_components.table(
          fields_layout_templateObject_9 ||
            (fields_layout_templateObject_9 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  border-collapse: separate;\n  border-radius: 3px;\n  font-size: ',
                ';\n\n  border-spacing: 0;\n  width: 100%;\n\n  > tr {\n    vertical-align: middle;\n  }\n\n  &\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                ' {\n    margin: ',
                ';\n    margin-right: 0;\n    background: ',
                ';\n  }\n\n  &\n    ',
                '\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                ' {\n    background: #ffffff;\n  }\n',
              ],
              [
                '\n  border-collapse: separate;\n  border-radius: 3px;\n  font-size: ',
                ';\n\n  border-spacing: 0;\n  width: 100%;\n\n  > tr {\n    vertical-align: middle;\n  }\n\n  &\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                ' {\n    margin: ',
                ';\n    margin-right: 0;\n    background: ',
                ';\n  }\n\n  &\n    ',
                '\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                ',\n    &\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                '\n    ',
                ' {\n    background: #ffffff;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.typography.fontSize;
          },
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          function(_a) {
            var theme = _a.theme;
            return theme.schema.nestingSpacing;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.schema.nestedBackground;
          },
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
          InnerPropertiesWrap,
        );
        var fields_layout_templateObject_1,
          fields_layout_templateObject_2,
          fields_layout_templateObject_3,
          fields_layout_templateObject_4,
          fields_layout_templateObject_5,
          fields_layout_templateObject_6,
          fields_layout_templateObject_7,
          fields_layout_templateObject_8,
          fields_layout_templateObject_9;

        // CONCATENATED MODULE: ./src/common-elements/schema.ts

        var OneOfList = styled_components.ul(
          schema_templateObject_1 ||
            (schema_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  margin: 0 0 3px 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n',
              ],
              [
                '\n  margin: 0 0 3px 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n',
              ],
            )),
        );
        var OneOfLabel = styled_components.span(
          schema_templateObject_2 ||
            (schema_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-size: 0.9em;\n  margin-right: 10px;\n  color: ',
                ';\n  font-family: ',
                ';\n}\n',
              ],
              [
                '\n  font-size: 0.9em;\n  margin-right: 10px;\n  color: ',
                ';\n  font-family: ',
                ';\n}\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
          function(props) {
            return props.theme.typography.headings.fontFamily;
          },
        );
        var schema_OneOfButton = styled_components.li(
          schema_templateObject_3 ||
            (schema_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  font-size: 0.8em;\n  cursor: pointer;\n  border: 1px solid ',
                ';\n  padding: 2px 10px;\n\n  ',
                '\n',
              ],
              [
                '\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  font-size: 0.8em;\n  cursor: pointer;\n  border: 1px solid ',
                ';\n  padding: 2px 10px;\n\n  ',
                '\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
          function(props) {
            if (props.active) {
              return (
                '\n      color: white;\n      background-color: ' +
                props.theme.colors.primary.main +
                ';\n      '
              );
            } else {
              return (
                '\n        color: ' +
                props.theme.colors.primary.main +
                ';\n        background-color: white;\n      '
              );
            }
          },
        );
        var ArrayOpenningLabel = styled_components.div(
          schema_templateObject_4 ||
            (schema_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-size: 0.9em;\n  font-family: ',
                ";\n  &::after {\n    content: ' [';\n  }\n",
              ],
              [
                '\n  font-size: 0.9em;\n  font-family: ',
                ";\n  &::after {\n    content: ' [';\n  }\n",
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
        );
        var ArrayClosingLabel = styled_components.div(
          schema_templateObject_5 ||
            (schema_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-size: 0.9em;\n  font-family: ',
                ";\n  &::after {\n    content: ']';\n  }\n",
              ],
              [
                '\n  font-size: 0.9em;\n  font-family: ',
                ";\n  &::after {\n    content: ']';\n  }\n",
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
        );
        var schema_templateObject_1,
          schema_templateObject_2,
          schema_templateObject_3,
          schema_templateObject_4,
          schema_templateObject_5;

        // EXTERNAL MODULE: external "react-dropdown"
        var external_react_dropdown_ = __webpack_require__(39);
        var external_react_dropdown_default = /*#__PURE__*/ __webpack_require__.n(
          external_react_dropdown_,
        );

        // CONCATENATED MODULE: ./src/common-elements/dropdown.ts

        var StyledDropdown = styled_components(external_react_dropdown_default.a)(
          dropdown_templateObject_1 ||
            (dropdown_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  min-width: 100px;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-family: ',
                ';\n\n  .Dropdown-control {\n    font-family: ',
                ';\n    position: relative;\n    font-size: 0.929em;\n    width: 100%;\n    line-height: 1.5em;\n    vertical-align: middle;\n    cursor: pointer;\n    border-color: rgba(38, 50, 56, 0.5);\n    color: #263238;\n    outline: none;\n    padding: 0.15em 1.5em 0.2em 0.5em;\n    border-radius: 2px;\n    border-width: 1px;\n    border-style: solid;\n    margin-top: 5px;\n    background: white;\n\n    box-sizing: border-box;\n\n    &:hover {\n      border-color: ',
                ';\n      color: ',
                ';\n      box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12);\n    }\n  }\n\n  .Dropdown-arrow {\n    border-color: ',
                " transparent transparent;\n    border-style: solid;\n    border-width: 0.35em 0.35em 0;\n    content: ' ';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0.3em;\n    top: 50%;\n    margin-top: -0.125em;\n    width: 0;\n  }\n\n  .Dropdown-menu {\n    position: absolute;\n    margin-top: 2px;\n    left: 0;\n    right: 0;\n\n    z-index: 10;\n    min-width: 100px;\n\n    background: white;\n    border: 1px solid rgba(38, 50, 56, 0.2);\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);\n\n    max-height: 220px;\n    overflow: auto;\n  }\n\n  .Dropdown-option {\n    font-size: 0.9em;\n    color: #263238;\n    cursor: pointer;\n    padding: 0.4em;\n\n    &.is-selected {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n\n    &:hover {\n      background-color: rgba(38, 50, 56, 0.12);\n    }\n  }\n",
              ],
              [
                '\n  min-width: 100px;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-family: ',
                ';\n\n  .Dropdown-control {\n    font-family: ',
                ';\n    position: relative;\n    font-size: 0.929em;\n    width: 100%;\n    line-height: 1.5em;\n    vertical-align: middle;\n    cursor: pointer;\n    border-color: rgba(38, 50, 56, 0.5);\n    color: #263238;\n    outline: none;\n    padding: 0.15em 1.5em 0.2em 0.5em;\n    border-radius: 2px;\n    border-width: 1px;\n    border-style: solid;\n    margin-top: 5px;\n    background: white;\n\n    box-sizing: border-box;\n\n    &:hover {\n      border-color: ',
                ';\n      color: ',
                ';\n      box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12);\n    }\n  }\n\n  .Dropdown-arrow {\n    border-color: ',
                " transparent transparent;\n    border-style: solid;\n    border-width: 0.35em 0.35em 0;\n    content: ' ';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0.3em;\n    top: 50%;\n    margin-top: -0.125em;\n    width: 0;\n  }\n\n  .Dropdown-menu {\n    position: absolute;\n    margin-top: 2px;\n    left: 0;\n    right: 0;\n\n    z-index: 10;\n    min-width: 100px;\n\n    background: white;\n    border: 1px solid rgba(38, 50, 56, 0.2);\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);\n\n    max-height: 220px;\n    overflow: auto;\n  }\n\n  .Dropdown-option {\n    font-size: 0.9em;\n    color: #263238;\n    cursor: pointer;\n    padding: 0.4em;\n\n    &.is-selected {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n\n    &:hover {\n      background-color: rgba(38, 50, 56, 0.12);\n    }\n  }\n",
              ],
            )),
          function(props) {
            return props.theme.typography.headings.fontFamily;
          },
          function(props) {
            return props.theme.typography.headings.fontFamily;
          },
          function(props) {
            return props.theme.colors.primary.main;
          },
          function(props) {
            return props.theme.colors.primary.main;
          },
          function(props) {
            return props.theme.colors.primary.main;
          },
        );
        var SimpleDropdown = styled_components(StyledDropdown)(
          dropdown_templateObject_2 ||
            (dropdown_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.969em;\n\n  .Dropdown-control {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n\n    &:hover {\n      color: ',
                ';\n      box-shadow: none;\n    }\n  }\n',
              ],
              [
                '\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.969em;\n\n  .Dropdown-control {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n\n    &:hover {\n      color: ',
                ';\n      box-shadow: none;\n    }\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
        );
        var MimeLabel = styled_components.span(
          dropdown_templateObject_3 ||
            (dropdown_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  color: black;\n',
              ],
              [
                '\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  color: black;\n',
              ],
            )),
        );
        var dropdown_templateObject_1, dropdown_templateObject_2, dropdown_templateObject_3;

        // EXTERNAL MODULE: external "react-tabs"
        var external_react_tabs_ = __webpack_require__(8);

        // CONCATENATED MODULE: ./src/common-elements/tabs.ts

        var Tabs = styled_components(external_react_tabs_['Tabs'])(
          tabs_templateObject_1 ||
            (tabs_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  > ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    margin: 0 -5px;\n\n    > li {\n      padding: 5px 10px;\n      display: inline-block;\n\n      background-color: ',
                ';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n      cursor: pointer;\n      text-align: center;\n      outline: none;\n      color: ',
                ';\n      margin: 0\n        ',
                ';\n      border: 1px solid ',
                ';\n      border-radius: 5px;\n      min-width: 60px;\n      font-size: 0.9em;\n      font-weight: bold;\n\n      &.react-tabs__tab--selected {\n        color: ',
                ';\n        background: ',
                ';\n      }\n\n      &:only-child {\n        flex: none;\n        min-width: 100px;\n      }\n\n      &.tab-success {\n        color: ',
                ';\n      }\n\n      &.tab-redirect {\n        color: ',
                ';\n      }\n\n      &.tab-info {\n        color: ',
                ';\n      }\n\n      &.tab-error {\n        color: ',
                ';\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    background: ',
                ';\n    & > div,\n    & > pre {\n      padding: ',
                'px;\n      margin: 0;\n    }\n\n    & > div > pre {\n      padding: 0;\n      direction: ltr;\n    }\n  }\n',
              ],
              [
                '\n  > ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    margin: 0 -5px;\n\n    > li {\n      padding: 5px 10px;\n      display: inline-block;\n\n      background-color: ',
                ';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n      cursor: pointer;\n      text-align: center;\n      outline: none;\n      color: ',
                ';\n      margin: 0\n        ',
                ';\n      border: 1px solid ',
                ';\n      border-radius: 5px;\n      min-width: 60px;\n      font-size: 0.9em;\n      font-weight: bold;\n\n      &.react-tabs__tab--selected {\n        color: ',
                ';\n        background: ',
                ';\n      }\n\n      &:only-child {\n        flex: none;\n        min-width: 100px;\n      }\n\n      &.tab-success {\n        color: ',
                ';\n      }\n\n      &.tab-redirect {\n        color: ',
                ';\n      }\n\n      &.tab-info {\n        color: ',
                ';\n      }\n\n      &.tab-error {\n        color: ',
                ';\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    background: ',
                ';\n    & > div,\n    & > pre {\n      padding: ',
                'px;\n      margin: 0;\n    }\n\n    & > div > pre {\n      padding: 0;\n      direction: ltr;\n    }\n  }\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.codeSample.backgroundColor;
          },
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(
              theme.colors.tonalOffset,
              theme.rightPanel.textColor,
            );
          },
          function(_a) {
            var theme = _a.theme;
            return (
              theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit + 'px'
            );
          },
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(0.05, theme.codeSample.backgroundColor);
          },
          function(props) {
            return props.theme.colors.text.primary;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.textColor;
          },
          function(props) {
            return props.theme.colors.responses.success.color;
          },
          function(props) {
            return props.theme.colors.responses.redirect.color;
          },
          function(props) {
            return props.theme.colors.responses.info.color;
          },
          function(props) {
            return props.theme.colors.responses.error.color;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.codeSample.backgroundColor;
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
        );
        var SmallTabs = styled_components(Tabs)(
          tabs_templateObject_2 ||
            (tabs_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  > ul {\n    display: block;\n    > li {\n      padding: 2px 5px;\n      min-width: auto;\n      margin: 0 15px 0 0;\n      font-size: 13px;\n      font-weight: normal;\n      border-bottom: 1px dashed;\n      color: ',
                ';\n      border-radius: 0;\n      background: none;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.react-tabs__tab--selected {\n        color: ',
                ';\n        background: none;\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    & > div,\n    & > pre {\n      padding: ',
                'px 0;\n    }\n  }\n',
              ],
              [
                '\n  > ul {\n    display: block;\n    > li {\n      padding: 2px 5px;\n      min-width: auto;\n      margin: 0 15px 0 0;\n      font-size: 13px;\n      font-weight: normal;\n      border-bottom: 1px dashed;\n      color: ',
                ';\n      border-radius: 0;\n      background: none;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.react-tabs__tab--selected {\n        color: ',
                ';\n        background: none;\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    & > div,\n    & > pre {\n      padding: ',
                'px 0;\n    }\n  }\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(
              theme.colors.tonalOffset,
              theme.rightPanel.textColor,
            );
          },
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.textColor;
          },
          function(props) {
            return props.theme.spacing.unit * 2;
          },
        );
        var tabs_templateObject_1, tabs_templateObject_2;

        // CONCATENATED MODULE: ./src/common-elements/PrismDiv.tsx

        var PrismDiv = styled_components.div(
          PrismDiv_templateObject_1 ||
            (PrismDiv_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                "\n  /**\n  * Based on prism-dark.css\n  */\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    /* color: white;\n    background: none; */\n    text-shadow: 0 -0.1em 0.2em black;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  @media print {\n    code[class*='language-'],\n    pre[class*='language-'] {\n      text-shadow: none;\n    }\n  }\n\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n\n  .token.punctuation {\n    opacity: 0.7;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.number,\n  .token.constant,\n  .token.symbol {\n    color: #4a8bb3;\n  }\n\n  .token.boolean {\n    color: firebrick;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #a0fbaa;\n    & + a,\n    & + a:visited {\n      color: #4ed2ba;\n      text-decoration: underline;\n    }\n  }\n\n  /* .property.token.string {\n    color: white;\n  } */\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable {\n    color: hsl(40, 90%, 60%);\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: hsl(350, 40%, 70%);\n  }\n\n  .token.regex,\n  .token.important {\n    color: #e90;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .token.deleted {\n    color: red;\n  }\n\n  ",
                ';\n',
              ],
              [
                "\n  /**\n  * Based on prism-dark.css\n  */\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    /* color: white;\n    background: none; */\n    text-shadow: 0 -0.1em 0.2em black;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  @media print {\n    code[class*='language-'],\n    pre[class*='language-'] {\n      text-shadow: none;\n    }\n  }\n\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n\n  .token.punctuation {\n    opacity: 0.7;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.number,\n  .token.constant,\n  .token.symbol {\n    color: #4a8bb3;\n  }\n\n  .token.boolean {\n    color: firebrick;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #a0fbaa;\n    & + a,\n    & + a:visited {\n      color: #4ed2ba;\n      text-decoration: underline;\n    }\n  }\n\n  /* .property.token.string {\n    color: white;\n  } */\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable {\n    color: hsl(40, 90%, 60%);\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: hsl(350, 40%, 70%);\n  }\n\n  .token.regex,\n  .token.important {\n    color: #e90;\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .token.deleted {\n    color: red;\n  }\n\n  ",
                ';\n',
              ],
            )),
          extensionsHook('Prism'),
        );
        var PrismDiv_templateObject_1;

        // CONCATENATED MODULE: ./src/common-elements/samples.tsx

        var SampleControls = styled_components.div(
          samples_templateObject_1 ||
            (samples_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n  text-align: right;\n\n  > span {\n    display: inline-block;\n    padding: 2px 10px;\n    cursor: pointer;\n\n    :hover {\n      background: rgba(255, 255, 255, 0.1);\n    }\n  }\n',
              ],
              [
                '\n  opacity: 0.4;\n  transition: opacity 0.3s ease;\n  text-align: right;\n\n  > span {\n    display: inline-block;\n    padding: 2px 10px;\n    cursor: pointer;\n\n    :hover {\n      background: rgba(255, 255, 255, 0.1);\n    }\n  }\n',
              ],
            )),
        );
        var SampleControlsWrap = styled_components.div(
          samples_templateObject_2 ||
            (samples_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  &:hover ', ' {\n    opacity: 1;\n  }\n'],
              ['\n  &:hover ', ' {\n    opacity: 1;\n  }\n'],
            )),
          SampleControls,
        );
        var StyledPre = styled_components(PrismDiv.withComponent('pre'))(
          samples_templateObject_3 ||
            (samples_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-family: ',
                ';\n  font-size: ',
                ';\n  overflow-x: auto;\n  margin: 0;\n\n  white-space: ',
                ';\n',
              ],
              [
                '\n  font-family: ',
                ';\n  font-size: ',
                ';\n  overflow-x: auto;\n  margin: 0;\n\n  white-space: ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.wrap ? 'pre-wrap' : 'pre';
          },
        );
        var samples_templateObject_1, samples_templateObject_2, samples_templateObject_3;

        // EXTERNAL MODULE: external "perfect-scrollbar"
        var external_perfect_scrollbar_ = __webpack_require__(24);
        var external_perfect_scrollbar_default = /*#__PURE__*/ __webpack_require__.n(
          external_perfect_scrollbar_,
        );

        // EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css
        var perfect_scrollbar = __webpack_require__(25);
        var perfect_scrollbar_default = /*#__PURE__*/ __webpack_require__.n(perfect_scrollbar);

        // CONCATENATED MODULE: ./src/common-elements/perfect-scrollbar.tsx

        /*
         * perfect scrollbar umd bundle uses exports assignment while module uses default export
         * so when bundled with webpack default export works but with jest it crashes
         * That's why the following ugly fix is required
         */
        var PerfectScrollbarConstructor =
          external_perfect_scrollbar_default.a || external_perfect_scrollbar_;
        var PSStyling = createGlobalStyle(
          perfect_scrollbar_templateObject_1 ||
            (perfect_scrollbar_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['', ''],
              ['', ''],
            )),
          perfect_scrollbar_default.a && perfect_scrollbar_default.a.toString(),
        );
        var StyledScrollWrapper = styled_components.div(
          perfect_scrollbar_templateObject_2 ||
            (perfect_scrollbar_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  position: relative;\n'],
              ['\n  position: relative;\n'],
            )),
        );
        var perfect_scrollbar_PerfectScrollbar = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(PerfectScrollbar, _super);
          function PerfectScrollbar() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.handleRef = function(ref) {
              _this._container = ref;
            };
            return _this;
          }
          PerfectScrollbar.prototype.componentDidMount = function() {
            var offset =
              (this._container.parentElement && this._container.parentElement.scrollTop) || 0;
            this.inst = new PerfectScrollbarConstructor(this._container, this.props.options || {});
            if (this._container.scrollTo) {
              this._container.scrollTo(0, offset);
            }
          };
          PerfectScrollbar.prototype.componentDidUpdate = function() {
            this.inst.update();
          };
          PerfectScrollbar.prototype.componentWillUnmount = function() {
            this.inst.destroy();
          };
          PerfectScrollbar.prototype.render = function() {
            var _a = this.props,
              children = _a.children,
              className = _a.className,
              updateFn = _a.updateFn;
            if (updateFn) {
              updateFn(this.componentDidUpdate.bind(this));
            }
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](PSStyling, null),
              external_react_['createElement'](
                StyledScrollWrapper,
                { className: 'scrollbar-container ' + className, ref: this.handleRef },
                children,
              ),
            );
          };
          return PerfectScrollbar;
        })(external_react_['Component']);

        function PerfectScrollbarWrap(props) {
          return external_react_['createElement'](OptionsContext.Consumer, null, function(options) {
            return !options.nativeScrollbars
              ? external_react_['createElement'](
                  perfect_scrollbar_PerfectScrollbar,
                  Object(external_tslib_['__assign'])({}, props),
                  props.children,
                )
              : external_react_['createElement'](
                  'div',
                  {
                    style: {
                      overflow: 'auto',
                      msOverflowStyle: '-ms-autohiding-scrollbar',
                    },
                  },
                  props.children,
                );
          });
        }
        var perfect_scrollbar_templateObject_1, perfect_scrollbar_templateObject_2;

        // CONCATENATED MODULE: ./src/common-elements/toggle.tsx

        var Toggle = styled_components.input(
          toggle_templateObject_1 ||
            (toggle_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  padding: 0.5em;\n  margin: 0.5em;\n  color: palevioletred;\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n',
              ],
              [
                '\n  padding: 0.5em;\n  margin: 0.5em;\n  color: palevioletred;\n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n',
              ],
            )),
        );
        var toggle_templateObject_1;

        // CONCATENATED MODULE: ./src/common-elements/input.tsx

        var TextField = styled_components.input(
          input_templateObject_1 ||
            (input_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  padding: 0.5em;\n  margin: 0.5em;\n  border: 1px solid rgba(38,50,56,0.5);\n  border-radius: 3px;\n',
              ],
              [
                '\n  padding: 0.5em;\n  margin: 0.5em;\n  border: 1px solid rgba(38,50,56,0.5);\n  border-radius: 3px;\n',
              ],
            )),
        );
        var input_templateObject_1;

        // CONCATENATED MODULE: ./src/common-elements/buttons.ts

        var Button = styled_components.button(
          buttons_templateObject_1 ||
            (buttons_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  background: #248fb2;\n  border-radius: 0px;\n  border: none;\n  color: white;\n  font-size: 0.929em;\n  padding: 5px;\n',
              ],
              [
                '\n  background: #248fb2;\n  border-radius: 0px;\n  border: none;\n  color: white;\n  font-size: 0.929em;\n  padding: 5px;\n',
              ],
            )),
        );
        var SubmitButton = styled_components(Button)(
          buttons_templateObject_2 ||
            (buttons_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  background: ',
                '\n  padding: 10px 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  margin: 1em 0;\n  min-width: 60px;\n  font-weight: bold;\n  order: 1;\n',
              ],
              [
                '\n  background: ',
                '\n  padding: 10px 30px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  margin: 1em 0;\n  min-width: 60px;\n  font-weight: bold;\n  order: 1;\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
        );
        var buttons_templateObject_1, buttons_templateObject_2;

        // CONCATENATED MODULE: ./src/common-elements/index.ts

        // CONCATENATED MODULE: ./src/components/DropdownOrLabel/DropdownOrLabel.tsx

        function DropdownOrLabel(props) {
          var _a = props.Label,
            Label = _a === void 0 ? MimeLabel : _a,
            _b = props.Dropdown,
            Dropdown = _b === void 0 ? SimpleDropdown : _b;
          if (props.options.length === 1) {
            return external_react_['createElement'](Label, null, props.options[0].label);
          }
          return external_react_['createElement'](
            Dropdown,
            Object(external_tslib_['__assign'])({}, props),
          );
        }

        // EXTERNAL MODULE: external "dompurify"
        var external_dompurify_ = __webpack_require__(40);

        // CONCATENATED MODULE: ./src/components/Markdown/styled.elements.tsx

        var linksCss = css(
          styled_elements_templateObject_1 ||
            (styled_elements_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  a {\n    text-decoration: none;\n    color: ',
                ';\n\n    &:visited {\n      color: ',
                ';\n    }\n\n    &:hover {\n      color: ',
                ';\n    }\n  }\n',
              ],
              [
                '\n  a {\n    text-decoration: none;\n    color: ',
                ';\n\n    &:visited {\n      color: ',
                ';\n    }\n\n    &:hover {\n      color: ',
                ';\n    }\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.typography.links.color;
          },
          function(props) {
            return props.theme.typography.links.visited;
          },
          function(props) {
            return props.theme.typography.links.hover;
          },
        );
        var StyledMarkdownBlock = styled_components(PrismDiv)(
          styled_elements_templateObject_2 ||
            (styled_elements_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n\n  font-family: ',
                ';\n  font-weight: ',
                ';\n  line-height: ',
                ';\n\n  p {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  ',
                '\n\n  ',
                '\n\n  h1 {\n    ',
                ';\n    color: ',
                ';\n    margin-top: 0;\n  }\n\n  h2 {\n    ',
                ';\n    color: ',
                ';\n  }\n\n  code {\n    color: ',
                ';\n    background-color: ',
                ';\n\n    font-family: ',
                ';\n    border-radius: 2px;\n    border: 1px solid rgba(38, 50, 56, 0.1);\n    padding: 0 ',
                'px;\n    font-size: ',
                ';\n    font-weight: ',
                ';\n\n    word-break: break-word;\n  }\n\n  pre {\n    font-family: ',
                ';\n    white-space:',
                ';\n    background-color: #263238;\n    color: white;\n    padding: ',
                'px;\n    overflow-x: auto;\n    line-height: normal;\n    border-radius: 0px\n    border: 1px solid rgba(38, 50, 56, 0.1);\n\n    code {\n      background-color: transparent;\n      color: white;\n      padding: 0;\n\n      &:before,\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    margin-bottom: 1em;\n    padding: 0 15px;\n    color: #777;\n    border-left: 4px solid #ddd;\n  }\n\n  img {\n    max-width: 100%;\n    box-sizing: content-box;\n  }\n\n  ul,\n  ol {\n    padding-left: 2em;\n    margin: 0;\n    margin-bottom: 1em;\n\n    ul, ol {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc;\n\n    &:nth-child(2n) {\n      background-color: ',
                ';\n    }\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd;\n  }\n\n  table th {\n    text-align: left;\n    font-weight: bold;\n  }\n\n  ',
                ';\n\n  ',
                '\n\n  ',
                ';\n',
              ],
              [
                '\n\n  font-family: ',
                ';\n  font-weight: ',
                ';\n  line-height: ',
                ';\n\n  p {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  ',
                '\n\n  ',
                '\n\n  h1 {\n    ',
                ';\n    color: ',
                ';\n    margin-top: 0;\n  }\n\n  h2 {\n    ',
                ';\n    color: ',
                ';\n  }\n\n  code {\n    color: ',
                ';\n    background-color: ',
                ';\n\n    font-family: ',
                ';\n    border-radius: 2px;\n    border: 1px solid rgba(38, 50, 56, 0.1);\n    padding: 0 ',
                'px;\n    font-size: ',
                ';\n    font-weight: ',
                ';\n\n    word-break: break-word;\n  }\n\n  pre {\n    font-family: ',
                ';\n    white-space:',
                ';\n    background-color: #263238;\n    color: white;\n    padding: ',
                'px;\n    overflow-x: auto;\n    line-height: normal;\n    border-radius: 0px\n    border: 1px solid rgba(38, 50, 56, 0.1);\n\n    code {\n      background-color: transparent;\n      color: white;\n      padding: 0;\n\n      &:before,\n      &:after {\n        content: none;\n      }\n    }\n  }\n\n  blockquote {\n    margin: 0;\n    margin-bottom: 1em;\n    padding: 0 15px;\n    color: #777;\n    border-left: 4px solid #ddd;\n  }\n\n  img {\n    max-width: 100%;\n    box-sizing: content-box;\n  }\n\n  ul,\n  ol {\n    padding-left: 2em;\n    margin: 0;\n    margin-bottom: 1em;\n\n    ul, ol {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n  }\n\n  table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #ccc;\n\n    &:nth-child(2n) {\n      background-color: ',
                ';\n    }\n  }\n\n  table th,\n  table td {\n    padding: 6px 13px;\n    border: 1px solid #ddd;\n  }\n\n  table th {\n    text-align: left;\n    font-weight: bold;\n  }\n\n  ',
                ';\n\n  ',
                '\n\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.typography.fontFamily;
          },
          function(props) {
            return props.theme.typography.fontWeightRegular;
          },
          function(props) {
            return props.theme.typography.lineHeight;
          },
          function(_a) {
            var compact = _a.compact;
            return (
              compact &&
              '\n    p:first-child {\n      margin-top: 0;\n    }\n    p:last-child {\n      margin-bottom: 0;\n    }\n  '
            );
          },
          function(_a) {
            var inline = _a.inline;
            return inline && ' p {\n    display: inline-block;\n  }';
          },
          headerCommonMixin(1),
          function(props) {
            return props.theme.colors.primary.main;
          },
          headerCommonMixin(2),
          function(props) {
            return props.theme.colors.text.primary;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.color;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.backgroundColor;
          },
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.spacing.unit;
          },
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.fontWeight;
          },
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.wrap ? 'pre-wrap' : 'pre';
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.schema.nestedBackground;
          },
          linkifyMixin('.share-link'),
          linksCss,
          extensionsHook('Markdown'),
        );
        var styled_elements_templateObject_1, styled_elements_templateObject_2;

        // CONCATENATED MODULE: ./src/components/Markdown/SanitizedMdBlock.tsx

        var StyledMarkdownSpan = StyledMarkdownBlock.withComponent('span');
        var sanitize = function(untrustedSpec, html) {
          return untrustedSpec ? external_dompurify_['sanitize'](html) : html;
        };
        function SanitizedMarkdownHTML(props) {
          var Wrap = props.inline ? StyledMarkdownSpan : StyledMarkdownBlock;
          return external_react_['createElement'](OptionsConsumer, null, function(options) {
            return external_react_['createElement'](
              Wrap,
              Object(external_tslib_['__assign'])(
                {
                  className: 'redoc-markdown ' + (props.className || ''),
                  dangerouslySetInnerHTML: {
                    __html: sanitize(options.untrustedSpec, props.html),
                  },
                },
                props,
              ),
            );
          });
        }

        // CONCATENATED MODULE: ./src/components/Markdown/Markdown.tsx

        var Markdown_Markdown = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Markdown, _super);
          function Markdown() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.handleClick = function() {
              _this.props.onSelectUrl();
            };
            return _this;
          }
          Markdown.prototype.render = function() {
            var _a = this.props,
              source = _a.source,
              inline = _a.inline,
              compact = _a.compact,
              className = _a.className;
            var renderer = new MarkdownRenderer_MarkdownRenderer();
            return external_react_['createElement'](
              MarkWrapper,
              { onClick: this.handleClick },
              external_react_['createElement'](SanitizedMarkdownHTML, {
                html: renderer.renderMd(source),
                inline: inline,
                compact: compact,
                className: className,
              }),
            );
          };
          return Markdown;
        })(external_react_['Component']);

        var MarkWrapper = styled_components.div(
          Markdown_templateObject_1 ||
            (Markdown_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  div {\n    width: 100% !important;\n    padding-top: 0 !important;\n  }\n'],
              ['\n  div {\n    width: 100% !important;\n    padding-top: 0 !important;\n  }\n'],
            )),
        );
        var Markdown_templateObject_1;

        // CONCATENATED MODULE: ./src/common-elements/Tooltip.tsx

        var Tooltip_Wrapper = styled_components.div(
          Tooltip_templateObject_1 ||
            (Tooltip_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  position: relative;\n'],
              ['\n  position: relative;\n'],
            )),
        );
        var Tip = styled_components.div(
          Tooltip_templateObject_2 ||
            (Tooltip_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  position: absolute;\n  min-width: 80px;\n  max-width: 500px;\n  background: #fff;\n  bottom: 100%;\n  left: 50%;\n  margin-bottom: 10px;\n  transform: translateX(-50%);\n\n  border-radius: 4px;\n  padding: 0.3em 0.6em;\n  text-align: center;\n  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);\n',
              ],
              [
                '\n  position: absolute;\n  min-width: 80px;\n  max-width: 500px;\n  background: #fff;\n  bottom: 100%;\n  left: 50%;\n  margin-bottom: 10px;\n  transform: translateX(-50%);\n\n  border-radius: 4px;\n  padding: 0.3em 0.6em;\n  text-align: center;\n  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);\n',
              ],
            )),
        );
        var Content = styled_components.div(
          Tooltip_templateObject_3 ||
            (Tooltip_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  background: #fff;\n  color: #000;\n  display: inline;\n  font-size: 0.85em;\n  white-space: nowrap;\n',
              ],
              [
                '\n  background: #fff;\n  color: #000;\n  display: inline;\n  font-size: 0.85em;\n  white-space: nowrap;\n',
              ],
            )),
        );
        var Arrow = styled_components.div(
          Tooltip_templateObject_4 ||
            (Tooltip_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -5px;\n  left: 50%;\n  margin-left: -5px;\n  border-left: solid transparent 5px;\n  border-right: solid transparent 5px;\n  border-top: solid #fff 5px;\n',
              ],
              [
                '\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: -5px;\n  left: 50%;\n  margin-left: -5px;\n  border-left: solid transparent 5px;\n  border-right: solid transparent 5px;\n  border-top: solid #fff 5px;\n',
              ],
            )),
        );
        var Gap = styled_components.div(
          Tooltip_templateObject_5 ||
            (Tooltip_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  position: absolute;\n  width: 100%;\n  height: 20px;\n  bottom: -20px;\n'],
              ['\n  position: absolute;\n  width: 100%;\n  height: 20px;\n  bottom: -20px;\n'],
            )),
        );
        var Tooltip_Tooltip = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Tooltip, _super);
          function Tooltip() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Tooltip.prototype.render = function() {
            var _a = this.props,
              open = _a.open,
              title = _a.title,
              children = _a.children;
            return external_react_['createElement'](
              Tooltip_Wrapper,
              null,
              children,
              open &&
                external_react_['createElement'](
                  Tip,
                  null,
                  external_react_['createElement'](Content, null, title),
                  external_react_['createElement'](Arrow, null),
                  external_react_['createElement'](Gap, null),
                ),
            );
          };
          return Tooltip;
        })(external_react_['Component']);

        var Tooltip_templateObject_1,
          Tooltip_templateObject_2,
          Tooltip_templateObject_3,
          Tooltip_templateObject_4,
          Tooltip_templateObject_5;

        // CONCATENATED MODULE: ./src/services/ClipboardService.ts
        var isSupported =
          typeof document !== 'undefined' &&
          document.queryCommandSupported &&
          document.queryCommandSupported('copy');
        var ClipboardService = /** @class */ (function() {
          function ClipboardService() {}
          ClipboardService.isSupported = function() {
            return isSupported;
          };
          ClipboardService.selectElement = function(element) {
            var range;
            var selection;
            if (document.body.createTextRange) {
              range = document.body.createTextRange();
              range.moveToElementText(element);
              range.select();
            } else if (document.createRange && window.getSelection) {
              selection = window.getSelection();
              range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
            }
          };
          ClipboardService.deselect = function() {
            if (document.selection) {
              document.selection.empty();
            } else if (window.getSelection) {
              var selection = window.getSelection();
              if (selection) {
                selection.removeAllRanges();
              }
            }
          };
          ClipboardService.copySelected = function() {
            var result;
            try {
              result = document.execCommand('copy');
            } catch (err) {
              result = false;
            }
            return result;
          };
          ClipboardService.copyElement = function(element) {
            ClipboardService.selectElement(element);
            var res = ClipboardService.copySelected();
            if (res) {
              ClipboardService.deselect();
            }
            return res;
          };
          ClipboardService.copyCustom = function(text) {
            var textArea = document.createElement('textarea');
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0'; // Ensure it has a small width and height. Setting to 1px / 1em
            // doesn't work as this gives a negative w/h on some browsers.
            textArea.style.width = '2em';
            textArea.style.height = '2em'; // We don't need padding, reducing the size if it does flash render.
            textArea.style.padding = '0'; // Clean up any borders.
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none'; // Avoid flash of white box if rendered for any reason.
            textArea.style.background = 'transparent';
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            var res = ClipboardService.copySelected();
            document.body.removeChild(textArea);
            return res;
          };
          return ClipboardService;
        })();

        // CONCATENATED MODULE: ./src/common-elements/CopyButtonWrapper.tsx

        var CopyButtonWrapper_CopyButtonWrapper = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(CopyButtonWrapper, _super);
          function CopyButtonWrapper(props) {
            var _this = _super.call(this, props) || this;
            _this.copy = function() {
              var content =
                typeof _this.props.data === 'string'
                  ? _this.props.data
                  : JSON.stringify(_this.props.data, null, 2);
              ClipboardService.copyCustom(content);
              _this.showTooltip();
            };
            _this.renderCopyButton = function() {
              return external_react_['createElement'](
                'span',
                { onClick: _this.copy },
                external_react_['createElement'](
                  Tooltip_Tooltip,
                  {
                    title: ClipboardService.isSupported()
                      ? 'Copied'
                      : 'Not supported in your browser',
                    open: _this.state.tooltipShown,
                  },
                  'Copy',
                ),
              );
            };
            _this.state = {
              tooltipShown: false,
            };
            return _this;
          }
          CopyButtonWrapper.prototype.render = function() {
            return this.props.children({
              renderCopyButton: this.renderCopyButton,
            });
          };
          CopyButtonWrapper.prototype.showTooltip = function() {
            var _this = this;
            this.setState({
              tooltipShown: true,
            });
            setTimeout(function() {
              _this.setState({
                tooltipShown: false,
              });
            }, 1500);
          };
          return CopyButtonWrapper;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/utils/jsonToHtml.ts
        var jsonToHtml_level = 1;
        function jsonToHTML(json, maxExpandLevel) {
          jsonToHtml_level = 1;
          var output = '';
          output += '<div class="redoc-json">';
          output += '<code>';
          output += valueToHTML(json, maxExpandLevel);
          output += '</code>';
          output += '</div>';
          return output;
        }
        function htmlEncode(t) {
          return t !== undefined
            ? t
                .toString()
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
            : '';
        }
        function stringifyStringLiteral(str) {
          return JSON.stringify(str).slice(1, -1);
        }
        function decorateWithSpan(value, className) {
          return '<span class="' + className + '">' + htmlEncode(value) + '</span>';
        }
        function punctuation(val) {
          return '<span class="token punctuation">' + val + '</span>';
        }
        function valueToHTML(value, maxExpandLevel) {
          var valueType = typeof value;
          var output = '';
          if (value === undefined || value === null) {
            output += decorateWithSpan('null', 'token keyword');
          } else if (value && value.constructor === Array) {
            jsonToHtml_level++;
            output += arrayToHTML(value, maxExpandLevel);
            jsonToHtml_level--;
          } else if (value && value.constructor === Date) {
            output += decorateWithSpan('"' + value.toISOString() + '"', 'token string');
          } else if (valueType === 'object') {
            jsonToHtml_level++;
            output += objectToHTML(value, maxExpandLevel);
            jsonToHtml_level--;
          } else if (valueType === 'number') {
            output += decorateWithSpan(value, 'token number');
          } else if (valueType === 'string') {
            if (/^(http|https):\/\/[^\s]+$/.test(value)) {
              output +=
                decorateWithSpan('"', 'token string') +
                '<a href="' +
                value +
                '">' +
                htmlEncode(stringifyStringLiteral(value)) +
                '</a>' +
                decorateWithSpan('"', 'token string');
            } else {
              output += decorateWithSpan('"' + stringifyStringLiteral(value) + '"', 'token string');
            }
          } else if (valueType === 'boolean') {
            output += decorateWithSpan(value, 'token boolean');
          }
          return output;
        }
        function arrayToHTML(json, maxExpandLevel) {
          var collapsed = jsonToHtml_level > maxExpandLevel ? 'collapsed' : '';
          var output =
            '<div class="collapser"></div>' +
            punctuation('[') +
            '<span class="ellipsis"></span><ul class="array collapsible">';
          var hasContents = false;
          var length = json.length;
          for (var i = 0; i < length; i++) {
            hasContents = true;
            output += '<li><div class="hoverable ' + collapsed + '">';
            output += valueToHTML(json[i], maxExpandLevel);
            if (i < length - 1) {
              output += ',';
            }
            output += '</div></li>';
          }
          output += '</ul>' + punctuation(']');
          if (!hasContents) {
            output = punctuation('[ ]');
          }
          return output;
        }
        function objectToHTML(json, maxExpandLevel) {
          var collapsed = jsonToHtml_level > maxExpandLevel ? 'collapsed' : '';
          var keys = Object.keys(json);
          var length = keys.length;
          var output =
            '<div class="collapser"></div>' +
            punctuation('{') +
            '<span class="ellipsis"></span><ul class="obj collapsible">';
          var hasContents = false;
          for (var i = 0; i < length; i++) {
            var key = keys[i];
            hasContents = true;
            output += '<li><div class="hoverable ' + collapsed + '">';
            output += '<span class="property token string">"' + htmlEncode(key) + '"</span>: ';
            output += valueToHTML(json[key], maxExpandLevel);
            if (i < length - 1) {
              output += punctuation(',');
            }
            output += '</div></li>';
          }
          output += '</ul>' + punctuation('}');
          if (!hasContents) {
            output = punctuation('{ }');
          }
          return output;
        }

        // CONCATENATED MODULE: ./src/components/JsonViewer/style.ts

        var jsonStyles = css(
          style_templateObject_1 ||
            (style_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  .redoc-json > .collapser {\n    display: none;\n  }\n\n  font-family: ',
                ';\n  font-size: ',
                ';\n  direction: ltr;\n  white-space: ',
                ";\n  contain: content;\n  overflow-x: auto;\n\n  .callback-function {\n    color: gray;\n  }\n\n  .collapser:after {\n    content: '-';\n    cursor: pointer;\n  }\n\n  .collapsed > .collapser:after {\n    content: '+';\n    cursor: pointer;\n  }\n\n  .ellipsis:after {\n    content: ' \u2026 ';\n  }\n\n  .collapsible {\n    margin-left: 2em;\n  }\n\n  .hoverable {\n    padding-top: 1px;\n    padding-bottom: 1px;\n    padding-left: 2px;\n    padding-right: 2px;\n    border-radius: 2px;\n  }\n\n  .hovered {\n    background-color: rgba(235, 238, 249, 1);\n  }\n\n  .collapser {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px 0px 0px 26px;\n  }\n\n  li {\n    position: relative;\n    display: block;\n  }\n\n  .hoverable {\n    display: inline-block;\n  }\n\n  .selected {\n    outline-style: solid;\n    outline-width: 1px;\n    outline-style: dotted;\n  }\n\n  .collapsed > .collapsible {\n    display: none;\n  }\n\n  .ellipsis {\n    display: none;\n  }\n\n  .collapsed > .ellipsis {\n    display: inherit;\n  }\n\n  .collapser {\n    position: absolute;\n    top: 1px;\n    left: -1.5em;\n    cursor: default;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n",
              ],
              [
                '\n  .redoc-json > .collapser {\n    display: none;\n  }\n\n  font-family: ',
                ';\n  font-size: ',
                ';\n  direction: ltr;\n  white-space: ',
                ";\n  contain: content;\n  overflow-x: auto;\n\n  .callback-function {\n    color: gray;\n  }\n\n  .collapser:after {\n    content: '-';\n    cursor: pointer;\n  }\n\n  .collapsed > .collapser:after {\n    content: '+';\n    cursor: pointer;\n  }\n\n  .ellipsis:after {\n    content: ' \u2026 ';\n  }\n\n  .collapsible {\n    margin-left: 2em;\n  }\n\n  .hoverable {\n    padding-top: 1px;\n    padding-bottom: 1px;\n    padding-left: 2px;\n    padding-right: 2px;\n    border-radius: 2px;\n  }\n\n  .hovered {\n    background-color: rgba(235, 238, 249, 1);\n  }\n\n  .collapser {\n    padding-right: 6px;\n    padding-left: 6px;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px 0px 0px 26px;\n  }\n\n  li {\n    position: relative;\n    display: block;\n  }\n\n  .hoverable {\n    display: inline-block;\n  }\n\n  .selected {\n    outline-style: solid;\n    outline-width: 1px;\n    outline-style: dotted;\n  }\n\n  .collapsed > .collapsible {\n    display: none;\n  }\n\n  .ellipsis {\n    display: none;\n  }\n\n  .collapsed > .ellipsis {\n    display: inherit;\n  }\n\n  .collapser {\n    position: absolute;\n    top: 1px;\n    left: -1.5em;\n    cursor: default;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n",
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.wrap ? 'pre-wrap' : 'pre';
          },
        );
        var style_templateObject_1;

        // CONCATENATED MODULE: ./src/components/JsonViewer/JsonViewer.tsx

        var JsonViewerWrap = styled_components.div(
          JsonViewer_templateObject_1 ||
            (JsonViewer_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  &:hover > ', ' {\n    opacity: 1;\n  }\n'],
              ['\n  &:hover > ', ' {\n    opacity: 1;\n  }\n'],
            )),
          SampleControls,
        );
        var JsonViewer_Json = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Json, _super);
          function Json() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.renderInner = function(_a) {
              var renderCopyButton = _a.renderCopyButton;
              return external_react_['createElement'](
                JsonViewerWrap,
                null,
                external_react_['createElement'](
                  SampleControls,
                  null,
                  renderCopyButton(),
                  external_react_['createElement'](
                    'span',
                    { onClick: _this.expandAll },
                    ' Expand all ',
                  ),
                  external_react_['createElement'](
                    'span',
                    { onClick: _this.collapseAll },
                    ' Collapse all ',
                  ),
                ),
                external_react_['createElement'](OptionsContext.Consumer, null, function(options) {
                  return external_react_['createElement'](PrismDiv, {
                    className: _this.props.className,
                    ref: function(node) {
                      return (_this.node = node);
                    },
                    dangerouslySetInnerHTML: {
                      __html: jsonToHTML(_this.props.data, options.jsonSampleExpandLevel),
                    },
                  });
                }),
              );
            };
            _this.expandAll = function() {
              var elements = _this.node.getElementsByClassName('collapsible');
              for (var _i = 0, _a = Array.prototype.slice.call(elements); _i < _a.length; _i++) {
                var collapsed = _a[_i];
                collapsed.parentNode.classList.remove('collapsed');
              }
            };
            _this.collapseAll = function() {
              var elements = _this.node.getElementsByClassName('collapsible');
              for (var _i = 0, _a = Array.prototype.slice.call(elements); _i < _a.length; _i++) {
                var expanded = _a[_i];
                // const collapsed = elements[i];
                if (expanded.parentNode.classList.contains('redoc-json')) {
                  continue;
                }
                expanded.parentNode.classList.add('collapsed');
              }
            };
            _this.clickListener = function(event) {
              var collapsed;
              var target = event.target;
              if (target.className === 'collapser') {
                collapsed = target.parentElement.getElementsByClassName('collapsible')[0];
                if (collapsed.parentElement.classList.contains('collapsed')) {
                  collapsed.parentElement.classList.remove('collapsed');
                } else {
                  collapsed.parentElement.classList.add('collapsed');
                }
              }
            };
            return _this;
          }
          Json.prototype.render = function() {
            return external_react_['createElement'](
              CopyButtonWrapper_CopyButtonWrapper,
              { data: this.props.data },
              this.renderInner,
            );
          };
          Json.prototype.componentDidMount = function() {
            this.node.addEventListener('click', this.clickListener);
          };
          Json.prototype.componentWillUnmount = function() {
            this.node.removeEventListener('click', this.clickListener);
          };
          return Json;
        })(external_react_['PureComponent']);
        var JsonViewer = styled_components(JsonViewer_Json)(
          JsonViewer_templateObject_2 ||
            (JsonViewer_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  ', ';\n'],
              ['\n  ', ';\n'],
            )),
          jsonStyles,
        );
        var JsonViewer_templateObject_1, JsonViewer_templateObject_2;

        // CONCATENATED MODULE: ./src/components/SourceCode/SourceCode.tsx

        var SourceCode_SourceCode = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SourceCode, _super);
          function SourceCode() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          SourceCode.prototype.render = function() {
            var _a = this.props,
              source = _a.source,
              lang = _a.lang;
            return external_react_['createElement'](StyledPre, {
              dangerouslySetInnerHTML: {
                __html: highlight(source, lang),
              },
            });
          };
          return SourceCode;
        })(external_react_['PureComponent']);

        var SourceCode_SourceCodeWithCopy = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SourceCodeWithCopy, _super);
          function SourceCodeWithCopy() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          SourceCodeWithCopy.prototype.render = function() {
            var _this = this;
            return external_react_['createElement'](
              CopyButtonWrapper_CopyButtonWrapper,
              { data: this.props.source },
              function(_a) {
                var renderCopyButton = _a.renderCopyButton;
                return external_react_['createElement'](
                  SampleControlsWrap,
                  null,
                  external_react_['createElement'](SampleControls, null, renderCopyButton()),
                  external_react_['createElement'](SourceCode_SourceCode, {
                    lang: _this.props.lang,
                    source: _this.props.source,
                  }),
                );
              },
            );
          };
          return SourceCodeWithCopy;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/PayloadSamples/ExampleValue.tsx

        function ExampleValue(_a) {
          var value = _a.value,
            mimeType = _a.mimeType;
          if (isJsonLike(mimeType)) {
            return external_react_['createElement'](JsonViewer, { data: value });
          } else {
            if (typeof value === 'object') {
              // just in case example was cached as json but used as non-json
              value = JSON.stringify(value, null, 2);
            }
            return external_react_['createElement'](SourceCode_SourceCodeWithCopy, {
              lang: langFromMime(mimeType),
              source: value,
            });
          }
        }

        // CONCATENATED MODULE: ./src/components/PayloadSamples/exernalExampleHook.ts

        function useExternalExample(example, mimeType) {
          var _this = this;
          var _a = Object(external_react_['useState'])(true),
            setIsLoading = _a[1]; // to trigger component reload
          var value = Object(external_react_['useRef'])(undefined);
          var prevRef = Object(external_react_['useRef'])(undefined);
          if (prevRef.current !== example) {
            value.current = undefined;
          }
          prevRef.current = example;
          Object(external_react_['useEffect'])(
            function() {
              var load = function() {
                return Object(external_tslib_['__awaiter'])(_this, void 0, void 0, function() {
                  var _a, e_1;
                  return Object(external_tslib_['__generator'])(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        setIsLoading(true);
                        _b.label = 1;
                      case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = value;
                        return [4 /*yield*/, example.getExternalValue(mimeType)];
                      case 2:
                        _a.current = _b.sent();
                        return [3 /*break*/, 4];
                      case 3:
                        e_1 = _b.sent();
                        value.current = e_1;
                        return [3 /*break*/, 4];
                      case 4:
                        setIsLoading(false);
                        return [2 /*return*/];
                    }
                  });
                });
              };
              load();
            },
            [example, mimeType],
          );
          return value.current;
        }

        // CONCATENATED MODULE: ./src/components/PayloadSamples/Example.tsx

        function Example(_a) {
          var example = _a.example,
            mimeType = _a.mimeType;
          if (example.value === undefined && example.externalValueUrl) {
            return external_react_['createElement'](ExternalExample, {
              example: example,
              mimeType: mimeType,
            });
          } else {
            return external_react_['createElement'](ExampleValue, {
              value: example.value,
              mimeType: mimeType,
            });
          }
        }
        function ExternalExample(_a) {
          var example = _a.example,
            mimeType = _a.mimeType;
          var value = useExternalExample(example, mimeType);
          if (value === undefined) {
            return external_react_['createElement']('span', null, 'Loading...');
          }
          if (value instanceof Error) {
            return external_react_['createElement'](
              StyledPre,
              null,
              'Error loading external example: ',
              external_react_['createElement']('br', null),
              external_react_['createElement'](
                'a',
                { className: 'token string', href: example.externalValueUrl, target: '_blank' },
                example.externalValueUrl,
              ),
            );
          }
          return external_react_['createElement'](ExampleValue, {
            value: value,
            mimeType: mimeType,
          });
        }

        // CONCATENATED MODULE: ./src/components/PayloadSamples/styled.elements.ts

        var styled_elements_MimeLabel = styled_components.div(
          PayloadSamples_styled_elements_templateObject_1 ||
            (PayloadSamples_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  padding: 12px;\n  background-color: ',
                ';\n  margin: 0 0 10px 0;\n  display: block;\n',
              ],
              [
                '\n  padding: 12px;\n  background-color: ',
                ';\n  margin: 0 0 10px 0;\n  display: block;\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['transparentize'])(
              0.6,
              theme.rightPanel.backgroundColor,
            );
          },
        );
        var DropdownLabel = styled_components.span(
          PayloadSamples_styled_elements_templateObject_2 ||
            (PayloadSamples_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  font-family: ',
                ';\n  font-size: 12px;\n  position: absolute;\n  z-index: 1;\n  top: -11px;\n  left: 12px;\n  font-weight: ',
                ';\n  color: ',
                ';\n',
              ],
              [
                '\n  font-family: ',
                ';\n  font-size: 12px;\n  position: absolute;\n  z-index: 1;\n  top: -11px;\n  left: 12px;\n  font-weight: ',
                ';\n  color: ',
                ';\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.typography.headings.fontFamily;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.fontWeightBold;
          },
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['transparentize'])(0.6, theme.rightPanel.textColor);
          },
        );
        var DropdownWrapper = styled_components.div(
          styled_elements_templateObject_3 ||
            (styled_elements_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  position: relative;\n'],
              ['\n  position: relative;\n'],
            )),
        );
        var InvertedSimpleDropdown = styled_components(StyledDropdown)(
          styled_elements_templateObject_4 ||
            (styled_elements_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  margin: 0 0 10px 0;\n  display: block;\n  background-color: ',
                ';\n  .Dropdown-control {\n    margin-top: 0;\n  }\n  .Dropdown-control,\n  .Dropdown-control:hover {\n    font-size: 1em;\n    border: none;\n    padding: 0.9em 1.6em 0.9em 0.9em;\n    background: transparent;\n    color: ',
                ';\n    box-shadow: none;\n\n    .Dropdown-arrow {\n      border-top-color: ',
                ';\n    }\n  }\n  .Dropdown-menu {\n    margin: 0;\n    margin-top: 2px;\n  }\n',
              ],
              [
                '\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  margin: 0 0 10px 0;\n  display: block;\n  background-color: ',
                ';\n  .Dropdown-control {\n    margin-top: 0;\n  }\n  .Dropdown-control,\n  .Dropdown-control:hover {\n    font-size: 1em;\n    border: none;\n    padding: 0.9em 1.6em 0.9em 0.9em;\n    background: transparent;\n    color: ',
                ';\n    box-shadow: none;\n\n    .Dropdown-arrow {\n      border-top-color: ',
                ';\n    }\n  }\n  .Dropdown-menu {\n    margin: 0;\n    margin-top: 2px;\n  }\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['transparentize'])(
              0.6,
              theme.rightPanel.backgroundColor,
            );
          },
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.textColor;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.textColor;
          },
        );
        var NoSampleLabel = styled_components.div(
          styled_elements_templateObject_5 ||
            (styled_elements_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  font-family: ', ';\n  font-size: 12px;\n  color: #ee807f;\n'],
              ['\n  font-family: ', ';\n  font-size: 12px;\n  color: #ee807f;\n'],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
        );
        var PayloadSamples_styled_elements_templateObject_1,
          PayloadSamples_styled_elements_templateObject_2,
          styled_elements_templateObject_3,
          styled_elements_templateObject_4,
          styled_elements_templateObject_5;

        // CONCATENATED MODULE: ./src/components/PayloadSamples/MediaTypeSamples.tsx

        var MediaTypeSamples_MediaTypeSamples = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(MediaTypeSamples, _super);
          function MediaTypeSamples() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.state = {
              activeIdx: 0,
            };
            _this.switchMedia = function(_a) {
              var value = _a.value;
              _this.setState({
                activeIdx: parseInt(value, 10),
              });
            };
            return _this;
          }
          MediaTypeSamples.prototype.render = function() {
            var activeIdx = this.state.activeIdx;
            var examples = this.props.mediaType.examples || {};
            var mimeType = this.props.mediaType.name;
            var noSample = external_react_['createElement'](NoSampleLabel, null, 'No sample');
            var examplesNames = Object.keys(examples);
            if (examplesNames.length === 0) {
              return noSample;
            }
            if (examplesNames.length > 1) {
              var options = examplesNames.map(function(name, idx) {
                return {
                  label: examples[name].summary || name,
                  value: idx.toString(),
                };
              });
              var example = examples[examplesNames[activeIdx]];
              var description = example.description;
              return external_react_['createElement'](
                SamplesWrapper,
                null,
                external_react_['createElement'](
                  DropdownWrapper,
                  null,
                  external_react_['createElement'](DropdownLabel, null, 'Example'),
                  this.props.renderDropdown({
                    value: options[activeIdx],
                    options: options,
                    onChange: this.switchMedia,
                  }),
                ),
                external_react_['createElement'](
                  'div',
                  null,
                  description &&
                    external_react_['createElement'](Markdown_Markdown, { source: description }),
                  external_react_['createElement'](Example, {
                    example: example,
                    mimeType: mimeType,
                  }),
                ),
              );
            } else {
              var example = examples[examplesNames[0]];
              return external_react_['createElement'](
                SamplesWrapper,
                null,
                example.description &&
                  external_react_['createElement'](Markdown_Markdown, {
                    source: example.description,
                  }),
                external_react_['createElement'](Example, { example: example, mimeType: mimeType }),
              );
            }
          };
          return MediaTypeSamples;
        })(external_react_['Component']);

        var SamplesWrapper = styled_components.div(
          MediaTypeSamples_templateObject_1 ||
            (MediaTypeSamples_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  margin-top: 15px;\n'],
              ['\n  margin-top: 15px;\n'],
            )),
        );
        var MediaTypeSamples_templateObject_1;

        // EXTERNAL MODULE: external "mobx-react"
        var external_mobx_react_ = __webpack_require__(4);

        // CONCATENATED MODULE: ./src/common-elements/fields.ts

        var ClickablePropertyNameCell = styled_components(PropertyNameCell)(
          fields_templateObject_1 ||
            (fields_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  cursor: pointer;\n\n  ',
                ' {\n    height: ',
                ';\n    width: ',
                ';\n    polygon {\n      fill: ',
                ';\n    }\n  }\n',
              ],
              [
                '\n  cursor: pointer;\n\n  ',
                ' {\n    height: ',
                ';\n    width: ',
                ';\n    polygon {\n      fill: ',
                ';\n    }\n  }\n',
              ],
            )),
          ShelfIcon,
          function(_a) {
            var theme = _a.theme;
            return theme.schema.arrow.size;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.schema.arrow.size;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.schema.arrow.color;
          },
        );
        var FieldLabel = styled_components.span(
          fields_templateObject_2 ||
            (fields_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  vertical-align: middle;\n  font-size: ', ';\n  line-height: 20px;\n'],
              ['\n  vertical-align: middle;\n  font-size: ', ';\n  line-height: 20px;\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.fontSize;
          },
        );
        var TypePrefix = styled_components(FieldLabel)(
          fields_templateObject_3 ||
            (fields_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: ', ';\n'],
              ['\n  color: ', ';\n'],
            )),
          function(props) {
            return Object(external_polished_['transparentize'])(
              0.2,
              props.theme.schema.typeNameColor,
            );
          },
        );
        var TypeName = styled_components(FieldLabel)(
          fields_templateObject_4 ||
            (fields_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: ', ';\n'],
              ['\n  color: ', ';\n'],
            )),
          function(props) {
            return props.theme.schema.typeNameColor;
          },
        );
        var TypeTitle = styled_components(FieldLabel)(
          fields_templateObject_5 ||
            (fields_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: ', ';\n  word-break: break-word;\n'],
              ['\n  color: ', ';\n  word-break: break-word;\n'],
            )),
          function(props) {
            return props.theme.schema.typeTitleColor;
          },
        );
        var TypeFormat = TypeName;
        var RequiredLabel = styled_components(FieldLabel.withComponent('div'))(
          fields_templateObject_6 ||
            (fields_templateObject_6 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  color: ',
                ';\n  font-size: ',
                ';\n  font-weight: normal;\n  margin-left: 20px;\n  line-height: 1;\n',
              ],
              [
                '\n  color: ',
                ';\n  font-size: ',
                ';\n  font-weight: normal;\n  margin-left: 20px;\n  line-height: 1;\n',
              ],
            )),
          function(props) {
            return props.theme.schema.requireLabelColor;
          },
          function(props) {
            return props.theme.schema.labelsTextSize;
          },
        );
        var RecursiveLabel = styled_components(FieldLabel)(
          fields_templateObject_7 ||
            (fields_templateObject_7 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: ', ';\n  font-size: 13px;\n'],
              ['\n  color: ', ';\n  font-size: 13px;\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.colors.warning.main;
          },
        );
        var NullableLabel = styled_components(FieldLabel)(
          fields_templateObject_8 ||
            (fields_templateObject_8 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: #3195a6;\n  font-size: 13px;\n'],
              ['\n  color: #3195a6;\n  font-size: 13px;\n'],
            )),
        );
        var PatternLabel = styled_components(FieldLabel)(
          fields_templateObject_9 ||
            (fields_templateObject_9 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: #3195a6;\n  &::before,\n  &::after {\n    font-weight: bold;\n  }\n'],
              ['\n  color: #3195a6;\n  &::before,\n  &::after {\n    font-weight: bold;\n  }\n'],
            )),
        );
        var fields_ExampleValue = styled_components(FieldLabel)(
          fields_templateObject_10 ||
            (fields_templateObject_10 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  border-radius: 2px;\n  ', ';\n  & + & {\n    margin-left: 0;\n  }\n  ', ';\n'],
              ['\n  border-radius: 2px;\n  ', ';\n  & + & {\n    margin-left: 0;\n  }\n  ', ';\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return (
              '\n    background-color: ' +
              Object(external_polished_['transparentize'])(0.95, theme.colors.text.primary) +
              ';\n    color: ' +
              Object(external_polished_['transparentize'])(0.1, theme.colors.text.primary) +
              ';\n\n    padding: 0 ' +
              theme.spacing.unit +
              'px;\n    border: 1px solid ' +
              Object(external_polished_['transparentize'])(0.9, theme.colors.text.primary) +
              ';\n    font-family: ' +
              theme.typography.code.fontFamily +
              ';\n}'
            );
          },
          extensionsHook('ExampleValue'),
        );
        var ExtensionValue = styled_components(fields_ExampleValue)(
          fields_templateObject_11 ||
            (fields_templateObject_11 = Object(external_tslib_['__makeTemplateObject'])(
              [''],
              [''],
            )),
        );
        var ConstraintItem = styled_components(FieldLabel)(
          templateObject_12 ||
            (templateObject_12 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  border-radius: 2px;\n  ', ';\n  & + & {\n    margin-left: 0;\n  }\n  ', ';\n'],
              ['\n  border-radius: 2px;\n  ', ';\n  & + & {\n    margin-left: 0;\n  }\n  ', ';\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return (
              '\n    background-color: ' +
              Object(external_polished_['transparentize'])(0.95, theme.colors.primary.light) +
              ';\n    color: ' +
              Object(external_polished_['transparentize'])(0.1, theme.colors.primary.main) +
              ';\n\n    margin: 0 ' +
              theme.spacing.unit +
              'px;\n    padding: 0 ' +
              theme.spacing.unit +
              'px;\n    border: 1px solid ' +
              Object(external_polished_['transparentize'])(0.9, theme.colors.primary.main) +
              ';\n    font-family: ' +
              theme.typography.code.fontFamily +
              ';\n}'
            );
          },
          extensionsHook('ConstraintItem'),
        );
        var fields_templateObject_1,
          fields_templateObject_2,
          fields_templateObject_3,
          fields_templateObject_4,
          fields_templateObject_5,
          fields_templateObject_6,
          fields_templateObject_7,
          fields_templateObject_8,
          fields_templateObject_9,
          fields_templateObject_10,
          fields_templateObject_11,
          templateObject_12;

        // CONCATENATED MODULE: ./src/components/ExternalDocumentation/ExternalDocumentation.tsx

        var LinkWrap = styled_components.div(
          ExternalDocumentation_templateObject_1 ||
            (ExternalDocumentation_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  ', ';\n  ', '\n'], ['\n  ', ';\n  ', '\n'])),
          linksCss,
          function(_a) {
            var compact = _a.compact;
            return !compact ? 'margin: 1em 0' : '';
          },
        );
        var ExternalDocumentation_ExternalDocumentation = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ExternalDocumentation, _super);
          function ExternalDocumentation() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ExternalDocumentation.prototype.render = function() {
            var externalDocs = this.props.externalDocs;
            if (!externalDocs || !externalDocs.url) {
              return null;
            }
            return external_react_['createElement'](
              LinkWrap,
              { compact: this.props.compact },
              external_react_['createElement'](
                'a',
                { href: externalDocs.url },
                externalDocs.description || externalDocs.url,
              ),
            );
          };
          ExternalDocumentation = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ExternalDocumentation,
          );
          return ExternalDocumentation;
        })(external_react_['Component']);

        var ExternalDocumentation_templateObject_1;

        // CONCATENATED MODULE: ./src/components/Fields/EnumValues.tsx

        var EnumValues_EnumValues = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(EnumValues, _super);
          function EnumValues() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          EnumValues.prototype.render = function() {
            var _a = this.props,
              values = _a.values,
              type = _a.type;
            var enumSkipQuotes = this.context.enumSkipQuotes;
            if (!values.length) {
              return null;
            }
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](
                FieldLabel,
                null,
                type === 'array' ? l('enumArray') : '',
                ' ',
                values.length === 1 ? l('enumSingleValue') : l('enum'),
                ':',
              ),
              ' ',
              values.map(function(value, idx) {
                var exampleValue = enumSkipQuotes ? value : JSON.stringify(value);
                return external_react_['createElement'](
                  external_react_['Fragment'],
                  { key: idx },
                  external_react_['createElement'](fields_ExampleValue, null, exampleValue),
                  ' ',
                );
              }),
            );
          };
          EnumValues.contextType = OptionsContext;
          return EnumValues;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Fields/Extensions.tsx

        var Extension = styled_components(StyledMarkdownBlock)(
          Extensions_templateObject_1 ||
            (Extensions_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  margin: 2px 0;\n'],
              ['\n  margin: 2px 0;\n'],
            )),
        );
        var Extensions_Extensions = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Extensions, _super);
          function Extensions() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Extensions.prototype.render = function() {
            var exts = this.props.extensions;
            return external_react_['createElement'](OptionsContext.Consumer, null, function(
              options,
            ) {
              return external_react_['createElement'](
                external_react_['Fragment'],
                null,
                options.showExtensions &&
                  Object.keys(exts).map(function(key) {
                    return external_react_['createElement'](
                      Extension,
                      { key: key },
                      external_react_['createElement'](
                        FieldLabel,
                        null,
                        ' ',
                        key.substring(2),
                        ': ',
                      ),
                      ' ',
                      external_react_['createElement'](
                        ExtensionValue,
                        null,
                        typeof exts[key] === 'string' ? exts[key] : JSON.stringify(exts[key]),
                      ),
                    );
                  }),
              );
            });
          };
          return Extensions;
        })(external_react_['PureComponent']);

        var Extensions_templateObject_1;

        // CONCATENATED MODULE: ./src/components/Fields/FieldContstraints.tsx

        var FieldContstraints_ConstraintsView = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ConstraintsView, _super);
          function ConstraintsView() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ConstraintsView.prototype.render = function() {
            if (this.props.constraints.length === 0) {
              return null;
            }
            return external_react_['createElement'](
              'span',
              null,
              ' ',
              this.props.constraints.map(function(constraint) {
                return external_react_['createElement'](
                  ConstraintItem,
                  { key: constraint },
                  ' ',
                  constraint,
                  ' ',
                );
              }),
            );
          };
          return ConstraintsView;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Fields/FieldDetail.tsx

        var FieldDetail_FieldDetail = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(FieldDetail, _super);
          function FieldDetail() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          FieldDetail.prototype.render = function() {
            if (this.props.value === undefined) {
              return null;
            }
            var value = this.props.raw ? this.props.value : JSON.stringify(this.props.value);
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](FieldLabel, null, ' ', this.props.label, ' '),
              ' ',
              external_react_['createElement'](fields_ExampleValue, null, value),
            );
          };
          return FieldDetail;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Fields/FieldDetails.tsx

        var FieldDetails_FieldDetails = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(FieldDetails, _super);
          function FieldDetails() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          FieldDetails.prototype.render = function() {
            var _a = this.props,
              showExamples = _a.showExamples,
              field = _a.field,
              renderDiscriminatorSwitch = _a.renderDiscriminatorSwitch;
            var _b = this.context,
              enumSkipQuotes = _b.enumSkipQuotes,
              hideSchemaTitles = _b.hideSchemaTitles;
            var schema = field.schema,
              description = field.description,
              example = field.example,
              deprecated = field.deprecated;
            var rawDefault = !!enumSkipQuotes || field.in === 'header'; // having quotes around header field default values is confusing and inappropriate
            var exampleField = null;
            if (showExamples && example !== undefined) {
              var label = l('example') + ':';
              if (field.in && (field.style || field.serializationMime)) {
                // decode for better readability in examples: see https://github.com/Redocly/redoc/issues/1138
                var serializedValue = decodeURIComponent(serializeParameterValue(field, example));
                exampleField = external_react_['createElement'](FieldDetail_FieldDetail, {
                  label: label,
                  value: serializedValue,
                  raw: true,
                });
              } else {
                exampleField = external_react_['createElement'](FieldDetail_FieldDetail, {
                  label: label,
                  value: example,
                });
              }
            }
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](
                'div',
                null,
                external_react_['createElement'](TypePrefix, null, schema.typePrefix),
                external_react_['createElement'](TypeName, null, schema.displayType),
                schema.displayFormat &&
                  external_react_['createElement'](
                    TypeFormat,
                    null,
                    ' ',
                    '<',
                    schema.displayFormat,
                    '>',
                    ' ',
                  ),
                schema.title &&
                  !hideSchemaTitles &&
                  external_react_['createElement'](TypeTitle, null, ' (', schema.title, ') '),
                external_react_['createElement'](FieldContstraints_ConstraintsView, {
                  constraints: schema.constraints,
                }),
                schema.nullable &&
                  external_react_['createElement'](NullableLabel, null, ' ', l('nullable'), ' '),
                schema.pattern &&
                  external_react_['createElement'](PatternLabel, null, ' ', schema.pattern, ' '),
                schema.isCircular &&
                  external_react_['createElement'](RecursiveLabel, null, ' ', l('recursive'), ' '),
              ),
              deprecated &&
                external_react_['createElement'](
                  'div',
                  null,
                  external_react_['createElement'](
                    Badge,
                    { type: 'warning' },
                    ' ',
                    l('deprecated'),
                    ' ',
                  ),
                ),
              external_react_['createElement'](FieldDetail_FieldDetail, {
                raw: rawDefault,
                label: l('default') + ':',
                value: schema.default,
              }),
              !renderDiscriminatorSwitch &&
                external_react_['createElement'](EnumValues_EnumValues, {
                  type: schema.type,
                  values: schema.enum,
                }),
              ' ',
              exampleField,
              external_react_['createElement'](Extensions_Extensions, {
                extensions: Object(external_tslib_['__assign'])(
                  Object(external_tslib_['__assign'])({}, field.extensions),
                  schema.extensions,
                ),
              }),
              external_react_['createElement'](
                'div',
                null,
                external_react_['createElement'](Markdown_Markdown, {
                  compact: true,
                  source: description,
                }),
              ),
              schema.externalDocs &&
                external_react_['createElement'](ExternalDocumentation_ExternalDocumentation, {
                  externalDocs: schema.externalDocs,
                  compact: true,
                }),
              (renderDiscriminatorSwitch && renderDiscriminatorSwitch(this.props)) || null,
            );
          };
          FieldDetails.contextType = OptionsContext;
          return FieldDetails;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Schema/ArraySchema.tsx

        var PaddedSchema = styled_components.div(
          ArraySchema_templateObject_1 ||
            (ArraySchema_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  padding-left: ', 'px;\n'],
              ['\n  padding-left: ', 'px;\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.spacing.unit * 2;
          },
        );
        var ArraySchema_ArraySchema = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ArraySchema, _super);
          function ArraySchema() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ArraySchema.prototype.render = function() {
            var itemsSchema = this.props.schema.items;
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](ArrayOpenningLabel, null, ' Array '),
              external_react_['createElement'](
                PaddedSchema,
                null,
                external_react_['createElement'](
                  Schema_Schema,
                  Object(external_tslib_['__assign'])({}, this.props, { schema: itemsSchema }),
                ),
              ),
              external_react_['createElement'](ArrayClosingLabel, null),
            );
          };
          return ArraySchema;
        })(external_react_['PureComponent']);

        var ArraySchema_templateObject_1;

        // CONCATENATED MODULE: ./src/components/Fields/Field.tsx

        var Field_Field = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Field, _super);
          function Field() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.toggle = function() {
              _this.props.field.toggle();
            };
            _this.onFieldChange = function(e) {
              console.log('Textfield value is ' + e.target.placeholder + ' - ' + e.target.value);
              _this.props.field.setValue(e.target.value);
            };
            return _this;
          }
          Field.prototype.render = function() {
            var _a = this.props,
              className = _a.className,
              field = _a.field,
              isLast = _a.isLast;
            var name = field.name,
              expanded = field.expanded,
              deprecated = field.deprecated,
              required = field.required,
              kind = field.kind;
            var withSubSchema = !field.schema.isPrimitive && !field.schema.isCircular;
            var paramName = withSubSchema
              ? external_react_['createElement'](
                  ClickablePropertyNameCell,
                  {
                    onClick: this.toggle,
                    className: deprecated ? 'deprecated' : '',
                    kind: kind,
                    title: name,
                  },
                  external_react_['createElement'](PropertyBullet, null),
                  name,
                  external_react_['createElement'](
                    WrappedShelfIcon,
                    null,
                    external_react_['createElement'](ShelfIcon, {
                      direction: expanded ? 'down' : 'right',
                    }),
                  ),
                  required && external_react_['createElement'](RequiredLabel, null, ' required '),
                )
              : external_react_['createElement'](
                  PropertyNameCell,
                  { className: deprecated ? 'deprecated' : undefined, kind: kind, title: name },
                  external_react_['createElement'](PropertyBullet, null),
                  name,
                  required && external_react_['createElement'](RequiredLabel, null, ' required '),
                );
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](
                'tr',
                { className: isLast ? 'last ' + className : className },
                paramName,
                external_react_['createElement'](
                  PropertyDetailsCell,
                  null,
                  external_react_['createElement'](
                    FieldDetails_FieldDetails,
                    Object(external_tslib_['__assign'])({}, this.props),
                  ),
                ),
                field &&
                  field.in === 'path' &&
                  external_react_['createElement'](
                    'td',
                    null,
                    external_react_['createElement'](TextField, {
                      placeholder: field.name,
                      onChange: this.onFieldChange,
                    }),
                  ),
              ),
              field.expanded &&
                withSubSchema &&
                external_react_['createElement'](
                  'tr',
                  { key: field.name + 'inner' },
                  external_react_['createElement'](
                    PropertyCellWithInner,
                    { colSpan: 2 },
                    external_react_['createElement'](
                      InnerPropertiesWrap,
                      null,
                      external_react_['createElement'](Schema_Schema, {
                        schema: field.schema,
                        skipReadOnly: this.props.skipReadOnly,
                        skipWriteOnly: this.props.skipWriteOnly,
                        showTitle: this.props.showTitle,
                      }),
                    ),
                  ),
                ),
            );
          };
          Field = Object(external_tslib_['__decorate'])([external_mobx_react_['observer']], Field);
          return Field;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Schema/DiscriminatorDropdown.tsx

        var DiscriminatorDropdown_DiscriminatorDropdown = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(DiscriminatorDropdown, _super);
          function DiscriminatorDropdown() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.changeActiveChild = function(_a) {
              var value = _a.value;
              var idx = parseInt(value, 10);
              _this.props.parent.activateOneOf(idx);
            };
            return _this;
          }
          DiscriminatorDropdown.prototype.sortOptions = function(options, enumValues) {
            if (enumValues.length === 0) {
              return;
            }
            var enumOrder = {};
            enumValues.forEach(function(enumItem, idx) {
              enumOrder[enumItem] = idx;
            });
            options.sort(function(a, b) {
              return enumOrder[a.label] > enumOrder[b.label] ? 1 : -1;
            });
          };
          DiscriminatorDropdown.prototype.render = function() {
            var _a = this.props,
              parent = _a.parent,
              enumValues = _a.enumValues;
            if (parent.oneOf === undefined) {
              return null;
            }
            var options = parent.oneOf.map(function(subSchema, idx) {
              return {
                value: idx.toString(),
                label: subSchema.title,
              };
            });
            var activeItem = options[parent.activeOneOf];
            this.sortOptions(options, enumValues);
            return external_react_['createElement'](StyledDropdown, {
              value: activeItem,
              options: options,
              onChange: this.changeActiveChild,
            });
          };
          DiscriminatorDropdown = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            DiscriminatorDropdown,
          );
          return DiscriminatorDropdown;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Schema/ObjectSchema.tsx

        var ObjectSchema_ObjectSchema = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ObjectSchema, _super);
          function ObjectSchema() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Object.defineProperty(ObjectSchema.prototype, 'parentSchema', {
            get: function() {
              return this.props.discriminator.parentSchema;
            },
            enumerable: true,
            configurable: true,
          });
          ObjectSchema.prototype.render = function() {
            var _this = this;
            var _a = this.props,
              _b = _a.schema.fields,
              fields = _b === void 0 ? [] : _b,
              showTitle = _a.showTitle,
              discriminator = _a.discriminator;
            var needFilter = this.props.skipReadOnly || this.props.skipWriteOnly;
            var filteredFields = needFilter
              ? fields.filter(function(item) {
                  return !(
                    (_this.props.skipReadOnly && item.schema.readOnly) ||
                    (_this.props.skipWriteOnly && item.schema.writeOnly)
                  );
                })
              : fields;
            return external_react_['createElement'](
              PropertiesTable,
              null,
              showTitle &&
                external_react_['createElement'](
                  PropertiesTableCaption,
                  null,
                  this.props.schema.title,
                ),
              external_react_['createElement'](
                'tbody',
                null,
                mapWithLast(filteredFields, function(field, isLast) {
                  return external_react_['createElement'](Field_Field, {
                    key: field.name,
                    isLast: isLast,
                    field: field,
                    renderDiscriminatorSwitch:
                      (discriminator &&
                        discriminator.fieldName === field.name &&
                        function() {
                          return external_react_[
                            'createElement'
                          ](DiscriminatorDropdown_DiscriminatorDropdown, {
                            parent: _this.parentSchema,
                            enumValues: field.schema.enum,
                          });
                        }) ||
                      undefined,
                    className: field.expanded ? 'expanded' : undefined,
                    showExamples: false,
                    skipReadOnly: _this.props.skipReadOnly,
                    skipWriteOnly: _this.props.skipWriteOnly,
                    showTitle: _this.props.showTitle,
                  });
                }),
              ),
            );
          };
          ObjectSchema = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ObjectSchema,
          );
          return ObjectSchema;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Schema/OneOfSchema.tsx

        var OneOfSchema_OneOfButton = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(OneOfButton, _super);
          function OneOfButton() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.activateOneOf = function() {
              _this.props.schema.activateOneOf(_this.props.idx);
            };
            return _this;
          }
          OneOfButton.prototype.render = function() {
            var _a = this.props,
              idx = _a.idx,
              schema = _a.schema,
              subSchema = _a.subSchema;
            return external_react_['createElement'](
              schema_OneOfButton,
              { active: idx === schema.activeOneOf, onClick: this.activateOneOf },
              subSchema.title || subSchema.typePrefix + subSchema.displayType,
            );
          };
          OneOfButton = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            OneOfButton,
          );
          return OneOfButton;
        })(external_react_['Component']);

        var OneOfSchema_OneOfSchema = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(OneOfSchema, _super);
          function OneOfSchema() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          OneOfSchema.prototype.render = function() {
            var _a = this.props,
              oneOf = _a.schema.oneOf,
              schema = _a.schema;
            if (oneOf === undefined) {
              return null;
            }
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](OneOfLabel, null, ' ', schema.oneOfType, ' '),
              external_react_['createElement'](
                OneOfList,
                null,
                oneOf.map(function(subSchema, idx) {
                  return external_react_['createElement'](OneOfSchema_OneOfButton, {
                    key: subSchema.pointer,
                    schema: schema,
                    subSchema: subSchema,
                    idx: idx,
                  });
                }),
              ),
              external_react_['createElement'](
                Schema_Schema,
                Object(external_tslib_['__assign'])({}, this.props, {
                  schema: oneOf[schema.activeOneOf],
                }),
              ),
            );
          };
          OneOfSchema = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            OneOfSchema,
          );
          return OneOfSchema;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Schema/Schema.tsx

        var Schema_Schema = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Schema, _super);
          function Schema() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Schema.prototype.render = function() {
            var schema = this.props.schema;
            if (!schema) {
              return external_react_['createElement']('em', null, ' Schema not provided ');
            }
            var type = schema.type,
              oneOf = schema.oneOf,
              discriminatorProp = schema.discriminatorProp,
              isCircular = schema.isCircular;
            if (isCircular) {
              return external_react_['createElement'](
                'div',
                null,
                external_react_['createElement'](TypeName, null, schema.displayType),
                schema.title &&
                  external_react_['createElement'](TypeTitle, null, ' ', schema.title, ' '),
                external_react_['createElement'](RecursiveLabel, null, ' ', l('recursive'), ' '),
              );
            }
            if (discriminatorProp !== undefined) {
              if (!oneOf || !oneOf.length) {
                throw new Error(
                  "Looks like you are using discriminator wrong: you don't have any definition inherited from the " +
                    schema.title,
                );
              }
              return external_react_['createElement'](
                ObjectSchema_ObjectSchema,
                Object(external_tslib_['__assign'])(
                  {},
                  Object(external_tslib_['__assign'])(
                    Object(external_tslib_['__assign'])({}, this.props),
                    { schema: oneOf[schema.activeOneOf] },
                  ),
                  {
                    discriminator: {
                      fieldName: discriminatorProp,
                      parentSchema: schema,
                    },
                  },
                ),
              );
            }
            if (oneOf !== undefined) {
              return external_react_['createElement'](
                OneOfSchema_OneOfSchema,
                Object(external_tslib_['__assign'])({ schema: schema }, this.props),
              );
            }
            switch (type) {
              case 'object':
                return external_react_['createElement'](
                  ObjectSchema_ObjectSchema,
                  Object(external_tslib_['__assign'])({}, this.props),
                );
              case 'array':
                return external_react_['createElement'](
                  ArraySchema_ArraySchema,
                  Object(external_tslib_['__assign'])({}, this.props),
                );
            } // TODO: maybe adjust FieldDetails to accept schema
            var field = {
              schema: schema,
              name: '',
              required: false,
              description: schema.description,
              externalDocs: schema.externalDocs,
              deprecated: false,
              toggle: function() {
                return null;
              },
              expanded: false,
            }; // cast needed for hot-loader to not fail
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](FieldDetails_FieldDetails, { field: field }),
            );
          };
          Schema = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            Schema,
          );
          return Schema;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Schema/index.ts

        // CONCATENATED MODULE: ./src/components/SchemaDefinition/SchemaDefinition.tsx

        var SchemaDefinition_SchemaDefinition = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SchemaDefinition, _super);
          function SchemaDefinition() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.renderDropdown = function(props) {
              return external_react_['createElement'](
                DropdownOrLabel,
                Object(external_tslib_['__assign'])(
                  { Label: MimeLabel, Dropdown: InvertedSimpleDropdown },
                  props,
                ),
              );
            };
            return _this;
          }
          SchemaDefinition.getMediaType = function(schemaRef, exampleRef) {
            if (!schemaRef) {
              return {};
            }
            var info = {
              schema: {
                $ref: schemaRef,
              },
            };
            if (exampleRef) {
              info.examples = {
                example: {
                  $ref: exampleRef,
                },
              };
            }
            return info;
          };
          Object.defineProperty(SchemaDefinition.prototype, 'mediaModel', {
            get: function() {
              var _a = this.props,
                parser = _a.parser,
                schemaRef = _a.schemaRef,
                exampleRef = _a.exampleRef,
                options = _a.options;
              if (!this._mediaModel) {
                this._mediaModel = new MediaType_MediaTypeModel(
                  parser,
                  'json',
                  false,
                  SchemaDefinition.getMediaType(schemaRef, exampleRef),
                  options,
                );
              }
              return this._mediaModel;
            },
            enumerable: true,
            configurable: true,
          });
          SchemaDefinition.prototype.render = function() {
            var _a = this.props,
              _b = _a.showReadOnly,
              showReadOnly = _b === void 0 ? true : _b,
              _c = _a.showWriteOnly,
              showWriteOnly = _c === void 0 ? false : _c;
            return external_react_['createElement'](
              Section,
              null,
              external_react_['createElement'](
                Row,
                null,
                external_react_['createElement'](
                  MiddlePanel,
                  null,
                  external_react_['createElement'](Schema_Schema, {
                    skipWriteOnly: !showWriteOnly,
                    skipReadOnly: !showReadOnly,
                    schema: this.mediaModel.schema,
                  }),
                ),
                external_react_['createElement'](
                  DarkRightPanel,
                  null,
                  external_react_['createElement'](
                    MediaSamplesWrap,
                    null,
                    external_react_['createElement'](MediaTypeSamples_MediaTypeSamples, {
                      renderDropdown: this.renderDropdown,
                      mediaType: this.mediaModel,
                    }),
                  ),
                ),
              ),
            );
          };
          return SchemaDefinition;
        })(external_react_['PureComponent']);

        var MediaSamplesWrap = styled_components.div(
          SchemaDefinition_templateObject_1 ||
            (SchemaDefinition_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  background: ',
                ';\n  & > div,\n  & > pre {\n    padding: ',
                'px;\n    margin: 0;\n  }\n\n  & > div > pre {\n    padding: 0;\n  }\n',
              ],
              [
                '\n  background: ',
                ';\n  & > div,\n  & > pre {\n    padding: ',
                'px;\n    margin: 0;\n  }\n\n  & > div > pre {\n    padding: 0;\n  }\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.codeSample.backgroundColor;
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
        );
        var SchemaDefinition_templateObject_1;

        // CONCATENATED MODULE: ./src/components/SecuritySchemes/SecuritySchemes.tsx

        var AUTH_TYPES = {
          oauth2: 'OAuth2',
          apiKey: 'API Key',
          http: 'HTTP',
          openIdConnect: 'Open ID Connect',
        };
        var SecuritySchemes_OAuthFlow = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(OAuthFlow, _super);
          function OAuthFlow() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          OAuthFlow.prototype.render = function() {
            var _a = this.props,
              type = _a.type,
              flow = _a.flow,
              token = _a.token;
            return external_react_['createElement'](
              'tr',
              null,
              external_react_['createElement']('th', null, ' ', type, ' OAuth Flow '),
              external_react_['createElement'](
                'td',
                null,
                type === 'implicit' || type === 'authorizationCode'
                  ? external_react_['createElement'](
                      'div',
                      null,
                      external_react_['createElement']('strong', null, ' Authorization URL: '),
                      flow.authorizationUrl,
                    )
                  : null,
                type === 'password' || type === 'clientCredentials' || type === 'authorizationCode'
                  ? external_react_['createElement'](
                      'div',
                      null,
                      external_react_['createElement']('strong', null, ' Token URL: '),
                      flow.tokenUrl,
                    )
                  : null,
                flow.refreshUrl &&
                  external_react_['createElement'](
                    'div',
                    null,
                    external_react_['createElement']('strong', null, ' Refresh URL: '),
                    flow.refreshUrl,
                  ),
                external_react_['createElement'](
                  'div',
                  null,
                  external_react_['createElement']('strong', null, ' Scopes: '),
                ),
                external_react_['createElement'](
                  'ul',
                  null,
                  Object.keys(flow.scopes || {}).map(function(scope) {
                    return external_react_['createElement'](
                      'li',
                      { key: scope },
                      external_react_['createElement']('code', null, scope),
                      ' - ',
                      external_react_['createElement'](Markdown_Markdown, {
                        inline: true,
                        source: flow.scopes[scope] || '',
                      }),
                    );
                  }),
                ),
              ),
              external_react_['createElement']('td', null, ' ', token, ' '),
            );
          };
          return OAuthFlow;
        })(external_react_['PureComponent']);

        var SecuritySchemes_SecurityDefs = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SecurityDefs, _super);
          function SecurityDefs() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.state = {
              tokens: {},
            };
            _this.mutateToken = function(scheme, id) {
              return function() {
                scheme.setToken(_this.state.tokens[id]);
              };
            };
            _this.setToken = function(id) {
              return function(token) {
                var tokens = _this.state.tokens;
                tokens[id] = token;
                _this.setState({
                  tokens: tokens,
                });
              };
            };
            return _this;
          }
          SecurityDefs.prototype.render = function() {
            var _this = this;
            return this.props.securitySchemes.schemes.map(function(scheme) {
              return external_react_['createElement'](
                Section,
                { id: scheme.sectionId, key: scheme.id },
                external_react_['createElement'](
                  Row,
                  null,
                  external_react_['createElement'](
                    MiddlePanel,
                    null,
                    external_react_['createElement'](
                      H2,
                      null,
                      external_react_['createElement'](ShareLink, { to: scheme.sectionId }),
                      scheme.id,
                    ),
                    external_react_['createElement'](Markdown_Markdown, {
                      source: scheme.description || '',
                    }),
                    external_react_['createElement'](
                      StyledMarkdownBlock,
                      null,
                      external_react_['createElement'](
                        'table',
                        { className: 'security-details' },
                        external_react_['createElement'](
                          'tbody',
                          null,
                          external_react_['createElement'](
                            'tr',
                            null,
                            external_react_['createElement']('th', null, ' Security Scheme Type '),
                            external_react_['createElement'](
                              'td',
                              null,
                              ' ',
                              AUTH_TYPES[scheme.type] || scheme.type,
                              ' ',
                            ),
                            external_react_['createElement']('td', null, ' Value '),
                          ),
                          scheme.apiKey
                            ? external_react_['createElement'](
                                'tr',
                                null,
                                external_react_['createElement'](
                                  'th',
                                  null,
                                  ' ',
                                  titleize(scheme.apiKey.in || ''),
                                  ' parameter name:',
                                ),
                                external_react_['createElement'](
                                  'td',
                                  null,
                                  ' ',
                                  scheme.apiKey.name,
                                  ' ',
                                ),
                                external_react_['createElement'](
                                  'td',
                                  null,
                                  ' ',
                                  scheme.token,
                                  ' ',
                                ),
                              )
                            : scheme.http
                            ? [
                                external_react_['createElement'](
                                  'tr',
                                  { key: 'scheme' },
                                  external_react_['createElement'](
                                    'th',
                                    null,
                                    ' HTTP Authorization Scheme ',
                                  ),
                                  external_react_['createElement'](
                                    'td',
                                    null,
                                    ' ',
                                    scheme.http.scheme,
                                    ' ',
                                  ),
                                  external_react_['createElement'](
                                    'td',
                                    null,
                                    ' ',
                                    scheme.token,
                                    ' ',
                                  ),
                                ),
                                scheme.http.scheme === 'bearer' &&
                                  scheme.http.bearerFormat &&
                                  external_react_['createElement'](
                                    'tr',
                                    { key: 'bearer' },
                                    external_react_['createElement']('th', null, ' Bearer format '),
                                    external_react_['createElement'](
                                      'td',
                                      null,
                                      ' "',
                                      scheme.http.bearerFormat,
                                      '" ',
                                    ),
                                    external_react_['createElement'](
                                      'td',
                                      null,
                                      ' ',
                                      scheme.token,
                                      ' ',
                                    ),
                                  ),
                              ]
                            : scheme.openId
                            ? external_react_['createElement'](
                                'tr',
                                null,
                                external_react_['createElement']('th', null, ' Connect URL '),
                                external_react_['createElement'](
                                  'td',
                                  null,
                                  external_react_['createElement'](
                                    'a',
                                    { target: '_blank', href: scheme.openId.connectUrl },
                                    scheme.openId.connectUrl,
                                  ),
                                ),
                                external_react_['createElement'](
                                  'td',
                                  null,
                                  ' ',
                                  scheme.token,
                                  ' ',
                                ),
                              )
                            : scheme.flows
                            ? Object.keys(scheme.flows).map(function(type) {
                                return external_react_['createElement'](SecuritySchemes_OAuthFlow, {
                                  key: type,
                                  type: type,
                                  token: scheme.token,
                                  flow: scheme.flows[type],
                                });
                              })
                            : null,
                        ),
                      ),
                    ),
                  ),
                  external_react_['createElement'](
                    DarkRightPanel,
                    null,
                    external_react_['createElement'](TokenGroup_TokenGroup, {
                      title: 'Enter ' + scheme.id,
                      description:
                        'You can add token here and store it to use in your request calls in this page.',
                      onChange: _this.setToken(scheme.sectionId),
                      onSubmit: _this.mutateToken(scheme, scheme.sectionId),
                    }),
                  ),
                ),
              );
            });
          };
          SecurityDefs = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            SecurityDefs,
          );
          return SecurityDefs;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/services/AppStore.ts
        var AppStore_a;

        function createStore(spec, specUrl, options) {
          if (options === void 0) {
            options = {};
          }
          return Object(external_tslib_['__awaiter'])(this, void 0, void 0, function() {
            var resolvedSpec;
            return Object(external_tslib_['__generator'])(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, loadAndBundleSpec(spec || specUrl)];
                case 1:
                  resolvedSpec = _a.sent();
                  return [2 /*return*/, new AppStore_AppStore(resolvedSpec, specUrl, options)];
              }
            });
          });
        }
        var AppStore_AppStore = /** @class */ (function() {
          function AppStore(spec, specUrl, options, createSearchIndex) {
            var _this = this;
            if (options === void 0) {
              options = {};
            }
            if (createSearchIndex === void 0) {
              createSearchIndex = true;
            }
            this.marker = new MarkerService_MarkerService();
            this.disposer = null;
            this.rawOptions = options;
            this.options = new RedocNormalizedOptions_RedocNormalizedOptions(
              options,
              DEFAULT_OPTIONS,
            );
            this.scroll = new ScrollService_ScrollService(this.options); // update position statically based on hash (in case of SSR)
            MenuStore_MenuStore.updateOnHistory(HistoryService_history.currentId, this.scroll);
            this.spec = new SpecStore_SpecStore(spec, specUrl, this.options);
            this.menu = new MenuStore_MenuStore(this.spec, this.scroll, HistoryService_history);
            if (!this.options.disableSearch) {
              this.search = new SearchStore_SearchStore();
              if (createSearchIndex) {
                this.search.indexItems(this.menu.items);
              }
              this.disposer = Object(external_mobx_['observe'])(
                this.menu,
                'activeItemIdx',
                function(change) {
                  _this.updateMarkOnMenu(change.newValue);
                },
              );
            }
          }
          /**
           * deserialize store
           * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
           */
          // TODO:
          AppStore.fromJS = function(state) {
            var inst = new AppStore(state.spec.data, state.spec.url, state.options, false);
            inst.menu.activeItemIdx = state.menu.activeItemIdx || 0;
            inst.menu.activate(inst.menu.flatItems[inst.menu.activeItemIdx]);
            if (!inst.options.disableSearch) {
              inst.search.load(state.searchIndex);
            }
            return inst;
          };
          AppStore.prototype.onDidMount = function() {
            this.menu.updateOnHistory();
            this.updateMarkOnMenu(this.menu.activeItemIdx);
          };
          AppStore.prototype.dispose = function() {
            this.scroll.dispose();
            this.menu.dispose();
            if (this.search) {
              this.search.dispose();
            }
            if (this.disposer != null) {
              this.disposer();
            }
          };
          /**
           * serializes store
           * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
           */
          // TODO: improve
          AppStore.prototype.toJS = function() {
            return Object(external_tslib_['__awaiter'])(this, void 0, void 0, function() {
              var _a, _b;
              return Object(external_tslib_['__generator'])(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _a = {
                      menu: {
                        activeItemIdx: this.menu.activeItemIdx,
                      },
                      spec: {
                        url: this.spec.parser.specUrl,
                        data: this.spec.parser.spec,
                      },
                    };
                    if (!this.search) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.search.toJS()];
                  case 1:
                    _b = _c.sent();
                    return [3 /*break*/, 3];
                  case 2:
                    _b = undefined;
                    _c.label = 3;
                  case 3:
                    return [
                      2 /*return*/,
                      ((_a.searchIndex = _b), (_a.options = this.rawOptions), _a),
                    ];
                }
              });
            });
          };
          AppStore.prototype.updateMarkOnMenu = function(idx) {
            var start = Math.max(0, idx);
            var end = Math.min(this.menu.flatItems.length, start + 5);
            var elements = [];
            for (var i = start; i < end; i++) {
              var elem = this.menu.getElementAt(i);
              if (!elem) {
                continue;
              }
              if (this.menu.flatItems[i].type === 'section') {
                elem = elem.parentElement.parentElement;
              }
              if (elem) {
                elements.push(elem);
              }
            }
            this.marker.addOnly(elements);
            this.marker.mark();
          };
          return AppStore;
        })();

        var DEFAULT_OPTIONS = {
          allowedMdComponents:
            ((AppStore_a = {}),
            (AppStore_a[SECURITY_DEFINITIONS_COMPONENT_NAME] = {
              component: SecuritySchemes_SecurityDefs,
              propsSelector: function(store) {
                return {
                  securitySchemes: store.spec.securitySchemes,
                };
              },
            }),
            (AppStore_a[SECURITY_DEFINITIONS_JSX_NAME] = {
              component: SecuritySchemes_SecurityDefs,
              propsSelector: function(store) {
                return {
                  securitySchemes: store.spec.securitySchemes,
                };
              },
            }),
            (AppStore_a[SCHEMA_DEFINITION_JSX_NAME] = {
              component: SchemaDefinition_SchemaDefinition,
              propsSelector: function(store) {
                return {
                  parser: store.spec.parser,
                  options: store.options,
                };
              },
            }),
            AppStore_a),
        };

        // CONCATENATED MODULE: ./src/services/index.ts

        // CONCATENATED MODULE: ./src/components/ApiInfo/styled.elements.ts

        var delimiterWidth = 15;
        var ApiInfoWrap = MiddlePanel;
        var ApiHeader = styled_components(H1)(
          ApiInfo_styled_elements_templateObject_1 ||
            (ApiInfo_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              ['\n  margin-top: 0;\n  margin-bottom: 0.5em;\n\n  ', ';\n'],
              ['\n  margin-top: 0;\n  margin-bottom: 0.5em;\n\n  ', ';\n'],
            )),
          extensionsHook('ApiHeader'),
        );
        var DownloadButton = styled_components.a(
          ApiInfo_styled_elements_templateObject_2 ||
            (ApiInfo_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  border: 1px solid ',
                ';\n  color: ',
                ';\n  font-weight: normal;\n  margin-left: 0.5em;\n  padding: 4px 8px 4px;\n  display: inline-block;\n  text-decoration: none;\n  cursor: pointer;\n\n  ',
                ';\n',
              ],
              [
                '\n  border: 1px solid ',
                ';\n  color: ',
                ';\n  font-weight: normal;\n  margin-left: 0.5em;\n  padding: 4px 8px 4px;\n  display: inline-block;\n  text-decoration: none;\n  cursor: pointer;\n\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
          function(props) {
            return props.theme.colors.primary.main;
          },
          extensionsHook('DownloadButton'),
        );
        var InfoSpan = styled_components.span(
          ApiInfo_styled_elements_templateObject_3 ||
            (ApiInfo_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                "\n  &::before {\n    content: '|';\n    display: ",
                ';\n    opacity: 0.5;\n    width: ',
                "px;\n    text-align: center;\n  }\n\n  &::after {\n    content: '|';\n    display: ",
                ';\n    opacity: 0.5;\n    width: ',
                'px;\n    text-align: center;\n  }\n\n  &:last-child::after {\n    display: none;\n  }\n',
              ],
              [
                "\n  &::before {\n    content: '|';\n    display: ",
                ';\n    opacity: 0.5;\n    width: ',
                "px;\n    text-align: center;\n  }\n\n  &::after {\n    content: '|';\n    display: ",
                ';\n    opacity: 0.5;\n    width: ',
                'px;\n    text-align: center;\n  }\n\n  &:last-child::after {\n    display: none;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.typography.direction === 'ltr' ? 'inline-block' : 'none';
          },
          delimiterWidth,
          function(props) {
            return props.theme.typography.direction === 'rtl' ? 'inline-block' : 'none';
          },
          delimiterWidth,
        );
        var InfoSpanBoxWrap = styled_components.div(
          ApiInfo_styled_elements_templateObject_4 ||
            (ApiInfo_styled_elements_templateObject_4 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  overflow: hidden;\n'], ['\n  overflow: hidden;\n'])),
        );
        var InfoSpanBox = styled_components.div(
          ApiInfo_styled_elements_templateObject_5 ||
            (ApiInfo_styled_elements_templateObject_5 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  display: flex;\n  flex-wrap: wrap;\n  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888\n  margin-left: -',
                'px;\n',
              ],
              [
                '\n  display: flex;\n  flex-wrap: wrap;\n  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888\n  margin-left: -',
                'px;\n',
              ],
            )),
          delimiterWidth,
        );
        var ApiInfo_styled_elements_templateObject_1,
          ApiInfo_styled_elements_templateObject_2,
          ApiInfo_styled_elements_templateObject_3,
          ApiInfo_styled_elements_templateObject_4,
          ApiInfo_styled_elements_templateObject_5;

        // CONCATENATED MODULE: ./src/components/ApiInfo/ApiInfo.tsx

        var ApiInfo_ApiInfo = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ApiInfo, _super);
          function ApiInfo() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.handleDownloadClick = function(e) {
              if (!e.target.href) {
                e.target.href = _this.props.store.spec.info.downloadLink;
              }
            };
            return _this;
          }
          ApiInfo.prototype.render = function() {
            var store = this.props.store;
            var _a = store.spec,
              info = _a.info,
              externalDocs = _a.externalDocs;
            var hideDownloadButton = store.options.hideDownloadButton;
            var downloadFilename = info.downloadFileName;
            var downloadLink = info.downloadLink;
            var license =
              (info.license &&
                external_react_['createElement'](
                  InfoSpan,
                  null,
                  'License: ',
                  external_react_['createElement'](
                    'a',
                    { href: info.license.url },
                    info.license.name,
                  ),
                )) ||
              null;
            var website =
              (info.contact &&
                info.contact.url &&
                external_react_['createElement'](
                  InfoSpan,
                  null,
                  'URL: ',
                  external_react_['createElement'](
                    'a',
                    { href: info.contact.url },
                    info.contact.url,
                  ),
                )) ||
              null;
            var email =
              (info.contact &&
                info.contact.email &&
                external_react_['createElement'](
                  InfoSpan,
                  null,
                  info.contact.name || 'E-mail',
                  ':',
                  ' ',
                  external_react_['createElement'](
                    'a',
                    { href: 'mailto:' + info.contact.email },
                    info.contact.email,
                  ),
                )) ||
              null;
            var terms =
              (info.termsOfService &&
                external_react_['createElement'](
                  InfoSpan,
                  null,
                  external_react_['createElement'](
                    'a',
                    { href: info.termsOfService },
                    'Terms of Service',
                  ),
                )) ||
              null;
            var version =
              (info.version &&
                external_react_['createElement']('span', null, '(', info.version, ')')) ||
              null;
            return external_react_['createElement'](
              Section,
              null,
              external_react_['createElement'](
                Row,
                null,
                external_react_['createElement'](
                  MiddlePanel,
                  { className: 'api-info' },
                  external_react_['createElement'](ApiHeader, null, info.title, ' ', version),
                  !hideDownloadButton &&
                    external_react_['createElement'](
                      'p',
                      null,
                      'Download OpenAPI specification:',
                      external_react_['createElement'](
                        DownloadButton,
                        {
                          download: downloadFilename,
                          target: '_blank',
                          href: downloadLink,
                          onClick: this.handleDownloadClick,
                        },
                        'Download',
                      ),
                    ),
                  external_react_['createElement'](
                    StyledMarkdownBlock,
                    null,
                    ((info.license || info.contact || info.termsOfService) &&
                      external_react_['createElement'](
                        InfoSpanBoxWrap,
                        null,
                        external_react_['createElement'](
                          InfoSpanBox,
                          null,
                          email,
                          ' ',
                          website,
                          ' ',
                          license,
                          ' ',
                          terms,
                        ),
                      )) ||
                      null,
                  ),
                  external_react_['createElement'](Markdown_Markdown, {
                    source: store.spec.info.description,
                  }),
                  externalDocs &&
                    external_react_['createElement'](ExternalDocumentation_ExternalDocumentation, {
                      externalDocs: externalDocs,
                    }),
                ),
              ),
            );
          };
          ApiInfo = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ApiInfo,
          );
          return ApiInfo;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/ApiInfo/index.ts

        // CONCATENATED MODULE: ./src/components/ApiLogo/styled.elements.tsx

        var LogoImgEl = styled_components.img(
          ApiLogo_styled_elements_templateObject_1 ||
            (ApiLogo_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  max-height: ',
                ';\n  max-width: ',
                ';\n  padding: ',
                ';\n  width: 100%;\n  display: block;\n',
              ],
              [
                '\n  max-height: ',
                ';\n  max-width: ',
                ';\n  padding: ',
                ';\n  width: 100%;\n  display: block;\n',
              ],
            )),
          function(props) {
            return props.theme.logo.maxHeight;
          },
          function(props) {
            return props.theme.logo.maxWidth;
          },
          function(props) {
            return props.theme.logo.gutter;
          },
        );
        var LogoWrap = styled_components.div(
          ApiLogo_styled_elements_templateObject_2 ||
            (ApiLogo_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  text-align: center;\n'], ['\n  text-align: center;\n'])),
        );
        var styled_elements_Link = styled_components.a(
          ApiLogo_styled_elements_templateObject_3 ||
            (ApiLogo_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n'])),
        );
        var styled_elements_LinkWrap = function(url) {
          return function(Component) {
            return external_react_['createElement'](styled_elements_Link, { href: url }, Component);
          };
        };
        var ApiLogo_styled_elements_templateObject_1,
          ApiLogo_styled_elements_templateObject_2,
          ApiLogo_styled_elements_templateObject_3;

        // CONCATENATED MODULE: ./src/components/ApiLogo/ApiLogo.tsx

        var ApiLogo_ApiLogo = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ApiLogo, _super);
          function ApiLogo() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ApiLogo.prototype.render = function() {
            var info = this.props.info;
            var logoInfo = info['x-logo'];
            if (!logoInfo || !logoInfo.url) {
              return null;
            }
            var logoHref = logoInfo.href || (info.contact && info.contact.url); // Use the english word logo if no alt text is provided
            var altText = logoInfo.altText ? logoInfo.altText : 'logo';
            var logo = external_react_['createElement'](LogoImgEl, {
              src: logoInfo.url,
              alt: altText,
            });
            return external_react_['createElement'](
              LogoWrap,
              {
                style: {
                  backgroundColor: logoInfo.backgroundColor,
                },
              },
              logoHref ? styled_elements_LinkWrap(logoHref)(logo) : logo,
            );
          };
          ApiLogo = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ApiLogo,
          );
          return ApiLogo;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Markdown/AdvancedMarkdown.tsx

        var AdvancedMarkdown_AdvancedMarkdown = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(AdvancedMarkdown, _super);
          function AdvancedMarkdown() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          AdvancedMarkdown.prototype.render = function() {
            var _this = this;
            return external_react_['createElement'](OptionsConsumer, null, function(options) {
              return external_react_['createElement'](Consumer, null, function(store) {
                return _this.renderWithOptionsAndStore(options, store);
              });
            });
          };
          AdvancedMarkdown.prototype.renderWithOptionsAndStore = function(options, store) {
            var _a = this.props,
              source = _a.source,
              _b = _a.htmlWrap,
              htmlWrap =
                _b === void 0
                  ? function(i) {
                      return i;
                    }
                  : _b;
            if (!store) {
              throw new Error('When using components in markdown, store prop must be provided');
            }
            var renderer = new MarkdownRenderer_MarkdownRenderer(options);
            var parts = renderer.renderMdWithComponents(source);
            if (!parts.length) {
              return null;
            }
            return parts.map(function(part, idx) {
              if (typeof part === 'string') {
                return external_react_['cloneElement'](
                  htmlWrap(
                    external_react_['createElement'](SanitizedMarkdownHTML, {
                      html: part,
                      inline: false,
                      compact: false,
                    }),
                  ),
                  {
                    key: idx,
                  },
                );
              }
              return external_react_['createElement'](
                part.component,
                Object(external_tslib_['__assign'])(
                  { key: idx },
                  Object(external_tslib_['__assign'])(
                    Object(external_tslib_['__assign'])({}, part.props),
                    part.propsSelector(store),
                  ),
                ),
              );
            });
          };
          return AdvancedMarkdown;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/ConsoleResponse/Response.tsx

        var Response_ConsoleResponse = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ConsoleResponse, _super);
          function ConsoleResponse(props) {
            var _this = _super.call(this, props) || this;
            _this.changeCollapse = function() {
              _this.setState({
                collapse: !_this.state.collapse,
              });
            };
            _this.state = {
              collapse: false,
            };
            return _this;
          }
          ConsoleResponse.prototype.render = function() {
            var _a = this.props.response,
              headers = _a.headers,
              type = _a.type,
              status = _a.status,
              statusText = _a.statusText,
              content = _a.content;
            var collapse = this.state.collapse;
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](RightPanelHeader, null, ' status: '),
              external_react_['createElement'](
                StatusWrapper,
                { className: 'status-' + type },
                ' ',
                status,
                ' ',
                statusText,
              ),
              external_react_['createElement'](RightPanelHeader, null, ' Response Payload '),
              external_react_['createElement'](
                JsonWrapper,
                null,
                external_react_['createElement'](JsonViewer, { data: content }),
              ),
              external_react_['createElement'](RightPanelHeader, null, ' Response Headers'),
              external_react_['createElement'](
                HeaderWrapper,
                null,
                external_react_['createElement'](
                  SourceCodeWrapper,
                  { className: 'collapse-' + collapse },
                  external_react_['createElement'](SourceCode_SourceCodeWithCopy, {
                    lang: 'json',
                    source: JSON.stringify(headers, null, 2),
                  }),
                ),
                collapse &&
                  external_react_['createElement'](
                    ShowMore,
                    { onClick: this.changeCollapse },
                    external_react_['createElement'](
                      'u',
                      null,
                      '+ show undocumented response headers',
                    ),
                  ),
              ),
            );
          };
          return ConsoleResponse;
        })(external_react_['PureComponent']);

        var HeaderWrapper = styled_components.div(
          Response_templateObject_1 ||
            (Response_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  color: white;\n  background-color: ',
                ';\n  padding: 10px 0 18px;\n  margin: 10px 0;\n  height: 100%;\n   div div div {\n        display: none !important;\n   }\n   div pre span:first-child {\n        display: none !important;\n   }\n   div pre span:last-child {\n        display: none !important;\n   }\n   div pre {\n        height: 100%;\n        overflow: hidden;\n   }\n   div {\n        height: 100%;\n   }\n',
              ],
              [
                '\n  color: white;\n  background-color: ',
                ';\n  padding: 10px 0 18px;\n  margin: 10px 0;\n  height: 100%;\n   div div div {\n        display: none !important;\n   }\n   div pre span:first-child {\n        display: none !important;\n   }\n   div pre span:last-child {\n        display: none !important;\n   }\n   div pre {\n        height: 100%;\n        overflow: hidden;\n   }\n   div {\n        height: 100%;\n   }\n',
              ],
            )),
          function(props) {
            return props.theme.codeSample.backgroundColor;
          },
        );
        var SourceCodeWrapper = styled_components.div(
          Response_templateObject_2 ||
            (Response_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  &.collapse-false {\n      height: 89px;\n    }\n    &.collapse-true {\n      height: auto;\n    }\n',
              ],
              [
                '\n  &.collapse-false {\n      height: 89px;\n    }\n    &.collapse-true {\n      height: auto;\n    }\n',
              ],
            )),
        );
        var JsonWrapper = styled_components.div(
          Response_templateObject_3 ||
            (Response_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  color: white;\n  background-color: ',
                ';\n  padding: 10px;\n  margin: 10px 0;\n',
              ],
              [
                '\n  color: white;\n  background-color: ',
                ';\n  padding: 10px;\n  margin: 10px 0;\n',
              ],
            )),
          function(props) {
            return props.theme.codeSample.backgroundColor;
          },
        );
        var StatusWrapper = styled_components.div(
          Response_templateObject_4 ||
            (Response_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  &.status-success {\n  color: #00ff1c;\n  }\n  &.status-redirect {\n    color: ',
                ';\n  }\n  &.status-info {\n    color: ',
                ';\n  }\n  &.status-error {\n    color: ',
                ';\n  }\n  color: white;\n  background-color: ',
                ';\n  padding: 10px;\n  margin: 10px 0;\n',
              ],
              [
                '\n  &.status-success {\n  color: #00ff1c;\n  }\n  &.status-redirect {\n    color: ',
                ';\n  }\n  &.status-info {\n    color: ',
                ';\n  }\n  &.status-error {\n    color: ',
                ';\n  }\n  color: white;\n  background-color: ',
                ';\n  padding: 10px;\n  margin: 10px 0;\n',
              ],
            )),
          function(props) {
            return props.theme.colors.responses.redirect.color;
          },
          function(props) {
            return props.theme.colors.responses.info.color;
          },
          function(props) {
            return props.theme.colors.responses.error.color;
          },
          function(props) {
            return props.theme.codeSample.backgroundColor;
          },
        );
        var ShowMore = styled_components.div(
          Response_templateObject_5 ||
            (Response_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  text-align: center;\n  u {\n    cursor: pointer;\n  }\n'],
              ['\n  text-align: center;\n  u {\n    cursor: pointer;\n  }\n'],
            )),
        );
        var Response_templateObject_1,
          Response_templateObject_2,
          Response_templateObject_3,
          Response_templateObject_4,
          Response_templateObject_5;

        // EXTERNAL MODULE: external "react-ace"
        var external_react_ace_ = __webpack_require__(41);
        var external_react_ace_default = /*#__PURE__*/ __webpack_require__.n(external_react_ace_);

        // EXTERNAL MODULE: external "brace/mode/curly"
        var curly_ = __webpack_require__(83);

        // EXTERNAL MODULE: external "brace/mode/json"
        var json_ = __webpack_require__(84);

        // EXTERNAL MODULE: external "brace/theme/github"
        var github_ = __webpack_require__(85);

        // EXTERNAL MODULE: external "brace/theme/monokai"
        var monokai_ = __webpack_require__(86);

        // CONCATENATED MODULE: ./src/components/Console/ConsoleEditorWrapper.ts

        var ConsoleEditorWrapper = styled_components.div(
          ConsoleEditorWrapper_templateObject_1 ||
            (ConsoleEditorWrapper_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  font-family: ',
                ';\n  font-size: ',
                ' !important;\n  direction: ltr;\n  white-space: ',
                ';\n  contain: content;\n  overflow-x: auto;\n  background: #11171a !important;\n  padding: 5px 0;\n\n  & .ace_editor {\n    background: #11171a !important;\n    width: 100% !important;\n  }\n  & .ace_editor .ace_marker-layer .ace_selection, & .ace_editor .ace_marker-layer .ace_selected-word {\n    background: ',
                ' !important;\n    border-color: ',
                ' !important;\n  }\n  & .ace_editor .ace_marker-layer .ace_active-line {\n    background: rgba(0, 0, 0, 0.2);\n  }\n  & .ace_editor .ace_line, & .ace_editor .ace_cursor {\n    color: #aaa;\n  }\n  & .ace_editor .ace_marker-layer .ace_bracket {\n    border: none !important;\n  }\n  & .ace_editor .ace_line .ace_fold {\n    background: none !important;\n    color: #aaa;\n    border: none;\n  }\n  & .ace_editor .ace_line .ace_fold:hover {\n    background: none !important;\n  }\n  & .ace_editor .ace_string {\n    color: #71e4ff;\n  }\n  & .ace_editor .ace_variable {\n    color: #a0fbaa;\n  }\n  & .ace_editor .ace_indent-guide {\n    background: none;\n    color: rgba(255, 255, 255, 0.3)\n  }\n  & .ace_editor .ace_indent-guide::after {\n    content: "|";\n  }\n  & .ace_editor .ace_gutter {\n    background: ',
                ' !important;\n    color: #fff !important;\n  }\n  & .ace_editor .ace_gutter .ace_fold-widget {\n    background-image: none;\n  }\n  & .ace_editor .ace_gutter .ace_fold-widget.ace_open::after {\n    content: "-";\n  }\n  & .ace_editor .ace_gutter .ace_fold-widget.ace_closed::after {\n    content: "+";\n  }\n  & .ace_editor .ace_gutter .ace_gutter-active-line {\n    background: rgba(0, 0, 0, 0.2) !important;\n  }\n  & .ace_editor .ace_gutter .ace_gutter-cell.ace_error {\n    background: none !important;\n  }\n  & .ace_editor .ace_gutter .ace_gutter-cell.ace_error::before {\n    position: absolute;\n    color: red;\n    content: "X";\n    left: 0.5em;\n  }\n',
              ],
              [
                '\n  font-family: ',
                ';\n  font-size: ',
                ' !important;\n  direction: ltr;\n  white-space: ',
                ';\n  contain: content;\n  overflow-x: auto;\n  background: #11171a !important;\n  padding: 5px 0;\n\n  & .ace_editor {\n    background: #11171a !important;\n    width: 100% !important;\n  }\n  & .ace_editor .ace_marker-layer .ace_selection, & .ace_editor .ace_marker-layer .ace_selected-word {\n    background: ',
                ' !important;\n    border-color: ',
                ' !important;\n  }\n  & .ace_editor .ace_marker-layer .ace_active-line {\n    background: rgba(0, 0, 0, 0.2);\n  }\n  & .ace_editor .ace_line, & .ace_editor .ace_cursor {\n    color: #aaa;\n  }\n  & .ace_editor .ace_marker-layer .ace_bracket {\n    border: none !important;\n  }\n  & .ace_editor .ace_line .ace_fold {\n    background: none !important;\n    color: #aaa;\n    border: none;\n  }\n  & .ace_editor .ace_line .ace_fold:hover {\n    background: none !important;\n  }\n  & .ace_editor .ace_string {\n    color: #71e4ff;\n  }\n  & .ace_editor .ace_variable {\n    color: #a0fbaa;\n  }\n  & .ace_editor .ace_indent-guide {\n    background: none;\n    color: rgba(255, 255, 255, 0.3)\n  }\n  & .ace_editor .ace_indent-guide::after {\n    content: "|";\n  }\n  & .ace_editor .ace_gutter {\n    background: ',
                ' !important;\n    color: #fff !important;\n  }\n  & .ace_editor .ace_gutter .ace_fold-widget {\n    background-image: none;\n  }\n  & .ace_editor .ace_gutter .ace_fold-widget.ace_open::after {\n    content: "-";\n  }\n  & .ace_editor .ace_gutter .ace_fold-widget.ace_closed::after {\n    content: "+";\n  }\n  & .ace_editor .ace_gutter .ace_gutter-active-line {\n    background: rgba(0, 0, 0, 0.2) !important;\n  }\n  & .ace_editor .ace_gutter .ace_gutter-cell.ace_error {\n    background: none !important;\n  }\n  & .ace_editor .ace_gutter .ace_gutter-cell.ace_error::before {\n    position: absolute;\n    color: red;\n    content: "X";\n    left: 0.5em;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.code.wrap ? 'pre-wrap' : 'pre';
          },
          Object(external_polished_['lighten'])(0.05, '#11171a'),
          Object(external_polished_['lighten'])(0.05, '#11171a'),
          Object(external_polished_['lighten'])(0.01, '#11171a'),
        );
        var ConsoleEditorWrapper_templateObject_1;

        // CONCATENATED MODULE: ./src/components/Console/ConsoleEditor.tsx

        var ConsoleEditor_ConsoleEditor = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ConsoleEditor, _super);
          function ConsoleEditor() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ConsoleEditor.prototype.render = function() {
            var _this = this;
            var mediaTypes = this.props.mediaTypes;
            if (!mediaTypes.length) {
              return null;
            }
            var sample = {};
            for (var _i = 0, mediaTypes_1 = mediaTypes; _i < mediaTypes_1.length; _i++) {
              var mediaType = mediaTypes_1[_i];
              if (mediaType.name.indexOf('json') > -1) {
                if (mediaType.examples) {
                  var example = getDefaultOrFirst(mediaType.examples);
                  sample = example && example.value;
                }
                break;
              }
            }
            return external_react_['createElement'](
              ConsoleEditorWrapper,
              null,
              external_react_['createElement'](external_react_ace_default.a, {
                setOptions: {
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                  fontFamily: 'Courier,monospace,Vazir',
                  displayIndentGuides: false,
                },
                fontSize: 13,
                style: {
                  lineHeight: '23px',
                },
                mode: 'json',
                name: 'request-builder-editor',
                editorProps: {
                  $blockScrolling: true,
                },
                value: JSON.stringify(sample, null, 2),
                ref: function(ace) {
                  return (_this.editor = ace);
                },
              }),
            );
          };
          ConsoleEditor = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ConsoleEditor,
          );
          return ConsoleEditor;
        })(external_react_['Component']);

        function getDefaultOrFirst(object) {
          if (typeof object === 'object') {
            if (typeof object.default === 'object') {
              return object.default;
            } else {
              return object[Object.keys(object)[0]];
            }
          } else {
            return false;
          }
        }

        // CONCATENATED MODULE: ./src/components/Console/ConsoleViewer.tsx

        var qs = __webpack_require__(87);
        var ConsoleViewer_ConsoleViewer = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ConsoleViewer, _super);
          function ConsoleViewer(props) {
            var _this = _super.call(this, props) || this;
            _this.visited = new Set();
            _this.onClickSend = function() {
              return Object(external_tslib_['__awaiter'])(_this, void 0, void 0, function() {
                var ace,
                  _a,
                  operation,
                  schemes,
                  _b,
                  additionalHeaders,
                  _c,
                  urlIndex,
                  value,
                  content,
                  mediaType,
                  endpoint,
                  contentType,
                  contentTypeHeader,
                  schemeMapper,
                  securityHeaders,
                  headers,
                  result,
                  error_1;
                return Object(external_tslib_['__generator'])(this, function(_d) {
                  switch (_d.label) {
                    case 0:
                      ace = this.consoleEditor && this.consoleEditor.editor;
                      (_a = this.props),
                        (operation = _a.operation),
                        (schemes = _a.securitySchemes.schemes),
                        (_b = _a.additionalHeaders),
                        (additionalHeaders = _b === void 0 ? {} : _b),
                        (_c = _a.urlIndex),
                        (urlIndex = _c === void 0 ? 0 : _c);
                      value = ace && ace.editor.getValue();
                      content = operation.requestBody && operation.requestBody.content;
                      mediaType = content && content.mediaTypes[content.activeMimeIdx];
                      endpoint = {
                        method: operation.httpVerb,
                        path: operation.servers[urlIndex].url + operation.path,
                      };
                      if (value) {
                        value = JSON.parse(value);
                      }
                      contentType = (mediaType && mediaType.name) || 'application/json';
                      contentTypeHeader = {
                        'Content-Type': contentType,
                      };
                      schemeMapper = new Map();
                      schemes.forEach(function(scheme) {
                        schemeMapper.set(scheme.id, scheme);
                      });
                      securityHeaders = {};
                      operation.security.forEach(function(_a) {
                        var id = _a.schemes[0].id;
                        if (schemeMapper.has(id)) {
                          // this part of code needs a ts-ignore because typescript couldn't detect that schemeMapper.get(id) -
                          // has been checked to avoid token of undefined.
                          // @ts-ignore
                          securityHeaders[id] = schemeMapper.get(id).token;
                        }
                      });
                      headers = Object(external_tslib_['__assign'])(
                        Object(external_tslib_['__assign'])(
                          Object(external_tslib_['__assign'])({}, additionalHeaders),
                          contentTypeHeader,
                        ),
                        securityHeaders,
                      );
                      _d.label = 1;
                    case 1:
                      _d.trys.push([1, 3, , 4]);
                      return [4 /*yield*/, this.invoke(endpoint, value, headers)];
                    case 2:
                      result = _d.sent();
                      this.setState({
                        result: result,
                      });
                      return [3 /*break*/, 4];
                    case 3:
                      error_1 = _d.sent();
                      this.setState({
                        result: error_1,
                      });
                      return [3 /*break*/, 4];
                    case 4:
                      return [2 /*return*/];
                  }
                });
              });
            };
            _this.state = {
              result: null,
            };
            return _this;
          }
          /*
           * If we have a url like foo/bar/{uuid} uuid will be replaced with what user has typed in.
           */
          ConsoleViewer.prototype.addParamsToUrl = function(url, params) {
            var queryParamPrefix = '{';
            var queryParamSuffix = '}';
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
              var fieldModel = params_1[_i];
              if (
                url.indexOf('' + queryParamPrefix + fieldModel.name + queryParamSuffix) > -1 &&
                fieldModel.$value.length > 0
              ) {
                url = url.replace(
                  '' + queryParamPrefix + fieldModel.name + queryParamSuffix,
                  fieldModel.$value,
                );
              }
            }
            if (url.split(queryParamPrefix).length > 1) {
              throw Error('** we have missing query params ** ' + url);
            }
            return url;
          };
          ConsoleViewer.prototype.invoke = function(endpoint, body, headers) {
            if (headers === void 0) {
              headers = {};
            }
            return Object(external_tslib_['__awaiter'])(this, void 0, void 0, function() {
              var operation,
                url,
                myHeaders,
                _i,
                _a,
                _b,
                key,
                value,
                request,
                response,
                content,
                ok,
                status_1,
                statusText,
                redirected,
                error_2;
              return Object(external_tslib_['__generator'])(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    _c.trys.push([0, 3, , 4]);
                    operation = this.props.operation;
                    url = this.addParamsToUrl(endpoint.path, operation.parameters || []);
                    if (endpoint.method.toLocaleLowerCase() === 'get') {
                      url = url + '?' + qs.stringify(body || '');
                    }
                    myHeaders = new Headers();
                    for (_i = 0, _a = Object.entries(headers); _i < _a.length; _i++) {
                      (_b = _a[_i]), (key = _b[0]), (value = _b[1]);
                      myHeaders.append(key, '' + value);
                    }
                    request = new Request(url, {
                      method: endpoint.method,
                      redirect: 'manual',
                      headers: myHeaders,
                      body: body ? JSON.stringify(body) : undefined,
                    });
                    return [4 /*yield*/, fetch(request)];
                  case 1:
                    response = _c.sent();
                    return [4 /*yield*/, response.json()];
                  case 2:
                    content = _c.sent();
                    (ok = response.ok),
                      (status_1 = response.status),
                      (statusText = response.statusText),
                      (redirected = response.redirected);
                    return [
                      2 /*return*/,
                      {
                        content: content,
                        ok: ok,
                        status: status_1,
                        statusText: statusText,
                        redirected: redirected,
                        headers: response.headers,
                        url: response.url,
                      },
                    ];
                  case 3:
                    error_2 = _c.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          ConsoleViewer.prototype.render = function() {
            var _this = this;
            var operation = this.props.operation;
            var requestBodyContent =
              operation.requestBody &&
              operation.requestBody.content &&
              operation.requestBody.content;
            var hasBodySample = requestBodyContent && requestBodyContent.hasSample;
            var mediaTypes =
              requestBodyContent && requestBodyContent.mediaTypes
                ? requestBodyContent.mediaTypes
                : [];
            var result = this.state.result;
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement']('h3', null, ' Request '),
              hasBodySample &&
                external_react_['createElement'](ConsoleEditor_ConsoleEditor, {
                  mediaTypes: mediaTypes,
                  ref: function(editor) {
                    return (_this.consoleEditor = editor);
                  },
                }),
              external_react_['createElement'](
                FlexLayoutReverse,
                null,
                external_react_['createElement'](
                  SubmitButton,
                  { onClick: this.onClickSend },
                  'Send Request',
                ),
              ),
              result &&
                external_react_['createElement'](Response_ConsoleResponse, { response: result }),
            );
          };
          ConsoleViewer = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ConsoleViewer,
          );
          return ConsoleViewer;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/SelectOnClick/SelectOnClick.tsx

        var SelectOnClick_SelectOnClick = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SelectOnClick, _super);
          function SelectOnClick() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.handleClick = function() {
              ClipboardService.selectElement(_this.child);
              _this.props.onSelectUrl();
            };
            return _this;
          }
          SelectOnClick.prototype.render = function() {
            var _this = this;
            var children = this.props.children;
            return external_react_['createElement'](
              SelectArea,
              {
                ref: function(el) {
                  return (_this.child = el);
                },
                onClick: this.handleClick.bind(this, children),
              },
              children,
            );
          };
          return SelectOnClick;
        })(external_react_['PureComponent']);

        var SelectArea = styled_components.div(
          SelectOnClick_templateObject_1 ||
            (SelectOnClick_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  width: 80%;\n'],
              ['\n  width: 80%;\n'],
            )),
        );
        var SelectOnClick_templateObject_1;

        // CONCATENATED MODULE: ./src/components/Endpoint/styled.elements.ts

        var OperationEndpointWrap = styled_components.div(
          Endpoint_styled_elements_templateObject_1 ||
            (Endpoint_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 5px;\n  .showToolTip {\n    visibility: initial;\n    background-color: white;\n    color: black;\n    padding: 3px;\n    position: initial;\n    width: 53px;\n    text-align: center;\n    margin-bottom: 10px;\n    border-radius: 4px;\n  };\n  .hideToolTip {\n    visibility:hidden;\n    padding: 3px;\n    position: initial;\n    width: 53px;\n    text-align: center;\n    margin-bottom: 10px;\n    border-radius: 4px;\n  }\n',
              ],
              [
                '\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 5px;\n  .showToolTip {\n    visibility: initial;\n    background-color: white;\n    color: black;\n    padding: 3px;\n    position: initial;\n    width: 53px;\n    text-align: center;\n    margin-bottom: 10px;\n    border-radius: 4px;\n  };\n  .hideToolTip {\n    visibility:hidden;\n    padding: 3px;\n    position: initial;\n    width: 53px;\n    text-align: center;\n    margin-bottom: 10px;\n    border-radius: 4px;\n  }\n',
              ],
            )),
        );
        var ServerRelativeURL = styled_components.span(
          Endpoint_styled_elements_templateObject_2 ||
            (Endpoint_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  font-family: ',
                ';\n  margin-left: 10px;\n  flex: 1;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n',
              ],
              [
                '\n  font-family: ',
                ';\n  margin-left: 10px;\n  flex: 1;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n',
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
        );
        var EndpointInfo = styled_components.div(
          Endpoint_styled_elements_templateObject_3 ||
            (Endpoint_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  padding: 10px 30px 10px ',
                ';\n  border-radius: ',
                ';\n  background-color: ',
                ';\n  display: flex;\n  white-space: nowrap;\n  align-items: center;\n  border: ',
                ';\n  border-bottom: ',
                ';\n  transition: border-color 0.25s ease;\n  direction: ltr;\n\n  ',
                '\n\n  .',
                ' {\n    color: ',
                '\n  }\n',
              ],
              [
                '\n  padding: 10px 30px 10px ',
                ';\n  border-radius: ',
                ';\n  background-color: ',
                ';\n  display: flex;\n  white-space: nowrap;\n  align-items: center;\n  border: ',
                ';\n  border-bottom: ',
                ';\n  transition: border-color 0.25s ease;\n  direction: ltr;\n\n  ',
                '\n\n  .',
                ' {\n    color: ',
                '\n  }\n',
              ],
            )),
          function(props) {
            return props.inverted ? '10px' : '20px';
          },
          function(props) {
            return props.inverted ? '0' : '4px 4px 0 0';
          },
          function(props) {
            return props.inverted ? 'transparent' : props.theme.codeSample.backgroundColor;
          },
          function(props) {
            return props.inverted ? '0' : '1px solid transparent';
          },
          function(props) {
            return props.inverted ? '1px solid #ccc' : '0';
          },
          function(props) {
            return (
              (props.expanded &&
                !props.inverted &&
                'border-color: ' + props.theme.colors.border.dark + ';') ||
              ''
            );
          },
          ServerRelativeURL,
          function(props) {
            return props.inverted ? props.theme.colors.text.primary : '#ffffff';
          },
        );
        var HttpVerb = styled_components.span.attrs(function(props) {
          return {
            className: 'http-verb ' + props.type,
          };
        })(
          Endpoint_styled_elements_templateObject_4 ||
            (Endpoint_styled_elements_templateObject_4 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  font-size: 0.929em;\n  line-height: 20px;\n  background-color: ',
                ';\n  color: #ffffff;\n  padding: 3px 10px;\n  text-transform: uppercase;\n  font-family: ',
                ';\n  margin: 0;\n',
              ],
              [
                '\n  font-size: 0.929em;\n  line-height: 20px;\n  background-color: ',
                ';\n  color: #ffffff;\n  padding: 3px 10px;\n  text-transform: uppercase;\n  font-family: ',
                ';\n  margin: 0;\n',
              ],
            )),
          function(props) {
            return props.theme.colors.http[props.type] || '#999999';
          },
          function(props) {
            return props.theme.typography.headings.fontFamily;
          },
        );
        var ServersOverlay = styled_components.div(
          Endpoint_styled_elements_templateObject_5 ||
            (Endpoint_styled_elements_templateObject_5 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  background: #fafafa;\n  color: #263238;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);\n  overflow: hidden;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: all 0.25s ease;\n  text-align: ',
                ';\n  ',
                '\n',
              ],
              [
                '\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  background: #fafafa;\n  color: #263238;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);\n  overflow: hidden;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: all 0.25s ease;\n  text-align: ',
                ';\n  ',
                '\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'right' : 'left';
          },
          function(props) {
            return props.expanded ? '' : 'transform: translateY(-50%) scaleY(0);';
          },
        );
        var ServerItem = styled_components.div(
          styled_elements_templateObject_6 ||
            (styled_elements_templateObject_6 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  padding: 10px;\n  background-color: #002c2d;\n  color: white;\n  display: flex;\n  flex-wrap: nowrap;\n  &.selected {\n      background-color: #3c7173;\n  }\n  div:first-child {\n      width: 20%;\n      padding-top: 5px;\n      }\n',
              ],
              [
                '\n  padding: 10px;\n  background-color: #002c2d;\n  color: white;\n  display: flex;\n  flex-wrap: nowrap;\n  &.selected {\n      background-color: #3c7173;\n  }\n  div:first-child {\n      width: 20%;\n      padding-top: 5px;\n      }\n',
              ],
            )),
        );
        var ServerUrl = styled_components.div(
          styled_elements_templateObject_7 ||
            (styled_elements_templateObject_7 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  text-align: left;\n  user-select: none;\n  padding: 5px !important;\n  background-color: #ffffff33;\n  word-break: break-all;\n  width: 100% !important;\n  color: #00ff1c;\n  > span {\n    color: white;\n  };\n',
              ],
              [
                '\n  text-align: left;\n  user-select: none;\n  padding: 5px !important;\n  background-color: #ffffff33;\n  word-break: break-all;\n  width: 100% !important;\n  color: #00ff1c;\n  > span {\n    color: white;\n  };\n',
              ],
            )),
        );
        var Endpoint_styled_elements_templateObject_1,
          Endpoint_styled_elements_templateObject_2,
          Endpoint_styled_elements_templateObject_3,
          Endpoint_styled_elements_templateObject_4,
          Endpoint_styled_elements_templateObject_5,
          styled_elements_templateObject_6,
          styled_elements_templateObject_7;

        // CONCATENATED MODULE: ./src/components/Endpoint/Endpoint.tsx

        var Endpoint_Endpoint = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Endpoint, _super);
          function Endpoint(props) {
            var _this = _super.call(this, props) || this;
            _this.toggle = function() {
              _this.setState({
                expanded: !_this.state.expanded,
              });
            };
            _this.state = {
              expanded: false,
              selectedItem: 0,
              tooltipShown: false,
            };
            return _this;
          }
          Endpoint.prototype.render = function() {
            var _this = this;
            var _a = this.props,
              operation = _a.operation,
              inverted = _a.inverted,
              hideHostname = _a.hideHostname;
            var expanded = this.state.expanded; // TODO: highlight server variables, e.g. https://{user}.test.com
            return external_react_['createElement'](OptionsContext.Consumer, null, function(
              options,
            ) {
              return external_react_['createElement'](
                OperationEndpointWrap,
                null,
                external_react_['createElement'](
                  'div',
                  { className: _this.state.tooltipShown === true ? 'showToolTip' : 'hideToolTip' },
                  'Copied',
                ),
                external_react_['createElement'](
                  EndpointInfo,
                  { onClick: _this.toggle, expanded: expanded, inverted: inverted },
                  external_react_['createElement'](
                    HttpVerb,
                    { type: operation.httpVerb },
                    ' ',
                    operation.httpVerb,
                  ),
                  ' ',
                  external_react_['createElement'](ServerRelativeURL, null, operation.path),
                  external_react_['createElement'](ShelfIcon, {
                    float: 'right',
                    color: inverted ? 'black' : 'white',
                    size: '20px',
                    direction: expanded ? 'up' : 'down',
                    style: {
                      marginRight: '-25px',
                    },
                  }),
                ),
                external_react_['createElement'](
                  ServersOverlay,
                  { expanded: expanded },
                  operation.servers.map(function(server, index) {
                    var normalizedUrl = options.expandDefaultServerVariables
                      ? expandDefaultServerVariables(server.url, server.variables)
                      : server.url;
                    return external_react_['createElement'](
                      ServerItem,
                      {
                        className: _this.state.selectedItem === index ? 'selected' : '',
                        key: normalizedUrl,
                      },
                      external_react_['createElement'](Markdown_Markdown, {
                        onSelectUrl: _this.handleUrl.bind(_this, index),
                        source: server.description || '',
                        compact: true,
                      }),
                      external_react_['createElement'](
                        SelectOnClick_SelectOnClick,
                        { onSelectUrl: _this.handleUrl.bind(_this, index) },
                        external_react_['createElement'](
                          ServerUrl,
                          null,
                          external_react_['createElement'](
                            'span',
                            null,
                            hideHostname || options.hideHostname
                              ? getBasePath(normalizedUrl)
                              : normalizedUrl,
                          ),
                          operation.path,
                        ),
                      ),
                    );
                  }),
                ),
              );
            });
          };
          Endpoint.prototype.handleUrl = function(url) {
            var _this = this;
            this.props.handleUrl(url);
            this.setState({
              selectedItem: url,
              expanded: false,
              tooltipShown: true,
            });
            ClipboardService.copyCustom(
              this.props.operation.servers[url].url + this.props.operation.path,
            );
            setTimeout(function() {
              _this.setState({
                tooltipShown: false,
              });
            }, 1000);
          };
          return Endpoint;
        })(external_react_['Component']);

        // EXTERNAL MODULE: external "react-switch"
        var external_react_switch_ = __webpack_require__(42);
        var external_react_switch_default = /*#__PURE__*/ __webpack_require__.n(
          external_react_switch_,
        );

        // CONCATENATED MODULE: ./src/common-elements/SwitchBox.tsx

        var CustomFlexLayout = styled_components(FlexLayout)(
          SwitchBox_templateObject_1 ||
            (SwitchBox_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  align-items: center;\n'],
              ['\n  align-items: center;\n'],
            )),
        );
        var SwitchBox_Label = styled_components.label(
          SwitchBox_templateObject_2 ||
            (SwitchBox_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: ', '\n  margin-left: 10px;\n  font-size: 120%;\n'],
              ['\n  color: ', '\n  margin-left: 10px;\n  font-size: 120%;\n'],
            )),
          function(props) {
            return props.active
              ? props.theme.colors.success.main
              : props.theme.colors.text.secondary;
          },
        );
        var SwitchBox_SwitchBox = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SwitchBox, _super);
          function SwitchBox() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.id = 'toggle-id-' + Date.now();
            return _this;
          }
          SwitchBox.prototype.render = function() {
            var _a = this.props,
              label = _a.label,
              checked = _a.checked,
              onClick = _a.onClick;
            return external_react_['createElement'](
              CustomFlexLayout,
              null,
              external_react_['createElement'](external_react_switch_default.a, {
                id: this.id,
                onChange: onClick,
                checked: checked,
                uncheckedIcon: false,
              }),
              external_react_['createElement'](
                SwitchBox_Label,
                { active: checked, htmlFor: this.id },
                label,
              ),
            );
          };
          return SwitchBox;
        })(external_react_['PureComponent']);

        var SwitchBox_templateObject_1, SwitchBox_templateObject_2;

        // CONCATENATED MODULE: ./src/components/Parameters/ParametersGroup.tsx

        var ParametersGroup_ParametersGroup = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ParametersGroup, _super);
          function ParametersGroup() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ParametersGroup.prototype.render = function() {
            var _a = this.props,
              place = _a.place,
              parameters = _a.parameters;
            if (!parameters || !parameters.length) {
              return null;
            }
            return external_react_['createElement'](
              'div',
              { key: place },
              external_react_['createElement'](UnderlinedHeader, null, place, ' Parameters'),
              external_react_['createElement'](
                PropertiesTable,
                null,
                external_react_['createElement'](
                  'tbody',
                  null,
                  mapWithLast(parameters, function(field, isLast) {
                    return external_react_['createElement'](Field_Field, {
                      key: field.name,
                      isLast: isLast,
                      field: field,
                      showExamples: true,
                    });
                  }),
                ),
              ),
            );
          };
          return ParametersGroup;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/MediaTypeSwitch/MediaTypesSwitch.tsx

        var MediaTypesSwitch_MediaTypesSwitch = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(MediaTypesSwitch, _super);
          function MediaTypesSwitch() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.switchMedia = function(_a) {
              var value = _a.value;
              if (_this.props.content) {
                _this.props.content.activate(parseInt(value, 10));
              }
            };
            return _this;
          }
          MediaTypesSwitch.prototype.render = function() {
            var _this = this;
            var content = this.props.content;
            if (!content || !content.mediaTypes || !content.mediaTypes.length) {
              return null;
            }
            var activeMimeIdx = content.activeMimeIdx;
            var options = content.mediaTypes.map(function(mime, idx) {
              return {
                label: mime.name,
                value: idx.toString(),
              };
            });
            var Wrapper = function(_a) {
              var children = _a.children;
              return _this.props.withLabel
                ? external_react_['createElement'](
                    DropdownWrapper,
                    null,
                    external_react_['createElement'](DropdownLabel, null, 'Content type'),
                    children,
                  )
                : children;
            };
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](
                Wrapper,
                null,
                this.props.renderDropdown({
                  value: options[activeMimeIdx],
                  options: options,
                  onChange: this.switchMedia,
                }),
              ),
              this.props.children(content.active),
            );
          };
          MediaTypesSwitch = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            MediaTypesSwitch,
          );
          return MediaTypesSwitch;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Parameters/Parameters.tsx

        function safePush(obj, prop, item) {
          if (!obj[prop]) {
            obj[prop] = [];
          }
          obj[prop].push(item);
        }
        var PARAM_PLACES = ['path', 'query', 'cookie', 'header'];
        var Parameters_Parameters = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Parameters, _super);
          function Parameters() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Parameters.prototype.orderParams = function(params) {
            var res = {};
            params.forEach(function(param) {
              safePush(res, param.in, param);
            });
            return res;
          };
          Parameters.prototype.render = function() {
            var _a = this.props,
              body = _a.body,
              _b = _a.parameters,
              parameters = _b === void 0 ? [] : _b;
            if (body === undefined && parameters === undefined) {
              return null;
            }
            var paramsMap = this.orderParams(parameters);
            var paramsPlaces = parameters.length > 0 ? PARAM_PLACES : [];
            var bodyContent = body && body.content;
            var bodyDescription = body && body.description;
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              paramsPlaces.map(function(place) {
                return external_react_['createElement'](ParametersGroup_ParametersGroup, {
                  key: place,
                  place: place,
                  parameters: paramsMap[place],
                });
              }),
              bodyContent &&
                external_react_['createElement'](BodyContent, {
                  content: bodyContent,
                  description: bodyDescription,
                }),
            );
          };
          return Parameters;
        })(external_react_['PureComponent']);

        function DropdownWithinHeader(props) {
          return external_react_['createElement'](
            UnderlinedHeader,
            { key: 'header' },
            'Request Body schema: ',
            external_react_['createElement'](
              DropdownOrLabel,
              Object(external_tslib_['__assign'])({}, props),
            ),
          );
        }
        function BodyContent(props) {
          var content = props.content,
            description = props.description;
          return external_react_['createElement'](
            MediaTypesSwitch_MediaTypesSwitch,
            { content: content, renderDropdown: DropdownWithinHeader },
            function(_a) {
              var schema = _a.schema;
              return external_react_['createElement'](
                external_react_['Fragment'],
                null,
                description !== undefined &&
                  external_react_['createElement'](Markdown_Markdown, { source: description }),
                external_react_['createElement'](Schema_Schema, {
                  skipReadOnly: true,
                  key: 'schema',
                  schema: schema,
                }),
              );
            },
          );
        }

        // CONCATENATED MODULE: ./src/components/PayloadSamples/PayloadSamples.tsx

        var PayloadSamples_PayloadSamples = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(PayloadSamples, _super);
          function PayloadSamples() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.renderDropdown = function(props) {
              return external_react_['createElement'](
                DropdownOrLabel,
                Object(external_tslib_['__assign'])(
                  { Label: styled_elements_MimeLabel, Dropdown: InvertedSimpleDropdown },
                  props,
                ),
              );
            };
            return _this;
          }
          PayloadSamples.prototype.render = function() {
            var _this = this;
            var mimeContent = this.props.content;
            if (mimeContent === undefined) {
              return null;
            }
            return external_react_['createElement'](
              MediaTypesSwitch_MediaTypesSwitch,
              { content: mimeContent, renderDropdown: this.renderDropdown, withLabel: true },
              function(mediaType) {
                return external_react_['createElement'](MediaTypeSamples_MediaTypeSamples, {
                  key: 'samples',
                  mediaType: mediaType,
                  renderDropdown: _this.renderDropdown,
                });
              },
            );
          };
          PayloadSamples = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            PayloadSamples,
          );
          return PayloadSamples;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/RequestSamples/RequestSamples.tsx

        var RequestSamples_RequestSamples = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(RequestSamples, _super);
          function RequestSamples() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          RequestSamples.prototype.render = function() {
            var operation = this.props.operation;
            var samples = operation.codeSamples;
            var hasSamples = samples.length > 0;
            var hideTabList =
              samples.length === 1 ? this.context.hideSingleRequestSampleTab : false;
            return (
              (hasSamples &&
                external_react_['createElement'](
                  'div',
                  null,
                  external_react_['createElement'](RightPanelHeader, null, ' Request samples '),
                  external_react_['createElement'](
                    Tabs,
                    { defaultIndex: 0 },
                    external_react_['createElement'](
                      external_react_tabs_['TabList'],
                      { hidden: hideTabList },
                      samples.map(function(sample) {
                        return external_react_['createElement'](
                          external_react_tabs_['Tab'],
                          { key: sample.lang + '_' + (sample.label || '') },
                          sample.label !== undefined ? sample.label : sample.lang,
                        );
                      }),
                    ),
                    samples.map(function(sample) {
                      return external_react_['createElement'](
                        external_react_tabs_['TabPanel'],
                        { key: sample.lang + '_' + (sample.label || '') },
                        isPayloadSample(sample)
                          ? external_react_['createElement'](
                              'div',
                              null,
                              external_react_['createElement'](PayloadSamples_PayloadSamples, {
                                content: sample.requestBodyContent,
                              }),
                            )
                          : external_react_['createElement'](SourceCode_SourceCodeWithCopy, {
                              lang: sample.lang,
                              source: sample.source,
                            }),
                      );
                    }),
                  ),
                )) ||
              null
            );
          };
          RequestSamples.contextType = OptionsContext;
          RequestSamples = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            RequestSamples,
          );
          return RequestSamples;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Responses/ResponseTitle.tsx

        var ResponseTitle_ResponseTitle = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ResponseTitle, _super);
          function ResponseTitle() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ResponseTitle.prototype.render = function() {
            var _a = this.props,
              title = _a.title,
              type = _a.type,
              empty = _a.empty,
              code = _a.code,
              opened = _a.opened,
              className = _a.className,
              onClick = _a.onClick;
            return external_react_['createElement'](
              'div',
              { className: className, onClick: (!empty && onClick) || undefined },
              !empty &&
                external_react_['createElement'](ShelfIcon, {
                  size: '1.5em',
                  color: type,
                  direction: opened ? 'down' : 'right',
                  float: 'left',
                }),
              external_react_['createElement']('strong', null, code, ' '),
              external_react_['createElement'](Markdown_Markdown, {
                compact: true,
                inline: true,
                source: title,
              }),
            );
          };
          return ResponseTitle;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Responses/styled.elements.ts

        // import { transparentize } from 'polished';

        var StyledResponseTitle = styled_components(ResponseTitle_ResponseTitle)(
          Responses_styled_elements_templateObject_1 ||
            (Responses_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 4px;\n  line-height: 1.5em;\n  background-color: #f2f2f2;\n  cursor: pointer;\n  text-align:',
                ';\n  color: ',
                ';\n  background-color: ',
                ';\n\n  ',
                ';\n',
              ],
              [
                '\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 4px;\n  line-height: 1.5em;\n  background-color: #f2f2f2;\n  cursor: pointer;\n  text-align:',
                ';\n  color: ',
                ';\n  background-color: ',
                ';\n\n  ',
                ';\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'right' : 'left';
          },
          function(props) {
            return props.theme.colors.responses[props.type].color;
          },
          function(props) {
            return props.theme.colors.responses[props.type].backgroundColor;
          },
          function(props) {
            return (
              (props.empty &&
                '\ncursor: default;\n&::before {\n  content: "\u2014";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n}\n') ||
              ''
            );
          },
        );
        var ResponseDetailsWrap = styled_components.div(
          Responses_styled_elements_templateObject_2 ||
            (Responses_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  padding: 10px;\n'], ['\n  padding: 10px;\n'])),
        );
        var HeadersCaption = styled_components(UnderlinedHeader.withComponent('caption'))(
          Responses_styled_elements_templateObject_3 ||
            (Responses_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              ['\n  text-align: ', ';\n  margin-top: 1em;\n  caption-side: top;\n'],
              ['\n  text-align: ', ';\n  margin-top: 1em;\n  caption-side: top;\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'right' : 'left';
          },
        );
        var Responses_styled_elements_templateObject_1,
          Responses_styled_elements_templateObject_2,
          Responses_styled_elements_templateObject_3;

        // CONCATENATED MODULE: ./src/components/Responses/ResponseHeaders.tsx

        var ResponseHeaders_ResponseHeaders = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ResponseHeaders, _super);
          function ResponseHeaders() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ResponseHeaders.prototype.render = function() {
            var headers = this.props.headers;
            if (headers === undefined || headers.length === 0) {
              return null;
            }
            return external_react_['createElement'](
              PropertiesTable,
              null,
              external_react_['createElement'](HeadersCaption, null, ' Response Headers '),
              external_react_['createElement'](
                'tbody',
                null,
                mapWithLast(headers, function(header, isLast) {
                  return external_react_['createElement'](Field_Field, {
                    isLast: isLast,
                    key: header.name,
                    field: header,
                    showExamples: true,
                  });
                }),
              ),
            );
          };
          return ResponseHeaders;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Responses/ResponseDetails.tsx

        var ResponseDetails_ResponseDetails = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ResponseDetails, _super);
          function ResponseDetails() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.renderDropdown = function(props) {
              return external_react_['createElement'](
                UnderlinedHeader,
                { key: 'header' },
                'Response Schema: ',
                external_react_['createElement'](
                  DropdownOrLabel,
                  Object(external_tslib_['__assign'])({}, props),
                ),
              );
            };
            return _this;
          }
          ResponseDetails.prototype.render = function() {
            var _a = this.props.response,
              description = _a.description,
              headers = _a.headers,
              content = _a.content;
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              description &&
                external_react_['createElement'](Markdown_Markdown, { source: description }),
              external_react_['createElement'](ResponseHeaders_ResponseHeaders, {
                headers: headers,
              }),
              external_react_['createElement'](
                MediaTypesSwitch_MediaTypesSwitch,
                { content: content, renderDropdown: this.renderDropdown },
                function(_a) {
                  var schema = _a.schema;
                  return external_react_['createElement'](Schema_Schema, {
                    skipWriteOnly: true,
                    key: 'schema',
                    schema: schema,
                  });
                },
              ),
            );
          };
          return ResponseDetails;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Responses/Response.tsx

        var Response_ResponseView = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ResponseView, _super);
          function ResponseView() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.toggle = function() {
              _this.props.response.toggle();
            };
            return _this;
          }
          ResponseView.prototype.render = function() {
            var _a = this.props.response,
              headers = _a.headers,
              type = _a.type,
              summary = _a.summary,
              description = _a.description,
              code = _a.code,
              expanded = _a.expanded,
              content = _a.content;
            var mimes =
              content === undefined
                ? []
                : content.mediaTypes.filter(function(mime) {
                    return mime.schema !== undefined;
                  });
            var empty = headers.length === 0 && mimes.length === 0 && !description;
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](StyledResponseTitle, {
                onClick: this.toggle,
                type: type,
                empty: empty,
                title: summary || '',
                code: code,
                opened: expanded,
              }),
              expanded &&
                !empty &&
                external_react_['createElement'](
                  ResponseDetailsWrap,
                  null,
                  external_react_['createElement'](ResponseDetails_ResponseDetails, {
                    response: this.props.response,
                  }),
                ),
            );
          };
          ResponseView = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ResponseView,
          );
          return ResponseView;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/Responses/ResponsesList.tsx

        var ResponsesHeader = styled_components.h3(
          ResponsesList_templateObject_1 ||
            (ResponsesList_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-size: 18px;\n  padding: 0.2em 0;\n  margin: 3em 0 1.1em;\n  color: #253137;\n  font-weight: normal;\n',
              ],
              [
                '\n  font-size: 18px;\n  padding: 0.2em 0;\n  margin: 3em 0 1.1em;\n  color: #253137;\n  font-weight: normal;\n',
              ],
            )),
        );
        var ResponsesList_ResponsesList = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ResponsesList, _super);
          function ResponsesList() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ResponsesList.prototype.render = function() {
            var responses = this.props.responses;
            if (!responses || responses.length === 0) {
              return null;
            }
            return external_react_['createElement'](
              'div',
              null,
              external_react_['createElement'](ResponsesHeader, null, ' Responses '),
              responses.map(function(response) {
                return external_react_['createElement'](Response_ResponseView, {
                  key: response.code,
                  response: response,
                });
              }),
            );
          };
          return ResponsesList;
        })(external_react_['PureComponent']);

        var ResponsesList_templateObject_1;

        // CONCATENATED MODULE: ./src/components/ResponseSamples/ResponseSamples.tsx

        var ResponseSamples_ResponseSamples = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ResponseSamples, _super);
          function ResponseSamples() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ResponseSamples.prototype.render = function() {
            var operation = this.props.operation;
            var responses = operation.responses.filter(function(response) {
              return response.content && response.content.hasSample;
            });
            return (
              (responses.length > 0 &&
                external_react_['createElement'](
                  'div',
                  null,
                  external_react_['createElement'](RightPanelHeader, null, ' Response samples '),
                  external_react_['createElement'](
                    Tabs,
                    { defaultIndex: 0 },
                    external_react_['createElement'](
                      external_react_tabs_['TabList'],
                      null,
                      responses.map(function(response) {
                        return external_react_['createElement'](
                          external_react_tabs_['Tab'],
                          { className: 'tab-' + response.type, key: response.code },
                          response.code,
                        );
                      }),
                    ),
                    responses.map(function(response) {
                      return external_react_['createElement'](
                        external_react_tabs_['TabPanel'],
                        { key: response.code },
                        external_react_['createElement'](
                          'div',
                          null,
                          external_react_['createElement'](PayloadSamples_PayloadSamples, {
                            content: response.content,
                          }),
                        ),
                      );
                    }),
                  ),
                )) ||
              null
            );
          };
          ResponseSamples = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ResponseSamples,
          );
          return ResponseSamples;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/SecurityRequirement/SecurityRequirement.tsx

        // import { transparentize } from 'polished';

        var ScopeName = styled_components.code(
          SecurityRequirement_templateObject_1 ||
            (SecurityRequirement_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  font-size: ',
                ';\n  font-family: ',
                ';\n  border: 1px solid ',
                ";\n  margin: 0 3px;\n  padding: 0.2em;\n  display: inline-block;\n  line-height: 1;\n\n  &:after {\n    content: ',';\n  }\n  &:last-child:after {\n    content: none;\n  }\n",
              ],
              [
                '\n  font-size: ',
                ';\n  font-family: ',
                ';\n  border: 1px solid ',
                ";\n  margin: 0 3px;\n  padding: 0.2em;\n  display: inline-block;\n  line-height: 1;\n\n  &:after {\n    content: ',';\n  }\n  &:last-child:after {\n    content: none;\n  }\n",
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(props) {
            return props.theme.typography.code.fontFamily;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.colors.border.dark;
          },
        );
        var SecurityRequirementAndWrap = styled_components.span(
          SecurityRequirement_templateObject_2 ||
            (SecurityRequirement_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                "\n  &:after {\n    content: ' AND ';\n    font-weight: bold;\n  }\n\n  &:last-child:after {\n    content: none;\n  }\n\n  ",
                ';\n',
              ],
              [
                "\n  &:after {\n    content: ' AND ';\n    font-weight: bold;\n  }\n\n  &:last-child:after {\n    content: none;\n  }\n\n  ",
                ';\n',
              ],
            )),
          linksCss,
        );
        var SecurityRequirementOrWrap = styled_components.span(
          SecurityRequirement_templateObject_3 ||
            (SecurityRequirement_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                "\n  &:before {\n    content: '( ';\n    font-weight: bold;\n  }\n  &:after {\n    content: ' ) OR ';\n    font-weight: bold;\n  }\n  &:last-child:after {\n    content: ' )';\n  }\n\n  &:only-child:before,\n  &:only-child:after {\n    content: none;\n  }\n\n  ",
                ';\n',
              ],
              [
                "\n  &:before {\n    content: '( ';\n    font-weight: bold;\n  }\n  &:after {\n    content: ' ) OR ';\n    font-weight: bold;\n  }\n  &:last-child:after {\n    content: ' )';\n  }\n\n  &:only-child:before,\n  &:only-child:after {\n    content: none;\n  }\n\n  ",
                ';\n',
              ],
            )),
          linksCss,
        );
        var SecurityRequirement_SecurityRequirement = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SecurityRequirement, _super);
          function SecurityRequirement() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          SecurityRequirement.prototype.render = function() {
            var security = this.props.security;
            return external_react_['createElement'](
              SecurityRequirementOrWrap,
              null,
              security.schemes.map(function(scheme) {
                return external_react_['createElement'](
                  SecurityRequirementAndWrap,
                  { key: scheme.id },
                  external_react_['createElement'](
                    linkify_Link,
                    { to: scheme.sectionId },
                    scheme.id,
                  ),
                  scheme.scopes.length > 0 && ' (',
                  scheme.scopes.map(function(scope) {
                    return external_react_['createElement'](ScopeName, { key: scope }, scope);
                  }),
                  scheme.scopes.length > 0 && ') ',
                );
              }),
            );
          };
          return SecurityRequirement;
        })(external_react_['PureComponent']);

        var AuthHeaderColumn = styled_components.div(
          SecurityRequirement_templateObject_4 ||
            (SecurityRequirement_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  flex: 1;\n'],
              ['\n  flex: 1;\n'],
            )),
        );
        var SecuritiesColumn = styled_components.div(
          SecurityRequirement_templateObject_5 ||
            (SecurityRequirement_templateObject_5 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  width: ', ';\n'],
              ['\n  width: ', ';\n'],
            )),
          function(props) {
            return props.theme.schema.defaultDetailsWidth;
          },
        );
        var AuthHeader = styled_components(UnderlinedHeader)(
          SecurityRequirement_templateObject_6 ||
            (SecurityRequirement_templateObject_6 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  display: inline-block;\n  margin: 0;\n'],
              ['\n  display: inline-block;\n  margin: 0;\n'],
            )),
        );
        var SecurityRequirement_Wrap = styled_components.div(
          SecurityRequirement_templateObject_7 ||
            (SecurityRequirement_templateObject_7 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  width: 100%;\n  display: flex;\n  margin: 1em 0;\n'],
              ['\n  width: 100%;\n  display: flex;\n  margin: 1em 0;\n'],
            )),
        );
        var SecurityRequirement_SecurityRequirements = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SecurityRequirements, _super);
          function SecurityRequirements() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          SecurityRequirements.prototype.render = function() {
            var securities = this.props.securities;
            if (!securities.length) {
              return null;
            }
            return external_react_['createElement'](
              SecurityRequirement_Wrap,
              null,
              external_react_['createElement'](
                AuthHeaderColumn,
                null,
                external_react_['createElement'](AuthHeader, null, 'Authorizations: '),
              ),
              external_react_['createElement'](
                SecuritiesColumn,
                null,
                securities.map(function(security, idx) {
                  return external_react_['createElement'](SecurityRequirement_SecurityRequirement, {
                    key: idx,
                    security: security,
                  });
                }),
              ),
            );
          };
          return SecurityRequirements;
        })(external_react_['PureComponent']);

        var SecurityRequirement_templateObject_1,
          SecurityRequirement_templateObject_2,
          SecurityRequirement_templateObject_3,
          SecurityRequirement_templateObject_4,
          SecurityRequirement_templateObject_5,
          SecurityRequirement_templateObject_6,
          SecurityRequirement_templateObject_7;

        // CONCATENATED MODULE: ./src/components/Operation/Operation.tsx

        var OperationRow = styled_components(Row)(
          Operation_templateObject_1 ||
            (Operation_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  backface-visibility: hidden;\n  contain: content;\n\n  overflow: hidden;\n'],
              ['\n  backface-visibility: hidden;\n  contain: content;\n\n  overflow: hidden;\n'],
            )),
        );
        var Description = styled_components.div(
          Operation_templateObject_2 ||
            (Operation_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  margin-bottom: ', 'px;\n'],
              ['\n  margin-bottom: ', 'px;\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.spacing.unit * 6;
          },
        );
        var Operation_Operation = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Operation, _super);
          function Operation(props) {
            var _this = _super.call(this, props) || this;
            _this.onConsoleClick = function() {
              _this.setState({
                executeMode: !_this.state.executeMode,
              });
            };
            _this.onUrlChanged = function(index) {
              if (index === void 0) {
                index = 0;
              }
              _this.setState({
                urlIndex: index,
              });
            };
            _this.state = {
              executeMode: false,
              urlIndex: 0,
            };
            return _this;
          }
          Operation.prototype.render = function() {
            var _this = this;
            var _a = this.props,
              operation = _a.operation,
              securitySchemes = _a.securitySchemes;
            var _b = this.state,
              executeMode = _b.executeMode,
              urlIndex = _b.urlIndex;
            var summary = operation.name,
              description = operation.description,
              deprecated = operation.deprecated,
              externalDocs = operation.externalDocs;
            var hasDescription = !!(description || externalDocs);
            return external_react_['createElement'](OptionsContext.Consumer, null, function(
              options,
            ) {
              return external_react_['createElement'](
                OperationRow,
                null,
                external_react_['createElement'](
                  MiddlePanel,
                  null,
                  external_react_['createElement'](
                    H2,
                    null,
                    external_react_['createElement'](ShareLink, { to: operation.id }),
                    summary,
                    ' ',
                    deprecated &&
                      external_react_['createElement'](Badge, { type: 'warning' }, ' Deprecated '),
                  ),
                  options.enableConsole &&
                    external_react_['createElement'](SwitchBox_SwitchBox, {
                      onClick: _this.onConsoleClick,
                      checked: _this.state.executeMode,
                      label: 'Try it out!',
                    }),
                  options.pathInMiddlePanel &&
                    external_react_['createElement'](Endpoint_Endpoint, {
                      operation: operation,
                      inverted: true,
                      handleUrl: _this.onUrlChanged,
                    }),
                  hasDescription &&
                    external_react_['createElement'](
                      Description,
                      null,
                      description !== undefined &&
                        external_react_['createElement'](Markdown_Markdown, {
                          source: description,
                        }),
                      externalDocs &&
                        external_react_[
                          'createElement'
                        ](ExternalDocumentation_ExternalDocumentation, {
                          externalDocs: externalDocs,
                        }),
                    ),
                  external_react_['createElement'](Extensions_Extensions, {
                    extensions: operation.extensions,
                  }),
                  external_react_['createElement'](SecurityRequirement_SecurityRequirements, {
                    securities: operation.security,
                  }),
                  external_react_['createElement'](Parameters_Parameters, {
                    parameters: operation.parameters,
                    body: operation.requestBody,
                  }),
                  external_react_['createElement'](ResponsesList_ResponsesList, {
                    responses: operation.responses,
                  }),
                ),
                external_react_['createElement'](
                  DarkRightPanel,
                  null,
                  !options.pathInMiddlePanel &&
                    external_react_['createElement'](Endpoint_Endpoint, {
                      operation: operation,
                      handleUrl: _this.onUrlChanged,
                    }),
                  executeMode &&
                    external_react_['createElement'](
                      'div',
                      null,
                      external_react_['createElement'](ConsoleViewer_ConsoleViewer, {
                        securitySchemes: securitySchemes,
                        operation: operation,
                        urlIndex: urlIndex,
                        additionalHeaders: options.additionalHeaders,
                        queryParamPrefix: options.queryParamPrefix,
                        queryParamSuffix: options.queryParamSuffix,
                      }),
                    ),
                  !executeMode &&
                    external_react_['createElement'](RequestSamples_RequestSamples, {
                      operation: operation,
                    }),
                  !executeMode &&
                    external_react_['createElement'](ResponseSamples_ResponseSamples, {
                      operation: operation,
                    }),
                ),
              );
            });
          };
          Operation = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            Operation,
          );
          return Operation;
        })(external_react_['Component']);

        var Operation_templateObject_1, Operation_templateObject_2;

        // CONCATENATED MODULE: ./src/components/ContentItems/ContentItems.tsx

        var ContentItems_ContentItems = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ContentItems, _super);
          function ContentItems() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ContentItems.prototype.render = function() {
            var _a = this.props,
              items = _a.items,
              store = _a.store;
            if (items.length === 0) {
              return null;
            }
            return items.map(function(item) {
              return external_react_['createElement'](ContentItems_ContentItem, {
                store: store,
                item: item,
                key: item.id,
              });
            });
          };
          ContentItems = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ContentItems,
          );
          return ContentItems;
        })(external_react_['Component']);

        var ContentItems_ContentItem = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(ContentItem, _super);
          function ContentItem() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ContentItem.prototype.render = function() {
            var _a = this.props,
              item = _a.item,
              store = _a.store;
            var content;
            var type = item.type;
            switch (type) {
              case 'group':
                content = null;
                break;
              case 'tag':
              case 'section':
                content = external_react_['createElement'](
                  ContentItems_SectionItem,
                  Object(external_tslib_['__assign'])({}, this.props),
                );
                break;
              case 'operation':
                content = external_react_['createElement'](Operation_Operation, {
                  securitySchemes: store.spec.securitySchemes,
                  operation: item,
                });
                break;
              default:
                content = external_react_['createElement'](
                  ContentItems_SectionItem,
                  Object(external_tslib_['__assign'])({}, this.props),
                );
            }
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              content &&
                external_react_['createElement'](
                  Section,
                  { id: item.id, underlined: item.type === 'operation' },
                  content,
                ),
              item.items &&
                external_react_['createElement'](ContentItems_ContentItems, {
                  store: store,
                  items: item.items,
                }),
            );
          };
          ContentItem = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            ContentItem,
          );
          return ContentItem;
        })(external_react_['Component']);

        var middlePanelWrap = function(component) {
          return external_react_['createElement'](MiddlePanel, { compact: true }, component);
        };
        var ContentItems_SectionItem = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SectionItem, _super);
          function SectionItem() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          SectionItem.prototype.render = function() {
            var _a = this.props.item,
              name = _a.name,
              description = _a.description,
              externalDocs = _a.externalDocs,
              level = _a.level;
            var Header = level === 2 ? H2 : H1;
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](
                Row,
                null,
                external_react_['createElement'](
                  MiddlePanel,
                  { compact: false },
                  external_react_['createElement'](
                    Header,
                    null,
                    external_react_['createElement'](ShareLink, { to: this.props.item.id }),
                    name,
                  ),
                ),
              ),
              external_react_['createElement'](AdvancedMarkdown_AdvancedMarkdown, {
                source: description || '',
                htmlWrap: middlePanelWrap,
              }),
              externalDocs &&
                external_react_['createElement'](
                  Row,
                  null,
                  external_react_['createElement'](
                    MiddlePanel,
                    null,
                    external_react_['createElement'](ExternalDocumentation_ExternalDocumentation, {
                      externalDocs: externalDocs,
                    }),
                  ),
                ),
            );
          };
          SectionItem = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            SectionItem,
          );
          return SectionItem;
        })(external_react_['Component']);

        // EXTERNAL MODULE: external "classnames"
        var external_classnames_ = __webpack_require__(43);

        // CONCATENATED MODULE: ./src/components/SideMenu/styled.elements.ts

        var OperationBadge = styled_components.span.attrs(function(props) {
          return {
            className: 'operation-type ' + props.type,
          };
        })(
          SideMenu_styled_elements_templateObject_1 ||
            (SideMenu_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  width: 32px;\n  display: inline-block;\n  height: ',
                ';\n  line-height: ',
                ';\n  background-color: #333;\n  border-radius: 3px;\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  font-size: 7px;\n  font-family: Verdana; // web-safe\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n  vertical-align: middle;\n  margin-right: 6px;\n  margin-top: 2px;\n\n  &.get {\n    background-color: ',
                ';\n  }\n\n  &.post {\n    background-color: ',
                ';\n  }\n\n  &.put {\n    background-color: ',
                ';\n  }\n\n  &.options {\n    background-color: ',
                ';\n  }\n\n  &.patch {\n    background-color: ',
                ';\n  }\n\n  &.delete {\n    background-color: ',
                ';\n  }\n\n  &.basic {\n    background-color: ',
                ';\n  }\n\n  &.link {\n    background-color: ',
                ';\n  }\n\n  &.head {\n    background-color: ',
                ';\n  }\n',
              ],
              [
                '\n  width: 32px;\n  display: inline-block;\n  height: ',
                ';\n  line-height: ',
                ';\n  background-color: #333;\n  border-radius: 3px;\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  font-size: 7px;\n  font-family: Verdana; // web-safe\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: bold;\n  vertical-align: middle;\n  margin-right: 6px;\n  margin-top: 2px;\n\n  &.get {\n    background-color: ',
                ';\n  }\n\n  &.post {\n    background-color: ',
                ';\n  }\n\n  &.put {\n    background-color: ',
                ';\n  }\n\n  &.options {\n    background-color: ',
                ';\n  }\n\n  &.patch {\n    background-color: ',
                ';\n  }\n\n  &.delete {\n    background-color: ',
                ';\n  }\n\n  &.basic {\n    background-color: ',
                ';\n  }\n\n  &.link {\n    background-color: ',
                ';\n  }\n\n  &.head {\n    background-color: ',
                ';\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(props) {
            return props.theme.typography.code.fontSize;
          },
          function(props) {
            return props.theme.colors.http.get;
          },
          function(props) {
            return props.theme.colors.http.post;
          },
          function(props) {
            return props.theme.colors.http.put;
          },
          function(props) {
            return props.theme.colors.http.options;
          },
          function(props) {
            return props.theme.colors.http.patch;
          },
          function(props) {
            return props.theme.colors.http.delete;
          },
          function(props) {
            return props.theme.colors.http.basic;
          },
          function(props) {
            return props.theme.colors.http.link;
          },
          function(props) {
            return props.theme.colors.http.head;
          },
        );
        function menuItemActiveBg(depth, _a) {
          var theme = _a.theme;
          if (depth > 1) {
            return Object(external_polished_['darken'])(0.1, theme.menu.backgroundColor);
          } else if (depth === 1) {
            return Object(external_polished_['darken'])(0.05, theme.menu.backgroundColor);
          } else {
            return '';
          }
        }
        var MenuItemUl = styled_components.ul(
          SideMenu_styled_elements_templateObject_2 ||
            (SideMenu_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  margin: 0;\n  padding: 0;\n\n  & & {\n    font-size: 0.929em;\n  }\n\n  ',
                ';\n',
              ],
              [
                '\n  margin: 0;\n  padding: 0;\n\n  & & {\n    font-size: 0.929em;\n  }\n\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.expanded ? '' : 'display: none;';
          },
        );
        var MenuItemLi = styled_components.li(
          SideMenu_styled_elements_templateObject_3 ||
            (SideMenu_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  list-style: none inside none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0;\n  ',
                ';\n',
              ],
              [
                '\n  list-style: none inside none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0;\n  ',
                ';\n',
              ],
            )),
          function(props) {
            return props.depth === 0 ? 'margin-top: 15px' : '';
          },
        );
        var menuItemDepth = {
          0: css(
            SideMenu_styled_elements_templateObject_4 ||
              (SideMenu_styled_elements_templateObject_4 = Object(
                external_tslib_['__makeTemplateObject'],
              )(
                [
                  '\n    opacity: 0.7;\n    text-transform: ',
                  ';\n    font-size: 0.8em;\n    padding-bottom: 0;\n    cursor: default;\n    color: ',
                  ';\n  ',
                ],
                [
                  '\n    opacity: 0.7;\n    text-transform: ',
                  ';\n    font-size: 0.8em;\n    padding-bottom: 0;\n    cursor: default;\n    color: ',
                  ';\n  ',
                ],
              )),
            function(_a) {
              var theme = _a.theme;
              return theme.menu.groupItems.textTransform;
            },
            function(props) {
              return props.theme.menu.textColor;
            },
          ),
          1: css(
            SideMenu_styled_elements_templateObject_5 ||
              (SideMenu_styled_elements_templateObject_5 = Object(
                external_tslib_['__makeTemplateObject'],
              )(
                [
                  '\n    font-size: 0.929em;\n    text-transform: ',
                  ';\n    &:hover {\n      color: ',
                  ';\n    }\n  ',
                ],
                [
                  '\n    font-size: 0.929em;\n    text-transform: ',
                  ';\n    &:hover {\n      color: ',
                  ';\n    }\n  ',
                ],
              )),
            function(_a) {
              var theme = _a.theme;
              return theme.menu.level1Items.textTransform;
            },
            function(props) {
              return props.theme.menu.activeTextColor;
            },
          ),
          2: css(
            SideMenu_styled_elements_templateObject_6 ||
              (SideMenu_styled_elements_templateObject_6 = Object(
                external_tslib_['__makeTemplateObject'],
              )(['\n    color: ', ';\n  '], ['\n    color: ', ';\n  '])),
            function(props) {
              return props.theme.menu.textColor;
            },
          ),
        };
        var MenuItemLabel = styled_components.label.attrs(function(props) {
          return {
            role: 'menuitem',
            className: external_classnames_('-depth' + props.depth, {
              active: props.active,
            }),
          };
        })(
          SideMenu_styled_elements_templateObject_7 ||
            (SideMenu_styled_elements_templateObject_7 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  cursor: pointer;\n  color: ',
                ';\n  margin: 0;\n  padding: 12.5px ',
                'px;\n  ',
                '\n  direction: ',
                ';\n  display: flex;\n  justify-content: space-between;\n  text-align: ',
                ';\n  font-family: ',
                ';\n  ',
                ';\n  background-color: ',
                ';\n\n  ',
                ';\n\n  &:hover {\n    background-color: ',
                ';\n  }\n\n  ',
                ' {\n    height: ',
                ';\n    width: ',
                ';\n    polygon {\n      fill: ',
                ';\n    }\n  }\n',
              ],
              [
                '\n  cursor: pointer;\n  color: ',
                ';\n  margin: 0;\n  padding: 12.5px ',
                'px;\n  ',
                '\n  direction: ',
                ';\n  display: flex;\n  justify-content: space-between;\n  text-align: ',
                ';\n  font-family: ',
                ';\n  ',
                ';\n  background-color: ',
                ';\n\n  ',
                ';\n\n  &:hover {\n    background-color: ',
                ';\n  }\n\n  ',
                ' {\n    height: ',
                ';\n    width: ',
                ';\n    polygon {\n      fill: ',
                ';\n    }\n  }\n',
              ],
            )),
          function(props) {
            return props.active ? props.theme.menu.activeTextColor : props.theme.menu.textColor;
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
          function(_a) {
            var depth = _a.depth,
              type = _a.type,
              theme = _a.theme;
            return (
              (type === 'section' &&
                depth > 1 &&
                'padding-left: ' + theme.spacing.unit * 8 + 'px;') ||
              ''
            );
          },
          function(_a) {
            var type = _a.type,
              theme = _a.theme;
            return ['section', 'group', 'tag'].indexOf(type || '') > -1 &&
              theme.typography.direction === 'rtl'
              ? 'rtl'
              : 'ltr';
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'right' : 'left';
          },
          function(props) {
            return props.theme.typography.headings.fontFamily;
          },
          function(props) {
            return menuItemDepth[props.depth];
          },
          function(props) {
            return props.active ? menuItemActiveBg(props.depth, props) : '';
          },
          function(props) {
            return (props.deprecated && deprecatedCss) || '';
          },
          function(props) {
            return menuItemActiveBg(props.depth, props);
          },
          ShelfIcon,
          function(_a) {
            var theme = _a.theme;
            return theme.menu.arrow.size;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.menu.arrow.size;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.menu.arrow.color;
          },
        );
        var MenuItemTitle = styled_components.span(
          styled_elements_templateObject_8 ||
            (styled_elements_templateObject_8 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  display: inline-block;\n  vertical-align: middle;\n  width: ',
                ';\n  overflow: hidden;\n  text-overflow: ellipsis;\n',
              ],
              [
                '\n  display: inline-block;\n  vertical-align: middle;\n  width: ',
                ';\n  overflow: hidden;\n  text-overflow: ellipsis;\n',
              ],
            )),
          function(props) {
            return props.width ? props.width : 'auto';
          },
        );
        var RedocAttribution = styled_components.div(
          styled_elements_templateObject_9 ||
            (styled_elements_templateObject_9 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  ', ';\n'],
              ['\n  ', ';\n'],
            )),
          function(_a) {
            var theme = _a.theme;
            return (
              '\n  font-size: 0.8em;\n  margin-top: ' +
              theme.spacing.unit * 2 +
              'px;\n  padding: 0 ' +
              theme.spacing.unit * 4 +
              'px;\n  text-align: left;\n\n  opacity: 0.7;\n\n  a,\n  a:visited,\n  a:hover {\n    color: ' +
              theme.menu.textColor +
              ' !important;\n    border-top: 1px solid ' +
              Object(external_polished_['darken'])(0.1, theme.menu.backgroundColor) +
              ';\n    padding: ' +
              theme.spacing.unit +
              'px 0;\n    display: block;\n  }\n'
            );
          },
        );
        var SideMenu_styled_elements_templateObject_1,
          SideMenu_styled_elements_templateObject_2,
          SideMenu_styled_elements_templateObject_3,
          SideMenu_styled_elements_templateObject_4,
          SideMenu_styled_elements_templateObject_5,
          SideMenu_styled_elements_templateObject_6,
          SideMenu_styled_elements_templateObject_7,
          styled_elements_templateObject_8,
          styled_elements_templateObject_9;

        // CONCATENATED MODULE: ./src/components/SideMenu/MenuItem.tsx

        // import { observe } from 'mobx';

        var MenuItem_MenuItem = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(MenuItem, _super);
          function MenuItem() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.ref = external_react_['createRef']();
            _this.activate = function(evt) {
              _this.props.onActivate(_this.props.item);
              evt.stopPropagation();
            };
            return _this;
          }
          MenuItem.prototype.componentDidMount = function() {
            this.scrollIntoViewIfActive();
          };
          MenuItem.prototype.componentDidUpdate = function() {
            this.scrollIntoViewIfActive();
          };
          MenuItem.prototype.scrollIntoViewIfActive = function() {
            if (this.props.item.active && this.ref.current) {
              this.ref.current.scrollIntoViewIfNeeded();
            }
          };
          MenuItem.prototype.render = function() {
            var _a = this.props,
              item = _a.item,
              withoutChildren = _a.withoutChildren;
            return external_react_['createElement'](
              MenuItemLi,
              { onClick: this.activate, depth: item.depth, 'data-item-id': item.id },
              item.type === 'operation'
                ? external_react_['createElement'](
                    MenuItem_OperationMenuItemContent,
                    Object(external_tslib_['__assign'])({}, this.props, { item: item }),
                  )
                : external_react_['createElement'](
                    MenuItemLabel,
                    { depth: item.depth, active: item.active, type: item.type, ref: this.ref },
                    external_react_['createElement'](
                      MenuItemTitle,
                      { title: item.name },
                      item.name,
                      this.props.children,
                    ),
                    (item.depth > 0 &&
                      item.items.length > 0 &&
                      external_react_['createElement'](ShelfIcon, {
                        float: 'right',
                        direction: item.expanded ? 'down' : 'right',
                      })) ||
                      null,
                  ),
              !withoutChildren &&
                item.items &&
                item.items.length > 0 &&
                external_react_['createElement'](MenuItems_MenuItems, {
                  expanded: item.expanded,
                  items: item.items,
                  onActivate: this.props.onActivate,
                }),
            );
          };
          MenuItem = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            MenuItem,
          );
          return MenuItem;
        })(external_react_['Component']);

        var MenuItem_OperationMenuItemContent = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(OperationMenuItemContent, _super);
          function OperationMenuItemContent() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.ref = external_react_['createRef']();
            return _this;
          }
          OperationMenuItemContent.prototype.componentDidUpdate = function() {
            if (this.props.item.active && this.ref.current) {
              this.ref.current.scrollIntoViewIfNeeded();
            }
          };
          OperationMenuItemContent.prototype.render = function() {
            var item = this.props.item;
            return external_react_['createElement'](
              MenuItemLabel,
              {
                depth: item.depth,
                active: item.active,
                deprecated: item.deprecated,
                ref: this.ref,
              },
              external_react_['createElement'](
                OperationBadge,
                { type: item.httpVerb },
                shortenHTTPVerb(item.httpVerb),
              ),
              external_react_['createElement'](
                MenuItemTitle,
                { width: 'calc(100% - 38px)' },
                item.name,
                this.props.children,
              ),
            );
          };
          OperationMenuItemContent = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            OperationMenuItemContent,
          );
          return OperationMenuItemContent;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/SideMenu/MenuItems.tsx

        var MenuItems_MenuItems = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(MenuItems, _super);
          function MenuItems() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          MenuItems.prototype.render = function() {
            var _this = this;
            var _a = this.props,
              items = _a.items,
              root = _a.root,
              className = _a.className;
            var expanded = this.props.expanded == null ? true : this.props.expanded;
            return external_react_['createElement'](
              MenuItemUl,
              Object(external_tslib_['__assign'])(
                { className: className, style: this.props.style, expanded: expanded },
                root
                  ? {
                      role: 'navigation',
                    }
                  : {},
              ),
              items.map(function(item, idx) {
                return external_react_['createElement'](MenuItem_MenuItem, {
                  key: idx,
                  item: item,
                  onActivate: _this.props.onActivate,
                });
              }),
            );
          };
          MenuItems = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            MenuItems,
          );
          return MenuItems;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/SideMenu/SideMenu.tsx

        var SideMenu_SideMenu = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SideMenu, _super);
          function SideMenu() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.activate = function(item) {
              if (item && item.active && _this.context.menuToggle) {
                return item.expanded ? item.collapse() : item.expand();
              }
              _this.props.menu.activateAndScroll(item, true);
              setTimeout(function() {
                if (_this._updateScroll) {
                  _this._updateScroll();
                }
              });
            };
            _this.saveScrollUpdate = function(upd) {
              _this._updateScroll = upd;
            };
            return _this;
          }
          SideMenu.prototype.render = function() {
            var store = this.props.menu;
            return external_react_['createElement'](
              PerfectScrollbarWrap,
              {
                updateFn: this.saveScrollUpdate,
                className: this.props.className,
                options: {
                  wheelPropagation: false,
                },
              },
              external_react_['createElement'](MenuItems_MenuItems, {
                items: store.items,
                onActivate: this.activate,
                root: true,
              }),
              external_react_['createElement'](
                RedocAttribution,
                null,
                external_react_['createElement'](
                  'a',
                  { target: '_blank', href: 'https://github.com/Redocly/redoc' },
                  'Documentation Powered by ReDoc',
                ),
              ),
            );
          };
          SideMenu.contextType = OptionsContext;
          SideMenu = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            SideMenu,
          );
          return SideMenu;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/StickySidebar/ChevronSvg.tsx

        var AnimatedChevronButton = function(_a) {
          var open = _a.open;
          var iconOffset = open ? 8 : -4;
          return external_react_['createElement'](
            ChevronContainer,
            null,
            external_react_['createElement'](ChevronSvg, {
              size: 15,
              style: {
                transform: 'translate(2px, ' + iconOffset + 'px) rotate(180deg)',
                transition: 'transform 0.2s ease',
              },
            }),
            external_react_['createElement'](ChevronSvg, {
              size: 15,
              style: {
                transform: 'translate(2px, ' + (0 - iconOffset) + 'px)',
                transition: 'transform 0.2s ease',
              },
            }),
          );
        }; // adapted from reactjs.org
        var ChevronSvg = function(_a) {
          var _b = _a.size,
            size = _b === void 0 ? 10 : _b,
            _c = _a.className,
            className = _c === void 0 ? '' : _c,
            style = _a.style;
          return external_react_['createElement'](
            'svg',
            {
              className: className,
              style: style || {},
              viewBox: '0 0 926.23699 573.74994',
              version: '1.1',
              x: '0px',
              y: '0px',
              width: size,
              height: size,
            },
            external_react_['createElement'](
              'g',
              { transform: 'translate(904.92214,-879.1482)' },
              external_react_['createElement']('path', {
                d:
                  '\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ',
                fill: 'currentColor',
              }),
            ),
          );
        };
        var ChevronContainer = styled_components.div(
          ChevronSvg_templateObject_1 ||
            (ChevronSvg_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n  color: ',
                ';\n',
              ],
              [
                '\n  user-select: none;\n  width: 20px;\n  height: 20px;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  direction: ltr;\n  color: ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
        );
        var ChevronSvg_templateObject_1;

        // CONCATENATED MODULE: ./src/components/StickySidebar/StickyResponsiveSidebar.tsx

        var Stickyfill;
        if (IS_BROWSER) {
          Stickyfill = __webpack_require__(88);
        }
        var stickyfill = Stickyfill && Stickyfill();
        var StyledStickySidebar = styled_components.div(
          StickyResponsiveSidebar_templateObject_2 ||
            (StickyResponsiveSidebar_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  width: ',
                ';\n  background-color: ',
                ';\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  backface-visibility: hidden;\n  /* contain: strict; TODO: breaks layout since Chrome 80*/\n\n  height: 100vh;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n\n  ',
                ';\n\n  @media print {\n    display: none;\n  }\n',
              ],
              [
                '\n  width: ',
                ';\n  background-color: ',
                ';\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  backface-visibility: hidden;\n  /* contain: strict; TODO: breaks layout since Chrome 80*/\n\n  height: 100vh;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n\n  ',
                ';\n\n  @media print {\n    display: none;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.menu.width;
          },
          function(props) {
            return props.theme.menu.backgroundColor;
          },
          media.lessThan('small')(
            StickyResponsiveSidebar_templateObject_1 ||
              (StickyResponsiveSidebar_templateObject_1 = Object(
                external_tslib_['__makeTemplateObject'],
              )(
                [
                  '\n    position: fixed;\n    z-index: 20;\n    width: 100%;\n    background: ',
                  ';\n    display: ',
                  ';\n  ',
                ],
                [
                  '\n    position: fixed;\n    z-index: 20;\n    width: 100%;\n    background: ',
                  ';\n    display: ',
                  ';\n  ',
                ],
              )),
            function(_a) {
              var theme = _a.theme;
              return theme.menu.backgroundColor;
            },
            function(props) {
              return props.open ? 'flex' : 'none';
            },
          ),
        );
        var FloatingButton = styled_components.div(
          StickyResponsiveSidebar_templateObject_4 ||
            (StickyResponsiveSidebar_templateObject_4 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  outline: none;\n  user-select: none;\n  background-color: #f2f2f2;\n  color: ',
                ';\n  display: none;\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  z-index: 100;\n  border-radius: 50%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  ',
                ';\n\n  bottom: 44px;\n\n  width: 60px;\n  height: 60px;\n  padding: 0 20px;\n\n  @media print {\n    display: none;\n  }\n',
              ],
              [
                '\n  outline: none;\n  user-select: none;\n  background-color: #f2f2f2;\n  color: ',
                ';\n  display: none;\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  z-index: 100;\n  border-radius: 50%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  ',
                ';\n\n  bottom: 44px;\n\n  width: 60px;\n  height: 60px;\n  padding: 0 20px;\n\n  @media print {\n    display: none;\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.colors.primary.main;
          },
          media.lessThan('small')(
            StickyResponsiveSidebar_templateObject_3 ||
              (StickyResponsiveSidebar_templateObject_3 = Object(
                external_tslib_['__makeTemplateObject'],
              )(['\n    display: flex;\n  '], ['\n    display: flex;\n  '])),
          ),
        );
        var StickyResponsiveSidebar_StickyResponsiveSidebar = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(StickyResponsiveSidebar, _super);
          function StickyResponsiveSidebar() {
            var _this = (_super !== null && _super.apply(this, arguments)) || this;
            _this.state = {
              offsetTop: '0px',
            };
            _this.toggleNavMenu = function() {
              _this.props.menu.toggleSidebar();
            };
            return _this;
          }
          StickyResponsiveSidebar.prototype.componentDidMount = function() {
            if (stickyfill) {
              stickyfill.add(this.stickyElement);
            } // rerender when hydrating from SSR
            // see https://github.com/facebook/react/issues/8017#issuecomment-256351955
            this.setState({
              offsetTop: this.getScrollYOffset(this.context),
            });
          };
          StickyResponsiveSidebar.prototype.componentWillUnmount = function() {
            if (stickyfill) {
              stickyfill.remove(this.stickyElement);
            }
          };
          StickyResponsiveSidebar.prototype.getScrollYOffset = function(options) {
            var top;
            if (this.props.scrollYOffset !== undefined) {
              top = RedocNormalizedOptions_RedocNormalizedOptions.normalizeScrollYOffset(
                this.props.scrollYOffset,
              )();
            } else {
              top = options.scrollYOffset();
            }
            return top + 'px';
          };
          StickyResponsiveSidebar.prototype.render = function() {
            var _this = this;
            var open = this.props.menu.sideBarOpened;
            var top = this.state.offsetTop;
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](
                StyledStickySidebar,
                {
                  open: open,
                  className: this.props.className,
                  style: {
                    top: top,
                    height: 'calc(100vh - ' + top + ')',
                  },
                  ref: function(el) {
                    _this.stickyElement = el;
                  },
                },
                this.props.children,
              ),
              external_react_['createElement'](
                FloatingButton,
                { onClick: this.toggleNavMenu },
                external_react_['createElement'](AnimatedChevronButton, { open: open }),
              ),
            );
          };
          StickyResponsiveSidebar.contextType = OptionsContext;
          StickyResponsiveSidebar = Object(external_tslib_['__decorate'])(
            [external_mobx_react_['observer']],
            StickyResponsiveSidebar,
          );
          return StickyResponsiveSidebar;
        })(external_react_['Component']);

        var StickyResponsiveSidebar_templateObject_1,
          StickyResponsiveSidebar_templateObject_2,
          StickyResponsiveSidebar_templateObject_3,
          StickyResponsiveSidebar_templateObject_4;

        // CONCATENATED MODULE: ./src/components/Redoc/styled.elements.tsx

        var RedocWrap = styled_components.div(
          Redoc_styled_elements_templateObject_1 ||
            (Redoc_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  ', ';\n'], ['\n  ', ';\n'])),
          function(_a) {
            var theme = _a.theme;
            return (
              '\n  font-family: ' +
              theme.typography.fontFamily +
              ';\n  font-size: ' +
              theme.typography.fontSize +
              ';\n  font-weight: ' +
              theme.typography.fontWeightRegular +
              ';\n  line-height: ' +
              theme.typography.lineHeight +
              ';\n  color: ' +
              theme.colors.text.primary +
              ';\n  display: flex;\n  position: relative;\n  text-align: left;\n  direction: ' +
              theme.typography.direction +
              ';\n\n  -webkit-font-smoothing: ' +
              theme.typography.smoothing +
              ';\n  font-smoothing: ' +
              theme.typography.smoothing +
              ';\n  ' +
              ((theme.typography.optimizeSpeed && 'text-rendering: optimizeSpeed !important') ||
                '') +
              ';\n\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  text-size-adjust: 100%;\n\n  * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  }\n'
            );
          },
        );
        var ApiContentWrap = styled_components.div(
          Redoc_styled_elements_templateObject_3 ||
            (Redoc_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  width: calc(100% - ',
                ');\n  ',
                ';\n\n  contain: layout;\n',
              ],
              [
                '\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  width: calc(100% - ',
                ');\n  ',
                ';\n\n  contain: layout;\n',
              ],
            )),
          function(props) {
            return props.theme.menu.width;
          },
          media.lessThan(
            'small',
            true,
          )(
            Redoc_styled_elements_templateObject_2 ||
              (Redoc_styled_elements_templateObject_2 = Object(
                external_tslib_['__makeTemplateObject'],
              )(['\n    width: 100%;\n  '], ['\n    width: 100%;\n  '])),
          ),
        );
        var BackgroundStub = styled_components.div(
          Redoc_styled_elements_templateObject_5 ||
            (Redoc_styled_elements_templateObject_5 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  background: ',
                ';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  ',
                ';\n  width: ',
                ';\n  ',
                ';\n',
              ],
              [
                '\n  background: ',
                ';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  ',
                ';\n  width: ',
                ';\n  ',
                ';\n',
              ],
            )),
          function(_a) {
            var theme = _a.theme;
            return theme.rightPanel.backgroundColor;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'left: 0;' : 'right: 0;';
          },
          function(_a) {
            var theme = _a.theme;
            if (theme.rightPanel.width.endsWith('%')) {
              var percents = parseInt(theme.rightPanel.width, 10);
              return 'calc((100% - ' + theme.menu.width + ') * ' + percents / 100 + ')';
            } else {
              return theme.rightPanel.width;
            }
          },
          media.lessThan(
            'medium',
            true,
          )(
            Redoc_styled_elements_templateObject_4 ||
              (Redoc_styled_elements_templateObject_4 = Object(
                external_tslib_['__makeTemplateObject'],
              )(['\n    display: none;\n  '], ['\n    display: none;\n  '])),
          ),
        );
        var Redoc_styled_elements_templateObject_1,
          Redoc_styled_elements_templateObject_2,
          Redoc_styled_elements_templateObject_3,
          Redoc_styled_elements_templateObject_4,
          Redoc_styled_elements_templateObject_5;

        // CONCATENATED MODULE: ./src/components/SearchBox/styled.elements.tsx

        var SearchWrap = styled_components.div(
          SearchBox_styled_elements_templateObject_1 ||
            (SearchBox_styled_elements_templateObject_1 = Object(
              external_tslib_['__makeTemplateObject'],
            )(['\n  padding: 5px 0;\n'], ['\n  padding: 5px 0;\n'])),
        );
        var SearchInput = styled_components.input.attrs(function() {
          return {
            className: 'search-input',
          };
        })(
          SearchBox_styled_elements_templateObject_2 ||
            (SearchBox_styled_elements_templateObject_2 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  width: calc(100% - ',
                'px);\n  box-sizing: border-box;\n  margin: 0 ',
                'px;\n  padding: 5px ',
                'px 5px\n    ',
                'px;\n  border: 0;\n  border-bottom: 1px solid\n    ',
                ';\n  font-family: ',
                ';\n  font-weight: bold;\n  font-size: 13px;\n  color: ',
                ';\n  background-color: transparent;\n  outline: none;\n  text-align: ',
                ';\n',
              ],
              [
                '\n  width: calc(100% - ',
                'px);\n  box-sizing: border-box;\n  margin: 0 ',
                'px;\n  padding: 5px ',
                'px 5px\n    ',
                'px;\n  border: 0;\n  border-bottom: 1px solid\n    ',
                ';\n  font-family: ',
                ';\n  font-weight: bold;\n  font-size: 13px;\n  color: ',
                ';\n  background-color: transparent;\n  outline: none;\n  text-align: ',
                ';\n',
              ],
            )),
          function(props) {
            return props.theme.spacing.unit * 8;
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
          function(props) {
            return props.theme.spacing.unit * 2;
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
          function(_a) {
            var theme = _a.theme;
            return (Object(external_polished_['getLuminance'])(theme.menu.backgroundColor) > 0.5
              ? external_polished_['darken']
              : external_polished_['lighten'])(0.1, theme.menu.backgroundColor);
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.fontFamily;
          },
          function(props) {
            return props.theme.menu.textColor;
          },
          function(_a) {
            var theme = _a.theme;
            return theme.typography.direction === 'rtl' ? 'center' : 'inherit';
          },
        );
        var SearchIcon = styled_components(function(props) {
          return external_react_['createElement'](
            'svg',
            {
              className: props.className,
              version: '1.1',
              viewBox: '0 0 1000 1000',
              x: '0px',
              xmlns: 'http://www.w3.org/2000/svg',
              y: '0px',
            },
            external_react_['createElement']('path', {
              d:
                'M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z',
            }),
          );
        }).attrs({
          className: 'search-icon',
        })(
          SearchBox_styled_elements_templateObject_3 ||
            (SearchBox_styled_elements_templateObject_3 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  position: absolute;\n  left: ',
                'px;\n  height: 1.8em;\n  width: 0.9em;\n\n  path {\n    fill: ',
                ';\n  }\n',
              ],
              [
                '\n  position: absolute;\n  left: ',
                'px;\n  height: 1.8em;\n  width: 0.9em;\n\n  path {\n    fill: ',
                ';\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.spacing.unit * 4;
          },
          function(props) {
            return props.theme.menu.textColor;
          },
        );
        var SearchResultsBox = styled_components.div(
          SearchBox_styled_elements_templateObject_4 ||
            (SearchBox_styled_elements_templateObject_4 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  padding: ',
                'px 0;\n  background-color: ',
                '};\n  color: ',
                ';\n  min-height: 150px;\n  max-height: 250px;\n  border-top: ',
                '};\n  border-bottom: ',
                '};\n  margin-top: 10px;\n  line-height: 1.4;\n  font-size: 0.9em;\n\n  ',
                ' {\n    padding-top: 6px;\n    padding-bottom: 6px;\n\n    &:hover,\n    &.active {\n      background-color: ',
                ';\n    }\n\n    > svg {\n      display: none;\n    }\n  }\n',
              ],
              [
                '\n  padding: ',
                'px 0;\n  background-color: ',
                '};\n  color: ',
                ';\n  min-height: 150px;\n  max-height: 250px;\n  border-top: ',
                '};\n  border-bottom: ',
                '};\n  margin-top: 10px;\n  line-height: 1.4;\n  font-size: 0.9em;\n\n  ',
                ' {\n    padding-top: 6px;\n    padding-bottom: 6px;\n\n    &:hover,\n    &.active {\n      background-color: ',
                ';\n    }\n\n    > svg {\n      display: none;\n    }\n  }\n',
              ],
            )),
          function(props) {
            return props.theme.spacing.unit;
          },
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(0.05, theme.menu.backgroundColor);
          },
          function(props) {
            return props.theme.menu.textColor;
          },
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(0.1, theme.menu.backgroundColor);
          },
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(0.1, theme.menu.backgroundColor);
          },
          MenuItemLabel,
          function(_a) {
            var theme = _a.theme;
            return Object(external_polished_['darken'])(0.1, theme.menu.backgroundColor);
          },
        );
        var ClearIcon = styled_components.i(
          SearchBox_styled_elements_templateObject_5 ||
            (SearchBox_styled_elements_templateObject_5 = Object(
              external_tslib_['__makeTemplateObject'],
            )(
              [
                '\n  position: absolute;\n  display: inline-block;\n  width: ',
                'px;\n  text-align: center;\n  right: ',
                "px;\n  line-height: 2em;\n  vertical-align: middle;\n  margin-right: 2px;\n  cursor: pointer;\n  font-style: normal;\n  color: '#666';\n",
              ],
              [
                '\n  position: absolute;\n  display: inline-block;\n  width: ',
                'px;\n  text-align: center;\n  right: ',
                "px;\n  line-height: 2em;\n  vertical-align: middle;\n  margin-right: 2px;\n  cursor: pointer;\n  font-style: normal;\n  color: '#666';\n",
              ],
            )),
          function(props) {
            return props.theme.spacing.unit * 2;
          },
          function(props) {
            return props.theme.spacing.unit * 4;
          },
        );
        var SearchBox_styled_elements_templateObject_1,
          SearchBox_styled_elements_templateObject_2,
          SearchBox_styled_elements_templateObject_3,
          SearchBox_styled_elements_templateObject_4,
          SearchBox_styled_elements_templateObject_5;

        // CONCATENATED MODULE: ./src/components/SearchBox/SearchBox.tsx

        var SearchBox_SearchBox = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(SearchBox, _super);
          function SearchBox(props) {
            var _this = _super.call(this, props) || this;
            _this.activeItemRef = null;
            _this.clear = function() {
              _this.setState({
                results: [],
                term: '',
                activeItemIdx: -1,
              });
              _this.props.marker.unmark();
            };
            _this.handleKeyDown = function(event) {
              if (event.keyCode === 27) {
                // ESQ
                _this.clear();
              }
              if (event.keyCode === 40) {
                // Arrow down
                _this.setState({
                  activeItemIdx: Math.min(
                    _this.state.activeItemIdx + 1,
                    _this.state.results.length - 1,
                  ),
                });
                event.preventDefault();
              }
              if (event.keyCode === 38) {
                // Arrow up
                _this.setState({
                  activeItemIdx: Math.max(0, _this.state.activeItemIdx - 1),
                });
                event.preventDefault();
              }
              if (event.keyCode === 13) {
                // enter
                var activeResult = _this.state.results[_this.state.activeItemIdx];
                if (activeResult) {
                  var item = _this.props.getItemById(activeResult.meta);
                  if (item) {
                    _this.props.onActivate(item);
                  }
                }
              }
            };
            _this.search = function(event) {
              var q = event.target.value;
              if (q.length < 3) {
                _this.clearResults(q);
                return;
              }
              _this.setState({
                term: q,
              });
              _this.props.search.search(event.target.value).then(function(res) {
                _this.setResults(res, q);
              });
            };
            _this.state = {
              results: [],
              term: '',
              activeItemIdx: -1,
            };
            return _this;
          }
          SearchBox.prototype.clearResults = function(term) {
            this.setState({
              results: [],
              term: term,
            });
            this.props.marker.unmark();
          };
          SearchBox.prototype.setResults = function(results, term) {
            this.setState({
              results: results,
              term: term,
            });
            this.props.marker.mark(term);
          };
          SearchBox.prototype.render = function() {
            var _this = this;
            var activeItemIdx = this.state.activeItemIdx;
            var results = this.state.results.map(function(res) {
              return {
                item: _this.props.getItemById(res.meta),
                score: res.score,
              };
            });
            results.sort(function(a, b) {
              return b.score - a.score;
            });
            return external_react_['createElement'](
              SearchWrap,
              { role: 'search' },
              this.state.term &&
                external_react_['createElement'](ClearIcon, { onClick: this.clear }, '\u00D7'),
              external_react_['createElement'](SearchIcon, null),
              external_react_['createElement'](SearchInput, {
                value: this.state.term,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Search...',
                type: 'text',
                onChange: this.search,
              }),
              results.length > 0 &&
                external_react_['createElement'](
                  PerfectScrollbarWrap,
                  {
                    options: {
                      wheelPropagation: false,
                    },
                  },
                  external_react_['createElement'](
                    SearchResultsBox,
                    { 'data-role': 'search:results' },
                    results.map(function(res, idx) {
                      return external_react_['createElement'](MenuItem_MenuItem, {
                        item: Object.create(res.item, {
                          active: {
                            value: idx === activeItemIdx,
                          },
                        }),
                        onActivate: _this.props.onActivate,
                        withoutChildren: true,
                        key: res.item.id,
                        'data-role': 'search:result',
                      });
                    }),
                  ),
                ),
            );
          };
          return SearchBox;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/Redoc/Redoc.tsx

        var Redoc_Redoc = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(Redoc, _super);
          function Redoc() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          Redoc.prototype.componentDidMount = function() {
            this.props.store.onDidMount();
          };
          Redoc.prototype.componentWillUnmount = function() {
            this.props.store.dispose();
          };
          Redoc.prototype.render = function() {
            var _a = this.props.store,
              spec = _a.spec,
              menu = _a.menu,
              options = _a.options,
              search = _a.search,
              marker = _a.marker;
            var store = this.props.store;
            return external_react_['createElement'](
              ThemeProvider,
              { theme: options.theme },
              external_react_['createElement'](
                Provider,
                { value: this.props.store },
                external_react_['createElement'](
                  OptionsProvider,
                  { value: options },
                  external_react_['createElement'](
                    RedocWrap,
                    { className: 'redoc-wrap' },
                    external_react_['createElement'](
                      StickyResponsiveSidebar_StickyResponsiveSidebar,
                      { menu: menu, className: 'menu-content' },
                      external_react_['createElement'](ApiLogo_ApiLogo, { info: spec.info }),
                      (!options.disableSearch &&
                        external_react_['createElement'](SearchBox_SearchBox, {
                          search: search,
                          marker: marker,
                          getItemById: menu.getItemById,
                          onActivate: menu.activateAndScroll,
                        })) ||
                        null,
                      external_react_['createElement'](SideMenu_SideMenu, { menu: menu }),
                    ),
                    external_react_['createElement'](
                      ApiContentWrap,
                      { className: 'api-content' },
                      external_react_['createElement'](ApiInfo_ApiInfo, { store: store }),
                      external_react_['createElement'](ContentItems_ContentItems, {
                        store: store,
                        items: menu.items,
                      }),
                    ),
                    external_react_['createElement'](BackgroundStub, null),
                  ),
                ),
              ),
            );
          };
          Redoc.propTypes = {
            store: external_prop_types_['instanceOf'](AppStore_AppStore).isRequired,
          };
          return Redoc;
        })(external_react_['Component']);

        // CONCATENATED MODULE: ./src/components/RedocStandalone.tsx

        var RedocStandalone_RedocStandalone = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(RedocStandalone, _super);
          function RedocStandalone() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          RedocStandalone.prototype.render = function() {
            var _a = this.props,
              spec = _a.spec,
              specUrl = _a.specUrl,
              _b = _a.options,
              options = _b === void 0 ? {} : _b,
              onLoaded = _a.onLoaded;
            var hideLoading = options.hideLoading !== undefined;
            var normalizedOpts = new RedocNormalizedOptions_RedocNormalizedOptions(options);
            return external_react_['createElement'](
              ErrorBoundary_ErrorBoundary,
              null,
              external_react_['createElement'](
                StoreBuilder_StoreBuilder,
                { spec: spec, specUrl: specUrl, options: options, onLoaded: onLoaded },
                function(_a) {
                  var loading = _a.loading,
                    store = _a.store;
                  return !loading
                    ? external_react_['createElement'](Redoc_Redoc, { store: store })
                    : hideLoading
                    ? null
                    : external_react_['createElement'](Loading_Loading, {
                        color: normalizedOpts.theme.colors.primary.main,
                      });
                },
              ),
            );
          };
          RedocStandalone.propTypes = {
            spec: function(props, _, componentName) {
              if (!props.spec && !props.specUrl) {
                return new Error(
                  "One of props 'spec' or 'specUrl' was not specified in '" + componentName + "'.",
                );
              }
              return null;
            },
            specUrl: function(props, _, componentName) {
              if (!props.spec && !props.specUrl) {
                return new Error(
                  "One of props 'spec' or 'specUrl' was not specified in '" + componentName + "'.",
                );
              }
              return null;
            },
            options: external_prop_types_['any'],
            onLoaded: external_prop_types_['any'],
          };
          return RedocStandalone;
        })(external_react_['PureComponent']);

        // CONCATENATED MODULE: ./src/components/JsonViewer/index.tsx

        // CONCATENATED MODULE: ./src/components/SideMenu/index.ts

        // CONCATENATED MODULE: ./src/components/TokenGroup/TokenGroup.tsx

        var SaveTokenButton = styled_components(Button)(
          TokenGroup_templateObject_1 ||
            (TokenGroup_templateObject_1 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  padding: 10px 30px;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  margin: 0\n  min-width: 60px;\n  max-width: 100px;\n  font-weight: bold;\n  flex: 1 1;\n  order: 2;\n',
              ],
              [
                '\n  padding: 10px 30px;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  margin: 0\n  min-width: 60px;\n  max-width: 100px;\n  font-weight: bold;\n  flex: 1 1;\n  order: 2;\n',
              ],
            )),
        );
        var TokenTextField = styled_components.input(
          TokenGroup_templateObject_2 ||
            (TokenGroup_templateObject_2 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  padding: 10px 30px 10px 20px;\n  border-radius: 4px 0 0 4px;\n  background-color: ',
                ';\n  color: ',
                '\n  white-space: nowrap;\n  align-items: center;\n  border: none;\n  direction: ltr;\n  min-width: 300px;\n  flex: 4 1;\n  order: 1;\n',
              ],
              [
                '\n  padding: 10px 30px 10px 20px;\n  border-radius: 4px 0 0 4px;\n  background-color: ',
                ';\n  color: ',
                '\n  white-space: nowrap;\n  align-items: center;\n  border: none;\n  direction: ltr;\n  min-width: 300px;\n  flex: 4 1;\n  order: 1;\n',
              ],
            )),
          function(props) {
            return props.theme.codeSample.backgroundColor;
          },
          function(props) {
            return props.theme.codeSample.textColor;
          },
        );
        var TokenGroupContainer = styled_components.div(
          TokenGroup_templateObject_3 ||
            (TokenGroup_templateObject_3 = Object(external_tslib_['__makeTemplateObject'])(
              [
                '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: flex-start;\n',
              ],
              [
                '\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: flex-start;\n',
              ],
            )),
        );
        var TokenGroup_Description = styled_components.p(
          TokenGroup_templateObject_4 ||
            (TokenGroup_templateObject_4 = Object(external_tslib_['__makeTemplateObject'])(
              ['\n  color: white;\n'],
              ['\n  color: white;\n'],
            )),
        );
        var TokenGroup_TokenGroup = /** @class */ (function(_super) {
          Object(external_tslib_['__extends'])(TokenGroup, _super);
          function TokenGroup(props) {
            var _this = _super.call(this, props) || this;
            _this.submit = _this.submit.bind(_this);
            _this.change = _this.change.bind(_this);
            return _this;
          }
          TokenGroup.prototype.submit = function() {
            this.props.onSubmit();
          };
          TokenGroup.prototype.change = function(e) {
            this.props.onChange(e.target.value);
          };
          TokenGroup.prototype.render = function() {
            return external_react_['createElement'](
              external_react_['Fragment'],
              null,
              external_react_['createElement'](RightPanelHeader, null, this.props.title),
              external_react_['createElement'](
                TokenGroupContainer,
                null,
                external_react_['createElement'](TokenTextField, { onChange: this.change }),
                external_react_['createElement'](SaveTokenButton, { onClick: this.submit }, 'Save'),
              ),
              external_react_['createElement'](
                TokenGroup_Description,
                null,
                this.props.description,
              ),
            );
          };
          return TokenGroup;
        })(external_react_['PureComponent']);

        var TokenGroup_templateObject_1,
          TokenGroup_templateObject_2,
          TokenGroup_templateObject_3,
          TokenGroup_templateObject_4;

        // CONCATENATED MODULE: ./src/components/index.ts

        // CONCATENATED MODULE: ./src/index.ts
        /* concated harmony reexport ApiContentWrap */ __webpack_require__.d(
          __webpack_exports__,
          'ApiContentWrap',
          function() {
            return ApiContentWrap;
          },
        );
        /* concated harmony reexport BackgroundStub */ __webpack_require__.d(
          __webpack_exports__,
          'BackgroundStub',
          function() {
            return BackgroundStub;
          },
        );
        /* concated harmony reexport RedocWrap */ __webpack_require__.d(
          __webpack_exports__,
          'RedocWrap',
          function() {
            return RedocWrap;
          },
        );
        /* concated harmony reexport StyledMarkdownBlock */ __webpack_require__.d(
          __webpack_exports__,
          'StyledMarkdownBlock',
          function() {
            return StyledMarkdownBlock;
          },
        );
        /* concated harmony reexport RedocStandalone */ __webpack_require__.d(
          __webpack_exports__,
          'RedocStandalone',
          function() {
            return RedocStandalone_RedocStandalone;
          },
        );
        /* concated harmony reexport Redoc */ __webpack_require__.d(
          __webpack_exports__,
          'Redoc',
          function() {
            return Redoc_Redoc;
          },
        );
        /* concated harmony reexport ApiInfo */ __webpack_require__.d(
          __webpack_exports__,
          'ApiInfo',
          function() {
            return ApiInfo_ApiInfo;
          },
        );
        /* concated harmony reexport ApiLogo */ __webpack_require__.d(
          __webpack_exports__,
          'ApiLogo',
          function() {
            return ApiLogo_ApiLogo;
          },
        );
        /* concated harmony reexport ContentItems */ __webpack_require__.d(
          __webpack_exports__,
          'ContentItems',
          function() {
            return ContentItems_ContentItems;
          },
        );
        /* concated harmony reexport ContentItem */ __webpack_require__.d(
          __webpack_exports__,
          'ContentItem',
          function() {
            return ContentItems_ContentItem;
          },
        );
        /* concated harmony reexport SectionItem */ __webpack_require__.d(
          __webpack_exports__,
          'SectionItem',
          function() {
            return ContentItems_SectionItem;
          },
        );
        /* concated harmony reexport SearchBox */ __webpack_require__.d(
          __webpack_exports__,
          'SearchBox',
          function() {
            return SearchBox_SearchBox;
          },
        );
        /* concated harmony reexport Operation */ __webpack_require__.d(
          __webpack_exports__,
          'Operation',
          function() {
            return Operation_Operation;
          },
        );
        /* concated harmony reexport Loading */ __webpack_require__.d(
          __webpack_exports__,
          'Loading',
          function() {
            return Loading_Loading;
          },
        );
        /* concated harmony reexport Markdown */ __webpack_require__.d(
          __webpack_exports__,
          'Markdown',
          function() {
            return Markdown_Markdown;
          },
        );
        /* concated harmony reexport OAuthFlow */ __webpack_require__.d(
          __webpack_exports__,
          'OAuthFlow',
          function() {
            return SecuritySchemes_OAuthFlow;
          },
        );
        /* concated harmony reexport SecurityDefs */ __webpack_require__.d(
          __webpack_exports__,
          'SecurityDefs',
          function() {
            return SecuritySchemes_SecurityDefs;
          },
        );
        /* concated harmony reexport ResponseView */ __webpack_require__.d(
          __webpack_exports__,
          'ResponseView',
          function() {
            return Response_ResponseView;
          },
        );
        /* concated harmony reexport ResponseDetails */ __webpack_require__.d(
          __webpack_exports__,
          'ResponseDetails',
          function() {
            return ResponseDetails_ResponseDetails;
          },
        );
        /* concated harmony reexport ResponseHeaders */ __webpack_require__.d(
          __webpack_exports__,
          'ResponseHeaders',
          function() {
            return ResponseHeaders_ResponseHeaders;
          },
        );
        /* concated harmony reexport ResponsesList */ __webpack_require__.d(
          __webpack_exports__,
          'ResponsesList',
          function() {
            return ResponsesList_ResponsesList;
          },
        );
        /* concated harmony reexport ResponseTitle */ __webpack_require__.d(
          __webpack_exports__,
          'ResponseTitle',
          function() {
            return ResponseTitle_ResponseTitle;
          },
        );
        /* concated harmony reexport ResponseSamples */ __webpack_require__.d(
          __webpack_exports__,
          'ResponseSamples',
          function() {
            return ResponseSamples_ResponseSamples;
          },
        );
        /* concated harmony reexport PayloadSamples */ __webpack_require__.d(
          __webpack_exports__,
          'PayloadSamples',
          function() {
            return PayloadSamples_PayloadSamples;
          },
        );
        /* concated harmony reexport MediaTypesSwitch */ __webpack_require__.d(
          __webpack_exports__,
          'MediaTypesSwitch',
          function() {
            return MediaTypesSwitch_MediaTypesSwitch;
          },
        );
        /* concated harmony reexport ErrorBoundary */ __webpack_require__.d(
          __webpack_exports__,
          'ErrorBoundary',
          function() {
            return ErrorBoundary_ErrorBoundary;
          },
        );
        /* concated harmony reexport StoreProvider */ __webpack_require__.d(
          __webpack_exports__,
          'StoreProvider',
          function() {
            return Provider;
          },
        );
        /* concated harmony reexport StoreConsumer */ __webpack_require__.d(
          __webpack_exports__,
          'StoreConsumer',
          function() {
            return Consumer;
          },
        );
        /* concated harmony reexport StoreBuilder */ __webpack_require__.d(
          __webpack_exports__,
          'StoreBuilder',
          function() {
            return StoreBuilder_StoreBuilder;
          },
        );
        /* concated harmony reexport OptionsContext */ __webpack_require__.d(
          __webpack_exports__,
          'OptionsContext',
          function() {
            return OptionsContext;
          },
        );
        /* concated harmony reexport OptionsProvider */ __webpack_require__.d(
          __webpack_exports__,
          'OptionsProvider',
          function() {
            return OptionsProvider;
          },
        );
        /* concated harmony reexport OptionsConsumer */ __webpack_require__.d(
          __webpack_exports__,
          'OptionsConsumer',
          function() {
            return OptionsConsumer;
          },
        );
        /* concated harmony reexport StickyResponsiveSidebar */ __webpack_require__.d(
          __webpack_exports__,
          'StickyResponsiveSidebar',
          function() {
            return StickyResponsiveSidebar_StickyResponsiveSidebar;
          },
        );
        /* concated harmony reexport SchemaDefinition */ __webpack_require__.d(
          __webpack_exports__,
          'SchemaDefinition',
          function() {
            return SchemaDefinition_SchemaDefinition;
          },
        );
        /* concated harmony reexport SourceCode */ __webpack_require__.d(
          __webpack_exports__,
          'SourceCode',
          function() {
            return SourceCode_SourceCode;
          },
        );
        /* concated harmony reexport SourceCodeWithCopy */ __webpack_require__.d(
          __webpack_exports__,
          'SourceCodeWithCopy',
          function() {
            return SourceCode_SourceCodeWithCopy;
          },
        );
        /* concated harmony reexport TokenGroup */ __webpack_require__.d(
          __webpack_exports__,
          'TokenGroup',
          function() {
            return TokenGroup_TokenGroup;
          },
        );
        /* concated harmony reexport Schema */ __webpack_require__.d(
          __webpack_exports__,
          'Schema',
          function() {
            return Schema_Schema;
          },
        );
        /* concated harmony reexport ObjectSchema */ __webpack_require__.d(
          __webpack_exports__,
          'ObjectSchema',
          function() {
            return ObjectSchema_ObjectSchema;
          },
        );
        /* concated harmony reexport OneOfButton */ __webpack_require__.d(
          __webpack_exports__,
          'OneOfButton',
          function() {
            return OneOfSchema_OneOfButton;
          },
        );
        /* concated harmony reexport OneOfSchema */ __webpack_require__.d(
          __webpack_exports__,
          'OneOfSchema',
          function() {
            return OneOfSchema_OneOfSchema;
          },
        );
        /* concated harmony reexport ArraySchema */ __webpack_require__.d(
          __webpack_exports__,
          'ArraySchema',
          function() {
            return ArraySchema_ArraySchema;
          },
        );
        /* concated harmony reexport DiscriminatorDropdown */ __webpack_require__.d(
          __webpack_exports__,
          'DiscriminatorDropdown',
          function() {
            return DiscriminatorDropdown_DiscriminatorDropdown;
          },
        );
        /* concated harmony reexport JsonViewer */ __webpack_require__.d(
          __webpack_exports__,
          'JsonViewer',
          function() {
            return JsonViewer;
          },
        );
        /* concated harmony reexport MenuItem */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItem',
          function() {
            return MenuItem_MenuItem;
          },
        );
        /* concated harmony reexport OperationMenuItemContent */ __webpack_require__.d(
          __webpack_exports__,
          'OperationMenuItemContent',
          function() {
            return MenuItem_OperationMenuItemContent;
          },
        );
        /* concated harmony reexport MenuItems */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItems',
          function() {
            return MenuItems_MenuItems;
          },
        );
        /* concated harmony reexport SideMenu */ __webpack_require__.d(
          __webpack_exports__,
          'SideMenu',
          function() {
            return SideMenu_SideMenu;
          },
        );
        /* concated harmony reexport OperationBadge */ __webpack_require__.d(
          __webpack_exports__,
          'OperationBadge',
          function() {
            return OperationBadge;
          },
        );
        /* concated harmony reexport MenuItemUl */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItemUl',
          function() {
            return MenuItemUl;
          },
        );
        /* concated harmony reexport MenuItemLi */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItemLi',
          function() {
            return MenuItemLi;
          },
        );
        /* concated harmony reexport menuItemDepth */ __webpack_require__.d(
          __webpack_exports__,
          'menuItemDepth',
          function() {
            return menuItemDepth;
          },
        );
        /* concated harmony reexport MenuItemLabel */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItemLabel',
          function() {
            return MenuItemLabel;
          },
        );
        /* concated harmony reexport MenuItemTitle */ __webpack_require__.d(
          __webpack_exports__,
          'MenuItemTitle',
          function() {
            return MenuItemTitle;
          },
        );
        /* concated harmony reexport RedocAttribution */ __webpack_require__.d(
          __webpack_exports__,
          'RedocAttribution',
          function() {
            return RedocAttribution;
          },
        );
        /* concated harmony reexport MiddlePanel */ __webpack_require__.d(
          __webpack_exports__,
          'MiddlePanel',
          function() {
            return MiddlePanel;
          },
        );
        /* concated harmony reexport Row */ __webpack_require__.d(
          __webpack_exports__,
          'Row',
          function() {
            return Row;
          },
        );
        /* concated harmony reexport RightPanel */ __webpack_require__.d(
          __webpack_exports__,
          'RightPanel',
          function() {
            return RightPanel;
          },
        );
        /* concated harmony reexport Section */ __webpack_require__.d(
          __webpack_exports__,
          'Section',
          function() {
            return Section;
          },
        );
        /* concated harmony reexport createStore */ __webpack_require__.d(
          __webpack_exports__,
          'createStore',
          function() {
            return createStore;
          },
        );
        /* concated harmony reexport AppStore */ __webpack_require__.d(
          __webpack_exports__,
          'AppStore',
          function() {
            return AppStore_AppStore;
          },
        );
        /* concated harmony reexport OpenAPIParser */ __webpack_require__.d(
          __webpack_exports__,
          'OpenAPIParser',
          function() {
            return OpenAPIParser_OpenAPIParser;
          },
        );
        /* concated harmony reexport LEGACY_REGEXP */ __webpack_require__.d(
          __webpack_exports__,
          'LEGACY_REGEXP',
          function() {
            return LEGACY_REGEXP;
          },
        );
        /* concated harmony reexport MDX_COMPONENT_REGEXP */ __webpack_require__.d(
          __webpack_exports__,
          'MDX_COMPONENT_REGEXP',
          function() {
            return MDX_COMPONENT_REGEXP;
          },
        );
        /* concated harmony reexport COMPONENT_REGEXP */ __webpack_require__.d(
          __webpack_exports__,
          'COMPONENT_REGEXP',
          function() {
            return COMPONENT_REGEXP;
          },
        );
        /* concated harmony reexport buildComponentComment */ __webpack_require__.d(
          __webpack_exports__,
          'buildComponentComment',
          function() {
            return buildComponentComment;
          },
        );
        /* concated harmony reexport MarkdownRenderer */ __webpack_require__.d(
          __webpack_exports__,
          'MarkdownRenderer',
          function() {
            return MarkdownRenderer_MarkdownRenderer;
          },
        );
        /* concated harmony reexport SECTION_ATTR */ __webpack_require__.d(
          __webpack_exports__,
          'SECTION_ATTR',
          function() {
            return SECTION_ATTR;
          },
        );
        /* concated harmony reexport MenuStore */ __webpack_require__.d(
          __webpack_exports__,
          'MenuStore',
          function() {
            return MenuStore_MenuStore;
          },
        );
        /* concated harmony reexport ScrollService */ __webpack_require__.d(
          __webpack_exports__,
          'ScrollService',
          function() {
            return ScrollService_ScrollService;
          },
        );
        /* concated harmony reexport SpecStore */ __webpack_require__.d(
          __webpack_exports__,
          'SpecStore',
          function() {
            return SpecStore_SpecStore;
          },
        );
        /* concated harmony reexport ClipboardService */ __webpack_require__.d(
          __webpack_exports__,
          'ClipboardService',
          function() {
            return ClipboardService;
          },
        );
        /* concated harmony reexport HistoryService */ __webpack_require__.d(
          __webpack_exports__,
          'HistoryService',
          function() {
            return HistoryService_HistoryService;
          },
        );
        /* concated harmony reexport history */ __webpack_require__.d(
          __webpack_exports__,
          'history',
          function() {
            return HistoryService_history;
          },
        );
        /* concated harmony reexport ApiInfoModel */ __webpack_require__.d(
          __webpack_exports__,
          'ApiInfoModel',
          function() {
            return ApiInfo_ApiInfoModel;
          },
        );
        /* concated harmony reexport SecuritySchemeModel */ __webpack_require__.d(
          __webpack_exports__,
          'SecuritySchemeModel',
          function() {
            return SecuritySchemes_SecuritySchemeModel;
          },
        );
        /* concated harmony reexport SecuritySchemesModel */ __webpack_require__.d(
          __webpack_exports__,
          'SecuritySchemesModel',
          function() {
            return SecuritySchemes_SecuritySchemesModel;
          },
        );
        /* concated harmony reexport RedocNormalizedOptions */ __webpack_require__.d(
          __webpack_exports__,
          'RedocNormalizedOptions',
          function() {
            return RedocNormalizedOptions_RedocNormalizedOptions;
          },
        );
        /* concated harmony reexport GROUP_DEPTH */ __webpack_require__.d(
          __webpack_exports__,
          'GROUP_DEPTH',
          function() {
            return GROUP_DEPTH;
          },
        );
        /* concated harmony reexport MenuBuilder */ __webpack_require__.d(
          __webpack_exports__,
          'MenuBuilder',
          function() {
            return MenuBuilder_MenuBuilder;
          },
        );
        /* concated harmony reexport SearchStore */ __webpack_require__.d(
          __webpack_exports__,
          'SearchStore',
          function() {
            return SearchStore_SearchStore;
          },
        );
        /* concated harmony reexport MarkerService */ __webpack_require__.d(
          __webpack_exports__,
          'MarkerService',
          function() {
            return MarkerService_MarkerService;
          },
        );
        /* concated harmony reexport GroupModel */ __webpack_require__.d(
          __webpack_exports__,
          'GroupModel',
          function() {
            return Group_model_GroupModel;
          },
        );
        /* concated harmony reexport isPayloadSample */ __webpack_require__.d(
          __webpack_exports__,
          'isPayloadSample',
          function() {
            return isPayloadSample;
          },
        );
        /* concated harmony reexport OperationModel */ __webpack_require__.d(
          __webpack_exports__,
          'OperationModel',
          function() {
            return Operation_OperationModel;
          },
        );
        /* concated harmony reexport RequestBodyModel */ __webpack_require__.d(
          __webpack_exports__,
          'RequestBodyModel',
          function() {
            return RequestBody_RequestBodyModel;
          },
        );
        /* concated harmony reexport ExampleModel */ __webpack_require__.d(
          __webpack_exports__,
          'ExampleModel',
          function() {
            return Example_ExampleModel;
          },
        );
        /* concated harmony reexport MediaContentModel */ __webpack_require__.d(
          __webpack_exports__,
          'MediaContentModel',
          function() {
            return MediaContent_MediaContentModel;
          },
        );
        /* concated harmony reexport MediaTypeModel */ __webpack_require__.d(
          __webpack_exports__,
          'MediaTypeModel',
          function() {
            return MediaType_MediaTypeModel;
          },
        );
        /* concated harmony reexport ResponseModel */ __webpack_require__.d(
          __webpack_exports__,
          'ResponseModel',
          function() {
            return Response_ResponseModel;
          },
        );
        /* concated harmony reexport SchemaModel */ __webpack_require__.d(
          __webpack_exports__,
          'SchemaModel',
          function() {
            return Schema_SchemaModel;
          },
        );
        /* concated harmony reexport FieldModel */ __webpack_require__.d(
          __webpack_exports__,
          'FieldModel',
          function() {
            return Field_FieldModel;
          },
        );
        /* concated harmony reexport JsonPointer */ __webpack_require__.d(
          __webpack_exports__,
          'JsonPointer',
          function() {
            return JsonPointer_JsonPointer;
          },
        );
        /* concated harmony reexport isStatusCode */ __webpack_require__.d(
          __webpack_exports__,
          'isStatusCode',
          function() {
            return isStatusCode;
          },
        );
        /* concated harmony reexport getStatusCodeType */ __webpack_require__.d(
          __webpack_exports__,
          'getStatusCodeType',
          function() {
            return getStatusCodeType;
          },
        );
        /* concated harmony reexport isOperationName */ __webpack_require__.d(
          __webpack_exports__,
          'isOperationName',
          function() {
            return isOperationName;
          },
        );
        /* concated harmony reexport getOperationSummary */ __webpack_require__.d(
          __webpack_exports__,
          'getOperationSummary',
          function() {
            return getOperationSummary;
          },
        );
        /* concated harmony reexport detectType */ __webpack_require__.d(
          __webpack_exports__,
          'detectType',
          function() {
            return detectType;
          },
        );
        /* concated harmony reexport isPrimitiveType */ __webpack_require__.d(
          __webpack_exports__,
          'isPrimitiveType',
          function() {
            return isPrimitiveType;
          },
        );
        /* concated harmony reexport isJsonLike */ __webpack_require__.d(
          __webpack_exports__,
          'isJsonLike',
          function() {
            return isJsonLike;
          },
        );
        /* concated harmony reexport isFormUrlEncoded */ __webpack_require__.d(
          __webpack_exports__,
          'isFormUrlEncoded',
          function() {
            return isFormUrlEncoded;
          },
        );
        /* concated harmony reexport urlFormEncodePayload */ __webpack_require__.d(
          __webpack_exports__,
          'urlFormEncodePayload',
          function() {
            return urlFormEncodePayload;
          },
        );
        /* concated harmony reexport serializeParameterValueWithMime */ __webpack_require__.d(
          __webpack_exports__,
          'serializeParameterValueWithMime',
          function() {
            return serializeParameterValueWithMime;
          },
        );
        /* concated harmony reexport serializeParameterValue */ __webpack_require__.d(
          __webpack_exports__,
          'serializeParameterValue',
          function() {
            return serializeParameterValue;
          },
        );
        /* concated harmony reexport langFromMime */ __webpack_require__.d(
          __webpack_exports__,
          'langFromMime',
          function() {
            return langFromMime;
          },
        );
        /* concated harmony reexport isNamedDefinition */ __webpack_require__.d(
          __webpack_exports__,
          'isNamedDefinition',
          function() {
            return isNamedDefinition;
          },
        );
        /* concated harmony reexport humanizeConstraints */ __webpack_require__.d(
          __webpack_exports__,
          'humanizeConstraints',
          function() {
            return humanizeConstraints;
          },
        );
        /* concated harmony reexport sortByRequired */ __webpack_require__.d(
          __webpack_exports__,
          'sortByRequired',
          function() {
            return sortByRequired;
          },
        );
        /* concated harmony reexport sortByField */ __webpack_require__.d(
          __webpack_exports__,
          'sortByField',
          function() {
            return sortByField;
          },
        );
        /* concated harmony reexport mergeParams */ __webpack_require__.d(
          __webpack_exports__,
          'mergeParams',
          function() {
            return mergeParams;
          },
        );
        /* concated harmony reexport mergeSimilarMediaTypes */ __webpack_require__.d(
          __webpack_exports__,
          'mergeSimilarMediaTypes',
          function() {
            return mergeSimilarMediaTypes;
          },
        );
        /* concated harmony reexport expandDefaultServerVariables */ __webpack_require__.d(
          __webpack_exports__,
          'expandDefaultServerVariables',
          function() {
            return expandDefaultServerVariables;
          },
        );
        /* concated harmony reexport normalizeServers */ __webpack_require__.d(
          __webpack_exports__,
          'normalizeServers',
          function() {
            return normalizeServers;
          },
        );
        /* concated harmony reexport SECURITY_DEFINITIONS_COMPONENT_NAME */ __webpack_require__.d(
          __webpack_exports__,
          'SECURITY_DEFINITIONS_COMPONENT_NAME',
          function() {
            return SECURITY_DEFINITIONS_COMPONENT_NAME;
          },
        );
        /* concated harmony reexport SECURITY_DEFINITIONS_JSX_NAME */ __webpack_require__.d(
          __webpack_exports__,
          'SECURITY_DEFINITIONS_JSX_NAME',
          function() {
            return SECURITY_DEFINITIONS_JSX_NAME;
          },
        );
        /* concated harmony reexport SCHEMA_DEFINITION_JSX_NAME */ __webpack_require__.d(
          __webpack_exports__,
          'SCHEMA_DEFINITION_JSX_NAME',
          function() {
            return SCHEMA_DEFINITION_JSX_NAME;
          },
        );
        /* concated harmony reexport SECURITY_SCHEMES_SECTION_PREFIX */ __webpack_require__.d(
          __webpack_exports__,
          'SECURITY_SCHEMES_SECTION_PREFIX',
          function() {
            return SECURITY_SCHEMES_SECTION_PREFIX;
          },
        );
        /* concated harmony reexport setSecuritySchemePrefix */ __webpack_require__.d(
          __webpack_exports__,
          'setSecuritySchemePrefix',
          function() {
            return setSecuritySchemePrefix;
          },
        );
        /* concated harmony reexport shortenHTTPVerb */ __webpack_require__.d(
          __webpack_exports__,
          'shortenHTTPVerb',
          function() {
            return shortenHTTPVerb;
          },
        );
        /* concated harmony reexport isRedocExtension */ __webpack_require__.d(
          __webpack_exports__,
          'isRedocExtension',
          function() {
            return isRedocExtension;
          },
        );
        /* concated harmony reexport extractExtensions */ __webpack_require__.d(
          __webpack_exports__,
          'extractExtensions',
          function() {
            return extractExtensions;
          },
        );
        /* concated harmony reexport pluralizeType */ __webpack_require__.d(
          __webpack_exports__,
          'pluralizeType',
          function() {
            return pluralizeType;
          },
        );
        /* concated harmony reexport mapWithLast */ __webpack_require__.d(
          __webpack_exports__,
          'mapWithLast',
          function() {
            return mapWithLast;
          },
        );
        /* concated harmony reexport mapValues */ __webpack_require__.d(
          __webpack_exports__,
          'mapValues',
          function() {
            return mapValues;
          },
        );
        /* concated harmony reexport flattenByProp */ __webpack_require__.d(
          __webpack_exports__,
          'flattenByProp',
          function() {
            return flattenByProp;
          },
        );
        /* concated harmony reexport stripTrailingSlash */ __webpack_require__.d(
          __webpack_exports__,
          'stripTrailingSlash',
          function() {
            return stripTrailingSlash;
          },
        );
        /* concated harmony reexport isNumeric */ __webpack_require__.d(
          __webpack_exports__,
          'isNumeric',
          function() {
            return isNumeric;
          },
        );
        /* concated harmony reexport appendToMdHeading */ __webpack_require__.d(
          __webpack_exports__,
          'appendToMdHeading',
          function() {
            return appendToMdHeading;
          },
        );
        /* concated harmony reexport mergeObjects */ __webpack_require__.d(
          __webpack_exports__,
          'mergeObjects',
          function() {
            return mergeObjects;
          },
        );
        /* concated harmony reexport safeSlugify */ __webpack_require__.d(
          __webpack_exports__,
          'safeSlugify',
          function() {
            return safeSlugify;
          },
        );
        /* concated harmony reexport isAbsoluteUrl */ __webpack_require__.d(
          __webpack_exports__,
          'isAbsoluteUrl',
          function() {
            return isAbsoluteUrl;
          },
        );
        /* concated harmony reexport resolveUrl */ __webpack_require__.d(
          __webpack_exports__,
          'resolveUrl',
          function() {
            return resolveUrl;
          },
        );
        /* concated harmony reexport getBasePath */ __webpack_require__.d(
          __webpack_exports__,
          'getBasePath',
          function() {
            return getBasePath;
          },
        );
        /* concated harmony reexport titleize */ __webpack_require__.d(
          __webpack_exports__,
          'titleize',
          function() {
            return titleize;
          },
        );
        /* concated harmony reexport removeQueryString */ __webpack_require__.d(
          __webpack_exports__,
          'removeQueryString',
          function() {
            return removeQueryString;
          },
        );
        /* concated harmony reexport unescapeHTMLChars */ __webpack_require__.d(
          __webpack_exports__,
          'unescapeHTMLChars',
          function() {
            return unescapeHTMLChars;
          },
        );
        /* concated harmony reexport mapLang */ __webpack_require__.d(
          __webpack_exports__,
          'mapLang',
          function() {
            return mapLang;
          },
        );
        /* concated harmony reexport highlight */ __webpack_require__.d(
          __webpack_exports__,
          'highlight',
          function() {
            return highlight;
          },
        );
        /* concated harmony reexport loadAndBundleSpec */ __webpack_require__.d(
          __webpack_exports__,
          'loadAndBundleSpec',
          function() {
            return loadAndBundleSpec;
          },
        );
        /* concated harmony reexport convertSwagger2OpenAPI */ __webpack_require__.d(
          __webpack_exports__,
          'convertSwagger2OpenAPI',
          function() {
            return convertSwagger2OpenAPI;
          },
        );
        /* concated harmony reexport IS_BROWSER */ __webpack_require__.d(
          __webpack_exports__,
          'IS_BROWSER',
          function() {
            return IS_BROWSER;
          },
        );
        /* concated harmony reexport querySelector */ __webpack_require__.d(
          __webpack_exports__,
          'querySelector',
          function() {
            return querySelector;
          },
        );
        /* concated harmony reexport html2Str */ __webpack_require__.d(
          __webpack_exports__,
          'html2Str',
          function() {
            return html2Str;
          },
        );
        /* concated harmony reexport Throttle */ __webpack_require__.d(
          __webpack_exports__,
          'Throttle',
          function() {
            return Throttle;
          },
        );
        /* concated harmony reexport debugTime */ __webpack_require__.d(
          __webpack_exports__,
          'debugTime',
          function() {
            return debugTime;
          },
        );
        /* concated harmony reexport debugTimeEnd */ __webpack_require__.d(
          __webpack_exports__,
          'debugTimeEnd',
          function() {
            return debugTimeEnd;
          },
        );
        /* concated harmony reexport memoize */ __webpack_require__.d(
          __webpack_exports__,
          'memoize',
          function() {
            return memoize;
          },
        );
        /* concated harmony reexport media */ __webpack_require__.d(
          __webpack_exports__,
          'media',
          function() {
            return media;
          },
        );
        /* concated harmony reexport css */ __webpack_require__.d(
          __webpack_exports__,
          'css',
          function() {
            return css;
          },
        );
        /* concated harmony reexport createGlobalStyle */ __webpack_require__.d(
          __webpack_exports__,
          'createGlobalStyle',
          function() {
            return createGlobalStyle;
          },
        );
        /* concated harmony reexport keyframes */ __webpack_require__.d(
          __webpack_exports__,
          'keyframes',
          function() {
            return keyframes;
          },
        );
        /* concated harmony reexport ThemeProvider */ __webpack_require__.d(
          __webpack_exports__,
          'ThemeProvider',
          function() {
            return ThemeProvider;
          },
        );
        /* concated harmony reexport extensionsHook */ __webpack_require__.d(
          __webpack_exports__,
          'extensionsHook',
          function() {
            return extensionsHook;
          },
        );
        /* concated harmony reexport styled */ __webpack_require__.d(
          __webpack_exports__,
          'styled',
          function() {
            return styled_components;
          },
        );

        /***/
      },
      /******/
    ],
  );
});
//# sourceMappingURL=redoc.lib.js.map
