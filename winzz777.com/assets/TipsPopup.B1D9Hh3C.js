import {
    _ as t,
    N as e,
    u as s,
    f as a,
    c as o,
    b as l,
    o as p,
    w as n,
    d as u,
    i,
    n as r,
    e as c,
    y as m,
    z as d,
    m as f,
    A as _,
    ar as y
} from "./index-DMsdlv-S.js"; /* empty css                                                                  */
const x = t({
    __name: "TipsPopup",
    props: {
        title: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        showConfirm: {
            type: Boolean,
            default: !0
        },
        confirmText: {
            type: String,
            default: ""
        }
    },
    emits: ["confirm"],
    setup(t, {
        expose: x,
        emit: h
    }) {
        const {
            t: b
        } = e(), v = s(), g = a(!1), T = h, k = () => {
            g.value = !1
        }, w = () => {
            T("confirm"), k()
        };
        return x({
            show: () => {
                g.value = !0
            },
            hide: k
        }), (e, s) => {
            const a = i;
            return g.value ? (p(), o(y, {
                key: 0,
                zIndex: 9999,
                onClose: k
            }, {
                default: n((() => [u(a, {
                    class: "tips-popup-content"
                }, {
                    default: n((() => [u(a, {
                        class: "title",
                        style: r({
                            color: c(v).theme.text.normal
                        })
                    }, {
                        default: n((() => [m(d(t.title || e.$t("app.popup.tips")), 1)])),
                        _: 1
                    }, 8, ["style"]), u(a, {
                        class: "text",
                        style: r({
                            color: c(v).theme.text.normal
                        })
                    }, {
                        default: n((() => [m(d(t.text) + " ", 1), f(e.$slots, "default", {}, void 0, !0)])),
                        _: 3
                    }, 8, ["style"]), t.showConfirm ? (p(), o(a, {
                        key: 0,
                        class: "confirm-button",
                        style: r({
                            background: c(v).theme.button.normal,
                            color: c(v).theme.button.textNormal
                        }),
                        onClick: _(w, ["stop"])
                    }, {
                        default: n((() => [u(a, null, {
                            default: n((() => [m(d(t.confirmText || e.$t("app.popup.confirm")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["style"])) : l("", !0)])),
                    _: 3
                })])),
                _: 3
            })) : l("", !0)
        }
    }
}, [
    ["__scopeId", "data-v-8c6b71a3"]
]);
export {
    x as T
};