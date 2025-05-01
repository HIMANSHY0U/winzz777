import {
    _ as e,
    u as t,
    E as s,
    G as n,
    a_ as a,
    bd as l,
    K as o,
    M as c,
    Z as r,
    r as i,
    c as m,
    o as p,
    w as d,
    d as u,
    i as f,
    n as g,
    e as x
} from "./index-DMsdlv-S.js";
const v = e({
    __name: "HomeNotice",
    props: {
        speed: {
            type: Number,
            default: 1.5
        }
    },
    setup(e) {
        const v = t(),
            y = s({
                rollMsg: [],
                text: "",
                scrollTransform: "",
                timeInterval: null
            });
        n((() => {
            _()
        })), a((() => {
            y.timeInterval && (clearInterval(y.timeInterval), y.timeInterval = null)
        }));
        const _ = async () => {
                const {
                    code: e,
                    data: t
                } = await l();
                if (200 !== e) return;
                const s = t.msgList || [];
                let n = `<span style="color:${v.theme.text.normal}">`;
                s.forEach((e => {
                    let t = e.msgContent || "";
                    t = t.replace(/<\/c>/g, "</span>"), t = t.replace(/<color=/g, '<span style="color:'), t = t.replace(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g, '#$1"'), t = '<span style="margin-right: 20px;">' + t + "</span>", n += t
                })), n += "</span>", y.rollMsg = s, y.text = n, o((() => {
                    setTimeout((() => {
                        h()
                    }), 500)
                }))
            },
            h = () => {
                const e = r();
                c().select("#noticeContent").boundingClientRect((t => {
                    if (!t) return;
                    const s = t.width;
                    console.log(e), c().in(e).select("#noticeScroll").boundingClientRect((e => {
                        if (!e) return;
                        const t = e.width;
                        let n = 0;
                        y.timeInterval = setInterval((() => {
                            s < Math.abs(n) && (n = t), n--, y.scrollTransform = `translateX(${n}px)`
                        }), 20)
                    })).exec()
                })).exec()
            };
        return (e, t) => {
            const s = i("theme-image"),
                n = f;
            return p(), m(n, {
                class: "home-notice-container flex-acenter",
                style: g({
                    "background-image": x(v).imageCssUrl.iconNoticeBg
                })
            }, {
                default: d((() => [u(s, {
                    class: "notice-icon",
                    src: "@/static/icon-notice.png",
                    mode: "aspectFit"
                }), u(n, {
                    class: "notice-text-view"
                }, {
                    default: d((() => [u(n, {
                        id: "noticeScroll",
                        class: "notice-scroll-view-container"
                    }, {
                        default: d((() => [u(n, {
                            id: "noticeContent",
                            innerHTML: y.text,
                            class: "notice-scroll-view",
                            style: g({
                                transform: y.scrollTransform
                            })
                        }, null, 8, ["innerHTML", "style"])])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }, 8, ["style"])
        }
    }
}, [
    ["__scopeId", "data-v-1771ff52"]
]);
export {
    v as H
};