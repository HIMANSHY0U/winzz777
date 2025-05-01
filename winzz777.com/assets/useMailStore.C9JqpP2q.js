import {
    aO as a,
    aP as i,
    aQ as t
} from "./index-DMsdlv-S.js";
const s = {
        mailList: i.api_app + "/mail/list",
        mailDel: i.api_app + "/mail/del",
        mailRead: i.api_app + "/mail/read",
        mailReceive: i.api_app + "/mail/receive"
    },
    e = i => a.post({
        url: s.mailDel,
        data: i
    }),
    l = i => a.post({
        url: s.mailRead,
        data: i
    }),
    r = i => a.post({
        url: s.mailReceive,
        data: i
    }),
    p = t({
        id: "mail",
        state: () => ({
            hasUnread: !1,
            mailList: []
        }),
        getters: {},
        actions: {
            async getMailList() {
                const {
                    code: i,
                    data: t
                } = await a.post({
                    url: s.mailList,
                    data: e
                });
                var e;
                if (200 !== i) return [];
                const l = t || [];
                let r = !1;
                return l.forEach((a => {
                    a.isRead || (r = !0)
                })), this.mailList = l, this.hasUnread = r, l
            }
        }
    });
export {
    r as a, e as b, l as r, p as u
};