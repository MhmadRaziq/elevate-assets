!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = 'dd4363de-8c25-4c36-9867-7818734022a6'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-dd4363de-8c25-4c36-9867-7818734022a6'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1700],
    {
      28023: function (e, t, r) {
        'use strict';
        r.d(t, {
          Dj: function () {
            return s.useCountry;
          },
          aq: function () {
            return n.useExperiment;
          },
          bP: function () {
            return a.useAppHostname;
          },
          zC: function () {
            return s.getCurrency;
          },
        });
        var n = r(48014),
          a = r(18268);
        r(60411);
        var s = r(72583);
      },
      72583: function (e, t, r) {
        'use strict';
        r.d(t, {
          CountryProvider: function () {
            return o;
          },
          getCurrency: function () {
            return l;
          },
          useCountry: function () {
            return c;
          },
        });
        var n = r(27573),
          a = r(7653);
        let s = { default: '£' },
          l = e => s[e] || s.default,
          i = (0, a.createContext)({ country: '', currency: s.default }),
          c = () => (0, a.useContext)(i),
          o = e => {
            let { children: t, country: r } = e,
              a = l(r);
            return (0, n.jsx)(i.Provider, { value: { country: r, currency: a }, children: t });
          };
      },
      35371: function (e, t, r) {
        'use strict';
        var n = r(27573);
        r(7653);
        var a = r(33742);
        t.default = e => {
          let { className: t } = e;
          return (0, n.jsx)('div', {
            className: 'none md-block arrow '.concat(a.arrow, ' ').concat(t),
          });
        };
      },
      24060: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(99279),
          l = r(50294),
          i = r(79782),
          c = r(59437);
        t.default = e => {
          let { title: t, description: r, link: o, image: d } = e,
            m = (0, a.useRef)(null),
            u = (0, a.useRef)(0),
            _ = (0, a.useRef)(0),
            p = (0, a.useRef)(0),
            h = (0, a.useRef)(0),
            x = (0, a.useRef)(0),
            g = (0, a.useRef)(0),
            { children: v, ...f } = o;
          return (
            (0, a.useEffect)(() => {
              let e = () => {
                  m.current &&
                    ((p.current = m.current.offsetWidth), (h.current = m.current.offsetHeight));
                },
                t = () => {
                  (x.current = window.scrollX), (g.current = window.scrollY);
                };
              return (
                e(),
                t(),
                window.addEventListener('resize', (0, s.P2)(e, 300), { passive: !0 }),
                window.addEventListener('scroll', t, { passive: !0 }),
                () => {
                  window.removeEventListener('resize', e), window.removeEventListener('scroll', t);
                }
              );
            }, []),
            (0, n.jsxs)('div', {
              className: c.card,
              onMouseEnter: () => {
                if (!(window.innerWidth < 1025) && m.current) {
                  let e = m.current.parentElement,
                    t = null == e ? void 0 : e.querySelectorAll('.'.concat(c.card));
                  if (t) {
                    let e = Array.from(t).indexOf(m.current);
                    (u.current = (0, s.cv)(m.current).top), (_.current = (0, s.cv)(m.current).left);
                    for (let r = 0; r < t.length; r++)
                      e < r
                        ? t[r].classList.add(c.hoverPrev)
                        : e > r && t[r].classList.add(c.hoverNext);
                  }
                }
              },
              onMouseLeave: () => {
                if (!(window.innerWidth < 1025) && m.current) {
                  let e = m.current.parentElement,
                    t = null == e ? void 0 : e.querySelectorAll('.'.concat(c.card));
                  if (t)
                    for (let e = 0; e < t.length; e++) {
                      let r = t[e];
                      r.classList.remove(c.hoverPrev, c.hoverNext),
                        r.style.setProperty('--x', '0deg'),
                        r.style.setProperty('--y', '0deg'),
                        r.style.setProperty('--scale', '1');
                    }
                }
              },
              onMouseMove: e => {
                if (!(window.innerWidth < 1025) && m.current) {
                  let t = ((e.clientX - _.current + x.current) / p.current) * 2 - 1,
                    r = ((e.clientY - u.current + g.current) / h.current) * 2 - 1;
                  m.current.style.setProperty('--x', ''.concat(-4 * r, 'deg')),
                    m.current.style.setProperty('--y', ''.concat(4 * t, 'deg')),
                    m.current.style.setProperty('--scale', '1.05'),
                    m.current.style.setProperty('--x-content', ''.concat(10 * r, 'deg')),
                    m.current.style.setProperty('--y-content', ''.concat(-10 * t, 'deg'));
                }
              },
              ref: m,
              children: [
                (0, n.jsx)('div', { className: c.background }),
                (0, n.jsxs)(i.rU, {
                  className:
                    'relative flex flex_fdc flex_fit p_x-l p_b-xl p_t-l z-i_1 z_0 hover_trigger',
                  ...f,
                  children: [
                    (0, n.jsx)('div', {
                      className: ''.concat(c.image),
                      children: (0, n.jsx)(l.default, {
                        src: d.src,
                        width: d.width,
                        height: d.height,
                        alt: d.alt,
                      }),
                    }),
                    (0, n.jsxs)('div', {
                      className: 'm_t-m',
                      children: [
                        (0, n.jsx)('span', { className: 'accent', children: t }),
                        (0, n.jsx)('p', { className: 'small', children: r }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex caps m_t-m',
                      children: [
                        (0, n.jsx)('div', { className: 'underline_link', children: v }),
                        (0, n.jsx)('div', { className: 'none sm-block m_l-xs arrow' }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      },
      83828: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(83733);
        t.default = e => {
          let { chat: t, isStart: r = !1, isAnimatingOut: l = !1 } = e,
            i = (0, a.useRef)([]),
            c = (0, a.useRef)(null),
            o = (0, a.useRef)([]);
          return (
            (0, a.useEffect)(
              () => (
                o.current.forEach(e => e.kill()),
                (o.current = []),
                i.current.forEach(e => {
                  s.ZP.set(e, { opacity: 0, y: 0, clearProps: 'transform' });
                }),
                c.current && s.ZP.set(c.current, { y: 0, clearProps: 'opacity' }),
                r && !l
                  ? t.bubbles.forEach((e, t) => {
                      if (!i.current[t]) return;
                      let r = i.current[t],
                        n = s.ZP.fromTo(
                          r,
                          { y: 50, opacity: 0 },
                          { y: 0, opacity: 1, duration: 0.5, ease: 'power1.inOut', delay: 0.15 * t }
                        );
                      o.current.push(n);
                    })
                  : l &&
                    t.bubbles.forEach((e, t) => {
                      let r = i.current[t],
                        n = s.ZP.fromTo(
                          r,
                          { opacity: 1, y: 0 },
                          {
                            opacity: 0,
                            y: -30,
                            duration: 0.3,
                            ease: 'power1.inOut',
                            delay: (0.15 * t) / 2,
                          }
                        );
                      o.current.push(n);
                    }),
                () => {
                  o.current.forEach(e => e.kill()), (o.current = []);
                }
              ),
              [r, l]
            ),
            (0, n.jsx)('div', {
              className: 'gap-0.8rem relative flex w-full transform-gpu flex-col',
              ref: c,
              children: t.bubbles.map((e, t) =>
                (0, n.jsx)(
                  'img',
                  {
                    ...e,
                    className: 'transform-gpu opacity-0',
                    onClick: () => {
                      var t, r;
                      (null === (t = e.event) || void 0 === t ? void 0 : t.gaDataEventName) &&
                        (null === (r = e.event) || void 0 === r ? void 0 : r.gaDataCtaId) &&
                        window.gtag &&
                        window.gtag('event', e.event.gaDataEventName, {
                          ctaID: e.event.gaDataCtaId,
                          transport_type: 'beacon',
                        });
                    },
                    style: { top: 50 },
                    ref: e => {
                      e && (i.current[t] = e);
                    },
                  },
                  'bubble-' + t
                )
              ),
            })
          );
        };
      },
      40545: function (e, t, r) {
        'use strict';
        var n = r(7653);
        t.default = e => {
          let { event: t, isPreview: r } = e,
            [a, s] = (0, n.useState)(0);
          return (
            (0, n.useEffect)(() => {
              let e;
              let n = () => {
                void 0 !== window.clarity
                  ? r || window.clarity('event', t)
                  : a < 10 && (s(e => e + 1), (e = setTimeout(n, 500)));
              };
              return n(), () => clearTimeout(e);
            }, []),
            null
          );
        };
      },
      29038: function (e, t, r) {
        'use strict';
        r.r(t),
          r.d(t, {
            contentReplacers: function () {
              return i;
            },
            default: function () {
              return c;
            },
          });
        var n = r(27573);
        r(7653);
        var a = r(6062),
          s = r(58200),
          l = r(32253);
        let i = {
          '+': (0, n.jsx)('img', {
            alt: '+',
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/mark.17a92138.svg',
            className: s.icon,
          }),
          '-': (0, n.jsx)('img', {
            alt: '+',
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/minus.811f918c.svg',
            className: s.icon,
          }),
        };
        var c = e => {
          let { title: t, tooltip: r, visibleCompared: c, params: o } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)('hr', { className: 'm_y-m' }),
              t &&
                (0, n.jsxs)('div', {
                  className: 'p text_grey m_b-xs '.concat(s.title),
                  children: [
                    (0, n.jsx)('h4', { children: t }),
                    r &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          '\xa0\xa0',
                          (0, n.jsx)(a.Z, { message: r, className: s.tooltip }),
                        ],
                      }),
                  ],
                }),
              (0, n.jsx)('table', {
                className: ''
                  .concat(s.table, ' ')
                  .concat(2 === o[0].compared.length ? s.cols2 : ''),
                children: (0, n.jsx)('tbody', {
                  children: o.map((e, t) =>
                    (0, n.jsxs)(
                      'tr',
                      {
                        children: [
                          (0, n.jsxs)('td', {
                            className: 'p '
                              .concat(s.td, ' ')
                              .concat(e.titleAccented ? 'text_bold' : ''),
                            children: [
                              e.link
                                ? (0, n.jsx)(l.rU, {
                                    to: e.link,
                                    className: 'underline_link',
                                    children: e.title,
                                  })
                                : e.title,
                              e.tooltip &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    '\xa0\xa0',
                                    (0, n.jsx)(a.Z, { message: e.tooltip, className: s.tooltip }),
                                  ],
                                }),
                            ],
                          }),
                          e.compared.map(e =>
                            (0, n.jsx)(
                              'td',
                              {
                                className: 'p relative '
                                  .concat(c && e.name !== c ? 'none' : 'visible', ' ')
                                  .concat(e.accent ? 'text_bold' : 'text_grey', ' ')
                                  .concat(s.td),
                                children: i[e.value] || e.value,
                              },
                              'comparable-'.concat(e.name)
                            )
                          ),
                        ],
                      },
                      'param-'.concat(t)
                    )
                  ),
                }),
              }),
            ],
          });
        };
      },
      38088: function (e, t, r) {
        'use strict';
        r.d(t, {
          default: function () {
            return i;
          },
        });
        var n = r(27573),
          a = r(7653),
          s = e => {
            let { name: t, active: r, onClick: s } = e,
              l = (0, a.useCallback)(() => {
                s(t);
              }, [t]);
            return (0, n.jsx)('div', {
              className: ''.concat(
                r ? 'bg_grey' : 'pointer bg_white',
                ' p text_bold p_a-s flex-item_grow'
              ),
              role: 'button',
              'aria-pressed': r,
              onClick: l,
              children: t,
            });
          },
          l = r(29038),
          i = e => {
            let { compared: t, groups: r, onVisibleComparedChange: i, ...c } = e,
              [o, d] = (0, a.useState)(c.visibleCompared || t[0] || '');
            return (
              (0, a.useEffect)(() => {
                c.visibleCompared !== o && d(c.visibleCompared || o);
              }, [c.visibleCompared]),
              (0, a.useEffect)(() => {
                'function' == typeof i && i(o);
              }, [o]),
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('div', {
                    className: 'sticky-under-header text_center flex flex_c sm-none p_y-xxs',
                    children: t.map(e =>
                      (0, n.jsx)(s, { active: e === o, name: e, onClick: d }, e)
                    ),
                  }),
                  r.map((e, t) =>
                    (0, a.createElement)(l.default, {
                      ...e,
                      visibleCompared: o,
                      key: 'group-'.concat(t),
                    })
                  ),
                ],
              })
            );
          };
      },
      59097: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(29306),
          s = r(7653),
          l = r(83733),
          i = r(96404),
          c = r(50294);
        t.default = e => {
          let { messages: t } = e,
            r = (0, s.useRef)(null),
            o = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            u = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              let e = l.ZP.timeline({ delay: 0.9 });
              return (
                e.fromTo(
                  r.current,
                  { opacity: 0, scale: 0, rotateZ: 0, transformOrigin: 'center center' },
                  {
                    duration: 0.5,
                    opacity: 1,
                    scale: 1,
                    rotateZ: -10,
                    ease: 'power2.inOut',
                    willChange: 'opacity, transform',
                  }
                ),
                e.fromTo(
                  o.current,
                  { opacity: 0, x: 10, y: '300%', scale: 0.7, transformOrigin: '100% 100%' },
                  {
                    duration: 0.5,
                    opacity: 1,
                    x: 0,
                    y: '240%',
                    scale: 1,
                    ease: 'power2.inOut',
                    willChange: 'opacity, transform',
                  }
                ),
                e
                  .fromTo(
                    d.current,
                    { opacity: 0, scaleX: 0.7, y: '180%', transformOrigin: '0 100%' },
                    {
                      duration: 0.5,
                      opacity: 1,
                      scaleX: 1,
                      y: '120%',
                      ease: 'power2.inOut',
                      willChange: 'scaleX, opacity',
                      delay: '0.5',
                    }
                  )
                  .fromTo(o.current, { y: '240%' }, { duration: 0.5, y: '120%', delay: '-0.5' }),
                e
                  .fromTo(
                    m.current,
                    { opacity: 0, x: 10, scale: 0.7, transformOrigin: '100% 100%' },
                    {
                      duration: 0.5,
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      ease: 'power2.inOut',
                      willChange: 'opacity, transform',
                      delay: '0.5',
                    }
                  )
                  .fromTo(o.current, { y: '120%' }, { duration: 0.5, y: 0, delay: '-0.5' })
                  .fromTo(d.current, { y: '120%' }, { duration: 0.5, y: '0', delay: '-0.5' }),
                l.ZP.registerPlugin(i.ScrollTrigger),
                l.ZP.to(u.current, {
                  y: '-50%',
                  ease: 'none',
                  willChange: 'transform',
                  scrollTrigger: { scrub: !0, trigger: u.current, start: 0, end: 'bottom top' },
                }),
                () => {
                  e.kill();
                }
              );
            }, []),
            (0, n.jsx)('div', {
              className: 'flex flex_jcc height trigger o_hidden '.concat(a.container),
              'data-first': !0,
              children: (0, n.jsxs)('div', {
                className: 'relative '.concat(a.phoneContainer),
                children: [
                  (0, n.jsx)(c.default, {
                    className: a.heroPhone,
                    src: 'https://mccdn.me/martcdn/next-lp/sections/SplitHeroSection/SplitHeroAnimation_hero.png',
                    width: 536,
                    height: 720,
                    quality: 100,
                    alt: 'Hero image',
                    style: { objectFit: 'contain' },
                  }),
                  (0, n.jsx)('div', {
                    className: 'flex '.concat(a.bubble, ' ').concat(a.instagram),
                    children: (0, n.jsx)('img', {
                      src: 'https://mccdn.me/martcdn/next-lp/sections/SplitHeroSection/SplitHeroAnimation_instagram.svg',
                      alt: 'Instagram icon',
                      ref: r,
                    }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'flex flex_jcfe '.concat(a.bubble, ' ').concat(a.bubble_01),
                    children: (0, n.jsx)('img', { src: t[0], alt: 'first chat bubble', ref: o }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'flex '.concat(a.bubble, ' ').concat(a.bubble_02),
                    children: (0, n.jsx)('img', { src: t[1], alt: 'second chat bubble', ref: d }),
                  }),
                  (0, n.jsx)('div', {
                    className: 'flex flex_jcfe '.concat(a.bubble, ' ').concat(a.bubble_03),
                    children: (0, n.jsx)('img', { src: t[2], alt: 'third chat bubble', ref: m }),
                  }),
                ],
              }),
            })
          );
        };
      },
      49818: function (e, t, r) {
        'use strict';
        r.d(t, {
          default: function () {
            return i;
          },
        });
        var n = r(27573),
          a = r(7653),
          s = r(30728);
        let l = e => {
          var t;
          let { isOpen: r, children: s, answer: l } = e,
            i = a.useRef(null),
            c = r ? (null === (t = i.current) || void 0 === t ? void 0 : t.scrollHeight) : 0;
          return (0, n.jsxs)('div', {
            className: 'border-b border-white/25',
            children: [
              s,
              (0, n.jsx)('div', {
                className:
                  'ease-mc translate-z-0 max-h-0 overflow-hidden text-white/60 transition-[max-height] duration-500 will-change-[max-height]',
                ref: i,
                style: { maxHeight: ''.concat(c, 'px') },
                children: (0, n.jsx)('div', {
                  className: 'mc-text-body pt-1.2rem pb-2rem',
                  children: l,
                }),
              }),
            ],
          });
        };
        var i = e => {
          let { title: t, contents: r } = e,
            [i, c] = (0, a.useState)(new Set()),
            o = e => {
              c(t => {
                let r = new Set(t);
                return r.has(e) ? r.delete(e) : r.add(e), r;
              });
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(s.default, { ...t }),
              (0, n.jsx)('div', {
                className: 'mt-mc-content mc-grid gap-8 md:grid-cols-12',
                children: (0, n.jsx)('div', {
                  className: 'md:col-span-8 md:col-start-3',
                  children: r.map((e, t) => {
                    let { question: r, answer: a } = e,
                      s = 'dropdown-'.concat(t),
                      c = i.has(s);
                    return (0, n.jsx)(
                      l,
                      {
                        isOpen: c,
                        answer: a,
                        children: (0, n.jsxs)('div', {
                          className: 'flex items-center justify-between',
                          onClick: o.bind(null, s),
                          children: [
                            (0, n.jsx)('div', {
                              className: 'py-2rem pr-3.2rem group w-full cursor-pointer',
                              children: (0, n.jsx)('div', {
                                className:
                                  'mc-text-body hover-hover:group-hover:translate-x-0.8rem ease-mc transition-transform duration-300 will-change-transform',
                                children: r,
                              }),
                            }),
                            (0, n.jsx)('img', {
                              src: 'https://mccdn.me/martech/next-lp//_next/static/media/mc-arrow-white.c1ee7235.svg',
                              className:
                                'ease-mc mr-[3px] w-[1.8rem] transition-transform duration-300 '.concat(
                                  c ? '[transform:rotateX(180deg)]' : ''
                                ),
                              alt: 'arrow ico',
                            }),
                          ],
                        }),
                      },
                      t
                    );
                  }),
                }),
              }),
            ],
          });
        };
      },
      33876: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(32253),
          s = r(50294),
          l = r(99712),
          i = r(95379),
          c = r(7653),
          o = r(99279);
        t.default = e => {
          let { features: t, bgColor: r, textColor: d, btnColor: m, btnTextColor: u } = e,
            [_, p] = (0, c.useState)(0),
            h = (0, c.useRef)([{ el: null, top: 0, height: 0 }]);
          return (
            (0, c.useEffect)(() => {
              if ((0, o.Ct)().has('md')) return;
              let e = () => {
                  h.current.forEach((e, t) => {
                    window.scrollY >= e.top && window.scrollY < e.top + e.height && _ !== t && p(t);
                  });
                },
                t = () => {
                  h.current.forEach(e => {
                    e.el && ((e.top = (0, o.cv)(e.el).top), (e.height = e.el.offsetHeight));
                  });
                };
              return (
                t(),
                e(),
                window.addEventListener('resize', t, { passive: !0 }),
                window.addEventListener('scroll', e, { passive: !0 }),
                () => {
                  window.removeEventListener('resize', t), window.removeEventListener('scroll', e);
                }
              );
            }, [_]),
            (0, n.jsxs)('section', {
              className: 'bg-dynamic-base bg-grid-pattern relative md:hidden',
              style: { '--bg-color-base': i.x[r] },
              children: [
                (0, n.jsx)('div', {
                  className:
                    'mx-mc-layout max-w-mc pt-mc-section-sm pb-mc-section gap-1.6rem grid !grid-cols-3 sm:!grid-cols-4',
                  children: (0, n.jsx)('div', {
                    className:
                      'sm:-mx-1.6rem col-span-3 flex flex-col justify-center sm:col-span-2 sm:col-start-2',
                    children: t.map((e, t) => {
                      var r, a;
                      return (0, n.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col '.concat(t > 0 ? 'mt-8rem sm:mt-10rem' : ''),
                          ref: e => {
                            e && (h.current[t] = { el: e, top: 0, height: 0 });
                          },
                          children: [
                            (0, n.jsxs)('div', {
                              className: 'text-dynamic-base flex flex-col items-center',
                              style: { '--text-color-base': i.x[d] },
                              children: [
                                (0, n.jsx)('h3', {
                                  className: 'mc-text-h2 text-center',
                                  children: e.title,
                                }),
                                (0, n.jsx)('p', {
                                  className: 'mc-text-body mt-1.2rem text-center',
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, n.jsx)('div', {
                              className: 'sm:mt-4rem mt-3.2rem mx-auto w-[231px]',
                              children:
                                (null === (r = e.media) || void 0 === r ? void 0 : r.height) &&
                                (null === (a = e.media) || void 0 === a ? void 0 : a.width) &&
                                (0, n.jsx)(l.Z, {
                                  mediaRatio: (e.media.height / e.media.width) * 100 || 51.34,
                                  children: (0, n.jsx)(s.default, {
                                    src: e.media.src,
                                    width: e.media.width,
                                    height: e.media.height,
                                    quality: e.media.quality || 75,
                                    layout: 'responsive',
                                    alt: e.title,
                                  }),
                                }),
                            }),
                          ],
                        },
                        ''.concat(t)
                      );
                    }),
                  }),
                }),
                (0, n.jsx)('div', {
                  className: 'py-3.2rem px-1.6rem bg-dynamic-base sticky bottom-0 left-0 w-full',
                  style: { '--bg-color-base': i.x[r] },
                  children: (0, n.jsx)('div', {
                    className: 'w-full',
                    style: { '--bg-color-base': i.x[m], '--text-color-base': i.x[u] },
                    children: (0, n.jsx)(a.CA, {
                      className: '!bg-dynamic-base !text-dynamic-base w-full',
                      ...t[_].button,
                    }),
                  }),
                }),
              ],
            })
          );
        };
      },
      13659: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(18297),
          s = r(28024),
          l = r(3669),
          i = r(7653),
          c = r(99279),
          o = r(32253);
        t.default = e => {
          let { contents: t, lang: r = 'en' } = e,
            [d, m] = (0, i.useState)((0, c.AV)()),
            u = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            h = e =>
              '\n      <div class="swiper-pagination-bullet pointer p_y-xs p_x-s m_b-xs h5 '
                .concat(a.paginationItem, '">\n        ')
                .concat(t[e].title, '\n      </div>\n    '),
            x = e => {
              let t = e.play();
              void 0 !== t && t.catch(e => console.warn(e));
            },
            g = e => {
              var t;
              null === (t = _.current) ||
                void 0 === t ||
                t.forEach((t, r) => {
                  _.current &&
                    e.activeIndex === r &&
                    ((_.current[r].currentTime = 0), x(_.current[r]));
                });
            },
            v = e => {
              var t;
              null === (t = _.current) ||
                void 0 === t ||
                t.forEach((t, r) => {
                  _.current &&
                    e.activeIndex !== r &&
                    (_.current[r].pause(), (_.current[r].currentTime = 0));
                });
            };
          return (0, n.jsxs)('div', {
            className: 'block md-grid grid_3-9 grid_gap m_t-l '.concat(a.container),
            ref: u,
            children: [
              (0, n.jsx)('div', {
                children: (0, n.jsx)('div', {
                  className: 'none md-flex flex_fit p_t-s p_b-xs '.concat(a.pagination),
                }),
              }),
              (0, n.jsx)('div', {
                className: 'o_hidden z_0',
                children: (0, n.jsx)(
                  s.tq,
                  {
                    modules: [l.tl],
                    className: a.slider,
                    slidesPerView: 1,
                    grabCursor: !0,
                    autoHeight: !0,
                    breakpoints: { 576: { autoHeight: !1 } },
                    onBeforeInit: e => {
                      var t;
                      (_.current = Array.from(e.el.querySelectorAll('video'))),
                        (null === (t = e.params) || void 0 === t ? void 0 : t.autoHeight) &&
                          (p.current && 'undefined' != typeof ResizeObserver
                            ? new ResizeObserver(() => {
                                var t;
                                (null === (t = e.params) || void 0 === t ? void 0 : t.autoHeight) &&
                                  e.updateAutoHeight();
                              }).observe(p.current)
                            : setTimeout(() => {
                                var t;
                                (null === (t = e.params) || void 0 === t ? void 0 : t.autoHeight) &&
                                  e.updateAutoHeight();
                              }, 1e3));
                    },
                    onPaginationRender: e => {
                      g(e);
                    },
                    onSlideChange: e => g(e),
                    onSlideChangeTransitionEnd: e => v(e),
                    pagination: {
                      el: '.'.concat(a.pagination),
                      clickable: !0,
                      renderBullet: e => h(e),
                      bulletActiveClass: 'swiper-pagination-bullet-active '.concat(
                        a.paginationItem_active
                      ),
                    },
                    navigation: { prevEl: '.'.concat(a.prev), nextEl: '.'.concat(a.next) },
                    onResize: () => m((0, c.AV)()),
                    children: t.map((e, t) =>
                      (0, n.jsx)(
                        s.o5,
                        {
                          className: 'o_hidden',
                          children: r => {
                            let { isActive: s } = r;
                            return (0, n.jsxs)('div', {
                              className: 'grid grid_2 z_0',
                              children: [
                                (0, n.jsxs)('div', {
                                  className: a.videoContainer,
                                  style: { backgroundColor: e.background },
                                  children: [
                                    (0, n.jsx)(o.p9, {}),
                                    (0, n.jsx)(o.nk, {
                                      video: e.video,
                                      videoWebm: e.videoWebm,
                                      autoPlay: !1,
                                      className: a.video,
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  className:
                                    'p_x-l p_t-m p_b-xl sm-p_a-xl flex_fdc flex-item_ass flex flex_jcc '
                                      .concat(e.inverse ? '' : 'text_white', ' ')
                                      .concat(a.text, ' ')
                                      .concat(s ? a.isActive : ''),
                                  ref: 0 === t ? p : null,
                                  style: { backgroundColor: e.background },
                                  children: [
                                    (0, n.jsx)('h3', {
                                      className: 'block md-none m_b-s',
                                      children: e.title,
                                    }),
                                    (0, n.jsx)('div', {
                                      className: 'm_a-0 rich_text',
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            });
                          },
                        },
                        e.title
                      )
                    ),
                  },
                  d
                ),
              }),
              (0, n.jsxs)('div', {
                className: 'flex md-none flex_jcc m_t-m '.concat(a.navigation),
                children: [
                  (0, n.jsx)('div', {
                    className: 'button_slider '.concat(a.prev),
                    children: 'es' === r ? 'Previo' : 'Previous',
                  }),
                  (0, n.jsx)('div', {
                    className: 'button_slider m_l-xs '.concat(a.next),
                    children: 'es' === r ? 'Siguiente' : 'Next',
                  }),
                ],
              }),
            ],
          });
        };
      },
      1404: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(83514),
          s = r(7653),
          l = r(83733),
          i = r(96404);
        t.default = e => {
          let { messages: t } = e,
            r = (0, s.useRef)(null),
            c = (0, s.useRef)(null),
            o = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            u = (0, s.useRef)(null),
            _ = (0, s.useRef)(null),
            p = (0, s.useRef)(null),
            h = (0, s.useRef)(null),
            x = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              let e = l.ZP.timeline({ delay: 0.9 });
              e.to(r.current, {
                duration: 0.3,
                opacity: 1,
                ease: 'power2.inOut',
                willChange: 'opacity',
              }),
                e.fromTo(
                  m.current,
                  { opacity: 0, x: 10, scale: 0.7, transformOrigin: '100% 100%' },
                  {
                    duration: 0.3,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: 'power2.inOut',
                    willChange: 'opacity, transform',
                    delay: '-0.2',
                  }
                ),
                e.to(o.current, {
                  duration: 0.3,
                  opacity: 1,
                  ease: 'power2.inOut',
                  willChange: 'opacity',
                  delay: '-0.1',
                }),
                e.fromTo(
                  u.current,
                  { opacity: 0, x: -10, scale: 0.7, transformOrigin: '0 100%' },
                  {
                    duration: 0.3,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: 'power2.inOut',
                    willChange: 'opacity, transform',
                    delay: '-0.2',
                  }
                ),
                e.to(c.current, {
                  duration: 0.3,
                  opacity: 1,
                  delay: 0.3,
                  ease: 'power2.inOut',
                  willChange: 'opacity',
                }),
                e.fromTo(
                  _.current,
                  { opacity: 0, x: 10, scale: 0.7, transformOrigin: '100% 100%' },
                  {
                    duration: 0.3,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: 'power2.inOut',
                    willChange: 'opacity, transform',
                    delay: '-0.2',
                  }
                ),
                e.to(d.current, {
                  duration: 0.3,
                  opacity: 1,
                  ease: 'power2.inOut',
                  willChange: 'opacity',
                  delay: '-0.1',
                }),
                e.fromTo(
                  p.current,
                  { opacity: 0, x: -10, scale: 0.7, transformOrigin: '0 100%' },
                  {
                    duration: 0.3,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    ease: 'power2.inOut',
                    willChange: 'opacity, transform',
                    delay: '-0.2',
                  }
                ),
                e.fromTo(
                  h.current,
                  { opacity: 0, y: 10, scale: 0.7, transformOrigin: '50% 100%' },
                  {
                    duration: 0.3,
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    delay: '-0.1',
                    willChange: 'opacity, transform',
                  }
                ),
                l.ZP.registerPlugin(i.ScrollTrigger),
                l.ZP.to(x.current, {
                  y: '-50%',
                  ease: 'none',
                  willChange: 'transform',
                  scrollTrigger: { scrub: !0, trigger: x.current, start: 0, end: 'bottom top' },
                });
            }, []),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)('div', {
                className: 'flex flex_jcc '.concat(a.container, ' trigger trigger_delay-4'),
                'data-first': !0,
                children: (0, n.jsxs)('div', {
                  className: 'relative '.concat(a.phoneContainer),
                  children: [
                    (0, n.jsx)('div', {
                      className: a.background,
                      children: (0, n.jsx)('img', {
                        src: 'https://mccdn.me/martcdn/next-lp/components/HeroPhone/chess.svg',
                        alt: '',
                        ref: x,
                      }),
                    }),
                    (0, n.jsx)('svg', {
                      viewBox: '0 0 338 663',
                      fill: 'none',
                      className: a.heroPhone,
                      children: (0, n.jsx)('rect', {
                        width: '325.371',
                        height: '694.295',
                        x: '6.449',
                        y: '6.449',
                        stroke: '#000',
                        strokeWidth: '11.102',
                        rx: '39.711',
                      }),
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex_jcfe '.concat(a.bubble, ' ').concat(a.bubble_01),
                      children: [
                        (0, n.jsx)('img', { src: t.first, alt: 'first chat bubble', ref: m }),
                        (0, n.jsx)('img', {
                          className: a.avatar,
                          src: 'https://mccdn.me/martcdn/next-lp/components/HeroPhone/avatar.png',
                          alt: 'person avatar',
                          ref: r,
                        }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex '.concat(a.bubble, ' ').concat(a.bubble_02),
                      children: [
                        (0, n.jsx)('img', {
                          className: a.robot,
                          src: 'https://mccdn.me/martcdn/next-lp/components/HeroPhone/robot.svg',
                          alt: 'robot avatar',
                          ref: o,
                        }),
                        (0, n.jsx)('img', { src: t.second, alt: 'second chat bubble', ref: u }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex flex_jcfe '.concat(a.bubble, ' ').concat(a.bubble_03),
                      children: [
                        (0, n.jsx)('img', { src: t.third, alt: 'third chat bubble', ref: _ }),
                        (0, n.jsx)('img', {
                          className: a.avatar,
                          src: 'https://mccdn.me/martcdn/next-lp/components/HeroPhone/avatar.png',
                          alt: 'person avatar',
                          ref: c,
                        }),
                      ],
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex '.concat(a.bubble, ' ').concat(a.bubble_04),
                      children: [
                        (0, n.jsx)('img', {
                          className: a.robot,
                          src: 'https://mccdn.me/martcdn/next-lp/components/HeroPhone/robot.svg',
                          alt: 'robot avatar',
                          ref: d,
                        }),
                        (0, n.jsx)('img', { src: t.fourth, alt: 'fourth chat bubble', ref: p }),
                      ],
                    }),
                    (0, n.jsx)('img', {
                      className: 'absolute '.concat(a.bubble, ' ').concat(a.button),
                      src: t.button,
                      alt: 'Button',
                      ref: h,
                    }),
                  ],
                }),
              }),
            })
          );
        };
      },
      49804: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(32253),
          s = r(50294),
          l = r(7653),
          i = r(74304);
        let c = (0, l.forwardRef)((e, t) => {
          let { content: r, className: l, ...c } = e;
          return (0, n.jsxs)('div', {
            className: ''.concat(i.device, ' ').concat(i.device, ' ').concat(l),
            children: [
              'video' in r &&
                (0, n.jsx)(a.nk, {
                  video: r.video,
                  className: ''.concat(i.screen, ' ').concat(i.screen),
                  ...c,
                  ref: t,
                }),
              'src' in r &&
                (0, n.jsx)('div', {
                  className: ''.concat(i.screen, ' ').concat(i.screen),
                  children: (0, n.jsx)(s.default, { alt: '', src: r.src, fill: !0 }),
                }),
            ],
          });
        });
        t.default = c;
      },
      74438: function (e, t, r) {
        'use strict';
        var n = r(27573);
        r(7653);
        var a = r(39092),
          s = r(70476);
        t.default = e => {
          let { children: t, margin: r = 25, mediaRatio: l = 0 } = e,
            { ref: i, inView: c } = (0, a.YD)({
              rootMargin: '0% 0% -'.concat(r, '%'),
              triggerOnce: !0,
            });
          return (0, n.jsx)('div', {
            ref: i,
            className: ''.concat(s.lazy, ' ').concat(c ? s.isOpen : ''),
            children: l
              ? (0, n.jsx)('div', {
                  className: s.placeholder,
                  style: { paddingBottom: l ? ''.concat(l, '%') : '' },
                  children: c && t,
                })
              : c && t,
          });
        };
      },
      99712: function (e, t, r) {
        'use strict';
        var n = r(74438);
        t.Z = n.default;
      },
      88570: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(20883),
          s = r(3669),
          l = r(28024),
          i = r(50294),
          c = r(7653),
          o = r(99279),
          d = r(81695),
          m = r(67774);
        t.default = e => {
          let { slider: t, banner: r = !0 } = e,
            [u, _] = (0, c.useState)((0, o.AV)()),
            p = (0, c.useRef)(null),
            h = (0, c.useRef)(null),
            x = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            v = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            b = (0, d.useRouter)(),
            j = (0, c.useRef)(null),
            y = (0, c.useRef)([]),
            w = e => {
              var r, n;
              return '\n      <div class="swiper-pagination-bullet absolute sm-relative flex flex_fdc flex_c sm-block hover_trigger pointer left right m_b-s p_a-s sm-p_x-l '
                .concat(a.paginationItem, '">\n        <div class="none sm-block ')
                .concat(a.spacer, '"></div>\n        <div class="')
                .concat(a.line, '">\n          <div class="flex flex_aic">\n          <img src="')
                .concat(t[e].ico, '" class="')
                .concat(
                  a.ico,
                  '" alt="ico">\n            <div class="m_l-xs sm-m_l-s">\n              <div class="underline_link h4 '
                )
                .concat(a.title, '">')
                .concat(t[e].title, '</div>\n             ')
                .concat(
                  t[e].tag
                    ? '<span class="link-tag m_l-xxs m_b-xxs '
                        .concat(a.tag, '">')
                        .concat(t[e].tag, '</span>')
                    : '',
                  '\n            </div>\n          </div>\n        </div>\n        <div class="sm-m_l-xs sm-p_l-l '
                )
                .concat(a.text, '">\n          <div class="sm-p_t-s ')
                .concat(a.innerText, '">\n             <div class="small none sm-block">')
                .concat(t[e].text, '</div>\n             ')
                .concat(
                  t[e].link
                    ? '\n                  <div class="'
                        .concat(
                          a.line,
                          '">\n                    <a class="flex hover_trigger m_t-xs sm-m_t-s '
                        )
                        .concat(a.link, '" data-href="')
                        .concat(
                          null === (r = t[e].link) || void 0 === r ? void 0 : r.link,
                          '">\n                      <div class="underline_link caps">'
                        )
                        .concat(
                          null === (n = t[e].link) || void 0 === n ? void 0 : n.label,
                          '</div>\n                      <div class="none sm-block m_l-xs arrow"></div>\n                    </a>\n                  </div>\n               '
                        )
                    : '',
                  '\n          </div>\n        </div>\n        <div class="none sm-block '
                )
                .concat(a.spacer, '"></div>\n        ')
                .concat(
                  t[e].tag
                    ? '<div class="absolute link-tag '
                        .concat(a.tag, ' ')
                        .concat(a.tag_mobile, '">')
                        .concat(t[e].tag, '</div>')
                    : '',
                  '\n      </div>\n    '
                );
            },
            N = e => {
              e.currentTarget.style.overflow = 'visible';
            },
            k = (e, r) => {
              if (!e.children.length) {
                var n, a;
                let s = document.createElement('source');
                s.setAttribute('type', 'video/webm'),
                  s.setAttribute(
                    'src',
                    (null === (n = t[r].media.video) || void 0 === n ? void 0 : n.webm) || ''
                  );
                let l = document.createElement('source');
                l.setAttribute('type', 'video/mp4'),
                  l.setAttribute(
                    'src',
                    (null === (a = t[r].media.video) || void 0 === a ? void 0 : a.mp4) || ''
                  ),
                  e.append(s, l);
              }
            },
            C = () => {
              if (v.current && v.current.length >= 1 && v.current[0].currentTime > 0) {
                v.current[0].removeEventListener('timeupdate', C);
                for (let e = 1; e < v.current.length; e++)
                  setTimeout(() => {
                    v.current && k(v.current[e], e);
                  }, 2e3 * e);
              }
            },
            P = e => {
              let t = e.play();
              void 0 !== t && t.catch(e => console.warn(e));
            },
            S = e => {
              if (
                ('mobile' !== u &&
                  window.scrollY >= y.current[0] &&
                  window.scrollY <= y.current[e.slides.length - 1] &&
                  (window.scrollY < y.current[e.activeIndex] ||
                    window.scrollY >= y.current[e.activeIndex] + 500) &&
                  window.scrollTo({ top: y.current[e.activeIndex] }),
                x.current)
              ) {
                var t;
                null === (t = x.current) ||
                  void 0 === t ||
                  t.forEach((t, r) => {
                    g.current &&
                      (e.activeIndex === r
                        ? ('mobile' !== u &&
                            ((t.style.height = ''.concat(g.current[r].offsetHeight, 'px')),
                            (t.style.pointerEvents = 'auto'),
                            e.previousIndex && t.addEventListener('transitionend', N)),
                          v.current &&
                            v.current.length >= 1 &&
                            (k(v.current[r], r), P(v.current[r])))
                        : ('mobile' !== u &&
                            (t.removeEventListener('transitionend', N),
                            (t.style.height = '0'),
                            (t.style.pointerEvents = 'none'),
                            (t.style.overflow = 'hidden')),
                          v.current &&
                            v.current.length >= 1 &&
                            (v.current[r].pause(), (v.current[r].currentTime = 0))));
                  });
              }
            },
            T = (0, c.useRef)(null);
          return (
            (0, c.useEffect)(() => {
              if ('mobile' === u) return;
              let e = { scroll: 0, height: 500, top: 0, activeIndex: 0, currentActiveIndex: 0 },
                r = () => {
                  if (T.current) {
                    e.top = (0, o.cv)(T.current).top;
                    for (let r = 0; r < t.length; r++) y.current[r] = r * e.height + e.top;
                  }
                },
                n = () => {
                  var t, r, n;
                  'mobile' !== u &&
                    ((e.scroll = window.scrollY),
                    (e.currentActiveIndex =
                      (null === (t = j.current) || void 0 === t ? void 0 : t.activeIndex) || 0),
                    (e.activeIndex = Math.trunc((e.scroll - e.top) / e.height)),
                    e.activeIndex >= 0 &&
                      e.activeIndex <=
                        ((null === (r = j.current) || void 0 === r ? void 0 : r.slides.length) ||
                          0) &&
                      e.currentActiveIndex !== e.activeIndex &&
                      (null === (n = j.current) || void 0 === n || n.slideTo(e.activeIndex)));
                };
              return (
                window.addEventListener('resize', r, { passive: !0 }),
                window.addEventListener('scroll', n, { passive: !0 }),
                r(),
                n(),
                () => {
                  window.removeEventListener('resize', r), window.removeEventListener('scroll', n);
                }
              );
            }, []),
            (0, n.jsx)('div', {
              className: 'w w_l '.concat(a.mainContainer),
              style: { '--height': 'calc(100vh + '.concat(500 * t.length, 'px)') },
              ref: T,
              children: (0, n.jsx)('div', {
                className: 'sm-sticky sm-vh-height',
                children: (0, n.jsxs)('div', {
                  className: 'block sm-flex sm-flex_aic '.concat(a.container),
                  ref: p,
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'relative width sm-p_r-l '.concat(a.left),
                      children: [
                        (0, n.jsx)('div', {
                          className:
                            'flex flex_fdc absolute sm-relative sm-m_t-xl sm-m_b-xl m_x-l sm-m_x-0 sm-b_rd-0 '.concat(
                              a.pagination
                            ),
                          ref: h,
                        }),
                        (0, n.jsxs)('div', {
                          className: 'absolute width height flex flex_jcsb sm-none '.concat(
                            a.navigation
                          ),
                          children: [
                            (0, n.jsx)('div', {
                              className: 'flex flex_aic height p_r-s '.concat(a.prev),
                              children: (0, n.jsx)('div', {
                                className: 'arrowhead '.concat(a.innerPrev),
                              }),
                            }),
                            (0, n.jsx)('div', {
                              className: 'flex flex_aic height p_l-s '.concat(a.next),
                              children: (0, n.jsx)('div', {
                                className: 'arrowhead '.concat(a.innerNext),
                              }),
                            }),
                          ],
                        }),
                        r &&
                          (0, n.jsx)('div', {
                            className: 'none sm-block m_x-l b_a '.concat(a.meta),
                            children: (0, n.jsx)(i.default, {
                              src: m.J$.src,
                              alt: 'Meta Business Partner Badge',
                              width: m.J$.width,
                              height: m.J$.height,
                            }),
                          }),
                      ],
                    }),
                    (0, n.jsx)('div', {
                      className: a.right,
                      children: (0, n.jsx)('div', {
                        className: a.sliderInner,
                        children: (0, n.jsx)(
                          l.tq,
                          {
                            modules: [s.tl, s.W_, s.xW],
                            className: a.slider,
                            effect: 'fade',
                            slidesPerView: 1,
                            grabCursor: !0,
                            watchSlidesProgress: !0,
                            onBeforeInit: e => {
                              (v.current = Array.from(e.el.querySelectorAll('.'.concat(a.video)))),
                                v.current &&
                                  v.current.length >= 1 &&
                                  v.current[0].addEventListener('timeupdate', C);
                            },
                            onPaginationRender: e => {
                              h.current &&
                                ((x.current = Array.from(
                                  h.current.querySelectorAll('.'.concat(a.text))
                                )),
                                (g.current = Array.from(
                                  h.current.querySelectorAll('.'.concat(a.innerText))
                                )),
                                (f.current = Array.from(
                                  h.current.querySelectorAll('.'.concat(a.link))
                                )),
                                f.current.forEach(e => {
                                  e.addEventListener('click', () => {
                                    b.push(e.dataset.href), b.refresh();
                                  });
                                })),
                                S(e),
                                setTimeout(() => {
                                  p.current && p.current.classList.add(''.concat(a.isLoad));
                                }, 400);
                            },
                            onSlideChange: e => S(e),
                            onProgress: (e, t) => {
                              e.slides.forEach(r => {
                                let n = 0.5 * r.progress;
                                n >= -0.5 && n <= 0.5
                                  ? (r.style.setProperty('--rotate', ''.concat(-60 * n, 'deg')),
                                    r.style.setProperty(
                                      '--translateX',
                                      ''.concat(-(2 * e.width) * n, 'px')
                                    ),
                                    r.style.setProperty(
                                      '--opacity',
                                      ''.concat(1 - Math.abs(2 * n))
                                    ),
                                    r.style.setProperty('opacity', ''.concat(1 - Math.abs(2 * n))))
                                  : (r.style.setProperty(
                                      '--rotate',
                                      ''.concat(-30 * Math.sign(n) * Math.sign(1 | t), 'deg')
                                    ),
                                    r.style.setProperty(
                                      '--translateX',
                                      ''.concat(-e.width * Math.sign(n) * Math.sign(1 | t), 'px')
                                    ),
                                    r.style.setProperty('--opacity', '0'));
                              });
                            },
                            onTouchStart: e => {
                              e.slides.forEach(e => {
                                e.style.setProperty('--transition', '');
                              });
                            },
                            onSetTransition: (e, t) => {
                              e.slides.forEach(e => {
                                e.style.setProperty('--duration', ''.concat(t, 'ms'));
                              });
                            },
                            pagination: {
                              el: '.'.concat(a.pagination),
                              clickable: !0,
                              renderBullet: e => w(e),
                              bulletActiveClass: 'swiper-pagination-bullet-active active '.concat(
                                a.paginationItem_active
                              ),
                            },
                            navigation: { prevEl: '.'.concat(a.prev), nextEl: '.'.concat(a.next) },
                            onResize: () => _((0, o.AV)()),
                            onInit: e => (j.current = e),
                            children: t.map(e =>
                              (0, n.jsx)(
                                l.o5,
                                {
                                  className: a.slide,
                                  children: (0, n.jsxs)('div', {
                                    className: ''.concat(a.mediaInner),
                                    children: [
                                      e.media.video &&
                                        (0, n.jsx)('video', {
                                          className: ''.concat(a.video),
                                          poster: e.media.video.poster,
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                        }),
                                      e.media.image && (0, n.jsx)(i.default, { ...e.media.image }),
                                    ],
                                  }),
                                },
                                e.title
                              )
                            ),
                          },
                          u
                        ),
                      }),
                    }),
                    r &&
                      (0, n.jsx)('div', {
                        className: 'flex flex_jcc sm-none m_t-m',
                        children: (0, n.jsx)('div', {
                          className: 'b_a '.concat(a.meta),
                          children: (0, n.jsx)(i.default, {
                            src: m.J$.src,
                            alt: 'Meta Business Partner Badge',
                            width: m.J$.width,
                            height: m.J$.height,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            })
          );
        };
      },
      20252: function (e, t, r) {
        'use strict';
        r.r(t);
        var n = r(27573),
          a = r(16136),
          s = r(7653),
          l = r(50294),
          i = r(83733),
          c = r(96404);
        t.default = e => {
          let { gallery: t } = e,
            r = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              i.ZP.registerPlugin(c.ScrollTrigger),
                i.ZP.to(r.current, {
                  x: () =>
                    r.current
                      ? -(r.current.scrollWidth - r.current.clientWidth) / 2
                      : window.innerWidth,
                  ease: 'none',
                  willChange: 'transform',
                  scrollTrigger: {
                    scrub: !0,
                    trigger: r.current,
                    start: 'top bottom',
                    end: 'bottom top',
                  },
                });
            }, []),
            (0, n.jsx)('div', {
              className: 'o_hidden',
              children: (0, n.jsx)('div', {
                ref: r,
                className: 'flex',
                children: [...t, ...t].map((e, t) =>
                  (0, n.jsx)(
                    l.default,
                    {
                      src: e.src,
                      width: e.width,
                      height: e.height,
                      className: a.galleryItem,
                      alt: e.alt,
                      quality: 100,
                    },
                    ''.concat(e, '-').concat(t)
                  )
                ),
              }),
            })
          );
        };
      },
      67868: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(6303),
          s = r(3669),
          l = r(28024),
          i = r(50294),
          c = r(7653),
          o = r(99279),
          d = r(81695),
          m = r(67774);
        t.default = e => {
          let { slider: t, banner: r = !0 } = e,
            [u, _] = (0, c.useState)((0, o.AV)()),
            p = (0, c.useRef)(null),
            h = (0, c.useRef)(null),
            x = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            v = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            b = (0, d.useRouter)(),
            j = e => {
              var r, n;
              return '\n      <div class="swiper-pagination-bullet absolute sm-relative flex flex_fdc flex_c sm-block hover_trigger pointer left right m_b-s p_a-s sm-p_x-l '
                .concat(a.paginationItem, '">\n        <div class="none sm-block ')
                .concat(a.spacer, '"></div>\n        <div class="')
                .concat(a.line, '">\n          <div class="flex flex_aic">\n          <img src="')
                .concat(t[e].ico, '" class="')
                .concat(
                  a.ico,
                  '" alt="ico">\n            <div class="m_l-xs sm-m_l-s">\n              <div class="underline_link h4 '
                )
                .concat(a.title, '">')
                .concat(t[e].title, '</div>\n             ')
                .concat(
                  t[e].tag
                    ? '<span class="link-tag m_l-xxs m_b-xxs '
                        .concat(a.tag, '">')
                        .concat(t[e].tag, '</span>')
                    : '',
                  '\n            </div>\n          </div>\n        </div>\n        <div class="sm-m_l-xs sm-p_l-l '
                )
                .concat(a.text, '">\n          <div class="sm-p_t-s ')
                .concat(a.innerText, '">\n             <div class="small none sm-block">')
                .concat(t[e].text, '</div>\n             ')
                .concat(
                  t[e].link
                    ? '\n                  <div class="'
                        .concat(
                          a.line,
                          '">\n                    <a class="flex hover_trigger m_t-xs sm-m_t-s '
                        )
                        .concat(a.link, '" data-href="')
                        .concat(
                          null === (r = t[e].link) || void 0 === r ? void 0 : r.link,
                          '">\n                      <div class="underline_link caps">'
                        )
                        .concat(
                          null === (n = t[e].link) || void 0 === n ? void 0 : n.label,
                          '</div>\n                      <div class="none sm-block m_l-xs arrow"></div>\n                    </a>\n                  </div>\n               '
                        )
                    : '',
                  '\n          </div>\n        </div>\n        <div class="none sm-block '
                )
                .concat(a.spacer, '"></div>\n        ')
                .concat(
                  t[e].tag
                    ? '<div class="absolute link-tag '
                        .concat(a.tag, ' ')
                        .concat(a.tag_mobile, '">')
                        .concat(t[e].tag, '</div>')
                    : '',
                  '\n      </div>\n    '
                );
            },
            y = e => {
              e.currentTarget.style.overflow = 'visible';
            },
            w = (e, r) => {
              if (!e.children.length) {
                var n, a;
                let s = document.createElement('source');
                s.setAttribute('type', 'video/webm'),
                  s.setAttribute(
                    'src',
                    (null === (n = t[r].media.video) || void 0 === n ? void 0 : n.webm) || ''
                  );
                let l = document.createElement('source');
                l.setAttribute('type', 'video/mp4'),
                  l.setAttribute(
                    'src',
                    (null === (a = t[r].media.video) || void 0 === a ? void 0 : a.mp4) || ''
                  ),
                  e.append(s, l);
              }
            },
            N = () => {
              if (v.current && v.current.length >= 1 && v.current[0].currentTime > 0) {
                v.current[0].removeEventListener('timeupdate', N);
                for (let e = 1; e < v.current.length; e++)
                  setTimeout(() => {
                    v.current && w(v.current[e], e);
                  }, 2e3 * e);
              }
            },
            k = e => {
              let t = e.play();
              void 0 !== t && t.catch(e => console.warn(e));
            },
            C = e => {
              if (x.current) {
                var t;
                null === (t = x.current) ||
                  void 0 === t ||
                  t.forEach((t, r) => {
                    g.current &&
                      (e.activeIndex === r
                        ? ('mobile' !== u &&
                            ((t.style.height = ''.concat(g.current[r].offsetHeight, 'px')),
                            (t.style.pointerEvents = 'auto'),
                            e.previousIndex && t.addEventListener('transitionend', y)),
                          v.current &&
                            v.current.length >= 1 &&
                            (w(v.current[r], r), k(v.current[r])))
                        : ('mobile' !== u &&
                            (t.removeEventListener('transitionend', y),
                            (t.style.height = '0'),
                            (t.style.pointerEvents = 'none'),
                            (t.style.overflow = 'hidden')),
                          v.current &&
                            v.current.length >= 1 &&
                            (v.current[r].pause(), (v.current[r].currentTime = 0))));
                  });
              }
            };
          return (0, n.jsx)('div', {
            className: 'w w_l',
            children: (0, n.jsxs)('div', {
              className: 'block sm-flex '.concat(a.container),
              ref: p,
              children: [
                (0, n.jsxs)('div', {
                  className: 'relative width sm-p_r-l '.concat(a.left),
                  children: [
                    (0, n.jsx)('div', {
                      className:
                        'flex flex_fdc absolute sm-relative sm-m_t-xl sm-m_b-xl m_x-l sm-m_x-0 sm-b_rd-0 '.concat(
                          a.pagination
                        ),
                      ref: h,
                    }),
                    (0, n.jsxs)('div', {
                      className: 'absolute width height flex flex_jcsb sm-none '.concat(
                        a.navigation
                      ),
                      children: [
                        (0, n.jsx)('div', {
                          className: 'flex flex_aic height p_r-s '.concat(a.prev),
                          children: (0, n.jsx)('div', {
                            className: 'arrowhead '.concat(a.innerPrev),
                          }),
                        }),
                        (0, n.jsx)('div', {
                          className: 'flex flex_aic height p_l-s '.concat(a.next),
                          children: (0, n.jsx)('div', {
                            className: 'arrowhead '.concat(a.innerNext),
                          }),
                        }),
                      ],
                    }),
                    r &&
                      (0, n.jsx)('div', {
                        className: 'none sm-block m_x-l b_a '.concat(a.meta),
                        children: (0, n.jsx)(i.default, {
                          src: m.J$.src,
                          alt: 'Meta Business Partner Badge',
                          width: m.J$.width,
                          height: m.J$.height,
                        }),
                      }),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: a.right,
                  children: (0, n.jsx)('div', {
                    className: a.sliderInner,
                    children: (0, n.jsx)(
                      l.tq,
                      {
                        modules: [s.tl, s.W_, s.xW],
                        className: a.slider,
                        effect: 'fade',
                        slidesPerView: 1,
                        grabCursor: !0,
                        watchSlidesProgress: !0,
                        onBeforeInit: e => {
                          (v.current = Array.from(e.el.querySelectorAll('.'.concat(a.video)))),
                            v.current &&
                              v.current.length >= 1 &&
                              v.current[0].addEventListener('timeupdate', N);
                        },
                        onPaginationRender: e => {
                          h.current &&
                            ((x.current = Array.from(
                              h.current.querySelectorAll('.'.concat(a.text))
                            )),
                            (g.current = Array.from(
                              h.current.querySelectorAll('.'.concat(a.innerText))
                            )),
                            (f.current = Array.from(
                              h.current.querySelectorAll('.'.concat(a.link))
                            )),
                            f.current.forEach(e => {
                              e.addEventListener('click', () => {
                                b.push(e.dataset.href), b.refresh();
                              });
                            })),
                            C(e),
                            setTimeout(() => {
                              p.current && p.current.classList.add(''.concat(a.isLoad));
                            }, 400);
                        },
                        onSlideChange: e => C(e),
                        onProgress: (e, t) => {
                          e.slides.forEach(r => {
                            let n = 0.5 * r.progress;
                            n >= -0.5 && n <= 0.5
                              ? (r.style.setProperty('--rotate', ''.concat(-60 * n, 'deg')),
                                r.style.setProperty(
                                  '--translateX',
                                  ''.concat(-(2 * e.width) * n, 'px')
                                ),
                                r.style.setProperty('--opacity', ''.concat(1 - Math.abs(2 * n))),
                                r.style.setProperty('opacity', ''.concat(1 - Math.abs(2 * n))))
                              : (r.style.setProperty(
                                  '--rotate',
                                  ''.concat(-30 * Math.sign(n) * Math.sign(1 | t), 'deg')
                                ),
                                r.style.setProperty(
                                  '--translateX',
                                  ''.concat(-e.width * Math.sign(n) * Math.sign(1 | t), 'px')
                                ),
                                r.style.setProperty('--opacity', '0'));
                          });
                        },
                        onTouchStart: e => {
                          e.slides.forEach(e => {
                            e.style.setProperty('--transition', '');
                          });
                        },
                        onSetTransition: (e, t) => {
                          e.slides.forEach((e, r) => {
                            e.style.setProperty('--duration', ''.concat(t, 'ms'));
                          });
                        },
                        pagination: {
                          el: '.'.concat(a.pagination),
                          clickable: !0,
                          renderBullet: e => j(e),
                          bulletActiveClass: 'swiper-pagination-bullet-active active '.concat(
                            a.paginationItem_active
                          ),
                        },
                        navigation: { prevEl: '.'.concat(a.prev), nextEl: '.'.concat(a.next) },
                        onResize: () => _((0, o.AV)()),
                        children: t.map((e, t) =>
                          (0, n.jsx)(
                            l.o5,
                            {
                              className: a.slide,
                              children: (0, n.jsxs)('div', {
                                className: ''.concat(a.videoInner),
                                children: [
                                  e.media.video &&
                                    (0, n.jsx)('video', {
                                      className: ''.concat(a.video),
                                      poster: e.media.video.poster,
                                      muted: !0,
                                      loop: !0,
                                      playsInline: !0,
                                    }),
                                  e.media.image && (0, n.jsx)(i.default, { ...e.media.image }),
                                ],
                              }),
                            },
                            e.title
                          )
                        ),
                      },
                      u
                    ),
                  }),
                }),
                r &&
                  (0, n.jsx)('div', {
                    className: 'flex flex_jcc sm-none m_t-m',
                    children: (0, n.jsx)('div', {
                      className: 'b_a '.concat(a.meta),
                      children: (0, n.jsx)(i.default, {
                        src: m.J$.src,
                        alt: 'Meta Business Partner Badge',
                        width: m.J$.width,
                        height: m.J$.height,
                      }),
                    }),
                  }),
              ],
            }),
          });
        };
      },
      71107: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(3458),
          l = r(5704),
          i = r(99279);
        t.default = e => {
          let {
              isOpen: t,
              closeCallback: r,
              children: c,
              wrapperClassName: o,
              isCloseButtonShown: d,
            } = e,
            [m, u] = (0, a.useState)(0),
            [_, p] = (0, a.useState)(!0),
            h = (0, a.useRef)(null),
            x = (0, a.useRef)(null);
          return ((0, a.useEffect)(() => {
            p(!1);
            let e = e => {
              (e.target === h.current || e.target === x.current) && r();
            };
            return (
              document.addEventListener('click', e),
              () => {
                document.removeEventListener('click', e);
              }
            );
          }, []),
          (0, a.useEffect)(() => {
            t ? (u(window.scrollY), (0, i.Jc)(!0, window.scrollY)) : (0, i.Jc)(!1, m);
          }, [t]),
          _)
            ? null
            : (0, s.createPortal)(
                (0, n.jsx)('div', {
                  className: ''.concat(l.popup, ' ').concat(t && l.isOpen),
                  children: (0, n.jsx)('div', {
                    className: l.popup__inner,
                    children: (0, n.jsx)('div', {
                      className: ''.concat(l.popup__container, ' flex flex_c height'),
                      ref: h,
                      children: (0, n.jsxs)('div', {
                        className: o || 'w w_l',
                        children: [
                          d
                            ? ''
                            : (0, n.jsx)('div', {
                                className: l.close,
                                children: (0, n.jsx)('div', {
                                  className: ''.concat(l.close__inner, ' m_t-s m_r-s'),
                                  ref: x,
                                  children: 'close',
                                }),
                              }),
                          c,
                        ],
                      }),
                    }),
                  }),
                }),
                document.body
              );
        };
      },
      61423: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(3458),
          l = r(66337),
          i = r(99279),
          c = r(32253);
        t.default = e => {
          let { isOpen: t, closeCallback: r, children: o } = e,
            [d, m] = (0, a.useState)(0),
            [u, _] = (0, a.useState)(!0),
            p = (0, a.useRef)(null),
            h = (0, a.useRef)(null),
            x = (0, a.useRef)(null);
          return ((0, a.useEffect)(() => {
            _(!1);
            let e = e => {
              e.target === p.current && r();
            };
            return (
              document.addEventListener('click', e),
              () => {
                document.removeEventListener('click', e);
              }
            );
          }, []),
          (0, a.useEffect)(() => {
            if (t || 0 === t) {
              if (
                (m(window.scrollY),
                (0, i.Jc)(!0, window.scrollY),
                x.current && h.current && 'number' == typeof t)
              ) {
                let e = x.current.children[t];
                h.current.scrollTo({
                  top: e.getBoundingClientRect().top - x.current.getBoundingClientRect().top,
                });
              }
            } else (0, i.Jc)(!1, d);
          }, [t]),
          u)
            ? null
            : (0, s.createPortal)(
                (0, n.jsx)('div', {
                  className: ''.concat(l.popup, ' ').concat((t || 0 === t) && l.isOpen),
                  children: (0, n.jsxs)('div', {
                    className: 'w-mc-layout max-w-mc relative mx-auto h-full',
                    children: [
                      (0, n.jsx)('div', {
                        className: '!fixed left-0 top-0 h-screen w-screen',
                        ref: p,
                      }),
                      (0, n.jsxs)('div', {
                        className:
                          'max-h-popup rounded-mc bg-grid-pattern !absolute bottom-0 left-0 right-0 top-0 m-auto flex h-fit w-full flex-col items-start overflow-auto bg-white !bg-center md:w-[92.5%] '.concat(
                            l.scrollInner
                          ),
                        ref: h,
                        children: [
                          (0, n.jsx)(c.un, {
                            className:
                              'top-1.6rem sm:top-3.2rem sm:mt-3.2rem sm:mr-3.2rem mt-1.6rem mr-1.6rem !sticky z-20 self-end !bg-black',
                            onClick: r,
                            children: (0, n.jsxs)('span', {
                              className: 'flex items-center',
                              children: [
                                (0, n.jsx)('span', { children: 'Close' }),
                                (0, n.jsxs)('svg', {
                                  fill: 'none',
                                  viewBox: '0 0 20 20',
                                  className: 'w-2rem h-2rem ml-0.8rem',
                                  children: [
                                    (0, n.jsx)('g', {
                                      'clip-path': 'url(#a)',
                                      children: (0, n.jsx)('path', {
                                        fill: '#000',
                                        d: 'm9.965 11.026 6.54 6.54 1.062-1.06-6.541-6.54 6.54-6.542-1.06-1.06-6.54 6.54-6.542-6.54-1.06 1.06 6.54 6.541-6.54 6.54 1.06 1.062 6.541-6.541Z',
                                      }),
                                    }),
                                    (0, n.jsx)('defs', {
                                      children: (0, n.jsx)('clipPath', {
                                        id: 'a',
                                        children: (0, n.jsx)('path', {
                                          fill: '#fff',
                                          d: 'M0 0h20v20H0z',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)('div', {
                            className:
                              'mx-1.6rem mt-3.2rem md:mt-2rem mb-3.2rem sm:mx-3.2rem huge:mx-12rem md:mx-10rem',
                            ref: x,
                            children: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                document.body
              );
        };
      },
      14504: function (e, t, r) {
        'use strict';
        var n = r(27573);
        r(7653);
        var a = r(8769),
          s = r(81695);
        t.default = e => {
          var t, r;
          let { value: l = 0, items: i, onChange: c, className: o, max: d, dict: m } = e;
          return (
            (0, s.usePathname)().startsWith('/pt'),
            (0, n.jsxs)('div', {
              className: ''.concat(o || '', ' m_b-s ').concat(a.select),
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex flex_jcsb flex_aic',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'small '.concat(a.placeholder),
                      children:
                        +(null === (t = i[l]) || void 0 === t ? void 0 : t.contacts) === d
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)('span', {
                                  className: 'text_grey',
                                  children: m.pricing.select.upTo,
                                }),
                                d.toString(),
                                ' +',
                                ' ',
                                (0, n.jsx)('span', {
                                  className: 'text_grey',
                                  children: m.pricing.select.contacts,
                                }),
                              ],
                            })
                          : (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)('span', {
                                  className: 'text_grey',
                                  children: m.pricing.select.upTo,
                                }),
                                ' ',
                                (+(null === (r = i[l]) || void 0 === r
                                  ? void 0
                                  : r.contacts)).toString(),
                                ' ',
                                (0, n.jsx)('span', {
                                  className: 'text_grey',
                                  children: m.pricing.select.contacts,
                                }),
                              ],
                            }),
                    }),
                    (0, n.jsx)('div', { className: 'arrowhead '.concat(a.arrow) }),
                  ],
                }),
                (0, n.jsx)('select', {
                  value: i[l].contacts,
                  className: 'absolute width height opacity_0',
                  onChange: e => {
                    null == c || c(+e.target.value.replace(/\D+/g, ''));
                  },
                  children: i.map(e =>
                    +e.contacts === d
                      ? (0, n.jsx)(
                          'option',
                          { value: e.contacts, children: ''.concat(d.toString(), ' +') },
                          e.contacts
                        )
                      : +e.contacts
                      ? (0, n.jsx)(
                          'option',
                          { value: e.contacts, children: (+e.contacts).toString() },
                          e.contacts
                        )
                      : ''
                  ),
                }),
              ],
            })
          );
        };
      },
      18208: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(74795),
          l = r(83733);
        t.default = e => {
          let { max: t, value: r = 0, steps: i = 1e3, items: c, onChange: o, className: d } = e,
            m = Math.pow(i, 2),
            u = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              l.ZP.to(u.current, {
                value: Math.trunc(Math.sqrt(r / (t / m))),
                duration: 0.5,
                ease: 'power4.out',
              });
            }),
            (0, n.jsxs)('div', {
              className: ''.concat(d || '', ' p_x-m p_b-xl'),
              children: [
                (0, n.jsx)('input', {
                  className: ''.concat(s.slider, ' m_y-s m_x-0 width'),
                  onChange: e => o && o(Math.trunc(Math.pow(+e.target.value, 2) * (t / m))),
                  type: 'range',
                  min: 0,
                  max: i,
                  step: 1,
                  ref: u,
                }),
                (0, n.jsx)('div', {
                  className: ''.concat(s.sliderScale),
                  children:
                    null == c
                      ? void 0
                      : c
                          .filter(e => e.value)
                          .map(e =>
                            (0, n.jsxs)(
                              'div',
                              {
                                className: s.sliderItem,
                                style: {
                                  left: ''.concat(
                                    Math.trunc(Math.sqrt(+e.contacts / (t / m))) / 10,
                                    '%'
                                  ),
                                },
                                children: [
                                  (0, n.jsx)('div', { className: s.sliderDash }),
                                  (0, n.jsx)('div', {
                                    className: 'small '.concat(s.sliderText),
                                    children: e.value,
                                  }),
                                ],
                              },
                              e.contacts
                            )
                          ),
                }),
              ],
            })
          );
        };
      },
      83147: function (e, t, r) {
        'use strict';
        var n = r(27573);
        r(7653),
          (t.default = e => {
            let { question: t, answer: r, toggleHandler: a, isOpen: s } = e;
            return (0, n.jsxs)('div', {
              className: 'bg_white shadow_dynamic',
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex flex_jcsb tn-p_y-l p_y-m tn-p_x-l p_x-m pointer',
                  onClick: a,
                  children: [
                    (0, n.jsx)('h3', { className: 'accent', children: t }),
                    (0, n.jsx)('div', {
                      className: 'arrowhead flex-item_asc m_l-s '.concat(s ? 'up' : ''),
                    }),
                  ],
                }),
                s && (0, n.jsx)('div', { className: 'block p_b-l p_x-m tn-p_x-l', children: r }),
              ],
            });
          });
      },
      70184: function (e, t, r) {
        'use strict';
        r.r(t);
        var n = r(27573),
          a = r(7653),
          s = r(83147);
        t.default = e => {
          let { contents: t } = e,
            [r, l] = (0, a.useState)({});
          return (0, n.jsx)('div', {
            className: 'w w_m tn-m_t-xl grid grid_gap trigger',
            children: t.map((e, t) =>
              (0, a.createElement)(s.default, {
                ...e,
                key: 'question-'.concat(t),
                isOpen: r[t],
                toggleHandler: () => l(e => ({ ...e, [t]: !e[t] })),
              })
            ),
          });
        };
      },
      17243: function (e, t, r) {
        'use strict';
        r.d(t, {
          default: function () {
            return f;
          },
        });
        var n,
          a,
          s = r(27573),
          l = r(7653),
          i = r(93351),
          c = r(32253),
          o = r(56539),
          d = r(79782),
          m = r(82385);
        let u = [
            'Descriptive error messages (e.g., application or server errors).',
            'HTTP 404 codes/pages or other HTTP non-200 codes/pages.',
            'Banner disclosure on common/public services.',
            'Disclosure of known public files or directories, (e.g., robots.txt).',
            'Clickjacking and issues only exploitable through clickjacking.',
            'CSRF on forms that are available to anonymous users (e.g., the contact form).',
            'Logout Cross-Site Request Forgery (logout CSRF).',
            'Lack of Secure and HTTPOnly cookie flags.',
            'Lack of Security Speedbump when leaving the site.',
            'Brute force and account lockout not enforced.',
            'OPTIONS / TRACE HTTP method enabled.',
            'SSL Attacks such as BEAST, BREACH, Renegotiation attack.',
            'SSL Forward secrecy not enabled.',
            'SSL Insecure cipher suites.',
            'The Anti-MIME-Sniffing header X-Content-Type-Options.',
            'Missing HTTP security headers, specifically.',
            'TLSv1.1',
          ],
          _ = [
            'Break any applicable law or regulations.',
            'Get access to unnecessary, excessive or significant amounts of data.',
            'Modify data in the Manychat’s systems or services.',
            'Use high-intensity destructive scanning tools to find vulnerabilities.',
            'Attempt or report any form of denial of service, e.g. overwhelming a service with a high volume of requests.',
            'Disrupt the operation of Manychat’s services or systems.',
            'Submit reports detailing non-exploitable vulnerabilities, or reports indicating that the services do not fully align with “best practice”, for example missing security headers.',
            'Submit reports detailing SSL/TLS configuration weaknesses, for example “weak” cipher suite support.',
            'Disclosing the contents of any submission to our program without explicit Manychat’s authorization',
          ],
          p = [
            'Comply with data protection rules and must not violate the privacy of the Manychat’s users, staff, contractors, services or systems. You must not, for example, share, redistribute or fail to properly secure data retrieved from the systems or services without explicit Manychat’s authorization.',
            'Securely delete all data retrieved during your research as soon as it is no longer required or within 1 month of the vulnerability being resolved, whichever occurs first (or as otherwise required by data protection law).',
          ],
          h = e => {
            let { handleClose: t } = e;
            return (0, s.jsxs)('div', {
              className: 'm_t-s relative rich_text',
              children: [
                (0, s.jsx)('div', { className: m.close, onClick: t }),
                (0, s.jsx)('hr', {}),
                (0, s.jsx)('h5', { className: 'small', children: 'Disclosure Policy' }),
                (0, s.jsx)('p', {
                  className: 'small',
                  children:
                    'This policy is applicable to manychat.com and any subdomains of manychat.com.',
                }),
                (0, s.jsxs)('p', {
                  className: 'small',
                  children: [
                    'You must ',
                    (0, s.jsx)('span', { className: 'text_bold small', children: 'not' }),
                    ':',
                  ],
                }),
                (0, s.jsx)('ul', {
                  children: _.map(e =>
                    (0, s.jsx)('li', {
                      children: (0, s.jsx)('p', { className: 'small', children: e }),
                    })
                  ),
                }),
                (0, s.jsxs)('p', {
                  className: 'small',
                  children: [
                    'You must ',
                    (0, s.jsx)('span', { className: 'text_bold', children: 'always' }),
                    ':',
                  ],
                }),
                (0, s.jsx)('ul', {
                  children: p.map(e =>
                    (0, s.jsx)('li', {
                      children: (0, s.jsx)('p', { className: 'small', children: e }),
                    })
                  ),
                }),
                (0, s.jsxs)('p', {
                  className: 'small',
                  children: [
                    'What We are ',
                    (0, s.jsx)('span', { className: 'text_bold', children: 'Not' }),
                    ' Looking for:',
                  ],
                }),
                (0, s.jsx)('ul', {
                  children: u.map(e =>
                    (0, s.jsx)(
                      'li',
                      { children: (0, s.jsx)('p', { className: 'small', children: e }) },
                      e
                    )
                  ),
                }),
                (0, s.jsx)('hr', {}),
              ],
            });
          };
        ((n = a || (a = {})).initial = 'initial'),
          (n.inprogress = 'inprogress'),
          (n.success = 'success'),
          (n.error = 'error');
        let x = {
            name: '',
            email: '',
            summary: '',
            description: '',
            product: '',
            endpoint: '',
            payload: '',
            proof_of_concept: '',
            attachments: '',
            solution: '',
            disclosurePolicy: '',
            doNotViolate: '',
          },
          g = async e => {
            let t = { ...e },
              r = await fetch('/landing-api/report', {
                method: 'POST',
                body: JSON.stringify(t),
                headers: { 'Content-Type': 'application/json' },
              });
            if (!r.ok) throw Error(''.concat((await r.json()).error, ' on ').concat(location.href));
          },
          v = {
            initial: 'Submit the report',
            inprogress: '•••',
            success: 'Done',
            error: 'Try again',
          };
        var f = () => {
          var e, t, r, n, a, u, _, p;
          let [f, b] = (0, l.useState)('initial'),
            [j, y] = (0, l.useState)(!1),
            {
              register: w,
              handleSubmit: N,
              formState: { errors: k },
            } = (0, i.cI)({ shouldFocusError: !0, defaultValues: x }),
            C = async e => {
              try {
                b('inprogress'), await g(e), b('success');
              } catch (e) {
                b('error'), (0, o.Tb)(e), console.warn(e);
              }
            };
          return (0, s.jsxs)('form', {
            onSubmit: N(e => C(e)),
            children: [
              (0, s.jsx)(c.n2, {
                required: !0,
                name: 'name',
                hasError: !!k.name,
                errorText: null === (e = k.name) || void 0 === e ? void 0 : e.message,
                title: 'Name',
                className: m.firstField,
                children: (0, s.jsx)(c.nv, {
                  ...w('name', { required: { value: !0, message: 'Can’t be empty' } }),
                  placeholder: 'John Doe',
                }),
              }),
              (0, s.jsx)(c.n2, {
                name: 'email',
                required: !0,
                hasError: !!k.email,
                errorText: null === (t = k.email) || void 0 === t ? void 0 : t.message,
                title: 'Email',
                children: (0, s.jsx)(c.nv, {
                  ...w('email', {
                    required: { value: !0, message: 'Can’t be empty' },
                    pattern: { value: /^\S+@\S+$/i, message: 'Wrong email format' },
                  }),
                  placeholder: 'iam@johndoe.org',
                }),
              }),
              (0, s.jsx)(c.n2, {
                required: !0,
                name: 'summary',
                hasError: !!k.summary,
                errorText: null === (r = k.summary) || void 0 === r ? void 0 : r.message,
                title: 'Summary',
                subTitle: 'Provide a short summary of the vulnerability',
                children: (0, s.jsx)(c.nv, {
                  ...w('summary', { required: { value: !0, message: 'Can’t be empty' } }),
                  placeholder: 'I found that ...',
                }),
              }),
              (0, s.jsx)(c.n2, {
                required: !0,
                name: 'description',
                hasError: !!k.description,
                errorText: null === (n = k.description) || void 0 === n ? void 0 : n.message,
                title: 'Description',
                subTitle: 'Describe the technical details of the vulnerability',
                className: m.bigTextarea,
                children: (0, s.jsx)(c.N7, {
                  ...w('description', { required: { value: !0, message: 'Can’t be empty' } }),
                  placeholder: 'Technically...',
                }),
              }),
              (0, s.jsx)(c.n2, {
                required: !0,
                name: 'product',
                hasError: !!k.product,
                errorText: null === (a = k.product) || void 0 === a ? void 0 : a.message,
                title: 'Product or website concerned',
                children: (0, s.jsx)(c.nv, {
                  ...w('product', { required: { value: !0, message: 'Can’t be empty' } }),
                  placeholder: 'manychat.com',
                }),
              }),
              (0, s.jsx)(c.n2, {
                name: 'endpoint',
                title: 'Endpoint',
                children: (0, s.jsx)(c.nv, { ...w('endpoint'), placeholder: 'https://...' }),
              }),
              (0, s.jsx)(c.n2, {
                name: 'payload',
                title: 'Payload',
                children: (0, s.jsx)(c.N7, { ...w('payload'), placeholder: '{ ... }' }),
              }),
              (0, s.jsx)(c.n2, {
                required: !0,
                name: 'proof_of_concept',
                hasError: !!k.proof_of_concept,
                errorText: null === (u = k.proof_of_concept) || void 0 === u ? void 0 : u.message,
                title: 'PoC or Steps-to-reproduce',
                className: m.bigTextarea,
                children: (0, s.jsx)(c.N7, {
                  ...w('proof_of_concept', { required: { value: !0, message: 'Can’t be empty' } }),
                  placeholder: '1. Visit ...',
                }),
              }),
              (0, s.jsx)(c.n2, {
                name: 'attachments',
                title: 'Attachments',
                subTitle: 'Please upload to any file storage and paste the link',
                children: (0, s.jsx)(c.nv, {
                  ...w('attachments'),
                  placeholder: 'https://drive.google.com/...',
                }),
              }),
              (0, s.jsx)(c.n2, {
                name: 'solution',
                title: 'Solution to fix',
                children: (0, s.jsx)(c.nv, { ...w('solution'), placeholder: 'Input text' }),
              }),
              (0, s.jsxs)(c.n2, {
                name: 'agreements',
                hasError: !!k.disclosurePolicy || !!k.doNotViolate,
                errorText:
                  (null === (_ = k.disclosurePolicy) || void 0 === _ ? void 0 : _.message) ||
                  (null === (p = k.doNotViolate) || void 0 === p ? void 0 : p.message),
                children: [
                  (0, s.jsx)(d.J7, {
                    ...w('disclosurePolicy', { required: { value: !0, message: 'Required' } }),
                    option: {
                      value: 'disclosurePolicy',
                      label: (0, s.jsxs)(s.Fragment, {
                        children: [
                          "I agree to Manychat's",
                          ' ',
                          (0, s.jsx)('span', {
                            className: 'underline_link',
                            onClick: () => y(!0),
                            children: 'Disclosure Policy',
                          }),
                          j && (0, s.jsx)(h, { handleClose: () => y(!1) }),
                        ],
                      }),
                    },
                  }),
                  (0, s.jsx)(d.J7, {
                    ...w('doNotViolate', { required: { value: !0, message: 'Required' } }),
                    option: {
                      value: 'doNotViolate',
                      label:
                        'By submitting the report, I guarantee that the report and any attachments do not violate the intellectual property rights of any third party',
                    },
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'p_a-m tn-p_a-l grid grid_gap '.concat(
                  'error' === f ? 'bg_red-light' : 'bg_grey'
                ),
                children: [
                  'success' === f
                    ? (0, s.jsxs)('div', {
                        className: 'text_center',
                        children: [
                          (0, s.jsx)('p', { children: 'Your report has been sent. Thank you!' }),
                          (0, s.jsx)(c.tW, {
                            href: '/',
                            className: 'm_t-s',
                            children: 'Return to our website',
                          }),
                        ],
                      })
                    : (0, s.jsx)('div', {
                        className: 'flex flex_jcc flex_aic',
                        children: (0, s.jsx)(c.Mm, {
                          disabled: 'inprogress' === f,
                          children: v[f],
                        }),
                      }),
                  'error' === f &&
                    (0, s.jsx)('div', {
                      className: 'text_red text_center',
                      children: 'Something went wrong. Please try again in a few minutes',
                    }),
                ],
              }),
            ],
          });
        };
      },
      30728: function (e, t, r) {
        'use strict';
        var n = r(27573);
        r(7653),
          (t.default = e => {
            let { preTitle: t, title: r, description: a, icon: s, iconAlt: l } = e;
            return (0, n.jsxs)('div', {
              className:
                'gap-0.8rem sm:gap-1.6rem md:gap-2rem grid !grid-cols-3 sm:!grid-cols-4 md:!grid-cols-12',
              children: [
                s &&
                  l &&
                  (0, n.jsx)('img', {
                    src: s,
                    className: 'col-span-full mx-auto w-[6rem] sm:w-[6.8rem] md:w-[8rem]',
                    alt: l,
                  }),
                (0, n.jsxs)('div', {
                  className: 'col-span-full mt-0 text-center md:col-span-10 md:col-start-2',
                  children: [
                    t &&
                      (0, n.jsx)('span', {
                        className: 'mc-text-body mb-0.8rem sm:mb-1.2rem block',
                        children: t,
                      }),
                    (0, n.jsx)('h2', { className: 'mc-text-h1 !mt-0', children: r }),
                  ],
                }),
                a &&
                  (0, n.jsx)('p', {
                    className:
                      'mc-text-body mt-1.6rem md:mt-2.4rem col-span-full text-center md:col-span-6 md:col-start-4',
                    children: a,
                  }),
              ],
            });
          });
      },
      70960: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(28024),
          l = r(50294),
          i = r(32253),
          c = r(62490),
          o = r(3669),
          d = r(74331);
        let m = (e, t, r, a) => {
            let s = 'w-2rem h-2rem !absolute left-0 top-0 '
              .concat(
                r ? 'opacity-100 delay-500 scale-100' : 'opacity-0 scale-50',
                ' transition-fade duration-300 mc-ease '
              )
              .concat(
                a
                  ? 'md:w-2.4rem md:h-2.4rem huge:top-1.2rem huge:left-1.2rem sm:top-0.8rem sm:left-0.8rem'
                  : 'huge:w-2.4rem huge:h-2.4rem'
              );
            return {
              instagram: (0, n.jsxs)('svg', {
                viewBox: '0 0 24 24',
                fill: 'none',
                className: s,
                children: [
                  (0, n.jsx)('path', {
                    d: 'M11.996 3.802c2.671 0 2.985.012 4.04.06.976.044 1.504.206 1.857.345.469.183.802.397 1.151.747.35.349.568.683.746 1.151.135.353.302.881.346 1.858.047 1.056.06 1.37.06 4.041 0 2.672-.013 2.986-.06 4.042-.044.976-.207 1.504-.346 1.858a3.106 3.106 0 0 1-.746 1.151c-.349.35-.682.568-1.15.746-.354.135-.881.302-1.858.346-1.055.048-1.369.06-4.04.06-2.67 0-2.984-.012-4.04-.06-.976-.044-1.503-.207-1.857-.346a3.103 3.103 0 0 1-1.15-.746 3.056 3.056 0 0 1-.747-1.151c-.134-.354-.301-.882-.345-1.858-.047-1.056-.06-1.37-.06-4.042 0-2.671.013-2.985.06-4.041.044-.977.207-1.505.345-1.858.183-.468.397-.802.747-1.151.349-.35.682-.568 1.15-.747.354-.135.881-.301 1.858-.345 1.055-.052 1.373-.06 4.04-.06Zm0-1.802c-2.714 0-3.055.012-4.123.06-1.063.047-1.79.218-2.424.464-.66.254-1.215.6-1.77 1.155a4.96 4.96 0 0 0-1.155 1.77c-.246.636-.417 1.363-.464 2.43C2.012 8.945 2 9.286 2 12c0 2.716.012 3.057.06 4.125.047 1.064.218 1.79.464 2.43.254.659.6 1.215 1.155 1.77a4.958 4.958 0 0 0 1.77 1.156c.635.246 1.36.417 2.428.464 1.068.048 1.405.06 4.123.06 2.719 0 3.056-.012 4.124-.06 1.063-.047 1.79-.218 2.428-.464a4.873 4.873 0 0 0 1.77-1.155 4.962 4.962 0 0 0 1.155-1.771c.246-.635.417-1.362.464-2.43.048-1.068.06-1.405.06-4.125 0-2.719-.012-3.056-.06-4.124-.047-1.064-.218-1.79-.464-2.43a4.876 4.876 0 0 0-1.155-1.77 4.959 4.959 0 0 0-1.77-1.156c-.635-.246-1.36-.417-2.428-.464C15.052 2.012 14.71 2 11.996 2Z',
                    fill: t,
                  }),
                  (0, n.jsx)('path', {
                    d: 'M11.996 3.802c2.671 0 2.985.012 4.04.06.976.044 1.504.206 1.857.345.469.183.802.397 1.151.747.35.349.568.683.746 1.151.135.353.302.881.346 1.858.047 1.056.06 1.37.06 4.041 0 2.672-.013 2.986-.06 4.042-.044.976-.207 1.504-.346 1.858a3.106 3.106 0 0 1-.746 1.151c-.349.35-.682.568-1.15.746-.354.135-.881.302-1.858.346-1.055.048-1.369.06-4.04.06-2.67 0-2.984-.012-4.04-.06-.976-.044-1.503-.207-1.857-.346a3.103 3.103 0 0 1-1.15-.746 3.056 3.056 0 0 1-.747-1.151c-.134-.354-.301-.882-.345-1.858-.047-1.056-.06-1.37-.06-4.042 0-2.671.013-2.985.06-4.041.044-.977.207-1.505.345-1.858.183-.468.397-.802.747-1.151.349-.35.682-.568 1.15-.747.354-.135.881-.301 1.858-.345 1.055-.052 1.373-.06 4.04-.06Z',
                    fill: t,
                  }),
                  (0, n.jsx)('path', {
                    d: 'M12 6.867a5.138 5.138 0 1 0 .002 10.276A5.138 5.138 0 0 0 12 6.867Zm0 8.468a3.334 3.334 0 1 1 0-6.669 3.334 3.334 0 0 1 0 6.67Z',
                    fill: '#fff',
                  }),
                  (0, n.jsx)('path', {
                    d: 'M17.34 7.86a1.199 1.199 0 1 0 0-2.398 1.199 1.199 0 0 0 0 2.398Z',
                    fill: '#fff',
                  }),
                ],
              }),
              messenger: (0, n.jsxs)('svg', {
                viewBox: '0 0 24 24',
                fill: 'none',
                className: s,
                children: [
                  (0, n.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M2 11.7C2 6.128 6.368 2 12 2c5.633 0 10 4.13 10 9.703 0 5.572-4.367 9.7-10 9.7a10.94 10.94 0 0 1-2.895-.385.804.804 0 0 0-.535.04l-1.985.875a.8.8 0 0 1-1.122-.708l-.055-1.78a.79.79 0 0 0-.268-.57C3.195 17.135 2 14.615 2 11.7Zm6.933-1.822-2.938 4.66c-.282.447.268.95.688.63l3.155-2.395a.6.6 0 0 1 .722-.003l2.338 1.753a1.5 1.5 0 0 0 2.17-.4l2.94-4.658c.28-.447-.27-.953-.69-.633l-3.155 2.395a.6.6 0 0 1-.723.003l-2.337-1.752a1.5 1.5 0 0 0-2.17.4Z',
                    fill: t,
                  }),
                  (0, n.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'm5.995 14.537 2.938-4.66a1.5 1.5 0 0 1 2.17-.4l2.338 1.753a.6.6 0 0 0 .722-.003l3.155-2.395c.42-.32.97.185.69.633l-2.94 4.657a1.5 1.5 0 0 1-2.17.4L10.56 12.77a.6.6 0 0 0-.722.002l-3.155 2.395c-.42.32-.97-.182-.688-.63Z',
                    fill: t,
                  }),
                ],
              }),
              tiktok: (0, n.jsxs)('svg', {
                viewBox: '0 0 24 24',
                fill: 'none',
                className: s,
                children: [
                  (0, n.jsx)('rect', {
                    x: '2',
                    y: '2',
                    width: '20',
                    height: '20',
                    rx: '5',
                    fill: '#000',
                  }),
                  (0, n.jsx)('path', {
                    d: 'M14.985 10.082a5.38 5.38 0 0 0 3.148 1.01V8.827c-.223 0-.444-.023-.662-.07v1.785a5.382 5.382 0 0 1-3.147-1.01v4.625c0 2.314-1.87 4.19-4.175 4.19-.86 0-1.66-.262-2.324-.71a4.155 4.155 0 0 0 2.985 1.261 4.182 4.182 0 0 0 4.175-4.19v-4.625Zm.815-2.287a3.164 3.164 0 0 1-.815-1.85v-.29h-.626a3.173 3.173 0 0 0 1.441 2.14Zm-6.517 8.066a1.913 1.913 0 0 1-.39-1.16 1.913 1.913 0 0 1 2.49-1.827v-2.317a4.196 4.196 0 0 0-.66-.038v1.803a1.913 1.913 0 0 0-2.49 1.827c0 .749.427 1.397 1.05 1.712Z',
                    fill: '#FF004F',
                  }),
                  (0, n.jsx)('path', {
                    d: 'M14.322 9.53a5.382 5.382 0 0 0 3.148 1.011V8.757a3.157 3.157 0 0 1-1.671-.962 3.174 3.174 0 0 1-1.442-2.14h-1.645v9.053a1.913 1.913 0 0 1-1.91 1.91c-.62 0-1.171-.297-1.52-.757a1.917 1.917 0 0 1-1.05-1.712 1.913 1.913 0 0 1 2.489-1.826v-1.804a4.182 4.182 0 0 0-4.087 4.188c0 1.14.453 2.175 1.19 2.93a4.145 4.145 0 0 0 2.324.709 4.182 4.182 0 0 0 4.174-4.19V9.53Z',
                    fill: '#fff',
                  }),
                  (0, n.jsx)('path', {
                    d: 'M17.47 8.757v-.483c-.591.001-1.17-.165-1.671-.479a3.154 3.154 0 0 0 1.67.962Zm-3.113-3.103a3.257 3.257 0 0 1-.035-.26v-.291H12.05v9.053a1.913 1.913 0 0 1-2.768 1.705c.349.46.9.756 1.52.756a1.913 1.913 0 0 0 1.91-1.91V5.654h1.645ZM10.72 10.52v-.514a4.182 4.182 0 0 0-4.748 4.15 4.19 4.19 0 0 0 1.852 3.482 4.183 4.183 0 0 1-1.19-2.93 4.183 4.183 0 0 1 4.086-4.188Z',
                    fill: '#00F2EA',
                  }),
                ],
              }),
              whatsapp: (0, n.jsxs)('svg', {
                viewBox: '0 0 24 24',
                fill: 'none',
                className: s,
                children: [
                  (0, n.jsx)('path', {
                    d: 'm2 22 1.414-5.133a9.815 9.815 0 0 1-1.328-4.957c0-5.466 4.47-9.91 9.957-9.91a9.906 9.906 0 0 1 7.044 2.904A9.803 9.803 0 0 1 22 11.914c0 5.466-4.47 9.91-9.962 9.91h-.005c-1.666 0-3.304-.418-4.76-1.207L2 22Zm5.525-3.175.301.18a8.33 8.33 0 0 0 4.212 1.15h.005c4.56 0 8.276-3.692 8.276-8.236 0-2.2-.86-4.268-2.421-5.827a8.233 8.233 0 0 0-5.855-2.414c-4.56-.005-8.276 3.688-8.276 8.232 0 1.554.435 3.07 1.265 4.382l.196.313-.835 3.038 3.132-.818Z',
                    fill: t,
                  }),
                  (0, n.jsx)('path', {
                    d: 'm2.348 21.653 1.365-4.957a9.488 9.488 0 0 1-1.289-4.782c.005-5.275 4.317-9.567 9.618-9.567 2.574 0 4.986.998 6.8 2.804a9.486 9.486 0 0 1 2.813 6.768c0 5.276-4.317 9.567-9.613 9.567h-.005c-1.61 0-3.19-.404-4.594-1.164l-5.095 1.33Z',
                    fill: t,
                  }),
                  (0, n.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M9.555 7.766c-.187-.414-.382-.423-.56-.428-.142-.005-.31-.005-.477-.005a.918.918 0 0 0-.664.309c-.229.247-.869.846-.869 2.067 0 1.217.893 2.396 1.018 2.562.124.167 1.724 2.747 4.25 3.74 2.101.828 2.53.661 2.985.619.453-.043 1.47-.6 1.68-1.18.206-.579.206-1.073.144-1.178-.062-.104-.23-.166-.478-.29-.248-.123-1.47-.722-1.7-.808-.23-.08-.396-.123-.559.124-.167.247-.644.803-.788.97-.143.166-.29.185-.54.061-.248-.123-1.05-.385-2-1.23-.74-.657-1.242-1.47-1.385-1.717-.143-.247-.014-.38.11-.503.11-.11.248-.29.372-.433.124-.143.167-.247.249-.413.08-.167.043-.31-.02-.433-.062-.119-.549-1.345-.768-1.834Z',
                    fill: '#fff',
                  }),
                ],
              }),
            }[e];
          },
          u = (e, t, r) => {
            let a = '!absolute left-1/2 top-1/2 h-auto w-[129%] -translate-x-1/2 -translate-y-1/2',
              s = ''.concat(c.stroke, ' ').concat(r ? c.strokeActive : '');
            return {
              'shape-type-01': (0, n.jsx)('svg', {
                viewBox: '0 0 360 360',
                fill: 'none',
                className: a,
                children: (0, n.jsx)('path', {
                  d: 'M123.519 33.982c-2.158 4.712-1.85 10.3-.655 15.58 4.263 18.831 18.081 33.706 31.555 47.761l-1.136 1.322c-17.533-12.5-46.749-26.392-72.923-33.751-13.09-3.682-25.35-5.708-34.97-5.144-9.655.567-16.351 3.708-18.867 10.037-2.517 6.334-1.617 13.603 1.786 21.16 3.401 7.557 9.265 15.31 16.506 22.516 14.493 14.422 34.323 26.48 50.418 30.315l-.157 1.728c-9.852.504-28.002 6.034-43.373 17.9-15.337 11.84-27.83 29.922-26.622 55.551.834 17.681 10.44 30.845 22.877 39.639 12.456 8.806 27.69 13.179 39.586 13.266l.935.007-.07.936c-1.472 19.546 4.376 38.469 17.021 50.852 14.906 14.595 41.002 16.881 59.715 8.499 18.473-8.277 25.121-28.888 23.717-51.125l1.732-.212c3.163 17.625 10.2 31.865 22.126 40.446 12.696 9.13 31.503 8.956 43.649-.873 12.032-9.74 11.706-24.527 6.471-36.206l-.776-1.731 1.816.53L335 303.719l-54.139-44.165-1.985-1.62 2.559.063c8.593.212 16.419-.206 22.521-2.572 6.031-2.338 10.39-6.579 12.129-14.162 2.282-9.95-2.33-20.193-8.701-28.764-6.352-8.542-14.308-15.225-18.325-17.97l.928-1.484c5.481 3.164 12.309 5.798 18.701 6.78 6.429.988 12.198.274 15.806-2.954M123.519 33.982l-.794-.366m.794.366c2.517-5.496 7.507-8.525 13.516-9.951 6.017-1.428 12.952-1.218 19.134-.306 48.016 7.102 92.649 31.597 127.612 65.854 16.031 15.707 30.068 39.22 38.135 60.561 4.033 10.669 6.553 20.747 7.101 28.998.551 8.308-.913 14.504-4.523 17.733m0 0 .544.611',
                  stroke: t,
                  strokeWidth: '3',
                  className: s,
                }),
              }),
              'shape-type-02': (0, n.jsx)('svg', {
                viewBox: '0 0 364 360',
                fill: 'none',
                className: a,
                children: (0, n.jsx)('path', {
                  d: 'M190.654 214.692C157.398 68.311 286.173 94.827 312.498 101.769l-20.903 61.334L362 92.861 297.706 2l16.041 77.875c-12.185-5.228-103.885-41.635-158.175 22.229C97.314 170.632 199.895 332.99 2 194.241L19.252 358c23.68-6.566 208.384 19.615 171.402-143.308Z',
                  stroke: t,
                  strokeWidth: '3',
                  className: s,
                }),
              }),
              'shape-type-03': (0, n.jsx)('svg', {
                viewBox: '0 0 360 362',
                fill: 'none',
                className: a,
                children: (0, n.jsx)('path', {
                  d: 'M344 249.38 108.368 359 16 123.18 278.63 3 344 249.38Z',
                  stroke: t,
                  strokeWidth: '3',
                  className: s,
                }),
              }),
              'shape-type-04': (0, n.jsx)('svg', {
                viewBox: '0 0 360 362',
                fill: 'none',
                className: a,
                children: (0, n.jsx)('path', {
                  d: 'M136.888 361C149.196 276.994 113.324 225.902 20 257.014c24.545-19.494 110.956-84.583 23.19-144.291C154.17 149.795 149.243 51.168 152.233 1c26.997 128.261 95.449 93.037 141.783 48.066C281.965 60.13 208.119 147.07 340 180.122c-36.059 2.61-104.183 73.266-50.562 128.054-43.953-20.003-120.461-26.955-152.55 52.824Z',
                  stroke: t,
                  strokeWidth: '3',
                  className: s,
                }),
              }),
            }[e];
          };
        t.default = e => {
          let { socialProofs: t } = e,
            [r, _] = (0, a.useState)(!1),
            [p, h] = (0, a.useState)(!1),
            x = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let e = new IntersectionObserver(
              t => {
                let [r] = t;
                r.isIntersecting && (h(!0), e.disconnect());
              },
              { threshold: 0.75 }
            );
            return x.current && e.observe(x.current), () => e.disconnect();
          }, []);
          let g = e => {
            window.gtag &&
              window.gtag('event', 'read_more_click', {
                ctaID: 'read_more_click',
                transport_type: 'beacon',
              }),
              _(e);
          };
          return (0, n.jsxs)('div', {
            className: 'relative',
            ref: x,
            children: [
              (0, n.jsxs)(s.tq, {
                slidesPerView: 'auto',
                centeredSlides: !0,
                spaceBetween: 12,
                speed: 600,
                modules: [o.VS],
                parallax: !0,
                loop: !0,
                grabCursor: !0,
                breakpoints: { 768: { parallax: !1, spaceBetween: 20 } },
                className: 'overflow-visible',
                children: [
                  t.map((e, t) =>
                    (0, n.jsx)(
                      s.o5,
                      {
                        className:
                          'relative flex h-[33rem] w-[87.5%] cursor-pointer sm:h-auto sm:w-[87.2%] md:w-[66.3%]',
                        onClick: g.bind(null, t),
                        children: r => {
                          let { isActive: a } = r;
                          return (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)('div', {
                                className: 'relative !hidden w-[29.9%] shrink-0 sm:!block',
                                children: [
                                  (0, n.jsx)('div', {
                                    className: 'relative aspect-[672/1008] w-full overflow-hidden',
                                    children: (0, n.jsx)(l.default, {
                                      ...e.desktopImage,
                                      className:
                                        '!absolute -left-[5%] -top-[5%] w-[110%] max-w-none transition-transform duration-700 '.concat(
                                          a ? 'scale-100' : 'scale-[0.909]'
                                        ),
                                    }),
                                  }),
                                  m(e.icon, e.foregroundColor, a, !0),
                                  u(e.shape, e.foregroundColor, 0 === t ? p && a : a),
                                ],
                              }),
                              (0, n.jsx)('div', {
                                className:
                                  'grow self-stretch overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[40px]',
                                style: { backgroundColor: e.backgroundColor },
                                children: (0, n.jsxs)('div', {
                                  className:
                                    'bg-grid-pattern-card p-2rem sm:py-2rem sm:px-2.4rem md:py-2.4rem md:px-3.2rem flex h-full w-full flex-col justify-between',
                                  children: [
                                    (0, n.jsxs)('div', {
                                      children: [
                                        (0, n.jsxs)('div', {
                                          className:
                                            'mb-1.6rem relative flex items-center sm:!hidden',
                                          'data-swiper-parallax': '-100',
                                          children: [
                                            (0, n.jsx)(l.default, {
                                              ...e.mobileImage,
                                              className: 'w-6rem rounded-full',
                                            }),
                                            m(e.icon, e.foregroundColor, a, !1),
                                            (0, n.jsxs)('span', {
                                              className: 'mc-text-label ml-1.2rem uppercase',
                                              children: [
                                                e.igHandle,
                                                ', ',
                                                (0, n.jsx)('br', {}),
                                                (0, n.jsxs)('span', {
                                                  className: 'text-[#7F7F7F]',
                                                  children: [e.followerCount, ' followers'],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)('h3', {
                                          className:
                                            'mc-text-h3-regular mt-0 sm:transition-opacity sm:duration-500 '.concat(
                                              a ? 'sm:opacity-100' : 'sm:opacity-50'
                                            ),
                                          'data-swiper-parallax': '-150',
                                          children: e.shortDescription,
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)('div', {
                                      className:
                                        'flex items-center justify-between sm:transition-opacity sm:duration-500 '.concat(
                                          a ? 'sm:opacity-100' : 'sm:opacity-50'
                                        ),
                                      'data-swiper-parallax': '-200',
                                      children: [
                                        (0, n.jsxs)('span', {
                                          className: 'mc-text-label !hidden uppercase sm:!block',
                                          children: [
                                            e.igHandle,
                                            ',',
                                            ' ',
                                            (0, n.jsxs)('span', {
                                              className: 'text-[#7F7F7F]',
                                              children: [e.followerCount, ' followers'],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)('button', {
                                          className:
                                            'hover_trigger mc-text-label py-0.4rem !flex cursor-pointer items-center uppercase',
                                          children: [
                                            (0, n.jsx)('div', {
                                              className: 'underline_link !shadow-none',
                                              children: 'Read more',
                                            }),
                                            (0, n.jsx)('div', {
                                              className:
                                                'ml-0.8rem arrow !size-1.6rem md:!size-2rem',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      'social-proof-'.concat(t)
                    )
                  ),
                  (0, n.jsx)(i._r, { className: 'mt-4rem huge:mt-6rem justify-center' }),
                ],
              }),
              (0, n.jsx)(d.co, {
                closeCallback: () => {
                  _(!1);
                },
                isOpen: r,
                children: t.map((e, t) =>
                  (0, n.jsxs)(
                    'div',
                    {
                      className: 'huge:mb-12rem md:mb-10rem sm:mb-8rem mb-6rem relative last:mb-0',
                      children: [
                        (0, n.jsx)('div', {
                          className:
                            'bg-grey/50 md:-top-3.2rem md:-right-3.2rem md:-bottom-3.2rem md:-left-3.2rem sm:-top-1.6rem sm:-right-1.6rem sm:-bottom-1.6rem sm:-left-1.6rem -top-0.8rem -right-0.8rem -bottom-0.8rem -left-0.8rem rounded-mc !absolute opacity-0 '.concat(
                              r === t ? c.pulse : ''
                            ),
                        }),
                        (0, n.jsxs)('div', {
                          className:
                            'huge:mb-3.2rem sm:mb-2.4rem mb-2rem relative z-10 flex items-center',
                          children: [
                            (0, n.jsx)(l.default, {
                              ...e.mobileImage,
                              className: 'w-6rem huge:w-8rem rounded-full sm:w-[6.8rem]',
                            }),
                            m(e.icon, e.foregroundColor, !0, !1),
                            (0, n.jsxs)('span', {
                              className:
                                'mc-text-label huge:ml-2rem sm:ml-1.6rem ml-1.2rem uppercase',
                              children: [
                                e.igHandle,
                                ', ',
                                (0, n.jsx)('br', {}),
                                (0, n.jsxs)('span', {
                                  className: 'text-[#7F7F7F]',
                                  children: [e.followerCount, ' followers'],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsx)('p', {
                          className: 'mc-text-h3-regular relative z-10 !mt-0',
                          children:
                            '"Manychat has changed the game for my business and the way we show up online! It\'s allowed me to get more direct results from social media and show up and serve my followers on a\xa0whole new level. This is a must-have for creators and entrepreneurs. Seriously a game-changer!"⁠',
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          });
        };
      },
      85850: function (e, t, r) {
        'use strict';
        r.r(t);
        var n = r(27573),
          a = r(7653),
          s = r(32253),
          l = r(51800);
        t.default = e => {
          let { expandSubMenuTitle: t, items: r, activeLink: i } = e,
            [c, o] = (0, a.useState)(!1);
          return (0, n.jsxs)('div', {
            className: 'b_a sm-b_none sm-bg_grey sm-m_r-m '
              .concat(l.submenu, ' ')
              .concat(c ? l.open : ''),
            children: [
              (0, n.jsxs)('div', {
                onClick: () => {
                  o(!c);
                },
                className: 'flex flex_jcsb flex_aic p_a-s pointer '.concat(l.trigger),
                children: [
                  c ? 'Hide navigation' : t,
                  (0, n.jsx)('div', { className: 'arrowhead '.concat(c ? 'up' : '') }),
                ],
              }),
              (0, n.jsx)('div', {
                className: 'flex_fdc p_a-s sm-p_x-m '.concat(l.items),
                children: r.map(e =>
                  (0, n.jsx)(
                    s.rU,
                    {
                      to: e.link,
                      className: 'relative hover_trigger p_y-xs '.concat(
                        i === e.link ? 'active' : ''
                      ),
                      children: (0, n.jsx)('span', {
                        className: 'underline_link',
                        children: e.title,
                      }),
                    },
                    e.link
                  )
                ),
              }),
            ],
          });
        };
      },
      84879: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(28024),
          l = r(61561);
        t.default = e => {
          let { names: t, activeIndex: r, className: i = '', slot: c } = e,
            [o, d] = (0, a.useState)(!1),
            m = (0, s.oc)();
          return (0, n.jsxs)('div', {
            className: 'relative '.concat(i),
            slot: c,
            children: [
              (0, n.jsxs)('div', {
                className: 'flex flex_jcsb flex_aic sm-none bg_white caps p_x-s '.concat(l.button),
                role: 'button',
                onClick: () => d(!o),
                children: [
                  (0, n.jsx)('span', { children: t[r] }),
                  (0, n.jsx)('span', {
                    className: 'arrowhead '.concat(o ? 'up' : 'down'),
                    children: 'open',
                  }),
                ],
              }),
              (0, n.jsx)('div', {
                className: ''
                  .concat(l.switchers, ' ')
                  .concat(o ? l.open : '', ' flex o_auto-x flex_fdc sm-flex_fdr sm-flex_jcc'),
                slot: c,
                children: t.map((e, a) =>
                  (0, n.jsx)(
                    'div',
                    {
                      role: 'button',
                      'aria-pressed': 'false',
                      className: ''
                        .concat(l.switcher, ' caps p_a-s ')
                        .concat(
                          r === a ? l.active : 'bg_white pointer',
                          ' text_center nowrap\n              '
                        )
                        .concat(a !== t.length - 1 ? 'sm-m_r-xs' : ''),
                      onClick: () => {
                        m.params.loop ? m.slideToLoop(a) : m.slideTo(a), d(!1);
                      },
                      children: (0, n.jsx)('span', { 'data-text': e, children: e }),
                    },
                    'switcher-'.concat(e)
                  )
                ),
              }),
            ],
          });
        };
      },
      43514: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(7653),
          s = r(38711),
          l = r(99279);
        t.default = e => {
          let { message: t, className: r, absolute: i } = e,
            c = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            d = (0, a.useRef)(null),
            m = (0, a.useRef)('large-desktop'),
            u = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              let e = () => (m.current = (0, l.AV)());
              return (
                e(),
                window.addEventListener('resize', e, { passive: !0 }),
                () => {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
            (0, n.jsxs)('div', {
              className: 'text_center '
                .concat(i ? s.absolute : s.relative, ' ')
                .concat(s.tooltip, ' ')
                .concat(r || ''),
              onMouseEnter: () => {
                if (!c.current || !o.current || !d.current) return;
                if (
                  ((o.current.style.left = ''),
                  (o.current.style.marginLeft = ''),
                  (d.current.style.left = ''),
                  (d.current.style.marginLeft = ''),
                  (o.current.style.display = 'none'),
                  c.current.classList.remove(s.hover),
                  clearTimeout(u.current),
                  (o.current.style.display = 'block'),
                  'desktop' === m.current || 'large-desktop' === m.current)
                ) {
                  u.current = setTimeout(() => {
                    c.current && c.current.classList.add(s.hover);
                  }, 1e3 / 60);
                  return;
                }
                let e = (0, l.SI)().width,
                  t = c.current.offsetWidth,
                  r = (0, l.cv)(c.current).left,
                  n = o.current.offsetWidth,
                  a = (0, l.cv)(o.current).left;
                (n + a > e - (e - n) / 2 || a < (e - n) / 2) &&
                  ((o.current.style.left = '0'),
                  (o.current.style.marginLeft = '0'),
                  (d.current.style.left = '0'),
                  (d.current.style.marginLeft = '0'),
                  r < (e - n) / 2 + 0.11 * n
                    ? (o.current.style.left = ''.concat(-(0.01 * n), 'px'))
                    : e - r < (e - n) / 2 + 0.11 * n
                    ? (o.current.style.left = ''.concat(-n + t + 0.01 * n, 'px'))
                    : (o.current.style.left = ''.concat(-(r + n - e + (e - n) / 2), 'px')),
                  (a = (0, l.cv)(o.current).left),
                  (d.current.style.left = ''.concat(r + t / 2 - a, 'px')),
                  (u.current = setTimeout(() => {
                    c.current && c.current.classList.add(s.hover);
                  }, 1e3 / 60)));
              },
              onMouseLeave: () => {
                clearTimeout(u.current),
                  c.current &&
                    (c.current.classList.remove(s.hover),
                    (u.current = setTimeout(() => {
                      o.current && (o.current.style.display = 'none');
                    }, 300)));
              },
              ref: c,
              children: [
                '\xa0',
                (0, n.jsxs)('div', {
                  className: ''.concat(s.message, ' p_a-s'),
                  ref: o,
                  children: [(0, n.jsx)('div', { className: s.message_arrow, ref: d }), t],
                }),
              ],
            })
          );
        };
      },
      6062: function (e, t, r) {
        'use strict';
        var n = r(43514);
        t.Z = n.default;
      },
      39159: function (e, t, r) {
        'use strict';
        r.d(t, {
          default: function () {
            return y;
          },
        });
        var n = r(27573),
          a = r(54511),
          s = r(7653),
          l = e => {
            let {
                language: t,
                languages: r,
                currentSlug: a,
                navigateCallback: l,
                isVisible: i = !1,
              } = e,
              [c, o] = (0, s.useState)(t);
            return (
              (0, s.useEffect)(() => {
                document.documentElement.setAttribute('lang', t);
              }, [t]),
              (0, n.jsxs)('div', {
                className:
                  'huge:ml-2.4rem md:ml-2rem ml-1.6rem hover_trigger relative flex cursor-pointer items-center text-inherit opacity-0 transition-opacity md:opacity-100 '.concat(
                    i ? '!opacity-100' : 'opacity-0'
                  ),
                children: [
                  (0, n.jsx)('div', {
                    className: 'underline_link mc-text-label !absolute left-0 top-0',
                    children: (0, n.jsx)('span', { className: 'uppercase opacity-0', children: c }),
                  }),
                  (0, n.jsx)('select', {
                    className:
                      'mc-text-label pr-2.4rem relative z-[2] cursor-pointer appearance-none border-none bg-transparent uppercase',
                    onChange: e => {
                      o(
                        r.filter(t => {
                          let { prefix: r } = t;
                          return r === e.target.value;
                        })[0].label
                      ),
                        l(
                          ''
                            .concat(
                              r.filter(t => {
                                let { prefix: r } = t;
                                return r === e.target.value;
                              })[0].prefix
                            )
                            .concat(a)
                        );
                    },
                    value: r.filter(e => {
                      let { label: t } = e;
                      return t === c;
                    })[0].prefix,
                    children: r.map(e =>
                      (0, n.jsx)('option', { value: e.prefix, children: e.label }, e.label)
                    ),
                  }),
                  (0, n.jsx)('svg', {
                    className: 'w-2rem h-2rem pointer-events-none !absolute right-0',
                    viewBox: '0 0 20 20',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: (0, n.jsx)('path', {
                      d: 'M15 8L10.0633 14L5 8L15 8Z',
                      fill: 'currentColor',
                    }),
                  }),
                ],
              })
            );
          },
          i = r(79782),
          c = e => {
            let { linksRight: t, isTransformed: r, mobileMenuIsOpen: a } = e;
            return (0, n.jsxs)('div', {
              className: 'flex items-center',
              children: [
                t.button &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(i.un, {
                        href: t.button.link,
                        ...t.button,
                        outlined: !0,
                        className: 'mc-text-label !hidden md:!visible md:!block',
                        style: { color: 'currentColor' },
                        children: t.button.label,
                      }),
                      (0, n.jsx)(i.un, {
                        href: t.button.link,
                        ...t.button,
                        small: !0,
                        className:
                          'mc-text-label !bg-magenta transition-opacity md:!hidden '.concat(
                            r && !a ? 'opacity-100' : 'opacity-0'
                          ),
                        children: t.button.label,
                      }),
                    ],
                  }),
                t.link &&
                  (0, n.jsx)(i.un, {
                    href: t.link.link,
                    ...t.link,
                    className: 'mc-text-label !hidden !bg-transparent md:!visible md:!block',
                    style: { color: 'currentColor' },
                    children: t.link.label,
                  }),
              ],
            });
          },
          o = r(28024);
        let d = e => {
          let { link: t } = e;
          return (0, n.jsx)(
            i.rU,
            {
              to: t.link,
              target: t.target,
              ...t.eventPayload,
              children: (0, n.jsx)('div', {
                style: { backgroundImage: 'url('.concat(t.image.src, ')') },
                className:
                  'huge:!p-2.4rem huge:!h-[27.2rem] huge:!w-[41rem] huge:group-odd:!w-[27.2rem] md:!p-2rem hover_trigger text-white md:!h-[23rem] md:!w-[34.7rem] md:group-odd:!w-[23rem] '.concat(
                    a.solutionBanner
                  ),
                children: (0, n.jsxs)('div', {
                  className: a.solutionBannerContent,
                  children: [
                    (0, n.jsx)('h3', { className: '!mc-text-h5', children: t.label }),
                    (0, n.jsxs)('div', {
                      className: 'mt-0.4rem mc-text-label flex items-center uppercase',
                      children: [
                        (0, n.jsx)('div', {
                          className: ''.concat(a.underlineItem),
                          children: 'Learn more',
                        }),
                        (0, n.jsx)('div', { className: 'ml-0.8rem arrow !w-1.6rem !h-1.6rem' }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            t.label
          );
        };
        var m = e => {
            let t,
              {
                name: r,
                link: l,
                links: c,
                linksList: m,
                dropActive: u,
                dropDiactive: _,
                dropMove: p,
                index: h,
                isHover: x,
                currentSlug: g,
                gaHoverEventName: v,
              } = e,
              f = (0, s.useRef)(null),
              b = (0, s.useRef)(!1),
              j = (0, s.useRef)(!1),
              y = (0, s.useRef)(null),
              w = (0, s.useRef)(!1),
              N = (0, s.useRef)(0),
              k = (0, s.useRef)(null),
              C = (0, s.useRef)(null);
            (0, s.useEffect)(() => {
              b.current && !j.current && (j.current = !0);
            }, [b.current]);
            let P = () => {
                if ((k.current && p(k.current, h), !w.current)) {
                  var e, t;
                  (w.current = !0),
                    (N.current =
                      (null === (e = y.current) || void 0 === e ? void 0 : e.offsetHeight) || 0),
                    u(N.current),
                    null === (t = C.current) || void 0 === t || t.classList.add(a.isHover);
                }
              },
              S = () => {
                if ((r || c || m) && (clearTimeout(t), w.current)) {
                  var e;
                  (w.current = !1),
                    (N.current = 0),
                    _(),
                    null === (e = C.current) || void 0 === e || e.classList.remove(a.isHover);
                }
              };
            (0, s.useEffect)(() => {
              S();
            }, [g]);
            let T = !1,
              R = e => {
                ((g.includes(e) && !T) ||
                  (g.includes('video-course') && e.includes('video-course') && !T)) &&
                  (T = !0);
              };
            return (
              (0, s.useEffect)(() => {
                var e, t;
                T
                  ? null === (e = C.current) || void 0 === e || e.classList.add(a.underlineActive)
                  : null === (t = C.current) ||
                    void 0 === t ||
                    t.classList.remove(a.underlineActive);
              }),
              (0, n.jsxs)('div', {
                className: ''
                  .concat(a.navItem, ' ')
                  .concat(a.underline, ' px-1.6rem py-0.8rem underline_nav-link !shadow-none'),
                onMouseEnter: () => {
                  (r || c || m) &&
                    (clearTimeout(t),
                    x
                      ? P()
                      : (t = setTimeout(() => {
                          P();
                        }, 100)),
                    v && window.gtag && window.gtag('event', v, { transport_type: 'beacon' }));
                },
                onMouseLeave: S,
                ref: C,
                children: [
                  l &&
                    (0, n.jsx)(i.rU, {
                      ...l,
                      to: l.link,
                      scroll: g.split('#')[0] !== l.link.split('#')[0],
                      className: ''
                        .concat(a.navName, ' ')
                        .concat(a.underlineOv, ' mc-text-label cursor-pointer uppercase'),
                      activeClassName: a.underlineActive,
                      children: (0, n.jsx)('span', {
                        className: a.underlineItem,
                        children: l.label,
                      }),
                    }),
                  r &&
                    (c || m) &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)('div', {
                          className: ''
                            .concat(a.navName, ' ')
                            .concat(a.underlineOv, ' mc-text-label cursor-pointer uppercase'),
                          ref: f,
                          children: (0, n.jsx)('span', { className: a.underlineItem, children: r }),
                        }),
                        (0, n.jsx)('div', {
                          className: 'w-full '.concat(a.navOv),
                          ref: y,
                          children: (0, n.jsxs)('div', {
                            className:
                              'huge:p-4rem mt-0.8rem md:p-3.2rem flex transform-gpu justify-center text-black will-change-transform',
                            ref: k,
                            children: [
                              c &&
                                (0, n.jsx)(n.Fragment, {
                                  children: c.map(e =>
                                    (0, s.createElement)(
                                      i.rU,
                                      {
                                        ...e,
                                        key: e.label,
                                        className: ''
                                          .concat(a.navLink, ' ')
                                          .concat(
                                            a.underline,
                                            ' huge:my-4rem huge:mx-2rem huge:w-[20rem] flex flex-shrink flex-col items-center text-center md:mx-[1rem] md:my-[3.8rem] md:w-[19.2rem] '
                                          )
                                          .concat(e.link ? '' : 'pointer-events-none'),
                                        activeClassName: a.underlineActive,
                                        to: e.link || '/',
                                        topBarCategoryIsActive: R,
                                      },
                                      (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          (null == e ? void 0 : e.icon) &&
                                            (0, n.jsx)('img', {
                                              className: 'w-3.2rem h-3.2rem mb-0.8rem',
                                              src: e.icon,
                                              alt: '',
                                            }),
                                          (0, n.jsx)('div', {
                                            className: a.underlineOv,
                                            children: (0, n.jsx)('p', {
                                              className: '!mc-text-h5 '.concat(a.underlineItem),
                                              children: e.label,
                                            }),
                                          }),
                                          (null == e ? void 0 : e.description) &&
                                            (0, n.jsx)('div', {
                                              className: 'mt-0.8rem mc-text-caption opacity-40',
                                              children: e.description,
                                            }),
                                        ],
                                      })
                                    )
                                  ),
                                }),
                              m &&
                                (0, n.jsx)(n.Fragment, {
                                  children:
                                    null == m
                                      ? void 0
                                      : m.map((e, t) => {
                                          var r;
                                          let l = (null == e ? void 0 : e.links.length) > 2;
                                          return 'name' in e
                                            ? (0, n.jsxs)(
                                                'div',
                                                {
                                                  className:
                                                    'huge:px-2rem md:px-1.6rem w-[24rem] flex-shrink-0 first:pl-0 last:border-l last:border-black/10 last:pr-0 '.concat(
                                                      a.navLinksList
                                                    ),
                                                  children: [
                                                    (0, n.jsx)('div', {
                                                      className: ''.concat(
                                                        a.navName,
                                                        ' mc-text-label huge:mb-2rem md:mb-1.6rem uppercase text-black/40'
                                                      ),
                                                      children: e.name,
                                                    }),
                                                    (0, n.jsx)('div', {
                                                      className: 'flex flex-col items-start',
                                                      children:
                                                        null == e
                                                          ? void 0
                                                          : null === (r = e.links) || void 0 === r
                                                          ? void 0
                                                          : r.map(e =>
                                                              (0, s.createElement)(
                                                                i.rU,
                                                                {
                                                                  ...e,
                                                                  className: ''
                                                                    .concat(a.navLink, ' ')
                                                                    .concat(
                                                                      a.underline,
                                                                      ' mt-0.8rem first:mt-0'
                                                                    ),
                                                                  activeClassName:
                                                                    a.underlineActive,
                                                                  to: e.link,
                                                                  key: e.label,
                                                                  topBarCategoryIsActive: R,
                                                                },
                                                                (0, n.jsx)(n.Fragment, {
                                                                  children: (0, n.jsx)('p', {
                                                                    className: ''.concat(
                                                                      a.underlineItem,
                                                                      ' !mc-text-h5'
                                                                    ),
                                                                    children: e.label,
                                                                  }),
                                                                })
                                                              )
                                                            ),
                                                    }),
                                                  ],
                                                },
                                                'links-list-'.concat(t)
                                              )
                                            : (0, n.jsxs)(o.tq, {
                                                className: ''.concat(
                                                  a.swiper,
                                                  ' huge:-mr-4rem md:-mr-3.2rem huge:px-4rem md:px-3.2rem huge:ml-[12rem] border-l border-black/10 md:ml-[16rem]'
                                                ),
                                                speed: 600,
                                                draggable: l,
                                                grabCursor: l,
                                                slidesPerView: 'auto',
                                                breakpoints: {
                                                  1024: { spaceBetween: 12 },
                                                  1280: { spaceBetween: 13.2 },
                                                  1512: { spaceBetween: 16 },
                                                },
                                                parallax: !0,
                                                children: [
                                                  null == e
                                                    ? void 0
                                                    : e.links.map((e, t) =>
                                                        (0, n.jsx)(
                                                          o.o5,
                                                          {
                                                            className: ''
                                                              .concat(a.slide, ' ')
                                                              .concat(a.navLink, ' group'),
                                                            children: (0, n.jsx)(d, {
                                                              link: e,
                                                              index: t,
                                                            }),
                                                          },
                                                          ''.concat(e.label, '-').concat(t)
                                                        )
                                                      ),
                                                  l &&
                                                    (0, n.jsx)(i._r, {
                                                      className: 'huge:mt-2.4rem md:mt-2rem flex',
                                                    }),
                                                ],
                                              });
                                        }),
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              })
            );
          },
          u = r(83733),
          _ = e => {
            let { links: t, currentSlug: r } = e,
              [l, i] = (0, s.useState)(!1),
              c = (0, s.useRef)(null),
              o = (0, s.useRef)(null),
              d = (0, s.useRef)(null),
              _ = (0, s.useRef)({ element: null, index: null }),
              p = (0, s.useRef)({ element: null, index: null }),
              h = (e, t) => {
                (_.current.element = e),
                  (_.current.index = t),
                  u.ZP.set(e, { opacity: 1, x: 0 }),
                  null !== p.current.index &&
                    p.current.element &&
                    (_.current.index > p.current.index
                      ? (u.ZP.fromTo(
                          _.current.element,
                          { x: 100, opacity: 0 },
                          {
                            ease: 'expo.out',
                            duration: 0.45,
                            x: 0,
                            opacity: 1,
                            willChange: 'transform',
                            delay: 0.1,
                          }
                        ),
                        u.ZP.fromTo(
                          p.current.element,
                          { x: 0, opacity: 1 },
                          { duration: 0.2, opacity: 0, x: -100 }
                        ))
                      : (u.ZP.fromTo(
                          _.current.element,
                          { x: -100, opacity: 0 },
                          {
                            ease: 'expo.out',
                            duration: 0.45,
                            x: 0,
                            opacity: 1,
                            willChange: 'transform',
                          }
                        ),
                        u.ZP.fromTo(
                          p.current.element,
                          { x: 0, opacity: 1 },
                          { duration: 0.2, x: 100, opacity: 0 }
                        ))),
                  (p.current.element = e),
                  (p.current.index = t);
              },
              x = e => {
                var t;
                i(!0),
                  c.current && c.current.classList.add(a.isDrop),
                  null === (t = d.current) || void 0 === t || t.kill(),
                  (d.current = u.ZP.to(o.current, {
                    duration: 0.45,
                    height: e,
                    willChange: 'height',
                    ease: 'power2.out',
                    onStart: () => {
                      u.ZP.set(o.current, { opacity: 1, visibility: 'visible' });
                    },
                  }));
              },
              g = () => {
                var e;
                c.current && c.current.classList.remove(a.isDrop),
                  null === (e = d.current) || void 0 === e || e.kill(),
                  (d.current = u.ZP.to(o.current, {
                    duration: 0.45,
                    height: 0,
                    willChange: 'height',
                    ease: 'power2.out',
                    onStart: () => {
                      i(!1),
                        (_.current.element = null),
                        (_.current.index = null),
                        (p.current.element = null),
                        (p.current.index = null),
                        u.ZP.set(o.current, { opacity: 0, visibility: 'hidden' });
                    },
                  }));
              };
            return (0, n.jsxs)('nav', {
              className:
                '!absolute inset-x-0 inset-y-0 mx-auto !hidden max-w-[147.2rem] items-center justify-center md:!flex',
              ref: c,
              children: [
                (0, n.jsx)('div', {
                  className: ''.concat(a.navDrop, ' mt-0.8rem mx-auto rounded-[8px] shadow'),
                  ref: o,
                }),
                t.map((e, t) => {
                  var n;
                  return (0, s.createElement)(m, {
                    ...e,
                    isHover: l,
                    dropActive: x,
                    dropDiactive: g,
                    dropMove: h,
                    currentSlug: r,
                    index: t,
                    key: e.name || (null === (n = e.link) || void 0 === n ? void 0 : n.label) || t,
                  });
                }),
              ],
            });
          },
          p = r(65845),
          h = e => {
            let { transform: t } = e,
              r = (0, s.useRef)(null),
              l = (0, s.useRef)(!0);
            return (
              (0, s.useEffect)(() => {
                l.current &&
                  r.current &&
                  ((l.current = !1),
                  (r.current.style.width = 5.393 * r.current.offsetHeight + 'px'));
                let e = () => {
                  t.isTransformed && r.current
                    ? (r.current.classList.add('!transition-none'),
                      (r.current.style.width = 1.111 * r.current.offsetHeight + 'px'),
                      setTimeout(() => {
                        r.current && r.current.classList.remove('!transition-none');
                      }, 100))
                    : !t.isTransformed &&
                      r.current &&
                      (r.current.classList.add('!transition-none'),
                      (r.current.style.width = 5.393 * r.current.offsetHeight + 'px'),
                      setTimeout(() => {
                        r.current && r.current.classList.remove('!transition-none');
                      }, 100));
                };
                return (
                  !t.isTransformed && r.current
                    ? (r.current.style.width = 5.393 * r.current.offsetHeight + 'px')
                    : t.isTransformed &&
                      r.current &&
                      (r.current.style.width = 1.111 * r.current.offsetHeight + 'px'),
                  window.addEventListener('resize', e, { passive: !0 }),
                  () => {
                    window.removeEventListener('resize', e);
                  }
                );
              }, [t]),
              (0, n.jsx)('div', {
                className:
                  'h-2rem to-sm:!w-[2.222rem] sm-md:!w-[3.111rem] z-[1] sm:h-[2.8rem] '.concat(
                    a.logo
                  ),
                ref: r,
                children: (0, n.jsx)(p.default, {
                  to: '/',
                  className: 'h-full overflow-hidden',
                  children: (0, n.jsxs)('svg', {
                    fill: 'none',
                    viewBox: '0 0 151 28',
                    className: 'h-full',
                    children: [
                      (0, n.jsxs)('g', {
                        clipPath: 'url(#logo-a)',
                        children: [
                          (0, n.jsx)('path', {
                            className: ''.concat(a.letter, ' ').concat(a.letter1),
                            d: 'M26.323.443h-.215c-6.344 0-9.428 9.67-9.428 9.67v-7.42H0v20.391h6.666V9.49h3.556v13.595h7.154S21.05 6.947 24.49 8.154c2.319.886-4.22 14.916-4.22 14.916h9.446s1.31-9.138 1.33-12.3c.29-5.37-.542-10.332-4.73-10.332',
                          }),
                          (0, n.jsx)('path', {
                            className: ''
                              .concat(a.letter, ' ')
                              .concat(a.letter2, ' to-md:!opacity-0'),
                            d: 'M42.462 9.725a5.016 5.016 0 0 0-.662-.915 5.4 5.4 0 0 0-1.738-1.267 5.045 5.045 0 0 0-2.14-.475 5.32 5.32 0 0 0-2.996.844 5.421 5.421 0 0 0-1.997 2.59 11.465 11.465 0 0 0-.713 4.318v.957c-.042 1.472.19 2.938.684 4.322a5.326 5.326 0 0 0 1.942 2.569 5.28 5.28 0 0 0 2.997.835 5.136 5.136 0 0 0 2.156-.463 5.671 5.671 0 0 0 1.782-1.267c.251-.265.477-.554.676-.862v2.155h6.666V7.505h-6.666l.008 2.22Zm.165 5.925c.013.66-.054 1.32-.2 1.963a2.455 2.455 0 0 1-.58 1.16 1.334 1.334 0 0 1-.968.381 1.27 1.27 0 0 1-.945-.38 2.378 2.378 0 0 1-.58-1.155 8.607 8.607 0 0 1-.185-1.969v-.83a8.115 8.115 0 0 1 .194-1.951c.082-.423.278-.814.565-1.13a1.293 1.293 0 0 1 .94-.367c.357-.012.704.12.967.366.294.314.495.706.58 1.131.147.64.214 1.295.2 1.951l.012.83Z',
                          }),
                          (0, n.jsx)('path', {
                            className: ''
                              .concat(a.letter, ' ')
                              .concat(a.letter3, ' to-md:!opacity-0'),
                            d: 'M65.139 7.69a4.57 4.57 0 0 0-2.432-.61 5.649 5.649 0 0 0-2.405.498 5.538 5.538 0 0 0-1.823 1.344c-.342.387-.63.82-.855 1.287V7.516h-6.452v15.562h6.646v-9.33c-.013-.35.056-.699.2-1.018.11-.247.294-.454.524-.59a1.43 1.43 0 0 1 .71-.183 1.198 1.198 0 0 1 .934.366c.257.335.378.757.339 1.18v9.58h6.643V12.63a8.036 8.036 0 0 0-.516-3.082 3.87 3.87 0 0 0-1.513-1.852',
                          }),
                          (0, n.jsx)('path', {
                            className: ''
                              .concat(a.letter, ' ')
                              .concat(a.letter4, ' to-md:!opacity-0'),
                            d: 'M73.136 23.983a1.233 1.233 0 0 0-.22-.75 1.3 1.3 0 0 0-.643-.445 3.2 3.2 0 0 0-1.032-.148L67.688 7.516h6.918l2.072 12.972h-.632l2.168-12.972h6.78L81.632 22.64a3.368 3.368 0 0 0-1.099.148 1.125 1.125 0 0 0-.597.434c-.133.23-.198.494-.186.761v3.578h-6.614v-3.578Z',
                          }),
                          (0, n.jsx)('g', {
                            clipPath: 'url(#logo-b)',
                            children: (0, n.jsx)('path', {
                              className: ''
                                .concat(a.letter, ' ')
                                .concat(a.letter5, ' to-md:!opacity-0'),
                              d: 'M95.305 16.946a3.396 3.396 0 0 1-.464 1.85 1.423 1.423 0 0 1-.532.474c-.214.11-.452.162-.691.153a1.433 1.433 0 0 1-1.02-.366 2.38 2.38 0 0 1-.58-1.21 10.819 10.819 0 0 1-.191-2.295v-.717c0-1.332.148-2.28.45-2.84a1.5 1.5 0 0 1 .575-.635c.249-.15.535-.223.824-.21.233-.016.465.03.675.134.21.103.39.26.522.457.294.529.435 1.132.406 1.739v.082h6.811a6.408 6.408 0 0 0-1.133-3.495 6.451 6.451 0 0 0-2.928-2.223 11.945 11.945 0 0 0-4.49-.768 11.017 11.017 0 0 0-4.477.865 6.854 6.854 0 0 0-3.093 2.657c-.755 1.181-1.133 2.663-1.133 4.446v.437c0 1.772.366 3.26 1.098 4.467a6.741 6.741 0 0 0 3.052 2.675c1.436.614 2.982.915 4.54.886 1.51.028 3.011-.232 4.428-.765a6.765 6.765 0 0 0 3.032-2.267 6.353 6.353 0 0 0 1.188-3.608h-6.87v.077Z',
                            }),
                          }),
                          (0, n.jsx)('path', {
                            className: ''
                              .concat(a.letter, ' ')
                              .concat(a.letter6, ' to-md:!opacity-0'),
                            d: 'M117.436 7.691a4.554 4.554 0 0 0-2.432-.623 5.638 5.638 0 0 0-2.403.5 5.484 5.484 0 0 0-2.486 2.264V2.714h-6.646v20.353h6.646v-9.33c-.013-.35.056-.699.2-1.018.111-.247.294-.453.524-.59.218-.123.464-.186.713-.183.172-.01.345.018.505.08.161.064.307.16.429.286.254.336.374.758.336 1.18v9.58h6.646V12.62a8.036 8.036 0 0 0-.519-3.082 3.84 3.84 0 0 0-1.513-1.852',
                          }),
                          (0, n.jsx)('path', {
                            className: ''
                              .concat(a.letter, ' ')
                              .concat(a.letter7, ' to-md:!opacity-0'),
                            d: 'M131.225 9.724a4.97 4.97 0 0 0-.661-.915 5.387 5.387 0 0 0-1.739-1.267 5.042 5.042 0 0 0-2.121-.463 5.32 5.32 0 0 0-2.997.844 5.437 5.437 0 0 0-1.997 2.589 11.45 11.45 0 0 0-.713 4.32v.956c-.042 1.471.19 2.938.684 4.322a5.325 5.325 0 0 0 1.942 2.568 5.28 5.28 0 0 0 2.997.836 5.136 5.136 0 0 0 2.156-.464 5.678 5.678 0 0 0 2.458-2.128v2.155h6.666V7.515h-6.666l-.009 2.209Zm.168 5.925c.013.66-.055 1.32-.203 1.963a2.449 2.449 0 0 1-.579 1.16 1.332 1.332 0 0 1-.968.381 1.27 1.27 0 0 1-.945-.38 2.382 2.382 0 0 1-.58-1.155 8.624 8.624 0 0 1-.185-1.97v-.829a8.1 8.1 0 0 1 .194-1.951c.082-.423.278-.815.565-1.13a1.28 1.28 0 0 1 .939-.366c.358-.013.705.118.968.365.294.314.495.706.58 1.13.148.64.216 1.296.203 1.952l.011.83Z',
                          }),
                          (0, n.jsx)('path', {
                            className: ''
                              .concat(a.letter, ' ')
                              .concat(a.letter8, ' to-md:!opacity-0'),
                            d: 'M150.999 11.674V7.508h-2.846V2.717h-6.643v4.791h-2.336v4.166h2.319v6.79a4.926 4.926 0 0 0 .739 2.828 4.104 4.104 0 0 0 1.988 1.556 8.17 8.17 0 0 0 2.881.47 9.889 9.889 0 0 0 2.188-.219 7.508 7.508 0 0 0 1.707-.59v-3.673a4.483 4.483 0 0 1-1.423.24 1.619 1.619 0 0 1-1.055-.296c-.246-.2-.368-.555-.368-1.063v-6.049l2.849.006Z',
                          }),
                        ],
                      }),
                      (0, n.jsxs)('defs', {
                        children: [
                          (0, n.jsx)('clipPath', {
                            id: 'logo-a',
                            children: (0, n.jsx)('path', { d: 'M0 0h151v28H0z' }),
                          }),
                          (0, n.jsx)('clipPath', {
                            id: 'logo-b',
                            children: (0, n.jsx)('path', {
                              transform: 'translate(84)',
                              d: 'M0 0h18v28H0z',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            );
          },
          x = r(71874),
          g = e => {
            let { isOpen: t, onClick: r } = e;
            return (0, n.jsx)('div', {
              onClick: r,
              className:
                '-mr-1.6rem ml-0.8rem sm:ml-1.6rem before:w-2.4rem after:w-2.4rem sm:before:w-3.2rem sm:after:w-3.2rem !block md:!hidden '
                  .concat(x.wrap, ' ')
                  .concat(t ? x.isOpen : ''),
            });
          },
          v = r(3020);
        let f = e => {
          let { link: t } = e;
          return (0, n.jsx)(
            i.rU,
            {
              to: t.link,
              target: t.target,
              itemProp: 'url',
              ...t.eventPayload,
              children: (0, n.jsxs)('div', {
                style: { backgroundImage: 'url('.concat(t.image.src, ')') },
                className: 'p-1.6rem hover_trigger text-white '.concat(a.solutionBanner),
                children: [
                  (0, n.jsx)('h3', {
                    itemProp: 'name',
                    className: '!mc-text-h5',
                    children: t.label,
                  }),
                  (0, n.jsxs)('div', {
                    className: 'mt-0.8rem flex items-center uppercase',
                    children: [
                      (0, n.jsx)('div', { className: 'mc-text-label', children: 'Learn more' }),
                      (0, n.jsx)('div', { className: 'ml-0.8rem arrow !w-1.6rem !h-1.6rem' }),
                    ],
                  }),
                ],
              }),
            },
            t.label
          );
        };
        var b = e => {
            let {
                name: t,
                link: r,
                links: l,
                linksList: c,
                currentSlug: d,
                onClickAnchorLink: m,
                gaHoverEventName: _,
              } = e,
              p = (0, s.useRef)(null),
              h = (0, s.useRef)(!1),
              x = (0, s.useRef)(!1),
              g = (0, s.useRef)(null),
              v = (0, s.useRef)(null),
              [b, j] = (0, s.useState)(!1);
            (0, s.useEffect)(() => {
              h.current && !x.current && (x.current = !0);
            }, [h.current]);
            let y = !1,
              w = e => {
                ((d.includes(e) && !y) ||
                  (d.includes('video-course') && e.includes('video-course') && !y)) &&
                  (y = !0);
              };
            (0, s.useEffect)(() => {
              var e, t;
              y
                ? null === (e = g.current) || void 0 === e || e.classList.add(a.underlineActive)
                : null === (t = g.current) || void 0 === t || t.classList.remove(a.underlineActive);
            });
            let N = (0, s.useRef)(null),
              k = (0, s.useRef)(null),
              C = (0, s.useRef)(!1),
              P = (0, s.useRef)(null),
              S = () => {
                var e, t, r;
                N.current &&
                  (null === (e = P.current) || void 0 === e || e.kill(),
                  (P.current = u.ZP.to(N.current, {
                    duration: 0.45,
                    height: null === (t = k.current) || void 0 === t ? void 0 : t.offsetHeight,
                    willChange: 'height',
                    ease: 'power2.out',
                  })),
                  null === (r = g.current) || void 0 === r || r.classList.add(a.menuItemActive));
              },
              T = () => {
                var e, t;
                N.current &&
                  (null === (e = P.current) || void 0 === e || e.kill(),
                  (P.current = u.ZP.to(N.current, {
                    duration: 0.45,
                    height: 0,
                    willChange: 'height',
                    ease: 'power2.out',
                  })),
                  null === (t = g.current) || void 0 === t || t.classList.remove(a.menuItemActive));
              };
            (0, s.useEffect)(() => {
              let e = () => {
                C.current && S();
              };
              return (
                window.addEventListener('resize', e, { passive: !0 }),
                () => {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
              (0, s.useEffect)(() => {
                (C.current = !1), T();
              }, [d]);
            let R = () => {
              v.current &&
                'scrollWidth' in v.current &&
                j(v.current.scrollWidth > window.innerWidth);
            };
            return (
              (0, s.useEffect)(
                () => (
                  R(),
                  window.addEventListener('resize', R),
                  () => {
                    window.removeEventListener('resize', R);
                  }
                ),
                []
              ),
              (0, n.jsxs)('div', {
                className: 'w-full',
                ref: g,
                children: [
                  r &&
                    (0, n.jsx)(i.rU, {
                      ...r,
                      to: r.link,
                      scroll: d.split('#')[0] !== r.link.split('#')[0],
                      className: ''
                        .concat(a.menuName, ' ')
                        .concat(
                          a.underlineOv,
                          ' px-2rem py-1.6rem mb-[0.4rem] flex items-center justify-between rounded-[0.8rem] bg-white uppercase'
                        ),
                      activeClassName: a.underlineActive,
                      onClick: m,
                      children: (0, n.jsx)('span', {
                        className: 'mc-text-label',
                        children: r.label,
                      }),
                    }),
                  t &&
                    (l || c) &&
                    (0, n.jsxs)('div', {
                      className: 'mb-[0.4rem] flex flex-col rounded-[0.8rem] bg-white',
                      children: [
                        (0, n.jsxs)('div', {
                          className: ''
                            .concat(a.menuName, ' ')
                            .concat(
                              a.underlineOv,
                              ' px-2rem py-1.6rem flex items-center justify-between uppercase'
                            ),
                          ref: p,
                          onClick: () => {
                            C.current
                              ? ((C.current = !1), T())
                              : ((C.current = !0),
                                S(),
                                _ &&
                                  window.gtag &&
                                  window.gtag('event', _, { transport_type: 'beacon' }));
                          },
                          children: [
                            (0, n.jsx)('span', {
                              className: ''.concat(a.underlineItem, ' mc-text-label'),
                              children: t,
                            }),
                            (0, n.jsx)('div', { className: ''.concat(a.menuArrow, ' arrowhead') }),
                          ],
                        }),
                        (0, n.jsx)('div', {
                          className: ''.concat(a.menuDrop, ' '),
                          ref: N,
                          children: (0, n.jsxs)('div', {
                            ref: k,
                            children: [
                              l &&
                                (0, n.jsx)('div', {
                                  className: 'px-2rem pt-1.6rem pb-2rem flex flex-col',
                                  children: l.map((e, t) =>
                                    (0, s.createElement)(
                                      i.rU,
                                      {
                                        ...e,
                                        key: e.label,
                                        className: ''
                                          .concat(a.navLink, ' ')
                                          .concat(a.underline, ' mc-text-h5 flex items-center ')
                                          .concat(t > 0 ? 'mt-0.8rem' : '', ' ')
                                          .concat(e.link ? '' : 'button_disabled'),
                                        activeClassName: a.underlineActive,
                                        to: e.link || '/',
                                        topBarCategoryIsActive: w,
                                      },
                                      (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          (null == e ? void 0 : e.icon) &&
                                            (0, n.jsx)('img', {
                                              className: 'w-2.4rem h-2.4rem',
                                              src: e.icon,
                                              alt: '',
                                            }),
                                          (0, n.jsxs)('div', {
                                            className: a.underlineOv,
                                            children: [
                                              (0, n.jsx)('span', {
                                                className: ''.concat(a.underlineItem, ' ml-0.8rem'),
                                                children: e.label,
                                              }),
                                              e.tag &&
                                                (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                    (h.current = !0),
                                                    ' ',
                                                    (0, n.jsx)('span', {
                                                      className: 'link-tag',
                                                      children: e.tag,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      })
                                    )
                                  ),
                                }),
                              c &&
                                (0, n.jsx)('div', {
                                  className:
                                    'sm:gap-x-2rem sm:gap-y-3.2rem pt-1.6rem pb-2rem px-2rem sm:!grid sm:grid-cols-2',
                                  children: c.map((e, t) => {
                                    var r;
                                    return (0, n.jsx)(
                                      'div',
                                      {
                                        className: 'flex flex-col items-start '
                                          .concat(
                                            'name' in e
                                              ? ''
                                              : 'pt-3.2rem col-span-2 border-t-[1px] border-t-[rgba(0,0,0,0.1)]',
                                            ' '
                                          )
                                          .concat(0 !== t ? 'mt-3.2rem sm:mt-0' : ''),
                                        children:
                                          'name' in e
                                            ? (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                  (0, n.jsx)('span', {
                                                    className:
                                                      'mc-text-label mb-1.6rem uppercase opacity-40',
                                                    children: e.name,
                                                  }),
                                                  (0, n.jsx)('div', {
                                                    className: 'flex flex-col items-start',
                                                    children:
                                                      null == e
                                                        ? void 0
                                                        : null === (r = e.links) || void 0 === r
                                                        ? void 0
                                                        : r.map((e, t) =>
                                                            (0, s.createElement)(
                                                              i.rU,
                                                              {
                                                                ...e,
                                                                key: e.label,
                                                                className: ''
                                                                  .concat(a.navLink, ' ')
                                                                  .concat(
                                                                    a.underline,
                                                                    ' mc-text-h5 '
                                                                  )
                                                                  .concat(t > 0 ? 'mt-0.8rem' : ''),
                                                                activeClassName: a.underlineActive,
                                                                to: e.link,
                                                                topBarCategoryIsActive: w,
                                                              },
                                                              (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                  (0, n.jsx)('span', {
                                                                    className: a.underlineItem,
                                                                    children: e.label,
                                                                  }),
                                                                  e.tag &&
                                                                    (0, n.jsxs)(n.Fragment, {
                                                                      children: [
                                                                        (h.current = !0),
                                                                        ' ',
                                                                        (0, n.jsx)('span', {
                                                                          className: 'link-tag',
                                                                          children: e.tag,
                                                                        }),
                                                                      ],
                                                                    }),
                                                                ],
                                                              })
                                                            )
                                                          ),
                                                  }),
                                                ],
                                              })
                                            : (0, n.jsxs)(o.tq, {
                                                ref: v,
                                                className: ''.concat(a.swiper),
                                                speed: 600,
                                                draggable: b,
                                                grabCursor: b,
                                                spaceBetween: 24,
                                                slidesPerView: 'auto',
                                                children: [
                                                  null == e
                                                    ? void 0
                                                    : e.links.map((e, t) =>
                                                        (0, n.jsx)(
                                                          o.o5,
                                                          {
                                                            className: a.slide,
                                                            children: (0, n.jsx)(f, {
                                                              link: e,
                                                              index: t,
                                                            }),
                                                          },
                                                          'banner-'.concat(t)
                                                        )
                                                      ),
                                                  b &&
                                                    (0, n.jsx)(i._r, {
                                                      className:
                                                        'mt-2rem flex items-center justify-start',
                                                    }),
                                                ],
                                              }),
                                      },
                                      'links-list-'.concat(t)
                                    );
                                  }),
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              })
            );
          },
          j = e => {
            let { isOpen: t, links: r, linksRight: l, currentSlug: c, onClickAnchorLink: o } = e,
              d = (0, s.useRef)(null);
            return (0, n.jsx)('div', {
              className: ''.concat(a.menu, ' ').concat(t ? a.isOpen : '', ' '),
              children: (0, n.jsx)('div', {
                className: a.menuInner,
                ref: d,
                children: (0, n.jsx)('div', {
                  className: 'px-1.6rem sm:px-3.2rem pb-2rem min-h-full',
                  children: (0, n.jsxs)('div', {
                    className: ''.concat(a.menuContainer, ' flex flex-col items-center'),
                    children: [
                      l.button &&
                        (0, n.jsx)(i.un, {
                          ...l.button,
                          href: l.button.link,
                          className: 'mt-2rem !bg-magenta '.concat(l.link ? '' : 'mb-2rem'),
                          onClick: o,
                          children: l.button.label,
                        }),
                      l.link &&
                        (0, n.jsx)(i.rU, {
                          ...l.link,
                          className: 'py-1.6rem px-4rem mb-2rem block uppercase '
                            .concat(l.button ? '!mt-[0.4rem]' : '', ' ')
                            .concat(l.link.className || ''),
                          to: l.link.link,
                          itemProp: 'url',
                          children:
                            l.link.node ||
                            (0, n.jsx)('span', {
                              className: 'mc-text-label',
                              itemProp: 'name',
                              children: l.link.label,
                            }),
                        }),
                      r.map(e => {
                        var t;
                        return (0, s.createElement)(b, {
                          ...e,
                          currentSlug: c,
                          onClickAnchorLink: o,
                          key: e.name || (null === (t = e.link) || void 0 === t ? void 0 : t.label),
                        });
                      }),
                    ],
                  }),
                }),
              }),
            });
          },
          y = e => {
            let {
                links: t,
                linksRight: r,
                navigateCallback: i,
                language: o = 'En',
                languages: d,
                className: m = '',
                initialColor: u = 'white',
                currentSlug: p,
              } = e,
              [x, f] = (0, s.useState)(!1),
              [b, y] = (0, s.useState)({ color: u, isTransformed: !1 }),
              w = (0, s.useRef)(0);
            return (
              (0, s.useEffect)(() => {
                let e = () => {
                  (window.scrollY >= 50 && !b.isTransformed) || x
                    ? y({ color: 'black', isTransformed: !0 })
                    : window.scrollY < 50 &&
                      b.isTransformed &&
                      !x &&
                      y({ color: u, isTransformed: !1 });
                };
                return (
                  e(),
                  window.addEventListener('scroll', e, { passive: !0 }),
                  () => {
                    window.removeEventListener('scroll', e);
                  }
                );
              }, [b, x]),
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)('div', {
                  className:
                    'md:top-2rem md:inset-x-2rem !fixed inset-x-0 top-0 z-10 transition-colors '
                      .concat(m, ' ')
                      .concat(b.isTransformed ? a.transformed : '', ' ')
                      .concat(x ? a.open : ''),
                  style: { color: b.color },
                  children: [
                    (0, n.jsx)(j, {
                      isOpen: x,
                      links: t,
                      linksRight: r,
                      currentSlug: p,
                      onClickAnchorLink: () => {
                        x && ((0, v.Jc)(!1, w.current), f(!1));
                      },
                    }),
                    (0, n.jsxs)('div', {
                      className:
                        'md:py-1.2rem min-h-6rem huge:px-[2.8rem] md:px-2rem sm:px-3.2rem px-1.6rem relative flex items-center justify-between md:min-h-[7.2rem]',
                      children: [
                        (0, n.jsx)('div', {
                          className:
                            'pointer-events-none !absolute left-0 top-0 h-full w-full md:rounded-[8px] '.concat(
                              a.bg
                            ),
                        }),
                        (0, n.jsxs)('div', {
                          className: 'relative flex items-center',
                          children: [
                            (0, n.jsx)(h, { transform: b }),
                            i &&
                              d &&
                              d.length > 1 &&
                              (0, n.jsx)(l, {
                                language: o,
                                languages: d,
                                currentSlug: p,
                                navigateCallback: i,
                                isVisible: x,
                              }),
                          ],
                        }),
                        (0, n.jsx)(_, { links: t, currentSlug: p }),
                        (0, n.jsxs)('div', {
                          className: 'flex items-center justify-end',
                          children: [
                            (0, n.jsx)(c, {
                              linksRight: r,
                              isTransformed: b.isTransformed,
                              mobileMenuIsOpen: x,
                            }),
                            (0, n.jsx)(g, {
                              isOpen: x,
                              onClick: () => {
                                x
                                  ? ((0, v.Jc)(!1, w.current), f(!1))
                                  : ((w.current = window.scrollY),
                                    (0, v.Jc)(!0, window.scrollY),
                                    f(!0));
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            );
          };
      },
      1301: function (e, t, r) {
        'use strict';
        var n = r(27573),
          a = r(66600),
          s = r(7653),
          l = r(83733);
        let i = {
          startShape: { x: 30, y: 30, scale: 0.7 },
          startBubble: { opacity: 0, x: 10, scale: 0.7, transformOrigin: '100% 100%' },
          endCommon: {
            duration: 0.3,
            opacity: 1,
            x: 0,
            y: 0,
            z: 0.001,
            scale: 1,
            ease: 'power2.inOut',
            willChange: 'opacity, transform',
          },
        };
        (i.startLeftBubble = { ...i.startBubble, x: -10, transformOrigin: '0 100%' }),
          (i.endCommonDelay1 = { ...i.endCommon, delay: '-0.1' }),
          (i.endCommonDelay2 = { ...i.endCommon, delay: '-0.2' }),
          (t.default = e => {
            let { messages: t } = e;
            return (
              (0, s.useEffect)(() => {
                let e = l.ZP.timeline({ delay: 0.7 });
                e.fromTo('.'.concat(a.ico), i.startShape, i.endCommon),
                  e.fromTo('.'.concat(a.bubble00), i.startBubble, i.endCommon),
                  e.fromTo('.'.concat(a.bubble01), i.startBubble, i.endCommonDelay2),
                  e.to('.'.concat(a.bubbleContainer00, ' > .').concat(a.avatar), i.endCommon),
                  e.fromTo('.'.concat(a.bubble02), i.startLeftBubble, i.endCommonDelay2),
                  e.fromTo('.'.concat(a.bubble03), i.startLeftBubble, i.endCommonDelay2),
                  e.fromTo('.'.concat(a.bubble04), i.startBubble, i.endCommon),
                  e.to('.'.concat(a.bubbleContainer01, ' > .').concat(a.avatar), i.endCommonDelay1),
                  e.fromTo('.'.concat(a.bubble05), i.startLeftBubble, i.endCommonDelay2),
                  e.fromTo('.'.concat(a.bubble06), i.startLeftBubble, i.endCommonDelay2);
              }, []),
              (0, n.jsx)('div', {
                className: 'flex flex_jcc '.concat(a.container),
                children: (0, n.jsxs)('div', {
                  className: a.phoneContainer,
                  children: [
                    (0, n.jsx)('img', {
                      className: ''.concat(a.heroPhone, ' trigger'),
                      src: 'https://mccdn.me/martcdn/next-lp/components/WAHero/phone-v3.png',
                      alt: 'phone image',
                      'data-first': !0,
                    }),
                    (0, n.jsx)('div', {
                      className: ''.concat(a.user, ' trigger'),
                      'data-first': !0,
                      children: (0, n.jsx)('img', {
                        src: 'https://mccdn.me/martcdn/next-lp/components/WAHero/user.png',
                        alt: 'user image',
                      }),
                    }),
                    (0, n.jsx)('img', {
                      className: ''.concat(a.image, ' ').concat(a.ico),
                      src: 'https://mccdn.me/martcdn/next-lp/components/WAHero/wa-ico.png',
                      alt: 'whatsapp ico',
                    }),
                    (0, n.jsx)('img', {
                      className: ''
                        .concat(a.image, ' ')
                        .concat(a.right, ' ')
                        .concat(a.size00, ' ')
                        .concat(a.bubble00),
                      src: t[0],
                      alt: 'bubble #1',
                    }),
                    (0, n.jsx)('img', {
                      className: ''
                        .concat(a.image, ' ')
                        .concat(a.right, ' ')
                        .concat(a.size01, ' ')
                        .concat(a.bubble01),
                      src: t[1],
                      alt: 'bubble #2',
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex '
                        .concat(a.image, ' ')
                        .concat(a.left00, ' ')
                        .concat(a.size00, ' ')
                        .concat(a.bubbleContainer00),
                      children: [
                        (0, n.jsx)('img', {
                          className: a.avatar,
                          src: 'https://mccdn.me/martcdn/next-lp/components/WAHero/avatar-00.png',
                          alt: 'avatar #1',
                        }),
                        (0, n.jsx)('img', {
                          className: ''.concat(a.bubble02),
                          src: t[2],
                          alt: 'bubble #3',
                        }),
                      ],
                    }),
                    (0, n.jsx)('img', {
                      className: ''
                        .concat(a.image, ' ')
                        .concat(a.left01, ' ')
                        .concat(a.size01, ' ')
                        .concat(a.bubble03),
                      src: t[3],
                      alt: 'bubble #4',
                    }),
                    (0, n.jsx)('img', {
                      className: ''
                        .concat(a.image, ' ')
                        .concat(a.right, ' ')
                        .concat(a.size00, ' ')
                        .concat(a.bubble04),
                      src: t[4],
                      alt: 'bubble #5',
                    }),
                    (0, n.jsxs)('div', {
                      className: 'flex '
                        .concat(a.image, ' ')
                        .concat(a.left00, ' ')
                        .concat(a.size00, ' ')
                        .concat(a.bubbleContainer01),
                      children: [
                        (0, n.jsx)('img', {
                          className: a.avatar,
                          src: 'https://mccdn.me/martcdn/next-lp/components/WAHero/avatar-01.png',
                          alt: 'avatar #1',
                        }),
                        (0, n.jsx)('img', {
                          className: ''.concat(a.bubble05),
                          src: t[5],
                          alt: 'bubble #6',
                        }),
                      ],
                    }),
                    (0, n.jsx)('img', {
                      className: ''
                        .concat(a.image, ' ')
                        .concat(a.left01, ' ')
                        .concat(a.size00, ' ')
                        .concat(a.bubble06),
                      src: t[6],
                      alt: 'bubble #7',
                    }),
                  ],
                }),
              })
            );
          });
      },
      74331: function (e, t, r) {
        'use strict';
        r.d(t, {
          Eh: function () {
            return en.default;
          },
          r_: function () {
            return er.default;
          },
          tk: function () {
            return X.default;
          },
          U2: function () {
            return O;
          },
          Zw: function () {
            return z;
          },
          gw: function () {
            return G;
          },
          kc: function () {
            return K;
          },
          yd: function () {
            return V;
          },
          H7: function () {
            return J;
          },
          BC: function () {
            return y;
          },
          E: function () {
            return d.Z;
          },
          GI: function () {
            return f;
          },
          co: function () {
            return ee.default;
          },
          w8: function () {
            return C;
          },
          _Q: function () {
            return T;
          },
          nQ: function () {
            return A;
          },
          Cc: function () {
            return P;
          },
          bv: function () {
            return L;
          },
          yS: function () {
            return E;
          },
          ee: function () {
            return ea;
          },
          NZ: function () {
            return $.default;
          },
          Wd: function () {
            return F;
          },
          vE: function () {
            return U.default;
          },
          u: function () {
            return N.Z;
          },
          sn: function () {
            return et.default;
          },
          xz: function () {
            return j;
          },
          $y: function () {
            return Z;
          },
        });
        var n = r(27573),
          a = r(7653),
          s = r(32253),
          l = e => t => {
            let r,
              a,
              { title: l, subtitle: i, button: c, tag: o = 'h2', isFirst: d = !1, ...m } = t;
            if (c) {
              let { label: e, ...t } = c;
              (r = e), (a = t);
            }
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)('div', {
                  className: 'width',
                  children: (0, n.jsxs)('div', {
                    className: 'w w_l flex flex flex_fdc flex_aic text_center m_b-xl',
                    children: [
                      (0, n.jsx)(o, {
                        className: 'flex-item_11 trigger',
                        'data-first': d,
                        children: l,
                      }),
                      i &&
                        (0, n.jsx)('div', {
                          className: 'flex-item_8 m_t-s tn-m_t-m',
                          children: (0, n.jsx)('p', {
                            className: 'subline trigger trigger_delay-2',
                            'data-first': d,
                            children: i,
                          }),
                        }),
                      c &&
                        (0, n.jsx)('div', {
                          className: 'm_t-l trigger '.concat(
                            i ? 'trigger_delay-3' : 'trigger_delay-2'
                          ),
                          'data-first': d,
                          children: (0, n.jsx)(s.un, { ...a, children: r }),
                        }),
                    ],
                  }),
                }),
                (0, n.jsx)(e, { ...m }),
              ],
            });
          },
          i = e => t => {
            let { button: r, ...a } = t,
              { label: l, ...i } = r;
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(e, { ...a }),
                (0, n.jsx)('div', {
                  className: 'flex flex_jcc m_t-xl trigger',
                  children: (0, n.jsx)(s.un, { ...i, children: l }),
                }),
              ],
            });
          },
          c = r(85261),
          o = r(50294),
          d = r(99712),
          m = e => {
            let { contents: t } = e;
            return (0, n.jsx)('div', {
              className: 'w w_l tn-p_x-0 last-child-m_b-0',
              children: t.map((e, t) => {
                let r = e.isInverted ? !!(t % 2) : !(t % 2);
                return (0, n.jsxs)(
                  'div',
                  {
                    className: 'tn-grid grid_2 grid_gap m_b-xxl trigger',
                    children: [
                      (0, n.jsxs)('div', {
                        className: ''
                          .concat(r ? 'first' : 'last', ' o_hidden z_0 ')
                          .concat(c.featureImage),
                        children: [
                          e.media &&
                            (0, n.jsx)(d.Z, {
                              mediaRatio: (e.media.height / e.media.width) * 100 || 75.89,
                              children: (0, n.jsx)(o.default, {
                                src: e.media.src,
                                width: e.media.width,
                                height: e.media.height,
                                quality: e.media.quality || 75,
                                layout: 'responsive',
                                alt: '',
                              }),
                            }),
                          e.video &&
                            e.videoWebm &&
                            (0, n.jsxs)(d.Z, {
                              mediaRatio: e.mediaRatio || 75.89,
                              children: [
                                (0, n.jsx)(s.p9, {}),
                                (0, n.jsx)(s.nk, {
                                  video: e.video,
                                  videoWebm: e.videoWebm,
                                  className: 'z_0',
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, n.jsx)('div', {
                        className: 'flex flex_fdc flex_jcc m_y-s p_x-s tn-p_x-0 '.concat(
                          r ? 'last' : 'first'
                        ),
                        children: (0, n.jsxs)('div', {
                          className: 'm_x-auto '.concat(c.featureDescription),
                          children: [
                            e.keynote &&
                              (0, n.jsx)('span', { className: 'caps', children: e.keynote }),
                            e.head && (0, n.jsx)('h3', { className: 'm_y-s', children: e.head }),
                            e.featureDescription,
                          ],
                        }),
                      }),
                    ],
                  },
                  ''.concat(t)
                );
              }),
            });
          },
          u = r(93207),
          _ = r(1404),
          p = r(20252),
          h = r(67868).default,
          x = r(70184),
          g = r(88570),
          v = r(49180);
        r(83147);
        var f = r(71107).default,
          b = r(62128),
          j = e => {
            let { label: t, onClick: r, className: a = '', singlePlayButton: s = !1 } = e;
            return (0, n.jsx)('span', {
              className: ''.concat(a),
              children: s
                ? (0, n.jsx)('div', { className: 'play', onClick: r })
                : (0, n.jsxs)('button', {
                    className: ''.concat(b.trigger__button, ' pointer'),
                    onClick: r,
                    children: [
                      (0, n.jsx)('span', { className: ''.concat(b.trigger__play) }),
                      (0, n.jsx)('span', {
                        className: ''.concat(b.trigger__textBefore, ' caps'),
                        'data-text': t,
                      }),
                      (0, n.jsx)('span', {
                        className: ''.concat(b.trigger__textAfter, ' caps'),
                        'data-text': 'play',
                      }),
                    ],
                  }),
            });
          };
        r(55512);
        var y = r(49804).default;
        r(13659);
        var w = r(24954),
          N = r(6062),
          k = r(28023),
          // C = e => {
          //   let { dict: t, handleClick: r, ...a } = e,
          //     { country: l } = (0, k.Dj)();
          //   return (0, n.jsxs)('div', {
          //     'data-before': 'recommended',
          //     className: 'text_center p_y-l p_x-m sm-p_x-xl shadow_dynamic '
          //       .concat(w.card, ' ')
          //       .concat(a.recommended ? w.recommended : ''),
          //     style: { backgroundColor: a.background, color: a.foreground },
          //     children: [
          //       (0, n.jsx)('h3', { className: 'm_y-xs', children: a.title }),
          //       (0, n.jsx)('div', { className: 'm_y-xs '.concat(w.subline), children: a.subline }),
          //       a.price && 'string' != typeof a.price
          //         ? (0, n.jsxs)('div', {
          //             className: 'm_y-s nowrap',
          //             children: [
          //               (0, n.jsx)('span', { className: 'h1', children: a.price(l) }),
          //               ' / ',
          //               t.pricing.monthly,
          //             ],
          //           })
          //         : (0, n.jsx)('div', {
          //             className: 'm_t-m m_b-l text_left',
          //             children: (0, n.jsx)('span', {
          //               className: 'h2 inline-block '.concat(w.price),
          //               children: a.price,
          //             }),
          //           }),
          //       (0, n.jsxs)('div', {
          //         className: w.buttonBox,
          //         children: [
          //           (0, n.jsx)(s.rU, {
          //             className: 'p p_a-s m_y-m '.concat(w.button),
          //             ...a.button,
          //             children: a.button.children,
          //           }),
          //           a.tooltip &&
          //             (0, n.jsx)(N.Z, { message: a.tooltip, className: w.tooltip, absolute: !0 }),
          //         ],
          //       }),
          //       (0, n.jsx)('div', { className: w.description, children: a.description(r) }),
          //     ],
          //   });
          // },
          // C = (e) => {
          //   let { dict: t, handleClick: r, ...a } = e;
          
          //   return (0, n.jsxs)('div', {
          //     'data-before': 'recommended',
          //     className: 'text_center p_y-l p_x-m sm-p_x-xl shadow_dynamic '
          //       .concat(w.card, ' ')
          //       .concat(a.recommended ? w.recommended : ''),
          //     style: { backgroundColor: a.background, color: a.foreground },
          //     children: [
          //       (0, n.jsx)('h3', { className: 'm_y-xs', children: a.title }),
          //       (0, n.jsx)('div', { className: 'm_y-xs '.concat(w.subline), children: a.subline }),
          //       (0, n.jsx)('div', {
          //         className: 'm_y-s nowrap',
          //         children: (0, n.jsxs)('span', {
          //           className: 'h1',
          //           children: ['£', '49.99'], // Replace with your custom static price
          //         }),
          //       }),
          //       (0, n.jsxs)('div', {
          //         className: w.buttonBox,
          //         children: [
          //           (0, n.jsx)(s.rU, {
          //             className: 'p p_a-s m_y-m '.concat(w.button),
          //             ...a.button,
          //             children: a.button.children,
          //           }),
          //           a.tooltip &&
          //             (0, n.jsx)(N.Z, { message: a.tooltip, className: w.tooltip, absolute: !0 }),
          //         ],
          //       }),
          //       (0, n.jsx)('div', { className: w.description, children: a.description(r) }),
          //     ],
          //   });
          // },
          C = (e) => {
            let { dict: t, handleClick: r, ...a } = e;
          
            return (0, n.jsxs)('div', {
              'data-before': 'recommended',
              className: 'text_center p_y-l p_x-m sm-p_x-xl shadow_dynamic '
                .concat(w.card, ' ')
                .concat(a.recommended ? w.recommended : ''),
              style: { backgroundColor: a.background, color: a.foreground },
              children: [
                (0, n.jsx)('h3', { className: 'm_y-xs', children: a.title }),
                (0, n.jsx)('div', { className: 'm_y-xs '.concat(w.subline), children: a.subline }),
                (0, n.jsxs)('div', {
                  className: 'm_y-s nowrap',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'h2',
                      children: a.title === 'Free' ? '£0' : a.title === 'Pro' ? '£3' : 'Custom',
                    }),
                    a.title === 'Free'
                      ? ' / one time'
                      : a.title === 'Pro'
                      ? ' / chip / mo'
                      : '',
                  ],
                }),
                (0, n.jsxs)('div', {
                  className: w.buttonBox,
                  children: [
                    (0, n.jsx)(s.rU, {
                      className: 'p p_a-s m_y-m '.concat(w.button),
                      ...a.button,
                      children: a.button.children,
                    }),
                    a.tooltip &&
                      (0, n.jsx)(N.Z, { message: a.tooltip, className: w.tooltip, absolute: !0 }),
                  ],
                }),
                (0, n.jsx)('div', { className: w.description, children: a.description(r) }),
              ],
            });
          },
          
          P = r(18208).default,
          S = r(26198),
          T = e => {
            let { value: t = 0, onChange: r, min: a, max: s, className: l, dict: i } = e;
            return (0, n.jsxs)('div', {
              className: ''
                .concat(l || '', ' text_center bg_white p_y-m p_x-xl relative ')
                .concat(S.valueBlock),
              children: [
                (0, n.jsx)('div', {
                  className: 'p '.concat(S.inputLabel),
                  children: i.pricing.input.howManyContacts,
                }),
                (0, n.jsx)('div', {
                  className: S.inputWrapper,
                  children: (0, n.jsx)('input', {
                    value: t && t.toString(),
                    className: 'p_a-0 m_a-0 '.concat(S.input),
                    onChange: e => {
                      let n = +e.target.value.replace(/\D+/g, '');
                      s && n > s && (n = s), a && n < a && (n = a), n !== t && (null == r || r(n));
                    },
                  }),
                }),
                (0, n.jsx)('span', {
                  className: 'p_b-xl p_r-xl text_grey '.concat(S.label),
                  children: void 0 !== t && void 0 !== s && t < s ? 'tabels' : '& more',
                }),
              ],
            });
          },
          R = r(30979),
          B = r(56890),
          E = e => {
            let { pricing: t, free: r = !1, dict: a } = e,
              { currency: s } = (0, k.Dj)();
            return (0, n.jsxs)('div', {
              className: 'flex_jcc flex '.concat(R.valueBlock, ' tn-width_a bg_grey sm-bg_white'),
              style: { ...(!t && { backgroundColor: '#BC1E5D', color: '#fff' }) },
              children: [
                t &&
                  r &&
                  // (0, n.jsxs)('div', {
                  //   className: 'flex_fdc flex_jcc text_center p_y-m p_x-l flex '.concat(
                  //     R.valueElem
                  //   ),
                  //   children: [
                  //     // (0, n.jsxs)('div', { className: 'h1', children: [s, '0'] }),
                  //     // (0, n.jsx)('div', { className: 'subline', children: a.pricing.value.free }),
                  //   ],
                  // }),
                (null == t ? void 0 : t.pro) &&
                  (0, n.jsxs)('div', {
                    className: 'flex_fdc flex_jcc text_center text_cobalt p_y-m p_x-l flex '.concat(
                      R.valueElem
                    ),
                    children: [
                      (0, n.jsxs)('div', {
                        className: 'h1',
                        children: ['£', (0, n.jsx)('span', { children: t.pro })],
                      }),
                      (0, n.jsx)('div', { className: 'subline', children: 'Pro' }),
                    ],
                  }),
                !t &&
                  (0, n.jsxs)('div', {
                    className: 'text_center flex_fdc flex_jcc p_x-l flex '.concat(R.valueElem),
                    children: [
                      (0, n.jsx)('div', {
                        className: 'p_y-s p m_y-xs',
                        children: a.pricing.value.believeTheSnail,
                      }),
                      (0, n.jsx)('div', {
                        className: R.image,
                        children: (0, n.jsx)('img', { src: B.default.src, alt: 'snail image' }),
                      }),
                    ],
                  }),
              ],
            });
          },
          A = r(14504).default,
          I = r(51423),
          L = e => {
            let { contents: t, headers: r, max: a, dict: s } = e,
              { currency: l } = (0, k.Dj)();
            return (0, n.jsx)('div', {
              className: 'flex',
              children: (0, n.jsxs)('div', {
                className: 'bg_white p_y-l p_x-s tn-p_a-xl m_x-auto',
                children: [
                  (0, n.jsx)('h2', { className: 'm_b-s', children: s.pricing.table.title }),
                  (0, n.jsxs)('table', {
                    className: I.table,
                    children: [
                      (0, n.jsx)('thead', {
                        className: ''.concat(I.thead, ' b_b-grey'),
                        children: (0, n.jsx)('tr', {
                          children: r.map(e =>
                            (0, n.jsx)(
                              'th',
                              {
                                className: ''.concat(I.td, ' p_a-s tn-p_x-m text_grey small'),
                                children: e,
                              },
                              e
                            )
                          ),
                        }),
                      }),
                      (0, n.jsx)('tbody', {
                        children: t.map(e => {
                          if (e.contacts) {
                            if (e.pro) {
                              var t;
                              let r =
                                null === (t = e.pro.match(/\d+/)) || void 0 === t ? void 0 : t[0];
                              return (
                                r &&
                                (0, n.jsxs)(
                                  'tr',
                                  {
                                    children: [
                                      (0, n.jsx)('td', {
                                        className: ''.concat(
                                          I.td,
                                          ' p_a-s tn-p_x-m b_b-grey small'
                                        ),
                                        children:
                                          +e.contacts === a
                                            ? ''.concat(a.toString(), ' +')
                                            : (+e.contacts).toString(),
                                      }),
                                      (0, n.jsxs)('td', {
                                        className: ''.concat(
                                          I.td,
                                          ' p_a-s tn-p_x-m b_b-grey small'
                                        ),
                                        
                                        children: ['£', (e.pro)],
                                      }),
                                      (0, n.jsxs)('td', {
                                        className: ''.concat(
                                          I.td,
                                          ' p_a-s tn-p_x-m b_b-grey small'
                                        ),
                                        children: [
                                          '£',
                                          
                                            e.pro * 10
                                          
                                        ],
                                      }),
                                    ],
                                  },
                                  e.contacts
                                )
                              );
                            }
                            if (e.link && e.linkLabel && e.message && a)
                              return (0, n.jsxs)(
                                'tr',
                                {
                                  children: [
                                    (0, n.jsx)('td', {
                                      className: ''.concat(I.td, ' p_a-s tn-p_x-m small'),
                                      children: a,
                                    }),
                                    (0, n.jsxs)('td', {
                                      colSpan: 2,
                                      className: ''.concat(I.td, ' p_a-s tn-p_x-m small'),
                                      children: [
                                        (0, n.jsx)('a', {
                                          href: e.link,
                                          className: 'underline_link',
                                          children: e.linkLabel,
                                        }),
                                        ' ',
                                        e.message,
                                      ],
                                    }),
                                  ],
                                },
                                e.contacts
                              );
                          }
                          return null;
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          },
          H = r(38088);
        r(29038);
        var O = H.default,
          M = r(50387);
        let W = e => {
          let { slug: t, lessons: r, children: a } = e;
          return (0, n.jsx)(s.rU, {
            to: '/resources/video-course/'
              .concat(t, '/')
              .concat((null == r ? void 0 : r.length) && r[0].slug),
            className: 'flex flex_aic p_a-xs tn-p_a-m bg_grey shadow_dynamic hover_trigger '.concat(
              M.card
            ),
            children: a,
          });
        };
        var Z = e => {
          let { title: t, image: r, slug: a, lessons: s } = e,
            l = s ? W : 'div';
          return (0, n.jsx)(l, {
            slug: a,
            lessons: s,
            className: 'flex flex_aic p_a-xs tn-p_a-m bg_grey hover_trigger '.concat(M.card),
            children: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)('img', { src: r.src, className: 'p_a-xs '.concat(M.image) }),
                (0, n.jsx)('div', {
                  className: 'p_a-xs flex flex_fdc tn-flex_fdr tn-p_r-xl flex-item_grow',
                  children: (0, n.jsxs)('h3', {
                    className: 'accent m_a-0 inline',
                    children: [
                      t,
                      ' ',
                      (0, n.jsx)('span', {
                        className: 'bg_black text_white small nowrap '.concat(M.label),
                        children: s
                          ? ''
                              .concat(null == s ? void 0 : s.length, ' ')
                              .concat((null == s ? void 0 : s.length) !== 1 ? 'lessons' : 'lesson')
                          : 'Coming soon',
                      }),
                    ],
                  }),
                }),
                s && (0, n.jsx)('div', { className: 'p_a-xs none tn-block arrow' }),
              ],
            }),
          });
        };
        r(19714);
        var F = r(85850).default,
          D = r(94368),
          z = e => {
            let { id: t, name: r, thumbnail: a, className: l = '' } = e;
            return (0, n.jsx)('div', {
              className: 'grid '.concat(l),
              children: (0, n.jsxs)(s.rU, {
                to: '/messenger-marketing-examples/'.concat(t),
                className: 'o_hidden b_a shadow_dynamic '.concat(D.tile),
                children: [
                  (0, n.jsx)(o.default, {
                    src: a.src,
                    width: a.width,
                    height: a.height,
                    alt: "'".concat(r, "' Flow Cover Image"),
                  }),
                  (0, n.jsx)('div', { className: 'p_x-m p_t-m p_b-l h4', children: r }),
                ],
              }),
            });
          };
        r(79782), r(72668), r(77897);
        var q = r(35058),
          V = e => {
            let { image: t, title: r, description: a, link: l } = e;
            return (0, n.jsxs)('div', {
              className: 'bg_grey p_x-m p_t-s p_b-m sm-p_x-l sm-p_b-l flex flex_fdc',
              children: [
                (0, n.jsx)(o.default, {
                  ...t,
                  alt: ''.concat(r, ' logo'),
                  className: 'm_b-s flex-item_asfs '.concat(q.image),
                }),
                (0, n.jsx)('hr', { className: 'm_y-0' }),
                (0, n.jsx)('h3', { className: 'h4', children: r }),
                (0, n.jsx)('p', { className: 'small flex-item_grow', children: a }),
                l &&
                  (0, n.jsx)(s.un, {
                    href: l.link,
                    className: 'm_t-l width flex flex_jcc bg_black',
                    children: l.label,
                  }),
              ],
            });
          },
          U = r(84879);
        r(8216), r(17243), r(24060), r(34394);
        var Y = r(83438),
          J = () =>
            (0, n.jsxs)('span', {
              className: 'p_y-xxs p_x-xs bg_grey b_rd-xl width_fit '.concat(Y.likeWrap),
              children: [
                (0, n.jsx)('span', { className: Y.shadow }),
                (0, n.jsx)('img', {
                  src: 'https://mccdn.me/martcdn/next-lp/components/HeartEmoji_heart.png',
                  className: Y.like,
                  alt: 'like',
                }),
              ],
            });
        r(59097), r(1301), r(31978);
        var X = r(40545);
        r(9642), r(43503), (0, r(99976).$)('7f40ff15aafe84c6f3aa9c8d1906aafc6454c842');
        var K = e => {
          let { className: t = '', inverted: r = !1 } = e;
          return (0, n.jsxs)('div', {
            className: 'flex '.concat(t),
            children: [
              (0, n.jsx)('img', {
                style: { height: '2.8rem', width: 'auto' },
                src: r
                  ? 'https://mccdn.me/martcdn/next-lp/components/G2MetaBanners/meta-white.svg'
                  : 'https://mccdn.me/martcdn/next-lp/components/G2MetaBanners/meta.svg',
                alt: 'meta banner',
              }),
              (0, n.jsx)('img', {
                className: 'm_l-l',
                style: { height: '2.8rem', width: 'auto' },
                src: r
                  ? 'https://mccdn.me/martcdn/next-lp/components/G2MetaBanners/g2-v1-white.svg'
                  : 'https://mccdn.me/martcdn/next-lp/components/G2MetaBanners/g2-v1.svg',
                alt: 'g2 banner',
              }),
            ],
          });
        };
        r(49818);
        var Q = r(95379),
          G = e => {
            let { sections: t, video: r, btnColor: l, btnTextColor: i } = e;
            return (0, n.jsx)('footer', {
              className:
                'pb-1.6rem pt-2.4rem sm:py-3.2rem md:py-4rem huge:py-4.8rem border-t border-white/25 bg-black text-white',
              children: (0, n.jsxs)('div', {
                className: 'w-mc-layout-wide mx-auto',
                children: [
                  (0, n.jsxs)('div', {
                    className: '!grid sm:grid-cols-2',
                    children: [
                      (0, n.jsxs)('div', {
                        children: [
                          (0, n.jsx)(s.TR, {
                            white: !0,
                            withText: !0,
                            className: 'w-[17.9rem] md:w-[30.2%]',
                          }),
                          (0, n.jsx)(s.nk, { ...r, className: 'mt-4rem sm:hidden' }),
                          (0, n.jsx)('div', {
                            className:
                              'mt-4rem huge:mt-8rem sm:gap-x-2rem gap-x-0.8rem huge:gap-y-6rem gap-y-4rem sm:mt-4rem !grid grid-cols-2 md:mt-[6.8rem] md:w-[74.5%] md:grid-cols-3',
                            children: Object.entries(t).map(e => {
                              let [t, r] = e;
                              return (0, n.jsxs)(
                                'div',
                                {
                                  children: [
                                    (0, n.jsx)('span', {
                                      className: 'text-caption text-nowrap uppercase opacity-40',
                                      children: t,
                                    }),
                                    (0, n.jsx)('div', {
                                      className:
                                        'huge:mt-2rem sm:mt-1.6rem mt-2rem flex max-w-[15rem] flex-col items-start',
                                      children: r.map(e =>
                                        (0, a.createElement)(
                                          s.rU,
                                          {
                                            to: e.link,
                                            ...e,
                                            key: e.label,
                                            className:
                                              'mb-0.8rem hover:text-yellow text-label transition-colors duration-300 last:mb-0',
                                          },
                                          e.label
                                        )
                                      ),
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)(s.nk, { ...r, className: 'hidden sm:!visible sm:block' }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className: 'huge:mt-[11.4rem] sm:mt-8rem mt-4.8rem md:mt-[10.1rem]',
                    style: { '--bg-color-base': Q.x[l], '--text-color-base': Q.x[i] },
                    children: (0, n.jsx)(s.CA, {
                      huge: !0,
                      gaDataEventName: 'main_cta_click',
                      gaDataCtaId: 'footer-test',
                      className: '!bg-dynamic-base !text-dynamic-base',
                      children: 'get started free',
                    }),
                  }),
                ],
              }),
            });
          };
        r(33876);
        var $ = r(30728);
        r(70960);
        var ee = r(61423),
          et = r(39159),
          er = r(83828),
          en = r(35371);
        l(m),
          i(l(m)),
          l(e => {
            let { contents: t } = e;
            return (0, n.jsx)('div', {
              className: 'w w_l grid grid_gap flex_jcsb trigger '.concat(u.grid),
              children: t.map((e, t) =>
                (0, n.jsxs)(
                  'div',
                  {
                    className: 'flex flex_fdc',
                    children: [
                      (0, n.jsx)('span', { className: 'h2 text_cobalt', children: e.number }),
                      (0, n.jsx)('span', { className: 'h4 m_t-xs', children: e.title }),
                      (0, n.jsx)('span', { children: e.body }),
                    ],
                  },
                  ''.concat(e.title, '-').concat(t)
                )
              ),
            });
          }),
          l(_.default),
          l(p.default),
          i(l(p.default)),
          l(h),
          i(l(h));
        let ea = l(x.default);
        l(g.default),
          i(l(g.default)),
          l(e => {
            let { contents: t } = e;
            return (0, n.jsx)('div', {
              style: {
                background: 'linear-gradient(to right, '
                  .concat(t[0].color, ' 50%, ')
                  .concat(t[2].color, ' 50%)'),
              },
              className: 'trigger',
              children: (0, n.jsx)('div', {
                className: ''.concat(v.container, ' w'),
                children: (0, n.jsx)('div', {
                  className: ''.concat(v.blocks, ' flex flex_fdc sm-flex_fdr'),
                  children: t.map((e, t) =>
                    (0, n.jsxs)(
                      'div',
                      {
                        className: ''.concat(
                          v.block,
                          ' flex flex_fdc flex_aic flex_jcsb p_x-xl sm-p_x-l p_t-xl sm-p_t-l o_hidden'
                        ),
                        style: { background: e.color },
                        children: [
                          (0, n.jsxs)('div', {
                            className: 'm_b-l',
                            children: [
                              (0, n.jsxs)('div', {
                                className: 'flex flex_aic flex_jcc m_b-xs',
                                children: [
                                  e.icon &&
                                    (0, n.jsx)(o.default, { ...e.icon, className: 'm_r-xs' }),
                                  (0, n.jsx)('h4', {
                                    className: 'm_t-0 text_center',
                                    children: e.heroText,
                                  }),
                                ],
                              }),
                              (0, n.jsx)('p', {
                                className: 'small text_center sm-p_x-s',
                                children: e.subline,
                              }),
                            ],
                          }),
                          (0, n.jsx)(o.default, {
                            ...e.image,
                            className: 'sm-p_x-l '.concat(v.image),
                          }),
                        ],
                      },
                      'block-'.concat(t)
                    )
                  ),
                }),
              }),
            });
          });
      },
      95379: function (e, t, r) {
        'use strict';
        r.d(t, {
          x: function () {
            return n;
          },
        });
        let n = {
          black: '#000000',
          grey: '#edf2ed',
          amethyst: '#7b34ce',
          yellow: '#fff100',
          ecru: '#e1e090',
          currant: '#bc1e5d',
          green: '#00f613',
          hazel: '#98e891',
          cobalt: '#3b42c4',
          magenta: '#fa0cf7',
          thistle: '#d2b6de',
          gold: '#c18900',
          orange: '#ff4b00',
          dusk: '#e5bdbe',
          kelp: '#007257',
          cyan: '#00f6ff',
          powder: '#96dae2',
          white: '#ffffff',
          fillOpacity: 'transparent',
          transparent: 'transparent',
          cobaltDisabled: '#3b42c480',
          goldDisabled: '#c1890080',
          blackDisabled: '#00000080',
          whiteDisabled: '#ffffff33',
          greyDisabled: '#edf2ed4d',
        };
      },
      67774: function (e, t, r) {
        'use strict';
        r.d(t, {
          J$: function () {
            return c;
          },
          KT: function () {
            return i;
          },
          PK: function () {
            return n;
          },
          o4: function () {
            return l;
          },
          sU: function () {
            return a;
          },
          wv: function () {
            return s;
          },
        });
        let n = {
            src: 'https://mccdn.me/martcdn/next-lp/contents/_common/tile_community.png',
            width: 1326,
            height: 1066,
            quality: 100,
          },
          a = {
            src: 'https://mccdn.me/martcdn/next-lp/contents/_common/tile_blog.png',
            width: 1326,
            height: 1066,
            quality: 100,
          },
          s = {
            src: 'https://mccdn.me/martcdn/next-lp/contents/_common/tile_agencies.png',
            width: 884,
            height: 711,
            quality: 100,
          },
          l = {
            src: 'https://mccdn.me/martcdn/next-lp/contents/_common/article-author_fara-rosenzweig.jpg',
            width: 120,
            height: 150,
          },
          i = {
            src: 'https://mccdn.me/martcdn/next-lp/contents/_common/article-author_kassandra-keeton.jpg',
            width: 200,
            height: 300,
          },
          c = {
            src: 'https://mccdn.me/martcdn/next-lp/contents/_common/meta.png',
            width: 675,
            height: 226,
            alt: 'Meta image',
          };
      },
      33742: function (e) {
        e.exports = { arrow: 'Arrow_arrow__e75t3' };
      },
      77897: function (e) {
        e.exports = { banner: 'Banner_banner__cvXnk', h5: 'Banner_h5__7evsw' };
      },
      34394: function (e) {
        e.exports = { container: 'CardSlider_container__6f0R3' };
      },
      59437: function (e) {
        e.exports = {
          card: 'ChanelCard_card__AUbTg',
          background: 'ChanelCard_background__KYtrz',
          image: 'ChanelCard_image__OsLZq',
          swiper: 'ChanelCard_swiper__9NJ6N',
          'prev-next': 'ChanelCard_prev-next__qBhwd',
          prevNext: 'ChanelCard_prev-next__qBhwd',
          hoverPrev: 'ChanelCard_hoverPrev__7T5JO',
          hoverNext: 'ChanelCard_hoverNext__ZiM9S',
        };
      },
      58200: function (e) {
        e.exports = {
          table: 'CompareGroup_table__meDnM',
          td: 'CompareGroup_td__WWodR',
          cols2: 'CompareGroup_cols2__NWiRO',
          visible: 'CompareGroup_visible__ge6i_',
          title: 'CompareGroup_title__tDF2R',
          icon: 'CompareGroup_icon__op2YH',
          tooltip: 'CompareGroup_tooltip__j6E1p',
        };
      },
      29306: function (e) {
        e.exports = {
          container: 'CreatorsHeroAnimation_container__g8Hwv',
          'phone-container': 'CreatorsHeroAnimation_phone-container__kFvI_',
          phoneContainer: 'CreatorsHeroAnimation_phone-container__kFvI_',
          'hero-phone': 'CreatorsHeroAnimation_hero-phone__9PneZ',
          heroPhone: 'CreatorsHeroAnimation_hero-phone__9PneZ',
          bubble: 'CreatorsHeroAnimation_bubble__rwmS4',
          instagram: 'CreatorsHeroAnimation_instagram__za2CR',
          bubble_01: 'CreatorsHeroAnimation_bubble_01__i3j64',
          bubble01: 'CreatorsHeroAnimation_bubble_01__i3j64',
          bubble_02: 'CreatorsHeroAnimation_bubble_02__Us8Zz',
          bubble02: 'CreatorsHeroAnimation_bubble_02__Us8Zz',
          bubble_03: 'CreatorsHeroAnimation_bubble_03__kjRlw',
          bubble03: 'CreatorsHeroAnimation_bubble_03__kjRlw',
        };
      },
      85261: function (e) {
        e.exports = {
          'feature-description': 'Features_feature-description__u9f_Y',
          featureDescription: 'Features_feature-description__u9f_Y',
          'feature-image': 'Features_feature-image__DKlR6',
          featureImage: 'Features_feature-image__DKlR6',
        };
      },
      18297: function (e) {
        e.exports = {
          pagination: 'FeaturesSlider_pagination__kcjaV',
          paginationItem: 'FeaturesSlider_paginationItem__i385z',
          paginationItem_active: 'FeaturesSlider_paginationItem_active__0cbR9',
          paginationItemActive: 'FeaturesSlider_paginationItem_active__0cbR9',
          next: 'FeaturesSlider_next__t5CKw',
          prev: 'FeaturesSlider_prev__JFZ8b',
          videoContainer: 'FeaturesSlider_videoContainer__dpjCA',
          video: 'FeaturesSlider_video__thyFW',
          text: 'FeaturesSlider_text__UwF5K',
          isActive: 'FeaturesSlider_isActive__1dFhs',
        };
      },
      94368: function (e) {
        e.exports = { image: 'Flow_image__ZW2TS', tile: 'Flow_tile___5DeM' };
      },
      35058: function (e) {
        e.exports = { image: 'GreyTile_image__lXF8e' };
      },
      9642: function (e) {
        e.exports = { icon: 'HeadsUpBanner_icon__WBGaF' };
      },
      83438: function (e) {
        e.exports = {
          likeWrap: 'HeartEmoji_likeWrap__o5JO0',
          like: 'HeartEmoji_like__6vQ46',
          emojiAppear: 'HeartEmoji_emojiAppear__4D7cU',
          shadow: 'HeartEmoji_shadow__fAlW5',
          shadowChange: 'HeartEmoji_shadowChange__bWPtH',
        };
      },
      83514: function (e) {
        e.exports = {
          container: 'HeroPhone_container____0oI',
          'phone-container': 'HeroPhone_phone-container__mSbg_',
          phoneContainer: 'HeroPhone_phone-container__mSbg_',
          'hero-phone': 'HeroPhone_hero-phone__6Q89g',
          heroPhone: 'HeroPhone_hero-phone__6Q89g',
          bubble: 'HeroPhone_bubble__7U7SS',
          avatar: 'HeroPhone_avatar__0U7rt',
          robot: 'HeroPhone_robot__mNqoP',
          bubble_01: 'HeroPhone_bubble_01__ogXFY',
          bubble01: 'HeroPhone_bubble_01__ogXFY',
          bubble_02: 'HeroPhone_bubble_02__Qn6PW',
          bubble02: 'HeroPhone_bubble_02__Qn6PW',
          bubble_03: 'HeroPhone_bubble_03__kUzYG',
          bubble03: 'HeroPhone_bubble_03__kUzYG',
          bubble_04: 'HeroPhone_bubble_04__lxIxR',
          bubble04: 'HeroPhone_bubble_04__lxIxR',
          button: 'HeroPhone_button__25MGl',
          background: 'HeroPhone_background__eA84b',
        };
      },
      74304: function (e) {
        e.exports = { device: 'Iphone12Pro_device__0SKiA', screen: 'Iphone12Pro_screen__mTwk6' };
      },
      70476: function (e) {
        e.exports = {
          placeholder: 'LazyLoader_placeholder__byNWM',
          lazy: 'LazyLoader_lazy__t9MBX',
          'is-open': 'LazyLoader_is-open__emEyP',
          isOpen: 'LazyLoader_is-open__emEyP',
        };
      },
      72668: function (e) {
        e.exports = { list: 'ListTiles_list__dUIBP' };
      },
      93207: function (e) {
        e.exports = { grid: 'Numbers_grid__CmeqF' };
      },
      20883: function (e) {
        e.exports = {
          'main-container': 'OnScrollSlider_main-container__U4dtK',
          mainContainer: 'OnScrollSlider_main-container__U4dtK',
          container: 'OnScrollSlider_container__UgxS4',
          'is-load': 'OnScrollSlider_is-load__OQwUM',
          isLoad: 'OnScrollSlider_is-load__OQwUM',
          paginationItem: 'OnScrollSlider_paginationItem__d8Ckc',
          paginationItem_active: 'OnScrollSlider_paginationItem_active__fJy2U',
          paginationItemActive: 'OnScrollSlider_paginationItem_active__fJy2U',
          spacer: 'OnScrollSlider_spacer__7pg_V',
          text: 'OnScrollSlider_text__5_q08',
          left: 'OnScrollSlider_left__iRHdi',
          slider: 'OnScrollSlider_slider__shIO_',
          slide: 'OnScrollSlider_slide__0mdah',
          'media-inner': 'OnScrollSlider_media-inner__fzUh6',
          mediaInner: 'OnScrollSlider_media-inner__fzUh6',
          video: 'OnScrollSlider_video__h0On1',
          pagination: 'OnScrollSlider_pagination__O1XHR',
          link: 'OnScrollSlider_link__E8KEY',
          line: 'OnScrollSlider_line__guZi4',
          tag_mobile: 'OnScrollSlider_tag_mobile__UDqXr',
          tagMobile: 'OnScrollSlider_tag_mobile__UDqXr',
          ico: 'OnScrollSlider_ico__nLeut',
          'inner-text': 'OnScrollSlider_inner-text__YrtWx',
          innerText: 'OnScrollSlider_inner-text__YrtWx',
          navigation: 'OnScrollSlider_navigation__uTLQS',
          prev: 'OnScrollSlider_prev__i0_Dq',
          next: 'OnScrollSlider_next__OMEFX',
          'inner-prev': 'OnScrollSlider_inner-prev__tm3kY',
          innerPrev: 'OnScrollSlider_inner-prev__tm3kY',
          'inner-next': 'OnScrollSlider_inner-next__vq1yZ',
          innerNext: 'OnScrollSlider_inner-next__vq1yZ',
          meta: 'OnScrollSlider_meta__GgLYP',
          right: 'OnScrollSlider_right__yYFL_',
          'slider-inner': 'OnScrollSlider_slider-inner__qzWBT',
          sliderInner: 'OnScrollSlider_slider-inner__qzWBT',
          title: 'OnScrollSlider_title__8kZ_a',
          tag: 'OnScrollSlider_tag__1eHKx',
        };
      },
      16136: function (e) {
        e.exports = {
          'gallery-item': 'OnScrollStripe_gallery-item__h_K7q',
          galleryItem: 'OnScrollStripe_gallery-item__h_K7q',
        };
      },
      6303: function (e) {
        e.exports = {
          container: 'Phones_container__H_Aih',
          isLoad: 'Phones_isLoad__QEmDf',
          paginationItem: 'Phones_paginationItem__dm2Kg',
          paginationItem_active: 'Phones_paginationItem_active__69Ad1',
          paginationItemActive: 'Phones_paginationItem_active__69Ad1',
          spacer: 'Phones_spacer__T3Wk9',
          text: 'Phones_text__nGs9p',
          left: 'Phones_left__cLQcS',
          right: 'Phones_right__f6whC',
          sliderInner: 'Phones_sliderInner__9Ifqj',
          slider: 'Phones_slider__FWMdZ',
          slide: 'Phones_slide__68xpq',
          videoInner: 'Phones_videoInner__wSbu7',
          video: 'Phones_video__atVQv',
          pagination: 'Phones_pagination__wHJX_',
          link: 'Phones_link__CmK4I',
          line: 'Phones_line__oiDfD',
          tag_mobile: 'Phones_tag_mobile__p8OGZ',
          tagMobile: 'Phones_tag_mobile__p8OGZ',
          title: 'Phones_title__LGFQZ',
          tag: 'Phones_tag__6Q_Uo',
          ico: 'Phones_ico__CVv3_',
          innerText: 'Phones_innerText__M8nza',
          navigation: 'Phones_navigation__pnamN',
          prev: 'Phones_prev__v5ad2',
          next: 'Phones_next__80TFG',
          innerPrev: 'Phones_innerPrev__vOWjs',
          innerNext: 'Phones_innerNext__Glz0q',
          meta: 'Phones_meta__g8W3J',
        };
      },
      5704: function (e) {
        e.exports = {
          popup: 'Popup_popup__cpqn3',
          isOpen: 'Popup_isOpen__lBk8E',
          popup__container: 'Popup_popup__container__70bTm',
          popupContainer: 'Popup_popup__container__70bTm',
          popup__inner: 'Popup_popup__inner__oYtG_',
          popupInner: 'Popup_popup__inner__oYtG_',
          close: 'Popup_close__7gI_R',
          close__inner: 'Popup_close__inner__VL5_V',
          closeInner: 'Popup_close__inner__VL5_V',
        };
      },
      66337: function (e) {
        e.exports = {
          popup: 'PopupRedesign_popup__DCN66',
          'scroll-inner': 'PopupRedesign_scroll-inner__36C2A',
          scrollInner: 'PopupRedesign_scroll-inner__36C2A',
          'is-open': 'PopupRedesign_is-open__QW2o1',
          isOpen: 'PopupRedesign_is-open__QW2o1',
        };
      },
      19714: function (e) {
        e.exports = {
          p_a: 'PrevNext_p_a__47zPr',
          pA: 'PrevNext_p_a__47zPr',
          m_a: 'PrevNext_m_a__TOKUJ',
          mA: 'PrevNext_m_a__TOKUJ',
        };
      },
      24954: function (e) {
        e.exports = {
          card: 'PricingCard_card__Xg5CS',
          button: 'PricingCard_button__xPxwD',
          subline: 'PricingCard_subline__qMafo',
          price: 'PricingCard_price__coFy3',
          image: 'PricingCard_image__AsBAC',
          description: 'PricingCard_description__OlY9n',
          recommended: 'PricingCard_recommended__3Mr_d',
          tooltip: 'PricingCard_tooltip__T78AY',
          buttonBox: 'PricingCard_buttonBox__looTW',
        };
      },
      26198: function (e) {
        e.exports = {
          'value-block': 'PricingInput_value-block__GFcSP',
          valueBlock: 'PricingInput_value-block__GFcSP',
          'input-label': 'PricingInput_input-label__K9ws5',
          inputLabel: 'PricingInput_input-label__K9ws5',
          'input-wrapper': 'PricingInput_input-wrapper__fCtpl',
          inputWrapper: 'PricingInput_input-wrapper__fCtpl',
          input: 'PricingInput_input__SZzE0',
          label: 'PricingInput_label__W2xTx',
        };
      },
      8769: function (e) {
        e.exports = {
          select: 'PricingSelect_select__ARPcK',
          placeholder: 'PricingSelect_placeholder__Xh_UF',
          arrow: 'PricingSelect_arrow__pWcSC',
        };
      },
      74795: function (e) {
        e.exports = {
          slider: 'PricingSlider_slider__WK9kX',
          'slider-scale': 'PricingSlider_slider-scale__Fnx_k',
          sliderScale: 'PricingSlider_slider-scale__Fnx_k',
          'slider-item': 'PricingSlider_slider-item__nmC7r',
          sliderItem: 'PricingSlider_slider-item__nmC7r',
          'slider-dash': 'PricingSlider_slider-dash__YxEJ9',
          sliderDash: 'PricingSlider_slider-dash__YxEJ9',
          'slider-text': 'PricingSlider_slider-text__aWCBy',
          sliderText: 'PricingSlider_slider-text__aWCBy',
        };
      },
      51423: function (e) {
        e.exports = { table: 'PricingTable_table__7HB0E', td: 'PricingTable_td__IhcX6' };
      },
      30979: function (e) {
        e.exports = {
          'value-block': 'PricingValue_value-block__CsZWX',
          valueBlock: 'PricingValue_value-block__CsZWX',
          'value-elem': 'PricingValue_value-elem__qSwr6',
          valueElem: 'PricingValue_value-elem__qSwr6',
          image: 'PricingValue_image__PXLXi',
        };
      },
      82385: function (e) {
        e.exports = {
          close: 'ReportVulnerabilityForm_close__KpaME',
          firstField: 'ReportVulnerabilityForm_firstField__2mtRX',
          bigTextarea: 'ReportVulnerabilityForm_bigTextarea__7Kq6C',
        };
      },
      8216: function (e) {
        e.exports = { sticky: 'ReportVulnerabilityInstruction_sticky__qH41F' };
      },
      62490: function (e) {
        e.exports = {
          stroke: 'SocialProofSlider_stroke__SVlqb',
          'stroke-active': 'SocialProofSlider_stroke-active__Y96rZ',
          strokeActive: 'SocialProofSlider_stroke-active__Y96rZ',
          pulse: 'SocialProofSlider_pulse__8hDri',
        };
      },
      31978: function (e) {
        e.exports = {
          bubble: 'SplitImageForInstagram_bubble__l2iwi',
          image: 'SplitImageForInstagram_image__iI77T',
          container: 'SplitImageForInstagram_container__VyZS8',
        };
      },
      51800: function (e) {
        e.exports = {
          submenu: 'SubMenu_submenu__hzZwi',
          num: 'SubMenu_num__Qlg5q',
          items: 'SubMenu_items__pV_jE',
          trigger: 'SubMenu_trigger__Njwid',
          open: 'SubMenu_open__WKjQp',
        };
      },
      61561: function (e) {
        e.exports = {
          button: 'SwiperSwitches_button__jbsnB',
          switchers: 'SwiperSwitches_switchers__v82l4',
          open: 'SwiperSwitches_open__OfwTg',
          switcher: 'SwiperSwitches_switcher__kaVHY',
          active: 'SwiperSwitches_active__l9JYC',
        };
      },
      49180: function (e) {
        e.exports = {
          container: 'ThreeColoredBlocks_container__dcpxf',
          blocks: 'ThreeColoredBlocks_blocks__nRfWL',
          block: 'ThreeColoredBlocks_block__6fWJY',
          image: 'ThreeColoredBlocks_image__f1DHV',
        };
      },
      38711: function (e) {
        e.exports = {
          absolute: 'Tooltip_absolute__ch1SC',
          relative: 'Tooltip_relative__O_RD1',
          tooltip: 'Tooltip_tooltip__Tzcvy',
          hover: 'Tooltip_hover__hfEWw',
          message: 'Tooltip_message__Nsp4e',
          message_arrow: 'Tooltip_message_arrow__Vo_xT',
          messageArrow: 'Tooltip_message_arrow__Vo_xT',
        };
      },
      71874: function (e) {
        e.exports = {
          wrap: 'Burger_wrap__OSYYZ',
          'is-open': 'Burger_is-open__R9h5o',
          isOpen: 'Burger_is-open__R9h5o',
        };
      },
      54511: function (e) {
        e.exports = {
          bg: 'TopBarRedesign_bg__xlK54',
          transformed: 'TopBarRedesign_transformed__I1xJO',
          open: 'TopBarRedesign_open__rA7Dm',
          letter: 'TopBarRedesign_letter__nv7f2',
          logo: 'TopBarRedesign_logo__D7fUo',
          letter1: 'TopBarRedesign_letter1__7UxcV',
          letter2: 'TopBarRedesign_letter2__nA7b5',
          letter3: 'TopBarRedesign_letter3__IaUks',
          letter4: 'TopBarRedesign_letter4__b2ZYN',
          letter5: 'TopBarRedesign_letter5__C_mVd',
          letter6: 'TopBarRedesign_letter6__45c1x',
          letter7: 'TopBarRedesign_letter7__my45q',
          letter8: 'TopBarRedesign_letter8__RXWOP',
          'is-drop': 'TopBarRedesign_is-drop__T74P5',
          isDrop: 'TopBarRedesign_is-drop__T74P5',
          'nav-item': 'TopBarRedesign_nav-item__rDMwy',
          navItem: 'TopBarRedesign_nav-item__rDMwy',
          'nav-ov': 'TopBarRedesign_nav-ov__56hYB',
          navOv: 'TopBarRedesign_nav-ov__56hYB',
          'nav-link': 'TopBarRedesign_nav-link__AiROV',
          navLink: 'TopBarRedesign_nav-link__AiROV',
          'nav-name': 'TopBarRedesign_nav-name__6XagV',
          navName: 'TopBarRedesign_nav-name__6XagV',
          'nav-links-list': 'TopBarRedesign_nav-links-list__dUu_s',
          navLinksList: 'TopBarRedesign_nav-links-list__dUu_s',
          'nav-links-container': 'TopBarRedesign_nav-links-container__V5_EZ',
          navLinksContainer: 'TopBarRedesign_nav-links-container__V5_EZ',
          'nav-links-list-container': 'TopBarRedesign_nav-links-list-container__7oAFH',
          navLinksListContainer: 'TopBarRedesign_nav-links-list-container__7oAFH',
          'is-hover': 'TopBarRedesign_is-hover__K3OUe',
          isHover: 'TopBarRedesign_is-hover__K3OUe',
          'nav-drop': 'TopBarRedesign_nav-drop__IoZwm',
          navDrop: 'TopBarRedesign_nav-drop__IoZwm',
          underline: 'TopBarRedesign_underline__fDMQJ',
          'underline-ov': 'TopBarRedesign_underline-ov__pb_f5',
          underlineOv: 'TopBarRedesign_underline-ov__pb_f5',
          'underline-item': 'TopBarRedesign_underline-item__H_V5K',
          underlineItem: 'TopBarRedesign_underline-item__H_V5K',
          'underline-active': 'TopBarRedesign_underline-active__b9RQu',
          underlineActive: 'TopBarRedesign_underline-active__b9RQu',
          'btn-menu': 'TopBarRedesign_btn-menu__iVu3h',
          btnMenu: 'TopBarRedesign_btn-menu__iVu3h',
          menu: 'TopBarRedesign_menu__CUA5g',
          'is-open': 'TopBarRedesign_is-open__M2148',
          isOpen: 'TopBarRedesign_is-open__M2148',
          'menu-container': 'TopBarRedesign_menu-container__vzC4C',
          menuContainer: 'TopBarRedesign_menu-container__vzC4C',
          'menu-inner': 'TopBarRedesign_menu-inner__6kNyL',
          menuInner: 'TopBarRedesign_menu-inner__6kNyL',
          'menu-item': 'TopBarRedesign_menu-item__8JULQ',
          menuItem: 'TopBarRedesign_menu-item__8JULQ',
          'menu-item-active': 'TopBarRedesign_menu-item-active__Q3Z90',
          menuItemActive: 'TopBarRedesign_menu-item-active__Q3Z90',
          'menu-arrow': 'TopBarRedesign_menu-arrow__q_Roc',
          menuArrow: 'TopBarRedesign_menu-arrow__q_Roc',
          'menu-ico': 'TopBarRedesign_menu-ico__c4_io',
          menuIco: 'TopBarRedesign_menu-ico__c4_io',
          'menu-drop': 'TopBarRedesign_menu-drop__DUETI',
          menuDrop: 'TopBarRedesign_menu-drop__DUETI',
          'menu-name': 'TopBarRedesign_menu-name__CLWXa',
          menuName: 'TopBarRedesign_menu-name__CLWXa',
          'menu-ov': 'TopBarRedesign_menu-ov__QHQCp',
          menuOv: 'TopBarRedesign_menu-ov__QHQCp',
          'menu-links-list': 'TopBarRedesign_menu-links-list___JJPA',
          menuLinksList: 'TopBarRedesign_menu-links-list___JJPA',
          'menu-links-container': 'TopBarRedesign_menu-links-container__p2jsD',
          menuLinksContainer: 'TopBarRedesign_menu-links-container__p2jsD',
          'menu-links-list-container': 'TopBarRedesign_menu-links-list-container__xOE_I',
          menuLinksListContainer: 'TopBarRedesign_menu-links-list-container__xOE_I',
          'solution-banner': 'TopBarRedesign_solution-banner__MJdQK',
          solutionBanner: 'TopBarRedesign_solution-banner__MJdQK',
          slide: 'TopBarRedesign_slide___f7XQ',
          nav: 'TopBarRedesign_nav__blf2U',
          swiper: 'TopBarRedesign_swiper___Hppa',
          'solution-banner-content': 'TopBarRedesign_solution-banner-content__agwUF',
          solutionBannerContent: 'TopBarRedesign_solution-banner-content__agwUF',
        };
      },
      62128: function (e) {
        e.exports = {
          trigger__button: 'Trigger_trigger__button__9_vJj',
          triggerButton: 'Trigger_trigger__button__9_vJj',
          trigger__textBefore: 'Trigger_trigger__textBefore__VnirK',
          triggerTextBefore: 'Trigger_trigger__textBefore__VnirK',
          trigger__textAfter: 'Trigger_trigger__textAfter__cUEHC',
          triggerTextAfter: 'Trigger_trigger__textAfter__cUEHC',
          trigger__play: 'Trigger_trigger__play__XNLdA',
          triggerPlay: 'Trigger_trigger__play__XNLdA',
        };
      },
      50387: function (e) {
        e.exports = {
          card: 'VideoCourseModule_card___rrHf',
          image: 'VideoCourseModule_image___4_zC',
          label: 'VideoCourseModule_label__xwewZ',
        };
      },
      66600: function (e) {
        e.exports = {
          container: 'WAHero_container__R4vLf',
          'phone-container': 'WAHero_phone-container__hNJMR',
          phoneContainer: 'WAHero_phone-container__hNJMR',
          'hero-phone': 'WAHero_hero-phone__UoAKx',
          heroPhone: 'WAHero_hero-phone__UoAKx',
          image: 'WAHero_image__eEff5',
          user: 'WAHero_user__ZIhog',
          ico: 'WAHero_ico__Fiil9',
          left00: 'WAHero_left00__leqgo',
          left01: 'WAHero_left01__lg_dW',
          right: 'WAHero_right__QDgV9',
          size00: 'WAHero_size00__7lPby',
          avatar: 'WAHero_avatar__k2pYo',
          size01: 'WAHero_size01__Z0kZX',
          bubble00: 'WAHero_bubble00__aLc_y',
          bubble01: 'WAHero_bubble01__LipZC',
          'bubble-container00': 'WAHero_bubble-container00__HEtFP',
          bubbleContainer00: 'WAHero_bubble-container00__HEtFP',
          bubble02: 'WAHero_bubble02__esH_E',
          bubble03: 'WAHero_bubble03__TcHCc',
          bubble04: 'WAHero_bubble04__IWkbO',
          bubbleContainer01: 'WAHero_bubbleContainer01__T2Ajn',
          bubble05: 'WAHero_bubble05__KA1kC',
          bubble06: 'WAHero_bubble06__Il4Sb',
        };
      },
      55512: function (e) {
        e.exports = {
          banner: 'WideBanner_banner__AdfIA',
          image: 'WideBanner_image__PjG5u',
          text: 'WideBanner_text__i29oZ',
        };
      },
      56890: function (e, t, r) {
        'use strict';
        r.r(t),
          (t.default = {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/snail.9c8041a8.svg',
            height: 1477,
            width: 3206,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
    },
  ]);
//# sourceMappingURL=1700-f54b0a4195290534.js.map
