import {
    _ as e,
    f as a,
    u as l,
    a as o,
    g as n,
    N as t,
    Q as s,
    q as c,
    o as i,
    d as u,
    w as r,
    i as d,
    n as p,
    e as m,
    y as f,
    z as h,
    B as v,
    am as b,
    as as _,
    A as g,
    F as y,
    W as x,
    an as w
} from "./index-DMsdlv-S.js";
import {
    _ as k
} from "./uni-popup.Cqp4VX-X.js";
import {
    r as P
} from "./uni-app.es.DtNb6e-t.js";
import {
    a as C,
    b as j,
    _ as B
} from "./close1.CpnXjIUK.js";
import {
    C as L
} from "./Congratulation.CEVJtTCW.js";
import {
    j as V
} from "./account.CycWIDEr.js";
const $ = e({
    __name: "BindPhonePop",
    emits: ["close", "complete"],
    setup(e, {
        expose: $,
        emit: I
    }) {
        const T = a(null),
            F = I,
            z = l(),
            U = o(),
            q = n(),
            {
                t: A
            } = t(),
            N = a(""),
            Q = a(A("account.bindPhone.send")),
            S = a(null),
            W = a(0);
        let D = a("");
        const E = a(0),
            G = a(null),
            H = () => {
                J(), F("close")
            },
            J = () => {
                T.value.close()
            },
            K = async () => {
                if (0 == W.value) {
                    if ("" == N.value) return void x.show(A("account.phoneBinding.toast.phone"));
                    x.showLoading("Loading");
                    try {
                        const {
                            code: e,
                            data: a,
                            msg: l
                        } = await w({
                            tel: N.value
                        });
                        x.show(l), 200 == e && (W.value = a, M())
                    } catch (e) {
                        console.log(e)
                    } finally {
                        x.hideLoading()
                    }
                }
            },
            M = () => {
                Q.value = W.value + "s", S.value = setInterval((() => {
                    W.value > 0 ? (W.value--, Q.value = W.value + "s") : (Q.value = A("account.bindPhone.send"), W.value = 0, clearInterval(S.value))
                }), 1e3)
            },
            O = async () => {
                if ("" == N.value) return void x.show("The phone number cannot be empty");
                if ("" == D.value) return void x.show("The Verification code cannot be empty");
                x.showLoading("Loading");
                const {
                    code: e,
                    data: a
                } = await V({
                    mobile: N.value,
                    verificationCode: D.value,
                    referralCode: U.inviteCode
                });
                x.hideLoading(), 200 == e && (q.userInfo.mobile = N.value, J(), a && a > 0 && (E.value = a, G.value.open()), await q.getUserTotalInfo(), x.hideLoading(), x.showSuccess(), F("complete"))
            };
        return $({
            open: () => {
                T.value.open()
            },
            close: J
        }), (e, a) => {
            const l = d,
                o = v,
                n = b,
                t = P(s("uni-popup"), k);
            return i(), c(y, null, [u(t, {
                ref_key: "popup",
                ref: T,
                type: "center",
                "is-mask-click": !1,
                "mask-background-color": "rgba(0, 0, 0, 0.7)"
            }, {
                default: r((() => [u(l, {
                    class: "bin-content"
                }, {
                    default: r((() => [u(l, {
                        class: "bind-inner relative"
                    }, {
                        default: r((() => [u(l, {
                            class: "bind-title",
                            style: p({
                                color: m(z).theme.light
                            })
                        }, {
                            default: r((() => [f(h(e.$t("account.bindPhone.title")), 1)])),
                            _: 1
                        }, 8, ["style"]), u(l, {
                            class: "bind-content flex-column flex-center"
                        }, {
                            default: r((() => [u(l, {
                                class: "phone-box phone-num flex items-center"
                            }, {
                                default: r((() => [u(l, {
                                    class: "phone-pre flex items-center"
                                }, {
                                    default: r((() => [u(o, {
                                        src: C,
                                        class: "icon-phone",
                                        mode: "aspectFit"
                                    }), u(l, {
                                        class: "pre-text",
                                        style: p({
                                            color: m(z).theme.light
                                        })
                                    }, {
                                        default: r((() => [f("+91")])),
                                        _: 1
                                    }, 8, ["style"])])),
                                    _: 1
                                }), u(n, {
                                    type: "number",
                                    modelValue: N.value,
                                    "onUpdate:modelValue": a[0] || (a[0] = e => N.value = e),
                                    maxlength: "10",
                                    class: "phone-input",
                                    "placeholder-class": "plc-cs",
                                    placeholder: e.$t("account.bindPhone.placeholder")
                                }, null, 8, ["modelValue", "placeholder"]), u(l, {
                                    class: "send-btn flex-center",
                                    onClick: K,
                                    style: p({
                                        color: m(z).theme.light
                                    })
                                }, {
                                    default: r((() => [f(h(Q.value), 1)])),
                                    _: 1
                                }, 8, ["style"])])),
                                _: 1
                            }), u(l, {
                                class: "phone-box verify-box flex items-center"
                            }, {
                                default: r((() => [u(l, {
                                    class: "phone-pre"
                                }, {
                                    default: r((() => [u(o, {
                                        src: j,
                                        class: "icon-phone",
                                        mode: "aspectFit"
                                    })])),
                                    _: 1
                                }), u(n, {
                                    type: "number",
                                    modelValue: m(D),
                                    "onUpdate:modelValue": a[1] || (a[1] = e => _(D) ? D.value = e : D = e),
                                    class: "phone-input flex-1",
                                    "placeholder-class": "plc-cs",
                                    placeholder: e.$t("account.bindPhone.verifyPlaceholder")
                                }, null, 8, ["modelValue", "placeholder"])])),
                                _: 1
                            })])),
                            _: 1
                        }), u(l, {
                            class: "bind-tip"
                        }, {
                            default: r((() => [f(h(e.$t("account.bindPhone.bindTip")), 1)])),
                            _: 1
                        }), u(l, {
                            class: "bind-confirm flex-center",
                            onClick: O,
                            style: p({
                                background: `no-repeat top / cover ${m(z).theme.account.confirmBtnBg}`,
                                color: m(z).theme.account.confirmBtnTextColor
                            })
                        }, {
                            default: r((() => [f(h(e.$t("account.bindPhone.confirm")), 1)])),
                            _: 1
                        }, 8, ["style"]), u(l, {
                            class: "icon-wrap flex-center",
                            onClick: g(H, ["stop"])
                        }, {
                            default: r((() => [u(o, {
                                class: "icon-close",
                                src: B,
                                mode: "aspectFill"
                            })])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }, 512), u(L, {
                ref_key: "congratulation",
                ref: G,
                "prize-amount": E.value
            }, null, 8, ["prize-amount"])], 64)
        }
    }
}, [
    ["__scopeId", "data-v-09268ed1"]
]);
export {
    $ as B
};