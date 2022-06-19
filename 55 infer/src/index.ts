export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
  };
}

// type ReturnType<T> =
//   T extends (...args: any[]) => infer R
//   ? R
//   : never;

// type Person = ReturnType<typeof createPerson>;

function logPerson(person: ReturnType<typeof createPerson>) {
  console.log(
    'Person:',
    person.firstName,
    person.lastName,
  );
}

type IsArray<T> =
  T extends Array<infer Member>
  ? 'array'
  : 'other';

type WithArray = IsArray<string[]>;
type WithNotArray = IsArray<number>;

type UnboxArray<T> =
  T extends Array<infer Member>
  ? Member
  : T;

type UnboxedStringArray = UnboxArray<string[]>;
type UnboxedNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>;
