// eslint-disable-next-line @typescript-eslint/no-var-requires
const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

module.exports = withPWA({
  // next.js config
})
