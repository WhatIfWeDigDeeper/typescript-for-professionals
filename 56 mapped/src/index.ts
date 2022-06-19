export type Point = {
  x: number,
  y: number,
  z: number,
};

// type ReadonlyPoint = {
//   readonly x: number,
//   readonly y: number,
//   readonly z: number,
// }

// type ReadonlyPoint = {
//   readonly [Item in 'x' | 'y' | 'z']: number;
// }

// type ReadonlyPoint = {
//   readonly [Item in keyof Point]: Point[Item];
// }

type Readonly<T> = {
  [Item in keyof T]: T[Item];
}

const center: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};
