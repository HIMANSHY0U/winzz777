import {
    _ as a,
    u as o,
    a as s,
    r as e,
    c as t,
    b as n,
    o as i,
    w as l,
    d as r,
    i as c,
    n as g,
    e as u,
    f as p,
    g as d,
    s as f,
    p as m,
    h as b,
    j as _,
    k as v,
    l as y
} from "./index-DMsdlv-S.js";
import {
    o as h
} from "./uni-app.es.DtNb6e-t.js";
import "./uni-popup.vue_vue_type_style_index_0_scoped_9a4c648b_lang.D7Bp5dmw.js";
import {
    g as w
} from "./account.CycWIDEr.js";
const L = a({
        __name: "StartLoading",
        props: {
            visible: {
                type: Boolean,
                default: !1
            }
        },
        setup(a) {
            const p = o(),
                d = s();
            return (o, s) => {
                const f = e("CacheImage"),
                    m = c;
                return a.visible ? (i(), t(m, {
                    key: 0,
                    class: "start-loading-container"
                }, {
                    default: l((() => [r(m, {
                        class: "start-loading-view",
                        style: g({
                            background: u(p).theme.startLoginBgColor
                        })
                    }, {
                        default: l((() => [r(f, {
                            src: u(d).startImgUrls.loginLogo,
                            mode: "heightFit",
                            class: "start-loding-icon"
                        }, null, 8, ["src"])])),
                        _: 1
                    }, 8, ["style"])])),
                    _: 1
                })) : n("", !0)
            }
        }
    }, [
        ["__scopeId", "data-v-922b1433"]
    ]),
    I = a({
        __name: "index",
        setup(a) {
            const n = p(!0),
                c = o(),
                g = d(),
                I = s();
            p(null), p(!1), h((async () => {
                console.log("index onLoad"), f({
                    title: `${I.appName}`
                }), x()
            }));
            const x = async () => {
                    m({
                        url: "/pages/home/Home"
                    }), console.log("init", I.androidId), console.log("isLogin", g.isLogin);
                    const {
                        data: a
                    } = await w();
                    if ((null == a ? void 0 : a.name) && (I.channelId = null == a ? void 0 : a.name), (null == a ? void 0 : a.pixelH5) && (I.h5No = null == a ? void 0 : a.pixelH5), g.isLogin)(I.fbc || I.fbp) && await b({
                        fbc: I.fbc,
                        fbp: I.fbp,
                        uniKey: I.uniKey
                    }), await g.guestLogin(), await g.getAgentInfoV2(), await _().getPromoList(), j();
                    else {
                        (I.fbc || I.fbp) && await b({
                            fbc: I.fbc,
                            fbp: I.fbp,
                            uniKey: I.uniKey
                        });
                        try {
                            await g.guestLogin(), await g.getAgentInfoV2(), await _().getPromoList(), j()
                        } catch (o) {
                            console.log(o)
                        }
                    }
                },
                j = () => {
                    g.startReportOnline(), v(), console.log("finish init"), setTimeout((() => {
                        y({
                            url: "/pages/home/Home"
                        })
                    }), 100)
                };
            return (a, o) => {
                const s = e("common-layout");
                return i(), t(s, {
                    bgColor: u(c).theme.startColor
                }, {
                    default: l((() => [r(L, {
                        visible: n.value
                    }, null, 8, ["visible"])])),
                    _: 1
                }, 8, ["bgColor"])
            }
        }
    }, [
        ["__scopeId", "data-v-6f8b8181"]
    ]);
export {
    I as
    default
};