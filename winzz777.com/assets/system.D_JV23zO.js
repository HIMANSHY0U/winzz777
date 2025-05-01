import {
    b7 as t,
    aF as s,
    a as e,
    bn as a
} from "./index-DMsdlv-S.js";
const n = ({
        text: e
    }) => {
        e && t({
            data: e,
            success() {
                s({
                    title: "Success!",
                    icon: "success",
                    mask: !0,
                    duration: 1500
                })
            }
        })
    },
    i = s => {
        if (!s) return;
        const n = e();
        if (window !== window.parent ? window.parent.postMessage({
                type: "share",
                data: {
                    title: (null == s ? void 0 : s.title) ? ? "",
                    text: (null == s ? void 0 : s.content) ? ? "",
                    url: s.url
                }
            }, "*") : window.navigator.share && window.navigator.share({
                title: (null == s ? void 0 : s.title) ? ? "",
                text: (null == s ? void 0 : s.content) ? ? "",
                url: s.url
            }), n.isCoat) {
            const t = {
                type: "share",
                url: s.url
            };
            parent.postMessage(JSON.stringify(t), "*")
        } else t({
            data: s.url
        }), a()
    };
export {
    n as c, i as s
};