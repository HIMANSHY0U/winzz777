import {
    _ as e,
    u as t,
    E as s,
    c as a,
    o as l,
    w as n,
    q as d,
    F as c,
    t as i,
    i as o,
    A as r,
    d as u,
    b as m,
    n as y,
    e as g,
    v as x,
    y as b,
    z as f
} from "./index-DMsdlv-S.js";
const p = e({
    __name: "SegmentControl",
    props: {
        listData: {
            type: Array,
            default: () => []
        },
        defaultIndex: {
            type: Number,
            default: 0
        },
        lineWidth: {
            type: Number,
            default: 0
        }
    },
    emits: ["change"],
    setup(e, {
        emit: p
    }) {
        const _ = t(),
            h = p,
            I = s({
                selectIndex: e.defaultIndex
            });
        return (t, s) => {
            const p = o;
            return l(), a(p, {
                class: "segment-control-container"
            }, {
                default: n((() => [(l(!0), d(c, null, i(e.listData, ((t, s) => (l(), a(p, {
                    key: s,
                    onClick: r((e => ((e, t) => {
                        I.selectIndex !== t && (I.selectIndex = t, h("change", {
                            item: e,
                            index: t
                        }))
                    })(t, s)), ["stop"]),
                    class: "segment-item"
                }, {
                    default: n((() => [u(p, {
                        class: x(["title", {
                            active: s === I.selectIndex
                        }]),
                        style: y({
                            color: s === I.selectIndex ? g(_).theme.tabs.active : g(_).theme.tabs.normal
                        })
                    }, {
                        default: n((() => [b(f(t.title || ""), 1)])),
                        _: 2
                    }, 1032, ["class", "style"]), t.badge ? (l(), a(p, {
                        key: 0,
                        class: "badge-view",
                        style: y({
                            "background-image": g(_).imageCssUrl.iconBadgeRed
                        })
                    }, {
                        default: n((() => [b(f(t.badge || ""), 1)])),
                        _: 2
                    }, 1032, ["style"])) : m("", !0), u(p, {
                        class: "line-view"
                    }, {
                        default: n((() => [s === I.selectIndex ? (l(), a(p, {
                            key: 0,
                            class: "line",
                            style: y({
                                width: e.lineWidth ? e.lineWidth + "rpx" : "100%",
                                "background-color": g(_).theme.tabs.active
                            })
                        }, null, 8, ["style"])) : m("", !0)])),
                        _: 2
                    }, 1024)])),
                    _: 2
                }, 1032, ["onClick"])))), 128))])),
                _: 1
            })
        }
    }
}, [
    ["__scopeId", "data-v-ce7879d0"]
]);
export {
    p as S
};