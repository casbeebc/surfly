!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(r, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "/static/bundles/widget/",
    n(n.s = 57)
}([function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return o
    }
    )),
    n.d(e, "a", (function() {
        return i
    }
    )),
    n.d(e, "e", (function() {
        return s
    }
    )),
    n.d(e, "c", (function() {
        return a
    }
    )),
    n.d(e, "d", (function() {
        return c
    }
    ));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    };
    function o(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    var i = function() {
        return (i = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    };
    function s(t) {
        var e = "function" == typeof Symbol && Symbol.iterator
          , n = e && t[e]
          , r = 0;
        if (n)
            return n.call(t);
        if (t && "number" == typeof t.length)
            return {
                next: function() {
                    return t && r >= t.length && (t = void 0),
                    {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function a(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var r, o, i = n.call(t), s = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
                s.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return s
    }
    function c() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(a(arguments[e]));
        return t
    }
}
, , function(t, e, n) {
    "use strict";
    function r(t) {
        switch (Object.prototype.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return _(t, Error)
        }
    }
    function o(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }
    function i(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }
    function s(t) {
        return "[object DOMException]" === Object.prototype.toString.call(t)
    }
    function a(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }
    function c(t) {
        return null === t || "object" != typeof t && "function" != typeof t
    }
    function u(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    function l(t) {
        return "undefined" != typeof Event && _(t, Event)
    }
    function d(t) {
        return "undefined" != typeof Element && _(t, Element)
    }
    function p(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }
    function f(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }
    function h(t) {
        return u(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
    }
    function _(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
    n.d(e, "d", (function() {
        return r
    }
    )),
    n.d(e, "e", (function() {
        return o
    }
    )),
    n.d(e, "a", (function() {
        return i
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "k", (function() {
        return a
    }
    )),
    n.d(e, "i", (function() {
        return c
    }
    )),
    n.d(e, "h", (function() {
        return u
    }
    )),
    n.d(e, "f", (function() {
        return l
    }
    )),
    n.d(e, "c", (function() {
        return d
    }
    )),
    n.d(e, "j", (function() {
        return p
    }
    )),
    n.d(e, "m", (function() {
        return f
    }
    )),
    n.d(e, "l", (function() {
        return h
    }
    )),
    n.d(e, "g", (function() {
        return _
    }
    ))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return r
    }
    )),
    n.d(e, "f", (function() {
        return o
    }
    )),
    n.d(e, "a", (function() {
        return i
    }
    )),
    n.d(e, "e", (function() {
        return s
    }
    )),
    n.d(e, "g", (function() {
        return a
    }
    )),
    n.d(e, "b", (function() {
        return c
    }
    )),
    n.d(e, "c", (function() {
        return u
    }
    ));
    function r(t) {
        return "?" + Object.keys(t).map((function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
        }
        )).join("&")
    }
    function o(t) {
        const e = document.createElement("a");
        e.href = t;
        const n = {
            protocol: e.protocol,
            hostname: e.hostname,
            href: e.href,
            pathname: e.pathname,
            host: e.host,
            port: e.port,
            origin: e.origin,
            search: e.search
        };
        return ("443" === e.port && "https:" === e.protocol || "80" === e.port && "http:" === e.protocol) && (n.port = "",
        n.host = n.hostname),
        "/" !== e.pathname[0] && (n.pathname = "/" + n.pathname),
        n.origin = n.protocol + "//" + n.hostname + (n.port ? ":" + n.port : ""),
        n
    }
    function i(t, e) {
        let n = "";
        t = t.split("."),
        e = e.split("."),
        t.reverse(),
        e.reverse();
        for (let r = 0; r < t.length && r < e.length && t[r] === e[r]; r++)
            n = "." + t[r] + n;
        return n
    }
    function s(t) {
        if (!t)
            return null;
        const e = {};
        "?" === t[0] && (t = t.substr(1));
        const n = t.replace(/\+/g, " ").split("&");
        let r = !0;
        for (let t = 0; t < n.length; t++) {
            const o = n[t].split("=")
              , i = decodeURIComponent(o[0]);
            i && (o.length > 2 && (o[1] = o.slice(1).join("=")),
            e[i] = decodeURIComponent(o[1] || ""),
            r = !1)
        }
        return r ? null : e
    }
    function a(t) {
        const e = /^www\.(.*)/.exec(t);
        return e ? e[1] : t
    }
    function c(t) {
        return 0 === t.indexOf("http://") || 0 === t.indexOf("https://")
    }
    function u(t) {
        const e = t.indexOf("#");
        return -1 === e ? t : t.substring(0, e)
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "e", (function() {
            return i
        }
        )),
        n.d(e, "i", (function() {
            return s
        }
        )),
        n.d(e, "h", (function() {
            return a
        }
        )),
        n.d(e, "d", (function() {
            return c
        }
        )),
        n.d(e, "c", (function() {
            return u
        }
        )),
        n.d(e, "b", (function() {
            return l
        }
        )),
        n.d(e, "a", (function() {
            return d
        }
        )),
        n.d(e, "f", (function() {
            return p
        }
        )),
        n.d(e, "g", (function() {
            return f
        }
        ));
        var r = n(10)
          , o = (n(7),
        {});
        function i() {
            return Object(r.b)() ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o
        }
        function s() {
            var t = i()
              , e = t.crypto || t.msCrypto;
            if (void 0 !== e && e.getRandomValues) {
                var n = new Uint16Array(8);
                e.getRandomValues(n),
                n[3] = 4095 & n[3] | 16384,
                n[4] = 16383 & n[4] | 32768;
                var r = function(t) {
                    for (var e = t.toString(16); e.length < 4; )
                        e = "0" + e;
                    return e
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            }
            ))
        }
        function a(t) {
            if (!t)
                return {};
            var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e)
                return {};
            var n = e[6] || ""
              , r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                relative: e[5] + n + r
            }
        }
        function c(t) {
            if (t.message)
                return t.message;
            if (t.exception && t.exception.values && t.exception.values[0]) {
                var e = t.exception.values[0];
                return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
            }
            return t.event_id || "<unknown>"
        }
        function u(t) {
            var e = i();
            if (!("console"in e))
                return t();
            var n = e.console
              , r = {};
            ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                t in e.console && n[t].__sentry_original__ && (r[t] = n[t],
                n[t] = n[t].__sentry_original__)
            }
            ));
            var o = t();
            return Object.keys(r).forEach((function(t) {
                n[t] = r[t]
            }
            )),
            o
        }
        function l(t, e, n) {
            t.exception = t.exception || {},
            t.exception.values = t.exception.values || [],
            t.exception.values[0] = t.exception.values[0] || {},
            t.exception.values[0].value = t.exception.values[0].value || e || "",
            t.exception.values[0].type = t.exception.values[0].type || n || "Error"
        }
        function d(t, e) {
            void 0 === e && (e = {});
            try {
                t.exception.values[0].mechanism = t.exception.values[0].mechanism || {},
                Object.keys(e).forEach((function(n) {
                    t.exception.values[0].mechanism[n] = e[n]
                }
                ))
            } catch (t) {}
        }
        function p() {
            try {
                return document.location.href
            } catch (t) {
                return ""
            }
        }
        function f(t, e) {
            if (!e)
                return 6e4;
            var n = parseInt("" + e, 10);
            if (!isNaN(n))
                return 1e3 * n;
            var r = Date.parse("" + e);
            return isNaN(r) ? 6e4 : r - t
        }
    }
    ).call(this, n(12))
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "c", (function() {
            return u
        }
        )),
        n.d(e, "f", (function() {
            return l
        }
        )),
        n.d(e, "e", (function() {
            return f
        }
        )),
        n.d(e, "d", (function() {
            return y
        }
        )),
        n.d(e, "b", (function() {
            return g
        }
        )),
        n.d(e, "a", (function() {
            return m
        }
        ));
        var r = n(0)
          , o = n(16)
          , i = n(2)
          , s = n(28)
          , a = n(14)
          , c = n(7);
        function u(t, e, n) {
            if (e in t) {
                var r = t[e]
                  , o = n(r);
                if ("function" == typeof o)
                    try {
                        o.prototype = o.prototype || {},
                        Object.defineProperties(o, {
                            __sentry_original__: {
                                enumerable: !1,
                                value: r
                            }
                        })
                    } catch (t) {}
                t[e] = o
            }
        }
        function l(t) {
            return Object.keys(t).map((function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }
            )).join("&")
        }
        function d(t) {
            if (Object(i.d)(t)) {
                var e = t
                  , n = {
                    message: e.message,
                    name: e.name,
                    stack: e.stack
                };
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            if (Object(i.f)(t)) {
                var s = t
                  , a = {};
                a.type = s.type;
                try {
                    a.target = Object(i.c)(s.target) ? Object(o.a)(s.target) : Object.prototype.toString.call(s.target)
                } catch (t) {
                    a.target = "<unknown>"
                }
                try {
                    a.currentTarget = Object(i.c)(s.currentTarget) ? Object(o.a)(s.currentTarget) : Object.prototype.toString.call(s.currentTarget)
                } catch (t) {
                    a.currentTarget = "<unknown>"
                }
                for (var r in "undefined" != typeof CustomEvent && Object(i.g)(t, CustomEvent) && (a.detail = s.detail),
                s)
                    Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s);
                return a
            }
            return t
        }
        function p(t) {
            return function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }
        function f(t, e, n) {
            void 0 === e && (e = 3),
            void 0 === n && (n = 102400);
            var r = y(t, e);
            return p(r) > n ? f(t, e - 1, n) : r
        }
        function h(e, n) {
            return "domain" === n && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : void 0 !== t && e === t ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : Object(i.l)(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + Object(a.a)(e) + "]" : e
        }
        function _(t, e, n, r) {
            if (void 0 === n && (n = 1 / 0),
            void 0 === r && (r = new s.a),
            0 === n)
                return function(t) {
                    var e = Object.prototype.toString.call(t);
                    if ("string" == typeof t)
                        return t;
                    if ("[object Object]" === e)
                        return "[Object]";
                    if ("[object Array]" === e)
                        return "[Array]";
                    var n = h(t);
                    return Object(i.i)(n) ? n : e
                }(e);
            if (null != e && "function" == typeof e.toJSON)
                return e.toJSON();
            var o = h(e, t);
            if (Object(i.i)(o))
                return o;
            var a = d(e)
              , c = Array.isArray(e) ? [] : {};
            if (r.memoize(e))
                return "[Circular ~]";
            for (var u in a)
                Object.prototype.hasOwnProperty.call(a, u) && (c[u] = _(u, a[u], n - 1, r));
            return r.unmemoize(e),
            c
        }
        function y(t, e) {
            try {
                return JSON.parse(JSON.stringify(t, (function(t, n) {
                    return _(t, n, e)
                }
                )))
            } catch (t) {
                return "**non-serializable**"
            }
        }
        function g(t, e) {
            void 0 === e && (e = 40);
            var n = Object.keys(d(t));
            if (n.sort(),
            !n.length)
                return "[object has no keys]";
            if (n[0].length >= e)
                return Object(c.d)(n[0], e);
            for (var r = n.length; r > 0; r--) {
                var o = n.slice(0, r).join(", ");
                if (!(o.length > e))
                    return r === n.length ? o : Object(c.d)(o, e)
            }
            return ""
        }
        function m(t) {
            var e, n;
            if (Object(i.h)(t)) {
                var o = t
                  , s = {};
                try {
                    for (var a = Object(r.e)(Object.keys(o)), c = a.next(); !c.done; c = a.next()) {
                        var u = c.value;
                        void 0 !== o[u] && (s[u] = m(o[u]))
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (n = a.return) && n.call(a)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return s
            }
            return Array.isArray(t) ? t.map(m) : t
        }
    }
    ).call(this, n(12))
}
, , function(t, e, n) {
    "use strict";
    n.d(e, "d", (function() {
        return o
    }
    )),
    n.d(e, "c", (function() {
        return i
    }
    )),
    n.d(e, "b", (function() {
        return s
    }
    )),
    n.d(e, "a", (function() {
        return a
    }
    ));
    var r = n(2);
    function o(t, e) {
        return void 0 === e && (e = 0),
        "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
    }
    function i(t, e) {
        var n = t
          , r = n.length;
        if (r <= 150)
            return n;
        e > r && (e = r);
        var o = Math.max(e - 60, 0);
        o < 5 && (o = 0);
        var i = Math.min(o + 140, r);
        return i > r - 5 && (i = r),
        i === r && (o = Math.max(i - 140, 0)),
        n = n.slice(o, i),
        o > 0 && (n = "'{snip} " + n),
        i < r && (n += " {snip}"),
        n
    }
    function s(t, e) {
        if (!Array.isArray(t))
            return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var o = t[r];
            try {
                n.push(String(o))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }
    function a(t, e) {
        return !!Object(r.k)(t) && (Object(r.j)(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
    }
}
, , function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map((function(e) {
                var n = function(t, e) {
                    var n = t[1] || ""
                      , r = t[3];
                    if (!r)
                        return n;
                    if (e && "function" == typeof btoa) {
                        var o = (s = r,
                        a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
                        "/*# ".concat(c, " */"))
                          , i = r.sources.map((function(t) {
                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */")
                        }
                        ));
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var s, a, c;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
            }
            )).join("")
        }
        ,
        e.i = function(t, n, r) {
            "string" == typeof t && (t = [[null, t, ""]]);
            var o = {};
            if (r)
                for (var i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    null != s && (o[s] = !0)
                }
            for (var a = 0; a < t.length; a++) {
                var c = [].concat(t[a]);
                r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                e.push(c))
            }
        }
        ,
        e
    }
}
, function(t, e, n) {
    "use strict";
    (function(t, r) {
        n.d(e, "b", (function() {
            return o
        }
        )),
        n.d(e, "a", (function() {
            return i
        }
        ));
        n(2),
        n(5);
        function o() {
            return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0)
        }
        function i(t, e) {
            return t.require(e)
        }
    }
    ).call(this, n(38), n(20)(t))
}
, function(t, e, n) {
    (function(t, r) {
        var o;
        /*! https://mths.be/punycode v1.4.1 by @mathias */
        !function(i) {
            e && e.nodeType,
            t && t.nodeType;
            var s = "object" == typeof r && r;
            s.global !== s && s.window !== s && s.self;
            var a, c = 2147483647, u = /^xn--/, l = /[^\x20-\x7E]/, d = /[\x2E\u3002\uFF0E\uFF61]/g, p = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, f = Math.floor, h = String.fromCharCode;
            function _(t) {
                throw new RangeError(p[t])
            }
            function y(t, e) {
                for (var n = t.length, r = []; n--; )
                    r[n] = e(t[n]);
                return r
            }
            function g(t, e) {
                var n = t.split("@")
                  , r = "";
                return n.length > 1 && (r = n[0] + "@",
                t = n[1]),
                r + y((t = t.replace(d, ".")).split("."), e).join(".")
            }
            function m(t) {
                for (var e, n, r = [], o = 0, i = t.length; o < i; )
                    (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                    o--) : r.push(e);
                return r
            }
            function v(t) {
                return y(t, (function(t) {
                    var e = "";
                    return t > 65535 && (e += h((t -= 65536) >>> 10 & 1023 | 55296),
                    t = 56320 | 1023 & t),
                    e += h(t)
                }
                )).join("")
            }
            function b(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }
            function w(t, e, n) {
                var r = 0;
                for (t = n ? f(t / 700) : t >> 1,
                t += f(t / e); t > 455; r += 36)
                    t = f(t / 35);
                return f(r + 36 * t / (t + 38))
            }
            function S(t) {
                var e, n, r, o, i, s, a, u, l, d, p, h = [], y = t.length, g = 0, m = 128, b = 72;
                for ((n = t.lastIndexOf("-")) < 0 && (n = 0),
                r = 0; r < n; ++r)
                    t.charCodeAt(r) >= 128 && _("not-basic"),
                    h.push(t.charCodeAt(r));
                for (o = n > 0 ? n + 1 : 0; o < y; ) {
                    for (i = g,
                    s = 1,
                    a = 36; o >= y && _("invalid-input"),
                    ((u = (p = t.charCodeAt(o++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : 36) >= 36 || u > f((c - g) / s)) && _("overflow"),
                    g += u * s,
                    !(u < (l = a <= b ? 1 : a >= b + 26 ? 26 : a - b)); a += 36)
                        s > f(c / (d = 36 - l)) && _("overflow"),
                        s *= d;
                    b = w(g - i, e = h.length + 1, 0 == i),
                    f(g / e) > c - m && _("overflow"),
                    m += f(g / e),
                    g %= e,
                    h.splice(g++, 0, m)
                }
                return v(h)
            }
            function O(t) {
                var e, n, r, o, i, s, a, u, l, d, p, y, g, v, S, O = [];
                for (y = (t = m(t)).length,
                e = 128,
                n = 0,
                i = 72,
                s = 0; s < y; ++s)
                    (p = t[s]) < 128 && O.push(h(p));
                for (r = o = O.length,
                o && O.push("-"); r < y; ) {
                    for (a = c,
                    s = 0; s < y; ++s)
                        (p = t[s]) >= e && p < a && (a = p);
                    for (a - e > f((c - n) / (g = r + 1)) && _("overflow"),
                    n += (a - e) * g,
                    e = a,
                    s = 0; s < y; ++s)
                        if ((p = t[s]) < e && ++n > c && _("overflow"),
                        p == e) {
                            for (u = n,
                            l = 36; !(u < (d = l <= i ? 1 : l >= i + 26 ? 26 : l - i)); l += 36)
                                S = u - d,
                                v = 36 - d,
                                O.push(h(b(d + S % v, 0))),
                                u = f(S / v);
                            O.push(h(b(u, 0))),
                            i = w(n, g, r == o),
                            n = 0,
                            ++r
                        }
                    ++n,
                    ++e
                }
                return O.join("")
            }
            a = {
                version: "1.4.1",
                ucs2: {
                    decode: m,
                    encode: v
                },
                decode: S,
                encode: O,
                toASCII: function(t) {
                    return g(t, (function(t) {
                        return l.test(t) ? "xn--" + O(t) : t
                    }
                    ))
                },
                toUnicode: function(t) {
                    return g(t, (function(t) {
                        return u.test(t) ? S(t.slice(4).toLowerCase()) : t
                    }
                    ))
                }
            },
            void 0 === (o = function() {
                return a
            }
            .call(e, n, e, t)) || (t.exports = o)
        }()
    }
    ).call(this, n(56)(t), n(12))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = TypeError
      , o = Object.getOwnPropertyDescriptor;
    if (o)
        try {
            o({}, "")
        } catch (t) {
            o = null
        }
    var i = function() {
        throw new r
    }
      , s = o ? function() {
        try {
            return i
        } catch (t) {
            try {
                return o(arguments, "callee").get
            } catch (t) {
                return i
            }
        }
    }() : i
      , a = n(48)()
      , c = Object.getPrototypeOf || function(t) {
        return t.__proto__
    }
      , u = void 0
      , l = "undefined" == typeof Uint8Array ? void 0 : c(Uint8Array)
      , d = {
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
        "%ArrayIteratorPrototype%": a ? c([][Symbol.iterator]()) : void 0,
        "%ArrayPrototype%": Array.prototype,
        "%ArrayProto_entries%": Array.prototype.entries,
        "%ArrayProto_forEach%": Array.prototype.forEach,
        "%ArrayProto_keys%": Array.prototype.keys,
        "%ArrayProto_values%": Array.prototype.values,
        "%AsyncFromSyncIteratorPrototype%": void 0,
        "%AsyncFunction%": void 0,
        "%AsyncFunctionPrototype%": void 0,
        "%AsyncGenerator%": void 0,
        "%AsyncGeneratorFunction%": void 0,
        "%AsyncGeneratorPrototype%": void 0,
        "%AsyncIteratorPrototype%": u && a && Symbol.asyncIterator ? u[Symbol.asyncIterator]() : void 0,
        "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
        "%Boolean%": Boolean,
        "%BooleanPrototype%": Boolean.prototype,
        "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
        "%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
        "%Date%": Date,
        "%DatePrototype%": Date.prototype,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%ErrorPrototype%": Error.prototype,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%EvalErrorPrototype%": EvalError.prototype,
        "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
        "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
        "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
        "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
        "%Function%": Function,
        "%FunctionPrototype%": Function.prototype,
        "%Generator%": void 0,
        "%GeneratorFunction%": void 0,
        "%GeneratorPrototype%": void 0,
        "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
        "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
        "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
        "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
        "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
        "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": a ? c(c([][Symbol.iterator]())) : void 0,
        "%JSON%": "object" == typeof JSON ? JSON : void 0,
        "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
        "%Map%": "undefined" == typeof Map ? void 0 : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && a ? c((new Map)[Symbol.iterator]()) : void 0,
        "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
        "%Math%": Math,
        "%Number%": Number,
        "%NumberPrototype%": Number.prototype,
        "%Object%": Object,
        "%ObjectPrototype%": Object.prototype,
        "%ObjProto_toString%": Object.prototype.toString,
        "%ObjProto_valueOf%": Object.prototype.valueOf,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
        "%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
        "%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
        "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
        "%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
        "%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
        "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
        "%RangeError%": RangeError,
        "%RangeErrorPrototype%": RangeError.prototype,
        "%ReferenceError%": ReferenceError,
        "%ReferenceErrorPrototype%": ReferenceError.prototype,
        "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
        "%RegExp%": RegExp,
        "%RegExpPrototype%": RegExp.prototype,
        "%Set%": "undefined" == typeof Set ? void 0 : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && a ? c((new Set)[Symbol.iterator]()) : void 0,
        "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
        "%String%": String,
        "%StringIteratorPrototype%": a ? c(""[Symbol.iterator]()) : void 0,
        "%StringPrototype%": String.prototype,
        "%Symbol%": a ? Symbol : void 0,
        "%SymbolPrototype%": a ? Symbol.prototype : void 0,
        "%SyntaxError%": SyntaxError,
        "%SyntaxErrorPrototype%": SyntaxError.prototype,
        "%ThrowTypeError%": s,
        "%TypedArray%": l,
        "%TypedArrayPrototype%": l ? l.prototype : void 0,
        "%TypeError%": r,
        "%TypeErrorPrototype%": r.prototype,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
        "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
        "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
        "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
        "%URIError%": URIError,
        "%URIErrorPrototype%": URIError.prototype,
        "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
        "%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
        "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
        "%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
    }
      , p = n(15).call(Function.call, String.prototype.replace)
      , f = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
      , h = /\\(\\)?/g
      , _ = function(t) {
        var e = [];
        return p(t, f, (function(t, n, r, o) {
            e[e.length] = r ? p(o, h, "$1") : n || t
        }
        )),
        e
    }
      , y = function(t, e) {
        if (!(t in d))
            throw new SyntaxError("intrinsic " + t + " does not exist!");
        if (void 0 === d[t] && !e)
            throw new r("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return d[t]
    };
    t.exports = function(t, e) {
        if ("string" != typeof t || 0 === t.length)
            throw new TypeError("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof e)
            throw new TypeError('"allowMissing" argument must be a boolean');
        for (var n = _(t), i = y("%" + (n.length > 0 ? n[0] : "") + "%", e), s = 1; s < n.length; s += 1)
            if (null != i)
                if (o && s + 1 >= n.length) {
                    var a = o(i, n[s]);
                    if (!e && !(n[s]in i))
                        throw new r("base intrinsic for " + t + " exists, but the property is not available.");
                    i = a ? a.get || a.value : i[n[s]]
                } else
                    i = i[n[s]];
        return i
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }
    ));
    function r(t) {
        try {
            return t && "function" == typeof t && t.name || "<anonymous>"
        } catch (t) {
            return "<anonymous>"
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(46);
    t.exports = Function.prototype.bind || r
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }
    ));
    var r = n(2);
    function o(t) {
        try {
            for (var e = t, n = [], r = 0, o = 0, s = " > ".length, a = void 0; e && r++ < 5 && !("html" === (a = i(e)) || r > 1 && o + n.length * s + a.length >= 80); )
                n.push(a),
                o += a.length,
                e = e.parentNode;
            return n.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }
    function i(t) {
        var e, n, o, i, s, a = t, c = [];
        if (!a || !a.tagName)
            return "";
        if (c.push(a.tagName.toLowerCase()),
        a.id && c.push("#" + a.id),
        (e = a.className) && Object(r.k)(e))
            for (n = e.split(/\s+/),
            s = 0; s < n.length; s++)
                c.push("." + n[s]);
        var u = ["type", "name", "title", "alt"];
        for (s = 0; s < u.length; s++)
            o = u[s],
            (i = a.getAttribute(o)) && c.push("[" + o + '="' + i + '"]');
        return c.join("")
    }
}
, , function(t, e, n) {
    "use strict";
    var r = function(t) {
        function e(n, r, o) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            t.call(this, n),
            this.listener = r,
            this.context = o
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t),
        e
    }(n(35));
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, o, i, s, a) {
        if (!t) {
            var c;
            if (void 0 === e)
                c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, r, o, i, s, a]
                  , l = 0;
                (c = new Error(e.replace(/%s/g, (function() {
                    return u[l++]
                }
                )))).name = "Invariant Violation"
            }
            throw c.framesToPop = 1,
            c
        }
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            Object.defineProperty(e, "exports", {
                enumerable: !0
            }),
            e.webpackPolyfill = 1
        }
        return e
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(15)
      , o = n(13)("%Function%")
      , i = o.apply
      , s = o.call;
    t.exports = function() {
        return r.apply(s, arguments)
    }
    ,
    t.exports.apply = function() {
        return r.apply(i, arguments)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(50)
      , o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo")
      , i = Object.prototype.toString
      , s = Array.prototype.concat
      , a = Object.defineProperty
      , c = a && function() {
        var t = {};
        try {
            for (var e in a(t, "x", {
                enumerable: !1,
                value: t
            }),
            t)
                return !1;
            return t.x === t
        } catch (t) {
            return !1
        }
    }()
      , u = function(t, e, n, r) {
        var o;
        (!(e in t) || "function" == typeof (o = r) && "[object Function]" === i.call(o) && r()) && (c ? a(t, e, {
            configurable: !0,
            enumerable: !1,
            value: n,
            writable: !0
        }) : t[e] = n)
    }
      , l = function(t, e) {
        var n = arguments.length > 2 ? arguments[2] : {}
          , i = r(e);
        o && (i = s.call(i, Object.getOwnPropertySymbols(e)));
        for (var a = 0; a < i.length; a += 1)
            u(t, i[a], e[i[a]], n[i[a]])
    };
    l.supportsDescriptors = !!c,
    t.exports = l
}
, function(t, e, n) {
    "use strict";
    var r = Object.prototype.toString;
    t.exports = function(t) {
        var e = r.call(t)
          , n = "[object Arguments]" === e;
        return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)),
        n
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(52)
      , o = n(53)
      , i = n(54)("String.prototype.replace")
      , s = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
      , a = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
    t.exports = function() {
        var t = o(r(this));
        return i(i(t, s, ""), a, "")
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(24);
    t.exports = function() {
        return String.prototype.trim && "​" === "​".trim() ? String.prototype.trim : r
    }
}
, , function(t, e, n) {
    var r = {
        EventEmitter: n(34),
        EmitterSubscription: n(18)
    };
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }
    ));
    var r = function() {
        function t() {
            this._hasWeakSet = "function" == typeof WeakSet,
            this._inner = this._hasWeakSet ? new WeakSet : []
        }
        return t.prototype.memoize = function(t) {
            if (this._hasWeakSet)
                return !!this._inner.has(t) || (this._inner.add(t),
                !1);
            for (var e = 0; e < this._inner.length; e++) {
                if (this._inner[e] === t)
                    return !0
            }
            return this._inner.push(t),
            !1
        }
        ,
        t.prototype.unmemoize = function(t) {
            if (this._hasWeakSet)
                this._inner.delete(t);
            else
                for (var e = 0; e < this._inner.length; e++)
                    if (this._inner[e] === t) {
                        this._inner.splice(e, 1);
                        break
                    }
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(42)
      , o = n(44)
      , i = n(45)
      , s = n(47)
      , a = function(t) {
        o(!1, t)
    }
      , c = String.prototype.replace
      , u = String.prototype.split
      , l = function(t) {
        var e = t % 100
          , n = e % 10;
        return 11 !== e && 1 === n ? 0 : 2 <= n && n <= 4 && !(e >= 12 && e <= 14) ? 1 : 2
    }
      , d = {
        pluralTypes: {
            arabic: function(t) {
                if (t < 3)
                    return t;
                var e = t % 100;
                return e >= 3 && e <= 10 ? 3 : e >= 11 ? 4 : 5
            },
            bosnian_serbian: l,
            chinese: function() {
                return 0
            },
            croatian: l,
            french: function(t) {
                return t > 1 ? 1 : 0
            },
            german: function(t) {
                return 1 !== t ? 1 : 0
            },
            russian: l,
            lithuanian: function(t) {
                return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 9 && (t % 100 < 11 || t % 100 > 19) ? 1 : 2
            },
            czech: function(t) {
                return 1 === t ? 0 : t >= 2 && t <= 4 ? 1 : 2
            },
            polish: function(t) {
                if (1 === t)
                    return 0;
                var e = t % 10;
                return 2 <= e && e <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
            },
            icelandic: function(t) {
                return t % 10 != 1 || t % 100 == 11 ? 1 : 0
            },
            slovenian: function(t) {
                var e = t % 100;
                return 1 === e ? 0 : 2 === e ? 1 : 3 === e || 4 === e ? 2 : 3
            }
        },
        pluralTypeToLanguages: {
            arabic: ["ar"],
            bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
            chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
            croatian: ["hr", "hr-HR"],
            german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
            french: ["fr", "tl", "pt-br"],
            russian: ["ru", "ru-RU"],
            lithuanian: ["lt"],
            czech: ["cs", "cs-CZ", "sk"],
            polish: ["pl"],
            icelandic: ["is"],
            slovenian: ["sl-SL"]
        }
    };
    function p(t, e) {
        var n, o, i = (n = t.pluralTypeToLanguages,
        o = {},
        r(n, (function(t, e) {
            r(t, (function(t) {
                o[t] = e
            }
            ))
        }
        )),
        o);
        return i[e] || i[u.call(e, /-/, 1)[0]] || i.en
    }
    function f(t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
    var h = /%\{(.*?)\}/g;
    function _(t, e, n, r, o) {
        if ("string" != typeof t)
            throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
        if (null == e)
            return t;
        var a = t
          , l = r || h
          , f = o || d
          , _ = "number" == typeof e ? {
            smart_count: e
        } : e;
        if (null != _.smart_count && a) {
            var y = u.call(a, "||||");
            a = s(y[function(t, e, n) {
                return t.pluralTypes[p(t, e)](n)
            }(f, n || "en", _.smart_count)] || y[0])
        }
        return a = c.call(a, l, (function(t, e) {
            return i(_, e) && null != _[e] ? _[e] : t
        }
        ))
    }
    function y(t) {
        var e = t || {};
        this.phrases = {},
        this.extend(e.phrases || {}),
        this.currentLocale = e.locale || "en";
        var n = e.allowMissing ? _ : null;
        this.onMissingKey = "function" == typeof e.onMissingKey ? e.onMissingKey : n,
        this.warn = e.warn || a,
        this.tokenRegex = function(t) {
            var e = t && t.prefix || "%{"
              , n = t && t.suffix || "}";
            if ("||||" === e || "||||" === n)
                throw new RangeError('"||||" token is reserved for pluralization');
            return new RegExp(f(e) + "(.*?)" + f(n),"g")
        }(e.interpolation),
        this.pluralRules = e.pluralRules || d
    }
    y.prototype.locale = function(t) {
        return t && (this.currentLocale = t),
        this.currentLocale
    }
    ,
    y.prototype.extend = function(t, e) {
        r(t, (function(t, n) {
            var r = e ? e + "." + n : n;
            "object" == typeof t ? this.extend(t, r) : this.phrases[r] = t
        }
        ), this)
    }
    ,
    y.prototype.unset = function(t, e) {
        "string" == typeof t ? delete this.phrases[t] : r(t, (function(t, n) {
            var r = e ? e + "." + n : n;
            "object" == typeof t ? this.unset(t, r) : delete this.phrases[r]
        }
        ), this)
    }
    ,
    y.prototype.clear = function() {
        this.phrases = {}
    }
    ,
    y.prototype.replace = function(t) {
        this.clear(),
        this.extend(t)
    }
    ,
    y.prototype.t = function(t, e) {
        var n, r, o = null == e ? {} : e;
        if ("string" == typeof this.phrases[t])
            n = this.phrases[t];
        else if ("string" == typeof o._)
            n = o._;
        else if (this.onMissingKey) {
            r = (0,
            this.onMissingKey)(t, o, this.currentLocale, this.tokenRegex, this.pluralRules)
        } else
            this.warn('Missing translation for key: "' + t + '"'),
            r = t;
        return "string" == typeof n && (r = _(n, o, this.currentLocale, this.tokenRegex, this.pluralRules)),
        r
    }
    ,
    y.prototype.has = function(t) {
        return i(this.phrases, t)
    }
    ,
    y.transformPhrase = function(t, e, n) {
        return _(t, e, n)
    }
    ,
    t.exports = y
}
, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 511.626 511.626;" xml:space="preserve"><g><path d="M477.371,127.44c-22.843-28.074-53.871-50.249-93.076-66.523c-39.204-16.272-82.035-24.41-128.478-24.41 c-34.643,0-67.762,4.805-99.357,14.417c-31.595,9.611-58.812,22.602-81.653,38.97c-22.845,16.37-41.018,35.832-54.534,58.385 C6.757,170.833,0,194.484,0,219.228c0,28.549,8.61,55.3,25.837,80.234c17.227,24.931,40.778,45.871,70.664,62.811 c-2.096,7.611-4.57,14.846-7.426,21.693c-2.855,6.852-5.424,12.474-7.708,16.851c-2.286,4.377-5.376,9.233-9.281,14.562 c-3.899,5.328-6.849,9.089-8.848,11.275c-1.997,2.19-5.28,5.812-9.851,10.849c-4.565,5.048-7.517,8.329-8.848,9.855 c-0.193,0.089-0.953,0.952-2.285,2.567c-1.331,1.615-1.999,2.423-1.999,2.423l-1.713,2.566c-0.953,1.431-1.381,2.334-1.287,2.707 c0.096,0.373-0.094,1.331-0.57,2.851c-0.477,1.526-0.428,2.669,0.142,3.433v0.284c0.765,3.429,2.43,6.187,4.998,8.277 c2.568,2.092,5.474,2.95,8.708,2.563c12.375-1.522,23.223-3.606,32.548-6.276c49.87-12.758,93.649-35.782,131.334-69.097 c14.272,1.522,28.072,2.286,41.396,2.286c46.442,0,89.271-8.138,128.479-24.417c39.208-16.272,70.233-38.448,93.072-66.517 c22.843-28.062,34.263-58.663,34.263-91.781C511.626,186.108,500.207,155.509,477.371,127.44z"></path></g></svg>'
}
, function(t, e, n) {
    t.exports = function() {
        "use strict";
        var t = function(e, n) {
            return (t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n])
            }
            )(e, n)
        }
          , e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function n(t, e, n, r) {
            var o, i, s, a = e || [0], c = (n = n || 0) >>> 3, u = -1 === r ? 3 : 0;
            for (o = 0; o < t.length; o += 1)
                i = (s = o + c) >>> 2,
                a.length <= i && a.push(0),
                a[i] |= t[o] << 8 * (u + r * (s % 4));
            return {
                value: a,
                binLen: 8 * t.length + n
            }
        }
        function r(t, r, o) {
            switch (r) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
                break;
            default:
                throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")
            }
            switch (t) {
            case "HEX":
                return function(t, e, n) {
                    return function(t, e, n, r) {
                        var o, i, s, a;
                        if (0 != t.length % 2)
                            throw new Error("String of HEX type must be in byte increments");
                        var c = e || [0]
                          , u = (n = n || 0) >>> 3
                          , l = -1 === r ? 3 : 0;
                        for (o = 0; o < t.length; o += 2) {
                            if (i = parseInt(t.substr(o, 2), 16),
                            isNaN(i))
                                throw new Error("String of HEX type contains invalid characters");
                            for (s = (a = (o >>> 1) + u) >>> 2; c.length <= s; )
                                c.push(0);
                            c[s] |= i << 8 * (l + r * (a % 4))
                        }
                        return {
                            value: c,
                            binLen: 4 * t.length + n
                        }
                    }(t, e, n, o)
                }
                ;
            case "TEXT":
                return function(t, e, n) {
                    return function(t, e, n, r, o) {
                        var i, s, a, c, u, l, d, p, f = 0, h = n || [0], _ = (r = r || 0) >>> 3;
                        if ("UTF8" === e)
                            for (d = -1 === o ? 3 : 0,
                            a = 0; a < t.length; a += 1)
                                for (s = [],
                                128 > (i = t.charCodeAt(a)) ? s.push(i) : 2048 > i ? (s.push(192 | i >>> 6),
                                s.push(128 | 63 & i)) : 55296 > i || 57344 <= i ? s.push(224 | i >>> 12, 128 | i >>> 6 & 63, 128 | 63 & i) : (a += 1,
                                i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(a)),
                                s.push(240 | i >>> 18, 128 | i >>> 12 & 63, 128 | i >>> 6 & 63, 128 | 63 & i)),
                                c = 0; c < s.length; c += 1) {
                                    for (u = (l = f + _) >>> 2; h.length <= u; )
                                        h.push(0);
                                    h[u] |= s[c] << 8 * (d + o * (l % 4)),
                                    f += 1
                                }
                        else
                            for (d = -1 === o ? 2 : 0,
                            p = "UTF16LE" === e && 1 !== o || "UTF16LE" !== e && 1 === o,
                            a = 0; a < t.length; a += 1) {
                                for (i = t.charCodeAt(a),
                                !0 === p && (i = (c = 255 & i) << 8 | i >>> 8),
                                u = (l = f + _) >>> 2; h.length <= u; )
                                    h.push(0);
                                h[u] |= i << 8 * (d + o * (l % 4)),
                                f += 2
                            }
                        return {
                            value: h,
                            binLen: 8 * f + r
                        }
                    }(t, r, e, n, o)
                }
                ;
            case "B64":
                return function(t, n, r) {
                    return function(t, n, r, o) {
                        var i, s, a, c, u, l, d = 0, p = n || [0], f = (r = r || 0) >>> 3, h = -1 === o ? 3 : 0, _ = t.indexOf("=");
                        if (-1 === t.search(/^[a-zA-Z0-9=+/]+$/))
                            throw new Error("Invalid character in base-64 string");
                        if (t = t.replace(/=/g, ""),
                        -1 !== _ && _ < t.length)
                            throw new Error("Invalid '=' found in base-64 string");
                        for (i = 0; i < t.length; i += 4) {
                            for (c = t.substr(i, 4),
                            a = 0,
                            s = 0; s < c.length; s += 1)
                                a |= e.indexOf(c.charAt(s)) << 18 - 6 * s;
                            for (s = 0; s < c.length - 1; s += 1) {
                                for (u = (l = d + f) >>> 2; p.length <= u; )
                                    p.push(0);
                                p[u] |= (a >>> 16 - 8 * s & 255) << 8 * (h + o * (l % 4)),
                                d += 1
                            }
                        }
                        return {
                            value: p,
                            binLen: 8 * d + r
                        }
                    }(t, n, r, o)
                }
                ;
            case "BYTES":
                return function(t, e, n) {
                    return function(t, e, n, r) {
                        var o, i, s, a, c = e || [0], u = (n = n || 0) >>> 3, l = -1 === r ? 3 : 0;
                        for (i = 0; i < t.length; i += 1)
                            o = t.charCodeAt(i),
                            s = (a = i + u) >>> 2,
                            c.length <= s && c.push(0),
                            c[s] |= o << 8 * (l + r * (a % 4));
                        return {
                            value: c,
                            binLen: 8 * t.length + n
                        }
                    }(t, e, n, o)
                }
                ;
            case "ARRAYBUFFER":
                try {
                    new ArrayBuffer(0)
                } catch (t) {
                    throw new Error("ARRAYBUFFER not supported by this environment")
                }
                return function(t, e, r) {
                    return function(t, e, r, o) {
                        return n(new Uint8Array(t), e, r, o)
                    }(t, e, r, o)
                }
                ;
            case "UINT8ARRAY":
                try {
                    new Uint8Array(0)
                } catch (t) {
                    throw new Error("UINT8ARRAY not supported by this environment")
                }
                return function(t, e, r) {
                    return n(t, e, r, o)
                }
                ;
            default:
                throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
            }
        }
        function o(t, n, r, o) {
            switch (t) {
            case "HEX":
                return function(t) {
                    return function(t, e, n, r) {
                        var o, i, s = "", a = e / 8, c = -1 === n ? 3 : 0;
                        for (o = 0; o < a; o += 1)
                            i = t[o >>> 2] >>> 8 * (c + n * (o % 4)),
                            s += "0123456789abcdef".charAt(i >>> 4 & 15) + "0123456789abcdef".charAt(15 & i);
                        return r.outputUpper ? s.toUpperCase() : s
                    }(t, n, r, o)
                }
                ;
            case "B64":
                return function(t) {
                    return function(t, n, r, o) {
                        var i, s, a, c, u, l = "", d = n / 8, p = -1 === r ? 3 : 0;
                        for (i = 0; i < d; i += 3)
                            for (c = i + 1 < d ? t[i + 1 >>> 2] : 0,
                            u = i + 2 < d ? t[i + 2 >>> 2] : 0,
                            a = (t[i >>> 2] >>> 8 * (p + r * (i % 4)) & 255) << 16 | (c >>> 8 * (p + r * ((i + 1) % 4)) & 255) << 8 | u >>> 8 * (p + r * ((i + 2) % 4)) & 255,
                            s = 0; s < 4; s += 1)
                                l += 8 * i + 6 * s <= n ? e.charAt(a >>> 6 * (3 - s) & 63) : o.b64Pad;
                        return l
                    }(t, n, r, o)
                }
                ;
            case "BYTES":
                return function(t) {
                    return function(t, e, n) {
                        var r, o, i = "", s = e / 8, a = -1 === n ? 3 : 0;
                        for (r = 0; r < s; r += 1)
                            o = t[r >>> 2] >>> 8 * (a + n * (r % 4)) & 255,
                            i += String.fromCharCode(o);
                        return i
                    }(t, n, r)
                }
                ;
            case "ARRAYBUFFER":
                try {
                    new ArrayBuffer(0)
                } catch (t) {
                    throw new Error("ARRAYBUFFER not supported by this environment")
                }
                return function(t) {
                    return function(t, e, n) {
                        var r, o = e / 8, i = new ArrayBuffer(o), s = new Uint8Array(i), a = -1 === n ? 3 : 0;
                        for (r = 0; r < o; r += 1)
                            s[r] = t[r >>> 2] >>> 8 * (a + n * (r % 4)) & 255;
                        return i
                    }(t, n, r)
                }
                ;
            case "UINT8ARRAY":
                try {
                    new Uint8Array(0)
                } catch (t) {
                    throw new Error("UINT8ARRAY not supported by this environment")
                }
                return function(t) {
                    return function(t, e, n) {
                        var r, o = e / 8, i = -1 === n ? 3 : 0, s = new Uint8Array(o);
                        for (r = 0; r < o; r += 1)
                            s[r] = t[r >>> 2] >>> 8 * (i + n * (r % 4)) & 255;
                        return s
                    }(t, n, r)
                }
                ;
            default:
                throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")
            }
        }
        function i(t) {
            var e = {
                outputUpper: !1,
                b64Pad: "=",
                outputLen: -1
            }
              , n = t || {}
              , r = "Output length must be a multiple of 8";
            if (e.outputUpper = n.outputUpper || !1,
            n.b64Pad && (e.b64Pad = n.b64Pad),
            n.outputLen) {
                if (n.outputLen % 8 != 0)
                    throw new Error(r);
                e.outputLen = n.outputLen
            } else if (n.shakeLen) {
                if (n.shakeLen % 8 != 0)
                    throw new Error(r);
                e.outputLen = n.shakeLen
            }
            if ("boolean" != typeof e.outputUpper)
                throw new Error("Invalid outputUpper formatting option");
            if ("string" != typeof e.b64Pad)
                throw new Error("Invalid b64Pad formatting option");
            return e
        }
        function s(t, e) {
            return t << e | t >>> 32 - e
        }
        function a(t, e, n) {
            return t ^ e ^ n
        }
        function c(t, e, n) {
            return t & e ^ t & n ^ e & n
        }
        function u(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (65535 & (t >>> 16) + (e >>> 16) + (n >>> 16)) << 16 | 65535 & n
        }
        function l(t, e, n, r, o) {
            var i = (65535 & t) + (65535 & e) + (65535 & n) + (65535 & r) + (65535 & o);
            return (65535 & (t >>> 16) + (e >>> 16) + (n >>> 16) + (r >>> 16) + (o >>> 16) + (i >>> 16)) << 16 | 65535 & i
        }
        function d(t) {
            return [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
        }
        function p(t, e) {
            var n, r, o, i, d, p, f, h, _ = [];
            for (n = e[0],
            r = e[1],
            o = e[2],
            i = e[3],
            d = e[4],
            f = 0; f < 80; f += 1)
                _[f] = f < 16 ? t[f] : s(_[f - 3] ^ _[f - 8] ^ _[f - 14] ^ _[f - 16], 1),
                p = f < 20 ? l(s(n, 5), (h = r) & o ^ ~h & i, d, 1518500249, _[f]) : f < 40 ? l(s(n, 5), a(r, o, i), d, 1859775393, _[f]) : f < 60 ? l(s(n, 5), c(r, o, i), d, 2400959708, _[f]) : l(s(n, 5), a(r, o, i), d, 3395469782, _[f]),
                d = i,
                i = o,
                o = s(r, 30),
                r = n,
                n = p;
            return e[0] = u(n, e[0]),
            e[1] = u(r, e[1]),
            e[2] = u(o, e[2]),
            e[3] = u(i, e[3]),
            e[4] = u(d, e[4]),
            e
        }
        function f(t, e, n, r) {
            for (var o, i = 15 + (e + 65 >>> 9 << 4), s = e + n; t.length <= i; )
                t.push(0);
            for (t[e >>> 5] |= 128 << 24 - e % 32,
            t[i] = 4294967295 & s,
            t[i - 1] = s / 4294967296 | 0,
            o = 0; o < t.length; o += 16)
                r = p(t.slice(o, o + 16), r);
            return r
        }
        return function(e) {
            function n(t, n, o) {
                var i = this;
                if ("SHA-1" !== t)
                    throw new Error("Chosen SHA variant is not supported");
                var s = o || {};
                return (i = e.call(this, t, n, o) || this).t = !0,
                i.i = i.o,
                i.u = -1,
                i.s = r(i.h, i.v, i.u),
                i.A = p,
                i.p = function(t) {
                    return t.slice()
                }
                ,
                i.l = d,
                i.R = f,
                i.U = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
                i.T = 512,
                i.m = 160,
                i.F = !1,
                s.hmacKey && i.B(function(t, e, n, o) {
                    var i = "hmacKey must include a value and format";
                    if (!e)
                        throw new Error(i);
                    if (void 0 === e.value || !e.format)
                        throw new Error(i);
                    return r(e.format, e.encoding || "UTF8", n)(e.value)
                }(0, s.hmacKey, i.u)),
                i
            }
            return function(e, n) {
                function r() {
                    this.constructor = e
                }
                t(e, n),
                e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }(n, e),
            n
        }(function() {
            function t(t, e, n) {
                var r = n || {};
                if (this.h = e,
                this.v = r.encoding || "UTF8",
                this.numRounds = r.numRounds || 1,
                isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds)
                    throw new Error("numRounds must a integer >= 1");
                this.g = t,
                this.Y = [],
                this.I = 0,
                this.C = !1,
                this.H = 0,
                this.L = !1,
                this.N = [],
                this.S = []
            }
            return t.prototype.update = function(t) {
                var e, n = 0, r = this.T >>> 5, o = this.s(t, this.Y, this.I), i = o.binLen, s = o.value, a = i >>> 5;
                for (e = 0; e < a; e += r)
                    n + this.T <= i && (this.U = this.A(s.slice(e, e + r), this.U),
                    n += this.T);
                this.H += n,
                this.Y = s.slice(n >>> 5),
                this.I = i % this.T,
                this.C = !0
            }
            ,
            t.prototype.getHash = function(t, e) {
                var n, r, s = this.m, a = i(e);
                if (this.F) {
                    if (-1 === a.outputLen)
                        throw new Error("Output length must be specified in options");
                    s = a.outputLen
                }
                var c = o(t, s, this.u, a);
                if (this.L && this.i)
                    return c(this.i(a));
                for (r = this.R(this.Y.slice(), this.I, this.H, this.p(this.U), s),
                n = 1; n < this.numRounds; n += 1)
                    this.F && s % 32 != 0 && (r[r.length - 1] &= 16777215 >>> 24 - s % 32),
                    r = this.R(r, s, 0, this.l(this.g), s);
                return c(r)
            }
            ,
            t.prototype.setHMACKey = function(t, e, n) {
                if (!this.t)
                    throw new Error("Variant does not support HMAC");
                if (this.C)
                    throw new Error("Cannot set MAC key after calling update");
                var o = r(e, (n || {}).encoding || "UTF8", this.u);
                this.B(o(t))
            }
            ,
            t.prototype.B = function(t) {
                var e, n = this.T >>> 3, r = n / 4 - 1;
                if (1 !== this.numRounds)
                    throw new Error("Cannot set numRounds with MAC");
                if (this.L)
                    throw new Error("MAC key already set");
                for (n < t.binLen / 8 && (t.value = this.R(t.value, t.binLen, 0, this.l(this.g), this.m)); t.value.length <= r; )
                    t.value.push(0);
                for (e = 0; e <= r; e += 1)
                    this.N[e] = 909522486 ^ t.value[e],
                    this.S[e] = 1549556828 ^ t.value[e];
                this.U = this.A(this.N, this.U),
                this.H = this.T,
                this.L = !0
            }
            ,
            t.prototype.getHMAC = function(t, e) {
                var n = i(e);
                return o(t, this.m, this.u, n)(this.o())
            }
            ,
            t.prototype.o = function() {
                var t;
                if (!this.L)
                    throw new Error("Cannot call getHMAC without first setting MAC key");
                var e = this.R(this.Y.slice(), this.I, this.H, this.p(this.U), this.m);
                return t = this.A(this.S, this.l(this.g)),
                this.R(e, this.m, this.T, t, this.m)
            }
            ,
            t
        }())
    }()
}
, , , function(t, e, n) {
    "use strict";
    var r = n(18)
      , o = n(36)
      , i = n(37)
      , s = n(19)
      , a = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._subscriber = new o,
            this._currentSubscription = null
        }
        return t.prototype.addListener = function(t, e, n) {
            return this._subscriber.addSubscription(t, new r(this._subscriber,e,n))
        }
        ,
        t.prototype.once = function(t, e, n) {
            var r = this;
            return this.addListener(t, (function() {
                r.removeCurrentListener(),
                e.apply(n, arguments)
            }
            ))
        }
        ,
        t.prototype.removeAllListeners = function(t) {
            this._subscriber.removeAllSubscriptions(t)
        }
        ,
        t.prototype.removeCurrentListener = function() {
            this._currentSubscription || s(!1),
            this._subscriber.removeSubscription(this._currentSubscription)
        }
        ,
        t.prototype.listeners = function(t) {
            var e = this._subscriber.getSubscriptionsForType(t);
            return e ? e.filter(i.thatReturnsTrue).map((function(t) {
                return t.listener
            }
            )) : []
        }
        ,
        t.prototype.emit = function(t) {
            var e = this._subscriber.getSubscriptionsForType(t);
            if (e) {
                for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = e[o];
                    i && (this._currentSubscription = i,
                    this.__emitToSubscription.apply(this, [i].concat(Array.prototype.slice.call(arguments))))
                }
                this._currentSubscription = null
            }
        }
        ,
        t.prototype.__emitToSubscription = function(t, e) {
            var n = Array.prototype.slice.call(arguments, 2);
            t.listener.apply(t.context, n)
        }
        ,
        t
    }();
    t.exports = a
}
, function(t, e, n) {
    "use strict";
    var r = function() {
        function t(e) {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.subscriber = e
        }
        return t.prototype.remove = function() {
            this.subscriber && (this.subscriber.removeSubscription(this),
            this.subscriber = null)
        }
        ,
        t
    }();
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(19)
      , o = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this._subscriptionsForType = {},
            this._currentSubscription = null
        }
        return t.prototype.addSubscription = function(t, e) {
            e.subscriber !== this && r(!1),
            this._subscriptionsForType[t] || (this._subscriptionsForType[t] = []);
            var n = this._subscriptionsForType[t].length;
            return this._subscriptionsForType[t].push(e),
            e.eventType = t,
            e.key = n,
            e
        }
        ,
        t.prototype.removeAllSubscriptions = function(t) {
            void 0 === t ? this._subscriptionsForType = {} : delete this._subscriptionsForType[t]
        }
        ,
        t.prototype.removeSubscription = function(t) {
            var e = t.eventType
              , n = t.key
              , r = this._subscriptionsForType[e];
            r && delete r[n]
        }
        ,
        t.prototype.getSubscriptionsForType = function(t) {
            return this._subscriptionsForType[t]
        }
        ,
        t
    }();
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return function() {
            return t
        }
    }
    var o = function() {};
    o.thatReturns = r,
    o.thatReturnsFalse = r(!1),
    o.thatReturnsTrue = r(!0),
    o.thatReturnsNull = r(null),
    o.thatReturnsThis = function() {
        return this
    }
    ,
    o.thatReturnsArgument = function(t) {
        return t
    }
    ,
    t.exports = o
}
, function(t, e) {
    var n, r, o = t.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
        if (n === setTimeout)
            return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var c, u = [], l = !1, d = -1;
    function p() {
        l && c && (l = !1,
        c.length ? u = c.concat(u) : d = -1,
        u.length && f())
    }
    function f() {
        if (!l) {
            var t = a(p);
            l = !0;
            for (var e = u.length; e; ) {
                for (c = u,
                u = []; ++d < e; )
                    c && c[d].run();
                d = -1,
                e = u.length
            }
            c = null,
            l = !1,
            function(t) {
                if (r === clearTimeout)
                    return clearTimeout(t);
                if ((r === s || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }
    function h(t, e) {
        this.fun = t,
        this.array = e
    }
    function _() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        u.push(new h(t,e)),
        1 !== u.length || l || a(f)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = _,
    o.addListener = _,
    o.once = _,
    o.off = _,
    o.removeListener = _,
    o.removeAllListeners = _,
    o.emit = _,
    o.prependListener = _,
    o.prependOnceListener = _,
    o.listeners = function(t) {
        return []
    }
    ,
    o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    var r = n(40)
      , o = n(41);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[t.i, o, ""]]);
    var i = {
        insert: "head",
        singleton: !1
    };
    r(o, i);
    t.exports = o.locals || {}
}
, function(t, e, n) {
    "use strict";
    var r, o = function() {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
        r
    }, i = function() {
        var t = {};
        return function(e) {
            if (void 0 === t[e]) {
                var n = document.querySelector(e);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                    try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                t[e] = n
            }
            return t[e]
        }
    }(), s = [];
    function a(t) {
        for (var e = -1, n = 0; n < s.length; n++)
            if (s[n].identifier === t) {
                e = n;
                break
            }
        return e
    }
    function c(t, e) {
        for (var n = {}, r = [], o = 0; o < t.length; o++) {
            var i = t[o]
              , c = e.base ? i[0] + e.base : i[0]
              , u = n[c] || 0
              , l = "".concat(c, " ").concat(u);
            n[c] = u + 1;
            var d = a(l)
              , p = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            -1 !== d ? (s[d].references++,
            s[d].updater(p)) : s.push({
                identifier: l,
                updater: y(p, e),
                references: 1
            }),
            r.push(l)
        }
        return r
    }
    function u(t) {
        var e = document.createElement("style")
          , r = t.attributes || {};
        if (void 0 === r.nonce) {
            var o = n.nc;
            o && (r.nonce = o)
        }
        if (Object.keys(r).forEach((function(t) {
            e.setAttribute(t, r[t])
        }
        )),
        "function" == typeof t.insert)
            t.insert(e);
        else {
            var s = i(t.insert || "head");
            if (!s)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            s.appendChild(e)
        }
        return e
    }
    var l, d = (l = [],
    function(t, e) {
        return l[t] = e,
        l.filter(Boolean).join("\n")
    }
    );
    function p(t, e, n, r) {
        var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (t.styleSheet)
            t.styleSheet.cssText = d(e, o);
        else {
            var i = document.createTextNode(o)
              , s = t.childNodes;
            s[e] && t.removeChild(s[e]),
            s.length ? t.insertBefore(i, s[e]) : t.appendChild(i)
        }
    }
    function f(t, e, n) {
        var r = n.css
          , o = n.media
          , i = n.sourceMap;
        if (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
        i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
        t.styleSheet)
            t.styleSheet.cssText = r;
        else {
            for (; t.firstChild; )
                t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(r))
        }
    }
    var h = null
      , _ = 0;
    function y(t, e) {
        var n, r, o;
        if (e.singleton) {
            var i = _++;
            n = h || (h = u(e)),
            r = p.bind(null, n, i, !1),
            o = p.bind(null, n, i, !0)
        } else
            n = u(e),
            r = f.bind(null, n, e),
            o = function() {
                !function(t) {
                    if (null === t.parentNode)
                        return !1;
                    t.parentNode.removeChild(t)
                }(n)
            }
            ;
        return r(t),
        function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                    return;
                r(t = e)
            } else
                o()
        }
    }
    t.exports = function(t, e) {
        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
        var n = c(t = t || [], e);
        return function(t) {
            if (t = t || [],
            "[object Array]" === Object.prototype.toString.call(t)) {
                for (var r = 0; r < n.length; r++) {
                    var o = a(n[r]);
                    s[o].references--
                }
                for (var i = c(t, e), u = 0; u < n.length; u++) {
                    var l = a(n[u]);
                    0 === s[l].references && (s[l].updater(),
                    s.splice(l, 1))
                }
                n = i
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(9)
      , o = n.n(r)()(!1);
    o.push([t.i, 'body,html{height:100%;margin:0;padding:0}#surfly-splash{transition:height 1s,opacity .3s,top 1s;opacity:0;width:100%;height:100%;background-color:#e54747;height:686px;left:0;position:fixed;top:0;z-index:1234568;perspective-origin:794.5px 343px;-webkit-perspective-origin:794.5px 343px;-webkit-text-emphasis-color:#fff;-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#fff;transform-origin:794.5px 343px;-webkit-transform-origin:794.5px 343px}#surfly-splash,#surfly-splash-msg{border-color:#fff;color:#fff;display:block;font-family:Lato,Arial,sans-serif;outline-color:#fff;-webkit-column-rule-color:#fff}#surfly-splash-msg{height:18px;margin-bottom:16px;margin-top:16px;text-align:center;perspective-origin:794.5px 9px;-webkit-perspective-origin:794.5px 9px;-webkit-text-emphasis-color:#fff;-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#fff;transform-origin:794.5px 9px;-webkit-transform-origin:794.5px 9px}@media(max-width:767px){#surfly-splash-msg{height:auto}}#surfly-open{color:#fff}@media(max-width:767px){#surfly-open{margin-top:10px;display:inline-block}}@media(min-width:768px){#surfly-open{margin-left:30px}}#surfly-cancel{margin-left:30px;color:#fff}#surfly-blocker{transition:opacity .3s;background-color:#fff;display:block;left:0;-moz-opacity:.5;-khtml-opacity:.5;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50);filter:alpha(opacity=50);opacity:.5;position:fixed;top:0;z-index:1234567;perspective-origin:794.5px 343px;-webkit-perspective-origin:794.5px 343px;transform-origin:794.5px 343px;-webkit-transform-origin:794.5px 343px}#surfly-blocker,.surfly-popup-iframe{width:100%;height:100%}.surfly-transparent-div{position:fixed;background:#000;width:100%;height:100%;opacity:.6;top:0;left:0;z-index:5}.surfly-popup-iframe-div{background-color:#fff;display:block;height:80%;left:0;position:fixed;top:0;z-index:123456;perspective-origin:794.5px 343px;transform-origin:794.5px 343px;width:80%;margin:auto;bottom:0;right:0}.surfly-popup-close{background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uNDY2LjQ3YS43NS43NSAwIDAxMS4wNiAwbDUuNDcgNS40NyA1LjQ3LTUuNDdhLjc1Ljc1IDAgMTExLjA2IDEuMDZMOC4wNTYgN2w1LjQ3IDUuNDdhLjc1Ljc1IDAgMTEtMS4wNiAxLjA2bC01LjQ3LTUuNDctNS40NyA1LjQ3YS43NS43NSAwIDAxLTEuMDYtMS4wNkw1LjkzNiA3IC40NjUgMS41M2EuNzUuNzUgMCAwMTAtMS4wNnoiIGZpbGw9IiNEOERBREEiLz48L3N2Zz4=");background-repeat:no-repeat;width:15px;height:15px;cursor:pointer;position:absolute;right:10px;top:10px;font-size:30px}.surfly-button{background-color:#c00;background-position:18px;color:#fff;cursor:pointer;font-family:Lato,Arial,sans-serif;height:20px;line-height:20px;outline-color:#e54747;text-align:center;font-size:14px;width:164px;-moz-column-rule-color:#e54747;column-rule-color:#e54747;padding:3px}.surfly-button svg{height:14px;width:14px;margin-right:5px}.surfly-button.surfly-button-visible{display:block}.surfly-button.surfly-button-hidden{display:none}.surfly-button.surfly-button-position-middleright{transform:rotate(270deg) translate(-72px,-72px)}.surfly-button.surfly-button-position-middleleft{transform:rotate(90deg) translate(72px,72px)}.surfly-modal{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center}.surfly-modal.fadein{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-name:fadein;animation-name:fadein}@-webkit-keyframes fadein{0%{background-color:transparent}to{background-color:rgba(0,0,0,.4)}}@keyframes fadein{0%{background-color:transparent}to{background-color:rgba(0,0,0,.4)}}.surfly-modal *{font-family:Lato,Arial,sans-serif;box-sizing:border-box}.surfly-modal .content{position:relative;width:100%;max-width:450px;background-color:#fff;border-radius:11px 11px 10px 10px;box-shadow:0 0 12px 2px rgba(0,0,0,.2)}.surfly-modal .content.easein{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:easein;animation-name:easein}@-webkit-keyframes easein{0%{top:25%;opacity:0}to{top:0;opacity:1}}@keyframes easein{0%{top:25%;opacity:0}to{top:0;opacity:1}}.surfly-modal .title{border-radius:10px 10px 0 0;padding:.3em 20px;font-size:125%}.surfly-modal .body{width:100%;padding:30px 20px 20px;display:inline-block}.surfly-modal p{margin-top:0;text-align:center;line-height:1.4}.surfly-modal .pin{margin:.6em 0;text-align:center;font-weight:700;font-size:200%}.surfly-modal .buttons{text-align:center;width:100%}.surfly-modal button{min-width:200px;font-size:15px;margin:5px;padding:10px;border:0;border-radius:30px;transition:color .3s,background .3s;-webkit-transition:color .3s,background .3s}.surfly-modal button.cancel{background-color:grey;color:#fff}.surfly-modal button.cancel:hover{background-color:#555;color:#fff}.surfly-modal button .spin{display:inline-block;height:1em;width:1em;border-width:2px;border-radius:100%;border-style:solid;-webkit-animation:rotation .6s linear infinite;animation:rotation .6s linear infinite}@-webkit-keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}', ""]),
    e.default = o
}
, function(t, e, n) {
    "use strict";
    var r = n(43)
      , o = Object.prototype.toString
      , i = Object.prototype.hasOwnProperty
      , s = function(t, e, n) {
        for (var r = 0, o = t.length; r < o; r++)
            i.call(t, r) && (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t))
    }
      , a = function(t, e, n) {
        for (var r = 0, o = t.length; r < o; r++)
            null == n ? e(t.charAt(r), r, t) : e.call(n, t.charAt(r), r, t)
    }
      , c = function(t, e, n) {
        for (var r in t)
            i.call(t, r) && (null == n ? e(t[r], r, t) : e.call(n, t[r], r, t))
    };
    t.exports = function(t, e, n) {
        if (!r(e))
            throw new TypeError("iterator must be a function");
        var i;
        arguments.length >= 3 && (i = n),
        "[object Array]" === o.call(t) ? s(t, e, i) : "string" == typeof t ? a(t, e, i) : c(t, e, i)
    }
}
, function(t, e, n) {
    "use strict";
    var r = Function.prototype.toString
      , o = /^\s*class\b/
      , i = function(t) {
        try {
            var e = r.call(t);
            return o.test(e)
        } catch (t) {
            return !1
        }
    }
      , s = Object.prototype.toString
      , a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    t.exports = function(t) {
        if (!t)
            return !1;
        if ("function" != typeof t && "object" != typeof t)
            return !1;
        if ("function" == typeof t && !t.prototype)
            return !0;
        if (a)
            return function(t) {
                try {
                    return !i(t) && (r.call(t),
                    !0)
                } catch (t) {
                    return !1
                }
            }(t);
        if (i(t))
            return !1;
        var e = s.call(t);
        return "[object Function]" === e || "[object GeneratorFunction]" === e
    }
}
, function(t, e, n) {
    "use strict";
    var r = function() {};
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(15);
    t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
}
, function(t, e, n) {
    "use strict";
    var r = "Function.prototype.bind called on incompatible "
      , o = Array.prototype.slice
      , i = Object.prototype.toString;
    t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== i.call(e))
            throw new TypeError(r + e);
        for (var n, s = o.call(arguments, 1), a = function() {
            if (this instanceof n) {
                var r = e.apply(this, s.concat(o.call(arguments)));
                return Object(r) === r ? r : this
            }
            return e.apply(t, s.concat(o.call(arguments)))
        }, c = Math.max(0, e.length - s.length), u = [], l = 0; l < c; l++)
            u.push("$" + l);
        if (n = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(a),
        e.prototype) {
            var d = function() {};
            d.prototype = e.prototype,
            n.prototype = new d,
            d.prototype = null
        }
        return n
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(21)
      , o = n(22)
      , i = n(24)
      , s = n(25)
      , a = n(55)
      , c = r(s());
    o(c, {
        getPolyfill: s,
        implementation: i,
        shim: a
    }),
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        var r = e.Symbol
          , o = n(49);
        t.exports = function() {
            return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && o())))
        }
    }
    ).call(this, n(12))
}
, function(t, e, n) {
    "use strict";
    t.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
            return !1;
        if ("symbol" == typeof Symbol.iterator)
            return !0;
        var t = {}
          , e = Symbol("test")
          , n = Object(e);
        if ("string" == typeof e)
            return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e))
            return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n))
            return !1;
        for (e in t[e] = 42,
        t)
            return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
            return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length)
            return !1;
        var r = Object.getOwnPropertySymbols(t);
        if (1 !== r.length || r[0] !== e)
            return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e))
            return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== o.value || !0 !== o.enumerable)
                return !1
        }
        return !0
    }
}
, function(t, e, n) {
    "use strict";
    var r = Array.prototype.slice
      , o = n(23)
      , i = Object.keys
      , s = i ? function(t) {
        return i(t)
    }
    : n(51)
      , a = Object.keys;
    s.shim = function() {
        Object.keys ? function() {
            var t = Object.keys(arguments);
            return t && t.length === arguments.length
        }(1, 2) || (Object.keys = function(t) {
            return o(t) ? a(r.call(t)) : a(t)
        }
        ) : Object.keys = s;
        return Object.keys || s
    }
    ,
    t.exports = s
}
, function(t, e, n) {
    "use strict";
    var r;
    if (!Object.keys) {
        var o = Object.prototype.hasOwnProperty
          , i = Object.prototype.toString
          , s = n(23)
          , a = Object.prototype.propertyIsEnumerable
          , c = !a.call({
            toString: null
        }, "toString")
          , u = a.call((function() {}
        ), "prototype")
          , l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , d = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        }
          , p = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }
          , f = function() {
            if ("undefined" == typeof window)
                return !1;
            for (var t in window)
                try {
                    if (!p["$" + t] && o.call(window, t) && null !== window[t] && "object" == typeof window[t])
                        try {
                            d(window[t])
                        } catch (t) {
                            return !0
                        }
                } catch (t) {
                    return !0
                }
            return !1
        }();
        r = function(t) {
            var e = null !== t && "object" == typeof t
              , n = "[object Function]" === i.call(t)
              , r = s(t)
              , a = e && "[object String]" === i.call(t)
              , p = [];
            if (!e && !n && !r)
                throw new TypeError("Object.keys called on a non-object");
            var h = u && n;
            if (a && t.length > 0 && !o.call(t, 0))
                for (var _ = 0; _ < t.length; ++_)
                    p.push(String(_));
            if (r && t.length > 0)
                for (var y = 0; y < t.length; ++y)
                    p.push(String(y));
            else
                for (var g in t)
                    h && "prototype" === g || !o.call(t, g) || p.push(String(g));
            if (c)
                for (var m = function(t) {
                    if ("undefined" == typeof window || !f)
                        return d(t);
                    try {
                        return d(t)
                    } catch (t) {
                        return !1
                    }
                }(t), v = 0; v < l.length; ++v)
                    m && "constructor" === l[v] || !o.call(t, l[v]) || p.push(l[v]);
            return p
        }
    }
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(13)("%TypeError%");
    t.exports = function(t, e) {
        if (null == t)
            throw new r(e || "Cannot call method on " + t);
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(13)
      , o = r("%String%")
      , i = r("%TypeError%");
    t.exports = function(t) {
        if ("symbol" == typeof t)
            throw new i("Cannot convert a Symbol value to a string");
        return o(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(13)
      , o = n(21)
      , i = o(r("String.prototype.indexOf"));
    t.exports = function(t, e) {
        var n = r(t, !!e);
        return "function" == typeof n && i(t, ".prototype.") ? o(n) : n
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(22)
      , o = n(25);
    t.exports = function() {
        var t = o();
        return r(String.prototype, {
            trim: t
        }, {
            trim: function() {
                return String.prototype.trim !== t
            }
        }),
        t
    }
}
, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    n.r(r),
    n.d(r, "FunctionToString", (function() {
        return a
    }
    )),
    n.d(r, "InboundFilters", (function() {
        return L
    }
    ));
    var o, i = {};
    n.r(i),
    n.d(i, "GlobalHandlers", (function() {
        return Kt
    }
    )),
    n.d(i, "TryCatch", (function() {
        return Xt
    }
    )),
    n.d(i, "Breadcrumbs", (function() {
        return $t
    }
    )),
    n.d(i, "LinkedErrors", (function() {
        return Vt
    }
    )),
    n.d(i, "UserAgent", (function() {
        return Qt
    }
    ));
    var s, a = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            o = Function.prototype.toString,
            Function.prototype.toString = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = this.__sentry_original__ || this;
                return o.apply(n, t)
            }
        }
        ,
        t.id = "FunctionToString",
        t
    }(), c = n(0), u = n(2), l = n(60);
    !function(t) {
        t.PENDING = "PENDING",
        t.RESOLVED = "RESOLVED",
        t.REJECTED = "REJECTED"
    }(s || (s = {}));
    var d = function() {
        function t(t) {
            var e = this;
            this._state = s.PENDING,
            this._handlers = [],
            this._resolve = function(t) {
                e._setResult(s.RESOLVED, t)
            }
            ,
            this._reject = function(t) {
                e._setResult(s.REJECTED, t)
            }
            ,
            this._setResult = function(t, n) {
                e._state === s.PENDING && (Object(u.m)(n) ? n.then(e._resolve, e._reject) : (e._state = t,
                e._value = n,
                e._executeHandlers()))
            }
            ,
            this._attachHandler = function(t) {
                e._handlers = e._handlers.concat(t),
                e._executeHandlers()
            }
            ,
            this._executeHandlers = function() {
                if (e._state !== s.PENDING) {
                    var t = e._handlers.slice();
                    e._handlers = [],
                    t.forEach((function(t) {
                        t.done || (e._state === s.RESOLVED && t.onfulfilled && t.onfulfilled(e._value),
                        e._state === s.REJECTED && t.onrejected && t.onrejected(e._value),
                        t.done = !0)
                    }
                    ))
                }
            }
            ;
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        return t.resolve = function(e) {
            return new t((function(t) {
                t(e)
            }
            ))
        }
        ,
        t.reject = function(e) {
            return new t((function(t, n) {
                n(e)
            }
            ))
        }
        ,
        t.all = function(e) {
            return new t((function(n, r) {
                if (Array.isArray(e))
                    if (0 !== e.length) {
                        var o = e.length
                          , i = [];
                        e.forEach((function(e, s) {
                            t.resolve(e).then((function(t) {
                                i[s] = t,
                                0 === (o -= 1) && n(i)
                            }
                            )).then(null, r)
                        }
                        ))
                    } else
                        n([]);
                else
                    r(new TypeError("Promise.all requires an array as input."))
            }
            ))
        }
        ,
        t.prototype.then = function(e, n) {
            var r = this;
            return new t((function(t, o) {
                r._attachHandler({
                    done: !1,
                    onfulfilled: function(n) {
                        if (e)
                            try {
                                return void t(e(n))
                            } catch (t) {
                                return void o(t)
                            }
                        else
                            t(n)
                    },
                    onrejected: function(e) {
                        if (n)
                            try {
                                return void t(n(e))
                            } catch (t) {
                                return void o(t)
                            }
                        else
                            o(e)
                    }
                })
            }
            ))
        }
        ,
        t.prototype.catch = function(t) {
            return this.then((function(t) {
                return t
            }
            ), t)
        }
        ,
        t.prototype.finally = function(e) {
            var n = this;
            return new t((function(t, r) {
                var o, i;
                return n.then((function(t) {
                    i = !1,
                    o = t,
                    e && e()
                }
                ), (function(t) {
                    i = !0,
                    o = t,
                    e && e()
                }
                )).then((function() {
                    i ? r(o) : t(o)
                }
                ))
            }
            ))
        }
        ,
        t.prototype.toString = function() {
            return "[object SyncPromise]"
        }
        ,
        t
    }()
      , p = n(4)
      , f = function() {
        function t() {
            this._notifyingListeners = !1,
            this._scopeListeners = [],
            this._eventProcessors = [],
            this._breadcrumbs = [],
            this._user = {},
            this._tags = {},
            this._extra = {},
            this._contexts = {}
        }
        return t.clone = function(e) {
            var n = new t;
            return e && (n._breadcrumbs = Object(c.d)(e._breadcrumbs),
            n._tags = Object(c.a)({}, e._tags),
            n._extra = Object(c.a)({}, e._extra),
            n._contexts = Object(c.a)({}, e._contexts),
            n._user = e._user,
            n._level = e._level,
            n._span = e._span,
            n._session = e._session,
            n._transactionName = e._transactionName,
            n._fingerprint = e._fingerprint,
            n._eventProcessors = Object(c.d)(e._eventProcessors)),
            n
        }
        ,
        t.prototype.addScopeListener = function(t) {
            this._scopeListeners.push(t)
        }
        ,
        t.prototype.addEventProcessor = function(t) {
            return this._eventProcessors.push(t),
            this
        }
        ,
        t.prototype.setUser = function(t) {
            return this._user = t || {},
            this._session && this._session.update({
                user: t
            }),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.getUser = function() {
            return this._user
        }
        ,
        t.prototype.setTags = function(t) {
            return this._tags = Object(c.a)(Object(c.a)({}, this._tags), t),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setTag = function(t, e) {
            var n;
            return this._tags = Object(c.a)(Object(c.a)({}, this._tags), ((n = {})[t] = e,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setExtras = function(t) {
            return this._extra = Object(c.a)(Object(c.a)({}, this._extra), t),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setExtra = function(t, e) {
            var n;
            return this._extra = Object(c.a)(Object(c.a)({}, this._extra), ((n = {})[t] = e,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setFingerprint = function(t) {
            return this._fingerprint = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setLevel = function(t) {
            return this._level = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setTransactionName = function(t) {
            return this._transactionName = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setTransaction = function(t) {
            return this.setTransactionName(t)
        }
        ,
        t.prototype.setContext = function(t, e) {
            var n;
            return null === e ? delete this._contexts[t] : this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), ((n = {})[t] = e,
            n)),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.setSpan = function(t) {
            return this._span = t,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.getSpan = function() {
            return this._span
        }
        ,
        t.prototype.getTransaction = function() {
            var t, e, n, r, o = this.getSpan();
            return (null === (t = o) || void 0 === t ? void 0 : t.transaction) ? null === (e = o) || void 0 === e ? void 0 : e.transaction : (null === (r = null === (n = o) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? o.spanRecorder.spans[0] : void 0
        }
        ,
        t.prototype.setSession = function(t) {
            return t ? this._session = t : delete this._session,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.getSession = function() {
            return this._session
        }
        ,
        t.prototype.update = function(e) {
            if (!e)
                return this;
            if ("function" == typeof e) {
                var n = e(this);
                return n instanceof t ? n : this
            }
            return e instanceof t ? (this._tags = Object(c.a)(Object(c.a)({}, this._tags), e._tags),
            this._extra = Object(c.a)(Object(c.a)({}, this._extra), e._extra),
            this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), e._contexts),
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint)) : Object(u.h)(e) && (e = e,
            this._tags = Object(c.a)(Object(c.a)({}, this._tags), e.tags),
            this._extra = Object(c.a)(Object(c.a)({}, this._extra), e.extra),
            this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), e.contexts),
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint && (this._fingerprint = e.fingerprint)),
            this
        }
        ,
        t.prototype.clear = function() {
            return this._breadcrumbs = [],
            this._tags = {},
            this._extra = {},
            this._user = {},
            this._contexts = {},
            this._level = void 0,
            this._transactionName = void 0,
            this._fingerprint = void 0,
            this._span = void 0,
            this._session = void 0,
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.addBreadcrumb = function(t, e) {
            var n = Object(c.a)({
                timestamp: Object(l.a)()
            }, t);
            return this._breadcrumbs = void 0 !== e && e >= 0 ? Object(c.d)(this._breadcrumbs, [n]).slice(-e) : Object(c.d)(this._breadcrumbs, [n]),
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.clearBreadcrumbs = function() {
            return this._breadcrumbs = [],
            this._notifyScopeListeners(),
            this
        }
        ,
        t.prototype.applyToEvent = function(t, e) {
            var n;
            if (this._extra && Object.keys(this._extra).length && (t.extra = Object(c.a)(Object(c.a)({}, this._extra), t.extra)),
            this._tags && Object.keys(this._tags).length && (t.tags = Object(c.a)(Object(c.a)({}, this._tags), t.tags)),
            this._user && Object.keys(this._user).length && (t.user = Object(c.a)(Object(c.a)({}, this._user), t.user)),
            this._contexts && Object.keys(this._contexts).length && (t.contexts = Object(c.a)(Object(c.a)({}, this._contexts), t.contexts)),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span) {
                t.contexts = Object(c.a)({
                    trace: this._span.getTraceContext()
                }, t.contexts);
                var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                r && (t.tags = Object(c.a)({
                    transaction: r
                }, t.tags))
            }
            return this._applyFingerprint(t),
            t.breadcrumbs = Object(c.d)(t.breadcrumbs || [], this._breadcrumbs),
            t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
            this._notifyEventProcessors(Object(c.d)(h(), this._eventProcessors), t, e)
        }
        ,
        t.prototype._notifyEventProcessors = function(t, e, n, r) {
            var o = this;
            return void 0 === r && (r = 0),
            new d((function(i, s) {
                var a = t[r];
                if (null === e || "function" != typeof a)
                    i(e);
                else {
                    var l = a(Object(c.a)({}, e), n);
                    Object(u.m)(l) ? l.then((function(e) {
                        return o._notifyEventProcessors(t, e, n, r + 1).then(i)
                    }
                    )).then(null, s) : o._notifyEventProcessors(t, l, n, r + 1).then(i).then(null, s)
                }
            }
            ))
        }
        ,
        t.prototype._notifyScopeListeners = function() {
            var t = this;
            this._notifyingListeners || (this._notifyingListeners = !0,
            this._scopeListeners.forEach((function(e) {
                e(t)
            }
            )),
            this._notifyingListeners = !1)
        }
        ,
        t.prototype._applyFingerprint = function(t) {
            t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
            this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
        ,
        t
    }();
    function h() {
        var t = Object(p.e)();
        return t.__SENTRY__ = t.__SENTRY__ || {},
        t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [],
        t.__SENTRY__.globalEventProcessors
    }
    function _(t) {
        h().push(t)
    }
    var y = Object(p.e)()
      , g = "Sentry Logger "
      , m = function() {
        function t() {
            this._enabled = !1
        }
        return t.prototype.disable = function() {
            this._enabled = !1
        }
        ,
        t.prototype.enable = function() {
            this._enabled = !0
        }
        ,
        t.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this._enabled && Object(p.c)((function() {
                y.console.log(g + "[Log]: " + t.join(" "))
            }
            ))
        }
        ,
        t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this._enabled && Object(p.c)((function() {
                y.console.warn(g + "[Warn]: " + t.join(" "))
            }
            ))
        }
        ,
        t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this._enabled && Object(p.c)((function() {
                y.console.error(g + "[Error]: " + t.join(" "))
            }
            ))
        }
        ,
        t
    }();
    y.__SENTRY__ = y.__SENTRY__ || {};
    var v, b = y.__SENTRY__.logger || (y.__SENTRY__.logger = new m), w = n(10);
    !function(t) {
        t.Ok = "ok",
        t.Exited = "exited",
        t.Crashed = "crashed",
        t.Abnormal = "abnormal"
    }(v || (v = {}));
    var S = n(5)
      , O = function() {
        function t(t) {
            this.errors = 0,
            this.sid = Object(p.i)(),
            this.timestamp = Date.now(),
            this.started = Date.now(),
            this.duration = 0,
            this.status = v.Ok,
            t && this.update(t)
        }
        return t.prototype.update = function(t) {
            void 0 === t && (t = {}),
            t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address),
            t.did || (this.did = t.user.id || t.user.email || t.user.username)),
            this.timestamp = t.timestamp || Date.now(),
            t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(p.i)()),
            t.did && (this.did = "" + t.did),
            "number" == typeof t.started && (this.started = t.started),
            "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started,
            t.release && (this.release = t.release),
            t.environment && (this.environment = t.environment),
            t.ipAddress && (this.ipAddress = t.ipAddress),
            t.userAgent && (this.userAgent = t.userAgent),
            "number" == typeof t.errors && (this.errors = t.errors),
            t.status && (this.status = t.status)
        }
        ,
        t.prototype.close = function(t) {
            t ? this.update({
                status: t
            }) : this.status === v.Ok ? this.update({
                status: v.Exited
            }) : this.update()
        }
        ,
        t.prototype.toJSON = function() {
            return Object(S.a)({
                sid: "" + this.sid,
                init: !0,
                started: new Date(this.started).toISOString(),
                timestamp: new Date(this.timestamp).toISOString(),
                status: this.status,
                errors: this.errors,
                did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                duration: this.duration,
                attrs: Object(S.a)({
                    release: this.release,
                    environment: this.environment,
                    ip_address: this.ipAddress,
                    user_agent: this.userAgent
                })
            })
        }
        ,
        t
    }()
      , E = function() {
        function t(t, e, n) {
            void 0 === e && (e = new f),
            void 0 === n && (n = 3),
            this._version = n,
            this._stack = [{}],
            this.getStackTop().scope = e,
            this.bindClient(t)
        }
        return t.prototype.isOlderThan = function(t) {
            return this._version < t
        }
        ,
        t.prototype.bindClient = function(t) {
            this.getStackTop().client = t,
            t && t.setupIntegrations && t.setupIntegrations()
        }
        ,
        t.prototype.pushScope = function() {
            var t = f.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }),
            t
        }
        ,
        t.prototype.popScope = function() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        ,
        t.prototype.withScope = function(t) {
            var e = this.pushScope();
            try {
                t(e)
            } finally {
                this.popScope()
            }
        }
        ,
        t.prototype.getClient = function() {
            return this.getStackTop().client
        }
        ,
        t.prototype.getScope = function() {
            return this.getStackTop().scope
        }
        ,
        t.prototype.getStack = function() {
            return this._stack
        }
        ,
        t.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }
        ,
        t.prototype.captureException = function(t, e) {
            var n = this._lastEventId = Object(p.i)()
              , r = e;
            if (!e) {
                var o = void 0;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    o = t
                }
                r = {
                    originalException: t,
                    syntheticException: o
                }
            }
            return this._invokeClient("captureException", t, Object(c.a)(Object(c.a)({}, r), {
                event_id: n
            })),
            n
        }
        ,
        t.prototype.captureMessage = function(t, e, n) {
            var r = this._lastEventId = Object(p.i)()
              , o = n;
            if (!n) {
                var i = void 0;
                try {
                    throw new Error(t)
                } catch (t) {
                    i = t
                }
                o = {
                    originalException: t,
                    syntheticException: i
                }
            }
            return this._invokeClient("captureMessage", t, e, Object(c.a)(Object(c.a)({}, o), {
                event_id: r
            })),
            r
        }
        ,
        t.prototype.captureEvent = function(t, e) {
            var n = this._lastEventId = Object(p.i)();
            return this._invokeClient("captureEvent", t, Object(c.a)(Object(c.a)({}, e), {
                event_id: n
            })),
            n
        }
        ,
        t.prototype.lastEventId = function() {
            return this._lastEventId
        }
        ,
        t.prototype.addBreadcrumb = function(t, e) {
            var n = this.getStackTop()
              , r = n.scope
              , o = n.client;
            if (r && o) {
                var i = o.getOptions && o.getOptions() || {}
                  , s = i.beforeBreadcrumb
                  , a = void 0 === s ? null : s
                  , u = i.maxBreadcrumbs
                  , d = void 0 === u ? 100 : u;
                if (!(d <= 0)) {
                    var f = Object(l.a)()
                      , h = Object(c.a)({
                        timestamp: f
                    }, t)
                      , _ = a ? Object(p.c)((function() {
                        return a(h, e)
                    }
                    )) : h;
                    null !== _ && r.addBreadcrumb(_, Math.min(d, 100))
                }
            }
        }
        ,
        t.prototype.setUser = function(t) {
            var e = this.getScope();
            e && e.setUser(t)
        }
        ,
        t.prototype.setTags = function(t) {
            var e = this.getScope();
            e && e.setTags(t)
        }
        ,
        t.prototype.setExtras = function(t) {
            var e = this.getScope();
            e && e.setExtras(t)
        }
        ,
        t.prototype.setTag = function(t, e) {
            var n = this.getScope();
            n && n.setTag(t, e)
        }
        ,
        t.prototype.setExtra = function(t, e) {
            var n = this.getScope();
            n && n.setExtra(t, e)
        }
        ,
        t.prototype.setContext = function(t, e) {
            var n = this.getScope();
            n && n.setContext(t, e)
        }
        ,
        t.prototype.configureScope = function(t) {
            var e = this.getStackTop()
              , n = e.scope
              , r = e.client;
            n && r && t(n)
        }
        ,
        t.prototype.run = function(t) {
            var e = k(this);
            try {
                t(this)
            } finally {
                k(e)
            }
        }
        ,
        t.prototype.getIntegration = function(t) {
            var e = this.getClient();
            if (!e)
                return null;
            try {
                return e.getIntegration(t)
            } catch (e) {
                return b.warn("Cannot retrieve integration " + t.id + " from the current Hub"),
                null
            }
        }
        ,
        t.prototype.startSpan = function(t) {
            return this._callExtensionMethod("startSpan", t)
        }
        ,
        t.prototype.startTransaction = function(t, e) {
            return this._callExtensionMethod("startTransaction", t, e)
        }
        ,
        t.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }
        ,
        t.prototype.startSession = function(t) {
            this.endSession();
            var e = this.getStackTop()
              , n = e.scope
              , r = e.client
              , o = r && r.getOptions() || {}
              , i = o.release
              , s = o.environment
              , a = new O(Object(c.a)(Object(c.a)({
                release: i,
                environment: s
            }, n && {
                user: n.getUser()
            }), t));
            return n && n.setSession(a),
            a
        }
        ,
        t.prototype.endSession = function() {
            var t = this.getStackTop()
              , e = t.scope
              , n = t.client;
            if (e) {
                var r = e.getSession && e.getSession();
                r && (r.close(),
                n && n.captureSession && n.captureSession(r),
                e.setSession())
            }
        }
        ,
        t.prototype._invokeClient = function(t) {
            for (var e, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            var o = this.getStackTop()
              , i = o.scope
              , s = o.client;
            s && s[t] && (e = s)[t].apply(e, Object(c.d)(n, [i]))
        }
        ,
        t.prototype._callExtensionMethod = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            var r = x()
              , o = r.__SENTRY__;
            if (o && o.extensions && "function" == typeof o.extensions[t])
                return o.extensions[t].apply(this, e);
            b.warn("Extension method " + t + " couldn't be found, doing nothing.")
        }
        ,
        t
    }();
    function x() {
        var t = Object(p.e)();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        t
    }
    function k(t) {
        var e = x()
          , n = R(e);
        return I(e, t),
        n
    }
    function j() {
        var t = x();
        return T(t) && !R(t).isOlderThan(3) || I(t, new E),
        Object(w.b)() ? function(t) {
            try {
                var e = (r = x().__SENTRY__) && r.extensions && r.extensions.domain && r.extensions.domain.active;
                if (!e)
                    return R(t);
                if (!T(e) || R(e).isOlderThan(3)) {
                    var n = R(t).getStackTop();
                    I(e, new E(n.client,f.clone(n.scope)))
                }
                return R(e)
            } catch (e) {
                return R(t)
            }
            var r
        }(t) : R(t)
    }
    function T(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }
    function R(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {},
        t.__SENTRY__.hub = new E),
        t.__SENTRY__.hub
    }
    function I(t, e) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {},
        t.__SENTRY__.hub = e,
        !0)
    }
    var A = n(7)
      , P = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
      , L = function() {
        function t(e) {
            void 0 === e && (e = {}),
            this._options = e,
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            _((function(e) {
                var n = j();
                if (!n)
                    return e;
                var r = n.getIntegration(t);
                if (r) {
                    var o = n.getClient()
                      , i = o ? o.getOptions() : {}
                      , s = r._mergeOptions(i);
                    if (r._shouldDropEvent(e, s))
                        return null
                }
                return e
            }
            ))
        }
        ,
        t.prototype._shouldDropEvent = function(t, e) {
            return this._isSentryError(t, e) ? (b.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(p.d)(t)),
            !0) : this._isIgnoredError(t, e) ? (b.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(p.d)(t)),
            !0) : this._isDeniedUrl(t, e) ? (b.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(p.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
            !0) : !this._isAllowedUrl(t, e) && (b.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(p.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
            !0)
        }
        ,
        t.prototype._isSentryError = function(t, e) {
            if (!e.ignoreInternal)
                return !1;
            try {
                return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
            } catch (t) {
                return !1
            }
        }
        ,
        t.prototype._isIgnoredError = function(t, e) {
            return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function(t) {
                return e.ignoreErrors.some((function(e) {
                    return Object(A.a)(t, e)
                }
                ))
            }
            ))
        }
        ,
        t.prototype._isDeniedUrl = function(t, e) {
            if (!e.denyUrls || !e.denyUrls.length)
                return !1;
            var n = this._getEventFilterUrl(t);
            return !!n && e.denyUrls.some((function(t) {
                return Object(A.a)(n, t)
            }
            ))
        }
        ,
        t.prototype._isAllowedUrl = function(t, e) {
            if (!e.allowUrls || !e.allowUrls.length)
                return !0;
            var n = this._getEventFilterUrl(t);
            return !n || e.allowUrls.some((function(t) {
                return Object(A.a)(n, t)
            }
            ))
        }
        ,
        t.prototype._mergeOptions = function(t) {
            return void 0 === t && (t = {}),
            {
                allowUrls: Object(c.d)(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                denyUrls: Object(c.d)(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                ignoreErrors: Object(c.d)(this._options.ignoreErrors || [], t.ignoreErrors || [], P),
                ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
            }
        }
        ,
        t.prototype._getPossibleEventMessages = function(t) {
            if (t.message)
                return [t.message];
            if (t.exception)
                try {
                    var e = t.exception.values && t.exception.values[0] || {}
                      , n = e.type
                      , r = void 0 === n ? "" : n
                      , o = e.value
                      , i = void 0 === o ? "" : o;
                    return ["" + i, r + ": " + i]
                } catch (e) {
                    return b.error("Cannot extract message for event " + Object(p.d)(t)),
                    []
                }
            return []
        }
        ,
        t.prototype._getEventFilterUrl = function(t) {
            try {
                if (t.stacktrace) {
                    var e = t.stacktrace.frames;
                    return e && e[e.length - 1].filename || null
                }
                if (t.exception) {
                    var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                    return n && n[n.length - 1].filename || null
                }
                return null
            } catch (e) {
                return b.error("Cannot extract url for event " + Object(p.d)(t)),
                null
            }
        }
        ,
        t.id = "InboundFilters",
        t
    }();
    var C = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(t, e) {
        return t.__proto__ = e,
        t
    }
    : function(t, e) {
        for (var n in e)
            t.hasOwnProperty(n) || (t[n] = e[n]);
        return t
    }
    );
    var N = function(t) {
        function e(e) {
            var n = this.constructor
              , r = t.call(this, e) || this;
            return r.message = e,
            r.name = n.prototype.constructor.name,
            C(r, n.prototype),
            r
        }
        return Object(c.b)(e, t),
        e
    }(Error)
      , U = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
      , W = function() {
        function t(t) {
            "string" == typeof t ? this._fromString(t) : this._fromComponents(t),
            this._validate()
        }
        return t.prototype.toString = function(t) {
            void 0 === t && (t = !1);
            var e = this
              , n = e.host
              , r = e.path
              , o = e.pass
              , i = e.port
              , s = e.projectId;
            return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + s
        }
        ,
        t.prototype._fromString = function(t) {
            var e = U.exec(t);
            if (!e)
                throw new N("Invalid Dsn");
            var n = Object(c.c)(e.slice(1), 6)
              , r = n[0]
              , o = n[1]
              , i = n[2]
              , s = void 0 === i ? "" : i
              , a = n[3]
              , u = n[4]
              , l = void 0 === u ? "" : u
              , d = ""
              , p = n[5]
              , f = p.split("/");
            if (f.length > 1 && (d = f.slice(0, -1).join("/"),
            p = f.pop()),
            p) {
                var h = p.match(/^\d+/);
                h && (p = h[0])
            }
            this._fromComponents({
                host: a,
                pass: s,
                path: d,
                projectId: p,
                port: l,
                protocol: r,
                user: o
            })
        }
        ,
        t.prototype._fromComponents = function(t) {
            this.protocol = t.protocol,
            this.user = t.user,
            this.pass = t.pass || "",
            this.host = t.host,
            this.port = t.port || "",
            this.path = t.path || "",
            this.projectId = t.projectId
        }
        ,
        t.prototype._validate = function() {
            var t = this;
            if (["protocol", "user", "host", "projectId"].forEach((function(e) {
                if (!t[e])
                    throw new N("Invalid Dsn: " + e + " missing")
            }
            )),
            !this.projectId.match(/^\d+$/))
                throw new N("Invalid Dsn: Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol)
                throw new N("Invalid Dsn: Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10)))
                throw new N("Invalid Dsn: Invalid port " + this.port)
        }
        ,
        t
    }()
      , F = [];
    function M(t) {
        var e = {};
        return function(t) {
            var e = t.defaultIntegrations && Object(c.d)(t.defaultIntegrations) || []
              , n = t.integrations
              , r = [];
            if (Array.isArray(n)) {
                var o = n.map((function(t) {
                    return t.name
                }
                ))
                  , i = [];
                e.forEach((function(t) {
                    -1 === o.indexOf(t.name) && -1 === i.indexOf(t.name) && (r.push(t),
                    i.push(t.name))
                }
                )),
                n.forEach((function(t) {
                    -1 === i.indexOf(t.name) && (r.push(t),
                    i.push(t.name))
                }
                ))
            } else
                "function" == typeof n ? (r = n(e),
                r = Array.isArray(r) ? r : [r]) : r = Object(c.d)(e);
            var s = r.map((function(t) {
                return t.name
            }
            ));
            return -1 !== s.indexOf("Debug") && r.push.apply(r, Object(c.d)(r.splice(s.indexOf("Debug"), 1))),
            r
        }(t).forEach((function(t) {
            e[t.name] = t,
            function(t) {
                -1 === F.indexOf(t.name) && (t.setupOnce(_, j),
                F.push(t.name),
                b.log("Integration installed: " + t.name))
            }(t)
        }
        )),
        e
    }
    var D, Y = function() {
        function t(t, e) {
            this._integrations = {},
            this._processing = 0,
            this._backend = new t(e),
            this._options = e,
            e.dsn && (this._dsn = new W(e.dsn))
        }
        return t.prototype.captureException = function(t, e, n) {
            var r = this
              , o = e && e.event_id;
            return this._process(this._getBackend().eventFromException(t, e).then((function(t) {
                return r._captureEvent(t, e, n)
            }
            )).then((function(t) {
                o = t
            }
            ))),
            o
        }
        ,
        t.prototype.captureMessage = function(t, e, n, r) {
            var o = this
              , i = n && n.event_id
              , s = Object(u.i)(t) ? this._getBackend().eventFromMessage("" + t, e, n) : this._getBackend().eventFromException(t, n);
            return this._process(s.then((function(t) {
                return o._captureEvent(t, n, r)
            }
            )).then((function(t) {
                i = t
            }
            ))),
            i
        }
        ,
        t.prototype.captureEvent = function(t, e, n) {
            var r = e && e.event_id;
            return this._process(this._captureEvent(t, e, n).then((function(t) {
                r = t
            }
            ))),
            r
        }
        ,
        t.prototype.captureSession = function(t) {
            t.release ? this._sendSession(t) : b.warn("Discarded session because of missing release")
        }
        ,
        t.prototype.getDsn = function() {
            return this._dsn
        }
        ,
        t.prototype.getOptions = function() {
            return this._options
        }
        ,
        t.prototype.flush = function(t) {
            var e = this;
            return this._isClientProcessing(t).then((function(n) {
                return e._getBackend().getTransport().close(t).then((function(t) {
                    return n && t
                }
                ))
            }
            ))
        }
        ,
        t.prototype.close = function(t) {
            var e = this;
            return this.flush(t).then((function(t) {
                return e.getOptions().enabled = !1,
                t
            }
            ))
        }
        ,
        t.prototype.setupIntegrations = function() {
            this._isEnabled() && (this._integrations = M(this._options))
        }
        ,
        t.prototype.getIntegration = function(t) {
            try {
                return this._integrations[t.id] || null
            } catch (e) {
                return b.warn("Cannot retrieve integration " + t.id + " from the current Client"),
                null
            }
        }
        ,
        t.prototype._updateSessionFromEvent = function(t, e) {
            var n, r, o, i = !1, s = !1, a = e.exception && e.exception.values;
            if (a) {
                s = !0;
                try {
                    for (var u = Object(c.e)(a), l = u.next(); !l.done; l = u.next()) {
                        var d = l.value.mechanism;
                        if (d && !1 === d.handled) {
                            i = !0;
                            break
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (r = u.return) && r.call(u)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
            }
            var p = e.user;
            if (!t.userAgent) {
                var f = e.request ? e.request.headers : {};
                for (var h in f)
                    if ("user-agent" === h.toLowerCase()) {
                        o = f[h];
                        break
                    }
            }
            t.update(Object(c.a)(Object(c.a)({}, i && {
                status: v.Crashed
            }), {
                user: p,
                userAgent: o,
                errors: t.errors + Number(s || i)
            }))
        }
        ,
        t.prototype._sendSession = function(t) {
            this._getBackend().sendSession(t)
        }
        ,
        t.prototype._isClientProcessing = function(t) {
            var e = this;
            return new d((function(n) {
                var r = 0
                  , o = setInterval((function() {
                    0 == e._processing ? (clearInterval(o),
                    n(!0)) : (r += 1,
                    t && r >= t && (clearInterval(o),
                    n(!1)))
                }
                ), 1)
            }
            ))
        }
        ,
        t.prototype._getBackend = function() {
            return this._backend
        }
        ,
        t.prototype._isEnabled = function() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
        }
        ,
        t.prototype._prepareEvent = function(t, e, n) {
            var r = this
              , o = this.getOptions().normalizeDepth
              , i = void 0 === o ? 3 : o
              , s = Object(c.a)(Object(c.a)({}, t), {
                event_id: t.event_id || (n && n.event_id ? n.event_id : Object(p.i)()),
                timestamp: t.timestamp || Object(l.a)()
            });
            this._applyClientOptions(s),
            this._applyIntegrationsMetadata(s);
            var a = e;
            n && n.captureContext && (a = f.clone(a).update(n.captureContext));
            var u = d.resolve(s);
            return a && (u = a.applyToEvent(s, n)),
            u.then((function(t) {
                return "number" == typeof i && i > 0 ? r._normalizeEvent(t, i) : t
            }
            ))
        }
        ,
        t.prototype._normalizeEvent = function(t, e) {
            if (!t)
                return null;
            var n = Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({}, t), t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map((function(t) {
                    return Object(c.a)(Object(c.a)({}, t), t.data && {
                        data: Object(S.d)(t.data, e)
                    })
                }
                ))
            }), t.user && {
                user: Object(S.d)(t.user, e)
            }), t.contexts && {
                contexts: Object(S.d)(t.contexts, e)
            }), t.extra && {
                extra: Object(S.d)(t.extra, e)
            });
            return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace),
            n
        }
        ,
        t.prototype._applyClientOptions = function(t) {
            var e = this.getOptions()
              , n = e.environment
              , r = e.release
              , o = e.dist
              , i = e.maxValueLength
              , s = void 0 === i ? 250 : i;
            "environment"in t || (t.environment = "environment"in e ? n : "production"),
            void 0 === t.release && void 0 !== r && (t.release = r),
            void 0 === t.dist && void 0 !== o && (t.dist = o),
            t.message && (t.message = Object(A.d)(t.message, s));
            var a = t.exception && t.exception.values && t.exception.values[0];
            a && a.value && (a.value = Object(A.d)(a.value, s));
            var c = t.request;
            c && c.url && (c.url = Object(A.d)(c.url, s))
        }
        ,
        t.prototype._applyIntegrationsMetadata = function(t) {
            var e = t.sdk
              , n = Object.keys(this._integrations);
            e && n.length > 0 && (e.integrations = n)
        }
        ,
        t.prototype._sendEvent = function(t) {
            this._getBackend().sendEvent(t)
        }
        ,
        t.prototype._captureEvent = function(t, e, n) {
            return this._processEvent(t, e, n).then((function(t) {
                return t.event_id
            }
            ), (function(t) {
                b.error(t)
            }
            ))
        }
        ,
        t.prototype._processEvent = function(t, e, n) {
            var r = this
              , o = this.getOptions()
              , i = o.beforeSend
              , s = o.sampleRate;
            if (!this._isEnabled())
                return d.reject(new N("SDK not enabled, will not send event."));
            var a = "transaction" === t.type;
            return !a && "number" == typeof s && Math.random() > s ? d.reject(new N("This event has been sampled, will not send event.")) : this._prepareEvent(t, n, e).then((function(t) {
                if (null === t)
                    throw new N("An event processor returned null, will not send event.");
                if (e && e.data && !0 === e.data.__sentry__ || a || !i)
                    return t;
                var n = i(t, e);
                if (void 0 === n)
                    throw new N("`beforeSend` method has to return `null` or a valid event.");
                return Object(u.m)(n) ? n.then((function(t) {
                    return t
                }
                ), (function(t) {
                    throw new N("beforeSend rejected with " + t)
                }
                )) : n
            }
            )).then((function(t) {
                if (null === t)
                    throw new N("`beforeSend` returned `null`, will not send event.");
                var e = n && n.getSession && n.getSession();
                return !a && e && r._updateSessionFromEvent(e, t),
                r._sendEvent(t),
                t
            }
            )).then(null, (function(t) {
                if (t instanceof N)
                    throw t;
                throw r.captureException(t, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: t
                }),
                new N("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
            }
            ))
        }
        ,
        t.prototype._process = function(t) {
            var e = this;
            this._processing += 1,
            t.then((function(t) {
                return e._processing -= 1,
                t
            }
            ), (function(t) {
                return e._processing -= 1,
                t
            }
            ))
        }
        ,
        t
    }();
    !function(t) {
        t.Unknown = "unknown",
        t.Skipped = "skipped",
        t.Success = "success",
        t.RateLimit = "rate_limit",
        t.Invalid = "invalid",
        t.Failed = "failed"
    }(D || (D = {})),
    function(t) {
        t.fromHttpCode = function(e) {
            return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
        }
    }(D || (D = {}));
    var B, q = function() {
        function t() {}
        return t.prototype.sendEvent = function(t) {
            return d.resolve({
                reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: D.Skipped
            })
        }
        ,
        t.prototype.close = function(t) {
            return d.resolve(!0)
        }
        ,
        t
    }(), H = function() {
        function t(t) {
            this._options = t,
            this._options.dsn || b.warn("No DSN provided, backend will not do anything."),
            this._transport = this._setupTransport()
        }
        return t.prototype.eventFromException = function(t, e) {
            throw new N("Backend has to implement `eventFromException` method")
        }
        ,
        t.prototype.eventFromMessage = function(t, e, n) {
            throw new N("Backend has to implement `eventFromMessage` method")
        }
        ,
        t.prototype.sendEvent = function(t) {
            this._transport.sendEvent(t).then(null, (function(t) {
                b.error("Error while sending event: " + t)
            }
            ))
        }
        ,
        t.prototype.sendSession = function(t) {
            this._transport.sendSession ? this._transport.sendSession(t).then(null, (function(t) {
                b.error("Error while sending session: " + t)
            }
            )) : b.warn("Dropping session because custom transport doesn't implement sendSession")
        }
        ,
        t.prototype.getTransport = function() {
            return this._transport
        }
        ,
        t.prototype._setupTransport = function() {
            return new q
        }
        ,
        t
    }();
    function z() {
        if (!("fetch"in Object(p.e)()))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (t) {
            return !1
        }
    }
    function $(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }
    function J() {
        if (!z())
            return !1;
        try {
            return new Request("_",{
                referrerPolicy: "origin"
            }),
            !0
        } catch (t) {
            return !1
        }
    }
    !function(t) {
        t.Fatal = "fatal",
        t.Error = "error",
        t.Warning = "warning",
        t.Log = "log",
        t.Info = "info",
        t.Debug = "debug",
        t.Critical = "critical"
    }(B || (B = {})),
    function(t) {
        t.fromString = function(e) {
            switch (e) {
            case "debug":
                return t.Debug;
            case "info":
                return t.Info;
            case "warn":
            case "warning":
                return t.Warning;
            case "error":
                return t.Error;
            case "fatal":
                return t.Fatal;
            case "critical":
                return t.Critical;
            case "log":
            default:
                return t.Log
            }
        }
    }(B || (B = {}));
    var G = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , X = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , K = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , V = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , Z = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , Q = /Minified React error #\d+;/i;
    function tt(t) {
        var e = null
          , n = 0;
        t && ("number" == typeof t.framesToPop ? n = t.framesToPop : Q.test(t.message) && (n = 1));
        try {
            if (e = function(t) {
                if (!t || !t.stacktrace)
                    return null;
                for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), s = [], a = 0; a < i.length; a += 2) {
                    var c = null;
                    (e = r.exec(i[a])) ? c = {
                        url: e[2],
                        func: e[3],
                        args: [],
                        line: +e[1],
                        column: null
                    } : (e = o.exec(i[a])) && (c = {
                        url: e[6],
                        func: e[3] || e[4],
                        args: e[5] ? e[5].split(",") : [],
                        line: +e[1],
                        column: +e[2]
                    }),
                    c && (!c.func && c.line && (c.func = "?"),
                    s.push(c))
                }
                if (!s.length)
                    return null;
                return {
                    message: nt(t),
                    name: t.name,
                    stack: s
                }
            }(t))
                return et(e, n)
        } catch (t) {}
        try {
            if (e = function(t) {
                if (!t || !t.stack)
                    return null;
                for (var e, n, r, o = [], i = t.stack.split("\n"), s = 0; s < i.length; ++s) {
                    if (n = G.exec(i[s])) {
                        var a = n[2] && 0 === n[2].indexOf("native");
                        n[2] && 0 === n[2].indexOf("eval") && (e = Z.exec(n[2])) && (n[2] = e[1],
                        n[3] = e[2],
                        n[4] = e[3]),
                        r = {
                            url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                            func: n[1] || "?",
                            args: a ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = K.exec(i[s]))
                        r = {
                            url: n[2],
                            func: n[1] || "?",
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = X.exec(i[s])))
                            continue;
                        n[3] && n[3].indexOf(" > eval") > -1 && (e = V.exec(n[3])) ? (n[1] = n[1] || "eval",
                        n[3] = e[1],
                        n[4] = e[2],
                        n[5] = "") : 0 !== s || n[5] || void 0 === t.columnNumber || (o[0].column = t.columnNumber + 1),
                        r = {
                            url: n[3],
                            func: n[1] || "?",
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    !r.func && r.line && (r.func = "?"),
                    o.push(r)
                }
                if (!o.length)
                    return null;
                return {
                    message: nt(t),
                    name: t.name,
                    stack: o
                }
            }(t))
                return et(e, n)
        } catch (t) {}
        return {
            message: nt(t),
            name: t && t.name,
            stack: [],
            failed: !0
        }
    }
    function et(t, e) {
        try {
            return Object(c.a)(Object(c.a)({}, t), {
                stack: t.stack.slice(e)
            })
        } catch (e) {
            return t
        }
    }
    function nt(t) {
        var e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }
    function rt(t) {
        var e = it(t.stack)
          , n = {
            type: t.name,
            value: t.message
        };
        return e && e.length && (n.stacktrace = {
            frames: e
        }),
        void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
        n
    }
    function ot(t) {
        return {
            exception: {
                values: [rt(t)]
            }
        }
    }
    function it(t) {
        if (!t || !t.length)
            return [];
        var e = t
          , n = e[0].func || ""
          , r = e[e.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
        e.slice(0, 50).map((function(t) {
            return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: null === t.line ? void 0 : t.line
            }
        }
        )).reverse()
    }
    function st(t, e, n) {
        var r;
        if (void 0 === n && (n = {}),
        Object(u.e)(t) && t.error)
            return r = ot(tt(t = t.error));
        if (Object(u.a)(t) || Object(u.b)(t)) {
            var o = t
              , i = o.name || (Object(u.a)(o) ? "DOMError" : "DOMException")
              , s = o.message ? i + ": " + o.message : i;
            return r = at(s, e, n),
            Object(p.b)(r, s),
            "code"in o && (r.tags = Object(c.a)(Object(c.a)({}, r.tags), {
                "DOMException.code": "" + o.code
            })),
            r
        }
        return Object(u.d)(t) ? r = ot(tt(t)) : Object(u.h)(t) || Object(u.f)(t) ? (r = function(t, e, n) {
            var r = {
                exception: {
                    values: [{
                        type: Object(u.f)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(S.b)(t)
                    }]
                },
                extra: {
                    __serialized__: Object(S.e)(t)
                }
            };
            if (e) {
                var o = it(tt(e).stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }(t, e, n.rejection),
        Object(p.a)(r, {
            synthetic: !0
        }),
        r) : (r = at(t, e, n),
        Object(p.b)(r, "" + t, void 0),
        Object(p.a)(r, {
            synthetic: !0
        }),
        r)
    }
    function at(t, e, n) {
        void 0 === n && (n = {});
        var r = {
            message: t
        };
        if (n.attachStacktrace && e) {
            var o = it(tt(e).stack);
            r.stacktrace = {
                frames: o
            }
        }
        return r
    }
    function ct(t, e) {
        return {
            body: JSON.stringify({
                sent_at: (new Date).toISOString()
            }) + "\n" + JSON.stringify({
                type: "session"
            }) + "\n" + JSON.stringify(t),
            type: "session",
            url: e.getEnvelopeEndpointWithUrlEncodedAuth()
        }
    }
    function ut(t, e) {
        var n = "transaction" === t.type
          , r = {
            body: JSON.stringify(t),
            type: t.type || "event",
            url: n ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
        };
        if (n) {
            var o = JSON.stringify({
                event_id: t.event_id,
                sent_at: (new Date).toISOString()
            }) + "\n" + JSON.stringify({
                type: t.type
            }) + "\n" + r.body;
            r.body = o
        }
        return r
    }
    var lt = function() {
        function t(t) {
            this.dsn = t,
            this._dsnObject = new W(t)
        }
        return t.prototype.getDsn = function() {
            return this._dsnObject
        }
        ,
        t.prototype.getBaseApiEndpoint = function() {
            var t = this._dsnObject
              , e = t.protocol ? t.protocol + ":" : ""
              , n = t.port ? ":" + t.port : "";
            return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
        }
        ,
        t.prototype.getStoreEndpoint = function() {
            return this._getIngestEndpoint("store")
        }
        ,
        t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
            return this.getStoreEndpoint() + "?" + this._encodedAuth()
        }
        ,
        t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
            return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
        }
        ,
        t.prototype.getStoreEndpointPath = function() {
            var t = this._dsnObject;
            return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
        }
        ,
        t.prototype.getRequestHeaders = function(t, e) {
            var n = this._dsnObject
              , r = ["Sentry sentry_version=7"];
            return r.push("sentry_client=" + t + "/" + e),
            r.push("sentry_key=" + n.user),
            n.pass && r.push("sentry_secret=" + n.pass),
            {
                "Content-Type": "application/json",
                "X-Sentry-Auth": r.join(", ")
            }
        }
        ,
        t.prototype.getReportDialogEndpoint = function(t) {
            void 0 === t && (t = {});
            var e = this._dsnObject
              , n = this.getBaseApiEndpoint() + "embed/error-page/"
              , r = [];
            for (var o in r.push("dsn=" + e.toString()),
            t)
                if ("dsn" !== o)
                    if ("user" === o) {
                        if (!t.user)
                            continue;
                        t.user.name && r.push("name=" + encodeURIComponent(t.user.name)),
                        t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                    } else
                        r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
            return r.length ? n + "?" + r.join("&") : n
        }
        ,
        t.prototype._getEnvelopeEndpoint = function() {
            return this._getIngestEndpoint("envelope")
        }
        ,
        t.prototype._getIngestEndpoint = function(t) {
            return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
        }
        ,
        t.prototype._encodedAuth = function() {
            var t = {
                sentry_key: this._dsnObject.user,
                sentry_version: "7"
            };
            return Object(S.f)(t)
        }
        ,
        t
    }()
      , dt = function() {
        function t(t) {
            this._limit = t,
            this._buffer = []
        }
        return t.prototype.isReady = function() {
            return void 0 === this._limit || this.length() < this._limit
        }
        ,
        t.prototype.add = function(t) {
            var e = this;
            return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t),
            t.then((function() {
                return e.remove(t)
            }
            )).then(null, (function() {
                return e.remove(t).then(null, (function() {}
                ))
            }
            )),
            t) : d.reject(new N("Not adding Promise due to buffer limit reached."))
        }
        ,
        t.prototype.remove = function(t) {
            return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
        }
        ,
        t.prototype.length = function() {
            return this._buffer.length
        }
        ,
        t.prototype.drain = function(t) {
            var e = this;
            return new d((function(n) {
                var r = setTimeout((function() {
                    t && t > 0 && n(!1)
                }
                ), t);
                d.all(e._buffer).then((function() {
                    clearTimeout(r),
                    n(!0)
                }
                )).then(null, (function() {
                    n(!0)
                }
                ))
            }
            ))
        }
        ,
        t
    }()
      , pt = function() {
        function t(t) {
            this.options = t,
            this._buffer = new dt(30),
            this._rateLimits = {},
            this._api = new lt(this.options.dsn),
            this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
        }
        return t.prototype.sendEvent = function(t) {
            throw new N("Transport Class has to implement `sendEvent` method")
        }
        ,
        t.prototype.close = function(t) {
            return this._buffer.drain(t)
        }
        ,
        t.prototype._handleResponse = function(t) {
            var e = t.requestType
              , n = t.response
              , r = t.headers
              , o = t.resolve
              , i = t.reject
              , s = D.fromHttpCode(n.status);
            this._handleRateLimit(r) && b.warn("Too many requests, backing off till: " + this._disabledUntil(e)),
            s !== D.Success ? i(n) : o({
                status: s
            })
        }
        ,
        t.prototype._disabledUntil = function(t) {
            return this._rateLimits[t] || this._rateLimits.all
        }
        ,
        t.prototype._isRateLimited = function(t) {
            return this._disabledUntil(t) > new Date(Date.now())
        }
        ,
        t.prototype._handleRateLimit = function(t) {
            var e, n, r, o, i = Date.now(), s = t["x-sentry-rate-limits"], a = t["retry-after"];
            if (s) {
                try {
                    for (var u = Object(c.e)(s.trim().split(",")), l = u.next(); !l.done; l = u.next()) {
                        var d = l.value.split(":", 2)
                          , f = parseInt(d[0], 10)
                          , h = 1e3 * (isNaN(f) ? 60 : f);
                        try {
                            for (var _ = (r = void 0,
                            Object(c.e)(d[1].split(";"))), y = _.next(); !y.done; y = _.next()) {
                                var g = y.value;
                                this._rateLimits[g || "all"] = new Date(i + h)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                y && !y.done && (o = _.return) && o.call(_)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (n = u.return) && n.call(u)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return !0
            }
            return !!a && (this._rateLimits.all = new Date(i + Object(p.g)(i, a)),
            !0)
        }
        ,
        t
    }()
      , ft = Object(p.e)()
      , ht = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return Object(c.b)(e, t),
        e.prototype.sendEvent = function(t) {
            return this._sendRequest(ut(t, this._api), t)
        }
        ,
        e.prototype.sendSession = function(t) {
            return this._sendRequest(ct(t, this._api), t)
        }
        ,
        e.prototype._sendRequest = function(t, e) {
            var n = this;
            if (this._isRateLimited(t.type))
                return Promise.reject({
                    event: e,
                    type: t.type,
                    reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                    status: 429
                });
            var r = {
                body: t.body,
                method: "POST",
                referrerPolicy: J() ? "origin" : ""
            };
            return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
            void 0 !== this.options.headers && (r.headers = this.options.headers),
            this._buffer.add(new d((function(e, o) {
                ft.fetch(t.url, r).then((function(r) {
                    var i = {
                        "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": r.headers.get("Retry-After")
                    };
                    n._handleResponse({
                        requestType: t.type,
                        response: r,
                        headers: i,
                        resolve: e,
                        reject: o
                    })
                }
                )).catch(o)
            }
            )))
        }
        ,
        e
    }(pt)
      , _t = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return Object(c.b)(e, t),
        e.prototype.sendEvent = function(t) {
            return this._sendRequest(ut(t, this._api), t)
        }
        ,
        e.prototype.sendSession = function(t) {
            return this._sendRequest(ct(t, this._api), t)
        }
        ,
        e.prototype._sendRequest = function(t, e) {
            var n = this;
            return this._isRateLimited(t.type) ? Promise.reject({
                event: e,
                type: t.type,
                reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                status: 429
            }) : this._buffer.add(new d((function(e, r) {
                var o = new XMLHttpRequest;
                for (var i in o.onreadystatechange = function() {
                    if (4 === o.readyState) {
                        var i = {
                            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": o.getResponseHeader("Retry-After")
                        };
                        n._handleResponse({
                            requestType: t.type,
                            response: o,
                            headers: i,
                            resolve: e,
                            reject: r
                        })
                    }
                }
                ,
                o.open("POST", t.url),
                n.options.headers)
                    n.options.headers.hasOwnProperty(i) && o.setRequestHeader(i, n.options.headers[i]);
                o.send(t.body)
            }
            )))
        }
        ,
        e
    }(pt)
      , yt = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return Object(c.b)(e, t),
        e.prototype.eventFromException = function(t, e) {
            return function(t, e, n) {
                var r = st(e, n && n.syntheticException || void 0, {
                    attachStacktrace: t.attachStacktrace
                });
                return Object(p.a)(r, {
                    handled: !0,
                    type: "generic"
                }),
                r.level = B.Error,
                n && n.event_id && (r.event_id = n.event_id),
                d.resolve(r)
            }(this._options, t, e)
        }
        ,
        e.prototype.eventFromMessage = function(t, e, n) {
            return void 0 === e && (e = B.Info),
            function(t, e, n, r) {
                void 0 === n && (n = B.Info);
                var o = at(e, r && r.syntheticException || void 0, {
                    attachStacktrace: t.attachStacktrace
                });
                return o.level = n,
                r && r.event_id && (o.event_id = r.event_id),
                d.resolve(o)
            }(this._options, t, e, n)
        }
        ,
        e.prototype._setupTransport = function() {
            if (!this._options.dsn)
                return t.prototype._setupTransport.call(this);
            var e = Object(c.a)(Object(c.a)({}, this._options.transportOptions), {
                dsn: this._options.dsn
            });
            return this._options.transport ? new this._options.transport(e) : z() ? new ht(e) : new _t(e)
        }
        ,
        e
    }(H);
    function gt(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
        var r = j();
        if (r && r[t])
            return r[t].apply(r, Object(c.d)(e));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }
    function mt(t, e) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (t) {
            n = t
        }
        return gt("captureException", t, {
            captureContext: e,
            originalException: t,
            syntheticException: n
        })
    }
    function vt(t, e) {
        var n;
        try {
            throw new Error(t)
        } catch (t) {
            n = t
        }
        var r = "string" != typeof e ? {
            captureContext: e
        } : void 0;
        return gt("captureMessage", t, "string" == typeof e ? e : void 0, Object(c.a)({
            originalException: t,
            syntheticException: n
        }, r))
    }
    function bt(t) {
        gt("configureScope", t)
    }
    function wt(t) {
        gt("addBreadcrumb", t)
    }
    function St(t) {
        gt("withScope", t)
    }
    var Ot = 0;
    function Et() {
        return Ot > 0
    }
    function xt() {
        Ot += 1,
        setTimeout((function() {
            Ot -= 1
        }
        ))
    }
    function kt(t, e, n) {
        if (void 0 === e && (e = {}),
        "function" != typeof t)
            return t;
        try {
            if (t.__sentry__)
                return t;
            if (t.__sentry_wrapped__)
                return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var o = r.map((function(t) {
                    return kt(t, e)
                }
                ));
                return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
            } catch (t) {
                throw xt(),
                St((function(n) {
                    n.addEventProcessor((function(t) {
                        var n = Object(c.a)({}, t);
                        return e.mechanism && (Object(p.b)(n, void 0, void 0),
                        Object(p.a)(n, e.mechanism)),
                        n.extra = Object(c.a)(Object(c.a)({}, n.extra), {
                            arguments: r
                        }),
                        n
                    }
                    )),
                    mt(t)
                }
                )),
                t
            }
        };
        try {
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
        } catch (t) {}
        t.prototype = t.prototype || {},
        r.prototype = t.prototype,
        Object.defineProperty(t, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }),
        Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: t
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return t.name
                }
            })
        } catch (t) {}
        return r
    }
    function jt(t) {
        if (void 0 === t && (t = {}),
        t.eventId)
            if (t.dsn) {
                var e = document.createElement("script");
                e.async = !0,
                e.src = new lt(t.dsn).getReportDialogEndpoint(t),
                t.onLoad && (e.onload = t.onLoad),
                (document.head || document.body).appendChild(e)
            } else
                b.error("Missing dsn option in showReportDialog call");
        else
            b.error("Missing eventId option in showReportDialog call")
    }
    var Tt, Rt = n(14), It = Object(p.e)(), At = {}, Pt = {};
    function Lt(t) {
        if (!Pt[t])
            switch (Pt[t] = !0,
            t) {
            case "console":
                !function() {
                    if (!("console"in It))
                        return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                        t in It.console && Object(S.c)(It.console, t, (function(e) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++)
                                    n[r] = arguments[r];
                                Nt("console", {
                                    args: n,
                                    level: t
                                }),
                                e && Function.prototype.apply.call(e, It.console, n)
                            }
                        }
                        ))
                    }
                    ))
                }();
                break;
            case "dom":
                !function() {
                    if (!("document"in It))
                        return;
                    It.document.addEventListener("click", Yt("click", Nt.bind(null, "dom")), !1),
                    It.document.addEventListener("keypress", Bt(Nt.bind(null, "dom")), !1),
                    ["EventTarget", "Node"].forEach((function(t) {
                        var e = It[t] && It[t].prototype;
                        e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(S.c)(e, "addEventListener", (function(t) {
                            return function(e, n, r) {
                                return n && n.handleEvent ? ("click" === e && Object(S.c)(n, "handleEvent", (function(t) {
                                    return function(e) {
                                        return Yt("click", Nt.bind(null, "dom"))(e),
                                        t.call(this, e)
                                    }
                                }
                                )),
                                "keypress" === e && Object(S.c)(n, "handleEvent", (function(t) {
                                    return function(e) {
                                        return Bt(Nt.bind(null, "dom"))(e),
                                        t.call(this, e)
                                    }
                                }
                                ))) : ("click" === e && Yt("click", Nt.bind(null, "dom"), !0)(this),
                                "keypress" === e && Bt(Nt.bind(null, "dom"))(this)),
                                t.call(this, e, n, r)
                            }
                        }
                        )),
                        Object(S.c)(e, "removeEventListener", (function(t) {
                            return function(e, n, r) {
                                try {
                                    t.call(this, e, n.__sentry_wrapped__, r)
                                } catch (t) {}
                                return t.call(this, e, n, r)
                            }
                        }
                        )))
                    }
                    ))
                }();
                break;
            case "xhr":
                !function() {
                    if (!("XMLHttpRequest"in It))
                        return;
                    var t = []
                      , e = []
                      , n = XMLHttpRequest.prototype;
                    Object(S.c)(n, "open", (function(n) {
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++)
                                r[o] = arguments[o];
                            var i = this
                              , s = r[1];
                            i.__sentry_xhr__ = {
                                method: Object(u.k)(r[0]) ? r[0].toUpperCase() : r[0],
                                url: r[1]
                            },
                            Object(u.k)(s) && "POST" === i.__sentry_xhr__.method && s.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
                            var a = function() {
                                if (4 === i.readyState) {
                                    try {
                                        i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                    } catch (t) {}
                                    try {
                                        var n = t.indexOf(i);
                                        if (-1 !== n) {
                                            t.splice(n);
                                            var o = e.splice(n)[0];
                                            i.__sentry_xhr__ && void 0 !== o[0] && (i.__sentry_xhr__.body = o[0])
                                        }
                                    } catch (t) {}
                                    Nt("xhr", {
                                        args: r,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: i
                                    })
                                }
                            };
                            return "onreadystatechange"in i && "function" == typeof i.onreadystatechange ? Object(S.c)(i, "onreadystatechange", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++)
                                        e[n] = arguments[n];
                                    return a(),
                                    t.apply(i, e)
                                }
                            }
                            )) : i.addEventListener("readystatechange", a),
                            n.apply(i, r)
                        }
                    }
                    )),
                    Object(S.c)(n, "send", (function(n) {
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++)
                                r[o] = arguments[o];
                            return t.push(this),
                            e.push(r),
                            Nt("xhr", {
                                args: r,
                                startTimestamp: Date.now(),
                                xhr: this
                            }),
                            n.apply(this, r)
                        }
                    }
                    ))
                }();
                break;
            case "fetch":
                !function() {
                    if (!function() {
                        if (!z())
                            return !1;
                        var t = Object(p.e)();
                        if ($(t.fetch))
                            return !0;
                        var e = !1
                          , n = t.document;
                        if (n && "function" == typeof n.createElement)
                            try {
                                var r = n.createElement("iframe");
                                r.hidden = !0,
                                n.head.appendChild(r),
                                r.contentWindow && r.contentWindow.fetch && (e = $(r.contentWindow.fetch)),
                                n.head.removeChild(r)
                            } catch (t) {
                                b.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                        return e
                    }())
                        return;
                    Object(S.c)(It, "fetch", (function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = {
                                args: e,
                                fetchData: {
                                    method: Ut(e),
                                    url: Wt(e)
                                },
                                startTimestamp: Date.now()
                            };
                            return Nt("fetch", Object(c.a)({}, r)),
                            t.apply(It, e).then((function(t) {
                                return Nt("fetch", Object(c.a)(Object(c.a)({}, r), {
                                    endTimestamp: Date.now(),
                                    response: t
                                })),
                                t
                            }
                            ), (function(t) {
                                throw Nt("fetch", Object(c.a)(Object(c.a)({}, r), {
                                    endTimestamp: Date.now(),
                                    error: t
                                })),
                                t
                            }
                            ))
                        }
                    }
                    ))
                }();
                break;
            case "history":
                !function() {
                    if (t = Object(p.e)(),
                    e = t.chrome,
                    n = e && e.app && e.app.runtime,
                    r = "history"in t && !!t.history.pushState && !!t.history.replaceState,
                    n || !r)
                        return;
                    var t, e, n, r;
                    var o = It.onpopstate;
                    function i(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = e.length > 2 ? e[2] : void 0;
                            if (r) {
                                var o = Tt
                                  , i = String(r);
                                Tt = i,
                                Nt("history", {
                                    from: o,
                                    to: i
                                })
                            }
                            return t.apply(this, e)
                        }
                    }
                    It.onpopstate = function() {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        var n = It.location.href
                          , r = Tt;
                        if (Tt = n,
                        Nt("history", {
                            from: r,
                            to: n
                        }),
                        o)
                            return o.apply(this, t)
                    }
                    ,
                    Object(S.c)(It.history, "pushState", i),
                    Object(S.c)(It.history, "replaceState", i)
                }();
                break;
            case "error":
                qt = It.onerror,
                It.onerror = function(t, e, n, r, o) {
                    return Nt("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: t,
                        url: e
                    }),
                    !!qt && qt.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                Ht = It.onunhandledrejection,
                It.onunhandledrejection = function(t) {
                    return Nt("unhandledrejection", t),
                    !Ht || Ht.apply(this, arguments)
                }
                ;
                break;
            default:
                b.warn("unknown instrumentation type:", t)
            }
    }
    function Ct(t) {
        t && "string" == typeof t.type && "function" == typeof t.callback && (At[t.type] = At[t.type] || [],
        At[t.type].push(t.callback),
        Lt(t.type))
    }
    function Nt(t, e) {
        var n, r;
        if (t && At[t])
            try {
                for (var o = Object(c.e)(At[t] || []), i = o.next(); !i.done; i = o.next()) {
                    var s = i.value;
                    try {
                        s(e)
                    } catch (e) {
                        b.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(Rt.a)(s) + "\nError: " + e)
                    }
                }
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    function Ut(t) {
        return void 0 === t && (t = []),
        "Request"in It && Object(u.g)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }
    function Wt(t) {
        return void 0 === t && (t = []),
        "string" == typeof t[0] ? t[0] : "Request"in It && Object(u.g)(t[0], Request) ? t[0].url : String(t[0])
    }
    var Ft, Mt, Dt = 0;
    function Yt(t, e, n) {
        return void 0 === n && (n = !1),
        function(r) {
            Ft = void 0,
            r && Mt !== r && (Mt = r,
            Dt && clearTimeout(Dt),
            n ? Dt = setTimeout((function() {
                e({
                    event: r,
                    name: t
                })
            }
            )) : e({
                event: r,
                name: t
            }))
        }
    }
    function Bt(t) {
        return function(e) {
            var n;
            try {
                n = e.target
            } catch (t) {
                return
            }
            var r = n && n.tagName;
            r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (Ft || Yt("input", t)(e),
            clearTimeout(Ft),
            Ft = setTimeout((function() {
                Ft = void 0
            }
            ), 1e3))
        }
    }
    var qt = null;
    var Ht = null;
    var zt = n(16)
      , $t = function() {
        function t(e) {
            this.name = t.id,
            this._options = Object(c.a)({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, e)
        }
        return t.prototype.addSentryBreadcrumb = function(t) {
            this._options.sentry && j().addBreadcrumb({
                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                event_id: t.event_id,
                level: t.level,
                message: Object(p.d)(t)
            }, {
                event: t
            })
        }
        ,
        t.prototype.setupOnce = function() {
            var t = this;
            this._options.console && Ct({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._consoleBreadcrumb.apply(t, Object(c.d)(e))
                },
                type: "console"
            }),
            this._options.dom && Ct({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._domBreadcrumb.apply(t, Object(c.d)(e))
                },
                type: "dom"
            }),
            this._options.xhr && Ct({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._xhrBreadcrumb.apply(t, Object(c.d)(e))
                },
                type: "xhr"
            }),
            this._options.fetch && Ct({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._fetchBreadcrumb.apply(t, Object(c.d)(e))
                },
                type: "fetch"
            }),
            this._options.history && Ct({
                callback: function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    t._historyBreadcrumb.apply(t, Object(c.d)(e))
                },
                type: "history"
            })
        }
        ,
        t.prototype._consoleBreadcrumb = function(t) {
            var e = {
                category: "console",
                data: {
                    arguments: t.args,
                    logger: "console"
                },
                level: B.fromString(t.level),
                message: Object(A.b)(t.args, " ")
            };
            if ("assert" === t.level) {
                if (!1 !== t.args[0])
                    return;
                e.message = "Assertion failed: " + (Object(A.b)(t.args.slice(1), " ") || "console.assert"),
                e.data.arguments = t.args.slice(1)
            }
            j().addBreadcrumb(e, {
                input: t.args,
                level: t.level
            })
        }
        ,
        t.prototype._domBreadcrumb = function(t) {
            var e;
            try {
                e = t.event.target ? Object(zt.a)(t.event.target) : Object(zt.a)(t.event)
            } catch (t) {
                e = "<unknown>"
            }
            0 !== e.length && j().addBreadcrumb({
                category: "ui." + t.name,
                message: e
            }, {
                event: t.event,
                name: t.name
            })
        }
        ,
        t.prototype._xhrBreadcrumb = function(t) {
            if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__)
                    return;
                var e = t.xhr.__sentry_xhr__ || {}
                  , n = e.method
                  , r = e.url
                  , o = e.status_code
                  , i = e.body;
                j().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: n,
                        url: r,
                        status_code: o
                    },
                    type: "http"
                }, {
                    xhr: t.xhr,
                    input: i
                })
            } else
                ;
        }
        ,
        t.prototype._fetchBreadcrumb = function(t) {
            t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? j().addBreadcrumb({
                category: "fetch",
                data: t.fetchData,
                level: B.Error,
                type: "http"
            }, {
                data: t.error,
                input: t.args
            }) : j().addBreadcrumb({
                category: "fetch",
                data: Object(c.a)(Object(c.a)({}, t.fetchData), {
                    status_code: t.response.status
                }),
                type: "http"
            }, {
                input: t.args,
                response: t.response
            })))
        }
        ,
        t.prototype._historyBreadcrumb = function(t) {
            var e = Object(p.e)()
              , n = t.from
              , r = t.to
              , o = Object(p.h)(e.location.href)
              , i = Object(p.h)(n)
              , s = Object(p.h)(r);
            i.path || (i = o),
            o.protocol === s.protocol && o.host === s.host && (r = s.relative),
            o.protocol === i.protocol && o.host === i.host && (n = i.relative),
            j().addBreadcrumb({
                category: "navigation",
                data: {
                    from: n,
                    to: r
                }
            })
        }
        ,
        t.id = "Breadcrumbs",
        t
    }()
      , Jt = function(t) {
        function e(e) {
            return void 0 === e && (e = {}),
            t.call(this, yt, e) || this
        }
        return Object(c.b)(e, t),
        e.prototype.showReportDialog = function(t) {
            void 0 === t && (t = {}),
            Object(p.e)().document && (this._isEnabled() ? jt(Object(c.a)(Object(c.a)({}, t), {
                dsn: t.dsn || this.getDsn()
            })) : b.error("Trying to call showReportDialog with Sentry Client disabled"))
        }
        ,
        e.prototype._prepareEvent = function(e, n, r) {
            return e.platform = e.platform || "javascript",
            e.sdk = Object(c.a)(Object(c.a)({}, e.sdk), {
                name: "sentry.javascript.browser",
                packages: Object(c.d)(e.sdk && e.sdk.packages || [], [{
                    name: "npm:@sentry/browser",
                    version: "5.28.0"
                }]),
                version: "5.28.0"
            }),
            t.prototype._prepareEvent.call(this, e, n, r)
        }
        ,
        e.prototype._sendEvent = function(e) {
            var n = this.getIntegration($t);
            n && n.addSentryBreadcrumb(e),
            t.prototype._sendEvent.call(this, e)
        }
        ,
        e
    }(Y)
      , Gt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , Xt = function() {
        function t(e) {
            this.name = t.id,
            this._options = Object(c.a)({
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0
            }, e)
        }
        return t.prototype.setupOnce = function() {
            var t = Object(p.e)();
            (this._options.setTimeout && Object(S.c)(t, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval && Object(S.c)(t, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame && Object(S.c)(t, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest && "XMLHttpRequest"in t && Object(S.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Gt).forEach(this._wrapEventTarget.bind(this))
        }
        ,
        t.prototype._wrapTimeFunction = function(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                var r = e[0];
                return e[0] = kt(r, {
                    mechanism: {
                        data: {
                            function: Object(Rt.a)(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                t.apply(this, e)
            }
        }
        ,
        t.prototype._wrapRAF = function(t) {
            return function(e) {
                return t.call(this, kt(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: Object(Rt.a)(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }))
            }
        }
        ,
        t.prototype._wrapEventTarget = function(t) {
            var e = Object(p.e)()
              , n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(S.c)(n, "addEventListener", (function(e) {
                return function(n, r, o) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = kt(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: Object(Rt.a)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (t) {}
                    return e.call(this, n, kt(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: Object(Rt.a)(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), o)
                }
            }
            )),
            Object(S.c)(n, "removeEventListener", (function(t) {
                return function(e, n, r) {
                    var o, i = n;
                    try {
                        var s = null === (o = i) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                        s && t.call(this, e, s, r)
                    } catch (t) {}
                    return t.call(this, e, i, r)
                }
            }
            )))
        }
        ,
        t.prototype._wrapXHR = function(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                var r = this
                  , o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return o.forEach((function(t) {
                    t in r && "function" == typeof r[t] && Object(S.c)(r, t, (function(e) {
                        var n = {
                            mechanism: {
                                data: {
                                    function: t,
                                    handler: Object(Rt.a)(e)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        };
                        return e.__sentry_original__ && (n.mechanism.data.handler = Object(Rt.a)(e.__sentry_original__)),
                        kt(e, n)
                    }
                    ))
                }
                )),
                t.apply(this, e)
            }
        }
        ,
        t.id = "TryCatch",
        t
    }()
      , Kt = function() {
        function t(e) {
            this.name = t.id,
            this._onErrorHandlerInstalled = !1,
            this._onUnhandledRejectionHandlerInstalled = !1,
            this._options = Object(c.a)({
                onerror: !0,
                onunhandledrejection: !0
            }, e)
        }
        return t.prototype.setupOnce = function() {
            Error.stackTraceLimit = 50,
            this._options.onerror && (b.log("Global Handler attached: onerror"),
            this._installGlobalOnErrorHandler()),
            this._options.onunhandledrejection && (b.log("Global Handler attached: onunhandledrejection"),
            this._installGlobalOnUnhandledRejectionHandler())
        }
        ,
        t.prototype._installGlobalOnErrorHandler = function() {
            var e = this;
            this._onErrorHandlerInstalled || (Ct({
                callback: function(n) {
                    var r = n.error
                      , o = j()
                      , i = o.getIntegration(t)
                      , s = r && !0 === r.__sentry_own_request__;
                    if (i && !Et() && !s) {
                        var a = o.getClient()
                          , c = Object(u.i)(r) ? e._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : e._enhanceEventWithInitialFrame(st(r, void 0, {
                            attachStacktrace: a && a.getOptions().attachStacktrace,
                            rejection: !1
                        }), n.url, n.line, n.column);
                        Object(p.a)(c, {
                            handled: !1,
                            type: "onerror"
                        }),
                        o.captureEvent(c, {
                            originalException: r
                        })
                    }
                },
                type: "error"
            }),
            this._onErrorHandlerInstalled = !0)
        }
        ,
        t.prototype._installGlobalOnUnhandledRejectionHandler = function() {
            var e = this;
            this._onUnhandledRejectionHandlerInstalled || (Ct({
                callback: function(n) {
                    var r = n;
                    try {
                        "reason"in n ? r = n.reason : "detail"in n && "reason"in n.detail && (r = n.detail.reason)
                    } catch (t) {}
                    var o = j()
                      , i = o.getIntegration(t)
                      , s = r && !0 === r.__sentry_own_request__;
                    if (!i || Et() || s)
                        return !0;
                    var a = o.getClient()
                      , c = Object(u.i)(r) ? e._eventFromIncompleteRejection(r) : st(r, void 0, {
                        attachStacktrace: a && a.getOptions().attachStacktrace,
                        rejection: !0
                    });
                    c.level = B.Error,
                    Object(p.a)(c, {
                        handled: !1,
                        type: "onunhandledrejection"
                    }),
                    o.captureEvent(c, {
                        originalException: r
                    })
                },
                type: "unhandledrejection"
            }),
            this._onUnhandledRejectionHandlerInstalled = !0)
        }
        ,
        t.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
            var o, i = Object(u.e)(t) ? t.message : t;
            if (Object(u.k)(i)) {
                var s = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                s && (o = s[1],
                i = s[2])
            }
            var a = {
                exception: {
                    values: [{
                        type: o || "Error",
                        value: i
                    }]
                }
            };
            return this._enhanceEventWithInitialFrame(a, e, n, r)
        }
        ,
        t.prototype._eventFromIncompleteRejection = function(t) {
            return {
                exception: {
                    values: [{
                        type: "UnhandledRejection",
                        value: "Non-Error promise rejection captured with value: " + t
                    }]
                }
            }
        }
        ,
        t.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
            t.exception = t.exception || {},
            t.exception.values = t.exception.values || [],
            t.exception.values[0] = t.exception.values[0] || {},
            t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {},
            t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
            var o = isNaN(parseInt(r, 10)) ? void 0 : r
              , i = isNaN(parseInt(n, 10)) ? void 0 : n
              , s = Object(u.k)(e) && e.length > 0 ? e : Object(p.f)();
            return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                colno: o,
                filename: s,
                function: "?",
                in_app: !0,
                lineno: i
            }),
            t
        }
        ,
        t.id = "GlobalHandlers",
        t
    }()
      , Vt = function() {
        function t(e) {
            void 0 === e && (e = {}),
            this.name = t.id,
            this._key = e.key || "cause",
            this._limit = e.limit || 5
        }
        return t.prototype.setupOnce = function() {
            _((function(e, n) {
                var r = j().getIntegration(t);
                return r ? r._handler(e, n) : e
            }
            ))
        }
        ,
        t.prototype._handler = function(t, e) {
            if (!(t.exception && t.exception.values && e && Object(u.g)(e.originalException, Error)))
                return t;
            var n = this._walkErrorTree(e.originalException, this._key);
            return t.exception.values = Object(c.d)(n, t.exception.values),
            t
        }
        ,
        t.prototype._walkErrorTree = function(t, e, n) {
            if (void 0 === n && (n = []),
            !Object(u.g)(t[e], Error) || n.length + 1 >= this._limit)
                return n;
            var r = rt(tt(t[e]));
            return this._walkErrorTree(t[e], e, Object(c.d)([r], n))
        }
        ,
        t.id = "LinkedErrors",
        t
    }()
      , Zt = Object(p.e)()
      , Qt = function() {
        function t() {
            this.name = t.id
        }
        return t.prototype.setupOnce = function() {
            _((function(e) {
                var n, r, o;
                if (j().getIntegration(t)) {
                    if (!Zt.navigator && !Zt.location && !Zt.document)
                        return e;
                    var i = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (r = Zt.location) || void 0 === r ? void 0 : r.href)
                      , s = (Zt.document || {}).referrer
                      , a = (Zt.navigator || {}).userAgent
                      , u = Object(c.a)(Object(c.a)(Object(c.a)({}, null === (o = e.request) || void 0 === o ? void 0 : o.headers), s && {
                        Referer: s
                    }), a && {
                        "User-Agent": a
                    })
                      , l = Object(c.a)(Object(c.a)({}, i && {
                        url: i
                    }), {
                        headers: u
                    });
                    return Object(c.a)(Object(c.a)({}, e), {
                        request: l
                    })
                }
                return e
            }
            ))
        }
        ,
        t.id = "UserAgent",
        t
    }()
      , te = [new r.InboundFilters, new r.FunctionToString, new Xt, new $t, new Kt, new Vt, new Qt];
    var ee = {}
      , ne = Object(p.e)();
    ne.Sentry && ne.Sentry.Integrations && (ee = ne.Sentry.Integrations);
    var re = Object(c.a)(Object(c.a)(Object(c.a)({}, ee), r), i);
    function oe(t, e) {
        for (var n = 0, r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1),
            n++) : n && (t.splice(r, 1),
            n--)
        }
        if (e)
            for (; n--; n)
                t.unshift("..");
        return t
    }
    var ie = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
    function se(t) {
        var e = ie.exec(t);
        return e ? e.slice(1) : []
    }
    function ae() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        for (var n = "", r = !1, o = t.length - 1; o >= -1 && !r; o--) {
            var i = o >= 0 ? t[o] : "/";
            i && (n = i + "/" + n,
            r = "/" === i.charAt(0))
        }
        return (r ? "/" : "") + (n = oe(n.split("/").filter((function(t) {
            return !!t
        }
        )), !r).join("/")) || "."
    }
    function ce(t) {
        for (var e = 0; e < t.length && "" === t[e]; e++)
            ;
        for (var n = t.length - 1; n >= 0 && "" === t[n]; n--)
            ;
        return e > n ? [] : t.slice(e, n - e + 1)
    }
    var ue = function() {
        function t(e) {
            var n = this;
            void 0 === e && (e = {}),
            this.name = t.id,
            this._iteratee = function(t) {
                if (!t.filename)
                    return t;
                var e, r, o = /^[A-Z]:\\/.test(t.filename), i = /^\//.test(t.filename);
                if (o || i) {
                    var s = o ? t.filename.replace(/^[A-Z]:/, "").replace(/\\/g, "/") : t.filename
                      , a = n._root ? function(t, e) {
                        t = ae(t).substr(1),
                        e = ae(e).substr(1);
                        for (var n = ce(t.split("/")), r = ce(e.split("/")), o = Math.min(n.length, r.length), i = o, s = 0; s < o; s++)
                            if (n[s] !== r[s]) {
                                i = s;
                                break
                            }
                        var a = [];
                        for (s = i; s < n.length; s++)
                            a.push("..");
                        return (a = a.concat(r.slice(i))).join("/")
                    }(n._root, s) : (r = se(s)[2],
                    e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)),
                    r);
                    t.filename = "app:///" + a
                }
                return t
            }
            ,
            e.root && (this._root = e.root),
            e.iteratee && (this._iteratee = e.iteratee)
        }
        return t.prototype.setupOnce = function(e, n) {
            e((function(e) {
                var r = n().getIntegration(t);
                return r ? r.process(e) : e
            }
            ))
        }
        ,
        t.prototype.process = function(t) {
            return t.exception && Array.isArray(t.exception.values) ? this._processExceptionsEvent(t) : t.stacktrace ? this._processStacktraceEvent(t) : t
        }
        ,
        t.prototype._processExceptionsEvent = function(t) {
            var e = this;
            try {
                return Object(c.a)(Object(c.a)({}, t), {
                    exception: Object(c.a)(Object(c.a)({}, t.exception), {
                        values: t.exception.values.map((function(t) {
                            return Object(c.a)(Object(c.a)({}, t), {
                                stacktrace: e._processStacktrace(t.stacktrace)
                            })
                        }
                        ))
                    })
                })
            } catch (e) {
                return t
            }
        }
        ,
        t.prototype._processStacktraceEvent = function(t) {
            try {
                return Object(c.a)(Object(c.a)({}, t), {
                    stacktrace: this._processStacktrace(t.stacktrace)
                })
            } catch (e) {
                return t
            }
        }
        ,
        t.prototype._processStacktrace = function(t) {
            var e = this;
            return Object(c.a)(Object(c.a)({}, t), {
                frames: t && t.frames && t.frames.map((function(t) {
                    return e._iteratee(t)
                }
                ))
            })
        }
        ,
        t.id = "RewriteFrames",
        t
    }();
    let le;
    le = self;
    var de = le;
    function pe(t, e, n, r) {
        return r = r || {},
        new Promise((o,i)=>{
            n = n || "POST";
            const s = new XMLHttpRequest;
            s.onload = function() {
                let t = s.responseText;
                try {
                    t = JSON.parse(t)
                } catch (t) {}
                if (200 === s.status)
                    o(t);
                else {
                    const e = t.detail || t;
                    i(e)
                }
            }
            ,
            s.onerror = function(e) {
                console.error("Surfly connection error", e),
                i(new Error(`Surfly connection error: ${n} ${t}`))
            }
            ,
            s.open(n, t, !0),
            r.withCredentials && (s.withCredentials = !0),
            s.setRequestHeader("Accept", "application/json"),
            e ? ("text/plain" === r.content_type ? s.overrideMimeType("text/plain") : (s.setRequestHeader("Content-Type", "application/json"),
            s.overrideMimeType("application/json")),
            s.send(JSON.stringify(e))) : s.send()
        }
        )
    }
    let fe = pe;
    function he() {
        return fe.apply(this, arguments)
    }
    var _e = n(3);
    function ye() {
        return document.cookie.split(/;\s*/).map((function(t) {
            const e = t.trim()
              , n = e.indexOf("=");
            let r, o = "";
            return n > 0 ? (r = e.slice(0, n),
            o = e.slice(n + 1)) : r = e,
            [r, o]
        }
        ))
    }
    let ge = ye;
    function me() {
        return ge.apply(this, arguments)
    }
    function ve(t, e) {
        const n = [];
        return t.forEach(t=>{
            const r = t[0]
              , o = t[1];
            e && e.length > 0 ? e.forEach(t=>{
                t.name === r && n.push({
                    name: r,
                    value: o,
                    path: t.path || "/",
                    domain: "." === t.domain[0] ? t.domain : null
                })
            }
            ) : n.push({
                name: r,
                value: o,
                path: "/"
            })
        }
        ),
        n
    }
    let be = ve;
    function we() {
        return be.apply(this, arguments)
    }
    function Se() {
        const t = [window.location.hostname]
          , e = /^www\.(.*)/.exec(window.location.hostname);
        e && t.push(e[1]);
        me().forEach((function(e) {
            t.forEach((function(t) {
                document.cookie = e[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + t
            }
            ))
        }
        ))
    }
    function Oe() {
        me().forEach((function(t) {
            document.cookie = t[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
        }
        ))
    }
    function Ee(t) {
        try {
            const e = sessionStorage.getItem(t);
            return JSON.parse(e)
        } catch (t) {
            return null
        }
    }
    function xe(t, e) {
        try {
            return sessionStorage.setItem(t, JSON.stringify(e))
        } catch (t) {
            return null
        }
    }
    function ke(t) {
        try {
            return sessionStorage.removeItem(t)
        } catch (t) {
            return null
        }
    }
    function je(t) {
        try {
            const e = localStorage.getItem(t);
            return JSON.parse(e)
        } catch (t) {
            return null
        }
    }
    function Te(t, e) {
        try {
            return localStorage.setItem(t, JSON.stringify(e))
        } catch (t) {
            return null
        }
    }
    function Re(t) {
        return new Blob([t],{
            type: "text/plain"
        }).size
    }
    function Ie() {
        const t = "surfly_storage_test";
        try {
            if (sessionStorage.setItem(t, "surfly"),
            localStorage.setItem(t, "surfly"),
            "surfly" === sessionStorage.getItem(t) && "surfly" === localStorage.getItem(t))
                return sessionStorage.removeItem(t),
                localStorage.removeItem(t),
                !0
        } catch (t) {}
        return !1
    }
    var Ae = n(29)
      , Pe = n.n(Ae);
    let Le, Ce = !1;
    function Ne(t) {
        return Ce && Le ? Le.t(t) : t
    }
    n(39);
    (function() {
        const t = de.navigator.userAgent.toLowerCase()
          , e = de.navigator.appName;
        "Microsoft Internet Explorer" === e || "Netscape" === e && t.indexOf("trident")
    }
    )(),
    Boolean(/Android/g.test(de.navigator.userAgent)),
    Boolean(de.navigator.userAgent.match(/Chrome/));
    const Ue = Boolean(de.navigator.userAgent.match(/Safari/)) && "Apple Computer, Inc." === de.navigator.vendor
      , We = Boolean(de.navigator.userAgent.match(/iPad|iPhone|iPod/));
    /Safari\//g.test(de.navigator.userAgent) && /Chrom/g.test(de.navigator.userAgent);
    const Fe = de.navigator.maxTouchPoints && de.navigator.maxTouchPoints > 2 && /MacIntel/.test(de.navigator.platform);
    We && 15 === function() {
        const t = /CPU( iPad| iPhone| iPod)? OS (\d*)_(\d*)/g.exec(navigator.userAgent);
        return {
            minor: We ? parseInt(t.pop()) : NaN,
            major: We ? parseInt(t.pop()) : NaN
        }
    }().major || (Fe || Ue) && de.navigator.userAgent.includes("Version/15."),
    Boolean(de.navigator.mediaDevices && de.navigator.mediaDevices.getUserMedia),
    de.navigator.userAgent.indexOf("Firefox");
    var Me;
    !function(t) {
        t.tablet = "tablet",
        t.mobile = "mobile",
        t.desktop = "desktop"
    }(Me || (Me = {}));
    var De = n(30)
      , Ye = n.n(De);
    function Be() {
        return de.mainWindow && de.mainWindow.surflyApiFrame ? de.mainWindow.surflyApiFrame : null
    }
    function qe(t) {
        t || (t = "surfly-invisible"),
        de.mainWindow && de.mainWindow.surflyApiFrame && (de.mainWindow.surflyApiFrame.className = t)
    }
    function He(t) {
        let e = document.querySelector("style#surfly-branding");
        if (!e)
            return e = document.createElement("style"),
            e.id = "surfly-branding",
            e.appendChild(document.createTextNode(`\n        .surfly-button {\n            background-color: ${t.branding_primary_color};\n            color:            ${t.branding_primary_fg_color};\n            fill:             ${t.branding_primary_fg_color};\n        }\n\n        .surfly-modal button, .surfly-modal .title {\n            background-color: ${t.branding_primary_color};\n            color:            ${t.branding_primary_fg_color};\n        }\n\n        .surfly-modal button:hover {\n            background-color: ${t.branding_secondary_color};\n            color:            ${t.branding_secondary_fg_color};\n        }\n\n        .surfly-modal button.cancel .spin {\n            border-color: #555;\n            border-top-color: ${t.branding_primary_color};\n        }\n\n        .surfly-modal button.accept .spin {\n            border-color: ${t.branding_secondary_color};\n            border-top-color: ${t.branding_primary_color};\n        }\n    `)),
            window.document.head.appendChild(e),
            e
    }
    function ze(t, e) {
        const n = document.querySelector(".surfly-modal")
          , r = !n;
        He(t);
        const o = window.document.createElement("div");
        o.classList.add("surfly-modal"),
        r && o.classList.add("fadein");
        const i = window.document.createElement("div");
        if (i.classList.add("content"),
        r && i.classList.add("easein"),
        o.appendChild(i),
        e.title) {
            const t = window.document.createElement("div");
            t.classList.add("title"),
            t.appendChild(window.document.createTextNode(e.title())),
            i.appendChild(t)
        }
        const s = window.document.createElement("div");
        if (s.classList.add("body"),
        i.appendChild(s),
        e.body) {
            const t = window.document.createElement("p");
            t.innerHTML = e.body(),
            s.appendChild(t)
        }
        const a = window.document.createElement("div");
        let c;
        return a.classList.add("buttons"),
        s.appendChild(a),
        e.cancel ? (c = window.document.createElement("button"),
        c.classList.add("cancel"),
        c.appendChild(window.document.createTextNode(e.cancel())),
        a.appendChild(c)) : (c = document.createElement("span"),
        c.className = "cancel surfly-popup-close",
        s.append(c)),
        e.accept && (c = window.document.createElement("button"),
        c.classList.add("accept"),
        c.appendChild(window.document.createTextNode(e.accept())),
        a.appendChild(c)),
        n ? n.parentNode.replaceChild(o, n) : window.document.body.appendChild(o),
        o
    }
    let $e = null;
    function Je(t) {
        if (t)
            return t.parentNode.removeChild(t),
            !1
    }
    function Ge(t) {
        if (!document.querySelector(".surfly-popup-iframe")) {
            const e = document.createElement("iframe");
            e.className = "surfly-popup-iframe",
            e.frameborder = 0,
            e.src = t;
            const n = document.createElement("div");
            n.className = "surfly-transparent-div",
            document.body.appendChild(n);
            const r = document.createElement("div");
            r.className = "surfly-popup-iframe-div",
            r.appendChild(e);
            const o = document.createElement("div");
            o.className = "surfly-popup-close",
            o.onclick = function() {
                Je(document.querySelector(".surfly-transparent-div")),
                Je(document.querySelector(".surfly-popup-iframe-div")),
                de.mainWindow.location.reload()
            }
            ,
            n.onclick = function() {
                Je(document.querySelector(".surfly-transparent-div")),
                Je(document.querySelector(".surfly-popup-iframe-div")),
                de.mainWindow.location.reload()
            }
            ,
            r.appendChild(o),
            document.body.appendChild(r)
        }
        qe("surfly-popup")
    }
    let Xe = Ge;
    function Ke(t, e) {
        const n = de.open(void 0, "_blank");
        n ? t(n) : e(new Error("Could not open a new window"))
    }
    function Ve(t) {
        return new Promise((e,n)=>{
            let r;
            t._api.settings.confirm_session_start || (r = de.open(void 0, "_blank")),
            r ? e(r) : (vt("Popup window blocked", "info"),
            t ? t.show().then(()=>{
                t.hide(),
                Ke(e, n)
            }
            ).catch(t=>{
                n(t)
            }
            ) : Ke(e, n))
        }
        )
    }
    let Ze = Ve;
    function Qe() {
        return Ze.apply(this, arguments)
    }
    function tn(t) {
        this.name = "ModalDismissed",
        this.message = t,
        this.stack = (new Error).stack
    }
    tn.prototype = new Error;
    class en {
        constructor(t, e) {
            this._api = t,
            this._node = null,
            this._click_listeners = [],
            this._ignore_clickout = !1,
            this._localize = {
                cancel: ()=>Ne("Cancel"),
                title: ()=>Ne("Start session")
            }
        }
        show() {
            return this._node = this._node || ze(this._api.settings, this._localize),
            new Promise((t,e)=>{
                const n = Be()
                  , r = this._node.querySelector(".content")
                  , o = this._node.querySelector("button.cancel") || this._node.querySelector(".surfly-popup-close")
                  , i = this._node.querySelector("button.accept");
                n.className = "surfly-popup",
                this._listen_click(r, t=>t.stopPropagation()),
                this._ignore_clickout || this._listen_click(this._node, t=>{
                    t.stopPropagation(),
                    o && this.spin(o),
                    e(new tn("User clicked out of modal"))
                }
                ),
                o && this._listen_click(o, t=>{
                    t.stopPropagation(),
                    this.spin(o),
                    e(new tn("Cancel button pressed"))
                }
                ),
                i && this._listen_click(i, e=>{
                    e.stopPropagation(),
                    this.spin(i),
                    t()
                }
                )
            }
            )
        }
        hide() {
            if (this._node) {
                this._node.parentNode && this._node.parentNode.removeChild(this._node),
                this._node = null;
                Be().className = "surfly-invisible",
                this._remove_listeners()
            }
        }
        release() {
            this._node = null
        }
        spin(t) {
            t.style.cssText = `width: ${t.clientWidth}px; height: ${t.clientHeight}px;`,
            t.innerHTML = "",
            t.appendChild(function() {
                const t = document.createElement("div");
                return t.classList.add("spin"),
                t
            }())
        }
        _listen_click(t, e) {
            this._click_listeners.push([t, e]),
            t.addEventListener("click", e)
        }
        _remove_listeners() {
            for (; this._click_listeners.length; ) {
                const [t,e] = this._click_listeners.pop();
                t.removeEventListener("click", e)
            }
        }
    }
    class nn extends en {
        constructor(t) {
            super(t, null),
            this._localize = {
                body: ()=>"<p>" + Ne("You’ve requested assistance and a secure co-browsing session will be prepared to facilitate this request.") + "</p><p>" + Ne("The agent that will assist you will not be able to see any open tabs in your browser or sensitive information such as passwords.") + "</p><p>" + Ne("Do you want to proceed to connect with the agent?") + "</p>",
                accept: ()=>Ne("Connect"),
                cancel: null,
                title: null
            }
        }
        show() {
            return this._node = this._node || ze(this._api.settings, this._localize),
            super.show()
        }
    }
    class rn extends en {
        constructor(t) {
            super(t, null),
            this._ignore_clickout = !0,
            this._localize = {
                body: ()=>Ne("Your support pin is:") + '<p class="pin"></p>' + Ne("Please wait until a support agent joins your session"),
                cancel: ()=>Ne("End session")
            },
            this.pin = "…"
        }
        show() {
            return this._node = this._node || ze(this._api.settings, this._localize),
            this._node.querySelector(".pin").innerHTML = this.pin,
            super.show()
        }
    }
    class on extends en {
        constructor(t) {
            super(t, null),
            this._ignore_clickout = !0,
            this._localize = {
                body: ()=>Ne("Cobrowsing session is opened in a separate tab.") + " " + Ne("Please do not close this window while it is active."),
                cancel: ()=>Ne("End session")
            }
        }
    }
    function sn(t, e) {
        t.clear(),
        Object.keys(e).forEach((function(n) {
            t.setItem(n, e[n])
        }
        ))
    }
    const an = {
        localStorage: function(t) {
            Ie() ? sn(window.mainWindow.localStorage, t.value) : console.error("webstorage is not available")
        },
        sessionStorage: function(t) {
            Ie() ? sn(window.mainWindow.sessionStorage, t.value) : console.error("webstorage is not available")
        },
        scroll: function(t, e) {
            let n = e.body;
            const r = t.value;
            n && n && (n.scrollLeft = r.left,
            n.scrollTop = r.top,
            n = null)
        },
        input: function t(e, n) {
            const r = dn(e.identifier, n);
            r ? (r.value !== e.value && (r.value = e.value),
            r.value = e.value,
            r.checked = e.checked,
            r.disabled = e.disabled,
            r.selected = e.selected) : Date.now() - window.mainWindow.performance.timing.domContentLoadedEventEnd < 15e3 && setTimeout((function() {
                t(e, n)
            }
            ), 250)
        },
        contentEditable: function t(e, n) {
            const r = dn(e.identifier, n);
            r ? r.innerHTML = e.value : Date.now() - window.mainWindow.performance.timing.domContentLoadedEventEnd < 15e3 && setTimeout((function() {
                t(e, n)
            }
            ), 250)
        },
        iframe: function t(e, n) {
            const r = dn(e.identifier, n);
            r ? e.current_states.forEach(t=>{
                cn(t, r.contentDocument || r.contentWindow.document)
            }
            ) : Date.now() - window.mainWindow.performance.timing.domContentLoadedEventEnd < 15e3 && setTimeout((function() {
                t(e, n)
            }
            ), 250)
        }
    };
    function cn(t, e) {
        if (e || (e = window.mainWindow.document),
        an.hasOwnProperty(t.type))
            try {
                an[t.type](t, e)
            } catch (e) {
                console.warn("Data chunk was not restored:", t, e)
            }
        else
            console.error("Cannot restore data", t)
    }
    function un(t) {
        return {
            type: "iframe",
            identifier: pn(t),
            current_states: ln(t.contentDocument || t.contentWindow.document)
        }
    }
    function ln(t) {
        return [].concat(function(t) {
            const e = []
              , n = t.querySelectorAll("input, select, textarea");
            for (let t = n.length; t--; ) {
                const r = n[t]
                  , o = pn(r);
                o ? e.push({
                    type: "input",
                    value: r.value,
                    checked: r.checked,
                    disabled: r.disabled,
                    selected: r.selected,
                    identifier: o
                }) : console.log("Couldn't unambiguously transfer input:", r)
            }
            return e
        }(t), function(t) {
            const e = []
              , n = t.querySelectorAll("[contentEditable]");
            for (let t = n.length; t--; ) {
                const r = n[t];
                if ("true" !== r.contentEditable) {
                    console.log("ContentEditable not enabled, skip", r);
                    continue
                }
                const o = pn(r);
                o ? e.push({
                    type: "contentEditable",
                    value: r.innerHTML,
                    identifier: o
                }) : console.log("Couldn't unambiguously transfer input:", r)
            }
            return e
        }(t), function(t) {
            const e = []
              , n = window.mainWindow.document.body;
            if (n) {
                const t = n.scrollLeft
                  , r = n.scrollTop;
                e.push({
                    type: "scroll",
                    value: {
                        top: r,
                        left: t
                    }
                })
            }
            return e
        }())
    }
    function dn(t, e) {
        return e.evaluate(t, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    }
    function pn(t) {
        return t && t.id ? '//*[@id="' + t.id + '"]' : function(t) {
            const e = [];
            for (; t && 1 === t.nodeType; t = t.parentNode) {
                let n = 0;
                for (let e = t.previousSibling; e; e = e.previousSibling)
                    e.nodeType !== Node.DOCUMENT_TYPE_NODE && e.nodeName === t.nodeName && ++n;
                const r = t.nodeName.toLowerCase()
                  , o = n ? "[" + (n + 1) + "]" : "";
                e.splice(0, 0, r + o)
            }
            return e.length ? "/" + e.join("/") : null
        }(t)
    }
    function fn(t) {
        const e = [];
        try {
            const n = yn(window.mainWindow.localStorage);
            Object.keys(n).length > 0 && e.push({
                type: "localStorage",
                value: n
            }),
            t && window.mainWindow.localStorage.clear()
        } catch (t) {}
        try {
            const n = yn(window.mainWindow.sessionStorage);
            Object.keys(n).length > 0 && e.push({
                type: "sessionStorage",
                value: n
            }),
            t && window.mainWindow.sessionStorage.clear()
        } catch (t) {}
        return e
    }
    let hn = fn;
    function _n() {
        return hn.apply(this, arguments)
    }
    function yn(t) {
        try {
            const e = Object.keys(t)
              , n = {};
            return e.forEach((function(e) {
                0 !== e.indexOf("surfly_") && (n[e] = t[e])
            }
            )),
            n
        } catch (t) {
            return null
        }
    }
    let gn = !1
      , mn = !1;
    function vn(t) {
        const e = de.mainWindow.location;
        t = t.replace(/^(.*?)(#surflystart)?$/, "$1");
        const n = Object(_e.c)(e.href)
          , r = Object(_e.c)(t)
          , o = n == r && r !== t;
        e.href = t,
        o && e.reload()
    }
    const bn = {
        transfer_state: function(t) {
            de.mainWindow.__surfly && t.params.srcOrigin === de.mainWindow.location.origin && t.params.state.forEach(t=>cn(t))
        },
        restore_cookies: function(t) {
            if (!de.mainWindow.__surfly) {
                console.log("Restore cookies requested", t);
                const e = Object(_e.g)(de.mainWindow.location.host);
                t.params.srcOrigin === de.mainWindow.location.origin || t.params.srcOrigin.substr(-e.length - 1) === "." + e ? (this.settings.cookie_transfer_enabled && (this._restoreCookies(t.params.cookies),
                t.params.storage.forEach(t=>cn(t))),
                gn = !0,
                this.settings.cookie_transfer_proxying && !mn || this._sendApiMessage("widget_event", {
                    event_type: "cookie_transfer_done"
                })) : console.log("Cookie restoring failed: calling origin is different:", t.params.srcOrigin)
            }
        },
        end_session: function(t) {
            de.mainWindow.__surfly || this.end(t.params.redirect)
        }
    }
      , wn = {
        download: function(t) {
            this._emit("file_download", {
                url: t.params.url,
                filename: t.params.filename
            })
        },
        tabframe_ready: function() {
            this._started = !0,
            this._startTimeout && (clearTimeout(this._startTimeout),
            this._startTimeout = null),
            this._openTs && bt(t=>{
                t.setTags({
                    cf_load_time: (new Date - this._openTs) / 1e3
                })
            }
            ),
            this.settings.verbose_console && console.log(`Session ${this._sessionId} started`),
            this._isLeader && this._emitter.listeners("session_pre_end").length > 0 && this._sendApiMessage("widget_event", {
                event_type: "pre_end_subscribed"
            }),
            this._emit("session_started", {})
        },
        error: function(t) {
            this._emit("error", {
                reason: t.params.reason
            })
        },
        control: function(t) {
            this._emit("control", {
                to: t.params.to,
                gained: t.params.gain,
                myIndex: t.params.my_index
            })
        },
        about_to_end: function(t) {
            if (this.settings.cookie_transfer_enabled)
                if (de.mainWindow.__surfly) {
                    let t = [];
                    const e = _n(!1);
                    this.settings.cookie_transfer_proxying || (this._sendApiMessage("widget_event", {
                        event_type: "wait_for_cookie_transfer"
                    }),
                    t = we(me(), this.settings.cookie_transfer_scopes)),
                    this._sendApiMessage("widget_message", {
                        srcOrigin: de.mainWindow.location.origin,
                        targetOrigin: "*",
                        target: "widget",
                        msg: "restore_cookies",
                        cookies: t,
                        storage: e
                    })
                } else
                    this.settings.cookie_transfer_proxying && (this._sendApiMessage("widget_event", {
                        event_type: "wait_for_cookie_transfer"
                    }),
                    this._cookieTransferFullRev().then(()=>{
                        mn = !0,
                        gn ? this._sendApiMessage("widget_event", {
                            event_type: "cookie_transfer_done"
                        }) : setTimeout(()=>{
                            gn || console.error("Webstorage contents was not received, probably inner widget is not available"),
                            this._sendApiMessage("widget_event", {
                                event_type: "cookie_transfer_done"
                            })
                        }
                        , 1e3)
                    }
                    ))
        },
        session_ended: function(t) {
            if (wt({
                category: "JS API",
                message: "session_ended postMsg",
                data: {
                    msg: JSON.stringify(t)
                },
                level: B.Info
            }),
            this._isLeader ? vt("Leader ended", "info") : vt("Follower ended", "info"),
            this._ended = !0,
            de.mainWindow.__surfly)
                return this.settings.cookie_transfer_scopes.forEach(t=>{
                    const e = ";path=" + (t.path || "/");
                    let n = "";
                    t.domain && (n = ";domain=" + t.domain),
                    document.cookie = t.name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + e + n
                }
                ),
                Se(),
                Oe(),
                void _n(!0);
            ke("surfly_restore_session");
            let e = null;
            t.params.redirect && Object(_e.b)(t.params.redirect) && (e = t.params.redirect);
            let n = null;
            t.params.final_location && Object(_e.b)(t.params.final_location) && (n = t.params.final_location),
            this._emit("session_ended", {
                final_location: n
            }),
            this._halt(),
            this.settings.end_of_session_popup_url && this._answered ? function() {
                We && de.mainWindow.document.body.classList.remove("surfly-hide-ios"),
                Xe.apply(this, arguments)
            }(this.settings.end_of_session_popup_url) : this._isLeader ? e && "leader_ended" === t.params.reason ? vn(e) : this.settings.leader_redirect_url ? vn(this.settings.leader_redirect_url) : this.settings.disable_end_redirect ? (this._api._sessionStartModal && this._api._sessionStartModal.hide(),
            this._api._pinModal && this._api._pinModal.hide(),
            this._api._thirdPartyCookiesModal && this._api._thirdPartyCookiesModal.hide()) : n ? vn(n) : this.settings.cookie_transfer_enabled && de.mainWindow.location.reload() : e && "follower_ended" === t.params.reason ? vn(e) : this.settings.follower_redirect_url ? vn(this.settings.follower_redirect_url) : !this.settings.disable_end_redirect && t.params.final_location && Object(_e.b)(t.params.final_location) && vn(t.params.final_location)
        },
        session_ended_soft: function(t) {
            wt({
                category: "JS API",
                message: "session_ended_soft postMsg",
                data: {
                    msg: JSON.stringify(t)
                },
                level: B.Info
            }),
            this._emit("session_ended_soft", {}),
            this._ended_soft = !0,
            ke("surfly_restore_session")
        },
        viewer_joined: function(t) {
            de.mainWindow.__surfly || this._showWindow(),
            this._answered = !0,
            this._emit("viewer_joined", {
                count: t.params.count,
                userData: t.params.userdata,
                clientIndex: t.params.origin
            })
        },
        viewer_left: function(t) {
            this._emit("viewer_left", {
                count: t.params.count,
                userData: t.params.userdata,
                clientIndex: t.params.origin
            })
        },
        page_ready: function() {
            this._isLeader || this._loaded || (this._loaded = !0,
            this._emit("session_loaded"),
            this._openTs && bt(t=>{
                t.setTags({
                    load_time: (new Date - this._openTs) / 1e3
                })
            }
            ),
            vt("Follower loaded", "info"))
        },
        session_pre_end: function(t) {
            this._emit("session_pre_end", {
                final_location: t.params.final_location
            })
        },
        session_paused: function() {
            this._paused = !0,
            this._emit("session_paused")
        },
        session_resumed: function() {
            this._paused = !1,
            this._emit("session_resumed")
        }
    }
      , Sn = {
        relocated: function(t) {
            this._emit("relocated", {
                url: t.params.url
            }),
            this._loaded || (this._loaded = !0,
            this._emit("session_loaded"),
            this._openTs && bt(t=>{
                t.setTags({
                    load_time: (new Date - this._openTs) / 1e3
                })
            }
            ),
            vt("Leader loaded", "info"))
        },
        relocate_start: function(t) {
            this._emit("relocate_start", {
                url: t.params.url
            })
        },
        user_activity: function() {
            this._emit("user_activity")
        },
        widget_ready: function(t) {
            de.mainWindow.__surfly || (this._otherSideReady = !0,
            this._transferState(),
            this._messageBuffer.forEach(t=>{
                this._sendApiMessage("widget_message", t)
            }
            ))
        }
    }
      , On = {
        widget_message: function(t) {
            "*" !== t.params.targetOrigin && t.params.targetOrigin !== de.mainWindow.location.origin || ("user" === t.params.target ? this._emit("message", {
                origin: t.params.srcOrigin,
                data: t.params.msg
            }) : "widget" === t.params.target && (bn.hasOwnProperty(t.params.msg) ? bn[t.params.msg].call(this, t) : console.log("Got unknown widget message", t)))
        },
        cobro_event: function(t) {
            wn.hasOwnProperty(t.params.event_type) && wn[t.params.event_type].call(this, t)
        },
        widget_event: function(t) {
            Sn.hasOwnProperty(t.params.event_type) && Sn[t.params.event_type].call(this, t)
        }
    };
    function En(t, e, n) {
        if (!n) {
            const t = je("surfly_3rdcookies");
            if (null !== t)
                return Promise.resolve(t)
        }
        return new Promise((n,r)=>{
            let o = t + "/3rdpartycookietest/";
            e && (o += "?show_loader=1");
            const i = de.document.createElement("iframe");
            i.src = o,
            i.style.display = "none";
            const s = function(e) {
                e.origin === t && e.data.hasOwnProperty("cookies_enabled") && (Te("surfly_3rdcookies", e.data.cookies_enabled),
                e.data.cookies_enabled || console.error("3rd-party cookies disabled"),
                window.removeEventListener("message", s),
                i.parentNode.removeChild(i),
                n(e.data.cookies_enabled))
            };
            window.addEventListener("message", s),
            setTimeout((function() {
                window.document.body.appendChild(i)
            }
            ), 0)
        }
        )
    }
    function xn(t, e, n) {
        return new Promise((r,o)=>{
            const i = o=>{
                o.source === t && (t.opener.removeEventListener("message", i),
                En(e, n, !0).then(t=>{
                    r(t)
                }
                ))
            }
            ;
            t.opener.addEventListener("message", i);
            let s = e + "/3rdpartycookietest/";
            n && (s += "?show_loader=1"),
            t.location = s
        }
        )
    }
    let kn = xn;
    function jn() {
        return kn.apply(this, arguments)
    }
    const Tn = ["file_download", "session_created", "session_loaded", "session_queued", "session_started", "viewer_joined", "viewer_left", "session_pre_end", "session_ended", "session_ended_soft", "session_paused", "session_resumed", "message", "user_activity", "relocated", "error", "control"]
      , Rn = ["file_download", "session_created", "session_loaded", "session_queued", "session_started", "viewer_joined", "viewer_left", "session_pre_end", "session_ended", "session_ended_soft", "session_paused", "session_resumed", "relocated", "error", "control"]
      , In = ["agent_status", "session_restored"];
    In.concat(Tn);
    var An = n(27);
    class Pn extends An.EventEmitter {
        __emitToSubscription(t, e, ...n) {
            try {
                t.listener.apply(t.context, n)
            } catch (t) {
                console.error(`Exception in ${e} event handler`, t)
            }
        }
    }
    class Ln {
        constructor(t, e, n, r) {
            if (this._answered = !1,
            this._api = t,
            this._start_initiated = !1,
            this._create_initiated = !1,
            this._cobroServerName = null,
            this._cookieRestoreUrls = [],
            this._cookies_forwarded = !1,
            this.queued = !1,
            this._restore_initiated = !1,
            this._started = !1,
            this._loaded = !1,
            this._created = !1,
            this._paused = !1,
            this._ended = !1,
            this._ended_soft = !1,
            this._isLeader = null,
            this._sessionSettings = e,
            this.leaderLink = null,
            this.followerLink = null,
            this.pin = null,
            this.node = null,
            this.window = null,
            this._pipelineFailed = !1,
            this._pipeline = Promise.resolve("init"),
            this._state_transferred = !1,
            this._sessionId = r || null,
            this._formattedId = null,
            this._otherSideReady = !1,
            this._messageBuffer = [],
            this._startTimeout = null,
            this._preferred_server_id = "",
            this._openTs = null,
            this._tryCookieTrick = We || Ue || Fe,
            this._emitter = new Pn,
            r || n) {
                this._restore_initiated = !0,
                this._created = !0,
                this._create_initiated = !0;
                const t = r || this._extractToken(n);
                "m" === t[0] ? this.leaderLink = n || de.mainWindow.SURFLY_COBRO_ORIGIN + "/" + t : this.followerLink = n,
                this._schedule(this._restoreSession.bind(this, t))
            }
            de.mainWindow.addEventListener("message", t=>{
                (t.origin === de.mainWindow.SURFLY_COBRO_ORIGIN && !de.mainWindow.__surfly && t.source && t.source === this.window || t.origin === de.mainWindow.SURFLY_COBRO_ORIGIN && de.mainWindow.__surfly && t.source === de.mainWindow.__surfly_CF._surfly_parent) && On.hasOwnProperty(t.data.type) && On[t.data.type].call(this, t.data)
            }
            )
        }
        _extractToken(t) {
            return Object(_e.f)(t).pathname.split("/")[1]
        }
        get settings() {
            return new Proxy({
                ...this._api.settings,
                ...this._sessionSettings
            },{
                set: (t,e,n)=>(this._sessionSettings[e] = n,
                !0)
            })
        }
        get _settings() {
            return vt(`[deprecation][jsapi][session][widget_key=${this.settings.widget_key}] _settings getter usage detected`, "warning"),
            this.settings
        }
        set _settings(t) {
            vt(`[deprecation][jsapi][session][widget_key=${this.settings.widget_key}] _settings setter usage detected`, "warning"),
            this._sessionSettings = t
        }
        get started() {
            return this._started
        }
        get ended() {
            return this._ended
        }
        get ended_soft() {
            return this._ended_soft
        }
        get paused() {
            return this._paused
        }
        get created() {
            return this._created
        }
        on(t, e) {
            return this._emitter.addListener(t, e.bind(this, this)),
            this._isLeader && this.started && "session_pre_end" === t && this._sendApiMessage("widget_event", {
                event_type: "pre_end_subscribed"
            }),
            this
        }
        _emit(t, e) {
            Rn.indexOf(t) >= 0 && wt({
                category: "JS API",
                message: "session event",
                data: {
                    eventName: t,
                    eventData: JSON.stringify(e)
                },
                level: B.Info
            }),
            "error" === t && console.error("Surfly JS API", e),
            this._emitter.emit(t, e)
        }
        _schedule(t) {
            this._pipelineFailed ? console.error("Surfly cannot proceed due to an error") : this._pipeline = this._pipeline.then(t).catch(t=>{
                throw this._pipelineFailed || (this._pipelineFailed = !0,
                mt(new Error(t)),
                console.error(t)),
                t
            }
            )
        }
        _cookieTransferFullFwd() {
            if (!this.settings.cookie_transfer_enabled || !this.settings.cookie_transfer_proxying)
                return Promise.resolve(!1);
            if (wt({
                category: "JS API",
                message: "SC started",
                level: B.Info
            }),
            !this.settings.cookie_transfer_urls || 0 === this.settings.cookie_transfer_urls.length || !this.settings.cookie_transfer_scopes || 0 === this.settings.cookie_transfer_scopes.length)
                return console.error("You must specify cookie_transfer_urls and cookie_transfer_scopes in order to use full session continuation"),
                Promise.resolve(!1);
            const t = this.settings.cookie_transfer_urls.filter(t=>{
                const e = Object(_e.f)(t);
                return (Object(_e.a)(e.hostname, de.mainWindow.location.hostname).match(/\./g) || []).length >= 2
            }
            );
            if (0 === t.length)
                return console.warn("No suitable continuation points found"),
                Promise.resolve(!1);
            return he(t[0] + "init/", null, "GET", {
                withCredentials: !0
            }).then(e=>{
                const n = [];
                return t.forEach(t=>{
                    n.push(he(t + "store/", this.settings.cookie_transfer_scopes, "POST", {
                        withCredentials: !0
                    }))
                }
                ),
                Promise.all(n).then(()=>he(de.mainWindow.SURFLY_COBRO_ORIGIN + "/v2/servers/_closest/", null, "GET").then(t=>{
                    this._preferred_server_id = t
                }
                ).catch(()=>{}
                )).then(()=>(wt({
                    category: "JS API",
                    message: "SC finished",
                    level: B.Info
                }),
                !0))
            }
            ).catch(t=>(console.error("Cookie transfer error:", t),
            !1))
        }
        _cookieTransferFullRev() {
            wt({
                category: "JS API",
                message: "Reverse SC started",
                level: B.Info
            });
            const t = [];
            return this._cookieRestoreUrls.forEach(e=>{
                const n = new Promise((t,n)=>{
                    const r = de.mainWindow.document.createElement("iframe");
                    r.style.cssText = "display:none";
                    const o = function(e) {
                        e.source === r.contentWindow && e.data.ready && (de.mainWindow.removeEventListener("message", o),
                        t())
                    };
                    de.mainWindow.addEventListener("message", o),
                    de.mainWindow.document.body.appendChild(r),
                    r.src = e
                }
                );
                t.push(n)
            }
            ),
            Promise.all(t)
        }
        _transferState() {
            if (!de.mainWindow.__surfly && !this._state_transferred) {
                this._state_transferred = !0,
                xe("surfly_state_transferred_" + this._sessionId, !0);
                const t = function() {
                    const t = ln(window.mainWindow.document)
                      , e = function(t) {
                        const e = []
                          , n = t.querySelectorAll("iframe");
                        for (const t in n)
                            if (n[t])
                                try {
                                    const r = n[t];
                                    (r.contentDocument || r.contentWindow.document).body.innerHTML,
                                    e.push(r)
                                } catch (t) {
                                    continue
                                }
                        return e
                    }(window.mainWindow.document);
                    for (const n in e)
                        if (e[n]) {
                            const r = un(e[n]);
                            t.push(r)
                        }
                    return t
                }();
                this._sendApiMessage("widget_message", {
                    target: "widget",
                    srcOrigin: de.mainWindow.location.origin,
                    targetOrigin: de.mainWindow.location.origin,
                    msg: "transfer_state",
                    state: t
                })
            }
        }
        _restoreCookies(t) {
            this.settings.cookie_transfer_enabled && !this.settings.cookie_transfer_proxying ? (!function(t, e=!0, n=!0) {
                t && t.length > 0 && (n && Se(),
                e && Oe(),
                t.forEach((function(t) {
                    const e = ";path=" + (t.path || "/");
                    let n = "";
                    t.expires && (n = ";expires=" + t.expires);
                    let r = "";
                    "domain"in t ? null !== t.domain && (r = ";domain=" + t.domain) : r = ";domain=." + Object(_e.g)(window.location.hostname),
                    document.cookie = t.name + "=" + t.value + n + e + r
                }
                )))
            }(t),
            this.settings.verbose_console && console.log("Cookies set")) : this.settings.verbose_console && console.log("Soft session continuation is disabled")
        }
        _createCall(t) {
            const e = this._cookieTransferFullFwd()
              , n = Object.assign({
                url: de.mainWindow.location.href,
                ...this._api._userSettings,
                ...this._sessionSettings
            });
            n.cookies = [],
            n.webstorage = [],
            this.settings.cookie_transfer_enabled && (this.settings.cookie_transfer_proxying || (n.cookies = we(me(), this.settings.cookie_transfer_scopes),
            Se()),
            n.webstorage = _n());
            const r = Re(JSON.stringify(n.webstorage))
              , o = Re(JSON.stringify(n.cookies));
            return bt(t=>{
                t.setTags({
                    storage_size: r,
                    cookies_size: o
                })
            }
            ),
            r > 5e6 && (n.webstorage = [],
            console.error("Webstorage content is too large"),
            vt("Webstorage too large", "warning")),
            o > 5e6 && (n.cookies = [],
            console.error("Cookies are too large, consider using cookie_transfer_scopes"),
            vt("Cookies too large", "warning")),
            this._state_transferred = !1,
            t = t || {},
            n.meta = JSON.stringify(t),
            e.then(t=>{
                let e;
                const r = `${de.mainWindow.SURFLY_COBRO_ORIGIN}/v2/sessions/?api_key=${this.settings.widget_key}`;
                return e = t ? "/surfly_cookie_transfer/create/?api_key=" + this.settings.widget_key : r,
                n.preferred_server_id = this._preferred_server_id,
                he(e, n, "POST", {
                    content_type: "text/plain"
                }).then(e=>(t && (this._cookies_forwarded = !0),
                e), t=>(this._emit("error", {
                    reason: "create_failed",
                    details: `Session continuation failed: ${t.message}. Trying to start a session without transferring cookies`
                }),
                he(r, n, "POST", {
                    content_type: "text/plain"
                }))).catch(t=>{
                    throw this._emit("error", {
                        reason: "create_failed",
                        details: t.message
                    }),
                    t
                }
                )
            }
            ).then(t=>{
                this.leaderLink = t.leader_link,
                this.followerLink = t.viewer_link,
                this.pin = t.pin,
                this._cobroServerName = t.cobro_server_name,
                this._sessionId = t.id,
                this._formattedId = t.formatted_id,
                this.queued = !0,
                this._state_transferred = Ee("surfly_state_transferred_" + this._sessionId) || !1,
                this._created = !0,
                this._cookieRestoreUrls = t.init_restore_urls || [],
                xe("surfly_init_restore_urls_" + this._sessionId, this._cookieRestoreUrls);
                window.document.querySelector("#surfly-splash") && (window.document.getElementById("surfly-qpin").textContent = " - " + Ne("Your Queue PIN is") + " " + this.pin),
                this._emit("session_created", {}),
                this._emit("session_queued", {}),
                this._emitter.listeners("session_queued").length > 0 && vt("Expects session_queued event", "info"),
                bt(t=>{
                    t.setTag("sessionId", this._sessionId),
                    t.setExtra("settings", this.settings)
                }
                )
            }
            )
        }
        _restoreSession(t) {
            let e = de.mainWindow.SURFLY_COBRO_ORIGIN + "/v2/sessions/" + t;
            return "widget_key"in this.settings && (e += "/?api_key=" + this.settings.widget_key),
            he(e, null, "GET").then(e=>{
                this.settings.verbose_console && console.log("Session restored " + t),
                this._ended = Boolean(e.duration),
                this.followerLink = e.viewer_link,
                this._cobroServerName = e.cobro_server_name,
                this._sessionId = e.session_id,
                this._formattedId = e.formatted_id,
                this.queued = e.queued,
                this._cookieRestoreUrls = Ee("surfly_init_restore_urls_" + this._sessionId) || [],
                this.leaderLink = this.leaderLink || Ee("surfly_leader_link_" + this._sessionId),
                this._state_transferred = Ee("surfly_state_transferred_" + this._sessionId) || !1,
                this._sessionSettings = Object.assign(e.options, {
                    widget_key: this.settings.widget_key
                }),
                this.pin = e.pin,
                de.mainWindow.__surfly && (this._started = !0,
                this._otherSideReady = !0,
                this._emitter.listeners("session_pre_end").length > 0 && this._sendApiMessage("widget_event", {
                    event_type: "pre_end_subscribed"
                }),
                this._sendApiMessage("widget_event", {
                    event_type: "widget_ready"
                })),
                this._emit("session_created", {})
            }
            )
        }
        create() {
            return de.mainWindow.__surfly ? (console.error("SurflySession.create() is not available under Surfly session"),
            this) : this._create_initiated || this.created || this._restore_initiated ? (console.log("Session already initialized, SurflySession.create() does nothing"),
            this) : this._api._widgetKeyProvided("create a new session (without a link or session ID)") ? (this._create_initiated = !0,
            this._schedule(this._createCall.bind(this)),
            this) : this
        }
        _openIframe(t) {
            if (this._nodeSelector)
                this.node = de.mainWindow.document.querySelector(this._nodeSelector),
                this.node && this.node.contentWindow || console.error("Could not find an iframe by CSS selector:", this._nodeSelector),
                this.window = this.node.contentWindow;
            else {
                this.node && this.node.parentNode.removeChild(this.node);
                const t = de.mainWindow.document.createElement("iframe");
                t.id = "surfly-iframe",
                t.name = "surfly-iframe",
                t.classList.add("surfly-ignore"),
                t.style.cssText = "display:block; background-color:rgb(255, 255, 255);\n                height:100%; width:100%;\n                left:99999999px;\n                position:fixed;\n                top:0px;\n                z-index:2147483547;\n                visibility: initial;\n                border:0",
                de.mainWindow.document.body.appendChild(t),
                this.node = t,
                this.window = t.contentWindow
            }
            this.node.allow = `microphone ${de.mainWindow.SURFLY_COBRO_ORIGIN}; camera ${de.mainWindow.SURFLY_COBRO_ORIGIN}; autoplay`,
            t()
        }
        _openWindow(t) {
            this.settings.confirm_session_start ? this._handleThirdPartyCookiesTrickResult(this._api._features["3rdcookies"], t) : this._api._features["3rdcookies"] ? this._openIframe(t) : (this.node = null,
            this.window && this.window.close(),
            Qe(this._api._sessionStartModal).then(t=>(this.window = t,
            jn(t, de.mainWindow.SURFLY_COBRO_ORIGIN, !this.settings.ui_off && this.settings.show_loading_screen))).then(e=>{
                this._api._features["3rdcookies"] = e,
                this._handleThirdPartyCookiesTrickResult(e, t)
            }
            ))
        }
        _handleThirdPartyCookiesTrickResult(t, e) {
            t ? (vt("3rd-party cookies trick succeeded", "info"),
            this.window && (this.window.close(),
            this.window = null),
            this._openIframe(e)) : this.settings.only_embedded_sessions || this._nodeSelector ? (this.window && (this.window.close(),
            this.window = null),
            console.error("3rd-party cookies are disabled, cannot start a session in an iframe.")) : (console.log("3rd-party cookies are disabled, opening session in a separate tab"),
            vt("3rd-party cookies trick failed", "info"),
            this._api._thirdPartyCookiesModal.show().catch(()=>this.end()),
            e())
        }
        _showWindow() {
            this._nodeSelector || this.node && (this.node.style.left = "0px",
            null === $e && ($e = de.mainWindow.document.documentElement.style.overflow),
            de.mainWindow.document.documentElement.style.overflow = "hidden",
            We && de.mainWindow.document.body.classList.add("surfly-hide-ios"))
        }
        _openLeader(t) {
            if (!this.leaderLink)
                throw new Error("Cannot open a leader window without a leader link");
            let e = "";
            const n = Object(_e.f)(this.leaderLink);
            (t = t || Object(_e.e)(n.search)) && (e = Object(_e.d)(t));
            let r = n.protocol + "//" + n.host + n.pathname + e;
            this.settings.cookie_transfer_enabled && this.settings.cookie_transfer_proxying && (this._cookies_forwarded ? r = "/surfly_cookie_transfer/start/" + this._extractToken(this.leaderLink) + e : (console.error("There was a problem with cookie transfer, session continuation skipped"),
            vt("Cookie transfer failure", "warning"))),
            this.window.location = r,
            this.settings.hide_until_agent_joins || this._showWindow(),
            this.window.focus(),
            this._isLeader = !0,
            wt({
                category: "JS API",
                message: "Leader started",
                data: t,
                level: B.Info
            }),
            this._setStartTimeout()
        }
        _openFollower(t) {
            if (!this.followerLink)
                throw new Error("Cannot open a follower window without a follower link");
            let e = "";
            const n = Object(_e.f)(this.followerLink);
            (t = t || Object(_e.e)(n.search)) && (e = Object(_e.d)(t)),
            this._showWindow(),
            this.window.location = n.protocol + "//" + n.host + n.pathname + e,
            this.window.focus(),
            this._isLeader = !1,
            vt("Follower started", "info"),
            this._setStartTimeout()
        }
        _setStartTimeout() {
            this._openTs = new Date,
            this._startTimeout && de.clearTimeout(this._startTimeout),
            this._startTimeout = de.setTimeout(()=>{
                vt("Session did not start within 20000 ms", "warning"),
                console.warn("Session did not start within 20000 ms"),
                this._startTimeout = null
            }
            , 2e4)
        }
        _attachListeners() {
            de.mainWindow.__surfly || this._nodeSelector || this.settings.auto_restore && this._isLeader && de.mainWindow.addEventListener("unload", ()=>{
                this.ended || this.ended_soft || (this.settings.verbose_console && console.log(`Saving session ${this._sessionId} for restoring later`),
                xe("surfly_restore_session", this._sessionId),
                xe("surfly_leader_link_" + this._sessionId, this.leaderLink))
            }
            )
        }
        _checkUserDataType(t) {
            if (t) {
                if ("function" == typeof t)
                    return !1;
                const e = JSON.parse(JSON.stringify(t));
                if (Array.isArray(e) || e.constructor !== Object)
                    return console.warn("Wrong user data format. Object is expected"),
                    vt("Wrong user data format", "warning"),
                    !1
            }
            return !0
        }
        _canStart(t, e) {
            return de.mainWindow.__surfly ? (this._emit("error", {
                reason: "start_failed",
                details: "Not available under Surfly session"
            }),
            !1) : this._start_initiated || this.started ? (this._emit("error", {
                reason: "start_failed",
                details: "Session already started, SurflySession.startLeader() does nothing"
            }),
            !1) : this._api._restoredSessionId && this._api._restoredSessionId !== this._sessionId && !e ? (this._emit("error", {
                reason: "start_failed",
                details: "Refused to start a new session because a previously active session has been restored. Consider disabling `auto_restore` option, or start the session with a custom CSS selector"
            }),
            !1) : (this._checkUserDataType(t),
            !0)
        }
        _block_until_agent_joins() {
            return new Promise((t,e)=>{
                this.queued && (this.on("viewer_joined", ()=>t()),
                this._api._pinModal.pin = this.pin,
                this._api._pinModal.show().catch(t=>{
                    this.window && this.end(),
                    this.on("session_loaded", ()=>this.end()),
                    e(t)
                }
                ))
            }
            )
        }
        startLeader(t, e) {
            return this._schedule(()=>this._ask_start(t, e)),
            this
        }
        startFollower(t, e) {
            return this._schedule(()=>this._ask_start(t, e, !0)),
            this
        }
        _ask_start(t, e, n, r) {
            const o = this.settings.confirm_session_start
              , i = !n && this.settings.block_until_agent_joins && !this.settings.hide_until_agent_joins;
            if (!this._canStart(e, t))
                return Promise.reject(new Error("Can't start session!"));
            bt(t=>{
                t.setExtra("user_data", e)
            }
            );
            let s = Promise.resolve();
            if (o) {
                if (this._api._features["3rdcookies"])
                    s = s.then(()=>this._api._sessionStartModal.show());
                else {
                    if (this.settings.only_embedded_sessions && !this._tryCookieTrick)
                        return this._handleThirdPartyCookiesTrickResult(!1);
                    s = s.then(()=>Qe(this._api._sessionStartModal).then(t=>(this.window = t,
                    jn(t, de.mainWindow.SURFLY_COBRO_ORIGIN, !this.settings.ui_off && this.settings.show_loading_screen))).then(t=>{
                        this._api._features["3rdcookies"] = t
                    }
                    ))
                }
                s = i ? s.then(()=>this._api._sessionStartModal.release()) : s.then(()=>this._api._sessionStartModal.hide()),
                s = s.catch(t=>{
                    throw this._api._sessionStartModal.hide(),
                    r && r(t),
                    console.debug("After calling permission denied cb, error object is", t),
                    t
                }
                )
            } else if (!this._api._features["3rdcookies"] && this.settings.only_embedded_sessions && !this._tryCookieTrick)
                return this._handleThirdPartyCookiesTrickResult(!1);
            return s = s.then(()=>this._start(t, e, n)),
            i && (s = s.then(()=>this._block_until_agent_joins()).then(()=>this._api._pinModal.hide())),
            s = s.catch(t=>{
                if (!(t instanceof tn))
                    throw t;
                console.log(t.message)
            }
            ),
            s
        }
        _start(t, e, n) {
            if (!this._canStart(e, t))
                return Promise.reject(new Error("Can't start session!"));
            let r = Promise.resolve();
            if (this._nodeSelector = t || null,
            this._create_initiated || !n && this.created || (this._create_initiated = !0,
            r = n ? r.then(()=>this._createCall()) : r.then(()=>this._createCall(e))),
            this._start_initiated = !0,
            !n && de.navigator.standalone)
                de.mainWindow.location.href = this.leaderLink;
            else {
                const t = n ? ()=>this._openFollower(e) : ()=>this._openLeader(e);
                r = r.then(()=>new Promise(t=>this._openWindow(t))).then(t).then(()=>this._attachListeners())
            }
            return r
        }
        _halt() {
            de.mainWindow.__surfly || (this.window && (this.window.close(),
            this.window = null),
            this.node && (this.node.parentNode.removeChild(this.node),
            this.node = null),
            null !== $e && (de.mainWindow.document.documentElement.style.overflow = $e,
            $e = null),
            function() {
                let t = document.querySelector("#surfly-blocker")
                  , e = document.querySelector("#surfly-splash");
                t && (t.style.opacity = "0"),
                e && (e.style.top = "-100%"),
                setTimeout(()=>{
                    t && (t.parentNode.removeChild(t),
                    t = null),
                    e && (e.parentNode.removeChild(e),
                    e = null)
                }
                , 333)
            }())
        }
        end(t) {
            this._schedule(()=>{
                de.mainWindow.__surfly ? this._sendApiMessage("widget_message", {
                    srcOrigin: de.mainWindow.location.origin,
                    targetOrigin: "*",
                    target: "widget",
                    msg: "end_session",
                    redirect: t
                }) : this._sendApiMessage("api_request", {
                    cmd: "end",
                    redirect: t
                })
            }
            )
        }
        _sendApiMessage(t, e) {
            de.mainWindow.__surfly ? de.mainWindow.__surfly_CF._surfly_parent.postMessage({
                type: t,
                params: e
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : this.window.postMessage({
                type: t,
                params: e
            }, de.mainWindow.SURFLY_COBRO_ORIGIN)
        }
        sendMessage(t, e) {
            this._otherSideReady ? this._sendApiMessage("widget_message", {
                target: "user",
                msg: t,
                srcOrigin: de.mainWindow.location.origin,
                targetOrigin: e || de.mainWindow.location.origin
            }) : this._messageBuffer.push({
                target: "user",
                msg: t,
                targetOrigin: e || de.mainWindow.location.origin
            })
        }
        log(t) {
            const e = "Invalid audit log format, please provide a plain JSON object"
              , n = ["var0", "var1", "var2", "var3", "var4", "var5", "var6", "var7", "var8", "var9"];
            let r = {};
            try {
                if (r = JSON.parse(JSON.stringify(t)),
                "object" != typeof t)
                    throw new Error("log data is not an object");
                n.forEach(t=>{
                    if (r.hasOwnProperty(t) && "string" != typeof r[t])
                        throw new Error(`variable ${t} is not a string`)
                }
                )
            } catch (t) {
                throw console.error(e, t),
                vt("Invalid audit log used", "warning"),
                new Error(e)
            }
            de.mainWindow.__surfly ? de.mainWindow.__surfly_client_log(r) : this._api._widgetKeyProvided("create session logs") && (this.created ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "log",
                    msg: r
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.warn("Cannot create log records on a session that has not been created yet.\nPlease call .create() or one of the .start*() methods first."))
        }
        giveControl(t) {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "control",
                    to: t
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
        requestControl() {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "request_control"
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
        relocate(t, e) {
            /^[a-zA-Z0-9+.\-]+:/.test(t) ? this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "relocate",
                    url: t,
                    newTab: Boolean(e)
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet") : console.error("Relocate URL must contain protocol, e.g. https://" + t)
        }
        pause() {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "pause"
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
        resume() {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "resume"
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
        resize(t, e) {
            console.warn("SurflySession.resize() method is deprecated. Viewport iframe automatically detects window resize, so you can safely remove this call.")
        }
        setDrawingSettings(t) {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "drawing_settings",
                    settings: t
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
        toggleVideochatFullscreen() {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "toggle_videochat_fullscreen"
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
        toggleVideochatMicrophone() {
            this.started ? this.window.postMessage({
                type: "api_request",
                params: {
                    cmd: "toggle_videochat_microphone"
                }
            }, de.mainWindow.SURFLY_COBRO_ORIGIN) : console.error("Session is not started yet")
        }
    }
    class Cn {
        constructor(t, e) {
            this._api = t,
            this._buttonSettings = e;
            const n = Be();
            n.classList.add("surfly-button-position-" + this.settings.position),
            this._frame_classes = n.className,
            this._node = function(t) {
                let e = document.querySelector(".surfly-button");
                e && e.parentNode.removeChild(e),
                He(t),
                e = document.createElement("div"),
                e.className = "surfly-button surfly-button-hidden";
                const n = "surfly-button-position-" + (t.position || "bottomleft");
                e.classList.add(n);
                const r = document.createElement("span");
                r.innerHTML = Ye.a,
                e.appendChild(r);
                const o = document.createElement("span");
                return o.textContent = Ne("Get Live Help"),
                e.appendChild(o),
                document.body.appendChild(e),
                qe("surfly-button " + n),
                e
            }(this.settings),
            this._node.onclick = ()=>this._click(),
            this._refresh()
        }
        get settings() {
            return new Proxy({
                ...this._api.settings,
                ...this._buttonSettings
            },{
                set: (t,e,n)=>(this._buttonSettings[e] = n,
                !0)
            })
        }
        get _settings() {
            return vt(`[deprecation][jsapi][button][widget_key=${this.settings.widget_key}] _settings getter usage detected`, "warning"),
            this.settings
        }
        set _settings(t) {
            vt(`[deprecation][jsapi][button][widget_key=${this.settings.widget_key}] _settings setter usage detected`, "warning"),
            this._buttonSettings = t
        }
        _click() {
            wt({
                category: "JS API",
                message: "Surfly button clicked",
                level: B.Info
            }),
            this._hide();
            const t = this._api.session(this._buttonSettings)
              , e = ()=>{
                Be().className = this._frame_classes,
                this._show()
            }
            ;
            t._schedule(()=>t._ask_start(void 0, void 0, !1, e))
        }
        _refresh() {
            this.settings.hidden ? this._hide() : (!this.settings.autohide_button || this._api.agentAvailable ? this._show() : this._hide(),
            this.settings.autohide_button && setTimeout(this._refresh.bind(this), 1e3))
        }
        _show() {
            this._node.classList.remove("surfly-button-hidden"),
            this._node.classList.add("surfly-button-visible");
            const t = Be();
            t && t.classList.contains("surfly-invisible") && (t.classList.remove("surfly-invisible"),
            t.classList.add("surfly-button"),
            this._frame_classes = t.className)
        }
        _hide() {
            this._node.classList.remove("surfly-button-visible"),
            this._node.classList.add("surfly-button-hidden");
            const t = Be();
            t && t.classList.contains("surfly-button") && (t.classList.remove("surfly-button"),
            t.classList.add("surfly-invisible"),
            this._frame_classes = t.className)
        }
    }
    function Nn(t) {
        if (!de.DeviceMotionEvent)
            return;
        const e = 3
          , n = 30;
        let r = 0;
        const o = {
            x: 0,
            y: 0,
            z: 0
        };
        let i = new Date;
        de.mainWindow.addEventListener("devicemotion", (function(s) {
            const a = s.accelerationIncludingGravity
              , c = o.x - a.x
              , u = o.y - a.y
              , l = o.z - a.z
              , d = Math.sqrt(c * c + u * u + l * l)
              , p = (new Date).getTime() - i.getTime();
            d > n && 100 < p && (1e3 > p ? r++ : r = 1,
            i = new Date,
            r >= e && (r = 0,
            t())),
            o.x = a.x,
            o.y = a.y,
            o.z = a.z
        }
        ), !1)
    }
    let Un = Nn;
    const Wn = new Set(["SCRIPT", "STYLE", "INPUT", "TEXTAREA"]);
    function Fn(t) {
        function e(t) {
            try {
                if (t.contentWindow === de)
                    return;
                n.observe(t.contentDocument, {
                    subtree: !0,
                    childList: !0
                })
            } catch (t) {}
        }
        const n = new MutationObserver((function(n) {
            for (let r = 0; r < n.length; r++) {
                const o = n[r];
                if (!Wn.has(o.target.nodeName))
                    for (let n = 0; n < o.addedNodes.length; n++) {
                        const r = o.addedNodes[n];
                        if (!Wn.has(r.nodeName)) {
                            if (r.nodeType === Node.ELEMENT_NODE) {
                                const t = r.querySelectorAll("iframe");
                                for (let n = 0; n < t.length; n++)
                                    e(t[n]);
                                "IFRAME" === r.tagName && e(r)
                            }
                            t(r)
                        }
                    }
            }
        }
        ));
        n.observe(de.mainWindow.document, {
            subtree: !0,
            childList: !0
        });
        const r = de.mainWindow.document.querySelectorAll("iframe");
        for (let t = 0; t < r.length; t++)
            e(r[t]);
        return n
    }
    let Mn = Fn;
    var Dn = function(t) {
        return Mn(t)
    };
    const Yn = ["^surfly", "!surfly"]
      , Bn = ["^video"];
    function qn(t={}) {
        0 === de.mainWindow.Surfly.listSessions().length && de.mainWindow.Surfly.session(t).on("session_started", t=>{
            if (de.mainWindow.Intercom) {
                const e = {
                    surfly_link: t.followerLink,
                    surfly_starturl: de.mainWindow.location.href,
                    surfly_sessionid: t._sessionId
                };
                de.mainWindow.Intercom("trackEvent", "Surfly session started", e)
            }
        }
        ).startLeader()
    }
    function Hn(t) {
        if (t) {
            const e = t.textContent.trim();
            Yn.indexOf(e) >= 0 ? qn() : Bn.indexOf(e) >= 0 && qn({
                start_docked: !0,
                videochat: !0,
                videochat_autostart: !0
            })
        }
    }
    function zn(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            if (t.className.indexOf && t.className.indexOf("intercom-conversation-part-") >= 0) {
                Hn(t.querySelector(".intercom-comment .intercom-block-paragraph"))
            }
            const e = t.querySelectorAll("iframe.intercom-borderless-frame");
            for (let t = 0; t < e.length; t++)
                try {
                    const n = e[t].contentDocument.querySelectorAll(".intercom-conversation-part .intercom-chat-card-body");
                    for (let t = 0; t < n.length; t++)
                        Hn(n[t])
                } catch (t) {}
        }
    }
    function $n() {
        Dn(zn)
    }
    function Jn() {
        const t = de.setInterval((function() {
            de.mainWindow.Intercom && (de.clearInterval(t),
            de.mainWindow.Intercom("shutdown"))
        }
        ), 1e3)
    }
    let Gn = $n
      , Xn = Jn;
    function Kn(t={}) {
        0 === de.mainWindow.Surfly.listSessions().length && de.mainWindow.Surfly.session(t).startLeader()
    }
    function Vn(t) {
        t.nodeType === Node.TEXT_NODE && t.parentNode && t.parentNode.classList.contains("chat_msg") && function(t) {
            if (t) {
                const e = t.wholeText.trim();
                "^surfly" === e ? Kn() : "^video" === e && Kn({
                    start_docked: !0,
                    videochat: !0,
                    videochat_autostart: !0
                })
            }
        }(t)
    }
    function Zn(t={}) {
        0 === de.mainWindow.Surfly.listSessions().length && de.mainWindow.Surfly.session(t).startLeader()
    }
    function Qn(t) {
        "^surfly" === t.message.body ? Zn() : "^video" === t.message.body && Zn({
            start_docked: !0,
            videochat: !0,
            videochat_autostart: !0
        })
    }
    function tr() {
        const t = function() {
            const t = de.mainWindow.olark;
            return t || console.warn("Olark API was not found"),
            t
        }();
        t && (t("api.chat.onMessageToOperator", Qn),
        t("api.chat.onMessageToVisitor", Qn))
    }
    const er = 'type "^surfly" to start a co-browsing session, or "^video" for a videochat.';
    function nr() {
        const t = de.mainWindow.LC_API;
        return t || console.warn("LiveChat API was not found"),
        t
    }
    function rr(t={}) {
        const e = nr();
        e && (de.document.hidden ? console.warn("Ignoring cobrowsing request because the current browser tab is not active") : 0 === de.mainWindow.Surfly.listSessions({
            active: !0
        }).length && de.mainWindow.Surfly.session(t).on("session_created", t=>{
            e.set_custom_variables([{
                name: "Co-browse URL",
                value: t.followerLink
            }])
        }
        ).on("session_ended", t=>{
            e.set_custom_variables([{
                name: "Co-browse URL",
                value: er
            }])
        }
        ).startLeader())
    }
    function or(t, e) {
        if (!Ie())
            return;
        const n = "surfly_default_settings:" + t;
        localStorage.setItem(n, JSON.stringify(e))
    }
    var ir;
    !function(t) {
        t.TYPE_TOP = "T",
        t.TYPE_FRAME = "F",
        t.TYPE_AUX = "A",
        t.TYPE_SCRIPT = "S",
        t.TYPE_MODULE = "M",
        t.TYPE_LINK = "L",
        t.TYPE_XHR = "X",
        t.TYPE_RESOURCE = "R",
        t.TYPE_WORKER = "W",
        t.TYPE_WORKER_SCOPE = "Y",
        t.TYPE_REDIRECT = "D",
        t.TYPE_PAWS = "P",
        t.TYPE_CONTINUATION = "C",
        t.TYPE_UNKNOWN = "U"
    }(ir || (ir = {}));
    const sr = ir.TYPE_TOP + ir.TYPE_FRAME + ir.TYPE_AUX + ir.TYPE_SCRIPT + ir.TYPE_MODULE + ir.TYPE_LINK + ir.TYPE_XHR + ir.TYPE_RESOURCE + ir.TYPE_WORKER + ir.TYPE_WORKER_SCOPE + ir.TYPE_REDIRECT + ir.TYPE_PAWS + ir.TYPE_CONTINUATION + ir.TYPE_UNKNOWN;
    var ar = n(11)
      , cr = n.n(ar)
      , ur = n(31)
      , lr = n.n(ur);
    const dr = {
        9: "0",
        Z: "A",
        z: "a"
    };
    const pr = {
        0: "9",
        A: "Z",
        a: "z"
    };
    function fr(t, e, n) {
        if ("string" != typeof t)
            throw new TypeError("String expected in mangler");
        return Array.prototype.map.call(t, (function(t) {
            return function(t) {
                const e = t.charCodeAt(0);
                return e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57
            }(t) ? e[t] || String.fromCharCode(t.charCodeAt(0) + n) : t
        }
        )).reverse().join("")
    }
    var hr = function(t) {
        return fr(t, dr, 1)
    }
      , _r = function(t) {
        return fr(t, pr, -1)
    };
    const yr = new Array(10).join("/")
      , gr = "SURFLYROOT" + new Array(10).join("/")
      , mr = "((?:/[_ %a-zA-Z0-9-]+)*)(?:/(:\\d+))?/([HS])([" + sr + "])/(?:[a-zA-Z0-9]+)/{0,9}"
      , vr = /^(\s*)(https?:)?\/\/([_ %a-z0-9.-]+\.[a-z0-9-]{1,63})(:[0-9]{0,5})?(\/blob)?([/#?]|\s*$)/i
      , br = /^(?:https?\:\/\/|\/\/)([^\/:?#]{3,63})(?:[\/:?#]|$)/i
      , wr = new RegExp("[?&]SURFLY=([" + sr + "])")
      , Sr = new RegExp("[?&]SURFLY_TAB_PREFIX=([a-zA-Z0-9_$%*.!~`)(-]+)")
      , Or = new RegExp(mr)
      , Er = new RegExp(mr,"g")
      , xr = new RegExp("^\\s*(\\w{3,10})(&colon;|:)","i")
      , kr = new RegExp("[^.]+\\.(?:" + ["co.uk", "w3c-test.org"].join("|") + "|[^.]+)$")
      , jr = /^https?:\/\/(localhost|127.0.0.1)/i;
    function Tr(t) {
        return t ? "-m" : "-p"
    }
    function Rr(t) {
        return t.replace(/\./g, "\\.")
    }
    function Ir(t) {
        return "([- %\\w]+[ %\\w]+)-[pm]\\." + Rr(t)
    }
    function Ar(t) {
        return new RegExp("https://" + Ir(t) + "(?:" + mr + "(.?))?","g")
    }
    function Pr(t) {
        const e = br.exec(t);
        if (e && 2 === e.length)
            return e[1]
    }
    function Lr(t, e) {
        return t = t.split("/").slice(1).reverse(),
        e && (t = t.map(_r)),
        t.join(".")
    }
    function Cr(t) {
        const e = "SURFLYROOT"
          , n = {
            " ": 1,
            "\n": 1,
            "\t": 1,
            "'": 1,
            '"': 1,
            "?": 1,
            "#": 1,
            "(": 1,
            ")": 1,
            "\f": 1,
            "\r": 1,
            "\v": 1
        };
        let r, o, i, s;
        for (; (o = t.lastIndexOf(e)) > -1; ) {
            r = "",
            i = "";
            for (let n = 0; n <= 9 && "/" === t[o + e.length + n]; n++)
                r += "/";
            for (s = 1; o - s > -1 && !(t[o - s]in n); )
                s++;
            i = t.substring(o - s + 1, o),
            t = t.replace(i + e + r, "/")
        }
        return t
    }
    const Nr = new RegExp("[?&]SURFLY=([" + sr + "])","g")
      , Ur = new RegExp("[?&]SURFLY_ORPHAN=[a-zA-Z0-9_]+","g")
      , Wr = new RegExp("[?&]SURFLY_NEW_TAB=[a-zA-Z0-9_]+","g")
      , Fr = new RegExp("[?&]SURFLYORIGIN=([^?&#]*)","g")
      , Mr = new RegExp("[?&]SURFLYFRAMEORIGIN=([^?&#]*)","g")
      , Dr = new RegExp("[?&]SURFLYDOWNLOADORIGIN=([^?&#]*)","g")
      , Yr = new RegExp("[?&]SURFLY_DOWNLOAD=([^?&#]*)","g")
      , Br = new RegExp("[?&]SURFLYCF=[0-9-]+","g")
      , qr = new RegExp("[?&]SURFLYOPENER=[0-9_]*","g")
      , Hr = new RegExp("[?&]SURFLY_CHARSET=([^?&#]*)","g")
      , zr = /(https?:\/\/[a-z0-9.-]+\.[a-z0-9-]{1,63}(:[0-9]{0,5})?)(\/(?:[^\s'"?#()]*?SURFLYROOT\/{0,10})+)/g;
    function $r(t, e, n, r, o, i, s, a) {
        const c = "S" === i ? "https:" : "http:";
        let u;
        if (void 0 === r) {
            throw "Surfly: url " + e + " has no domainpath. cannot be unproxified."
        }
        return a && !/^[\s'"?#\/)]/.test(a[0]) && (a = "/" + a),
        u = c + "//" + Lr(r, t) + (o || ""),
        u = function(t) {
            const e = Pr(t);
            e && (t = t.replace(cr.a.toASCII(e), cr.a.toUnicode(e)));
            return t
        }(u),
        u + (a || "")
    }
    const Jr = /(#|\?|$)/
      , Gr = /\\([0-9a-fA-F]+) ?/g;
    function Xr(t) {
        return t.replace(Gr, (function(t, e) {
            return String.fromCharCode(parseInt(e, 16))
        }
        ))
    }
    const Kr = /((?:@import\s+)?url\s*\(\s*)(['"]?)(\s*.*?)(\2\s*\))|(@import\s*)((?:"(?:[^"]+)")|(?:\'(?:[^\']+)\'))/gi;
    function Vr(t, e) {
        return e[0] !== t ? "/" !== t && "" === e ? e : t + e : e
    }
    const Zr = /^(\s*)(https?:)?\/\/([^\/]+)(.*)\s*/i;
    const Qr = /([^?#]+)(\?[^#]*)?(#.*)?/;
    class to extends class {
        constructor(t) {
            this.url_mangling = !1,
            this.isProxy = !1,
            this.isLocalhostAllowed = !1,
            this.setOptions(t)
        }
        setOptions(t) {
            this.server_name = t.server_name,
            this.urltoken = t.urltoken,
            this.session_id = t.session_id,
            "url_mangling"in t && (this.url_mangling = t.url_mangling),
            "isProxy"in t && (this.isProxy = t.isProxy),
            "isLocalhostAllowed"in t && (this.isLocalhostAllowed = t.isLocalhostAllowed)
        }
        getDomainSuffix() {
            return Tr(this.url_mangling) + "." + this.server_name
        }
        isProxified(t) {
            return new RegExp(Tr(this.url_mangling) + "\\." + Rr(this.server_name),"i").test(t)
        }
        unproxifyHostname(t) {
            let e;
            if ("string" == typeof t)
                try {
                    const n = this.externalResourcePattern();
                    0 === t.indexOf(n) && (t = t.replace(n, ""));
                    let r = Ar(this.server_name).exec(t);
                    r && r[2] ? e = Lr(r[2], this.url_mangling) : (r = vr.exec(t),
                    r && (e = r[3]))
                } catch (e) {
                    return this.reportError(e),
                    t
                }
            return e
        }
        unproxifyHost(t) {
            if ("string" == typeof t)
                try {
                    const e = this.unproxifyHostname(t)
                      , n = Ar(this.server_name).exec(t);
                    return n && n[3] ? e + n[3] : e
                } catch (t) {
                    this.reportError(t)
                }
            return t
        }
        unproxifyProtocol(t) {
            if ("string" == typeof t)
                try {
                    const e = this.externalResourcePattern();
                    0 === t.indexOf(e) && (t = t.replace(e, ""));
                    let n = Ar(this.server_name).exec(t);
                    if (n) {
                        if ("S" === n[4])
                            return "https:";
                        if ("H" === n[4])
                            return "http:"
                    }
                    if (n = vr.exec(t),
                    n) {
                        const t = n[2];
                        if (t)
                            return t.toLowerCase()
                    }
                    return
                } catch (t) {
                    this.reportError(t)
                }
            return t
        }
        removeSurflyroot(t) {
            if (-1 !== t.indexOf(gr)) {
                const e = Cr(t)
                  , n = t.indexOf(this.urltoken);
                -1 !== n && (t = t.substring(0, n + this.urltoken.length) + e)
            }
            return t
        }
        unproxifyUrls(t) {
            if ("string" != typeof t)
                return t;
            try {
                const n = this.externalResourcePattern();
                if (0 === t.indexOf(n))
                    return t.replace(n, "");
                const r = (e = this.server_name,
                new RegExp("https://" + Ir(e) + "/hidden_tab","g")).exec(t);
                if (r)
                    return r[0];
                const o = xr.exec(t);
                if (o && ["data", "blob"].indexOf(o[1]) >= 0)
                    return t;
                const i = (t = Cr(t = (t = (t = this.removeSearchSuffixes(t)).replace(Ar(this.server_name), $r.bind(null, this.url_mangling))).replace(zr, "$1/"))).replace(Er, "");
                return t = i !== t && "/" !== i[0] ? "/" + i : i,
                "m" === this.urltoken[0] && (t = t.replace(this.urltoken, "")),
                t
            } catch (t) {
                this.reportError(t)
            }
            var e;
            return t
        }
        removeSearchSuffixes(t) {
            return t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(Nr, "")).replace(Fr, "")).replace(Mr, "")).replace(Dr, "")).replace(Yr, "")).replace(Br, "")).replace(qr, "")).replace(Sr, "")).replace(Ur, "")).replace(Wr, "")).replace(Hr, "")
        }
        proxifyDomain(t) {
            return function(t, e, n) {
                const r = t.match(kr);
                if (!r) {
                    throw "No match for check_domain_re on domain " + t
                }
                let o = function(t) {
                    return t.replace(/0/g, "00").replace(/-/g, "-0-").replace(/\./g, "-")
                }(r[0]);
                n && (o = function(t, e) {
                    const n = new lr.a("SHA-1","TEXT");
                    return n.update(t.toLowerCase() + e),
                    n.getHash("HEX")
                }(o, e));
                return o
            }(t, this.session_id, this.url_mangling) + this.getDomainSuffix()
        }
        toDomainPath(t) {
            let e = t.split(".");
            return this.url_mangling && (e = e.map(hr)),
            "/" + e.reverse().join("/")
        }
        proxifyOrigin(t) {
            const e = /^https?:\/\/([\w-.]+)/.exec(t);
            return "https://" + this.proxifyDomain(e[1])
        }
        getUnproxifiedOrigin(t) {
            return this.unproxifyProtocol(t.location.href) + "//" + this.unproxifyHost(t.location.href)
        }
        insertSuffix(t, e) {
            return t.replace(Jr, e + "$1")
        }
        proxifyUrl(t, e, n, r) {
            let o, i;
            if (null === t)
                return t;
            if (o = "object" == typeof t ? t + "" : t,
            this.isLocalhostAllowed && this.isLocalURL(o))
                return this.removeSearchSuffixes(o);
            try {
                i = this._proxifyUrl(o, e, n, r)
            } catch (e) {
                return this.reportError(e),
                t
            }
            return i === o ? t : i
        }
        _proxifyUrl(t, e, n, r) {
            if (t = function(t) {
                const e = Pr(t);
                return e && (t = t.replace(cr.a.toUnicode(e), cr.a.toASCII(e))),
                t
            }(t = function(t) {
                const e = t.indexOf(":");
                if (-1 === e || e > 10)
                    return t;
                const n = t.substring(0, e);
                return t = t.replace(n, n.toLowerCase())
            }(t = t.trim())),
            n === ir.TYPE_REDIRECT && (0 === t.indexOf("https://") || 0 === t.indexOf("http://")))
                return this.externalResourcePattern() + t;
            const o = xr.exec(t);
            if (o && "http" !== o[1].slice(0, 4))
                return t;
            if ([ir.TYPE_TOP, ir.TYPE_FRAME, ir.TYPE_LINK].includes(n)) {
                if (e && e._ss_urltype === n && "#" === t[0])
                    return t;
                {
                    const e = this.getTabPrefix();
                    e && !Sr.exec(t) && (t = this.insertSuffix(t, "?SURFLY_TAB_PREFIX=" + e))
                }
            }
            let i = !1;
            if (t = t.replace(vr, (t,o,s,a,c,u,l)=>{
                i = !0;
                const d = new RegExp("session[0-9]{0,2}." + this.server_name);
                if (this.isProxified(a) || u && a.match(d))
                    return t;
                const p = "https:" === (s = s ? s.toLowerCase() : this.getDefaultProtocol(e)).toLowerCase() ? "S" : "H";
                c = c && ":" !== c ? "/" + c : "";
                let f = this.toDomainPath(a);
                return f && r && (f = f.toLowerCase()),
                a ? o + "https://" + this.proxifyDomain(a) + f + c + "/" + p + n + "/" + this.urltoken + yr + l : t
            }
            ),
            i)
                return t;
            "/" === t[0] && (t = gr + t,
            n === ir.TYPE_MODULE && (t = "./" + t));
            const s = "?SURFLY=" + n;
            return -1 === t.indexOf(s) ? this.insertSuffix(t, s) : t
        }
        proxifyCssUrls(t, e, n) {
            return t.replace(Kr, (t,r,o,i,s,a,c)=>{
                let u;
                if (r) {
                    const a = "@" === r[0] ? ir.TYPE_LINK : n;
                    return u = i.trim(),
                    u ? "#" === u[0] || 0 === i.indexOf("data:") ? t : r + o + this.proxifyUrl(Xr(i), e, a, !1) + s : t
                }
                return o = c[0],
                c = c.slice(1, -1),
                u = (c = this.proxifyUrl(Xr(c), e, ir.TYPE_LINK, !1)).trim(),
                u ? "#" === u[0] || 0 === c.indexOf("data:") ? t : a + o + c + o : t
            }
            )
        }
        replaceUrlPart(t, e, n, r, o) {
            return o = o || function(t) {
                if ("string" == typeof t && "data:" === t.slice(0, 5))
                    return;
                let e = wr.exec(t);
                if (e)
                    return e[1];
                if (e = Or.exec(t),
                e)
                    return e[4];
                if ("string" == typeof t && t.indexOf("/hidden_tab") >= 0)
                    return ir.TYPE_AUX
            }(e),
            "object" == typeof r && r.hasOwnProperty("toString") && (r = r.toString()),
            "href" === n ? Zr.test(r) ? this.proxifyUrl(r, t, o, !1) : "/" === r[0] ? gr + r : r : (e = function(t, e, n) {
                return t.replace(Zr, (function(t, r, o, i, s) {
                    switch (e) {
                    case "protocol":
                        o = function(t, e) {
                            if (t[t.length - 1] !== e)
                                return t + e;
                            return t
                        }(n, ":");
                        break;
                    case "host":
                    case "hostname":
                        i = n
                    }
                    return r + o + "//" + i + function(t, e, n) {
                        return t.replace(Qr, (function(t, r, o, i) {
                            switch (o = o || "",
                            i = i || "",
                            e) {
                            case "pathname":
                                r = Vr("/", n);
                                break;
                            case "search":
                                o = Vr("?", n);
                                break;
                            case "hash":
                                i = Vr("#", n)
                            }
                            return r + o + i
                        }
                        ))
                    }(s, e, n)
                }
                ))
            }(e = this.unproxifyUrls(e), n, r),
            this.proxifyUrl(e, t, o, !1))
        }
        isLocalURL(t) {
            return jr.test(t)
        }
        reportError(t) {
            console.error(t)
        }
        externalResourcePattern() {
            return "https://external." + this.server_name + "/external_resource/?is_po=" + this.isProxy + "&url="
        }
    }
    {
        constructor(t) {
            super(t),
            this.protocol = null,
            this.protocol = t.protocol
        }
        getDefaultProtocol() {
            return this.protocol || "https:"
        }
        getTabPrefix() {
            return null
        }
    }
    let eo = Ln;
    const no = new class {
        constructor() {
            this._notadummy = !0,
            this._initStatus = {
                started: !1,
                finished: !1,
                successful: null,
                message: "Surfly.init() not called"
            },
            this._userSettings = null,
            this._defaultSettings = null,
            this._currentSession = null,
            this._readyCallback = null,
            this._allSessions = [],
            this._agentAvailable = null,
            this._features = {},
            this._globalEventsEmitter = new Pn,
            this._sessionEventHandlers = {},
            this._translationLoaded = !1,
            this._restoredSessionId = null,
            this._pinModal = new rn(this),
            this._thirdPartyCookiesModal = new on(this),
            this._sessionStartModal = new nn(this),
            Tn.forEach(t=>{
                this._sessionEventHandlers[t] = []
            }
            )
        }
        get settings() {
            return new Proxy({
                ...this._defaultSettings,
                ...this._userSettings
            },{
                set: (t,e,n)=>(this._userSettings[e] = n,
                !0)
            })
        }
        get _settings() {
            return vt(`[deprecation][jsapi][widget][widget_key=${this.settings.widget_key}] _settings getter usage detected`, "warning"),
            this.settings
        }
        set _settings(t) {
            vt(`[deprecation][jsapi][widget][widget_key=${this.settings.widget_key}] _settings setter usage detected`, "warning"),
            this._userSettings = t
        }
        init(t, e) {
            this._initStatus.started ? console.error("Surfly.init() has already been called!") : (this._initStatus.started = !0,
            this._initStatus.message = "Started",
            "widgetkey"in t && (t.widget_key = t.widgetkey,
            delete t.widgetkey),
            this._userSettings = Object.assign({}, t),
            bt(t=>{
                t.setTags({
                    user_settings: JSON.stringify(this._userSettings),
                    inside_session: this.isInsideSession
                })
            }
            ),
            wt({
                category: "JS API",
                message: "Surfly.init() called",
                level: B.Info
            }),
            this._readyCallback = e,
            this._checkBrowserFeatures(),
            this._getDefaultSettings(),
            "widget_key"in t ? bt(e=>{
                e.setTag("widget_key", t.widget_key)
            }
            ) : this._userSettings.verbose_console && console.warn("No widget_key provided in settings. You won't be able to create sessions, queue sessions, or check agent status from the JS API. See https://docs.surfly.com/advanced-integration.html#header-full-featured-custom-session-id-approach for more details."))
        }
        _emit(t, e) {
            Rn.indexOf(t) >= 0 && wt({
                category: "JS API",
                message: "global event",
                data: {
                    eventName: t,
                    eventData: JSON.stringify(e)
                },
                level: B.Info
            }),
            this._globalEventsEmitter.emit(t, e)
        }
        _widgetKeyProvided(t) {
            return !(!("widget_key"in this._userSettings) || !this._userSettings.widget_key) || (console.warn("Can't " + t + " without a widget key. To allow this, provide a widget key when calling Surfly.init()."),
            !1)
        }
        _assertInitialized(t) {
            return !!this._initStatus.successful || (console.error(`Surfly is not initialized properly: ${this._initStatus.message}.\nDid you forget Surfly.init()?`),
            vt(t + " called with uninitialized API: " + this._initStatus.message, "info"),
            !1)
        }
        _checkReady() {
            if (!this._initStatus.finished && void 0 !== this._features.WS && void 0 !== this._features.MO && void 0 !== this._features["3rdcookies"] && (!("widget_key"in this._userSettings) || null !== this._defaultSettings) && this._translationLoaded) {
                this.settings.verbose_console && console.log("Surfly widget initialized, calling callback"),
                this._initStatus.finished = !0;
                let t, e = !0;
                if (!1 === this._features.WS ? (this._initStatus.message = "WebSockets support is required",
                e = !1) : !1 === this._features.MO ? (this._initStatus.message = "MutationObserver support is required",
                e = !1) : !1 === this._defaultSettings && (this._initStatus.message = "Could not retrieve default settings from server",
                e = !1),
                e ? this._initStatus.message = "Success" : console.error(this._initStatus.message),
                this.settings.block_until_agent_joins && !this.settings.hide_until_agent_joins && (this.settings.show_loading_screen = this.settings.splash = !1),
                de.mainWindow.__surfly) {
                    const t = de.mainWindow.__surfly_CF.ss_bootstrap_config.PARENT_SESSION_ID;
                    this._currentSession = new eo(this,this._userSettings,null,t),
                    this._currentSession._isLeader = !0,
                    Tn.forEach(t=>{
                        this._sessionEventHandlers[t].forEach(e=>{
                            this._currentSession.on(t, e)
                        }
                        )
                    }
                    ),
                    this._allSessions.push(this._currentSession)
                }
                if (this.settings.stealth_mode && !de.mainWindow.__surfly && de.mainWindow.document.addEventListener("keydown", t=>{
                    if (t.ctrlKey && 13 === t.keyCode) {
                        this.listSessions().some(t=>t.started && !t.ended) ? console.warn("There is an active session already, ignoring the keystroke") : this.session().startLeader()
                    }
                }
                ),
                de.mainWindow.addEventListener("hashchange", ()=>{
                    "#surflystart" === de.mainWindow.location.hash && (wt({
                        category: "JS API",
                        message: "#surflystart hashchange",
                        level: B.Info
                    }),
                    this.session().startLeader())
                }
                ),
                this._initStatus.successful = e,
                this._features["3rdcookies"] && (t = Ee("surfly_restore_session")),
                !de.mainWindow.__surfly)
                    if (t) {
                        this.settings.verbose_console && console.log("Found a session to restore " + t),
                        ke("surfly_restore_session");
                        const e = this.session({}, null, t);
                        this._restoredSessionId = t,
                        this._emit("session_restored", {
                            session: e
                        }),
                        e.on("session_created", e=>{
                            e.ended ? (console.warn("Session is already ended, nothing to restore"),
                            wt({
                                category: "JS API",
                                message: "restore_session expired",
                                data: {
                                    id: t
                                },
                                level: B.Info
                            }),
                            this._restoredSessionId = null) : (wt({
                                category: "JS API",
                                message: "Restoring active session",
                                data: {
                                    id: t
                                },
                                level: B.Info
                            }),
                            e.settings.confirm_session_start = !1,
                            e.startLeader())
                        }
                        )
                    } else
                        "#surflystart" === de.mainWindow.location.hash && (wt({
                            category: "JS API",
                            message: "#surflystart detected",
                            level: B.Info
                        }),
                        this.session().startLeader());
                this.settings.shake_to_start && !de.mainWindow.__surfly && function() {
                    Un.apply(this, arguments)
                }(()=>{
                    0 === this.listSessions().length && (this.session().startLeader(),
                    wt({
                        category: "JS API",
                        message: "Shook to start",
                        level: B.Info
                    }))
                }
                ),
                this._initChatIntegration(),
                wt({
                    category: "JS API",
                    message: "JS API initialized",
                    data: {
                        success: e,
                        errorMsg: this._initStatus.message
                    },
                    level: B.Info
                });
                try {
                    this._readyCallback({
                        success: e,
                        errorMsg: this._initStatus.message
                    })
                } catch (t) {
                    throw wt({
                        category: "JS API",
                        message: "Exception in user callback",
                        data: {
                            error: "" + t
                        },
                        level: B.Warning
                    }),
                    t
                }
            }
        }
        get agentAvailable() {
            if (this._widgetKeyProvided("check agent availability"))
                return null === this._agentAvailable && this._startAgentPoll(),
                this._agentAvailable
        }
        _initChatIntegration() {
            "intercom" === this.settings.chat_integration ? de.mainWindow.__surfly ? function() {
                Xn.apply(this, arguments)
            }() : (!function() {
                Gn.apply(this, arguments)
            }(),
            wt({
                category: "JS API",
                message: "Intercom integration started",
                level: B.Info
            })) : "zendesk" === this.settings.chat_integration ? de.mainWindow.__surfly ? de.setInterval((function() {
                try {
                    const t = de.mainWindow.document.querySelectorAll(".zopim,.zEWidget-launcher,#launcher");
                    for (let e = 0; e < t.length; e++)
                        t[e].style.display = "none"
                } catch (t) {}
            }
            ), 2e3) : (Dn(Vn),
            wt({
                category: "JS API",
                message: "Zendesk integration started",
                level: B.Info
            })) : "olark" === this.settings.chat_integration ? de.mainWindow.__surfly ? de.setInterval((function() {
                de.mainWindow.olark && de.mainWindow.olark("api.box.hide")
            }
            ), 2e3) : (tr(),
            wt({
                category: "JS API",
                message: "Olark integration started",
                level: B.Info
            })) : "livechat" === this.settings.chat_integration && (de.mainWindow.__surfly ? function() {
                const t = nr();
                t && (t.on_before_load = function() {
                    t.hide_chat_window()
                }
                )
            }() : (!function() {
                const t = nr();
                t && (t.on_chat_started = function() {
                    t.set_custom_variables([{
                        name: "Co-browse URL",
                        value: er
                    }])
                }
                ,
                t.on_message = function(t) {
                    const e = t.timestamp
                      , n = Math.floor(Date.now() / 1e3);
                    Math.abs(e - n) > 3 || ("^surfly" === t.text ? rr() : "^video" === t.text && rr({
                        start_docked: !0,
                        videochat: !0,
                        videochat_autostart: !0
                    }))
                }
                )
            }(),
            wt({
                category: "JS API",
                message: "Livechat integration started",
                level: B.Info
            })))
        }
        _startAgentPoll() {
            null === this._agentAvailable && (this._agentAvailable = void 0),
            he(de.mainWindow.SURFLY_COBRO_ORIGIN + "/v2/queue/status/?api_key=" + this._userSettings.widget_key, null, "GET").then(t=>{
                const e = this._agentAvailable;
                this._agentAvailable = t.agent_available,
                this._checkReady(),
                e !== this._agentAvailable && this._emit("agent_status", {
                    available: this._agentAvailable
                }),
                setTimeout(this._startAgentPoll.bind(this), 5e3)
            }
            , t=>{
                const e = this._agentAvailable;
                console.error(t.detail || t),
                mt(new Error(t.detail || t)),
                this._agentAvailable = !1,
                this._checkReady(),
                e !== this._agentAvailable && this._emit("agent_status", {
                    available: this._agentAvailable
                })
            }
            )
        }
        _checkBrowserFeatures() {
            En(de.mainWindow.SURFLY_COBRO_ORIGIN, !1, !1).then(t=>{
                this._features["3rdcookies"] = t,
                bt(t=>{
                    t.setTags({
                        thirdPartyCookies: this._features["3rdcookies"]
                    })
                }
                ),
                this._checkReady()
            }
            ),
            function(t) {
                const e = je("surfly_MO");
                let n;
                null !== e ? n = e : void 0 === window.WebKitMutationObserver && "undefined" == typeof MutationObserver ? (console.error("MutationObserver is not available"),
                n = !1,
                Te("surfly_MO", n)) : (n = !0,
                Te("surfly_MO", n)),
                t(n)
            }(t=>{
                this._features.MO = t,
                bt(t=>{
                    t.setTags({
                        MutationObserver: this._features.MO
                    })
                }
                ),
                this._checkReady()
            }
            ),
            function(t) {
                const e = je("surfly_WS");
                let n;
                null !== e ? n = e : window.WebSocket || window.MozWebSocket ? (n = !0,
                Te("surfly_WS", n)) : (n = !1,
                Te("surfly_WS", n)),
                t(n)
            }(t=>{
                this._features.WS = t,
                bt(t=>{
                    t.setTags({
                        ws: this._features.WS
                    })
                }
                ),
                this._checkReady()
            }
            )
        }
        _getDefaultSettings() {
            if (null !== this._defaultSettings)
                return;
            const t = t=>{
                this._defaultSettings = t,
                this.settings.language || (console.warn("No language setting or widget key provided, defaulting to english language"),
                this.settings.language = "en"),
                this._fetchTranslation(this.settings.language),
                this._checkReady()
            }
            ;
            if (this._widgetKeyProvided("get default settings from server")) {
                const e = function(t) {
                    if (!Ie())
                        return null;
                    const e = "surfly_default_settings:" + t;
                    let n = localStorage.getItem(e);
                    try {
                        n = JSON.parse(n)
                    } catch (t) {
                        n = null
                    }
                    return n
                }(this._userSettings.widget_key);
                e ? (t(e),
                this._fetchDefaultSettingsInBackground()) : this._fetchDefaultSettings(t)
            } else
                t({})
        }
        _fetchDefaultSettings(t) {
            he(de.mainWindow.SURFLY_COBRO_ORIGIN + "/v2/company/options/?api_key=" + this._userSettings.widget_key, null, "GET").then(e=>{
                or(this._userSettings.widget_key, e),
                t(e)
            }
            , t=>{
                this._defaultSettings = !1,
                console.error("Couldn't retrieve default settings: " + t),
                this._checkReady()
            }
            )
        }
        _fetchDefaultSettingsInBackground() {
            he(de.mainWindow.SURFLY_COBRO_ORIGIN + "/v2/company/options/?api_key=" + this._userSettings.widget_key, null, "GET").then(t=>{
                or(this._userSettings.widget_key, t)
            }
            , t=>{
                console.error("Error retrieving default settings: ", t)
            }
            )
        }
        _fetchTranslation(t) {
            if ("en" === t)
                return this._translationLoaded = !0,
                void this._checkReady();
            5 === (t = t.replace("-", "_")).length && (t = t.substring(0, 3) + t.substring(3).toUpperCase()),
            7 === t.length && (t = t.substring(0, 3) + t[3].toUpperCase() + t.substring(4));
            he(`${de.mainWindow.SURFLY_COBRO_ORIGIN}/static/dashboard/translations/${t}.json`, null, "GET").then(t=>{
                var e, n;
                e = t,
                n = this.settings.verbose_console,
                Le = new Pe.a({
                    allowMissing: !n
                }),
                Le.extend(e),
                Ce = !0,
                this._translationLoaded = !0,
                this._checkReady()
            }
            , t=>{
                this._translationLoaded = !0,
                console.error("Error retrieving translation: " + t),
                this._checkReady()
            }
            )
        }
        get currentSession() {
            if (this._initStatus.successful && de.mainWindow.__surfly)
                return this._currentSession
        }
        get isInsideSession() {
            return Boolean(de.mainWindow.__surfly)
        }
        testConnection(t) {
            console.warn("Surfly.testConnection() is deprecated: WebSocket connection is not required anymore"),
            vt("Surfly.testConnection() called", "info"),
            t.call(this, {
                success: !0,
                errorMsg: null
            })
        }
        listSessions(t={}) {
            return this._assertInitialized("Surfly.listSessions()") ? t.active ? this._allSessions.filter(t=>!t.ended) : this._allSessions : null
        }
        on(t, e) {
            if (wt({
                category: "JS API",
                message: "Attaching to " + t,
                level: B.Info
            }),
            -1 !== Tn.indexOf(t))
                this._sessionEventHandlers[t].push(e),
                this.listSessions().forEach(n=>{
                    n.on(t, e)
                }
                );
            else if (-1 !== In.indexOf(t)) {
                const n = "agent_status" === t && null === this._agentAvailable;
                if (n && !this._widgetKeyProvided("listen for agent_status"))
                    return this;
                this._globalEventsEmitter.addListener(t, e.bind(this, this)),
                n && this._startAgentPoll()
            } else
                console.warn("Unknown event", t);
            return this
        }
        session(t, e, n) {
            if (!this._assertInitialized("Surfly.session()"))
                return null;
            if (!e && !n && !this._widgetKeyProvided("create a new session (without a link or session ID)"))
                return;
            if (de.mainWindow.__surfly)
                return console.error("Cannot create sessions inside a session"),
                null;
            const r = new eo(this,t,e,n);
            return Tn.forEach(t=>{
                this._sessionEventHandlers[t].forEach(e=>{
                    r.on(t, e)
                }
                )
            }
            ),
            this._allSessions.push(r),
            r
        }
        button(t) {
            return this._assertInitialized("Surfly.button()") && this._widgetKeyProvided("create sessions with a button") ? de.mainWindow.__surfly ? null : (wt({
                category: "JS API",
                message: "Surfly button added",
                level: B.Info
            }),
            new Cn(this,t)) : null
        }
        proxifyUrl(t, e, n, r, o=!1) {
            return new to({
                server_name: r,
                session_id: n,
                url_mangling: o,
                urltoken: e
            }).proxifyUrl(t, null, ir.TYPE_TOP)
        }
    }
    ;
    window.mainWindow = window.parent,
    window.__surfly || (!function(t) {
        if (void 0 === t && (t = {}),
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = te),
        void 0 === t.release) {
            var e = Object(p.e)();
            e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
        }
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !1),
        function(t, e) {
            !0 === e.debug && b.enable();
            var n = j()
              , r = new t(e);
            n.bindClient(r)
        }(Jt, t),
        t.autoSessionTracking && function() {
            var t = Object(p.e)()
              , e = j()
              , n = "complete" === document.readyState
              , r = !1
              , o = function() {
                r && n && e.endSession()
            }
              , i = function() {
                n = !0,
                o(),
                t.removeEventListener("load", i)
            };
            e.startSession(),
            n || t.addEventListener("load", i);
            try {
                var s = new PerformanceObserver((function(t, e) {
                    t.getEntries().forEach((function(t) {
                        "first-contentful-paint" === t.name && t.startTime < a && (e.disconnect(),
                        r = !0,
                        o())
                    }
                    ))
                }
                ))
                  , a = "hidden" === document.visibilityState ? 0 : 1 / 0;
                document.addEventListener("visibilitychange", (function(t) {
                    a = Math.min(a, t.timeStamp)
                }
                ), {
                    once: !0
                }),
                s.observe({
                    type: "paint",
                    buffered: !0
                })
            } catch (t) {
                r = !0,
                o()
            }
        }()
    }({
        dsn: "https://510f80906f4d429ba882cf65fdfbbca6@sentry.io/1545691",
        release: "Mar09-59207c50898d497cc15f3a896eb72c8fdba5bc27",
        integrations: [new re.GlobalHandlers({
            onunhandledrejection: !1
        }), new ue({
            iteratee: t=>("<anonymous>" === t.filename && (t.filename = "~/static/bundles/widget/apiframe.js"),
            t)
        })]
    }),
    bt(t=>{
        t.setTag("logger", "jsapi")
    }
    )),
    window.mainWindow.Surfly && window.mainWindow.Surfly._notadummy || (window.mainWindow.Surfly && window.mainWindow.Surfly.q && no.init.apply(no, window.mainWindow.Surfly.q),
    window.mainWindow.Surfly = no)
}
, , , function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "a", (function() {
            return c
        }
        ));
        var r = n(4)
          , o = n(10)
          , i = {
            nowSeconds: function() {
                return Date.now() / 1e3
            }
        };
        var s = Object(o.b)() ? function() {
            try {
                return Object(o.a)(t, "perf_hooks").performance
            } catch (t) {
                return
            }
        }() : function() {
            var t = Object(r.e)().performance;
            if (t && t.now)
                return {
                    now: function() {
                        return t.now()
                    },
                    timeOrigin: Date.now() - t.now()
                }
        }()
          , a = void 0 === s ? i : {
            nowSeconds: function() {
                return (s.timeOrigin + s.now()) / 1e3
            }
        }
          , c = i.nowSeconds.bind(i);
        a.nowSeconds.bind(a),
        function() {
            var t = Object(r.e)().performance;
            if (t)
                t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now()
        }()
    }
    ).call(this, n(20)(t))
}
]);
