/*! 2.27.5 | BH: 82084e3aac5616ae8770 | CH: 88800c9b6c */
/*! License information is available at licenses.txt */
"use strict";
(self.webpackChunkrs_iphone = self.webpackChunkrs_iphone || []).push([
    [5882], {
        3709: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var r = a(8168),
                n = a(1594),
                i = a.n(n),
                s = a(6942),
                o = a.n(s),
                c = a(7213),
                l = a(7923);
            const p = e => {
                    let {
                        visible: t,
                        view: a,
                        ...n
                    } = e;
                    return i().createElement(c.A, (0, r.A)({ in: t,
                        timeout: 800,
                        className: o()(["rf-bfe-spinner", `rf-bfe-spinner-${a}`]),
                        classNames: "rf-bfe-spinner",
                        mountOnEnter: !0,
                        unmountOnExit: !0
                    }, n), i().createElement("div", {
                        className: "waitindicator waitindicator40-blue"
                    }))
                },
                d = e => {
                    let {
                        disableAnimate: t = !1,
                        visible: a,
                        isSpinnerVisible: n,
                        view: s,
                        className: d,
                        children: m,
                        rest: u
                    } = e;
                    const [f, h] = (0, l.A)({});
                    return i().createElement(i().Fragment, null, i().createElement(p, {
                        visible: n,
                        view: s
                    }), i().createElement(c.A, (0, r.A)({
                        className: o()(["r-in-view-transition", d]),
                        classNames: "r-in-view-transition",
                        ref: f,
                        in: !!t || h && a,
                        timeout: 400
                    }, u), m))
                }
        },
        7282: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => fe
            });
            var r = a(8168),
                n = a(1594),
                i = a.n(n),
                s = a(6942),
                o = a.n(s),
                c = a(2224),
                l = a.n(c),
                p = (a(1632), a(6637)),
                d = a(1265),
                m = a(246),
                u = a(5911),
                f = a(2957);
            const h = i().createContext({}),
                E = () => {
                    const e = i().useContext(h);
                    if (!e) throw new Error("PurchaseOption compound components cannot be rendered outside the BfePurchaseOptions component");
                    return e
                };
            var b = a(7213),
                O = a(6777),
                g = a(818);
            const {
                CARRIER_INSTALLMENT_PLANS: A
            } = g.A, y = e => {
                let {
                    value: t,
                    groupType: a,
                    cppart: r,
                    foundData: n,
                    validPurchaseOptions: i
                } = e, s = !1;
                return n.length < 1 || i[t] === a && (t === A ? n.find((e => e.cppart === r)) && (s = !0) : s = !0), s
            }, v = (e, t) => !!t.find((t => t === e));
            var N = a(4768);
            const P = e => {
                let {
                    shouldShow: t,
                    summaryData: a = {},
                    paymentOptionsAllyTxt: s,
                    onEditSelection: c,
                    editLabel: p,
                    adjustHeight: d = () => {}
                } = e;
                const {
                    isMow: m,
                    headerRef: f,
                    data: {
                        namedAssets: h
                    }
                } = E(), {
                    logoImage: g,
                    imageHtml: A,
                    price: y,
                    summaryHeader: v,
                    summarySubHeader: P,
                    summaryDescription: D,
                    summaryFooter: C,
                    summarySubFooter: S,
                    showTradeInDisclaimer: H,
                    highValueTradeIn: T
                } = a, w = (0, n.useRef)(null);
                return i().createElement(b.A, { in: t,
                    timeout: 400,
                    className: "rf-po-bfe-purchaseoptionssummary-transition",
                    onEnter: e => {
                        const t = m ? 0 : (e => {
                                if (e) {
                                    const t = window.getComputedStyle(e),
                                        a = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                                        {
                                            height: r
                                        } = e.getBoundingClientRect();
                                    return Math.ceil(r + a)
                                }
                                return 0
                            })(f.current),
                            a = e.getBoundingClientRect().height;
                        d(a + t)
                    },
                    onEntered: () => {
                        d("auto"), setTimeout((() => {
                            w.current.focus()
                        }), 100)
                    }
                }, i().createElement("div", {
                    className: "rf-po-bfe-purchaseoptionssummary"
                }, g && i().createElement("div", {
                    className: "rf-po-bfe-purchaseoptionssummary-image"
                }, i().createElement(O.Ay, {
                    data: g,
                    alt: ""
                })), A && i().createElement("div", (0, r.A)({
                    className: "rf-po-bfe-purchaseoptionssummary-image"
                }, (0, u.OH)(A))), i().createElement("div", {
                    className: "rf-po-bfe-purchaseoptionssummary-info"
                }, v && i().createElement("div", (0, r.A)({
                    className: `rf-purchaseoptionssummary-title ${N.A.BODY}`
                }, (0, u.OH)(v))), i().createElement("div", (0, r.A)({
                    className: `rf-po-bfe-purchaseoptionssummary-price ${N.A.BODY}`
                }, (0, u.OH)(y))), P && i().createElement("div", (0, r.A)({
                    className: `rf-po-bfe-purchaseoptionssummary-subheader ${N.A.CAPTION}`
                }, (0, u.OH)(P))), D && i().createElement("div", (0, r.A)({
                    className: `rf-po-bfe-purchaseoptionssummary-description ${N.A.CAPTION}`
                }, (0, u.OH)(D))), T && i().createElement("div", (0, r.A)({
                    className: "rf-po-bfe-purchaseoptionssummary-tradeininfo"
                }, (0, u.OH)(l().get(h, "highValueTradeinText")))), C && i().createElement("div", (0, r.A)({
                    className: o()(`rf-po-bfe-purchaseoptionssummary-footer ${N.A.CAPTION}`, {
                        "rf-po-bfe-tradein-creditnote-hide": !H
                    })
                }, (0, u.OH)(C))), S && i().createElement("div", (0, r.A)({
                    className: `rf-po-bfe-purchaseoptionssummary-subfooter ${N.A.CAPTION}`
                }, (0, u.OH)(S)))), i().createElement("div", {
                    className: `rf-po-bfe-purchaseoptionssummary-edit ${N.A.BODY}`
                }, i().createElement("button", {
                    type: "button",
                    onClick: c,
                    className: "as-buttonlink",
                    ref: w,
                    "data-autom": "purchaseoption-edit-link"
                }, i().createElement("span", (0, u.OH)(p)), i().createElement("span", (0, r.A)({
                    className: "visuallyhidden"
                }, (0, u.OH)(v || ""))), i().createElement("span", (0, r.A)({
                    className: "visuallyhidden"
                }, (0, u.OH)(s || "")))))))
            };
            var D = a(632),
                C = a(2019);
            const S = e => {
                    let {
                        className: t,
                        children: a,
                        groupSize: n = 2,
                        ...s
                    } = e;
                    const {
                        isMow: c
                    } = E(), l = c ? D.gW : D.sY;
                    return i().createElement("div", {
                        className: o()(["rf-po-bfe-dimension-base", `rf-po-bfe-dimension-base-size-${n}`])
                    }, i().createElement(l, (0, r.A)({
                        className: o()(["rf-po-bfe-dimension-base-option", t]),
                        classes: {
                            label: "rf-po-bfe-dimension-base-label"
                        }
                    }, s), a))
                },
                H = e => {
                    let {
                        title: t,
                        subTitle: a,
                        price: n,
                        addonPrice: s,
                        footer: c,
                        violator: p,
                        value: d,
                        showTradeInDisclaimer: m,
                        subSectionHeader: f,
                        subSectionItems: h,
                        highValueTradeIn: b,
                        groupSize: O,
                        ...g
                    } = e;
                    const {
                        view: A,
                        data: {
                            namedAssets: y
                        }
                    } = E();
                    return i().createElement("div", {
                        className: o()(["rf-po-bfe-purchasegroupoption-container", `rf-po-bfe-purchasegroupoption-${O}`])
                    }, i().createElement(S, (0, r.A)({
                        className: o()(["rf-po-bfe-purchasegroupoption", `rf-po-bfe-purchasegroupoption-${A}`]),
                        value: d,
                        groupSize: O
                    }, g), "right-rail" === A ? i().createElement(i().Fragment, null, i().createElement("span", {
                        className: "large-12"
                    }, i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-dimension-base-title"
                    }, (0, u.OH)(t))), a && i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-dimension-base-subtitle"
                    }, (0, u.OH)(a))), i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-price large-12",
                        "data-autom": `purchaseGroupOption${d}_price`
                    }, (0, u.OH)(n))), s && i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-addonprice large-12",
                        "data-autom": `purchaseGroupOption${d}_addonprice`
                    }, (0, u.OH)(s)))), b && i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-tradeininfo"
                    }, (0, u.OH)(l().get(y, "highValueTradeinText")))), c && i().createElement("div", {
                        className: "rf-po-bfe-dimension-base-detail large-12"
                    }, i().createElement("div", {
                        className: "as-form-choiceselectordesc-list"
                    }, p && i().createElement("span", (0, r.A)({
                        className: "as-form-choiceselectordesc-listitem"
                    }, (0, u.OH)(p))), i().createElement("div", (0, u.OH)(c))))) : i().createElement(i().Fragment, null, p && i().createElement(C.A, (0, r.A)({
                        frameless: !0,
                        reduced: !0,
                        className: "rf-po-bfe-purchasegroupoption-violator"
                    }, (0, u.OH)(p))), i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-dimension-base-title"
                    }, (0, u.OH)(t))), Array.isArray(n) ? n.map((e => i().createElement("span", (0, r.A)({
                        key: e,
                        className: "rf-po-bfe-purchasegroupoption-price",
                        "data-autom": `purchaseGroupOption${d}_price`
                    }, (0, u.OH)(e))))) : i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-price",
                        "data-autom": `purchaseGroupOption${d}_price`
                    }, (0, u.OH)(n))), h && f && i().createElement("div", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-subsection-header"
                    }, (0, u.OH)(f))), h && i().createElement("div", {
                        className: "rf-po-bfe-purchasegroupoption-subsection-list"
                    }, h.map(((e, t) => i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-subsection-listitem"
                    }, (0, u.OH)(e), {
                        key: `section_${t.toString()}`
                    }))))), b && i().createElement("span", (0, r.A)({
                        className: "rf-po-bfe-purchasegroupoption-tradeininfo"
                    }, (0, u.OH)(l().get(y, "highValueTradeinText")))), c && i().createElement("span", (0, r.A)({
                        className: o()("rf-po-bfe-dimension-base-detail", {
                            "rf-po-bfe-tradein-creditnote-hide": !m
                        })
                    }, (0, u.OH)(c))))))
                };
            var T = a(840),
                w = a(791),
                _ = a(3100),
                $ = a(6884),
                I = a(9888),
                R = a(3808),
                B = a(5284),
                k = a(2684);
            const G = Object.freeze({
                    OPEN_OVERLAY: 1,
                    CLOSE_OVERLAY: 2
                }),
                L = (e, t) => {
                    switch (t.type) {
                        case G.OPEN_OVERLAY:
                            return { ...e,
                                ...t.payload,
                                showOverlay: !0
                            };
                        case G.CLOSE_OVERLAY:
                            return { ...e,
                                showOverlay: !1
                            };
                        default:
                            return { ...e
                            }
                    }
                },
                Y = e => {
                    const [t, a] = (0, n.useReducer)(L, {
                        showOverlay: !1
                    });
                    return {
                        state: t,
                        handleOpenOverlay: t => {
                            const r = {},
                                n = document.querySelector("body").classList.contains("as-buyflowmessages-applycompleted") ? 1 : e;
                            e && (r.bfil = n);
                            (e => {
                                const t = (0, R.A)("usePaymentOverlay/fetchOverlayData");
                                return (0, B.hI)(e).then((e => l().get(e, "body", {}))).catch((e => t.error(e)))
                            })(k.k0(t, l().omitBy(r, (e => null == e)))).then((e => a({
                                type: G.OPEN_OVERLAY,
                                payload: e
                            })))
                        },
                        handleCloseOverlay: () => {
                            a({
                                type: G.CLOSE_OVERLAY
                            })
                        }
                    }
                },
                U = e => {
                    let {
                        offer: t,
                        footnotes: a
                    } = e;
                    const {
                        viewport: n,
                        assets: s
                    } = (0, p.S)(), c = "small" === n;
                    return i().createElement("div", {
                        className: o()("rf-po-bfe-paymentoptions-content", {
                            "rf-po-bfe-paymentoptions-nofootnotes": !a
                        })
                    }, i().createElement("div", {
                        className: "rf-po-bfe-paymentoptions-plancolumn"
                    }, i().createElement("div", {
                        className: "rf-po-bfe-paymentoptions-plans"
                    }, t.map((e => {
                        const t = l().get(e, "sectionData", []);
                        return i().createElement("div", {
                            className: o()("rf-po-bfe-paymentoptions-plan", {
                                "rf-po-bfe-paymentoptions-plan-multioffer": t.length > 1
                            }),
                            key: `paymentoptions-plan-${e.title}`
                        }, i().createElement("div", {
                            className: "rf-po-bfe-paymentoptions-planlist-header rf-po-bfe-paymentoptions-offertype"
                        }, i().createElement("h3", (0, r.A)({
                            className: o()("rf-po-bfe-paymentoptions-offertype-text", {
                                [d.A.LABEL]: c,
                                [d.A.BODY_TIGHT]: !c
                            }),
                            id: e.section
                        }, (0, u.OH)(e.title)))), i().createElement("div", {
                            className: "rf-po-bfe-paymentoptions-planlist-container"
                        }, t.map(((e, t) => {
                            const a = l().get(e.discount, "discountPrice", ""),
                                n = l().get(e.discount, "discountText", ""),
                                s = l().get(e.discount, "discountDescription", "");
                            return i().createElement("div", {
                                key: `paymentoptions-plans-tablecolumn-${t.toString()}`,
                                className: o()("rf-po-bfe-paymentoptions-planlist")
                            }, e.productName && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offerproductname ${d.A.BODY_TIGHT}`
                            }, (0, u.OH)(e.productName))), e.planName && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offerplan ${d.A.BODY_REDUCED_TIGHT}`
                            }, (0, u.OH)(e.planName))), e.header && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offerheader ${d.A.EYEBROW_REDUCED}`
                            }, (0, u.OH)(e.header))), e.subHeader && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offersubheader ${d.A.CAPTION}`
                            }, (0, u.OH)(e.subHeader))), e.totalAmountFinanced && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offerprice ${d.A.EYEBROW_REDUCED}`
                            }, (0, u.OH)(e.totalAmountFinanced))), e.apr && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offerapr ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.apr))), e.description && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-offerdescription ${d.A.CAPTION}`
                            }, (0, u.OH)(e.description))), e.creditPrice && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditprice ${d.A.LABEL}`
                            }, (0, u.OH)(e.creditPrice))), e.creditPriceDescription && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditpricedescription ${d.A.BODY_REDUCED_TIGHT}`
                            }, (0, u.OH)(e.creditPriceDescription))), e.creditTradeInPrice && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-credittradeinprice ${d.A.LABEL}`
                            }, (0, u.OH)(e.creditTradeInPrice))), e.creditDevice && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditdevice ${d.A.BODY_REDUCED_TIGHT}`
                            }, (0, u.OH)(e.creditDevice))), e.creditBreakDownHeader && i().createElement("h4", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditheader ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.creditBreakDownHeader))), e.creditBreakDownHero && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditbreakdownhero ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.creditBreakDownHero))), e.creditBreakDownPlan && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditbreakdownplan ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.creditBreakDownPlan))), e.creditBreakDownTitle && i().createElement("div", (0, r.A)({
                                className: "rf-po-bfe-paymentoptions-credittitle"
                            }, (0, u.OH)(e.creditBreakDownTitle))), e.creditBreakDownPrice && i().createElement("div", (0, r.A)({
                                className: "rf-po-bfe-paymentoptions-creditbreakdownprice"
                            }, (0, u.OH)(e.creditBreakDownPrice))), e.instantCreditPrice && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-instantcreditprice ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.instantCreditPrice))), e.billCreditPrice && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-billcreditprice ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.billCreditPrice))), e.creditDescription && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-creditdescription ${d.A.CAPTION}`
                            }, (0, u.OH)(e.creditDescription))), e.staticPromoDealDescription && i().createElement("div", (0, r.A)({
                                className: "rf-po-bfe-paymentoptions-staticpromodealdescription"
                            }, (0, u.OH)(e.staticPromoDealDescription))), a && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-discountprice ${d.A.EYEBROW_REDUCED}`
                            }, (0, u.OH)(a))), n && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-discounttext ${d.A.BODY_REDUCED_TIGHT}`
                            }, (0, u.OH)(n))), s && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-discountdescription ${d.A.CAPTION}`
                            }, (0, u.OH)(s))), e.didYouKnowHeader && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-didyouknowheader ${d.A.BODY_TIGHT}`
                            }, (0, u.OH)(e.didYouKnowHeader))), e.didYouKnowDescription && i().createElement("div", (0, r.A)({
                                className: "rf-po-bfe-paymentoptions-didyouknowdescription"
                            }, (0, u.OH)(e.didYouKnowDescription))), e.benefitsDescription && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-benefitsdescription ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.benefitsDescription))), e.dealsDescription && i().createElement("div", (0, r.A)({
                                className: `rf-po-bfe-paymentoptions-dealdescription ${d.A.BODY_REDUCED}`
                            }, (0, u.OH)(e.dealsDescription))))
                        }))))
                    })))), a && i().createElement(i().Fragment, null, i().createElement("h3", {
                        className: "visuallyhidden"
                    }, l().get(s, "footnotes")), i().createElement("div", (0, r.A)({
                        className: `rf-po-bfe-paymentoptions-offerfooter ${d.A.CAPTION}`
                    }, (0, u.OH)(a)))))
                };
            var V = a(4067),
                F = a(9138);
            const x = Object.freeze({
                    PO_OVERLAY_V2: "2",
                    CREDIT_BREAKDOWN: "creditBreakdown",
                    CARRIER_PREAMBLE: "carrierPreamble",
                    PREAMBLE: "preamble",
                    BENEFITS: "benefits",
                    HOW_IT_WORKS: "howItWorks",
                    CREDITS_AND_DISCOUNTS: "creditsAndDiscounts"
                }),
                M = e => {
                    let {
                        sectionData: t = {}
                    } = e;
                    const {
                        costWithoutCredit: a,
                        instantTradeInCredit: n,
                        estimatedCost: s,
                        totalAmountFinanced: o,
                        nonTradeInCredit: c,
                        tradeInBillCredit: p,
                        title: d,
                        additionalCredits: m
                    } = t;
                    return i().createElement("div", {
                        className: "rf-credit-breakdown-container"
                    }, d && i().createElement("h3", (0, r.A)({
                        className: `rf-credit-breakdown-header ${N.A.EYEBROW_REDUCED}`
                    }, (0, u.OH)(d))), !l().isEmpty(a) && i().createElement("div", {
                        className: `rf-credit-section rf-cost-item-desc ${N.A.BODY_TIGHT}`
                    }, i().createElement("div", {
                        className: "rf-cost-item-left"
                    }, a ? .label && i().createElement("div", (0, r.A)({
                        className: "rf-credit-breakdown-desc-left"
                    }, (0, u.OH)(a.label))), a ? .disclaimers ? .map(((e, t) => i().createElement("div", (0, r.A)({
                        key: `costBeforeCreditdisclaimer_${t.toString()}`,
                        className: `rf-summary-additional-desc ${N.A.CAPTION}`
                    }, (0, u.OH)(e)))))), a ? .value && i().createElement("span", (0, r.A)({
                        className: "rf-credit-breakdown-desc-right"
                    }, (0, u.OH)(a.value)))), !l().isEmpty(n) && i().createElement("div", {
                        className: `rf-tradein-credit rf-cost-item-desc ${N.A.BODY_TIGHT}`
                    }, i().createElement("div", {
                        className: "rf-cost-item-left"
                    }, n ? .label && i().createElement("div", (0, r.A)({
                        className: "rf-credit-breakdown-desc-left rf-highlight-color"
                    }, (0, u.OH)(n.label)))), n ? .value && i().createElement("span", (0, r.A)({
                        className: "rf-credit-breakdown-desc-right rf-highlight-color"
                    }, (0, u.OH)(n.value)))), !l().isEmpty(o) && i().createElement("div", {
                        className: `rf-amount-financed-section rf-cost-item-desc ${N.A.BODY_TIGHT}`
                    }, i().createElement("div", {
                        className: "rf-cost-item-left"
                    }, o.label && i().createElement("div", (0, r.A)({
                        className: "rf-credit-breakdown-desc-left"
                    }, (0, u.OH)(o.label))), o ? .disclaimers ? .map(((e, t) => i().createElement("div", (0, r.A)({
                        key: `totalAmountFinanced_disclaimer_${t.toString()}`,
                        className: `rf-summary-additional-desc ${N.A.CAPTION}`
                    }, (0, u.OH)(e)))))), o.value && i().createElement("span", (0, r.A)({
                        className: "rf-credit-breakdown-desc-right"
                    }, (0, u.OH)(o.value)))), !l().isEmpty(c) && i().createElement("div", {
                        className: `rf-nontradein-credit-section rf-cost-item-desc ${N.A.BODY_TIGHT}`
                    }, i().createElement("div", {
                        className: "rf-cost-item-left"
                    }, c ? .label && i().createElement("div", (0, r.A)({
                        className: "rf-credit-breakdown-desc-left rf-highlight-color"
                    }, (0, u.OH)(c.label))), c ? .disclaimers ? .map(((e, t) => i().createElement("div", (0, r.A)({
                        key: `nonTradeInCreditdisclaimer_${t.toString()}`,
                        className: `rf-summary-additional-desc ${N.A.CAPTION}`
                    }, (0, u.OH)(e)))))), c ? .value && i().createElement("span", (0, r.A)({
                        className: "rf-credit-breakdown-desc-right rf-highlight-color"
                    }, (0, u.OH)(c.value)))), !l().isEmpty(p) && i().createElement("div", {
                        className: `rf-tradeinbill-credit-section rf-cost-item-desc ${N.A.BODY_TIGHT}`
                    }, i().createElement("div", {
                        className: "rf-cost-item-left"
                    }, p ? .label && i().createElement("div", (0, r.A)({
                        className: "rf-credit-breakdown-desc-left rf-highlight-color"
                    }, (0, u.OH)(p.label))), p ? .disclaimers ? .map(((e, t) => i().createElement("div", (0, r.A)({
                        key: `tradeInBillCreditdisclaimer_${t.toString()}`,
                        className: `rf-summary-additional-desc ${N.A.CAPTION}`
                    }, (0, u.OH)(e)))))), p ? .value && i().createElement("span", (0, r.A)({
                        className: "rf-credit-breakdown-desc-right rf-highlight-color"
                    }, (0, u.OH)(p.value)))), !l().isEmpty(s) && i().createElement("div", {
                        className: "rf-cost-item-total rf-cost-item-desc"
                    }, i().createElement("div", {
                        className: "rf-cost-item-left"
                    }, s.label && i().createElement("h3", (0, r.A)({
                        className: `rf-estimated-cost-label ${N.A.BODY_TIGHT}`
                    }, (0, u.OH)(s.label)))), i().createElement("div", {
                        className: "rf-cost-item-right"
                    }, s.value && i().createElement("div", (0, r.A)({
                        className: `rf-estimated-cost-value ${N.A.BODY_TIGHT}`
                    }, (0, u.OH)(s.value))), s ? .disclaimers ? .map(((e, t) => i().createElement("div", (0, r.A)({
                        key: `estimatedCost_disclaimer_${t.toString()}`,
                        className: `rf-estimatedcost-disclaimer ${N.A.CAPTION}`
                    }, (0, u.OH)(e))))), !l().isEmpty(m) && i().createElement("div", {
                        className: `rf-additionalcredit ${N.A.BODY_TIGHT}`
                    }, m.label && i().createElement("span", (0, r.A)({
                        className: "rf-additionalcredit-label rf-credit-breakdown-desc-left rf-highlight-color"
                    }, (0, u.OH)(m.label))), m.value && i().createElement("span", (0, r.A)({
                        className: "rf-additionalcredit-value rf-credit-breakdown-desc-right rf-highlight-color"
                    }, (0, u.OH)(m.value))), m ? .disclaimers ? .map(((e, t) => i().createElement("div", (0, r.A)({
                        key: `additionalCredits_disclaimer_${t.toString()}`,
                        className: `rf-additionalcredit-disclaimer ${N.A.CAPTION}`
                    }, (0, u.OH)(e)))))))))
                },
                K = Object.freeze({
                    UPDATE_STATE: 1
                }),
                W = (e, t) => t.type === K.UPDATE_STATE ? { ...e,
                    ...t.payload
                } : { ...e
                },
                j = e => {
                    let {
                        sectionData: t = {}
                    } = e;
                    const a = t ? .header ? .value,
                        n = t ? .subHeader ? .value,
                        s = t ? .description ? .value;
                    return i().createElement(i().Fragment, null, a && i().createElement("div", {
                        className: "rf-carrieroffers-header-container"
                    }, i().createElement("h3", (0, r.A)({
                        className: `rf-carrieroffers-header ${N.A.TOUT}`
                    }, (0, u.OH)(a))), n && i().createElement("div", (0, r.A)({
                        className: `rf-carrieroffers-subheader ${N.A.EYEBROW_ELEVATED}`
                    }, (0, u.OH)(n))), s && i().createElement("div", (0, r.A)({
                        className: "rf-carrieroffers-description"
                    }, (0, u.OH)(s)))))
                },
                z = e => {
                    let {
                        data: t,
                        state: a,
                        dispatch: n,
                        footnotes: s
                    } = e;
                    const {
                        selectedPlan: c,
                        tiersData: d
                    } = a, m = t ? .selectionOptions ? .length > 1, f = t ? .selectionLabel, {
                        assets: h
                    } = (0, p.S)();
                    return i().createElement(i().Fragment, null, m && i().createElement("div", {
                        className: "rf-rateplan-dropdown large-9 small-12"
                    }, i().createElement(V.A, {
                        value: c,
                        label: f,
                        onChange: e => (e => {
                            const a = e.target.value,
                                r = t.selectionOptions.find((e => e.label === a)) || {},
                                i = t ? .tiers ? .[r.value] ? .sections ? ? [],
                                s = {
                                    selectedPlan: a,
                                    tiersData: i
                                };
                            n({
                                type: K.UPDATE_STATE,
                                payload: s
                            })
                        })(e)
                    }, t ? .selectionOptions ? .map((e => i().createElement(F.A, {
                        key: e.value,
                        value: e.label
                    }, e.label))))), i().createElement("div", {
                        className: o()("rf-po-bfe-paymentoptions-v2-content", {
                            "rf-po-bfe-paymentoptions-v2-content-nofootnotes": !s
                        })
                    }, !l().isEmpty(d) && d.map((e => {
                        if (!e) return;
                        const t = e ? .data ? ? {},
                            a = e ? .section,
                            n = e ? .sectionType,
                            s = e ? .title,
                            {
                                benefitsDescription: o,
                                dealsDescription: c,
                                staticPromoDealDescription: l
                            } = t;
                        return i().createElement("div", {
                            className: "rf-carrieroffers-description",
                            key: a
                        }, n === x.PREAMBLE && i().createElement(j, {
                            sectionData: t
                        }), n === x.CREDIT_BREAKDOWN && i().createElement(M, {
                            sectionData: { ...t,
                                title: s
                            }
                        }), a === x.CREDITS_AND_DISCOUNTS && l && i().createElement("div", {
                            className: "rf-creditsdiscounts-section rf-carrieroffers-section-desc"
                        }, s && i().createElement("h3", (0, r.A)({
                            className: `rf-carrieroffers-section-header ${N.A.EYEBROW_REDUCED}`
                        }, (0, u.OH)(s))), i().createElement("div", (0, r.A)({
                            className: `rf-creditsdiscounts-desc ${N.A.BODY_REDUCED_TIGHT}`
                        }, (0, u.OH)(l)))), a === x.BENEFITS && o && i().createElement("div", {
                            className: "rf-benefits-section rf-carrieroffers-section-desc"
                        }, s && i().createElement("h3", (0, r.A)({
                            className: `rf-carrieroffers-section-header ${N.A.EYEBROW_REDUCED}`
                        }, (0, u.OH)(s))), i().createElement("div", (0, r.A)({
                            className: `rf-benefits-desc ${N.A.BODY_REDUCED_TIGHT}`
                        }, (0, u.OH)(o)))), a === x.HOW_IT_WORKS && c && i().createElement("div", {
                            className: "rf-how-it-works-section rf-carrieroffers-section-desc"
                        }, s && i().createElement("h3", (0, r.A)({
                            className: `rf-carrieroffers-section-header ${N.A.EYEBROW_REDUCED}`,
                            id: x.HOW_IT_WORKS
                        }, (0, u.OH)(s))), i().createElement("div", (0, r.A)({
                            className: `rf-deals-desc ${N.A.BODY_REDUCED_TIGHT}`
                        }, (0, u.OH)(c)))))
                    })), s && i().createElement(i().Fragment, null, i().createElement("h3", {
                        className: "visuallyhidden"
                    }, l().get(h, "footnotes")), i().createElement("div", (0, r.A)({
                        className: `rf-po-bfe-paymentoptions-offerfooter ${N.A.CAPTION}`
                    }, (0, u.OH)(s))))))
                },
                q = e => {
                    let {
                        data: t,
                        footnotes: a
                    } = e;
                    const s = l().get(t, "tabData", []),
                        o = s[0],
                        c = o ? .selectionOptions ? .[0] ? ? {},
                        {
                            label: p,
                            value: d
                        } = c,
                        m = o ? .tiers ? .[d] ? .sections ? ? [],
                        [f, h] = (0, n.useReducer)(W, {
                            selectedTabIndex: 0,
                            selectedPlan: p,
                            tiersData: m
                        }),
                        {
                            selectedTabIndex: E
                        } = f;
                    return i().createElement("div", {
                        className: "rf-po-overlay-v2"
                    }, s.length > 1 ? i().createElement(_.Ay, {
                        count: s.length,
                        index: E,
                        handleChange: e => {
                            (e => {
                                const {
                                    label: t,
                                    value: a
                                } = s ? .[e] ? .selectionOptions ? .[0] || {}, r = s ? .[e] ? .tiers ? .[a] ? .sections, n = {
                                    selectedTabIndex: e,
                                    selectedPlan: t,
                                    tiersData: r
                                };
                                h({
                                    type: K.UPDATE_STATE,
                                    payload: n
                                })
                            })(e)
                        },
                        className: "rf-po-overlay-customertype-tabs"
                    }, i().createElement(_.Ft, {
                        compact: !0,
                        selected: E,
                        classes: {
                            item: "rf-po-customer-tabnav-item",
                            button: `rf-po-customer-tabnav-button ${N.A.BODY_REDUCED}`,
                            root: "rf-po-customer-tabnav"
                        },
                        items: s ? .map((e => i().createElement(i().Fragment, null, e.tabLabel && i().createElement("span", (0, r.A)({
                            key: e.tabLabel,
                            className: "rf-po-customer-tabnav-label"
                        }, (0, u.OH)(e.tabLabel))))))
                    }), i().createElement(_.T2, {
                        className: "rf-customer-tab-panels"
                    }, s.map(((e, t) => i().createElement(_.Kp, {
                        key: e.tabLabel,
                        index: t,
                        className: "rf-customer-tab-panel"
                    }, i().createElement(z, {
                        data: e,
                        state: f,
                        dispatch: h,
                        footnotes: a
                    })))))) : i().createElement(z, {
                        data: o,
                        state: f,
                        dispatch: h,
                        footnotes: a
                    }))
                },
                J = e => {
                    let {
                        paymentHeader: t
                    } = e;
                    const a = l().get(t, "header"),
                        n = l().get(t, "subHeader"),
                        s = l().get(t, "logoImage"),
                        o = l().get(t, "description");
                    return i().createElement(i().Fragment, null, s && i().createElement(O.Ay, {
                        className: "rf-po-bfe-paymentoptions-logo",
                        "aria-hidden": "true",
                        data: s
                    }), i().createElement("div", {
                        className: "rf-po-bfe-paymentoptions-header-container"
                    }, a && i().createElement("h2", (0, r.A)({
                        className: `rf-po-bfe-paymentoptions-header ${N.A.HEADLINE_REDUCED}`,
                        id: "rf-po-bfe-payment-overlay-header"
                    }, (0, u.OH)(a))), n && i().createElement("div", (0, r.A)({
                        className: `rf-po-bfe-paymentoptions-subheader ${N.A.BODY}`
                    }, (0, u.OH)(n))), o && i().createElement("div", (0, r.A)({
                        className: `rf-po-bfe-paymentoptions-customertype ${N.A.BODY}`
                    }, (0, u.OH)(o)))))
                },
                Q = e => {
                    let {
                        data: t
                    } = e;
                    const a = l().get(t, "info"),
                        r = l().get(t, "info.tiers[0].sections", []),
                        n = l().get(t, "info.footNotes", ""),
                        s = l().get(t, "info.tiers[0].staticPromotionEnabled", ""),
                        o = l().get(t, "info.tiers[0].singleFragment", ""),
                        c = x.PO_OVERLAY_V2 === a ? .version;
                    return i().createElement("div", {
                        className: "rf-po-bfe-paymentoptions-wrapper"
                    }, i().createElement(J, {
                        paymentHeader: a
                    }), s && i().createElement("div", {
                        className: "rf-po-bfe-paymentoptions-static-content"
                    }, i().createElement("p", (0, u.OH)(o))), c ? i().createElement(q, {
                        data: a,
                        footnotes: n
                    }) : i().createElement(U, {
                        offer: r,
                        footnotes: n
                    }))
                },
                X = e => {
                    let {
                        showPoOverlay: t,
                        setShowPoOverlay: a,
                        url: r,
                        bfil: s
                    } = e;
                    const o = l().get(window, "pageLevelData.chat.chatContent", {}),
                        c = o ? i().createElement(I.A, {
                            data: o
                        }) : null,
                        {
                            state: p,
                            handleOpenOverlay: d,
                            handleCloseOverlay: m
                        } = Y(s);
                    return (0, n.useEffect)((() => {
                        t && d(r)
                    }), [t]), p ? i().createElement($.A, {
                        visible: p.showOverlay,
                        isFullscreen: p.isHandheldPhone,
                        className: "rf-po-bfe-payment-options-overlay",
                        onClose: () => {
                            a(!1), m()
                        },
                        ariaLabel: "rf-po-bfe-payment-overlay-header",
                        contentAttrs: {
                            className: "rf-po-bfe-payment-overlay-content"
                        },
                        footerContent: c && i().createElement("div", {
                            className: "rf-overlay-chat-withbackgroundfooter"
                        }, c),
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        "data-analytics-link-region": "selectionarea",
                        "data-analytics-content-id": r
                    }, i().createElement(Q, {
                        data: p
                    })) : null
                };
            var Z = a(986);
            const ee = window.asMetrics,
                te = e => {
                    let {
                        optionKeyName: t,
                        title: a,
                        detail: n,
                        sideHeader: s,
                        price: c,
                        violator: p,
                        logoImage: d,
                        subSectionHeader: m,
                        subSectionItems: f,
                        overlayLinkData: h,
                        handleopenOverlay: E,
                        openOverlayOnKeyDown: b,
                        showTotalInSummary: g,
                        ...A
                    } = e;
                    return i().createElement("div", {
                        className: "rf-po-bfe-financingoption"
                    }, i().createElement(S, (0, r.A)({
                        className: `rf-po-bfe-financingoption-${t}`
                    }, A), i().createElement("div", {
                        className: "rf-po-bfe-financingoption-inner-container"
                    }, i().createElement("div", {
                        className: "rf-po-bfe-financingoption-wrapper"
                    }, d && i().createElement("span", {
                        className: "rf-po-bfe-financingoption-image"
                    }, i().createElement(O.Ay, {
                        data: d,
                        alt: p && d ? .alt,
                        "aria-hidden": !p
                    })), s && i().createElement("span", (0, r.A)({
                        className: `rf-po-bfe-financingoption-sideheader ${N.A.CAPTION}`
                    }, (0, u.OH)(s)))), p && i().createElement(C.A, (0, r.A)({
                        noScrim: !0,
                        reduced: !0,
                        className: "rf-po-bfe-financingoption-violator"
                    }, (0, u.OH)(p))), i().createElement("span", (0, r.A)({
                        className: `rf-po-bfe-dimension-base-title ${N.A.BODY}`
                    }, (0, u.OH)(a))), i().createElement("span", (0, r.A)({
                        className: o()(`rf-po-bfe-financingoption-description ${N.A.BODY}`, {
                            "rf-po-bfe-financingoption-hideprice": !g
                        })
                    }, (0, u.OH)(c))), n && i().createElement("div", (0, r.A)({
                        className: "rf-po-bfe-dimension-base-detail"
                    }, (0, u.OH)(n))), m && i().createElement("div", (0, r.A)({
                        className: `rf-po-bfe-financingoption-subsectionheader ${N.A.CAPTION}`
                    }, (0, u.OH)(m))), f && i().createElement("ul", {
                        className: `rf-po-bfe-financingoption-subsection-list ${N.A.CAPTION}`
                    }, f.map(((e, t) => i().createElement("li", (0, r.A)({
                        key: `subSectionItem-${t.toString()}`,
                        className: "rf-po-bfe-financingoption-subsection-listitem"
                    }, (0, u.OH)(e)))))))), l().get(h, "url") && i().createElement("div", {
                        className: o()(["rf-po-bfe-paymentoptions-details"])
                    }, i().createElement(Z.A, (0, r.A)({}, h, {
                        attrs: {
                            className: "rf-po-bfe-payment-financinglink",
                            role: "button",
                            onClick: e => {
                                var t, r;
                                e.preventDefault(), E(h.url), t = l().get(h, "text"), r = a, ee && ee.fireMicroEvent({
                                    eVar: "eVar6",
                                    feature: `Step 1 |${r}|${t}`,
                                    action: "selected"
                                })
                            },
                            onKeyDown: e => {
                                b(e, h.url)
                            }
                        }
                    }), l().get(h, "text"), i().createElement("span", (0, r.A)({
                        className: "visuallyhidden"
                    }, (0, u.OH)(a))))))
                },
                ae = e => {
                    let {
                        data: t,
                        selected: a,
                        ...n
                    } = e;
                    const s = t.find((e => {
                            let {
                                violator: t
                            } = e;
                            return !!t
                        })),
                        c = s ? t.map((e => {
                            let {
                                id: t,
                                violator: a,
                                title: n
                            } = e;
                            return i().createElement("div", {
                                key: n,
                                id: `rf-po-bfe-tab-buttons-violator-${t}`,
                                className: `rf-po-bfe-tab-buttons-violator ${N.A.BODY}`
                            }, a && i().createElement(C.A, (0, r.A)({
                                noScrim: !0,
                                reduced: !0
                            }, (0, u.OH)(a))))
                        })) : null;
                    return i().createElement("div", {
                        className: o()("rf-po-bfe-tabpills", {
                            "rf-po-bfe-tabpills-has-violator": s
                        })
                    }, i().createElement("div", {
                        className: "rf-po-bfe-tabpills-container"
                    }, i().createElement(_.Ft, (0, r.A)({
                        compact: !0,
                        className: o()(["rf-po-bfe-tabpills-container", `rf-po-bfe-tabpills-selected-${a}`]),
                        prevChildItems: c,
                        selected: a,
                        classes: {
                            item: "rf-po-bfe-tabpills-item",
                            button: `rf-po-bfe-tabpills-button ${N.A.BODY_REDUCED}`,
                            root: "rf-po-bfe-tabpills-root"
                        }
                    }, n))))
                },
                re = e => {
                    let {
                        data: t,
                        selectedPurchaseOption: a,
                        selectedCppart: r,
                        financeGroupType: n,
                        handleSelection: s,
                        openPurchaseOptionOverlay: o,
                        openOverlayOnKeyDown: c
                    } = e;
                    return i().createElement(D.c6, null, t.map((e => {
                        const {
                            value: t,
                            sectionHeader: l,
                            sectionSubHeader: p,
                            subSectionHeader: d,
                            subSectionItems: m,
                            sideHeader: u,
                            price: f,
                            violator: h,
                            logoImage: E,
                            detailsLink: b,
                            cppart: O,
                            optionKeyName: A,
                            groupType: y,
                            overlayLinkData: v,
                            showTotalInSummary: N
                        } = e, {
                            CARRIER_INSTALLMENT_PLANS: P
                        } = g.A, D = t === P, C = D ? O : t;
                        return i().createElement(te, {
                            dimensionValue: C,
                            optionKeyName: A,
                            key: C,
                            name: `purchase_option_${n}`,
                            title: l,
                            detail: p,
                            sideHeader: u,
                            subSectionHeader: d,
                            subSectionItems: m,
                            price: f,
                            violator: h,
                            logoImage: E,
                            detailsLink: b,
                            overlayLinkData: v,
                            showTotalInSummary: N,
                            handleopenOverlay: o,
                            openOverlayOnKeyDown: c,
                            checked: D ? t === a && O === r : t === a,
                            handleChange: () => {
                                s({
                                    value: t,
                                    selectedOptionData: e,
                                    groupVal: y,
                                    financingVal: n,
                                    cppart: O
                                })
                            },
                            "data-autom": `purchaseOption${C}`,
                            withAriaLabeledBy: !0,
                            skipChangeSelection: !0
                        })
                    })))
                },
                ne = e => {
                    let {
                        shouldShow: t,
                        adjustHeight: a = () => {}
                    } = e;
                    const {
                        data: r,
                        selectedPurchaseOption: s,
                        selectedCppart: o,
                        selectedPurchaseFinancingType: c,
                        handleSelection: d,
                        handleGroupSelectionChange: m,
                        handleCarrierVisibilityChange: u,
                        handlePriceChange: f,
                        selectedPurchaseGroupType: h,
                        bfil: O
                    } = E(), {
                        financingOptions: A,
                        financingTabGroups: y,
                        headerPrices: v,
                        allPurchaseOptions: N
                    } = r, P = N.find((e => "finance" === e.groupType && !e.hideCarrier)), D = P ? .carrierPolicyParts, C = P ? .carrierPrices, S = (0, n.useRef)(null), H = (0, n.useRef)(null), [$, I] = (0, n.useState)(0), {
                        GROUP_FINANCE: R
                    } = g.A, B = i().useRef(null), k = i().useRef(!1), G = i().useRef(!1), {
                        viewport: L
                    } = (0, p.S)(), [Y, U] = (0, n.useState)(!1), [V, F] = (0, n.useState)(), x = e => {
                        U(!0), F(e)
                    }, M = (e, t) => {
                        e.keyCode === T.HP.Space && x(t)
                    }, K = y.map((e => {
                        let {
                            id: t,
                            violator: a
                        } = e;
                        return { ...a && {
                                "aria-describedby": `rf-po-bfe-tab-buttons-violator-${t}`
                            },
                            ...y.length > 1 && {
                                "data-autom": `${t}Financing`
                            }
                        }
                    }));
                    (0, n.useEffect)((() => {
                        if (A.length) {
                            const e = y.findIndex((e => {
                                let {
                                    id: t
                                } = e;
                                return t === c
                            }));
                            I(e > -1 ? e : 0)
                        }
                    }), [y, A]);
                    const W = l().debounce((() => {
                        (() => {
                            if (B.current) {
                                const {
                                    innerWidth: e
                                } = window, t = S.current ? ? 0;
                                if (!G.current && e <= 1240) {
                                    const e = l().get(B, "current.offsetHeight", 0);
                                    a(t + e), G.current = !0, k.current = !1
                                }
                                if (!k.current && e > 1240) {
                                    const e = l().get(B, "current.offsetHeight", 0);
                                    a(t + e), k.current = !0, G.current = !1
                                }
                            }
                        })()
                    }), 500);
                    return (0, w.A)("resize", "small" !== L ? W : void 0), i().createElement("div", {
                        className: "rf-po-bfe-financingoptions",
                        ref: H
                    }, y.length > 1 && i().createElement(b.A, { in: t,
                        timeout: 400,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        onEntered: () => m({
                            groupVal: h,
                            coldStateCarrierData: {
                                coldStateCarrierParts: D,
                                coldStateCarrierPrices: C
                            }
                        }),
                        onExited: () => {
                            I(0), S.current = null
                        }
                    }, i().createElement(_.Ay, {
                        count: y.length,
                        index: $,
                        handleChange: e => {
                            const t = l().get(v, `${R}`, ""),
                                a = l().get(y[e], "headerPrice") || t,
                                r = l().get(y, `${e}.id`),
                                n = r === g.A.SUBGROUP_CARRIER;
                            f(a, !0), I(e), u(n), (e => {
                                ee && e && ee.sendUserInteraction({
                                    name: "step1 - financing tabs",
                                    beacon: {
                                        eVar5: `D=pageName+"|Step 1|payment|finance|${e} financing"`
                                    }
                                })
                            })(r)
                        },
                        className: "rf-po-bfe-financingoptions-tabs"
                    }, y.length > 1 && i().createElement(ae, {
                        items: y.map((e => {
                            let {
                                title: t
                            } = e;
                            return t
                        })),
                        selected: $,
                        data: y,
                        attrs: K
                    }), i().createElement(_.T2, {
                        className: "rf-po-bfe-financingoptions-tabs-container"
                    }, y.length > 1 && A.map(((e, t) => {
                        const r = y[t].id;
                        return i().createElement(_.Kp, {
                            key: r,
                            index: t,
                            className: "rf-po-bfe-financingoptions-tabs-content",
                            onEntering: e => {
                                B.current = e;
                                const t = e.getBoundingClientRect().height;
                                S.current || (S.current = H.current.getBoundingClientRect().height), a(S.current + t)
                            }
                        }, i().createElement(re, {
                            data: e,
                            selectedPurchaseOption: s,
                            selectedCppart: o,
                            handleSelection: d,
                            financeGroupType: r,
                            openPurchaseOptionOverlay: x,
                            openOverlayOnKeyDown: M
                        }))
                    }))))), 1 === y.length && i().createElement(b.A, { in: t,
                        timeout: 400,
                        onEntering: () => a(H.current.getBoundingClientRect().height),
                        onEntered: () => m({
                            groupVal: h,
                            coldStateCarrierData: {
                                coldStateCarrierParts: D,
                                coldStateCarrierPrices: C
                            }
                        })
                    }, i().createElement("div", {
                        className: "rf-po-bfe-financingoptions-tabs-container rf-po-bfe-financingoptions-single-panel"
                    }, A.map((e => {
                        const t = l().get(y, "[0].id", "");
                        return i().createElement(re, {
                            key: `${t}_${e.purchaseOptionType}`,
                            data: e,
                            selectedPurchaseOption: s,
                            selectedCppart: o,
                            handleSelection: d,
                            financeGroupType: t,
                            openPurchaseOptionOverlay: x,
                            openOverlayOnKeyDown: M
                        })
                    })))), i().createElement(X, {
                        showPoOverlay: Y,
                        setShowPoOverlay: U,
                        url: V,
                        bfil: O
                    }))
                },
                ie = e => {
                    let {
                        shouldShow: t,
                        adjustHeight: a = () => {}
                    } = e;
                    const {
                        data: {
                            iupOptions: s
                        },
                        selectedPurchaseOption: c,
                        handleSelection: p,
                        handleGroupSelectionChange: d,
                        selectedPurchaseGroupType: m,
                        isMow: f
                    } = E(), h = (0, n.useRef)(null), {
                        subHeader: O,
                        offersList: A,
                        detailsLink: y,
                        value: v,
                        groupType: P,
                        carrierPolicyParts: C,
                        carrierPrices: S
                    } = s, H = l().get(s, "moreOptions.options", []), T = e => {
                        let {
                            link: t,
                            title: a
                        } = e;
                        if (t) {
                            ! function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    a = arguments.length > 2 ? arguments[2] : void 0;
                                const r = l().get(window, "asMetrics.isBFEMetricsEnabled", !1);
                                ee && ("iup" === t && r ? ee.buyflow.onIUpExistingMember(a) : ee.fireMicroEvent({
                                    feature: ` Step 1 - purchase options | ${e}`,
                                    part: t,
                                    eVar: "eVar6",
                                    action: a
                                }))
                            }("", "iup", `${v} > ${a}`), t && (window.location.href = t)
                        } else p({
                            value: v,
                            groupVal: P,
                            selectedOptionData: s,
                            metricsData: {
                                title: a
                            }
                        })
                    }, w = () => i().createElement("div", {
                        className: "rf-po-bfe-iupoptions-info"
                    }, i().createElement("div", (0, u.OH)(A)), y && i().createElement("div", (0, r.A)({
                        className: o()([`rf-po-bfe-iupoptions-details-link ${N.A.CAPTION}`, "link", "icon", "icon-chevronright"])
                    }, (0, u.OH)(y))));
                    return i().createElement("div", {
                        className: "rf-po-bfe-iupoptions"
                    }, i().createElement(b.A, { in: t,
                        onEntering: e => a(e.getBoundingClientRect().height),
                        onEntered: () => d({
                            groupVal: m,
                            coldStateCarrierData: {
                                coldStateCarrierParts: C,
                                coldStateCarrierPrices: S
                            }
                        }),
                        appear: !0
                    }, i().createElement("div", {
                        className: "rf-po-bfe-iupoptions-container"
                    }, i().createElement("div", (0, r.A)({
                        className: `rf-po-bfe-iupoptions-title ${N.A.BODY_REDUCED}`,
                        tabIndex: -1,
                        ref: h
                    }, (0, u.OH)(O))), f && w(), i().createElement("div", {
                        className: "rf-po-bfe-iupoptions-inner-options"
                    }, i().createElement(D.c6, null, H.map(((e, t) => i().createElement(D.sY, {
                        name: "purchase_option_more",
                        key: e.title,
                        "data-autom": `iup_option_${t}`,
                        itemsPerRowLarge: 1,
                        value: t,
                        handleChange: () => T(e),
                        skipChangeSelection: !0,
                        checked: c === g.A.IUP_PROGRAM && !e.link
                    }, i().createElement("span", {
                        className: `rf-po-bfe-iupoptions-inner-option ${N.A.BODY}`
                    }, e.title)))))), !f && w())))
                },
                se = e => {
                    let {
                        shouldShowFinancing: t,
                        shouldShowIup: a
                    } = e;
                    const {
                        data: {
                            purchaseOptionGroups: r,
                            allPurchaseOptions: n
                        },
                        disabled: s,
                        handleSelection: c,
                        selectedPurchaseGroupType: p,
                        view: d,
                        isMow: m
                    } = E(), u = r.find((e => l().get(e, "violator"))), {
                        GROUP_FINANCE: f,
                        GROUP_IUP: h
                    } = g.A;
                    return i().createElement(D.c6, {
                        "aria-labelledby": "rf-po-bfe-purchaseoptions-label",
                        className: o()(["rf-po-bfe-purchasegroupoptions", `rf-po-bfe-purchasegroupoptions-view-${d}`, {
                            "rf-po-bfe-purchasegroupoptions-withviolator": u
                        }]),
                        disabled: s
                    }, r.map((e => {
                        const {
                            sectionHeader: o,
                            sectionSubHeader: d,
                            price: u,
                            addonPrice: E,
                            sectionFooter: O,
                            id: g,
                            violator: A,
                            showTradeInDisclaimer: y,
                            subSectionHeader: v,
                            subSectionItems: N,
                            highValueTradeIn: P,
                            hasMoreOptions: D
                        } = e;
                        return i().createElement(i().Fragment, {
                            key: g
                        }, i().createElement(H, {
                            key: g,
                            title: o,
                            subTitle: d,
                            price: u,
                            addonPrice: E,
                            footer: O,
                            violator: A,
                            groupSize: r.length >= 3 ? 3 : 2,
                            name: "purchase_option_group",
                            value: g,
                            checked: g === p,
                            handleChange: t => {
                                ((e, t) => {
                                    const {
                                        hasMoreOptions: a,
                                        headerPrice: r,
                                        addonDescription: i
                                    } = t;
                                    let s;
                                    a || (s = n.find((t => t.groupType === e))), c({
                                        value: l().get(s, "value", e),
                                        groupVal: e,
                                        hasMoreOptions: a,
                                        selectedOptionData: s,
                                        headerPrice: r,
                                        addonDescription: i
                                    })
                                })(t, e)
                            },
                            "data-autom": `purchaseGroupOption${g}`,
                            withAriaLabeledBy: !0,
                            skipChangeSelection: !0,
                            showTradeInDisclaimer: y,
                            subSectionHeader: v,
                            subSectionItems: N,
                            highValueTradeIn: P,
                            disabled: s
                        }), m && g === f && D && i().createElement(b.x, { in: t,
                            className: "rf-po-bfe-mow-financing-transition-wrapper"
                        }, i().createElement(ne, {
                            shouldShow: t
                        })), m && g === h && i().createElement(b.x, { in: a
                        }, i().createElement(ie, {
                            shouldShow: a
                        })))
                    })))
                },
                oe = e => {
                    let {
                        shouldShow: t
                    } = e;
                    const {
                        isFullWidth: a,
                        isMow: r,
                        selectedPurchaseOption: s,
                        selectedPurchaseGroupType: o,
                        data: {
                            singleOptionPurchaseGroups: c
                        }
                    } = E(), {
                        GROUP_FINANCE: l,
                        GROUP_IUP: p
                    } = g.A, d = t && o === l, m = t && o === p, [u, f] = (0, n.useState)(s && !t ? "auto" : 0), h = a && !r;
                    return (0, n.useEffect)((() => {
                        !h || o && !v(o, c) || f(0)
                    }), [h, o, f, c]), i().createElement(b.x, { in: t,
                        className: "rf-po-bfe-purchaseoptionsedit-transition",
                        timeout: 500
                    }, i().createElement("div", {
                        className: "rf-po-bfe-purchaseoptionsedit"
                    }, i().createElement(se, {
                        shouldShowFinancing: d,
                        shouldShowIup: m
                    }), h && i().createElement("div", {
                        className: "rf-po-bfe-purchaseoptionsedit-option-container",
                        style: {
                            height: "auto" === u ? "auto" : `${u}px`
                        }
                    }, i().createElement(ne, {
                        shouldShow: d,
                        adjustHeight: f
                    }), i().createElement(ie, {
                        shouldShow: m,
                        adjustHeight: f
                    }))))
                },
                ce = {
                    header: '<span>Payment options. </span><span class="as-subheading">Select the one that\'s best for you.</span>',
                    summaryEditLabel: "Edit",
                    collapseButtonLabel: "Collapse",
                    allFinancingLabel: "All financing",
                    paymentOptionsAllyTxt: "Payment Options"
                },
                le = e => {
                    const t = {},
                        a = l().get(e, "paymentOptionAssets.namedAssets.paymentOptions"),
                        r = l().get(e, "paymentOptionAssets.namedAssets.highValueTradeinText");
                    a && (t.paymentOptionsAllyTxt = a), r && (t.highValueTradeinText = r);
                    const n = l().get(e, "purchaseOptionsHeader");
                    return n && (t.header = n), { ...ce,
                        ...t
                    }
                },
                pe = (e, t, a, r, i) => {
                    const [s, o] = (0, n.useState)(!1), [c, p] = (0, n.useState)(!1), [d, u] = (0, n.useState)(!1), f = (0, n.useRef)(null), h = (0, n.useRef)(null), E = (0, n.useRef)(!1), [b, O] = (0, n.useState)(!1), [A, y] = (0, n.useState)(!1), [v, N] = (0, n.useState)(null), [P, D] = (0, n.useState)(null), [C, S] = (0, n.useState)({
                        namedAssets: {},
                        purchaseOptionGroups: [],
                        allPurchaseOptions: [],
                        financingTabGroups: [],
                        financingOptions: [],
                        iupOptions: {},
                        validPurchaseOptions: {},
                        singleOptionPurchaseGroups: [],
                        singlePurchaseOptionAvailable: null
                    }), H = (0, R.A)("bfe/useFetchPurchaseOptions"), T = e && !s;
                    return (0, n.useEffect)((() => {
                        (i && b && !s || e && v && e !== v && A) && f.current && f.current.finally((() => {
                            b && !s && (E.current = !0), p(!0)
                        }))
                    }), [i, e]), (0, n.useEffect)((() => {
                        (T && !b || c && !A) && (T && (h.current = i, O(!0), a(!0)), c && y(!0), f.current = (0, B.hI)(e, {
                            timeout: 2e4
                        }).then((n => {
                            const i = (e => {
                                const {
                                    body: t
                                } = e, {
                                    IUP_PROGRAM: a,
                                    GROUP_FINANCE: r,
                                    GROUP_IUP: n,
                                    SUBGROUP_ALL: i
                                } = g.A, s = l().get(t, "showTradeInDisclaimer", !1), o = l().get(t, "purchaseOptionGroups", []), c = l().get(t, "purchaseOptionsGroupPrice", {}), p = l().get(t, "purchaseOptionsHeaderPrice", {}), d = l().get(t, "purchaseOptions", {}), m = l().get(t, "purchaseOptionsPrice", {}), u = [], f = [], h = [];
                                let E = [],
                                    b = null;
                                const O = [];
                                Object.keys(d).forEach((e => {
                                    const t = d[e],
                                        {
                                            hideCarrier: r
                                        } = t,
                                        n = l().get(d, `[${e}].formValue`, e),
                                        i = e;
                                    if ("carrierPlans" === e) {
                                        const e = l().get(d, "carrierPlans.subDetails", {});
                                        Object.keys(e).forEach((t => {
                                            const a = e[t],
                                                {
                                                    carrierPolicyParts: s,
                                                    additionalData: o,
                                                    selectionSummary: c
                                                } = a,
                                                p = l().get(a, "carrierPolicyParts[0]", "");
                                            E.push({ ...o,
                                                ...c,
                                                value: n,
                                                cppart: p,
                                                price: l().get(m, `carrierPlans.prices.${p}.price`, ""),
                                                carrierPolicyParts: s,
                                                hideCarrier: r,
                                                optionKeyName: i
                                            })
                                        }))
                                    } else {
                                        const {
                                            carrierPolicyParts: t,
                                            additionalData: s,
                                            moreOptions: o,
                                            selectionSummary: p
                                        } = d[e], u = { ...p,
                                            ...s,
                                            value: n,
                                            price: l().get(m, `${e}.lowestPrice.price`),
                                            addonPrice: l().get(c, "addonDescription"),
                                            optionKeyName: i,
                                            carrierPolicyParts: t,
                                            hideCarrier: r,
                                            carrierPrices: l().get(m, `${e}.prices`, {})
                                        };
                                        n === a && (u.moreOptions = o), E.push(u)
                                    }
                                }));
                                const A = ((e, t) => {
                                    const a = e.reduce(((e, t) => {
                                        const {
                                            id: a,
                                            subGroups: r,
                                            purchaseOptions: n
                                        } = t, i = (e, t) => t.reduce(((e, t) => ({ ...e,
                                            [t]: a
                                        })), e);
                                        return r ? r.reduce(((e, t) => i(e, t.purchaseOptions)), e) : i(e, n)
                                    }), {});
                                    return t.reduce(((e, t) => {
                                        const {
                                            value: r,
                                            optionKeyName: n
                                        } = t;
                                        return { ...e,
                                            [r]: a[n]
                                        }
                                    }), {})
                                })(o, E);
                                E = E.map((e => ({ ...e,
                                    groupType: A[e.value]
                                }))), o.forEach((e => {
                                    const {
                                        additionalData: t,
                                        selectionSummary: a,
                                        subGroups: o,
                                        id: m
                                    } = e, b = l().get(e, "purchaseOptions", []);
                                    1 === b.length && m !== n && O.push(m);
                                    const g = {
                                        id: m,
                                        hasMoreOptions: !!o || m === n,
                                        price: c[m],
                                        addonPrice: l().get(c, "addonDescription"),
                                        headerPrice: l().get(p, `${m}`, ""),
                                        addonDescription: l().get(p, "addonDescription", ""),
                                        selectionSummary: a,
                                        showTradeInDisclaimer: s,
                                        ...t
                                    };
                                    if (m === r)
                                        if (o) {
                                            const e = o.findIndex((e => e.id === i));
                                            (e > -1 && 2 === o.length ? o.slice().splice(e, 1) : o).forEach((e => {
                                                const t = l().get(e, "additionalData", {}),
                                                    a = l().get(e, "purchaseOptions", []),
                                                    r = [];
                                                f.push({
                                                    id: e.id,
                                                    title: l().get(t, "sectionHeader", ""),
                                                    violator: l().get(t, "violator", null),
                                                    headerPrice: l().get(p, `${e.id}`, ""),
                                                    addonDescription: l().get(p, "addonDescription", "")
                                                }), a.forEach((e => {
                                                    r.push(...E.filter((t => t.optionKeyName === e)))
                                                })), h.push(r)
                                            }))
                                        } else {
                                            const [e] = b, t = l().get(d, `[${e}].additionalData.violator`), a = l().get(d, `[${e}].additionalData.subSectionHeader`);
                                            g.subSectionHeader = a;
                                            const r = l().get(d, `[${e}].additionalData.subSectionItems`);
                                            g.subSectionItems = r, g.violator = t
                                        }
                                    u.push(g)
                                }));
                                const y = l().get(E.filter((e => {
                                        let {
                                            value: t
                                        } = e;
                                        return t === a
                                    })), "[0]", {}),
                                    {
                                        carrierPrices: v,
                                        carrierPolicyParts: N
                                    } = E.find((e => "fullprice" === e.groupType)) || {},
                                    P = {
                                        coldStateCarrierPrices: v,
                                        coldStateCarrierParts: N
                                    };
                                if (1 === o.length && 1 === E.length) {
                                    const [e] = E;
                                    b = e
                                }
                                return {
                                    namedAssets: le(t),
                                    purchaseOptionGroups: u,
                                    headerPrices: p,
                                    allPurchaseOptions: E,
                                    financingTabGroups: f,
                                    financingOptions: h,
                                    iupOptions: y,
                                    validPurchaseOptions: A,
                                    singleOptionPurchaseGroups: O,
                                    singlePurchaseOptionAvailable: b,
                                    defaultCarrierData: P
                                }
                            })(n);
                            T ? (a(!1), r && u(!0), o(!0), O(!1), N(e), D(i)) : (p(!1), y(!1), E.current ? (E.current = !1, N(e), D(i)) : d && u(!1)), S(i), t()
                        })).catch((e => {
                            H.error(e), o(!0), p(!1), O(!1), y(!1), a(!1)
                        })))
                    }), [e, s, T, b, c, A, H, t, a, r, d]), (0, m.A)((() => {
                        if (s)
                            if (e && e !== v) !h.current && i && (E.current = !0, h.current = i), p(!0);
                            else if (e === v) {
                            const e = l().cloneDeep(P);
                            S(e), t()
                        }
                    }), [e]), {
                        isColdStartCall: d,
                        data: C,
                        isRefetching: A
                    }
                },
                de = e => {
                    let {
                        selectedPurchaseOption: t,
                        selectedPurchaseGroupType: a,
                        selectedPurchaseFinancingType: s,
                        selectedCppart: c,
                        handleChange: E,
                        handleReset: b = l().noop,
                        handleEditSelection: O = l().noop,
                        handleSelectionComplete: A = l().noop,
                        handleGroupSelectionChange: N = l().noop,
                        handleColdStateCarrierData: D = l().noop,
                        handleCarrierVisibilityChange: C = l().noop,
                        handlePriceChange: S = l().noop,
                        onDataLoading: H = l().noop,
                        onDataLoaded: T = l().noop,
                        disabled: w,
                        view: _ = "full-width",
                        url: $,
                        stepKey: I,
                        isStepHidden: R = !1,
                        hasColdStart: B = !1,
                        gallery: k,
                        bfil: G,
                        isPurchaseOptionsComplete: L = !1
                    } = e;
                    const {
                        viewport: Y,
                        assets: U
                    } = (0, p.S)(), V = l().get(window.decisionSection, "paymentOptions"), F = Array.isArray(V), x = l().get(window, "NAMED_ASSETS.isColdStateEnabled", !1), [M, K] = (0, n.useState)(!1), {
                        data: W,
                        isColdStartCall: j,
                        isRefetching: z
                    } = pe($, T, H, B, G, a), {
                        namedAssets: q,
                        allPurchaseOptions: J,
                        validPurchaseOptions: Q,
                        singleOptionPurchaseGroups: X,
                        defaultCarrierData: Z = {}
                    } = W || {}, ee = t && !a ? Q[t] : a, {
                        CARRIER_INSTALLMENT_PLANS: te
                    } = g.A, {
                        singlePurchaseOptionAvailable: ae
                    } = W, re = "full-width" === _, ne = "small" === Y, [ie, se] = (0, n.useState)(!1), [ce, le] = (0, n.useState)(), [de, me] = (0, n.useState)(R), [ue, fe] = (0, n.useState)("auto"), he = "auto" === ue ? "auto" : `${ue}px`, Ee = ne ? he : 0, be = v(Q[t], X), Oe = w || x && z && !L;
                    let ge = !be && !!ce && !ie;
                    const {
                        header: Ae,
                        summaryEditLabel: ye,
                        collapseButtonLabel: ve,
                        paymentOptionsAllyTxt: Ne
                    } = q, Pe = (0, n.useRef)(null), De = (0, n.useCallback)((e => {
                        let {
                            value: t,
                            groupVal: a,
                            financingVal: r,
                            cppart: n,
                            hasMoreOptions: i,
                            selectedOptionData: s = {},
                            headerPrice: o,
                            addonDescription: c,
                            metricsData: l
                        } = e;
                        if (i) E({
                            isGroupChange: !0,
                            groupVal: a
                        }), S(o, !0, c), le(), be && O(a);
                        else {
                            const e = v(a, X);
                            E({
                                value: t,
                                groupVal: a,
                                financingVal: r,
                                cppart: n
                            });
                            const {
                                carrierPolicyParts: i,
                                carrierPrices: o,
                                hideCarrier: p,
                                price: d
                            } = s;
                            A({
                                value: t,
                                carrierPolicyParts: i,
                                hideCarrier: p,
                                carrierPrices: o,
                                groupVal: a,
                                summaryShown: !e,
                                metricsData: l
                            }), S(d, !1, c), e && N({
                                groupVal: a,
                                isNextGroupOptionFinalOption: e
                            }), re && (le(s), e || se(!0))
                        }
                    }), [E, S, be, J, O, X, A, re, N]), Ce = (0, n.useMemo)((() => ({
                        data: W,
                        disabled: Oe,
                        view: _,
                        isFullWidth: re,
                        selectedPurchaseOption: t,
                        selectedPurchaseGroupType: ee,
                        selectedPurchaseFinancingType: s,
                        selectedCppart: c,
                        handleSelection: De,
                        handleGroupSelectionChange: N,
                        handleCarrierVisibilityChange: C,
                        handlePriceChange: S,
                        isMow: ne,
                        headerRef: Pe,
                        bfil: G
                    })), [W, Oe, _, re, t, ee, s, c, De, N, C, S, ne, Pe, G]);
                    return (0, n.useEffect)((() => {
                        const e = Pe.current;
                        ge && e && e.focus()
                    }), [ge]), (0, n.useEffect)((() => {
                        t || ee || (se(!1), le(), K(!0))
                    }), [t, ee]), (0, m.A)((() => {
                        if (W && t && ee) {
                            const e = J.filter((e => {
                                let {
                                    value: a,
                                    cppart: r
                                } = e;
                                return t === te ? t === a && c === r : t === a
                            }));
                            if (y({
                                    value: t,
                                    groupType: ee,
                                    cppart: c,
                                    foundData: e,
                                    validPurchaseOptions: Q
                                })) {
                                const a = e[0],
                                    r = re && !v(ee, X);
                                r && (le(a), se(!0));
                                const {
                                    carrierPolicyParts: n,
                                    carrierPrices: i,
                                    hideCarrier: s,
                                    price: o,
                                    addonPrice: c
                                } = a;
                                A({
                                    value: t,
                                    groupVal: ee,
                                    carrierPolicyParts: n,
                                    hideCarrier: s,
                                    carrierPrices: i,
                                    summaryShown: r,
                                    shouldSkipScroll: !0,
                                    isPOHidden: !l().isEmpty(ae)
                                }), S(o, !1, c)
                            } else b(), se(!1), me(!1)
                        }
                        const {
                            headerPrices: e
                        } = W, a = l().get(e, "default", "");
                        if (!W || j || t || ee || S(a, !0, l().get(e, "addonDescription", "")), W && j && !t && !ee && S(a, !1, l().get(e, "addonDescription", "")), W && ee && !t) {
                            const t = l().get(e, `[${ee}]`, a);
                            S(t, !0)
                        }
                        K(!0), x && j && !l().isEmpty(Z) && D(Z)
                    }), [W]), (0, n.useEffect)((() => {
                        if (ae) {
                            const {
                                value: e,
                                groupType: t,
                                carrierPolicyParts: a,
                                carrierPrices: r,
                                price: n,
                                addonPrice: i
                            } = ae;
                            E({
                                value: e,
                                groupVal: t
                            }), A({
                                value: e,
                                groupVal: t,
                                carrierPolicyParts: a,
                                hideCarrier: 1 === l().get(a, "length"),
                                carrierPrices: r,
                                summaryShown: !1,
                                isPOHidden: !0
                            }), S(n, !1, i), me(!0)
                        } else de && me(!1)
                    }), [ae]), (0, n.useEffect)((() => {
                        me(R)
                    }), [R]), i().createElement(h.Provider, {
                        value: Ce
                    }, M && i().createElement("div", {
                        className: o()("rf-po-bfe-purchaseoptions-wrapper", `rf-po-bfe-purchaseoptions-view-${_}`, {
                            "rf-po-bfe-purchaseoptions-hidden": de
                        }),
                        style: {
                            minHeight: he
                        }
                    }, i().createElement("h2", (0, r.A)({
                        className: o()("rf-po-bfe-purchaseoptions-header", {
                            [d.A.EYEBROW]: !ne,
                            [d.A.EYEBROW_SUPER]: ne
                        })
                    }, (0, u.OH)(Ae), {
                        tabIndex: -1,
                        ref: Pe,
                        id: "rf-po-bfe-purchaseoptions-label"
                    })), ne && k, i().createElement("div", {
                        className: o()("row", {
                            "rf-po-bfe-purchaseoptions-wrapper-disabled": Oe
                        })
                    }, i().createElement("div", {
                        className: "rf-po-bfe-purchaseoptions",
                        style: {
                            minHeight: Ee
                        }
                    }, re && i().createElement(P, {
                        shouldShow: ie,
                        summaryData: ce,
                        paymentOptionsAllyTxt: Ne,
                        onEditSelection: () => {
                            O(), se(!1)
                        },
                        editLabel: ye,
                        adjustHeight: fe
                    }), i().createElement(oe, {
                        shouldShow: !re || !ie
                    }), ge && i().createElement("button", {
                        type: "button",
                        onClick: () => {
                            se(!0);
                            const {
                                carrierPolicyParts: e,
                                carrierPrices: a,
                                hideCarrier: r,
                                price: n
                            } = ce;
                            A({
                                value: t,
                                groupVal: ee,
                                carrierPolicyParts: e,
                                hideCarrier: r,
                                carrierPrices: a,
                                summaryShown: !0
                            }), S(n)
                        },
                        className: `link rf-po-bfe-purchaseoptions-collapse-btn ${d.A.BODY_REDUCED}`,
                        "data-autom": "purchaseoption-collapse-link",
                        id: "purchaseoption-collapse-btn",
                        "aria-labelledby": "purchaseoption-collapse-btn rf-po-bfe-purchaseoptions-label"
                    }, i().createElement("span", (0, r.A)({
                        className: "icon icon-after icon-chevronup"
                    }, (0, u.OH)(U.collapse || ve))))), i().createElement("div", null, F ? V && V.map(((e, t) => i().createElement("div", {
                        key: l().get(e, "infoTitle", t),
                        className: o()("rf-po-bfe-purchaseoptions-decision-support", {
                            "rf-bfe-stepoptions-disabled": w
                        })
                    }, i().createElement(f.A, {
                        content: e,
                        sectionKey: `${I}_${t}`,
                        disabled: w || de
                    })))) : V && i().createElement("div", {
                        className: o()("rf-po-bfe-purchaseoptions-decision-support", {
                            "rf-bfe-stepoptions-disabled": w
                        })
                    }, i().createElement(f.A, {
                        content: V,
                        sectionKey: I,
                        disabled: w || de
                    }))))))
                };
            var me = a(3709);
            const ue = (e, t) => {
                    let {
                        onLayout: a = l().noop,
                        stepKey: s,
                        fullWidth: c,
                        purchaseOptions: p,
                        dimensionSelections: d,
                        tradeInData: m,
                        accessorySelection: u,
                        prevStepComplete: f,
                        disabled: h,
                        stepHidden: E,
                        handlePurchaseOptionsComplete: b,
                        handlePurchaseOptionsEdit: O,
                        handlePurchaseOptionsGroupChange: g,
                        handlePurchaseOptionsPriceChange: A,
                        handlePOVisibilityChange: y = l().noop,
                        handleColdStateCarrierData: v,
                        fetchPurchaseOptionOnLoad: N,
                        className: P,
                        iUpState: D,
                        onVisible: C,
                        bfil: S,
                        kitProduct: H,
                        useDisabledValueWhenComplete: T,
                        generateUrlForPO: w,
                        ..._
                    } = e;
                    const [$, I] = (0, n.useState)(!1), [R, B] = (0, n.useState)(!1);
                    (0, n.useLayoutEffect)((() => {
                        $ && a()
                    }), [$, a]), (0, n.useEffect)((() => {
                        $ && C()
                    }), [$]), (0, n.useEffect)((() => {
                        E && $ && I(!1)
                    }), [E]);
                    const {
                        selectedPurchaseOption: k,
                        selectedPurchaseGroupType: G,
                        selectedPurchaseFinancingType: L,
                        selectedCppart: Y,
                        handlePurchaseOptionsChange: U,
                        isPurchaseOptionsComplete: V,
                        defaultPurchaseOptionType: F
                    } = p, x = l().get(window, "PURCHASE_OPTIONS_BOOTSTRAP.useBasePart", !0), M = l().get(window, "PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products", []), K = l().get(window, "NAMED_ASSETS.isColdStateEnabled", ""), W = l().get(D, "iUpEnabled", !1), j = c ? "full-width" : "right-rail", z = H ? JSON.stringify(H) : "", q = (0, n.useMemo)((() => w({
                        prevStepComplete: f,
                        fullWidth: c,
                        dimensionSelections: d,
                        useBasePart: x,
                        kitProduct: H,
                        productsData: M,
                        tradeInData: m,
                        accessorySelection: u,
                        bfil: S,
                        fetchPurchaseOptionOnLoad: N
                    })), [d, u, m, f, S, z]);
                    return i().useEffect((() => {
                        $ && window.asMetrics ? .update()
                    }), [$]), window.PURCHASE_OPTIONS_BOOTSTRAP ? i().createElement("div", {
                        className: o()("rf-bfe-purchase-options", P, {
                            "rf-bfe-purchase-options-fullwidth": c,
                            "rf-bfe-purchase-options-visible": $
                        }),
                        "data-analytics-section": $ ? s : void 0,
                        "data-step-enabled": !h || void 0,
                        "data-observer-key": s,
                        ref: t
                    }, i().createElement(me.A, {
                        visible: $,
                        disableAnimate: !c || K,
                        view: j,
                        isSpinnerVisible: R
                    }, i().createElement(de, (0, r.A)({
                        selectedPurchaseOption: k || l().get(D, "purchaseOptVal"),
                        selectedPurchaseGroupType: G || l().get(D, "purchaseOptGrp"),
                        defaultPurchaseOptionType: F,
                        selectedPurchaseFinancingType: L,
                        selectedCppart: Y,
                        handleChange: U,
                        handleReset: () => O(!0),
                        handleEditSelection: e => O(!1, e),
                        handleSelectionComplete: f ? b : void 0,
                        handleGroupSelectionChange: g,
                        handleColdStateCarrierData: v,
                        handlePriceChange: f ? A : void 0,
                        disabled: !(!T && V) && h,
                        bootstrap: window.PURCHASE_OPTIONS_BOOTSTRAP,
                        view: j,
                        url: q,
                        stepKey: s,
                        onDataLoaded: () => {
                            I(!W && !0), f && E && y(!0)
                        },
                        onDataLoading: B,
                        isStepHidden: W || E,
                        hasColdStart: N,
                        bfil: S,
                        isPurchaseOptionsComplete: V
                    }, _)))) : null
                },
                fe = i().forwardRef(ue)
        }
    }
]);