import {
    _ as a,
    u as e,
    g as t,
    O as i,
    r as s,
    c as m,
    o,
    w as c,
    d as l,
    b as r,
    i as n,
    A as g,
    n as d,
    e as p,
    y,
    z as u,
    D,
    a3 as f,
    aR as I,
    a5 as k
} from "./index-DMsdlv-S.js";
import {
    u as h,
    E as L
} from "./EasyLoadImage.Dej-sP3l.js";
const v = a({
    __name: "HomeGamesItem",
    props: {
        itemData: {
            type: Object,
            default: () => {}
        },
        canClick: {
            type: Boolean,
            default: !0
        },
        scrollTop: {
            type: Number,
            default: 0
        },
        lazyImage: {
            type: Boolean,
            default: !1
        }
    },
    setup(a) {
        const v = e(),
            w = h(),
            _ = t(),
            x = a,
            b = i((() => {
                for (let a = 0; a < w.favoriteGameList.length; a++) {
                    const e = w.favoriteGameList[a];
                    if (e.gameId === x.itemData.gameId || e.gameId === x.itemData.id) return !0
                }
                return !1
            })),
            G = async () => {
                if (!x.canClick) return;
                if (!_.isLogin) return void D({
                    url: "/pages/Login/LoginV2"
                });
                f({
                    title: "Loading"
                });
                const {
                    code: a,
                    data: e
                } = await I({
                    gameId: x.itemData.gameId || x.itemData.id,
                    opt: b.value ? 2 : 1
                });
                k(), w.getFavoriteGames()
            },
            C = async () => {
                if (_.isLogin)
                    if (2 === x.itemData.iconType) D({
                        url: `/pages/search/Search?categoryId=${x.itemData.categoryId}&categoryName=${x.itemData.name||""}`
                    });
                    else {
                        f({
                            title: "Loading"
                        });
                        const a = x.itemData.gameId || x.itemData.id,
                            e = x.itemData.name || x.itemData.gameName || "";
                        D({
                            url: `/pages/webview/GameWeb?gameId=${a}&name=${e}`
                        })
                    }
                else D({
                    url: "/pages/Login/LoginV2"
                })
            };
        return (e, t) => {
            const i = s("CacheImage"),
                D = n;
            return o(), m(D, {
                class: "home-games-item-container"
            }, {
                default: c((() => [l(D, {
                    class: "item-img-view",
                    onClick: g(C, ["stop"])
                }, {
                    default: c((() => [a.lazyImage ? (o(), m(L, {
                        key: 0,
                        class: "item-img",
                        scrollId: "homeGamesScroll",
                        priority: 1,
                        src: a.itemData.imageUrl
                    }, null, 8, ["src"])) : (o(), m(i, {
                        key: 1,
                        class: "item-img",
                        src: a.itemData.imageUrl,
                        mode: "aspectFill"
                    }, null, 8, ["src"])), 1 === a.itemData.cornerMark ? (o(), m(i, {
                        key: 2,
                        class: "item-tag-new",
                        src: "1@/static/icon-new.png"
                    })) : r("", !0), 2 === a.itemData.cornerMark ? (o(), m(i, {
                        key: 3,
                        class: "item-tag-best",
                        src: "1@/static/icon-best.png"
                    })) : r("", !0), 2 !== a.itemData.iconType ? (o(), m(D, {
                        key: 4,
                        class: "item-tag-collect",
                        onClick: g(G, ["stop"])
                    }, {
                        default: c((() => [b.value ? (o(), m(i, {
                            key: 0,
                            src: "1@/static/icon-collection-select.png",
                            style: {
                                width: "40rpx",
                                height: "40rpx"
                            }
                        })) : (o(), m(i, {
                            key: 1,
                            src: "1@/static/icon-collection-normal.png",
                            style: {
                                width: "40rpx",
                                height: "40rpx"
                            }
                        }))])),
                        _: 1
                    })) : r("", !0)])),
                    _: 1
                }), 2 !== a.itemData.imageSize ? (o(), m(D, {
                    key: 0,
                    class: "item-text",
                    style: d({
                        color: p(v).theme.text.normal
                    })
                }, {
                    default: c((() => [y(u(a.itemData.name || a.itemData.gameName), 1)])),
                    _: 1
                }, 8, ["style"])) : r("", !0)])),
                _: 1
            })
        }
    }
}, [
    ["__scopeId", "data-v-e6f627af"]
]);
export {
    v as H
};