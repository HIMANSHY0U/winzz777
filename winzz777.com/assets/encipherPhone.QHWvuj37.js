const r = r => {
        if ("" != r && null != r) {
            return r.substring(2).replace(/(\d{2})\d{4}(\d{4})/, "$1****$2")
        }
        return ""
    },
    e = r => {
        if ("" != r && null != r) {
            return r.replace(/(\d{5})\d{4}(\d{3})/, "$1****$2")
        }
        return ""
    };
export {
    r as a, e
};