import {
    _ as e,
    u as t,
    g as s,
    a as l,
    R as a,
    r as o,
    c as n,
    o as c,
    w as r,
    d as i,
    e as u,
    i as f,
    A as d,
    n as m,
    y as p,
    z as _,
    aB as g,
    D as x,
    al as h,
    l as y
} from "./index-DMsdlv-S.js"; /* empty css                                                                */
const v = e({
    __name: "HomeUserInfo",
    emits: ["showBindPhone"],
    setup(e, {
        emit: v
    }) {
        const b = t(),
            w = s(),
            k = l();
        a();
        const C = v,
            I = () => {
                x({
                    url: "/pages/account/Profile/Profile"
                })
            },
            F = () => {
                x({
                    url: "/pages/wallet/Deposit"
                })
            },
            $ = () => {
                var e;
                (null == (e = w.userInfo) ? void 0 : e.mobile) ? x({
                    url: "/pages/wallet/Withdraw"
                }): C("showBindPhone")
            },
            L = () => {
                console.log("/pages/earn/Earn");
                h().active = 1, y({
                    url: "/pages/earn/Earn"
                })
            };
        return (e, t) => {
            const s = o("CacheImage"),
                l = f;
            return c(), n(l, {
                class: "home-user-info flex-sbetween flex-acenter"
            }, {
                default: r((() => [u(w).isLogin ? (c(), n(l, {
                    key: 0,
                    class: "flex-acenter"
                }, {
                    default: r((() => [i(l, {
                        class: "relative",
                        onClick: d(I, ["stop"])
                    }, {
                        default: r((() => [i(s, {
                            class: "user-avatar",
                            src: "@/static/icon-avatar.png",
                            mode: "aspectFit"
                        }), i(l, {
                            class: "vip-wrap pos-absolute"
                        }, {
                            default: r((() => [i(s, {
                                src: `@/static/vip_level/jb_vip${u(w).vipInfo.currentVipConfig.level}.png`,
                                class: "icon-vip-level"
                            }, null, 8, ["src"])])),
                            _: 1
                        })])),
                        _: 1
                    }), i(l, {
                        class: "ml24"
                    }, {
                        default: r((() => [i(l, {
                            class: "flex-acenter"
                        }, {
                            default: r((() => [i(l, {
                                class: "user-name",
                                style: m({
                                    color: u(b).theme.text.normal
                                })
                            }, {
                                default: r((() => [p(" ID: " + _(u(w).userInfo.id || ""), 1)])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }), i(l, {
                            class: "mt8",
                            style: {
                                display: "inline-block"
                            }
                        }, {
                            default: r((() => [i(l, {
                                class: "user-money flex-acenter row-center",
                                style: m({
                                    color: u(b).theme.text.theme
                                })
                            }, {
                                default: r((() => [i(l, {
                                    class: "user-money-icon flex-acenter flex-scenter"
                                }, {
                                    default: r((() => [i(l, {
                                        class: "money-txt"
                                    }, {
                                        default: r((() => [p(_(u(k).currencySign), 1)])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), i(l, {
                                    class: "mr16 money-txt"
                                }, {
                                    default: r((() => {
                                        var e, t;
                                        return [p(_(u(g)(null == (t = null == (e = u(w)) ? void 0 : e.userInfo) ? void 0 : t.totalAssets, 2)), 1)]
                                    })),
                                    _: 1
                                }), i(s, {
                                    class: "user-money-refresh-icon",
                                    src: "@/static/arrow-rt.png",
                                    mode: "aspectFit"
                                })])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                })) : (c(), n(l, {
                    key: 1,
                    class: "flex-acenter"
                }, {
                    default: r((() => [i(l, {
                        class: "login-btn flex-acenter flex-scenter",
                        style: m({
                            color: u(b).theme.button.textNormal,
                            background: u(b).theme.button.cancel
                        }),
                        onClick: t[0] || (t[0] = d((e => {
                            x({
                                url: "/pages/Login/LoginV2"
                            })
                        }), ["stop"]))
                    }, {
                        default: r((() => [i(l, null, {
                            default: r((() => [p(_(e.$t("home.login")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"]), i(l, {
                        class: "login-btn flex-acenter flex-scenter ml16",
                        style: m({
                            color: u(b).theme.button.textNormal,
                            background: u(b).theme.button.normal,
                            color: u(b).theme.button.textNormal
                        }),
                        onClick: t[1] || (t[1] = d((e => {
                            x({
                                url: "/pages/Login/Register"
                            })
                        }), ["stop"]))
                    }, {
                        default: r((() => [i(l, null, {
                            default: r((() => [p(_(e.$t("home.register")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                })), i(l, {
                    style: {
                        flex: "1"
                    }
                }, {
                    default: r((() => [i(s, {
                        onClick: L,
                        class: "icon_invited",
                        src: "1@/static/home/icon_invited.gif",
                        mode: "widthFix"
                    })])),
                    _: 1
                }), i(l, {
                    class: "flex-acenter"
                }, {
                    default: r((() => [i(l, {
                        class: "flex-column flex-acenter",
                        onClick: d(F, ["stop"])
                    }, {
                        default: r((() => [i(s, {
                            class: "user-right-icon",
                            src: "3@/static/icon-deposit.png",
                            mode: "aspectFit"
                        }), i(l, {
                            class: "user-right-text",
                            style: m({
                                color: u(b).theme.text.normal
                            })
                        }, {
                            default: r((() => [p(_(e.$t("home.deposit")), 1)])),
                            _: 1
                        }, 8, ["style"])])),
                        _: 1
                    }), i(l, {
                        class: "flex-column flex-acenter ml-1_5",
                        onClick: d($, ["stop"])
                    }, {
                        default: r((() => [i(s, {
                            class: "user-right-icon",
                            src: "3@/static/icon-withdraw.png",
                            mode: "aspectFit"
                        }), i(l, {
                            class: "user-right-text",
                            style: m({
                                color: u(b).theme.text.normal
                            })
                        }, {
                            default: r((() => [p(_(e.$t("home.withdraw")), 1)])),
                            _: 1
                        }, 8, ["style"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            })
        }
    }
}, [
    ["__scopeId", "data-v-da443b54"]
]);
export {
    v as H
};