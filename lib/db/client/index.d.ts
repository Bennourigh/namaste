
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Maintenace
 * 
 */
export type Maintenace = $Result.DefaultSelection<Prisma.$MaintenacePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;

  /**
   * `prisma.maintenace`: Exposes CRUD operations for the **Maintenace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenaces
    * const maintenaces = await prisma.maintenace.findMany()
    * ```
    */
  get maintenace(): Prisma.MaintenaceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Client: 'Client',
    Device: 'Device',
    Maintenace: 'Maintenace'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "client" | "device" | "maintenace"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Maintenace: {
        payload: Prisma.$MaintenacePayload<ExtArgs>
        fields: Prisma.MaintenaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>
          }
          findFirst: {
            args: Prisma.MaintenaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>
          }
          findMany: {
            args: Prisma.MaintenaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>[]
          }
          create: {
            args: Prisma.MaintenaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>
          }
          createMany: {
            args: Prisma.MaintenaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>[]
          }
          delete: {
            args: Prisma.MaintenaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>
          }
          update: {
            args: Prisma.MaintenaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>
          }
          deleteMany: {
            args: Prisma.MaintenaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenacePayload>
          }
          aggregate: {
            args: Prisma.MaintenaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenace>
          }
          groupBy: {
            args: Prisma.MaintenaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenaceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenaceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    devices: number
    events: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | ClientCountOutputTypeCountDevicesArgs
    events?: boolean | ClientCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenaceWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    events: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | DeviceCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenaceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    clientId: number | null
  }

  export type ClientSumAggregateOutputType = {
    clientId: number | null
  }

  export type ClientMinAggregateOutputType = {
    clientId: number | null
    name: string | null
    email: string | null
  }

  export type ClientMaxAggregateOutputType = {
    clientId: number | null
    name: string | null
    email: string | null
  }

  export type ClientCountAggregateOutputType = {
    clientId: number
    name: number
    email: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    clientId?: true
  }

  export type ClientSumAggregateInputType = {
    clientId?: true
  }

  export type ClientMinAggregateInputType = {
    clientId?: true
    name?: true
    email?: true
  }

  export type ClientMaxAggregateInputType = {
    clientId?: true
    name?: true
    email?: true
  }

  export type ClientCountAggregateInputType = {
    clientId?: true
    name?: true
    email?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    clientId: number
    name: string
    email: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    email?: boolean
    devices?: boolean | Client$devicesArgs<ExtArgs>
    events?: boolean | Client$eventsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    clientId?: boolean
    name?: boolean
    email?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | Client$devicesArgs<ExtArgs>
    events?: boolean | Client$eventsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
      events: Prisma.$MaintenacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      clientId: number
      name: string
      email: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `clientId`
     * const clientWithClientIdOnly = await prisma.client.findMany({ select: { clientId: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `clientId`
     * const clientWithClientIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { clientId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends Client$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Client$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Client$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Client$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly clientId: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.devices
   */
  export type Client$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Client.events
   */
  export type Client$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    where?: MaintenaceWhereInput
    orderBy?: MaintenaceOrderByWithRelationInput | MaintenaceOrderByWithRelationInput[]
    cursor?: MaintenaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenaceScalarFieldEnum | MaintenaceScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    deviceId: number | null
    batteryLevel: number | null
    clientId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    deviceId: number | null
    batteryLevel: number | null
    clientId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    deviceId: number | null
    Sn: string | null
    type: string | null
    batteryLevel: number | null
    dlcElectrode: string | null
    clientId: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    deviceId: number | null
    Sn: string | null
    type: string | null
    batteryLevel: number | null
    dlcElectrode: string | null
    clientId: number | null
  }

  export type DeviceCountAggregateOutputType = {
    deviceId: number
    Sn: number
    type: number
    batteryLevel: number
    dlcElectrode: number
    clientId: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    deviceId?: true
    batteryLevel?: true
    clientId?: true
  }

  export type DeviceSumAggregateInputType = {
    deviceId?: true
    batteryLevel?: true
    clientId?: true
  }

  export type DeviceMinAggregateInputType = {
    deviceId?: true
    Sn?: true
    type?: true
    batteryLevel?: true
    dlcElectrode?: true
    clientId?: true
  }

  export type DeviceMaxAggregateInputType = {
    deviceId?: true
    Sn?: true
    type?: true
    batteryLevel?: true
    dlcElectrode?: true
    clientId?: true
  }

  export type DeviceCountAggregateInputType = {
    deviceId?: true
    Sn?: true
    type?: true
    batteryLevel?: true
    dlcElectrode?: true
    clientId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    deviceId: number
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    clientId: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    Sn?: boolean
    type?: boolean
    batteryLevel?: boolean
    dlcElectrode?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    events?: boolean | Device$eventsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    Sn?: boolean
    type?: boolean
    batteryLevel?: boolean
    dlcElectrode?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    deviceId?: boolean
    Sn?: boolean
    type?: boolean
    batteryLevel?: boolean
    dlcElectrode?: boolean
    clientId?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    events?: boolean | Device$eventsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      events: Prisma.$MaintenacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deviceId: number
      Sn: string
      type: string
      batteryLevel: number
      dlcElectrode: string
      clientId: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `deviceId`
     * const deviceWithDeviceIdOnly = await prisma.device.findMany({ select: { deviceId: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `deviceId`
     * const deviceWithDeviceIdOnly = await prisma.device.createManyAndReturn({ 
     *   select: { deviceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    events<T extends Device$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Device$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly deviceId: FieldRef<"Device", 'Int'>
    readonly Sn: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'String'>
    readonly batteryLevel: FieldRef<"Device", 'Int'>
    readonly dlcElectrode: FieldRef<"Device", 'String'>
    readonly clientId: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }

  /**
   * Device.events
   */
  export type Device$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    where?: MaintenaceWhereInput
    orderBy?: MaintenaceOrderByWithRelationInput | MaintenaceOrderByWithRelationInput[]
    cursor?: MaintenaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenaceScalarFieldEnum | MaintenaceScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Maintenace
   */

  export type AggregateMaintenace = {
    _count: MaintenaceCountAggregateOutputType | null
    _avg: MaintenaceAvgAggregateOutputType | null
    _sum: MaintenaceSumAggregateOutputType | null
    _min: MaintenaceMinAggregateOutputType | null
    _max: MaintenaceMaxAggregateOutputType | null
  }

  export type MaintenaceAvgAggregateOutputType = {
    id: number | null
    deviceId: number | null
    clientId: number | null
    batteryLevel: number | null
  }

  export type MaintenaceSumAggregateOutputType = {
    id: number | null
    deviceId: number | null
    clientId: number | null
    batteryLevel: number | null
  }

  export type MaintenaceMinAggregateOutputType = {
    id: number | null
    deviceId: number | null
    clientId: number | null
    scheduledDate: Date | null
    performedDate: Date | null
    batteryLevel: number | null
    ElectrodesDate: Date | null
  }

  export type MaintenaceMaxAggregateOutputType = {
    id: number | null
    deviceId: number | null
    clientId: number | null
    scheduledDate: Date | null
    performedDate: Date | null
    batteryLevel: number | null
    ElectrodesDate: Date | null
  }

  export type MaintenaceCountAggregateOutputType = {
    id: number
    deviceId: number
    clientId: number
    scheduledDate: number
    performedDate: number
    batteryLevel: number
    ElectrodesDate: number
    _all: number
  }


  export type MaintenaceAvgAggregateInputType = {
    id?: true
    deviceId?: true
    clientId?: true
    batteryLevel?: true
  }

  export type MaintenaceSumAggregateInputType = {
    id?: true
    deviceId?: true
    clientId?: true
    batteryLevel?: true
  }

  export type MaintenaceMinAggregateInputType = {
    id?: true
    deviceId?: true
    clientId?: true
    scheduledDate?: true
    performedDate?: true
    batteryLevel?: true
    ElectrodesDate?: true
  }

  export type MaintenaceMaxAggregateInputType = {
    id?: true
    deviceId?: true
    clientId?: true
    scheduledDate?: true
    performedDate?: true
    batteryLevel?: true
    ElectrodesDate?: true
  }

  export type MaintenaceCountAggregateInputType = {
    id?: true
    deviceId?: true
    clientId?: true
    scheduledDate?: true
    performedDate?: true
    batteryLevel?: true
    ElectrodesDate?: true
    _all?: true
  }

  export type MaintenaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenace to aggregate.
     */
    where?: MaintenaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenaces to fetch.
     */
    orderBy?: MaintenaceOrderByWithRelationInput | MaintenaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenaces
    **/
    _count?: true | MaintenaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenaceMaxAggregateInputType
  }

  export type GetMaintenaceAggregateType<T extends MaintenaceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenace[P]>
      : GetScalarType<T[P], AggregateMaintenace[P]>
  }




  export type MaintenaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenaceWhereInput
    orderBy?: MaintenaceOrderByWithAggregationInput | MaintenaceOrderByWithAggregationInput[]
    by: MaintenaceScalarFieldEnum[] | MaintenaceScalarFieldEnum
    having?: MaintenaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenaceCountAggregateInputType | true
    _avg?: MaintenaceAvgAggregateInputType
    _sum?: MaintenaceSumAggregateInputType
    _min?: MaintenaceMinAggregateInputType
    _max?: MaintenaceMaxAggregateInputType
  }

  export type MaintenaceGroupByOutputType = {
    id: number
    deviceId: number
    clientId: number
    scheduledDate: Date
    performedDate: Date
    batteryLevel: number
    ElectrodesDate: Date
    _count: MaintenaceCountAggregateOutputType | null
    _avg: MaintenaceAvgAggregateOutputType | null
    _sum: MaintenaceSumAggregateOutputType | null
    _min: MaintenaceMinAggregateOutputType | null
    _max: MaintenaceMaxAggregateOutputType | null
  }

  type GetMaintenaceGroupByPayload<T extends MaintenaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenaceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenaceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    performedDate?: boolean
    batteryLevel?: boolean
    ElectrodesDate?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenace"]>

  export type MaintenaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    performedDate?: boolean
    batteryLevel?: boolean
    ElectrodesDate?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenace"]>

  export type MaintenaceSelectScalar = {
    id?: boolean
    deviceId?: boolean
    clientId?: boolean
    scheduledDate?: boolean
    performedDate?: boolean
    batteryLevel?: boolean
    ElectrodesDate?: boolean
  }

  export type MaintenaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type MaintenaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $MaintenacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenace"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deviceId: number
      clientId: number
      scheduledDate: Date
      performedDate: Date
      batteryLevel: number
      ElectrodesDate: Date
    }, ExtArgs["result"]["maintenace"]>
    composites: {}
  }

  type MaintenaceGetPayload<S extends boolean | null | undefined | MaintenaceDefaultArgs> = $Result.GetResult<Prisma.$MaintenacePayload, S>

  type MaintenaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaintenaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaintenaceCountAggregateInputType | true
    }

  export interface MaintenaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenace'], meta: { name: 'Maintenace' } }
    /**
     * Find zero or one Maintenace that matches the filter.
     * @param {MaintenaceFindUniqueArgs} args - Arguments to find a Maintenace
     * @example
     * // Get one Maintenace
     * const maintenace = await prisma.maintenace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenaceFindUniqueArgs>(args: SelectSubset<T, MaintenaceFindUniqueArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Maintenace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaintenaceFindUniqueOrThrowArgs} args - Arguments to find a Maintenace
     * @example
     * // Get one Maintenace
     * const maintenace = await prisma.maintenace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenaceFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Maintenace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceFindFirstArgs} args - Arguments to find a Maintenace
     * @example
     * // Get one Maintenace
     * const maintenace = await prisma.maintenace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenaceFindFirstArgs>(args?: SelectSubset<T, MaintenaceFindFirstArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Maintenace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceFindFirstOrThrowArgs} args - Arguments to find a Maintenace
     * @example
     * // Get one Maintenace
     * const maintenace = await prisma.maintenace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenaceFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Maintenaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenaces
     * const maintenaces = await prisma.maintenace.findMany()
     * 
     * // Get first 10 Maintenaces
     * const maintenaces = await prisma.maintenace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenaceWithIdOnly = await prisma.maintenace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenaceFindManyArgs>(args?: SelectSubset<T, MaintenaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Maintenace.
     * @param {MaintenaceCreateArgs} args - Arguments to create a Maintenace.
     * @example
     * // Create one Maintenace
     * const Maintenace = await prisma.maintenace.create({
     *   data: {
     *     // ... data to create a Maintenace
     *   }
     * })
     * 
     */
    create<T extends MaintenaceCreateArgs>(args: SelectSubset<T, MaintenaceCreateArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Maintenaces.
     * @param {MaintenaceCreateManyArgs} args - Arguments to create many Maintenaces.
     * @example
     * // Create many Maintenaces
     * const maintenace = await prisma.maintenace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenaceCreateManyArgs>(args?: SelectSubset<T, MaintenaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenaces and returns the data saved in the database.
     * @param {MaintenaceCreateManyAndReturnArgs} args - Arguments to create many Maintenaces.
     * @example
     * // Create many Maintenaces
     * const maintenace = await prisma.maintenace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenaces and only return the `id`
     * const maintenaceWithIdOnly = await prisma.maintenace.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenaceCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Maintenace.
     * @param {MaintenaceDeleteArgs} args - Arguments to delete one Maintenace.
     * @example
     * // Delete one Maintenace
     * const Maintenace = await prisma.maintenace.delete({
     *   where: {
     *     // ... filter to delete one Maintenace
     *   }
     * })
     * 
     */
    delete<T extends MaintenaceDeleteArgs>(args: SelectSubset<T, MaintenaceDeleteArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Maintenace.
     * @param {MaintenaceUpdateArgs} args - Arguments to update one Maintenace.
     * @example
     * // Update one Maintenace
     * const maintenace = await prisma.maintenace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenaceUpdateArgs>(args: SelectSubset<T, MaintenaceUpdateArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Maintenaces.
     * @param {MaintenaceDeleteManyArgs} args - Arguments to filter Maintenaces to delete.
     * @example
     * // Delete a few Maintenaces
     * const { count } = await prisma.maintenace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenaceDeleteManyArgs>(args?: SelectSubset<T, MaintenaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenaces
     * const maintenace = await prisma.maintenace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenaceUpdateManyArgs>(args: SelectSubset<T, MaintenaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maintenace.
     * @param {MaintenaceUpsertArgs} args - Arguments to update or create a Maintenace.
     * @example
     * // Update or create a Maintenace
     * const maintenace = await prisma.maintenace.upsert({
     *   create: {
     *     // ... data to create a Maintenace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenace we want to update
     *   }
     * })
     */
    upsert<T extends MaintenaceUpsertArgs>(args: SelectSubset<T, MaintenaceUpsertArgs<ExtArgs>>): Prisma__MaintenaceClient<$Result.GetResult<Prisma.$MaintenacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Maintenaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceCountArgs} args - Arguments to filter Maintenaces to count.
     * @example
     * // Count the number of Maintenaces
     * const count = await prisma.maintenace.count({
     *   where: {
     *     // ... the filter for the Maintenaces we want to count
     *   }
     * })
    **/
    count<T extends MaintenaceCountArgs>(
      args?: Subset<T, MaintenaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenaceAggregateArgs>(args: Subset<T, MaintenaceAggregateArgs>): Prisma.PrismaPromise<GetMaintenaceAggregateType<T>>

    /**
     * Group by Maintenace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenaceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenace model
   */
  readonly fields: MaintenaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Maintenace model
   */ 
  interface MaintenaceFieldRefs {
    readonly id: FieldRef<"Maintenace", 'Int'>
    readonly deviceId: FieldRef<"Maintenace", 'Int'>
    readonly clientId: FieldRef<"Maintenace", 'Int'>
    readonly scheduledDate: FieldRef<"Maintenace", 'DateTime'>
    readonly performedDate: FieldRef<"Maintenace", 'DateTime'>
    readonly batteryLevel: FieldRef<"Maintenace", 'Int'>
    readonly ElectrodesDate: FieldRef<"Maintenace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Maintenace findUnique
   */
  export type MaintenaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenace to fetch.
     */
    where: MaintenaceWhereUniqueInput
  }

  /**
   * Maintenace findUniqueOrThrow
   */
  export type MaintenaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenace to fetch.
     */
    where: MaintenaceWhereUniqueInput
  }

  /**
   * Maintenace findFirst
   */
  export type MaintenaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenace to fetch.
     */
    where?: MaintenaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenaces to fetch.
     */
    orderBy?: MaintenaceOrderByWithRelationInput | MaintenaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenaces.
     */
    cursor?: MaintenaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenaces.
     */
    distinct?: MaintenaceScalarFieldEnum | MaintenaceScalarFieldEnum[]
  }

  /**
   * Maintenace findFirstOrThrow
   */
  export type MaintenaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenace to fetch.
     */
    where?: MaintenaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenaces to fetch.
     */
    orderBy?: MaintenaceOrderByWithRelationInput | MaintenaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenaces.
     */
    cursor?: MaintenaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenaces.
     */
    distinct?: MaintenaceScalarFieldEnum | MaintenaceScalarFieldEnum[]
  }

  /**
   * Maintenace findMany
   */
  export type MaintenaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenaces to fetch.
     */
    where?: MaintenaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenaces to fetch.
     */
    orderBy?: MaintenaceOrderByWithRelationInput | MaintenaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenaces.
     */
    cursor?: MaintenaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenaces.
     */
    skip?: number
    distinct?: MaintenaceScalarFieldEnum | MaintenaceScalarFieldEnum[]
  }

  /**
   * Maintenace create
   */
  export type MaintenaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenace.
     */
    data: XOR<MaintenaceCreateInput, MaintenaceUncheckedCreateInput>
  }

  /**
   * Maintenace createMany
   */
  export type MaintenaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenaces.
     */
    data: MaintenaceCreateManyInput | MaintenaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenace createManyAndReturn
   */
  export type MaintenaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Maintenaces.
     */
    data: MaintenaceCreateManyInput | MaintenaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenace update
   */
  export type MaintenaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenace.
     */
    data: XOR<MaintenaceUpdateInput, MaintenaceUncheckedUpdateInput>
    /**
     * Choose, which Maintenace to update.
     */
    where: MaintenaceWhereUniqueInput
  }

  /**
   * Maintenace updateMany
   */
  export type MaintenaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenaces.
     */
    data: XOR<MaintenaceUpdateManyMutationInput, MaintenaceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenaces to update
     */
    where?: MaintenaceWhereInput
  }

  /**
   * Maintenace upsert
   */
  export type MaintenaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenace to update in case it exists.
     */
    where: MaintenaceWhereUniqueInput
    /**
     * In case the Maintenace found by the `where` argument doesn't exist, create a new Maintenace with this data.
     */
    create: XOR<MaintenaceCreateInput, MaintenaceUncheckedCreateInput>
    /**
     * In case the Maintenace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenaceUpdateInput, MaintenaceUncheckedUpdateInput>
  }

  /**
   * Maintenace delete
   */
  export type MaintenaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
    /**
     * Filter which Maintenace to delete.
     */
    where: MaintenaceWhereUniqueInput
  }

  /**
   * Maintenace deleteMany
   */
  export type MaintenaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenaces to delete
     */
    where?: MaintenaceWhereInput
  }

  /**
   * Maintenace without action
   */
  export type MaintenaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenace
     */
    select?: MaintenaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenaceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    clientId: 'clientId',
    name: 'name',
    email: 'email'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    deviceId: 'deviceId',
    Sn: 'Sn',
    type: 'type',
    batteryLevel: 'batteryLevel',
    dlcElectrode: 'dlcElectrode',
    clientId: 'clientId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const MaintenaceScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    clientId: 'clientId',
    scheduledDate: 'scheduledDate',
    performedDate: 'performedDate',
    batteryLevel: 'batteryLevel',
    ElectrodesDate: 'ElectrodesDate'
  };

  export type MaintenaceScalarFieldEnum = (typeof MaintenaceScalarFieldEnum)[keyof typeof MaintenaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    clientId?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    devices?: DeviceListRelationFilter
    events?: MaintenaceListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    clientId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
    events?: MaintenaceOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    clientId?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    devices?: DeviceListRelationFilter
    events?: MaintenaceListRelationFilter
  }, "clientId" | "email">

  export type ClientOrderByWithAggregationInput = {
    clientId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    clientId?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    deviceId?: IntFilter<"Device"> | number
    Sn?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    batteryLevel?: IntFilter<"Device"> | number
    dlcElectrode?: StringFilter<"Device"> | string
    clientId?: IntFilter<"Device"> | number
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    events?: MaintenaceListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    deviceId?: SortOrder
    Sn?: SortOrder
    type?: SortOrder
    batteryLevel?: SortOrder
    dlcElectrode?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    events?: MaintenaceOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    deviceId?: number
    Sn?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    type?: StringFilter<"Device"> | string
    batteryLevel?: IntFilter<"Device"> | number
    dlcElectrode?: StringFilter<"Device"> | string
    clientId?: IntFilter<"Device"> | number
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    events?: MaintenaceListRelationFilter
  }, "deviceId" | "Sn">

  export type DeviceOrderByWithAggregationInput = {
    deviceId?: SortOrder
    Sn?: SortOrder
    type?: SortOrder
    batteryLevel?: SortOrder
    dlcElectrode?: SortOrder
    clientId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    deviceId?: IntWithAggregatesFilter<"Device"> | number
    Sn?: StringWithAggregatesFilter<"Device"> | string
    type?: StringWithAggregatesFilter<"Device"> | string
    batteryLevel?: IntWithAggregatesFilter<"Device"> | number
    dlcElectrode?: StringWithAggregatesFilter<"Device"> | string
    clientId?: IntWithAggregatesFilter<"Device"> | number
  }

  export type MaintenaceWhereInput = {
    AND?: MaintenaceWhereInput | MaintenaceWhereInput[]
    OR?: MaintenaceWhereInput[]
    NOT?: MaintenaceWhereInput | MaintenaceWhereInput[]
    id?: IntFilter<"Maintenace"> | number
    deviceId?: IntFilter<"Maintenace"> | number
    clientId?: IntFilter<"Maintenace"> | number
    scheduledDate?: DateTimeFilter<"Maintenace"> | Date | string
    performedDate?: DateTimeFilter<"Maintenace"> | Date | string
    batteryLevel?: IntFilter<"Maintenace"> | number
    ElectrodesDate?: DateTimeFilter<"Maintenace"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type MaintenaceOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    performedDate?: SortOrder
    batteryLevel?: SortOrder
    ElectrodesDate?: SortOrder
    client?: ClientOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type MaintenaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenaceWhereInput | MaintenaceWhereInput[]
    OR?: MaintenaceWhereInput[]
    NOT?: MaintenaceWhereInput | MaintenaceWhereInput[]
    deviceId?: IntFilter<"Maintenace"> | number
    clientId?: IntFilter<"Maintenace"> | number
    scheduledDate?: DateTimeFilter<"Maintenace"> | Date | string
    performedDate?: DateTimeFilter<"Maintenace"> | Date | string
    batteryLevel?: IntFilter<"Maintenace"> | number
    ElectrodesDate?: DateTimeFilter<"Maintenace"> | Date | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "id">

  export type MaintenaceOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    performedDate?: SortOrder
    batteryLevel?: SortOrder
    ElectrodesDate?: SortOrder
    _count?: MaintenaceCountOrderByAggregateInput
    _avg?: MaintenaceAvgOrderByAggregateInput
    _max?: MaintenaceMaxOrderByAggregateInput
    _min?: MaintenaceMinOrderByAggregateInput
    _sum?: MaintenaceSumOrderByAggregateInput
  }

  export type MaintenaceScalarWhereWithAggregatesInput = {
    AND?: MaintenaceScalarWhereWithAggregatesInput | MaintenaceScalarWhereWithAggregatesInput[]
    OR?: MaintenaceScalarWhereWithAggregatesInput[]
    NOT?: MaintenaceScalarWhereWithAggregatesInput | MaintenaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maintenace"> | number
    deviceId?: IntWithAggregatesFilter<"Maintenace"> | number
    clientId?: IntWithAggregatesFilter<"Maintenace"> | number
    scheduledDate?: DateTimeWithAggregatesFilter<"Maintenace"> | Date | string
    performedDate?: DateTimeWithAggregatesFilter<"Maintenace"> | Date | string
    batteryLevel?: IntWithAggregatesFilter<"Maintenace"> | number
    ElectrodesDate?: DateTimeWithAggregatesFilter<"Maintenace"> | Date | string
  }

  export type ClientCreateInput = {
    name: string
    email: string
    devices?: DeviceCreateNestedManyWithoutClientInput
    events?: MaintenaceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    clientId?: number
    name: string
    email: string
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
    events?: MaintenaceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUpdateManyWithoutClientNestedInput
    events?: MaintenaceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
    events?: MaintenaceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    clientId?: number
    name: string
    email: string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    client: ClientCreateNestedOneWithoutDevicesInput
    events?: MaintenaceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    deviceId?: number
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    clientId: number
    events?: MaintenaceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
    events?: MaintenaceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
    events?: MaintenaceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    deviceId?: number
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    clientId: number
  }

  export type DeviceUpdateManyMutationInput = {
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MaintenaceCreateInput = {
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
    client: ClientCreateNestedOneWithoutEventsInput
    device: DeviceCreateNestedOneWithoutEventsInput
  }

  export type MaintenaceUncheckedCreateInput = {
    id?: number
    deviceId: number
    clientId: number
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
  }

  export type MaintenaceUpdateInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEventsNestedInput
    device?: DeviceUpdateOneRequiredWithoutEventsNestedInput
  }

  export type MaintenaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenaceCreateManyInput = {
    id?: number
    deviceId: number
    clientId: number
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
  }

  export type MaintenaceUpdateManyMutationInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type MaintenaceListRelationFilter = {
    every?: MaintenaceWhereInput
    some?: MaintenaceWhereInput
    none?: MaintenaceWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    deviceId?: SortOrder
    Sn?: SortOrder
    type?: SortOrder
    batteryLevel?: SortOrder
    dlcElectrode?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    deviceId?: SortOrder
    batteryLevel?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    deviceId?: SortOrder
    Sn?: SortOrder
    type?: SortOrder
    batteryLevel?: SortOrder
    dlcElectrode?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    deviceId?: SortOrder
    Sn?: SortOrder
    type?: SortOrder
    batteryLevel?: SortOrder
    dlcElectrode?: SortOrder
    clientId?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    deviceId?: SortOrder
    batteryLevel?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeviceRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type MaintenaceCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    performedDate?: SortOrder
    batteryLevel?: SortOrder
    ElectrodesDate?: SortOrder
  }

  export type MaintenaceAvgOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    batteryLevel?: SortOrder
  }

  export type MaintenaceMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    performedDate?: SortOrder
    batteryLevel?: SortOrder
    ElectrodesDate?: SortOrder
  }

  export type MaintenaceMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    scheduledDate?: SortOrder
    performedDate?: SortOrder
    batteryLevel?: SortOrder
    ElectrodesDate?: SortOrder
  }

  export type MaintenaceSumOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    clientId?: SortOrder
    batteryLevel?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeviceCreateNestedManyWithoutClientInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type MaintenaceCreateNestedManyWithoutClientInput = {
    create?: XOR<MaintenaceCreateWithoutClientInput, MaintenaceUncheckedCreateWithoutClientInput> | MaintenaceCreateWithoutClientInput[] | MaintenaceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutClientInput | MaintenaceCreateOrConnectWithoutClientInput[]
    createMany?: MaintenaceCreateManyClientInputEnvelope
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type MaintenaceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MaintenaceCreateWithoutClientInput, MaintenaceUncheckedCreateWithoutClientInput> | MaintenaceCreateWithoutClientInput[] | MaintenaceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutClientInput | MaintenaceCreateOrConnectWithoutClientInput[]
    createMany?: MaintenaceCreateManyClientInputEnvelope
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DeviceUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutClientInput | DeviceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutClientInput | DeviceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutClientInput | DeviceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type MaintenaceUpdateManyWithoutClientNestedInput = {
    create?: XOR<MaintenaceCreateWithoutClientInput, MaintenaceUncheckedCreateWithoutClientInput> | MaintenaceCreateWithoutClientInput[] | MaintenaceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutClientInput | MaintenaceCreateOrConnectWithoutClientInput[]
    upsert?: MaintenaceUpsertWithWhereUniqueWithoutClientInput | MaintenaceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MaintenaceCreateManyClientInputEnvelope
    set?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    disconnect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    delete?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    update?: MaintenaceUpdateWithWhereUniqueWithoutClientInput | MaintenaceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MaintenaceUpdateManyWithWhereWithoutClientInput | MaintenaceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MaintenaceScalarWhereInput | MaintenaceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput> | DeviceCreateWithoutClientInput[] | DeviceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutClientInput | DeviceCreateOrConnectWithoutClientInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutClientInput | DeviceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DeviceCreateManyClientInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutClientInput | DeviceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutClientInput | DeviceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type MaintenaceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MaintenaceCreateWithoutClientInput, MaintenaceUncheckedCreateWithoutClientInput> | MaintenaceCreateWithoutClientInput[] | MaintenaceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutClientInput | MaintenaceCreateOrConnectWithoutClientInput[]
    upsert?: MaintenaceUpsertWithWhereUniqueWithoutClientInput | MaintenaceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MaintenaceCreateManyClientInputEnvelope
    set?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    disconnect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    delete?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    update?: MaintenaceUpdateWithWhereUniqueWithoutClientInput | MaintenaceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MaintenaceUpdateManyWithWhereWithoutClientInput | MaintenaceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MaintenaceScalarWhereInput | MaintenaceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutDevicesInput = {
    create?: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevicesInput
    connect?: ClientWhereUniqueInput
  }

  export type MaintenaceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MaintenaceCreateWithoutDeviceInput, MaintenaceUncheckedCreateWithoutDeviceInput> | MaintenaceCreateWithoutDeviceInput[] | MaintenaceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutDeviceInput | MaintenaceCreateOrConnectWithoutDeviceInput[]
    createMany?: MaintenaceCreateManyDeviceInputEnvelope
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
  }

  export type MaintenaceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MaintenaceCreateWithoutDeviceInput, MaintenaceUncheckedCreateWithoutDeviceInput> | MaintenaceCreateWithoutDeviceInput[] | MaintenaceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutDeviceInput | MaintenaceCreateOrConnectWithoutDeviceInput[]
    createMany?: MaintenaceCreateManyDeviceInputEnvelope
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDevicesInput
    upsert?: ClientUpsertWithoutDevicesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDevicesInput, ClientUpdateWithoutDevicesInput>, ClientUncheckedUpdateWithoutDevicesInput>
  }

  export type MaintenaceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MaintenaceCreateWithoutDeviceInput, MaintenaceUncheckedCreateWithoutDeviceInput> | MaintenaceCreateWithoutDeviceInput[] | MaintenaceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutDeviceInput | MaintenaceCreateOrConnectWithoutDeviceInput[]
    upsert?: MaintenaceUpsertWithWhereUniqueWithoutDeviceInput | MaintenaceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MaintenaceCreateManyDeviceInputEnvelope
    set?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    disconnect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    delete?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    update?: MaintenaceUpdateWithWhereUniqueWithoutDeviceInput | MaintenaceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MaintenaceUpdateManyWithWhereWithoutDeviceInput | MaintenaceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MaintenaceScalarWhereInput | MaintenaceScalarWhereInput[]
  }

  export type MaintenaceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MaintenaceCreateWithoutDeviceInput, MaintenaceUncheckedCreateWithoutDeviceInput> | MaintenaceCreateWithoutDeviceInput[] | MaintenaceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MaintenaceCreateOrConnectWithoutDeviceInput | MaintenaceCreateOrConnectWithoutDeviceInput[]
    upsert?: MaintenaceUpsertWithWhereUniqueWithoutDeviceInput | MaintenaceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MaintenaceCreateManyDeviceInputEnvelope
    set?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    disconnect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    delete?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    connect?: MaintenaceWhereUniqueInput | MaintenaceWhereUniqueInput[]
    update?: MaintenaceUpdateWithWhereUniqueWithoutDeviceInput | MaintenaceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MaintenaceUpdateManyWithWhereWithoutDeviceInput | MaintenaceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MaintenaceScalarWhereInput | MaintenaceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutEventsInput = {
    create?: XOR<ClientCreateWithoutEventsInput, ClientUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEventsInput
    connect?: ClientWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutEventsInput = {
    create?: XOR<DeviceCreateWithoutEventsInput, DeviceUncheckedCreateWithoutEventsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutEventsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ClientCreateWithoutEventsInput, ClientUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEventsInput
    upsert?: ClientUpsertWithoutEventsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutEventsInput, ClientUpdateWithoutEventsInput>, ClientUncheckedUpdateWithoutEventsInput>
  }

  export type DeviceUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<DeviceCreateWithoutEventsInput, DeviceUncheckedCreateWithoutEventsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutEventsInput
    upsert?: DeviceUpsertWithoutEventsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutEventsInput, DeviceUpdateWithoutEventsInput>, DeviceUncheckedUpdateWithoutEventsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeviceCreateWithoutClientInput = {
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    events?: MaintenaceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutClientInput = {
    deviceId?: number
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    events?: MaintenaceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutClientInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput>
  }

  export type DeviceCreateManyClientInputEnvelope = {
    data: DeviceCreateManyClientInput | DeviceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type MaintenaceCreateWithoutClientInput = {
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
    device: DeviceCreateNestedOneWithoutEventsInput
  }

  export type MaintenaceUncheckedCreateWithoutClientInput = {
    id?: number
    deviceId: number
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
  }

  export type MaintenaceCreateOrConnectWithoutClientInput = {
    where: MaintenaceWhereUniqueInput
    create: XOR<MaintenaceCreateWithoutClientInput, MaintenaceUncheckedCreateWithoutClientInput>
  }

  export type MaintenaceCreateManyClientInputEnvelope = {
    data: MaintenaceCreateManyClientInput | MaintenaceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutClientInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutClientInput, DeviceUncheckedUpdateWithoutClientInput>
    create: XOR<DeviceCreateWithoutClientInput, DeviceUncheckedCreateWithoutClientInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutClientInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutClientInput, DeviceUncheckedUpdateWithoutClientInput>
  }

  export type DeviceUpdateManyWithWhereWithoutClientInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutClientInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    deviceId?: IntFilter<"Device"> | number
    Sn?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    batteryLevel?: IntFilter<"Device"> | number
    dlcElectrode?: StringFilter<"Device"> | string
    clientId?: IntFilter<"Device"> | number
  }

  export type MaintenaceUpsertWithWhereUniqueWithoutClientInput = {
    where: MaintenaceWhereUniqueInput
    update: XOR<MaintenaceUpdateWithoutClientInput, MaintenaceUncheckedUpdateWithoutClientInput>
    create: XOR<MaintenaceCreateWithoutClientInput, MaintenaceUncheckedCreateWithoutClientInput>
  }

  export type MaintenaceUpdateWithWhereUniqueWithoutClientInput = {
    where: MaintenaceWhereUniqueInput
    data: XOR<MaintenaceUpdateWithoutClientInput, MaintenaceUncheckedUpdateWithoutClientInput>
  }

  export type MaintenaceUpdateManyWithWhereWithoutClientInput = {
    where: MaintenaceScalarWhereInput
    data: XOR<MaintenaceUpdateManyMutationInput, MaintenaceUncheckedUpdateManyWithoutClientInput>
  }

  export type MaintenaceScalarWhereInput = {
    AND?: MaintenaceScalarWhereInput | MaintenaceScalarWhereInput[]
    OR?: MaintenaceScalarWhereInput[]
    NOT?: MaintenaceScalarWhereInput | MaintenaceScalarWhereInput[]
    id?: IntFilter<"Maintenace"> | number
    deviceId?: IntFilter<"Maintenace"> | number
    clientId?: IntFilter<"Maintenace"> | number
    scheduledDate?: DateTimeFilter<"Maintenace"> | Date | string
    performedDate?: DateTimeFilter<"Maintenace"> | Date | string
    batteryLevel?: IntFilter<"Maintenace"> | number
    ElectrodesDate?: DateTimeFilter<"Maintenace"> | Date | string
  }

  export type ClientCreateWithoutDevicesInput = {
    name: string
    email: string
    events?: MaintenaceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDevicesInput = {
    clientId?: number
    name: string
    email: string
    events?: MaintenaceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDevicesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
  }

  export type MaintenaceCreateWithoutDeviceInput = {
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
    client: ClientCreateNestedOneWithoutEventsInput
  }

  export type MaintenaceUncheckedCreateWithoutDeviceInput = {
    id?: number
    clientId: number
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
  }

  export type MaintenaceCreateOrConnectWithoutDeviceInput = {
    where: MaintenaceWhereUniqueInput
    create: XOR<MaintenaceCreateWithoutDeviceInput, MaintenaceUncheckedCreateWithoutDeviceInput>
  }

  export type MaintenaceCreateManyDeviceInputEnvelope = {
    data: MaintenaceCreateManyDeviceInput | MaintenaceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutDevicesInput = {
    update: XOR<ClientUpdateWithoutDevicesInput, ClientUncheckedUpdateWithoutDevicesInput>
    create: XOR<ClientCreateWithoutDevicesInput, ClientUncheckedCreateWithoutDevicesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDevicesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDevicesInput, ClientUncheckedUpdateWithoutDevicesInput>
  }

  export type ClientUpdateWithoutDevicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    events?: MaintenaceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDevicesInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    events?: MaintenaceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type MaintenaceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: MaintenaceWhereUniqueInput
    update: XOR<MaintenaceUpdateWithoutDeviceInput, MaintenaceUncheckedUpdateWithoutDeviceInput>
    create: XOR<MaintenaceCreateWithoutDeviceInput, MaintenaceUncheckedCreateWithoutDeviceInput>
  }

  export type MaintenaceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: MaintenaceWhereUniqueInput
    data: XOR<MaintenaceUpdateWithoutDeviceInput, MaintenaceUncheckedUpdateWithoutDeviceInput>
  }

  export type MaintenaceUpdateManyWithWhereWithoutDeviceInput = {
    where: MaintenaceScalarWhereInput
    data: XOR<MaintenaceUpdateManyMutationInput, MaintenaceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type ClientCreateWithoutEventsInput = {
    name: string
    email: string
    devices?: DeviceCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEventsInput = {
    clientId?: number
    name: string
    email: string
    devices?: DeviceUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEventsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEventsInput, ClientUncheckedCreateWithoutEventsInput>
  }

  export type DeviceCreateWithoutEventsInput = {
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    client: ClientCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutEventsInput = {
    deviceId?: number
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
    clientId: number
  }

  export type DeviceCreateOrConnectWithoutEventsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutEventsInput, DeviceUncheckedCreateWithoutEventsInput>
  }

  export type ClientUpsertWithoutEventsInput = {
    update: XOR<ClientUpdateWithoutEventsInput, ClientUncheckedUpdateWithoutEventsInput>
    create: XOR<ClientCreateWithoutEventsInput, ClientUncheckedCreateWithoutEventsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutEventsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutEventsInput, ClientUncheckedUpdateWithoutEventsInput>
  }

  export type ClientUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEventsInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    devices?: DeviceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DeviceUpsertWithoutEventsInput = {
    update: XOR<DeviceUpdateWithoutEventsInput, DeviceUncheckedUpdateWithoutEventsInput>
    create: XOR<DeviceCreateWithoutEventsInput, DeviceUncheckedCreateWithoutEventsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutEventsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutEventsInput, DeviceUncheckedUpdateWithoutEventsInput>
  }

  export type DeviceUpdateWithoutEventsInput = {
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutEventsInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateManyClientInput = {
    deviceId?: number
    Sn: string
    type: string
    batteryLevel: number
    dlcElectrode: string
  }

  export type MaintenaceCreateManyClientInput = {
    id?: number
    deviceId: number
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
  }

  export type DeviceUpdateWithoutClientInput = {
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    events?: MaintenaceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutClientInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
    events?: MaintenaceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutClientInput = {
    deviceId?: IntFieldUpdateOperationsInput | number
    Sn?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    dlcElectrode?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenaceUpdateWithoutClientInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutEventsNestedInput
  }

  export type MaintenaceUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenaceUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenaceCreateManyDeviceInput = {
    id?: number
    clientId: number
    scheduledDate: Date | string
    performedDate: Date | string
    batteryLevel: number
    ElectrodesDate: Date | string
  }

  export type MaintenaceUpdateWithoutDeviceInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEventsNestedInput
  }

  export type MaintenaceUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenaceUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    performedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    batteryLevel?: IntFieldUpdateOperationsInput | number
    ElectrodesDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
     */
    export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaintenaceDefaultArgs instead
     */
    export type MaintenaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaintenaceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}