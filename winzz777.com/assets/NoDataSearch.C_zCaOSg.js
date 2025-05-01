import {
    _ as a,
    u as t,
    r as e,
    c as s,
    o,
    w as l,
    d as n,
    i as c,
    n as d,
    e as i,
    y as r,
    z as p
} from "./index-DMsdlv-S.js";
const y = a({
    __name: "NoDataSearch",
    props: {
        title: {
            type: String,
            default: "No records!"
        },
        isShowBtn: {
            type: Boolean,
            default: !1
        },
        iconType: {
            type: String,
            default: ""
        }
    },
    setup(a) {
        const y = t();
        return (t, m) => {
            const u = e("theme-image"),
                g = c;
            return o(), s(g, {
                class: "no-data-search-container"
            }, {
                default: l((() => [n(g, {
                    class: ""
                }, {
                    default: l((() => ["node" === a.iconType ? (o(), s(u, {
                        key: 0,
                        class: "no-data-image",
                        "lazy-load": "",
                        src: "@/static/no-data-withdraw.png",
                        mode: "aspectFit"
                    })) : (o(), s(u, {
                        key: 1,
                        class: "no-data-image",
                        "lazy-load": "",
                        src: "@/static/mail/image_qxy.png",
                        mode: "aspectFit"
                    }))])),
                    _: 1
                }), n(g, {
                    class: "no-data-text",
                    style: d({
                        color: i(y).theme.text.lightAlpha
                    })
                }, {
                    default: l((() => [r(p(a.title), 1)])),
                    _: 1
                }, 8, ["style"])])),
                _: 1
            })
        }
    }
}, [
    ["__scopeId", "data-v-9a5e8f40"]
]);
export {
    y as N
};