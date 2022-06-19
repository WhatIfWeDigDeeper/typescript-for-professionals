/**
 * Make all properties in T readonly
 * Part of the built-in TypeScript library definitions
 */
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }

type Point = { x: number, y: number };

// Same as `{ readonly x: number, readonly y: number }`
type ReadonlyPoint = Readonly<Point>;

// real world example
function makeReadonly<T>(object: T): Readonly<T> {
  return Object.freeze({ ...object });
}

const editablePoint = { x: 0, y: 0 };
editablePoint.x = 2;

const readonlyPoint = makeReadonly(editablePoint);
readonlyPoint.x = 3; // Error: readonly
