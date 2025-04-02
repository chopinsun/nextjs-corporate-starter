const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    // SQLite配置（已注释）
    // client: 'sqlite',
    // connection: {
    //   filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    // },
    // useNullAsDefault: true,
    
    // MySQL配置
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'seanCloud'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '12345678'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
