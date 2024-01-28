const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const softMiddleware = require('./app/middleware/sortMiddleware');
const app = express();
const port = 3000;

const db = require('./config/db');
db.connect();

// public img
app.use(express.static(path.join(__dirname, 'assets')));

// lấy dữ liệu từ form khi gửi đi bằng method post
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'))

app.use(morgan('combined'));
app.use(softMiddleware);

// Rendering engine setup
const hbs = exphbs.create({
  extname: "hbs",
  helpers: {
    sum: (a, b) => a + b,
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

      return `<a href="?_sort&column=${field}&type=${type}">
                  <i class="${icon}"></i>
              </a>`;
    }
  }
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
const route = require('./routes');
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
