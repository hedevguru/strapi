module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f967b8c8184d16a778b38a7bd84d20e8'),
    },
    path: '/dashboard'
  },
  "production": true,
  "autoReload": {
    "enabled": true
  },
  "proxy": {
    "enabled": false
  },
  "cron": {
    "enabled": false
  }
});
