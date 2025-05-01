const e = e => {
        var t = new Date;
        e && t.setDate(t.getDate() - e + 1);
        var r = t.getFullYear(),
            g = t.getMonth() + 1,
            n = t.getDate();
        return r + "-" + a(g) + "-" + a(n)
    },
    t = e => {
        if (!e) return "";
        var t = new Date(e),
            r = t.getFullYear(),
            g = t.getMonth() + 1,
            n = t.getDate(),
            s = t.getHours(),
            u = t.getMinutes(),
            o = t.getSeconds();
        return r + "-" + a(g) + "-" + a(n) + " " + a(s) + ":" + a(u) + ":" + a(o)
    },
    a = e => e < 10 ? "0" + e : e;
export {
    e as c, t as f
};