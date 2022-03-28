function runSurflyCode() {
/****************************************************************************************
 * Official javascript via https://surfly.com/surfly.js on 03/14/2022
 * ------------------------------------BEGIN---------------------------------------------
 ****************************************************************************************/
!(function (t) {
    var n = {};
    function o(r) {
        if (n[r]) return n[r].exports;
        var e = (n[r] = { i: r, l: !1, exports: {} });
        return t[r].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
    }
    (o.m = t),
        (o.c = n),
        (o.d = function (t, n, r) {
            o.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
        }),
        (o.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (o.t = function (t, n) {
            if ((1 & n && (t = o(t)), 8 & n)) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t))
                for (var e in t)
                    o.d(
                        r,
                        e,
                        function (n) {
                            return t[n];
                        }.bind(null, e)
                    );
            return r;
        }),
        (o.n = function (t) {
            var n =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return o.d(n, "a", n), n;
        }),
        (o.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }),
        (o.p = "/static/bundles/widget/"),
        o((o.s = 33));
})({
    26: function (t, n, o) {
        "use strict";
        var r = o(9),
            e = o.n(r)()(!1);
        e.push([
            t.i,
            "#surfly-api-frame{background:none transparent;z-index:2147483548!important;border:0;overflow:hidden}#surfly-api-frame.surfly-invisible{display:none!important}#surfly-api-frame.surfly-splash{display:block!important;position:fixed!important;top:0!important;left:0!important;width:100%!important;height:50px!important;border:0!important}@media(max-width:767px){#surfly-api-frame.surfly-splash{height:auto!important}}#surfly-api-frame.surfly-blocker,#surfly-api-frame.surfly-popup{display:block!important;position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important}#surfly-api-frame.surfly-button{display:block!important;position:fixed!important;box-shadow:0 0 12px 2px rgba(0,0,0,.2);visibility:initial!important}#surfly-api-frame.surfly-button.surfly-button-position-bottomleft{left:80px!important;bottom:0!important;width:170px!important;height:26px!important;border-top-left-radius:5px;border-top-right-radius:5px}#surfly-api-frame.surfly-button.surfly-button-position-bottomright{right:80px!important;bottom:0!important;width:170px!important;height:26px!important;border-top-left-radius:5px;border-top-right-radius:5px}#surfly-api-frame.surfly-button.surfly-button-position-middleright{right:0!important;top:50%!important;width:26px!important;height:170px!important;transform:translateY(-50%)!important;border-top-left-radius:5px;border-bottom-left-radius:5px}#surfly-api-frame.surfly-button.surfly-button-position-middleleft{left:0!important;top:50%!important;width:26px!important;height:170px!important;transform:translateY(-50%)!important;border-top-right-radius:5px;border-bottom-right-radius:5px}.surfly-hide-ios>:not(.surfly-ignore){display:none}",
            "",
        ]),
            (n.a = e);
    },
    3: function (t, n, o) {
        "use strict";
        o.d(n, "d", function () {
            return r;
        }),
            o.d(n, "f", function () {
                return e;
            }),
            o.d(n, "a", function () {
                return i;
            }),
            o.d(n, "e", function () {
                return a;
            }),
            o.d(n, "g", function () {
                return p;
            }),
            o.d(n, "b", function () {
                return u;
            }),
            o.d(n, "c", function () {
                return c;
            });
        function r(t) {
            return (
                "?" +
                Object.keys(t)
                    .map(function (n) {
                        return encodeURIComponent(n) + "=" + encodeURIComponent(t[n]);
                    })
                    .join("&")
            );
        }
        function e(t) {
            const n = document.createElement("a");
            n.href = t;
            const o = { protocol: n.protocol, hostname: n.hostname, href: n.href, pathname: n.pathname, host: n.host, port: n.port, origin: n.origin, search: n.search };
            return (
                (("443" === n.port && "https:" === n.protocol) || ("80" === n.port && "http:" === n.protocol)) && ((o.port = ""), (o.host = o.hostname)),
                "/" !== n.pathname[0] && (o.pathname = "/" + o.pathname),
                (o.origin = o.protocol + "//" + o.hostname + (o.port ? ":" + o.port : "")),
                o
            );
        }
        function i(t, n) {
            let o = "";
            (t = t.split(".")), (n = n.split(".")), t.reverse(), n.reverse();
            for (let r = 0; r < t.length && r < n.length && t[r] === n[r]; r++) o = "." + t[r] + o;
            return o;
        }
        function a(t) {
            if (!t) return null;
            const n = {};
            "?" === t[0] && (t = t.substr(1));
            const o = t.replace(/\+/g, " ").split("&");
            let r = !0;
            for (let t = 0; t < o.length; t++) {
                const e = o[t].split("="),
                    i = decodeURIComponent(e[0]);
                i && (e.length > 2 && (e[1] = e.slice(1).join("=")), (n[i] = decodeURIComponent(e[1] || "")), (r = !1));
            }
            return r ? null : n;
        }
        function p(t) {
            const n = /^www\.(.*)/.exec(t);
            return n ? n[1] : t;
        }
        function u(t) {
            return 0 === t.indexOf("http://") || 0 === t.indexOf("https://");
        }
        function c(t) {
            const n = t.indexOf("#");
            return -1 === n ? t : t.substring(0, n);
        }
    },
    33: function (t, n, o) {
        "use strict";
        o.r(n);
        var r = o(26),
            e = o(3);
        window.SURFLY_COBRO_ORIGIN = document.currentScript ? new URL(document.currentScript.src).origin.replace("//app.", "//") : Object(e.f)(document.querySelector("script[src*='/surfly.js']").src).origin.replace("//app.", "//");
        const i = document.createElement("iframe");
        function a() {
            document.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.write("<!doctype html><head></head><body></body></html>"), i.contentWindow.document.close();
            const t = i.contentWindow.document.createElement("script");
            (t.src = window.SURFLY_COBRO_ORIGIN + "/static/bundles/widget/apiframe.js"), i.contentWindow.document.body.appendChild(t);
        }
        (i.id = "surfly-api-frame"),
            (i.name = "surfly-api-frame"),
            (i.className = "surfly-invisible"),
            (i.scrolling = "no"),
            (window.surflyApiFrame = i),
            "loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a),
            (function () {
                const t = window.document.createElement("style");
                (t.textContent = r.a.toString()), window.document.head.appendChild(t);
            })();
    },
    9: function (t, n, o) {
        "use strict";
        t.exports = function (t) {
            var n = [];
            return (
                (n.toString = function () {
                    return this.map(function (n) {
                        var o = (function (t, n) {
                            var o = t[1] || "",
                                r = t[3];
                            if (!r) return o;
                            if (n && "function" == typeof btoa) {
                                var e = ((a = r), (p = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p)), "/*# ".concat(u, " */")),
                                    i = r.sources.map(function (t) {
                                        return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                                    });
                                return [o].concat(i).concat([e]).join("\n");
                            }
                            var a, p, u;
                            return [o].join("\n");
                        })(n, t);
                        return n[2] ? "@media ".concat(n[2], " {").concat(o, "}") : o;
                    }).join("");
                }),
                (n.i = function (t, o, r) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var e = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (e[a] = !0);
                        }
                    for (var p = 0; p < t.length; p++) {
                        var u = [].concat(t[p]);
                        (r && e[u[0]]) || (o && (u[2] ? (u[2] = "".concat(o, " and ").concat(u[2])) : (u[2] = o)), n.push(u));
                    }
                }),
                n
            );
        };
    },
});
/****************************************************************************************
 * ------------------------------------------- END --------------------------------------
 ****************************************************************************************/
}
module.exports = {
	runSurflyCode: runSurflyCode
}