import { Migrator } from "@mikro-orm/migrations";
import { PostgreSqlDriver, defineConfig } from "@mikro-orm/postgresql";

export default defineConfig({
  dbName: "constraint-test",
  host: "localhost",
  port: 5432,
  driver: PostgreSqlDriver,
  extensions: [Migrator],
  user: "user",
  password: "password",
  entities: ["./src/entities.ts"],
  debug: ["query", "query-params"],
  allowGlobalContext: true, // only for testing
});
