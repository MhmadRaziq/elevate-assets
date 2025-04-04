
!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "67095cfc-8759-44b5-998b-7d964a5d87f9"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-67095cfc-8759-44b5-998b-7d964a5d87f9"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185],
    {
      65627: function (e, t, n) {
        Promise.resolve().then(n.t.bind(n, 97027, 23)),
          Promise.resolve().then(n.t.bind(n, 41292, 23)),
          Promise.resolve().then(n.bind(n, 64138)),
          Promise.resolve().then(n.bind(n, 28491)),
          Promise.resolve().then(n.bind(n, 26774)),
          Promise.resolve().then(n.bind(n, 57034)),
          Promise.resolve().then(n.bind(n, 91573)),
          Promise.resolve().then(n.bind(n, 31773)),
          Promise.resolve().then(n.bind(n, 31136)),
          Promise.resolve().then(n.bind(n, 18268)),
          Promise.resolve().then(n.bind(n, 72583)),
          Promise.resolve().then(n.bind(n, 48014)),
          Promise.resolve().then(n.bind(n, 60411)),
          Promise.resolve().then(n.t.bind(n, 38981, 23)),
          Promise.resolve().then(n.t.bind(n, 11460, 23)),
          Promise.resolve().then(n.t.bind(n, 53699, 23)),
          Promise.resolve().then(n.t.bind(n, 17757, 23)),
          Promise.resolve().then(n.t.bind(n, 73880, 23)),
          Promise.resolve().then(n.t.bind(n, 51834, 23)),
          Promise.resolve().then(n.t.bind(n, 81211, 23)),
          Promise.resolve().then(n.t.bind(n, 35249, 23)),
          Promise.resolve().then(n.t.bind(n, 80102, 23)),
          Promise.resolve().then(n.t.bind(n, 69645, 23)),
          Promise.resolve().then(n.t.bind(n, 60824, 23)),
          Promise.resolve().then(n.t.bind(n, 4215, 23)),
          Promise.resolve().then(n.t.bind(n, 39827, 23)),
          Promise.resolve().then(n.bind(n, 43538)),
          Promise.resolve().then(n.bind(n, 62511));
      },
      28023: function (e, t, n) {
        "use strict";
        n.d(t, {
          Dj: function () {
            return o.useCountry;
          },
          aq: function () {
            return r.useExperiment;
          },
          bP: function () {
            return i.useAppHostname;
          },
          zC: function () {
            return o.getCurrency;
          },
        });
        var r = n(48014),
          i = n(18268);
        n(60411);
        var o = n(72583);
      },
      18268: function (e, t, n) {
        "use strict";
        n.d(t, {
          HostnameProvider: function () {
            return a;
          },
          useAppHostname: function () {
            return c;
          },
        });
        var r = n(27573),
          i = n(7653);
        let o = "elevatereputation.com",
          s = (0, i.createContext)(o),
          c = () => (0, i.useContext)(s),
          a = (e) => {
            let { children: t, appHostname: n } = e;
            return (0, r.jsx)(s.Provider, {
              value: null != n ? n : o,
              children: t,
            });
          };
      },
      72583: function (e, t, n) {
        "use strict";
        n.d(t, {
          CountryProvider: function () {
            return d;
          },
          getCurrency: function () {
            return s;
          },
          useCountry: function () {
            return a;
          },
        });
        var r = n(27573),
          i = n(7653);
        let o = { default: "$" },
          s = (e) => o[e] || o.default,
          c = (0, i.createContext)({ country: "", currency: o.default }),
          a = () => (0, i.useContext)(c),
          d = (e) => {
            let { children: t, country: n } = e,
              i = s(n);
            return (0, r.jsx)(c.Provider, {
              value: { country: n, currency: i },
              children: t,
            });
          };
      },
      48014: function (e, t, n) {
        "use strict";
        n.d(t, {
          ExperimentProvider: function () {
            return d;
          },
          useExperiment: function () {
            return a;
          },
        });
        var r = n(27573),
          i = n(7653),
          o = n(3020);
        let s = (e, t, n, r) => {
            let { csrfToken: i, ...s } = n;
            fetch("/landing-api/event", {
              method: "POST",
              keepalive: !0,
              headers: {
                "Content-Type": "application/json",
                "x-csrf-token": i || "",
              },
              body: JSON.stringify({
                event_name: e,
                payload: { pathname: t, ts: Date.now(), ...r, ...s },
              }),
            })
              .then((e) => {
                e.ok ||
                  (0, o.H)(
                    "Failed to send event with status: ".concat(e.status)
                  );
              })
              .catch((e) => {
                (0, o.H)(e);
              });
          },
          c = (0, i.createContext)(void 0),
          a = () => (0, i.useContext)(c),
          d = (e) => {
            let { children: t } = e,
              [n, o] = (0, i.useState)({
                group: null,
                experimentName: null,
                id: null,
                csrfToken: null,
              });
            return (0, r.jsx)(c.Provider, {
              value: {
                handleClick: (e, t, r) => {
                  s(e, t, n, r);
                },
                handleLoad: (e, t) => {
                  s("page-load", t, e);
                },
                setExperimentData: o,
              },
              children: t,
            });
          };
      },
      60411: function (e, t, n) {
        "use strict";
        n.d(t, {
          TopBarThemeProvider: function () {
            return c;
          },
          useTopBarTheme: function () {
            return s;
          },
        });
        var r = n(27573),
          i = n(7653);
        let o = (0, i.createContext)({
            topBarTheme: "white",
            setTopBarTheme: () => {},
          }),
          s = () => (0, i.useContext)(o),
          c = (e) => {
            let { children: t, initialTopBarTheme: n = "white" } = e,
              [s, c] = (0, i.useState)(n);
            return (0, r.jsx)(o.Provider, {
              value: { topBarTheme: s, setTopBarTheme: c },
              children: t,
            });
          };
      },
      43538: function (e, t, n) {
        "use strict";
        n.d(t, {
          default: function () {
            return f;
          },
        });
        var r = n(27573),
          i = n(7653),
          o = n(76736),
          s = n.n(o),
          c = n(81695),
          a = n(99279),
          d = n(83733),
          l = n(96404),
          u = n(29253),
          h = n(3020);
        let m = (e, t) => {
          fetch("/landing-api/consent-event", {
            method: "POST",
            keepalive: !0,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ event_name: e, payload: t }),
          })
            .then((e) => {
              e.ok ||
                (0, h.H)("Failed to send event with status: ".concat(e.status));
            })
            .catch((e) => {
              (0, h.H)(e);
            });
        };
        var f = (e) => {
          let { children: t } = e,
            n = (0, c.usePathname)();
          (0, i.useRef)(n);
          let o = (0, i.useRef)(null);
          return ((0, i.useRef)([]),
          (0, i.useEffect)(() => {
            let e = new URL(window.location.href).searchParams,
              [t, r, i, o, s, c] = [
                e.get("gspk"),
                e.get("gsxid"),
                e.get("irclickid"),
                e.get("mcdc"),
                e.get("ps_partner_key"),
                e.get("ps_xid"),
              ];
            i &&
              !(0, a.ej)("ImpactClickId") &&
              (0, a.d8)(
                "ImpactClickId",
                JSON.stringify({
                  clickId: i,
                  createdTimestamp: (new Date().getTime() / 1e3) | 0,
                }),
                182
              ),
              t && (0, a.d8)("gspk", t, 31),
              r && (0, a.d8)("gsxid", r, 31),
              o && (0, a.d8)("mcdc", o, 31),
              s && (0, a.d8)("ps_partner_key", s, 31),
              c && (0, a.d8)("ps_xid", c, 31),
              window.addEventListener("UC_UI_CMP_EVENT", (e) => {
                "CMP_SHOWN" === e.detail.type &&
                  m("usercentrics_banner_shown", {
                    pathname: n,
                    ts: Date.now(),
                    id: (0, a.ej)("visitorId"),
                  });
              }),
              window.addEventListener("UC_CONSENT", (e) => {
                let t = {
                  controllerId: e.detail.consent.controllerId,
                  services: Object.fromEntries(
                    Object.entries(e.detail.services).map((e) => {
                      let [t, n] = e;
                      return [
                        t,
                        {
                          name: n.name,
                          category: n.category,
                          consent: n.consent.given,
                        },
                      ];
                    })
                  ),
                };
                m("usercentrics_banner_consent_set", {
                  pathname: n,
                  ts: Date.now(),
                  id: (0, a.ej)("visitorId"),
                  consent: t,
                });
              });
          }, []),
          (0, i.useEffect)(() => {
            let e = document.getElementById("usercentrics-cmp");
            e &&
              e.setAttribute("nonce", s().randomBytes(16).toString("base64")),
              u.v.has(n)
                ? document.documentElement.classList.add("mc-html")
                : document.documentElement.classList.remove("mc-html");
          }, [n]),
          (0, i.useEffect)(() => {
            if ((d.ZP.registerPlugin(l.ScrollTrigger), !o.current)) return;
            let e = window.location.pathname,
              t = () => {
                var t;
                let n =
                  null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.querySelectorAll(".trigger");
                if (n && n.length > 0)
                  for (let t of ((e = window.location.pathname), n))
                    l.ScrollTrigger.create({
                      trigger: t,
                      start: () => {
                        var e;
                        return (
                          null === (e = t.dataset) || void 0 === e
                            ? void 0
                            : e.first
                        )
                          ? "top bottom"
                          : "top bottom-=200";
                      },
                      end: "max",
                      once: !0,
                      toggleClass: "trigger_active",
                    });
              };
            t();
            let n = new MutationObserver((n) => {
              for (let r of n)
                "childList" === r.type && e !== window.location.pathname && t();
            });
            return (
              n.observe(o.current, { childList: !0, subtree: !0 }),
              () => n.disconnect()
            );
          }, []),
          n)
            ? (0, r.jsx)("div", { ref: o, children: t })
            : null;
        };
      },
      62511: function (e, t, n) {
        "use strict";
        var r = n(60755),
          i = n(99279),
          o = n(28023);
        let s = async (e, t) => {
          let n;
          let r = navigator.sendBeacon.bind(navigator);
          if (r) {
            if (!(n = r(e, new Blob([t], { type: "application/json" }))))
              throw Error("Beacon not sent");
          } else if (
            !(n = await fetch(e, {
              body: t,
              method: "POST",
              headers: { "Content-Type": "application/json" },
              keepalive: !0,
            })).ok ||
            200 !== n.status
          )
            throw Error("HTTP error! status: ".concat(n.status));
          if (n && !0 !== n) {
            let e = await n.json();
            if (!1 === e.state)
              throw Error(
                e.error ||
                  (e.errors && e.errors.length > 0 && e.errors.join(", "))
              );
          }
        };
        t.default = () => {
          let e = (0, o.bP)(),
            t = (0, i.fr)(e, { path: "/analytics/martProfMetrics" });
          return (
            (0, r.useReportWebVitals)((e) => {
              let { entries: n, id: r, ...o } = e;
              if (!o.value) return;
              let c = JSON.stringify({
                event: "LANDING.METRICS",
                data: [
                  {
                    ...o,
                    timestamp: Date.now(),
                    url:
                      window.location.pathname.length > 63
                        ? ""
                            .concat(window.location.pathname.slice(0, 31), "-")
                            .concat(window.location.pathname.slice(-31))
                        : window.location.pathname,
                    device_type: (0, i.AV)(),
                    environment: "production",
                    service: "landing",
                  },
                ],
              });
              try {
                s(t, c);
              } catch (e) {
                (0, i.H)(e);
              }
            }),
            null
          );
        };
      },
      29253: function (e, t, n) {
        "use strict";
        n.d(t, {
          l: function () {
            return i;
          },
          v: function () {
            return r;
          },
        });
        let r = new Set(["/creators-b", "/purchase"]),
          i = {
            "/creators-b": { btnColor: "yellow", btnTextColor: "black" },
            "/purchase": {
              btnColor: "amethyst",
              btnTextColor: "white",
            },
          };
      },
      69645: function () {},
      60824: function () {},
      38981: function () {},
      80102: function () {},
      53699: function () {},
      17757: function () {},
      73880: function () {},
      51834: function () {},
      81211: function () {},
      11460: function () {},
      4215: function () {},
      35249: function () {},
      39827: function () {},
      64138: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mccdn.me/martech/next-lp//_next/static/media/affiliate.193aa077.svg",
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      28491: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mccdn.me/martech/next-lp//_next/static/media/ai.9f66e1b4.svg",
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      26774: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mccdn.me/martech/next-lp//_next/static/media/find_agency.9a9db1ea.svg",
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      57034: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mhmadraziq.github.io/elevate-assets/images/Google.svg",
            height: 70,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      91573: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mhmadraziq.github.io/elevate-assets/images/MessengerDM.png",
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      31773: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mccdn.me/martech/next-lp//_next/static/media/tiktok.2628dce8.svg",
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      31136: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            src: "https://mhmadraziq.github.io/elevate-assets/images/WhatsappDM.png",
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
    },
    function (e) {
      e.O(
        0,
        [5679, 3293, 753, 372, 2044, 6404, 6556, 1293, 1523, 7630, 1744],
        function () {
          return e((e.s = 65627));
        }
      ),
        (_N_E = e.O());
    },
  ]);
//# sourceMappingURL=layout-b8e2b7c7baa08da2.js.map
