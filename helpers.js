module.exports = {
    createIdFrom: function (text) {
        var str = text;
        str = str.replace(/\W+/g, '-').toLowerCase();
        str = str.substring(0, 39);

        return str;
    }
}
