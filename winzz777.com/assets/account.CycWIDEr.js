import {
    aO as a,
    aP as e
} from "./index-DMsdlv-S.js";
const t = {
        getProfileUrl: e.api_app + "/user/profile",
        editNickNameUrl: e.api_app + "/user/rename",
        editProfileUrl: e.api_app + "/user/editprofile",
        bindPhoneUrl: e.api_app + "/user/bind-phone",
        setWithdrawalPasswordUrl: e.api_app + "/withdraw/setPwd",
        updateFeedbackUrl: e.api_app + "/service/feedback",
        getBalanceTypeUrl: e.api_app + "/balance/getBalanceType",
        getBalanceListUrl: e.api_app + "/balance/getBalanceList",
        getGameListUrl: e.api_app + "/balance/getGameRecord",
        bindWithdrawAccountUrl: e.api_app + "/user/bindwithdrawaccount",
        saveUinfo: e.api_app + "/fbclick/saveInfo",
        getFbInfo: e.api_app + "/fbclick/getFbInfo",
        questionFail: e.api_app + "/customer/fail",
        questionSuccess: e.api_app + "/customer/success",
        questionIndex: e.api_app + "/customer/index"
    },
    s = e => a.post({
        url: t.questionFail,
        data: e
    }),
    p = e => a.post({
        url: t.questionSuccess,
        data: e
    }),
    i = (e = "") => a.post({
        url: t.questionIndex,
        data: {
            questionId: e,
            languageType: "EN"
        }
    }),
    r = () => a.get({
        url: t.getFbInfo,
        data: {}
    }),
    l = e => a.post({
        url: t.saveUinfo,
        data: e
    }),
    o = e => a.post({
        url: t.getProfileUrl,
        data: e
    }),
    d = e => a.post({
        url: t.editNickNameUrl,
        data: e
    }),
    n = e => a.post({
        url: t.editProfileUrl,
        data: e
    }),
    u = e => a.post({
        url: t.bindPhoneUrl,
        data: e
    }),
    c = e => a.post({
        url: t.bindWithdrawAccountUrl,
        data: e
    }),
    U = e => a.post({
        url: t.setWithdrawalPasswordUrl,
        data: e
    }),
    b = e => a.post({
        url: t.updateFeedbackUrl,
        data: e
    }),
    f = e => a.post({
        url: t.getBalanceTypeUrl,
        data: e
    }),
    g = e => a.post({
        url: t.getBalanceListUrl,
        data: e
    }),
    _ = e => a.post({
        url: t.getGameListUrl,
        data: e
    });
export {
    o as a, n as b, _ as c, f as d, d as e, g as f, r as g, c as h, U as i, u as j, p as k, s as l, i as q, l as s, b as u
};