import {
  Collection,
  Entity,
  Index,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/postgresql";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @ManyToMany(
    () => ReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongName,
  )
  foo =
    new Collection<ReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongName>(
      this,
    );
}

@Entity()
export class ReallyReallyReallyReallyReallyReallyReallyReallyReallyReallyLongName {
  @PrimaryKey()
  id!: number;

  @Index()
  @Property()
  test!: number;
}
