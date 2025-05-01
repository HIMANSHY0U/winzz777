import {
    _ as e,
    u as t,
    c as a,
    o as l,
    w as o,
    d as s,
    b as i,
    i as r,
    n,
    v as c,
    y as d,
    z as u,
    e as m,
    q as g,
    F as f,
    t as y,
    A as p
} from "./index-DMsdlv-S.js";
import "./TipsPopup.B1D9Hh3C.js";
const b = e({
        __name: "NormalTabsItem",
        props: {
            title: {
                type: String,
                default: ""
            },
            badge: {
                type: String,
                default: ""
            },
            isActive: {
                type: Boolean,
                default: !1
            },
            normalColor: {
                type: String,
                default: "#fff"
            },
            activeColor: {
                type: String,
                default: "#FFDF3F"
            },
            size: {
                type: String,
                default: "normal"
            }
        },
        setup(e) {
            const g = t();
            return (t, f) => {
                const y = r;
                return l(), a(y, {
                    class: "normal-tabs-item-container"
                }, {
                    default: o((() => [s(y, {
                        class: c(["title", {
                            active: e.isActive
                        }]),
                        style: n({
                            color: e.isActive ? e.activeColor : e.normalColor
                        })
                    }, {
                        default: o((() => [d(u(e.title || ""), 1)])),
                        _: 1
                    }, 8, ["class", "style"]), e.badge ? (l(), a(y, {
                        key: 0,
                        class: "badge-view",
                        style: n({
                            "background-image": m(g).imageCssUrl.iconBadgeRed
                        })
                    }, {
                        default: o((() => [d(u(e.badge || ""), 1)])),
                        _: 1
                    }, 8, ["style"])) : i("", !0), s(y, {
                        class: "line-view"
                    }, {
                        default: o((() => [e.isActive ? (l(), a(y, {
                            key: 0,
                            class: "line",
                            style: n({
                                background: e.activeColor
                            })
                        }, null, 8, ["style"])) : i("", !0), e.isActive ? (l(), a(y, {
                            key: 1,
                            class: "triangle-up",
                            style: n({
                                "border-bottom-color": e.activeColor
                            })
                        }, null, 8, ["style"])) : i("", !0)])),
                        _: 1
                    })])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-d93cd8a4"]
    ]),
    v = e({
        __name: "SmallTabsItem",
        props: {
            title: {
                type: String,
                default: ""
            },
            badge: {
                type: String,
                default: ""
            },
            isActive: {
                type: Boolean,
                default: !1
            },
            normalColor: {
                type: String,
                default: "#fff"
            },
            activeColor: {
                type: String,
                default: "#FFDF3F"
            },
            size: {
                type: String,
                default: "normal"
            }
        },
        setup(e) {
            const g = t();
            return (t, f) => {
                const y = r;
                return l(), a(y, {
                    class: "normal-tabs-item-container"
                }, {
                    default: o((() => [s(y, {
                        class: c(["title", {
                            active: e.isActive
                        }]),
                        style: n({
                            color: e.isActive ? e.activeColor : e.normalColor
                        })
                    }, {
                        default: o((() => [d(u(e.title || ""), 1)])),
                        _: 1
                    }, 8, ["class", "style"]), e.badge ? (l(), a(y, {
                        key: 0,
                        class: "badge-view",
                        style: n({
                            "background-image": m(g).imageCssUrl.iconBadgeRed
                        })
                    }, {
                        default: o((() => [d(u(e.badge || ""), 1)])),
                        _: 1
                    }, 8, ["style"])) : i("", !0), s(y, {
                        class: "line-view"
                    }, {
                        default: o((() => [e.isActive ? (l(), a(y, {
                            key: 0,
                            class: "line",
                            style: n({
                                background: e.activeColor
                            })
                        }, null, 8, ["style"])) : i("", !0)])),
                        _: 1
                    })])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-f1be493a"]
    ]),
    C = e({
        __name: "NormalTabs",
        props: {
            tabList: {
                type: Array,
                default: () => []
            },
            defaultIndex: {
                type: Number,
                default: 0
            },
            modelValue: {
                type: Number,
                default: 0
            },
            normalColor: {
                type: String,
                default: "#fff"
            },
            activeColor: {
                type: String,
                default: "#FFDF3F"
            },
            size: {
                type: String,
                default: "normal"
            }
        },
        emits: ["change", "update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const i = t,
                n = e;
            return (t, d) => {
                const u = r;
                return l(), a(u, {
                    class: "normal-tabs-container"
                }, {
                    default: o((() => [s(u, {
                        class: "normal-tabs-view"
                    }, {
                        default: o((() => [(l(!0), g(f, null, y(e.tabList, ((t, s) => (l(), a(u, {
                            key: s,
                            onClick: p((e => ((e, t) => {
                                n.modelValue !== t && (i("update:modelValue", t), i("change", {
                                    item: e,
                                    index: t
                                }))
                            })(t, s)), ["stop"]),
                            class: c({
                                "tab-count-3": 3 === e.tabList.length,
                                "tab-count-2": 2 === e.tabList.length,
                                "tab-count-1": 1 === e.tabList.length
                            })
                        }, {
                            default: o((() => ["small" === e.size ? (l(), a(v, {
                                key: 0,
                                title: t.title,
                                badge: t.badge,
                                isActive: e.modelValue === s,
                                normalColor: e.normalColor,
                                activeColor: e.activeColor
                            }, null, 8, ["title", "badge", "isActive", "normalColor", "activeColor"])) : (l(), a(b, {
                                key: 1,
                                title: t.title,
                                badge: t.badge,
                                isActive: e.modelValue === s,
                                normalColor: e.normalColor,
                                activeColor: e.activeColor
                            }, null, 8, ["title", "badge", "isActive", "normalColor", "activeColor"]))])),
                            _: 2
                        }, 1032, ["onClick", "class"])))), 128))])),
                        _: 1
                    })])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-1cf3e523"]
    ]);
export {
    C as N
};