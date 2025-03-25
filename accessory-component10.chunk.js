/*! 2.27.5 | BH: 82084e3aac5616ae8770 | CH: 88800c9b6c */
/*! License information is available at licenses.txt */
"use strict";
(self.webpackChunkrs_iphone = self.webpackChunkrs_iphone || []).push([
    [7822], {
        5351: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => w
            });
            var l = a(8168),
                r = a(1594),
                s = a.n(r),
                c = a(2224),
                n = a.n(c),
                i = a(6942),
                o = a.n(i),
                m = a(3043),
                p = a(3471),
                d = a(9932),
                u = a(632),
                E = a(1345),
                h = a(7213),
                f = a(9998),
                y = a(5911),
                g = a(6637),
                v = a(4768),
                A = a(705);

            function w(e) {
                let {
                    meta: t,
                    clearSlotSelection: a,
                    dimensions: r,
                    onChange: c,
                    part: i = null,
                    uuid: w,
                    state: H,
                    metrics: O = window.asMetrics,
                    itemsPerRowLarge: N,
                    trayOpen: D,
                    setTrayOpen: $,
                    setSelectedOption: k,
                    setSelectNoAppleCare: x,
                    renderCollapseButton: b,
                    accAdded: C,
                    handleOnDrawerOpen: I,
                    slotStatus: S,
                    onSelectionComplete: T,
                    purchaseOption: F
                } = e;
                const _ = `${t.slotId}_${t.accessoryKey}`,
                    L = n().get(r, "0.options", []),
                    {
                        templateId: P,
                        priceData: B,
                        assets: R,
                        tierListSavings: U,
                        isSummaryPrice: K,
                        priceHtml: V,
                        differentialInstallmentPrices: Y,
                        iupAccessory: q,
                        showAccessoryPrice: M
                    } = n().get(t, "priceInfo", {}),
                    W = n().get(t, "priceInfo.segmentSavings.priceString", ""),
                    j = n().get(Y, `${t.accessoryKey}.differentialPrice`),
                    z = n().get(t, "labels.includedText"),
                    G = n().get(H, "selection.dimensionPaymentType", ""),
                    J = L.filter((e => e.value === G)),
                    Q = n().get(J, "0.text", ""),
                    {
                        viewport: X
                    } = (0, g.S)(),
                    Z = S === A.A.DISABLED || S === A.A.HIDDEN,
                    ee = n().isEmpty(t ? .eligiblePurchaseOptions) || t ? .eligiblePurchaseOptions ? .includes(F);
                return s().useEffect((() => {
                    C && J.length && L.length > 1 && k({
                        value: n().get(J, "0.value", ""),
                        price: n().get(J, "0.priceHtml", ""),
                        text: Q,
                        title: t.title,
                        description: t.shortDescriptionHtml,
                        priceDescription: n().get(J, "0.summaryDesc", ""),
                        iptText: t.iptText
                    })
                }), [C]), s().createElement(s().Fragment, null, 1 === L.length ? r.map((e => ee && s().createElement(s().Fragment, {
                    key: `${e.key}-${w.current}`
                }, e.options.map((a => {
                    const r = `${a.value}-${w.current}`;
                    return s().createElement(s().Fragment, {
                        key: r
                    }, s().createElement(u.gW, {
                        name: t.slotId,
                        value: a.value,
                        checked: e.value === a.value,
                        handleChange: () => {
                            c(e.key, a.value), x(!1), $(!0)
                        },
                        childRight: s().createElement("span", {
                            className: `rf-accessoryslot-fullwidthtile-price ${v.A.BODY_REDUCED}`,
                            "data-autom": `${t.slotId}_price`
                        }, q && !M && s().createElement(s().Fragment, null, j && s().createElement("span", (0, y.OH)(j)), !j && s().createElement("span", (0, y.OH)(z))), (M || !q) && s().createElement(s().Fragment, null, "DEFAULT" === P ? s().createElement(s().Fragment, null, s().createElement("span", (0, y.OH)(V)), !K && s().createElement("span", {
                            className: "rc-prices-savings"
                        }, U), W && s().createElement("div", (0, l.A)({
                            className: "rc-prices-segmentsavings"
                        }, (0, y.OH)(W)))) : s().createElement(f.A, {
                            templateId: P,
                            data: B,
                            assets: R
                        }))),
                        listChild: t.shortDescriptionHtml ? s().createElement(s().Fragment, null, s().createElement("div", (0, l.A)({
                            className: "as-form-choiceselectordesc-list"
                        }, (0, y.OH)(t.shortDescriptionHtml))), t.iptText && s().createElement("div", (0, l.A)({
                            className: `rf-accessoryslot-fullwidthtile-ipttext ${v.A.CAPTION}`
                        }, (0, y.OH)(t.iptText)))) : null,
                        classes: {
                            input: "rf-accessory-applecare-fullwidth-selector",
                            label: "rf-accessory-applecare-fullwidth-label"
                        },
                        tag: "div",
                        threeLine: !0,
                        skipChangeSelection: !0,
                        withAriaLabeledBy: !0,
                        "data-autom": `${_}_open`,
                        isStackedLayout: !0,
                        disabled: Z,
                        className: o()("column", "large-" + 12 / N, "small-12", "rf-accessory-applecare-fullwidth-option")
                    }, s().createElement("span", (0, l.A)({
                        "aria-hidden": "true",
                        className: "as-svgicon-container rf-accessoryslot-fullwidth-quote-icon"
                    }, (0, y.OH)(m))), s().createElement(u._V, {
                        text: t.title
                    })))
                }))))) : s().createElement(s().Fragment, null, s().createElement(u.gW, {
                    id: `${_}_open`,
                    checked: H.placeHolder === t.accessoryKey || "open" === t.status,
                    handleChange: () => {
                        i || a({
                            placeHolder: t.accessoryKey
                        }), O.fireMicroEvent({
                            eVar: "eVar5",
                            slot: "",
                            feature: "Step 1",
                            part: `Add ${t.title}`,
                            action: "selected"
                        }), k({}), x(!1), $(!0)
                    },
                    childRight: s().createElement("span", {
                        className: `rf-accessoryslot-fullwidthtile-price ${v.A.BODY_REDUCED}`,
                        "data-autom": `${t.slotId}_price`
                    }, q && s().createElement(s().Fragment, null, j && s().createElement("span", (0, y.OH)(j)), !j && s().createElement("span", (0, y.OH)(z))), !q && s().createElement(s().Fragment, null, "DEFAULT" === P ? s().createElement(s().Fragment, null, s().createElement("span", (0, y.OH)(V)), !K && s().createElement("span", {
                        className: "rc-prices-savings"
                    }, U), W && s().createElement("div", (0, l.A)({
                        className: "rc-prices-segmentsavings"
                    }, (0, y.OH)(W)))) : s().createElement(f.A, {
                        templateId: P,
                        data: B,
                        assets: R
                    }))),
                    listChild: t.shortDescriptionHtml ? s().createElement(s().Fragment, null, s().createElement("div", (0, l.A)({
                        className: "as-form-choiceselectordesc-list"
                    }, (0, y.OH)(t.shortDescriptionHtml))), t.iptText && s().createElement("div", (0, l.A)({
                        className: `rf-accessoryslot-fullwidthtile-ipttext ${v.A.CAPTION}`
                    }, (0, y.OH)(t.iptText)))) : null,
                    classes: {
                        input: "rf-accessory-applecare-fullwidth-selector",
                        label: "rf-accessory-applecare-fullwidth-label"
                    },
                    tag: "div",
                    threeLine: !0,
                    withAriaLabeledBy: !0,
                    "data-autom": `${_}_open`,
                    name: t.slotId,
                    isStackedLayout: !0,
                    disabled: Z,
                    skipChangeSelection: !0,
                    className: o()("column", "large-" + 12 / N, "small-12", "rf-accessory-applecare-fullwidth-option")
                }, s().createElement("span", (0, l.A)({
                    "aria-hidden": "true",
                    className: "as-svgicon-container rf-accessoryslot-fullwidth-quote-icon"
                }, (0, y.OH)(m))), s().createElement(u._V, {
                    text: t.title
                })), s().createElement(h.x, { in: "open" === t.status && D,
                    className: o()("column", "large-12", "small-12", "rf-accessory-applecare-fullwidth-traywrapper"),
                    onEntered: () => I(t.slotId)
                }, s().createElement("div", {
                    className: "rf-accessory-applecare-fullwidth-tray"
                }, s().createElement("fieldset", {
                    "aria-describedby": "rf-accessory-applecare-fullwidth-tray-footer"
                }, s().createElement("legend", null, t.overlay.title && s().createElement("h3", (0, l.A)({
                    className: `rf-accessory-applecare-fullwidth-tray-header ${v.A.BODY_REDUCED}`
                }, (0, y.OH)(t.overlay.title)))), s().createElement("div", {
                    className: "row"
                }, s().createElement("div", {
                    className: "large-6 small-12 rf-accessory-applecare-fullwidth-trayoption"
                }, r.map((e => s().createElement(d.A, {
                    key: `${e.key}-${w.current}`
                }, e.options.map((a => {
                    const r = `${a.value}-${w.current}`;
                    return s().createElement(s().Fragment, {
                        key: r
                    }, s().createElement(p.Ay, (0, l.A)({
                        name: e.key,
                        value: a.value,
                        checked: e.value === a.value
                    }, (0, E.b)((() => {
                        c(e.key, a.value), k({
                            value: a.value,
                            price: a.priceHtml,
                            text: a.text,
                            title: t.title,
                            description: t.shortDescriptionHtml,
                            priceDescription: a.summaryDesc,
                            iptText: t.iptText
                        }), $(!1), T()
                    }), !0), {
                        disabled: a.disabled,
                        key: a.value,
                        "data-autom": `${t.sectionId}_${a.value}`
                    }), s().createElement("span", {
                        className: "row"
                    }, s().createElement("span", {
                        className: "form-selector-left-col column large-6"
                    }, s().createElement("span", (0, y.OH)(a.text)), a.desc && s().createElement(u.ED, {
                        text: a.desc
                    })), s().createElement("span", (0, l.A)({
                        className: "form-selector-right-col column large-6"
                    }, (0, y.OH)(a.priceHtml))))))
                })))))), s().createElement("div", {
                    className: "large-6 small-12"
                }, s().createElement("div", (0, l.A)({
                    id: "rf-accessory-applecare-fullwidth-tray-footer",
                    className: `rf-accessory-applecare-fullwidth-tray-footer ${v.A.CAPTION}`
                }, (0, y.OH)(t.overlay.footnotesHtml)))))))), "small" === X && "open" === t.status && s().createElement("div", {
                    className: "column small-12"
                }, b())))
            }
        }
    }
]);