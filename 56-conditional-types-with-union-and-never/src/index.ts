function error(message: string): never {
  throw new Error(message);
}

const notAllowed: never = 'some string';

const allowed: never = error('this is okay');

const example: string = error('I will not return');

type Verbose = string | never;

type Concise = string;

/**
 * Exclude null and undefined from T
 */
type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
type Expanded0 = NoEmpty<string> | NoEmpty<null>;
type Expanded1 =
  (string extends null | undefined ? never : string)
  | (null extends null | undefined ? never : string);
type Expanded2 =
  string
  | never;
type Result = string;


