import { Migration } from '@mikro-orm/migrations';

export class Migration20241015175702 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "really_really_really_really_really_really_really_really_really_really_long_name" add column "test" int not null;');
    this.addSql('create index "really_really_really_really_really_really_really_re_6001d_index" on "really_really_really_really_really_really_really_really_really_really_long_name" ("test");');
  }

  async down(): Promise<void> {
    this.addSql('drop index "really_really_really_really_really_really_really_re_6001d_index";');
    this.addSql('alter table "really_really_really_really_really_really_really_really_really_really_long_name" drop column "test";');
  }

}
