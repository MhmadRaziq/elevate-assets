/*! 2.27.5 | BH: 82084e3aac5616ae8770 | CH: 88800c9b6c */
/*! License information is available at licenses.txt */
(self.webpackChunkrs_iphone = self.webpackChunkrs_iphone || []).push([
    [7151], {
        6946: (e, t, a) => {
            var s = {
                "./accessory-with-dimensions/adapter": [6841, 9291],
                "./applecare-summary-multipart-withoverlay/adapter": [5348, 6482],
                "./applecare-summary-multipart/adapter": [2713, 3673],
                "./applecare-summary-singlepart/adapter": [4740, 9280],
                "./inline-accessory-with-dimensions-evolution/adapter": [451, 8303],
                "./inline-accessory-with-dimensions/adapter": [1167, 5494],
                "./inline-applecare-evolution/adapter": [3703, 6493],
                "./inline-applecare-fullwidth-multipart-withoverlay/adapter": [5265, 2100],
                "./inline-applecare-fullwidth-withoverlay/adapter": [5768, 8899],
                "./inline-applecare-fullwidth/adapter": [373, 8314],
                "./inline-applecare-multipart-withoverlay-evolution/adapter": [1471, 230],
                "./inline-applecare-multipart-withoverlay/adapter": [2371, 3039],
                "./inline-applecare-withoverlay/adapter": [9294, 6836],
                "./inline-applecare/adapter": [8907, 9645],
                "./simple-accessory-tileview/adapter": [8873, 1218],
                "./simple-accessory/adapter": [2615, 4027]
            };

            function l(e) {
                if (!a.o(s, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = s[e],
                    l = t[0];
                return a.e(t[1]).then((() => a(l)))
            }
            l.keys = () => Object.keys(s), l.id = 6946, e.exports = l
        },
        2478: (e, t, a) => {
            var s = {
                "./accessory-with-dimensions-withoverlay/component": [5004, 4818, 3820, 3123],
                "./accessory-with-dimensions/component": [2021, 4818, 3820, 7770, 8890],
                "./applecare-summary-multipart-withoverlay/component": [748, 6081],
                "./applecare-summary-multipart/component": [2707, 3272],
                "./applecare-summary-singlepart/component": [6628, 2295],
                "./inline-accessory-with-dimensions-evolution/component": [3267, 4818, 9486],
                "./inline-accessory-with-dimensions/component": [9386, 4818, 5093],
                "./inline-applecare-evolution/component": [4397, 2284],
                "./inline-applecare-fullwidth-multipart-withoverlay/component": [5723, 9867],
                "./inline-applecare-fullwidth-withoverlay/component": [4192, 7058],
                "./inline-applecare-fullwidth/component": [5351, 7822],
                "./inline-applecare-multipart-withoverlay-evolution/component": [2997, 631],
                "./inline-applecare-multipart-withoverlay/component": [4049, 620],
                "./inline-applecare-withoverlay/component": [4914, 3429],
                "./inline-applecare/component": [713, 7226],
                "./simple-accessory-tileview/component": [3827, 7811],
                "./simple-accessory/component": [5307, 4818, 3820, 1608]
            };

            function l(e) {
                if (!a.o(s, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = s[e],
                    l = t[0];
                return Promise.all(t.slice(1).map(a.e)).then((() => a(l)))
            }
            l.keys = () => Object.keys(s), l.id = 2478, e.exports = l
        },
        283: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => E
            });
            var s = a(8168),
                l = a(1594),
                o = a.n(l),
                r = a(2224),
                c = a.n(r),
                i = a(3808),
                n = a(6273);
            const d = Object.freeze({
                    INLINE_APPLECARE: "AppleCareTileView",
                    INLINE_APPLECARE_EVOLUTION: "AppleCareTileViewEvolution",
                    INLINE_APPLECARE_OVERLAY: "AppleCareTileViewWithOverlay",
                    INLINE_APPLECARE_OVERLAY_EVOLUTION: "AppleCareTileViewWithOverlayEvolution",
                    INLINE_APPLECARE_MULTIPART_OVERLAY: "AppleCareTileViewMultiPartWithOverlay",
                    INLINE_APPLECARE_MULTIPART_OVERLAY_EVOLUTION: "AppleCareTileViewMultiPartWithOverlayEvolution",
                    APPLE_CARE_SUMMARY_MULTIPART: "AppleCareSummaryMultiPart",
                    APPLE_CARE_SUMMARY_MULTIPART_OVERLAY: "AppleCareSummaryMultiPartWithOverlay",
                    APPLE_CARE_SUMMARY_SINGLEPART: "AppleCareSummarySinglePart",
                    SIMPLE_ACCESSORY: "SimpleAccessorySmallSquare",
                    ACCESSORY_WITH_DIMENSIONS_SMALL_SQUARE: "FeatureAccessorySmallSquare",
                    ACCESSORY_WITH_DIMENSIONS_HIGHLIGHT: "FeatureAccessorySquareHighlight",
                    SIMPLE_ACCESSORY_TILEVIEW: "SimpleAccessoryFullWidthTileView",
                    INLINE_ACCESSORY_WITH_DIMENSIONS: "InlineStep1Accessory",
                    INLINE_ACCESSORY_WITH_DIMENSIONS_EVOLUTION: "InlineStep1AccessoryEvolution",
                    INLINE_APPLECARE_FULLWIDTH: "AppleCareFullWidthTileView",
                    INLINE_APPLECARE_FULLWIDTH_OVERLAY: "AppleCareFullWidthTileViewWithOverlay",
                    INLINE_APPLECARE_FULLWIDTH_MULTIPART_OVERLAY: "AppleCareFullWidthTileViewMultiPartWithOverlay"
                }),
                p = {
                    [d.INLINE_APPLECARE]: "./inline-applecare",
                    [d.INLINE_APPLECARE_EVOLUTION]: "./inline-applecare-evolution",
                    [d.INLINE_APPLECARE_OVERLAY]: "./inline-applecare-withoverlay",
                    [d.INLINE_APPLECARE_OVERLAY_EVOLUTION]: "./inline-applecare-withoverlay",
                    [d.INLINE_APPLECARE_MULTIPART_OVERLAY]: "./inline-applecare-multipart-withoverlay",
                    [d.INLINE_APPLECARE_MULTIPART_OVERLAY_EVOLUTION]: "./inline-applecare-multipart-withoverlay-evolution",
                    [d.APPLE_CARE_SUMMARY_MULTIPART]: "./applecare-summary-multipart",
                    [d.APPLE_CARE_SUMMARY_MULTIPART_OVERLAY]: "./applecare-summary-multipart-withoverlay",
                    [d.APPLE_CARE_SUMMARY_SINGLEPART]: "./applecare-summary-singlepart",
                    [d.ACCESSORY_WITH_DIMENSIONS]: "./accessory-with-dimensions",
                    [d.SIMPLE_ACCESSORY]: "./simple-accessory",
                    [d.ACCESSORY_WITH_DIMENSIONS_SMALL_SQUARE]: "./accessory-with-dimensions",
                    [d.ACCESSORY_WITH_DIMENSIONS_HIGHLIGHT]: "./accessory-with-dimensions",
                    [d.SIMPLE_ACCESSORY_TILEVIEW]: "./simple-accessory-tileview",
                    [d.INLINE_ACCESSORY_WITH_DIMENSIONS]: "./inline-accessory-with-dimensions",
                    [d.INLINE_ACCESSORY_WITH_DIMENSIONS_EVOLUTION]: "./inline-accessory-with-dimensions-evolution",
                    [d.INLINE_APPLECARE_FULLWIDTH]: "./inline-applecare-fullwidth",
                    [d.INLINE_APPLECARE_FULLWIDTH_OVERLAY]: "./inline-applecare-fullwidth-withoverlay",
                    [d.INLINE_APPLECARE_FULLWIDTH_MULTIPART_OVERLAY]: "./inline-applecare-fullwidth-multipart-withoverlay"
                };
            var m = a(3530);

            function u(e) {
                let {
                    accessoryKey: t,
                    clearSlotSelection: a = c().noop,
                    Component: l,
                    dataToParse: r,
                    loadingFallback: i,
                    onPartChange: n = c().noop,
                    onSelectionChange: d = c().noop,
                    onStateChange: p = c().noop,
                    adapter: u,
                    part: E,
                    selection: y,
                    state: v,
                    slotDataToParse: A = {},
                    slotStatus: h,
                    updatesForSlot: f,
                    lazyLoad: N = !0,
                    overlayAccValue: O,
                    ...S
                } = e;
                const _ = o().useRef(Math.floor(Math.random() * Math.floor(99999))),
                    {
                        handleUpdates: C,
                        meta: I,
                        productSelection: g,
                        autoSelectFirstSelection: w = !1
                    } = o().useMemo((() => u({
                        dataToParse: r,
                        state: v,
                        onStateChange: p,
                        slotDataToParse: A,
                        selection: y,
                        part: E,
                        updatesForSlot: f,
                        uuid: _.current
                    })), [u, r, v, A, y, E, f]),
                    L = (0, m.A)({
                        part: g.part,
                        selection: g.selection,
                        bootstrap: g.bootstrap,
                        onPartChange: e => {
                            n(t, e)
                        },
                        onSelectionChange: d({
                            currentAccessoryKey: t
                        }),
                        autoSelectFirstSelection: w
                    }),
                    P = e => {
                        p({ ...v,
                            currentAccessoryKey: t,
                            newState: { ...c().get(v, "newState", {}),
                                ...L.state,
                                ...e
                            }
                        })
                    };
                o().useEffect((() => {
                    P()
                }), [L.state]), o().useEffect((() => {
                    C()
                }), [f]);
                const T = (e, t) => {
                    L.setDimension(e, t)
                };
                return o().useEffect((() => {
                    O && T(O.key, O.val)
                }), [O]), N ? o().createElement(o().Suspense, {
                    fallback: i
                }, o().createElement(l, (0, s.A)({
                    accessoryKey: t,
                    clearSlotSelection: a,
                    dimensions: L.state.dimensions,
                    meta: I,
                    onChange: T,
                    handleStateChange: P,
                    part: E,
                    selectedProduct: L.state.selectedProduct,
                    selection: y,
                    selectionImage: L.state.selectionImage,
                    state: L.state,
                    hidePartnershipIcons: L.state.hidePartnershipIcons,
                    slotStatus: h,
                    uuid: _.current
                }, S))) : o().createElement(l, (0, s.A)({
                    accessoryKey: t,
                    clearSlotSelection: a,
                    dimensions: L.state.dimensions,
                    meta: I,
                    onChange: T,
                    part: E,
                    selectedProduct: L.state.selectedProduct,
                    selection: y,
                    selectionImage: L.state.selectionImage,
                    state: v,
                    hidePartnershipIcons: L.state.hidePartnershipIcons,
                    slotStatus: h,
                    uuid: _.current
                }, S))
            }

            function E(e) {
                let {
                    accessoryKey: t,
                    clearSlotSelection: l = c().noop,
                    dataToParse: r,
                    loadingFallback: d = o().Fragment,
                    onPartChange: m,
                    onSelectionChange: E,
                    onStateChange: y,
                    part: v,
                    selection: A,
                    state: h,
                    slotDataToParse: f,
                    slotStatus: N,
                    templateName: O,
                    updatesForSlot: S,
                    ..._
                } = e;
                const [C, I] = o().useState(!1), g = o().useRef(null), w = o().useRef(null);
                return o().useEffect((() => {
                    const e = (0, i.A)("accessory/useEffect");
                    !async function() {
                        try {
                            const [e, t] = await
                            function(e) {
                                const t = o().lazy((() => a(2478)(`${p[e]}/component`))),
                                    s = a(6946)(`${p[e]}/adapter`);
                                return Promise.all([t, s])
                            }(O), s = t => o().createElement(e, t);
                            g.current = s, w.current = t.default, I(!0)
                        } catch (t) {
                            e.error(t)
                        }
                    }()
                }), [O]), C ? o().createElement(n.A, null, o().createElement(u, (0, s.A)({
                    accessoryKey: t,
                    clearSlotSelection: l,
                    Component: g.current,
                    dataToParse: r,
                    loadingFallback: d,
                    onPartChange: m,
                    onSelectionChange: E,
                    onStateChange: y,
                    adapter: w.current,
                    part: v,
                    selection: A,
                    state: h,
                    slotDataToParse: f,
                    slotStatus: N,
                    updatesForSlot: S
                }, _))) : d
            }
        },
        705: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            const s = Object.freeze({
                HIDDEN: "hidden",
                DISABLED: "disabled",
                COMPLETE: "complete",
                ENABLED: "enabled"
            })
        },
        7732: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => E
            });
            var s = a(8168),
                l = a(1594),
                o = a.n(l),
                r = a(6942),
                c = a.n(r),
                i = a(2224),
                n = a.n(i),
                d = a(5911),
                p = a(6637),
                m = a(6273),
                u = a(4768);
            const E = e => {
                let {
                    content: t,
                    slotId: a,
                    disabled: l,
                    setShown: r,
                    fireButtonLinkMetrics: i = () => {}
                } = e;
                const {
                    assets: E
                } = (0, p.S)(), y = o().useId(), v = a || y, {
                    header: A,
                    subHeader: h,
                    learnMore: f,
                    compareCoverageOptions: N,
                    videoPreviewImg: O
                } = t, S = f ? "Learn more about AppleCare+" : "Compare coverage options", _ = n().get(E, "showMore", "Show more");
                return o().createElement(m.A, null, o().createElement("div", {
                    className: c()("rf-accessoryslot-decisionsection", {
                        "rf-accessoryslot-decisionsection-disabled": l
                    }),
                    "data-autom": `${a}_decisionsection`,
                    "data-trigger-click": v ? `click [data-relatedlink='${v}_link']` : void 0
                }, O && o().createElement("div", {
                    className: "rf-accessoryslot-decisionsection-image-wrapper"
                }, o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-decisionsection-image"
                }, (0, d.OH)(O))), o().createElement("span", {
                    className: "rf-accessoryslot-decisionsection-playcta"
                }, o().createElement("i", {
                    className: "icon icon-playsolid"
                }))), o().createElement("div", {
                    className: `rf-accessoryslot-decisionsection-details ${u.A.BODY_REDUCED}`
                }, o().createElement("div", {
                    className: "rf-accessoryslot-decisionsection-info"
                }, o().createElement("div", (0, s.A)({
                    id: v,
                    className: "rf-accessoryslot-decisionsection-header"
                }, (0, d.OH)(A))), o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-decisionsection-desc"
                }, (0, d.OH)(h))))), f && o().createElement("button", {
                    id: `${a}_learnmore_open`,
                    type: "button",
                    "data-relatedlink": v ? `${v}_link` : void 0,
                    "aria-labelledby": `${v}_showmore ${v}`,
                    "aria-describedby": `${v}_learnmore`,
                    className: "rf-accessoryslot-decisionsection-button",
                    "data-autom": `${a}_learnmore_link`,
                    onClick: () => {
                        i(S), r(!0)
                    },
                    "data-trigger-stoppropagation": !0,
                    disabled: l,
                    "aria-disabled": l,
                    tabIndex: l ? -1 : void 0
                }, o().createElement("span", (0, s.A)({
                    id: `${v}_showmore`,
                    className: "visuallyhidden"
                }, (0, d.OH)(_))), o().createElement("span", (0, s.A)({
                    id: `${v}_learnmore`,
                    className: "visuallyhidden"
                }, (0, d.OH)(f)))), N && o().createElement("button", {
                    id: `${a}_compare_coverage_options`,
                    type: "button",
                    "data-relatedlink": v ? `${v}_link` : void 0,
                    "aria-labelledby": `${v}_showmore ${v}`,
                    "aria-describedby": `${v}_comparecoverage`,
                    className: "rf-accessoryslot-decisionsection-button",
                    "data-autom": `${a}_compare_coverage_options_link`,
                    onClick: () => {
                        i(S), r(!0)
                    },
                    disabled: l,
                    "aria-disabled": l,
                    "data-trigger-stoppropagation": !0
                }, o().createElement("span", (0, s.A)({
                    id: `${v}_showmore`,
                    className: "visuallyhidden"
                }, (0, d.OH)(_))), o().createElement("span", (0, s.A)({
                    id: `${v}_comparecoverage`,
                    className: "visuallyhidden"
                }, (0, d.OH)(N))))))
            }
        },
        6699: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => M
            });
            var s = a(8168),
                l = a(1594),
                o = a.n(l),
                r = a(2224),
                c = a.n(r),
                i = a(6942),
                n = a.n(i),
                d = a(7213),
                p = a(5911),
                m = a(3151),
                u = a(6884),
                E = a(632),
                y = a(6637),
                v = a(1345),
                A = a(3471),
                h = a(9888),
                f = a(4768),
                N = a(705),
                O = a(283);
            const S = window.asMetrics,
                _ = e => {
                    S && S.fireMicroEvent({
                        eVar: "eVar6",
                        slot: "Step 1 - Link",
                        feature: e,
                        action: "selected"
                    })
                },
                C = () => {
                    if (S) {
                        const e = "",
                            t = `${"Step 1 - AppleCare+"}|${""}|${"Edit|Selected"}`;
                        S.sendUserInteraction({
                            name: t,
                            beacon: {
                                eVar6: `D=pageName+"|${e}|${t}"`
                            }
                        })
                    }
                };
            var I = a(3616);
            const g = o().lazy((() => a.e(553).then(a.bind(a, 1562)))),
                w = e => {
                    let {
                        playerRef: t,
                        loadModule: a,
                        transcript: r,
                        transcriptAssets: c,
                        sectionFooter: i,
                        id: n,
                        visible: d,
                        ...m
                    } = e;
                    return d && a ? o().createElement(l.Suspense, {
                        fallback: null
                    }, o().createElement(g, (0, s.A)({
                        id: n
                    }, m, {
                        onInit: e => {
                            t.current = e
                        }
                    })), i && o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-videofooter"
                    }, (0, p.OH)(i))), r && o().createElement(I.Rt, {
                        assets: c,
                        id: n,
                        showDownloadLink: !0
                    }, o().createElement("div", {
                        className: "row"
                    }, o().createElement("div", (0, s.A)({
                        className: "rf-videoplayer-transcript-content column large-12 small-12"
                    }, (0, p.OH)(r)))))) : null
                },
                L = e => {
                    let {
                        visible: t,
                        className: a,
                        transcript: r = null,
                        transcriptAssets: c = {},
                        ...i
                    } = e;
                    const [n, d] = (0, l.useState)(!1), p = (0, l.useRef)();
                    return (0, l.useLayoutEffect)((() => {
                        !n && t ? d(!0) : n && p.current && !t && (p.current.pause(), p.current.seek(0))
                    }), [t]), o().createElement(o().Fragment, null, o().createElement(w, (0, s.A)({
                        playerRef: p,
                        className: a,
                        loadModule: n,
                        visible: t,
                        transcriptAssets: c,
                        transcript: r
                    }, i)))
                },
                P = e => {
                    let {
                        accessory: t,
                        labels: a,
                        Tag: s = "td"
                    } = e;
                    return o().createElement(s, {
                        className: `rf-accessoryslot-coverageoptions-price ${f.A.CAPTION}`
                    }, o().createElement("span", (0, p.OH)(t.differentialPrice || a.includedText)))
                },
                T = e => {
                    let {
                        accessory: t,
                        Tag: a = "td"
                    } = e;
                    return t.overridePriceWithInstallment && t.installmentPrice ? o().createElement(a, {
                        className: `rf-accessoryslot-coverageoptions-price ${f.A.CAPTION}`
                    }, o().createElement("span", (0, p.OH)(t.installmentPrice))) : o().createElement(a, {
                        className: `rf-accessoryslot-coverageoptions-price ${f.A.CAPTION}`
                    }, o().createElement("span", (0, p.OH)(t.priceHtml)))
                },
                b = e => {
                    let {
                        sectionData: t,
                        assets: a,
                        visible: l,
                        labels: r,
                        isSingleAccessoryOverlayContent: c
                    } = e;
                    const {
                        viewport: i
                    } = (0, y.S)(), d = "small" === i;
                    return o().createElement("div", {
                        className: "rf-accessoryslot-coverageoptions-body"
                    }, a.slotOverlayVideo && o().createElement(o().Fragment, null, a.slotOverlayVideoHeader && o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-videoheader"
                    }, (0, p.OH)(a.slotOverlayVideoHeader))), a.slotOverlayVideoDescription && o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-videodescription"
                    }, (0, p.OH)(a.slotOverlayVideoDescription))), o().createElement("div", {
                        className: "rf-accessoryslot-coverageoptions-video"
                    }, o().createElement(L, (0, s.A)({}, a.slotOverlayVideo, {
                        visible: l
                    }))), a.slotOverlayVideoFooter && o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-videofooter"
                    }, (0, p.OH)(a.slotOverlayVideoFooter)))), a.slotOverlayHeader && o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-header"
                    }, (0, p.OH)(a.slotOverlayHeader))), o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-description"
                    }, (0, p.OH)(a.slotOverlayDescription))), !c && (d ? o().createElement("div", {
                        className: "rf-accessoryslot-coverageoptions-compareitem"
                    }, t.accessories.map((e => o().createElement(o().Fragment, {
                        key: `${e.id}_coverageoptions_item`
                    }, o().createElement("h3", (0, s.A)({
                        id: `${e.id}-coverageoption-item-subheading`,
                        className: "rf-accessoryslot-coverageoptions-subheading"
                    }, (0, p.OH)(e.title))), e.iupAccessory ? o().createElement(P, {
                        accessory: e,
                        labels: r,
                        Tag: "div"
                    }) : o().createElement(T, {
                        accessory: e,
                        Tag: "div"
                    }), e.descriptionHtml && o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-descriptionlist"
                    }, (0, p.OH)(e.descriptionHtml))))))) : o().createElement("table", {
                        className: "rf-accessoryslot-coverageoptions-table"
                    }, a.slotOverlayTableHeaderHiddenText && o().createElement("caption", (0, s.A)({
                        className: "visuallyhidden"
                    }, (0, p.OH)(a.slotOverlayTableHeaderHiddenText))), o().createElement("thead", {
                        className: "rf-accessoryslot-coverageoptions-tableheader"
                    }, o().createElement("tr", null, o().createElement("th", null, a.slotOverlayTableHeaderHiddenText && o().createElement("span", (0, s.A)({
                        className: "visuallyhidden"
                    }, (0, p.OH)(a.slotOverlayTableHeaderHiddenText)))), t.accessories.map((e => o().createElement("th", {
                        key: `${e.id}_coverageoptions_title`
                    }, e.title && o().createElement("span", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-subheading"
                    }, (0, p.OH)(e.title)))))))), o().createElement("tbody", {
                        className: "rf-accessoryslot-coverageoptions-tablebody"
                    }, o().createElement("tr", null, o().createElement("td", null), t.accessories.map((e => o().createElement(o().Fragment, {
                        key: `${e.id}_coverageoptions_price`
                    }, e.iupAccessory && o().createElement(P, {
                        accessory: e,
                        labels: r
                    }), !e.iupAccessory && o().createElement(T, {
                        accessory: e
                    })))))), o().createElement("tbody", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-tablecontent"
                    }, (0, p.OH)(a.slotOverlayContent))))), o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-subdescription"
                    }, (0, p.OH)(a.slotOverlaySubDescription))), o().createElement("div", (0, s.A)({
                        className: n()("rf-accessoryslot-coverageoptions-learnmore", d ? f.A.CAPTION : f.A.BODY_REDUCED_TIGHT)
                    }, (0, p.OH)(a.slotOverlayLearnMore))), o().createElement("div", (0, s.A)({
                        className: "rf-accessoryslot-coverageoptions-footer"
                    }, (0, p.OH)(a.slotOverlayFooter))))
                };
            var H = a(8552);
            const R = e => {
                let {
                    title: t,
                    text: a,
                    price: r,
                    description: i,
                    priceDescription: n,
                    iptText: d,
                    slotDataToParse: m,
                    showSummaryView: u,
                    handleSelectionEdit: E = () => {},
                    setTrayOpen: y,
                    editButtonFocusRef: v
                } = e;
                const A = (0, l.useRef)(null),
                    h = c().get(m, "stepData.labels", {});
                return (0, l.useEffect)((() => {
                    const {
                        current: e
                    } = A;
                    e && u && v.current && e.focus(), y(!1)
                }), [u]), o().createElement("div", {
                    className: "rf-accessoryslot-fullwidth-quote"
                }, o().createElement("div", {
                    className: "row"
                }, o().createElement("div", {
                    className: "columnn large-9 small-12 rf-accessoryslot-fullwidth-quote-header"
                }, o().createElement("span", (0, s.A)({
                    "aria-hidden": "true",
                    className: "as-svgicon-container rf-accessoryslot-fullwidth-quote-icon"
                }, (0, p.OH)(H))), o().createElement("div", null, o().createElement("div", {
                    className: `rf-accessoryslot-fullwidth-quote-label ${f.A.BODY}`,
                    "data-autom": "accessoryslot-quote-label"
                }, t && o().createElement("span", (0, p.OH)(t))), o().createElement("div", {
                    className: `rf-accessoryslot-fullwidth-quote-option ${f.A.BODY}`,
                    "data-autom": "accessoryslot-quote-text"
                }, a && o().createElement("span", (0, p.OH)(a))), o().createElement("div", {
                    className: "rf-accessoryslot-fullwidth-quote-price",
                    "data-autom": "accessoryslot-quote-price"
                }, r && o().createElement("span", (0, p.OH)(r))), o().createElement("div", {
                    className: `rf-accessoryslot-fullwidth-quote-desc ${f.A.CAPTION}`
                }, i && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-fullwidth-quote-desc-list"
                }, (0, p.OH)(i)))), n && o().createElement("div", (0, s.A)({
                    className: `rf-accessoryslot-fullwidth-quote-pricedesc ${f.A.CAPTION}`
                }, (0, p.OH)(n))), d && o().createElement("div", (0, s.A)({
                    className: `rf-accessoryslot-fullwidth-quote-ipttext ${f.A.CAPTION}`
                }, (0, p.OH)(d))))), o().createElement("div", {
                    className: "columnn large-3 small-12 rf-accessoryslot-fullwidth-quote-action"
                }, o().createElement("button", {
                    type: "button",
                    "data-autom": "accessoryslot-edit-link",
                    className: `as-buttonlink ${f.A.BODY}`,
                    onClick: E,
                    ref: A
                }, o().createElement("span", (0, p.OH)(h.editText || "Edit")), t && o().createElement("span", (0, s.A)({
                    className: "visuallyhidden"
                }, (0, p.OH)(t)))))))
            };
            var D = a(7732);

            function M(e) {
                let {
                    clearSlotSelection: t,
                    meta: {
                        accessoryKey: a,
                        header: r,
                        isNoneSelected: i,
                        noAppleCareCoverage: S,
                        showNoneOption: I,
                        acDecisionSupportTitle: g,
                        acDecisionSupportDescription: w,
                        acDecisionSupportVideoPreviewImage: P,
                        showNoAppleCareCoverageLast: T,
                        disableAppleCareAutoSelection: H,
                        headerLearnMoreText: M,
                        headerCompareCoverageOptionsText: V,
                        footerLearnMoreText: $,
                        footerCompareCoverageOptionsText: k,
                        sectionsWithAccessories: F,
                        overlay: U = {},
                        labels: Y
                    },
                    onPartChange: W,
                    onSelectionChange: x,
                    onStateChange: B,
                    disabled: q,
                    sections: K,
                    slotId: G,
                    state: z,
                    slotDataToParse: j = {},
                    slotStatus: Q,
                    updatesForSlot: J,
                    iup: X,
                    slotRef: Z,
                    resetAccessoryOnPoChange: ee,
                    handleOnDrawerOpen: te = () => {}
                } = e;
                const [ae, se] = (0, l.useState)(!1), [le, oe] = (0, l.useState)(!H && (i || "none" === z.placeHolder)), re = c().get(U, "sectionsWithAccessories[0].accessoriesLength", 0) > 1 ? "accessoryslot-inlinetile" : G, [ce, ie] = (0, l.useState)(!1), [ne, de] = (0, l.useState)(!0), [pe, me] = (0, l.useState)(!1), [ue, Ee] = (0, l.useState)({}), [ye, ve] = (0, l.useState)(!1), Ae = (0, l.useRef)(null), {
                    viewport: he,
                    assets: fe
                } = (0, y.S)(), Ne = "small" === he, Oe = c().some(z.sections, (e => c().some(e.accessories, (e => !!e.part)))), Se = c().get(F, "0.accessoriesLength", 1), {
                    purchaseOption: _e,
                    showPoMoreOption: Ce
                } = ee || {}, Ie = (0, l.useMemo)((() => {
                    let e = Se;
                    return c().get(K, "[0].accessoryDataList", []).forEach((t => {
                        const a = c().get(t, "options.eligiblePurchaseOptions", []);
                        c().isEmpty(a) || a ? .includes(_e) || (e -= 1)
                    })), I ? e + 1 : e
                }), [K]), ge = c().get(window, "NAMED_ASSETS.isColdStateEnabled", !1), we = c().get(window, "pageLevelData.chat.chatContent", {}), Le = we ? o().createElement("div", {
                    className: "rf-accessory-inlinetile-applecare-chat-footer"
                }, o().createElement(h.A, {
                    data: we,
                    withExternalIcon: !0
                })) : o().createElement("div", (0, s.A)({
                    className: "rf-accessory-inlinetile-applecare-chat-footer"
                }, (0, p.OH)(U.chatFeatureHtml))), Pe = (0, m.A)(Q), Te = (0, m.A)(_e), be = (0, m.A)(Ce), He = (0, l.useRef)(i), Re = () => {
                    c().isEmpty(He) || (He.current = !0)
                }, De = Q === N.A.HIDDEN || !ge && Q === N.A.DISABLED || !Q;
                o().useEffect((() => {
                    De || window.asMetrics ? .update()
                }), [De]), (0, l.useEffect)((() => {
                    oe(i)
                }), [i]), (0, l.useEffect)((() => {
                    "none" === z.placeHolder && (z.noAppleCareClicked || !H || i ? oe(!0) : oe(!1))
                }), [z.placeHolder, z.noAppleCareClicked, H]), (0, l.useEffect)((() => {
                    de(!(Oe && !c().isEmpty(ue))), c().isEmpty(ue) || ve(!0)
                }), [Oe, ue]), (0, l.useEffect)((() => {
                    Te !== _e || be !== Ce || (Pe === N.A.COMPLETE || le) && Q === N.A.HIDDEN ? (t({
                        placeHolder: "none"
                    }), me(!1), ie(!1), Ee({})) : Q === N.A.HIDDEN && ce && ie(!1)
                }), [_e, Ce, Q]);
                const Me = (0, m.A)(ce ? z.placeHolder : null),
                    Ve = () => !X && o().createElement(A.Ay, (0, s.A)({
                        id: `${G}_noapplecare`,
                        checked: le,
                        withAriaLabeledBy: !0,
                        "data-autom": `${G}_noapplecare`,
                        disabled: q,
                        "aria-hidden": q,
                        tag: "div",
                        name: G,
                        classes: {
                            root: `column large-${12/Ie} small-12 rf-accessory-applecare-fullwidth-option`,
                            label: "rf-accessory-noapplecare-fullwidth-selector-label"
                        }
                    }, (0, v.b)((() => {
                        t({
                            placeHolder: "none",
                            noAppleCareClicked: !0
                        }), oe(!0), ie(!1)
                    }), !0)), o().createElement(E._V, {
                        text: S
                    })),
                    $e = () => Oe && ye && o().createElement("div", {
                        className: `rf-accessoryslot-fullwidthtile-collapse ${f.A.BODY}`
                    }, o().createElement("button", {
                        type: "button",
                        className: "as-buttonlink rf-accessoryslot-fullwidthtile-collapse-button",
                        "data-autom": `${G}_collapseButton`,
                        onClick: () => (ie(!1), void setTimeout((() => {
                            de(!1)
                        }), 400))
                    }, o().createElement("span", (0, p.OH)(fe.collapse || "Collapse")), o().createElement("span", {
                        className: "icon icon-after icon-chevronup rf-accessoryslot-fullwidthtile-collapse-icon"
                    }))),
                    ke = Q === N.A.HIDDEN;
                return o().createElement("div", {
                    ref: Z,
                    "data-step-hidden": !!ke || void 0,
                    "data-analytics-section": ke ? void 0 : "applecare",
                    "data-autom": ke ? void 0 : "applecare"
                }, o().createElement("div", {
                    className: n()("rf-accessoryslot-fullwidthtile", {
                        "rf-accessoryslot-fullwidthtile-hidden": De,
                        "rf-accessoryslot-fullwidthtile-shown": !De
                    }),
                    role: "region",
                    "aria-labelledby": a
                }, o().createElement("div", {
                    className: n()("row", {
                        "rf-accessoryslot-fullwidthtile-disabled": Q === N.A.DISABLED || !Q,
                        "rf-accessoryslot-fullwidthtile-enabled": Q === N.A.ENABLED,
                        "rf-accessoryslot-fullwidthtile-complete": Q === N.A.COMPLETE
                    })
                }, o().createElement("div", {
                    className: "rf-accessoryslot-fullwidthtile-column-left"
                }, o().createElement("h2", (0, s.A)({
                    className: n()("rf-accessoryslot-fullwidthtile-heading", Ne ? f.A.MANIFESTO : f.A.EYEBROW),
                    id: "rf-accessoryslot-fullwidthtile-heading-label",
                    tabIndex: -1,
                    ref: Ae
                }, (0, p.OH)(r))), o().createElement(d.A, {
                    className: "rf-accessoryslot-fullwidthtile-content",
                    in: ne,
                    onEnter: () => ie(!0),
                    onExited: () => {
                        ie(!1), me(!0)
                    }
                }, o().createElement(E.c6, {
                    name: "inlinetile-options",
                    key: "inlinetile-options",
                    "aria-labelledby": "rf-accessoryslot-fullwidthtile-heading-label"
                }, K.map((e => o().createElement("div", {
                    key: e.id,
                    className: n()("row", {
                        "rf-accessory-applecare-fullwidth-trayopen": ce && Me && !Ne
                    })
                }, I && !T && Ve(), e.accessoryDataList.map((a => o().createElement(o().Fragment, {
                    key: a.options.accessoryKey
                }, o().createElement(O.A, {
                    accessoryKey: a.accessoryKey,
                    clearSlotSelection: t,
                    dataToParse: a,
                    templateName: a.templateName,
                    loadingFallback: o().createElement("div", null),
                    onPartChange: W(e),
                    onSelectionChange: x(e),
                    onStateChange: B(e),
                    part: z.sections[e.id].accessories[a.accessoryKey].part,
                    selection: z.sections[e.id].accessories[a.accessoryKey].selection,
                    state: z,
                    slotDataToParse: j,
                    slotStatus: Q,
                    updatesForSlot: J,
                    itemsPerRowLarge: Ie,
                    trayOpen: ce,
                    setTrayOpen: ie,
                    setSelectedOption: Ee,
                    setSelectNoAppleCare: oe,
                    accAdded: Oe,
                    renderCollapseButton: $e,
                    handleOnDrawerOpen: te,
                    onSelectionComplete: Re,
                    purchaseOption: _e
                })))), I && T && Ve())))), !Ne && $e()), o().createElement(d.A, { in: pe,
                    onExited: () => {
                        de(!0), He.current = !0
                    },
                    className: "rf-accessoryslot-fullwidthtile-summary"
                }, o().createElement(R, {
                    title: ue.title,
                    price: ue.price,
                    text: ue.text,
                    description: ue.description,
                    priceDescription: ue.priceDescription,
                    iptText: ue.iptText,
                    slotDataToParse: j,
                    showSummaryView: pe,
                    handleSelectionEdit: () => {
                        me(!1), setTimeout((() => {
                            const {
                                current: e
                            } = Ae;
                            e && e.focus && e.focus()
                        }), 100), C()
                    },
                    setTrayOpen: ie,
                    editButtonFocusRef: He
                }))), o().createElement("div", {
                    className: "rf-accessoryslot-fullwidthtile-column-right"
                }, o().createElement("div", {
                    className: "rf-accessoryslot-fullwidthtile-decision-support"
                }, o().createElement(D.A, {
                    slotId: G,
                    content: {
                        header: g,
                        subHeader: w,
                        videoPreviewImg: P,
                        learnMore: M || $,
                        compareCoverageOptions: V || k
                    },
                    disabled: Q === N.A.DISABLED || !Q,
                    setShown: se,
                    fireButtonLinkMetrics: _
                })))), o().createElement(u.A, {
                    visible: ae,
                    onClose: () => se(!1),
                    classes: {
                        root: "rf-accessoryslot-fullwidthtile-overlay",
                        content: "rf-accessoryslot-fullwidthtile-overlay-content"
                    },
                    ariaLabel: `${re}_overlay-labelledby`,
                    "data-autom": `${G}_overlay`,
                    footerContent: Le,
                    "data-analytics-content-id": G,
                    "data-analytics-link-region": "selectionarea"
                }, o().createElement("div", {
                    className: "rf-accessoryslot-fullwidthtile-overlay-body"
                }, U.imageHtml && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-fullwidthtile-overlay-image"
                }, (0, p.OH)(U.imageHtml))), U.sectionsWithAccessories && U.sectionsWithAccessories.map((e => e.accessoriesLength > 1 || U.showCompareCoverage ? o().createElement(b, {
                    sectionData: e,
                    assets: U.compareCoverageAssets,
                    key: `${G}_${e.id}`,
                    visible: ae,
                    labels: Y,
                    isSingleAccessoryOverlayContent: U.showCompareCoverage
                }) : o().createElement("div", {
                    id: `${G}_${e.id}_overlay`,
                    key: `${G}_${e.id}_overlay`
                }, e.accessories.map((t => o().createElement(o().Fragment, {
                    key: `${G}_${e.id}_${t.id}_overlay`
                }, o().createElement("h2", (0, s.A)({
                    className: "rf-accessoryslot-inlinetile-overlay-header",
                    id: `${re}_overlay-labelledby`
                }, (0, p.OH)(t.title))), t.iptText && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-inlinetile-overlay-ipttext"
                }, (0, p.OH)(t.iptText))), t.descriptionHtml && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-inlinetile-overlay-description"
                }, (0, p.OH)(t.descriptionHtml))), t.infoGraphicHtml && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-inlinetile-overlay-infoGraphic"
                }, (0, p.OH)(t.infoGraphicHtml))), U.compareCoverageAssets.slotOverlayVideoHeader && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-coverageoptions-videoheader"
                }, (0, p.OH)(U.compareCoverageAssets.slotOverlayVideoHeader))), U.compareCoverageAssets.slotOverlayVideoDescription && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-coverageoptions-videodescription"
                }, (0, p.OH)(U.compareCoverageAssets.slotOverlayVideoDescription))), U.compareCoverageAssets.slotOverlayVideo && o().createElement("div", {
                    className: "rf-accessoryslot-coverageoptions-video"
                }, o().createElement(L, (0, s.A)({}, U.compareCoverageAssets.slotOverlayVideo, {
                    visible: ae
                }))), U.compareCoverageAssets.slotOverlayVideoFooter && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-coverageoptions-videofooter"
                }, (0, p.OH)(U.compareCoverageAssets.slotOverlayVideoFooter))), t.learnMoreHtml && o().createElement("div", (0, s.A)({
                    className: "rf-accessoryslot-inlinetile-overlay-learnmore"
                }, (0, p.OH)(t.learnMoreHtml)))))))))))))
            }
        }
    }
]);