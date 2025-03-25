/*! 2.27.5 | BH: 82084e3aac5616ae8770 | CH: 88800c9b6c */
/*! License information is available at licenses.txt */
"use strict";
(self.webpackChunkrs_iphone = self.webpackChunkrs_iphone || []).push([
    [8314], {
        373: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => m,
                getDimensions: () => n,
                getProducts: () => o
            });
            var r = s(2224),
                a = s.n(r),
                i = s(4704);

            function n(e) {
                const t = a().get(e, "addOnGroupData.dimensionDisplay");
                if (t) return t.map((e => ({ ...e,
                    key: e.dimension
                })));
                return [{
                    dimension: "productDimension",
                    productDimension: !0,
                    key: "productDimension",
                    options: a().get(e, "addOnGroupData.addOns.items", []).map((e => ({
                        value: e.value.partNumber,
                        priceHtml: e.value.priceString,
                        text: e.value.name
                    })))
                }]
            }

            function o(e) {
                return a().get(e, "addOnGroupData.addOns.items", []).map((e => {
                    const {
                        partNumber: t,
                        dimensionValues: s
                    } = e.value;
                    if (s) {
                        return {
                            part: t,
                            dimensions: Object.keys(s).reduce(((e, t) => (e[t] = a().get(s, `[${t}].key`, ""), e)), {})
                        }
                    }
                    return {
                        part: t,
                        dimensions: {
                            productDimension: t
                        }
                    }
                }))
            }

            function c(e) {
                let {
                    part: t,
                    options: s
                } = e;
                const r = s.selectedValue;
                return a().isNull(t) || "string" != typeof t ? r || null : t
            }

            function l(e) {
                let {
                    accessoryKey: t,
                    state: s,
                    part: r
                } = e;
                return s.placeHolder === t || r ? "open" : "closed"
            }
            const u = e => {
                    let {
                        accessoryKey: t,
                        sectionId: s,
                        updatesForSlot: r,
                        defaultPriceHtml: i,
                        installmentsDict: n,
                        upgradeAccessoryDict: o
                    } = e;
                    const c = a().get(r, `validatedParameters[${t}]`),
                        l = a().get(r, "stepSummaryItems", []),
                        u = a().get(r, "configData.differentialInstallmentPrices"),
                        {
                            price: d
                        } = a().find(l, {
                            partNumber: c
                        }) || {},
                        p = a().get(r, `configData.addOnGroups[${s}].items`, []),
                        m = a().find(p, (e => {
                            let {
                                value: s = {}
                            } = e;
                            return s.groupKey === t
                        })),
                        g = a().get(m, "value.addOns.items", []),
                        y = a().find(g, (e => e.value.partNumber === c)) || a().get(g, "0", {}),
                        {
                            templateId: v,
                            priceData: D = {},
                            acmiAssets: f,
                            staticAssets: P,
                            installmentPrice: S
                        } = a().get(n, a().get(y, "value.partNumber"), {}),
                        {
                            appleUpgradeAccessory: O,
                            showAccessoryPrice: h
                        } = a().get(o, a().get(y, "value.partNumber"), !1),
                        {
                            templateId: A = v,
                            priceData: b = D,
                            acmiAssets: I = f,
                            staticAssets: H = P,
                            installmentPrice: k = S,
                            overridePriceWithInstallment: G
                        } = a().get(y, "value", {}),
                        T = a().get(y, "value.price.creditOffer.downPaymentMessages.downPaymentWithAmount", ""),
                        w = G ? k : "",
                        {
                            fullPrice: x,
                            monthlyPrice: K,
                            tierListSavings: N,
                            segmentSavings: L
                        } = b || {};
                    return {
                        templateId: A,
                        priceData: {
                            fullPrice: x,
                            monthlyPrice: K,
                            tierListSavings: N,
                            segmentSavings: L
                        },
                        assets: { ...I,
                            ...H,
                            downPayment: T
                        },
                        isSummaryPrice: Boolean(d),
                        priceHtml: w || d || i,
                        differentialInstallmentPrices: u,
                        iupAccessory: O,
                        showAccessoryPrice: h
                    }
                },
                d = "&lt;groupPriceString&gt;",
                p = "&lt;violatorTranslatedText&gt;",
                m = e => {
                    let {
                        dataToParse: {
                            configData: t,
                            options: s
                        },
                        slotDataToParse: r,
                        state: m,
                        selection: g,
                        part: y,
                        updatesForSlot: v,
                        uuid: D
                    } = e;
                    const f = function(e, t) {
                        const s = a().get(e, "addOnGroupData.addOns.items", []),
                            r = s.reduce(((e, s) => {
                                const r = s.value.dimensionValues;
                                return r && Object.keys(r).forEach((i => {
                                    if (r[i]) {
                                        const n = a().get(r, `[${i}].key`);
                                        e[i] = e[i] || {}, n && (e[i][n] = {
                                            text: r[i].value,
                                            sortOrder: s.value.sortOrder,
                                            priceHtml: s.value.priceString,
                                            desc: a().get(t, `${n}OptionDesc`),
                                            summaryDesc: a().get(t, `${n}SummaryOptionDesc`)
                                        })
                                    } else e[i] = {}
                                })), e
                            }), {});
                        return {
                            installments: s.reduce(((e, t) => {
                                const {
                                    overridePriceWithInstallment: s,
                                    installmentPrice: r,
                                    partNumber: i
                                } = a().get(t, "value"), n = s ? r : "";
                                return e[i] = {
                                    installmentPrice: n
                                }, e
                            }), {}),
                            dimensions: r,
                            upgradeAccessoryDict: s.reduce(((e, t) => {
                                const {
                                    showAccessoryPrice: s = !1,
                                    appleUpgradeAccessory: r = !1,
                                    partNumber: i
                                } = a().get(t, "value");
                                return e[i] = {
                                    appleUpgradeAccessory: r,
                                    showAccessoryPrice: s
                                }, e
                            }), {})
                        }
                    }(t, s);
                    return {
                        meta: {
                            slotId: a().get(r, "stepData.slotStepId", D),
                            labels: a().get(r, "stepData.labels"),
                            stackedLayout: a().get(r, "stepData.isStackedLayout"),
                            sectionId: s.slotSectionId,
                            accessoryKey: s.accessoryKey,
                            title: a().get(t, "addOnGroupData.title"),
                            iptText: a().get(t, "addOnGroupData.fromPrice.iptText"),
                            shortDescriptionHtml: s.shortDescription,
                            eligiblePurchaseOptions: s ? .eligiblePurchaseOptions,
                            overlay: {
                                title: (0, i.A)(s.overlayGroupTitle),
                                subHeader: s.overlayGroupSubHeader,
                                footnotesHtml: (0, i.A)(s.overlayFootnotes),
                                hiddenText: s.overlayPlanSelectionHiddenText
                            },
                            descriptionHtml: a().get(t, "addOnGroupData.description"),
                            last: s.last,
                            priceInfo: u({
                                accessoryKey: s.accessoryKey,
                                sectionId: s.slotSectionId,
                                defaultPriceHtml: s.groupPriceString,
                                updatesForSlot: v,
                                installmentsDict: f.installments,
                                upgradeAccessoryDict: f.upgradeAccessoryDict
                            }) || d,
                            violatorTranslatedText: p,
                            status: l({
                                accessoryKey: s.accessoryKey,
                                state: m,
                                part: y
                            }),
                            tierListSavings: a().get(t, "addOnGroupData.fromPrice.tierListSavings"),
                            segmentSavings: a().get(t, "addOnGroupData.fromPrice.segmentSavings")
                        },
                        productSelection: {
                            part: c({
                                part: y,
                                options: s
                            }),
                            selection: g,
                            bootstrap: {
                                dimensions: n(t),
                                products: o(t),
                                dictionaries: f
                            }
                        },
                        handleUpdates: () => !0
                    }
                }
        },
        4704: (e, t, s) => {
            s.d(t, {
                A: () => r
            });
            const r = e => {
                if (!e) return "";
                const t = document.createElement("textarea");
                return t.innerHTML = e, t.value
            }
        }
    }
]);