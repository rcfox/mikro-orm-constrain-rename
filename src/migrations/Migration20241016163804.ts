import { Migration } from '@mikro-orm/migrations';

export class Migration20241016163804 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user_foo" drop constraint "user_foo_really_really_really_really_really_real_d7f01_foreign";`);

    this.addSql(`create table "different_really_really_really_really_really_really_really_really_really_long_name" ("id" serial primary key, "test" int not null);`);
    this.addSql(`create index "different_really_really_really_really_really_reall_e4714_index" on "different_really_really_really_really_really_really_really_really_really_long_name" ("test");`);

    this.addSql(`drop table if exists "really_really_really_really_really_really_really_really_really_really_long_name" cascade;`);

    this.addSql(`alter table "user_foo" drop constraint "user_foo_pkey";`);

    this.addSql(`alter table "user_foo" rename column "really_really_really_really_really_really_really_really_really_really_long_name_id" to "different_really_really_really_really_really_really_really_really_really_long_name_id";`);
    this.addSql(`alter table "user_foo" add constraint "user_foo_different_really_really_really_really_r_dc114_foreign" foreign key ("different_really_really_really_really_really_really_really_really_really_long_name_id") references "different_really_really_really_really_really_really_really_really_really_long_name" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "user_foo" add constraint "user_foo_pkey" primary key ("user_id", "different_really_really_really_really_really_really_really_really_really_long_name_id");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user_foo" drop constraint "user_foo_different_really_really_really_really_r_dc114_foreign";`);

    this.addSql(`create table "really_really_really_really_really_really_really_really_really_really_long_name" ("id" serial primary key, "test" int not null);`);
    this.addSql(`create index "really_really_really_really_really_really_really_r_6001d_index" on "really_really_really_really_really_really_really_really_really_really_long_name" ("test");`);

    this.addSql(`drop table if exists "different_really_really_really_really_really_really_really_really_really_long_name" cascade;`);

    this.addSql(`alter table "user_foo" drop constraint "user_foo_pkey";`);

    this.addSql(`alter table "user_foo" rename column "different_really_really_really_really_really_really_really_really_really_long_name_id" to "really_really_really_really_really_really_really_really_really_really_long_name_id";`);
    this.addSql(`alter table "user_foo" add constraint "user_foo_really_really_really_really_really_real_d7f01_foreign" foreign key ("really_really_really_really_really_really_really_really_really_really_long_name_id") references "really_really_really_really_really_really_really_really_really_really_long_name" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "user_foo" add constraint "user_foo_pkey" primary key ("user_id", "really_really_really_really_really_really_really_really_really_really_long_name_id");`);
  }

}
