module.exports = {

    development: {
      client: 'pg',
      connection: {
        user: "candidato",
        password: "ripKobeBryant",
        database: "postgres",
        host: "nba-test-instance-1.cvxs8zev5d0u.us-east-1.rds.amazonaws.com",
        port: 5432,
    }
    },
  
    production: {
        client: 'pg',
        connection: {
          user: "candidato",
          password: "ripKobeBryant",
          database: "postgres",
          host: "nba-test-instance-1.cvxs8zev5d0u.us-east-1.rds.amazonaws.com",
          port: 5432,
      }
    },
  }