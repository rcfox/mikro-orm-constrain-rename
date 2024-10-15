import { Migration } from '@mikro-orm/migrations';

export class Migration20241015174413 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "really_really_really_really_really_really_really_really_really_really_long_name" ("id" serial primary key);');

    this.addSql('create table "user" ("id" serial primary key);');

    this.addSql('create table "user_foo" ("user_id" int not null, "really_really_really_really_really_really_really_really_really_really_long_name_id" int not null, constraint "user_foo_pkey" primary key ("user_id", "really_really_really_really_really_really_really_really_really_really_long_name_id"));');

    this.addSql('alter table "user_foo" add constraint "user_foo_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "user_foo" add constraint "user_foo_really_really_really_really_really_reall_d7f01_foreign" foreign key ("really_really_really_really_really_really_really_really_really_really_long_name_id") references "really_really_really_really_really_really_really_really_really_really_long_name" ("id") on update cascade on delete cascade;');
  }

}
