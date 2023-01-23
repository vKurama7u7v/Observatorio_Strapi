module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cf3efs1gp3jl0q45bhhg-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "observatorio_strapi"),
      user: env("DATABASE_USERNAME", "observatorio_strapi_user"),
      password: env("DATABASE_PASSWORD", "ys6hSf5H22eZkSoJqJt0DBgPNlZDcSAL"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
