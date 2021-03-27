const Handlebars = require('handlebars');

module.exports = {
    sum: function (a, b) {
        return a + b;
    },
    sortable: function (field, sort) {
        const currentType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[currentType];
        const type = types[currentType];

        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${type}`,
        );
        const output = `
    <a href="${href}">
    <span class="${icon}"></span>
  </a>
    `;
        return new Handlebars.SafeString(output);
    },
};
