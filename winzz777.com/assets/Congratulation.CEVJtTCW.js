import {
    _ as e,
    u as a,
    f as t,
    r as o,
    Q as s,
    c as r,
    o as c,
    w as l,
    d as n,
    i,
    n as p,
    e as u,
    y as d,
    z as m,
    b as y,
    x as f
} from "./index-DMsdlv-S.js";
import {
    _
} from "./uni-popup.Cqp4VX-X.js";
import {
    r as g
} from "./uni-app.es.DtNb6e-t.js";
const v = e({
    __name: "Congratulation",
    props: {
        prizeAmount: {
            type: [Number, String],
            default: 0
        },
        currency: {
            type: String,
            default: "₹"
        }
    },
    emits: ["close"],
    setup(e, {
        expose: v,
        emit: b
    }) {
        const k = a(),
            w = b,
            x = t(null),
            h = () => {
                x.value.close(), w("close")
            };
        return v({
            open: () => {
                x.value.open()
            },
            close: h
        }), (a, t) => {
            const v = i,
                b = o("cache-image"),
                w = f,
                $ = g(s("uni-popup"), _);
            return c(), r($, {
                ref_key: "awardPopup",
                ref: x,
                type: "center",
                "is-mask-click": !1,
                "mask-background-color": "rgba(0, 0, 0, 0.7)"
            }, {
                default: l((() => [n(v, {
                    class: "award-content"
                }, {
                    default: l((() => [n(v, {
                        class: "award-inner flex-center relative"
                    }, {
                        default: l((() => [n(v, {
                            class: "award-title flex-center",
                            style: p({
                                background: `top / cover no-repeat ${u(k).theme.activity.recordTitleBg}`,
                                color: u(k).theme.activity.normal
                            })
                        }, {
                            default: l((() => [d(m(a.$t("promo.activity.awardTitle")), 1)])),
                            _: 1
                        }, 8, ["style"]), n(v, {
                            class: "award-box flex-column items-center"
                        }, {
                            default: l((() => [n(v, {
                                class: "award-gold",
                                style: p({
                                    background: `top / cover no-repeat ${u(k).theme.activity.awardBg}`
                                })
                            }, {
                                default: l((() => [n(b, {
                                    src: "0@/static/spins/image_jinbi.png",
                                    class: "award-gold-icon",
                                    mode: "aspectFit"
                                })])),
                                _: 1
                            }, 8, ["style"]), n(v, {
                                class: "award-amount",
                                style: p({
                                    color: u(k).theme.activity.normal
                                })
                            }, {
                                default: l((() => [isNaN(e.prizeAmount) ? y("", !0) : (c(), r(w, {
                                    key: 0
                                }, {
                                    default: l((() => [d(m(e.currency), 1)])),
                                    _: 1
                                })), d(" " + m(e.prizeAmount), 1)])),
                                _: 1
                            }, 8, ["style"])])),
                            _: 1
                        }), n(v, {
                            class: "btn-ok flex-center",
                            onClick: h,
                            style: p({
                                background: `top / cover no-repeat ${u(k).theme.activity.awardBtnBg}`,
                                color: u(k).theme.deposit.button.textColor
                            })
                        }, {
                            default: l((() => [d(m(a.$t("promo.activity.ok")), 1)])),
                            _: 1
                        }, 8, ["style"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }, 512)
        }
    }
}, [
    ["__scopeId", "data-v-774620ab"]
]);
export {
    v as C
};