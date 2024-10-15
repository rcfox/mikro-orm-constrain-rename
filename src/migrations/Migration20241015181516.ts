import { Migration } from '@mikro-orm/migrations';

export class Migration20241015181516 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter index "really_really_really_really_really_really_really_re_6001d_index" rename to "really_really_really_really_really_really_really_r_6001d_index";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter index "really_really_really_really_really_really_really_r_6001d_index" rename to "really_really_really_really_really_really_really_re_6001d_index";`);
  }

}
