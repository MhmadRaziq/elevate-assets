/*! 2.27.5 | BH: 82084e3aac5616ae8770 | CH: 88800c9b6c */
/*! License information is available at licenses.txt */
"use strict";
(self.webpackChunkrs_iphone = self.webpackChunkrs_iphone || []).push([
    [2531], {
        705: (e, t, s) => {
            s.d(t, {
                A: () => a
            });
            const a = Object.freeze({
                HIDDEN: "hidden",
                DISABLED: "disabled",
                COMPLETE: "complete",
                ENABLED: "enabled"
            })
        },
        5992: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => f
            });
            var a = s(2224),
                o = s.n(a),
                r = s(4704),
                i = s(705);

            function n(e) {
                let {
                    state: t,
                    onChange: s
                } = e;
                const a = { ...t,
                    formFields: {}
                };
                return t.sectionKeyList.forEach((e => {
                    const {
                        accessories: s,
                        accessoryKeyList: o
                    } = t.sections[e];
                    o.forEach((e => {
                        a.formFields[`ao.${e}`] = s[e].part || "none"
                    }))
                })), s(a)
            }

            function c(e) {
                let {
                    preselection: t = {}
                } = e;
                if (o().isEmpty(t)) return !1;
                const s = [];
                return Object.values(t).forEach((e => {
                    "none" === e.part ? s.push(!0) : s.push(!1)
                })), 0 === s.filter((e => !1 === e)).length
            }
            const l = e => {
                    let {
                        state: t,
                        onChange: s
                    } = e;
                    return e => a => {
                        let {
                            newState: r,
                            currentAccessoryKey: i
                        } = a;
                        const c = o().get(t, `sections.${e.id}.accessories.${i}`),
                            l = null !== o().get(c, "part", null),
                            d = { ...t.sections[e.id].accessories,
                                [i]: {
                                    part: r.part,
                                    selection: r.selection,
                                    defaultAddOn: c.defaultAddOn
                                }
                            },
                            p = { ...t.sections[e.id],
                                accessories: d,
                                isValid: !0,
                                completed: r.part || l
                            },
                            g = o().get(r, "dimensions.0.options", []),
                            u = {
                                id: t.id,
                                placeHolder: r && r.part ? i : t.placeHolder,
                                noAppleCareClicked: t.noAppleCareClicked,
                                sectionKeyList: t.sectionKeyList,
                                sections: { ...t.sections,
                                    [e.id]: p
                                },
                                wasDrawerOpen: g.length > 1,
                                summaryShown: r && r.part && g.length > 1
                            };
                        if (!0 === e.exclusive && null !== u.sections[e.id].accessories[i].part) {
                            u.sections[e.id].accessoryKeyList.filter((e => e !== i)).forEach((t => {
                                const s = o().get(r, `sections.${e.id}.accessories.${t}.defaultAddOn`);
                                u.sections[e.id].accessories[t] = {
                                    part: null,
                                    selection: {},
                                    defaultAddOn: s
                                }
                            }))
                        }
                        return n({
                            state: u,
                            onChange: s
                        })
                    }
                },
                d = e => {
                    let {
                        state: t,
                        onChange: s
                    } = e;
                    return e => {
                        let {
                            placeHolder: a,
                            noAppleCareClicked: r = !1
                        } = e;
                        if (o().isEmpty(t)) return !0;
                        const i = { ...t
                        };
                        return i.placeHolder = a, i.noAppleCareClicked = r, i.summaryShown = !1, t.sectionKeyList.forEach((e => {
                            t.sections[e].accessoryKeyList.forEach((t => {
                                const s = o().get(i, `sections.${e}.accessories.${t}.defaultAddOn`);
                                i.sections[e].accessories[t] = {
                                    part: null,
                                    selection: {},
                                    defaultAddOn: s
                                }
                            })), i.sections[e].completed = r
                        })), n({
                            state: i,
                            onChange: s
                        })
                    }
                },
                p = e => {
                    let {
                        state: t,
                        onChange: s,
                        updatesForSlot: a
                    } = e;
                    return () => {
                        if (o().isEmpty(t) || a.state !== i.A.COMPLETE) return !1;
                        const e = o().get(a, "configData.enabledSections"),
                            r = o().get(a, "validatedParameters");
                        if (o().isEmpty(e) || o().isEmpty(r)) return !1;
                        const c = Object.keys(e)[0],
                            l = Object.keys(r)[0],
                            d = r[l],
                            p = o().get(t, `sections.${c}.accessories`);
                        if (o().some(p, (e => e.part && e.part !== d)) || o().get(p, `${l}.part`) === d) return !1;
                        const g = { ...t
                            },
                            u = o().get(g, `sections.${c}.accessories.${l}.defaultAddOn`);
                        return g.sections[c].accessories[l] = {
                            defaultAddOn: u,
                            part: d,
                            selection: {}
                        }, n({
                            state: g,
                            onChange: s
                        })
                    }
                };
            const g = e => {
                let {
                    accessoryKey: t,
                    sectionId: s,
                    defaultPriceHtml: a,
                    installmentData: r,
                    updatesForSlot: i
                } = e;
                const n = o().get(i, `validatedParameters[${t}]`),
                    c = o().get(i, "stepSummaryItems", []),
                    l = o().get(i, "configData.differentialInstallmentPrices"),
                    {
                        price: d
                    } = o().find(c, {
                        partNumber: n
                    }) || {},
                    p = o().get(i, `configData.addOnGroups[${s}].items[0].value.addOns.items`),
                    g = find(p, (e => e.value.partNumber === n)) || o().get(p, "0", {}),
                    {
                        templateId: u,
                        priceData: m = {},
                        acmiAssets: f,
                        staticAssets: y,
                        installmentPrice: h
                    } = o().get(r, o().get(g, "value.partNumber"), {}),
                    {
                        templateId: v = u,
                        priceData: D = m,
                        acmiAssets: S = f,
                        staticAssets: O = y,
                        installmentPrice: A = h,
                        overridePriceWithInstallment: C
                    } = o().get(g, "value", {}),
                    P = C ? A : "",
                    {
                        fullPrice: T,
                        monthlyPrice: L,
                        tierListSavings: b,
                        segmentSavings: w
                    } = D || {};
                return {
                    templateId: v,
                    priceData: {
                        fullPrice: T,
                        monthlyPrice: L,
                        tierListSavings: b,
                        segmentSavings: w
                    },
                    assets: { ...S,
                        ...O
                    },
                    isSummaryPrice: Boolean(d),
                    differentialInstallmentPrices: l,
                    defaultPrice: P || d || a
                }
            };

            function u(e, t, s) {
                return e.map((e => ({
                    id: e.id,
                    accessoriesLength: e.slotAccessories.length,
                    accessories: e.slotAccessories.map((e => {
                        const a = window.pageLevelData[e];
                        return {
                            id: o().get(a, "options.accessoryKey"),
                            title: o().get(a, "configData.addOnGroupData.title"),
                            priceHtml: o().get(a, "options.groupPriceString"),
                            iptText: o().get(a, "configData.addOnGroupData.fromPrice.iptText"),
                            iupAccessory: o().get(a, "options.appleUpgradeAccessory"),
                            differentialPrice: o().get(t, `configData.differentialInstallmentPrices.${e}.differentialPrice`),
                            descriptionHtml: o().get(a, "configData.addOnGroupData.description"),
                            infoGraphicHtml: (0, r.A)(o().get(a, "infoGraphic", "")),
                            installmentPrice: o().get(a, "configData.addOnGroupData.addOns.items[0].value.installmentPrice"),
                            learnMoreHtml: o().get(a, "configData.addOnGroupData.learnMore"),
                            overridePriceWithInstallment: o().get(a, "configData.addOnGroupData.addOns.items[0].value.overridePriceWithInstallment"),
                            priceInfo: g({
                                accessoryKey: o().get(a, "options.accessoryKey"),
                                sectionId: o().get(a, "options.slotSectionId"),
                                defaultPriceHtml: o().get(a, "options.groupPriceString"),
                                installmentData: s,
                                updatesForSlot: t
                            })
                        }
                    }))
                })))
            }

            function m(e) {
                return e.map((e => ({
                    id: e.id,
                    accessoriesLength: e.slotAccessories.length,
                    accessories: e.slotAccessories.map((e => {
                        const t = window.pageLevelData[e];
                        return {
                            id: o().get(t, "options.accessoryKey"),
                            iptTextHtml: o().get(t, "configData.addOnGroupData.fromPrice.iptText")
                        }
                    }))
                })))
            }
            const f = e => {
                let {
                    preselection: t = {},
                    updates: s = {},
                    dataToParse: a = {},
                    state: r,
                    onChange: i
                } = e;
                const n = a.stepData.slotStepId,
                    g = o().get(s, `[${n}]`, {}),
                    {
                        sections: f,
                        initialState: y,
                        status: h
                    } = function(e) {
                        let {
                            dataToParse: t,
                            preselection: s,
                            updatesForSlot: a
                        } = e;
                        return t.stepData.slotSections.reduce(((e, t) => {
                            const r = t;
                            r.isEnabled = o().get(a, `configData.enabledSections[${r.id}]`, !1);
                            const i = r.slotAccessories.map((e => e));
                            return e.initialState.sections[r.id] = {
                                isValid: !1,
                                accessoryKeyList: i,
                                accessories: {}
                            }, r.accessoryDataList = i.map((t => {
                                const a = o().get(window, `pageLevelData[${t}]`),
                                    i = o().get(a, "options.defaultAddOn");
                                return a.accessoryKey = t, e.initialState.sections[r.id].accessories[t] = {
                                    defaultAddOn: i,
                                    part: o().get(s, `${t}.part`) || null,
                                    selection: o().get(s, `${t}.part`) ? {
                                        part: o().get(s, `${t}.part`)
                                    } : {}
                                }, a
                            })), e.sections.push(r), e
                        }), {
                            sections: [],
                            initialState: {
                                id: t.stepData.slotStepId,
                                sectionKeyList: t.stepData.slotSections.map((e => e.id)),
                                sections: {}
                            },
                            status: a.state || t.state
                        })
                    }({
                        updatesForSlot: g,
                        preselection: t,
                        dataToParse: a
                    }),
                    v = o().get(a, "stepData.namedFragments") || {},
                    D = o().get(a, "stepData.accessoryStepVideo"),
                    S = D ? function(e) {
                        const {
                            videoId: t,
                            posterImage: s,
                            videoImage: a,
                            isStageRevision: r,
                            files: i,
                            translatedFragmentText: n,
                            showTranscriptText: c,
                            hideTranscriptText: l,
                            sectionFooter: d
                        } = e, p = o().get(s, "srcSet.src"), g = o().get(a, "srcSet.src"), u = o().get(i, "mp4.src"), m = o().get(i, "m4v.src"), f = o().get(i, "hls.src"), y = o().get(i, "webm.src"), h = o().get(i, "quicktime.src"), v = o().get(i, "vtt.src"), D = [];
                        return v && D.push({
                            src: v,
                            label: e.captionLanguage,
                            srclang: e.captionLanguageCode,
                            mode: "hidden"
                        }), {
                            id: t,
                            sectionFooter: d,
                            crossOrigin: r ? "use-credentials" : "anonymous",
                            src: f || u || m || y || h,
                            tracks: D,
                            poster: g || p,
                            transcript: n,
                            transcriptAssets: {
                                transcriptContent: n,
                                showTranscriptText: c,
                                hideTranscriptText: l
                            }
                        }
                    }(D) : null,
                    O = function(e) {
                        let t;
                        return o().get(e, "stepData.slotSections", []).map((e => {
                            e.slotAccessories.map((e => {
                                const s = window.pageLevelData[e],
                                    a = o().get(s, "configData.addOnGroupData.addOns.items", []);
                                t = a.reduce(((e, t) => {
                                    const {
                                        overridePriceWithInstallment: s,
                                        installmentPrice: a,
                                        acmiAssets: r = {},
                                        staticAssets: i = {},
                                        partNumber: n,
                                        priceData: c,
                                        templateId: l
                                    } = o().get(t, "value"), d = s ? a : "", {
                                        fullPrice: p,
                                        monthlyPrice: g,
                                        tierListSavings: u,
                                        segmentSavings: m
                                    } = c || {};
                                    return e[n] = {
                                        templateId: l,
                                        priceData: {
                                            fullPrice: p,
                                            monthlyPrice: g,
                                            tierListSavings: u,
                                            segmentSavings: m
                                        },
                                        acmiAssets: r,
                                        staticAssets: i,
                                        installmentPrice: d
                                    }, e
                                }), {})
                            }))
                        })), t
                    }(a);
                return {
                    meta: {
                        header: a.stepData.header,
                        isNoneSelected: c({
                            preselection: t
                        }),
                        showNoneOption: a.showNoneOption,
                        subHeader: v.subHeader,
                        subHeaderA11yText: v.subHeaderA11yText,
                        noAppleCareCoverage: v.slotNoAppleCareCoverage,
                        acDecisionSupportTitle: v.acDecisionSupportTitle,
                        acDecisionSupportDescription: v.acDecisionSupportDescription,
                        acDecisionSupportVideoPreviewImage: v.acDecisionSupportVideoPreviewImage,
                        showNoAppleCareCoverageLast: o().get(window.NAMED_ASSETS, "showNoAppleCareCoverageLast", !0),
                        disableAppleCareAutoSelection: o().get(window.NAMED_ASSETS, "disableAppleCareAutoSelection", !0),
                        headerLearnMoreText: v.headerLearnMoreText,
                        headerCompareCoverageOptionsText: v.headerCompareCoverageOptionsText,
                        footerLearnMoreText: v.footerLearnMoreText,
                        footerLearnMoreMetricText: v.footerLearnMoreMetricText,
                        footerCompareCoverageOptionsText: v.footerCompareCoverageOptionsText,
                        overlay: {
                            chatFeatureHtml: o().get(a, "stepData.chatFeatureSerialized"),
                            imageHtml: v.slotOverlayImage || v.slotOverlayHeader,
                            sectionsWithAccessories: u(a.stepData.slotSections, g, O),
                            showCompareCoverage: o().get(a, "showCompareTable", !1),
                            compareCoverageAssets: {
                                slotOverlayHeader: v.slotOverlayImage ? v.slotOverlayHeader : null,
                                slotOverlayDescription: v.slotOverlayDescription,
                                slotOverlayVideoHeader: v.slotOverlayVideoHeader,
                                slotOverlayVideoDescription: v.slotOverlayVideoDescription,
                                slotOverlayVideoFooter: v.slotOverlayVideoFooter,
                                slotOverlayVideo: S,
                                slotOverlayContent: v.slotOverlayContent,
                                slotOverlayFooter: v.slotOverlayFooter,
                                slotOverlayLearnMore: v.slotOverlayLearnMore,
                                slotOverlaySubDescription: v.slotOverlaySubDescription,
                                slotOverlayTableHeaderHiddenText: v.slotOverlayTableHeaderHiddenText
                            }
                        },
                        sectionsWithAccessories: m(a.stepData.slotSections),
                        labels: o().get(a, "stepData.labels")
                    },
                    slotId: n,
                    sections: f,
                    initialState: y,
                    slotState: r,
                    clearSelectionAndPart: d({
                        state: r,
                        onChange: i
                    }),
                    handleStateChange: l({
                        state: r,
                        onChange: i
                    }),
                    handleUpdates: p({
                        state: r,
                        onChange: i,
                        updatesForSlot: g
                    }),
                    slotStatus: h,
                    updatesForSlot: g
                }
            }
        },
        4704: (e, t, s) => {
            s.d(t, {
                A: () => a
            });
            const a = e => {
                if (!e) return "";
                const t = document.createElement("textarea");
                return t.innerHTML = e, t.value
            }
        }
    }
]);