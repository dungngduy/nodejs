const handlebars = require('handlebars');
module.exports = {
    sortable: (field, sort) => {
      const sortType = field === sort.column ? sort.type : 'default';
      const icons = {
        default: 'fa-solid fa-sort',
        asc: 'fa-solid fa-sort-up',
        desc: 'fa-solid fa-sort-down',
      }

      const types = {
        default: 'desc',
        asc: 'desc',
        desc: 'asc',
      }

      const icon = icons[sortType];
      const type = types[sortType];

      const herf = handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

      const output =  `<a href="${herf}">
                            <i class="${icon}"></i>
                        </a>`;
      return new handlebars.SafeString(output);
    }
  };