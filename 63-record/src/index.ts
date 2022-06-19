type Persons = Record<string, { name: string, role: string }>;

const persons: Persons = {};
persons['000'] = { name: 'John', role: 'admin' };
persons['001'] = { name: 'Jane', role: 'owner' };

persons['222'] = { name: 'June' };

type PersonsVerbose = { [key: string]: { name: string, role: string } };

type Roles = 'admin' | 'owner';

let peopleWithRoles: Record<Roles, string[]> = {
  'owner': ['Jane', 'June'],
  'admin': ['John'],
};

// peopleWithRoles = Record<Roles, string[]> = {
  //  'owner': ['Jane', 'June'],
// } // error admin is missing

const admins: string[] = peopleWithRoles['admin']; // Safe

// can use shorthand for creating a simple type
// but less readable
type Point = Record<'x' | 'y', number>;

type PageInfo = {
  id: string,
  title: string,
};

type PagesVerbose = {
  home: PageInfo,
  services: PageInfo,
  about: PageInfo,
  contact: PageInfo,
};

type Pages = Record<
  'home' | 'services' | 'about' | 'contact',
  { id: string, title: string }
  >;

// Typescript internal implementation is a mapped type
// Construct a type with a set of properties K of type T
type Record<K extends string | number | symbol, T> = {
  [P in K]: T;
};

// type PageTitle = 'home' | 'services' | 'about' | 'contact';

// type PageRecords = Record<
//   PageTitle,
//   PageInfo
// >;



