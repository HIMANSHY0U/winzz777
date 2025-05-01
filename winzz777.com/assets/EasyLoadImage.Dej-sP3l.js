import {
    aQ as e,
    aU as t,
    aV as s,
    aW as a,
    aX as i,
    aY as r,
    M as o,
    _ as n,
    f as c,
    G as l,
    aZ as m,
    r as h,
    c as d,
    o as u,
    w as g,
    H as p,
    b as f,
    v,
    I as y,
    i as G,
    d as L
} from "./index-DMsdlv-S.js";
const w = e({
    id: "game",
    state: () => ({
        favoriteGameList: [],
        recentSearches: [],
        popularSearches: [],
        hotGameList: [],
        recentGameList: [],
        recommendGameList: []
    }),
    getters: {},
    actions: {
        async getFavoriteGames() {
            const {
                code: e,
                data: t
            } = await a();
            return 200 !== e ? [] : (this.favoriteGameList = t || [], this.favoriteGameList)
        },
        async getRecentGames() {
            const {
                code: e,
                data: t
            } = await s();
            return 200 !== e ? [] : (this.recentGameList = t || [], this.recentGameList)
        },
        async getGameSearchData() {
            const {
                code: e,
                data: s
            } = await t();
            return 200 === e && s && (this.recentSearches = s.recentSearches || [], this.popularSearches = s.popularSearches || [], this.recentGameList = s.recentGameList || [], this.hotGameList = s.hotGameList || [], this.recommendGameList = s.recommendGameList || []), !0
        }
    }
});
const S = new class {
        constructor() {
            this.map = new Map, this.containerRects = new Map, this.timers = new Map, this.lastTime = new Map
        }
        register(e, t) {
            this.map.has(e) || (this.map.set(e, new Set), i(e, (() => this.throttledCheck(e)))), this.map.get(e).add(t)
        }
        unregister(e, t) {
            if (this.map.has(e)) {
                const s = this.map.get(e);
                s.delete(t), 0 === s.size && (this.map.delete(e), this.containerRects.delete(e), this.lastTime.delete(e), this.timers.delete(e), r(e))
            }
        }
        throttledCheck(e, t = 200) {
            const s = Date.now(),
                a = this.lastTime.get(e) || 0;
            if (s - a >= t) this.checkAll(e), this.lastTime.set(e, s);
            else {
                clearTimeout(this.timers.get(e));
                const i = setTimeout((() => {
                    this.checkAll(e), this.lastTime.set(e, Date.now())
                }), t - (s - a));
                this.timers.set(e, i)
            }
        }
        checkAll(e) {
            const t = this.map.get(e);
            t && 0 !== t.size && o().select(`#${e}`).boundingClientRect((s => {
                if (!s) return;
                this.containerRects.set(e, s);
                const a = o();
                t.forEach((e => {
                    a.select(`#${e.uid}`).boundingClientRect()
                })), a.exec((e => {
                    const a = Array.isArray(e) ? e : [];
                    let i = 0;
                    t.forEach((e => {
                        const t = a[i++];
                        if (!t || e.loadImg.value) return;
                        const r = e.threshold || 0;
                        t.top <= s.bottom + r && (e.loadImg.value = !0)
                    }))
                }))
            })).exec()
        }
    },
    I = n({
        __name: "EasyLoadImage",
        props: {
            src: {
                type: String,
                required: !0
            },
            threshold: {
                type: Number,
                default: 400
            },
            scrollId: {
                type: String,
                required: !0
            },
            mode: {
                type: String,
                default: "aspectFill"
            },
            loadingMode: {
                type: String,
                default: "looming-gray"
            },
            openTransition: {
                type: Boolean,
                default: !0
            },
            priority: {
                type: Number,
                default: 2,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                s = `img-${Math.random().toString(36).substring(2,11)}`,
                a = c(!1),
                i = c(!1),
                r = c(!1),
                o = c(!1),
                n = () => {
                    i.value = !0, setTimeout((() => {
                        o.value = !0
                    }), 16)
                },
                w = () => {
                    r.value = !0
                };
            return l((() => {
                S.register(t.scrollId, {
                    uid: s,
                    threshold: t.threshold,
                    loadImg: a
                }), S.throttledCheck(t.scrollId, 0)
            })), m((() => {
                S.unregister(t.scrollId, {
                    uid: s,
                    loadImg: a
                })
            })), (t, c) => {
                const l = h("cache-image"),
                    m = G;
                return u(), d(m, {
                    class: "easy-loadimage",
                    id: s
                }, {
                    default: g((() => [a.value && !r.value ? p((u(), d(l, {
                        key: 0,
                        class: v(["origin-img", {
                            "no-transition": !e.openTransition,
                            "show-transition": o.value && e.openTransition
                        }]),
                        src: e.src,
                        mode: e.mode,
                        onLoad: n,
                        onError: w
                    }, null, 8, ["src", "mode", "class"])), [
                        [y, i.value]
                    ]) : r.value ? (u(), d(m, {
                        key: 1,
                        class: "loadfail-img"
                    })) : f("", !0), p(L(m, {
                        class: v(["loading-img", e.loadingMode])
                    }, null, 8, ["class"]), [
                        [y, !i.value && !r.value]
                    ])])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-69b3c6bb"]
    ]);
export {
    I as E, w as u
};