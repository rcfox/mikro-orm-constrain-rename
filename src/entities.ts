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
    () =>
      DifferentReallyReallyReallyReallyReallyReallyReallyReallyReallyLongName,
  )
  foo =
    new Collection<DifferentReallyReallyReallyReallyReallyReallyReallyReallyReallyLongName>(
      this,
    );
}

@Entity()
export class DifferentReallyReallyReallyReallyReallyReallyReallyReallyReallyLongName {
  @PrimaryKey()
  id!: number;

  @Index()
  @Property()
  test!: number;
}
