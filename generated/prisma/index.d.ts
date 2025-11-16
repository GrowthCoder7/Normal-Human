
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Thread
 * 
 */
export type Thread = $Result.DefaultSelection<Prisma.$ThreadPayload>
/**
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model EmailAddress
 * 
 */
export type EmailAddress = $Result.DefaultSelection<Prisma.$EmailAddressPayload>
/**
 * Model EmailAttachment
 * 
 */
export type EmailAttachment = $Result.DefaultSelection<Prisma.$EmailAttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmailLabel: {
  inbox: 'inbox',
  sent: 'sent',
  draft: 'draft'
};

export type EmailLabel = (typeof EmailLabel)[keyof typeof EmailLabel]


export const Sensitivity: {
  normal: 'normal',
  private: 'private',
  personal: 'personal',
  confidential: 'confidential'
};

export type Sensitivity = (typeof Sensitivity)[keyof typeof Sensitivity]


export const MeetingMessageMethod: {
  request: 'request',
  reply: 'reply',
  cancel: 'cancel',
  counter: 'counter',
  other: 'other'
};

export type MeetingMessageMethod = (typeof MeetingMessageMethod)[keyof typeof MeetingMessageMethod]

}

export type EmailLabel = $Enums.EmailLabel

export const EmailLabel: typeof $Enums.EmailLabel

export type Sensitivity = $Enums.Sensitivity

export const Sensitivity: typeof $Enums.Sensitivity

export type MeetingMessageMethod = $Enums.MeetingMessageMethod

