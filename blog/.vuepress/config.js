const config = require('./data/config.json');

module.exports = Object.assign(config, {
  head: [
    ['link', { rel: 'icon', href: 'https://res.cloudinary.com/chrislema/image/upload/v1565472874/favicon_sy8a1m.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  }
});
