// constant file to hold consts in backend
module.exports = {
    postServerPort: 4000,
    staticServerPort: 5000,
    gatewayPort: 3000,
    sanitizer: (str) => {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
    }
}