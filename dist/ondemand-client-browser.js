var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  "node_modules/is-buffer/index.js"(exports, module) {
    module.exports = function(obj) {
      return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
    };
    function isBuffer(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    }
    function isSlowBuffer(obj) {
      return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
    }
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    var bind = require_bind();
    var isBuffer = require_is_buffer();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return toString.call(val) === "[object Array]";
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (typeof result[key] === "object" && typeof val === "object") {
          result[key] = merge(result[key], val);
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim
    };
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
    "use strict";
    module.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      return error;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module) {
    "use strict";
    var enhanceError = require_enhanceError();
    module.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    var createError = require_createError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? (
      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }()
    ) : (
      // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }()
    );
  }
});

// node_modules/axios/lib/helpers/btoa.js
var require_btoa = __commonJS({
  "node_modules/axios/lib/helpers/btoa.js"(exports, module) {
    "use strict";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function E() {
      this.message = "String contains an invalid character";
    }
    E.prototype = new Error();
    E.prototype.code = 5;
    E.prototype.name = "InvalidCharacterError";
    function btoa(input) {
      var str = String(input);
      var output = "";
      for (
        var block, charCode, idx = 0, map = chars;
        // if the next str index does not exist:
        //   change the mapping table to "="
        //   check if d has no fractional digits
        str.charAt(idx | 0) || (map = "=", idx % 1);
        // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
        output += map.charAt(63 & block >> 8 - idx % 1 * 8)
      ) {
        charCode = str.charCodeAt(idx += 3 / 4);
        if (charCode > 255) {
          throw new E();
        }
        block = block << 8 | charCode;
      }
      return output;
    }
    module.exports = btoa;
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? (
      // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }()
    ) : (
      // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }()
    );
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var buildURL = require_buildURL();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    var btoa = typeof window !== "undefined" && window.btoa && window.btoa.bind(window) || require_btoa();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        var loadEvent = "onreadystatechange";
        var xDomain = false;
        if (typeof window !== "undefined" && window.XDomainRequest && !("withCredentials" in request) && !isURLSameOrigin(config.url)) {
          request = new window.XDomainRequest();
          loadEvent = "onload";
          xDomain = true;
          request.onprogress = function handleProgress() {
          };
          request.ontimeout = function handleTimeout() {
          };
        }
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password || "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        request[loadEvent] = function handleLoad() {
          if (!request || request.readyState !== 4 && !xDomain) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === "text" ? request.responseText : request.response;
          var response = {
            data: responseData,
            // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
            status: request.status === 1223 ? 204 : request.status,
            statusText: request.status === 1223 ? "No Content" : request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(resolve, reject, response);
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          reject(createError(
            "timeout of " + config.timeout + "ms exceeded",
            config,
            "ECONNABORTED",
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var cookies = require_cookies();
          var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (config.withCredentials) {
          request.withCredentials = true;
        }
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            if (config.responseType !== "json") {
              throw e;
            }
          }
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (requestData === void 0) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined") {
        adapter = require_xhr();
      }
      return adapter;
    }
    var defaults = {
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, "application/json;charset=utf-8");
          return JSON.stringify(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
          }
        }
        return data;
      }],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled,
        rejected
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function transformData(data, headers, fns) {
      utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      if (config.baseURL && !isAbsoluteURL(config.url)) {
        config.url = combineURLs(config.baseURL, config.url);
      }
      config.headers = config.headers || {};
      config.data = transformData(
        config.data,
        config.headers,
        config.transformRequest
      );
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers || {}
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    var defaults = require_defaults();
    var utils = require_utils();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = utils.merge({
          url: arguments[0]
        }, arguments[1]);
      }
      config = utils.merge(defaults, { method: "get" }, this.defaults, config);
      config.method = config.method.toLowerCase();
      var chain = [dispatchRequest, void 0];
      var promise = Promise.resolve(config);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(utils.merge(config || {}, {
          method,
          url
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(utils.merge(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios2 = createInstance(defaults);
    axios2.Axios = Axios;
    axios2.create = function create(instanceConfig) {
      return createInstance(utils.merge(defaults, instanceConfig));
    };
    axios2.Cancel = require_Cancel();
    axios2.CancelToken = require_CancelToken();
    axios2.isCancel = require_isCancel();
    axios2.all = function all(promises) {
      return Promise.all(promises);
    };
    axios2.spread = require_spread();
    module.exports = axios2;
    module.exports.default = axios2;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    module.exports = require_axios();
  }
});

// src/ondemand-client.ts
var import_axios = __toESM(require_axios2());

// src/jsonp.js
var head;
var JSONP = class {
  constructor() {
  }
  fetch(options = {}) {
    let params = {
      data: options.data || {},
      error: options.error || void 0,
      success: options.success || void 0,
      url: options.url || ""
    };
    if (params.url.length === 0) {
      throw new Error("MissingUrl");
    }
    let done = false;
    let callback = params.data[options.callback_name || "callback"] = "jsonpODJSClient_" + this.randomString(15);
    window[callback] = (data) => {
      params.success(data);
      try {
        return delete window[callback];
      } catch (_error) {
        window[callback] = void 0;
        return void 0;
      }
    };
    let script = this.createElement("script");
    script.src = params.url;
    script.src += params.url.indexOf("?" === -1) ? "&" : "&";
    script.src += this.objectToUri(params.data);
    script.async = true;
    script.onerror = (evt) => {
      return params.error({
        url: script.src,
        event: evt
      });
    };
    script.onload = script.onreadystatechange = () => {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
        done = true;
        script.onload = script.onreadystatechange = null;
        if (script && script.parentNode) {
          return script.parentNode.removeChild(script);
        }
      }
    };
    head = head || window.document.getElementsByTagName("head")[0];
    return head.appendChild(script);
  }
  encode(val) {
    return window.encodeURIComponent(val);
  }
  createElement(tag) {
    return window.document.createElement(tag);
  }
  objectToUri(obj) {
    let data, key, value;
    data = [];
    for (key in obj) {
      value = obj[key];
      data.push(this.encode(key) + "=" + this.encode(value));
    }
    return data.join("&");
  }
  randomString(length) {
    let str;
    str = "";
    while (str.length < length) {
      str += Math.random().toString(36)[2];
    }
    return str;
  }
};

// src/ondemand-client.ts
var OnDemandClient = class {
  constructor(builder) {
    __publicField(this, "config");
    __publicField(this, "jsonp");
    this.config = {
      baseUrl: "https://ondemand.websol.barchart.com",
      apiKey: null,
      useJsonP: true,
      debug: false,
      sandbox: false
    };
    Object.assign(this.config, builder);
  }
  getQuote(options) {
    const requestData = {
      url: this.config.baseUrl + "/getQuote." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getLeaders(options) {
    const requestData = {
      url: this.config.baseUrl + "/getLeaders." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getTechnicals(options) {
    let requestData = {
      url: this.config.baseUrl + "/getTechnicals." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getProfile(options) {
    let requestData = {
      url: this.config.baseUrl + "/getProfile." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getInstrumentDefinition(options) {
    let requestData = {
      url: this.config.baseUrl + "/getInstrumentDefinition." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesSpecifications(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesSpecifications." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesExpirations(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesExpirations." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesOptionsExpirations(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesOptionsExpirations." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getCompetitors(options) {
    let requestData = {
      url: this.config.baseUrl + "/getCompetitors." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getInsiders(options) {
    let requestData = {
      url: this.config.baseUrl + "/getInsiders." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getHighsLows(options) {
    let requestData = {
      url: this.config.baseUrl + "/getHighsLows." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getMomentum(options) {
    let requestData = {
      url: this.config.baseUrl + "/getMomentum." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSignal(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSignal." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getRatings(options) {
    let requestData = {
      url: this.config.baseUrl + "/getRatings." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getChart(options) {
    let requestData = {
      url: this.config.baseUrl + "/getChart." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getHistory(options) {
    let requestData = {
      url: this.config.baseUrl + "/getHistory." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFuturesOptions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFuturesOptions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getEquityOptions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getEquityOptions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSpecialOptions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSpecialOptions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSpecialOptionsClassification(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSpecialOptionsClassification." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getWeather(options) {
    let requestData = {
      url: this.config.baseUrl + "/getWeather." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getUSDAGrainPrices(options) {
    let requestData = {
      url: this.config.baseUrl + "/getUSDAGrainPrices." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getEarningsEstimates(options) {
    let requestData = {
      url: this.config.baseUrl + "/getEarningsEstimates." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getCorporateActions(options) {
    let requestData = {
      url: this.config.baseUrl + "/getCorporateActions." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getIndexMembers(options) {
    let requestData = {
      url: this.config.baseUrl + "/getIndexMembers." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFinancialHighlights(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFinancialHighlights." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getIncomeStatements(options) {
    let requestData = {
      url: this.config.baseUrl + "/getIncomeStatements." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getFinancialRatios(options) {
    let requestData = {
      url: this.config.baseUrl + "/getFinancialRatios." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSECFilings(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSECFilings." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getETFDetails(options) {
    let requestData = {
      url: this.config.baseUrl + "/getETFDetails." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getSymbolLookup(options) {
    let requestData = {
      url: this.config.baseUrl + "/getSymbolLookUp." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getNews(options) {
    let requestData = {
      url: this.config.baseUrl + "/getNews." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getBalanceSheets(options) {
    let requestData = {
      url: this.config.baseUrl + "/getBalanceSheets." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getClosePrice(options) {
    let requestData = {
      url: this.config.baseUrl + "/getClosePrice." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getDividendData(options) {
    let requestData = {
      url: this.config.baseUrl + "/getDividendData." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  getEquityOptionsExpirations(options) {
    let requestData = {
      url: this.config.baseUrl + "/getEquityOptionsExpirations." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  get(call, options) {
    let requestData = {
      url: this.config.baseUrl + "/" + call + "." + this.format()
    };
    return this._checkParamsAndFetch(requestData, options);
  }
  format() {
    if (this.config.useJsonP) {
      return "jsonp";
    } else {
      return "json";
    }
  }
  _keyFormat() {
    if (this.config.sandbox) {
      return "key";
    } else {
      return "apikey";
    }
  }
  _checkParamsAndFetch(requestData, options) {
    requestData.params = Object.assign({}, options);
    if (this.config.apiKey) {
      requestData.params[this._keyFormat()] = this.config.apiKey;
    }
    return this._doFetch(requestData);
  }
  _doFetch(requestData) {
    const url = this._buildUrl(requestData.url, requestData.params);
    return new Promise((resolve, reject) => {
      if (this.config.useJsonP) {
        if (!this.jsonp) {
          this.jsonp = new JSONP();
        }
        this.jsonp.fetch({
          url,
          success: (data) => {
            if (this.config.debug) {
              console.log("success", data);
            }
            resolve(data);
          },
          error: (query) => {
            console.log("fetch error", query);
            reject(query);
          }
        });
      } else {
        import_axios.default.get(url).then((response) => {
          if (this.config.debug) {
            console.log("success", response);
          }
          resolve(response.data);
        }).catch((error) => {
          console.log("fetch error", error);
          reject(error);
        });
      }
    });
  }
  _buildUrl(url, parameters) {
    let qs = "";
    for (let key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        const value = parameters[key];
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
      }
    }
    if (qs.length > 0) {
      qs = qs.substring(0, qs.length - 1);
      url = url + "?" + qs;
    }
    return url;
  }
  setAPIKey(apiKey) {
    this.config.apiKey = apiKey;
    return this;
  }
  setJsonP(useJsonP) {
    this.config.useJsonP = useJsonP;
    return this;
  }
  setDebug(debug) {
    this.config.debug = debug;
    return this;
  }
  setBaseUrl(base) {
    this.config.baseUrl = base;
    return this;
  }
  setSandbox(sandbox) {
    this.config.sandbox = sandbox;
    if (sandbox) {
      this.config.baseUrl = "http://marketdata.websol.barchart.com";
    } else {
      this.config.baseUrl = "http://ondemand.websol.barchart.com";
    }
    return this;
  }
};
export {
  OnDemandClient
};
/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
