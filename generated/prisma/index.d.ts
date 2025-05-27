
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
 * Model Speciality
 * 
 */
export type Speciality = $Result.DefaultSelection<Prisma.$SpecialityPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model OffService
 * 
 */
export type OffService = $Result.DefaultSelection<Prisma.$OffServicePayload>
/**
 * Model Holiday
 * 
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const DayOfWeek: {
  SUNDAY: 'SUNDAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]


export const Role: {
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.speciality`: Exposes CRUD operations for the **Speciality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialities
    * const specialities = await prisma.speciality.findMany()
    * ```
    */
  get speciality(): Prisma.SpecialityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offService`: Exposes CRUD operations for the **OffService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OffServices
    * const offServices = await prisma.offService.findMany()
    * ```
    */
  get offService(): Prisma.OffServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Speciality: 'Speciality',
    Appointment: 'Appointment',
    Address: 'Address',
    OffService: 'OffService',
    Holiday: 'Holiday'
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
      modelProps: "user" | "speciality" | "appointment" | "address" | "offService" | "holiday"
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
      Speciality: {
        payload: Prisma.$SpecialityPayload<ExtArgs>
        fields: Prisma.SpecialityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          findFirst: {
            args: Prisma.SpecialityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          findMany: {
            args: Prisma.SpecialityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>[]
          }
          create: {
            args: Prisma.SpecialityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          createMany: {
            args: Prisma.SpecialityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>[]
          }
          delete: {
            args: Prisma.SpecialityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          update: {
            args: Prisma.SpecialityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          deleteMany: {
            args: Prisma.SpecialityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>[]
          }
          upsert: {
            args: Prisma.SpecialityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          aggregate: {
            args: Prisma.SpecialityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeciality>
          }
          groupBy: {
            args: Prisma.SpecialityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialityCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialityCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      OffService: {
        payload: Prisma.$OffServicePayload<ExtArgs>
        fields: Prisma.OffServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OffServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OffServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>
          }
          findFirst: {
            args: Prisma.OffServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OffServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>
          }
          findMany: {
            args: Prisma.OffServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>[]
          }
          create: {
            args: Prisma.OffServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>
          }
          createMany: {
            args: Prisma.OffServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OffServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>[]
          }
          delete: {
            args: Prisma.OffServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>
          }
          update: {
            args: Prisma.OffServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>
          }
          deleteMany: {
            args: Prisma.OffServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OffServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OffServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>[]
          }
          upsert: {
            args: Prisma.OffServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffServicePayload>
          }
          aggregate: {
            args: Prisma.OffServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffService>
          }
          groupBy: {
            args: Prisma.OffServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OffServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OffServiceCountArgs<ExtArgs>
            result: $Utils.Optional<OffServiceCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HolidayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
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
    speciality?: SpecialityOmit
    appointment?: AppointmentOmit
    address?: AddressOmit
    offService?: OffServiceOmit
    holiday?: HolidayOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointmentsAsDoctor: number
    appointmentsAsPatient: number
    OffServices: number
    holidays: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentsAsDoctor?: boolean | UserCountOutputTypeCountAppointmentsAsDoctorArgs
    appointmentsAsPatient?: boolean | UserCountOutputTypeCountAppointmentsAsPatientArgs
    OffServices?: boolean | UserCountOutputTypeCountOffServicesArgs
    holidays?: boolean | UserCountOutputTypeCountHolidaysArgs
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
  export type UserCountOutputTypeCountAppointmentsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHolidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
  }


  /**
   * Count Type SpecialityCountOutputType
   */

  export type SpecialityCountOutputType = {
    Users: number
  }

  export type SpecialityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | SpecialityCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SpecialityCountOutputType without action
   */
  export type SpecialityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityCountOutputType
     */
    select?: SpecialityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialityCountOutputType without action
   */
  export type SpecialityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type OffServiceCountOutputType
   */

  export type OffServiceCountOutputType = {
    users: number
  }

  export type OffServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OffServiceCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * OffServiceCountOutputType without action
   */
  export type OffServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffServiceCountOutputType
     */
    select?: OffServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OffServiceCountOutputType without action
   */
  export type OffServiceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    specialtyId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    specialtyId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    description: string | null
    image: string | null
    role: $Enums.Role | null
    created_at: Date | null
    update_at: Date | null
    specialtyId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    description: string | null
    image: string | null
    role: $Enums.Role | null
    created_at: Date | null
    update_at: Date | null
    specialtyId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    phone: number
    description: number
    image: number
    role: number
    created_at: number
    update_at: number
    specialtyId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    specialtyId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    specialtyId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    description?: true
    image?: true
    role?: true
    created_at?: true
    update_at?: true
    specialtyId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    description?: true
    image?: true
    role?: true
    created_at?: true
    update_at?: true
    specialtyId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    description?: true
    image?: true
    role?: true
    created_at?: true
    update_at?: true
    specialtyId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description: string | null
    image: string | null
    role: $Enums.Role
    created_at: Date
    update_at: Date
    specialtyId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    update_at?: boolean
    specialtyId?: boolean
    appointmentsAsDoctor?: boolean | User$appointmentsAsDoctorArgs<ExtArgs>
    appointmentsAsPatient?: boolean | User$appointmentsAsPatientArgs<ExtArgs>
    adress?: boolean | User$adressArgs<ExtArgs>
    OffServices?: boolean | User$OffServicesArgs<ExtArgs>
    holidays?: boolean | User$holidaysArgs<ExtArgs>
    speciality?: boolean | User$specialityArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    update_at?: boolean
    specialtyId?: boolean
    speciality?: boolean | User$specialityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    update_at?: boolean
    specialtyId?: boolean
    speciality?: boolean | User$specialityArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    role?: boolean
    created_at?: boolean
    update_at?: boolean
    specialtyId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "phone" | "description" | "image" | "role" | "created_at" | "update_at" | "specialtyId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentsAsDoctor?: boolean | User$appointmentsAsDoctorArgs<ExtArgs>
    appointmentsAsPatient?: boolean | User$appointmentsAsPatientArgs<ExtArgs>
    adress?: boolean | User$adressArgs<ExtArgs>
    OffServices?: boolean | User$OffServicesArgs<ExtArgs>
    holidays?: boolean | User$holidaysArgs<ExtArgs>
    speciality?: boolean | User$specialityArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    speciality?: boolean | User$specialityArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    speciality?: boolean | User$specialityArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointmentsAsDoctor: Prisma.$AppointmentPayload<ExtArgs>[]
      appointmentsAsPatient: Prisma.$AppointmentPayload<ExtArgs>[]
      adress: Prisma.$AddressPayload<ExtArgs> | null
      OffServices: Prisma.$OffServicePayload<ExtArgs>[]
      holidays: Prisma.$HolidayPayload<ExtArgs>[]
      speciality: Prisma.$SpecialityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      phone: string
      description: string | null
      image: string | null
      role: $Enums.Role
      created_at: Date
      update_at: Date
      specialtyId: number | null
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
    appointmentsAsDoctor<T extends User$appointmentsAsDoctorArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsDoctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointmentsAsPatient<T extends User$appointmentsAsPatientArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsAsPatientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adress<T extends User$adressArgs<ExtArgs> = {}>(args?: Subset<T, User$adressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    OffServices<T extends User$OffServicesArgs<ExtArgs> = {}>(args?: Subset<T, User$OffServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holidays<T extends User$holidaysArgs<ExtArgs> = {}>(args?: Subset<T, User$holidaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    speciality<T extends User$specialityArgs<ExtArgs> = {}>(args?: Subset<T, User$specialityArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly update_at: FieldRef<"User", 'DateTime'>
    readonly specialtyId: FieldRef<"User", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.appointmentsAsDoctor
   */
  export type User$appointmentsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.appointmentsAsPatient
   */
  export type User$appointmentsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.adress
   */
  export type User$adressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * User.OffServices
   */
  export type User$OffServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    where?: OffServiceWhereInput
    orderBy?: OffServiceOrderByWithRelationInput | OffServiceOrderByWithRelationInput[]
    cursor?: OffServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OffServiceScalarFieldEnum | OffServiceScalarFieldEnum[]
  }

  /**
   * User.holidays
   */
  export type User$holidaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    cursor?: HolidayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * User.speciality
   */
  export type User$specialityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    where?: SpecialityWhereInput
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
   * Model Speciality
   */

  export type AggregateSpeciality = {
    _count: SpecialityCountAggregateOutputType | null
    _avg: SpecialityAvgAggregateOutputType | null
    _sum: SpecialitySumAggregateOutputType | null
    _min: SpecialityMinAggregateOutputType | null
    _max: SpecialityMaxAggregateOutputType | null
  }

  export type SpecialityAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialitySumAggregateOutputType = {
    id: number | null
  }

  export type SpecialityMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecialityMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SpecialityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SpecialityAvgAggregateInputType = {
    id?: true
  }

  export type SpecialitySumAggregateInputType = {
    id?: true
  }

  export type SpecialityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecialityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SpecialityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SpecialityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Speciality to aggregate.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialities
    **/
    _count?: true | SpecialityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialityMaxAggregateInputType
  }

  export type GetSpecialityAggregateType<T extends SpecialityAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeciality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeciality[P]>
      : GetScalarType<T[P], AggregateSpeciality[P]>
  }




  export type SpecialityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialityWhereInput
    orderBy?: SpecialityOrderByWithAggregationInput | SpecialityOrderByWithAggregationInput[]
    by: SpecialityScalarFieldEnum[] | SpecialityScalarFieldEnum
    having?: SpecialityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialityCountAggregateInputType | true
    _avg?: SpecialityAvgAggregateInputType
    _sum?: SpecialitySumAggregateInputType
    _min?: SpecialityMinAggregateInputType
    _max?: SpecialityMaxAggregateInputType
  }

  export type SpecialityGroupByOutputType = {
    id: number
    name: string
    _count: SpecialityCountAggregateOutputType | null
    _avg: SpecialityAvgAggregateOutputType | null
    _sum: SpecialitySumAggregateOutputType | null
    _min: SpecialityMinAggregateOutputType | null
    _max: SpecialityMaxAggregateOutputType | null
  }

  type GetSpecialityGroupByPayload<T extends SpecialityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialityGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialityGroupByOutputType[P]>
        }
      >
    >


  export type SpecialitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Users?: boolean | Speciality$UsersArgs<ExtArgs>
    _count?: boolean | SpecialityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speciality"]>

  export type SpecialitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["speciality"]>

  export type SpecialitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["speciality"]>

  export type SpecialitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SpecialityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["speciality"]>
  export type SpecialityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Speciality$UsersArgs<ExtArgs>
    _count?: boolean | SpecialityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Speciality"
    objects: {
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["speciality"]>
    composites: {}
  }

  type SpecialityGetPayload<S extends boolean | null | undefined | SpecialityDefaultArgs> = $Result.GetResult<Prisma.$SpecialityPayload, S>

  type SpecialityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialityCountAggregateInputType | true
    }

  export interface SpecialityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Speciality'], meta: { name: 'Speciality' } }
    /**
     * Find zero or one Speciality that matches the filter.
     * @param {SpecialityFindUniqueArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialityFindUniqueArgs>(args: SelectSubset<T, SpecialityFindUniqueArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Speciality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialityFindUniqueOrThrowArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialityFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speciality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityFindFirstArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialityFindFirstArgs>(args?: SelectSubset<T, SpecialityFindFirstArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speciality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityFindFirstOrThrowArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialityFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialities
     * const specialities = await prisma.speciality.findMany()
     * 
     * // Get first 10 Specialities
     * const specialities = await prisma.speciality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialityWithIdOnly = await prisma.speciality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialityFindManyArgs>(args?: SelectSubset<T, SpecialityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Speciality.
     * @param {SpecialityCreateArgs} args - Arguments to create a Speciality.
     * @example
     * // Create one Speciality
     * const Speciality = await prisma.speciality.create({
     *   data: {
     *     // ... data to create a Speciality
     *   }
     * })
     * 
     */
    create<T extends SpecialityCreateArgs>(args: SelectSubset<T, SpecialityCreateArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialities.
     * @param {SpecialityCreateManyArgs} args - Arguments to create many Specialities.
     * @example
     * // Create many Specialities
     * const speciality = await prisma.speciality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialityCreateManyArgs>(args?: SelectSubset<T, SpecialityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialities and returns the data saved in the database.
     * @param {SpecialityCreateManyAndReturnArgs} args - Arguments to create many Specialities.
     * @example
     * // Create many Specialities
     * const speciality = await prisma.speciality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialities and only return the `id`
     * const specialityWithIdOnly = await prisma.speciality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialityCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Speciality.
     * @param {SpecialityDeleteArgs} args - Arguments to delete one Speciality.
     * @example
     * // Delete one Speciality
     * const Speciality = await prisma.speciality.delete({
     *   where: {
     *     // ... filter to delete one Speciality
     *   }
     * })
     * 
     */
    delete<T extends SpecialityDeleteArgs>(args: SelectSubset<T, SpecialityDeleteArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Speciality.
     * @param {SpecialityUpdateArgs} args - Arguments to update one Speciality.
     * @example
     * // Update one Speciality
     * const speciality = await prisma.speciality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialityUpdateArgs>(args: SelectSubset<T, SpecialityUpdateArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialities.
     * @param {SpecialityDeleteManyArgs} args - Arguments to filter Specialities to delete.
     * @example
     * // Delete a few Specialities
     * const { count } = await prisma.speciality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialityDeleteManyArgs>(args?: SelectSubset<T, SpecialityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialities
     * const speciality = await prisma.speciality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialityUpdateManyArgs>(args: SelectSubset<T, SpecialityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialities and returns the data updated in the database.
     * @param {SpecialityUpdateManyAndReturnArgs} args - Arguments to update many Specialities.
     * @example
     * // Update many Specialities
     * const speciality = await prisma.speciality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialities and only return the `id`
     * const specialityWithIdOnly = await prisma.speciality.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpecialityUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Speciality.
     * @param {SpecialityUpsertArgs} args - Arguments to update or create a Speciality.
     * @example
     * // Update or create a Speciality
     * const speciality = await prisma.speciality.upsert({
     *   create: {
     *     // ... data to create a Speciality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Speciality we want to update
     *   }
     * })
     */
    upsert<T extends SpecialityUpsertArgs>(args: SelectSubset<T, SpecialityUpsertArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityCountArgs} args - Arguments to filter Specialities to count.
     * @example
     * // Count the number of Specialities
     * const count = await prisma.speciality.count({
     *   where: {
     *     // ... the filter for the Specialities we want to count
     *   }
     * })
    **/
    count<T extends SpecialityCountArgs>(
      args?: Subset<T, SpecialityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Speciality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpecialityAggregateArgs>(args: Subset<T, SpecialityAggregateArgs>): Prisma.PrismaPromise<GetSpecialityAggregateType<T>>

    /**
     * Group by Speciality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityGroupByArgs} args - Group by arguments.
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
      T extends SpecialityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialityGroupByArgs['orderBy'] }
        : { orderBy?: SpecialityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpecialityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Speciality model
   */
  readonly fields: SpecialityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Speciality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Speciality$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Speciality$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Speciality model
   */
  interface SpecialityFieldRefs {
    readonly id: FieldRef<"Speciality", 'Int'>
    readonly name: FieldRef<"Speciality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Speciality findUnique
   */
  export type SpecialityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality findUniqueOrThrow
   */
  export type SpecialityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality findFirst
   */
  export type SpecialityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialities.
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialities.
     */
    distinct?: SpecialityScalarFieldEnum | SpecialityScalarFieldEnum[]
  }

  /**
   * Speciality findFirstOrThrow
   */
  export type SpecialityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialities.
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialities.
     */
    distinct?: SpecialityScalarFieldEnum | SpecialityScalarFieldEnum[]
  }

  /**
   * Speciality findMany
   */
  export type SpecialityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Specialities to fetch.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialities.
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    distinct?: SpecialityScalarFieldEnum | SpecialityScalarFieldEnum[]
  }

  /**
   * Speciality create
   */
  export type SpecialityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * The data needed to create a Speciality.
     */
    data: XOR<SpecialityCreateInput, SpecialityUncheckedCreateInput>
  }

  /**
   * Speciality createMany
   */
  export type SpecialityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialities.
     */
    data: SpecialityCreateManyInput | SpecialityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speciality createManyAndReturn
   */
  export type SpecialityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * The data used to create many Specialities.
     */
    data: SpecialityCreateManyInput | SpecialityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speciality update
   */
  export type SpecialityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * The data needed to update a Speciality.
     */
    data: XOR<SpecialityUpdateInput, SpecialityUncheckedUpdateInput>
    /**
     * Choose, which Speciality to update.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality updateMany
   */
  export type SpecialityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialities.
     */
    data: XOR<SpecialityUpdateManyMutationInput, SpecialityUncheckedUpdateManyInput>
    /**
     * Filter which Specialities to update
     */
    where?: SpecialityWhereInput
    /**
     * Limit how many Specialities to update.
     */
    limit?: number
  }

  /**
   * Speciality updateManyAndReturn
   */
  export type SpecialityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * The data used to update Specialities.
     */
    data: XOR<SpecialityUpdateManyMutationInput, SpecialityUncheckedUpdateManyInput>
    /**
     * Filter which Specialities to update
     */
    where?: SpecialityWhereInput
    /**
     * Limit how many Specialities to update.
     */
    limit?: number
  }

  /**
   * Speciality upsert
   */
  export type SpecialityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * The filter to search for the Speciality to update in case it exists.
     */
    where: SpecialityWhereUniqueInput
    /**
     * In case the Speciality found by the `where` argument doesn't exist, create a new Speciality with this data.
     */
    create: XOR<SpecialityCreateInput, SpecialityUncheckedCreateInput>
    /**
     * In case the Speciality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialityUpdateInput, SpecialityUncheckedUpdateInput>
  }

  /**
   * Speciality delete
   */
  export type SpecialityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter which Speciality to delete.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality deleteMany
   */
  export type SpecialityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialities to delete
     */
    where?: SpecialityWhereInput
    /**
     * Limit how many Specialities to delete.
     */
    limit?: number
  }

  /**
   * Speciality.Users
   */
  export type Speciality$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Speciality without action
   */
  export type SpecialityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    appointment_date: Date | null
    doctorId: number | null
    patientId: number | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    appointment_date: Date | null
    doctorId: number | null
    patientId: number | null
    created_at: Date | null
    updated_at: Date | null
    status: $Enums.Status | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    appointment_date: number
    doctorId: number
    patientId: number
    created_at: number
    updated_at: number
    status: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    appointment_date?: true
    doctorId?: true
    patientId?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    appointment_date?: true
    doctorId?: true
    patientId?: true
    created_at?: true
    updated_at?: true
    status?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    appointment_date?: true
    doctorId?: true
    patientId?: true
    created_at?: true
    updated_at?: true
    status?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    appointment_date: Date
    doctorId: number
    patientId: number
    created_at: Date
    updated_at: Date
    status: $Enums.Status
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointment_date?: boolean
    doctorId?: boolean
    patientId?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointment_date?: boolean
    doctorId?: boolean
    patientId?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointment_date?: boolean
    doctorId?: boolean
    patientId?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    appointment_date?: boolean
    doctorId?: boolean
    patientId?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointment_date" | "doctorId" | "patientId" | "created_at" | "updated_at" | "status", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      appointment_date: Date
      doctorId: number
      patientId: number
      created_at: Date
      updated_at: Date
      status: $Enums.Status
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly appointment_date: FieldRef<"Appointment", 'DateTime'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
    readonly created_at: FieldRef<"Appointment", 'DateTime'>
    readonly updated_at: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street: string | null
    city: string | null
    governorate: string | null
    userId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    city: string | null
    governorate: string | null
    userId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    city: number
    governorate: number
    userId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    city?: true
    governorate?: true
    userId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    city?: true
    governorate?: true
    userId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    city?: true
    governorate?: true
    userId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    street: string
    city: string | null
    governorate: string
    userId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    governorate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    governorate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    governorate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    city?: boolean
    governorate?: boolean
    userId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "city" | "governorate" | "userId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      city: string | null
      governorate: string
      userId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly governorate: FieldRef<"Address", 'String'>
    readonly userId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model OffService
   */

  export type AggregateOffService = {
    _count: OffServiceCountAggregateOutputType | null
    _avg: OffServiceAvgAggregateOutputType | null
    _sum: OffServiceSumAggregateOutputType | null
    _min: OffServiceMinAggregateOutputType | null
    _max: OffServiceMaxAggregateOutputType | null
  }

  export type OffServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type OffServiceSumAggregateOutputType = {
    id: number | null
  }

  export type OffServiceMinAggregateOutputType = {
    id: number | null
    dayWeek: $Enums.DayOfWeek | null
  }

  export type OffServiceMaxAggregateOutputType = {
    id: number | null
    dayWeek: $Enums.DayOfWeek | null
  }

  export type OffServiceCountAggregateOutputType = {
    id: number
    dayWeek: number
    _all: number
  }


  export type OffServiceAvgAggregateInputType = {
    id?: true
  }

  export type OffServiceSumAggregateInputType = {
    id?: true
  }

  export type OffServiceMinAggregateInputType = {
    id?: true
    dayWeek?: true
  }

  export type OffServiceMaxAggregateInputType = {
    id?: true
    dayWeek?: true
  }

  export type OffServiceCountAggregateInputType = {
    id?: true
    dayWeek?: true
    _all?: true
  }

  export type OffServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffService to aggregate.
     */
    where?: OffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffServices to fetch.
     */
    orderBy?: OffServiceOrderByWithRelationInput | OffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OffServices
    **/
    _count?: true | OffServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OffServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OffServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OffServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OffServiceMaxAggregateInputType
  }

  export type GetOffServiceAggregateType<T extends OffServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateOffService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffService[P]>
      : GetScalarType<T[P], AggregateOffService[P]>
  }




  export type OffServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffServiceWhereInput
    orderBy?: OffServiceOrderByWithAggregationInput | OffServiceOrderByWithAggregationInput[]
    by: OffServiceScalarFieldEnum[] | OffServiceScalarFieldEnum
    having?: OffServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OffServiceCountAggregateInputType | true
    _avg?: OffServiceAvgAggregateInputType
    _sum?: OffServiceSumAggregateInputType
    _min?: OffServiceMinAggregateInputType
    _max?: OffServiceMaxAggregateInputType
  }

  export type OffServiceGroupByOutputType = {
    id: number
    dayWeek: $Enums.DayOfWeek
    _count: OffServiceCountAggregateOutputType | null
    _avg: OffServiceAvgAggregateOutputType | null
    _sum: OffServiceSumAggregateOutputType | null
    _min: OffServiceMinAggregateOutputType | null
    _max: OffServiceMaxAggregateOutputType | null
  }

  type GetOffServiceGroupByPayload<T extends OffServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OffServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OffServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OffServiceGroupByOutputType[P]>
            : GetScalarType<T[P], OffServiceGroupByOutputType[P]>
        }
      >
    >


  export type OffServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayWeek?: boolean
    users?: boolean | OffService$usersArgs<ExtArgs>
    _count?: boolean | OffServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offService"]>

  export type OffServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayWeek?: boolean
  }, ExtArgs["result"]["offService"]>

  export type OffServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayWeek?: boolean
  }, ExtArgs["result"]["offService"]>

  export type OffServiceSelectScalar = {
    id?: boolean
    dayWeek?: boolean
  }

  export type OffServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayWeek", ExtArgs["result"]["offService"]>
  export type OffServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OffService$usersArgs<ExtArgs>
    _count?: boolean | OffServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OffServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OffServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OffServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OffService"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dayWeek: $Enums.DayOfWeek
    }, ExtArgs["result"]["offService"]>
    composites: {}
  }

  type OffServiceGetPayload<S extends boolean | null | undefined | OffServiceDefaultArgs> = $Result.GetResult<Prisma.$OffServicePayload, S>

  type OffServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OffServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OffServiceCountAggregateInputType | true
    }

  export interface OffServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OffService'], meta: { name: 'OffService' } }
    /**
     * Find zero or one OffService that matches the filter.
     * @param {OffServiceFindUniqueArgs} args - Arguments to find a OffService
     * @example
     * // Get one OffService
     * const offService = await prisma.offService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OffServiceFindUniqueArgs>(args: SelectSubset<T, OffServiceFindUniqueArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OffService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OffServiceFindUniqueOrThrowArgs} args - Arguments to find a OffService
     * @example
     * // Get one OffService
     * const offService = await prisma.offService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OffServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, OffServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OffService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceFindFirstArgs} args - Arguments to find a OffService
     * @example
     * // Get one OffService
     * const offService = await prisma.offService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OffServiceFindFirstArgs>(args?: SelectSubset<T, OffServiceFindFirstArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OffService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceFindFirstOrThrowArgs} args - Arguments to find a OffService
     * @example
     * // Get one OffService
     * const offService = await prisma.offService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OffServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, OffServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OffServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OffServices
     * const offServices = await prisma.offService.findMany()
     * 
     * // Get first 10 OffServices
     * const offServices = await prisma.offService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offServiceWithIdOnly = await prisma.offService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OffServiceFindManyArgs>(args?: SelectSubset<T, OffServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OffService.
     * @param {OffServiceCreateArgs} args - Arguments to create a OffService.
     * @example
     * // Create one OffService
     * const OffService = await prisma.offService.create({
     *   data: {
     *     // ... data to create a OffService
     *   }
     * })
     * 
     */
    create<T extends OffServiceCreateArgs>(args: SelectSubset<T, OffServiceCreateArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OffServices.
     * @param {OffServiceCreateManyArgs} args - Arguments to create many OffServices.
     * @example
     * // Create many OffServices
     * const offService = await prisma.offService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OffServiceCreateManyArgs>(args?: SelectSubset<T, OffServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OffServices and returns the data saved in the database.
     * @param {OffServiceCreateManyAndReturnArgs} args - Arguments to create many OffServices.
     * @example
     * // Create many OffServices
     * const offService = await prisma.offService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OffServices and only return the `id`
     * const offServiceWithIdOnly = await prisma.offService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OffServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, OffServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OffService.
     * @param {OffServiceDeleteArgs} args - Arguments to delete one OffService.
     * @example
     * // Delete one OffService
     * const OffService = await prisma.offService.delete({
     *   where: {
     *     // ... filter to delete one OffService
     *   }
     * })
     * 
     */
    delete<T extends OffServiceDeleteArgs>(args: SelectSubset<T, OffServiceDeleteArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OffService.
     * @param {OffServiceUpdateArgs} args - Arguments to update one OffService.
     * @example
     * // Update one OffService
     * const offService = await prisma.offService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OffServiceUpdateArgs>(args: SelectSubset<T, OffServiceUpdateArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OffServices.
     * @param {OffServiceDeleteManyArgs} args - Arguments to filter OffServices to delete.
     * @example
     * // Delete a few OffServices
     * const { count } = await prisma.offService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OffServiceDeleteManyArgs>(args?: SelectSubset<T, OffServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OffServices
     * const offService = await prisma.offService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OffServiceUpdateManyArgs>(args: SelectSubset<T, OffServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffServices and returns the data updated in the database.
     * @param {OffServiceUpdateManyAndReturnArgs} args - Arguments to update many OffServices.
     * @example
     * // Update many OffServices
     * const offService = await prisma.offService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OffServices and only return the `id`
     * const offServiceWithIdOnly = await prisma.offService.updateManyAndReturn({
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
    updateManyAndReturn<T extends OffServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, OffServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OffService.
     * @param {OffServiceUpsertArgs} args - Arguments to update or create a OffService.
     * @example
     * // Update or create a OffService
     * const offService = await prisma.offService.upsert({
     *   create: {
     *     // ... data to create a OffService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OffService we want to update
     *   }
     * })
     */
    upsert<T extends OffServiceUpsertArgs>(args: SelectSubset<T, OffServiceUpsertArgs<ExtArgs>>): Prisma__OffServiceClient<$Result.GetResult<Prisma.$OffServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OffServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceCountArgs} args - Arguments to filter OffServices to count.
     * @example
     * // Count the number of OffServices
     * const count = await prisma.offService.count({
     *   where: {
     *     // ... the filter for the OffServices we want to count
     *   }
     * })
    **/
    count<T extends OffServiceCountArgs>(
      args?: Subset<T, OffServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OffServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OffService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OffServiceAggregateArgs>(args: Subset<T, OffServiceAggregateArgs>): Prisma.PrismaPromise<GetOffServiceAggregateType<T>>

    /**
     * Group by OffService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffServiceGroupByArgs} args - Group by arguments.
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
      T extends OffServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OffServiceGroupByArgs['orderBy'] }
        : { orderBy?: OffServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OffServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OffService model
   */
  readonly fields: OffServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OffService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OffServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends OffService$usersArgs<ExtArgs> = {}>(args?: Subset<T, OffService$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OffService model
   */
  interface OffServiceFieldRefs {
    readonly id: FieldRef<"OffService", 'Int'>
    readonly dayWeek: FieldRef<"OffService", 'DayOfWeek'>
  }
    

  // Custom InputTypes
  /**
   * OffService findUnique
   */
  export type OffServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * Filter, which OffService to fetch.
     */
    where: OffServiceWhereUniqueInput
  }

  /**
   * OffService findUniqueOrThrow
   */
  export type OffServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * Filter, which OffService to fetch.
     */
    where: OffServiceWhereUniqueInput
  }

  /**
   * OffService findFirst
   */
  export type OffServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * Filter, which OffService to fetch.
     */
    where?: OffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffServices to fetch.
     */
    orderBy?: OffServiceOrderByWithRelationInput | OffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffServices.
     */
    cursor?: OffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffServices.
     */
    distinct?: OffServiceScalarFieldEnum | OffServiceScalarFieldEnum[]
  }

  /**
   * OffService findFirstOrThrow
   */
  export type OffServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * Filter, which OffService to fetch.
     */
    where?: OffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffServices to fetch.
     */
    orderBy?: OffServiceOrderByWithRelationInput | OffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffServices.
     */
    cursor?: OffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffServices.
     */
    distinct?: OffServiceScalarFieldEnum | OffServiceScalarFieldEnum[]
  }

  /**
   * OffService findMany
   */
  export type OffServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * Filter, which OffServices to fetch.
     */
    where?: OffServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffServices to fetch.
     */
    orderBy?: OffServiceOrderByWithRelationInput | OffServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OffServices.
     */
    cursor?: OffServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffServices.
     */
    skip?: number
    distinct?: OffServiceScalarFieldEnum | OffServiceScalarFieldEnum[]
  }

  /**
   * OffService create
   */
  export type OffServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a OffService.
     */
    data: XOR<OffServiceCreateInput, OffServiceUncheckedCreateInput>
  }

  /**
   * OffService createMany
   */
  export type OffServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OffServices.
     */
    data: OffServiceCreateManyInput | OffServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffService createManyAndReturn
   */
  export type OffServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * The data used to create many OffServices.
     */
    data: OffServiceCreateManyInput | OffServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffService update
   */
  export type OffServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a OffService.
     */
    data: XOR<OffServiceUpdateInput, OffServiceUncheckedUpdateInput>
    /**
     * Choose, which OffService to update.
     */
    where: OffServiceWhereUniqueInput
  }

  /**
   * OffService updateMany
   */
  export type OffServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OffServices.
     */
    data: XOR<OffServiceUpdateManyMutationInput, OffServiceUncheckedUpdateManyInput>
    /**
     * Filter which OffServices to update
     */
    where?: OffServiceWhereInput
    /**
     * Limit how many OffServices to update.
     */
    limit?: number
  }

  /**
   * OffService updateManyAndReturn
   */
  export type OffServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * The data used to update OffServices.
     */
    data: XOR<OffServiceUpdateManyMutationInput, OffServiceUncheckedUpdateManyInput>
    /**
     * Filter which OffServices to update
     */
    where?: OffServiceWhereInput
    /**
     * Limit how many OffServices to update.
     */
    limit?: number
  }

  /**
   * OffService upsert
   */
  export type OffServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the OffService to update in case it exists.
     */
    where: OffServiceWhereUniqueInput
    /**
     * In case the OffService found by the `where` argument doesn't exist, create a new OffService with this data.
     */
    create: XOR<OffServiceCreateInput, OffServiceUncheckedCreateInput>
    /**
     * In case the OffService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OffServiceUpdateInput, OffServiceUncheckedUpdateInput>
  }

  /**
   * OffService delete
   */
  export type OffServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
    /**
     * Filter which OffService to delete.
     */
    where: OffServiceWhereUniqueInput
  }

  /**
   * OffService deleteMany
   */
  export type OffServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffServices to delete
     */
    where?: OffServiceWhereInput
    /**
     * Limit how many OffServices to delete.
     */
    limit?: number
  }

  /**
   * OffService.users
   */
  export type OffService$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * OffService without action
   */
  export type OffServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffService
     */
    select?: OffServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffService
     */
    omit?: OffServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OffServiceInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type HolidaySumAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type HolidayMinAggregateOutputType = {
    id: number | null
    start_day: Date | null
    end_day: Date | null
    doctorId: number | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: number | null
    start_day: Date | null
    end_day: Date | null
    doctorId: number | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    start_day: number
    end_day: number
    doctorId: number
    _all: number
  }


  export type HolidayAvgAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type HolidaySumAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type HolidayMinAggregateInputType = {
    id?: true
    start_day?: true
    end_day?: true
    doctorId?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    start_day?: true
    end_day?: true
    doctorId?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    start_day?: true
    end_day?: true
    doctorId?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HolidayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HolidaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _avg?: HolidayAvgAggregateInputType
    _sum?: HolidaySumAggregateInputType
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: number
    start_day: Date
    end_day: Date
    doctorId: number
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_day?: boolean
    end_day?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_day?: boolean
    end_day?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_day?: boolean
    end_day?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectScalar = {
    id?: boolean
    start_day?: boolean
    end_day?: boolean
    doctorId?: boolean
  }

  export type HolidayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_day" | "end_day" | "doctorId", ExtArgs["result"]["holiday"]>
  export type HolidayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HolidayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HolidayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_day: Date
      end_day: Date
      doctorId: number
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays and returns the data updated in the database.
     * @param {HolidayUpdateManyAndReturnArgs} args - Arguments to update many Holidays.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.updateManyAndReturn({
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
    updateManyAndReturn<T extends HolidayUpdateManyAndReturnArgs>(args: SelectSubset<T, HolidayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
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
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Holiday model
   */
  interface HolidayFieldRefs {
    readonly id: FieldRef<"Holiday", 'Int'>
    readonly start_day: FieldRef<"Holiday", 'DateTime'>
    readonly end_day: FieldRef<"Holiday", 'DateTime'>
    readonly doctorId: FieldRef<"Holiday", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday createManyAndReturn
   */
  export type HolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
  }

  /**
   * Holiday updateManyAndReturn
   */
  export type HolidayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
    /**
     * Limit how many Holidays to delete.
     */
    limit?: number
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holiday
     */
    omit?: HolidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HolidayInclude<ExtArgs> | null
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
    password: 'password',
    phone: 'phone',
    description: 'description',
    image: 'image',
    role: 'role',
    created_at: 'created_at',
    update_at: 'update_at',
    specialtyId: 'specialtyId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SpecialityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SpecialityScalarFieldEnum = (typeof SpecialityScalarFieldEnum)[keyof typeof SpecialityScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    appointment_date: 'appointment_date',
    doctorId: 'doctorId',
    patientId: 'patientId',
    created_at: 'created_at',
    updated_at: 'updated_at',
    status: 'status'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    city: 'city',
    governorate: 'governorate',
    userId: 'userId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const OffServiceScalarFieldEnum: {
    id: 'id',
    dayWeek: 'dayWeek'
  };

  export type OffServiceScalarFieldEnum = (typeof OffServiceScalarFieldEnum)[keyof typeof OffServiceScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    start_day: 'start_day',
    end_day: 'end_day',
    doctorId: 'doctorId'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


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
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    description?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    specialtyId?: IntNullableFilter<"User"> | number | null
    appointmentsAsDoctor?: AppointmentListRelationFilter
    appointmentsAsPatient?: AppointmentListRelationFilter
    adress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    OffServices?: OffServiceListRelationFilter
    holidays?: HolidayListRelationFilter
    speciality?: XOR<SpecialityNullableScalarRelationFilter, SpecialityWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    specialtyId?: SortOrderInput | SortOrder
    appointmentsAsDoctor?: AppointmentOrderByRelationAggregateInput
    appointmentsAsPatient?: AppointmentOrderByRelationAggregateInput
    adress?: AddressOrderByWithRelationInput
    OffServices?: OffServiceOrderByRelationAggregateInput
    holidays?: HolidayOrderByRelationAggregateInput
    speciality?: SpecialityOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    description?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    specialtyId?: IntNullableFilter<"User"> | number | null
    appointmentsAsDoctor?: AppointmentListRelationFilter
    appointmentsAsPatient?: AppointmentListRelationFilter
    adress?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    OffServices?: OffServiceListRelationFilter
    holidays?: HolidayListRelationFilter
    speciality?: XOR<SpecialityNullableScalarRelationFilter, SpecialityWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    specialtyId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    specialtyId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type SpecialityWhereInput = {
    AND?: SpecialityWhereInput | SpecialityWhereInput[]
    OR?: SpecialityWhereInput[]
    NOT?: SpecialityWhereInput | SpecialityWhereInput[]
    id?: IntFilter<"Speciality"> | number
    name?: StringFilter<"Speciality"> | string
    Users?: UserListRelationFilter
  }

  export type SpecialityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Users?: UserOrderByRelationAggregateInput
  }

  export type SpecialityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpecialityWhereInput | SpecialityWhereInput[]
    OR?: SpecialityWhereInput[]
    NOT?: SpecialityWhereInput | SpecialityWhereInput[]
    name?: StringFilter<"Speciality"> | string
    Users?: UserListRelationFilter
  }, "id">

  export type SpecialityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SpecialityCountOrderByAggregateInput
    _avg?: SpecialityAvgOrderByAggregateInput
    _max?: SpecialityMaxOrderByAggregateInput
    _min?: SpecialityMinOrderByAggregateInput
    _sum?: SpecialitySumOrderByAggregateInput
  }

  export type SpecialityScalarWhereWithAggregatesInput = {
    AND?: SpecialityScalarWhereWithAggregatesInput | SpecialityScalarWhereWithAggregatesInput[]
    OR?: SpecialityScalarWhereWithAggregatesInput[]
    NOT?: SpecialityScalarWhereWithAggregatesInput | SpecialityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Speciality"> | number
    name?: StringWithAggregatesFilter<"Speciality"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    appointment_date?: DateTimeFilter<"Appointment"> | Date | string
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    appointment_date?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    appointment_date?: DateTimeFilter<"Appointment"> | Date | string
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    appointment_date?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    appointment_date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
    created_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Appointment"> | $Enums.Status
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    street?: StringFilter<"Address"> | string
    city?: StringNullableFilter<"Address"> | string | null
    governorate?: StringFilter<"Address"> | string
    userId?: IntFilter<"Address"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrderInput | SortOrder
    governorate?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    city?: StringNullableFilter<"Address"> | string | null
    governorate?: StringFilter<"Address"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrderInput | SortOrder
    governorate?: SortOrder
    userId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    governorate?: StringWithAggregatesFilter<"Address"> | string
    userId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type OffServiceWhereInput = {
    AND?: OffServiceWhereInput | OffServiceWhereInput[]
    OR?: OffServiceWhereInput[]
    NOT?: OffServiceWhereInput | OffServiceWhereInput[]
    id?: IntFilter<"OffService"> | number
    dayWeek?: EnumDayOfWeekFilter<"OffService"> | $Enums.DayOfWeek
    users?: UserListRelationFilter
  }

  export type OffServiceOrderByWithRelationInput = {
    id?: SortOrder
    dayWeek?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type OffServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OffServiceWhereInput | OffServiceWhereInput[]
    OR?: OffServiceWhereInput[]
    NOT?: OffServiceWhereInput | OffServiceWhereInput[]
    dayWeek?: EnumDayOfWeekFilter<"OffService"> | $Enums.DayOfWeek
    users?: UserListRelationFilter
  }, "id">

  export type OffServiceOrderByWithAggregationInput = {
    id?: SortOrder
    dayWeek?: SortOrder
    _count?: OffServiceCountOrderByAggregateInput
    _avg?: OffServiceAvgOrderByAggregateInput
    _max?: OffServiceMaxOrderByAggregateInput
    _min?: OffServiceMinOrderByAggregateInput
    _sum?: OffServiceSumOrderByAggregateInput
  }

  export type OffServiceScalarWhereWithAggregatesInput = {
    AND?: OffServiceScalarWhereWithAggregatesInput | OffServiceScalarWhereWithAggregatesInput[]
    OR?: OffServiceScalarWhereWithAggregatesInput[]
    NOT?: OffServiceScalarWhereWithAggregatesInput | OffServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OffService"> | number
    dayWeek?: EnumDayOfWeekWithAggregatesFilter<"OffService"> | $Enums.DayOfWeek
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    id?: IntFilter<"Holiday"> | number
    start_day?: DateTimeFilter<"Holiday"> | Date | string
    end_day?: DateTimeFilter<"Holiday"> | Date | string
    doctorId?: IntFilter<"Holiday"> | number
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HolidayOrderByWithRelationInput = {
    id?: SortOrder
    start_day?: SortOrder
    end_day?: SortOrder
    doctorId?: SortOrder
    doctor?: UserOrderByWithRelationInput
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    start_day?: DateTimeFilter<"Holiday"> | Date | string
    end_day?: DateTimeFilter<"Holiday"> | Date | string
    doctorId?: IntFilter<"Holiday"> | number
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HolidayOrderByWithAggregationInput = {
    id?: SortOrder
    start_day?: SortOrder
    end_day?: SortOrder
    doctorId?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _avg?: HolidayAvgOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
    _sum?: HolidaySumOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Holiday"> | number
    start_day?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    end_day?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    doctorId?: IntWithAggregatesFilter<"Holiday"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    adress?: AddressCreateNestedOneWithoutUserInput
    OffServices?: OffServiceCreateNestedManyWithoutUsersInput
    holidays?: HolidayCreateNestedManyWithoutDoctorInput
    speciality?: SpecialityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    adress?: AddressUncheckedCreateNestedOneWithoutUserInput
    OffServices?: OffServiceUncheckedCreateNestedManyWithoutUsersInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    adress?: AddressUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUpdateManyWithoutDoctorNestedInput
    speciality?: SpecialityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    adress?: AddressUncheckedUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUncheckedUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SpecialityCreateInput = {
    name: string
    Users?: UserCreateNestedManyWithoutSpecialityInput
  }

  export type SpecialityUncheckedCreateInput = {
    id?: number
    name: string
    Users?: UserUncheckedCreateNestedManyWithoutSpecialityInput
  }

  export type SpecialityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Users?: UserUpdateManyWithoutSpecialityNestedInput
  }

  export type SpecialityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutSpecialityNestedInput
  }

  export type SpecialityCreateManyInput = {
    id?: number
    name: string
  }

  export type SpecialityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    appointment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    appointment_date: Date | string
    doctorId: number
    patientId: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type AppointmentUpdateInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentCreateManyInput = {
    id?: number
    appointment_date: Date | string
    doctorId: number
    patientId: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type AppointmentUpdateManyMutationInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AddressCreateInput = {
    street: string
    city?: string | null
    governorate: string
    user: UserCreateNestedOneWithoutAdressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street: string
    city?: string | null
    governorate: string
    userId: number
  }

  export type AddressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    street: string
    city?: string | null
    governorate: string
    userId: number
  }

  export type AddressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OffServiceCreateInput = {
    dayWeek: $Enums.DayOfWeek
    users?: UserCreateNestedManyWithoutOffServicesInput
  }

  export type OffServiceUncheckedCreateInput = {
    id?: number
    dayWeek: $Enums.DayOfWeek
    users?: UserUncheckedCreateNestedManyWithoutOffServicesInput
  }

  export type OffServiceUpdateInput = {
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    users?: UserUpdateManyWithoutOffServicesNestedInput
  }

  export type OffServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    users?: UserUncheckedUpdateManyWithoutOffServicesNestedInput
  }

  export type OffServiceCreateManyInput = {
    id?: number
    dayWeek: $Enums.DayOfWeek
  }

  export type OffServiceUpdateManyMutationInput = {
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type OffServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type HolidayCreateInput = {
    start_day: Date | string
    end_day: Date | string
    doctor: UserCreateNestedOneWithoutHolidaysInput
  }

  export type HolidayUncheckedCreateInput = {
    id?: number
    start_day: Date | string
    end_day: Date | string
    doctorId: number
  }

  export type HolidayUpdateInput = {
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutHolidaysNestedInput
  }

  export type HolidayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type HolidayCreateManyInput = {
    id?: number
    start_day: Date | string
    end_day: Date | string
    doctorId: number
  }

  export type HolidayUpdateManyMutationInput = {
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type OffServiceListRelationFilter = {
    every?: OffServiceWhereInput
    some?: OffServiceWhereInput
    none?: OffServiceWhereInput
  }

  export type HolidayListRelationFilter = {
    every?: HolidayWhereInput
    some?: HolidayWhereInput
    none?: HolidayWhereInput
  }

  export type SpecialityNullableScalarRelationFilter = {
    is?: SpecialityWhereInput | null
    isNot?: SpecialityWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OffServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HolidayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    specialtyId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    specialtyId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    specialtyId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    specialtyId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    specialtyId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SpecialitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    appointment_date?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointment_date?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    appointment_date?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    status?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    userId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    userId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    userId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type OffServiceCountOrderByAggregateInput = {
    id?: SortOrder
    dayWeek?: SortOrder
  }

  export type OffServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OffServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    dayWeek?: SortOrder
  }

  export type OffServiceMinOrderByAggregateInput = {
    id?: SortOrder
    dayWeek?: SortOrder
  }

  export type OffServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type HolidayCountOrderByAggregateInput = {
    id?: SortOrder
    start_day?: SortOrder
    end_day?: SortOrder
    doctorId?: SortOrder
  }

  export type HolidayAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    start_day?: SortOrder
    end_day?: SortOrder
    doctorId?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    id?: SortOrder
    start_day?: SortOrder
    end_day?: SortOrder
    doctorId?: SortOrder
  }

  export type HolidaySumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AddressCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type OffServiceCreateNestedManyWithoutUsersInput = {
    create?: XOR<OffServiceCreateWithoutUsersInput, OffServiceUncheckedCreateWithoutUsersInput> | OffServiceCreateWithoutUsersInput[] | OffServiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OffServiceCreateOrConnectWithoutUsersInput | OffServiceCreateOrConnectWithoutUsersInput[]
    connect?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
  }

  export type HolidayCreateNestedManyWithoutDoctorInput = {
    create?: XOR<HolidayCreateWithoutDoctorInput, HolidayUncheckedCreateWithoutDoctorInput> | HolidayCreateWithoutDoctorInput[] | HolidayUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutDoctorInput | HolidayCreateOrConnectWithoutDoctorInput[]
    createMany?: HolidayCreateManyDoctorInputEnvelope
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type SpecialityCreateNestedOneWithoutUsersInput = {
    create?: XOR<SpecialityCreateWithoutUsersInput, SpecialityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SpecialityCreateOrConnectWithoutUsersInput
    connect?: SpecialityWhereUniqueInput
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type OffServiceUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<OffServiceCreateWithoutUsersInput, OffServiceUncheckedCreateWithoutUsersInput> | OffServiceCreateWithoutUsersInput[] | OffServiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OffServiceCreateOrConnectWithoutUsersInput | OffServiceCreateOrConnectWithoutUsersInput[]
    connect?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
  }

  export type HolidayUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<HolidayCreateWithoutDoctorInput, HolidayUncheckedCreateWithoutDoctorInput> | HolidayCreateWithoutDoctorInput[] | HolidayUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutDoctorInput | HolidayCreateOrConnectWithoutDoctorInput[]
    createMany?: HolidayCreateManyDoctorInputEnvelope
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AddressUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type OffServiceUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OffServiceCreateWithoutUsersInput, OffServiceUncheckedCreateWithoutUsersInput> | OffServiceCreateWithoutUsersInput[] | OffServiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OffServiceCreateOrConnectWithoutUsersInput | OffServiceCreateOrConnectWithoutUsersInput[]
    upsert?: OffServiceUpsertWithWhereUniqueWithoutUsersInput | OffServiceUpsertWithWhereUniqueWithoutUsersInput[]
    set?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    disconnect?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    delete?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    connect?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    update?: OffServiceUpdateWithWhereUniqueWithoutUsersInput | OffServiceUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OffServiceUpdateManyWithWhereWithoutUsersInput | OffServiceUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OffServiceScalarWhereInput | OffServiceScalarWhereInput[]
  }

  export type HolidayUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<HolidayCreateWithoutDoctorInput, HolidayUncheckedCreateWithoutDoctorInput> | HolidayCreateWithoutDoctorInput[] | HolidayUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutDoctorInput | HolidayCreateOrConnectWithoutDoctorInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutDoctorInput | HolidayUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: HolidayCreateManyDoctorInputEnvelope
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutDoctorInput | HolidayUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutDoctorInput | HolidayUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type SpecialityUpdateOneWithoutUsersNestedInput = {
    create?: XOR<SpecialityCreateWithoutUsersInput, SpecialityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SpecialityCreateOrConnectWithoutUsersInput
    upsert?: SpecialityUpsertWithoutUsersInput
    disconnect?: SpecialityWhereInput | boolean
    delete?: SpecialityWhereInput | boolean
    connect?: SpecialityWhereUniqueInput
    update?: XOR<XOR<SpecialityUpdateToOneWithWhereWithoutUsersInput, SpecialityUpdateWithoutUsersInput>, SpecialityUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type OffServiceUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OffServiceCreateWithoutUsersInput, OffServiceUncheckedCreateWithoutUsersInput> | OffServiceCreateWithoutUsersInput[] | OffServiceUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OffServiceCreateOrConnectWithoutUsersInput | OffServiceCreateOrConnectWithoutUsersInput[]
    upsert?: OffServiceUpsertWithWhereUniqueWithoutUsersInput | OffServiceUpsertWithWhereUniqueWithoutUsersInput[]
    set?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    disconnect?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    delete?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    connect?: OffServiceWhereUniqueInput | OffServiceWhereUniqueInput[]
    update?: OffServiceUpdateWithWhereUniqueWithoutUsersInput | OffServiceUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OffServiceUpdateManyWithWhereWithoutUsersInput | OffServiceUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OffServiceScalarWhereInput | OffServiceScalarWhereInput[]
  }

  export type HolidayUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<HolidayCreateWithoutDoctorInput, HolidayUncheckedCreateWithoutDoctorInput> | HolidayCreateWithoutDoctorInput[] | HolidayUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: HolidayCreateOrConnectWithoutDoctorInput | HolidayCreateOrConnectWithoutDoctorInput[]
    upsert?: HolidayUpsertWithWhereUniqueWithoutDoctorInput | HolidayUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: HolidayCreateManyDoctorInputEnvelope
    set?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    disconnect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    delete?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    connect?: HolidayWhereUniqueInput | HolidayWhereUniqueInput[]
    update?: HolidayUpdateWithWhereUniqueWithoutDoctorInput | HolidayUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: HolidayUpdateManyWithWhereWithoutDoctorInput | HolidayUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<UserCreateWithoutSpecialityInput, UserUncheckedCreateWithoutSpecialityInput> | UserCreateWithoutSpecialityInput[] | UserUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialityInput | UserCreateOrConnectWithoutSpecialityInput[]
    createMany?: UserCreateManySpecialityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<UserCreateWithoutSpecialityInput, UserUncheckedCreateWithoutSpecialityInput> | UserCreateWithoutSpecialityInput[] | UserUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialityInput | UserCreateOrConnectWithoutSpecialityInput[]
    createMany?: UserCreateManySpecialityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<UserCreateWithoutSpecialityInput, UserUncheckedCreateWithoutSpecialityInput> | UserCreateWithoutSpecialityInput[] | UserUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialityInput | UserCreateOrConnectWithoutSpecialityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSpecialityInput | UserUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: UserCreateManySpecialityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSpecialityInput | UserUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSpecialityInput | UserUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<UserCreateWithoutSpecialityInput, UserUncheckedCreateWithoutSpecialityInput> | UserCreateWithoutSpecialityInput[] | UserUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSpecialityInput | UserCreateOrConnectWithoutSpecialityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSpecialityInput | UserUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: UserCreateManySpecialityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSpecialityInput | UserUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSpecialityInput | UserUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsAsDoctorInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsAsPatientInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsPatientInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsDoctorInput
    upsert?: UserUpsertWithoutAppointmentsAsDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsDoctorInput, UserUpdateWithoutAppointmentsAsDoctorInput>, UserUncheckedUpdateWithoutAppointmentsAsDoctorInput>
  }

  export type UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsAsPatientInput
    upsert?: UserUpsertWithoutAppointmentsAsPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsAsPatientInput, UserUpdateWithoutAppointmentsAsPatientInput>, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
  }

  export type UserCreateNestedOneWithoutAdressInput = {
    create?: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdressNestedInput = {
    create?: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdressInput
    upsert?: UserUpsertWithoutAdressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdressInput, UserUpdateWithoutAdressInput>, UserUncheckedUpdateWithoutAdressInput>
  }

  export type UserCreateNestedManyWithoutOffServicesInput = {
    create?: XOR<UserCreateWithoutOffServicesInput, UserUncheckedCreateWithoutOffServicesInput> | UserCreateWithoutOffServicesInput[] | UserUncheckedCreateWithoutOffServicesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOffServicesInput | UserCreateOrConnectWithoutOffServicesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOffServicesInput = {
    create?: XOR<UserCreateWithoutOffServicesInput, UserUncheckedCreateWithoutOffServicesInput> | UserCreateWithoutOffServicesInput[] | UserUncheckedCreateWithoutOffServicesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOffServicesInput | UserCreateOrConnectWithoutOffServicesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type UserUpdateManyWithoutOffServicesNestedInput = {
    create?: XOR<UserCreateWithoutOffServicesInput, UserUncheckedCreateWithoutOffServicesInput> | UserCreateWithoutOffServicesInput[] | UserUncheckedCreateWithoutOffServicesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOffServicesInput | UserCreateOrConnectWithoutOffServicesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOffServicesInput | UserUpsertWithWhereUniqueWithoutOffServicesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOffServicesInput | UserUpdateWithWhereUniqueWithoutOffServicesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOffServicesInput | UserUpdateManyWithWhereWithoutOffServicesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOffServicesNestedInput = {
    create?: XOR<UserCreateWithoutOffServicesInput, UserUncheckedCreateWithoutOffServicesInput> | UserCreateWithoutOffServicesInput[] | UserUncheckedCreateWithoutOffServicesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOffServicesInput | UserCreateOrConnectWithoutOffServicesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOffServicesInput | UserUpsertWithWhereUniqueWithoutOffServicesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOffServicesInput | UserUpdateWithWhereUniqueWithoutOffServicesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOffServicesInput | UserUpdateManyWithWhereWithoutOffServicesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHolidaysInput = {
    create?: XOR<UserCreateWithoutHolidaysInput, UserUncheckedCreateWithoutHolidaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutHolidaysInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHolidaysNestedInput = {
    create?: XOR<UserCreateWithoutHolidaysInput, UserUncheckedCreateWithoutHolidaysInput>
    connectOrCreate?: UserCreateOrConnectWithoutHolidaysInput
    upsert?: UserUpsertWithoutHolidaysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHolidaysInput, UserUpdateWithoutHolidaysInput>, UserUncheckedUpdateWithoutHolidaysInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    appointment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    patient: UserCreateNestedOneWithoutAppointmentsAsPatientInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    appointment_date: Date | string
    patientId: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    appointment_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
    doctor: UserCreateNestedOneWithoutAppointmentsAsDoctorInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    appointment_date: Date | string
    doctorId: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUserInput = {
    street: string
    city?: string | null
    governorate: string
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    street: string
    city?: string | null
    governorate: string
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type OffServiceCreateWithoutUsersInput = {
    dayWeek: $Enums.DayOfWeek
  }

  export type OffServiceUncheckedCreateWithoutUsersInput = {
    id?: number
    dayWeek: $Enums.DayOfWeek
  }

  export type OffServiceCreateOrConnectWithoutUsersInput = {
    where: OffServiceWhereUniqueInput
    create: XOR<OffServiceCreateWithoutUsersInput, OffServiceUncheckedCreateWithoutUsersInput>
  }

  export type HolidayCreateWithoutDoctorInput = {
    start_day: Date | string
    end_day: Date | string
  }

  export type HolidayUncheckedCreateWithoutDoctorInput = {
    id?: number
    start_day: Date | string
    end_day: Date | string
  }

  export type HolidayCreateOrConnectWithoutDoctorInput = {
    where: HolidayWhereUniqueInput
    create: XOR<HolidayCreateWithoutDoctorInput, HolidayUncheckedCreateWithoutDoctorInput>
  }

  export type HolidayCreateManyDoctorInputEnvelope = {
    data: HolidayCreateManyDoctorInput | HolidayCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type SpecialityCreateWithoutUsersInput = {
    name: string
  }

  export type SpecialityUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type SpecialityCreateOrConnectWithoutUsersInput = {
    where: SpecialityWhereUniqueInput
    create: XOR<SpecialityCreateWithoutUsersInput, SpecialityUncheckedCreateWithoutUsersInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    appointment_date?: DateTimeFilter<"Appointment"> | Date | string
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumStatusFilter<"Appointment"> | $Enums.Status
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AddressUpsertWithoutUserInput = {
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateWithoutUserInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: StringFieldUpdateOperationsInput | string
  }

  export type OffServiceUpsertWithWhereUniqueWithoutUsersInput = {
    where: OffServiceWhereUniqueInput
    update: XOR<OffServiceUpdateWithoutUsersInput, OffServiceUncheckedUpdateWithoutUsersInput>
    create: XOR<OffServiceCreateWithoutUsersInput, OffServiceUncheckedCreateWithoutUsersInput>
  }

  export type OffServiceUpdateWithWhereUniqueWithoutUsersInput = {
    where: OffServiceWhereUniqueInput
    data: XOR<OffServiceUpdateWithoutUsersInput, OffServiceUncheckedUpdateWithoutUsersInput>
  }

  export type OffServiceUpdateManyWithWhereWithoutUsersInput = {
    where: OffServiceScalarWhereInput
    data: XOR<OffServiceUpdateManyMutationInput, OffServiceUncheckedUpdateManyWithoutUsersInput>
  }

  export type OffServiceScalarWhereInput = {
    AND?: OffServiceScalarWhereInput | OffServiceScalarWhereInput[]
    OR?: OffServiceScalarWhereInput[]
    NOT?: OffServiceScalarWhereInput | OffServiceScalarWhereInput[]
    id?: IntFilter<"OffService"> | number
    dayWeek?: EnumDayOfWeekFilter<"OffService"> | $Enums.DayOfWeek
  }

  export type HolidayUpsertWithWhereUniqueWithoutDoctorInput = {
    where: HolidayWhereUniqueInput
    update: XOR<HolidayUpdateWithoutDoctorInput, HolidayUncheckedUpdateWithoutDoctorInput>
    create: XOR<HolidayCreateWithoutDoctorInput, HolidayUncheckedCreateWithoutDoctorInput>
  }

  export type HolidayUpdateWithWhereUniqueWithoutDoctorInput = {
    where: HolidayWhereUniqueInput
    data: XOR<HolidayUpdateWithoutDoctorInput, HolidayUncheckedUpdateWithoutDoctorInput>
  }

  export type HolidayUpdateManyWithWhereWithoutDoctorInput = {
    where: HolidayScalarWhereInput
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyWithoutDoctorInput>
  }

  export type HolidayScalarWhereInput = {
    AND?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    OR?: HolidayScalarWhereInput[]
    NOT?: HolidayScalarWhereInput | HolidayScalarWhereInput[]
    id?: IntFilter<"Holiday"> | number
    start_day?: DateTimeFilter<"Holiday"> | Date | string
    end_day?: DateTimeFilter<"Holiday"> | Date | string
    doctorId?: IntFilter<"Holiday"> | number
  }

  export type SpecialityUpsertWithoutUsersInput = {
    update: XOR<SpecialityUpdateWithoutUsersInput, SpecialityUncheckedUpdateWithoutUsersInput>
    create: XOR<SpecialityCreateWithoutUsersInput, SpecialityUncheckedCreateWithoutUsersInput>
    where?: SpecialityWhereInput
  }

  export type SpecialityUpdateToOneWithWhereWithoutUsersInput = {
    where?: SpecialityWhereInput
    data: XOR<SpecialityUpdateWithoutUsersInput, SpecialityUncheckedUpdateWithoutUsersInput>
  }

  export type SpecialityUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialityUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutSpecialityInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    adress?: AddressCreateNestedOneWithoutUserInput
    OffServices?: OffServiceCreateNestedManyWithoutUsersInput
    holidays?: HolidayCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutSpecialityInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    adress?: AddressUncheckedCreateNestedOneWithoutUserInput
    OffServices?: OffServiceUncheckedCreateNestedManyWithoutUsersInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutSpecialityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecialityInput, UserUncheckedCreateWithoutSpecialityInput>
  }

  export type UserCreateManySpecialityInputEnvelope = {
    data: UserCreateManySpecialityInput | UserCreateManySpecialityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutSpecialityInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSpecialityInput, UserUncheckedUpdateWithoutSpecialityInput>
    create: XOR<UserCreateWithoutSpecialityInput, UserUncheckedCreateWithoutSpecialityInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSpecialityInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSpecialityInput, UserUncheckedUpdateWithoutSpecialityInput>
  }

  export type UserUpdateManyWithWhereWithoutSpecialityInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSpecialityInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    description?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    update_at?: DateTimeFilter<"User"> | Date | string
    specialtyId?: IntNullableFilter<"User"> | number | null
  }

  export type UserCreateWithoutAppointmentsAsDoctorInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    adress?: AddressCreateNestedOneWithoutUserInput
    OffServices?: OffServiceCreateNestedManyWithoutUsersInput
    holidays?: HolidayCreateNestedManyWithoutDoctorInput
    speciality?: SpecialityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsDoctorInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    adress?: AddressUncheckedCreateNestedOneWithoutUserInput
    OffServices?: OffServiceUncheckedCreateNestedManyWithoutUsersInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
  }

  export type UserCreateWithoutAppointmentsAsPatientInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    adress?: AddressCreateNestedOneWithoutUserInput
    OffServices?: OffServiceCreateNestedManyWithoutUsersInput
    holidays?: HolidayCreateNestedManyWithoutDoctorInput
    speciality?: SpecialityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAppointmentsAsPatientInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    adress?: AddressUncheckedCreateNestedOneWithoutUserInput
    OffServices?: OffServiceUncheckedCreateNestedManyWithoutUsersInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutAppointmentsAsPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
  }

  export type UserUpsertWithoutAppointmentsAsDoctorInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsDoctorInput, UserUncheckedUpdateWithoutAppointmentsAsDoctorInput>
    create: XOR<UserCreateWithoutAppointmentsAsDoctorInput, UserUncheckedCreateWithoutAppointmentsAsDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsDoctorInput, UserUncheckedUpdateWithoutAppointmentsAsDoctorInput>
  }

  export type UserUpdateWithoutAppointmentsAsDoctorInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    adress?: AddressUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUpdateManyWithoutDoctorNestedInput
    speciality?: SpecialityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    adress?: AddressUncheckedUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUncheckedUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserUpsertWithoutAppointmentsAsPatientInput = {
    update: XOR<UserUpdateWithoutAppointmentsAsPatientInput, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
    create: XOR<UserCreateWithoutAppointmentsAsPatientInput, UserUncheckedCreateWithoutAppointmentsAsPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsAsPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsAsPatientInput, UserUncheckedUpdateWithoutAppointmentsAsPatientInput>
  }

  export type UserUpdateWithoutAppointmentsAsPatientInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    adress?: AddressUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUpdateManyWithoutDoctorNestedInput
    speciality?: SpecialityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsAsPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    adress?: AddressUncheckedUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUncheckedUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateWithoutAdressInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    OffServices?: OffServiceCreateNestedManyWithoutUsersInput
    holidays?: HolidayCreateNestedManyWithoutDoctorInput
    speciality?: SpecialityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAdressInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    OffServices?: OffServiceUncheckedCreateNestedManyWithoutUsersInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutAdressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
  }

  export type UserUpsertWithoutAdressInput = {
    update: XOR<UserUpdateWithoutAdressInput, UserUncheckedUpdateWithoutAdressInput>
    create: XOR<UserCreateWithoutAdressInput, UserUncheckedCreateWithoutAdressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdressInput, UserUncheckedUpdateWithoutAdressInput>
  }

  export type UserUpdateWithoutAdressInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    OffServices?: OffServiceUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUpdateManyWithoutDoctorNestedInput
    speciality?: SpecialityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    OffServices?: OffServiceUncheckedUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserCreateWithoutOffServicesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    adress?: AddressCreateNestedOneWithoutUserInput
    holidays?: HolidayCreateNestedManyWithoutDoctorInput
    speciality?: SpecialityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOffServicesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    adress?: AddressUncheckedCreateNestedOneWithoutUserInput
    holidays?: HolidayUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutOffServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffServicesInput, UserUncheckedCreateWithoutOffServicesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutOffServicesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOffServicesInput, UserUncheckedUpdateWithoutOffServicesInput>
    create: XOR<UserCreateWithoutOffServicesInput, UserUncheckedCreateWithoutOffServicesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOffServicesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOffServicesInput, UserUncheckedUpdateWithoutOffServicesInput>
  }

  export type UserUpdateManyWithWhereWithoutOffServicesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOffServicesInput>
  }

  export type UserCreateWithoutHolidaysInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    appointmentsAsDoctor?: AppointmentCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentCreateNestedManyWithoutPatientInput
    adress?: AddressCreateNestedOneWithoutUserInput
    OffServices?: OffServiceCreateNestedManyWithoutUsersInput
    speciality?: SpecialityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutHolidaysInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
    specialtyId?: number | null
    appointmentsAsDoctor?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    appointmentsAsPatient?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    adress?: AddressUncheckedCreateNestedOneWithoutUserInput
    OffServices?: OffServiceUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutHolidaysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHolidaysInput, UserUncheckedCreateWithoutHolidaysInput>
  }

  export type UserUpsertWithoutHolidaysInput = {
    update: XOR<UserUpdateWithoutHolidaysInput, UserUncheckedUpdateWithoutHolidaysInput>
    create: XOR<UserCreateWithoutHolidaysInput, UserUncheckedCreateWithoutHolidaysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHolidaysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHolidaysInput, UserUncheckedUpdateWithoutHolidaysInput>
  }

  export type UserUpdateWithoutHolidaysInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    adress?: AddressUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUpdateManyWithoutUsersNestedInput
    speciality?: SpecialityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutHolidaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    adress?: AddressUncheckedUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    appointment_date: Date | string
    patientId: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    appointment_date: Date | string
    doctorId: number
    created_at?: Date | string
    updated_at?: Date | string
    status?: $Enums.Status
  }

  export type HolidayCreateManyDoctorInput = {
    id?: number
    start_day: Date | string
    end_day: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    patient?: UserUpdateOneRequiredWithoutAppointmentsAsPatientNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUpdateWithoutPatientInput = {
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    doctor?: UserUpdateOneRequiredWithoutAppointmentsAsDoctorNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type OffServiceUpdateWithoutUsersInput = {
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type OffServiceUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type OffServiceUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
  }

  export type HolidayUpdateWithoutDoctorInput = {
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidayUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_day?: DateTimeFieldUpdateOperationsInput | Date | string
    end_day?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManySpecialityInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    description?: string | null
    image?: string | null
    role: $Enums.Role
    created_at?: Date | string
    update_at?: Date | string
  }

  export type UserUpdateWithoutSpecialityInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    adress?: AddressUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    adress?: AddressUncheckedUpdateOneWithoutUserNestedInput
    OffServices?: OffServiceUncheckedUpdateManyWithoutUsersNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutOffServicesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentsAsDoctor?: AppointmentUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUpdateManyWithoutPatientNestedInput
    adress?: AddressUpdateOneWithoutUserNestedInput
    holidays?: HolidayUpdateManyWithoutDoctorNestedInput
    speciality?: SpecialityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOffServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
    appointmentsAsDoctor?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    appointmentsAsPatient?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    adress?: AddressUncheckedUpdateOneWithoutUserNestedInput
    holidays?: HolidayUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOffServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specialtyId?: NullableIntFieldUpdateOperationsInput | number | null
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