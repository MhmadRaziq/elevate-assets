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
      (e._sentryDebugIds[t] = 'f518a805-4101-417b-925d-e41c0db20bcd'),
      (e._sentryDebugIdIdentifier = 'sentry-dbid-f518a805-4101-417b-925d-e41c0db20bcd'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8951],
    {
      32253: function (e, t, n) {
        'use strict';
        n.d(t, {
          QO: function () {
            return o;
          },
          jo: function () {
            return s;
          },
          k8: function () {
            return l;
          },
          n4: function () {
            return a.n4;
          },
          un: function () {
            return a.un;
          },
          tW: function () {
            return a.tW;
          },
          fh: function () {
            return a.fh;
          },
          J7: function () {
            return a.J7;
          },
          n2: function () {
            return a.n2;
          },
          $_: function () {
            return a.$_;
          },
          qU: function () {
            return a.qU;
          },
          q9: function () {
            return a.q9;
          },
          uX: function () {
            return a.uX;
          },
          CA: function () {
            return a.CA;
          },
          rU: function () {
            return a.rU;
          },
          TR: function () {
            return a.TR;
          },
          p9: function () {
            return a.p9;
          },
          Ph: function () {
            return a.Ph;
          },
          mB: function () {
            return a.mB;
          },
          Mm: function () {
            return a.Mm;
          },
          _r: function () {
            return a._r;
          },
          N7: function () {
            return a.N7;
          },
          nv: function () {
            return a.nv;
          },
          Yr: function () {
            return a.Yr;
          },
          Du: function () {
            return a.Du;
          },
          QK: function () {
            return a.QK;
          },
          nk: function () {
            return a.nk;
          },
          Qu: function () {
            return a.Qu;
          },
          tL: function () {
            return a.tL;
          },
        });
        var a = n(79782);
        n(78815);
        var r = n(27573);
        n(7653);
        var i = n(49488),
          c = n(50294),
          l = e => {
            let {
              tags: t = [],
              date: n,
              modified: i,
              updatedText: c = 'Updated',
              originallyPublishedText: l = 'Originally Published',
            } = e;
            return (0, r.jsx)('section', {
              className: 'w w_l tn-m_y-xl p_b-xl howto-tags trigger',
              children: (0, r.jsx)('div', {
                className: 'flex_jcc flex',
                children: (0, r.jsxs)('div', {
                  className: 'flex-item flex-item_8',
                  children: [
                    (0, r.jsx)('hr', {}),
                    n &&
                      i &&
                      (0, r.jsx)('div', {
                        className: 'caps text_center m_t-m m_b-s',
                        children: ''.concat(l, ': ').concat(n, ', ').concat(c, ': ').concat(i),
                      }),
                    t.length > 0 &&
                      (0, r.jsxs)('div', {
                        className: 'grid_3-9 grid_gap grid',
                        children: [
                          (0, r.jsx)('h5', { className: 'm_t-s tn-m_t-m', children: 'Tags:' }),
                          (0, r.jsx)('div', {
                            className: 'tn-m_t-s',
                            children: t.map((e, t) =>
                              (0, r.jsx)(
                                a.rU,
                                {
                                  to: e.type
                                    ? e.link
                                    : '/resources/how-to/'.concat(e.link.toString()),
                                  type: e.type || 'landing',
                                  className: 'bg_grey p_y-xs p_x-s m_r-s tag',
                                  children: (0, r.jsx)('span', { children: e.label }),
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            });
          },
          s = e => {
            let { relatedArticles: t } = e;
            return (0, r.jsxs)('section', {
              className: 'w w_l m_b-xxl tn-m_t-xl',
              children: [
                (0, r.jsx)('h2', { className: 'm_b-xl text_center', children: 'Related Articles' }),
                (0, r.jsx)('div', {
                  className: 'grid grid_3 grid_gap',
                  children: t.map((e, t) =>
                    (0, r.jsx)(
                      'div',
                      { className: 'grid', children: (0, r.jsx)(a.n4, { ...e }) },
                      ''.concat(e.title, '-').concat(t)
                    )
                  ),
                }),
              ],
            });
          },
          o = e => {
            let {
              title: t,
              authorAvatar: n,
              authorName: l,
              authorSlug: s,
              writtenBy: o = 'Written by',
              children: d,
            } = e;
            return (0, r.jsx)('header', {
              className: 'm_t-xl',
              children: (0, r.jsxs)('div', {
                className: 'w w_l text_center',
                children: [
                  (0, r.jsx)('h1', { className: i.title, children: t }),
                  (0, r.jsxs)('div', {
                    className: 'caps m_t-m m_b-xl '.concat(i.author),
                    children: [
                      n &&
                        (0, r.jsx)('div', {
                          className: 'm_r-s z_0 '.concat(i.avatar),
                          children: (0, r.jsx)(c.default, {
                            src: n.src,
                            width: n.width,
                            height: n.height,
                            className: 'b_rd-xl',
                            alt: ''.concat(l, ' Avatar'),
                            style: { objectFit: 'cover' },
                          }),
                        }),
                      ' ',
                      o,
                      ' ',
                      s
                        ? (0, r.jsx)(a.rU, {
                            to: s,
                            type: 'blog',
                            className: ''.concat(i.authorName, ' underline_link'),
                            children: l,
                          })
                        : (0, r.jsx)('span', { className: i.authorName, children: l }),
                    ],
                  }),
                  d,
                ],
              }),
            });
          };
      },
      43487: function (e, t, n) {
        'use strict';
        n.r(t);
        var a = n(27573),
          r = n(39397),
          i = n(18268),
          c = n(81695),
          l = n(3020);
        t.default = (0, r.Z)(e => {
          let t,
            {
              children: n,
              className: r = '',
              inverted: s = !1,
              accented: o = !1,
              outlined: d = !1,
              small: u = !1,
              huge: m = !1,
              tag: _ = 'a',
              style: h = {},
              href: p,
              ...g
            } = e,
            v = (0, i.useAppHostname)(),
            x = (0, c.usePathname)();
          return (
            p && (t = (0, l.ET)(p, x, v)),
            (0, a.jsx)(_, {
              className: ''
                .concat(
                  u
                    ? 'p_y-xs p_x-m !py-0.8rem !px-1.6rem button_small'
                    : 'p_y-s p_x-l !px-2rem !font-cofo !rounded-[10rem] !py-[1.4rem] !text-[1.4rem]/[2rem] !font-normal !uppercase !tracking-[0.01em] before:!rounded-[10rem]',
                  ' caps b_rd-xl pointer inline-block '
                )
                .concat(r, ' button ')
                .concat(s ? 'button_inverted' : '', ' ')
                .concat(o ? 'button_accented' : '', ' ')
                .concat(d ? 'button_outlined' : '', ' ')
                .concat(m ? 'h-10rem md:h-12rem huge:h-[14rem] w-full' : ''),
              ...g,
              href: t,
              style: h,
              children: (0, a.jsx)('span', {
                className: 'text_center flex_jcc height flex_aic mx-0.8rem flex',
                children: (0, a.jsxs)('span', {
                  className: 'button__center',
                  children: [
                    (0, a.jsx)('span', { children: n }),
                    (0, a.jsx)('span', { className: 'button__before', children: n }),
                    (0, a.jsx)('span', { className: 'button__after', children: n }),
                  ],
                }),
              }),
            })
          );
        });
      },
      78952: function (e, t, n) {
        'use strict';
        var a = n(27573);
        n(7653);
        var r = n(65845);
        t.default = e => {
          let {
            children: t,
            className: n = '',
            inverted: i = !1,
            accented: c = !1,
            outlined: l = !1,
            small: s = !1,
            href: o,
            style: d = {},
            ...u
          } = e;
          return (0, a.jsx)(r.default, {
            to: o,
            className: ''
              .concat(
                s
                  ? 'p_y-xs p_x-m'
                  : 'p_y-s p_x-l !px-2rem !font-cofo !rounded-[10rem] !py-[1.4rem] !text-[1.4rem]/[2rem] !font-normal !uppercase !tracking-[0.01em] before:!rounded-[10rem]',
                ' caps b_rd-xl inline-block '
              )
              .concat(n, ' button ')
              .concat(i ? 'button_inverted' : '', ' ')
              .concat(c ? 'button_accented' : '', ' ')
              .concat(l ? 'button_outlined' : ''),
            ...u,
            style: d,
            children: (0, a.jsx)('span', {
              className: 'text_center flex_jcc height flex_aic mx-0.8rem flex',
              children: (0, a.jsxs)('span', {
                className: 'button__center',
                children: [
                  (0, a.jsx)('span', { children: t }),
                  (0, a.jsx)('span', { className: 'button__before', children: t }),
                  (0, a.jsx)('span', { className: 'button__after', children: t }),
                ],
              }),
            }),
          });
        };
      },
      39816: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(29432),
          c = n(83733);
        t.default = e => {
          let { textBefore: t, textAfter: n, isShow: l, onClick: s, classList: o } = e,
            d = (0, r.useRef)(null),
            u = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              l &&
                !n &&
                (c.ZP.to(u.current, { duration: 0.45, y: '-110%', z: 0.01, ease: 'power1.inOut' }),
                c.ZP.to(d.current, {
                  duration: 0.45,
                  height: 0,
                  z: 0.01,
                  ease: 'power1.inOut',
                  transformOrigin: '0 50%',
                }));
            }, [l]),
            (0, a.jsx)('div', {
              className: 'flex flex_jcc pointer o_hidden '
                .concat(l && !n ? 'disallow' : '', ' ')
                .concat(o || ''),
              onClick: s,
              ref: d,
              children: (0, a.jsx)('div', {
                className: 'p p_y-s p_x-m b_a-dark '.concat(i.button),
                ref: u,
                children: (0, a.jsxs)('div', {
                  className: 'flex flex_aic',
                  children: [
                    (0, a.jsx)('div', {
                      className: ''.concat(i.plus, ' ').concat(l ? i.plus_minus : ''),
                    }),
                    (0, a.jsx)('div', { children: (l && n) || t }),
                  ],
                }),
              }),
            })
          );
        };
      },
      1157: function (e, t, n) {
        'use strict';
        n.d(t, {
          default: function () {
            return d;
          },
        });
        var a = n(27573);
        n(7653);
        var r = n(94141),
          i = n.n(r),
          c = n(98952),
          l = n.n(c),
          s = n(39397);
        let o = {
          'Arrow Down': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/arrowDown.b81f682d.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Arrow Left': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/arrowLeft.171c7730.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Arrow Right': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/arrowRight.69560ed9.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Arrow Up Right': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/arrowUpRight.f7a47039.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          Close: {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/close.050047d4.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          Minus: {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/minus.5139404a.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          Plus: {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/plus.9be82cfa.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Select Down': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/selectDown.74d3754a.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Select Left': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/selectLeft.220f7009.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Select Right': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/selectRight.0d4f3185.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
          'Select Up': {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/selectUp.9fbf612c.svg',
            height: 20,
            width: 20,
            blurWidth: 0,
            blurHeight: 0,
          },
        };
        var d = (0, s.Z)(e => {
          let {
              role: t = 'Primary',
              state: n = 'Active',
              variant: r = 1,
              theme: c = 'Dark',
              text: s,
              leftIcon: d,
              rightIcon: u,
              tag: m = 'a',
              size: _ = 'M',
              ...h
            } = e,
            p = 'bttn'.concat(t).concat(n).concat(r).concat(c),
            g = d
              ? () =>
                  (0, a.jsx)('img', {
                    src: o[d].src,
                    alt: 'button icon',
                    className: i().bttnLeftIcon,
                  })
              : null,
            v = u
              ? () =>
                  (0, a.jsx)('img', {
                    src: o[u].src,
                    alt: 'button icon',
                    className: i().bttnRightIcon,
                  })
              : null,
            x = (0, a.jsxs)(a.Fragment, {
              children: [
                g ? (0, a.jsx)(g, {}) : null,
                (0, a.jsx)('span', { className: i().bttnContentText, children: s }),
                v ? (0, a.jsx)(v, {}) : null,
              ],
            });
          return (0, a.jsx)(m, {
            className: 'flex_aic flex_jcc width_fit caps b_rd-xl pointer flex '
              .concat(i().bttn, ' ')
              .concat(_ ? i()['bttn'.concat(_)] : '', ' ')
              .concat(i()[p], ' ')
              .concat(l().variables),
            ...h,
            children: (0, a.jsx)('span', {
              className: 'flex_jcc text_center o_hidden relative flex',
              children: (0, a.jsxs)('span', {
                className: 'relative '.concat(i().bttnContent),
                children: [
                  (0, a.jsx)('span', { className: 'flex_aic flex', children: x }),
                  (0, a.jsx)('span', {
                    className: 'flex_aic flex '.concat(i().bttnContentBefore),
                    children: x,
                  }),
                  (0, a.jsx)('span', {
                    className: 'flex_aic flex '.concat(i().bttnContentAfter),
                    children: x,
                  }),
                ],
              }),
            }),
          });
        });
      },
      36963: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(99815),
          c = n(3020),
          l = n(79782);
        let s = 'SJ1aqNjOs-m';
        t.default = e => {
          let {
              previewImage: t,
              wistiaVideoId: n,
              isPlayProp: o = !1,
              className: d,
              aspectRatio: u,
              anchorTime: m,
            } = e,
            [_, h] = (0, r.useState)(!1),
            p = (0, r.useRef)(null),
            g = (0, r.useRef)(null),
            [v, x] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            let e = async () => {
              let e = await (0, c.zk)(s);
              v !== e && x(e);
            };
            e(), window.addEventListener('ucEvent', e, { passive: !0 });
          }, []),
            (0, r.useEffect)(() => {
              h(!1);
            }, [n]);
          let f = (e, t, n) => {
              let a = !1;
              for (let n = 0; n < t.length; n++)
                if (t[n].src === e) {
                  a = !0;
                  break;
                }
              if (!a) {
                let t = document.createElement('script');
                (t.onerror = () => URIError('The script '.concat(e, " didn't load correctly."))),
                  (t.src = e),
                  t.async,
                  n.append(t);
              }
            },
            b = (0, r.useRef)(null),
            k = e => {
              void 0 !== m && e.time(m), e.play();
            };
          return (
            (0, r.useEffect)(() => {
              if (_ && v) {
                var e;
                let t = document.body,
                  a = document.querySelectorAll('script');
                f('https://fast.wistia.com/assets/external/E-v1.js', a, t),
                  f('https://fast.wistia.com/embed/medias/'.concat(n, '.jsonp'), a, t),
                  (b.current = ''.concat((0, c.ej)('mchtClientId'), '-wistia@manychat.com')),
                  (window._wq = window._wq || []),
                  'function' ==
                    typeof (null === (e = window._wq) || void 0 === e ? void 0 : e.push) &&
                    window._wq.push(
                      {
                        id: n,
                        onHasData: e => {
                          b.current && e.email(b.current);
                        },
                      },
                      {
                        id: n,
                        onReady: e => {
                          (p.current = e),
                            b.current ||
                              e.bind('conversion', () => {
                                setTimeout(() => {
                                  k(e);
                                }, 0);
                              }),
                            k(e);
                        },
                      }
                    );
              }
            }, [_, v]),
            (0, r.useEffect)(() => {
              m &&
                g.current &&
                ((0, c.Db)({ element: g.current }),
                null !== m && (_ || h(!0), p.current && k(p.current)));
            }, [m]),
            (0, r.useEffect)(() => {
              _ !== o && setTimeout(() => h(o), 300);
            }, [o]),
            (0, a.jsx)('div', {
              className: ''.concat(i.videoContainer, ' ').concat(d),
              style: { paddingTop: u ? ''.concat(u, '%') : void 0 },
              ref: g,
              children: _
                ? v
                  ? (0, a.jsxs)('div', {
                      className: i.wistiaVideo,
                      children: [
                        (0, a.jsx)(l.p9, {}),
                        (0, a.jsx)('div', {
                          className: 'wistia_embed wistia_async_'.concat(
                            n,
                            ' videoFoam=true autoPlay=true playerColor=1c1c28 settingsColntrols=false wmode=transparent'
                          ),
                          style: { height: '100%', position: 'relative', width: '100%' },
                        }),
                      ],
                    })
                  : (0, a.jsx)(l.CF, { serviceId: s })
                : (0, a.jsx)('div', {
                    className: 'play '.concat(i.thumbnail),
                    style: { backgroundImage: 'url('.concat(t, ')') },
                    onClick: () => {
                      _ || h(!0);
                    },
                  }),
            })
          );
        };
      },
      36106: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(99815),
          c = n(3020),
          l = n(79782);
        let s = 'BJz7qNsdj-7';
        t.default = e => {
          let { previewImage: t, youtubeVideoId: n, isPlayProp: o = !1, className: d } = e,
            [u, m] = (0, r.useState)(!1),
            [_, h] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              if (u !== o) {
                if (!o) {
                  var e, t;
                  null === (t = window) ||
                    void 0 === t ||
                    null === (e = t.__ucCmp) ||
                    void 0 === e ||
                    e.closeCmp();
                }
                setTimeout(() => m(o), 300);
              }
            }, [o]),
            (0, r.useEffect)(() => {
              let e = async () => {
                let e = await (0, c.zk)(s);
                _ !== e && h(e);
              };
              e(), window.addEventListener('ucEvent', e, { passive: !0 });
            }, []),
            (0, a.jsx)('div', {
              className: ''
                .concat(i.videoContainer, ' ')
                .concat(d, ' ')
                .concat(_ ? '' : i.needPermission),
              children: u
                ? _
                  ? (0, a.jsx)('iframe', {
                      className: i.iframe,
                      src:
                        'https://www.youtube.com/embed/' +
                        n +
                        '?title=0&byline=0&portrait=0&autoplay=1',
                      allow:
                        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
                      allowFullScreen: !0,
                    })
                  : (0, a.jsx)(l.CF, { serviceId: s })
                : (0, a.jsx)('div', {
                    className: 'play '.concat(i.thumbnail),
                    style: { backgroundImage: 'url('.concat(t, ')') },
                    onClick: () => m(!0),
                  }),
            })
          );
        };
      },
      15254: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(63038);
        let c = r.forwardRef((e, t) => {
          let {
            title: n,
            subTitle: r,
            name: c,
            hasError: l,
            errorText: s,
            required: o = !1,
            children: d,
            className: u = '',
            ...m
          } = e;
          return (0, a.jsxs)('div', {
            ref: t,
            className: 'b_rd-m bg_grey p_a-m tn-p_a-l m_x-auto m_y-s '
              .concat(i.field, ' ')
              .concat(l ? 'bg_red-light' : '', ' ')
              .concat(u),
            ...m,
            children: [
              n &&
                (0, a.jsxs)('div', {
                  children: [
                    (0, a.jsxs)('h4', {
                      className: 'm_b-xs',
                      children: [
                        (0, a.jsx)('label', { htmlFor: ''.concat(c, '-field'), children: n }),
                        o && (0, a.jsx)('span', { className: 'text_red', children: ' *' }),
                      ],
                    }),
                    r && (0, a.jsx)('span', { children: r }),
                  ],
                }),
              d,
              l && (0, a.jsx)('div', { className: 'text_red', children: s }),
            ],
          });
        });
        t.default = c;
      },
      95527: function (e, t, n) {
        'use strict';
        var a = n(27573);
        let r = n(7653).forwardRef((e, t) => {
          let { options: n = [], name: r, ...i } = e;
          return (0, a.jsxs)('div', {
            children: [
              (0, a.jsx)('input', {
                type: 'text',
                name: r,
                list: r,
                ref: t,
                ...i,
                onBlur: e => {
                  n.includes(e.target.value) || (e.target.value = '');
                },
              }),
              (0, a.jsx)('datalist', {
                id: r,
                children: n.map(e =>
                  (0, a.jsx)('option', { value: e }, ''.concat(r, '-field-').concat(e))
                ),
              }),
            ],
          });
        });
        t.default = r;
      },
      73833: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(79782);
        t.Z = e => {
          let { links: t, tag: n = 'footer' } = e;
          return (0, a.jsxs)(n, {
            className:
              'p_y-l tn-p_y-xl text_white bg_black flex flex_fww grid_gap flex_fdc tn-flex_fdr flex_c text_s',
            children: [
              (0, a.jsxs)('div', {
                className: 'caps',
                children: ['\xa9', new Date().getFullYear(), ', Elevate, Inc.'],
              }),
              t.map(e =>
                (0, a.jsx)(
                  r.rU,
                  {
                    to: e.link,
                    rel: 'noreferrer nofollow',
                    target: '_blank',
                    className: 'caps tn-m_l-xs underline_link',
                    onClick: e.onClick,
                    type: e.type,
                    children: e.label,
                  },
                  e.label
                )
              ),
            ],
          });
        };
      },
      66547: function (e, t, n) {
        'use strict';
        var a = n(27573);
        n(7653);
        var r = n(73833),
          i = n(74859);
        t.default = () =>
          (0, a.jsx)(r.Z, {
            links: [
              { label: 'Pol\xedtica de privacidad', link: '/es/privacy' },
              { label: 'T\xe9rminos de servicio', link: '/es/terms' },
              {
                label: 'Configuraci\xf3n de Privacidad',
                link: '#',
                type: i.env.NEXT_PUBLIC_NEXT_EVENT ? 'event' : 'landing',
                onClick: e => {
                  var t, n;
                  e.preventDefault(),
                    null === (t = window.__ucCmp) || void 0 === t || t.changeLanguage('es'),
                    null === (n = window.__ucCmp) || void 0 === n || n.showSecondLayer();
                },
              },
            ],
          });
      },
      25834: function (e, t, n) {
        'use strict';
        var a = n(27573);
        n(7653);
        var r = n(73833);
        t.default = () =>
          (0, a.jsx)(r.Z, {
            links: [
              { label: 'Pol\xedtica de Privacidade', link: '/pt/privacy' },
              { label: 'Termos de Servi\xe7o', link: '/pt/terms' },
              {
                label: 'Configura\xe7\xf5es de Privacidade',
                link: '#',
                type: 'landing',
                onClick: e => {
                  var t, n;
                  e.preventDefault(),
                    null === (t = window.__ucCmp) || void 0 === t || t.changeLanguage('pt_br'),
                    null === (n = window.__ucCmp) || void 0 === n || n.showSecondLayer();
                },
              },
            ],
          });
      },
      32550: function (e, t, n) {
        'use strict';
        n.d(t, {
          default: function () {
            return c;
          },
        });
        var a = n(27573);
        n(7653);
        var r = n(12768),
          i = n(86554),
          c = e => {
            let {
              searchValue: t,
              onSearchChange: n,
              onFilterChange: c,
              selects: l,
              viewAllText: s,
              fetching: o = !1,
              isSearchable: d = !0,
            } = e;
            return (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex flex_fww flex_jcsb p_y-xxs width sticky-under-header '.concat(
                    r.panel
                  ),
                  children: [
                    (0, a.jsx)('div', {
                      className:
                        'flex flex_jcsb flex-item_grow tn-flex-item_grow-0 flex_aic grid_gap-m p_y-xs '.concat(
                          l.length > 2 ? 'flex_fww' : ''
                        ),
                      children:
                        l &&
                        l.map(e =>
                          (0, a.jsx)(
                            i.ZP,
                            {
                              placeholder: e.name,
                              name: e.name,
                              options: e.options,
                              classNames: {
                                container: e =>
                                  'relative sm-p_y-xxs hover_trigger '
                                    .concat(r.filter, ' ')
                                    .concat(e.isDisabled ? r.isDisabled : ''),
                                control: () =>
                                  ''.concat(r.control, ' ').concat(d ? '' : r.noSearch),
                                valueContainer: () => r.valueContainer,
                                placeholder: () => 'h4 '.concat(r.placeholder, ' sm-p_y-xxs'),
                                input: () => 'h4 '.concat(r.input, ' sm-p_y-xxs'),
                                singleValue: () => 'h4 '.concat(r.singleValue, ' sm-p_y-xxs'),
                                indicatorSeparator: () => 'none',
                                dropdownIndicator: e =>
                                  ''
                                    .concat(r.dropdownIndicator, ' arrowhead ')
                                    .concat(e.selectProps.menuIsOpen ? 'up' : ''),
                                clearIndicator: () => ''.concat(r.clearIndicator, ' close close_m'),
                                menu: () => ''.concat(r.menu, ' p_y-s p_x-s'),
                                option: e =>
                                  'p_y-xs '
                                    .concat(r.option, ' ')
                                    .concat(e.isSelected ? r.isSelected : ''),
                              },
                              value: e.value,
                              onChange: t => c({ [e.id]: (null == t ? void 0 : t.value) || null }),
                              autoFocus: !1,
                              isClearable: !0,
                              isDisabled: o,
                              isSearchable: d,
                            },
                            e.id
                          )
                        ),
                    }),
                    (0, a.jsxs)('div', {
                      className:
                        'none sm-flex flex_jcsb sm-flex-item_grow-0 p_x-s b_rd-xl p_y-xs b_a m_t-0',
                      children: [
                        (0, a.jsx)('input', {
                          className: 'small '.concat(r.input),
                          value: t,
                          onChange: n,
                          placeholder: 'Search',
                          type: 'text',
                        }),
                        (0, a.jsx)('img', {
                          alt: 'search',
                          className: 'm_l-xs '.concat(r.search),
                          src: 'https://mccdn.me/martech/next-lp//_next/static/media/search.a7563e89.svg',
                          loading: 'lazy',
                        }),
                      ],
                    }),
                  ],
                }),
                (l.reduce((e, t) => e || !!t.value, !1) || t) &&
                  (0, a.jsx)('a', {
                    onClick: () => {
                      c(l.reduce((e, t) => ({ ...e, [t.id]: null }), {})),
                        n({ target: { value: '' } });
                    },
                    className: 'pointer m_y-s p_y-s p width '.concat(r.button),
                    children: s || 'View All Flows',
                  }),
              ],
            });
          };
      },
      65845: function (e, t, n) {
        'use strict';
        n.r(t);
        var a = n(27573),
          r = n(88146),
          i = n(81695),
          c = n(39397),
          l = n(18268),
          s = n(3020),
          o = n(74859);
        t.default = (0, c.Z)(e => {
          let {
              children: t,
              to: n,
              type: c = 'landing',
              topBarCategoryIsActive: d,
              className: u,
              activeClassName: m,
              scroll: _ = !0,
              ...h
            } = e,
            p = (0, i.usePathname)(),
            g = (0, l.useAppHostname)(),
            v = (0, s.ET)(n, p, g),
            x = !1;
          try {
            new URL(v);
          } catch (e) {
            x = !0;
          }
          let f = !x && v.includes('https://elevatereputation.com/') && !0,
            b = f ? v.replace(/^.*?:\/\/.*?(?=\/|$)/, '') : v,
            k = '',
            w = v + (k = window.location.search);
          return x
            ? 'landing' === c ||
              (o.env.NEXT_PUBLIC_NEXT_EVENT && 'event' === c) ||
              (o.env.NEXT_PUBLIC_NEXT_CAREERS && 'careers' === c) ||
              (o.env.NEXT_PUBLIC_NEXT_LISTING && 'listing' === c) ||
              (o.env.NEXT_PUBLIC_NEXT_BLOG && 'blog' === c)
              ? (d && d(w), v.includes('#'))
                ? (0, a.jsx)('a', {
                    href: v,
                    className: ''.concat(u, ' ').concat(p === v ? m : ''),
                    ...h,
                    children: t,
                  })
                : (0, a.jsx)(r.default, {
                    href: v,
                    className: ''.concat(u, ' ').concat(p === v ? m : ''),
                    scroll: _,
                    ...(o.env.NEXT_PUBLIC_NEXT_BLOG && 'blog' === c && { prefetch: !0 }),
                    ...h,
                    children: t,
                  })
              : ((w =
                  o.env.NEXT_PUBLIC_NEXT_EVENT || 'event' !== c
                    ? o.env.NEXT_PUBLIC_NEXT_CAREERS || 'careers' !== c
                      ? o.env.NEXT_PUBLIC_NEXT_LISTING || 'listing' !== c
                        ? o.env.NEXT_PUBLIC_NEXT_BLOG || 'blog' !== c
                          ? 'https://elevatereputation.com' + w
                          : 'https://elevatereputation.com/blog' + w
                        : 'https://elevatereputation.com/agency/listing' + w
                      : 'https://careers.manychat.com' + w
                    : 'https://events.manychat.com' + w),
                d && d(w),
                (0, a.jsx)('a', { href: w, className: u, ...h, children: t }))
            : ((w = b + k),
              d && d(w),
              (0, a.jsx)('a', {
                href: b,
                target: '_blank',
                rel: f ? '' : 'noopener noreferrer',
                className: u,
                ...h,
                children: t,
              }));
        });
      },
      89500: function (e, t, n) {
        'use strict';
        n.d(t, {
          default: function () {
            return m;
          },
        });
        var a = n(27573),
          r = n(7653),
          i = {
            src: 'https://mhmadraziq.github.io/elevate-assets/images/loooogo.png',
          },
          c = { src: 'https://mhmadraziq.github.io/elevate-assets/images/loooogo.png' },
          l = { src: 'https://mhmadraziq.github.io/elevate-assets/images/loooogo.png' },
          s = {
            src: 'https://mhmadraziq.github.io/elevate-assets/images/loooogo.png',
          },
          o = n(49480),
          d = e => {
            let { isShow: t = !1, closeCallback: n } = e,
              i = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                let e = e => {
                  i.current && !i.current.contains(e.target) && n();
                };
                return (
                  document.addEventListener('click', e),
                  () => {
                    document.removeEventListener('click', e);
                  }
                );
              }, [t, n]),
              (0, a.jsxs)('div', {
                ref: i,
                className: 'absolute bg_white flex flex_fdc p_x-m p_y-s o_hidden '
                  .concat(o.container, ' ')
                  .concat(t ? o.show : ''),
                children: [
                  (0, a.jsxs)('a', {
                    className: 'caps flex flex_aic pointer '.concat(o.underline),
                    href: 'https://mccdn.me/martcdn/logo.svg',
                    download: !0,
                    children: [
                      (0, a.jsx)('img', {
                        className: o.ico,
                        src: 'https://mccdn.me/martech/next-lp//_next/static/media/save-svg.c526402e.svg',
                        alt: 'AI ico',
                      }),
                      (0, a.jsx)('span', {
                        className: 'nowrap text_black',
                        children: 'save logo as svg',
                      }),
                    ],
                  }),
                  (0, a.jsx)('a', {
                    href: 'https://elevatereputation.com/affiliate',
                    target: '_blank',
                    children: (0, a.jsxs)('div', {
                      className: 'caps flex flex_aic pointer '.concat(o.underline),
                      children: [
                        (0, a.jsx)('img', {
                          className: o.ico,
                          src: 'https://mccdn.me/martech/next-lp//_next/static/media/become-partner.fd6c29b3.svg',
                          alt: 'AI ico',
                        }),
                        (0, a.jsx)('span', {
                          className: 'nowrap text_black',
                          children: 'become a partner',
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          },
          u = n(79782),
          m = e => {
            let {
                link: t = '/',
                src: n,
                white: o = !1,
                withText: m = !1,
                className: _,
                service: h = 'landing',
                hasPopup: p = !1,
                ...g
              } = e,
              [v, x] = (0, r.useState)(!1),
              f = () => {
                b.current && clearTimeout(b.current);
              },
              b = (0, r.useRef)(null);
            return (0, a.jsxs)('div', {
              className: 'relative flex '.concat(_),
              onContextMenu: e => {
                p && (e.preventDefault(), x(!0));
              },
              onTouchStart: () => {
                b.current = setTimeout(() => {
                  x(!0);
                }, 500);
              },
              onTouchEnd: f,
              onTouchMove: f,
              children: [
                (0, a.jsx)(u.rU, {
                  to: t,
                  type: h,
                  className: 'width',
                  children:
                    (n && 'string' == typeof n) || !n
                      ? (0, a.jsx)('img', {
                          src: n || (m ? (o ? s.src : l.src) : o ? i.src : c.src),
                          className: 'width block',
                          alt: 'Manychat logo',
                          ...g,
                          loading: 'lazy',
                        })
                      : n,
                }),
                p &&
                  (0, a.jsx)(d, {
                    isShow: v,
                    closeCallback: () => {
                      x(!1);
                    },
                  }),
              ],
            });
          };
      },
      78565: function (e, t, n) {
        'use strict';
        var a = n(89500);
        t.Z = a.default;
      },
      71999: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(24076);
        t.default = e => {
          let { className: t } = e,
            [n, c] = (0, r.useState)('');
          return (
            (0, r.useEffect)(() => {
              c(window.location.pathname);
            }, []),
            (0, a.jsxs)('div', {
              className: ''.concat(i.container, ' ').concat(t),
              children: [
                (0, a.jsx)('div', { children: 'Share:' }),
                (0, a.jsx)('a', {
                  href: 'http://twitter.com/share?url=https://elevatereputation.com'.concat(n),
                  className: ''.concat(i.share, ' ').concat(i.twitter, ' m_l-m'),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: (0, a.jsx)('span', { children: 'Twitter' }),
                }),
                (0, a.jsx)('a', {
                  href: 'https://www.facebook.com/sharer/sharer.php?u=https://elevatereputation.com'.concat(
                    n
                  ),
                  className: ''.concat(i.share, ' ').concat(i.facebook),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: (0, a.jsx)('span', { children: 'Facebook' }),
                }),
                (0, a.jsx)('a', {
                  href: 'mailto:?body=https://elevatereputation.com'.concat(n),
                  className: ''.concat(i.share, ' ').concat(i.email),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: (0, a.jsx)('span', { children: 'eMail' }),
                }),
                (0, a.jsx)('a', {
                  href: 'https://www.linkedin.com/shareArticle?mini=true&url=https://elevatereputation.com'.concat(
                    n
                  ),
                  className: ''.concat(i.share, ' ').concat(i.linkedin),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: (0, a.jsx)('span', { children: 'LinkedIn' }),
                }),
              ],
            })
          );
        };
      },
      84676: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(28024),
          c = n(34590);
        t.default = e => {
          var t;
          let { className: n = '', swiperProp: l = null } = e,
            s = l || (0, i.oc)(),
            [o, d] = (0, r.useState)({ isBeginning: !1, isEnd: !1 }),
            u = null === (t = null == s ? void 0 : s.params.loop) || void 0 === t || t;
          return (
            (0, r.useEffect)(() => {
              u ||
                (d({ isBeginning: s.isBeginning, isEnd: s.isEnd }),
                s.on('reachBeginning', e => {
                  d({ isBeginning: !0, isEnd: e.isEnd });
                }),
                s.on('reachEnd', e => {
                  d({ isBeginning: e.isBeginning, isEnd: !0 });
                }),
                s.on('fromEdge', e => {
                  d({ isBeginning: e.isBeginning, isEnd: e.isEnd });
                }));
            }, [s]),
            (0, a.jsxs)('div', {
              className: 'flex '.concat(n),
              children: [
                (0, a.jsx)('div', {
                  role: 'button',
                  onClick: () => s.slidePrev(),
                  className: ''
                    .concat(
                      o.isBeginning ? c.disabled : 'pointer hover_trigger',
                      ' b_a b_rd-xl flex flex_c '
                    )
                    .concat(c.button, ' m_r-xs '),
                  children: (0, a.jsx)('div', { className: 'arrow left', children: '←' }),
                }),
                (0, a.jsx)('div', {
                  role: 'button',
                  onClick: () => s.slideNext(),
                  className: ''
                    .concat(
                      o.isEnd ? c.disabled : 'pointer hover_trigger',
                      ' b_a b_rd-xl flex flex_c '
                    )
                    .concat(c.button),
                  children: (0, a.jsx)('div', { className: 'arrow', children: '→' }),
                }),
              ],
            })
          );
        };
      },
      39236: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(34590),
          c = n(50294),
          l = n(28024);
        t.default = e => {
          let { className: t = '', avatars: n, activeIndex: s, accented: o } = e,
            d = e => {
              let t = document.getElementById('avatar-'.concat(e));
              t && t.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
            },
            u = (0, l.oc)(),
            m = n.length,
            [_, h] = (0, r.useState)({ isBeginning: !1, isEnd: !1 }),
            p = (null == u ? void 0 : u.params.loop) || !0;
          (0, r.useEffect)(() => {
            p ||
              (h({ isBeginning: u.isBeginning, isEnd: u.isEnd }),
              u.on('reachBeginning', e => {
                h({ isBeginning: !0, isEnd: e.isEnd });
              }),
              u.on('reachEnd', e => {
                h({ isBeginning: e.isBeginning, isEnd: !0 });
              }),
              u.on('fromEdge', e => {
                h({ isBeginning: e.isBeginning, isEnd: e.isEnd });
              }));
          }, [u]);
          let g = e => {
            u.slideTo(e), d(e);
          };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)('div', {
              className: 'w w_l flex '.concat(t, ' ').concat(i.container),
              children: [
                (0, a.jsx)('div', {
                  role: 'button',
                  onClick: () => {
                    u.slidePrev(), d((s - 1 + m) % m);
                  },
                  className: ''
                    .concat(
                      _.isBeginning ? i.disabled : 'pointer hover_trigger',
                      ' b_a b_rd-xl flex flex_c '
                    )
                    .concat(i.button, ' '),
                  children: (0, a.jsx)('div', { className: 'arrow left', children: '←' }),
                }),
                (0, a.jsx)('div', {
                  className: 'flex flex_jcc '
                    .concat(o ? i.accented : '', ' ')
                    .concat(i.avatarsContainer),
                  children: (0, a.jsx)('div', {
                    className: 'o_hidden-x '.concat(i.avatars),
                    children: n.map((e, t) => {
                      let { children: n, ...r } = e;
                      return (0, a.jsx)(
                        c.default,
                        {
                          id: 'avatar-'.concat(t),
                          ...r,
                          className: 'pointer '
                            .concat(i.avatar, ' ')
                            .concat(s === t ? i.active : ''),
                          onClick: () => g(t),
                        },
                        ''.concat(r.alt, '-').concat(t)
                      );
                    }),
                  }),
                }),
                (0, a.jsx)('div', {
                  role: 'button',
                  onClick: () => {
                    u.slideNext(), d((s + 1) % m);
                  },
                  className: ''
                    .concat(
                      _.isEnd ? i.disabled : 'pointer hover_trigger',
                      ' b_a b_rd-xl flex flex_c '
                    )
                    .concat(i.button),
                  children: (0, a.jsx)('div', { className: 'arrow', children: '→' }),
                }),
              ],
            }),
          });
        };
      },
      66592: function (e, t, n) {
        'use strict';
        n.d(t, {
          default: function () {
            return o;
          },
        });
        var a = n(27573),
          r = n(85108),
          i = n(7653),
          c = n(83733),
          l = n(81695),
          s = n(79782),
          o = e => {
            let { items: t } = e,
              n = (0, i.useRef)(null),
              o = (0, i.useRef)(null),
              d = (0, i.useRef)(null);
            return (
              (0, l.useRouter)(),
              (0, i.useEffect)(() => {
                let e = null,
                  t = 0,
                  a = !0,
                  r = () => {
                    let r = window.innerWidth;
                    if (
                      (r !== t || a) &&
                      ((t = r), (a = !1), o.current && d.current && n.current)
                    ) {
                      let t = o.current.offsetWidth,
                        a = Math.floor((2 * r) / t),
                        i = o.current.cloneNode(!0);
                      d.current.innerHTML = '';
                      for (let e = 0; e < a; e++) d.current.appendChild(i);
                      e && e.kill(),
                        (e = c.ZP.fromTo(
                          n.current,
                          { x: 0 },
                          {
                            x: -t / 2,
                            willChange: 'transform',
                            duration: 0.004 * t,
                            repeat: -1,
                            ease: 'linear',
                          }
                        ));
                    }
                  };
                return (
                  r(),
                  window.addEventListener('resize', r, { passive: !0 }),
                  () => {
                    window.removeEventListener('resize', r);
                  }
                );
              }, []),
              (0, a.jsx)('div', {
                className: 'relative flex '.concat(r.container),
                children: (0, a.jsxs)('div', {
                  className: 'flex flex-item_shrink',
                  ref: n,
                  children: [
                    (0, a.jsx)('div', {
                      className: 'flex flex-item_shrink',
                      ref: o,
                      children: [...t, ...t].map((e, t) => {
                        let {
                          image: n,
                          text: i,
                          link: c,
                          backgroundColor: l,
                          borderColor: o,
                          eventPayload: d,
                        } = e;
                        return (0, a.jsxs)(
                          s.rU,
                          {
                            to: c,
                            style: { backgroundColor: l },
                            className: 'relative flex flex-item_shrink flex_aic p_r-m',
                            ...d,
                            children: [
                              (0, a.jsx)('div', {
                                className: r.chess,
                                style: { '--border-color': o },
                              }),
                              (0, a.jsx)('img', { className: r.image, ...n }),
                              (0, a.jsx)('span', {
                                className: 'caps m_l-s relative z-i_1',
                                children: i,
                              }),
                              (0, a.jsx)('img', {
                                src: 'https://mccdn.me/martech/next-lp//_next/static/media/ArrowRight-black.7c561375.svg',
                                className: 'm_l-xs '.concat(r.arrow),
                                alt: 'arrow image',
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                    (0, a.jsx)('div', { className: 'flex flex-item_shrink', ref: d }),
                  ],
                }),
              })
            );
          };
      },
      58737: function (e, t, n) {
        'use strict';
        var a = n(27573);
        n(7653);
        var r = n(89143);
        t.default = e => {
          let { isOpen: t, onClick: n, inverted: i = !1 } = e;
          return (0, a.jsx)('div', {
            id: 'burger',
            onClick: n,
            className: 'block lg-none '
              .concat(r.wrap, ' ')
              .concat(t ? r.isOpen : '', ' ')
              .concat(i ? r.inverted : ''),
          });
        };
      },
      3478: function (e, t, n) {
        'use strict';
        n.d(t, {
          default: function () {
            return k;
          },
        });
        var a = n(27573),
          r = n(7653),
          i = n(78565),
          c = n(58737),
          l = n(59590),
          s = n(68377),
          o = n(28024),
          d = n(79782);
        let u = e => {
          let { link: t } = e;
          return (0, a.jsx)(
            d.rU,
            {
              to: t.link,
              target: t.target,
              itemProp: 'url',
              ...t.eventPayload,
              children: (0, a.jsx)('div', {
                style: { backgroundImage: 'url('.concat(t.image.src, ')') },
                className: 'text_white p_a-m hover_trigger '.concat(l.solutionBanner),
                children: (0, a.jsxs)('div', {
                  className: l.solutionBannerContent,
                  children: [
                    (0, a.jsx)('h3', { itemProp: 'name', className: 'gravity', children: t.label }),
                    (0, a.jsxs)('div', {
                      className: 'flex caps m_t-xs',
                      children: [
                        (0, a.jsx)('div', { className: l.underlineItem, children: 'Learn more' }),
                        (0, a.jsx)('div', { className: 'm_l-xs arrow' }),
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
                name: n,
                link: i,
                links: c,
                linksList: s,
                dropActive: m,
                dropDiactive: _,
                dropMove: h,
                index: p,
                isHover: g,
                currentSlug: v,
                gaHoverEventName: x,
              } = e,
              f = (0, r.useRef)(null),
              b = (0, r.useRef)(!1),
              k = (0, r.useRef)(!1),
              w = (0, r.useRef)(null),
              y = (0, r.useRef)(!1),
              N = (0, r.useRef)(0),
              j = (0, r.useRef)(null),
              T = (0, r.useRef)(null);
            (0, r.useEffect)(() => {
              b.current && !k.current && (k.current = !0);
            }, [b.current]);
            let C = () => {
                if ((j.current && h(j.current, p), !y.current)) {
                  var e, t;
                  (y.current = !0),
                    (N.current =
                      (null === (e = w.current) || void 0 === e ? void 0 : e.offsetHeight) || 0),
                    m(N.current),
                    null === (t = T.current) || void 0 === t || t.classList.add(l.isHover);
                }
              },
              E = () => {
                if ((n || c || s) && (clearTimeout(t), y.current)) {
                  var e;
                  (y.current = !1),
                    (N.current = 0),
                    _(),
                    null === (e = T.current) || void 0 === e || e.classList.remove(l.isHover);
                }
              };
            (0, r.useEffect)(() => {
              E();
            }, [v]);
            let B = !1,
              D = e => {
                ((v.includes(e) && !B) ||
                  (v.includes('video-course') && e.includes('video-course') && !B)) &&
                  (B = !0);
              };
            return (
              (0, r.useEffect)(() => {
                var e, t;
                B
                  ? null === (e = T.current) || void 0 === e || e.classList.add(l.underlineActive)
                  : null === (t = T.current) ||
                    void 0 === t ||
                    t.classList.remove(l.underlineActive);
              }),
              (0, a.jsxs)('div', {
                className: ''
                  .concat(l.navItem, ' ')
                  .concat(l.underline, ' p_a-s underline_nav-link'),
                onMouseEnter: () => {
                  (n || c || s) &&
                    (clearTimeout(t),
                    g
                      ? C()
                      : (t = setTimeout(() => {
                          C();
                        }, 100)),
                    x && window.gtag && window.gtag('event', x, { transport_type: 'beacon' }));
                },
                onMouseLeave: E,
                ref: T,
                children: [
                  i &&
                    (0, a.jsx)(d.rU, {
                      ...i,
                      to: i.link,
                      scroll: v.split('#')[0] !== i.link.split('#')[0],
                      className: ''.concat(l.navName, ' ').concat(l.underlineOv, ' caps'),
                      activeClassName: l.underlineActive,
                      children: (0, a.jsx)('span', {
                        className: l.underlineItem,
                        children: i.label,
                      }),
                    }),
                  n &&
                    (c || s) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)('div', {
                          className: ''.concat(l.navName, ' ').concat(l.underlineOv, ' caps'),
                          ref: f,
                          children: (0, a.jsx)('span', { className: l.underlineItem, children: n }),
                        }),
                        (0, a.jsx)('div', {
                          className: 'width '.concat(l.navOv),
                          ref: w,
                          children: (0, a.jsxs)('div', {
                            className: 'flex flex_jcc '.concat(l.navMove),
                            ref: j,
                            children: [
                              c &&
                                (0, a.jsx)('div', {
                                  className: 'flex p_x-s '.concat(l.navLinksContainer),
                                  children: c.map(e =>
                                    (0, r.createElement)(
                                      d.rU,
                                      {
                                        ...e,
                                        key: e.label,
                                        className: ''
                                          .concat(l.navLink, ' ')
                                          .concat(
                                            l.underline,
                                            ' flex flex_fdc flex-item_shrink m_y-xl m_x-s '
                                          )
                                          .concat(e.link ? '' : 'disallow'),
                                        activeClassName: l.underlineActive,
                                        to: e.link || '/',
                                        itemProp: 'url',
                                        topBarCategoryIsActive: D,
                                      },
                                      (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (null == e ? void 0 : e.icon) &&
                                            (0, a.jsx)('img', {
                                              className: ''.concat(l.navIco, ' m_b-l'),
                                              src: e.icon,
                                              alt: '',
                                            }),
                                          (0, a.jsxs)('div', {
                                            className: l.underlineOv,
                                            children: [
                                              (0, a.jsx)('p', {
                                                className: l.underlineItem,
                                                itemProp: 'name',
                                                children: e.label,
                                              }),
                                              e.tag &&
                                                (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                    (b.current = !0),
                                                    ' ',
                                                    (0, a.jsx)('span', {
                                                      className: 'link-tag',
                                                      children: e.tag,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (null == e ? void 0 : e.description) &&
                                            (0, a.jsx)('div', {
                                              className: 'small text_grey m_t-xxs',
                                              children: e.description,
                                            }),
                                        ],
                                      })
                                    )
                                  ),
                                }),
                              s &&
                                (0, a.jsx)('div', {
                                  className: 'flex '.concat(l.navLinksListContainer),
                                  children:
                                    null == s
                                      ? void 0
                                      : s.map((e, t) => {
                                          var n;
                                          let i = (null == e ? void 0 : e.links.length) > 2;
                                          return (0, a.jsx)(
                                            'div',
                                            {
                                              className: 'flex flex_fit p_a-xl '.concat(
                                                l.navLinksList
                                              ),
                                              children:
                                                'name' in e
                                                  ? (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                        (0, a.jsx)('div', {
                                                          className: ''.concat(
                                                            l.navName,
                                                            ' caps m_b-xxxs'
                                                          ),
                                                          children: e.name,
                                                        }),
                                                        (0, a.jsx)('div', {
                                                          className: 'flex flex_fit p_t-xs',
                                                          children:
                                                            null == e
                                                              ? void 0
                                                              : null === (n = e.links) ||
                                                                void 0 === n
                                                              ? void 0
                                                              : n.map(e =>
                                                                  (0, r.createElement)(
                                                                    d.rU,
                                                                    {
                                                                      ...e,
                                                                      className: ''
                                                                        .concat(l.navLink, ' ')
                                                                        .concat(
                                                                          l.underline,
                                                                          ' p_y-xs'
                                                                        ),
                                                                      activeClassName:
                                                                        l.underlineActive,
                                                                      to: e.link,
                                                                      itemProp: 'url',
                                                                      key: e.label,
                                                                      topBarCategoryIsActive: D,
                                                                    },
                                                                    (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                        (0, a.jsx)('p', {
                                                                          className:
                                                                            l.underlineItem,
                                                                          itemProp: 'name',
                                                                          children: e.label,
                                                                        }),
                                                                        e.tag &&
                                                                          (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                              (b.current = !0),
                                                                              ' ',
                                                                              (0, a.jsx)('span', {
                                                                                className:
                                                                                  'link-tag',
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
                                                  : (0, a.jsxs)(o.tq, {
                                                      className: l.swiper,
                                                      speed: 600,
                                                      draggable: i,
                                                      grabCursor: i,
                                                      spaceBetween: 32,
                                                      slidesPerView: 'auto',
                                                      parallax: !0,
                                                      children: [
                                                        null == e
                                                          ? void 0
                                                          : e.links.map((e, t) =>
                                                              (0, a.jsx)(
                                                                o.o5,
                                                                {
                                                                  className: l.slide,
                                                                  children: (0, a.jsx)(u, {
                                                                    link: e,
                                                                    index: t,
                                                                  }),
                                                                },
                                                                ''.concat(e.label, '-').concat(t)
                                                              )
                                                            ),
                                                        i &&
                                                          (0, a.jsx)(d._r, {
                                                            className: 'flex flex_c m_t-l',
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
          _ = n(83733);
        let h = e => {
          let { link: t } = e;
          return (0, a.jsx)(
            d.rU,
            {
              to: t.link,
              target: t.target,
              itemProp: 'url',
              ...t.eventPayload,
              children: (0, a.jsxs)('div', {
                style: { backgroundImage: 'url('.concat(t.image.src, ')') },
                className: 'text_white p_a-s hover_trigger '.concat(l.solutionBanner),
                children: [
                  (0, a.jsx)('h3', { itemProp: 'name', className: 'gravity', children: t.label }),
                  (0, a.jsxs)('div', {
                    className: 'flex caps m_t-xs',
                    children: [
                      (0, a.jsx)('div', { className: l.underlineItem, children: 'Learn more' }),
                      (0, a.jsx)('div', { className: 'm_l-xs arrow' }),
                    ],
                  }),
                ],
              }),
            },
            t.label
          );
        };
        var p = e => {
            let {
                name: t,
                link: n,
                links: i,
                linksList: c,
                currentSlug: s,
                onClickAnchorLink: u,
                gaHoverEventName: m,
              } = e,
              p = (0, r.useRef)(null),
              g = (0, r.useRef)(!1),
              v = (0, r.useRef)(!1),
              x = (0, r.useRef)(null),
              f = (0, r.useRef)(null),
              [b, k] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
              g.current && !v.current && (v.current = !0);
            }, [g.current]);
            let w = !1,
              y = e => {
                ((s.includes(e) && !w) ||
                  (s.includes('video-course') && e.includes('video-course') && !w)) &&
                  (w = !0);
              };
            (0, r.useEffect)(() => {
              var e, t;
              w
                ? null === (e = x.current) || void 0 === e || e.classList.add(l.underlineActive)
                : null === (t = x.current) || void 0 === t || t.classList.remove(l.underlineActive);
            });
            let N = (0, r.useRef)(null),
              j = (0, r.useRef)(null),
              T = (0, r.useRef)(!1),
              C = (0, r.useRef)(null),
              E = () => {
                var e, t, n;
                N.current &&
                  (null === (e = C.current) || void 0 === e || e.kill(),
                  (C.current = _.ZP.to(N.current, {
                    duration: 0.45,
                    height: null === (t = j.current) || void 0 === t ? void 0 : t.offsetHeight,
                    willChange: 'height',
                    ease: 'power2.out',
                  })),
                  null === (n = x.current) || void 0 === n || n.classList.add(l.menuItemActive));
              },
              B = () => {
                var e, t;
                N.current &&
                  (null === (e = C.current) || void 0 === e || e.kill(),
                  (C.current = _.ZP.to(N.current, {
                    duration: 0.45,
                    height: 0,
                    willChange: 'height',
                    ease: 'power2.out',
                  })),
                  null === (t = x.current) || void 0 === t || t.classList.remove(l.menuItemActive));
              };
            (0, r.useEffect)(() => {
              let e = () => {
                T.current && E();
              };
              return (
                window.addEventListener('resize', e, { passive: !0 }),
                () => {
                  window.removeEventListener('resize', e);
                }
              );
            }, []),
              (0, r.useEffect)(() => {
                (T.current = !1), B();
              }, [s]);
            let D = () => {
              f.current &&
                'scrollWidth' in f.current &&
                k(f.current.scrollWidth > window.innerWidth);
            };
            return (
              (0, r.useEffect)(
                () => (
                  D(),
                  window.addEventListener('resize', D),
                  () => {
                    window.removeEventListener('resize', D);
                  }
                ),
                []
              ),
              (0, a.jsxs)('div', {
                className: ''.concat(l.menuItem, ' ').concat(l.underline, ' width'),
                ref: x,
                children: [
                  n &&
                    (0, a.jsx)(d.rU, {
                      ...n,
                      to: n.link,
                      scroll: s.split('#')[0] !== n.link.split('#')[0],
                      className: ''
                        .concat(l.menuName, ' ')
                        .concat(l.underlineOv, ' flex flex_jcsb flex_aic caps p_y-s p_l-l p_r-s'),
                      activeClassName: l.underlineActive,
                      onClick: u,
                      children: (0, a.jsx)('span', {
                        className: l.underlineItem,
                        children: n.label,
                      }),
                    }),
                  t &&
                    (i || c) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)('div', {
                          className: ''
                            .concat(l.menuName, ' ')
                            .concat(
                              l.underlineOv,
                              ' flex flex_jcsb flex_aic caps p_y-s p_l-l p_r-s'
                            ),
                          ref: p,
                          onClick: () => {
                            T.current
                              ? ((T.current = !1), B())
                              : ((T.current = !0),
                                E(),
                                m &&
                                  window.gtag &&
                                  window.gtag('event', m, { transport_type: 'beacon' }));
                          },
                          children: [
                            (0, a.jsx)('span', {
                              className: ''.concat(l.underlineItem),
                              children: t,
                            }),
                            (0, a.jsx)('div', { className: ''.concat(l.menuArrow, ' arrowhead') }),
                          ],
                        }),
                        (0, a.jsx)('div', {
                          className: l.menuDrop,
                          ref: N,
                          children: (0, a.jsxs)('div', {
                            className: l.menuOv,
                            ref: j,
                            children: [
                              i &&
                                (0, a.jsx)('div', {
                                  className: ''.concat(
                                    l.menuLinksContainer,
                                    ' flex flex_fit p_y-m p_x-l'
                                  ),
                                  children: i.map(e =>
                                    (0, r.createElement)(
                                      d.rU,
                                      {
                                        ...e,
                                        key: e.label,
                                        className: ''
                                          .concat(l.navLink, ' ')
                                          .concat(l.underline, ' flex flex_aic m_y-xs ')
                                          .concat(e.link ? '' : 'button_disabled'),
                                        activeClassName: l.underlineActive,
                                        to: e.link || '/',
                                        topBarCategoryIsActive: y,
                                      },
                                      (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (null == e ? void 0 : e.icon) &&
                                            (0, a.jsx)('img', {
                                              className: ''.concat(l.menuIco),
                                              src: e.icon,
                                              alt: '',
                                            }),
                                          (0, a.jsxs)('div', {
                                            className: l.underlineOv,
                                            children: [
                                              (0, a.jsx)('span', {
                                                className: ''.concat(l.underlineItem, ' m_l-xs'),
                                                children: e.label,
                                              }),
                                              e.tag &&
                                                (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                    (g.current = !0),
                                                    ' ',
                                                    (0, a.jsx)('span', {
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
                                (0, a.jsx)('div', {
                                  className: l.menuLinksListContainer,
                                  children: c.map((e, t) => {
                                    var n;
                                    return (0, a.jsx)(
                                      'div',
                                      {
                                        className: ''.concat(
                                          l.menuLinksList,
                                          ' flex flex_fit p_y-m p_x-l'
                                        ),
                                        children:
                                          'name' in e
                                            ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                  (0, a.jsx)('span', {
                                                    className: 'caps m_y-xs p_b-xxxs',
                                                    children: e.name,
                                                  }),
                                                  (0, a.jsx)('div', {
                                                    className: 'flex flex_fit',
                                                    children:
                                                      null == e
                                                        ? void 0
                                                        : null === (n = e.links) || void 0 === n
                                                        ? void 0
                                                        : n.map(e =>
                                                            (0, r.createElement)(
                                                              d.rU,
                                                              {
                                                                ...e,
                                                                key: e.label,
                                                                className: ''
                                                                  .concat(l.navLink, ' ')
                                                                  .concat(l.underline, ' m_y-xs'),
                                                                activeClassName: l.underlineActive,
                                                                to: e.link,
                                                                topBarCategoryIsActive: y,
                                                              },
                                                              (0, a.jsxs)(a.Fragment, {
                                                                children: [
                                                                  (0, a.jsx)('span', {
                                                                    className: l.underlineItem,
                                                                    children: e.label,
                                                                  }),
                                                                  e.tag &&
                                                                    (0, a.jsxs)(a.Fragment, {
                                                                      children: [
                                                                        (g.current = !0),
                                                                        ' ',
                                                                        (0, a.jsx)('span', {
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
                                            : (0, a.jsxs)(o.tq, {
                                                ref: f,
                                                className: ''.concat(l.swiper),
                                                speed: 600,
                                                draggable: b,
                                                grabCursor: b,
                                                spaceBetween: 24,
                                                slidesPerView: 'auto',
                                                children: [
                                                  null == e
                                                    ? void 0
                                                    : e.links.map((e, t) =>
                                                        (0, a.jsx)(
                                                          o.o5,
                                                          {
                                                            className: l.slide,
                                                            children: (0, a.jsx)(h, {
                                                              link: e,
                                                              index: t,
                                                            }),
                                                          },
                                                          'banner-'.concat(t)
                                                        )
                                                      ),
                                                  b &&
                                                    (0, a.jsx)(d._r, {
                                                      className: 'flex flex_c m_t-m',
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
          g = e => {
            let {
                isOpen: t,
                links: n,
                linksRight: i,
                onScroll: c,
                currentSlug: s,
                onClickAnchorLink: o,
              } = e,
              u = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                var e;
                let n = () => {
                  var e;
                  t && c(null === (e = u.current) || void 0 === e ? void 0 : e.scrollTop);
                };
                return (
                  n(),
                  null === (e = u.current) ||
                    void 0 === e ||
                    e.addEventListener('scroll', n, { passive: !0 }),
                  () => {
                    var e;
                    null === (e = u.current) || void 0 === e || e.removeEventListener('scroll', n);
                  }
                );
              }, [t]),
              (0, a.jsx)('div', {
                className: ''.concat(l.menu, ' ').concat(t ? l.isOpen : ''),
                children: (0, a.jsx)('div', {
                  className: l.menuInner,
                  ref: u,
                  children: (0, a.jsx)('div', {
                    className: 'height',
                    children: (0, a.jsxs)('div', {
                      className: ''.concat(l.menuContainer, ' flex flex_fdc flex_aic'),
                      children: [
                        i.button &&
                          (0, a.jsx)(d.un, {
                            ...i.button,
                            href: i.button.link,
                            className: 'm_t-m '.concat(i.link ? '' : 'm_b-m'),
                            onClick: o,
                            children: i.button.label,
                          }),
                        i.link &&
                          (0, a.jsx)(d.rU, {
                            ...i.link,
                            className: 'block p_y-s m_y-xs caps '.concat(i.link.className || ''),
                            to: i.link.link,
                            itemProp: 'url',
                            children:
                              i.link.node ||
                              (0, a.jsx)('span', {
                                className: l.underlineItem,
                                itemProp: 'name',
                                children: i.link.label,
                              }),
                          }),
                        n.map(e => {
                          var t;
                          return (0, r.createElement)(p, {
                            ...e,
                            currentSlug: s,
                            onClickAnchorLink: o,
                            key:
                              e.name || (null === (t = e.link) || void 0 === t ? void 0 : t.label),
                          });
                        }),
                      ],
                    }),
                  }),
                }),
              })
            );
          },
          v = n(13709),
          x = n(60411),
          f = e => {
            let {
                language: t,
                languages: n,
                navigateCallback: i,
                currentSlug: c,
                white: l = !1,
              } = e,
              { setTopBarTheme: s } = (0, x.useTopBarTheme)(),
              [o, d] = (0, r.useState)(t);
            return (
              (0, r.useEffect)(() => {
                document.documentElement.setAttribute('lang', t);
              }, [t]),
              (0, a.jsxs)('div', {
                className: 'm_x-l hover_trigger flex flex_aic pointer',
                children: [
                  (0, a.jsx)('div', {
                    className: 'underline_link '.concat(v.link, ' ').concat(l ? 'text_white' : ''),
                    children: (0, a.jsx)('select', {
                      className: ''.concat(v.select, ' pointer ').concat(l ? 'text_white' : ''),
                      onFocus: () => {
                        let e = new CustomEvent('selectToggled', { detail: { isOpen: !0 } });
                        window.dispatchEvent(e);
                      },
                      onBlur: () => {
                        let e = new CustomEvent('selectToggled', { detail: { isOpen: !1 } });
                        window.dispatchEvent(e);
                      },
                      onChange: e => {
                        s('white'),
                          d(
                            n.filter(t => {
                              let { prefix: n } = t;
                              return n === e.target.value;
                            })[0].label
                          ),
                          i(
                            ''
                              .concat(
                                n.filter(t => {
                                  let { prefix: n } = t;
                                  return n === e.target.value;
                                })[0].prefix
                              )
                              .concat(c)
                          );
                      },
                      value: n.filter(e => {
                        let { label: t } = e;
                        return t === o;
                      })[0].prefix,
                      children: n.map(e =>
                        (0, a.jsx)('option', { value: e.prefix, children: e.label }, e.label)
                      ),
                    }),
                  }),
                  (0, a.jsx)('div', {
                    className: 'arrowhead '.concat(l ? 'white' : '', ' down ').concat(v.arrow),
                    children: '↓',
                  }),
                ],
              })
            );
          },
          b = n(65845),
          k = e => {
            var t;
            let {
                logo: n,
                links: o,
                linksRight: u,
                currentSlug: h,
                navigateCallback: p,
                language: v = 'En',
                languages: k,
                service: w = 'landing',
                isHiddenNav: y,
                className: N,
                children: j,
              } = e,
              [T, C] = (0, r.useState)(!1),
              [E, B] = (0, r.useState)(!1),
              D = (0, r.useRef)(!1),
              I = (0, r.useRef)(T),
              { topBarTheme: L, setTopBarTheme: P } = (0, x.useTopBarTheme)(),
              S = (0, r.useRef)(L),
              A = (0, r.useRef)(0),
              R = (0, r.useRef)(0),
              F = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                (R.current = window.scrollY || e),
                  (R.current < 50 && D.current) || 0 === R.current
                    ? ((D.current = !1), B(!1))
                    : R.current >= 50 && !D.current && ((D.current = !0), B(!0));
              },
              M = () => {
                window.innerWidth >= 1200 && I.current && C(!1);
              };
            (0, r.useEffect)(() => {
              (I.current = T), T ? P(e => ((S.current = e), 'white')) : P(S.current);
            }, [T]),
              (0, r.useEffect)(() => {
                (A.current = 0), (0, s.Jc)(!1, A.current), C(!1);
              }, [h]),
              (0, r.useEffect)(() => {
                let e = () => {
                  T || F();
                };
                return (
                  e(),
                  window.addEventListener('scroll', e, { passive: !0 }),
                  window.addEventListener('resize', M, { passive: !0 }),
                  () => {
                    window.removeEventListener('scroll', e),
                      window.removeEventListener('resize', M);
                  }
                );
              }, []);
            let H = (0, r.useRef)(null),
              U = (0, r.useRef)(null),
              W = (0, r.useRef)(null),
              G = (0, r.useRef)({ element: null, index: null }),
              X = (0, r.useRef)({ element: null, index: null }),
              q = (e, t) => {
                (G.current.element = e),
                  (G.current.index = t),
                  _.ZP.set(e, { opacity: 1, x: 0 }),
                  null !== X.current.index &&
                    X.current.element &&
                    (G.current.index > X.current.index
                      ? (_.ZP.fromTo(
                          G.current.element,
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
                        _.ZP.fromTo(
                          X.current.element,
                          { x: 0, opacity: 1 },
                          { duration: 0.2, opacity: 0, x: -100 }
                        ))
                      : (_.ZP.fromTo(
                          G.current.element,
                          { x: -100, opacity: 0 },
                          {
                            ease: 'expo.out',
                            duration: 0.45,
                            x: 0,
                            opacity: 1,
                            willChange: 'transform',
                          }
                        ),
                        _.ZP.fromTo(
                          X.current.element,
                          { x: 0, opacity: 1 },
                          { duration: 0.2, x: 100, opacity: 0 }
                        ))),
                  (X.current.element = e),
                  (X.current.index = t);
              },
              [O, V] = (0, r.useState)(!1),
              Z = e => {
                var t;
                V(!0),
                  H.current && H.current.classList.add(l.isDrop),
                  null === (t = W.current) || void 0 === t || t.kill(),
                  (W.current = _.ZP.to(U.current, {
                    duration: 0.45,
                    height: e,
                    willChange: 'height',
                    ease: 'power2.out',
                    onStart: () => {
                      _.ZP.set(U.current, { opacity: 1, visibility: 'visible' });
                    },
                  }));
              },
              z = () => {
                var e;
                H.current && H.current.classList.remove(l.isDrop),
                  null === (e = W.current) || void 0 === e || e.kill(),
                  (W.current = _.ZP.to(U.current, {
                    duration: 0.45,
                    height: 0,
                    willChange: 'height',
                    ease: 'power2.out',
                    onStart: () => {
                      V(!1),
                        (G.current.element = null),
                        (G.current.index = null),
                        (X.current.element = null),
                        (X.current.index = null),
                        _.ZP.set(U.current, { opacity: 0, visibility: 'hidden' });
                    },
                  }));
              };
            return (0, a.jsxs)('div', {
              className: 'new-top-bar relative '
                .concat(null != N ? N : '', ' ')
                .concat(l.container, ' ')
                .concat('black' === L ? l.black : '', ' ')
                .concat('transparent' === L ? l.transparency : '', ' ')
                .concat('white-wrap' === L ? l.whiteWrap : ''),
              children: [
                !y &&
                  (0, a.jsx)(g, {
                    isOpen: T,
                    links: o,
                    linksRight: u,
                    currentSlug: h,
                    onScroll: F,
                    onClickAnchorLink: () => {
                      T && ((0, s.Jc)(!1, A.current), C(!1));
                    },
                  }),
                (0, a.jsxs)('div', {
                  className: 'width disallow fixed '.concat(l.inner),
                  children: [
                    j &&
                      (0, a.jsx)('div', {
                        className: 'allow '.concat(l.banner, ' ').concat(E ? l.isSticky : ''),
                        children: j,
                      }),
                    (0, a.jsx)('div', {
                      id: 'top-bar',
                      className: 'allow '.concat(l.topBar, ' ').concat(E ? l.isSticky : ''),
                      'data-is-sticky': E,
                      'data-is-open': T,
                      children: (0, a.jsx)('div', {
                        className: 'p_x-s sm-p_x-m height relative',
                        children: (0, a.jsxs)('div', {
                          className: 'width height flex_aic flex_jcsb flex',
                          itemScope: !0,
                          itemType: 'http://www.schema.org/SiteNavigationElement',
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'height flex_aic flex',
                              children: [
                                (0, a.jsx)(i.Z, {
                                  ...n,
                                  service: w,
                                  className: ''
                                    .concat(l.logo, ' ')
                                    .concat(
                                      null !== (t = null == n ? void 0 : n.className) &&
                                        void 0 !== t
                                        ? t
                                        : ''
                                    ),
                                  withText: !0,
                                  hasPopup: !0,
                                  white: 'white' !== L && 'white-wrap' !== L,
                                }),
                                p &&
                                  k &&
                                  k.length > 1 &&
                                  (0, a.jsx)(f, {
                                    language: v,
                                    languages: k,
                                    navigateCallback: p,
                                    currentSlug: h,
                                    white: 'white' !== L && 'white-wrap' !== L,
                                  }),
                              ],
                            }),
                            !y &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(c.default, {
                                    isOpen: T,
                                    onClick: () => {
                                      T
                                        ? ((0, s.Jc)(!1, A.current), C(!1))
                                        : ((A.current = window.scrollY),
                                          (0, s.Jc)(!0, window.scrollY),
                                          C(!0));
                                    },
                                    inverted: 'white' !== L && 'white-wrap' !== L,
                                  }),
                                  (0, a.jsxs)('nav', {
                                    className: ''.concat(l.nav, ' width flex_c flex'),
                                    ref: H,
                                    children: [
                                      (0, a.jsx)('div', {
                                        className: ''.concat(l.navDrop, ' shadow'),
                                        ref: U,
                                      }),
                                      o.map((e, t) => {
                                        var n;
                                        return (0, r.createElement)(m, {
                                          ...e,
                                          isHover: O,
                                          dropActive: Z,
                                          dropDiactive: z,
                                          dropMove: q,
                                          index: t,
                                          currentSlug: h,
                                          key:
                                            e.name ||
                                            (null === (n = e.link) || void 0 === n
                                              ? void 0
                                              : n.label) ||
                                            t,
                                        });
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, a.jsxs)('div', {
                              className: ''.concat(l.topBarRight, ' height flex_aic flex'),
                              children: [
                                u.button &&
                                  (0, a.jsx)(d.un, {
                                    href: u.button.link,
                                    outlined: !E,
                                    ...u.button,
                                    className: ''
                                      .concat(E ? '' : 'button_outlined-cobalt', ' ')
                                      .concat(l.signup),
                                    children: u.button.label,
                                  }),
                                u.link &&
                                  (0, a.jsx)(b.default, {
                                    ...u.link,
                                    className: ''
                                      .concat(l.underline, ' caps p_y-s m_l-m ')
                                      .concat(u.link.className || '', ' ')
                                      .concat(
                                        'white' !== L && 'white-wrap' !== L ? 'text_white' : ''
                                      ),
                                    to: u.link.link,
                                    itemProp: 'url',
                                    children:
                                      u.link.node ||
                                      (0, a.jsx)('span', {
                                        className: l.underlineItem,
                                        itemProp: 'name',
                                        children: u.link.label,
                                      }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
          };
      },
      30412: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(7653),
          i = n(44326);
        let c = (0, r.forwardRef)((e, t) => {
          let { video: n, videoWebm: c, className: l, loop: s = !0, autoPlay: o = !0, ...d } = e,
            u = (0, r.useRef)(null);
          return (
            (0, r.useImperativeHandle)(t, () => ({
              play: () => {
                u.current && u.current.play();
              },
              stop: () => {
                u.current && u.current.pause();
              },
            })),
            (0, a.jsxs)(
              'video',
              {
                ref: u,
                className: ''.concat(l, ' ').concat(i.videoElement),
                muted: !0,
                playsInline: !0,
                loop: s,
                autoPlay: o,
                ...d,
                children: [
                  c && (0, a.jsx)('source', { src: c, type: 'video/webm' }),
                  (0, a.jsx)('source', { src: n, type: 'video/mp4' }),
                ],
              },
              n
            )
          );
        });
        t.default = c;
      },
      41412: function (e, t, n) {
        'use strict';
        var a = n(27573);
        n(7653);
        var r = n(75892),
          i = n(79782);
        t.default = e => {
          let { serviceId: t } = e,
            n = async () => {
              var e, n;
              await (null === (e = window.__ucCmp) || void 0 === e
                ? void 0
                : e.updateServicesConsents([{ id: t, consent: !0 }])),
                await (null === (n = window.__ucCmp) || void 0 === n ? void 0 : n.saveConsents());
            };
          return (0, a.jsxs)('div', {
            className: 'shadow bg_white text_center flex flex_fdc flex_aic p_a-m grid_gap '.concat(
              r.consentBanner
            ),
            children: [
              (0, a.jsx)('h5', { children: 'We need your consent to load the Wistia service!' }),
              (0, a.jsx)('p', {
                className: 'small',
                children:
                  'We use a third party service to embed video content that may collect data about your activity. Please review the details and accept the service to watch this video.',
              }),
              (0, a.jsx)(i.un, {
                small: !0,
                outlined: !0,
                tag: 'button',
                onClick: () => {
                  var e;
                  null === (e = window.__ucCmp) || void 0 === e || e.showSecondLayer();
                },
                children: 'More information',
              }),
              (0, a.jsx)(i.un, { small: !0, tag: 'button', onClick: n, children: 'Accept' }),
            ],
          });
        };
      },
      79782: function (e, t, n) {
        'use strict';
        n.d(t, {
          n4: function () {
            return U;
          },
          un: function () {
            return c;
          },
          tW: function () {
            return D.default;
          },
          fh: function () {
            return P;
          },
          J7: function () {
            return j;
          },
          n2: function () {
            return B;
          },
          $_: function () {
            return _;
          },
          qU: function () {
            return h.default;
          },
          q9: function () {
            return p.default;
          },
          uX: function () {
            return I;
          },
          CA: function () {
            return s;
          },
          rU: function () {
            return o.default;
          },
          TR: function () {
            return d.Z;
          },
          p9: function () {
            return b;
          },
          Ph: function () {
            return C;
          },
          mB: function () {
            return W;
          },
          Mm: function () {
            return N;
          },
          _r: function () {
            return R;
          },
          p1: function () {
            return A.default;
          },
          N7: function () {
            return E;
          },
          nv: function () {
            return k;
          },
          Yr: function () {
            return M.default;
          },
          Du: function () {
            return a.default;
          },
          QK: function () {
            return v;
          },
          nk: function () {
            return L;
          },
          CF: function () {
            return q;
          },
          Qu: function () {
            return X.default;
          },
          tL: function () {
            return G.default;
          },
        });
        var a = n(3478),
          r = n(27573),
          i = n(7653),
          c = n(43487).default,
          l = n(42801),
          s = e => {
            let { lang: t = 'en', children: n, ...a } = e;
            return (0, r.jsx)(c, {
              ...a,
              href: l.j7[t].href,
              eventName: 'signup-click',
              children: n || l.j7[t].text,
            });
          };
        n(1157);
        var o = n(65845),
          d = n(78565),
          u = n(57819),
          m = n(73833),
          _ = e => {
            let {
                bottomLinks: t,
                manychatLinks: n,
                productLinks: a,
                agenciesLinks: i,
                resouresLinks: c,
                copyrightsOnly: l = !1,
              } = e,
              s = { Manychat: n, Agencies: i, Product: a, Resources: c };
            return (0, r.jsxs)('footer', {
              className: ''
                .concat(u.footer, ' ')
                .concat(l ? '' : 'p_t-l', ' tn-p_t-xl text_white bg_black'),
              children: [
                !l &&
                  (0, r.jsx)('div', {
                    className: 'w w_m m_b-s tn-m_b-0',
                    children: (0, r.jsxs)('div', {
                      className: 'grid grid_5 grid_gap',
                      children: [
                        (0, r.jsx)(d.Z, { link: '/', white: !0, className: u.logo }),
                        Object.keys(s).map(e =>
                          (0, r.jsxs)(
                            'div',
                            {
                              children: [
                                
                             
                            
                            
                            
                              ],
                            },
                            e
                          )
                        ),
                      ],
                    }),
                  }),
                (0, r.jsx)(m.Z, { links: t, tag: 'div' }),
              ],
            });
          },
          h = n(66547),
          p = n(25834),
          g = n(86282),
          v = e => {
            let { heroText: t, subline: n, btn: a, className: i } = e,
              { link: l, inverted: s, ...o } = a;
            return (0, r.jsxs)('section', {
              className: 'p_y-xxl text_white text_center bg_black '.concat(i || ''),
              children: [
                (0, r.jsxs)('div', {
                  className: 'w w_l flex flex_fdc flex_aic m_b-m tn-m_b-l text_center ',
                  children: [
                    'string' == typeof t
                      ? (0, r.jsx)('h2', { className: 'h2 flex-item_10', children: t })
                      : t,
                    n &&
                      (0, r.jsx)('div', {
                        className: 'flex-item_8 m_t-s tn-m_t-m subline '.concat(g.richSubline),
                        children: (0, r.jsx)('p', { children: n }),
                      }),
                  ],
                }),
                (0, r.jsx)(c, {
                  href: l,
                  inverted: null == s || s,
                  accented: !0,
                  ...o,
                  children: a.label,
                }),
              ],
            });
          },
          x = n(90393),
          f = n.n(x),
          b = () =>
            (0, r.jsxs)('div', {
              className: f().wrapper,
              children: [
                (0, r.jsx)('div', { className: f().dot }),
                (0, r.jsx)('div', { className: f().dot }),
                (0, r.jsx)('div', { className: f().dot }),
              ],
            }),
          k = i.forwardRef((e, t) => {
            let { placeholder: n, ...a } = e;
            return (0, r.jsx)('input', {
              ref: t,
              placeholder: n,
              ...a,
              onWheel: e => {
                e.currentTarget.blur();
              },
            });
          }),
          w = n(15254).default,
          y = n(32253),
          N = e => {
            let { children: t, disabled: n = !1, className: a = '' } = e;
            return (0, r.jsx)(y.un, {
              type: 'submit',
              tag: 'button',
              className: a,
              style: { minWidth: '15rem' },
              disabled: n,
              children: t,
            });
          },
          j = i.forwardRef((e, t) => {
            let { option: n, className: a = '', ...i } = e;
            return (0, r.jsxs)(
              'div',
              {
                className: 'flex '.concat(a),
                children: [
                  (0, r.jsx)('input', {
                    ref: t,
                    id: n.value,
                    type: 'checkbox',
                    value: n.value,
                    className: 'flex-item_shrink',
                    ...i,
                  }),
                  (0, r.jsx)('label', {
                    htmlFor: n.value,
                    className: 'small m_l-s pointer',
                    children: n.label,
                  }),
                ],
              },
              n.value
            );
          });
        n(95527);
        var T = n(63038),
          C = i.forwardRef((e, t) => {
            let { options: n = [], defaultValue: a, ...i } = e;
            return (0, r.jsxs)('div', {
              className: 'flex flex_aic width hover_trigger '.concat(T.select),
              children: [
                (0, r.jsx)('select', {
                  defaultValue: a,
                  ref: t,
                  ...i,
                  children: n.map(e => (0, r.jsx)('option', { value: e, children: e }, e)),
                }),
                (0, r.jsx)('div', {
                  className: T.selectArrow,
                  children: (0, r.jsx)('div', { className: 'arrowhead down' }),
                }),
              ],
            });
          }),
          E = i.forwardRef((e, t) => {
            let { placeholder: n, ...a } = e;
            return (0, r.jsx)('textarea', { ref: t, placeholder: n, ...a });
          }),
          B = w;
        n(58737);
        var D = n(78952),
          I = n(32550).default,
          L = n(30412).default,
          P = n(39816).default,
          S = n(84676),
          A = n(39236),
          R = S.default,
          F = n(50294);
        n(42511), n(4674);
        var M = n(66592),
          H = n(11134),
          U = e => {
            let { title: t, link: n, image: a, articleSlug: i } = e;
            return (0, r.jsxs)(o.default, {
              to: i ? '/resources/how-to/'.concat(i) : n,
              className: 'b_a o_hidden shadow_dynamic '.concat(H.card__link),
              children: [
                (0, r.jsx)(F.default, {
                  src: a.src,
                  width: a.width,
                  height: a.height,
                  className: H.image,
                  quality: a.quality,
                  style: { objectFit: 'cover' },
                  alt: '',
                }),
                (0, r.jsx)('div', {
                  className: 'p_x-m p_t-m p_b-l h4 '.concat(H.card__title),
                  children: t,
                }),
              ],
            });
          },
          W = n(71999).default,
          G = n(36106),
          X = n(36963),
          q = n(41412).default;
      },
      39397: function (e, t, n) {
        'use strict';
        var a = n(27573),
          r = n(48014),
          i = n(81695);
        t.Z = e => t => {
          let { onClick: n, eventName: c, gaDataEventName: l, gaDataCtaId: s, ...o } = t,
            d = (0, r.useExperiment)(),
            u = (0, i.usePathname)();
          return (0, a.jsx)(e, {
            ...o,
            onClick: e => {
              n && n(e),
                c && (null == d || d.handleClick(c, u, { ctaName: l, ctaId: s })),
                l &&
                  s &&
                  window.gtag &&
                  window.gtag('event', l, {
                    event_category: 'Button Click',
                    event_label: 'Click Event',
                    ctaID: s,
                    transport_type: 'beacon',
                  });
            },
          });
        };
      },
      42801: function (e, t, n) {
        'use strict';
        n.d(t, {
          lW: function () {
            return p;
          },
          pA: function () {
            return g;
          },
          j7: function () {
            return y;
          },
          ZR: function () {
            return N;
          },
          k2: function () {
            return d;
          },
          Zd: function () {
            return u;
          },
          xQ: function () {
            return m;
          },
          Dh: function () {
            return b;
          },
          _C: function () {
            return k;
          },
          P7: function () {
            return w;
          },
          hp: function () {
            return v;
          },
          N7: function () {
            return x;
          },
          uq: function () {
            return f;
          },
        });
        var a = n(91573),
          r = n(57034),
          i = n(28491),
          c = n(31136),
          l = n(31773),
          s = n(26774),
          o = n(64138);
        let d = {
            links: [
              {
                name: 'Product',
                gaHoverEventName: 'product_menu_hover',
                links: [
                  {
                    link: '/purchase',
                    label: 'More Reviews',
                    description: 'Turn every table into a constant source of glowing customer reviews.',
                    icon: r.default.src,
                    gaDataEventName: 'product_menu_click',
                    gaDataCtaId: 'ig',
                  },
                  {
                    link: '/purchase',
                    label: 'Crisis Aversion',
                    description: 'More 5-star reviews, private issue resolution.',
                    icon: c.default.src,
                    gaDataEventName: 'product_menu_click',
                    gaDataCtaId: 'wa',
                  },
                  {
                    link: '/purchase',
                    label: 'Rank Higher',
                    description: 'AI replies boost your Google rank—no ads.',
                    icon: a.default.src,
                    gaDataEventName: 'product_menu_click',
                    gaDataCtaId: 'fb',
                  },
                //   {
                //     link: 'https://elevatereputation.com/product/ai',
                //     label: 'Manychat AI',
                //     description: 'A Smarter Way to Chat Automation',
                //     icon: i.default.src,
                //     gaDataEventName: 'product_menu_click',
                //     gaDataCtaId: 'ai',
                //     target: '_self',
                //   },
                //   {
                //     link: 'https://get.manychat.com/hey-tiktok',
                //     label: 'TikTok',
                //     description: 'Turn TikTok Views into Profits with Automation.',
                //     icon: l.default.src,
                //     gaDataEventName: 'product_menu_click',
                //     gaDataCtaId: 'tiktok',
                //   },
                ],
              },
            //   {
            //     name: 'Solutions',
            //     gaHoverEventName: 'solutions_menu_hover',
            //     linksList: [
            //       {
            //         name: 'by Business Type',
            //         links: [
            //           {
            //             label: 'for Creators',
            //             link: '/creators',
            //             gaDataEventName: 'solutions_menu_click',
            //             gaDataCtaId: 'for-creators',
            //           },
            //           {
            //             label: 'for eCommerce',
            //             link: '/meet-chatmarketing-for-ecommerce',
            //             gaDataEventName: 'solutions_menu_click',
            //             gaDataCtaId: 'for-ecommerce',
            //           },
            //           {
            //             label: 'for Agencies',
            //             link: '/product/for-agencies',
            //             gaDataEventName: 'solutions_menu_click',
            //             gaDataCtaId: 'for-agencies',
            //           },
            //         ],
            //       },
            //       {
            //         links: [
            //           {
            //             label: 'Turn TikTok Views into Profits with Automation',
            //             link: 'https://get.manychat.com/hey-tiktok',
            //             image: {
            //               src: 'https://mccdn.me/martcdn/mc-land/constants/navigation/tiktok.jpg',
            //               width: 272,
            //               height: 272,
            //               quality: 100,
            //               alt: 'TikTok',
            //             },
            //             eventPayload: {
            //               gaDataEventName: 'solutions_menu_click',
            //               gaDataCtaId: 'tiktok-banner',
            //             },
            //             target: '_self',
            //           },
            //           {
            //             label: 'Manychat AI: A Smarter Way to Chat Automation',
            //             link: 'https://elevatereputation.com/product/ai/',
            //             image: {
            //               src: 'https://mccdn.me/martcdn/mc-land/constants/navigation/manychat-ai.jpg',
            //               width: 410,
            //               height: 272,
            //               quality: 100,
            //               alt: 'Manychat AI',
            //             },
            //             eventPayload: {
            //               gaDataEventName: 'solutions_menu_click',
            //               gaDataCtaId: 'ai-banner',
            //             },
            //             target: '_self',
            //           },
            //           {
            //             label: 'Grow your followers',
            //             link: 'https://get.manychat.com/grow',
            //             image: {
            //               src: 'https://mccdn.me/martcdn/mc-land/constants/navigation/grow-your-followers.png',
            //               width: 272,
            //               height: 272,
            //               quality: 100,
            //               alt: 'Grow your followers',
            //             },
            //             eventPayload: {
            //               gaDataEventName: 'solutions_menu_click',
            //               gaDataCtaId: 'lib-banner',
            //             },
            //           },
            //           {
            //             label: 'Link in bio’ is soooo 2016. Use DMs instead',
            //             link: 'https://get.manychat.com/rip-link-in-bio',
            //             image: {
            //               src: 'https://mccdn.me/martcdn/mc-land/constants/navigation/link-in-bio.jpg',
            //               width: 410,
            //               height: 272,
            //               quality: 100,
            //               alt: 'Link in bio’ is soooo 2016. Use DMs instead',
            //             },
            //             eventPayload: {
            //               gaDataEventName: 'solutions_menu_click',
            //               gaDataCtaId: 'gyf-banner',
            //             },
            //           },
            //         ],
            //       },
            //     ],
            //   },
              {
                name: 'Agencies',
                gaHoverEventName: 'agencies_menu_hover',
                links: [
                //   {
                //     link: '/',
                //     type: 'listing',
                //     label: 'Hire an Agency',
                //     description: 'Get help from chat marketing experts',
                //     icon: s.default.src,
                //     gaDataEventName: 'agencies_menu_click',
                //     gaDataCtaId: 'hire-an-agency',
                //   },
                  {
                    link: 'https://elevatereputation.com/affiliate',
                    label: 'Join the Affiliate Program',
                    description: 'Earn up to 50% recurring commission',
                    icon: o.default.src,
                    gaDataEventName: 'agencies_menu_click',
                    gaDataCtaId: 'affiliate-program',
                  },
                ],
              },
              {
                link: {
                  link: '/purchase',
                  label: 'Pricing',
                  gaDataEventName: 'pricing_menu_click',
                  gaDataCtaId: 'pricing',
                },
              },
              {
                link: {
                  link: 'https://wa.me/447596081462',
                  label: 'Support',
                  gaDataEventName: 'pricing_menu_click',
                  gaDataCtaId: 'pricing',
                },
              },
            //   {
            //     name: 'Resources',
            //     gaHoverEventName: 'resources_menu_hover',
            //     linksList: [
            //       {
            //         name: 'Learn',
            //         links: [
            //           {
            //             label: 'Blog',
            //             link: 'https://elevatereputation.com/blog/',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'blog',
            //           },
            //           {
            //             label: 'Help Center',
            //             link: 'https://help.manychat.com/',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'help-center',
            //           },
            //           {
            //             label: 'How To Guides',
            //             link: '/resources/how-to',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'how-to-guides',
            //           },
            //           {
            //             type: 'event',
            //             label: 'Webinars',
            //             link: '/',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'webinars',
            //           },
            //           {
            //             label: 'Video Course',
            //             link: '/resources/video-course',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'video-course',
            //           },
            //           {
            //             label: 'eBooks',
            //             link: '/resources/ebooks',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'ebooks',
            //           },
            //         ],
            //       },
            //       {
            //         name: 'Get Inspired',
            //         links: [
            //           {
            //             label: 'Chatbot Examples',
            //             link: '/messenger-marketing-examples',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'chatbot-examples',
            //           },
            //           {
            //             label: 'Community',
            //             link: 'https://community.manychat.com/',
            //             gaDataEventName: 'resources_menu_click',
            //             gaDataCtaId: 'community',
            //           },
            //         ],
            //       },
            //     ],
            //   },
            ],
            linksRight: {
              button: {
                link: '/purchase',
                label: 'Get Started',
                eventName: 'signup-click',
                gaDataEventName: 'main_cta_click',
                gaDataCtaId: 'navbar',
              },
              link: {
                link: '/signin',
                label: '',
                eventName: 'signin-click',
                gaDataEventName: 'secondary_cta_click',
                gaDataCtaId: 'navbar',
              },
            },
          },
          u = {
            links: [
              {
                link: {
                  link: '/purchase',
                  label: 'Instagram',
                  gaDataEventName: 'product_menu_click',
                  gaDataCtaId: 'ig',
                },
              },
              {
                link: {
                  link: 'https://get.manychat.com/es/hey-tiktok',
                  label: 'TikTok',
                  gaDataEventName: 'product_menu_click',
                  gaDataCtaId: 'tiktok',
                },
              },
              {
                link: {
                  link: '/purchase',
                  label: 'WhatsApp',
                  gaDataEventName: 'product_menu_click',
                  gaDataCtaId: 'wa',
                },
              },
              {
                link: {
                  link: '/es/creators',
                  label: 'Creators',
                  gaDataEventName: 'solutions_menu_click',
                  gaDataCtaId: 'for-creators',
                },
              },
              {
                link: {
                  link: '/es',
                  label: 'Webinars',
                  type: 'event',
                  gaDataEventName: 'resources_menu_click',
                  gaDataCtaId: 'webinars',
                },
              },
            ],
            linksRight: {
              button: {
                link: '/signup?lang=es',
                label: '\xa1reg\xedstrate ya!',
                eventName: 'signup-click',
                gaDataEventName: 'main_cta_click',
                gaDataCtaId: 'navbar',
              },
              link: {
                link: '/signin?lang=es',
                label: 'Iniciar Sesi\xf3n',
                eventName: 'signin-click',
                gaDataEventName: 'secondary_cta_click',
                gaDataCtaId: 'navbar',
              },
            },
          },
          m = {
            links: [
              {
                link: {
                  link: '/purchase',
                  label: 'Instagram',
                  gaDataEventName: 'product_menu_click',
                  gaDataCtaId: 'ig',
                },
              },
              {
                link: {
                  link: 'https://get.manychat.com/pt/hey-tiktok',
                  label: 'TikTok',
                  gaDataEventName: 'product_menu_click',
                  gaDataCtaId: 'tiktok',
                },
              },
              {
                link: {
                  link: '/purchase',
                  label: 'WhatsApp',
                  gaDataEventName: 'product_menu_click',
                  gaDataCtaId: 'wa',
                },
              },
              {
                link: {
                  link: '/pt/creators',
                  label: 'Criadores',
                  gaDataEventName: 'solutions_menu_click',
                  gaDataCtaId: 'for-creators',
                },
              },
              {
                link: {
                  link: '/pt/pricing',
                  label: 'Pre\xe7os',
                  gaDataEventName: 'pricing_menu_click',
                  gaDataCtaId: 'pricing',
                },
              },
              {
                link: {
                  link: '/pt/security',
                  label: 'Privacidade e Seguran\xe7a',
                  gaDataEventName: 'security_menu_click',
                  gaDataCtaId: 'privacy-security',
                },
              },
            ],
            linksRight: {
              button: {
                link: '/signup?lang=pt',
                label: 'Come\xe7e j\xe1',
                eventName: 'signup-click',
                gaDataEventName: 'main_cta_click',
                gaDataCtaId: 'navbar',
              },
              link: {
                link: '/signin?lang=pt',
                label: 'Log in',
                eventName: 'signin-click',
                gaDataEventName: 'secondary_cta_click',
                gaDataCtaId: 'navbar',
              },
            },
          };
        var _ = n(74859);
        let h = [
            { label: 'Privacy Policy', link: 'https://elevatereputation.com/privacy' },
            { label: 'Terms of Service', link: 'https://elevatereputation.com/terms' },
          ],
          p = {
            bottomLinks: h,
            manychatLinks: [
              // { label: 'Abouttretreter', link: '/about' },
              // { label: 'Careers', link: '/', type: 'careers' },
              // { label: 'Privacy & Security', link: '/security' },
            ],
            productLinks: [
              // { label: 'Messenger', link: '/purchase' },
              // { label: 'Instagram', link: '/purchase' },
              // { label: 'Manychat AI', link: 'https://elevatereputation.com/product/ai/', target: '_self' },
              // { label: 'SMS Marketing', link: '/sms-marketing' },
              // { label: 'Integrations', link: '/integrations' },
              // { label: 'For eCommerce', link: '/meet-chatmarketing-for-ecommerce' },
              // { label: 'Changelog', link: 'https://community.manychat.com/product-updates' },
              // { label: 'Pricing', link: '/pricing' },
            ],
            resouresLinks: [
              // { label: 'Status Page', link: 'https://status.manychat.com/' },
              // { label: 'Help Center', link: 'https://help.manychat.com/' },
              // { label: 'Community', link: 'https://community.manychat.com/' },
              // { label: 'Video Course', link: '/resources/video-course' },
              // { label: 'How To', link: '/resources/how-to' },
              // { label: 'Blog', link: 'https://elevatereputation.com/blog/' },
              // {
              //   label: 'Privacy Settings',
              //   link: '#',
              //   type: _.env.NEXT_PUBLIC_NEXT_EVENT
              //     ? 'event'
              //     : _.env.NEXT_PUBLIC_NEXT_LISTING
              //     ? 'listing'
              //     : 'landing',
              //   onClick: e => {
              //     var t, n;
              //     e.preventDefault(),
              //       null === (t = window.__ucCmp) || void 0 === t || t.changeLanguage('en'),
              //       null === (n = window.__ucCmp) || void 0 === n || n.showSecondLayer();
              //   },
              // },
            ],
            agenciesLinks: [
              // { type: 'listing', label: 'Hire an Agency', link: '/' },
              // { label: 'Join the Affiliate Program', link: 'https://elevatereputation.com/affiliate' },
            ],
          },
          g = {
            sections: {
              // product: p.productLinks,
              // manychat: p.manychatLinks,
              // agencies: p.agenciesLinks,
              // resources: p.resouresLinks,
              '\xa9 2024, ELEVATE, Inc.': h,
            },
            video: {
              video: 'https://mccdn.me/martcdn/mc-land/constants/footer/footer-redisign_video.mp4',
              videoWebm:
                'https://mccdn.me/martcdn/mc-land/constants/footer/footer-redesign_video.webm',
              loop: !0,
              autoPlay: !0,
            },
          },
          v = {
            heroText: ' Boost Your Reputation',
            subline:
              'Your Reputation Can Make or Break Your Business – Take Control Now!',
            btn: {
              label: 'Get Started',
              link: '/purchase',
              eventName: 'signup-click',
              gaDataEventName: 'main_cta_click',
              gaDataCtaId: 'footer',
            },
          },
          x = {
            heroText: 'Prueba Manychat gratis',
            subline: 'Crear un bot es f\xe1cil, divertido y est\xe1 comprobado que da resultados',
            btn: {
              label: '\xa1REG\xcdSTRATE YA!',
              link: '/signup?lang=es',
              eventName: 'signup-click',
              gaDataEventName: 'main_cta_click',
              gaDataCtaId: 'footer',
            },
          },
          f = {
            heroText: 'Experimente o Manychat gratuitamente',
            subline: 'Transforme mais conversas em vendas, leads e convers\xf5es hoje mesmo',
            btn: {
              label: 'COME\xc7AR A USAR',
              link: '/signup?lang=pt',
              eventName: 'signup-click',
              gaDataEventName: 'main_cta_click',
              gaDataCtaId: 'footer',
            },
          },
          b = [
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'banner-image',
              },
              text: 'Manychat for TikTok is here! Start for free',
              link: 'https://get.manychat.com/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'banner-image',
              },
              text: 'Manychat for TikTok is here! Start for free',
              link: 'https://get.manychat.com/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'banner-image',
              },
              text: 'Manychat for TikTok is here! Start for free',
              link: 'https://get.manychat.com/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
          ],
          k = [
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'imagen de banner',
              },
              text: '\xa1Manychat para TikTok ya est\xe1 aqu\xed! Empieza gratis',
              link: 'https://get.manychat.com/es/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'imagen de banner',
              },
              text: '\xa1Manychat para TikTok ya est\xe1 aqu\xed! Empieza gratis',
              link: 'https://get.manychat.com/es/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'imagen de banner',
              },
              text: '\xa1Manychat para TikTok ya est\xe1 aqu\xed! Empieza gratis',
              link: 'https://get.manychat.com/es/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
          ],
          w = [
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'imagem do banner',
              },
              text: 'A Manychat chegou no TikTok! Comece gratuitamente',
              link: 'https://get.manychat.com/pt/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'imagem do banner',
              },
              text: 'A Manychat chegou no TikTok! Comece gratuitamente',
              link: 'https://get.manychat.com/pt/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
            {
              image: {
                src: 'https://mccdn.me/martcdn/mc-land/constants/top-banner/banner-img-v1.jpg',
                width: 255,
                height: 125,
                alt: 'imagem do banner',
              },
              text: 'A Manychat chegou no TikTok! Comece gratuitamente',
              link: 'https://get.manychat.com/pt/hey-tiktok',
              backgroundColor: '#EDF2ED',
              borderColor: 'rgba(28, 28, 28, 0.03)',
              eventPayload: {
                gaDataEventName: 'banner_click_to_landing',
                gaDataCtaId: 'top-banner',
              },
            },
          ],
          y = {
            en: { href: '/purchase', text: 'get started' },
            es: { href: '/signup?lang=es', text: '\xa1reg\xedstrate ya!' },
            pt: { href: '/signup?lang=pt', text: 'come\xe7ar gratuitamente' },
          },
          N = new Set([
            'BR',
            'MX',
            'AR',
            'CL',
            'CO',
            'PE',
            'EC',
            'CR',
            'PA',
            'DO',
            'GT',
            'SV',
            'HN',
            'NI',
            'UY',
            'PY',
            'BO',
            'VE',
          ]);
      },
      18268: function (e, t, n) {
        'use strict';
        n.d(t, {
          HostnameProvider: function () {
            return s;
          },
          useAppHostname: function () {
            return l;
          },
        });
        var a = n(27573),
          r = n(7653);
        let i = 'elevatereputation.com',
          c = (0, r.createContext)(i),
          l = () => (0, r.useContext)(c),
          s = e => {
            let { children: t, appHostname: n } = e;
            return (0, a.jsx)(c.Provider, { value: null != n ? n : i, children: t });
          };
      },
      48014: function (e, t, n) {
        'use strict';
        n.d(t, {
          ExperimentProvider: function () {
            return o;
          },
          useExperiment: function () {
            return s;
          },
        });
        var a = n(27573),
          r = n(7653),
          i = n(3020);
        let c = (e, t, n, a) => {
            let { csrfToken: r, ...c } = n;
            fetch('/landing-api/event', {
              method: 'POST',
              keepalive: !0,
              headers: { 'Content-Type': 'application/json', 'x-csrf-token': r || '' },
              body: JSON.stringify({
                event_name: e,
                payload: { pathname: t, ts: Date.now(), ...a, ...c },
              }),
            })
              .then(e => {
                e.ok || (0, i.H)('Failed to send event with status: '.concat(e.status));
              })
              .catch(e => {
                (0, i.H)(e);
              });
          },
          l = (0, r.createContext)(void 0),
          s = () => (0, r.useContext)(l),
          o = e => {
            let { children: t } = e,
              [n, i] = (0, r.useState)({
                group: null,
                experimentName: null,
                id: null,
                csrfToken: null,
              });
            return (0, a.jsx)(l.Provider, {
              value: {
                handleClick: (e, t, a) => {
                  c(e, t, n, a);
                },
                handleLoad: (e, t) => {
                  c('page-load', t, e);
                },
                setExperimentData: i,
              },
              children: t,
            });
          };
      },
      60411: function (e, t, n) {
        'use strict';
        n.d(t, {
          TopBarThemeProvider: function () {
            return l;
          },
          useTopBarTheme: function () {
            return c;
          },
        });
        var a = n(27573),
          r = n(7653);
        let i = (0, r.createContext)({ topBarTheme: 'white', setTopBarTheme: () => {} }),
          c = () => (0, r.useContext)(i),
          l = e => {
            let { children: t, initialTopBarTheme: n = 'white' } = e,
              [c, l] = (0, r.useState)(n);
            return (0, a.jsx)(i.Provider, {
              value: { topBarTheme: c, setTopBarTheme: l },
              children: t,
            });
          };
      },
      78815: function (e, t, n) {
        'use strict';
        n.r(t),
          n.d(t, {
            default: function () {
              return d;
            },
          });
        var a = n(27573),
          r = n(7653),
          i = n(28024),
          c = n(37620),
          l = n(50294),
          s = e => {
            let { photo: t, name: n, text: r, accented: i } = e;
            return (0, a.jsx)('div', {
              className: 'm_t-s m_b-xl trigger',
              children: (0, a.jsxs)('div', {
                className: 'w w_l sm-grid grid_2 b_a m_b-s shadow_dynamic o_hidden '
                  .concat(c.testimonial, ' ')
                  .concat(i ? 'bg_grey' : 'bg_white'),
                children: [
                  (0, a.jsx)('div', {
                    className: 'flex flex_jcfs',
                    children: (0, a.jsx)(l.default, {
                      alt: '',
                      src: t.src,
                      width: t.width,
                      height: t.height,
                      className: c.photo,
                      quality: t.quality || 75,
                      style: { objectFit: 'cover' },
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex flex_fdc flex_jcc p_t-l p_a-m tn-p_r-l',
                    children: [
                      (0, a.jsx)('div', { className: 'h2 m_a-0', children: '”' }),
                      (0, a.jsx)('p', { className: 'm_a-0 text_subtitle', children: r }),
                      (0, a.jsx)('span', { className: 'm_y-s caps '.concat(c.name), children: n }),
                    ],
                  }),
                ],
              }),
            });
          },
          o = n(79782),
          d = e => {
            let {
                id: t,
                title: n,
                subline: c,
                testimonials: l,
                avatars: d,
                className: u,
                accentedBg: m,
                accentedCard: _,
              } = e,
              [h, p] = (0, r.useState)(0);
            return (0, a.jsxs)('section', {
              className: ''
                .concat(m ? 'p_y-xxl' : 'm_y-xxl', ' ')
                .concat(u || '', ' ')
                .concat(m ? 'bg_grey' : ''),
              id: t,
              children: [
                (n || c) &&
                  (0, a.jsxs)('div', {
                    className: 'w w_l flex flex_fdc flex_aic m_b-m tn-m_b-l text_center',
                    children: [
                      n && (0, a.jsx)('h2', { className: 'h2 flex-item_10 trigger', children: n }),
                      c &&
                        (0, a.jsx)('div', {
                          className: 'flex-item_8 m_t-s tn-m_t-m subline rich-subline',
                          children: (0, a.jsx)('p', { className: 'trigger', children: c }),
                        }),
                    ],
                  }),
                l.length > 1
                  ? (0, a.jsxs)(i.tq, {
                      slidesPerView: 1,
                      speed: 600,
                      loop: !0,
                      grabCursor: !0,
                      autoHeight: !0,
                      className: 'trigger o_hidden',
                      onSlideChange: e => p(e.realIndex),
                      children: [
                        l.map((e, t) =>
                          (0, a.jsx)(
                            i.o5,
                            { children: (0, a.jsx)(s, { ...e, accented: _ }) },
                            'testimonial-'.concat(t)
                          )
                        ),
                        d
                          ? (0, a.jsx)(o.p1, {
                              className: 'flex flex_c',
                              avatars: d,
                              activeIndex: h,
                              accented: m,
                            })
                          : (0, a.jsx)(o._r, { className: 'flex flex_c' }),
                      ],
                    })
                  : (0, a.jsx)(s, { ...l[0] }),
              ],
            });
          };
      },
      59029: function (e, t, n) {
        'use strict';
        function a(e) {
          let { src: t, width: n, quality: a } = e;
          return t.startsWith('https://mhmadraziq.github.io/elevate-assets/')
            ? 'https://mhmadraziq.github.io/elevate-assets/images/'
                .concat(
                  t.split('/').pop().split('.')[0], // Extracts base filename without extension (e.g., 'Step1')
                  '-'.concat(n, '.png') // Appends width and file extension (e.g., '-750.svg')
                )
            : '';
        }
        n.r(t),
          n.d(t, {
            default: function () {
              return a;
            },
          });
      },
      
      42511: function (e) {
        e.exports = {
          article: 'ArticleTile_article__z06HG',
          image: 'ArticleTile_image__yUiiU',
          scale: 'ArticleTile_scale__ghKle',
          title: 'ArticleTile_title__TlrjB',
          arrow: 'ArticleTile_arrow__Jexyl',
        };
      },
      11134: function (e) {
        e.exports = {
          card__title: 'BlogArticleTile_card__title__e1TfC',
          cardTitle: 'BlogArticleTile_card__title__e1TfC',
          card__link: 'BlogArticleTile_card__link__I8Sc8',
          cardLink: 'BlogArticleTile_card__link__I8Sc8',
          image: 'BlogArticleTile_image__NoNqx',
        };
      },
      29432: function (e) {
        e.exports = {
          button: 'BtnRollup_button__tsyCT',
          plus: 'BtnRollup_plus__3TnCD',
          plus_minus: 'BtnRollup_plus_minus__fNSoh',
          plusMinus: 'BtnRollup_plus_minus__fNSoh',
        };
      },
      94141: function (e) {
        e.exports = {
          bttn: 'Button_bttn__DMkA5',
          'bttn-content': 'Button_bttn-content__r455g',
          bttnContent: 'Button_bttn-content__r455g',
          'bttn-content-before': 'Button_bttn-content-before__bRRx8',
          bttnContentBefore: 'Button_bttn-content-before__bRRx8',
          'bttn-content-after': 'Button_bttn-content-after__ktDAy',
          bttnContentAfter: 'Button_bttn-content-after__ktDAy',
          'bttn-left-icon': 'Button_bttn-left-icon__s9A13',
          bttnLeftIcon: 'Button_bttn-left-icon__s9A13',
          'bttn-right-icon': 'Button_bttn-right-icon__G7fSn',
          bttnRightIcon: 'Button_bttn-right-icon__G7fSn',
          bttnM: 'Button_bttnM__xFMu7',
          bttnL: 'Button_bttnL__PxI8i',
          bttnXL: 'Button_bttnXL__tqD7_',
          bttnXl: 'Button_bttnXL__tqD7_',
          bttnTertiaryActive1Dark: 'Button_bttnTertiaryActive1Dark__NDK22',
          bttnTertiaryActive2Dark: 'Button_bttnTertiaryActive2Dark__KGI1N',
          bttnPrimaryActive2Light: 'Button_bttnPrimaryActive2Light__h71Uh',
          bttnSecondaryActive1Dark: 'Button_bttnSecondaryActive1Dark__AXSk8',
          bttnSecondaryActive2Dark: 'Button_bttnSecondaryActive2Dark__8src3',
          bttnSecondaryActive1Light: 'Button_bttnSecondaryActive1Light__PzfGg',
          bttnTertiaryActive2Light: 'Button_bttnTertiaryActive2Light__2Uw53',
          bttnTertiaryActive1Light: 'Button_bttnTertiaryActive1Light__pqqpu',
          bttnPrimaryActive2Dark: 'Button_bttnPrimaryActive2Dark__hFTZc',
          bttnPrimaryActive1Dark: 'Button_bttnPrimaryActive1Dark__ywZ8K',
          bttnPrimaryActive1Light: 'Button_bttnPrimaryActive1Light__KPof5',
          bttnSecondaryActive2Light: 'Button_bttnSecondaryActive2Light__e1h4O',
          bttnPrimaryDisabled1Light: 'Button_bttnPrimaryDisabled1Light__gCS49',
          bttnPrimaryDisabled1Dark: 'Button_bttnPrimaryDisabled1Dark__p9DbZ',
          bttnPrimaryDisabled2Dark: 'Button_bttnPrimaryDisabled2Dark__Ymgip',
          bttnSecondaryDisabled2Light: 'Button_bttnSecondaryDisabled2Light__0w_fi',
          bttnTertiaryDisabled1Light: 'Button_bttnTertiaryDisabled1Light__w8hoq',
          bttnTertiaryDisabled2Light: 'Button_bttnTertiaryDisabled2Light__rYJqd',
          bttnPrimaryDisabled2Light: 'Button_bttnPrimaryDisabled2Light__vK5h1',
          bttnSecondaryDisabled1Dark: 'Button_bttnSecondaryDisabled1Dark__bLLaq',
          bttnSecondaryDisabled1Light: 'Button_bttnSecondaryDisabled1Light__v2d1D',
          bttnSecondaryDisabled2Dark: 'Button_bttnSecondaryDisabled2Dark__LmFVN',
          bttnTertiaryDisabled1Dark: 'Button_bttnTertiaryDisabled1Dark__3KtQS',
          bttnTertiaryDisabled2Dark: 'Button_bttnTertiaryDisabled2Dark__3BXZ4',
        };
      },
      98952: function (e) {
        e.exports = {
          variables: 'tokens_variables__thrdE',
          bttnTextXL: 'tokens_bttnTextXL__u1DMW',
          bttnTextXl: 'tokens_bttnTextXL__u1DMW',
          bttnTextL: 'tokens_bttnTextL__WRuIC',
        };
      },
      99815: function (e) {
        e.exports = {
          'video-container': 'EmbedVideo_video-container__mpeM8',
          videoContainer: 'EmbedVideo_video-container__mpeM8',
          'wistia-video': 'EmbedVideo_wistia-video__XfDbV',
          wistiaVideo: 'EmbedVideo_wistia-video__XfDbV',
          thumbnail: 'EmbedVideo_thumbnail__CkUi6',
          iframe: 'EmbedVideo_iframe__IB495',
          'consent-banner': 'EmbedVideo_consent-banner__EQLTd',
          consentBanner: 'EmbedVideo_consent-banner__EQLTd',
        };
      },
      63038: function (e) {
        e.exports = {
          field: 'FieldWrapper_field__0L0IV',
          select: 'FieldWrapper_select__em2Eh',
          selectArrow: 'FieldWrapper_selectArrow__yXuKW',
        };
      },
      57819: function (e) {
        e.exports = {
          footer: 'Footer_footer__SqwoT',
          logo: 'Footer_logo___gJUM',
          'footer-link': 'Footer_footer-link__KC3kN',
          footerLink: 'Footer_footer-link__KC3kN',
          links: 'Footer_links__JCb_o',
          tag: 'Footer_tag__RHXVj',
        };
      },
      12768: function (e) {
        e.exports = {
          panel: 'GalleryFilters_panel__U_O1Y',
          'is-disabled': 'GalleryFilters_is-disabled__FKNvw',
          isDisabled: 'GalleryFilters_is-disabled__FKNvw',
          control: 'GalleryFilters_control__eNkeG',
          noSearch: 'GalleryFilters_noSearch__h6RA5',
          'value-container': 'GalleryFilters_value-container__6xbdp',
          valueContainer: 'GalleryFilters_value-container__6xbdp',
          placeholder: 'GalleryFilters_placeholder__aAT3b',
          input: 'GalleryFilters_input__e0L2U',
          'single-value': 'GalleryFilters_single-value__7uk2w',
          singleValue: 'GalleryFilters_single-value__7uk2w',
          'dropdown-indicator': 'GalleryFilters_dropdown-indicator__CZFbi',
          dropdownIndicator: 'GalleryFilters_dropdown-indicator__CZFbi',
          'clear-indicator': 'GalleryFilters_clear-indicator__Atrm7',
          clearIndicator: 'GalleryFilters_clear-indicator__Atrm7',
          menu: 'GalleryFilters_menu__OAIik',
          option: 'GalleryFilters_option__Py1dO',
          'is-selected': 'GalleryFilters_is-selected__4Z2oh',
          isSelected: 'GalleryFilters_is-selected__4Z2oh',
          filter: 'GalleryFilters_filter__9r0_z',
          button: 'GalleryFilters_button__nArnf',
          search: 'GalleryFilters_search__JMWAG',
        };
      },
      49480: function (e) {
        e.exports = {
          container: 'Popup_container__QKWHn',
          ico: 'Popup_ico__wt3Kh',
          show: 'Popup_show__sPvdK',
          underline: 'Popup_underline__O43ye',
        };
      },
      90393: function (e) {
        e.exports = {
          wrapper: 'Preloader_wrapper__mEU9m',
          dot: 'Preloader_dot___HEV7',
          circle: 'Preloader_circle__Go70S',
        };
      },
      24076: function (e) {
        e.exports = {
          container: 'Share_container__qZZaX',
          share: 'Share_share__EiB_A',
          twitter: 'Share_twitter__nFfsU',
          facebook: 'Share_facebook__FoGHx',
          email: 'Share_email__fMZ_Y',
          linkedin: 'Share_linkedin__bLIni',
          messenger: 'Share_messenger__JsbfU',
          slack: 'Share_slack__Wcnh3',
        };
      },
      4674: function (e) {
        e.exports = { image: 'Step_image__MBJfi' };
      },
      34590: function (e) {
        e.exports = {
          button: 'SwiperPrevNext_button__DmEXd',
          disabled: 'SwiperPrevNext_disabled__0b4eL',
          container: 'SwiperPrevNext_container__WzpMB',
          'avatars-container': 'SwiperPrevNext_avatars-container__vij9Q',
          avatarsContainer: 'SwiperPrevNext_avatars-container__vij9Q',
          accented: 'SwiperPrevNext_accented__PLLmN',
          avatars: 'SwiperPrevNext_avatars__4wf3e',
          avatar: 'SwiperPrevNext_avatar__cgiw1',
          active: 'SwiperPrevNext_active__xeorX',
        };
      },
      85108: function (e) {
        e.exports = {
          container: 'TopBanner_container__IRvnS',
          image: 'TopBanner_image__cF87F',
          chess: 'TopBanner_chess__2TiVp',
          arrow: 'TopBanner_arrow__n5AwT',
        };
      },
      89143: function (e) {
        e.exports = {
          wrap: 'Burger_wrap__rP0CB',
          'is-open': 'Burger_is-open__Bm5Cq',
          isOpen: 'Burger_is-open__Bm5Cq',
          inverted: 'Burger_inverted__duTwB',
        };
      },
      13709: function (e) {
        e.exports = {
          link: 'LanguageSelect_link__hxfGV',
          select: 'LanguageSelect_select__XJM9d',
          arrow: 'LanguageSelect_arrow__k4ua6',
        };
      },
      59590: function (e) {
        e.exports = {
          logo: 'TopBar_logo__tUnzY',
          container: 'TopBar_container__vNu2A',
          banner: 'TopBar_banner__BEvrE',
          'is-sticky': 'TopBar_is-sticky__tFDaz',
          isSticky: 'TopBar_is-sticky__tFDaz',
          'top-bar': 'TopBar_top-bar__kGlp_',
          topBar: 'TopBar_top-bar__kGlp_',
          'nav-drop': 'TopBar_nav-drop__HPUBm',
          navDrop: 'TopBar_nav-drop__HPUBm',
          'nav-ov': 'TopBar_nav-ov__mRXGd',
          navOv: 'TopBar_nav-ov__mRXGd',
          'top-bar-right': 'TopBar_top-bar-right__nGUBL',
          topBarRight: 'TopBar_top-bar-right__nGUBL',
          nav: 'TopBar_nav__tshTc',
          'is-drop': 'TopBar_is-drop__uVOyI',
          isDrop: 'TopBar_is-drop__uVOyI',
          'nav-item': 'TopBar_nav-item__6Xz4x',
          navItem: 'TopBar_nav-item__6Xz4x',
          'nav-link': 'TopBar_nav-link__Va9Kb',
          navLink: 'TopBar_nav-link__Va9Kb',
          'nav-name': 'TopBar_nav-name__EQjCj',
          navName: 'TopBar_nav-name__EQjCj',
          'nav-links-list': 'TopBar_nav-links-list__wK2Lk',
          navLinksList: 'TopBar_nav-links-list__wK2Lk',
          'nav-links-container': 'TopBar_nav-links-container__ay3_5',
          navLinksContainer: 'TopBar_nav-links-container__ay3_5',
          'nav-links-list-container': 'TopBar_nav-links-list-container__J9_98',
          navLinksListContainer: 'TopBar_nav-links-list-container__J9_98',
          'is-hover': 'TopBar_is-hover__rLj6m',
          isHover: 'TopBar_is-hover__rLj6m',
          'nav-move': 'TopBar_nav-move__T6k_j',
          navMove: 'TopBar_nav-move__T6k_j',
          'nav-ico': 'TopBar_nav-ico__lYeT_',
          navIco: 'TopBar_nav-ico__lYeT_',
          underline: 'TopBar_underline__fakyk',
          'underline-ov': 'TopBar_underline-ov___PJ5a',
          underlineOv: 'TopBar_underline-ov___PJ5a',
          'underline-item': 'TopBar_underline-item__H_3_P',
          underlineItem: 'TopBar_underline-item__H_3_P',
          'underline-active': 'TopBar_underline-active__O3caw',
          underlineActive: 'TopBar_underline-active__O3caw',
          'btn-menu': 'TopBar_btn-menu___JiQU',
          btnMenu: 'TopBar_btn-menu___JiQU',
          menu: 'TopBar_menu__3DutN',
          'is-open': 'TopBar_is-open__NFiNK',
          isOpen: 'TopBar_is-open__NFiNK',
          'menu-container': 'TopBar_menu-container__tjaka',
          menuContainer: 'TopBar_menu-container__tjaka',
          'menu-inner': 'TopBar_menu-inner__mrkWY',
          menuInner: 'TopBar_menu-inner__mrkWY',
          'menu-item': 'TopBar_menu-item__erINs',
          menuItem: 'TopBar_menu-item__erINs',
          'menu-item-active': 'TopBar_menu-item-active__9qcG4',
          menuItemActive: 'TopBar_menu-item-active__9qcG4',
          'menu-arrow': 'TopBar_menu-arrow__FDMqP',
          menuArrow: 'TopBar_menu-arrow__FDMqP',
          'menu-ico': 'TopBar_menu-ico__JegnN',
          menuIco: 'TopBar_menu-ico__JegnN',
          'menu-drop': 'TopBar_menu-drop__m6Qnb',
          menuDrop: 'TopBar_menu-drop__m6Qnb',
          'menu-name': 'TopBar_menu-name__K5Fiu',
          menuName: 'TopBar_menu-name__K5Fiu',
          'menu-ov': 'TopBar_menu-ov__s2fQD',
          menuOv: 'TopBar_menu-ov__s2fQD',
          'menu-links-list': 'TopBar_menu-links-list__StquJ',
          menuLinksList: 'TopBar_menu-links-list__StquJ',
          'menu-links-container': 'TopBar_menu-links-container__BmogN',
          menuLinksContainer: 'TopBar_menu-links-container__BmogN',
          'menu-links-list-container': 'TopBar_menu-links-list-container__fzjQN',
          menuLinksListContainer: 'TopBar_menu-links-list-container__fzjQN',
          'solution-banner': 'TopBar_solution-banner__FQlDi',
          solutionBanner: 'TopBar_solution-banner__FQlDi',
          slide: 'TopBar_slide__nnY7J',
          swiper: 'TopBar_swiper__FnWEP',
          'solution-banner-content': 'TopBar_solution-banner-content__2vl2O',
          solutionBannerContent: 'TopBar_solution-banner-content__2vl2O',
          transparency: 'TopBar_transparency__I2r_x',
          black: 'TopBar_black__ChJMS',
          'white-wrap': 'TopBar_white-wrap__bwDac',
          whiteWrap: 'TopBar_white-wrap__bwDac',
          signup: 'TopBar_signup__fjzBV',
        };
      },
      86282: function (e) {
        e.exports = {
          'rich-subline': 'TrySection_rich-subline__IRHr0',
          richSubline: 'TrySection_rich-subline__IRHr0',
        };
      },
      44326: function (e) {
        e.exports = {
          'video-element': 'Video_video-element__l4Kj3',
          videoElement: 'Video_video-element__l4Kj3',
        };
      },
      75892: function (e) {
        e.exports = {
          'consent-banner': 'VideoConsentBanner_consent-banner__DeXAi',
          consentBanner: 'VideoConsentBanner_consent-banner__DeXAi',
        };
      },
      49488: function (e) {
        e.exports = {
          title: 'BlogArticleHeroSection_title__CWlCh',
          author: 'BlogArticleHeroSection_author__q6w7H',
          'author-name': 'BlogArticleHeroSection_author-name__E_exK',
          authorName: 'BlogArticleHeroSection_author-name__E_exK',
          avatar: 'BlogArticleHeroSection_avatar__SOLx5',
        };
      },
      37620: function (e) {
        e.exports = {
          testimonial: 'Testimonial_testimonial__KzgsV',
          photo: 'Testimonial_photo__ef15_',
          quote: 'Testimonial_quote__vOHmz',
          name: 'Testimonial_name__e36SS',
        };
      },
      64138: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/affiliate.193aa077.svg',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      28491: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/ai.9f66e1b4.svg',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      26774: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/find_agency.9a9db1ea.svg',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      57034: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mhmadraziq.github.io/elevate-assets/images/Google.svg',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      91573: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mhmadraziq.github.io/elevate-assets/images/MessengerDM.png',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      31773: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mccdn.me/martech/next-lp//_next/static/media/tiktok.2628dce8.svg',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
      31136: function (e, t, n) {
        'use strict';
        n.r(t),
          (t.default = {
            src: 'https://mhmadraziq.github.io/elevate-assets/images/WhatsappDM.png',
            height: 270,
            width: 270,
            blurWidth: 0,
            blurHeight: 0,
          });
      },
    },
  ]);
//# sourceMappingURL=8951-ce3332b2edda5aea.js.map
