import {
    _ as t,
    H as s,
    I as i,
    c as e,
    o,
    w as a,
    m as n,
    n as r,
    v as l,
    i as h,
    Q as d,
    r as p,
    b as c,
    d as u,
    bo as m
} from "./index-DMsdlv-S.js";
import {
    c as f
} from "./uni-popup.vue_vue_type_style_index_0_scoped_9a4c648b_lang.D7Bp5dmw.js";
import {
    r as g
} from "./uni-app.es.DtNb6e-t.js";
const y = t({
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        modeClass: {
            type: [Array, String],
            default: () => "fade"
        },
        duration: {
            type: Number,
            default: 300
        },
        styles: {
            type: Object,
            default: () => ({})
        },
        customClass: {
            type: String,
            default: ""
        },
        onceRender: {
            type: Boolean,
            default: !1
        }
    },
    data: () => ({
        isShow: !1,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
    }),
    watch: {
        show: {
            handler(t) {
                t ? this.open() : this.isShow && this.close()
            },
            immediate: !0
        }
    },
    computed: {
        stylesObject() {
            let t = { ...this.styles,
                    "transition-duration": this.duration / 1e3 + "s"
                },
                s = "";
            for (let i in t) {
                s += this.toLine(i) + ":" + t[i] + ";"
            }
            return s
        },
        transformStyles() {
            return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject
        }
    },
    created() {
        this.config = {
            duration: this.duration,
            timingFunction: "ease",
            transformOrigin: "50% 50%",
            delay: 0
        }, this.durationTime = this.duration
    },
    methods: {
        init(t = {}) {
            t.duration && (this.durationTime = t.duration), this.animation = f(Object.assign(this.config, t), this)
        },
        onClick() {
            this.$emit("click", {
                detail: this.isShow
            })
        },
        step(t, s = {}) {
            if (this.animation) {
                for (let s in t) try {
                    "object" == typeof t[s] ? this.animation[s](...t[s]) : this.animation[s](t[s])
                } catch (i) {
                    console.error(`方法 ${s} 不存在`)
                }
                return this.animation.step(s), this
            }
        },
        run(t) {
            this.animation && this.animation.run(t)
        },
        open() {
            clearTimeout(this.timer), this.transform = "", this.isShow = !0;
            let {
                opacity: t,
                transform: s
            } = this.styleInit(!1);
            void 0 !== t && (this.opacity = t), this.transform = s, this.$nextTick((() => {
                this.timer = setTimeout((() => {
                    this.animation = f(this.config, this), this.tranfromInit(!1).step(), this.animation.run(), this.$emit("change", {
                        detail: this.isShow
                    })
                }), 20)
            }))
        },
        close(t) {
            this.animation && this.tranfromInit(!0).step().run((() => {
                this.isShow = !1, this.animationData = null, this.animation = null;
                let {
                    opacity: t,
                    transform: s
                } = this.styleInit(!1);
                this.opacity = t || 1, this.transform = s, this.$emit("change", {
                    detail: this.isShow
                })
            }))
        },
        styleInit(t) {
            let s = {
                    transform: ""
                },
                i = (t, i) => {
                    "fade" === i ? s.opacity = this.animationType(t)[i] : s.transform += this.animationType(t)[i] + " "
                };
            return "string" == typeof this.modeClass ? i(t, this.modeClass) : this.modeClass.forEach((s => {
                i(t, s)
            })), s
        },
        tranfromInit(t) {
            let s = (t, s) => {
                let i = null;
                "fade" === s ? i = t ? 0 : 1 : (i = t ? "-100%" : "0", "zoom-in" === s && (i = t ? .8 : 1), "zoom-out" === s && (i = t ? 1.2 : 1), "slide-right" === s && (i = t ? "100%" : "0"), "slide-bottom" === s && (i = t ? "100%" : "0")), this.animation[this.animationMode()[s]](i)
            };
            return "string" == typeof this.modeClass ? s(t, this.modeClass) : this.modeClass.forEach((i => {
                s(t, i)
            })), this.animation
        },
        animationType: t => ({
            fade: t ? 0 : 1,
            "slide-top": `translateY(${t?"0":"-100%"})`,
            "slide-right": `translateX(${t?"0":"100%"})`,
            "slide-bottom": `translateY(${t?"0":"100%"})`,
            "slide-left": `translateX(${t?"0":"-100%"})`,
            "zoom-in": `scaleX(${t?1:.8}) scaleY(${t?1:.8})`,
            "zoom-out": `scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`
        }),
        animationMode: () => ({
            fade: "opacity",
            "slide-top": "translateY",
            "slide-right": "translateX",
            "slide-bottom": "translateY",
            "slide-left": "translateX",
            "zoom-in": "scale",
            "zoom-out": "scale"
        }),
        toLine: t => t.replace(/([A-Z])/g, "-$1").toLowerCase()
    }
}, [
    ["render", function(t, d, p, c, u, m) {
        const f = h;
        return s((o(), e(f, {
            ref: "ani",
            animation: u.animationData,
            class: l(p.customClass),
            style: r(m.transformStyles),
            onClick: m.onClick
        }, {
            default: a((() => [n(t.$slots, "default")])),
            _: 3
        }, 8, ["animation", "class", "style", "onClick"])), [
            [i, u.isShow]
        ])
    }]
]);
const k = t({
    name: "uniPopup",
    components: {
        keypress: {
            name: "Keypress",
            props: {
                disable: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted() {
                const t = {
                    esc: ["Esc", "Escape"],
                    tab: "Tab",
                    enter: "Enter",
                    space: [" ", "Spacebar"],
                    up: ["Up", "ArrowUp"],
                    left: ["Left", "ArrowLeft"],
                    right: ["Right", "ArrowRight"],
                    down: ["Down", "ArrowDown"],
                    delete: ["Backspace", "Delete", "Del"]
                };
                document.addEventListener("keyup", (s => {
                    if (this.disable) return;
                    const i = Object.keys(t).find((i => {
                        const e = s.key,
                            o = t[i];
                        return o === e || Array.isArray(o) && o.includes(e)
                    }));
                    i && setTimeout((() => {
                        this.$emit(i, {})
                    }), 0)
                }))
            },
            render: () => {}
        }
    },
    emits: ["change", "maskClick"],
    props: {
        animation: {
            type: Boolean,
            default: !0
        },
        type: {
            type: String,
            default: "center"
        },
        isMaskClick: {
            type: Boolean,
            default: null
        },
        maskClick: {
            type: Boolean,
            default: null
        },
        backgroundColor: {
            type: String,
            default: "none"
        },
        safeArea: {
            type: Boolean,
            default: !0
        },
        maskBackgroundColor: {
            type: String,
            default: "rgba(0, 0, 0, 0.4)"
        },
        borderRadius: {
            type: String
        }
    },
    watch: {
        type: {
            handler: function(t) {
                this.config[t] && this[this.config[t]](!0)
            },
            immediate: !0
        },
        isDesktop: {
            handler: function(t) {
                this.config[t] && this[this.config[this.type]](!0)
            },
            immediate: !0
        },
        maskClick: {
            handler: function(t) {
                this.mkclick = t
            },
            immediate: !0
        },
        isMaskClick: {
            handler: function(t) {
                this.mkclick = t
            },
            immediate: !0
        },
        showPopup(t) {
            document.getElementsByTagName("body")[0].style.overflow = t ? "hidden" : "visible"
        }
    },
    data() {
        return {
            duration: 300,
            ani: [],
            showPopup: !1,
            showTrans: !1,
            popupWidth: 0,
            popupHeight: 0,
            config: {
                top: "top",
                bottom: "bottom",
                center: "center",
                left: "left",
                right: "right",
                message: "top",
                dialog: "center",
                share: "bottom"
            },
            maskClass: {
                position: "fixed",
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)"
            },
            transClass: {
                backgroundColor: "transparent",
                borderRadius: this.borderRadius || "0",
                position: "fixed",
                left: 0,
                right: 0
            },
            maskShow: !0,
            mkclick: !0,
            popupstyle: "top"
        }
    },
    computed: {
        getStyles() {
            let t = {
                backgroundColor: this.bg
            };
            return this.borderRadius, t = Object.assign(t, {
                borderRadius: this.borderRadius
            }), t
        },
        isDesktop() {
            return this.popupWidth >= 500 && this.popupHeight >= 500
        },
        bg() {
            return "" === this.backgroundColor || "none" === this.backgroundColor ? "transparent" : this.backgroundColor
        }
    },
    mounted() {
        (() => {
            const {
                windowWidth: t,
                windowHeight: s,
                windowTop: i,
                safeArea: e,
                screenHeight: o,
                safeAreaInsets: a
            } = m();
            this.popupWidth = t, this.popupHeight = s + (i || 0), e && this.safeArea ? this.safeAreaInsets = a.bottom : this.safeAreaInsets = 0
        })()
    },
    unmounted() {
        this.setH5Visible()
    },
    activated() {
        this.setH5Visible(!this.showPopup)
    },
    deactivated() {
        this.setH5Visible(!0)
    },
    created() {
        null === this.isMaskClick && null === this.maskClick ? this.mkclick = !0 : this.mkclick = null !== this.isMaskClick ? this.isMaskClick : this.maskClick, this.animation ? this.duration = 300 : this.duration = 0, this.messageChild = null, this.clearPropagation = !1, this.maskClass.backgroundColor = this.maskBackgroundColor
    },
    methods: {
        setH5Visible(t = !0) {
            document.getElementsByTagName("body")[0].style.overflow = t ? "visible" : "hidden"
        },
        closeMask() {
            this.maskShow = !1
        },
        disableMask() {
            this.mkclick = !1
        },
        clear(t) {
            t.stopPropagation(), this.clearPropagation = !0
        },
        open(t) {
            if (this.showPopup) return;
            t && -1 !== ["top", "center", "bottom", "left", "right", "message", "dialog", "share"].indexOf(t) || (t = this.type), this.config[t] ? (this[this.config[t]](), this.$emit("change", {
                show: !0,
                type: t
            })) : console.error("缺少类型：", t)
        },
        close(t) {
            this.showTrans = !1, this.$emit("change", {
                show: !1,
                type: this.type
            }), clearTimeout(this.timer), this.timer = setTimeout((() => {
                this.showPopup = !1
            }), 300)
        },
        touchstart() {
            this.clearPropagation = !1
        },
        onTap() {
            this.clearPropagation ? this.clearPropagation = !1 : (this.$emit("maskClick"), this.mkclick && this.close())
        },
        top(t) {
            this.popupstyle = this.isDesktop ? "fixforpc-top" : "top", this.ani = ["slide-top"], this.transClass = {
                position: "fixed",
                left: 0,
                right: 0,
                backgroundColor: this.bg,
                borderRadius: this.borderRadius || "0"
            }, t || (this.showPopup = !0, this.showTrans = !0, this.$nextTick((() => {
                this.showPoptrans(), this.messageChild && "message" === this.type && this.messageChild.timerClose()
            })))
        },
        bottom(t) {
            this.popupstyle = "bottom", this.ani = ["slide-bottom"], this.transClass = {
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                paddingBottom: this.safeAreaInsets + "px",
                backgroundColor: this.bg,
                borderRadius: this.borderRadius || "0"
            }, t || this.showPoptrans()
        },
        center(t) {
            this.popupstyle = "center", this.ani = ["zoom-out", "fade"], this.transClass = {
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: this.borderRadius || "0"
            }, t || this.showPoptrans()
        },
        left(t) {
            this.popupstyle = "left", this.ani = ["slide-left"], this.transClass = {
                position: "fixed",
                left: 0,
                bottom: 0,
                top: 0,
                backgroundColor: this.bg,
                borderRadius: this.borderRadius || "0",
                display: "flex",
                flexDirection: "column"
            }, t || this.showPoptrans()
        },
        right(t) {
            this.popupstyle = "right", this.ani = ["slide-right"], this.transClass = {
                position: "fixed",
                bottom: 0,
                right: 0,
                top: 0,
                backgroundColor: this.bg,
                borderRadius: this.borderRadius || "0",
                display: "flex",
                flexDirection: "column"
            }, t || this.showPoptrans()
        },
        showPoptrans() {
            this.$nextTick((() => {
                this.showPopup = !0, this.showTrans = !0
            }))
        }
    }
}, [
    ["render", function(t, s, i, m, f, k) {
        const b = g(d("uni-transition"), y),
            w = h,
            C = p("keypress");
        return f.showPopup ? (o(), e(w, {
            key: 0,
            class: l(["uni-popup", [f.popupstyle, k.isDesktop ? "fixforpc-z-index" : ""]])
        }, {
            default: a((() => [u(w, {
                onTouchstart: k.touchstart
            }, {
                default: a((() => [f.maskShow ? (o(), e(b, {
                    key: "1",
                    name: "mask",
                    "mode-class": "fade",
                    styles: f.maskClass,
                    duration: f.duration,
                    show: f.showTrans,
                    onClick: k.onTap
                }, null, 8, ["styles", "duration", "show", "onClick"])) : c("", !0), u(b, {
                    key: "2",
                    "mode-class": f.ani,
                    name: "content",
                    styles: f.transClass,
                    duration: f.duration,
                    show: f.showTrans,
                    onClick: k.onTap
                }, {
                    default: a((() => [u(w, {
                        class: l(["uni-popup__wrapper", [f.popupstyle]]),
                        style: r(k.getStyles),
                        onClick: k.clear
                    }, {
                        default: a((() => [n(t.$slots, "default", {}, void 0, !0)])),
                        _: 3
                    }, 8, ["style", "class", "onClick"])])),
                    _: 3
                }, 8, ["mode-class", "styles", "duration", "show", "onClick"])])),
                _: 3
            }, 8, ["onTouchstart"]), f.maskShow ? (o(), e(C, {
                key: 0,
                onEsc: k.onTap
            }, null, 8, ["onEsc"])) : c("", !0)])),
            _: 3
        }, 8, ["class"])) : c("", !0)
    }],
    ["__scopeId", "data-v-9a4c648b"]
]);
export {
    k as _
};