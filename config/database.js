module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: null,
      database: "eleven_kings"
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: null,
      database: "eleven_kings"
    }
  }
}
