import {
    _ as t,
    N as e,
    u as a,
    j as s,
    a as l,
    f as i,
    E as n,
    O as o,
    r,
    c as u,
    b as c,
    o as p,
    w as d,
    d as m,
    i as f,
    A as y,
    n as h,
    e as g,
    y as v,
    z as _,
    q as b,
    F as w,
    t as x,
    C as T,
    au as I,
    av as $,
    aw as k,
    K as z,
    ax as L,
    ay as B,
    az as C
} from "./index-DMsdlv-S.js";
import {
    N as R
} from "./NormalTabs.DuWcVaVb.js";
import {
    e as S
} from "./encipherPhone.QHWvuj37.js";
import {
    s as j
} from "./system.D_JV23zO.js";
import {
    T as E
} from "./TipsPopup.B1D9Hh3C.js";
const F = t({
    __name: "TurnplateGame",
    emits: ["confirm"],
    setup(t, {
        expose: F,
        emit: A
    }) {
        const {
            t: P
        } = e(), N = a(), q = s(), D = l(), G = i(!1), V = i(null), M = i(null), O = n({
            activityId: null,
            tipText: "",
            myBonus: 0,
            finishStatus: 0,
            isRunning: !1,
            prizeId: 0,
            baseRunAngle: 1800,
            list: [],
            myList: [],
            bigList: [{}, {}, {}]
        }), U = () => 360 / q.turnplate.spinList.length, Y = () => O.baseRunAngle + 360 - O.prizeId * U() - U() / 2, J = o((() => {
            const t = q.turnplate.spinList.length,
                e = ["#ffffff", "#FFE08D"];
            let a = "";
            for (let s = 0; s < t; s++) a += `${e[s%2]} ${U()*s}deg ${U()*(s+1)}deg,`;
            return `background: conic-gradient(${a.slice(0,-1)});`
        })), K = o((() => {
            const t = U();
            return e => `\n\t\t\t\twidth: ${450*Math.sin(t/2*Math.PI/180)}rpx;\n\t\t\t\theight: 225rpx;\n\t\t\t\ttransform: rotate(${t*e+t/2}deg);\n\t\t\t\ttransform-origin: 50% 100%;\n\t\t\t`
        })), W = async () => {
            const {
                code: t,
                data: e
            } = await B({
                activityId: q.turnplate.id,
                self: 0,
                page: 1,
                pageSize: 30
            });
            200 === t && (O.list = e || [])
        }, H = async () => {
            const {
                code: t,
                data: e
            } = await B({
                activityId: q.turnplate.id,
                self: 1,
                page: 1,
                pageSize: 30
            });
            200 === t && (O.myList = e || [])
        }, Q = async () => {
            const {
                code: t,
                data: e
            } = await C({
                activityId: q.turnplate.id
            });
            200 === t && (O.bigList = e || [])
        }, X = async () => {
            if (O.isRunning) return;
            if (0 === q.turnplate.remainTimes) return void(1 === O.finishStatus ? (O.tipText = "Your number of spins has been used up.", M.value.show()) : (O.tipText = "You have not yet met the spin requirements. Please review the rules to complete the requirements.", M.value.show()));
            const {
                code: t,
                data: e
            } = await k({
                activityId: q.turnplate.id
            });
            if (200 !== t) return;
            O.isRunning = !0;
            const a = e;
            O.prizeId = a, Z()
        }, Z = () => {
            const t = `width: 100%;height: 100%;overflow: hidden;${J.value} transform: rotate(${Y()}deg);transition: all 4s ease;`;
            document.getElementById("prize-wrap").style = t, console.log("start run", t), setTimeout((() => {
                tt(), st(), setTimeout((() => {
                    H()
                }), 200), W(), Q()
            }), 4e3)
        }, tt = () => {
            O.isRunning = !1;
            const t = `width: 100%;height: 100%;overflow: hidden;${J.value} transform: rotate(${Y()-O.baseRunAngle}deg);`;
            document.getElementById("prize-wrap").style = t, console.log("stop run", t);
            const e = q.turnplate.spinList[O.prizeId].amount;
            O.tipText = `Congratulations on winning bonus ${e}`, M.value.show()
        }, et = () => {
            G.value = !1
        }, at = async t => {
            O.myBonus = 0, z((() => {
                const t = `width: 100%;height: 100%;overflow: hidden;${J.value} transform: rotate(0deg);`;
                document.getElementById("prize-wrap").style = t, console.log("reset run", t)
            })), await q.getSpinActivityData(), O.activityId ? q.turnplate.activityRewardList.forEach((t => {
                t.activityId === O.activityId && (q.turnplate.id = t.activityId, O.myBonus = t.yourBonus || 0, O.finishStatus = t.finishStatus || 0, q.turnplate.remainTimes = t.remainTimes || 0)
            })) : q.turnplate.activityRewardList.forEach((t => {
                t.remainTimes > 0 && (q.turnplate.id = t.activityId, O.myBonus = t.yourBonus || 0, O.finishStatus = t.finishStatus || 0, q.turnplate.remainTimes = t.remainTimes || 0)
            })), lt(), W(), setTimeout((() => {
                H()
            }), 200), Q()
        }, st = async () => {
            await q.getSpinActivityData(), q.turnplate.activityRewardList.forEach((t => {
                q.turnplate.id === t.activityId && (O.myBonus = t.yourBonus || 0, q.turnplate.remainTimes = t.remainTimes || 0)
            }))
        }, lt = async () => {
            const {
                code: t,
                data: e
            } = await L();
            if (200 === t && e) {
                const t = e.find((t => "module:spin" === t.jumpUrl && t.id === q.turnplate.id));
                if (t && t.content) {
                    const e = JSON.parse(t.content || {});
                    q.turnplate.title = t.name || "", q.turnplate.content = e, q.turnplate.spinList = e.spin_award || [], q.turnplate.rules = e.desc || []
                }
            }
        }, it = async () => {
            if (O.myBonus <= 0) return;
            const {
                code: t,
                data: e
            } = await $({
                activityId: q.turnplate.id
            });
            200 === t && (O.tipText = "The bonus has been successfully received, please check the balance.", M.value.show(), at(q.turnplate.id))
        }, nt = () => {}, ot = t => {};
        return F({
            show: t => {
                G.value = !0, O.activityId = t || null, at()
            },
            hide: et
        }), (t, e) => {
            const a = f,
                s = r("theme-image");
            return G.value ? (p(), u(a, {
                key: 0,
                class: "normal-popup-view-container"
            }, {
                default: d((() => [m(a, {
                    class: "normal-popup-view",
                    onClick: y(nt, ["stop"])
                }, {
                    default: d((() => [m(a, {
                        class: "normal-popup-content"
                    }, {
                        default: d((() => [m(a, {
                            class: "popup-content-view",
                            style: h({
                                "background-color": g(N).theme.popup.bgColor
                            })
                        }, {
                            default: d((() => [m(a, {
                                class: "tips-popup-content"
                            }, {
                                default: d((() => [m(a, {
                                    class: "content-top",
                                    onTouchmove: y(ot, ["prevent"])
                                }, {
                                    default: d((() => [m(a, {
                                        class: "title text-a-center",
                                        style: h({
                                            color: g(N).theme.text.normal
                                        })
                                    }, {
                                        default: d((() => [v(_(g(q).turnplate.title || "Lucky Spin"), 1)])),
                                        _: 1
                                    }, 8, ["style"]), m(a, {
                                        class: "text",
                                        style: h({
                                            color: g(N).theme.text.normal
                                        })
                                    }, {
                                        default: d((() => [m(a, {
                                            class: "flex-acenter flex-sbetween w-100p plr16"
                                        }, {
                                            default: d((() => [m(a, {
                                                class: "ft12 flex-1"
                                            }, {
                                                default: d((() => [v(_(t.$t("promo.turnplate.yourBonus")) + " " + _(O.myBonus), 1)])),
                                                _: 1
                                            }), m(a, {
                                                class: "act-btn mr10",
                                                style: h({
                                                    background: O.myBonus <= 0 ? "#999999" : g(N).theme.button.normal2
                                                }),
                                                onClick: y(it, ["stop"])
                                            }, {
                                                default: d((() => [v(_(t.$t("promo.turnplate.claim")), 1)])),
                                                _: 1
                                            }, 8, ["style"]), m(a, {
                                                class: "act-btn",
                                                style: h({
                                                    background: g(N).theme.button.normal1
                                                }),
                                                onClick: e[0] || (e[0] = y((t => g(j)({
                                                    url: g(D).inviteLink
                                                })), ["stop"]))
                                            }, {
                                                default: d((() => [v(_(t.$t("promo.turnplate.share")), 1)])),
                                                _: 1
                                            }, 8, ["style"])])),
                                            _: 1
                                        }), m(a, {
                                            class: "mt24 flex-scenter"
                                        }, {
                                            default: d((() => [m(a, {
                                                class: "spin-container"
                                            }, {
                                                default: d((() => [m(s, {
                                                    class: "spin-round-bg",
                                                    src: "@/static/promo/turnplate/plate-round.png",
                                                    mode: "scaleToFill"
                                                }), m(s, {
                                                    class: "spin-arrow-top",
                                                    src: "@/static/promo/turnplate/plate-arrow-top.png",
                                                    mode: "scaleToFill"
                                                }), m(a, {
                                                    class: "spin-btn",
                                                    onClick: y(X, ["stop"])
                                                }, {
                                                    default: d((() => [m(s, {
                                                        class: "spin-btn-img",
                                                        src: "@/static/promo/turnplate/plate-arrow.png",
                                                        mode: "aspectFit"
                                                    }), m(a, {
                                                        class: "spin-btn-text"
                                                    }, {
                                                        default: d((() => [m(a, {
                                                            class: "spin-title"
                                                        }, {
                                                            default: d((() => [v(" Spin ")])),
                                                            _: 1
                                                        }), m(a, null, {
                                                            default: d((() => [v(" Remaining ")])),
                                                            _: 1
                                                        }), m(a, null, {
                                                            default: d((() => [v(_(g(q).turnplate.remainTimes) + " times ", 1)])),
                                                            _: 1
                                                        })])),
                                                        _: 1
                                                    })])),
                                                    _: 1
                                                }), m(a, {
                                                    class: "prize-list",
                                                    id: "prize-wrap",
                                                    ref_key: "prizeWrapRef",
                                                    ref: V,
                                                    style: h(J.value)
                                                }, {
                                                    default: d((() => [(p(!0), b(w, null, x(g(q).turnplate.spinList, ((t, e) => (p(), u(a, {
                                                        class: "prize-item",
                                                        style: h(K.value(e))
                                                    }, {
                                                        default: d((() => [T("div", {
                                                            class: "prize-item-title"
                                                        }, _(t.amount), 1), m(s, {
                                                            class: "prize-item-img",
                                                            src: "@/static/promo/turnplate/icon-coin.png",
                                                            mode: "aspectFit"
                                                        })])),
                                                        _: 2
                                                    }, 1032, ["style"])))), 256))])),
                                                    _: 1
                                                }, 8, ["style"])])),
                                                _: 1
                                            })])),
                                            _: 1
                                        }), m(a, {
                                            class: "mt24"
                                        }, {
                                            default: d((() => [m(R, {
                                                modelValue: g(q).turnplate.tabIndex,
                                                "onUpdate:modelValue": e[1] || (e[1] = t => g(q).turnplate.tabIndex = t),
                                                normalColor: g(N).theme.tabs.normal,
                                                activeColor: g(N).theme.tabs.active,
                                                size: "small",
                                                tabList: [{
                                                    title: t.$t("promo.turnplate.rules")
                                                }, {
                                                    title: t.$t("promo.turnplate.winning")
                                                }, {
                                                    title: t.$t("promo.turnplate.myRecord")
                                                }]
                                            }, null, 8, ["modelValue", "normalColor", "activeColor", "tabList"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }, 8, ["style"])])),
                                    _: 1
                                }), m(a, {
                                    style: {
                                        width: "100%"
                                    }
                                }, {
                                    default: d((() => [m(a, {
                                        id: "list"
                                    }, {
                                        default: d((() => [0 === g(q).turnplate.tabIndex ? (p(), u(a, {
                                            key: 0,
                                            class: "list-container mt20 plr16"
                                        }, {
                                            default: d((() => [m(a, {
                                                class: "list-scroll"
                                            }, {
                                                default: d((() => [(p(!0), b(w, null, x(g(q).turnplate.rules, ((t, e) => (p(), u(a, {
                                                    key: e
                                                }, {
                                                    default: d((() => [m(a, {
                                                        class: "flex-acenter ptb16"
                                                    }, {
                                                        default: d((() => [m(s, {
                                                            src: "@/static/promo/rz.png",
                                                            style: {
                                                                width: "24rpx",
                                                                height: "24rpx"
                                                            }
                                                        }), m(a, {
                                                            class: "ml8 ft13",
                                                            style: h({
                                                                color: g(N).theme.text.highlight
                                                            })
                                                        }, {
                                                            default: d((() => [v(_(t.head_1), 1)])),
                                                            _: 2
                                                        }, 1032, ["style"])])),
                                                        _: 2
                                                    }, 1024), m(a, {
                                                        class: "ft12"
                                                    }, {
                                                        default: d((() => [v(_(t.desc_1), 1)])),
                                                        _: 2
                                                    }, 1024)])),
                                                    _: 2
                                                }, 1024)))), 128))])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })) : c("", !0), 1 === g(q).turnplate.tabIndex ? (p(), u(a, {
                                            key: 1,
                                            class: "list-container mt20 plr16"
                                        }, {
                                            default: d((() => [m(a, {
                                                class: "list-item",
                                                style: h({
                                                    background: g(N).theme.list.headerBgColor
                                                })
                                            }, {
                                                default: d((() => [m(a, {
                                                    class: "list-value"
                                                }, {
                                                    default: d((() => [v(_(t.$t("promo.turnplate.phone")), 1)])),
                                                    _: 1
                                                }), m(a, {
                                                    class: "list-value"
                                                }, {
                                                    default: d((() => [v(_(t.$t("promo.turnplate.bonus")), 1)])),
                                                    _: 1
                                                }), m(a, {
                                                    class: "list-value"
                                                }, {
                                                    default: d((() => [v(_(t.$t("promo.turnplate.time")), 1)])),
                                                    _: 1
                                                })])),
                                                _: 1
                                            }, 8, ["style"]), m(a, {
                                                class: "list-scroll"
                                            }, {
                                                default: d((() => [(p(!0), b(w, null, x(O.bigList, ((t, e) => (p(), u(a, {
                                                    class: "list-item top3"
                                                }, {
                                                    default: d((() => [m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(_(g(S)(t.mobile)), 1)])),
                                                        _: 2
                                                    }, 1024), m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(" Got " + _(t.amount) + " bonus ", 1)])),
                                                        _: 2
                                                    }, 1024), m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(_(g(I)(t.createTime, 10)), 1)])),
                                                        _: 2
                                                    }, 1024)])),
                                                    _: 2
                                                }, 1024)))), 256)), (p(!0), b(w, null, x(O.list, ((t, e) => (p(), u(a, {
                                                    class: "list-item"
                                                }, {
                                                    default: d((() => [m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(_(g(S)(t.mobile)), 1)])),
                                                        _: 2
                                                    }, 1024), m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(" Got " + _(t.amount) + " bonus ", 1)])),
                                                        _: 2
                                                    }, 1024), m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(_(g(I)(t.createTime, 10)), 1)])),
                                                        _: 2
                                                    }, 1024)])),
                                                    _: 2
                                                }, 1024)))), 256))])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })) : c("", !0), 2 === g(q).turnplate.tabIndex ? (p(), u(a, {
                                            key: 2,
                                            class: "list-container mt20 plr16"
                                        }, {
                                            default: d((() => [m(a, {
                                                class: "list-item",
                                                style: h({
                                                    background: g(N).theme.list.headerBgColor
                                                })
                                            }, {
                                                default: d((() => [m(a, {
                                                    class: "list-value"
                                                }, {
                                                    default: d((() => [v(_(t.$t("promo.turnplate.claimTime")), 1)])),
                                                    _: 1
                                                }), m(a, {
                                                    class: "list-value"
                                                }, {
                                                    default: d((() => [v(_(t.$t("promo.turnplate.bonus")), 1)])),
                                                    _: 1
                                                })])),
                                                _: 1
                                            }, 8, ["style"]), m(a, {
                                                class: "list-scroll"
                                            }, {
                                                default: d((() => [(p(!0), b(w, null, x(O.myList, ((t, e) => (p(), u(a, {
                                                    class: "list-item"
                                                }, {
                                                    default: d((() => [m(a, {
                                                        class: "list-value"
                                                    }, {
                                                        default: d((() => [v(_(g(I)(t.createTime, 3)), 1)])),
                                                        _: 2
                                                    }, 1024), m(a, {
                                                        class: "list-value",
                                                        style: {
                                                            width: "49%"
                                                        }
                                                    }, {
                                                        default: d((() => [v(_(t.amount), 1)])),
                                                        _: 2
                                                    }, 1024)])),
                                                    _: 2
                                                }, 1024)))), 256))])),
                                                _: 1
                                            })])),
                                            _: 1
                                        })) : c("", !0)])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["style"]), m(s, {
                            class: "popup-close-btn",
                            src: "@/static/mail/icon-popup-close.png",
                            mode: "aspectFit",
                            onClick: y(et, ["stop"])
                        })])),
                        _: 1
                    })])),
                    _: 1
                }), m(E, {
                    ref_key: "tipsPopupRef",
                    ref: M,
                    text: O.tipText
                }, null, 8, ["text"])])),
                _: 1
            })) : c("", !0)
        }
    }
}, [
    ["__scopeId", "data-v-9ca509be"]
]);
export {
    F as T
};