import {
    _ as e,
    c as t,
    o as s,
    w as l,
    m as a,
    b as o,
    i as n,
    n as i,
    q as c,
    F as r,
    t as u,
    v as d,
    d as p,
    x as m,
    y as g,
    z as f,
    u as y,
    a as h,
    r as v,
    A as b,
    e as _,
    j as k,
    f as x,
    B as w,
    C,
    D as A,
    E as D,
    G as I,
    H as L,
    I as j,
    S as T,
    J as B,
    K as z,
    $ as U,
    L as R,
    M as P,
    g as S,
    N as V,
    O as H,
    P as N,
    Q as F,
    R as E,
    T as G,
    U as X,
    V as M,
    W as q,
    X as Q,
    Y as O,
    Z as Y,
    a0 as W,
    a1 as Z,
    a2 as J,
    a3 as K,
    a4 as $,
    a5 as ee,
    a6 as te,
    a7 as se,
    a8 as le,
    a9 as ae,
    aa as oe,
    ab as ne,
    ac as ie,
    ad as ce,
    ae as re,
    af as ue,
    ag as de,
    ah as pe,
    ai as me,
    aj as ge,
    ak as fe,
    al as ye,
    l as he
} from "./index-DMsdlv-S.js";
import {
    r as ve,
    o as be,
    a as _e
} from "./uni-app.es.DtNb6e-t.js";
import {
    u as ke
} from "./EasyLoadImage.Dej-sP3l.js";
import {
    u as xe
} from "./useMailStore.C9JqpP2q.js";
import {
    H as we
} from "./HomeUserInfo.DE66nUEL.js";
import {
    s as Ce
} from "./account.CycWIDEr.js";
import {
    T as Ae
} from "./TurnplateGame.CKQY8LZQ.js";
import {
    H as De
} from "./HomeNotice.BWdpIR1-.js";
import {
    H as Ie
} from "./HomeGamesItem.BZrwz8XN.js";
import {
    S as Le
} from "./SegmentControl.DSBf5jex.js";
import {
    N as je
} from "./NoDataSearch.C_zCaOSg.js";
import {
    c as Te
} from "./system.D_JV23zO.js";
import {
    B as Be
} from "./BindPhonePop.hd-kTsC1.js";
import {
    C as ze
} from "./Congratulation.CEVJtTCW.js";
import {
    _ as Ue
} from "./uni-popup.Cqp4VX-X.js";
import {
    c as Re
} from "./conversionTime.cQnNBuIn.js"; /* empty css                                                                */
import "./NormalTabs.DuWcVaVb.js";
import "./TipsPopup.B1D9Hh3C.js"; /* empty css                                                                  */
import "./encipherPhone.QHWvuj37.js";
import "./close1.CpnXjIUK.js";
import "./uni-popup.vue_vue_type_style_index_0_scoped_9a4c648b_lang.D7Bp5dmw.js";
const Pe = e({
        name: "UniSwiperDot",
        emits: ["clickItem"],
        props: {
            info: {
                type: Array,
                default: () => []
            },
            current: {
                type: Number,
                default: 0
            },
            dotsStyles: {
                type: Object,
                default: () => ({})
            },
            mode: {
                type: String,
                default: "default"
            },
            field: {
                type: String,
                default: ""
            }
        },
        data: () => ({
            dots: {
                width: 6,
                height: 6,
                bottom: 10,
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, .3)",
                border: "1px rgba(0, 0, 0, .3) solid",
                selectedBackgroundColor: "#333",
                selectedBorder: "1px rgba(0, 0, 0, .9) solid"
            }
        }),
        watch: {
            dotsStyles(e) {
                this.dots = Object.assign(this.dots, this.dotsStyles)
            },
            mode(e) {
                "indexes" === e ? (this.dots.width = 14, this.dots.height = 14) : (this.dots.width = 6, this.dots.height = 6)
            }
        },
        created() {
            "indexes" === this.mode && (this.dots.width = 12, this.dots.height = 12), this.dots = Object.assign(this.dots, this.dotsStyles)
        },
        methods: {
            clickItem(e) {
                this.$emit("clickItem", e)
            }
        }
    }, [
        ["render", function(e, y, h, v, b, _) {
            const k = n,
                x = m;
            return s(), t(k, {
                class: "uni-swiper__warp"
            }, {
                default: l((() => [a(e.$slots, "default", {}, void 0, !0), "default" === h.mode ? (s(), t(k, {
                    style: i({
                        bottom: b.dots.bottom + "px"
                    }),
                    class: "uni-swiper__dots-box",
                    key: "default"
                }, {
                    default: l((() => [(s(!0), c(r, null, u(h.info, ((e, l) => (s(), t(k, {
                        onClick: e => _.clickItem(l),
                        style: i({
                            width: (l === h.current ? 2 * b.dots.width : b.dots.width) + "px",
                            height: b.dots.width / 2 + "px",
                            "background-color": l !== h.current ? b.dots.backgroundColor : b.dots.selectedBackgroundColor,
                            "border-radius": "0px"
                        }),
                        key: l,
                        class: "uni-swiper__dots-item uni-swiper__dots-bar"
                    }, null, 8, ["onClick", "style"])))), 128))])),
                    _: 1
                }, 8, ["style"])) : o("", !0), "dot" === h.mode ? (s(), t(k, {
                    style: i({
                        bottom: b.dots.bottom + "px"
                    }),
                    class: "uni-swiper__dots-box",
                    key: "dot"
                }, {
                    default: l((() => [(s(!0), c(r, null, u(h.info, ((e, l) => (s(), t(k, {
                        onClick: e => _.clickItem(l),
                        style: i({
                            width: b.dots.width + "px",
                            height: b.dots.height + "px",
                            "background-color": l !== h.current ? b.dots.backgroundColor : b.dots.selectedBackgroundColor,
                            border: l !== h.current ? b.dots.border : b.dots.selectedBorder
                        }),
                        key: l,
                        class: "uni-swiper__dots-item"
                    }, null, 8, ["onClick", "style"])))), 128))])),
                    _: 1
                }, 8, ["style"])) : o("", !0), "round" === h.mode ? (s(), t(k, {
                    style: i({
                        bottom: b.dots.bottom + "px"
                    }),
                    class: "uni-swiper__dots-box",
                    key: "round"
                }, {
                    default: l((() => [(s(!0), c(r, null, u(h.info, ((e, l) => (s(), t(k, {
                        onClick: e => _.clickItem(l),
                        class: d([
                            [l === h.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"
                        ]),
                        style: i({
                            width: (l === h.current ? 3 * b.dots.width : b.dots.width) + "px",
                            height: b.dots.height + "px",
                            "background-color": l !== h.current ? b.dots.backgroundColor : b.dots.selectedBackgroundColor,
                            border: l !== h.current ? b.dots.border : b.dots.selectedBorder
                        }),
                        key: l
                    }, null, 8, ["onClick", "class", "style"])))), 128))])),
                    _: 1
                }, 8, ["style"])) : o("", !0), "nav" === h.mode ? (s(), t(k, {
                    key: "nav",
                    style: i({
                        "background-color": h.dotsStyles.backgroundColor,
                        bottom: "0"
                    }),
                    class: "uni-swiper__dots-box uni-swiper__dots-nav"
                }, {
                    default: l((() => [p(x, {
                        style: i({
                            color: h.dotsStyles.color
                        }),
                        class: "uni-swiper__dots-nav-item"
                    }, {
                        default: l((() => [g(f(h.current + 1 + "/" + h.info.length + " " + h.info[h.current][h.field]), 1)])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                }, 8, ["style"])) : o("", !0), "indexes" === h.mode ? (s(), t(k, {
                    key: "indexes",
                    style: i({
                        bottom: b.dots.bottom + "px"
                    }),
                    class: "uni-swiper__dots-box"
                }, {
                    default: l((() => [(s(!0), c(r, null, u(h.info, ((e, a) => (s(), t(k, {
                        onClick: e => _.clickItem(a),
                        style: i({
                            width: b.dots.width + "px",
                            height: b.dots.height + "px",
                            color: a === h.current ? b.dots.selectedColor : b.dots.color,
                            "background-color": a !== h.current ? b.dots.backgroundColor : b.dots.selectedBackgroundColor,
                            border: a !== h.current ? b.dots.border : b.dots.selectedBorder
                        }),
                        key: a,
                        class: "uni-swiper__dots-item uni-swiper__dots-indexes"
                    }, {
                        default: l((() => [p(x, {
                            class: "uni-swiper__dots-indexes-text"
                        }, {
                            default: l((() => [g(f(a + 1), 1)])),
                            _: 2
                        }, 1024)])),
                        _: 2
                    }, 1032, ["onClick", "style"])))), 128))])),
                    _: 1
                }, 8, ["style"])) : o("", !0)])),
                _: 3
            })
        }],
        ["__scopeId", "data-v-d3d815a9"]
    ]),
    Se = e({
        __name: "HomeDownloadAppItem",
        setup(e) {
            const a = y(),
                o = h(),
                c = () => {
                    o.appDownloadHomeVisible = !1
                },
                r = () => {
                    const e = {
                        uniKey: "",
                        fbc: "",
                        fbp: "",
                        channel: o.channelId,
                        h5No: o.h5No,
                        referralCode: "",
                        appId: o.appId,
                        mcId: o.mcId
                    };
                    Ce(e);
                    const t = document.createElement("a");
                    t.setAttribute("download", "Winzz777.apk"), t.href = o.appDownloadUrl, t.click(), t.remove()
                };
            return (e, o) => {
                const u = v("theme-image"),
                    d = n;
                return s(), t(d, {
                    class: "home-download-app-container relative flex row-center",
                    style: i({
                        background: `left / cover no-repeat ${_(a).imageCssUrl.downloadAppBg}`
                    })
                }, {
                    default: l((() => [p(d, {
                        class: "flex-column flex-center pos-absolute slogan-center"
                    }, {
                        default: l((() => [p(u, {
                            src: "@/static/home/top_wz1.png",
                            class: "slogan-img",
                            mode: "aspectFit"
                        }), p(u, {
                            src: "@/static/home/top_wz2.png",
                            class: "award-img",
                            mode: "aspectFit"
                        })])),
                        _: 1
                    }), p(d, {
                        class: "download-btn flex col-center"
                    }, {
                        default: l((() => [p(u, {
                            src: "@/static/home/dw_btn.png",
                            class: "download-btn-icon",
                            onClick: b(r, ["stop"])
                        }), p(u, {
                            src: "@/static/home/dw_close.png",
                            class: "close-btn",
                            onClick: b(c, ["stop"])
                        })])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["style"])
            }
        }
    }, [
        ["__scopeId", "data-v-28f6e123"]
    ]),
    Ve = e({
        __name: "HomeHeader",
        setup(e) {
            const a = h(),
                r = xe(),
                u = k(),
                d = x(null),
                m = () => {
                    A({
                        url: "/pages/mail/Mail"
                    })
                },
                y = () => {
                    d.value.show()
                };
            return (e, h) => {
                const k = n,
                    x = w,
                    A = v("CacheImage");
                return s(), t(k, {
                    class: "home-header-container"
                }, {
                    default: l((() => [_(a).isShowAppDownload ? (s(), t(k, {
                        key: 0,
                        class: "home-header-fixed-view"
                    }, {
                        default: l((() => [p(Se)])),
                        _: 1
                    })) : o("", !0), p(k, {
                        class: "w-full",
                        style: i({
                            height: _(a).headerStyle.statusBarHeight + (_(a).isShowAppDownload ? 50 : 0) + "px"
                        })
                    }, null, 8, ["style"]), p(k, {
                        class: "home-header flex justify-between items-center plr30"
                    }, {
                        default: l((() => [p(k, null, {
                            default: l((() => [p(x, {
                                class: "app-logo2",
                                src: _(a).startImgUrls.headerLogo,
                                mode: "aspectFit"
                            }, null, 8, ["src"])])),
                            _: 1
                        }), p(k, {
                            class: "app-nav-right"
                        }, {
                            default: l((() => ["+91" === _(a).phoneNumberPrefix && _(u).isShowTurnplate ? (s(), c("div", {
                                key: 0,
                                class: "nav-icon mr32"
                            }, [p(A, {
                                class: "service-icon",
                                src: "1@/static/icon-home-game.png",
                                mode: "aspectFit",
                                onClick: b(y, ["stop"])
                            }), _(u).turnplate.totalRemainTimes > 0 ? (s(), t(k, {
                                key: 0,
                                class: "red-count"
                            }, {
                                default: l((() => [g(f(_(u).turnplate.totalRemainTimes), 1)])),
                                _: 1
                            })) : o("", !0)])) : o("", !0), C("div", {
                                class: "nav-icon"
                            }, [p(A, {
                                class: "service-icon",
                                src: "1@/static/icon-mail.png",
                                mode: "aspectFit",
                                onClick: b(m, ["stop"])
                            }), _(r).hasUnread ? (s(), t(k, {
                                key: 0,
                                class: "red-dot"
                            })) : o("", !0)])])),
                            _: 1
                        })])),
                        _: 1
                    }), p(Ae, {
                        ref_key: "turnplateGameRef",
                        ref: d
                    }, null, 512)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-8f827fcb"]
    ]),
    He = e({
        __name: "HomeGamesAll",
        setup(e) {
            const a = D({
                selectCategoryId: 0,
                categoryList: [],
                inViewId: ""
            });
            h();
            const o = e => {
                    (new Image).src = e
                },
                i = async e => {
                    if (!e) return;
                    const {
                        code: t,
                        data: s
                    } = await R({
                        labelId: e
                    });
                    if (200 !== t) return;
                    const l = m(s.gameAndCategoryList, s.gameList);
                    a.categoryList.forEach((t => {
                        t.labelId === e && (t.gameList = l, g())
                    }))
                },
                m = (e, t, s) => e ? (e.forEach((e => {
                    1 === e.iconType && t && t.length && (t = t.filter((e => !!e.status))).forEach((t => {
                        t.gameId === e.id && (e.name = t.gameName)
                    })), 2 === e.iconType && s && s.length && s.forEach((t => {
                        t.categoryId === e.id && (e.name = t.categoryName)
                    }))
                })), e.filter((e => !!e.imageUrl))) : [],
                g = () => {
                    z((() => {
                        let e = 0;
                        a.categoryList.forEach(((t, s) => {
                            P().select("#category" + t.labelId).boundingClientRect((l => {
                                l && (0 === s && (e = l.top + 1), t.offsetTop = l.top - e)
                            })).exec()
                        }))
                    }))
                },
                f = x(0),
                y = e => {
                    f.value = e.detail.scrollTop, U("homeGamesScroll"), a.categoryList.forEach(((t, s) => {
                        const l = e.detail.scrollTop,
                            o = t.offsetTop;
                        s < a.categoryList.length - 1 && a.categoryList[s + 1].offsetTop, (l >= o && l < 0 || l >= o) && (a.selectCategoryId = t.labelId)
                    }))
                };
            return I((() => {
                (async () => {
                    const {
                        code: e,
                        data: t
                    } = await B();
                    if (200 !== e) return;
                    if (!t.labelList || !t.labelList.length) return;
                    const s = t.labelList,
                        l = m(t.gameAndCategoryList, t.firstLabelGameList, t.categoryList);
                    s[0].gameList = l, a.selectCategoryId = s[0].labelId, a.categoryList = s, a.categoryList.forEach((e => {
                        o(e.imageUrlSelected), o(e.imageUrlUnselected), e.gameList && e.gameList.forEach((e => o(e.imageUrl)))
                    })), s.length > 1 && s.forEach(((e, t) => {
                        t < 1 || i(e.labelId)
                    }))
                })()
            })), (e, o) => {
                const i = v("cache-image"),
                    m = n,
                    g = T;
                return s(), t(m, {
                    class: "home-games-all-container"
                }, {
                    default: l((() => [p(m, {
                        class: "home-games-all-left flex-column flex-acenter"
                    }, {
                        default: l((() => [(s(!0), c(r, null, u(a.categoryList, ((e, o) => (s(), t(m, {
                            key: o,
                            onClick: b((t => (e => {
                                a.selectCategoryId = e.labelId, z((() => {
                                    a.inViewId = "category" + e.labelId
                                }))
                            })(e)), ["stop"])
                        }, {
                            default: l((() => [L(p(i, {
                                src: e.imageUrlSelected,
                                mode: "aspectFit",
                                style: {
                                    width: "120rpx",
                                    height: "120rpx"
                                }
                            }, null, 8, ["src"]), [
                                [j, a.selectCategoryId === e.labelId]
                            ]), L(p(i, {
                                src: e.imageUrlUnselected,
                                mode: "aspectFit",
                                style: {
                                    width: "120rpx",
                                    height: "120rpx"
                                }
                            }, null, 8, ["src"]), [
                                [j, a.selectCategoryId !== e.labelId]
                            ])])),
                            _: 2
                        }, 1032, ["onClick"])))), 128))])),
                        _: 1
                    }), p(m, {
                        class: "home-games-all-right"
                    }, {
                        default: l((() => [p(g, {
                            class: "scroll-view",
                            id: "homeGamesScroll",
                            "scroll-y": !0,
                            "show-scrollbar": !1,
                            "scroll-into-view": a.inViewId,
                            "scroll-with-animation": !0,
                            onScroll: y
                        }, {
                            default: l((() => [(s(!0), c(r, null, u(a.categoryList, ((e, a) => (s(), t(m, {
                                class: "flex-wrap",
                                key: "item" + a,
                                id: "category" + e.labelId
                            }, {
                                default: l((() => [(s(!0), c(r, null, u(e.gameList, ((e, a) => (s(), t(m, {
                                    key: "subItem" + a,
                                    class: "mb24"
                                }, {
                                    default: l((() => [p(Ie, {
                                        scrollTop: f.value,
                                        class: d([`imageSize${e.imageSize}`]),
                                        itemData: e
                                    }, null, 8, ["scrollTop", "class", "itemData"])])),
                                    _: 2
                                }, 1024)))), 128))])),
                                _: 2
                            }, 1032, ["id"])))), 128)), p(m, {
                                class: "w-full space",
                                style: {
                                    height: "50rpx"
                                }
                            })])),
                            _: 1
                        }, 8, ["scroll-into-view"])])),
                        _: 1
                    })])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-35be1233"]
    ]),
    Ne = e({
        __name: "FirstDeposit",
        props: {
            firstDepositVisible: Boolean
        },
        emits: ["close-popup"],
        setup(e, {
            emit: a
        }) {
            const d = y(),
                h = k();
            let b = x(!0);
            const w = e,
                C = a,
                D = () => {
                    b.value = !b.value
                },
                I = () => {
                    A({
                        url: "/pages/wallet/Deposit"
                    })
                },
                T = () => {
                    A({
                        url: "/pages/promo/FirstDeposit/FirstDeposit"
                    })
                };
            return (e, a) => {
                const y = v("theme-image"),
                    k = m,
                    x = n;
                return w.firstDepositVisible ? (s(), t(x, {
                    key: 0,
                    class: "popup-view"
                }, {
                    default: l((() => [p(x, {
                        class: "first-deposit-popup",
                        style: i({
                            "background-image": _(d).imageCssUrl.homeFirstRechargeBg
                        })
                    }, {
                        default: l((() => [p(y, {
                            src: "@/static/promo/close.png",
                            onClick: a[0] || (a[0] = e => {
                                C("close-popup", 0, b.value)
                            }),
                            class: "close-btn"
                        }), p(x, {
                            class: "first-deposit-popup-content"
                        }, {
                            default: l((() => [p(x, {
                                class: "first-deposit-popup-content-item item-theader-bg"
                            }, {
                                default: l((() => [p(k, {
                                    class: "item-column1"
                                }, {
                                    default: l((() => [g(f(e.$t("promo.public.depoistAmoout")), 1)])),
                                    _: 1
                                }), p(k, {
                                    class: "item-column2"
                                }, {
                                    default: l((() => [g(f(e.$t("promo.public.rewardAmoout")), 1)])),
                                    _: 1
                                })])),
                                _: 1
                            }), p(x, {
                                class: "first-deposit-popup-content-tbody"
                            }, {
                                default: l((() => [(s(!0), c(r, null, u(_(h).firstdepositList, ((e, a) => (s(), t(x, {
                                    class: "first-deposit-popup-content-item item-tbody-bg"
                                }, {
                                    default: l((() => [p(k, {
                                        class: "item-column1"
                                    }, {
                                        default: l((() => [g("≥" + f(e.amount), 1)])),
                                        _: 2
                                    }, 1024), p(k, {
                                        class: "item-column2"
                                    }, {
                                        default: l((() => [g(f(e.reward), 1)])),
                                        _: 2
                                    }, 1024)])),
                                    _: 2
                                }, 1024)))), 256))])),
                                _: 1
                            }), p(x, {
                                class: "despite-btn-view"
                            }, {
                                default: l((() => [p(x, {
                                    class: "despite-btn",
                                    style: i({
                                        "background-image": _(d).imageCssUrl.flBtn
                                    }),
                                    onClick: I
                                }, {
                                    default: l((() => [g(f(e.$t("promo.button.despiteNow")), 1)])),
                                    _: 1
                                }, 8, ["style"]), p(x, {
                                    class: "details-btn",
                                    style: i({
                                        "background-image": _(d).imageCssUrl.flBtn
                                    }),
                                    onClick: T
                                }, {
                                    default: l((() => [g(f(e.$t("promo.button.details")), 1)])),
                                    _: 1
                                }, 8, ["style"])])),
                                _: 1
                            }), p(x, {
                                class: "login-form-check"
                            }, {
                                default: l((() => [p(x, {
                                    onClick: D,
                                    class: "check-block"
                                }), p(k, {
                                    class: "check-text"
                                }, {
                                    default: l((() => [g(f(e.$t("promo.public.checkText")), 1)])),
                                    _: 1
                                }), L(p(y, {
                                    onClick: D,
                                    src: "@/static/account/Check.png",
                                    class: "check-image-size"
                                }, null, 512), [
                                    [j, _(b)]
                                ])])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                })) : o("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-1db49b73"]
    ]),
    Fe = e({
        __name: "UpRebate",
        props: {
            upRebateVisible: Boolean
        },
        emits: ["close-popup"],
        setup(e, {
            emit: a
        }) {
            const c = y(),
                r = e,
                u = a,
                d = () => {
                    A({
                        url: "/pages/promo/RebatePromo/RebatePromo"
                    })
                };
            return (e, a) => {
                const y = v("theme-image"),
                    h = m,
                    b = n;
                return r.upRebateVisible ? (s(), t(b, {
                    key: 0,
                    class: "popup-view"
                }, {
                    default: l((() => [p(b, {
                        class: "up-rebate-view",
                        style: i({
                            "background-image": _(c).imageCssUrl.cot
                        })
                    }, {
                        default: l((() => [p(y, {
                            src: "@/static/home/close.png",
                            class: "close-image",
                            onClick: a[0] || (a[0] = e => {
                                u("close-popup", 1)
                            })
                        }), p(b, {
                            class: "up-rebate-text"
                        }, {
                            default: l((() => [g(f(e.$t("promo.popup.upRebateText")) + " ", 1), p(h, {
                                class: "rebate-text"
                            }, {
                                default: l((() => [g(f(e.$t("promo.popup.upTo")) + " 35%", 1)])),
                                _: 1
                            })])),
                            _: 1
                        }), p(b, {
                            class: "btn-bg event-detail-btn",
                            style: i({
                                "background-image": _(c).imageCssUrl.flBtn
                            }),
                            onClick: d
                        }, {
                            default: l((() => [g(f(e.$t("promo.button.eventDetails")), 1)])),
                            _: 1
                        }, 8, ["style"])])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                })) : o("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-b13580ca"]
    ]),
    Ee = e({
        __name: "Signin",
        props: {
            signinVisible: Boolean
        },
        emits: ["close-popup"],
        setup(e, {
            emit: a
        }) {
            const c = y(),
                r = h(),
                u = e,
                d = a,
                b = () => {
                    A({
                        url: "/pages/promo/Signin/Signin"
                    })
                };
            return (e, a) => {
                const y = v("theme-image"),
                    h = m,
                    k = n;
                return u.signinVisible ? (s(), t(k, {
                    key: 0,
                    class: "popup-view"
                }, {
                    default: l((() => [p(k, {
                        class: "signin-view"
                    }, {
                        default: l((() => [p(y, {
                            src: "@/static/home/signin-title.png",
                            class: "signin-title-image"
                        }), p(y, {
                            src: "@/static/promo/close.png",
                            onClick: a[0] || (a[0] = e => {
                                d("close-popup", 2)
                            }),
                            class: "close-image"
                        }), p(k, {
                            class: "signin-view-content",
                            style: i({
                                "background-image": _(c).imageCssUrl.signinBg
                            })
                        }, {
                            default: l((() => [p(k, {
                                class: "signin-view-content-text"
                            }, {
                                default: l((() => [g(f(e.$t("promo.popup.signinText")) + " ", 1), p(h, {
                                    class: "text-color"
                                }, {
                                    default: l((() => [g(f(_(r).currencySign) + "9999", 1)])),
                                    _: 1
                                })])),
                                _: 1
                            }), p(k, {
                                class: "signin-view-content-text"
                            }, {
                                default: l((() => [g(f(e.$t("promo.popup.signinText")) + " ", 1), p(h, {
                                    class: "text-color"
                                }, {
                                    default: l((() => [g(f(_(r).currencySign) + "9999", 1)])),
                                    _: 1
                                })])),
                                _: 1
                            }), p(k, {
                                class: "btn-bg event-detail-btn",
                                style: i({
                                    "background-image": _(c).imageCssUrl.flBtn
                                }),
                                onClick: b
                            }, {
                                default: l((() => [g(f(e.$t("promo.button.eventDetails")), 1)])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }, 8, ["style"])])),
                        _: 1
                    })])),
                    _: 1
                })) : o("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-5d1565ae"]
    ]),
    Ge = e({
        __name: "Community",
        props: {
            communityVisible: Boolean
        },
        emits: ["close-popup"],
        setup(e, {
            emit: a
        }) {
            const c = y(),
                r = h(),
                u = k(),
                d = e,
                b = a;
            return (e, a) => {
                const y = m,
                    h = n,
                    k = v("theme-image");
                return d.communityVisible ? (s(), t(h, {
                    key: 0,
                    class: "popup-view"
                }, {
                    default: l((() => [p(h, {
                        class: "community-body",
                        style: i({
                            "background-image": _(c).imageCssUrl.communityBg
                        })
                    }, {
                        default: l((() => [p(h, {
                            class: "community-body-title"
                        }, {
                            default: l((() => [g(f(_(r).currencySign) + " ", 1), p(y, null, {
                                default: l((() => [g(f(_(u).community.rewordBonus), 1)])),
                                _: 1
                            })])),
                            _: 1
                        }), p(h, {
                            class: "community-body-subtitle"
                        }, {
                            default: l((() => [g(f(e.$t("promo.popup.communityTitle")), 1)])),
                            _: 1
                        }), p(h, {
                            class: "community-body-text"
                        }, {
                            default: l((() => [g(f(e.$t("promo.popup.communityText")) + " ", 1), p(y, null, {
                                default: l((() => [g(f(e.$t("promo.popup.rankFree")), 1)])),
                                _: 1
                            })])),
                            _: 1
                        }), p(h, {
                            class: "community-body-btn",
                            style: i({
                                "background-image": _(c).imageCssUrl.jAn
                            })
                        }, {
                            default: l((() => [p(k, {
                                src: "@/static/promo/tg.png",
                                style: {
                                    width: "50rpx",
                                    height: "50rpx"
                                }
                            }), p(y, {
                                style: {
                                    "font-size": "34rpx",
                                    color: "#5f1f08",
                                    "margin-left": "38rpx"
                                }
                            }, {
                                default: l((() => [g(f(e.$t("promo.button.joinNow")), 1)])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["style"]), p(h, {
                            class: "community-body-tips"
                        }, {
                            default: l((() => [p(k, {
                                src: "@/static/home/g2.png",
                                style: {
                                    width: "43rpx",
                                    height: "44rpx"
                                }
                            }), p(k, {
                                src: "@/static/home/Checkmark.png",
                                class: "check-image"
                            }), p(y, {
                                style: {
                                    "font-size": "18rpx",
                                    color: "#fff",
                                    "margin-left": "14rpx",
                                    "line-height": "44rpx"
                                }
                            }, {
                                default: l((() => [g(f(e.$t("promo.popup.communityTip")), 1)])),
                                _: 1
                            })])),
                            _: 1
                        }), p(k, {
                            src: "@/static/home/close.png",
                            class: "close-image",
                            onClick: a[0] || (a[0] = e => {
                                b("close-popup", 4)
                            })
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                })) : o("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-39f0a185"]
    ]),
    Xe = e({
        __name: "Jili",
        props: {
            visible: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["close-popup"],
        setup(e, {
            emit: a
        }) {
            const c = y(),
                r = k(),
                u = e,
                d = a;
            let h = x(!0);
            const w = () => {
                    A({
                        url: "/pages/promo/Jili"
                    })
                },
                C = () => {
                    h.value = !h.value
                },
                D = () => {},
                I = () => {};
            return (e, a) => {
                const y = v("theme-image"),
                    k = m,
                    x = n;
                return u.visible ? (s(), t(x, {
                    key: 0,
                    class: "popup-view",
                    onClick: b(D, ["stop"]),
                    onTouchmove: b(I, ["prevent"])
                }, {
                    default: l((() => [p(x, {
                        class: "popup-content-view"
                    }, {
                        default: l((() => [p(x, {
                            class: "content-view",
                            style: i({
                                "background-image": _(c).imageCssUrl.promoJiliPopupBg
                            })
                        }, {
                            default: l((() => [p(y, {
                                class: "title-img",
                                src: "@/static/promo/jili/jili-promotion.png",
                                mode: "aspectFit"
                            }), p(x, {
                                class: "des"
                            }, {
                                default: l((() => [g(f(e.$t("promo.jili.popdes1")) + " ", 1), p(k, {
                                    style: {
                                        color: "#FF3000"
                                    }
                                }, {
                                    default: l((() => [g(f(e.$t("promo.jili.popdes2")), 1)])),
                                    _: 1
                                }), g(" " + f(e.$t("promo.jili.popdes3")), 1)])),
                                _: 1
                            }), p(x, {
                                class: "event-btn",
                                onClick: b(w, ["stop"])
                            }, {
                                default: l((() => [g(f(e.$t("promo.jili.popbtn")), 1)])),
                                _: 1
                            }), p(x, {
                                class: "flex-acenter mt32"
                            }, {
                                default: l((() => [p(x, {
                                    class: "check-box",
                                    onClick: b(C, ["stop"])
                                }, {
                                    default: l((() => [_(h) ? (s(), t(y, {
                                        key: 0,
                                        class: "check-img",
                                        src: "@/static/promo/jili/icon-check.png"
                                    })) : o("", !0)])),
                                    _: 1
                                }), p(x, {
                                    class: "tip ml16"
                                }, {
                                    default: l((() => [g(f(e.$t("promo.jili.poptip")), 1)])),
                                    _: 1
                                })])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["style"]), p(y, {
                            class: "close-btn",
                            src: "@/static/promo/jili/delet.png",
                            onClick: a[0] || (a[0] = b((e => {
                                return t = "giftCode", h.value && r.setJiliNoShowToday(), void d("close-popup", t);
                                var t
                            }), ["stop"]))
                        })])),
                        _: 1
                    })])),
                    _: 1
                })) : o("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-972c3564"]
    ]),
    Me = e({
        __name: "UserInfo",
        props: {
            registerSuccesVisible: Boolean
        },
        emits: ["close-popup"],
        setup(e, {
            emit: a
        }) {
            const c = y().theme.loginV2,
                r = S(),
                {
                    t: u
                } = V(),
                d = e,
                h = a;
            return (e, a) => {
                const u = v("CacheImage"),
                    y = n,
                    b = m;
                return d.registerSuccesVisible ? (s(), t(y, {
                    key: 0,
                    class: "register-success-popup",
                    style: i({
                        background: _(c).popup.bgColor
                    })
                }, {
                    default: l((() => [p(y, {
                        class: "popup-content",
                        style: i({
                            background: _(c).whiteBg
                        })
                    }, {
                        default: l((() => [p(u, {
                            src: "1@/static/login/close.png",
                            mode: "scaleToFill",
                            class: "close-size",
                            onClick: a[0] || (a[0] = e => {
                                h("close-popup", "register")
                            })
                        }), p(y, {
                            class: "popup-content-header",
                            style: i({
                                color: _(c).text.normal
                            })
                        }, {
                            default: l((() => [g(f(e.$t("login.header.registerSuccess")), 1)])),
                            _: 1
                        }, 8, ["style"]), p(y, {
                            class: "popup-content-label m-top-85",
                            style: i({
                                color: _(c).text.normal
                            })
                        }, {
                            default: l((() => [g(f(e.$t("login.label.userId")), 1)])),
                            _: 1
                        }, 8, ["style"]), p(y, {
                            class: "popup-content-value m-top-28",
                            style: i({
                                background: _(c).lightGreyBg,
                                color: _(c).text.normal
                            })
                        }, {
                            default: l((() => [g(f(_(r).userInfo.id), 1)])),
                            _: 1
                        }, 8, ["style"]), p(y, {
                            class: "popup-content-label m-top-44",
                            style: i({
                                color: _(c).text.normal
                            })
                        }, {
                            default: l((() => [g(f(e.$t("login.label.password")), 1)])),
                            _: 1
                        }, 8, ["style"]), p(y, {
                            class: "popup-content-value m-top-28",
                            style: i({
                                background: _(c).lightGreyBg,
                                color: _(c).text.normal
                            })
                        }, {
                            default: l((() => [g(f(_(r).password), 1)])),
                            _: 1
                        }, 8, ["style"]), p(y, {
                            class: "btn-list"
                        }, {
                            default: l((() => [p(y, {
                                class: "share-btn btn-item",
                                style: i({
                                    background: _(c).sharBthBg
                                })
                            }, {
                                default: l((() => [p(u, {
                                    src: "1@/static/login/share.png",
                                    mode: "scaleToFill",
                                    class: "share-size"
                                }), p(b, {
                                    class: "btn-text",
                                    style: i({
                                        color: _(c).text.whiteColor
                                    })
                                }, {
                                    default: l((() => [g(f(e.$t("login.button.share")), 1)])),
                                    _: 1
                                }, 8, ["style"])])),
                                _: 1
                            }, 8, ["style"]), p(y, {
                                class: "copy-btn btn-item",
                                style: i({
                                    background: _(c).copyBthBg
                                }),
                                onClick: a[1] || (a[1] = e => _(Te)({
                                    text: _(r).password
                                }))
                            }, {
                                default: l((() => [p(u, {
                                    src: "1@/static/login/copy.png",
                                    mode: "scaleToFill",
                                    class: "copy-size"
                                }), p(b, {
                                    class: "btn-text",
                                    style: i({
                                        color: _(c).text.whiteColor
                                    })
                                }, {
                                    default: l((() => [g(f(e.$t("login.button.copy")), 1)])),
                                    _: 1
                                }, 8, ["style"])])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                }, 8, ["style"])) : o("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-c0416465"]
    ]),
    qe = e({
        __name: "BindPromoPop",
        emits: ["onBind", "close"],
        setup(e, {
            expose: a,
            emit: o
        }) {
            const i = o,
                c = x(null),
                r = h(),
                u = H((() => r.isNative ? N.bindPhoneActApp : N.bindPhoneActH5)),
                d = () => {
                    c.value.close()
                },
                m = () => {
                    d(), i("onBind")
                },
                g = () => {
                    d(), i("close")
                };
            return a({
                open: () => {
                    c.value.open()
                },
                close: d
            }), (e, a) => {
                const o = v("cache-image"),
                    i = n,
                    r = ve(F("uni-popup"), Ue);
                return s(), t(r, {
                    ref_key: "popup",
                    ref: c,
                    type: "center",
                    "is-mask-click": !1,
                    "mask-background-color": "rgba(0, 0, 0, 0.7)"
                }, {
                    default: l((() => [p(i, {
                        class: "bind-content flex-center relative"
                    }, {
                        default: l((() => [p(o, {
                            src: `1@/static${u.value}`,
                            class: "pop-main-img",
                            mode: "aspectFit"
                        }, null, 8, ["src"]), p(i, {
                            class: "btn-box flex items-center justify-between"
                        }, {
                            default: l((() => [p(o, {
                                src: "2@/static/home/btn_Bindmobile.png",
                                class: "btn-img",
                                mode: "aspectFit",
                                onClick: m
                            }), p(o, {
                                src: "2@/static/home/btn_VerifyLater.png",
                                class: "btn-img",
                                mode: "aspectFit",
                                onClick: g
                            })])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                }, 512)
            }
        }
    }, [
        ["__scopeId", "data-v-47781bf0"]
    ]),
    Qe = e({
        __name: "FirstRechargePop",
        props: {
            showToday: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["close", "checked"],
        setup(e, {
            expose: a,
            emit: d
        }) {
            const h = x(null),
                k = x(36e3),
                C = x(""),
                D = x(null),
                L = y(),
                j = E(),
                T = H((() => j.awardList)),
                B = d,
                z = () => {
                    B("checked")
                },
                U = () => {
                    X("hour", k.value), clearInterval(D.value), h.value.close(), B("close")
                },
                R = () => {
                    U(), A({
                        url: "/pages/wallet/Deposit"
                    })
                },
                P = e => e < 10 ? "0" + e : e;
            return a({
                open: () => {
                    h.value.open()
                },
                close: U
            }), I((() => {
                const e = G("hour");
                e ? k.value = e : X("hour", k.value), D.value = setInterval((() => {
                    (() => {
                        const e = k.value - 1,
                            t = Math.floor(e / 3600),
                            s = Math.floor((e - 3600 * t) / 60),
                            l = e - 3600 * t - 60 * s;
                        if (C.value = `${P(t)} : ${P(s)} : ${P(l)}`, k.value = e, e <= 0) clearInterval(D.value), X("hour", 36e3), U()
                    })()
                }), 1e3)
            })), (a, d) => {
                const y = v("cache-image"),
                    k = w,
                    x = m,
                    A = n,
                    D = v("CacheImage"),
                    I = ve(F("uni-popup"), Ue);
                return s(), t(I, {
                    ref_key: "popup",
                    ref: h,
                    type: "center",
                    "is-mask-click": !1,
                    "mask-background-color": "rgba(0, 0, 0, 0.7)"
                }, {
                    default: l((() => [p(A, {
                        class: "recharge-content flex-center relative"
                    }, {
                        default: l((() => [p(A, {
                            class: "recharge-img-wrap relative"
                        }, {
                            default: l((() => [p(y, {
                                src: "1@/static/home/image_x1.png",
                                class: "close-btn",
                                mode: "aspectFit",
                                onClick: b(U, ["stop"])
                            }), p(y, {
                                src: "https://img1.sp77.in/frontimg/images/red/frecharge/image_czdk2.png",
                                class: "pop-main-img",
                                mode: "aspectFit"
                            }), p(A, {
                                class: "charge-box"
                            }, {
                                default: l((() => [(s(!0), c(r, null, u(T.value, ((e, a) => (s(), t(A, {
                                    key: a,
                                    class: "water-back-item flex items-center justify-between"
                                }, {
                                    default: l((() => [p(A, {
                                        class: "back-left flex items-center",
                                        style: i({
                                            color: _(L).theme.deposit.depCorlor
                                        })
                                    }, {
                                        default: l((() => [p(k, {
                                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAC/VBMVEUAAADv7NTq14//2g3t2VjZqDn4+PP6+vf39vDz8OfKpz3+ygL41VrdkgH520f32ivbryX023HcrCXAlS7brzL55nb541qqhyr47JL08eX85VPfkAD27Gj4zDn11xX42kH/7HD70SHUkA3Kny7w1U7/75P/60DknwjvxTH68bXisFLRmynkxl60jSrVjQvmsB24kjL22jC7kTH75FPoqyPu0TPWsEr330bgoRr06qT7+fb9+C3y66r242avkELnw0ry3FD49taojjv//UP8///49/bMnyr8tgr/1UL8tAb+zTD/+Zz/4Vf8xSb/+rT+6KX+0jn8zzX8wR78sQP/8az/9KH/7Jv86ZLuwD78uBD0mAH//sH/+sH//L7//73/97n/7qf/+aX+7ZP+5Yv+32391mD/2U//3EX/4kD/0z7sty37vyfosifqtB38vhn9uxD5pgPrpQP7rAH3oQD///7/+L399L3//rj+97H/87D/+av//6f//6D+9Jv/5pr745T/9o//743924r744H83nP84F791kz7z0z/9Ur90Ubyy0bwxUX8yznsujf4vTbnsjbwsif+1yLvphn6tBXppBH7sQ3/twX5qQH/wgDxpgDrkwD///P//en/+9z//87//bH+8pX/9In864L/74H//3/023//5Hv84nbx03b+53Ly1XHuzWvqyGj93GT32GH/5l3zx1r3z1n92Vf/6VD93U78yU3uwkj/50L6zUL+1z/+2jr9wzr/7jL71jLvui781CvzvirsrSj/5Cb/2ib8ziT6tyTxqiT7uRv/5hn/0RLejRD2tgf/zQP+yQDtmgD//+H668b//8T+7Lf747H/+aH+353y1pf+6Ynx2H7/6nH/7Wn/5GX01GX1y2X31VP95VD7wErruUbzs0T7x0L/7j7/8jvy1DrwvDX0xTTfojL6tC32wCz0wirbmyjytyL9uSH4sSDhnR7/wxfqrRX1rBPorhDxrw7/5Aj4uwXmlAX0pAP8ugD9rQDjnQDZhAAVPXx3AAAAR3RSTlMABC7+aDUzHhAKBvjv59S8l490Y15cWE8aFfbw7+fm5d7b2tbRzs7NyMO/vLOzqKabloyIhoV/fmpST09NS0Q/PDkxLyghGnQevcUAAALCSURBVCjPfc5jdJtRHMfxm7Zru7YrVs+2bW958sRGba5Nltq2bdu27dm2bZ4lqbadnXxf3s/5nf8Ff4cAQkLMFKbqwlTyuLCpxH+nauIiKmIqh/Ydm7o/9bsZCovm3K43NY2MXK4seJSQUEdM0IYSena1KYFIaOrGYGSVEeJ7xCUnZrticp3R+pXR31jcDx0+qXnXVx+eJLBtONOZatjbi4WRXBb7vI0NZXTzpM0eM0zXK71zEa9LoXl5nUtJOUMpT9g5biK/ItKd8p95FZb6lmMwNY2tHTfD7EykRQS4JsnTnmoRxjjJq6eb+J6T2Pymz2FwMYI/5PTgcD7RIcTAwAaGeTumNh4VG8aqyE7Yzb/4/ZqW0/1+Yp4dRdcR7xdpiHePZsay3AfleLgxIUubZoE1wnvn+xj6mjSZ+DLikf2sClNpNQBWDrvaG1jA/qGW5pYfLauqX/xMjCPHciOMR/YDMOuTq7Y3iQDBMBE2wl+teUVGIVGn2H23RrYCMJeToX0ZC0MGeDddOw8M47k1Cokkx0cFjSrwlhx9DRoWNqNqOtLLgsODIGskkzeNqhMVA2DJmPdZSgiWcCMjs8jSvAHjR0Ii+RgsuheAtUmVGrZGVmZtJa44WiNkbIwV4NsnokcB2JIUYa9FZ8JQWzFax40IVYUwUSgy+2n7AikADsQk0rVt/a0h6HEBTwnGgUwyKu5r+IAc4LX0S5kWjmpFgqDQArStgZmfFTmO+7L1syofVR/VO+rgDKxIZlBoLlrHHcKifgwFD6wAgjYFoJM1NegW1jDB/IpzGu0de4jR1XUEjLc+JzVZU0vXn0R63VlcdOleTFBLiyKYTD7ntI2mHk7fqLa5M/xuncnDB0pgOsV5LmkaDg5OVH1PT4+AANmD4M9ObF9Y6IHW07vg4pK1TEwK/JOUkvyq+TIy63bMmH77Dd5wD+6FW4wFAAAAAElFTkSuQmCC",
                                            mode: "aspectFit",
                                            class: "coin-img"
                                        }), p(x, {
                                            style: {
                                                "line-height": "32rpx",
                                                "margin-left": "12rpx"
                                            }
                                        }, {
                                            default: l((() => [g("≥" + f(e.amount), 1)])),
                                            _: 2
                                        }, 1024)])),
                                        _: 2
                                    }, 1032, ["style"]), p(A, {
                                        class: "back-right flex items-center",
                                        style: i({
                                            color: _(L).theme.deposit.awarColor
                                        })
                                    }, {
                                        default: l((() => [p(k, {
                                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAqCAMAAADLeogyAAAC9FBMVEUAAAAWEw8gHRoaFQ8UEg0FAwMKBwTz8ecDAgMkGAzotzRZOAMQCgT8/Pr18eYODAjn5dz/2Br7+u744DW7gRsIAwF2TQ2MeClzViNQNhf+2irxzUfRkQ3CeQNXNgj62j755Wn59+nw23f15mxaRiWzm0+tkDWmii7dkQT9zgj/3zLqwSHMoDefXAPivyD531iUXAmleyj431nz5ZBaNQoIBAI6IQYCAgT34mje1q349uz75FSekFXjxCbTwEb/2ybruhLiuF3763d/ZB7Zkgfy1Df952f654D/4UC5dwvkxSWHSQD53Ea9kysrGga3ki9/Swj59+LKryrz5I7WuoH8tQn//8r+tQL//9Pxv0T8ykP//7j13Yr+1D34sAL9sAH///3//8H/8JL313v+5Xf/4U38xz3yrRfwoAP/+br//a/74of//YP83XT00WH90VDzxz7ywDnutTX9zSzfpCz+2Sfxvyf6vybkjADkhAD/8Z764pX84YD/6n/10Hj/4Wrwxmj81WH91Fj+21X0xU/8y0n62Ub+0UX7xTXcqTX9xCzvuhf6rAjlmAjypwXqngXdkgLupADrlwD//u7//eL067f/96j766D76nL21m/812393Gz3yWL1yFv6zkv/4EH/8Tr8vhv9wRj/2hLemhLinwzzowj/0gP4pgL1nADnkwD/9LL/76r+65n//Zf66ZP+64rx1Ib03X//7nbxzG763GftyV3/7lz/4Vzit1XzzUr/7EnhrkHtu0D10jb8zjXjqizytifnsyfGlibroxn8uRL3vgn/8gPZjALxsQD2oAD++tf287r/+3KxpXH/5ln/+VT5uEziuEr//0fmuET5wELhrDn1vDT//yrXmyf/6iPfpRzsrRr3zBbVkRXmrA/trgL/ygD37tH++sD44qv//6Tw0pPpyoP/72vht2rby1T/5Uf/+D//9SXpnhjYlQ//xAD28Ofz4cHOxZ/qwIz7y2y6skzHvTfMtTD1yCvwyQr/xgAL27ffAAAAVXRSTlMABQcLDScXDiAU/oQbJhcRCPxB/LtrYU1CJ+fhy8W7gFsyIxYT/v768N7VwLmgmYmEeHBoXUs/PjMrHg3+/v3z5uTj3drSv66sq6ahn5uIh3tdVUwpC9sfaAAABL9JREFUSMfd02VQFGEcBvCFO1FOQkIUu7u7u7uui+s7Lrk77k66u7sb6ZLuDrEDkJCwu9sv7goCjhjDF2d8Zmd3Z3Z+8/zfd3eB/zpjhoNGDgsNR43ZMJwqdY3+240zZszQ2Pg3SGM6dJ55YsnCCVuNwUxYsG/quj8qbQAYd0Dn8mVGaHBYWHh4mFj2yXjB1Jl/2ArtJbFRwVZiqyyrMH5IOJbNrqlAGGut+O3unspui8SeSUqsNGrBEiOxlWg0udFdWhZ7qHf6IRVs20W6RxIZ7WZHoOUInuRahDsxmS6skqDilb+uWv70IS0RTULKc6yssuhlpQK+MMIex2QJeDumT1u6YtrxIT6d8ROLGXxJtL11iCkqhSCwCrZh4nA4ppNHBSGouDgyMpax5yQ4pPqGQY3jbspy8825Z81CrMODqfdzbHBO9kIcTtQVn0PNliBJpLryzIK92tPVB/XoR0V13sCj/Py5IabnCXmcFHsXnD0OF1HFot4zMX1nd/XqVQsDA/MJP7yAw9cZne50XwMDv9t3aTYt4gyUGdPJyRHhaY5P41rSs4MsCxgOdzmx8wejRVeexHv15IPKN9MmwlHekZclEFoSGowo1KZKV1fXW1qSbm+7sMCEqYOQbv6V3LdB9fW88+f9MCgKPiAw8A7G94EnlWLt5mRjE4GVMJrcXNywQT3rB9BkoZ8f6n7h5/r6WCY2z4JgasrlmhO6jCkmcnlmiomJia2WZVoTMommtbT/t1i/Xc7HG5pbPLqmU+ftozgNxufcrc3nLqPMaoU0QVGRyCGyTEaqTRQz+lY1Ul1bWzeeXEPAYAIIrx+0v2ho8PLyiqsodPamo0KiHWUymaudJYPlgUa6nYnQWge1aKirw4DFce0KH6ZZAB7li7ngf+GCv7//7VeFyWYo6xiiJZ1ODcgWkdBIEIkSpoGm9zdfhu6ojiO9rOuoEgRb0Gh8Pp2XzpMq+JjQGMdUTmpaLlYUTUYiyWeMElYCvVEC9Hd9cW91ruryVPiwexeko/O4WhGKMYspp6Vn2lWKClxIECp9pvcdKQNr5rG96xDO0tbWGyVS5+Yb1/Ky3sxWFKHSXCRGZw0DbYm2jkgkEu0pvjmuHykDx3zcuxNeenjGNSOk0gpEUf7Fx3MaWIYUYQwRVKmORFtwPvJzedssoC/Kykqquh5eXvHx7snJ3skKb9cyhy2zN1UnclEZ0eVEI65hqtDBhYROlLYt7CNQFQxQ2d/IPtcd96LTuaS55Frho0uXLs1xLeBwrJFEIjYDH2grQZLdjaDpBhQcgOtNRif0kNierJrnNayqjx/ez3W+cgfDsa6VlGMzKClEdDLi2e5+AikYHAaorVo8aR6b3diYlOTRXj1355QpIkMDDCdUHlNbetbUgiWOitIfZKAukCnBR6xZNbo3R8aCmeJAMcAYmoTat4hL7RyuPx0/AL5vIUxTVROuqaoyatQIKGtXr119EMHD4/GUACr13sXrEyEzBINrqqipgQhi0EVNb7LM9iGPl55uPvEo/GcDMWhIqAuKmgroVeD6est0J01atHz8LOjT+RUD+6CAGgZ6VTigNEtVVQl61meGdqAEjz4P7c+30X8mQ/PehYIBS/5FvgLfUOkEx7Cg4AAAAABJRU5ErkJggg==",
                                            mode: "aspectFit",
                                            class: "coin2-img"
                                        }), p(x, {
                                            style: {
                                                "line-height": "32rpx",
                                                "margin-left": "12rpx"
                                            }
                                        }, {
                                            default: l((() => [g(f(e.award), 1)])),
                                            _: 2
                                        }, 1024)])),
                                        _: 2
                                    }, 1032, ["style"])])),
                                    _: 2
                                }, 1024)))), 128))])),
                                _: 1
                            }), p(D, {
                                src: "@/static/frecharge/btn_deposit.png",
                                class: "pop-deposit-img",
                                mode: "aspectFit",
                                onClick: b(R, ["stop"])
                            })])),
                            _: 1
                        }), p(A, {
                            class: "show-dayonce flex items-center"
                        }, {
                            default: l((() => [p(A, {
                                class: "check-box relative",
                                onClick: z
                            }, {
                                default: l((() => [p(D, {
                                    src: "@/static/frecharge/image_gx.png",
                                    mode: "aspectFit",
                                    class: "check-bg"
                                }), e.showToday ? (s(), t(D, {
                                    key: 0,
                                    src: "@/static/frecharge/image_gou.png",
                                    class: "checked-img",
                                    mode: "aspectFit"
                                })) : o("", !0)])),
                                _: 1
                            }), p(A, {
                                class: "tips",
                                style: i({
                                    color: _(L).theme.text.normal
                                })
                            }, {
                                default: l((() => [g(f(a.$t("home.popTip")), 1)])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }), p(D, {
                            src: "@/static/frecharge/image_djs.png",
                            class: "count-down-img",
                            mode: "aspectFit"
                        }), p(A, {
                            class: "count-down"
                        }, {
                            default: l((() => [g(f(C.value), 1)])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                }, 512)
            }
        }
    }, [
        ["__scopeId", "data-v-5187eeab"]
    ]),
    Oe = e({
        __name: "ConDepositPop",
        emits: ["close"],
        setup(e, {
            expose: a,
            emit: d
        }) {
            const h = x(null),
                C = y(),
                A = d,
                D = H((() => C.theme.popup)),
                I = x(0),
                L = k(),
                j = H((() => L.rechargeContent || []));
            console.log("content: ", j.value);
            const T = async () => {
                    q.showLoading("Loading");
                    try {
                        const e = j.value[I.value].rechargeAmount,
                            {
                                data: t
                            } = await Q({
                                amount: e
                            });
                        X("rechargeAmount", e), O(t.url), q.hideLoading()
                    } catch (e) {
                        console.log("deposit error: ", e)
                    } finally {
                        q.hideLoading()
                    }
                },
                B = e => {
                    const t = e.give.reduce(((e, t) => e + t.giveAmount), 0);
                    return M(t / e.rechargeAmount * 100, 1)
                };

            function z() {
                h.value.close(), A("close")
            }
            return a({
                open: function() {
                    h.value.open()
                },
                close: z
            }), (e, a) => {
                const d = w,
                    y = v("CacheImage"),
                    k = m,
                    x = n,
                    A = ve(F("uni-popup"), Ue);
                return s(), t(A, {
                    ref_key: "popup",
                    ref: h,
                    type: "center",
                    "is-mask-click": !1,
                    "mask-background-color": "rgba(0, 0, 0, 0.7)"
                }, {
                    default: l((() => [p(x, {
                        class: "pop-content relative",
                        style: i({
                            background: "top / contain no-repeat '/static/home/image_dk.png'"
                        })
                    }, {
                        default: l((() => [p(d, {
                            src: "/static/images/image_phbsy_x.png",
                            mode: "aspectFit",
                            class: "icon-close",
                            onClick: b(z, ["stop"])
                        }), p(d, {
                            src: "/assets/image_cdbbanner-B6Al2SWg.png",
                            mode: "aspectFit",
                            class: "banner-img"
                        }), p(x, {
                            class: "bonus-box pos-absolute",
                            style: i({
                                background: _(C).theme.activity.normalBg
                            })
                        }, {
                            default: l((() => [(s(!0), c(r, null, u(j.value, ((e, a) => (s(), t(x, {
                                key: a,
                                class: "bonus-box-item relative",
                                onClick: e => I.value = a
                            }, {
                                default: l((() => [p(y, {
                                    src: "@/static/deposit_continue/image_dk03.png",
                                    class: "bonus-box-item-bgImg"
                                }), I.value === a ? (s(), t(y, {
                                    key: 0,
                                    src: "@/static/deposit_continue/gouxuan.png",
                                    class: "bonus-box-item-img"
                                })) : o("", !0), p(x, {
                                    class: "dot-box relative",
                                    style: i({
                                        background: `top / contain no-repeat ${D.value.dotBg}`
                                    })
                                }, {
                                    default: l((() => [p(k, {
                                        class: "label",
                                        style: i({
                                            color: D.value.subLabel
                                        })
                                    }, {
                                        default: l((() => [g("Extra")])),
                                        _: 1
                                    }, 8, ["style"]), p(k, {
                                        class: "add-percent",
                                        style: i({
                                            color: D.value.light
                                        })
                                    }, {
                                        default: l((() => [g("+" + f(B(e)) + "%", 1)])),
                                        _: 2
                                    }, 1032, ["style"])])),
                                    _: 2
                                }, 1032, ["style"]), p(x, {
                                    class: "day-left flex justify-between items-center"
                                }, {
                                    default: l((() => [p(x, {
                                        class: "days-row"
                                    }, {
                                        default: l((() => [p(x, {
                                            class: "day-label",
                                            style: i({
                                                color: D.value.title
                                            })
                                        }, {
                                            default: l((() => [g("Day 1")])),
                                            _: 1
                                        }, 8, ["style"]), p(x, {
                                            class: "day-bonus plus",
                                            style: i({
                                                color: D.value.title2
                                            })
                                        }, {
                                            default: l((() => [g(f(e.rechargeAmount), 1)])),
                                            _: 2
                                        }, 1032, ["style"])])),
                                        _: 2
                                    }, 1024), (s(!0), c(r, null, u(e.give, ((a, o) => (s(), t(x, {
                                        key: o,
                                        class: "days-row"
                                    }, {
                                        default: l((() => [p(x, {
                                            class: "day-label",
                                            style: i({
                                                color: D.value.title
                                            })
                                        }, {
                                            default: l((() => [g(f(a.name), 1)])),
                                            _: 2
                                        }, 1032, ["style"]), o !== e.give.length - 1 ? (s(), t(x, {
                                            key: 0,
                                            class: "day-bonus plus",
                                            style: i({
                                                color: D.value.title2
                                            })
                                        }, {
                                            default: l((() => [g(f(a.giveAmount), 1)])),
                                            _: 2
                                        }, 1032, ["style"])) : (s(), t(x, {
                                            key: 1,
                                            class: "day-bonus equal",
                                            style: i({
                                                color: D.value.title2
                                            })
                                        }, {
                                            default: l((() => [g(f(a.giveAmount), 1)])),
                                            _: 2
                                        }, 1032, ["style"]))])),
                                        _: 2
                                    }, 1024)))), 128)), p(x, {
                                        class: "bonus-total"
                                    }, {
                                        default: l((() => [p(x, {
                                            class: "day-label",
                                            style: i({
                                                color: D.value.title
                                            })
                                        }, {
                                            default: l((() => [g("Total")])),
                                            _: 1
                                        }, 8, ["style"]), p(x, {
                                            class: "day-bonus",
                                            style: i({
                                                color: D.value.title2
                                            })
                                        }, {
                                            default: l((() => {
                                                return [g("₹" + f((t = e.rechargeAmount, s = e.give, s.reduce(((e, t) => e + t.giveAmount), 0) + t)), 1)];
                                                var t, s
                                            })),
                                            _: 2
                                        }, 1032, ["style"])])),
                                        _: 2
                                    }, 1024)])),
                                    _: 2
                                }, 1024), p(x, {
                                    class: "day-right flex-center",
                                    style: i({
                                        color: D.value.bold
                                    })
                                }, {
                                    default: l((() => [g("₹" + f(e.rechargeAmount), 1)])),
                                    _: 2
                                }, 1032, ["style"])])),
                                _: 2
                            }, 1032, ["onClick"])))), 128))])),
                            _: 1
                        }, 8, ["style"]), p(d, {
                            src: "/assets/btn_addcash-DKz1aDnz.png",
                            class: "btn-add-img",
                            onClick: b(T, ["stop"])
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                }, 512)
            }
        }
    }, [
        ["__scopeId", "data-v-386cfab5"]
    ]),
    Ye = e({
        __name: "DepositBonus",
        emits: ["close", "receive"],
        setup(e, {
            expose: a,
            emit: d
        }) {
            const m = x(null),
                h = k(),
                _ = y(),
                w = H((() => "₹")),
                C = H((() => h.detailList));
            console.log("rewardList: ", C.value);
            const A = d,
                D = H((() => _.theme.popup)),
                I = Y();

            function L() {
                m.value.close(), A("close")
            }
            const j = e => {
                    const t = new Date(e),
                        s = t.getFullYear(),
                        l = t.getMonth(),
                        a = t.getDate();
                    return new Date(s, l, a)
                },
                T = e => j(Date.now()) > j(e),
                B = e => j(Date.now()).getTime() == j(e).getTime(),
                U = x({}),
                R = x(!1),
                S = x(null),
                V = () => {
                    S.value && (clearTimeout(S.value), S.value = null, R.value = !1)
                };
            return a({
                open: function() {
                    m.value.open(), z((() => {
                        P().in(I.proxy).select("#claim-content").boundingClientRect((e => {
                            console.log("data: ", e)
                        })).exec()
                    }))
                },
                close: L,
                evtHandle: V
            }), (e, a) => {
                const d = v("theme-image"),
                    y = n,
                    _ = ve(F("uni-popup"), Ue);
                return s(), t(_, {
                    ref_key: "popup",
                    ref: m,
                    type: "center",
                    "is-mask-click": !1,
                    "mask-background-color": "rgba(0, 0, 0, 0.7)"
                }, {
                    default: l((() => [p(y, {
                        class: "claim-content relative",
                        id: "claim-content",
                        onClick: V
                    }, {
                        default: l((() => [p(y, {
                            class: "head flex-center"
                        }, {
                            default: l((() => [p(d, {
                                src: "@/static/deposit_continue/image_bt.png",
                                class: "img-title"
                            })])),
                            _: 1
                        }), p(d, {
                            src: "@/static/rank/image_phbsy_x.png",
                            class: "icon-close",
                            onClick: L
                        }), p(y, {
                            class: "w-full act-box"
                        }, {
                            default: l((() => [(s(!0), c(r, null, u(C.value, ((e, a) => (s(), t(y, {
                                class: "reward-item relative flex flex-column justify-between",
                                key: a,
                                onClick: b((t => (e => {
                                    e.conditions && (S.value && clearTimeout(S.value), U.value = e, R.value = !0, S.value = setTimeout((() => {
                                        R.value = !1, S.value = null
                                    }), 6e3))
                                })(e)), ["stop"])
                            }, {
                                default: l((() => {
                                    return [p(y, {
                                        class: "day-index flex-center"
                                    }, {
                                        default: l((() => [g("Day " + f(a + 1), 1)])),
                                        _: 2
                                    }, 1024), p(y, {
                                        class: "hold-on"
                                    }), e.conditions ? (s(), t(y, {
                                        key: 0,
                                        class: "condition line-camp-1"
                                    }, {
                                        default: l((() => [g("Need to complete the following games including " + f(e.conditions), 1)])),
                                        _: 2
                                    }, 1024)) : (s(), t(y, {
                                        key: 1,
                                        class: "condition line-camp-1"
                                    }, {
                                        default: l((() => [g("Deposit " + f(e.giveAmount), 1)])),
                                        _: 2
                                    }, 1024)), p(y, {
                                        class: "progress-line flex items-center"
                                    }, {
                                        default: l((() => [p(y, {
                                            class: "progress relative"
                                        }, {
                                            default: l((() => {
                                                return [p(y, {
                                                    class: "inner flex-center",
                                                    style: i({
                                                        width: (t = e.curBets, s = e.maxBets, (t >= s ? 100 : Math.ceil(t / s * 100)) + "%")
                                                    })
                                                }, null, 8, ["style"]), p(y, {
                                                    class: "progress-text"
                                                }, {
                                                    default: l((() => [g(f(e.curBets) + "/" + f(e.maxBets), 1)])),
                                                    _: 2
                                                }, 1024)];
                                                var t, s
                                            })),
                                            _: 2
                                        }, 1024), p(y, {
                                            class: "reward"
                                        }, {
                                            default: l((() => [g("Reward: " + f(w.value) + f(e.giveAmount), 1)])),
                                            _: 2
                                        }, 1024)])),
                                        _: 2
                                    }, 1024), 0 === e.status ? (s(), c(r, {
                                        key: 2
                                    }, [(n = e.giveDate, j(Date.now()) < j(n) ? (s(), t(y, {
                                        key: 0,
                                        class: "co-btn noreach",
                                        style: i({
                                            background: D.value.noreachBg
                                        })
                                    }, {
                                        default: l((() => [g(" NO REACH ")])),
                                        _: 1
                                    }, 8, ["style"])) : T(e.giveDate) ? (s(), t(y, {
                                        key: 1,
                                        class: "co-btn expired"
                                    }, {
                                        default: l((() => [p(d, {
                                            src: "@/static/deposit_continue/image_expire.png",
                                            class: "img-expire"
                                        })])),
                                        _: 1
                                    })) : B(e.giveDate) ? (s(), t(y, {
                                        key: 2,
                                        class: "co-btn pending",
                                        style: i({
                                            background: D.value.pendingBg
                                        })
                                    }, {
                                        default: l((() => [g(" PENDING ")])),
                                        _: 1
                                    }, 8, ["style"])) : o("", !0))], 64)) : 1 === e.status ? (s(), t(y, {
                                        key: 3,
                                        class: "co-btn collected",
                                        style: i({
                                            background: D.value.collectBg
                                        }),
                                        onClick: b((t => (async e => {
                                            console.log("collect"), W({
                                                id: e.id
                                            }).then((() => {
                                                const t = h.detailList.findIndex((t => t.id === e.id));
                                                h.detailList[t].status = 2, A("receive", e.giveAmount)
                                            }))
                                        })(e)), ["stop"])
                                    }, {
                                        default: l((() => [g("COLLECT")])),
                                        _: 2
                                    }, 1032, ["style", "onClick"])) : 2 === e.status ? (s(), t(y, {
                                        key: 4,
                                        class: "co-btn collect",
                                        style: i({
                                            background: D.value.collectedBg,
                                            color: "#aaaaaa"
                                        })
                                    }, {
                                        default: l((() => [g(" COLLECTED ")])),
                                        _: 1
                                    }, 8, ["style"])) : o("", !0)];
                                    var n
                                })),
                                _: 2
                            }, 1032, ["onClick"])))), 128))])),
                            _: 1
                        }), R.value ? (s(), t(y, {
                            key: 0,
                            class: "pop-tip"
                        }, {
                            default: l((() => [g(" Need to complete the following games including " + f(U.value.conditions) + ", and bet more than " + f(w.value) + " " + f(U.value.maxBets), 1)])),
                            _: 1
                        })) : o("", !0)])),
                        _: 1
                    })])),
                    _: 1
                }, 512)
            }
        }
    }, [
        ["__scopeId", "data-v-ae48fd31"]
    ]),
    We = e({
        __name: "WheelPop",
        emits: ["close"],
        setup(e, {
            expose: a,
            emit: o
        }) {
            const i = k();
            y();
            const c = x(null),
                r = o,
                u = H((() => {
                    var e, t;
                    const s = i.promoList.findIndex((e => "module:lottery" === e.jumpUrl));
                    return s > -1 ? null == (t = null == (e = i.promoList[s]) ? void 0 : e.content) ? void 0 : t.tgLink : ""
                })),
                d = H((() => Z.appImageStartPrefix + "/zptc.png")),
                f = () => {
                    c.value.close(), r("close")
                },
                h = () => {
                    A({
                        url: "/pages/activity/Activity"
                    })
                },
                _ = () => {
                    u.value && J(u.value)
                };
            return a({
                open: () => {
                    c.value.open()
                },
                close: f
            }), (e, a) => {
                const o = v("cache-image"),
                    i = v("CacheImage"),
                    r = m,
                    u = n,
                    y = ve(F("uni-popup"), Ue);
                return s(), t(y, {
                    ref_key: "popup",
                    ref: c,
                    type: "center",
                    "is-mask-click": !1,
                    "mask-background-color": "rgba(0, 0, 0, 0.7)"
                }, {
                    default: l((() => [p(u, {
                        class: "pop-content relative"
                    }, {
                        default: l((() => [p(o, {
                            src: "1@/static/home/image_x1.png",
                            class: "pop-close",
                            onClick: b(f, ["stop"])
                        }), p(o, {
                            src: d.value,
                            class: "pop-image",
                            mode: "widthFix",
                            priority: 10
                        }, null, 8, ["src"]), p(u, {
                            class: "btns flex justify-between items-center"
                        }, {
                            default: l((() => [p(u, {
                                class: "flex-center btn btn-wheel",
                                onClick: b(h, ["stop"])
                            }, {
                                default: l((() => [p(i, {
                                    class: "btn_bg",
                                    src: "@/static/home/btn_huang.png"
                                }), p(r, null, {
                                    default: l((() => [g("Go")])),
                                    _: 1
                                })])),
                                _: 1
                            }), p(u, {
                                class: "flex-center btn btn-tg",
                                onClick: b(_, ["stop"])
                            }, {
                                default: l((() => [p(i, {
                                    class: "btn_bg",
                                    src: "@/static/home/btn_huang.png"
                                }), p(r, null, {
                                    default: l((() => [g("Telegram")])),
                                    _: 1
                                })])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                }, 512)
            }
        }
    }, [
        ["__scopeId", "data-v-df4c6e8a"]
    ]),
    Ze = e({
        __name: "GreatRebet",
        props: {
            detail: {
                type: Array,
                default: () => []
            }
        },
        emits: ["close"],
        setup(e, {
            expose: a,
            emit: d
        }) {
            const h = y(),
                _ = H((() => h.theme.greatRebet)),
                k = x(null),
                w = H((() => "₹")),
                C = d,
                A = () => {
                    k.value.close(), C("close")
                };
            return a({
                open: () => {
                    k.value.open()
                },
                close: A
            }), (a, d) => {
                const y = v("theme-image"),
                    h = n,
                    x = m,
                    C = ve(F("uni-popup"), Ue);
                return s(), t(C, {
                    ref_key: "popup",
                    ref: k,
                    type: "center",
                    "is-mask-click": !1,
                    "mask-background-color": "rgba(0,0,0,0.8)"
                }, {
                    default: l((() => [p(h, {
                        class: "pop-content relative",
                        style: i({
                            background: _.value.popBg
                        })
                    }, {
                        default: l((() => [p(y, {
                            src: "@/static/greatRebet/image_X.png",
                            class: "close pos-absolute",
                            onClick: A
                        }), p(h, {
                            class: "tip pos-absolute",
                            style: i({
                                color: _.value.tip
                            })
                        }, {
                            default: l((() => [g(f(a.$t("home.greatRebet.tip")), 1)])),
                            _: 1
                        }, 8, ["style"]), e.detail.length > 0 ? (s(), t(h, {
                            key: 0,
                            class: "bonus left pos-absolute"
                        }, {
                            default: l((() => [p(h, {
                                class: "amount flex-center"
                            }, {
                                default: l((() => [g(f(w.value) + f(e.detail[0].give + e.detail[0].recharge), 1)])),
                                _: 1
                            }), p(h, {
                                class: "percent pos-absolute percent-left flex-center",
                                style: i({
                                    background: _.value.percentBg,
                                    color: _.value.percent
                                })
                            }, {
                                default: l((() => [p(x, null, {
                                    default: l((() => [g(f(e.detail[0].rate), 1)])),
                                    _: 1
                                }), p(x, {
                                    style: {
                                        "font-size": "20rpx"
                                    }
                                }, {
                                    default: l((() => [g("%")])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        })) : o("", !0), p(h, {
                            class: "bonus center pos-absolute"
                        }, {
                            default: l((() => [p(h, {
                                class: "amount flex-center"
                            }, {
                                default: l((() => [g(f(w.value) + f(e.detail[1].give + e.detail[1].recharge), 1)])),
                                _: 1
                            }), p(h, {
                                class: "percent percent-center pos-absolute flex-center",
                                style: i({
                                    background: _.value.percentBg,
                                    color: _.value.percent
                                })
                            }, {
                                default: l((() => [p(x, null, {
                                    default: l((() => [g(f(e.detail[1].rate), 1)])),
                                    _: 1
                                }), p(x, {
                                    style: {
                                        "font-size": "20rpx"
                                    }
                                }, {
                                    default: l((() => [g("%")])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }), p(h, {
                            class: "bonus right pos-absolute"
                        }, {
                            default: l((() => [p(h, {
                                class: "amount flex-center"
                            }, {
                                default: l((() => [g(f(w.value) + f(e.detail[2].give + e.detail[2].recharge), 1)])),
                                _: 1
                            }), p(h, {
                                class: "percent percent-right pos-absolute flex-center",
                                style: i({
                                    background: _.value.percentBg,
                                    color: _.value.percent
                                })
                            }, {
                                default: l((() => [p(x, null, {
                                    default: l((() => [g(f(e.detail[2].rate), 1)])),
                                    _: 1
                                }), p(x, {
                                    style: {
                                        "font-size": "20rpx"
                                    }
                                }, {
                                    default: l((() => [g("%")])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }), p(h, {
                            class: "btn-box pos-absolute flex justify-between w-full"
                        }, {
                            default: l((() => [(s(!0), c(r, null, u(e.detail, ((e, a) => (s(), t(h, {
                                key: a,
                                class: "recharge-btn flex-center",
                                style: i({
                                    background: _.value.btnBg,
                                    color: _.value.light
                                }),
                                onClick: b((t => (async e => {
                                    K({
                                        title: "Loading..."
                                    });
                                    try {
                                        const {
                                            data: t
                                        } = await $(e);
                                        console.log("createOrder", t), (null == t ? void 0 : t.isSuccess) && O(null == t ? void 0 : t.url)
                                    } catch (t) {
                                        console.log("createOrder error", t)
                                    } finally {
                                        ee()
                                    }
                                })(e.recharge)), ["stop"])
                            }, {
                                default: l((() => [g(f(w.value) + f(e.recharge), 1)])),
                                _: 2
                            }, 1032, ["style", "onClick"])))), 128))])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                }, 512)
            }
        }
    }, [
        ["__scopeId", "data-v-aff4734e"]
    ]);
const Je = new class {
    constructor() {
        this.imageCache = te
    }
    async precacheImages(e, t = {}) {
        const {
            priority: s = 5,
            silent: l = !1
        } = t
    }
    async clearCacheForUrls(e) {
        const t = Array.isArray(e) ? e : [e];
        for (const s of t) this.imageCache.cacheMap[s] && await this.imageCache.removeExpiredCache(s)
    }
    getCacheStatus() {
        return {
            cachedCount: Object.keys(this.imageCache.cacheMap).length,
            pendingQueue: this.imageCache.pendingQueue.length,
            activeDownloads: this.imageCache.activeDownloads
        }
    }
};
const Ke = e({
    __name: "Home",
    setup(e) {
        const {
            t: a
        } = V(), d = ke(), w = S(), C = h(), I = y(), T = xe(), B = E(), z = k(), U = x(!1), R = x(null), P = x(0), N = x(null), M = D({
            currentIndex: 0,
            active: 0,
            bannerList: [],
            popupList: []
        }), q = x(!1), Q = x(!1), O = x(150), Y = H((() => Math.ceil(W.value.length / 5))), W = x([]), Z = H((() => W.value.filter((e => e.doted)).length > 0)), J = H((() => q.value ? -152 : 2)), K = e => {
            P.value = e, R.value.open()
        }, $ = () => {
            q.value = !q.value
        }, ee = async e => {
            var t;
            const s = W.value.findIndex((t => t.dotName == e.dotName));
            if (console.log("openPromo", s, e), s > -1 && (W.value[s].doted = !1), xt(e.dotName, !1), "toInvite" == e.dotName) return xt("toInvite", !1), console.log("/pages/earn/Earn"), ye().active = 1, void he({
                url: "/pages/earn/Earn"
            });
            e.el ? ("deposit_doted" == e.dotName && await z.getDepositAct(), null == (t = e.el) || t.open()) : A({
                url: e.path
            })
        };
        x(200);
        const te = x(!1),
            Ce = x(null),
            Ae = x(null),
            Te = x(null),
            Ue = x([]),
            Se = x("");
        x(null), x(null), x(0);
        const Ke = x(null),
            $e = x(null),
            et = x(null);
        x(null);
        const tt = x(0);
        x({});
        const st = H((() => !!Se.value && Se.value == Re())),
            lt = () => {
                Ae.value.open()
            };
        let at = x(!1),
            ot = x(!1),
            nt = x(!1),
            it = x(!1),
            ct = x(!1),
            rt = x(!1),
            ut = x(w.isOneClickRegister),
            dt = x(!1);
        D({});
        let pt = x(0);
        const mt = () => {
                $e.value.evtHandle()
            },
            gt = async () => {
                var e;
                await (e = 300, new Promise((t => setTimeout(t, e)))), ht()
            },
            ft = () => {
                Ae.value.open()
            },
            yt = () => {
                st.value ? (ge("today"), Se.value = "") : (X("today", Re()), Se.value = Re())
            },
            ht = () => {
                if (console.log(Ue.value), Ue.value.length > 0) {
                    const e = Ue.value.shift();
                    e && e.open()
                }
            },
            vt = async () => {
                const {
                    code: e,
                    data: t
                } = await ne();
                200 === e && (M.bannerList = t.bannerList || [], M.bannerList.forEach((e => {
                    return t = e.imageUrl, void ue({
                        src: t
                    });
                    var t
                })))
            },
            bt = e => {
                M.currentIndex = e.detail.current
            },
            _t = (e, t = !1) => {
                if (pt.value++, 0 == e && (at.value = !1, t)) {
                    let e = new Date;
                    e.setTime(e.getTime() + 864e5), X("checkEndTime", e.getTime())
                }
                if (1 == e && (ot.value = !1), 2 == e && (nt.value = !1), 3 == e && (it.value = !1), 4 == e && (ct.value = !1), "register" == e && (dt.value = !1, ut.value = !1, w.isOneClickRegister = !1), "giftCode" === e && (rt.value = !1), M.popupList.length - 1 >= pt.value) {
                    const e = M.popupList[pt.value];
                    kt(e)
                }
            },
            kt = e => {
                if (e) {
                    if ("firstdeposit" == e.popup) {
                        let e = G("checkEndTime");
                        if ("" != e && null != e && null != e) {
                            (new Date).getTime() > e ? (at.value = !0, fe({
                                key: "checkEndTime"
                            })) : (at.value = !1, pt.value++, kt(M.popupList[pt.value]))
                        } else at.value = !0
                    }
                    "community" == e.popup && (ct.value = !0), "signin" == e.popup && (nt.value = !0), "giftCode" === e.popup && (rt.value = !0)
                }
            };

        function xt(e, t) {
            re({
                key: e,
                data: t
            })
        }

        function wt(e) {
            return G(e)
        }
        const Ct = () => {
                const e = W.value.findIndex((e => e.el === Ae.value));
                e > -1 && W.value.splice(e, 1)
            },
            At = x([]);
        be((async () => {
            Je.precacheImages(["https://img1.sp77.in/frontimg/images/103/zptc.png", "https://img1.sp77.in/frontimg/images/red/frecharge/image_czdk2.png", "https://img2.sp77.in/frontimg/images/red/home/btn_huang.png", "https://img1.sp77.in/frontimg/images/red/home/image_welcomebonus10-17.png"], {
                priority: 10,
                silent: !0
            }), setTimeout((() => {
                console.log("imageCache", G("imageCache"))
            }), 5e3), console.log("onLoad"), se(), le.login(), vt(), await (async () => {
                var e, t;
                const {
                    data: s
                } = await ie();
                if (console.log("User activity", s), tt.value = s.state, 0 === s.state || null == s.activity && null == s.detailList) U.value = !1;
                else {
                    if (U.value = !0, 1 === s.state && (null == (e = s.activity) ? void 0 : e.content)) {
                        const e = JSON.parse((null == (t = s.activity) ? void 0 : t.content) ? ? "{}");
                        z.rechargeContent = e;
                        let l = !1;
                        "" === wt("recharge_bonus") && (l = !0), W.value.findIndex((e => "recharge_bonus" == e.dotName)) < 0 && (W.value.push({
                            el: Ke.value,
                            path: "",
                            icon: "@/static/pop_icons/deposit1.gif",
                            doted: l,
                            dotName: "recharge_bonus",
                            count: 1
                        }), Ue.value.push(Ke.value))
                    }
                    if (2 === s.state && s.detailList) {
                        z.detailList = s.detailList.map(((e, t) => {
                            const s = JSON.parse(e.condition).typeVal.filter((e => "" !== e.name)).map((e => null == e ? void 0 : e.name)).join("、");
                            return e.conditions = s, e
                        })), z.detailList.unshift({
                            id: 1,
                            giveAmount: s.recharge.rechargeAmount,
                            giveDate: s.recharge.createTime,
                            status: 2,
                            curBets: 1,
                            maxBets: 1,
                            conditions: ""
                        }), Ue.value.push($e.value);
                        const e = z.detailList.some((e => 1 === e.status));
                        xt("deposit_doted", e);
                        const t = W.value.findIndex((e => "deposit_doted" === e.dotName));
                        t < 0 ? W.value.push({
                            el: $e.value,
                            path: "",
                            icon: "@/static/pop_icons/deposit1.gif",
                            doted: e,
                            dotName: "deposit_doted",
                            count: 1
                        }) : (W.value[t].doted = e, W.value[t].count = 1)
                    }
                }
            })(), z.promoList && It()
        }));
        const Dt = x(!1),
            It = async () => {
                var e, t;
                if (console.log("isInitPromoList", Dt.value), Dt.value) return;
                Dt.value = !0, await Lt();
                z.promoList.findIndex((e => "module:lottery" === e.jumpUrl)) > -1 && Ue.value.push(et.value);
                const s = G("today"),
                    l = G("rewardDayonce");
                if (te.value = l === Re(), Se.value = s, 0 === (null == (e = w.userInfo) ? void 0 : e.firstRecharge) && s !== Re() && Ue.value.push(Te.value), null == (t = w.userInfo) ? void 0 : t.mobile) {
                    const e = W.value.findIndex((e => "bind_doted" === e.dotName));
                    e > -1 && W.value.splice(e, 1)
                } else W.value.push({
                    el: Ae.value,
                    path: "",
                    icon: "@/static/pop_icons/animation_verify.gif",
                    doted: !0,
                    dotName: "bind_doted",
                    count: 1
                });
                setTimeout((() => {
                    ht(), Q.value = !0, q.value = !0
                }), 1e3)
            };
        ae((() => z.promoList), (() => {
            It()
        })), ae((() => W.value.length), (() => {
            console.log(W.value);
            if (-1 == W.value.findIndex((e => "rank_doted" === e.dotName))) {
                let e = !1;
                "" === wt("rank_doted") && (e = !0), W.value.push({
                    el: null,
                    path: "/pages/promo/Ranking/Ranking",
                    icon: "@/static/pop_icons/animation_phb.gif",
                    doted: e,
                    dotName: "rank_doted",
                    count: 1
                })
            }
        })), _e((() => {
            setTimeout((() => {
                w.getUserInfo()
            }), 500), (async () => {
                try {
                    const {
                        data: e
                    } = await ce();
                    console.log("getUserBankrupt:", e);
                    const {
                        state: t,
                        details: s
                    } = e;
                    if (0 === t) {
                        const e = W.value.findIndex((e => "bankrupt_doted" === e.dotName));
                        return void(e > -1 && W.value.splice(e, 1))
                    }
                    if (1 === t) {
                        const e = s.sort(((e, t) => e.recharge - t.recharge));
                        if (At.value = [e[0], e[2], e[1]], Ue.value.findIndex((e => e === N.value)) < 0 && (Ue.value.push(N.value), setTimeout((() => {
                                1 === Ue.value.length && ht()
                            }), 500)), W.value.findIndex((e => "bankrupt_doted" === e.dotName)) < 0) {
                            let e = wt("bankrupt_doted");
                            return "" === e && (e = !0), void W.value.push({
                                el: N.value,
                                path: "",
                                icon: "@/static/pop_icons/animation_bx.gif",
                                doted: e,
                                dotName: "bankrupt_doted",
                                count: 1
                            })
                        }
                    }
                    if (2 === t) {
                        const e = W.value.findIndex((e => "bankrupt_doted" === e.dotName)),
                            t = s.sort(((e, t) => e.recharge - t.recharge));
                        At.value = [t[0], t[2], t[1]];
                        let l = wt("bankrupt_doted");
                        "" === l && (l = !0), e > -1 ? W.value[e].doted = !0 : W.value.push({
                            el: N.value,
                            path: "",
                            icon: "@/static/pop_icons/animation_bx.gif",
                            doted: l,
                            dotName: "bankrupt_doted",
                            count: 1
                        }), console.log("bankruptArr:", W.value)
                    }
                } catch (e) {
                    console.log("getUserBankrupt error:", e)
                }
            })(), d.getRecentGames(), d.getFavoriteGames(), w.isLogin && (T.getMailList(), B.getChargeInfo()), Dt.value && (w.getUserTotalInfo(), Lt())
        }));
        const Lt = async () => await oe().then((({
            data: e
        }) => {
            var t, s;
            const l = W.value.findIndex((e => "wheel_doted" === e.dotName));
            if (l < 0) {
                if (null == e ? void 0 : e.activity) {
                    let e = wt("wheel_doted");
                    "" === e && (e = !0), W.value.push({
                        el: null,
                        path: "/pages/redeposit/ReDeposit",
                        icon: "@/static/pop_icons/animation_zp.gif",
                        doted: e,
                        count: 0,
                        dotName: "wheel_doted"
                    })
                }
                if (null == (t = null == e ? void 0 : e.lottery) ? void 0 : t.lottery) {
                    const t = W.value.findIndex((e => "wheel_doted" === e.dotName)),
                        s = JSON.parse(e.lottery.lottery),
                        l = (null == s ? void 0 : s.reduce(((e, t) => e + t.curCount), 0)) ? ? 0;
                    let a = wt("wheel_doted");
                    !1 === a && l > 0 && (xt("wheel_doted", !0), a = !0), "" === a && (xt("wheel_doted", !0), a = !0), W.value[t].doted = a, W.value[t].count = l
                }
            } else if (null == (s = null == e ? void 0 : e.lottery) ? void 0 : s.lottery) {
                const t = JSON.parse(e.lottery.lottery),
                    s = (null == t ? void 0 : t.reduce(((e, t) => e + t.curCount), 0)) ? ? 0;
                let a = wt("wheel_doted");
                !1 === a && s > 0 && (xt("wheel_doted", !0), a = !0), "" === a && (xt("wheel_doted", !0), a = !0), W.value[l].doted = a, W.value[l].count = s
            }
        }));
        return (e, a) => {
            const y = v("CacheImage"),
                h = v("theme-image"),
                k = pe,
                x = de,
                A = ve(F("uni-swiper-dot"), Pe),
                D = n,
                T = m,
                B = v("custom-tabbar"),
                z = v("common-layout");
            return s(), t(z, {
                bgColor: "#3c090f",
                onClick: mt
            }, {
                default: l((() => [p(y, {
                    class: "home_bg_image",
                    src: "0@/static/home_bg.png"
                }), p(D, {
                    class: "home-container",
                    style: i({
                        height: _(C).windowInfo.screenHeight + "px"
                    })
                }, {
                    default: l((() => [p(Ve), p(D, {
                        class: "plr30"
                    }, {
                        default: l((() => [p(A, {
                            info: M.bannerList,
                            current: M.currentIndex,
                            field: "content",
                            mode: "round",
                            dotsStyles: {
                                backgroundColor: "#fff",
                                selectedBackgroundColor: _(I).theme.swiper.dot,
                                selectedBorder: "none",
                                bottom: 6
                            }
                        }, {
                            default: l((() => [p(x, {
                                class: "swiper-view",
                                circular: !0,
                                duration: 500,
                                autoplay: !0,
                                "indicator-dots": !1,
                                interval: 3e3,
                                onChange: bt
                            }, {
                                default: l((() => [(s(!0), c(r, null, u(M.bannerList, ((e, a) => (s(), t(k, {
                                    key: a,
                                    onClick: t => (async e => {
                                        var t;
                                        console.log("handleBannerClick", e), 16 !== e.pageKey ? me(e.type, e) : (null == (t = w.userInfo) ? void 0 : t.mobile) || Ae.value.open()
                                    })(e)
                                }, {
                                    default: l((() => [p(h, {
                                        class: "swipe-img",
                                        src: e.imageUrl
                                    }, null, 8, ["src"])])),
                                    _: 2
                                }, 1032, ["onClick"])))), 128))])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["info", "current", "dotsStyles"])])),
                        _: 1
                    }), p(D, {
                        class: "mt16 plr30"
                    }, {
                        default: l((() => [p(De)])),
                        _: 1
                    }), p(D, {
                        class: "mt16 plr30"
                    }, {
                        default: l((() => [p(we, {
                            onShowBindPhone: lt
                        })])),
                        _: 1
                    }), p(D, {
                        class: "mt8"
                    }, {
                        default: l((() => [p(D, {
                            class: "plr30"
                        }, {
                            default: l((() => [p(D, {
                                class: "home-tabs-view",
                                style: i({
                                    "border-color": _(I).theme.seplineColor
                                })
                            }, {
                                default: l((() => [p(Le, {
                                    listData: [{
                                        title: e.$t("home.allgames")
                                    }, {
                                        title: e.$t("home.recent")
                                    }, {
                                        title: e.$t("home.favorite")
                                    }],
                                    onChange: a[0] || (a[0] = ({
                                        index: e
                                    }) => {
                                        _(d).getRecentGames(), _(d).getFavoriteGames(), M.active = e
                                    })
                                }, null, 8, ["listData"])])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }), L(p(D, null, {
                            default: l((() => [p(He)])),
                            _: 1
                        }, 512), [
                            [j, 0 === M.active]
                        ]), L(p(D, {
                            class: "list-item-view"
                        }, {
                            default: l((() => [(s(!0), c(r, null, u(_(d).recentGameList, ((e, a) => (s(), t(D, {
                                class: "list-item-4",
                                key: a
                            }, {
                                default: l((() => [p(Ie, {
                                    style: {
                                        width: "200rpx",
                                        height: "200rpx",
                                        padding: "0rpx 15rpx"
                                    },
                                    itemData: e
                                }, null, 8, ["itemData"])])),
                                _: 2
                            }, 1024)))), 128)), 0 === _(d).recentGameList.length ? (s(), t(je, {
                                key: 0,
                                style: {
                                    width: "100%"
                                }
                            })) : o("", !0)])),
                            _: 1
                        }, 512), [
                            [j, 1 === M.active]
                        ]), L(p(D, {
                            class: "list-item-view"
                        }, {
                            default: l((() => [(s(!0), c(r, null, u(_(d).favoriteGameList, ((e, a) => (s(), t(D, {
                                class: "list-item-4",
                                key: a
                            }, {
                                default: l((() => [p(Ie, {
                                    style: {
                                        width: "200rpx",
                                        height: "200rpx",
                                        padding: "0rpx 15rpx"
                                    },
                                    itemData: e
                                }, null, 8, ["itemData"])])),
                                _: 2
                            }, 1024)))), 128)), 0 === _(d).favoriteGameList.length ? (s(), t(je, {
                                key: 0,
                                style: {
                                    width: "100%"
                                }
                            })) : o("", !0)])),
                            _: 1
                        }, 512), [
                            [j, 2 === M.active]
                        ])])),
                        _: 1
                    }), p(D, {
                        class: "w-full space",
                        style: {
                            height: "100rpx"
                        }
                    })])),
                    _: 1
                }, 8, ["style"]), p(We, {
                    ref_key: "wheelPop",
                    ref: et,
                    onClose: gt
                }, null, 512), p(Ne, {
                    firstDepositVisible: _(at),
                    onClosePopup: _t
                }, null, 8, ["firstDepositVisible"]), p(Fe, {
                    upRebateVisible: _(ot),
                    onClosePopup: _t
                }, null, 8, ["upRebateVisible"]), p(Ee, {
                    signinVisible: _(nt),
                    onClosePopup: _t
                }, null, 8, ["signinVisible"]), p(Ge, {
                    communityVisible: _(ct),
                    onClosePopup: _t
                }, null, 8, ["communityVisible"]), p(Xe, {
                    visible: _(rt),
                    onClosePopup: _t
                }, null, 8, ["visible"]), p(Me, {
                    registerSuccesVisible: _(dt),
                    onClosePopup: _t
                }, null, 8, ["registerSuccesVisible"]), p(Be, {
                    ref_key: "bindPhone",
                    ref: Ae,
                    onClose: gt,
                    onComplete: Ct
                }, null, 512), p(qe, {
                    ref_key: "bindPromoPop",
                    ref: Ce,
                    onOnBind: ft,
                    onClose: gt
                }, null, 512), p(Qe, {
                    "show-today": !!st.value,
                    ref_key: "firstRechargePop",
                    ref: Te,
                    onChecked: yt,
                    onClose: gt
                }, null, 8, ["show-today"]), p(Oe, {
                    ref_key: "conDepositPop",
                    ref: Ke,
                    onClose: gt
                }, null, 512), p(Ye, {
                    ref_key: "depositBonusPop",
                    ref: $e,
                    onReceive: K,
                    onClose: gt
                }, null, 512), p(Ze, {
                    ref_key: "greatPopRef",
                    ref: N,
                    detail: At.value,
                    onClose: gt
                }, null, 8, ["detail"]), Q.value ? (s(), t(D, {
                    key: 0,
                    class: "slider-bar",
                    style: i({
                        right: -(112 * Y.value + 38) + "rpx",
                        transform: `translateX(${J.value}rpx)`
                    })
                }, {
                    default: l((() => [p(D, {
                        class: "out-menu",
                        onClick: $
                    }, {
                        default: l((() => [p(y, {
                            src: "0@/static/home/" + (q.value ? "shouqi.png" : "zhankai.png"),
                            class: "icon-slide-menu"
                        }, null, 8, ["src"]), Z.value ? (s(), t(D, {
                            key: 0,
                            class: "red-dot"
                        })) : o("", !0)])),
                        _: 1
                    }), p(D, {
                        class: "slider-box",
                        style: i({
                            width: O.value + "rpx"
                        })
                    }, {
                        default: l((() => [(s(!0), c(r, null, u(W.value, ((e, a) => (s(), t(D, {
                            key: a,
                            class: "slide-item relative",
                            onClick: b((t => ee(e)), ["stop"])
                        }, {
                            default: l((() => [p(y, {
                                src: e.icon,
                                style: i({
                                    width: "112rpx",
                                    height: "112rpx"
                                }),
                                class: "icon-slide-menu",
                                mode: "aspectFit"
                            }, null, 8, ["src", "style"]), e.doted ? (s(), t(D, {
                                key: 0,
                                class: "red-dot flex-center"
                            }, {
                                default: l((() => [e.count > 0 ? (s(), t(T, {
                                    key: 0,
                                    style: i({
                                        color: _(I).theme.depositWheel.quaternary
                                    })
                                }, {
                                    default: l((() => [g(f(e.count), 1)])),
                                    _: 2
                                }, 1032, ["style"])) : o("", !0)])),
                                _: 2
                            }, 1024)) : o("", !0)])),
                            _: 2
                        }, 1032, ["onClick"])))), 128))])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                }, 8, ["style"])) : o("", !0), p(ze, {
                    ref_key: "awardPopup",
                    ref: R,
                    "prize-amount": P.value,
                    onClose: gt
                }, null, 8, ["prize-amount"]), p(B, {
                    selected: 0
                })])),
                _: 1
            })
        }
    }
}, [
    ["__scopeId", "data-v-80546355"]
]);
export {
    Ke as
    default
};