export const MeetingMessageMethod: typeof $Enums.MeetingMessageMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailAddress`: Exposes CRUD operations for the **EmailAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailAddresses
    * const emailAddresses = await prisma.emailAddress.findMany()
    * ```
    */
  get emailAddress(): Prisma.EmailAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailAttachment`: Exposes CRUD operations for the **EmailAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailAttachments
    * const emailAttachments = await prisma.emailAttachment.findMany()
    * ```
    */
  get emailAttachment(): Prisma.EmailAttachmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Account: 'Account',
    Thread: 'Thread',
    Email: 'Email',
    EmailAddress: 'EmailAddress',
    EmailAttachment: 'EmailAttachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "thread" | "email" | "emailAddress" | "emailAttachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Thread: {
        payload: Prisma.$ThreadPayload<ExtArgs>
        fields: Prisma.ThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          deleteMany: {
            args: Prisma.ThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          upsert: {
            args: Prisma.ThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          aggregate: {
            args: Prisma.ThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThread>
          }
          groupBy: {
            args: Prisma.ThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadCountArgs<ExtArgs>
            result: $Utils.Optional<ThreadCountAggregateOutputType> | number
          }
        }
      }
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      EmailAddress: {
        payload: Prisma.$EmailAddressPayload<ExtArgs>
        fields: Prisma.EmailAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>
          }
          findFirst: {
            args: Prisma.EmailAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>
          }
          findMany: {
            args: Prisma.EmailAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>[]
          }
          create: {
            args: Prisma.EmailAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>
          }
          createMany: {
            args: Prisma.EmailAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>[]
          }
          delete: {
            args: Prisma.EmailAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>
          }
          update: {
            args: Prisma.EmailAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>
          }
          deleteMany: {
            args: Prisma.EmailAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>[]
          }
          upsert: {
            args: Prisma.EmailAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAddressPayload>
          }
          aggregate: {
            args: Prisma.EmailAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailAddress>
          }
          groupBy: {
            args: Prisma.EmailAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailAddressCountArgs<ExtArgs>
            result: $Utils.Optional<EmailAddressCountAggregateOutputType> | number
          }
        }
      }
      EmailAttachment: {
        payload: Prisma.$EmailAttachmentPayload<ExtArgs>
        fields: Prisma.EmailAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>
          }
          findFirst: {
            args: Prisma.EmailAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>
          }
          findMany: {
            args: Prisma.EmailAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>[]
          }
          create: {
            args: Prisma.EmailAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>
          }
          createMany: {
            args: Prisma.EmailAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>[]
          }
          delete: {
            args: Prisma.EmailAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>
          }
          update: {
            args: Prisma.EmailAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.EmailAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.EmailAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailAttachmentPayload>
          }
          aggregate: {
            args: Prisma.EmailAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailAttachment>
          }
          groupBy: {
            args: Prisma.EmailAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<EmailAttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    thread?: ThreadOmit
    email?: EmailOmit
    emailAddress?: EmailAddressOmit
    emailAttachment?: EmailAttachmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    threads: number
    emailAddresses: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | AccountCountOutputTypeCountThreadsArgs
    emailAddresses?: boolean | AccountCountOutputTypeCountEmailAddressesArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountEmailAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAddressWhereInput
  }


  /**
   * Count Type ThreadCountOutputType
   */

  export type ThreadCountOutputType = {
    emails: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | ThreadCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }


  /**
   * Count Type EmailCountOutputType
   */

  export type EmailCountOutputType = {
    to: number
    cc: number
    bcc: number
    replyTo: number
    attachments: number
  }

  export type EmailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    to?: boolean | EmailCountOutputTypeCountToArgs
    cc?: boolean | EmailCountOutputTypeCountCcArgs
    bcc?: boolean | EmailCountOutputTypeCountBccArgs
    replyTo?: boolean | EmailCountOutputTypeCountReplyToArgs
    attachments?: boolean | EmailCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailCountOutputType
     */
    select?: EmailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeCountToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAddressWhereInput
  }

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeCountCcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAddressWhereInput
  }

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeCountBccArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAddressWhereInput
  }

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeCountReplyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAddressWhereInput
  }

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAttachmentWhereInput
  }


  /**
   * Count Type EmailAddressCountOutputType
   */

  export type EmailAddressCountOutputType = {
    sentEmails: number
    receivedTo: number
    receivedCc: number
    receivedBcc: number
    replyToEmails: number
  }

  export type EmailAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentEmails?: boolean | EmailAddressCountOutputTypeCountSentEmailsArgs
    receivedTo?: boolean | EmailAddressCountOutputTypeCountReceivedToArgs
    receivedCc?: boolean | EmailAddressCountOutputTypeCountReceivedCcArgs
    receivedBcc?: boolean | EmailAddressCountOutputTypeCountReceivedBccArgs
    replyToEmails?: boolean | EmailAddressCountOutputTypeCountReplyToEmailsArgs
  }

  // Custom InputTypes
  /**
   * EmailAddressCountOutputType without action
   */
  export type EmailAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddressCountOutputType
     */
    select?: EmailAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmailAddressCountOutputType without action
   */
  export type EmailAddressCountOutputTypeCountSentEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * EmailAddressCountOutputType without action
   */
  export type EmailAddressCountOutputTypeCountReceivedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * EmailAddressCountOutputType without action
   */
  export type EmailAddressCountOutputTypeCountReceivedCcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * EmailAddressCountOutputType without action
   */
  export type EmailAddressCountOutputTypeCountReceivedBccArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * EmailAddressCountOutputType without action
   */
  export type EmailAddressCountOutputTypeCountReplyToEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    imageUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    imageUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    imageUrl: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    imageUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    imageUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    imageUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    imageUrl: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    imageUrl?: boolean
    Accounts?: boolean | User$AccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    imageUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "imageUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | User$AccountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      imageUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Accounts<T extends User$AccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Accounts
   */
  export type User$AccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    emailAddress: string | null
    accessToken: string | null
    nextDeltaToken: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    emailAddress: string | null
    accessToken: string | null
    nextDeltaToken: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    emailAddress: number
    accessToken: number
    nextDeltaToken: number
    oramaIndex: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    emailAddress?: true
    accessToken?: true
    nextDeltaToken?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    emailAddress?: true
    accessToken?: true
    nextDeltaToken?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    emailAddress?: true
    accessToken?: true
    nextDeltaToken?: true
    oramaIndex?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken: string | null
    oramaIndex: JsonValue | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    emailAddress?: boolean
    accessToken?: boolean
    nextDeltaToken?: boolean
    oramaIndex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    threads?: boolean | Account$threadsArgs<ExtArgs>
    emailAddresses?: boolean | Account$emailAddressesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    emailAddress?: boolean
    accessToken?: boolean
    nextDeltaToken?: boolean
    oramaIndex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    emailAddress?: boolean
    accessToken?: boolean
    nextDeltaToken?: boolean
    oramaIndex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    emailAddress?: boolean
    accessToken?: boolean
    nextDeltaToken?: boolean
    oramaIndex?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "emailAddress" | "accessToken" | "nextDeltaToken" | "oramaIndex", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    threads?: boolean | Account$threadsArgs<ExtArgs>
    emailAddresses?: boolean | Account$emailAddressesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      threads: Prisma.$ThreadPayload<ExtArgs>[]
      emailAddresses: Prisma.$EmailAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      emailAddress: string
      accessToken: string
      nextDeltaToken: string | null
      oramaIndex: Prisma.JsonValue | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    threads<T extends Account$threadsArgs<ExtArgs> = {}>(args?: Subset<T, Account$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailAddresses<T extends Account$emailAddressesArgs<ExtArgs> = {}>(args?: Subset<T, Account$emailAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly emailAddress: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly nextDeltaToken: FieldRef<"Account", 'String'>
    readonly oramaIndex: FieldRef<"Account", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.threads
   */
  export type Account$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Account.emailAddresses
   */
  export type Account$emailAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    where?: EmailAddressWhereInput
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    cursor?: EmailAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Thread
   */

  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadMinAggregateOutputType = {
    id: string | null
    subject: string | null
    lastMessageDate: Date | null
    accountId: string | null
    done: boolean | null
    inboxStatus: boolean | null
    draftStatus: boolean | null
    sentStatus: boolean | null
  }

  export type ThreadMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    lastMessageDate: Date | null
    accountId: string | null
    done: boolean | null
    inboxStatus: boolean | null
    draftStatus: boolean | null
    sentStatus: boolean | null
  }

  export type ThreadCountAggregateOutputType = {
    id: number
    subject: number
    lastMessageDate: number
    participantIds: number
    accountId: number
    done: number
    inboxStatus: number
    draftStatus: number
    sentStatus: number
    _all: number
  }


  export type ThreadMinAggregateInputType = {
    id?: true
    subject?: true
    lastMessageDate?: true
    accountId?: true
    done?: true
    inboxStatus?: true
    draftStatus?: true
    sentStatus?: true
  }

  export type ThreadMaxAggregateInputType = {
    id?: true
    subject?: true
    lastMessageDate?: true
    accountId?: true
    done?: true
    inboxStatus?: true
    draftStatus?: true
    sentStatus?: true
  }

  export type ThreadCountAggregateInputType = {
    id?: true
    subject?: true
    lastMessageDate?: true
    participantIds?: true
    accountId?: true
    done?: true
    inboxStatus?: true
    draftStatus?: true
    sentStatus?: true
    _all?: true
  }

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithAggregationInput | ThreadOrderByWithAggregationInput[]
    by: ThreadScalarFieldEnum[] | ThreadScalarFieldEnum
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }

  export type ThreadGroupByOutputType = {
    id: string
    subject: string
    lastMessageDate: Date
    participantIds: string[]
    accountId: string
    done: boolean
    inboxStatus: boolean
    draftStatus: boolean
    sentStatus: boolean
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    lastMessageDate?: boolean
    participantIds?: boolean
    accountId?: boolean
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    emails?: boolean | Thread$emailsArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    lastMessageDate?: boolean
    participantIds?: boolean
    accountId?: boolean
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    lastMessageDate?: boolean
    participantIds?: boolean
    accountId?: boolean
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectScalar = {
    id?: boolean
    subject?: boolean
    lastMessageDate?: boolean
    participantIds?: boolean
    accountId?: boolean
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
  }

  export type ThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "lastMessageDate" | "participantIds" | "accountId" | "done" | "inboxStatus" | "draftStatus" | "sentStatus", ExtArgs["result"]["thread"]>
  export type ThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    emails?: boolean | Thread$emailsArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type ThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $ThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thread"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      emails: Prisma.$EmailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      lastMessageDate: Date
      participantIds: string[]
      accountId: string
      done: boolean
      inboxStatus: boolean
      draftStatus: boolean
      sentStatus: boolean
    }, ExtArgs["result"]["thread"]>
    composites: {}
  }

  type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = $Result.GetResult<Prisma.$ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thread'], meta: { name: 'Thread' } }
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThreadFindUniqueArgs>(args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThreadFindFirstArgs>(args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThreadFindManyArgs>(args?: SelectSubset<T, ThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
     */
    create<T extends ThreadCreateArgs>(args: SelectSubset<T, ThreadCreateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Threads.
     * @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThreadCreateManyArgs>(args?: SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Threads and returns the data saved in the database.
     * @param {ThreadCreateManyAndReturnArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Threads and only return the `id`
     * const threadWithIdOnly = await prisma.thread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, ThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
     */
    delete<T extends ThreadDeleteArgs>(args: SelectSubset<T, ThreadDeleteArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThreadUpdateArgs>(args: SelectSubset<T, ThreadUpdateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThreadDeleteManyArgs>(args?: SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThreadUpdateManyArgs>(args: SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads and returns the data updated in the database.
     * @param {ThreadUpdateManyAndReturnArgs} args - Arguments to update many Threads.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Threads and only return the `id`
     * const threadWithIdOnly = await prisma.thread.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, ThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
     */
    upsert<T extends ThreadUpsertArgs>(args: SelectSubset<T, ThreadUpsertArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
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
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thread model
   */
  readonly fields: ThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emails<T extends Thread$emailsArgs<ExtArgs> = {}>(args?: Subset<T, Thread$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Thread model
   */
  interface ThreadFieldRefs {
    readonly id: FieldRef<"Thread", 'String'>
    readonly subject: FieldRef<"Thread", 'String'>
    readonly lastMessageDate: FieldRef<"Thread", 'DateTime'>
    readonly participantIds: FieldRef<"Thread", 'String[]'>
    readonly accountId: FieldRef<"Thread", 'String'>
    readonly done: FieldRef<"Thread", 'Boolean'>
    readonly inboxStatus: FieldRef<"Thread", 'Boolean'>
    readonly draftStatus: FieldRef<"Thread", 'Boolean'>
    readonly sentStatus: FieldRef<"Thread", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Thread findUnique
   */
  export type ThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findFirst
   */
  export type ThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }

  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thread createManyAndReturn
   */
  export type ThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
  }

  /**
   * Thread updateManyAndReturn
   */
  export type ThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }

  /**
   * Thread delete
   */
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to delete.
     */
    limit?: number
  }

  /**
   * Thread.emails
   */
  export type Thread$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Thread without action
   */
  export type ThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
  }


  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    threadId: string | null
    createdTime: Date | null
    lastModifiedTime: Date | null
    sentAt: Date | null
    receivedAt: Date | null
    internetMessageId: string | null
    subject: string | null
    sensitivity: $Enums.Sensitivity | null
    meetingMessageMethod: $Enums.MeetingMessageMethod | null
    fromId: string | null
    hasAttachments: boolean | null
    body: string | null
    bodySnippet: string | null
    inReplyTo: string | null
    references: string | null
    threadIndex: string | null
    folderId: string | null
    emailLabel: $Enums.EmailLabel | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    threadId: string | null
    createdTime: Date | null
    lastModifiedTime: Date | null
    sentAt: Date | null
    receivedAt: Date | null
    internetMessageId: string | null
    subject: string | null
    sensitivity: $Enums.Sensitivity | null
    meetingMessageMethod: $Enums.MeetingMessageMethod | null
    fromId: string | null
    hasAttachments: boolean | null
    body: string | null
    bodySnippet: string | null
    inReplyTo: string | null
    references: string | null
    threadIndex: string | null
    folderId: string | null
    emailLabel: $Enums.EmailLabel | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    threadId: number
    createdTime: number
    lastModifiedTime: number
    sentAt: number
    receivedAt: number
    internetMessageId: number
    subject: number
    sysLabels: number
    keywords: number
    sysClassifications: number
    sensitivity: number
    meetingMessageMethod: number
    fromId: number
    hasAttachments: number
    body: number
    bodySnippet: number
    inReplyTo: number
    references: number
    threadIndex: number
    internetHeaders: number
    nativeProperties: number
    folderId: number
    omitted: number
    emailLabel: number
    _all: number
  }


  export type EmailMinAggregateInputType = {
    id?: true
    threadId?: true
    createdTime?: true
    lastModifiedTime?: true
    sentAt?: true
    receivedAt?: true
    internetMessageId?: true
    subject?: true
    sensitivity?: true
    meetingMessageMethod?: true
    fromId?: true
    hasAttachments?: true
    body?: true
    bodySnippet?: true
    inReplyTo?: true
    references?: true
    threadIndex?: true
    folderId?: true
    emailLabel?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    threadId?: true
    createdTime?: true
    lastModifiedTime?: true
    sentAt?: true
    receivedAt?: true
    internetMessageId?: true
    subject?: true
    sensitivity?: true
    meetingMessageMethod?: true
    fromId?: true
    hasAttachments?: true
    body?: true
    bodySnippet?: true
    inReplyTo?: true
    references?: true
    threadIndex?: true
    folderId?: true
    emailLabel?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    threadId?: true
    createdTime?: true
    lastModifiedTime?: true
    sentAt?: true
    receivedAt?: true
    internetMessageId?: true
    subject?: true
    sysLabels?: true
    keywords?: true
    sysClassifications?: true
    sensitivity?: true
    meetingMessageMethod?: true
    fromId?: true
    hasAttachments?: true
    body?: true
    bodySnippet?: true
    inReplyTo?: true
    references?: true
    threadIndex?: true
    internetHeaders?: true
    nativeProperties?: true
    folderId?: true
    omitted?: true
    emailLabel?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    threadId: string
    createdTime: Date
    lastModifiedTime: Date
    sentAt: Date
    receivedAt: Date
    internetMessageId: string
    subject: string
    sysLabels: string[]
    keywords: string[]
    sysClassifications: string[]
    sensitivity: $Enums.Sensitivity
    meetingMessageMethod: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body: string | null
    bodySnippet: string | null
    inReplyTo: string | null
    references: string | null
    threadIndex: string | null
    internetHeaders: JsonValue[]
    nativeProperties: JsonValue | null
    folderId: string | null
    omitted: string[]
    emailLabel: $Enums.EmailLabel
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    createdTime?: boolean
    lastModifiedTime?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    internetMessageId?: boolean
    subject?: boolean
    sysLabels?: boolean
    keywords?: boolean
    sysClassifications?: boolean
    sensitivity?: boolean
    meetingMessageMethod?: boolean
    fromId?: boolean
    hasAttachments?: boolean
    body?: boolean
    bodySnippet?: boolean
    inReplyTo?: boolean
    references?: boolean
    threadIndex?: boolean
    internetHeaders?: boolean
    nativeProperties?: boolean
    folderId?: boolean
    omitted?: boolean
    emailLabel?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    from?: boolean | EmailAddressDefaultArgs<ExtArgs>
    to?: boolean | Email$toArgs<ExtArgs>
    cc?: boolean | Email$ccArgs<ExtArgs>
    bcc?: boolean | Email$bccArgs<ExtArgs>
    replyTo?: boolean | Email$replyToArgs<ExtArgs>
    attachments?: boolean | Email$attachmentsArgs<ExtArgs>
    _count?: boolean | EmailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    createdTime?: boolean
    lastModifiedTime?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    internetMessageId?: boolean
    subject?: boolean
    sysLabels?: boolean
    keywords?: boolean
    sysClassifications?: boolean
    sensitivity?: boolean
    meetingMessageMethod?: boolean
    fromId?: boolean
    hasAttachments?: boolean
    body?: boolean
    bodySnippet?: boolean
    inReplyTo?: boolean
    references?: boolean
    threadIndex?: boolean
    internetHeaders?: boolean
    nativeProperties?: boolean
    folderId?: boolean
    omitted?: boolean
    emailLabel?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    from?: boolean | EmailAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    threadId?: boolean
    createdTime?: boolean
    lastModifiedTime?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    internetMessageId?: boolean
    subject?: boolean
    sysLabels?: boolean
    keywords?: boolean
    sysClassifications?: boolean
    sensitivity?: boolean
    meetingMessageMethod?: boolean
    fromId?: boolean
    hasAttachments?: boolean
    body?: boolean
    bodySnippet?: boolean
    inReplyTo?: boolean
    references?: boolean
    threadIndex?: boolean
    internetHeaders?: boolean
    nativeProperties?: boolean
    folderId?: boolean
    omitted?: boolean
    emailLabel?: boolean
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    from?: boolean | EmailAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    threadId?: boolean
    createdTime?: boolean
    lastModifiedTime?: boolean
    sentAt?: boolean
    receivedAt?: boolean
    internetMessageId?: boolean
    subject?: boolean
    sysLabels?: boolean
    keywords?: boolean
    sysClassifications?: boolean
    sensitivity?: boolean
    meetingMessageMethod?: boolean
    fromId?: boolean
    hasAttachments?: boolean
    body?: boolean
    bodySnippet?: boolean
    inReplyTo?: boolean
    references?: boolean
    threadIndex?: boolean
    internetHeaders?: boolean
    nativeProperties?: boolean
    folderId?: boolean
    omitted?: boolean
    emailLabel?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "threadId" | "createdTime" | "lastModifiedTime" | "sentAt" | "receivedAt" | "internetMessageId" | "subject" | "sysLabels" | "keywords" | "sysClassifications" | "sensitivity" | "meetingMessageMethod" | "fromId" | "hasAttachments" | "body" | "bodySnippet" | "inReplyTo" | "references" | "threadIndex" | "internetHeaders" | "nativeProperties" | "folderId" | "omitted" | "emailLabel", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    from?: boolean | EmailAddressDefaultArgs<ExtArgs>
    to?: boolean | Email$toArgs<ExtArgs>
    cc?: boolean | Email$ccArgs<ExtArgs>
    bcc?: boolean | Email$bccArgs<ExtArgs>
    replyTo?: boolean | Email$replyToArgs<ExtArgs>
    attachments?: boolean | Email$attachmentsArgs<ExtArgs>
    _count?: boolean | EmailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    from?: boolean | EmailAddressDefaultArgs<ExtArgs>
  }
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    from?: boolean | EmailAddressDefaultArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      thread: Prisma.$ThreadPayload<ExtArgs>
      from: Prisma.$EmailAddressPayload<ExtArgs>
      to: Prisma.$EmailAddressPayload<ExtArgs>[]
      cc: Prisma.$EmailAddressPayload<ExtArgs>[]
      bcc: Prisma.$EmailAddressPayload<ExtArgs>[]
      replyTo: Prisma.$EmailAddressPayload<ExtArgs>[]
      attachments: Prisma.$EmailAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      threadId: string
      createdTime: Date
      lastModifiedTime: Date
      sentAt: Date
      receivedAt: Date
      internetMessageId: string
      subject: string
      sysLabels: string[]
      keywords: string[]
      sysClassifications: string[]
      sensitivity: $Enums.Sensitivity
      meetingMessageMethod: $Enums.MeetingMessageMethod | null
      fromId: string
      hasAttachments: boolean
      body: string | null
      bodySnippet: string | null
      inReplyTo: string | null
      references: string | null
      threadIndex: string | null
      internetHeaders: Prisma.JsonValue[]
      nativeProperties: Prisma.JsonValue | null
      folderId: string | null
      omitted: string[]
      emailLabel: $Enums.EmailLabel
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    from<T extends EmailAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailAddressDefaultArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends Email$toArgs<ExtArgs> = {}>(args?: Subset<T, Email$toArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cc<T extends Email$ccArgs<ExtArgs> = {}>(args?: Subset<T, Email$ccArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bcc<T extends Email$bccArgs<ExtArgs> = {}>(args?: Subset<T, Email$bccArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replyTo<T extends Email$replyToArgs<ExtArgs> = {}>(args?: Subset<T, Email$replyToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Email$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Email$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly threadId: FieldRef<"Email", 'String'>
    readonly createdTime: FieldRef<"Email", 'DateTime'>
    readonly lastModifiedTime: FieldRef<"Email", 'DateTime'>
    readonly sentAt: FieldRef<"Email", 'DateTime'>
    readonly receivedAt: FieldRef<"Email", 'DateTime'>
    readonly internetMessageId: FieldRef<"Email", 'String'>
    readonly subject: FieldRef<"Email", 'String'>
    readonly sysLabels: FieldRef<"Email", 'String[]'>
    readonly keywords: FieldRef<"Email", 'String[]'>
    readonly sysClassifications: FieldRef<"Email", 'String[]'>
    readonly sensitivity: FieldRef<"Email", 'Sensitivity'>
    readonly meetingMessageMethod: FieldRef<"Email", 'MeetingMessageMethod'>
    readonly fromId: FieldRef<"Email", 'String'>
    readonly hasAttachments: FieldRef<"Email", 'Boolean'>
    readonly body: FieldRef<"Email", 'String'>
    readonly bodySnippet: FieldRef<"Email", 'String'>
    readonly inReplyTo: FieldRef<"Email", 'String'>
    readonly references: FieldRef<"Email", 'String'>
    readonly threadIndex: FieldRef<"Email", 'String'>
    readonly internetHeaders: FieldRef<"Email", 'Json[]'>
    readonly nativeProperties: FieldRef<"Email", 'Json'>
    readonly folderId: FieldRef<"Email", 'String'>
    readonly omitted: FieldRef<"Email", 'String[]'>
    readonly emailLabel: FieldRef<"Email", 'EmailLabel'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email.to
   */
  export type Email$toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    where?: EmailAddressWhereInput
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    cursor?: EmailAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * Email.cc
   */
  export type Email$ccArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    where?: EmailAddressWhereInput
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    cursor?: EmailAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * Email.bcc
   */
  export type Email$bccArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    where?: EmailAddressWhereInput
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    cursor?: EmailAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * Email.replyTo
   */
  export type Email$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    where?: EmailAddressWhereInput
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    cursor?: EmailAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * Email.attachments
   */
  export type Email$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    where?: EmailAttachmentWhereInput
    orderBy?: EmailAttachmentOrderByWithRelationInput | EmailAttachmentOrderByWithRelationInput[]
    cursor?: EmailAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailAttachmentScalarFieldEnum | EmailAttachmentScalarFieldEnum[]
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model EmailAddress
   */

  export type AggregateEmailAddress = {
    _count: EmailAddressCountAggregateOutputType | null
    _min: EmailAddressMinAggregateOutputType | null
    _max: EmailAddressMaxAggregateOutputType | null
  }

  export type EmailAddressMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    raw: string | null
    accountId: string | null
  }

  export type EmailAddressMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    raw: string | null
    accountId: string | null
  }

  export type EmailAddressCountAggregateOutputType = {
    id: number
    name: number
    address: number
    raw: number
    accountId: number
    _all: number
  }


  export type EmailAddressMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    raw?: true
    accountId?: true
  }

  export type EmailAddressMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    raw?: true
    accountId?: true
  }

  export type EmailAddressCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    raw?: true
    accountId?: true
    _all?: true
  }

  export type EmailAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAddress to aggregate.
     */
    where?: EmailAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAddresses to fetch.
     */
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailAddresses
    **/
    _count?: true | EmailAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailAddressMaxAggregateInputType
  }

  export type GetEmailAddressAggregateType<T extends EmailAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailAddress[P]>
      : GetScalarType<T[P], AggregateEmailAddress[P]>
  }




  export type EmailAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAddressWhereInput
    orderBy?: EmailAddressOrderByWithAggregationInput | EmailAddressOrderByWithAggregationInput[]
    by: EmailAddressScalarFieldEnum[] | EmailAddressScalarFieldEnum
    having?: EmailAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailAddressCountAggregateInputType | true
    _min?: EmailAddressMinAggregateInputType
    _max?: EmailAddressMaxAggregateInputType
  }

  export type EmailAddressGroupByOutputType = {
    id: string
    name: string | null
    address: string
    raw: string | null
    accountId: string
    _count: EmailAddressCountAggregateOutputType | null
    _min: EmailAddressMinAggregateOutputType | null
    _max: EmailAddressMaxAggregateOutputType | null
  }

  type GetEmailAddressGroupByPayload<T extends EmailAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailAddressGroupByOutputType[P]>
            : GetScalarType<T[P], EmailAddressGroupByOutputType[P]>
        }
      >
    >


  export type EmailAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    raw?: boolean
    accountId?: boolean
    sentEmails?: boolean | EmailAddress$sentEmailsArgs<ExtArgs>
    receivedTo?: boolean | EmailAddress$receivedToArgs<ExtArgs>
    receivedCc?: boolean | EmailAddress$receivedCcArgs<ExtArgs>
    receivedBcc?: boolean | EmailAddress$receivedBccArgs<ExtArgs>
    replyToEmails?: boolean | EmailAddress$replyToEmailsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | EmailAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAddress"]>

  export type EmailAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    raw?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAddress"]>

  export type EmailAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    raw?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAddress"]>

  export type EmailAddressSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    raw?: boolean
    accountId?: boolean
  }

  export type EmailAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "raw" | "accountId", ExtArgs["result"]["emailAddress"]>
  export type EmailAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentEmails?: boolean | EmailAddress$sentEmailsArgs<ExtArgs>
    receivedTo?: boolean | EmailAddress$receivedToArgs<ExtArgs>
    receivedCc?: boolean | EmailAddress$receivedCcArgs<ExtArgs>
    receivedBcc?: boolean | EmailAddress$receivedBccArgs<ExtArgs>
    replyToEmails?: boolean | EmailAddress$replyToEmailsArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
    _count?: boolean | EmailAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmailAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type EmailAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $EmailAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailAddress"
    objects: {
      sentEmails: Prisma.$EmailPayload<ExtArgs>[]
      receivedTo: Prisma.$EmailPayload<ExtArgs>[]
      receivedCc: Prisma.$EmailPayload<ExtArgs>[]
      receivedBcc: Prisma.$EmailPayload<ExtArgs>[]
      replyToEmails: Prisma.$EmailPayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      address: string
      raw: string | null
      accountId: string
    }, ExtArgs["result"]["emailAddress"]>
    composites: {}
  }

  type EmailAddressGetPayload<S extends boolean | null | undefined | EmailAddressDefaultArgs> = $Result.GetResult<Prisma.$EmailAddressPayload, S>

  type EmailAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailAddressCountAggregateInputType | true
    }

  export interface EmailAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailAddress'], meta: { name: 'EmailAddress' } }
    /**
     * Find zero or one EmailAddress that matches the filter.
     * @param {EmailAddressFindUniqueArgs} args - Arguments to find a EmailAddress
     * @example
     * // Get one EmailAddress
     * const emailAddress = await prisma.emailAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailAddressFindUniqueArgs>(args: SelectSubset<T, EmailAddressFindUniqueArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailAddressFindUniqueOrThrowArgs} args - Arguments to find a EmailAddress
     * @example
     * // Get one EmailAddress
     * const emailAddress = await prisma.emailAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressFindFirstArgs} args - Arguments to find a EmailAddress
     * @example
     * // Get one EmailAddress
     * const emailAddress = await prisma.emailAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailAddressFindFirstArgs>(args?: SelectSubset<T, EmailAddressFindFirstArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressFindFirstOrThrowArgs} args - Arguments to find a EmailAddress
     * @example
     * // Get one EmailAddress
     * const emailAddress = await prisma.emailAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailAddresses
     * const emailAddresses = await prisma.emailAddress.findMany()
     * 
     * // Get first 10 EmailAddresses
     * const emailAddresses = await prisma.emailAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailAddressWithIdOnly = await prisma.emailAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailAddressFindManyArgs>(args?: SelectSubset<T, EmailAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailAddress.
     * @param {EmailAddressCreateArgs} args - Arguments to create a EmailAddress.
     * @example
     * // Create one EmailAddress
     * const EmailAddress = await prisma.emailAddress.create({
     *   data: {
     *     // ... data to create a EmailAddress
     *   }
     * })
     * 
     */
    create<T extends EmailAddressCreateArgs>(args: SelectSubset<T, EmailAddressCreateArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailAddresses.
     * @param {EmailAddressCreateManyArgs} args - Arguments to create many EmailAddresses.
     * @example
     * // Create many EmailAddresses
     * const emailAddress = await prisma.emailAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailAddressCreateManyArgs>(args?: SelectSubset<T, EmailAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailAddresses and returns the data saved in the database.
     * @param {EmailAddressCreateManyAndReturnArgs} args - Arguments to create many EmailAddresses.
     * @example
     * // Create many EmailAddresses
     * const emailAddress = await prisma.emailAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailAddresses and only return the `id`
     * const emailAddressWithIdOnly = await prisma.emailAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailAddress.
     * @param {EmailAddressDeleteArgs} args - Arguments to delete one EmailAddress.
     * @example
     * // Delete one EmailAddress
     * const EmailAddress = await prisma.emailAddress.delete({
     *   where: {
     *     // ... filter to delete one EmailAddress
     *   }
     * })
     * 
     */
    delete<T extends EmailAddressDeleteArgs>(args: SelectSubset<T, EmailAddressDeleteArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailAddress.
     * @param {EmailAddressUpdateArgs} args - Arguments to update one EmailAddress.
     * @example
     * // Update one EmailAddress
     * const emailAddress = await prisma.emailAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailAddressUpdateArgs>(args: SelectSubset<T, EmailAddressUpdateArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailAddresses.
     * @param {EmailAddressDeleteManyArgs} args - Arguments to filter EmailAddresses to delete.
     * @example
     * // Delete a few EmailAddresses
     * const { count } = await prisma.emailAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailAddressDeleteManyArgs>(args?: SelectSubset<T, EmailAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailAddresses
     * const emailAddress = await prisma.emailAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailAddressUpdateManyArgs>(args: SelectSubset<T, EmailAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailAddresses and returns the data updated in the database.
     * @param {EmailAddressUpdateManyAndReturnArgs} args - Arguments to update many EmailAddresses.
     * @example
     * // Update many EmailAddresses
     * const emailAddress = await prisma.emailAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailAddresses and only return the `id`
     * const emailAddressWithIdOnly = await prisma.emailAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailAddress.
     * @param {EmailAddressUpsertArgs} args - Arguments to update or create a EmailAddress.
     * @example
     * // Update or create a EmailAddress
     * const emailAddress = await prisma.emailAddress.upsert({
     *   create: {
     *     // ... data to create a EmailAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailAddress we want to update
     *   }
     * })
     */
    upsert<T extends EmailAddressUpsertArgs>(args: SelectSubset<T, EmailAddressUpsertArgs<ExtArgs>>): Prisma__EmailAddressClient<$Result.GetResult<Prisma.$EmailAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressCountArgs} args - Arguments to filter EmailAddresses to count.
     * @example
     * // Count the number of EmailAddresses
     * const count = await prisma.emailAddress.count({
     *   where: {
     *     // ... the filter for the EmailAddresses we want to count
     *   }
     * })
    **/
    count<T extends EmailAddressCountArgs>(
      args?: Subset<T, EmailAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAddressAggregateArgs>(args: Subset<T, EmailAddressAggregateArgs>): Prisma.PrismaPromise<GetEmailAddressAggregateType<T>>

    /**
     * Group by EmailAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAddressGroupByArgs} args - Group by arguments.
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
      T extends EmailAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailAddressGroupByArgs['orderBy'] }
        : { orderBy?: EmailAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailAddress model
   */
  readonly fields: EmailAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentEmails<T extends EmailAddress$sentEmailsArgs<ExtArgs> = {}>(args?: Subset<T, EmailAddress$sentEmailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedTo<T extends EmailAddress$receivedToArgs<ExtArgs> = {}>(args?: Subset<T, EmailAddress$receivedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedCc<T extends EmailAddress$receivedCcArgs<ExtArgs> = {}>(args?: Subset<T, EmailAddress$receivedCcArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedBcc<T extends EmailAddress$receivedBccArgs<ExtArgs> = {}>(args?: Subset<T, EmailAddress$receivedBccArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replyToEmails<T extends EmailAddress$replyToEmailsArgs<ExtArgs> = {}>(args?: Subset<T, EmailAddress$replyToEmailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailAddress model
   */
  interface EmailAddressFieldRefs {
    readonly id: FieldRef<"EmailAddress", 'String'>
    readonly name: FieldRef<"EmailAddress", 'String'>
    readonly address: FieldRef<"EmailAddress", 'String'>
    readonly raw: FieldRef<"EmailAddress", 'String'>
    readonly accountId: FieldRef<"EmailAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailAddress findUnique
   */
  export type EmailAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * Filter, which EmailAddress to fetch.
     */
    where: EmailAddressWhereUniqueInput
  }

  /**
   * EmailAddress findUniqueOrThrow
   */
  export type EmailAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * Filter, which EmailAddress to fetch.
     */
    where: EmailAddressWhereUniqueInput
  }

  /**
   * EmailAddress findFirst
   */
  export type EmailAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * Filter, which EmailAddress to fetch.
     */
    where?: EmailAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAddresses to fetch.
     */
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailAddresses.
     */
    cursor?: EmailAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailAddresses.
     */
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * EmailAddress findFirstOrThrow
   */
  export type EmailAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * Filter, which EmailAddress to fetch.
     */
    where?: EmailAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAddresses to fetch.
     */
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailAddresses.
     */
    cursor?: EmailAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailAddresses.
     */
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * EmailAddress findMany
   */
  export type EmailAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * Filter, which EmailAddresses to fetch.
     */
    where?: EmailAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAddresses to fetch.
     */
    orderBy?: EmailAddressOrderByWithRelationInput | EmailAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailAddresses.
     */
    cursor?: EmailAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAddresses.
     */
    skip?: number
    distinct?: EmailAddressScalarFieldEnum | EmailAddressScalarFieldEnum[]
  }

  /**
   * EmailAddress create
   */
  export type EmailAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailAddress.
     */
    data: XOR<EmailAddressCreateInput, EmailAddressUncheckedCreateInput>
  }

  /**
   * EmailAddress createMany
   */
  export type EmailAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailAddresses.
     */
    data: EmailAddressCreateManyInput | EmailAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailAddress createManyAndReturn
   */
  export type EmailAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * The data used to create many EmailAddresses.
     */
    data: EmailAddressCreateManyInput | EmailAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailAddress update
   */
  export type EmailAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailAddress.
     */
    data: XOR<EmailAddressUpdateInput, EmailAddressUncheckedUpdateInput>
    /**
     * Choose, which EmailAddress to update.
     */
    where: EmailAddressWhereUniqueInput
  }

  /**
   * EmailAddress updateMany
   */
  export type EmailAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailAddresses.
     */
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyInput>
    /**
     * Filter which EmailAddresses to update
     */
    where?: EmailAddressWhereInput
    /**
     * Limit how many EmailAddresses to update.
     */
    limit?: number
  }

  /**
   * EmailAddress updateManyAndReturn
   */
  export type EmailAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * The data used to update EmailAddresses.
     */
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyInput>
    /**
     * Filter which EmailAddresses to update
     */
    where?: EmailAddressWhereInput
    /**
     * Limit how many EmailAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailAddress upsert
   */
  export type EmailAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailAddress to update in case it exists.
     */
    where: EmailAddressWhereUniqueInput
    /**
     * In case the EmailAddress found by the `where` argument doesn't exist, create a new EmailAddress with this data.
     */
    create: XOR<EmailAddressCreateInput, EmailAddressUncheckedCreateInput>
    /**
     * In case the EmailAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailAddressUpdateInput, EmailAddressUncheckedUpdateInput>
  }

  /**
   * EmailAddress delete
   */
  export type EmailAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
    /**
     * Filter which EmailAddress to delete.
     */
    where: EmailAddressWhereUniqueInput
  }

  /**
   * EmailAddress deleteMany
   */
  export type EmailAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAddresses to delete
     */
    where?: EmailAddressWhereInput
    /**
     * Limit how many EmailAddresses to delete.
     */
    limit?: number
  }

  /**
   * EmailAddress.sentEmails
   */
  export type EmailAddress$sentEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailAddress.receivedTo
   */
  export type EmailAddress$receivedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailAddress.receivedCc
   */
  export type EmailAddress$receivedCcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailAddress.receivedBcc
   */
  export type EmailAddress$receivedBccArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailAddress.replyToEmails
   */
  export type EmailAddress$replyToEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * EmailAddress without action
   */
  export type EmailAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAddress
     */
    select?: EmailAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAddress
     */
    omit?: EmailAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAddressInclude<ExtArgs> | null
  }


  /**
   * Model EmailAttachment
   */

  export type AggregateEmailAttachment = {
    _count: EmailAttachmentCountAggregateOutputType | null
    _avg: EmailAttachmentAvgAggregateOutputType | null
    _sum: EmailAttachmentSumAggregateOutputType | null
    _min: EmailAttachmentMinAggregateOutputType | null
    _max: EmailAttachmentMaxAggregateOutputType | null
  }

  export type EmailAttachmentAvgAggregateOutputType = {
    size: number | null
  }

  export type EmailAttachmentSumAggregateOutputType = {
    size: number | null
  }

  export type EmailAttachmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    mimeType: string | null
    size: number | null
    inline: boolean | null
    contentId: string | null
    content: string | null
    contentLocation: string | null
    emailId: string | null
  }

  export type EmailAttachmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mimeType: string | null
    size: number | null
    inline: boolean | null
    contentId: string | null
    content: string | null
    contentLocation: string | null
    emailId: string | null
  }

  export type EmailAttachmentCountAggregateOutputType = {
    id: number
    name: number
    mimeType: number
    size: number
    inline: number
    contentId: number
    content: number
    contentLocation: number
    emailId: number
    _all: number
  }


  export type EmailAttachmentAvgAggregateInputType = {
    size?: true
  }

  export type EmailAttachmentSumAggregateInputType = {
    size?: true
  }

  export type EmailAttachmentMinAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    size?: true
    inline?: true
    contentId?: true
    content?: true
    contentLocation?: true
    emailId?: true
  }

  export type EmailAttachmentMaxAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    size?: true
    inline?: true
    contentId?: true
    content?: true
    contentLocation?: true
    emailId?: true
  }

  export type EmailAttachmentCountAggregateInputType = {
    id?: true
    name?: true
    mimeType?: true
    size?: true
    inline?: true
    contentId?: true
    content?: true
    contentLocation?: true
    emailId?: true
    _all?: true
  }

  export type EmailAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAttachment to aggregate.
     */
    where?: EmailAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAttachments to fetch.
     */
    orderBy?: EmailAttachmentOrderByWithRelationInput | EmailAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailAttachments
    **/
    _count?: true | EmailAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailAttachmentMaxAggregateInputType
  }

  export type GetEmailAttachmentAggregateType<T extends EmailAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailAttachment[P]>
      : GetScalarType<T[P], AggregateEmailAttachment[P]>
  }




  export type EmailAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailAttachmentWhereInput
    orderBy?: EmailAttachmentOrderByWithAggregationInput | EmailAttachmentOrderByWithAggregationInput[]
    by: EmailAttachmentScalarFieldEnum[] | EmailAttachmentScalarFieldEnum
    having?: EmailAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailAttachmentCountAggregateInputType | true
    _avg?: EmailAttachmentAvgAggregateInputType
    _sum?: EmailAttachmentSumAggregateInputType
    _min?: EmailAttachmentMinAggregateInputType
    _max?: EmailAttachmentMaxAggregateInputType
  }

  export type EmailAttachmentGroupByOutputType = {
    id: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId: string | null
    content: string | null
    contentLocation: string | null
    emailId: string
    _count: EmailAttachmentCountAggregateOutputType | null
    _avg: EmailAttachmentAvgAggregateOutputType | null
    _sum: EmailAttachmentSumAggregateOutputType | null
    _min: EmailAttachmentMinAggregateOutputType | null
    _max: EmailAttachmentMaxAggregateOutputType | null
  }

  type GetEmailAttachmentGroupByPayload<T extends EmailAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], EmailAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type EmailAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    inline?: boolean
    contentId?: boolean
    content?: boolean
    contentLocation?: boolean
    emailId?: boolean
    Email?: boolean | EmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAttachment"]>

  export type EmailAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    inline?: boolean
    contentId?: boolean
    content?: boolean
    contentLocation?: boolean
    emailId?: boolean
    Email?: boolean | EmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAttachment"]>

  export type EmailAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    inline?: boolean
    contentId?: boolean
    content?: boolean
    contentLocation?: boolean
    emailId?: boolean
    Email?: boolean | EmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailAttachment"]>

  export type EmailAttachmentSelectScalar = {
    id?: boolean
    name?: boolean
    mimeType?: boolean
    size?: boolean
    inline?: boolean
    contentId?: boolean
    content?: boolean
    contentLocation?: boolean
    emailId?: boolean
  }

  export type EmailAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mimeType" | "size" | "inline" | "contentId" | "content" | "contentLocation" | "emailId", ExtArgs["result"]["emailAttachment"]>
  export type EmailAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Email?: boolean | EmailDefaultArgs<ExtArgs>
  }
  export type EmailAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Email?: boolean | EmailDefaultArgs<ExtArgs>
  }
  export type EmailAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Email?: boolean | EmailDefaultArgs<ExtArgs>
  }

  export type $EmailAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailAttachment"
    objects: {
      Email: Prisma.$EmailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mimeType: string
      size: number
      inline: boolean
      contentId: string | null
      content: string | null
      contentLocation: string | null
      emailId: string
    }, ExtArgs["result"]["emailAttachment"]>
    composites: {}
  }

  type EmailAttachmentGetPayload<S extends boolean | null | undefined | EmailAttachmentDefaultArgs> = $Result.GetResult<Prisma.$EmailAttachmentPayload, S>

  type EmailAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailAttachmentCountAggregateInputType | true
    }

  export interface EmailAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailAttachment'], meta: { name: 'EmailAttachment' } }
    /**
     * Find zero or one EmailAttachment that matches the filter.
     * @param {EmailAttachmentFindUniqueArgs} args - Arguments to find a EmailAttachment
     * @example
     * // Get one EmailAttachment
     * const emailAttachment = await prisma.emailAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailAttachmentFindUniqueArgs>(args: SelectSubset<T, EmailAttachmentFindUniqueArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailAttachmentFindUniqueOrThrowArgs} args - Arguments to find a EmailAttachment
     * @example
     * // Get one EmailAttachment
     * const emailAttachment = await prisma.emailAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentFindFirstArgs} args - Arguments to find a EmailAttachment
     * @example
     * // Get one EmailAttachment
     * const emailAttachment = await prisma.emailAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailAttachmentFindFirstArgs>(args?: SelectSubset<T, EmailAttachmentFindFirstArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentFindFirstOrThrowArgs} args - Arguments to find a EmailAttachment
     * @example
     * // Get one EmailAttachment
     * const emailAttachment = await prisma.emailAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailAttachments
     * const emailAttachments = await prisma.emailAttachment.findMany()
     * 
     * // Get first 10 EmailAttachments
     * const emailAttachments = await prisma.emailAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailAttachmentWithIdOnly = await prisma.emailAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailAttachmentFindManyArgs>(args?: SelectSubset<T, EmailAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailAttachment.
     * @param {EmailAttachmentCreateArgs} args - Arguments to create a EmailAttachment.
     * @example
     * // Create one EmailAttachment
     * const EmailAttachment = await prisma.emailAttachment.create({
     *   data: {
     *     // ... data to create a EmailAttachment
     *   }
     * })
     * 
     */
    create<T extends EmailAttachmentCreateArgs>(args: SelectSubset<T, EmailAttachmentCreateArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailAttachments.
     * @param {EmailAttachmentCreateManyArgs} args - Arguments to create many EmailAttachments.
     * @example
     * // Create many EmailAttachments
     * const emailAttachment = await prisma.emailAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailAttachmentCreateManyArgs>(args?: SelectSubset<T, EmailAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailAttachments and returns the data saved in the database.
     * @param {EmailAttachmentCreateManyAndReturnArgs} args - Arguments to create many EmailAttachments.
     * @example
     * // Create many EmailAttachments
     * const emailAttachment = await prisma.emailAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailAttachments and only return the `id`
     * const emailAttachmentWithIdOnly = await prisma.emailAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailAttachment.
     * @param {EmailAttachmentDeleteArgs} args - Arguments to delete one EmailAttachment.
     * @example
     * // Delete one EmailAttachment
     * const EmailAttachment = await prisma.emailAttachment.delete({
     *   where: {
     *     // ... filter to delete one EmailAttachment
     *   }
     * })
     * 
     */
    delete<T extends EmailAttachmentDeleteArgs>(args: SelectSubset<T, EmailAttachmentDeleteArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailAttachment.
     * @param {EmailAttachmentUpdateArgs} args - Arguments to update one EmailAttachment.
     * @example
     * // Update one EmailAttachment
     * const emailAttachment = await prisma.emailAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailAttachmentUpdateArgs>(args: SelectSubset<T, EmailAttachmentUpdateArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailAttachments.
     * @param {EmailAttachmentDeleteManyArgs} args - Arguments to filter EmailAttachments to delete.
     * @example
     * // Delete a few EmailAttachments
     * const { count } = await prisma.emailAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailAttachmentDeleteManyArgs>(args?: SelectSubset<T, EmailAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailAttachments
     * const emailAttachment = await prisma.emailAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailAttachmentUpdateManyArgs>(args: SelectSubset<T, EmailAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailAttachments and returns the data updated in the database.
     * @param {EmailAttachmentUpdateManyAndReturnArgs} args - Arguments to update many EmailAttachments.
     * @example
     * // Update many EmailAttachments
     * const emailAttachment = await prisma.emailAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailAttachments and only return the `id`
     * const emailAttachmentWithIdOnly = await prisma.emailAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailAttachment.
     * @param {EmailAttachmentUpsertArgs} args - Arguments to update or create a EmailAttachment.
     * @example
     * // Update or create a EmailAttachment
     * const emailAttachment = await prisma.emailAttachment.upsert({
     *   create: {
     *     // ... data to create a EmailAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailAttachment we want to update
     *   }
     * })
     */
    upsert<T extends EmailAttachmentUpsertArgs>(args: SelectSubset<T, EmailAttachmentUpsertArgs<ExtArgs>>): Prisma__EmailAttachmentClient<$Result.GetResult<Prisma.$EmailAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentCountArgs} args - Arguments to filter EmailAttachments to count.
     * @example
     * // Count the number of EmailAttachments
     * const count = await prisma.emailAttachment.count({
     *   where: {
     *     // ... the filter for the EmailAttachments we want to count
     *   }
     * })
    **/
    count<T extends EmailAttachmentCountArgs>(
      args?: Subset<T, EmailAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAttachmentAggregateArgs>(args: Subset<T, EmailAttachmentAggregateArgs>): Prisma.PrismaPromise<GetEmailAttachmentAggregateType<T>>

    /**
     * Group by EmailAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAttachmentGroupByArgs} args - Group by arguments.
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
      T extends EmailAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: EmailAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailAttachment model
   */
  readonly fields: EmailAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Email<T extends EmailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailDefaultArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmailAttachment model
   */
  interface EmailAttachmentFieldRefs {
    readonly id: FieldRef<"EmailAttachment", 'String'>
    readonly name: FieldRef<"EmailAttachment", 'String'>
    readonly mimeType: FieldRef<"EmailAttachment", 'String'>
    readonly size: FieldRef<"EmailAttachment", 'Int'>
    readonly inline: FieldRef<"EmailAttachment", 'Boolean'>
    readonly contentId: FieldRef<"EmailAttachment", 'String'>
    readonly content: FieldRef<"EmailAttachment", 'String'>
    readonly contentLocation: FieldRef<"EmailAttachment", 'String'>
    readonly emailId: FieldRef<"EmailAttachment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailAttachment findUnique
   */
  export type EmailAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which EmailAttachment to fetch.
     */
    where: EmailAttachmentWhereUniqueInput
  }

  /**
   * EmailAttachment findUniqueOrThrow
   */
  export type EmailAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which EmailAttachment to fetch.
     */
    where: EmailAttachmentWhereUniqueInput
  }

  /**
   * EmailAttachment findFirst
   */
  export type EmailAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which EmailAttachment to fetch.
     */
    where?: EmailAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAttachments to fetch.
     */
    orderBy?: EmailAttachmentOrderByWithRelationInput | EmailAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailAttachments.
     */
    cursor?: EmailAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailAttachments.
     */
    distinct?: EmailAttachmentScalarFieldEnum | EmailAttachmentScalarFieldEnum[]
  }

  /**
   * EmailAttachment findFirstOrThrow
   */
  export type EmailAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which EmailAttachment to fetch.
     */
    where?: EmailAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAttachments to fetch.
     */
    orderBy?: EmailAttachmentOrderByWithRelationInput | EmailAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailAttachments.
     */
    cursor?: EmailAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailAttachments.
     */
    distinct?: EmailAttachmentScalarFieldEnum | EmailAttachmentScalarFieldEnum[]
  }

  /**
   * EmailAttachment findMany
   */
  export type EmailAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which EmailAttachments to fetch.
     */
    where?: EmailAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailAttachments to fetch.
     */
    orderBy?: EmailAttachmentOrderByWithRelationInput | EmailAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailAttachments.
     */
    cursor?: EmailAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailAttachments.
     */
    skip?: number
    distinct?: EmailAttachmentScalarFieldEnum | EmailAttachmentScalarFieldEnum[]
  }

  /**
   * EmailAttachment create
   */
  export type EmailAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailAttachment.
     */
    data: XOR<EmailAttachmentCreateInput, EmailAttachmentUncheckedCreateInput>
  }

  /**
   * EmailAttachment createMany
   */
  export type EmailAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailAttachments.
     */
    data: EmailAttachmentCreateManyInput | EmailAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailAttachment createManyAndReturn
   */
  export type EmailAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many EmailAttachments.
     */
    data: EmailAttachmentCreateManyInput | EmailAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailAttachment update
   */
  export type EmailAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailAttachment.
     */
    data: XOR<EmailAttachmentUpdateInput, EmailAttachmentUncheckedUpdateInput>
    /**
     * Choose, which EmailAttachment to update.
     */
    where: EmailAttachmentWhereUniqueInput
  }

  /**
   * EmailAttachment updateMany
   */
  export type EmailAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailAttachments.
     */
    data: XOR<EmailAttachmentUpdateManyMutationInput, EmailAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which EmailAttachments to update
     */
    where?: EmailAttachmentWhereInput
    /**
     * Limit how many EmailAttachments to update.
     */
    limit?: number
  }

  /**
   * EmailAttachment updateManyAndReturn
   */
  export type EmailAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update EmailAttachments.
     */
    data: XOR<EmailAttachmentUpdateManyMutationInput, EmailAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which EmailAttachments to update
     */
    where?: EmailAttachmentWhereInput
    /**
     * Limit how many EmailAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailAttachment upsert
   */
  export type EmailAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailAttachment to update in case it exists.
     */
    where: EmailAttachmentWhereUniqueInput
    /**
     * In case the EmailAttachment found by the `where` argument doesn't exist, create a new EmailAttachment with this data.
     */
    create: XOR<EmailAttachmentCreateInput, EmailAttachmentUncheckedCreateInput>
    /**
     * In case the EmailAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailAttachmentUpdateInput, EmailAttachmentUncheckedUpdateInput>
  }

  /**
   * EmailAttachment delete
   */
  export type EmailAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
    /**
     * Filter which EmailAttachment to delete.
     */
    where: EmailAttachmentWhereUniqueInput
  }

  /**
   * EmailAttachment deleteMany
   */
  export type EmailAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailAttachments to delete
     */
    where?: EmailAttachmentWhereInput
    /**
     * Limit how many EmailAttachments to delete.
     */
    limit?: number
  }

  /**
   * EmailAttachment without action
   */
  export type EmailAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailAttachment
     */
    select?: EmailAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailAttachment
     */
    omit?: EmailAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailAttachmentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    imageUrl: 'imageUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    emailAddress: 'emailAddress',
    accessToken: 'accessToken',
    nextDeltaToken: 'nextDeltaToken',
    oramaIndex: 'oramaIndex'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    lastMessageDate: 'lastMessageDate',
    participantIds: 'participantIds',
    accountId: 'accountId',
    done: 'done',
    inboxStatus: 'inboxStatus',
    draftStatus: 'draftStatus',
    sentStatus: 'sentStatus'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    threadId: 'threadId',
    createdTime: 'createdTime',
    lastModifiedTime: 'lastModifiedTime',
    sentAt: 'sentAt',
    receivedAt: 'receivedAt',
    internetMessageId: 'internetMessageId',
    subject: 'subject',
    sysLabels: 'sysLabels',
    keywords: 'keywords',
    sysClassifications: 'sysClassifications',
    sensitivity: 'sensitivity',
    meetingMessageMethod: 'meetingMessageMethod',
    fromId: 'fromId',
    hasAttachments: 'hasAttachments',
    body: 'body',
    bodySnippet: 'bodySnippet',
    inReplyTo: 'inReplyTo',
    references: 'references',
    threadIndex: 'threadIndex',
    internetHeaders: 'internetHeaders',
    nativeProperties: 'nativeProperties',
    folderId: 'folderId',
    omitted: 'omitted',
    emailLabel: 'emailLabel'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const EmailAddressScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    raw: 'raw',
    accountId: 'accountId'
  };

  export type EmailAddressScalarFieldEnum = (typeof EmailAddressScalarFieldEnum)[keyof typeof EmailAddressScalarFieldEnum]


  export const EmailAttachmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mimeType: 'mimeType',
    size: 'size',
    inline: 'inline',
    contentId: 'contentId',
    content: 'content',
    contentLocation: 'contentLocation',
    emailId: 'emailId'
  };

  export type EmailAttachmentScalarFieldEnum = (typeof EmailAttachmentScalarFieldEnum)[keyof typeof EmailAttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Sensitivity'
   */
  export type EnumSensitivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sensitivity'>
    


  /**
   * Reference to a field of type 'Sensitivity[]'
   */
  export type ListEnumSensitivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sensitivity[]'>
    


  /**
   * Reference to a field of type 'MeetingMessageMethod'
   */
  export type EnumMeetingMessageMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingMessageMethod'>
    


  /**
   * Reference to a field of type 'MeetingMessageMethod[]'
   */
  export type ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingMessageMethod[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'EmailLabel'
   */
  export type EnumEmailLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailLabel'>
    


  /**
   * Reference to a field of type 'EmailLabel[]'
   */
  export type ListEnumEmailLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailLabel[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    Accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    Accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    Accounts?: AccountListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    emailAddress?: StringFilter<"Account"> | string
    accessToken?: StringFilter<"Account"> | string
    nextDeltaToken?: StringNullableFilter<"Account"> | string | null
    oramaIndex?: JsonNullableFilter<"Account">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    threads?: ThreadListRelationFilter
    emailAddresses?: EmailAddressListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emailAddress?: SortOrder
    accessToken?: SortOrder
    nextDeltaToken?: SortOrderInput | SortOrder
    oramaIndex?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    threads?: ThreadOrderByRelationAggregateInput
    emailAddresses?: EmailAddressOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_emailAddress?: AccountUserIdEmailAddressCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    emailAddress?: StringFilter<"Account"> | string
    accessToken?: StringFilter<"Account"> | string
    nextDeltaToken?: StringNullableFilter<"Account"> | string | null
    oramaIndex?: JsonNullableFilter<"Account">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    threads?: ThreadListRelationFilter
    emailAddresses?: EmailAddressListRelationFilter
  }, "id" | "userId_emailAddress">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emailAddress?: SortOrder
    accessToken?: SortOrder
    nextDeltaToken?: SortOrderInput | SortOrder
    oramaIndex?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    emailAddress?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringWithAggregatesFilter<"Account"> | string
    nextDeltaToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    oramaIndex?: JsonNullableWithAggregatesFilter<"Account">
  }

  export type ThreadWhereInput = {
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    id?: StringFilter<"Thread"> | string
    subject?: StringFilter<"Thread"> | string
    lastMessageDate?: DateTimeFilter<"Thread"> | Date | string
    participantIds?: StringNullableListFilter<"Thread">
    accountId?: StringFilter<"Thread"> | string
    done?: BoolFilter<"Thread"> | boolean
    inboxStatus?: BoolFilter<"Thread"> | boolean
    draftStatus?: BoolFilter<"Thread"> | boolean
    sentStatus?: BoolFilter<"Thread"> | boolean
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    emails?: EmailListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    lastMessageDate?: SortOrder
    participantIds?: SortOrder
    accountId?: SortOrder
    done?: SortOrder
    inboxStatus?: SortOrder
    draftStatus?: SortOrder
    sentStatus?: SortOrder
    account?: AccountOrderByWithRelationInput
    emails?: EmailOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    subject?: StringFilter<"Thread"> | string
    lastMessageDate?: DateTimeFilter<"Thread"> | Date | string
    participantIds?: StringNullableListFilter<"Thread">
    accountId?: StringFilter<"Thread"> | string
    done?: BoolFilter<"Thread"> | boolean
    inboxStatus?: BoolFilter<"Thread"> | boolean
    draftStatus?: BoolFilter<"Thread"> | boolean
    sentStatus?: BoolFilter<"Thread"> | boolean
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    emails?: EmailListRelationFilter
  }, "id">

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    lastMessageDate?: SortOrder
    participantIds?: SortOrder
    accountId?: SortOrder
    done?: SortOrder
    inboxStatus?: SortOrder
    draftStatus?: SortOrder
    sentStatus?: SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    OR?: ThreadScalarWhereWithAggregatesInput[]
    NOT?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Thread"> | string
    subject?: StringWithAggregatesFilter<"Thread"> | string
    lastMessageDate?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    participantIds?: StringNullableListFilter<"Thread">
    accountId?: StringWithAggregatesFilter<"Thread"> | string
    done?: BoolWithAggregatesFilter<"Thread"> | boolean
    inboxStatus?: BoolWithAggregatesFilter<"Thread"> | boolean
    draftStatus?: BoolWithAggregatesFilter<"Thread"> | boolean
    sentStatus?: BoolWithAggregatesFilter<"Thread"> | boolean
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: StringFilter<"Email"> | string
    threadId?: StringFilter<"Email"> | string
    createdTime?: DateTimeFilter<"Email"> | Date | string
    lastModifiedTime?: DateTimeFilter<"Email"> | Date | string
    sentAt?: DateTimeFilter<"Email"> | Date | string
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    internetMessageId?: StringFilter<"Email"> | string
    subject?: StringFilter<"Email"> | string
    sysLabels?: StringNullableListFilter<"Email">
    keywords?: StringNullableListFilter<"Email">
    sysClassifications?: StringNullableListFilter<"Email">
    sensitivity?: EnumSensitivityFilter<"Email"> | $Enums.Sensitivity
    meetingMessageMethod?: EnumMeetingMessageMethodNullableFilter<"Email"> | $Enums.MeetingMessageMethod | null
    fromId?: StringFilter<"Email"> | string
    hasAttachments?: BoolFilter<"Email"> | boolean
    body?: StringNullableFilter<"Email"> | string | null
    bodySnippet?: StringNullableFilter<"Email"> | string | null
    inReplyTo?: StringNullableFilter<"Email"> | string | null
    references?: StringNullableFilter<"Email"> | string | null
    threadIndex?: StringNullableFilter<"Email"> | string | null
    internetHeaders?: JsonNullableListFilter<"Email">
    nativeProperties?: JsonNullableFilter<"Email">
    folderId?: StringNullableFilter<"Email"> | string | null
    omitted?: StringNullableListFilter<"Email">
    emailLabel?: EnumEmailLabelFilter<"Email"> | $Enums.EmailLabel
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    from?: XOR<EmailAddressScalarRelationFilter, EmailAddressWhereInput>
    to?: EmailAddressListRelationFilter
    cc?: EmailAddressListRelationFilter
    bcc?: EmailAddressListRelationFilter
    replyTo?: EmailAddressListRelationFilter
    attachments?: EmailAttachmentListRelationFilter
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    threadId?: SortOrder
    createdTime?: SortOrder
    lastModifiedTime?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    internetMessageId?: SortOrder
    subject?: SortOrder
    sysLabels?: SortOrder
    keywords?: SortOrder
    sysClassifications?: SortOrder
    sensitivity?: SortOrder
    meetingMessageMethod?: SortOrderInput | SortOrder
    fromId?: SortOrder
    hasAttachments?: SortOrder
    body?: SortOrderInput | SortOrder
    bodySnippet?: SortOrderInput | SortOrder
    inReplyTo?: SortOrderInput | SortOrder
    references?: SortOrderInput | SortOrder
    threadIndex?: SortOrderInput | SortOrder
    internetHeaders?: SortOrder
    nativeProperties?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    omitted?: SortOrder
    emailLabel?: SortOrder
    thread?: ThreadOrderByWithRelationInput
    from?: EmailAddressOrderByWithRelationInput
    to?: EmailAddressOrderByRelationAggregateInput
    cc?: EmailAddressOrderByRelationAggregateInput
    bcc?: EmailAddressOrderByRelationAggregateInput
    replyTo?: EmailAddressOrderByRelationAggregateInput
    attachments?: EmailAttachmentOrderByRelationAggregateInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    threadId?: StringFilter<"Email"> | string
    createdTime?: DateTimeFilter<"Email"> | Date | string
    lastModifiedTime?: DateTimeFilter<"Email"> | Date | string
    sentAt?: DateTimeFilter<"Email"> | Date | string
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    internetMessageId?: StringFilter<"Email"> | string
    subject?: StringFilter<"Email"> | string
    sysLabels?: StringNullableListFilter<"Email">
    keywords?: StringNullableListFilter<"Email">
    sysClassifications?: StringNullableListFilter<"Email">
    sensitivity?: EnumSensitivityFilter<"Email"> | $Enums.Sensitivity
    meetingMessageMethod?: EnumMeetingMessageMethodNullableFilter<"Email"> | $Enums.MeetingMessageMethod | null
    fromId?: StringFilter<"Email"> | string
    hasAttachments?: BoolFilter<"Email"> | boolean
    body?: StringNullableFilter<"Email"> | string | null
    bodySnippet?: StringNullableFilter<"Email"> | string | null
    inReplyTo?: StringNullableFilter<"Email"> | string | null
    references?: StringNullableFilter<"Email"> | string | null
    threadIndex?: StringNullableFilter<"Email"> | string | null
    internetHeaders?: JsonNullableListFilter<"Email">
    nativeProperties?: JsonNullableFilter<"Email">
    folderId?: StringNullableFilter<"Email"> | string | null
    omitted?: StringNullableListFilter<"Email">
    emailLabel?: EnumEmailLabelFilter<"Email"> | $Enums.EmailLabel
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    from?: XOR<EmailAddressScalarRelationFilter, EmailAddressWhereInput>
    to?: EmailAddressListRelationFilter
    cc?: EmailAddressListRelationFilter
    bcc?: EmailAddressListRelationFilter
    replyTo?: EmailAddressListRelationFilter
    attachments?: EmailAttachmentListRelationFilter
  }, "id">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    threadId?: SortOrder
    createdTime?: SortOrder
    lastModifiedTime?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    internetMessageId?: SortOrder
    subject?: SortOrder
    sysLabels?: SortOrder
    keywords?: SortOrder
    sysClassifications?: SortOrder
    sensitivity?: SortOrder
    meetingMessageMethod?: SortOrderInput | SortOrder
    fromId?: SortOrder
    hasAttachments?: SortOrder
    body?: SortOrderInput | SortOrder
    bodySnippet?: SortOrderInput | SortOrder
    inReplyTo?: SortOrderInput | SortOrder
    references?: SortOrderInput | SortOrder
    threadIndex?: SortOrderInput | SortOrder
    internetHeaders?: SortOrder
    nativeProperties?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    omitted?: SortOrder
    emailLabel?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Email"> | string
    threadId?: StringWithAggregatesFilter<"Email"> | string
    createdTime?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    lastModifiedTime?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    sentAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    receivedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    internetMessageId?: StringWithAggregatesFilter<"Email"> | string
    subject?: StringWithAggregatesFilter<"Email"> | string
    sysLabels?: StringNullableListFilter<"Email">
    keywords?: StringNullableListFilter<"Email">
    sysClassifications?: StringNullableListFilter<"Email">
    sensitivity?: EnumSensitivityWithAggregatesFilter<"Email"> | $Enums.Sensitivity
    meetingMessageMethod?: EnumMeetingMessageMethodNullableWithAggregatesFilter<"Email"> | $Enums.MeetingMessageMethod | null
    fromId?: StringWithAggregatesFilter<"Email"> | string
    hasAttachments?: BoolWithAggregatesFilter<"Email"> | boolean
    body?: StringNullableWithAggregatesFilter<"Email"> | string | null
    bodySnippet?: StringNullableWithAggregatesFilter<"Email"> | string | null
    inReplyTo?: StringNullableWithAggregatesFilter<"Email"> | string | null
    references?: StringNullableWithAggregatesFilter<"Email"> | string | null
    threadIndex?: StringNullableWithAggregatesFilter<"Email"> | string | null
    internetHeaders?: JsonNullableListFilter<"Email">
    nativeProperties?: JsonNullableWithAggregatesFilter<"Email">
    folderId?: StringNullableWithAggregatesFilter<"Email"> | string | null
    omitted?: StringNullableListFilter<"Email">
    emailLabel?: EnumEmailLabelWithAggregatesFilter<"Email"> | $Enums.EmailLabel
  }

  export type EmailAddressWhereInput = {
    AND?: EmailAddressWhereInput | EmailAddressWhereInput[]
    OR?: EmailAddressWhereInput[]
    NOT?: EmailAddressWhereInput | EmailAddressWhereInput[]
    id?: StringFilter<"EmailAddress"> | string
    name?: StringNullableFilter<"EmailAddress"> | string | null
    address?: StringFilter<"EmailAddress"> | string
    raw?: StringNullableFilter<"EmailAddress"> | string | null
    accountId?: StringFilter<"EmailAddress"> | string
    sentEmails?: EmailListRelationFilter
    receivedTo?: EmailListRelationFilter
    receivedCc?: EmailListRelationFilter
    receivedBcc?: EmailListRelationFilter
    replyToEmails?: EmailListRelationFilter
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type EmailAddressOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrder
    raw?: SortOrderInput | SortOrder
    accountId?: SortOrder
    sentEmails?: EmailOrderByRelationAggregateInput
    receivedTo?: EmailOrderByRelationAggregateInput
    receivedCc?: EmailOrderByRelationAggregateInput
    receivedBcc?: EmailOrderByRelationAggregateInput
    replyToEmails?: EmailOrderByRelationAggregateInput
    account?: AccountOrderByWithRelationInput
  }

  export type EmailAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId_address?: EmailAddressAccountIdAddressCompoundUniqueInput
    AND?: EmailAddressWhereInput | EmailAddressWhereInput[]
    OR?: EmailAddressWhereInput[]
    NOT?: EmailAddressWhereInput | EmailAddressWhereInput[]
    name?: StringNullableFilter<"EmailAddress"> | string | null
    address?: StringFilter<"EmailAddress"> | string
    raw?: StringNullableFilter<"EmailAddress"> | string | null
    accountId?: StringFilter<"EmailAddress"> | string
    sentEmails?: EmailListRelationFilter
    receivedTo?: EmailListRelationFilter
    receivedCc?: EmailListRelationFilter
    receivedBcc?: EmailListRelationFilter
    replyToEmails?: EmailListRelationFilter
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id" | "accountId_address">

  export type EmailAddressOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrder
    raw?: SortOrderInput | SortOrder
    accountId?: SortOrder
    _count?: EmailAddressCountOrderByAggregateInput
    _max?: EmailAddressMaxOrderByAggregateInput
    _min?: EmailAddressMinOrderByAggregateInput
  }

  export type EmailAddressScalarWhereWithAggregatesInput = {
    AND?: EmailAddressScalarWhereWithAggregatesInput | EmailAddressScalarWhereWithAggregatesInput[]
    OR?: EmailAddressScalarWhereWithAggregatesInput[]
    NOT?: EmailAddressScalarWhereWithAggregatesInput | EmailAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailAddress"> | string
    name?: StringNullableWithAggregatesFilter<"EmailAddress"> | string | null
    address?: StringWithAggregatesFilter<"EmailAddress"> | string
    raw?: StringNullableWithAggregatesFilter<"EmailAddress"> | string | null
    accountId?: StringWithAggregatesFilter<"EmailAddress"> | string
  }

  export type EmailAttachmentWhereInput = {
    AND?: EmailAttachmentWhereInput | EmailAttachmentWhereInput[]
    OR?: EmailAttachmentWhereInput[]
    NOT?: EmailAttachmentWhereInput | EmailAttachmentWhereInput[]
    id?: StringFilter<"EmailAttachment"> | string
    name?: StringFilter<"EmailAttachment"> | string
    mimeType?: StringFilter<"EmailAttachment"> | string
    size?: IntFilter<"EmailAttachment"> | number
    inline?: BoolFilter<"EmailAttachment"> | boolean
    contentId?: StringNullableFilter<"EmailAttachment"> | string | null
    content?: StringNullableFilter<"EmailAttachment"> | string | null
    contentLocation?: StringNullableFilter<"EmailAttachment"> | string | null
    emailId?: StringFilter<"EmailAttachment"> | string
    Email?: XOR<EmailScalarRelationFilter, EmailWhereInput>
  }

  export type EmailAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    inline?: SortOrder
    contentId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    contentLocation?: SortOrderInput | SortOrder
    emailId?: SortOrder
    Email?: EmailOrderByWithRelationInput
  }

  export type EmailAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailAttachmentWhereInput | EmailAttachmentWhereInput[]
    OR?: EmailAttachmentWhereInput[]
    NOT?: EmailAttachmentWhereInput | EmailAttachmentWhereInput[]
    name?: StringFilter<"EmailAttachment"> | string
    mimeType?: StringFilter<"EmailAttachment"> | string
    size?: IntFilter<"EmailAttachment"> | number
    inline?: BoolFilter<"EmailAttachment"> | boolean
    contentId?: StringNullableFilter<"EmailAttachment"> | string | null
    content?: StringNullableFilter<"EmailAttachment"> | string | null
    contentLocation?: StringNullableFilter<"EmailAttachment"> | string | null
    emailId?: StringFilter<"EmailAttachment"> | string
    Email?: XOR<EmailScalarRelationFilter, EmailWhereInput>
  }, "id">

  export type EmailAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    inline?: SortOrder
    contentId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    contentLocation?: SortOrderInput | SortOrder
    emailId?: SortOrder
    _count?: EmailAttachmentCountOrderByAggregateInput
    _avg?: EmailAttachmentAvgOrderByAggregateInput
    _max?: EmailAttachmentMaxOrderByAggregateInput
    _min?: EmailAttachmentMinOrderByAggregateInput
    _sum?: EmailAttachmentSumOrderByAggregateInput
  }

  export type EmailAttachmentScalarWhereWithAggregatesInput = {
    AND?: EmailAttachmentScalarWhereWithAggregatesInput | EmailAttachmentScalarWhereWithAggregatesInput[]
    OR?: EmailAttachmentScalarWhereWithAggregatesInput[]
    NOT?: EmailAttachmentScalarWhereWithAggregatesInput | EmailAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailAttachment"> | string
    name?: StringWithAggregatesFilter<"EmailAttachment"> | string
    mimeType?: StringWithAggregatesFilter<"EmailAttachment"> | string
    size?: IntWithAggregatesFilter<"EmailAttachment"> | number
    inline?: BoolWithAggregatesFilter<"EmailAttachment"> | boolean
    contentId?: StringNullableWithAggregatesFilter<"EmailAttachment"> | string | null
    content?: StringNullableWithAggregatesFilter<"EmailAttachment"> | string | null
    contentLocation?: StringNullableWithAggregatesFilter<"EmailAttachment"> | string | null
    emailId?: StringWithAggregatesFilter<"EmailAttachment"> | string
  }

  export type UserCreateInput = {
    id: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    Accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
    Accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutAccountsInput
    threads?: ThreadCreateNestedManyWithoutAccountInput
    emailAddresses?: EmailAddressCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUncheckedCreateNestedManyWithoutAccountInput
    emailAddresses?: EmailAddressUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    threads?: ThreadUpdateManyWithoutAccountNestedInput
    emailAddresses?: EmailAddressUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUncheckedUpdateManyWithoutAccountNestedInput
    emailAddresses?: EmailAddressUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ThreadCreateInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    account: AccountCreateNestedOneWithoutThreadsInput
    emails?: EmailCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    accountId: string
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    emails?: EmailUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneRequiredWithoutThreadsNestedInput
    emails?: EmailUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    accountId?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
    emails?: EmailUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadCreateManyInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    accountId: string
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
  }

  export type ThreadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThreadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    accountId?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailCreateInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailCreateManyInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailAddressCreateInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailCreateNestedManyWithoutFromInput
    receivedTo?: EmailCreateNestedManyWithoutToInput
    receivedCc?: EmailCreateNestedManyWithoutCcInput
    receivedBcc?: EmailCreateNestedManyWithoutBccInput
    replyToEmails?: EmailCreateNestedManyWithoutReplyToInput
    account: AccountCreateNestedOneWithoutEmailAddressesInput
  }

  export type EmailAddressUncheckedCreateInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
    sentEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    receivedTo?: EmailUncheckedCreateNestedManyWithoutToInput
    receivedCc?: EmailUncheckedCreateNestedManyWithoutCcInput
    receivedBcc?: EmailUncheckedCreateNestedManyWithoutBccInput
    replyToEmails?: EmailUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUpdateManyWithoutToNestedInput
    receivedCc?: EmailUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUpdateManyWithoutReplyToNestedInput
    account?: AccountUpdateOneRequiredWithoutEmailAddressesNestedInput
  }

  export type EmailAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    sentEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUncheckedUpdateManyWithoutToNestedInput
    receivedCc?: EmailUncheckedUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUncheckedUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressCreateManyInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
  }

  export type EmailAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailAttachmentCreateInput = {
    id?: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId?: string | null
    content?: string | null
    contentLocation?: string | null
    Email: EmailCreateNestedOneWithoutAttachmentsInput
  }

  export type EmailAttachmentUncheckedCreateInput = {
    id?: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId?: string | null
    content?: string | null
    contentLocation?: string | null
    emailId: string
  }

  export type EmailAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: EmailUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type EmailAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    emailId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailAttachmentCreateManyInput = {
    id?: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId?: string | null
    content?: string | null
    contentLocation?: string | null
    emailId: string
  }

  export type EmailAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    emailId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type EmailAddressListRelationFilter = {
    every?: EmailAddressWhereInput
    some?: EmailAddressWhereInput
    none?: EmailAddressWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountUserIdEmailAddressCompoundUniqueInput = {
    userId: string
    emailAddress: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emailAddress?: SortOrder
    accessToken?: SortOrder
    nextDeltaToken?: SortOrder
    oramaIndex?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emailAddress?: SortOrder
    accessToken?: SortOrder
    nextDeltaToken?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    emailAddress?: SortOrder
    accessToken?: SortOrder
    nextDeltaToken?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    lastMessageDate?: SortOrder
    participantIds?: SortOrder
    accountId?: SortOrder
    done?: SortOrder
    inboxStatus?: SortOrder
    draftStatus?: SortOrder
    sentStatus?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    lastMessageDate?: SortOrder
    accountId?: SortOrder
    done?: SortOrder
    inboxStatus?: SortOrder
    draftStatus?: SortOrder
    sentStatus?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    lastMessageDate?: SortOrder
    accountId?: SortOrder
    done?: SortOrder
    inboxStatus?: SortOrder
    draftStatus?: SortOrder
    sentStatus?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSensitivityFilter<$PrismaModel = never> = {
    equals?: $Enums.Sensitivity | EnumSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityFilter<$PrismaModel> | $Enums.Sensitivity
  }

  export type EnumMeetingMessageMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingMessageMethod | EnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel> | $Enums.MeetingMessageMethod | null
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumEmailLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailLabel | EnumEmailLabelFieldRefInput<$PrismaModel>
    in?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailLabelFilter<$PrismaModel> | $Enums.EmailLabel
  }

  export type ThreadScalarRelationFilter = {
    is?: ThreadWhereInput
    isNot?: ThreadWhereInput
  }

  export type EmailAddressScalarRelationFilter = {
    is?: EmailAddressWhereInput
    isNot?: EmailAddressWhereInput
  }

  export type EmailAttachmentListRelationFilter = {
    every?: EmailAttachmentWhereInput
    some?: EmailAttachmentWhereInput
    none?: EmailAttachmentWhereInput
  }

  export type EmailAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    createdTime?: SortOrder
    lastModifiedTime?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    internetMessageId?: SortOrder
    subject?: SortOrder
    sysLabels?: SortOrder
    keywords?: SortOrder
    sysClassifications?: SortOrder
    sensitivity?: SortOrder
    meetingMessageMethod?: SortOrder
    fromId?: SortOrder
    hasAttachments?: SortOrder
    body?: SortOrder
    bodySnippet?: SortOrder
    inReplyTo?: SortOrder
    references?: SortOrder
    threadIndex?: SortOrder
    internetHeaders?: SortOrder
    nativeProperties?: SortOrder
    folderId?: SortOrder
    omitted?: SortOrder
    emailLabel?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    createdTime?: SortOrder
    lastModifiedTime?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    internetMessageId?: SortOrder
    subject?: SortOrder
    sensitivity?: SortOrder
    meetingMessageMethod?: SortOrder
    fromId?: SortOrder
    hasAttachments?: SortOrder
    body?: SortOrder
    bodySnippet?: SortOrder
    inReplyTo?: SortOrder
    references?: SortOrder
    threadIndex?: SortOrder
    folderId?: SortOrder
    emailLabel?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    threadId?: SortOrder
    createdTime?: SortOrder
    lastModifiedTime?: SortOrder
    sentAt?: SortOrder
    receivedAt?: SortOrder
    internetMessageId?: SortOrder
    subject?: SortOrder
    sensitivity?: SortOrder
    meetingMessageMethod?: SortOrder
    fromId?: SortOrder
    hasAttachments?: SortOrder
    body?: SortOrder
    bodySnippet?: SortOrder
    inReplyTo?: SortOrder
    references?: SortOrder
    threadIndex?: SortOrder
    folderId?: SortOrder
    emailLabel?: SortOrder
  }

  export type EnumSensitivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sensitivity | EnumSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityWithAggregatesFilter<$PrismaModel> | $Enums.Sensitivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSensitivityFilter<$PrismaModel>
    _max?: NestedEnumSensitivityFilter<$PrismaModel>
  }

  export type EnumMeetingMessageMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingMessageMethod | EnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeetingMessageMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.MeetingMessageMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel>
  }

  export type EnumEmailLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailLabel | EnumEmailLabelFieldRefInput<$PrismaModel>
    in?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailLabelWithAggregatesFilter<$PrismaModel> | $Enums.EmailLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailLabelFilter<$PrismaModel>
    _max?: NestedEnumEmailLabelFilter<$PrismaModel>
  }

  export type EmailAddressAccountIdAddressCompoundUniqueInput = {
    accountId: string
    address: string
  }

  export type EmailAddressCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    raw?: SortOrder
    accountId?: SortOrder
  }

  export type EmailAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    raw?: SortOrder
    accountId?: SortOrder
  }

  export type EmailAddressMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    raw?: SortOrder
    accountId?: SortOrder
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

  export type EmailScalarRelationFilter = {
    is?: EmailWhereInput
    isNot?: EmailWhereInput
  }

  export type EmailAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    inline?: SortOrder
    contentId?: SortOrder
    content?: SortOrder
    contentLocation?: SortOrder
    emailId?: SortOrder
  }

  export type EmailAttachmentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EmailAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    inline?: SortOrder
    contentId?: SortOrder
    content?: SortOrder
    contentLocation?: SortOrder
    emailId?: SortOrder
  }

  export type EmailAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    inline?: SortOrder
    contentId?: SortOrder
    content?: SortOrder
    contentLocation?: SortOrder
    emailId?: SortOrder
  }

  export type EmailAttachmentSumOrderByAggregateInput = {
    size?: SortOrder
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

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedManyWithoutAccountInput = {
    create?: XOR<ThreadCreateWithoutAccountInput, ThreadUncheckedCreateWithoutAccountInput> | ThreadCreateWithoutAccountInput[] | ThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAccountInput | ThreadCreateOrConnectWithoutAccountInput[]
    createMany?: ThreadCreateManyAccountInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type EmailAddressCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmailAddressCreateWithoutAccountInput, EmailAddressUncheckedCreateWithoutAccountInput> | EmailAddressCreateWithoutAccountInput[] | EmailAddressUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutAccountInput | EmailAddressCreateOrConnectWithoutAccountInput[]
    createMany?: EmailAddressCreateManyAccountInputEnvelope
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ThreadCreateWithoutAccountInput, ThreadUncheckedCreateWithoutAccountInput> | ThreadCreateWithoutAccountInput[] | ThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAccountInput | ThreadCreateOrConnectWithoutAccountInput[]
    createMany?: ThreadCreateManyAccountInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type EmailAddressUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmailAddressCreateWithoutAccountInput, EmailAddressUncheckedCreateWithoutAccountInput> | EmailAddressCreateWithoutAccountInput[] | EmailAddressUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutAccountInput | EmailAddressCreateOrConnectWithoutAccountInput[]
    createMany?: EmailAddressCreateManyAccountInputEnvelope
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type ThreadUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ThreadCreateWithoutAccountInput, ThreadUncheckedCreateWithoutAccountInput> | ThreadCreateWithoutAccountInput[] | ThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAccountInput | ThreadCreateOrConnectWithoutAccountInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAccountInput | ThreadUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ThreadCreateManyAccountInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAccountInput | ThreadUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAccountInput | ThreadUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type EmailAddressUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmailAddressCreateWithoutAccountInput, EmailAddressUncheckedCreateWithoutAccountInput> | EmailAddressCreateWithoutAccountInput[] | EmailAddressUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutAccountInput | EmailAddressCreateOrConnectWithoutAccountInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutAccountInput | EmailAddressUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmailAddressCreateManyAccountInputEnvelope
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutAccountInput | EmailAddressUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutAccountInput | EmailAddressUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ThreadCreateWithoutAccountInput, ThreadUncheckedCreateWithoutAccountInput> | ThreadCreateWithoutAccountInput[] | ThreadUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAccountInput | ThreadCreateOrConnectWithoutAccountInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAccountInput | ThreadUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ThreadCreateManyAccountInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAccountInput | ThreadUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAccountInput | ThreadUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type EmailAddressUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmailAddressCreateWithoutAccountInput, EmailAddressUncheckedCreateWithoutAccountInput> | EmailAddressCreateWithoutAccountInput[] | EmailAddressUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutAccountInput | EmailAddressCreateOrConnectWithoutAccountInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutAccountInput | EmailAddressUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmailAddressCreateManyAccountInputEnvelope
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutAccountInput | EmailAddressUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutAccountInput | EmailAddressUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type ThreadCreateparticipantIdsInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutThreadsInput = {
    create?: XOR<AccountCreateWithoutThreadsInput, AccountUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutThreadsInput
    connect?: AccountWhereUniqueInput
  }

  export type EmailCreateNestedManyWithoutThreadInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ThreadUpdateparticipantIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateOneRequiredWithoutThreadsNestedInput = {
    create?: XOR<AccountCreateWithoutThreadsInput, AccountUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutThreadsInput
    upsert?: AccountUpsertWithoutThreadsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutThreadsInput, AccountUpdateWithoutThreadsInput>, AccountUncheckedUpdateWithoutThreadsInput>
  }

  export type EmailUpdateManyWithoutThreadNestedInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutThreadInput | EmailUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutThreadInput | EmailUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutThreadInput | EmailUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput> | EmailCreateWithoutThreadInput[] | EmailUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutThreadInput | EmailCreateOrConnectWithoutThreadInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutThreadInput | EmailUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: EmailCreateManyThreadInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutThreadInput | EmailUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutThreadInput | EmailUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailCreatesysLabelsInput = {
    set: string[]
  }

  export type EmailCreatekeywordsInput = {
    set: string[]
  }

  export type EmailCreatesysClassificationsInput = {
    set: string[]
  }

  export type EmailCreateinternetHeadersInput = {
    set: InputJsonValue[]
  }

  export type EmailCreateomittedInput = {
    set: string[]
  }

  export type ThreadCreateNestedOneWithoutEmailsInput = {
    create?: XOR<ThreadCreateWithoutEmailsInput, ThreadUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutEmailsInput
    connect?: ThreadWhereUniqueInput
  }

  export type EmailAddressCreateNestedOneWithoutSentEmailsInput = {
    create?: XOR<EmailAddressCreateWithoutSentEmailsInput, EmailAddressUncheckedCreateWithoutSentEmailsInput>
    connectOrCreate?: EmailAddressCreateOrConnectWithoutSentEmailsInput
    connect?: EmailAddressWhereUniqueInput
  }

  export type EmailAddressCreateNestedManyWithoutReceivedToInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedToInput, EmailAddressUncheckedCreateWithoutReceivedToInput> | EmailAddressCreateWithoutReceivedToInput[] | EmailAddressUncheckedCreateWithoutReceivedToInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedToInput | EmailAddressCreateOrConnectWithoutReceivedToInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAddressCreateNestedManyWithoutReceivedCcInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedCcInput, EmailAddressUncheckedCreateWithoutReceivedCcInput> | EmailAddressCreateWithoutReceivedCcInput[] | EmailAddressUncheckedCreateWithoutReceivedCcInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedCcInput | EmailAddressCreateOrConnectWithoutReceivedCcInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAddressCreateNestedManyWithoutReceivedBccInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedBccInput, EmailAddressUncheckedCreateWithoutReceivedBccInput> | EmailAddressCreateWithoutReceivedBccInput[] | EmailAddressUncheckedCreateWithoutReceivedBccInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedBccInput | EmailAddressCreateOrConnectWithoutReceivedBccInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAddressCreateNestedManyWithoutReplyToEmailsInput = {
    create?: XOR<EmailAddressCreateWithoutReplyToEmailsInput, EmailAddressUncheckedCreateWithoutReplyToEmailsInput> | EmailAddressCreateWithoutReplyToEmailsInput[] | EmailAddressUncheckedCreateWithoutReplyToEmailsInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReplyToEmailsInput | EmailAddressCreateOrConnectWithoutReplyToEmailsInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAttachmentCreateNestedManyWithoutEmailInput = {
    create?: XOR<EmailAttachmentCreateWithoutEmailInput, EmailAttachmentUncheckedCreateWithoutEmailInput> | EmailAttachmentCreateWithoutEmailInput[] | EmailAttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailAttachmentCreateOrConnectWithoutEmailInput | EmailAttachmentCreateOrConnectWithoutEmailInput[]
    createMany?: EmailAttachmentCreateManyEmailInputEnvelope
    connect?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
  }

  export type EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedToInput, EmailAddressUncheckedCreateWithoutReceivedToInput> | EmailAddressCreateWithoutReceivedToInput[] | EmailAddressUncheckedCreateWithoutReceivedToInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedToInput | EmailAddressCreateOrConnectWithoutReceivedToInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedCcInput, EmailAddressUncheckedCreateWithoutReceivedCcInput> | EmailAddressCreateWithoutReceivedCcInput[] | EmailAddressUncheckedCreateWithoutReceivedCcInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedCcInput | EmailAddressCreateOrConnectWithoutReceivedCcInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedBccInput, EmailAddressUncheckedCreateWithoutReceivedBccInput> | EmailAddressCreateWithoutReceivedBccInput[] | EmailAddressUncheckedCreateWithoutReceivedBccInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedBccInput | EmailAddressCreateOrConnectWithoutReceivedBccInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput = {
    create?: XOR<EmailAddressCreateWithoutReplyToEmailsInput, EmailAddressUncheckedCreateWithoutReplyToEmailsInput> | EmailAddressCreateWithoutReplyToEmailsInput[] | EmailAddressUncheckedCreateWithoutReplyToEmailsInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReplyToEmailsInput | EmailAddressCreateOrConnectWithoutReplyToEmailsInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
  }

  export type EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<EmailAttachmentCreateWithoutEmailInput, EmailAttachmentUncheckedCreateWithoutEmailInput> | EmailAttachmentCreateWithoutEmailInput[] | EmailAttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailAttachmentCreateOrConnectWithoutEmailInput | EmailAttachmentCreateOrConnectWithoutEmailInput[]
    createMany?: EmailAttachmentCreateManyEmailInputEnvelope
    connect?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
  }

  export type EmailUpdatesysLabelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdatesysClassificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumSensitivityFieldUpdateOperationsInput = {
    set?: $Enums.Sensitivity
  }

  export type NullableEnumMeetingMessageMethodFieldUpdateOperationsInput = {
    set?: $Enums.MeetingMessageMethod | null
  }

  export type EmailUpdateinternetHeadersInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type EmailUpdateomittedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumEmailLabelFieldUpdateOperationsInput = {
    set?: $Enums.EmailLabel
  }

  export type ThreadUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<ThreadCreateWithoutEmailsInput, ThreadUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutEmailsInput
    upsert?: ThreadUpsertWithoutEmailsInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutEmailsInput, ThreadUpdateWithoutEmailsInput>, ThreadUncheckedUpdateWithoutEmailsInput>
  }

  export type EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput = {
    create?: XOR<EmailAddressCreateWithoutSentEmailsInput, EmailAddressUncheckedCreateWithoutSentEmailsInput>
    connectOrCreate?: EmailAddressCreateOrConnectWithoutSentEmailsInput
    upsert?: EmailAddressUpsertWithoutSentEmailsInput
    connect?: EmailAddressWhereUniqueInput
    update?: XOR<XOR<EmailAddressUpdateToOneWithWhereWithoutSentEmailsInput, EmailAddressUpdateWithoutSentEmailsInput>, EmailAddressUncheckedUpdateWithoutSentEmailsInput>
  }

  export type EmailAddressUpdateManyWithoutReceivedToNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedToInput, EmailAddressUncheckedCreateWithoutReceivedToInput> | EmailAddressCreateWithoutReceivedToInput[] | EmailAddressUncheckedCreateWithoutReceivedToInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedToInput | EmailAddressCreateOrConnectWithoutReceivedToInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReceivedToInput | EmailAddressUpsertWithWhereUniqueWithoutReceivedToInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReceivedToInput | EmailAddressUpdateWithWhereUniqueWithoutReceivedToInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReceivedToInput | EmailAddressUpdateManyWithWhereWithoutReceivedToInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAddressUpdateManyWithoutReceivedCcNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedCcInput, EmailAddressUncheckedCreateWithoutReceivedCcInput> | EmailAddressCreateWithoutReceivedCcInput[] | EmailAddressUncheckedCreateWithoutReceivedCcInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedCcInput | EmailAddressCreateOrConnectWithoutReceivedCcInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReceivedCcInput | EmailAddressUpsertWithWhereUniqueWithoutReceivedCcInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReceivedCcInput | EmailAddressUpdateWithWhereUniqueWithoutReceivedCcInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReceivedCcInput | EmailAddressUpdateManyWithWhereWithoutReceivedCcInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAddressUpdateManyWithoutReceivedBccNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedBccInput, EmailAddressUncheckedCreateWithoutReceivedBccInput> | EmailAddressCreateWithoutReceivedBccInput[] | EmailAddressUncheckedCreateWithoutReceivedBccInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedBccInput | EmailAddressCreateOrConnectWithoutReceivedBccInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReceivedBccInput | EmailAddressUpsertWithWhereUniqueWithoutReceivedBccInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReceivedBccInput | EmailAddressUpdateWithWhereUniqueWithoutReceivedBccInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReceivedBccInput | EmailAddressUpdateManyWithWhereWithoutReceivedBccInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAddressUpdateManyWithoutReplyToEmailsNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReplyToEmailsInput, EmailAddressUncheckedCreateWithoutReplyToEmailsInput> | EmailAddressCreateWithoutReplyToEmailsInput[] | EmailAddressUncheckedCreateWithoutReplyToEmailsInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReplyToEmailsInput | EmailAddressCreateOrConnectWithoutReplyToEmailsInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReplyToEmailsInput | EmailAddressUpsertWithWhereUniqueWithoutReplyToEmailsInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReplyToEmailsInput | EmailAddressUpdateWithWhereUniqueWithoutReplyToEmailsInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReplyToEmailsInput | EmailAddressUpdateManyWithWhereWithoutReplyToEmailsInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAttachmentUpdateManyWithoutEmailNestedInput = {
    create?: XOR<EmailAttachmentCreateWithoutEmailInput, EmailAttachmentUncheckedCreateWithoutEmailInput> | EmailAttachmentCreateWithoutEmailInput[] | EmailAttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailAttachmentCreateOrConnectWithoutEmailInput | EmailAttachmentCreateOrConnectWithoutEmailInput[]
    upsert?: EmailAttachmentUpsertWithWhereUniqueWithoutEmailInput | EmailAttachmentUpsertWithWhereUniqueWithoutEmailInput[]
    createMany?: EmailAttachmentCreateManyEmailInputEnvelope
    set?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    disconnect?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    delete?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    connect?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    update?: EmailAttachmentUpdateWithWhereUniqueWithoutEmailInput | EmailAttachmentUpdateWithWhereUniqueWithoutEmailInput[]
    updateMany?: EmailAttachmentUpdateManyWithWhereWithoutEmailInput | EmailAttachmentUpdateManyWithWhereWithoutEmailInput[]
    deleteMany?: EmailAttachmentScalarWhereInput | EmailAttachmentScalarWhereInput[]
  }

  export type EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedToInput, EmailAddressUncheckedCreateWithoutReceivedToInput> | EmailAddressCreateWithoutReceivedToInput[] | EmailAddressUncheckedCreateWithoutReceivedToInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedToInput | EmailAddressCreateOrConnectWithoutReceivedToInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReceivedToInput | EmailAddressUpsertWithWhereUniqueWithoutReceivedToInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReceivedToInput | EmailAddressUpdateWithWhereUniqueWithoutReceivedToInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReceivedToInput | EmailAddressUpdateManyWithWhereWithoutReceivedToInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedCcInput, EmailAddressUncheckedCreateWithoutReceivedCcInput> | EmailAddressCreateWithoutReceivedCcInput[] | EmailAddressUncheckedCreateWithoutReceivedCcInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedCcInput | EmailAddressCreateOrConnectWithoutReceivedCcInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReceivedCcInput | EmailAddressUpsertWithWhereUniqueWithoutReceivedCcInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReceivedCcInput | EmailAddressUpdateWithWhereUniqueWithoutReceivedCcInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReceivedCcInput | EmailAddressUpdateManyWithWhereWithoutReceivedCcInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReceivedBccInput, EmailAddressUncheckedCreateWithoutReceivedBccInput> | EmailAddressCreateWithoutReceivedBccInput[] | EmailAddressUncheckedCreateWithoutReceivedBccInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReceivedBccInput | EmailAddressCreateOrConnectWithoutReceivedBccInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReceivedBccInput | EmailAddressUpsertWithWhereUniqueWithoutReceivedBccInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReceivedBccInput | EmailAddressUpdateWithWhereUniqueWithoutReceivedBccInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReceivedBccInput | EmailAddressUpdateManyWithWhereWithoutReceivedBccInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput = {
    create?: XOR<EmailAddressCreateWithoutReplyToEmailsInput, EmailAddressUncheckedCreateWithoutReplyToEmailsInput> | EmailAddressCreateWithoutReplyToEmailsInput[] | EmailAddressUncheckedCreateWithoutReplyToEmailsInput[]
    connectOrCreate?: EmailAddressCreateOrConnectWithoutReplyToEmailsInput | EmailAddressCreateOrConnectWithoutReplyToEmailsInput[]
    upsert?: EmailAddressUpsertWithWhereUniqueWithoutReplyToEmailsInput | EmailAddressUpsertWithWhereUniqueWithoutReplyToEmailsInput[]
    set?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    disconnect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    delete?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    connect?: EmailAddressWhereUniqueInput | EmailAddressWhereUniqueInput[]
    update?: EmailAddressUpdateWithWhereUniqueWithoutReplyToEmailsInput | EmailAddressUpdateWithWhereUniqueWithoutReplyToEmailsInput[]
    updateMany?: EmailAddressUpdateManyWithWhereWithoutReplyToEmailsInput | EmailAddressUpdateManyWithWhereWithoutReplyToEmailsInput[]
    deleteMany?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
  }

  export type EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<EmailAttachmentCreateWithoutEmailInput, EmailAttachmentUncheckedCreateWithoutEmailInput> | EmailAttachmentCreateWithoutEmailInput[] | EmailAttachmentUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailAttachmentCreateOrConnectWithoutEmailInput | EmailAttachmentCreateOrConnectWithoutEmailInput[]
    upsert?: EmailAttachmentUpsertWithWhereUniqueWithoutEmailInput | EmailAttachmentUpsertWithWhereUniqueWithoutEmailInput[]
    createMany?: EmailAttachmentCreateManyEmailInputEnvelope
    set?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    disconnect?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    delete?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    connect?: EmailAttachmentWhereUniqueInput | EmailAttachmentWhereUniqueInput[]
    update?: EmailAttachmentUpdateWithWhereUniqueWithoutEmailInput | EmailAttachmentUpdateWithWhereUniqueWithoutEmailInput[]
    updateMany?: EmailAttachmentUpdateManyWithWhereWithoutEmailInput | EmailAttachmentUpdateManyWithWhereWithoutEmailInput[]
    deleteMany?: EmailAttachmentScalarWhereInput | EmailAttachmentScalarWhereInput[]
  }

  export type EmailCreateNestedManyWithoutFromInput = {
    create?: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput> | EmailCreateWithoutFromInput[] | EmailUncheckedCreateWithoutFromInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutFromInput | EmailCreateOrConnectWithoutFromInput[]
    createMany?: EmailCreateManyFromInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailCreateNestedManyWithoutToInput = {
    create?: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput> | EmailCreateWithoutToInput[] | EmailUncheckedCreateWithoutToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutToInput | EmailCreateOrConnectWithoutToInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailCreateNestedManyWithoutCcInput = {
    create?: XOR<EmailCreateWithoutCcInput, EmailUncheckedCreateWithoutCcInput> | EmailCreateWithoutCcInput[] | EmailUncheckedCreateWithoutCcInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutCcInput | EmailCreateOrConnectWithoutCcInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailCreateNestedManyWithoutBccInput = {
    create?: XOR<EmailCreateWithoutBccInput, EmailUncheckedCreateWithoutBccInput> | EmailCreateWithoutBccInput[] | EmailUncheckedCreateWithoutBccInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutBccInput | EmailCreateOrConnectWithoutBccInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailCreateNestedManyWithoutReplyToInput = {
    create?: XOR<EmailCreateWithoutReplyToInput, EmailUncheckedCreateWithoutReplyToInput> | EmailCreateWithoutReplyToInput[] | EmailUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutReplyToInput | EmailCreateOrConnectWithoutReplyToInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type AccountCreateNestedOneWithoutEmailAddressesInput = {
    create?: XOR<AccountCreateWithoutEmailAddressesInput, AccountUncheckedCreateWithoutEmailAddressesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmailAddressesInput
    connect?: AccountWhereUniqueInput
  }

  export type EmailUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput> | EmailCreateWithoutFromInput[] | EmailUncheckedCreateWithoutFromInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutFromInput | EmailCreateOrConnectWithoutFromInput[]
    createMany?: EmailCreateManyFromInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput> | EmailCreateWithoutToInput[] | EmailUncheckedCreateWithoutToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutToInput | EmailCreateOrConnectWithoutToInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutCcInput = {
    create?: XOR<EmailCreateWithoutCcInput, EmailUncheckedCreateWithoutCcInput> | EmailCreateWithoutCcInput[] | EmailUncheckedCreateWithoutCcInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutCcInput | EmailCreateOrConnectWithoutCcInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutBccInput = {
    create?: XOR<EmailCreateWithoutBccInput, EmailUncheckedCreateWithoutBccInput> | EmailCreateWithoutBccInput[] | EmailUncheckedCreateWithoutBccInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutBccInput | EmailCreateOrConnectWithoutBccInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<EmailCreateWithoutReplyToInput, EmailUncheckedCreateWithoutReplyToInput> | EmailCreateWithoutReplyToInput[] | EmailUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutReplyToInput | EmailCreateOrConnectWithoutReplyToInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type EmailUpdateManyWithoutFromNestedInput = {
    create?: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput> | EmailCreateWithoutFromInput[] | EmailUncheckedCreateWithoutFromInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutFromInput | EmailCreateOrConnectWithoutFromInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutFromInput | EmailUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: EmailCreateManyFromInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutFromInput | EmailUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutFromInput | EmailUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUpdateManyWithoutToNestedInput = {
    create?: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput> | EmailCreateWithoutToInput[] | EmailUncheckedCreateWithoutToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutToInput | EmailCreateOrConnectWithoutToInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutToInput | EmailUpsertWithWhereUniqueWithoutToInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutToInput | EmailUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutToInput | EmailUpdateManyWithWhereWithoutToInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUpdateManyWithoutCcNestedInput = {
    create?: XOR<EmailCreateWithoutCcInput, EmailUncheckedCreateWithoutCcInput> | EmailCreateWithoutCcInput[] | EmailUncheckedCreateWithoutCcInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutCcInput | EmailCreateOrConnectWithoutCcInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutCcInput | EmailUpsertWithWhereUniqueWithoutCcInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutCcInput | EmailUpdateWithWhereUniqueWithoutCcInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutCcInput | EmailUpdateManyWithWhereWithoutCcInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUpdateManyWithoutBccNestedInput = {
    create?: XOR<EmailCreateWithoutBccInput, EmailUncheckedCreateWithoutBccInput> | EmailCreateWithoutBccInput[] | EmailUncheckedCreateWithoutBccInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutBccInput | EmailCreateOrConnectWithoutBccInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutBccInput | EmailUpsertWithWhereUniqueWithoutBccInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutBccInput | EmailUpdateWithWhereUniqueWithoutBccInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutBccInput | EmailUpdateManyWithWhereWithoutBccInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<EmailCreateWithoutReplyToInput, EmailUncheckedCreateWithoutReplyToInput> | EmailCreateWithoutReplyToInput[] | EmailUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutReplyToInput | EmailCreateOrConnectWithoutReplyToInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutReplyToInput | EmailUpsertWithWhereUniqueWithoutReplyToInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutReplyToInput | EmailUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutReplyToInput | EmailUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type AccountUpdateOneRequiredWithoutEmailAddressesNestedInput = {
    create?: XOR<AccountCreateWithoutEmailAddressesInput, AccountUncheckedCreateWithoutEmailAddressesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmailAddressesInput
    upsert?: AccountUpsertWithoutEmailAddressesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutEmailAddressesInput, AccountUpdateWithoutEmailAddressesInput>, AccountUncheckedUpdateWithoutEmailAddressesInput>
  }

  export type EmailUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput> | EmailCreateWithoutFromInput[] | EmailUncheckedCreateWithoutFromInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutFromInput | EmailCreateOrConnectWithoutFromInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutFromInput | EmailUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: EmailCreateManyFromInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutFromInput | EmailUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutFromInput | EmailUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput> | EmailCreateWithoutToInput[] | EmailUncheckedCreateWithoutToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutToInput | EmailCreateOrConnectWithoutToInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutToInput | EmailUpsertWithWhereUniqueWithoutToInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutToInput | EmailUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutToInput | EmailUpdateManyWithWhereWithoutToInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutCcNestedInput = {
    create?: XOR<EmailCreateWithoutCcInput, EmailUncheckedCreateWithoutCcInput> | EmailCreateWithoutCcInput[] | EmailUncheckedCreateWithoutCcInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutCcInput | EmailCreateOrConnectWithoutCcInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutCcInput | EmailUpsertWithWhereUniqueWithoutCcInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutCcInput | EmailUpdateWithWhereUniqueWithoutCcInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutCcInput | EmailUpdateManyWithWhereWithoutCcInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutBccNestedInput = {
    create?: XOR<EmailCreateWithoutBccInput, EmailUncheckedCreateWithoutBccInput> | EmailCreateWithoutBccInput[] | EmailUncheckedCreateWithoutBccInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutBccInput | EmailCreateOrConnectWithoutBccInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutBccInput | EmailUpsertWithWhereUniqueWithoutBccInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutBccInput | EmailUpdateWithWhereUniqueWithoutBccInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutBccInput | EmailUpdateManyWithWhereWithoutBccInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<EmailCreateWithoutReplyToInput, EmailUncheckedCreateWithoutReplyToInput> | EmailCreateWithoutReplyToInput[] | EmailUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutReplyToInput | EmailCreateOrConnectWithoutReplyToInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutReplyToInput | EmailUpsertWithWhereUniqueWithoutReplyToInput[]
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutReplyToInput | EmailUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutReplyToInput | EmailUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type EmailCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: EmailCreateOrConnectWithoutAttachmentsInput
    connect?: EmailWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: EmailCreateOrConnectWithoutAttachmentsInput
    upsert?: EmailUpsertWithoutAttachmentsInput
    connect?: EmailWhereUniqueInput
    update?: XOR<XOR<EmailUpdateToOneWithWhereWithoutAttachmentsInput, EmailUpdateWithoutAttachmentsInput>, EmailUncheckedUpdateWithoutAttachmentsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSensitivityFilter<$PrismaModel = never> = {
    equals?: $Enums.Sensitivity | EnumSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityFilter<$PrismaModel> | $Enums.Sensitivity
  }

  export type NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingMessageMethod | EnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel> | $Enums.MeetingMessageMethod | null
  }

  export type NestedEnumEmailLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailLabel | EnumEmailLabelFieldRefInput<$PrismaModel>
    in?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailLabelFilter<$PrismaModel> | $Enums.EmailLabel
  }

  export type NestedEnumSensitivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sensitivity | EnumSensitivityFieldRefInput<$PrismaModel>
    in?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sensitivity[] | ListEnumSensitivityFieldRefInput<$PrismaModel>
    not?: NestedEnumSensitivityWithAggregatesFilter<$PrismaModel> | $Enums.Sensitivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSensitivityFilter<$PrismaModel>
    _max?: NestedEnumSensitivityFilter<$PrismaModel>
  }

  export type NestedEnumMeetingMessageMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingMessageMethod | EnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MeetingMessageMethod[] | ListEnumMeetingMessageMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMeetingMessageMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.MeetingMessageMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumMeetingMessageMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmailLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailLabel | EnumEmailLabelFieldRefInput<$PrismaModel>
    in?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailLabel[] | ListEnumEmailLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailLabelWithAggregatesFilter<$PrismaModel> | $Enums.EmailLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailLabelFilter<$PrismaModel>
    _max?: NestedEnumEmailLabelFilter<$PrismaModel>
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

  export type AccountCreateWithoutUserInput = {
    id?: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadCreateNestedManyWithoutAccountInput
    emailAddresses?: EmailAddressCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUncheckedCreateNestedManyWithoutAccountInput
    emailAddresses?: EmailAddressUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    emailAddress?: StringFilter<"Account"> | string
    accessToken?: StringFilter<"Account"> | string
    nextDeltaToken?: StringNullableFilter<"Account"> | string | null
    oramaIndex?: JsonNullableFilter<"Account">
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    firstName: string
    lastName: string
    email: string
    imageUrl?: string | null
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type ThreadCreateWithoutAccountInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    emails?: EmailCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutAccountInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    emails?: EmailUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutAccountInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAccountInput, ThreadUncheckedCreateWithoutAccountInput>
  }

  export type ThreadCreateManyAccountInputEnvelope = {
    data: ThreadCreateManyAccountInput | ThreadCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type EmailAddressCreateWithoutAccountInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailCreateNestedManyWithoutFromInput
    receivedTo?: EmailCreateNestedManyWithoutToInput
    receivedCc?: EmailCreateNestedManyWithoutCcInput
    receivedBcc?: EmailCreateNestedManyWithoutBccInput
    replyToEmails?: EmailCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressUncheckedCreateWithoutAccountInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    receivedTo?: EmailUncheckedCreateNestedManyWithoutToInput
    receivedCc?: EmailUncheckedCreateNestedManyWithoutCcInput
    receivedBcc?: EmailUncheckedCreateNestedManyWithoutBccInput
    replyToEmails?: EmailUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressCreateOrConnectWithoutAccountInput = {
    where: EmailAddressWhereUniqueInput
    create: XOR<EmailAddressCreateWithoutAccountInput, EmailAddressUncheckedCreateWithoutAccountInput>
  }

  export type EmailAddressCreateManyAccountInputEnvelope = {
    data: EmailAddressCreateManyAccountInput | EmailAddressCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThreadUpsertWithWhereUniqueWithoutAccountInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutAccountInput, ThreadUncheckedUpdateWithoutAccountInput>
    create: XOR<ThreadCreateWithoutAccountInput, ThreadUncheckedCreateWithoutAccountInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutAccountInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutAccountInput, ThreadUncheckedUpdateWithoutAccountInput>
  }

  export type ThreadUpdateManyWithWhereWithoutAccountInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutAccountInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    OR?: ThreadScalarWhereInput[]
    NOT?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    id?: StringFilter<"Thread"> | string
    subject?: StringFilter<"Thread"> | string
    lastMessageDate?: DateTimeFilter<"Thread"> | Date | string
    participantIds?: StringNullableListFilter<"Thread">
    accountId?: StringFilter<"Thread"> | string
    done?: BoolFilter<"Thread"> | boolean
    inboxStatus?: BoolFilter<"Thread"> | boolean
    draftStatus?: BoolFilter<"Thread"> | boolean
    sentStatus?: BoolFilter<"Thread"> | boolean
  }

  export type EmailAddressUpsertWithWhereUniqueWithoutAccountInput = {
    where: EmailAddressWhereUniqueInput
    update: XOR<EmailAddressUpdateWithoutAccountInput, EmailAddressUncheckedUpdateWithoutAccountInput>
    create: XOR<EmailAddressCreateWithoutAccountInput, EmailAddressUncheckedCreateWithoutAccountInput>
  }

  export type EmailAddressUpdateWithWhereUniqueWithoutAccountInput = {
    where: EmailAddressWhereUniqueInput
    data: XOR<EmailAddressUpdateWithoutAccountInput, EmailAddressUncheckedUpdateWithoutAccountInput>
  }

  export type EmailAddressUpdateManyWithWhereWithoutAccountInput = {
    where: EmailAddressScalarWhereInput
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyWithoutAccountInput>
  }

  export type EmailAddressScalarWhereInput = {
    AND?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
    OR?: EmailAddressScalarWhereInput[]
    NOT?: EmailAddressScalarWhereInput | EmailAddressScalarWhereInput[]
    id?: StringFilter<"EmailAddress"> | string
    name?: StringNullableFilter<"EmailAddress"> | string | null
    address?: StringFilter<"EmailAddress"> | string
    raw?: StringNullableFilter<"EmailAddress"> | string | null
    accountId?: StringFilter<"EmailAddress"> | string
  }

  export type AccountCreateWithoutThreadsInput = {
    id?: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutAccountsInput
    emailAddresses?: EmailAddressCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutThreadsInput = {
    id?: string
    userId: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    emailAddresses?: EmailAddressUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutThreadsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutThreadsInput, AccountUncheckedCreateWithoutThreadsInput>
  }

  export type EmailCreateWithoutThreadInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutThreadInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutThreadInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput>
  }

  export type EmailCreateManyThreadInputEnvelope = {
    data: EmailCreateManyThreadInput | EmailCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutThreadsInput = {
    update: XOR<AccountUpdateWithoutThreadsInput, AccountUncheckedUpdateWithoutThreadsInput>
    create: XOR<AccountCreateWithoutThreadsInput, AccountUncheckedCreateWithoutThreadsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutThreadsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutThreadsInput, AccountUncheckedUpdateWithoutThreadsInput>
  }

  export type AccountUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    emailAddresses?: EmailAddressUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutThreadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    emailAddresses?: EmailAddressUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type EmailUpsertWithWhereUniqueWithoutThreadInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutThreadInput, EmailUncheckedUpdateWithoutThreadInput>
    create: XOR<EmailCreateWithoutThreadInput, EmailUncheckedCreateWithoutThreadInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutThreadInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutThreadInput, EmailUncheckedUpdateWithoutThreadInput>
  }

  export type EmailUpdateManyWithWhereWithoutThreadInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutThreadInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: StringFilter<"Email"> | string
    threadId?: StringFilter<"Email"> | string
    createdTime?: DateTimeFilter<"Email"> | Date | string
    lastModifiedTime?: DateTimeFilter<"Email"> | Date | string
    sentAt?: DateTimeFilter<"Email"> | Date | string
    receivedAt?: DateTimeFilter<"Email"> | Date | string
    internetMessageId?: StringFilter<"Email"> | string
    subject?: StringFilter<"Email"> | string
    sysLabels?: StringNullableListFilter<"Email">
    keywords?: StringNullableListFilter<"Email">
    sysClassifications?: StringNullableListFilter<"Email">
    sensitivity?: EnumSensitivityFilter<"Email"> | $Enums.Sensitivity
    meetingMessageMethod?: EnumMeetingMessageMethodNullableFilter<"Email"> | $Enums.MeetingMessageMethod | null
    fromId?: StringFilter<"Email"> | string
    hasAttachments?: BoolFilter<"Email"> | boolean
    body?: StringNullableFilter<"Email"> | string | null
    bodySnippet?: StringNullableFilter<"Email"> | string | null
    inReplyTo?: StringNullableFilter<"Email"> | string | null
    references?: StringNullableFilter<"Email"> | string | null
    threadIndex?: StringNullableFilter<"Email"> | string | null
    internetHeaders?: JsonNullableListFilter<"Email">
    nativeProperties?: JsonNullableFilter<"Email">
    folderId?: StringNullableFilter<"Email"> | string | null
    omitted?: StringNullableListFilter<"Email">
    emailLabel?: EnumEmailLabelFilter<"Email"> | $Enums.EmailLabel
  }

  export type ThreadCreateWithoutEmailsInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
    account: AccountCreateNestedOneWithoutThreadsInput
  }

  export type ThreadUncheckedCreateWithoutEmailsInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    accountId: string
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
  }

  export type ThreadCreateOrConnectWithoutEmailsInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutEmailsInput, ThreadUncheckedCreateWithoutEmailsInput>
  }

  export type EmailAddressCreateWithoutSentEmailsInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    receivedTo?: EmailCreateNestedManyWithoutToInput
    receivedCc?: EmailCreateNestedManyWithoutCcInput
    receivedBcc?: EmailCreateNestedManyWithoutBccInput
    replyToEmails?: EmailCreateNestedManyWithoutReplyToInput
    account: AccountCreateNestedOneWithoutEmailAddressesInput
  }

  export type EmailAddressUncheckedCreateWithoutSentEmailsInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
    receivedTo?: EmailUncheckedCreateNestedManyWithoutToInput
    receivedCc?: EmailUncheckedCreateNestedManyWithoutCcInput
    receivedBcc?: EmailUncheckedCreateNestedManyWithoutBccInput
    replyToEmails?: EmailUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressCreateOrConnectWithoutSentEmailsInput = {
    where: EmailAddressWhereUniqueInput
    create: XOR<EmailAddressCreateWithoutSentEmailsInput, EmailAddressUncheckedCreateWithoutSentEmailsInput>
  }

  export type EmailAddressCreateWithoutReceivedToInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailCreateNestedManyWithoutFromInput
    receivedCc?: EmailCreateNestedManyWithoutCcInput
    receivedBcc?: EmailCreateNestedManyWithoutBccInput
    replyToEmails?: EmailCreateNestedManyWithoutReplyToInput
    account: AccountCreateNestedOneWithoutEmailAddressesInput
  }

  export type EmailAddressUncheckedCreateWithoutReceivedToInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
    sentEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    receivedCc?: EmailUncheckedCreateNestedManyWithoutCcInput
    receivedBcc?: EmailUncheckedCreateNestedManyWithoutBccInput
    replyToEmails?: EmailUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressCreateOrConnectWithoutReceivedToInput = {
    where: EmailAddressWhereUniqueInput
    create: XOR<EmailAddressCreateWithoutReceivedToInput, EmailAddressUncheckedCreateWithoutReceivedToInput>
  }

  export type EmailAddressCreateWithoutReceivedCcInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailCreateNestedManyWithoutFromInput
    receivedTo?: EmailCreateNestedManyWithoutToInput
    receivedBcc?: EmailCreateNestedManyWithoutBccInput
    replyToEmails?: EmailCreateNestedManyWithoutReplyToInput
    account: AccountCreateNestedOneWithoutEmailAddressesInput
  }

  export type EmailAddressUncheckedCreateWithoutReceivedCcInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
    sentEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    receivedTo?: EmailUncheckedCreateNestedManyWithoutToInput
    receivedBcc?: EmailUncheckedCreateNestedManyWithoutBccInput
    replyToEmails?: EmailUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressCreateOrConnectWithoutReceivedCcInput = {
    where: EmailAddressWhereUniqueInput
    create: XOR<EmailAddressCreateWithoutReceivedCcInput, EmailAddressUncheckedCreateWithoutReceivedCcInput>
  }

  export type EmailAddressCreateWithoutReceivedBccInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailCreateNestedManyWithoutFromInput
    receivedTo?: EmailCreateNestedManyWithoutToInput
    receivedCc?: EmailCreateNestedManyWithoutCcInput
    replyToEmails?: EmailCreateNestedManyWithoutReplyToInput
    account: AccountCreateNestedOneWithoutEmailAddressesInput
  }

  export type EmailAddressUncheckedCreateWithoutReceivedBccInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
    sentEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    receivedTo?: EmailUncheckedCreateNestedManyWithoutToInput
    receivedCc?: EmailUncheckedCreateNestedManyWithoutCcInput
    replyToEmails?: EmailUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type EmailAddressCreateOrConnectWithoutReceivedBccInput = {
    where: EmailAddressWhereUniqueInput
    create: XOR<EmailAddressCreateWithoutReceivedBccInput, EmailAddressUncheckedCreateWithoutReceivedBccInput>
  }

  export type EmailAddressCreateWithoutReplyToEmailsInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    sentEmails?: EmailCreateNestedManyWithoutFromInput
    receivedTo?: EmailCreateNestedManyWithoutToInput
    receivedCc?: EmailCreateNestedManyWithoutCcInput
    receivedBcc?: EmailCreateNestedManyWithoutBccInput
    account: AccountCreateNestedOneWithoutEmailAddressesInput
  }

  export type EmailAddressUncheckedCreateWithoutReplyToEmailsInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
    accountId: string
    sentEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    receivedTo?: EmailUncheckedCreateNestedManyWithoutToInput
    receivedCc?: EmailUncheckedCreateNestedManyWithoutCcInput
    receivedBcc?: EmailUncheckedCreateNestedManyWithoutBccInput
  }

  export type EmailAddressCreateOrConnectWithoutReplyToEmailsInput = {
    where: EmailAddressWhereUniqueInput
    create: XOR<EmailAddressCreateWithoutReplyToEmailsInput, EmailAddressUncheckedCreateWithoutReplyToEmailsInput>
  }

  export type EmailAttachmentCreateWithoutEmailInput = {
    id?: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId?: string | null
    content?: string | null
    contentLocation?: string | null
  }

  export type EmailAttachmentUncheckedCreateWithoutEmailInput = {
    id?: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId?: string | null
    content?: string | null
    contentLocation?: string | null
  }

  export type EmailAttachmentCreateOrConnectWithoutEmailInput = {
    where: EmailAttachmentWhereUniqueInput
    create: XOR<EmailAttachmentCreateWithoutEmailInput, EmailAttachmentUncheckedCreateWithoutEmailInput>
  }

  export type EmailAttachmentCreateManyEmailInputEnvelope = {
    data: EmailAttachmentCreateManyEmailInput | EmailAttachmentCreateManyEmailInput[]
    skipDuplicates?: boolean
  }

  export type ThreadUpsertWithoutEmailsInput = {
    update: XOR<ThreadUpdateWithoutEmailsInput, ThreadUncheckedUpdateWithoutEmailsInput>
    create: XOR<ThreadCreateWithoutEmailsInput, ThreadUncheckedCreateWithoutEmailsInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutEmailsInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutEmailsInput, ThreadUncheckedUpdateWithoutEmailsInput>
  }

  export type ThreadUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneRequiredWithoutThreadsNestedInput
  }

  export type ThreadUncheckedUpdateWithoutEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    accountId?: StringFieldUpdateOperationsInput | string
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailAddressUpsertWithoutSentEmailsInput = {
    update: XOR<EmailAddressUpdateWithoutSentEmailsInput, EmailAddressUncheckedUpdateWithoutSentEmailsInput>
    create: XOR<EmailAddressCreateWithoutSentEmailsInput, EmailAddressUncheckedCreateWithoutSentEmailsInput>
    where?: EmailAddressWhereInput
  }

  export type EmailAddressUpdateToOneWithWhereWithoutSentEmailsInput = {
    where?: EmailAddressWhereInput
    data: XOR<EmailAddressUpdateWithoutSentEmailsInput, EmailAddressUncheckedUpdateWithoutSentEmailsInput>
  }

  export type EmailAddressUpdateWithoutSentEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    receivedTo?: EmailUpdateManyWithoutToNestedInput
    receivedCc?: EmailUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUpdateManyWithoutReplyToNestedInput
    account?: AccountUpdateOneRequiredWithoutEmailAddressesNestedInput
  }

  export type EmailAddressUncheckedUpdateWithoutSentEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    receivedTo?: EmailUncheckedUpdateManyWithoutToNestedInput
    receivedCc?: EmailUncheckedUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUncheckedUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressUpsertWithWhereUniqueWithoutReceivedToInput = {
    where: EmailAddressWhereUniqueInput
    update: XOR<EmailAddressUpdateWithoutReceivedToInput, EmailAddressUncheckedUpdateWithoutReceivedToInput>
    create: XOR<EmailAddressCreateWithoutReceivedToInput, EmailAddressUncheckedCreateWithoutReceivedToInput>
  }

  export type EmailAddressUpdateWithWhereUniqueWithoutReceivedToInput = {
    where: EmailAddressWhereUniqueInput
    data: XOR<EmailAddressUpdateWithoutReceivedToInput, EmailAddressUncheckedUpdateWithoutReceivedToInput>
  }

  export type EmailAddressUpdateManyWithWhereWithoutReceivedToInput = {
    where: EmailAddressScalarWhereInput
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyWithoutReceivedToInput>
  }

  export type EmailAddressUpsertWithWhereUniqueWithoutReceivedCcInput = {
    where: EmailAddressWhereUniqueInput
    update: XOR<EmailAddressUpdateWithoutReceivedCcInput, EmailAddressUncheckedUpdateWithoutReceivedCcInput>
    create: XOR<EmailAddressCreateWithoutReceivedCcInput, EmailAddressUncheckedCreateWithoutReceivedCcInput>
  }

  export type EmailAddressUpdateWithWhereUniqueWithoutReceivedCcInput = {
    where: EmailAddressWhereUniqueInput
    data: XOR<EmailAddressUpdateWithoutReceivedCcInput, EmailAddressUncheckedUpdateWithoutReceivedCcInput>
  }

  export type EmailAddressUpdateManyWithWhereWithoutReceivedCcInput = {
    where: EmailAddressScalarWhereInput
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyWithoutReceivedCcInput>
  }

  export type EmailAddressUpsertWithWhereUniqueWithoutReceivedBccInput = {
    where: EmailAddressWhereUniqueInput
    update: XOR<EmailAddressUpdateWithoutReceivedBccInput, EmailAddressUncheckedUpdateWithoutReceivedBccInput>
    create: XOR<EmailAddressCreateWithoutReceivedBccInput, EmailAddressUncheckedCreateWithoutReceivedBccInput>
  }

  export type EmailAddressUpdateWithWhereUniqueWithoutReceivedBccInput = {
    where: EmailAddressWhereUniqueInput
    data: XOR<EmailAddressUpdateWithoutReceivedBccInput, EmailAddressUncheckedUpdateWithoutReceivedBccInput>
  }

  export type EmailAddressUpdateManyWithWhereWithoutReceivedBccInput = {
    where: EmailAddressScalarWhereInput
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyWithoutReceivedBccInput>
  }

  export type EmailAddressUpsertWithWhereUniqueWithoutReplyToEmailsInput = {
    where: EmailAddressWhereUniqueInput
    update: XOR<EmailAddressUpdateWithoutReplyToEmailsInput, EmailAddressUncheckedUpdateWithoutReplyToEmailsInput>
    create: XOR<EmailAddressCreateWithoutReplyToEmailsInput, EmailAddressUncheckedCreateWithoutReplyToEmailsInput>
  }

  export type EmailAddressUpdateWithWhereUniqueWithoutReplyToEmailsInput = {
    where: EmailAddressWhereUniqueInput
    data: XOR<EmailAddressUpdateWithoutReplyToEmailsInput, EmailAddressUncheckedUpdateWithoutReplyToEmailsInput>
  }

  export type EmailAddressUpdateManyWithWhereWithoutReplyToEmailsInput = {
    where: EmailAddressScalarWhereInput
    data: XOR<EmailAddressUpdateManyMutationInput, EmailAddressUncheckedUpdateManyWithoutReplyToEmailsInput>
  }

  export type EmailAttachmentUpsertWithWhereUniqueWithoutEmailInput = {
    where: EmailAttachmentWhereUniqueInput
    update: XOR<EmailAttachmentUpdateWithoutEmailInput, EmailAttachmentUncheckedUpdateWithoutEmailInput>
    create: XOR<EmailAttachmentCreateWithoutEmailInput, EmailAttachmentUncheckedCreateWithoutEmailInput>
  }

  export type EmailAttachmentUpdateWithWhereUniqueWithoutEmailInput = {
    where: EmailAttachmentWhereUniqueInput
    data: XOR<EmailAttachmentUpdateWithoutEmailInput, EmailAttachmentUncheckedUpdateWithoutEmailInput>
  }

  export type EmailAttachmentUpdateManyWithWhereWithoutEmailInput = {
    where: EmailAttachmentScalarWhereInput
    data: XOR<EmailAttachmentUpdateManyMutationInput, EmailAttachmentUncheckedUpdateManyWithoutEmailInput>
  }

  export type EmailAttachmentScalarWhereInput = {
    AND?: EmailAttachmentScalarWhereInput | EmailAttachmentScalarWhereInput[]
    OR?: EmailAttachmentScalarWhereInput[]
    NOT?: EmailAttachmentScalarWhereInput | EmailAttachmentScalarWhereInput[]
    id?: StringFilter<"EmailAttachment"> | string
    name?: StringFilter<"EmailAttachment"> | string
    mimeType?: StringFilter<"EmailAttachment"> | string
    size?: IntFilter<"EmailAttachment"> | number
    inline?: BoolFilter<"EmailAttachment"> | boolean
    contentId?: StringNullableFilter<"EmailAttachment"> | string | null
    content?: StringNullableFilter<"EmailAttachment"> | string | null
    contentLocation?: StringNullableFilter<"EmailAttachment"> | string | null
    emailId?: StringFilter<"EmailAttachment"> | string
  }

  export type EmailCreateWithoutFromInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutFromInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutFromInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput>
  }

  export type EmailCreateManyFromInputEnvelope = {
    data: EmailCreateManyFromInput | EmailCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type EmailCreateWithoutToInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutToInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutToInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput>
  }

  export type EmailCreateWithoutCcInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutCcInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutCcInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutCcInput, EmailUncheckedCreateWithoutCcInput>
  }

  export type EmailCreateWithoutBccInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutBccInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutBccInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutBccInput, EmailUncheckedCreateWithoutBccInput>
  }

  export type EmailCreateWithoutReplyToInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    attachments?: EmailAttachmentCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutReplyToInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    attachments?: EmailAttachmentUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutReplyToInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutReplyToInput, EmailUncheckedCreateWithoutReplyToInput>
  }

  export type AccountCreateWithoutEmailAddressesInput = {
    id?: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutAccountsInput
    threads?: ThreadCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutEmailAddressesInput = {
    id?: string
    userId: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutEmailAddressesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutEmailAddressesInput, AccountUncheckedCreateWithoutEmailAddressesInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutFromInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutFromInput, EmailUncheckedUpdateWithoutFromInput>
    create: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutFromInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutFromInput, EmailUncheckedUpdateWithoutFromInput>
  }

  export type EmailUpdateManyWithWhereWithoutFromInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutFromInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutToInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutToInput, EmailUncheckedUpdateWithoutToInput>
    create: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutToInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutToInput, EmailUncheckedUpdateWithoutToInput>
  }

  export type EmailUpdateManyWithWhereWithoutToInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutToInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutCcInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutCcInput, EmailUncheckedUpdateWithoutCcInput>
    create: XOR<EmailCreateWithoutCcInput, EmailUncheckedCreateWithoutCcInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutCcInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutCcInput, EmailUncheckedUpdateWithoutCcInput>
  }

  export type EmailUpdateManyWithWhereWithoutCcInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutCcInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutBccInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutBccInput, EmailUncheckedUpdateWithoutBccInput>
    create: XOR<EmailCreateWithoutBccInput, EmailUncheckedCreateWithoutBccInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutBccInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutBccInput, EmailUncheckedUpdateWithoutBccInput>
  }

  export type EmailUpdateManyWithWhereWithoutBccInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutBccInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutReplyToInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutReplyToInput, EmailUncheckedUpdateWithoutReplyToInput>
    create: XOR<EmailCreateWithoutReplyToInput, EmailUncheckedCreateWithoutReplyToInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutReplyToInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutReplyToInput, EmailUncheckedUpdateWithoutReplyToInput>
  }

  export type EmailUpdateManyWithWhereWithoutReplyToInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutReplyToInput>
  }

  export type AccountUpsertWithoutEmailAddressesInput = {
    update: XOR<AccountUpdateWithoutEmailAddressesInput, AccountUncheckedUpdateWithoutEmailAddressesInput>
    create: XOR<AccountCreateWithoutEmailAddressesInput, AccountUncheckedCreateWithoutEmailAddressesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutEmailAddressesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutEmailAddressesInput, AccountUncheckedUpdateWithoutEmailAddressesInput>
  }

  export type AccountUpdateWithoutEmailAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    threads?: ThreadUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutEmailAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type EmailCreateWithoutAttachmentsInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    thread: ThreadCreateNestedOneWithoutEmailsInput
    from: EmailAddressCreateNestedOneWithoutSentEmailsInput
    to?: EmailAddressCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressCreateNestedManyWithoutReplyToEmailsInput
  }

  export type EmailUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
    to?: EmailAddressUncheckedCreateNestedManyWithoutReceivedToInput
    cc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedCcInput
    bcc?: EmailAddressUncheckedCreateNestedManyWithoutReceivedBccInput
    replyTo?: EmailAddressUncheckedCreateNestedManyWithoutReplyToEmailsInput
  }

  export type EmailCreateOrConnectWithoutAttachmentsInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
  }

  export type EmailUpsertWithoutAttachmentsInput = {
    update: XOR<EmailUpdateWithoutAttachmentsInput, EmailUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<EmailCreateWithoutAttachmentsInput, EmailUncheckedCreateWithoutAttachmentsInput>
    where?: EmailWhereInput
  }

  export type EmailUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: EmailWhereInput
    data: XOR<EmailUpdateWithoutAttachmentsInput, EmailUncheckedUpdateWithoutAttachmentsInput>
  }

  export type EmailUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
  }

  export type EmailUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    name: string
    emailAddress: string
    accessToken: string
    nextDeltaToken?: string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUpdateManyWithoutAccountNestedInput
    emailAddresses?: EmailAddressUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
    threads?: ThreadUncheckedUpdateManyWithoutAccountNestedInput
    emailAddresses?: EmailAddressUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailAddress?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    nextDeltaToken?: NullableStringFieldUpdateOperationsInput | string | null
    oramaIndex?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ThreadCreateManyAccountInput = {
    id?: string
    subject: string
    lastMessageDate: Date | string
    participantIds?: ThreadCreateparticipantIdsInput | string[]
    done?: boolean
    inboxStatus?: boolean
    draftStatus?: boolean
    sentStatus?: boolean
  }

  export type EmailAddressCreateManyAccountInput = {
    id?: string
    name?: string | null
    address: string
    raw?: string | null
  }

  export type ThreadUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
    emails?: EmailUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
    emails?: EmailUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    lastMessageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    participantIds?: ThreadUpdateparticipantIdsInput | string[]
    done?: BoolFieldUpdateOperationsInput | boolean
    inboxStatus?: BoolFieldUpdateOperationsInput | boolean
    draftStatus?: BoolFieldUpdateOperationsInput | boolean
    sentStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailAddressUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUpdateManyWithoutToNestedInput
    receivedCc?: EmailUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUncheckedUpdateManyWithoutToNestedInput
    receivedCc?: EmailUncheckedUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUncheckedUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateManyThreadInput = {
    id?: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    fromId: string
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
  }

  export type EmailUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutThreadInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailAttachmentCreateManyEmailInput = {
    id?: string
    name: string
    mimeType: string
    size: number
    inline: boolean
    contentId?: string | null
    content?: string | null
    contentLocation?: string | null
  }

  export type EmailAddressUpdateWithoutReceivedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUpdateManyWithoutFromNestedInput
    receivedCc?: EmailUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUpdateManyWithoutReplyToNestedInput
    account?: AccountUpdateOneRequiredWithoutEmailAddressesNestedInput
  }

  export type EmailAddressUncheckedUpdateWithoutReceivedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    sentEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    receivedCc?: EmailUncheckedUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUncheckedUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressUncheckedUpdateManyWithoutReceivedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailAddressUpdateWithoutReceivedCcInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUpdateManyWithoutToNestedInput
    receivedBcc?: EmailUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUpdateManyWithoutReplyToNestedInput
    account?: AccountUpdateOneRequiredWithoutEmailAddressesNestedInput
  }

  export type EmailAddressUncheckedUpdateWithoutReceivedCcInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    sentEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUncheckedUpdateManyWithoutToNestedInput
    receivedBcc?: EmailUncheckedUpdateManyWithoutBccNestedInput
    replyToEmails?: EmailUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressUncheckedUpdateManyWithoutReceivedCcInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailAddressUpdateWithoutReceivedBccInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUpdateManyWithoutToNestedInput
    receivedCc?: EmailUpdateManyWithoutCcNestedInput
    replyToEmails?: EmailUpdateManyWithoutReplyToNestedInput
    account?: AccountUpdateOneRequiredWithoutEmailAddressesNestedInput
  }

  export type EmailAddressUncheckedUpdateWithoutReceivedBccInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    sentEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUncheckedUpdateManyWithoutToNestedInput
    receivedCc?: EmailUncheckedUpdateManyWithoutCcNestedInput
    replyToEmails?: EmailUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type EmailAddressUncheckedUpdateManyWithoutReceivedBccInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailAddressUpdateWithoutReplyToEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    sentEmails?: EmailUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUpdateManyWithoutToNestedInput
    receivedCc?: EmailUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUpdateManyWithoutBccNestedInput
    account?: AccountUpdateOneRequiredWithoutEmailAddressesNestedInput
  }

  export type EmailAddressUncheckedUpdateWithoutReplyToEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    sentEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    receivedTo?: EmailUncheckedUpdateManyWithoutToNestedInput
    receivedCc?: EmailUncheckedUpdateManyWithoutCcNestedInput
    receivedBcc?: EmailUncheckedUpdateManyWithoutBccNestedInput
  }

  export type EmailAddressUncheckedUpdateManyWithoutReplyToEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    raw?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailAttachmentUpdateWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailAttachmentUncheckedUpdateWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailAttachmentUncheckedUpdateManyWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    inline?: BoolFieldUpdateOperationsInput | boolean
    contentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    contentLocation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateManyFromInput = {
    id?: string
    threadId: string
    createdTime: Date | string
    lastModifiedTime: Date | string
    sentAt: Date | string
    receivedAt: Date | string
    internetMessageId: string
    subject: string
    sysLabels?: EmailCreatesysLabelsInput | string[]
    keywords?: EmailCreatekeywordsInput | string[]
    sysClassifications?: EmailCreatesysClassificationsInput | string[]
    sensitivity?: $Enums.Sensitivity
    meetingMessageMethod?: $Enums.MeetingMessageMethod | null
    hasAttachments: boolean
    body?: string | null
    bodySnippet?: string | null
    inReplyTo?: string | null
    references?: string | null
    threadIndex?: string | null
    internetHeaders?: EmailCreateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: string | null
    omitted?: EmailCreateomittedInput | string[]
    emailLabel?: $Enums.EmailLabel
  }

  export type EmailUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailUpdateWithoutCcInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutCcInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutCcInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailUpdateWithoutBccInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    replyTo?: EmailAddressUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutBccInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    replyTo?: EmailAddressUncheckedUpdateManyWithoutReplyToEmailsNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutBccInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }

  export type EmailUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    thread?: ThreadUpdateOneRequiredWithoutEmailsNestedInput
    from?: EmailAddressUpdateOneRequiredWithoutSentEmailsNestedInput
    to?: EmailAddressUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUpdateManyWithoutReceivedBccNestedInput
    attachments?: EmailAttachmentUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
    to?: EmailAddressUncheckedUpdateManyWithoutReceivedToNestedInput
    cc?: EmailAddressUncheckedUpdateManyWithoutReceivedCcNestedInput
    bcc?: EmailAddressUncheckedUpdateManyWithoutReceivedBccNestedInput
    attachments?: EmailAttachmentUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    threadId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    lastModifiedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internetMessageId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    sysLabels?: EmailUpdatesysLabelsInput | string[]
    keywords?: EmailUpdatekeywordsInput | string[]
    sysClassifications?: EmailUpdatesysClassificationsInput | string[]
    sensitivity?: EnumSensitivityFieldUpdateOperationsInput | $Enums.Sensitivity
    meetingMessageMethod?: NullableEnumMeetingMessageMethodFieldUpdateOperationsInput | $Enums.MeetingMessageMethod | null
    fromId?: StringFieldUpdateOperationsInput | string
    hasAttachments?: BoolFieldUpdateOperationsInput | boolean
    body?: NullableStringFieldUpdateOperationsInput | string | null
    bodySnippet?: NullableStringFieldUpdateOperationsInput | string | null
    inReplyTo?: NullableStringFieldUpdateOperationsInput | string | null
    references?: NullableStringFieldUpdateOperationsInput | string | null
    threadIndex?: NullableStringFieldUpdateOperationsInput | string | null
    internetHeaders?: EmailUpdateinternetHeadersInput | InputJsonValue[]
    nativeProperties?: NullableJsonNullValueInput | InputJsonValue
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    omitted?: EmailUpdateomittedInput | string[]
    emailLabel?: EnumEmailLabelFieldUpdateOperationsInput | $Enums.EmailLabel
  }



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