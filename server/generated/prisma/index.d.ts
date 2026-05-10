
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model peran
 * 
 */
export type peran = $Result.DefaultSelection<Prisma.$peranPayload>
/**
 * Model hak_akses
 * 
 */
export type hak_akses = $Result.DefaultSelection<Prisma.$hak_aksesPayload>
/**
 * Model peran_hak_akses
 * 
 */
export type peran_hak_akses = $Result.DefaultSelection<Prisma.$peran_hak_aksesPayload>
/**
 * Model pengguna
 * 
 */
export type pengguna = $Result.DefaultSelection<Prisma.$penggunaPayload>
/**
 * Model pegawai
 * 
 */
export type pegawai = $Result.DefaultSelection<Prisma.$pegawaiPayload>
/**
 * Model pendidikan_pegawai
 * 
 */
export type pendidikan_pegawai = $Result.DefaultSelection<Prisma.$pendidikan_pegawaiPayload>
/**
 * Model pengaturan_tunjangan
 * 
 */
export type pengaturan_tunjangan = $Result.DefaultSelection<Prisma.$pengaturan_tunjanganPayload>
/**
 * Model tunjangan_transport
 * 
 */
export type tunjangan_transport = $Result.DefaultSelection<Prisma.$tunjangan_transportPayload>
/**
 * Model log_aktivitas
 * 
 */
export type log_aktivitas = $Result.DefaultSelection<Prisma.$log_aktivitasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JenisPegawai: {
  KONTRAK: 'KONTRAK',
  TETAP: 'TETAP',
  MAGANG: 'MAGANG'
};

export type JenisPegawai = (typeof JenisPegawai)[keyof typeof JenisPegawai]


export const Gender: {
  PRIA: 'PRIA',
  WANITA: 'WANITA'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const StatusKawin: {
  BELUM_KAWIN: 'BELUM_KAWIN',
  KAWIN: 'KAWIN',
  CERAI_HIDUP: 'CERAI_HIDUP',
  CERAI_MATI: 'CERAI_MATI'
};

export type StatusKawin = (typeof StatusKawin)[keyof typeof StatusKawin]


export const AksiLog: {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  TAMBAH: 'TAMBAH',
  UBAH: 'UBAH',
  HAPUS: 'HAPUS',
  LIHAT: 'LIHAT',
  EKSPOR: 'EKSPOR'
};

export type AksiLog = (typeof AksiLog)[keyof typeof AksiLog]

}

export type JenisPegawai = $Enums.JenisPegawai

export const JenisPegawai: typeof $Enums.JenisPegawai

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type StatusKawin = $Enums.StatusKawin

export const StatusKawin: typeof $Enums.StatusKawin

export type AksiLog = $Enums.AksiLog

export const AksiLog: typeof $Enums.AksiLog

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Perans
 * const perans = await prisma.peran.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Perans
   * const perans = await prisma.peran.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.peran`: Exposes CRUD operations for the **peran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perans
    * const perans = await prisma.peran.findMany()
    * ```
    */
  get peran(): Prisma.peranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hak_akses`: Exposes CRUD operations for the **hak_akses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hak_akses
    * const hak_akses = await prisma.hak_akses.findMany()
    * ```
    */
  get hak_akses(): Prisma.hak_aksesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peran_hak_akses`: Exposes CRUD operations for the **peran_hak_akses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peran_hak_akses
    * const peran_hak_akses = await prisma.peran_hak_akses.findMany()
    * ```
    */
  get peran_hak_akses(): Prisma.peran_hak_aksesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengguna`: Exposes CRUD operations for the **pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.penggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pegawai`: Exposes CRUD operations for the **pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.pegawaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendidikan_pegawai`: Exposes CRUD operations for the **pendidikan_pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendidikan_pegawais
    * const pendidikan_pegawais = await prisma.pendidikan_pegawai.findMany()
    * ```
    */
  get pendidikan_pegawai(): Prisma.pendidikan_pegawaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengaturan_tunjangan`: Exposes CRUD operations for the **pengaturan_tunjangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengaturan_tunjangans
    * const pengaturan_tunjangans = await prisma.pengaturan_tunjangan.findMany()
    * ```
    */
  get pengaturan_tunjangan(): Prisma.pengaturan_tunjanganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tunjangan_transport`: Exposes CRUD operations for the **tunjangan_transport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tunjangan_transports
    * const tunjangan_transports = await prisma.tunjangan_transport.findMany()
    * ```
    */
  get tunjangan_transport(): Prisma.tunjangan_transportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_aktivitas`: Exposes CRUD operations for the **log_aktivitas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_aktivitas
    * const log_aktivitas = await prisma.log_aktivitas.findMany()
    * ```
    */
  get log_aktivitas(): Prisma.log_aktivitasDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    peran: 'peran',
    hak_akses: 'hak_akses',
    peran_hak_akses: 'peran_hak_akses',
    pengguna: 'pengguna',
    pegawai: 'pegawai',
    pendidikan_pegawai: 'pendidikan_pegawai',
    pengaturan_tunjangan: 'pengaturan_tunjangan',
    tunjangan_transport: 'tunjangan_transport',
    log_aktivitas: 'log_aktivitas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "peran" | "hak_akses" | "peran_hak_akses" | "pengguna" | "pegawai" | "pendidikan_pegawai" | "pengaturan_tunjangan" | "tunjangan_transport" | "log_aktivitas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      peran: {
        payload: Prisma.$peranPayload<ExtArgs>
        fields: Prisma.peranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>
          }
          findFirst: {
            args: Prisma.peranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>
          }
          findMany: {
            args: Prisma.peranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>[]
          }
          create: {
            args: Prisma.peranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>
          }
          createMany: {
            args: Prisma.peranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.peranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>[]
          }
          delete: {
            args: Prisma.peranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>
          }
          update: {
            args: Prisma.peranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>
          }
          deleteMany: {
            args: Prisma.peranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.peranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>[]
          }
          upsert: {
            args: Prisma.peranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peranPayload>
          }
          aggregate: {
            args: Prisma.PeranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeran>
          }
          groupBy: {
            args: Prisma.peranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeranGroupByOutputType>[]
          }
          count: {
            args: Prisma.peranCountArgs<ExtArgs>
            result: $Utils.Optional<PeranCountAggregateOutputType> | number
          }
        }
      }
      hak_akses: {
        payload: Prisma.$hak_aksesPayload<ExtArgs>
        fields: Prisma.hak_aksesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hak_aksesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hak_aksesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>
          }
          findFirst: {
            args: Prisma.hak_aksesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hak_aksesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>
          }
          findMany: {
            args: Prisma.hak_aksesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>[]
          }
          create: {
            args: Prisma.hak_aksesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>
          }
          createMany: {
            args: Prisma.hak_aksesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.hak_aksesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>[]
          }
          delete: {
            args: Prisma.hak_aksesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>
          }
          update: {
            args: Prisma.hak_aksesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>
          }
          deleteMany: {
            args: Prisma.hak_aksesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hak_aksesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.hak_aksesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>[]
          }
          upsert: {
            args: Prisma.hak_aksesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hak_aksesPayload>
          }
          aggregate: {
            args: Prisma.Hak_aksesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHak_akses>
          }
          groupBy: {
            args: Prisma.hak_aksesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hak_aksesGroupByOutputType>[]
          }
          count: {
            args: Prisma.hak_aksesCountArgs<ExtArgs>
            result: $Utils.Optional<Hak_aksesCountAggregateOutputType> | number
          }
        }
      }
      peran_hak_akses: {
        payload: Prisma.$peran_hak_aksesPayload<ExtArgs>
        fields: Prisma.peran_hak_aksesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peran_hak_aksesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peran_hak_aksesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>
          }
          findFirst: {
            args: Prisma.peran_hak_aksesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peran_hak_aksesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>
          }
          findMany: {
            args: Prisma.peran_hak_aksesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>[]
          }
          create: {
            args: Prisma.peran_hak_aksesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>
          }
          createMany: {
            args: Prisma.peran_hak_aksesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.peran_hak_aksesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>[]
          }
          delete: {
            args: Prisma.peran_hak_aksesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>
          }
          update: {
            args: Prisma.peran_hak_aksesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>
          }
          deleteMany: {
            args: Prisma.peran_hak_aksesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peran_hak_aksesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.peran_hak_aksesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>[]
          }
          upsert: {
            args: Prisma.peran_hak_aksesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peran_hak_aksesPayload>
          }
          aggregate: {
            args: Prisma.Peran_hak_aksesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeran_hak_akses>
          }
          groupBy: {
            args: Prisma.peran_hak_aksesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Peran_hak_aksesGroupByOutputType>[]
          }
          count: {
            args: Prisma.peran_hak_aksesCountArgs<ExtArgs>
            result: $Utils.Optional<Peran_hak_aksesCountAggregateOutputType> | number
          }
        }
      }
      pengguna: {
        payload: Prisma.$penggunaPayload<ExtArgs>
        fields: Prisma.penggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findFirst: {
            args: Prisma.penggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findMany: {
            args: Prisma.penggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          create: {
            args: Prisma.penggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          createMany: {
            args: Prisma.penggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.penggunaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          delete: {
            args: Prisma.penggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          update: {
            args: Prisma.penggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          deleteMany: {
            args: Prisma.penggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.penggunaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          upsert: {
            args: Prisma.penggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.penggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.penggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
          }
        }
      }
      pegawai: {
        payload: Prisma.$pegawaiPayload<ExtArgs>
        fields: Prisma.pegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pegawaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pegawaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          findFirst: {
            args: Prisma.pegawaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pegawaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          findMany: {
            args: Prisma.pegawaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>[]
          }
          create: {
            args: Prisma.pegawaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          createMany: {
            args: Prisma.pegawaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pegawaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>[]
          }
          delete: {
            args: Prisma.pegawaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          update: {
            args: Prisma.pegawaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          deleteMany: {
            args: Prisma.pegawaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pegawaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pegawaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>[]
          }
          upsert: {
            args: Prisma.pegawaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pegawaiPayload>
          }
          aggregate: {
            args: Prisma.PegawaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePegawai>
          }
          groupBy: {
            args: Prisma.pegawaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.pegawaiCountArgs<ExtArgs>
            result: $Utils.Optional<PegawaiCountAggregateOutputType> | number
          }
        }
      }
      pendidikan_pegawai: {
        payload: Prisma.$pendidikan_pegawaiPayload<ExtArgs>
        fields: Prisma.pendidikan_pegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pendidikan_pegawaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pendidikan_pegawaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>
          }
          findFirst: {
            args: Prisma.pendidikan_pegawaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pendidikan_pegawaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>
          }
          findMany: {
            args: Prisma.pendidikan_pegawaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>[]
          }
          create: {
            args: Prisma.pendidikan_pegawaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>
          }
          createMany: {
            args: Prisma.pendidikan_pegawaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pendidikan_pegawaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>[]
          }
          delete: {
            args: Prisma.pendidikan_pegawaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>
          }
          update: {
            args: Prisma.pendidikan_pegawaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>
          }
          deleteMany: {
            args: Prisma.pendidikan_pegawaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pendidikan_pegawaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pendidikan_pegawaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>[]
          }
          upsert: {
            args: Prisma.pendidikan_pegawaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pendidikan_pegawaiPayload>
          }
          aggregate: {
            args: Prisma.Pendidikan_pegawaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendidikan_pegawai>
          }
          groupBy: {
            args: Prisma.pendidikan_pegawaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pendidikan_pegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.pendidikan_pegawaiCountArgs<ExtArgs>
            result: $Utils.Optional<Pendidikan_pegawaiCountAggregateOutputType> | number
          }
        }
      }
      pengaturan_tunjangan: {
        payload: Prisma.$pengaturan_tunjanganPayload<ExtArgs>
        fields: Prisma.pengaturan_tunjanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pengaturan_tunjanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pengaturan_tunjanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>
          }
          findFirst: {
            args: Prisma.pengaturan_tunjanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pengaturan_tunjanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>
          }
          findMany: {
            args: Prisma.pengaturan_tunjanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>[]
          }
          create: {
            args: Prisma.pengaturan_tunjanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>
          }
          createMany: {
            args: Prisma.pengaturan_tunjanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pengaturan_tunjanganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>[]
          }
          delete: {
            args: Prisma.pengaturan_tunjanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>
          }
          update: {
            args: Prisma.pengaturan_tunjanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>
          }
          deleteMany: {
            args: Prisma.pengaturan_tunjanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pengaturan_tunjanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pengaturan_tunjanganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>[]
          }
          upsert: {
            args: Prisma.pengaturan_tunjanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengaturan_tunjanganPayload>
          }
          aggregate: {
            args: Prisma.Pengaturan_tunjanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengaturan_tunjangan>
          }
          groupBy: {
            args: Prisma.pengaturan_tunjanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pengaturan_tunjanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.pengaturan_tunjanganCountArgs<ExtArgs>
            result: $Utils.Optional<Pengaturan_tunjanganCountAggregateOutputType> | number
          }
        }
      }
      tunjangan_transport: {
        payload: Prisma.$tunjangan_transportPayload<ExtArgs>
        fields: Prisma.tunjangan_transportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tunjangan_transportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tunjangan_transportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>
          }
          findFirst: {
            args: Prisma.tunjangan_transportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tunjangan_transportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>
          }
          findMany: {
            args: Prisma.tunjangan_transportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>[]
          }
          create: {
            args: Prisma.tunjangan_transportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>
          }
          createMany: {
            args: Prisma.tunjangan_transportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tunjangan_transportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>[]
          }
          delete: {
            args: Prisma.tunjangan_transportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>
          }
          update: {
            args: Prisma.tunjangan_transportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>
          }
          deleteMany: {
            args: Prisma.tunjangan_transportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tunjangan_transportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tunjangan_transportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>[]
          }
          upsert: {
            args: Prisma.tunjangan_transportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tunjangan_transportPayload>
          }
          aggregate: {
            args: Prisma.Tunjangan_transportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTunjangan_transport>
          }
          groupBy: {
            args: Prisma.tunjangan_transportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tunjangan_transportGroupByOutputType>[]
          }
          count: {
            args: Prisma.tunjangan_transportCountArgs<ExtArgs>
            result: $Utils.Optional<Tunjangan_transportCountAggregateOutputType> | number
          }
        }
      }
      log_aktivitas: {
        payload: Prisma.$log_aktivitasPayload<ExtArgs>
        fields: Prisma.log_aktivitasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.log_aktivitasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.log_aktivitasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>
          }
          findFirst: {
            args: Prisma.log_aktivitasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.log_aktivitasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>
          }
          findMany: {
            args: Prisma.log_aktivitasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>[]
          }
          create: {
            args: Prisma.log_aktivitasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>
          }
          createMany: {
            args: Prisma.log_aktivitasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.log_aktivitasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>[]
          }
          delete: {
            args: Prisma.log_aktivitasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>
          }
          update: {
            args: Prisma.log_aktivitasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>
          }
          deleteMany: {
            args: Prisma.log_aktivitasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.log_aktivitasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.log_aktivitasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>[]
          }
          upsert: {
            args: Prisma.log_aktivitasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$log_aktivitasPayload>
          }
          aggregate: {
            args: Prisma.Log_aktivitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_aktivitas>
          }
          groupBy: {
            args: Prisma.log_aktivitasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_aktivitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.log_aktivitasCountArgs<ExtArgs>
            result: $Utils.Optional<Log_aktivitasCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    peran?: peranOmit
    hak_akses?: hak_aksesOmit
    peran_hak_akses?: peran_hak_aksesOmit
    pengguna?: penggunaOmit
    pegawai?: pegawaiOmit
    pendidikan_pegawai?: pendidikan_pegawaiOmit
    pengaturan_tunjangan?: pengaturan_tunjanganOmit
    tunjangan_transport?: tunjangan_transportOmit
    log_aktivitas?: log_aktivitasOmit
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
   * Count Type PeranCountOutputType
   */

  export type PeranCountOutputType = {
    pengguna: number
    peran_hak_akses: number
  }

  export type PeranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | PeranCountOutputTypeCountPenggunaArgs
    peran_hak_akses?: boolean | PeranCountOutputTypeCountPeran_hak_aksesArgs
  }

  // Custom InputTypes
  /**
   * PeranCountOutputType without action
   */
  export type PeranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeranCountOutputType
     */
    select?: PeranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeranCountOutputType without action
   */
  export type PeranCountOutputTypeCountPenggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
  }

  /**
   * PeranCountOutputType without action
   */
  export type PeranCountOutputTypeCountPeran_hak_aksesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peran_hak_aksesWhereInput
  }


  /**
   * Count Type Hak_aksesCountOutputType
   */

  export type Hak_aksesCountOutputType = {
    peran_hak_akses: number
  }

  export type Hak_aksesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran_hak_akses?: boolean | Hak_aksesCountOutputTypeCountPeran_hak_aksesArgs
  }

  // Custom InputTypes
  /**
   * Hak_aksesCountOutputType without action
   */
  export type Hak_aksesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hak_aksesCountOutputType
     */
    select?: Hak_aksesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Hak_aksesCountOutputType without action
   */
  export type Hak_aksesCountOutputTypeCountPeran_hak_aksesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peran_hak_aksesWhereInput
  }


  /**
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    log_aktivitas: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log_aktivitas?: boolean | PenggunaCountOutputTypeCountLog_aktivitasArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountLog_aktivitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_aktivitasWhereInput
  }


  /**
   * Count Type PegawaiCountOutputType
   */

  export type PegawaiCountOutputType = {
    pendidikan: number
    tunjangan_transport: number
  }

  export type PegawaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendidikan?: boolean | PegawaiCountOutputTypeCountPendidikanArgs
    tunjangan_transport?: boolean | PegawaiCountOutputTypeCountTunjangan_transportArgs
  }

  // Custom InputTypes
  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PegawaiCountOutputType
     */
    select?: PegawaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountPendidikanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendidikan_pegawaiWhereInput
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountTunjangan_transportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tunjangan_transportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model peran
   */

  export type AggregatePeran = {
    _count: PeranCountAggregateOutputType | null
    _avg: PeranAvgAggregateOutputType | null
    _sum: PeranSumAggregateOutputType | null
    _min: PeranMinAggregateOutputType | null
    _max: PeranMaxAggregateOutputType | null
  }

  export type PeranAvgAggregateOutputType = {
    id_peran: number | null
  }

  export type PeranSumAggregateOutputType = {
    id_peran: number | null
  }

  export type PeranMinAggregateOutputType = {
    id_peran: number | null
    nama_peran: string | null
    deskripsi: string | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type PeranMaxAggregateOutputType = {
    id_peran: number | null
    nama_peran: string | null
    deskripsi: string | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type PeranCountAggregateOutputType = {
    id_peran: number
    nama_peran: number
    deskripsi: number
    dibuat_pada: number
    diperbarui_pada: number
    _all: number
  }


  export type PeranAvgAggregateInputType = {
    id_peran?: true
  }

  export type PeranSumAggregateInputType = {
    id_peran?: true
  }

  export type PeranMinAggregateInputType = {
    id_peran?: true
    nama_peran?: true
    deskripsi?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type PeranMaxAggregateInputType = {
    id_peran?: true
    nama_peran?: true
    deskripsi?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type PeranCountAggregateInputType = {
    id_peran?: true
    nama_peran?: true
    deskripsi?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    _all?: true
  }

  export type PeranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peran to aggregate.
     */
    where?: peranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perans to fetch.
     */
    orderBy?: peranOrderByWithRelationInput | peranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned perans
    **/
    _count?: true | PeranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeranMaxAggregateInputType
  }

  export type GetPeranAggregateType<T extends PeranAggregateArgs> = {
        [P in keyof T & keyof AggregatePeran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeran[P]>
      : GetScalarType<T[P], AggregatePeran[P]>
  }




  export type peranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peranWhereInput
    orderBy?: peranOrderByWithAggregationInput | peranOrderByWithAggregationInput[]
    by: PeranScalarFieldEnum[] | PeranScalarFieldEnum
    having?: peranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeranCountAggregateInputType | true
    _avg?: PeranAvgAggregateInputType
    _sum?: PeranSumAggregateInputType
    _min?: PeranMinAggregateInputType
    _max?: PeranMaxAggregateInputType
  }

  export type PeranGroupByOutputType = {
    id_peran: number
    nama_peran: string
    deskripsi: string | null
    dibuat_pada: Date
    diperbarui_pada: Date
    _count: PeranCountAggregateOutputType | null
    _avg: PeranAvgAggregateOutputType | null
    _sum: PeranSumAggregateOutputType | null
    _min: PeranMinAggregateOutputType | null
    _max: PeranMaxAggregateOutputType | null
  }

  type GetPeranGroupByPayload<T extends peranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeranGroupByOutputType[P]>
            : GetScalarType<T[P], PeranGroupByOutputType[P]>
        }
      >
    >


  export type peranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peran?: boolean
    nama_peran?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pengguna?: boolean | peran$penggunaArgs<ExtArgs>
    peran_hak_akses?: boolean | peran$peran_hak_aksesArgs<ExtArgs>
    _count?: boolean | PeranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peran"]>

  export type peranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peran?: boolean
    nama_peran?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }, ExtArgs["result"]["peran"]>

  export type peranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peran?: boolean
    nama_peran?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }, ExtArgs["result"]["peran"]>

  export type peranSelectScalar = {
    id_peran?: boolean
    nama_peran?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }

  export type peranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_peran" | "nama_peran" | "deskripsi" | "dibuat_pada" | "diperbarui_pada", ExtArgs["result"]["peran"]>
  export type peranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | peran$penggunaArgs<ExtArgs>
    peran_hak_akses?: boolean | peran$peran_hak_aksesArgs<ExtArgs>
    _count?: boolean | PeranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type peranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type peranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $peranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peran"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs>[]
      peran_hak_akses: Prisma.$peran_hak_aksesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_peran: number
      nama_peran: string
      deskripsi: string | null
      dibuat_pada: Date
      diperbarui_pada: Date
    }, ExtArgs["result"]["peran"]>
    composites: {}
  }

  type peranGetPayload<S extends boolean | null | undefined | peranDefaultArgs> = $Result.GetResult<Prisma.$peranPayload, S>

  type peranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeranCountAggregateInputType | true
    }

  export interface peranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peran'], meta: { name: 'peran' } }
    /**
     * Find zero or one Peran that matches the filter.
     * @param {peranFindUniqueArgs} args - Arguments to find a Peran
     * @example
     * // Get one Peran
     * const peran = await prisma.peran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peranFindUniqueArgs>(args: SelectSubset<T, peranFindUniqueArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peranFindUniqueOrThrowArgs} args - Arguments to find a Peran
     * @example
     * // Get one Peran
     * const peran = await prisma.peran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peranFindUniqueOrThrowArgs>(args: SelectSubset<T, peranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peranFindFirstArgs} args - Arguments to find a Peran
     * @example
     * // Get one Peran
     * const peran = await prisma.peran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peranFindFirstArgs>(args?: SelectSubset<T, peranFindFirstArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peranFindFirstOrThrowArgs} args - Arguments to find a Peran
     * @example
     * // Get one Peran
     * const peran = await prisma.peran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peranFindFirstOrThrowArgs>(args?: SelectSubset<T, peranFindFirstOrThrowArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perans
     * const perans = await prisma.peran.findMany()
     * 
     * // Get first 10 Perans
     * const perans = await prisma.peran.findMany({ take: 10 })
     * 
     * // Only select the `id_peran`
     * const peranWithId_peranOnly = await prisma.peran.findMany({ select: { id_peran: true } })
     * 
     */
    findMany<T extends peranFindManyArgs>(args?: SelectSubset<T, peranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peran.
     * @param {peranCreateArgs} args - Arguments to create a Peran.
     * @example
     * // Create one Peran
     * const Peran = await prisma.peran.create({
     *   data: {
     *     // ... data to create a Peran
     *   }
     * })
     * 
     */
    create<T extends peranCreateArgs>(args: SelectSubset<T, peranCreateArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perans.
     * @param {peranCreateManyArgs} args - Arguments to create many Perans.
     * @example
     * // Create many Perans
     * const peran = await prisma.peran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peranCreateManyArgs>(args?: SelectSubset<T, peranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perans and returns the data saved in the database.
     * @param {peranCreateManyAndReturnArgs} args - Arguments to create many Perans.
     * @example
     * // Create many Perans
     * const peran = await prisma.peran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perans and only return the `id_peran`
     * const peranWithId_peranOnly = await prisma.peran.createManyAndReturn({
     *   select: { id_peran: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends peranCreateManyAndReturnArgs>(args?: SelectSubset<T, peranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peran.
     * @param {peranDeleteArgs} args - Arguments to delete one Peran.
     * @example
     * // Delete one Peran
     * const Peran = await prisma.peran.delete({
     *   where: {
     *     // ... filter to delete one Peran
     *   }
     * })
     * 
     */
    delete<T extends peranDeleteArgs>(args: SelectSubset<T, peranDeleteArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peran.
     * @param {peranUpdateArgs} args - Arguments to update one Peran.
     * @example
     * // Update one Peran
     * const peran = await prisma.peran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peranUpdateArgs>(args: SelectSubset<T, peranUpdateArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perans.
     * @param {peranDeleteManyArgs} args - Arguments to filter Perans to delete.
     * @example
     * // Delete a few Perans
     * const { count } = await prisma.peran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peranDeleteManyArgs>(args?: SelectSubset<T, peranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perans
     * const peran = await prisma.peran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peranUpdateManyArgs>(args: SelectSubset<T, peranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perans and returns the data updated in the database.
     * @param {peranUpdateManyAndReturnArgs} args - Arguments to update many Perans.
     * @example
     * // Update many Perans
     * const peran = await prisma.peran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perans and only return the `id_peran`
     * const peranWithId_peranOnly = await prisma.peran.updateManyAndReturn({
     *   select: { id_peran: true },
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
    updateManyAndReturn<T extends peranUpdateManyAndReturnArgs>(args: SelectSubset<T, peranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peran.
     * @param {peranUpsertArgs} args - Arguments to update or create a Peran.
     * @example
     * // Update or create a Peran
     * const peran = await prisma.peran.upsert({
     *   create: {
     *     // ... data to create a Peran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peran we want to update
     *   }
     * })
     */
    upsert<T extends peranUpsertArgs>(args: SelectSubset<T, peranUpsertArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peranCountArgs} args - Arguments to filter Perans to count.
     * @example
     * // Count the number of Perans
     * const count = await prisma.peran.count({
     *   where: {
     *     // ... the filter for the Perans we want to count
     *   }
     * })
    **/
    count<T extends peranCountArgs>(
      args?: Subset<T, peranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeranAggregateArgs>(args: Subset<T, PeranAggregateArgs>): Prisma.PrismaPromise<GetPeranAggregateType<T>>

    /**
     * Group by Peran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peranGroupByArgs} args - Group by arguments.
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
      T extends peranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peranGroupByArgs['orderBy'] }
        : { orderBy?: peranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peran model
   */
  readonly fields: peranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends peran$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, peran$penggunaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peran_hak_akses<T extends peran$peran_hak_aksesArgs<ExtArgs> = {}>(args?: Subset<T, peran$peran_hak_aksesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the peran model
   */
  interface peranFieldRefs {
    readonly id_peran: FieldRef<"peran", 'Int'>
    readonly nama_peran: FieldRef<"peran", 'String'>
    readonly deskripsi: FieldRef<"peran", 'String'>
    readonly dibuat_pada: FieldRef<"peran", 'DateTime'>
    readonly diperbarui_pada: FieldRef<"peran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * peran findUnique
   */
  export type peranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * Filter, which peran to fetch.
     */
    where: peranWhereUniqueInput
  }

  /**
   * peran findUniqueOrThrow
   */
  export type peranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * Filter, which peran to fetch.
     */
    where: peranWhereUniqueInput
  }

  /**
   * peran findFirst
   */
  export type peranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * Filter, which peran to fetch.
     */
    where?: peranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perans to fetch.
     */
    orderBy?: peranOrderByWithRelationInput | peranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perans.
     */
    cursor?: peranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perans.
     */
    distinct?: PeranScalarFieldEnum | PeranScalarFieldEnum[]
  }

  /**
   * peran findFirstOrThrow
   */
  export type peranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * Filter, which peran to fetch.
     */
    where?: peranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perans to fetch.
     */
    orderBy?: peranOrderByWithRelationInput | peranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perans.
     */
    cursor?: peranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perans.
     */
    distinct?: PeranScalarFieldEnum | PeranScalarFieldEnum[]
  }

  /**
   * peran findMany
   */
  export type peranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * Filter, which perans to fetch.
     */
    where?: peranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perans to fetch.
     */
    orderBy?: peranOrderByWithRelationInput | peranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing perans.
     */
    cursor?: peranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perans.
     */
    distinct?: PeranScalarFieldEnum | PeranScalarFieldEnum[]
  }

  /**
   * peran create
   */
  export type peranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * The data needed to create a peran.
     */
    data: XOR<peranCreateInput, peranUncheckedCreateInput>
  }

  /**
   * peran createMany
   */
  export type peranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many perans.
     */
    data: peranCreateManyInput | peranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peran createManyAndReturn
   */
  export type peranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * The data used to create many perans.
     */
    data: peranCreateManyInput | peranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peran update
   */
  export type peranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * The data needed to update a peran.
     */
    data: XOR<peranUpdateInput, peranUncheckedUpdateInput>
    /**
     * Choose, which peran to update.
     */
    where: peranWhereUniqueInput
  }

  /**
   * peran updateMany
   */
  export type peranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update perans.
     */
    data: XOR<peranUpdateManyMutationInput, peranUncheckedUpdateManyInput>
    /**
     * Filter which perans to update
     */
    where?: peranWhereInput
    /**
     * Limit how many perans to update.
     */
    limit?: number
  }

  /**
   * peran updateManyAndReturn
   */
  export type peranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * The data used to update perans.
     */
    data: XOR<peranUpdateManyMutationInput, peranUncheckedUpdateManyInput>
    /**
     * Filter which perans to update
     */
    where?: peranWhereInput
    /**
     * Limit how many perans to update.
     */
    limit?: number
  }

  /**
   * peran upsert
   */
  export type peranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * The filter to search for the peran to update in case it exists.
     */
    where: peranWhereUniqueInput
    /**
     * In case the peran found by the `where` argument doesn't exist, create a new peran with this data.
     */
    create: XOR<peranCreateInput, peranUncheckedCreateInput>
    /**
     * In case the peran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peranUpdateInput, peranUncheckedUpdateInput>
  }

  /**
   * peran delete
   */
  export type peranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
    /**
     * Filter which peran to delete.
     */
    where: peranWhereUniqueInput
  }

  /**
   * peran deleteMany
   */
  export type peranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perans to delete
     */
    where?: peranWhereInput
    /**
     * Limit how many perans to delete.
     */
    limit?: number
  }

  /**
   * peran.pengguna
   */
  export type peran$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    cursor?: penggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * peran.peran_hak_akses
   */
  export type peran$peran_hak_aksesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    where?: peran_hak_aksesWhereInput
    orderBy?: peran_hak_aksesOrderByWithRelationInput | peran_hak_aksesOrderByWithRelationInput[]
    cursor?: peran_hak_aksesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Peran_hak_aksesScalarFieldEnum | Peran_hak_aksesScalarFieldEnum[]
  }

  /**
   * peran without action
   */
  export type peranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran
     */
    select?: peranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran
     */
    omit?: peranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peranInclude<ExtArgs> | null
  }


  /**
   * Model hak_akses
   */

  export type AggregateHak_akses = {
    _count: Hak_aksesCountAggregateOutputType | null
    _avg: Hak_aksesAvgAggregateOutputType | null
    _sum: Hak_aksesSumAggregateOutputType | null
    _min: Hak_aksesMinAggregateOutputType | null
    _max: Hak_aksesMaxAggregateOutputType | null
  }

  export type Hak_aksesAvgAggregateOutputType = {
    id_hak_akses: number | null
  }

  export type Hak_aksesSumAggregateOutputType = {
    id_hak_akses: number | null
  }

  export type Hak_aksesMinAggregateOutputType = {
    id_hak_akses: number | null
    nama_akses: string | null
    modul: string | null
    deskripsi: string | null
    dibuat_pada: Date | null
  }

  export type Hak_aksesMaxAggregateOutputType = {
    id_hak_akses: number | null
    nama_akses: string | null
    modul: string | null
    deskripsi: string | null
    dibuat_pada: Date | null
  }

  export type Hak_aksesCountAggregateOutputType = {
    id_hak_akses: number
    nama_akses: number
    modul: number
    deskripsi: number
    dibuat_pada: number
    _all: number
  }


  export type Hak_aksesAvgAggregateInputType = {
    id_hak_akses?: true
  }

  export type Hak_aksesSumAggregateInputType = {
    id_hak_akses?: true
  }

  export type Hak_aksesMinAggregateInputType = {
    id_hak_akses?: true
    nama_akses?: true
    modul?: true
    deskripsi?: true
    dibuat_pada?: true
  }

  export type Hak_aksesMaxAggregateInputType = {
    id_hak_akses?: true
    nama_akses?: true
    modul?: true
    deskripsi?: true
    dibuat_pada?: true
  }

  export type Hak_aksesCountAggregateInputType = {
    id_hak_akses?: true
    nama_akses?: true
    modul?: true
    deskripsi?: true
    dibuat_pada?: true
    _all?: true
  }

  export type Hak_aksesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hak_akses to aggregate.
     */
    where?: hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hak_akses to fetch.
     */
    orderBy?: hak_aksesOrderByWithRelationInput | hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hak_akses
    **/
    _count?: true | Hak_aksesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hak_aksesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hak_aksesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hak_aksesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hak_aksesMaxAggregateInputType
  }

  export type GetHak_aksesAggregateType<T extends Hak_aksesAggregateArgs> = {
        [P in keyof T & keyof AggregateHak_akses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHak_akses[P]>
      : GetScalarType<T[P], AggregateHak_akses[P]>
  }




  export type hak_aksesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hak_aksesWhereInput
    orderBy?: hak_aksesOrderByWithAggregationInput | hak_aksesOrderByWithAggregationInput[]
    by: Hak_aksesScalarFieldEnum[] | Hak_aksesScalarFieldEnum
    having?: hak_aksesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hak_aksesCountAggregateInputType | true
    _avg?: Hak_aksesAvgAggregateInputType
    _sum?: Hak_aksesSumAggregateInputType
    _min?: Hak_aksesMinAggregateInputType
    _max?: Hak_aksesMaxAggregateInputType
  }

  export type Hak_aksesGroupByOutputType = {
    id_hak_akses: number
    nama_akses: string
    modul: string
    deskripsi: string | null
    dibuat_pada: Date
    _count: Hak_aksesCountAggregateOutputType | null
    _avg: Hak_aksesAvgAggregateOutputType | null
    _sum: Hak_aksesSumAggregateOutputType | null
    _min: Hak_aksesMinAggregateOutputType | null
    _max: Hak_aksesMaxAggregateOutputType | null
  }

  type GetHak_aksesGroupByPayload<T extends hak_aksesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hak_aksesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hak_aksesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hak_aksesGroupByOutputType[P]>
            : GetScalarType<T[P], Hak_aksesGroupByOutputType[P]>
        }
      >
    >


  export type hak_aksesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_hak_akses?: boolean
    nama_akses?: boolean
    modul?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
    peran_hak_akses?: boolean | hak_akses$peran_hak_aksesArgs<ExtArgs>
    _count?: boolean | Hak_aksesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hak_akses"]>

  export type hak_aksesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_hak_akses?: boolean
    nama_akses?: boolean
    modul?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
  }, ExtArgs["result"]["hak_akses"]>

  export type hak_aksesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_hak_akses?: boolean
    nama_akses?: boolean
    modul?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
  }, ExtArgs["result"]["hak_akses"]>

  export type hak_aksesSelectScalar = {
    id_hak_akses?: boolean
    nama_akses?: boolean
    modul?: boolean
    deskripsi?: boolean
    dibuat_pada?: boolean
  }

  export type hak_aksesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_hak_akses" | "nama_akses" | "modul" | "deskripsi" | "dibuat_pada", ExtArgs["result"]["hak_akses"]>
  export type hak_aksesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran_hak_akses?: boolean | hak_akses$peran_hak_aksesArgs<ExtArgs>
    _count?: boolean | Hak_aksesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type hak_aksesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type hak_aksesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $hak_aksesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hak_akses"
    objects: {
      peran_hak_akses: Prisma.$peran_hak_aksesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_hak_akses: number
      nama_akses: string
      modul: string
      deskripsi: string | null
      dibuat_pada: Date
    }, ExtArgs["result"]["hak_akses"]>
    composites: {}
  }

  type hak_aksesGetPayload<S extends boolean | null | undefined | hak_aksesDefaultArgs> = $Result.GetResult<Prisma.$hak_aksesPayload, S>

  type hak_aksesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hak_aksesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hak_aksesCountAggregateInputType | true
    }

  export interface hak_aksesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hak_akses'], meta: { name: 'hak_akses' } }
    /**
     * Find zero or one Hak_akses that matches the filter.
     * @param {hak_aksesFindUniqueArgs} args - Arguments to find a Hak_akses
     * @example
     * // Get one Hak_akses
     * const hak_akses = await prisma.hak_akses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hak_aksesFindUniqueArgs>(args: SelectSubset<T, hak_aksesFindUniqueArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hak_akses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hak_aksesFindUniqueOrThrowArgs} args - Arguments to find a Hak_akses
     * @example
     * // Get one Hak_akses
     * const hak_akses = await prisma.hak_akses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hak_aksesFindUniqueOrThrowArgs>(args: SelectSubset<T, hak_aksesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hak_akses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hak_aksesFindFirstArgs} args - Arguments to find a Hak_akses
     * @example
     * // Get one Hak_akses
     * const hak_akses = await prisma.hak_akses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hak_aksesFindFirstArgs>(args?: SelectSubset<T, hak_aksesFindFirstArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hak_akses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hak_aksesFindFirstOrThrowArgs} args - Arguments to find a Hak_akses
     * @example
     * // Get one Hak_akses
     * const hak_akses = await prisma.hak_akses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hak_aksesFindFirstOrThrowArgs>(args?: SelectSubset<T, hak_aksesFindFirstOrThrowArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hak_akses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hak_aksesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hak_akses
     * const hak_akses = await prisma.hak_akses.findMany()
     * 
     * // Get first 10 Hak_akses
     * const hak_akses = await prisma.hak_akses.findMany({ take: 10 })
     * 
     * // Only select the `id_hak_akses`
     * const hak_aksesWithId_hak_aksesOnly = await prisma.hak_akses.findMany({ select: { id_hak_akses: true } })
     * 
     */
    findMany<T extends hak_aksesFindManyArgs>(args?: SelectSubset<T, hak_aksesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hak_akses.
     * @param {hak_aksesCreateArgs} args - Arguments to create a Hak_akses.
     * @example
     * // Create one Hak_akses
     * const Hak_akses = await prisma.hak_akses.create({
     *   data: {
     *     // ... data to create a Hak_akses
     *   }
     * })
     * 
     */
    create<T extends hak_aksesCreateArgs>(args: SelectSubset<T, hak_aksesCreateArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hak_akses.
     * @param {hak_aksesCreateManyArgs} args - Arguments to create many Hak_akses.
     * @example
     * // Create many Hak_akses
     * const hak_akses = await prisma.hak_akses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hak_aksesCreateManyArgs>(args?: SelectSubset<T, hak_aksesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hak_akses and returns the data saved in the database.
     * @param {hak_aksesCreateManyAndReturnArgs} args - Arguments to create many Hak_akses.
     * @example
     * // Create many Hak_akses
     * const hak_akses = await prisma.hak_akses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hak_akses and only return the `id_hak_akses`
     * const hak_aksesWithId_hak_aksesOnly = await prisma.hak_akses.createManyAndReturn({
     *   select: { id_hak_akses: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends hak_aksesCreateManyAndReturnArgs>(args?: SelectSubset<T, hak_aksesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hak_akses.
     * @param {hak_aksesDeleteArgs} args - Arguments to delete one Hak_akses.
     * @example
     * // Delete one Hak_akses
     * const Hak_akses = await prisma.hak_akses.delete({
     *   where: {
     *     // ... filter to delete one Hak_akses
     *   }
     * })
     * 
     */
    delete<T extends hak_aksesDeleteArgs>(args: SelectSubset<T, hak_aksesDeleteArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hak_akses.
     * @param {hak_aksesUpdateArgs} args - Arguments to update one Hak_akses.
     * @example
     * // Update one Hak_akses
     * const hak_akses = await prisma.hak_akses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hak_aksesUpdateArgs>(args: SelectSubset<T, hak_aksesUpdateArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hak_akses.
     * @param {hak_aksesDeleteManyArgs} args - Arguments to filter Hak_akses to delete.
     * @example
     * // Delete a few Hak_akses
     * const { count } = await prisma.hak_akses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hak_aksesDeleteManyArgs>(args?: SelectSubset<T, hak_aksesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hak_aksesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hak_akses
     * const hak_akses = await prisma.hak_akses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hak_aksesUpdateManyArgs>(args: SelectSubset<T, hak_aksesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hak_akses and returns the data updated in the database.
     * @param {hak_aksesUpdateManyAndReturnArgs} args - Arguments to update many Hak_akses.
     * @example
     * // Update many Hak_akses
     * const hak_akses = await prisma.hak_akses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hak_akses and only return the `id_hak_akses`
     * const hak_aksesWithId_hak_aksesOnly = await prisma.hak_akses.updateManyAndReturn({
     *   select: { id_hak_akses: true },
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
    updateManyAndReturn<T extends hak_aksesUpdateManyAndReturnArgs>(args: SelectSubset<T, hak_aksesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hak_akses.
     * @param {hak_aksesUpsertArgs} args - Arguments to update or create a Hak_akses.
     * @example
     * // Update or create a Hak_akses
     * const hak_akses = await prisma.hak_akses.upsert({
     *   create: {
     *     // ... data to create a Hak_akses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hak_akses we want to update
     *   }
     * })
     */
    upsert<T extends hak_aksesUpsertArgs>(args: SelectSubset<T, hak_aksesUpsertArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hak_aksesCountArgs} args - Arguments to filter Hak_akses to count.
     * @example
     * // Count the number of Hak_akses
     * const count = await prisma.hak_akses.count({
     *   where: {
     *     // ... the filter for the Hak_akses we want to count
     *   }
     * })
    **/
    count<T extends hak_aksesCountArgs>(
      args?: Subset<T, hak_aksesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hak_aksesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hak_aksesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hak_aksesAggregateArgs>(args: Subset<T, Hak_aksesAggregateArgs>): Prisma.PrismaPromise<GetHak_aksesAggregateType<T>>

    /**
     * Group by Hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hak_aksesGroupByArgs} args - Group by arguments.
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
      T extends hak_aksesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hak_aksesGroupByArgs['orderBy'] }
        : { orderBy?: hak_aksesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hak_aksesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHak_aksesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hak_akses model
   */
  readonly fields: hak_aksesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hak_akses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hak_aksesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peran_hak_akses<T extends hak_akses$peran_hak_aksesArgs<ExtArgs> = {}>(args?: Subset<T, hak_akses$peran_hak_aksesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the hak_akses model
   */
  interface hak_aksesFieldRefs {
    readonly id_hak_akses: FieldRef<"hak_akses", 'Int'>
    readonly nama_akses: FieldRef<"hak_akses", 'String'>
    readonly modul: FieldRef<"hak_akses", 'String'>
    readonly deskripsi: FieldRef<"hak_akses", 'String'>
    readonly dibuat_pada: FieldRef<"hak_akses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hak_akses findUnique
   */
  export type hak_aksesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which hak_akses to fetch.
     */
    where: hak_aksesWhereUniqueInput
  }

  /**
   * hak_akses findUniqueOrThrow
   */
  export type hak_aksesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which hak_akses to fetch.
     */
    where: hak_aksesWhereUniqueInput
  }

  /**
   * hak_akses findFirst
   */
  export type hak_aksesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which hak_akses to fetch.
     */
    where?: hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hak_akses to fetch.
     */
    orderBy?: hak_aksesOrderByWithRelationInput | hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hak_akses.
     */
    cursor?: hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hak_akses.
     */
    distinct?: Hak_aksesScalarFieldEnum | Hak_aksesScalarFieldEnum[]
  }

  /**
   * hak_akses findFirstOrThrow
   */
  export type hak_aksesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which hak_akses to fetch.
     */
    where?: hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hak_akses to fetch.
     */
    orderBy?: hak_aksesOrderByWithRelationInput | hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hak_akses.
     */
    cursor?: hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hak_akses.
     */
    distinct?: Hak_aksesScalarFieldEnum | Hak_aksesScalarFieldEnum[]
  }

  /**
   * hak_akses findMany
   */
  export type hak_aksesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which hak_akses to fetch.
     */
    where?: hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hak_akses to fetch.
     */
    orderBy?: hak_aksesOrderByWithRelationInput | hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hak_akses.
     */
    cursor?: hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hak_akses.
     */
    distinct?: Hak_aksesScalarFieldEnum | Hak_aksesScalarFieldEnum[]
  }

  /**
   * hak_akses create
   */
  export type hak_aksesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * The data needed to create a hak_akses.
     */
    data: XOR<hak_aksesCreateInput, hak_aksesUncheckedCreateInput>
  }

  /**
   * hak_akses createMany
   */
  export type hak_aksesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hak_akses.
     */
    data: hak_aksesCreateManyInput | hak_aksesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hak_akses createManyAndReturn
   */
  export type hak_aksesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * The data used to create many hak_akses.
     */
    data: hak_aksesCreateManyInput | hak_aksesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hak_akses update
   */
  export type hak_aksesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * The data needed to update a hak_akses.
     */
    data: XOR<hak_aksesUpdateInput, hak_aksesUncheckedUpdateInput>
    /**
     * Choose, which hak_akses to update.
     */
    where: hak_aksesWhereUniqueInput
  }

  /**
   * hak_akses updateMany
   */
  export type hak_aksesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hak_akses.
     */
    data: XOR<hak_aksesUpdateManyMutationInput, hak_aksesUncheckedUpdateManyInput>
    /**
     * Filter which hak_akses to update
     */
    where?: hak_aksesWhereInput
    /**
     * Limit how many hak_akses to update.
     */
    limit?: number
  }

  /**
   * hak_akses updateManyAndReturn
   */
  export type hak_aksesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * The data used to update hak_akses.
     */
    data: XOR<hak_aksesUpdateManyMutationInput, hak_aksesUncheckedUpdateManyInput>
    /**
     * Filter which hak_akses to update
     */
    where?: hak_aksesWhereInput
    /**
     * Limit how many hak_akses to update.
     */
    limit?: number
  }

  /**
   * hak_akses upsert
   */
  export type hak_aksesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * The filter to search for the hak_akses to update in case it exists.
     */
    where: hak_aksesWhereUniqueInput
    /**
     * In case the hak_akses found by the `where` argument doesn't exist, create a new hak_akses with this data.
     */
    create: XOR<hak_aksesCreateInput, hak_aksesUncheckedCreateInput>
    /**
     * In case the hak_akses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hak_aksesUpdateInput, hak_aksesUncheckedUpdateInput>
  }

  /**
   * hak_akses delete
   */
  export type hak_aksesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
    /**
     * Filter which hak_akses to delete.
     */
    where: hak_aksesWhereUniqueInput
  }

  /**
   * hak_akses deleteMany
   */
  export type hak_aksesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hak_akses to delete
     */
    where?: hak_aksesWhereInput
    /**
     * Limit how many hak_akses to delete.
     */
    limit?: number
  }

  /**
   * hak_akses.peran_hak_akses
   */
  export type hak_akses$peran_hak_aksesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    where?: peran_hak_aksesWhereInput
    orderBy?: peran_hak_aksesOrderByWithRelationInput | peran_hak_aksesOrderByWithRelationInput[]
    cursor?: peran_hak_aksesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Peran_hak_aksesScalarFieldEnum | Peran_hak_aksesScalarFieldEnum[]
  }

  /**
   * hak_akses without action
   */
  export type hak_aksesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hak_akses
     */
    select?: hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hak_akses
     */
    omit?: hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hak_aksesInclude<ExtArgs> | null
  }


  /**
   * Model peran_hak_akses
   */

  export type AggregatePeran_hak_akses = {
    _count: Peran_hak_aksesCountAggregateOutputType | null
    _avg: Peran_hak_aksesAvgAggregateOutputType | null
    _sum: Peran_hak_aksesSumAggregateOutputType | null
    _min: Peran_hak_aksesMinAggregateOutputType | null
    _max: Peran_hak_aksesMaxAggregateOutputType | null
  }

  export type Peran_hak_aksesAvgAggregateOutputType = {
    id_peran: number | null
    id_hak_akses: number | null
  }

  export type Peran_hak_aksesSumAggregateOutputType = {
    id_peran: number | null
    id_hak_akses: number | null
  }

  export type Peran_hak_aksesMinAggregateOutputType = {
    id_peran: number | null
    id_hak_akses: number | null
  }

  export type Peran_hak_aksesMaxAggregateOutputType = {
    id_peran: number | null
    id_hak_akses: number | null
  }

  export type Peran_hak_aksesCountAggregateOutputType = {
    id_peran: number
    id_hak_akses: number
    _all: number
  }


  export type Peran_hak_aksesAvgAggregateInputType = {
    id_peran?: true
    id_hak_akses?: true
  }

  export type Peran_hak_aksesSumAggregateInputType = {
    id_peran?: true
    id_hak_akses?: true
  }

  export type Peran_hak_aksesMinAggregateInputType = {
    id_peran?: true
    id_hak_akses?: true
  }

  export type Peran_hak_aksesMaxAggregateInputType = {
    id_peran?: true
    id_hak_akses?: true
  }

  export type Peran_hak_aksesCountAggregateInputType = {
    id_peran?: true
    id_hak_akses?: true
    _all?: true
  }

  export type Peran_hak_aksesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peran_hak_akses to aggregate.
     */
    where?: peran_hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peran_hak_akses to fetch.
     */
    orderBy?: peran_hak_aksesOrderByWithRelationInput | peran_hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peran_hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peran_hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peran_hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned peran_hak_akses
    **/
    _count?: true | Peran_hak_aksesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Peran_hak_aksesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Peran_hak_aksesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Peran_hak_aksesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Peran_hak_aksesMaxAggregateInputType
  }

  export type GetPeran_hak_aksesAggregateType<T extends Peran_hak_aksesAggregateArgs> = {
        [P in keyof T & keyof AggregatePeran_hak_akses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeran_hak_akses[P]>
      : GetScalarType<T[P], AggregatePeran_hak_akses[P]>
  }




  export type peran_hak_aksesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peran_hak_aksesWhereInput
    orderBy?: peran_hak_aksesOrderByWithAggregationInput | peran_hak_aksesOrderByWithAggregationInput[]
    by: Peran_hak_aksesScalarFieldEnum[] | Peran_hak_aksesScalarFieldEnum
    having?: peran_hak_aksesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Peran_hak_aksesCountAggregateInputType | true
    _avg?: Peran_hak_aksesAvgAggregateInputType
    _sum?: Peran_hak_aksesSumAggregateInputType
    _min?: Peran_hak_aksesMinAggregateInputType
    _max?: Peran_hak_aksesMaxAggregateInputType
  }

  export type Peran_hak_aksesGroupByOutputType = {
    id_peran: number
    id_hak_akses: number
    _count: Peran_hak_aksesCountAggregateOutputType | null
    _avg: Peran_hak_aksesAvgAggregateOutputType | null
    _sum: Peran_hak_aksesSumAggregateOutputType | null
    _min: Peran_hak_aksesMinAggregateOutputType | null
    _max: Peran_hak_aksesMaxAggregateOutputType | null
  }

  type GetPeran_hak_aksesGroupByPayload<T extends peran_hak_aksesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Peran_hak_aksesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Peran_hak_aksesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Peran_hak_aksesGroupByOutputType[P]>
            : GetScalarType<T[P], Peran_hak_aksesGroupByOutputType[P]>
        }
      >
    >


  export type peran_hak_aksesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peran?: boolean
    id_hak_akses?: boolean
    peran?: boolean | peranDefaultArgs<ExtArgs>
    hak_akses?: boolean | hak_aksesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peran_hak_akses"]>

  export type peran_hak_aksesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peran?: boolean
    id_hak_akses?: boolean
    peran?: boolean | peranDefaultArgs<ExtArgs>
    hak_akses?: boolean | hak_aksesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peran_hak_akses"]>

  export type peran_hak_aksesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_peran?: boolean
    id_hak_akses?: boolean
    peran?: boolean | peranDefaultArgs<ExtArgs>
    hak_akses?: boolean | hak_aksesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peran_hak_akses"]>

  export type peran_hak_aksesSelectScalar = {
    id_peran?: boolean
    id_hak_akses?: boolean
  }

  export type peran_hak_aksesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_peran" | "id_hak_akses", ExtArgs["result"]["peran_hak_akses"]>
  export type peran_hak_aksesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran?: boolean | peranDefaultArgs<ExtArgs>
    hak_akses?: boolean | hak_aksesDefaultArgs<ExtArgs>
  }
  export type peran_hak_aksesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran?: boolean | peranDefaultArgs<ExtArgs>
    hak_akses?: boolean | hak_aksesDefaultArgs<ExtArgs>
  }
  export type peran_hak_aksesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran?: boolean | peranDefaultArgs<ExtArgs>
    hak_akses?: boolean | hak_aksesDefaultArgs<ExtArgs>
  }

  export type $peran_hak_aksesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peran_hak_akses"
    objects: {
      peran: Prisma.$peranPayload<ExtArgs>
      hak_akses: Prisma.$hak_aksesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_peran: number
      id_hak_akses: number
    }, ExtArgs["result"]["peran_hak_akses"]>
    composites: {}
  }

  type peran_hak_aksesGetPayload<S extends boolean | null | undefined | peran_hak_aksesDefaultArgs> = $Result.GetResult<Prisma.$peran_hak_aksesPayload, S>

  type peran_hak_aksesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peran_hak_aksesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Peran_hak_aksesCountAggregateInputType | true
    }

  export interface peran_hak_aksesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peran_hak_akses'], meta: { name: 'peran_hak_akses' } }
    /**
     * Find zero or one Peran_hak_akses that matches the filter.
     * @param {peran_hak_aksesFindUniqueArgs} args - Arguments to find a Peran_hak_akses
     * @example
     * // Get one Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peran_hak_aksesFindUniqueArgs>(args: SelectSubset<T, peran_hak_aksesFindUniqueArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peran_hak_akses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peran_hak_aksesFindUniqueOrThrowArgs} args - Arguments to find a Peran_hak_akses
     * @example
     * // Get one Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peran_hak_aksesFindUniqueOrThrowArgs>(args: SelectSubset<T, peran_hak_aksesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peran_hak_akses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peran_hak_aksesFindFirstArgs} args - Arguments to find a Peran_hak_akses
     * @example
     * // Get one Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peran_hak_aksesFindFirstArgs>(args?: SelectSubset<T, peran_hak_aksesFindFirstArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peran_hak_akses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peran_hak_aksesFindFirstOrThrowArgs} args - Arguments to find a Peran_hak_akses
     * @example
     * // Get one Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peran_hak_aksesFindFirstOrThrowArgs>(args?: SelectSubset<T, peran_hak_aksesFindFirstOrThrowArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peran_hak_akses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peran_hak_aksesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.findMany()
     * 
     * // Get first 10 Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.findMany({ take: 10 })
     * 
     * // Only select the `id_peran`
     * const peran_hak_aksesWithId_peranOnly = await prisma.peran_hak_akses.findMany({ select: { id_peran: true } })
     * 
     */
    findMany<T extends peran_hak_aksesFindManyArgs>(args?: SelectSubset<T, peran_hak_aksesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peran_hak_akses.
     * @param {peran_hak_aksesCreateArgs} args - Arguments to create a Peran_hak_akses.
     * @example
     * // Create one Peran_hak_akses
     * const Peran_hak_akses = await prisma.peran_hak_akses.create({
     *   data: {
     *     // ... data to create a Peran_hak_akses
     *   }
     * })
     * 
     */
    create<T extends peran_hak_aksesCreateArgs>(args: SelectSubset<T, peran_hak_aksesCreateArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peran_hak_akses.
     * @param {peran_hak_aksesCreateManyArgs} args - Arguments to create many Peran_hak_akses.
     * @example
     * // Create many Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peran_hak_aksesCreateManyArgs>(args?: SelectSubset<T, peran_hak_aksesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peran_hak_akses and returns the data saved in the database.
     * @param {peran_hak_aksesCreateManyAndReturnArgs} args - Arguments to create many Peran_hak_akses.
     * @example
     * // Create many Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peran_hak_akses and only return the `id_peran`
     * const peran_hak_aksesWithId_peranOnly = await prisma.peran_hak_akses.createManyAndReturn({
     *   select: { id_peran: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends peran_hak_aksesCreateManyAndReturnArgs>(args?: SelectSubset<T, peran_hak_aksesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peran_hak_akses.
     * @param {peran_hak_aksesDeleteArgs} args - Arguments to delete one Peran_hak_akses.
     * @example
     * // Delete one Peran_hak_akses
     * const Peran_hak_akses = await prisma.peran_hak_akses.delete({
     *   where: {
     *     // ... filter to delete one Peran_hak_akses
     *   }
     * })
     * 
     */
    delete<T extends peran_hak_aksesDeleteArgs>(args: SelectSubset<T, peran_hak_aksesDeleteArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peran_hak_akses.
     * @param {peran_hak_aksesUpdateArgs} args - Arguments to update one Peran_hak_akses.
     * @example
     * // Update one Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peran_hak_aksesUpdateArgs>(args: SelectSubset<T, peran_hak_aksesUpdateArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peran_hak_akses.
     * @param {peran_hak_aksesDeleteManyArgs} args - Arguments to filter Peran_hak_akses to delete.
     * @example
     * // Delete a few Peran_hak_akses
     * const { count } = await prisma.peran_hak_akses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peran_hak_aksesDeleteManyArgs>(args?: SelectSubset<T, peran_hak_aksesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peran_hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peran_hak_aksesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peran_hak_aksesUpdateManyArgs>(args: SelectSubset<T, peran_hak_aksesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peran_hak_akses and returns the data updated in the database.
     * @param {peran_hak_aksesUpdateManyAndReturnArgs} args - Arguments to update many Peran_hak_akses.
     * @example
     * // Update many Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peran_hak_akses and only return the `id_peran`
     * const peran_hak_aksesWithId_peranOnly = await prisma.peran_hak_akses.updateManyAndReturn({
     *   select: { id_peran: true },
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
    updateManyAndReturn<T extends peran_hak_aksesUpdateManyAndReturnArgs>(args: SelectSubset<T, peran_hak_aksesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peran_hak_akses.
     * @param {peran_hak_aksesUpsertArgs} args - Arguments to update or create a Peran_hak_akses.
     * @example
     * // Update or create a Peran_hak_akses
     * const peran_hak_akses = await prisma.peran_hak_akses.upsert({
     *   create: {
     *     // ... data to create a Peran_hak_akses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peran_hak_akses we want to update
     *   }
     * })
     */
    upsert<T extends peran_hak_aksesUpsertArgs>(args: SelectSubset<T, peran_hak_aksesUpsertArgs<ExtArgs>>): Prisma__peran_hak_aksesClient<$Result.GetResult<Prisma.$peran_hak_aksesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peran_hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peran_hak_aksesCountArgs} args - Arguments to filter Peran_hak_akses to count.
     * @example
     * // Count the number of Peran_hak_akses
     * const count = await prisma.peran_hak_akses.count({
     *   where: {
     *     // ... the filter for the Peran_hak_akses we want to count
     *   }
     * })
    **/
    count<T extends peran_hak_aksesCountArgs>(
      args?: Subset<T, peran_hak_aksesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Peran_hak_aksesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peran_hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Peran_hak_aksesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Peran_hak_aksesAggregateArgs>(args: Subset<T, Peran_hak_aksesAggregateArgs>): Prisma.PrismaPromise<GetPeran_hak_aksesAggregateType<T>>

    /**
     * Group by Peran_hak_akses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peran_hak_aksesGroupByArgs} args - Group by arguments.
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
      T extends peran_hak_aksesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peran_hak_aksesGroupByArgs['orderBy'] }
        : { orderBy?: peran_hak_aksesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, peran_hak_aksesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeran_hak_aksesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peran_hak_akses model
   */
  readonly fields: peran_hak_aksesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peran_hak_akses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peran_hak_aksesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peran<T extends peranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peranDefaultArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hak_akses<T extends hak_aksesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, hak_aksesDefaultArgs<ExtArgs>>): Prisma__hak_aksesClient<$Result.GetResult<Prisma.$hak_aksesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the peran_hak_akses model
   */
  interface peran_hak_aksesFieldRefs {
    readonly id_peran: FieldRef<"peran_hak_akses", 'Int'>
    readonly id_hak_akses: FieldRef<"peran_hak_akses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * peran_hak_akses findUnique
   */
  export type peran_hak_aksesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which peran_hak_akses to fetch.
     */
    where: peran_hak_aksesWhereUniqueInput
  }

  /**
   * peran_hak_akses findUniqueOrThrow
   */
  export type peran_hak_aksesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which peran_hak_akses to fetch.
     */
    where: peran_hak_aksesWhereUniqueInput
  }

  /**
   * peran_hak_akses findFirst
   */
  export type peran_hak_aksesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which peran_hak_akses to fetch.
     */
    where?: peran_hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peran_hak_akses to fetch.
     */
    orderBy?: peran_hak_aksesOrderByWithRelationInput | peran_hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peran_hak_akses.
     */
    cursor?: peran_hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peran_hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peran_hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peran_hak_akses.
     */
    distinct?: Peran_hak_aksesScalarFieldEnum | Peran_hak_aksesScalarFieldEnum[]
  }

  /**
   * peran_hak_akses findFirstOrThrow
   */
  export type peran_hak_aksesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which peran_hak_akses to fetch.
     */
    where?: peran_hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peran_hak_akses to fetch.
     */
    orderBy?: peran_hak_aksesOrderByWithRelationInput | peran_hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peran_hak_akses.
     */
    cursor?: peran_hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peran_hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peran_hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peran_hak_akses.
     */
    distinct?: Peran_hak_aksesScalarFieldEnum | Peran_hak_aksesScalarFieldEnum[]
  }

  /**
   * peran_hak_akses findMany
   */
  export type peran_hak_aksesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * Filter, which peran_hak_akses to fetch.
     */
    where?: peran_hak_aksesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peran_hak_akses to fetch.
     */
    orderBy?: peran_hak_aksesOrderByWithRelationInput | peran_hak_aksesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing peran_hak_akses.
     */
    cursor?: peran_hak_aksesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peran_hak_akses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peran_hak_akses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peran_hak_akses.
     */
    distinct?: Peran_hak_aksesScalarFieldEnum | Peran_hak_aksesScalarFieldEnum[]
  }

  /**
   * peran_hak_akses create
   */
  export type peran_hak_aksesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * The data needed to create a peran_hak_akses.
     */
    data: XOR<peran_hak_aksesCreateInput, peran_hak_aksesUncheckedCreateInput>
  }

  /**
   * peran_hak_akses createMany
   */
  export type peran_hak_aksesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many peran_hak_akses.
     */
    data: peran_hak_aksesCreateManyInput | peran_hak_aksesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peran_hak_akses createManyAndReturn
   */
  export type peran_hak_aksesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * The data used to create many peran_hak_akses.
     */
    data: peran_hak_aksesCreateManyInput | peran_hak_aksesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * peran_hak_akses update
   */
  export type peran_hak_aksesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * The data needed to update a peran_hak_akses.
     */
    data: XOR<peran_hak_aksesUpdateInput, peran_hak_aksesUncheckedUpdateInput>
    /**
     * Choose, which peran_hak_akses to update.
     */
    where: peran_hak_aksesWhereUniqueInput
  }

  /**
   * peran_hak_akses updateMany
   */
  export type peran_hak_aksesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update peran_hak_akses.
     */
    data: XOR<peran_hak_aksesUpdateManyMutationInput, peran_hak_aksesUncheckedUpdateManyInput>
    /**
     * Filter which peran_hak_akses to update
     */
    where?: peran_hak_aksesWhereInput
    /**
     * Limit how many peran_hak_akses to update.
     */
    limit?: number
  }

  /**
   * peran_hak_akses updateManyAndReturn
   */
  export type peran_hak_aksesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * The data used to update peran_hak_akses.
     */
    data: XOR<peran_hak_aksesUpdateManyMutationInput, peran_hak_aksesUncheckedUpdateManyInput>
    /**
     * Filter which peran_hak_akses to update
     */
    where?: peran_hak_aksesWhereInput
    /**
     * Limit how many peran_hak_akses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * peran_hak_akses upsert
   */
  export type peran_hak_aksesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * The filter to search for the peran_hak_akses to update in case it exists.
     */
    where: peran_hak_aksesWhereUniqueInput
    /**
     * In case the peran_hak_akses found by the `where` argument doesn't exist, create a new peran_hak_akses with this data.
     */
    create: XOR<peran_hak_aksesCreateInput, peran_hak_aksesUncheckedCreateInput>
    /**
     * In case the peran_hak_akses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peran_hak_aksesUpdateInput, peran_hak_aksesUncheckedUpdateInput>
  }

  /**
   * peran_hak_akses delete
   */
  export type peran_hak_aksesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
    /**
     * Filter which peran_hak_akses to delete.
     */
    where: peran_hak_aksesWhereUniqueInput
  }

  /**
   * peran_hak_akses deleteMany
   */
  export type peran_hak_aksesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peran_hak_akses to delete
     */
    where?: peran_hak_aksesWhereInput
    /**
     * Limit how many peran_hak_akses to delete.
     */
    limit?: number
  }

  /**
   * peran_hak_akses without action
   */
  export type peran_hak_aksesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peran_hak_akses
     */
    select?: peran_hak_aksesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peran_hak_akses
     */
    omit?: peran_hak_aksesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peran_hak_aksesInclude<ExtArgs> | null
  }


  /**
   * Model pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaAvgAggregateOutputType = {
    id_pengguna: number | null
    id_pegawai: number | null
    id_peran: number | null
  }

  export type PenggunaSumAggregateOutputType = {
    id_pengguna: number | null
    id_pegawai: number | null
    id_peran: number | null
  }

  export type PenggunaMinAggregateOutputType = {
    id_pengguna: number | null
    id_pegawai: number | null
    nama_pengguna: string | null
    username: string | null
    email: string | null
    nomor_hp: string | null
    kata_sandi: string | null
    id_peran: number | null
    status_aktif: boolean | null
    foto: string | null
    terakhir_login: Date | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
    dihapus_pada: Date | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id_pengguna: number | null
    id_pegawai: number | null
    nama_pengguna: string | null
    username: string | null
    email: string | null
    nomor_hp: string | null
    kata_sandi: string | null
    id_peran: number | null
    status_aktif: boolean | null
    foto: string | null
    terakhir_login: Date | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
    dihapus_pada: Date | null
  }

  export type PenggunaCountAggregateOutputType = {
    id_pengguna: number
    id_pegawai: number
    nama_pengguna: number
    username: number
    email: number
    nomor_hp: number
    kata_sandi: number
    id_peran: number
    status_aktif: number
    foto: number
    terakhir_login: number
    dibuat_pada: number
    diperbarui_pada: number
    dihapus_pada: number
    _all: number
  }


  export type PenggunaAvgAggregateInputType = {
    id_pengguna?: true
    id_pegawai?: true
    id_peran?: true
  }

  export type PenggunaSumAggregateInputType = {
    id_pengguna?: true
    id_pegawai?: true
    id_peran?: true
  }

  export type PenggunaMinAggregateInputType = {
    id_pengguna?: true
    id_pegawai?: true
    nama_pengguna?: true
    username?: true
    email?: true
    nomor_hp?: true
    kata_sandi?: true
    id_peran?: true
    status_aktif?: true
    foto?: true
    terakhir_login?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    dihapus_pada?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id_pengguna?: true
    id_pegawai?: true
    nama_pengguna?: true
    username?: true
    email?: true
    nomor_hp?: true
    kata_sandi?: true
    id_peran?: true
    status_aktif?: true
    foto?: true
    terakhir_login?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    dihapus_pada?: true
  }

  export type PenggunaCountAggregateInputType = {
    id_pengguna?: true
    id_pegawai?: true
    nama_pengguna?: true
    username?: true
    email?: true
    nomor_hp?: true
    kata_sandi?: true
    id_peran?: true
    status_aktif?: true
    foto?: true
    terakhir_login?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    dihapus_pada?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengguna to aggregate.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenggunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenggunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type penggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithAggregationInput | penggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: penggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _avg?: PenggunaAvgAggregateInputType
    _sum?: PenggunaSumAggregateInputType
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id_pengguna: number
    id_pegawai: number | null
    nama_pengguna: string
    username: string
    email: string | null
    nomor_hp: string | null
    kata_sandi: string
    id_peran: number
    status_aktif: boolean
    foto: string | null
    terakhir_login: Date | null
    dibuat_pada: Date
    diperbarui_pada: Date
    dihapus_pada: Date | null
    _count: PenggunaCountAggregateOutputType | null
    _avg: PenggunaAvgAggregateOutputType | null
    _sum: PenggunaSumAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends penggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type penggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengguna?: boolean
    id_pegawai?: boolean
    nama_pengguna?: boolean
    username?: boolean
    email?: boolean
    nomor_hp?: boolean
    kata_sandi?: boolean
    id_peran?: boolean
    status_aktif?: boolean
    foto?: boolean
    terakhir_login?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
    peran?: boolean | peranDefaultArgs<ExtArgs>
    pegawai?: boolean | pengguna$pegawaiArgs<ExtArgs>
    log_aktivitas?: boolean | pengguna$log_aktivitasArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>

  export type penggunaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengguna?: boolean
    id_pegawai?: boolean
    nama_pengguna?: boolean
    username?: boolean
    email?: boolean
    nomor_hp?: boolean
    kata_sandi?: boolean
    id_peran?: boolean
    status_aktif?: boolean
    foto?: boolean
    terakhir_login?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
    peran?: boolean | peranDefaultArgs<ExtArgs>
    pegawai?: boolean | pengguna$pegawaiArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>

  export type penggunaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengguna?: boolean
    id_pegawai?: boolean
    nama_pengguna?: boolean
    username?: boolean
    email?: boolean
    nomor_hp?: boolean
    kata_sandi?: boolean
    id_peran?: boolean
    status_aktif?: boolean
    foto?: boolean
    terakhir_login?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
    peran?: boolean | peranDefaultArgs<ExtArgs>
    pegawai?: boolean | pengguna$pegawaiArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>

  export type penggunaSelectScalar = {
    id_pengguna?: boolean
    id_pegawai?: boolean
    nama_pengguna?: boolean
    username?: boolean
    email?: boolean
    nomor_hp?: boolean
    kata_sandi?: boolean
    id_peran?: boolean
    status_aktif?: boolean
    foto?: boolean
    terakhir_login?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
  }

  export type penggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pengguna" | "id_pegawai" | "nama_pengguna" | "username" | "email" | "nomor_hp" | "kata_sandi" | "id_peran" | "status_aktif" | "foto" | "terakhir_login" | "dibuat_pada" | "diperbarui_pada" | "dihapus_pada", ExtArgs["result"]["pengguna"]>
  export type penggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran?: boolean | peranDefaultArgs<ExtArgs>
    pegawai?: boolean | pengguna$pegawaiArgs<ExtArgs>
    log_aktivitas?: boolean | pengguna$log_aktivitasArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type penggunaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran?: boolean | peranDefaultArgs<ExtArgs>
    pegawai?: boolean | pengguna$pegawaiArgs<ExtArgs>
  }
  export type penggunaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peran?: boolean | peranDefaultArgs<ExtArgs>
    pegawai?: boolean | pengguna$pegawaiArgs<ExtArgs>
  }

  export type $penggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengguna"
    objects: {
      peran: Prisma.$peranPayload<ExtArgs>
      pegawai: Prisma.$pegawaiPayload<ExtArgs> | null
      log_aktivitas: Prisma.$log_aktivitasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pengguna: number
      id_pegawai: number | null
      nama_pengguna: string
      username: string
      email: string | null
      nomor_hp: string | null
      kata_sandi: string
      id_peran: number
      status_aktif: boolean
      foto: string | null
      terakhir_login: Date | null
      dibuat_pada: Date
      diperbarui_pada: Date
      dihapus_pada: Date | null
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type penggunaGetPayload<S extends boolean | null | undefined | penggunaDefaultArgs> = $Result.GetResult<Prisma.$penggunaPayload, S>

  type penggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface penggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengguna'], meta: { name: 'pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {penggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penggunaFindUniqueArgs>(args: SelectSubset<T, penggunaFindUniqueArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, penggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penggunaFindFirstArgs>(args?: SelectSubset<T, penggunaFindFirstArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, penggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id_pengguna`
     * const penggunaWithId_penggunaOnly = await prisma.pengguna.findMany({ select: { id_pengguna: true } })
     * 
     */
    findMany<T extends penggunaFindManyArgs>(args?: SelectSubset<T, penggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengguna.
     * @param {penggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends penggunaCreateArgs>(args: SelectSubset<T, penggunaCreateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penggunas.
     * @param {penggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penggunaCreateManyArgs>(args?: SelectSubset<T, penggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penggunas and returns the data saved in the database.
     * @param {penggunaCreateManyAndReturnArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penggunas and only return the `id_pengguna`
     * const penggunaWithId_penggunaOnly = await prisma.pengguna.createManyAndReturn({
     *   select: { id_pengguna: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends penggunaCreateManyAndReturnArgs>(args?: SelectSubset<T, penggunaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pengguna.
     * @param {penggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends penggunaDeleteArgs>(args: SelectSubset<T, penggunaDeleteArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengguna.
     * @param {penggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penggunaUpdateArgs>(args: SelectSubset<T, penggunaUpdateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {penggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penggunaDeleteManyArgs>(args?: SelectSubset<T, penggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penggunaUpdateManyArgs>(args: SelectSubset<T, penggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas and returns the data updated in the database.
     * @param {penggunaUpdateManyAndReturnArgs} args - Arguments to update many Penggunas.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penggunas and only return the `id_pengguna`
     * const penggunaWithId_penggunaOnly = await prisma.pengguna.updateManyAndReturn({
     *   select: { id_pengguna: true },
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
    updateManyAndReturn<T extends penggunaUpdateManyAndReturnArgs>(args: SelectSubset<T, penggunaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pengguna.
     * @param {penggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends penggunaUpsertArgs>(args: SelectSubset<T, penggunaUpsertArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends penggunaCountArgs>(
      args?: Subset<T, penggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaGroupByArgs} args - Group by arguments.
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
      T extends penggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penggunaGroupByArgs['orderBy'] }
        : { orderBy?: penggunaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengguna model
   */
  readonly fields: penggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peran<T extends peranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, peranDefaultArgs<ExtArgs>>): Prisma__peranClient<$Result.GetResult<Prisma.$peranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pegawai<T extends pengguna$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$pegawaiArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    log_aktivitas<T extends pengguna$log_aktivitasArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$log_aktivitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pengguna model
   */
  interface penggunaFieldRefs {
    readonly id_pengguna: FieldRef<"pengguna", 'Int'>
    readonly id_pegawai: FieldRef<"pengguna", 'Int'>
    readonly nama_pengguna: FieldRef<"pengguna", 'String'>
    readonly username: FieldRef<"pengguna", 'String'>
    readonly email: FieldRef<"pengguna", 'String'>
    readonly nomor_hp: FieldRef<"pengguna", 'String'>
    readonly kata_sandi: FieldRef<"pengguna", 'String'>
    readonly id_peran: FieldRef<"pengguna", 'Int'>
    readonly status_aktif: FieldRef<"pengguna", 'Boolean'>
    readonly foto: FieldRef<"pengguna", 'String'>
    readonly terakhir_login: FieldRef<"pengguna", 'DateTime'>
    readonly dibuat_pada: FieldRef<"pengguna", 'DateTime'>
    readonly diperbarui_pada: FieldRef<"pengguna", 'DateTime'>
    readonly dihapus_pada: FieldRef<"pengguna", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pengguna findUnique
   */
  export type penggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findUniqueOrThrow
   */
  export type penggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findFirst
   */
  export type penggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findFirstOrThrow
   */
  export type penggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findMany
   */
  export type penggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which penggunas to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna create
   */
  export type penggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a pengguna.
     */
    data: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
  }

  /**
   * pengguna createMany
   */
  export type penggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penggunas.
     */
    data: penggunaCreateManyInput | penggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengguna createManyAndReturn
   */
  export type penggunaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The data used to create many penggunas.
     */
    data: penggunaCreateManyInput | penggunaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pengguna update
   */
  export type penggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a pengguna.
     */
    data: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
    /**
     * Choose, which pengguna to update.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna updateMany
   */
  export type penggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penggunas.
     */
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyInput>
    /**
     * Filter which penggunas to update
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to update.
     */
    limit?: number
  }

  /**
   * pengguna updateManyAndReturn
   */
  export type penggunaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * The data used to update penggunas.
     */
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyInput>
    /**
     * Filter which penggunas to update
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pengguna upsert
   */
  export type penggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the pengguna to update in case it exists.
     */
    where: penggunaWhereUniqueInput
    /**
     * In case the pengguna found by the `where` argument doesn't exist, create a new pengguna with this data.
     */
    create: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
    /**
     * In case the pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
  }

  /**
   * pengguna delete
   */
  export type penggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter which pengguna to delete.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna deleteMany
   */
  export type penggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penggunas to delete
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to delete.
     */
    limit?: number
  }

  /**
   * pengguna.pegawai
   */
  export type pengguna$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    where?: pegawaiWhereInput
  }

  /**
   * pengguna.log_aktivitas
   */
  export type pengguna$log_aktivitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    where?: log_aktivitasWhereInput
    orderBy?: log_aktivitasOrderByWithRelationInput | log_aktivitasOrderByWithRelationInput[]
    cursor?: log_aktivitasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Log_aktivitasScalarFieldEnum | Log_aktivitasScalarFieldEnum[]
  }

  /**
   * pengguna without action
   */
  export type penggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
  }


  /**
   * Model pegawai
   */

  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiAvgAggregateOutputType = {
    id_pegawai: number | null
    jumlah_anak: number | null
    jarak_km: number | null
  }

  export type PegawaiSumAggregateOutputType = {
    id_pegawai: number | null
    jumlah_anak: number | null
    jarak_km: number | null
  }

  export type PegawaiMinAggregateOutputType = {
    id_pegawai: number | null
    nip: string | null
    nama_pegawai: string | null
    email: string | null
    nomor_hp: string | null
    tempat_lahir: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    kecamatan: string | null
    kabupaten: string | null
    provinsi: string | null
    gender: $Enums.Gender | null
    status_kawin: $Enums.StatusKawin | null
    jumlah_anak: number | null
    tanggal_masuk: Date | null
    jabatan: string | null
    departemen: string | null
    jenis_pegawai: $Enums.JenisPegawai | null
    foto: string | null
    jarak_km: number | null
    status_aktif: boolean | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
    dihapus_pada: Date | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id_pegawai: number | null
    nip: string | null
    nama_pegawai: string | null
    email: string | null
    nomor_hp: string | null
    tempat_lahir: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    kecamatan: string | null
    kabupaten: string | null
    provinsi: string | null
    gender: $Enums.Gender | null
    status_kawin: $Enums.StatusKawin | null
    jumlah_anak: number | null
    tanggal_masuk: Date | null
    jabatan: string | null
    departemen: string | null
    jenis_pegawai: $Enums.JenisPegawai | null
    foto: string | null
    jarak_km: number | null
    status_aktif: boolean | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
    dihapus_pada: Date | null
  }

  export type PegawaiCountAggregateOutputType = {
    id_pegawai: number
    nip: number
    nama_pegawai: number
    email: number
    nomor_hp: number
    tempat_lahir: number
    tanggal_lahir: number
    alamat: number
    kecamatan: number
    kabupaten: number
    provinsi: number
    gender: number
    status_kawin: number
    jumlah_anak: number
    tanggal_masuk: number
    jabatan: number
    departemen: number
    jenis_pegawai: number
    foto: number
    jarak_km: number
    status_aktif: number
    dibuat_pada: number
    diperbarui_pada: number
    dihapus_pada: number
    _all: number
  }


  export type PegawaiAvgAggregateInputType = {
    id_pegawai?: true
    jumlah_anak?: true
    jarak_km?: true
  }

  export type PegawaiSumAggregateInputType = {
    id_pegawai?: true
    jumlah_anak?: true
    jarak_km?: true
  }

  export type PegawaiMinAggregateInputType = {
    id_pegawai?: true
    nip?: true
    nama_pegawai?: true
    email?: true
    nomor_hp?: true
    tempat_lahir?: true
    tanggal_lahir?: true
    alamat?: true
    kecamatan?: true
    kabupaten?: true
    provinsi?: true
    gender?: true
    status_kawin?: true
    jumlah_anak?: true
    tanggal_masuk?: true
    jabatan?: true
    departemen?: true
    jenis_pegawai?: true
    foto?: true
    jarak_km?: true
    status_aktif?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    dihapus_pada?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id_pegawai?: true
    nip?: true
    nama_pegawai?: true
    email?: true
    nomor_hp?: true
    tempat_lahir?: true
    tanggal_lahir?: true
    alamat?: true
    kecamatan?: true
    kabupaten?: true
    provinsi?: true
    gender?: true
    status_kawin?: true
    jumlah_anak?: true
    tanggal_masuk?: true
    jabatan?: true
    departemen?: true
    jenis_pegawai?: true
    foto?: true
    jarak_km?: true
    status_aktif?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    dihapus_pada?: true
  }

  export type PegawaiCountAggregateInputType = {
    id_pegawai?: true
    nip?: true
    nama_pegawai?: true
    email?: true
    nomor_hp?: true
    tempat_lahir?: true
    tanggal_lahir?: true
    alamat?: true
    kecamatan?: true
    kabupaten?: true
    provinsi?: true
    gender?: true
    status_kawin?: true
    jumlah_anak?: true
    tanggal_masuk?: true
    jabatan?: true
    departemen?: true
    jenis_pegawai?: true
    foto?: true
    jarak_km?: true
    status_aktif?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    dihapus_pada?: true
    _all?: true
  }

  export type PegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pegawai to aggregate.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pegawais
    **/
    _count?: true | PegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PegawaiMaxAggregateInputType
  }

  export type GetPegawaiAggregateType<T extends PegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePegawai[P]>
      : GetScalarType<T[P], AggregatePegawai[P]>
  }




  export type pegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pegawaiWhereInput
    orderBy?: pegawaiOrderByWithAggregationInput | pegawaiOrderByWithAggregationInput[]
    by: PegawaiScalarFieldEnum[] | PegawaiScalarFieldEnum
    having?: pegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PegawaiCountAggregateInputType | true
    _avg?: PegawaiAvgAggregateInputType
    _sum?: PegawaiSumAggregateInputType
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }

  export type PegawaiGroupByOutputType = {
    id_pegawai: number
    nip: string
    nama_pegawai: string
    email: string | null
    nomor_hp: string | null
    tempat_lahir: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    kecamatan: string | null
    kabupaten: string | null
    provinsi: string | null
    gender: $Enums.Gender
    status_kawin: $Enums.StatusKawin
    jumlah_anak: number
    tanggal_masuk: Date
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto: string | null
    jarak_km: number | null
    status_aktif: boolean
    dibuat_pada: Date
    diperbarui_pada: Date
    dihapus_pada: Date | null
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  type GetPegawaiGroupByPayload<T extends pegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
        }
      >
    >


  export type pegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pegawai?: boolean
    nip?: boolean
    nama_pegawai?: boolean
    email?: boolean
    nomor_hp?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    kecamatan?: boolean
    kabupaten?: boolean
    provinsi?: boolean
    gender?: boolean
    status_kawin?: boolean
    jumlah_anak?: boolean
    tanggal_masuk?: boolean
    jabatan?: boolean
    departemen?: boolean
    jenis_pegawai?: boolean
    foto?: boolean
    jarak_km?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
    pendidikan?: boolean | pegawai$pendidikanArgs<ExtArgs>
    pengguna?: boolean | pegawai$penggunaArgs<ExtArgs>
    tunjangan_transport?: boolean | pegawai$tunjangan_transportArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type pegawaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pegawai?: boolean
    nip?: boolean
    nama_pegawai?: boolean
    email?: boolean
    nomor_hp?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    kecamatan?: boolean
    kabupaten?: boolean
    provinsi?: boolean
    gender?: boolean
    status_kawin?: boolean
    jumlah_anak?: boolean
    tanggal_masuk?: boolean
    jabatan?: boolean
    departemen?: boolean
    jenis_pegawai?: boolean
    foto?: boolean
    jarak_km?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
  }, ExtArgs["result"]["pegawai"]>

  export type pegawaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pegawai?: boolean
    nip?: boolean
    nama_pegawai?: boolean
    email?: boolean
    nomor_hp?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    kecamatan?: boolean
    kabupaten?: boolean
    provinsi?: boolean
    gender?: boolean
    status_kawin?: boolean
    jumlah_anak?: boolean
    tanggal_masuk?: boolean
    jabatan?: boolean
    departemen?: boolean
    jenis_pegawai?: boolean
    foto?: boolean
    jarak_km?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
  }, ExtArgs["result"]["pegawai"]>

  export type pegawaiSelectScalar = {
    id_pegawai?: boolean
    nip?: boolean
    nama_pegawai?: boolean
    email?: boolean
    nomor_hp?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    kecamatan?: boolean
    kabupaten?: boolean
    provinsi?: boolean
    gender?: boolean
    status_kawin?: boolean
    jumlah_anak?: boolean
    tanggal_masuk?: boolean
    jabatan?: boolean
    departemen?: boolean
    jenis_pegawai?: boolean
    foto?: boolean
    jarak_km?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    dihapus_pada?: boolean
  }

  export type pegawaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pegawai" | "nip" | "nama_pegawai" | "email" | "nomor_hp" | "tempat_lahir" | "tanggal_lahir" | "alamat" | "kecamatan" | "kabupaten" | "provinsi" | "gender" | "status_kawin" | "jumlah_anak" | "tanggal_masuk" | "jabatan" | "departemen" | "jenis_pegawai" | "foto" | "jarak_km" | "status_aktif" | "dibuat_pada" | "diperbarui_pada" | "dihapus_pada", ExtArgs["result"]["pegawai"]>
  export type pegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendidikan?: boolean | pegawai$pendidikanArgs<ExtArgs>
    pengguna?: boolean | pegawai$penggunaArgs<ExtArgs>
    tunjangan_transport?: boolean | pegawai$tunjangan_transportArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pegawaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pegawaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pegawai"
    objects: {
      pendidikan: Prisma.$pendidikan_pegawaiPayload<ExtArgs>[]
      pengguna: Prisma.$penggunaPayload<ExtArgs> | null
      tunjangan_transport: Prisma.$tunjangan_transportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pegawai: number
      nip: string
      nama_pegawai: string
      email: string | null
      nomor_hp: string | null
      tempat_lahir: string | null
      tanggal_lahir: Date | null
      alamat: string | null
      kecamatan: string | null
      kabupaten: string | null
      provinsi: string | null
      gender: $Enums.Gender
      status_kawin: $Enums.StatusKawin
      jumlah_anak: number
      tanggal_masuk: Date
      jabatan: string
      departemen: string
      jenis_pegawai: $Enums.JenisPegawai
      foto: string | null
      jarak_km: number | null
      status_aktif: boolean
      dibuat_pada: Date
      diperbarui_pada: Date
      dihapus_pada: Date | null
    }, ExtArgs["result"]["pegawai"]>
    composites: {}
  }

  type pegawaiGetPayload<S extends boolean | null | undefined | pegawaiDefaultArgs> = $Result.GetResult<Prisma.$pegawaiPayload, S>

  type pegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pegawaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface pegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pegawai'], meta: { name: 'pegawai' } }
    /**
     * Find zero or one Pegawai that matches the filter.
     * @param {pegawaiFindUniqueArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pegawaiFindUniqueArgs>(args: SelectSubset<T, pegawaiFindUniqueArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pegawai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, pegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindFirstArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pegawaiFindFirstArgs>(args?: SelectSubset<T, pegawaiFindFirstArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindFirstOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, pegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pegawais
     * const pegawais = await prisma.pegawai.findMany()
     * 
     * // Get first 10 Pegawais
     * const pegawais = await prisma.pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id_pegawai`
     * const pegawaiWithId_pegawaiOnly = await prisma.pegawai.findMany({ select: { id_pegawai: true } })
     * 
     */
    findMany<T extends pegawaiFindManyArgs>(args?: SelectSubset<T, pegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pegawai.
     * @param {pegawaiCreateArgs} args - Arguments to create a Pegawai.
     * @example
     * // Create one Pegawai
     * const Pegawai = await prisma.pegawai.create({
     *   data: {
     *     // ... data to create a Pegawai
     *   }
     * })
     * 
     */
    create<T extends pegawaiCreateArgs>(args: SelectSubset<T, pegawaiCreateArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pegawais.
     * @param {pegawaiCreateManyArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pegawaiCreateManyArgs>(args?: SelectSubset<T, pegawaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pegawais and returns the data saved in the database.
     * @param {pegawaiCreateManyAndReturnArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pegawais and only return the `id_pegawai`
     * const pegawaiWithId_pegawaiOnly = await prisma.pegawai.createManyAndReturn({
     *   select: { id_pegawai: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pegawaiCreateManyAndReturnArgs>(args?: SelectSubset<T, pegawaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pegawai.
     * @param {pegawaiDeleteArgs} args - Arguments to delete one Pegawai.
     * @example
     * // Delete one Pegawai
     * const Pegawai = await prisma.pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pegawai
     *   }
     * })
     * 
     */
    delete<T extends pegawaiDeleteArgs>(args: SelectSubset<T, pegawaiDeleteArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pegawai.
     * @param {pegawaiUpdateArgs} args - Arguments to update one Pegawai.
     * @example
     * // Update one Pegawai
     * const pegawai = await prisma.pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pegawaiUpdateArgs>(args: SelectSubset<T, pegawaiUpdateArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pegawais.
     * @param {pegawaiDeleteManyArgs} args - Arguments to filter Pegawais to delete.
     * @example
     * // Delete a few Pegawais
     * const { count } = await prisma.pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pegawaiDeleteManyArgs>(args?: SelectSubset<T, pegawaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pegawaiUpdateManyArgs>(args: SelectSubset<T, pegawaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais and returns the data updated in the database.
     * @param {pegawaiUpdateManyAndReturnArgs} args - Arguments to update many Pegawais.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pegawais and only return the `id_pegawai`
     * const pegawaiWithId_pegawaiOnly = await prisma.pegawai.updateManyAndReturn({
     *   select: { id_pegawai: true },
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
    updateManyAndReturn<T extends pegawaiUpdateManyAndReturnArgs>(args: SelectSubset<T, pegawaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pegawai.
     * @param {pegawaiUpsertArgs} args - Arguments to update or create a Pegawai.
     * @example
     * // Update or create a Pegawai
     * const pegawai = await prisma.pegawai.upsert({
     *   create: {
     *     // ... data to create a Pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pegawai we want to update
     *   }
     * })
     */
    upsert<T extends pegawaiUpsertArgs>(args: SelectSubset<T, pegawaiUpsertArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiCountArgs} args - Arguments to filter Pegawais to count.
     * @example
     * // Count the number of Pegawais
     * const count = await prisma.pegawai.count({
     *   where: {
     *     // ... the filter for the Pegawais we want to count
     *   }
     * })
    **/
    count<T extends pegawaiCountArgs>(
      args?: Subset<T, pegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PegawaiAggregateArgs>(args: Subset<T, PegawaiAggregateArgs>): Prisma.PrismaPromise<GetPegawaiAggregateType<T>>

    /**
     * Group by Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pegawaiGroupByArgs} args - Group by arguments.
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
      T extends pegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pegawaiGroupByArgs['orderBy'] }
        : { orderBy?: pegawaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pegawai model
   */
  readonly fields: pegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendidikan<T extends pegawai$pendidikanArgs<ExtArgs> = {}>(args?: Subset<T, pegawai$pendidikanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengguna<T extends pegawai$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, pegawai$penggunaArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tunjangan_transport<T extends pegawai$tunjangan_transportArgs<ExtArgs> = {}>(args?: Subset<T, pegawai$tunjangan_transportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pegawai model
   */
  interface pegawaiFieldRefs {
    readonly id_pegawai: FieldRef<"pegawai", 'Int'>
    readonly nip: FieldRef<"pegawai", 'String'>
    readonly nama_pegawai: FieldRef<"pegawai", 'String'>
    readonly email: FieldRef<"pegawai", 'String'>
    readonly nomor_hp: FieldRef<"pegawai", 'String'>
    readonly tempat_lahir: FieldRef<"pegawai", 'String'>
    readonly tanggal_lahir: FieldRef<"pegawai", 'DateTime'>
    readonly alamat: FieldRef<"pegawai", 'String'>
    readonly kecamatan: FieldRef<"pegawai", 'String'>
    readonly kabupaten: FieldRef<"pegawai", 'String'>
    readonly provinsi: FieldRef<"pegawai", 'String'>
    readonly gender: FieldRef<"pegawai", 'Gender'>
    readonly status_kawin: FieldRef<"pegawai", 'StatusKawin'>
    readonly jumlah_anak: FieldRef<"pegawai", 'Int'>
    readonly tanggal_masuk: FieldRef<"pegawai", 'DateTime'>
    readonly jabatan: FieldRef<"pegawai", 'String'>
    readonly departemen: FieldRef<"pegawai", 'String'>
    readonly jenis_pegawai: FieldRef<"pegawai", 'JenisPegawai'>
    readonly foto: FieldRef<"pegawai", 'String'>
    readonly jarak_km: FieldRef<"pegawai", 'Float'>
    readonly status_aktif: FieldRef<"pegawai", 'Boolean'>
    readonly dibuat_pada: FieldRef<"pegawai", 'DateTime'>
    readonly diperbarui_pada: FieldRef<"pegawai", 'DateTime'>
    readonly dihapus_pada: FieldRef<"pegawai", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pegawai findUnique
   */
  export type pegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai findUniqueOrThrow
   */
  export type pegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai findFirst
   */
  export type pegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * pegawai findFirstOrThrow
   */
  export type pegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawai to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * pegawai findMany
   */
  export type pegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pegawais to fetch.
     */
    where?: pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pegawais to fetch.
     */
    orderBy?: pegawaiOrderByWithRelationInput | pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pegawais.
     */
    cursor?: pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * pegawai create
   */
  export type pegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * The data needed to create a pegawai.
     */
    data: XOR<pegawaiCreateInput, pegawaiUncheckedCreateInput>
  }

  /**
   * pegawai createMany
   */
  export type pegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pegawais.
     */
    data: pegawaiCreateManyInput | pegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pegawai createManyAndReturn
   */
  export type pegawaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * The data used to create many pegawais.
     */
    data: pegawaiCreateManyInput | pegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pegawai update
   */
  export type pegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * The data needed to update a pegawai.
     */
    data: XOR<pegawaiUpdateInput, pegawaiUncheckedUpdateInput>
    /**
     * Choose, which pegawai to update.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai updateMany
   */
  export type pegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pegawais.
     */
    data: XOR<pegawaiUpdateManyMutationInput, pegawaiUncheckedUpdateManyInput>
    /**
     * Filter which pegawais to update
     */
    where?: pegawaiWhereInput
    /**
     * Limit how many pegawais to update.
     */
    limit?: number
  }

  /**
   * pegawai updateManyAndReturn
   */
  export type pegawaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * The data used to update pegawais.
     */
    data: XOR<pegawaiUpdateManyMutationInput, pegawaiUncheckedUpdateManyInput>
    /**
     * Filter which pegawais to update
     */
    where?: pegawaiWhereInput
    /**
     * Limit how many pegawais to update.
     */
    limit?: number
  }

  /**
   * pegawai upsert
   */
  export type pegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * The filter to search for the pegawai to update in case it exists.
     */
    where: pegawaiWhereUniqueInput
    /**
     * In case the pegawai found by the `where` argument doesn't exist, create a new pegawai with this data.
     */
    create: XOR<pegawaiCreateInput, pegawaiUncheckedCreateInput>
    /**
     * In case the pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pegawaiUpdateInput, pegawaiUncheckedUpdateInput>
  }

  /**
   * pegawai delete
   */
  export type pegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
    /**
     * Filter which pegawai to delete.
     */
    where: pegawaiWhereUniqueInput
  }

  /**
   * pegawai deleteMany
   */
  export type pegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pegawais to delete
     */
    where?: pegawaiWhereInput
    /**
     * Limit how many pegawais to delete.
     */
    limit?: number
  }

  /**
   * pegawai.pendidikan
   */
  export type pegawai$pendidikanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    where?: pendidikan_pegawaiWhereInput
    orderBy?: pendidikan_pegawaiOrderByWithRelationInput | pendidikan_pegawaiOrderByWithRelationInput[]
    cursor?: pendidikan_pegawaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pendidikan_pegawaiScalarFieldEnum | Pendidikan_pegawaiScalarFieldEnum[]
  }

  /**
   * pegawai.pengguna
   */
  export type pegawai$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * pegawai.tunjangan_transport
   */
  export type pegawai$tunjangan_transportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    where?: tunjangan_transportWhereInput
    orderBy?: tunjangan_transportOrderByWithRelationInput | tunjangan_transportOrderByWithRelationInput[]
    cursor?: tunjangan_transportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tunjangan_transportScalarFieldEnum | Tunjangan_transportScalarFieldEnum[]
  }

  /**
   * pegawai without action
   */
  export type pegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pegawai
     */
    select?: pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pegawai
     */
    omit?: pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pegawaiInclude<ExtArgs> | null
  }


  /**
   * Model pendidikan_pegawai
   */

  export type AggregatePendidikan_pegawai = {
    _count: Pendidikan_pegawaiCountAggregateOutputType | null
    _avg: Pendidikan_pegawaiAvgAggregateOutputType | null
    _sum: Pendidikan_pegawaiSumAggregateOutputType | null
    _min: Pendidikan_pegawaiMinAggregateOutputType | null
    _max: Pendidikan_pegawaiMaxAggregateOutputType | null
  }

  export type Pendidikan_pegawaiAvgAggregateOutputType = {
    id_pendidikan: number | null
    id_pegawai: number | null
    tahun_lulus: number | null
  }

  export type Pendidikan_pegawaiSumAggregateOutputType = {
    id_pendidikan: number | null
    id_pegawai: number | null
    tahun_lulus: number | null
  }

  export type Pendidikan_pegawaiMinAggregateOutputType = {
    id_pendidikan: number | null
    id_pegawai: number | null
    jenjang: string | null
    institusi: string | null
    jurusan: string | null
    tahun_lulus: number | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type Pendidikan_pegawaiMaxAggregateOutputType = {
    id_pendidikan: number | null
    id_pegawai: number | null
    jenjang: string | null
    institusi: string | null
    jurusan: string | null
    tahun_lulus: number | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type Pendidikan_pegawaiCountAggregateOutputType = {
    id_pendidikan: number
    id_pegawai: number
    jenjang: number
    institusi: number
    jurusan: number
    tahun_lulus: number
    dibuat_pada: number
    diperbarui_pada: number
    _all: number
  }


  export type Pendidikan_pegawaiAvgAggregateInputType = {
    id_pendidikan?: true
    id_pegawai?: true
    tahun_lulus?: true
  }

  export type Pendidikan_pegawaiSumAggregateInputType = {
    id_pendidikan?: true
    id_pegawai?: true
    tahun_lulus?: true
  }

  export type Pendidikan_pegawaiMinAggregateInputType = {
    id_pendidikan?: true
    id_pegawai?: true
    jenjang?: true
    institusi?: true
    jurusan?: true
    tahun_lulus?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type Pendidikan_pegawaiMaxAggregateInputType = {
    id_pendidikan?: true
    id_pegawai?: true
    jenjang?: true
    institusi?: true
    jurusan?: true
    tahun_lulus?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type Pendidikan_pegawaiCountAggregateInputType = {
    id_pendidikan?: true
    id_pegawai?: true
    jenjang?: true
    institusi?: true
    jurusan?: true
    tahun_lulus?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    _all?: true
  }

  export type Pendidikan_pegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendidikan_pegawai to aggregate.
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendidikan_pegawais to fetch.
     */
    orderBy?: pendidikan_pegawaiOrderByWithRelationInput | pendidikan_pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pendidikan_pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendidikan_pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendidikan_pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pendidikan_pegawais
    **/
    _count?: true | Pendidikan_pegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pendidikan_pegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pendidikan_pegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pendidikan_pegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pendidikan_pegawaiMaxAggregateInputType
  }

  export type GetPendidikan_pegawaiAggregateType<T extends Pendidikan_pegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePendidikan_pegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendidikan_pegawai[P]>
      : GetScalarType<T[P], AggregatePendidikan_pegawai[P]>
  }




  export type pendidikan_pegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pendidikan_pegawaiWhereInput
    orderBy?: pendidikan_pegawaiOrderByWithAggregationInput | pendidikan_pegawaiOrderByWithAggregationInput[]
    by: Pendidikan_pegawaiScalarFieldEnum[] | Pendidikan_pegawaiScalarFieldEnum
    having?: pendidikan_pegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pendidikan_pegawaiCountAggregateInputType | true
    _avg?: Pendidikan_pegawaiAvgAggregateInputType
    _sum?: Pendidikan_pegawaiSumAggregateInputType
    _min?: Pendidikan_pegawaiMinAggregateInputType
    _max?: Pendidikan_pegawaiMaxAggregateInputType
  }

  export type Pendidikan_pegawaiGroupByOutputType = {
    id_pendidikan: number
    id_pegawai: number
    jenjang: string
    institusi: string
    jurusan: string | null
    tahun_lulus: number | null
    dibuat_pada: Date
    diperbarui_pada: Date
    _count: Pendidikan_pegawaiCountAggregateOutputType | null
    _avg: Pendidikan_pegawaiAvgAggregateOutputType | null
    _sum: Pendidikan_pegawaiSumAggregateOutputType | null
    _min: Pendidikan_pegawaiMinAggregateOutputType | null
    _max: Pendidikan_pegawaiMaxAggregateOutputType | null
  }

  type GetPendidikan_pegawaiGroupByPayload<T extends pendidikan_pegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pendidikan_pegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pendidikan_pegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pendidikan_pegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], Pendidikan_pegawaiGroupByOutputType[P]>
        }
      >
    >


  export type pendidikan_pegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pendidikan?: boolean
    id_pegawai?: boolean
    jenjang?: boolean
    institusi?: boolean
    jurusan?: boolean
    tahun_lulus?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendidikan_pegawai"]>

  export type pendidikan_pegawaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pendidikan?: boolean
    id_pegawai?: boolean
    jenjang?: boolean
    institusi?: boolean
    jurusan?: boolean
    tahun_lulus?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendidikan_pegawai"]>

  export type pendidikan_pegawaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pendidikan?: boolean
    id_pegawai?: boolean
    jenjang?: boolean
    institusi?: boolean
    jurusan?: boolean
    tahun_lulus?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendidikan_pegawai"]>

  export type pendidikan_pegawaiSelectScalar = {
    id_pendidikan?: boolean
    id_pegawai?: boolean
    jenjang?: boolean
    institusi?: boolean
    jurusan?: boolean
    tahun_lulus?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }

  export type pendidikan_pegawaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pendidikan" | "id_pegawai" | "jenjang" | "institusi" | "jurusan" | "tahun_lulus" | "dibuat_pada" | "diperbarui_pada", ExtArgs["result"]["pendidikan_pegawai"]>
  export type pendidikan_pegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }
  export type pendidikan_pegawaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }
  export type pendidikan_pegawaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }

  export type $pendidikan_pegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pendidikan_pegawai"
    objects: {
      pegawai: Prisma.$pegawaiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pendidikan: number
      id_pegawai: number
      jenjang: string
      institusi: string
      jurusan: string | null
      tahun_lulus: number | null
      dibuat_pada: Date
      diperbarui_pada: Date
    }, ExtArgs["result"]["pendidikan_pegawai"]>
    composites: {}
  }

  type pendidikan_pegawaiGetPayload<S extends boolean | null | undefined | pendidikan_pegawaiDefaultArgs> = $Result.GetResult<Prisma.$pendidikan_pegawaiPayload, S>

  type pendidikan_pegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pendidikan_pegawaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pendidikan_pegawaiCountAggregateInputType | true
    }

  export interface pendidikan_pegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pendidikan_pegawai'], meta: { name: 'pendidikan_pegawai' } }
    /**
     * Find zero or one Pendidikan_pegawai that matches the filter.
     * @param {pendidikan_pegawaiFindUniqueArgs} args - Arguments to find a Pendidikan_pegawai
     * @example
     * // Get one Pendidikan_pegawai
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pendidikan_pegawaiFindUniqueArgs>(args: SelectSubset<T, pendidikan_pegawaiFindUniqueArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pendidikan_pegawai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pendidikan_pegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pendidikan_pegawai
     * @example
     * // Get one Pendidikan_pegawai
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pendidikan_pegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, pendidikan_pegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendidikan_pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendidikan_pegawaiFindFirstArgs} args - Arguments to find a Pendidikan_pegawai
     * @example
     * // Get one Pendidikan_pegawai
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pendidikan_pegawaiFindFirstArgs>(args?: SelectSubset<T, pendidikan_pegawaiFindFirstArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendidikan_pegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendidikan_pegawaiFindFirstOrThrowArgs} args - Arguments to find a Pendidikan_pegawai
     * @example
     * // Get one Pendidikan_pegawai
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pendidikan_pegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, pendidikan_pegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendidikan_pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendidikan_pegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendidikan_pegawais
     * const pendidikan_pegawais = await prisma.pendidikan_pegawai.findMany()
     * 
     * // Get first 10 Pendidikan_pegawais
     * const pendidikan_pegawais = await prisma.pendidikan_pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id_pendidikan`
     * const pendidikan_pegawaiWithId_pendidikanOnly = await prisma.pendidikan_pegawai.findMany({ select: { id_pendidikan: true } })
     * 
     */
    findMany<T extends pendidikan_pegawaiFindManyArgs>(args?: SelectSubset<T, pendidikan_pegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pendidikan_pegawai.
     * @param {pendidikan_pegawaiCreateArgs} args - Arguments to create a Pendidikan_pegawai.
     * @example
     * // Create one Pendidikan_pegawai
     * const Pendidikan_pegawai = await prisma.pendidikan_pegawai.create({
     *   data: {
     *     // ... data to create a Pendidikan_pegawai
     *   }
     * })
     * 
     */
    create<T extends pendidikan_pegawaiCreateArgs>(args: SelectSubset<T, pendidikan_pegawaiCreateArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendidikan_pegawais.
     * @param {pendidikan_pegawaiCreateManyArgs} args - Arguments to create many Pendidikan_pegawais.
     * @example
     * // Create many Pendidikan_pegawais
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pendidikan_pegawaiCreateManyArgs>(args?: SelectSubset<T, pendidikan_pegawaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendidikan_pegawais and returns the data saved in the database.
     * @param {pendidikan_pegawaiCreateManyAndReturnArgs} args - Arguments to create many Pendidikan_pegawais.
     * @example
     * // Create many Pendidikan_pegawais
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendidikan_pegawais and only return the `id_pendidikan`
     * const pendidikan_pegawaiWithId_pendidikanOnly = await prisma.pendidikan_pegawai.createManyAndReturn({
     *   select: { id_pendidikan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pendidikan_pegawaiCreateManyAndReturnArgs>(args?: SelectSubset<T, pendidikan_pegawaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pendidikan_pegawai.
     * @param {pendidikan_pegawaiDeleteArgs} args - Arguments to delete one Pendidikan_pegawai.
     * @example
     * // Delete one Pendidikan_pegawai
     * const Pendidikan_pegawai = await prisma.pendidikan_pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pendidikan_pegawai
     *   }
     * })
     * 
     */
    delete<T extends pendidikan_pegawaiDeleteArgs>(args: SelectSubset<T, pendidikan_pegawaiDeleteArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pendidikan_pegawai.
     * @param {pendidikan_pegawaiUpdateArgs} args - Arguments to update one Pendidikan_pegawai.
     * @example
     * // Update one Pendidikan_pegawai
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pendidikan_pegawaiUpdateArgs>(args: SelectSubset<T, pendidikan_pegawaiUpdateArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendidikan_pegawais.
     * @param {pendidikan_pegawaiDeleteManyArgs} args - Arguments to filter Pendidikan_pegawais to delete.
     * @example
     * // Delete a few Pendidikan_pegawais
     * const { count } = await prisma.pendidikan_pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pendidikan_pegawaiDeleteManyArgs>(args?: SelectSubset<T, pendidikan_pegawaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendidikan_pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendidikan_pegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendidikan_pegawais
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pendidikan_pegawaiUpdateManyArgs>(args: SelectSubset<T, pendidikan_pegawaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendidikan_pegawais and returns the data updated in the database.
     * @param {pendidikan_pegawaiUpdateManyAndReturnArgs} args - Arguments to update many Pendidikan_pegawais.
     * @example
     * // Update many Pendidikan_pegawais
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendidikan_pegawais and only return the `id_pendidikan`
     * const pendidikan_pegawaiWithId_pendidikanOnly = await prisma.pendidikan_pegawai.updateManyAndReturn({
     *   select: { id_pendidikan: true },
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
    updateManyAndReturn<T extends pendidikan_pegawaiUpdateManyAndReturnArgs>(args: SelectSubset<T, pendidikan_pegawaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pendidikan_pegawai.
     * @param {pendidikan_pegawaiUpsertArgs} args - Arguments to update or create a Pendidikan_pegawai.
     * @example
     * // Update or create a Pendidikan_pegawai
     * const pendidikan_pegawai = await prisma.pendidikan_pegawai.upsert({
     *   create: {
     *     // ... data to create a Pendidikan_pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pendidikan_pegawai we want to update
     *   }
     * })
     */
    upsert<T extends pendidikan_pegawaiUpsertArgs>(args: SelectSubset<T, pendidikan_pegawaiUpsertArgs<ExtArgs>>): Prisma__pendidikan_pegawaiClient<$Result.GetResult<Prisma.$pendidikan_pegawaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendidikan_pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendidikan_pegawaiCountArgs} args - Arguments to filter Pendidikan_pegawais to count.
     * @example
     * // Count the number of Pendidikan_pegawais
     * const count = await prisma.pendidikan_pegawai.count({
     *   where: {
     *     // ... the filter for the Pendidikan_pegawais we want to count
     *   }
     * })
    **/
    count<T extends pendidikan_pegawaiCountArgs>(
      args?: Subset<T, pendidikan_pegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pendidikan_pegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pendidikan_pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pendidikan_pegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pendidikan_pegawaiAggregateArgs>(args: Subset<T, Pendidikan_pegawaiAggregateArgs>): Prisma.PrismaPromise<GetPendidikan_pegawaiAggregateType<T>>

    /**
     * Group by Pendidikan_pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pendidikan_pegawaiGroupByArgs} args - Group by arguments.
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
      T extends pendidikan_pegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pendidikan_pegawaiGroupByArgs['orderBy'] }
        : { orderBy?: pendidikan_pegawaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pendidikan_pegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendidikan_pegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pendidikan_pegawai model
   */
  readonly fields: pendidikan_pegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pendidikan_pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pendidikan_pegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends pegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pegawaiDefaultArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pendidikan_pegawai model
   */
  interface pendidikan_pegawaiFieldRefs {
    readonly id_pendidikan: FieldRef<"pendidikan_pegawai", 'Int'>
    readonly id_pegawai: FieldRef<"pendidikan_pegawai", 'Int'>
    readonly jenjang: FieldRef<"pendidikan_pegawai", 'String'>
    readonly institusi: FieldRef<"pendidikan_pegawai", 'String'>
    readonly jurusan: FieldRef<"pendidikan_pegawai", 'String'>
    readonly tahun_lulus: FieldRef<"pendidikan_pegawai", 'Int'>
    readonly dibuat_pada: FieldRef<"pendidikan_pegawai", 'DateTime'>
    readonly diperbarui_pada: FieldRef<"pendidikan_pegawai", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pendidikan_pegawai findUnique
   */
  export type pendidikan_pegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pendidikan_pegawai to fetch.
     */
    where: pendidikan_pegawaiWhereUniqueInput
  }

  /**
   * pendidikan_pegawai findUniqueOrThrow
   */
  export type pendidikan_pegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pendidikan_pegawai to fetch.
     */
    where: pendidikan_pegawaiWhereUniqueInput
  }

  /**
   * pendidikan_pegawai findFirst
   */
  export type pendidikan_pegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pendidikan_pegawai to fetch.
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendidikan_pegawais to fetch.
     */
    orderBy?: pendidikan_pegawaiOrderByWithRelationInput | pendidikan_pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendidikan_pegawais.
     */
    cursor?: pendidikan_pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendidikan_pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendidikan_pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendidikan_pegawais.
     */
    distinct?: Pendidikan_pegawaiScalarFieldEnum | Pendidikan_pegawaiScalarFieldEnum[]
  }

  /**
   * pendidikan_pegawai findFirstOrThrow
   */
  export type pendidikan_pegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pendidikan_pegawai to fetch.
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendidikan_pegawais to fetch.
     */
    orderBy?: pendidikan_pegawaiOrderByWithRelationInput | pendidikan_pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pendidikan_pegawais.
     */
    cursor?: pendidikan_pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendidikan_pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendidikan_pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendidikan_pegawais.
     */
    distinct?: Pendidikan_pegawaiScalarFieldEnum | Pendidikan_pegawaiScalarFieldEnum[]
  }

  /**
   * pendidikan_pegawai findMany
   */
  export type pendidikan_pegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * Filter, which pendidikan_pegawais to fetch.
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pendidikan_pegawais to fetch.
     */
    orderBy?: pendidikan_pegawaiOrderByWithRelationInput | pendidikan_pegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pendidikan_pegawais.
     */
    cursor?: pendidikan_pegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pendidikan_pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pendidikan_pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pendidikan_pegawais.
     */
    distinct?: Pendidikan_pegawaiScalarFieldEnum | Pendidikan_pegawaiScalarFieldEnum[]
  }

  /**
   * pendidikan_pegawai create
   */
  export type pendidikan_pegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * The data needed to create a pendidikan_pegawai.
     */
    data: XOR<pendidikan_pegawaiCreateInput, pendidikan_pegawaiUncheckedCreateInput>
  }

  /**
   * pendidikan_pegawai createMany
   */
  export type pendidikan_pegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pendidikan_pegawais.
     */
    data: pendidikan_pegawaiCreateManyInput | pendidikan_pegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pendidikan_pegawai createManyAndReturn
   */
  export type pendidikan_pegawaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * The data used to create many pendidikan_pegawais.
     */
    data: pendidikan_pegawaiCreateManyInput | pendidikan_pegawaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pendidikan_pegawai update
   */
  export type pendidikan_pegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * The data needed to update a pendidikan_pegawai.
     */
    data: XOR<pendidikan_pegawaiUpdateInput, pendidikan_pegawaiUncheckedUpdateInput>
    /**
     * Choose, which pendidikan_pegawai to update.
     */
    where: pendidikan_pegawaiWhereUniqueInput
  }

  /**
   * pendidikan_pegawai updateMany
   */
  export type pendidikan_pegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pendidikan_pegawais.
     */
    data: XOR<pendidikan_pegawaiUpdateManyMutationInput, pendidikan_pegawaiUncheckedUpdateManyInput>
    /**
     * Filter which pendidikan_pegawais to update
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * Limit how many pendidikan_pegawais to update.
     */
    limit?: number
  }

  /**
   * pendidikan_pegawai updateManyAndReturn
   */
  export type pendidikan_pegawaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * The data used to update pendidikan_pegawais.
     */
    data: XOR<pendidikan_pegawaiUpdateManyMutationInput, pendidikan_pegawaiUncheckedUpdateManyInput>
    /**
     * Filter which pendidikan_pegawais to update
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * Limit how many pendidikan_pegawais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pendidikan_pegawai upsert
   */
  export type pendidikan_pegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * The filter to search for the pendidikan_pegawai to update in case it exists.
     */
    where: pendidikan_pegawaiWhereUniqueInput
    /**
     * In case the pendidikan_pegawai found by the `where` argument doesn't exist, create a new pendidikan_pegawai with this data.
     */
    create: XOR<pendidikan_pegawaiCreateInput, pendidikan_pegawaiUncheckedCreateInput>
    /**
     * In case the pendidikan_pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pendidikan_pegawaiUpdateInput, pendidikan_pegawaiUncheckedUpdateInput>
  }

  /**
   * pendidikan_pegawai delete
   */
  export type pendidikan_pegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
    /**
     * Filter which pendidikan_pegawai to delete.
     */
    where: pendidikan_pegawaiWhereUniqueInput
  }

  /**
   * pendidikan_pegawai deleteMany
   */
  export type pendidikan_pegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pendidikan_pegawais to delete
     */
    where?: pendidikan_pegawaiWhereInput
    /**
     * Limit how many pendidikan_pegawais to delete.
     */
    limit?: number
  }

  /**
   * pendidikan_pegawai without action
   */
  export type pendidikan_pegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pendidikan_pegawai
     */
    select?: pendidikan_pegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pendidikan_pegawai
     */
    omit?: pendidikan_pegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pendidikan_pegawaiInclude<ExtArgs> | null
  }


  /**
   * Model pengaturan_tunjangan
   */

  export type AggregatePengaturan_tunjangan = {
    _count: Pengaturan_tunjanganCountAggregateOutputType | null
    _avg: Pengaturan_tunjanganAvgAggregateOutputType | null
    _sum: Pengaturan_tunjanganSumAggregateOutputType | null
    _min: Pengaturan_tunjanganMinAggregateOutputType | null
    _max: Pengaturan_tunjanganMaxAggregateOutputType | null
  }

  export type Pengaturan_tunjanganAvgAggregateOutputType = {
    id_pengaturan: number | null
    tarif_per_km: number | null
  }

  export type Pengaturan_tunjanganSumAggregateOutputType = {
    id_pengaturan: number | null
    tarif_per_km: number | null
  }

  export type Pengaturan_tunjanganMinAggregateOutputType = {
    id_pengaturan: number | null
    tarif_per_km: number | null
    keterangan: string | null
    status_aktif: boolean | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type Pengaturan_tunjanganMaxAggregateOutputType = {
    id_pengaturan: number | null
    tarif_per_km: number | null
    keterangan: string | null
    status_aktif: boolean | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type Pengaturan_tunjanganCountAggregateOutputType = {
    id_pengaturan: number
    tarif_per_km: number
    keterangan: number
    status_aktif: number
    dibuat_pada: number
    diperbarui_pada: number
    _all: number
  }


  export type Pengaturan_tunjanganAvgAggregateInputType = {
    id_pengaturan?: true
    tarif_per_km?: true
  }

  export type Pengaturan_tunjanganSumAggregateInputType = {
    id_pengaturan?: true
    tarif_per_km?: true
  }

  export type Pengaturan_tunjanganMinAggregateInputType = {
    id_pengaturan?: true
    tarif_per_km?: true
    keterangan?: true
    status_aktif?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type Pengaturan_tunjanganMaxAggregateInputType = {
    id_pengaturan?: true
    tarif_per_km?: true
    keterangan?: true
    status_aktif?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type Pengaturan_tunjanganCountAggregateInputType = {
    id_pengaturan?: true
    tarif_per_km?: true
    keterangan?: true
    status_aktif?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    _all?: true
  }

  export type Pengaturan_tunjanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengaturan_tunjangan to aggregate.
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengaturan_tunjangans to fetch.
     */
    orderBy?: pengaturan_tunjanganOrderByWithRelationInput | pengaturan_tunjanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pengaturan_tunjanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengaturan_tunjangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengaturan_tunjangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pengaturan_tunjangans
    **/
    _count?: true | Pengaturan_tunjanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pengaturan_tunjanganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pengaturan_tunjanganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pengaturan_tunjanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pengaturan_tunjanganMaxAggregateInputType
  }

  export type GetPengaturan_tunjanganAggregateType<T extends Pengaturan_tunjanganAggregateArgs> = {
        [P in keyof T & keyof AggregatePengaturan_tunjangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengaturan_tunjangan[P]>
      : GetScalarType<T[P], AggregatePengaturan_tunjangan[P]>
  }




  export type pengaturan_tunjanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pengaturan_tunjanganWhereInput
    orderBy?: pengaturan_tunjanganOrderByWithAggregationInput | pengaturan_tunjanganOrderByWithAggregationInput[]
    by: Pengaturan_tunjanganScalarFieldEnum[] | Pengaturan_tunjanganScalarFieldEnum
    having?: pengaturan_tunjanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pengaturan_tunjanganCountAggregateInputType | true
    _avg?: Pengaturan_tunjanganAvgAggregateInputType
    _sum?: Pengaturan_tunjanganSumAggregateInputType
    _min?: Pengaturan_tunjanganMinAggregateInputType
    _max?: Pengaturan_tunjanganMaxAggregateInputType
  }

  export type Pengaturan_tunjanganGroupByOutputType = {
    id_pengaturan: number
    tarif_per_km: number
    keterangan: string | null
    status_aktif: boolean
    dibuat_pada: Date
    diperbarui_pada: Date
    _count: Pengaturan_tunjanganCountAggregateOutputType | null
    _avg: Pengaturan_tunjanganAvgAggregateOutputType | null
    _sum: Pengaturan_tunjanganSumAggregateOutputType | null
    _min: Pengaturan_tunjanganMinAggregateOutputType | null
    _max: Pengaturan_tunjanganMaxAggregateOutputType | null
  }

  type GetPengaturan_tunjanganGroupByPayload<T extends pengaturan_tunjanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pengaturan_tunjanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pengaturan_tunjanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pengaturan_tunjanganGroupByOutputType[P]>
            : GetScalarType<T[P], Pengaturan_tunjanganGroupByOutputType[P]>
        }
      >
    >


  export type pengaturan_tunjanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengaturan?: boolean
    tarif_per_km?: boolean
    keterangan?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }, ExtArgs["result"]["pengaturan_tunjangan"]>

  export type pengaturan_tunjanganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengaturan?: boolean
    tarif_per_km?: boolean
    keterangan?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }, ExtArgs["result"]["pengaturan_tunjangan"]>

  export type pengaturan_tunjanganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengaturan?: boolean
    tarif_per_km?: boolean
    keterangan?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }, ExtArgs["result"]["pengaturan_tunjangan"]>

  export type pengaturan_tunjanganSelectScalar = {
    id_pengaturan?: boolean
    tarif_per_km?: boolean
    keterangan?: boolean
    status_aktif?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }

  export type pengaturan_tunjanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pengaturan" | "tarif_per_km" | "keterangan" | "status_aktif" | "dibuat_pada" | "diperbarui_pada", ExtArgs["result"]["pengaturan_tunjangan"]>

  export type $pengaturan_tunjanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengaturan_tunjangan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_pengaturan: number
      tarif_per_km: number
      keterangan: string | null
      status_aktif: boolean
      dibuat_pada: Date
      diperbarui_pada: Date
    }, ExtArgs["result"]["pengaturan_tunjangan"]>
    composites: {}
  }

  type pengaturan_tunjanganGetPayload<S extends boolean | null | undefined | pengaturan_tunjanganDefaultArgs> = $Result.GetResult<Prisma.$pengaturan_tunjanganPayload, S>

  type pengaturan_tunjanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pengaturan_tunjanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pengaturan_tunjanganCountAggregateInputType | true
    }

  export interface pengaturan_tunjanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengaturan_tunjangan'], meta: { name: 'pengaturan_tunjangan' } }
    /**
     * Find zero or one Pengaturan_tunjangan that matches the filter.
     * @param {pengaturan_tunjanganFindUniqueArgs} args - Arguments to find a Pengaturan_tunjangan
     * @example
     * // Get one Pengaturan_tunjangan
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pengaturan_tunjanganFindUniqueArgs>(args: SelectSubset<T, pengaturan_tunjanganFindUniqueArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengaturan_tunjangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pengaturan_tunjanganFindUniqueOrThrowArgs} args - Arguments to find a Pengaturan_tunjangan
     * @example
     * // Get one Pengaturan_tunjangan
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pengaturan_tunjanganFindUniqueOrThrowArgs>(args: SelectSubset<T, pengaturan_tunjanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengaturan_tunjangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengaturan_tunjanganFindFirstArgs} args - Arguments to find a Pengaturan_tunjangan
     * @example
     * // Get one Pengaturan_tunjangan
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pengaturan_tunjanganFindFirstArgs>(args?: SelectSubset<T, pengaturan_tunjanganFindFirstArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengaturan_tunjangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengaturan_tunjanganFindFirstOrThrowArgs} args - Arguments to find a Pengaturan_tunjangan
     * @example
     * // Get one Pengaturan_tunjangan
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pengaturan_tunjanganFindFirstOrThrowArgs>(args?: SelectSubset<T, pengaturan_tunjanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pengaturan_tunjangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengaturan_tunjanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengaturan_tunjangans
     * const pengaturan_tunjangans = await prisma.pengaturan_tunjangan.findMany()
     * 
     * // Get first 10 Pengaturan_tunjangans
     * const pengaturan_tunjangans = await prisma.pengaturan_tunjangan.findMany({ take: 10 })
     * 
     * // Only select the `id_pengaturan`
     * const pengaturan_tunjanganWithId_pengaturanOnly = await prisma.pengaturan_tunjangan.findMany({ select: { id_pengaturan: true } })
     * 
     */
    findMany<T extends pengaturan_tunjanganFindManyArgs>(args?: SelectSubset<T, pengaturan_tunjanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengaturan_tunjangan.
     * @param {pengaturan_tunjanganCreateArgs} args - Arguments to create a Pengaturan_tunjangan.
     * @example
     * // Create one Pengaturan_tunjangan
     * const Pengaturan_tunjangan = await prisma.pengaturan_tunjangan.create({
     *   data: {
     *     // ... data to create a Pengaturan_tunjangan
     *   }
     * })
     * 
     */
    create<T extends pengaturan_tunjanganCreateArgs>(args: SelectSubset<T, pengaturan_tunjanganCreateArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pengaturan_tunjangans.
     * @param {pengaturan_tunjanganCreateManyArgs} args - Arguments to create many Pengaturan_tunjangans.
     * @example
     * // Create many Pengaturan_tunjangans
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pengaturan_tunjanganCreateManyArgs>(args?: SelectSubset<T, pengaturan_tunjanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pengaturan_tunjangans and returns the data saved in the database.
     * @param {pengaturan_tunjanganCreateManyAndReturnArgs} args - Arguments to create many Pengaturan_tunjangans.
     * @example
     * // Create many Pengaturan_tunjangans
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pengaturan_tunjangans and only return the `id_pengaturan`
     * const pengaturan_tunjanganWithId_pengaturanOnly = await prisma.pengaturan_tunjangan.createManyAndReturn({
     *   select: { id_pengaturan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pengaturan_tunjanganCreateManyAndReturnArgs>(args?: SelectSubset<T, pengaturan_tunjanganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pengaturan_tunjangan.
     * @param {pengaturan_tunjanganDeleteArgs} args - Arguments to delete one Pengaturan_tunjangan.
     * @example
     * // Delete one Pengaturan_tunjangan
     * const Pengaturan_tunjangan = await prisma.pengaturan_tunjangan.delete({
     *   where: {
     *     // ... filter to delete one Pengaturan_tunjangan
     *   }
     * })
     * 
     */
    delete<T extends pengaturan_tunjanganDeleteArgs>(args: SelectSubset<T, pengaturan_tunjanganDeleteArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengaturan_tunjangan.
     * @param {pengaturan_tunjanganUpdateArgs} args - Arguments to update one Pengaturan_tunjangan.
     * @example
     * // Update one Pengaturan_tunjangan
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pengaturan_tunjanganUpdateArgs>(args: SelectSubset<T, pengaturan_tunjanganUpdateArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pengaturan_tunjangans.
     * @param {pengaturan_tunjanganDeleteManyArgs} args - Arguments to filter Pengaturan_tunjangans to delete.
     * @example
     * // Delete a few Pengaturan_tunjangans
     * const { count } = await prisma.pengaturan_tunjangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pengaturan_tunjanganDeleteManyArgs>(args?: SelectSubset<T, pengaturan_tunjanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengaturan_tunjangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengaturan_tunjanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengaturan_tunjangans
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pengaturan_tunjanganUpdateManyArgs>(args: SelectSubset<T, pengaturan_tunjanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengaturan_tunjangans and returns the data updated in the database.
     * @param {pengaturan_tunjanganUpdateManyAndReturnArgs} args - Arguments to update many Pengaturan_tunjangans.
     * @example
     * // Update many Pengaturan_tunjangans
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pengaturan_tunjangans and only return the `id_pengaturan`
     * const pengaturan_tunjanganWithId_pengaturanOnly = await prisma.pengaturan_tunjangan.updateManyAndReturn({
     *   select: { id_pengaturan: true },
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
    updateManyAndReturn<T extends pengaturan_tunjanganUpdateManyAndReturnArgs>(args: SelectSubset<T, pengaturan_tunjanganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pengaturan_tunjangan.
     * @param {pengaturan_tunjanganUpsertArgs} args - Arguments to update or create a Pengaturan_tunjangan.
     * @example
     * // Update or create a Pengaturan_tunjangan
     * const pengaturan_tunjangan = await prisma.pengaturan_tunjangan.upsert({
     *   create: {
     *     // ... data to create a Pengaturan_tunjangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengaturan_tunjangan we want to update
     *   }
     * })
     */
    upsert<T extends pengaturan_tunjanganUpsertArgs>(args: SelectSubset<T, pengaturan_tunjanganUpsertArgs<ExtArgs>>): Prisma__pengaturan_tunjanganClient<$Result.GetResult<Prisma.$pengaturan_tunjanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pengaturan_tunjangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengaturan_tunjanganCountArgs} args - Arguments to filter Pengaturan_tunjangans to count.
     * @example
     * // Count the number of Pengaturan_tunjangans
     * const count = await prisma.pengaturan_tunjangan.count({
     *   where: {
     *     // ... the filter for the Pengaturan_tunjangans we want to count
     *   }
     * })
    **/
    count<T extends pengaturan_tunjanganCountArgs>(
      args?: Subset<T, pengaturan_tunjanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pengaturan_tunjanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengaturan_tunjangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pengaturan_tunjanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pengaturan_tunjanganAggregateArgs>(args: Subset<T, Pengaturan_tunjanganAggregateArgs>): Prisma.PrismaPromise<GetPengaturan_tunjanganAggregateType<T>>

    /**
     * Group by Pengaturan_tunjangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengaturan_tunjanganGroupByArgs} args - Group by arguments.
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
      T extends pengaturan_tunjanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pengaturan_tunjanganGroupByArgs['orderBy'] }
        : { orderBy?: pengaturan_tunjanganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pengaturan_tunjanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengaturan_tunjanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengaturan_tunjangan model
   */
  readonly fields: pengaturan_tunjanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengaturan_tunjangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pengaturan_tunjanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the pengaturan_tunjangan model
   */
  interface pengaturan_tunjanganFieldRefs {
    readonly id_pengaturan: FieldRef<"pengaturan_tunjangan", 'Int'>
    readonly tarif_per_km: FieldRef<"pengaturan_tunjangan", 'Float'>
    readonly keterangan: FieldRef<"pengaturan_tunjangan", 'String'>
    readonly status_aktif: FieldRef<"pengaturan_tunjangan", 'Boolean'>
    readonly dibuat_pada: FieldRef<"pengaturan_tunjangan", 'DateTime'>
    readonly diperbarui_pada: FieldRef<"pengaturan_tunjangan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pengaturan_tunjangan findUnique
   */
  export type pengaturan_tunjanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * Filter, which pengaturan_tunjangan to fetch.
     */
    where: pengaturan_tunjanganWhereUniqueInput
  }

  /**
   * pengaturan_tunjangan findUniqueOrThrow
   */
  export type pengaturan_tunjanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * Filter, which pengaturan_tunjangan to fetch.
     */
    where: pengaturan_tunjanganWhereUniqueInput
  }

  /**
   * pengaturan_tunjangan findFirst
   */
  export type pengaturan_tunjanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * Filter, which pengaturan_tunjangan to fetch.
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengaturan_tunjangans to fetch.
     */
    orderBy?: pengaturan_tunjanganOrderByWithRelationInput | pengaturan_tunjanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pengaturan_tunjangans.
     */
    cursor?: pengaturan_tunjanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengaturan_tunjangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengaturan_tunjangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengaturan_tunjangans.
     */
    distinct?: Pengaturan_tunjanganScalarFieldEnum | Pengaturan_tunjanganScalarFieldEnum[]
  }

  /**
   * pengaturan_tunjangan findFirstOrThrow
   */
  export type pengaturan_tunjanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * Filter, which pengaturan_tunjangan to fetch.
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengaturan_tunjangans to fetch.
     */
    orderBy?: pengaturan_tunjanganOrderByWithRelationInput | pengaturan_tunjanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pengaturan_tunjangans.
     */
    cursor?: pengaturan_tunjanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengaturan_tunjangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengaturan_tunjangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengaturan_tunjangans.
     */
    distinct?: Pengaturan_tunjanganScalarFieldEnum | Pengaturan_tunjanganScalarFieldEnum[]
  }

  /**
   * pengaturan_tunjangan findMany
   */
  export type pengaturan_tunjanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * Filter, which pengaturan_tunjangans to fetch.
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengaturan_tunjangans to fetch.
     */
    orderBy?: pengaturan_tunjanganOrderByWithRelationInput | pengaturan_tunjanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pengaturan_tunjangans.
     */
    cursor?: pengaturan_tunjanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengaturan_tunjangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengaturan_tunjangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengaturan_tunjangans.
     */
    distinct?: Pengaturan_tunjanganScalarFieldEnum | Pengaturan_tunjanganScalarFieldEnum[]
  }

  /**
   * pengaturan_tunjangan create
   */
  export type pengaturan_tunjanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * The data needed to create a pengaturan_tunjangan.
     */
    data: XOR<pengaturan_tunjanganCreateInput, pengaturan_tunjanganUncheckedCreateInput>
  }

  /**
   * pengaturan_tunjangan createMany
   */
  export type pengaturan_tunjanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pengaturan_tunjangans.
     */
    data: pengaturan_tunjanganCreateManyInput | pengaturan_tunjanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengaturan_tunjangan createManyAndReturn
   */
  export type pengaturan_tunjanganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * The data used to create many pengaturan_tunjangans.
     */
    data: pengaturan_tunjanganCreateManyInput | pengaturan_tunjanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengaturan_tunjangan update
   */
  export type pengaturan_tunjanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * The data needed to update a pengaturan_tunjangan.
     */
    data: XOR<pengaturan_tunjanganUpdateInput, pengaturan_tunjanganUncheckedUpdateInput>
    /**
     * Choose, which pengaturan_tunjangan to update.
     */
    where: pengaturan_tunjanganWhereUniqueInput
  }

  /**
   * pengaturan_tunjangan updateMany
   */
  export type pengaturan_tunjanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pengaturan_tunjangans.
     */
    data: XOR<pengaturan_tunjanganUpdateManyMutationInput, pengaturan_tunjanganUncheckedUpdateManyInput>
    /**
     * Filter which pengaturan_tunjangans to update
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * Limit how many pengaturan_tunjangans to update.
     */
    limit?: number
  }

  /**
   * pengaturan_tunjangan updateManyAndReturn
   */
  export type pengaturan_tunjanganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * The data used to update pengaturan_tunjangans.
     */
    data: XOR<pengaturan_tunjanganUpdateManyMutationInput, pengaturan_tunjanganUncheckedUpdateManyInput>
    /**
     * Filter which pengaturan_tunjangans to update
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * Limit how many pengaturan_tunjangans to update.
     */
    limit?: number
  }

  /**
   * pengaturan_tunjangan upsert
   */
  export type pengaturan_tunjanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * The filter to search for the pengaturan_tunjangan to update in case it exists.
     */
    where: pengaturan_tunjanganWhereUniqueInput
    /**
     * In case the pengaturan_tunjangan found by the `where` argument doesn't exist, create a new pengaturan_tunjangan with this data.
     */
    create: XOR<pengaturan_tunjanganCreateInput, pengaturan_tunjanganUncheckedCreateInput>
    /**
     * In case the pengaturan_tunjangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pengaturan_tunjanganUpdateInput, pengaturan_tunjanganUncheckedUpdateInput>
  }

  /**
   * pengaturan_tunjangan delete
   */
  export type pengaturan_tunjanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
    /**
     * Filter which pengaturan_tunjangan to delete.
     */
    where: pengaturan_tunjanganWhereUniqueInput
  }

  /**
   * pengaturan_tunjangan deleteMany
   */
  export type pengaturan_tunjanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengaturan_tunjangans to delete
     */
    where?: pengaturan_tunjanganWhereInput
    /**
     * Limit how many pengaturan_tunjangans to delete.
     */
    limit?: number
  }

  /**
   * pengaturan_tunjangan without action
   */
  export type pengaturan_tunjanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengaturan_tunjangan
     */
    select?: pengaturan_tunjanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengaturan_tunjangan
     */
    omit?: pengaturan_tunjanganOmit<ExtArgs> | null
  }


  /**
   * Model tunjangan_transport
   */

  export type AggregateTunjangan_transport = {
    _count: Tunjangan_transportCountAggregateOutputType | null
    _avg: Tunjangan_transportAvgAggregateOutputType | null
    _sum: Tunjangan_transportSumAggregateOutputType | null
    _min: Tunjangan_transportMinAggregateOutputType | null
    _max: Tunjangan_transportMaxAggregateOutputType | null
  }

  export type Tunjangan_transportAvgAggregateOutputType = {
    id_tunjangan: number | null
    id_pegawai: number | null
    bulan: number | null
    tahun: number | null
    jarak_km: number | null
    hari_masuk: number | null
    tarif_per_km: number | null
    total_tunjangan: number | null
  }

  export type Tunjangan_transportSumAggregateOutputType = {
    id_tunjangan: number | null
    id_pegawai: number | null
    bulan: number | null
    tahun: number | null
    jarak_km: number | null
    hari_masuk: number | null
    tarif_per_km: number | null
    total_tunjangan: number | null
  }

  export type Tunjangan_transportMinAggregateOutputType = {
    id_tunjangan: number | null
    id_pegawai: number | null
    bulan: number | null
    tahun: number | null
    jarak_km: number | null
    hari_masuk: number | null
    tarif_per_km: number | null
    total_tunjangan: number | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type Tunjangan_transportMaxAggregateOutputType = {
    id_tunjangan: number | null
    id_pegawai: number | null
    bulan: number | null
    tahun: number | null
    jarak_km: number | null
    hari_masuk: number | null
    tarif_per_km: number | null
    total_tunjangan: number | null
    dibuat_pada: Date | null
    diperbarui_pada: Date | null
  }

  export type Tunjangan_transportCountAggregateOutputType = {
    id_tunjangan: number
    id_pegawai: number
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada: number
    diperbarui_pada: number
    _all: number
  }


  export type Tunjangan_transportAvgAggregateInputType = {
    id_tunjangan?: true
    id_pegawai?: true
    bulan?: true
    tahun?: true
    jarak_km?: true
    hari_masuk?: true
    tarif_per_km?: true
    total_tunjangan?: true
  }

  export type Tunjangan_transportSumAggregateInputType = {
    id_tunjangan?: true
    id_pegawai?: true
    bulan?: true
    tahun?: true
    jarak_km?: true
    hari_masuk?: true
    tarif_per_km?: true
    total_tunjangan?: true
  }

  export type Tunjangan_transportMinAggregateInputType = {
    id_tunjangan?: true
    id_pegawai?: true
    bulan?: true
    tahun?: true
    jarak_km?: true
    hari_masuk?: true
    tarif_per_km?: true
    total_tunjangan?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type Tunjangan_transportMaxAggregateInputType = {
    id_tunjangan?: true
    id_pegawai?: true
    bulan?: true
    tahun?: true
    jarak_km?: true
    hari_masuk?: true
    tarif_per_km?: true
    total_tunjangan?: true
    dibuat_pada?: true
    diperbarui_pada?: true
  }

  export type Tunjangan_transportCountAggregateInputType = {
    id_tunjangan?: true
    id_pegawai?: true
    bulan?: true
    tahun?: true
    jarak_km?: true
    hari_masuk?: true
    tarif_per_km?: true
    total_tunjangan?: true
    dibuat_pada?: true
    diperbarui_pada?: true
    _all?: true
  }

  export type Tunjangan_transportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tunjangan_transport to aggregate.
     */
    where?: tunjangan_transportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tunjangan_transports to fetch.
     */
    orderBy?: tunjangan_transportOrderByWithRelationInput | tunjangan_transportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tunjangan_transportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tunjangan_transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tunjangan_transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tunjangan_transports
    **/
    _count?: true | Tunjangan_transportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tunjangan_transportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tunjangan_transportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tunjangan_transportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tunjangan_transportMaxAggregateInputType
  }

  export type GetTunjangan_transportAggregateType<T extends Tunjangan_transportAggregateArgs> = {
        [P in keyof T & keyof AggregateTunjangan_transport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTunjangan_transport[P]>
      : GetScalarType<T[P], AggregateTunjangan_transport[P]>
  }




  export type tunjangan_transportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tunjangan_transportWhereInput
    orderBy?: tunjangan_transportOrderByWithAggregationInput | tunjangan_transportOrderByWithAggregationInput[]
    by: Tunjangan_transportScalarFieldEnum[] | Tunjangan_transportScalarFieldEnum
    having?: tunjangan_transportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tunjangan_transportCountAggregateInputType | true
    _avg?: Tunjangan_transportAvgAggregateInputType
    _sum?: Tunjangan_transportSumAggregateInputType
    _min?: Tunjangan_transportMinAggregateInputType
    _max?: Tunjangan_transportMaxAggregateInputType
  }

  export type Tunjangan_transportGroupByOutputType = {
    id_tunjangan: number
    id_pegawai: number
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada: Date
    diperbarui_pada: Date
    _count: Tunjangan_transportCountAggregateOutputType | null
    _avg: Tunjangan_transportAvgAggregateOutputType | null
    _sum: Tunjangan_transportSumAggregateOutputType | null
    _min: Tunjangan_transportMinAggregateOutputType | null
    _max: Tunjangan_transportMaxAggregateOutputType | null
  }

  type GetTunjangan_transportGroupByPayload<T extends tunjangan_transportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tunjangan_transportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tunjangan_transportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tunjangan_transportGroupByOutputType[P]>
            : GetScalarType<T[P], Tunjangan_transportGroupByOutputType[P]>
        }
      >
    >


  export type tunjangan_transportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tunjangan?: boolean
    id_pegawai?: boolean
    bulan?: boolean
    tahun?: boolean
    jarak_km?: boolean
    hari_masuk?: boolean
    tarif_per_km?: boolean
    total_tunjangan?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunjangan_transport"]>

  export type tunjangan_transportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tunjangan?: boolean
    id_pegawai?: boolean
    bulan?: boolean
    tahun?: boolean
    jarak_km?: boolean
    hari_masuk?: boolean
    tarif_per_km?: boolean
    total_tunjangan?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunjangan_transport"]>

  export type tunjangan_transportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tunjangan?: boolean
    id_pegawai?: boolean
    bulan?: boolean
    tahun?: boolean
    jarak_km?: boolean
    hari_masuk?: boolean
    tarif_per_km?: boolean
    total_tunjangan?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tunjangan_transport"]>

  export type tunjangan_transportSelectScalar = {
    id_tunjangan?: boolean
    id_pegawai?: boolean
    bulan?: boolean
    tahun?: boolean
    jarak_km?: boolean
    hari_masuk?: boolean
    tarif_per_km?: boolean
    total_tunjangan?: boolean
    dibuat_pada?: boolean
    diperbarui_pada?: boolean
  }

  export type tunjangan_transportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tunjangan" | "id_pegawai" | "bulan" | "tahun" | "jarak_km" | "hari_masuk" | "tarif_per_km" | "total_tunjangan" | "dibuat_pada" | "diperbarui_pada", ExtArgs["result"]["tunjangan_transport"]>
  export type tunjangan_transportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }
  export type tunjangan_transportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }
  export type tunjangan_transportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | pegawaiDefaultArgs<ExtArgs>
  }

  export type $tunjangan_transportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tunjangan_transport"
    objects: {
      pegawai: Prisma.$pegawaiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tunjangan: number
      id_pegawai: number
      bulan: number
      tahun: number
      jarak_km: number
      hari_masuk: number
      tarif_per_km: number
      total_tunjangan: number
      dibuat_pada: Date
      diperbarui_pada: Date
    }, ExtArgs["result"]["tunjangan_transport"]>
    composites: {}
  }

  type tunjangan_transportGetPayload<S extends boolean | null | undefined | tunjangan_transportDefaultArgs> = $Result.GetResult<Prisma.$tunjangan_transportPayload, S>

  type tunjangan_transportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tunjangan_transportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tunjangan_transportCountAggregateInputType | true
    }

  export interface tunjangan_transportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tunjangan_transport'], meta: { name: 'tunjangan_transport' } }
    /**
     * Find zero or one Tunjangan_transport that matches the filter.
     * @param {tunjangan_transportFindUniqueArgs} args - Arguments to find a Tunjangan_transport
     * @example
     * // Get one Tunjangan_transport
     * const tunjangan_transport = await prisma.tunjangan_transport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tunjangan_transportFindUniqueArgs>(args: SelectSubset<T, tunjangan_transportFindUniqueArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tunjangan_transport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tunjangan_transportFindUniqueOrThrowArgs} args - Arguments to find a Tunjangan_transport
     * @example
     * // Get one Tunjangan_transport
     * const tunjangan_transport = await prisma.tunjangan_transport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tunjangan_transportFindUniqueOrThrowArgs>(args: SelectSubset<T, tunjangan_transportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tunjangan_transport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tunjangan_transportFindFirstArgs} args - Arguments to find a Tunjangan_transport
     * @example
     * // Get one Tunjangan_transport
     * const tunjangan_transport = await prisma.tunjangan_transport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tunjangan_transportFindFirstArgs>(args?: SelectSubset<T, tunjangan_transportFindFirstArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tunjangan_transport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tunjangan_transportFindFirstOrThrowArgs} args - Arguments to find a Tunjangan_transport
     * @example
     * // Get one Tunjangan_transport
     * const tunjangan_transport = await prisma.tunjangan_transport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tunjangan_transportFindFirstOrThrowArgs>(args?: SelectSubset<T, tunjangan_transportFindFirstOrThrowArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tunjangan_transports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tunjangan_transportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tunjangan_transports
     * const tunjangan_transports = await prisma.tunjangan_transport.findMany()
     * 
     * // Get first 10 Tunjangan_transports
     * const tunjangan_transports = await prisma.tunjangan_transport.findMany({ take: 10 })
     * 
     * // Only select the `id_tunjangan`
     * const tunjangan_transportWithId_tunjanganOnly = await prisma.tunjangan_transport.findMany({ select: { id_tunjangan: true } })
     * 
     */
    findMany<T extends tunjangan_transportFindManyArgs>(args?: SelectSubset<T, tunjangan_transportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tunjangan_transport.
     * @param {tunjangan_transportCreateArgs} args - Arguments to create a Tunjangan_transport.
     * @example
     * // Create one Tunjangan_transport
     * const Tunjangan_transport = await prisma.tunjangan_transport.create({
     *   data: {
     *     // ... data to create a Tunjangan_transport
     *   }
     * })
     * 
     */
    create<T extends tunjangan_transportCreateArgs>(args: SelectSubset<T, tunjangan_transportCreateArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tunjangan_transports.
     * @param {tunjangan_transportCreateManyArgs} args - Arguments to create many Tunjangan_transports.
     * @example
     * // Create many Tunjangan_transports
     * const tunjangan_transport = await prisma.tunjangan_transport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tunjangan_transportCreateManyArgs>(args?: SelectSubset<T, tunjangan_transportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tunjangan_transports and returns the data saved in the database.
     * @param {tunjangan_transportCreateManyAndReturnArgs} args - Arguments to create many Tunjangan_transports.
     * @example
     * // Create many Tunjangan_transports
     * const tunjangan_transport = await prisma.tunjangan_transport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tunjangan_transports and only return the `id_tunjangan`
     * const tunjangan_transportWithId_tunjanganOnly = await prisma.tunjangan_transport.createManyAndReturn({
     *   select: { id_tunjangan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tunjangan_transportCreateManyAndReturnArgs>(args?: SelectSubset<T, tunjangan_transportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tunjangan_transport.
     * @param {tunjangan_transportDeleteArgs} args - Arguments to delete one Tunjangan_transport.
     * @example
     * // Delete one Tunjangan_transport
     * const Tunjangan_transport = await prisma.tunjangan_transport.delete({
     *   where: {
     *     // ... filter to delete one Tunjangan_transport
     *   }
     * })
     * 
     */
    delete<T extends tunjangan_transportDeleteArgs>(args: SelectSubset<T, tunjangan_transportDeleteArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tunjangan_transport.
     * @param {tunjangan_transportUpdateArgs} args - Arguments to update one Tunjangan_transport.
     * @example
     * // Update one Tunjangan_transport
     * const tunjangan_transport = await prisma.tunjangan_transport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tunjangan_transportUpdateArgs>(args: SelectSubset<T, tunjangan_transportUpdateArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tunjangan_transports.
     * @param {tunjangan_transportDeleteManyArgs} args - Arguments to filter Tunjangan_transports to delete.
     * @example
     * // Delete a few Tunjangan_transports
     * const { count } = await prisma.tunjangan_transport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tunjangan_transportDeleteManyArgs>(args?: SelectSubset<T, tunjangan_transportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tunjangan_transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tunjangan_transportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tunjangan_transports
     * const tunjangan_transport = await prisma.tunjangan_transport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tunjangan_transportUpdateManyArgs>(args: SelectSubset<T, tunjangan_transportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tunjangan_transports and returns the data updated in the database.
     * @param {tunjangan_transportUpdateManyAndReturnArgs} args - Arguments to update many Tunjangan_transports.
     * @example
     * // Update many Tunjangan_transports
     * const tunjangan_transport = await prisma.tunjangan_transport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tunjangan_transports and only return the `id_tunjangan`
     * const tunjangan_transportWithId_tunjanganOnly = await prisma.tunjangan_transport.updateManyAndReturn({
     *   select: { id_tunjangan: true },
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
    updateManyAndReturn<T extends tunjangan_transportUpdateManyAndReturnArgs>(args: SelectSubset<T, tunjangan_transportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tunjangan_transport.
     * @param {tunjangan_transportUpsertArgs} args - Arguments to update or create a Tunjangan_transport.
     * @example
     * // Update or create a Tunjangan_transport
     * const tunjangan_transport = await prisma.tunjangan_transport.upsert({
     *   create: {
     *     // ... data to create a Tunjangan_transport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tunjangan_transport we want to update
     *   }
     * })
     */
    upsert<T extends tunjangan_transportUpsertArgs>(args: SelectSubset<T, tunjangan_transportUpsertArgs<ExtArgs>>): Prisma__tunjangan_transportClient<$Result.GetResult<Prisma.$tunjangan_transportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tunjangan_transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tunjangan_transportCountArgs} args - Arguments to filter Tunjangan_transports to count.
     * @example
     * // Count the number of Tunjangan_transports
     * const count = await prisma.tunjangan_transport.count({
     *   where: {
     *     // ... the filter for the Tunjangan_transports we want to count
     *   }
     * })
    **/
    count<T extends tunjangan_transportCountArgs>(
      args?: Subset<T, tunjangan_transportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tunjangan_transportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tunjangan_transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tunjangan_transportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tunjangan_transportAggregateArgs>(args: Subset<T, Tunjangan_transportAggregateArgs>): Prisma.PrismaPromise<GetTunjangan_transportAggregateType<T>>

    /**
     * Group by Tunjangan_transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tunjangan_transportGroupByArgs} args - Group by arguments.
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
      T extends tunjangan_transportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tunjangan_transportGroupByArgs['orderBy'] }
        : { orderBy?: tunjangan_transportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tunjangan_transportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTunjangan_transportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tunjangan_transport model
   */
  readonly fields: tunjangan_transportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tunjangan_transport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tunjangan_transportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends pegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pegawaiDefaultArgs<ExtArgs>>): Prisma__pegawaiClient<$Result.GetResult<Prisma.$pegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tunjangan_transport model
   */
  interface tunjangan_transportFieldRefs {
    readonly id_tunjangan: FieldRef<"tunjangan_transport", 'Int'>
    readonly id_pegawai: FieldRef<"tunjangan_transport", 'Int'>
    readonly bulan: FieldRef<"tunjangan_transport", 'Int'>
    readonly tahun: FieldRef<"tunjangan_transport", 'Int'>
    readonly jarak_km: FieldRef<"tunjangan_transport", 'Float'>
    readonly hari_masuk: FieldRef<"tunjangan_transport", 'Int'>
    readonly tarif_per_km: FieldRef<"tunjangan_transport", 'Float'>
    readonly total_tunjangan: FieldRef<"tunjangan_transport", 'Float'>
    readonly dibuat_pada: FieldRef<"tunjangan_transport", 'DateTime'>
    readonly diperbarui_pada: FieldRef<"tunjangan_transport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tunjangan_transport findUnique
   */
  export type tunjangan_transportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * Filter, which tunjangan_transport to fetch.
     */
    where: tunjangan_transportWhereUniqueInput
  }

  /**
   * tunjangan_transport findUniqueOrThrow
   */
  export type tunjangan_transportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * Filter, which tunjangan_transport to fetch.
     */
    where: tunjangan_transportWhereUniqueInput
  }

  /**
   * tunjangan_transport findFirst
   */
  export type tunjangan_transportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * Filter, which tunjangan_transport to fetch.
     */
    where?: tunjangan_transportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tunjangan_transports to fetch.
     */
    orderBy?: tunjangan_transportOrderByWithRelationInput | tunjangan_transportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tunjangan_transports.
     */
    cursor?: tunjangan_transportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tunjangan_transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tunjangan_transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tunjangan_transports.
     */
    distinct?: Tunjangan_transportScalarFieldEnum | Tunjangan_transportScalarFieldEnum[]
  }

  /**
   * tunjangan_transport findFirstOrThrow
   */
  export type tunjangan_transportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * Filter, which tunjangan_transport to fetch.
     */
    where?: tunjangan_transportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tunjangan_transports to fetch.
     */
    orderBy?: tunjangan_transportOrderByWithRelationInput | tunjangan_transportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tunjangan_transports.
     */
    cursor?: tunjangan_transportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tunjangan_transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tunjangan_transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tunjangan_transports.
     */
    distinct?: Tunjangan_transportScalarFieldEnum | Tunjangan_transportScalarFieldEnum[]
  }

  /**
   * tunjangan_transport findMany
   */
  export type tunjangan_transportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * Filter, which tunjangan_transports to fetch.
     */
    where?: tunjangan_transportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tunjangan_transports to fetch.
     */
    orderBy?: tunjangan_transportOrderByWithRelationInput | tunjangan_transportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tunjangan_transports.
     */
    cursor?: tunjangan_transportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tunjangan_transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tunjangan_transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tunjangan_transports.
     */
    distinct?: Tunjangan_transportScalarFieldEnum | Tunjangan_transportScalarFieldEnum[]
  }

  /**
   * tunjangan_transport create
   */
  export type tunjangan_transportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * The data needed to create a tunjangan_transport.
     */
    data: XOR<tunjangan_transportCreateInput, tunjangan_transportUncheckedCreateInput>
  }

  /**
   * tunjangan_transport createMany
   */
  export type tunjangan_transportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tunjangan_transports.
     */
    data: tunjangan_transportCreateManyInput | tunjangan_transportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tunjangan_transport createManyAndReturn
   */
  export type tunjangan_transportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * The data used to create many tunjangan_transports.
     */
    data: tunjangan_transportCreateManyInput | tunjangan_transportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tunjangan_transport update
   */
  export type tunjangan_transportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * The data needed to update a tunjangan_transport.
     */
    data: XOR<tunjangan_transportUpdateInput, tunjangan_transportUncheckedUpdateInput>
    /**
     * Choose, which tunjangan_transport to update.
     */
    where: tunjangan_transportWhereUniqueInput
  }

  /**
   * tunjangan_transport updateMany
   */
  export type tunjangan_transportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tunjangan_transports.
     */
    data: XOR<tunjangan_transportUpdateManyMutationInput, tunjangan_transportUncheckedUpdateManyInput>
    /**
     * Filter which tunjangan_transports to update
     */
    where?: tunjangan_transportWhereInput
    /**
     * Limit how many tunjangan_transports to update.
     */
    limit?: number
  }

  /**
   * tunjangan_transport updateManyAndReturn
   */
  export type tunjangan_transportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * The data used to update tunjangan_transports.
     */
    data: XOR<tunjangan_transportUpdateManyMutationInput, tunjangan_transportUncheckedUpdateManyInput>
    /**
     * Filter which tunjangan_transports to update
     */
    where?: tunjangan_transportWhereInput
    /**
     * Limit how many tunjangan_transports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tunjangan_transport upsert
   */
  export type tunjangan_transportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * The filter to search for the tunjangan_transport to update in case it exists.
     */
    where: tunjangan_transportWhereUniqueInput
    /**
     * In case the tunjangan_transport found by the `where` argument doesn't exist, create a new tunjangan_transport with this data.
     */
    create: XOR<tunjangan_transportCreateInput, tunjangan_transportUncheckedCreateInput>
    /**
     * In case the tunjangan_transport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tunjangan_transportUpdateInput, tunjangan_transportUncheckedUpdateInput>
  }

  /**
   * tunjangan_transport delete
   */
  export type tunjangan_transportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
    /**
     * Filter which tunjangan_transport to delete.
     */
    where: tunjangan_transportWhereUniqueInput
  }

  /**
   * tunjangan_transport deleteMany
   */
  export type tunjangan_transportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tunjangan_transports to delete
     */
    where?: tunjangan_transportWhereInput
    /**
     * Limit how many tunjangan_transports to delete.
     */
    limit?: number
  }

  /**
   * tunjangan_transport without action
   */
  export type tunjangan_transportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tunjangan_transport
     */
    select?: tunjangan_transportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tunjangan_transport
     */
    omit?: tunjangan_transportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tunjangan_transportInclude<ExtArgs> | null
  }


  /**
   * Model log_aktivitas
   */

  export type AggregateLog_aktivitas = {
    _count: Log_aktivitasCountAggregateOutputType | null
    _avg: Log_aktivitasAvgAggregateOutputType | null
    _sum: Log_aktivitasSumAggregateOutputType | null
    _min: Log_aktivitasMinAggregateOutputType | null
    _max: Log_aktivitasMaxAggregateOutputType | null
  }

  export type Log_aktivitasAvgAggregateOutputType = {
    id_log: number | null
    id_pengguna: number | null
  }

  export type Log_aktivitasSumAggregateOutputType = {
    id_log: number | null
    id_pengguna: number | null
  }

  export type Log_aktivitasMinAggregateOutputType = {
    id_log: number | null
    id_pengguna: number | null
    modul: string | null
    aksi: $Enums.AksiLog | null
    keterangan: string | null
    ip_address: string | null
    user_agent: string | null
    dibuat_pada: Date | null
  }

  export type Log_aktivitasMaxAggregateOutputType = {
    id_log: number | null
    id_pengguna: number | null
    modul: string | null
    aksi: $Enums.AksiLog | null
    keterangan: string | null
    ip_address: string | null
    user_agent: string | null
    dibuat_pada: Date | null
  }

  export type Log_aktivitasCountAggregateOutputType = {
    id_log: number
    id_pengguna: number
    modul: number
    aksi: number
    keterangan: number
    ip_address: number
    user_agent: number
    dibuat_pada: number
    _all: number
  }


  export type Log_aktivitasAvgAggregateInputType = {
    id_log?: true
    id_pengguna?: true
  }

  export type Log_aktivitasSumAggregateInputType = {
    id_log?: true
    id_pengguna?: true
  }

  export type Log_aktivitasMinAggregateInputType = {
    id_log?: true
    id_pengguna?: true
    modul?: true
    aksi?: true
    keterangan?: true
    ip_address?: true
    user_agent?: true
    dibuat_pada?: true
  }

  export type Log_aktivitasMaxAggregateInputType = {
    id_log?: true
    id_pengguna?: true
    modul?: true
    aksi?: true
    keterangan?: true
    ip_address?: true
    user_agent?: true
    dibuat_pada?: true
  }

  export type Log_aktivitasCountAggregateInputType = {
    id_log?: true
    id_pengguna?: true
    modul?: true
    aksi?: true
    keterangan?: true
    ip_address?: true
    user_agent?: true
    dibuat_pada?: true
    _all?: true
  }

  export type Log_aktivitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_aktivitas to aggregate.
     */
    where?: log_aktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_aktivitas to fetch.
     */
    orderBy?: log_aktivitasOrderByWithRelationInput | log_aktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: log_aktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_aktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_aktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned log_aktivitas
    **/
    _count?: true | Log_aktivitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Log_aktivitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Log_aktivitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_aktivitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_aktivitasMaxAggregateInputType
  }

  export type GetLog_aktivitasAggregateType<T extends Log_aktivitasAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_aktivitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_aktivitas[P]>
      : GetScalarType<T[P], AggregateLog_aktivitas[P]>
  }




  export type log_aktivitasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: log_aktivitasWhereInput
    orderBy?: log_aktivitasOrderByWithAggregationInput | log_aktivitasOrderByWithAggregationInput[]
    by: Log_aktivitasScalarFieldEnum[] | Log_aktivitasScalarFieldEnum
    having?: log_aktivitasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_aktivitasCountAggregateInputType | true
    _avg?: Log_aktivitasAvgAggregateInputType
    _sum?: Log_aktivitasSumAggregateInputType
    _min?: Log_aktivitasMinAggregateInputType
    _max?: Log_aktivitasMaxAggregateInputType
  }

  export type Log_aktivitasGroupByOutputType = {
    id_log: number
    id_pengguna: number | null
    modul: string
    aksi: $Enums.AksiLog
    keterangan: string | null
    ip_address: string | null
    user_agent: string | null
    dibuat_pada: Date
    _count: Log_aktivitasCountAggregateOutputType | null
    _avg: Log_aktivitasAvgAggregateOutputType | null
    _sum: Log_aktivitasSumAggregateOutputType | null
    _min: Log_aktivitasMinAggregateOutputType | null
    _max: Log_aktivitasMaxAggregateOutputType | null
  }

  type GetLog_aktivitasGroupByPayload<T extends log_aktivitasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_aktivitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_aktivitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_aktivitasGroupByOutputType[P]>
            : GetScalarType<T[P], Log_aktivitasGroupByOutputType[P]>
        }
      >
    >


  export type log_aktivitasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_pengguna?: boolean
    modul?: boolean
    aksi?: boolean
    keterangan?: boolean
    ip_address?: boolean
    user_agent?: boolean
    dibuat_pada?: boolean
    pengguna?: boolean | log_aktivitas$penggunaArgs<ExtArgs>
  }, ExtArgs["result"]["log_aktivitas"]>

  export type log_aktivitasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_pengguna?: boolean
    modul?: boolean
    aksi?: boolean
    keterangan?: boolean
    ip_address?: boolean
    user_agent?: boolean
    dibuat_pada?: boolean
    pengguna?: boolean | log_aktivitas$penggunaArgs<ExtArgs>
  }, ExtArgs["result"]["log_aktivitas"]>

  export type log_aktivitasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_pengguna?: boolean
    modul?: boolean
    aksi?: boolean
    keterangan?: boolean
    ip_address?: boolean
    user_agent?: boolean
    dibuat_pada?: boolean
    pengguna?: boolean | log_aktivitas$penggunaArgs<ExtArgs>
  }, ExtArgs["result"]["log_aktivitas"]>

  export type log_aktivitasSelectScalar = {
    id_log?: boolean
    id_pengguna?: boolean
    modul?: boolean
    aksi?: boolean
    keterangan?: boolean
    ip_address?: boolean
    user_agent?: boolean
    dibuat_pada?: boolean
  }

  export type log_aktivitasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_log" | "id_pengguna" | "modul" | "aksi" | "keterangan" | "ip_address" | "user_agent" | "dibuat_pada", ExtArgs["result"]["log_aktivitas"]>
  export type log_aktivitasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | log_aktivitas$penggunaArgs<ExtArgs>
  }
  export type log_aktivitasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | log_aktivitas$penggunaArgs<ExtArgs>
  }
  export type log_aktivitasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | log_aktivitas$penggunaArgs<ExtArgs>
  }

  export type $log_aktivitasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log_aktivitas"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_log: number
      id_pengguna: number | null
      modul: string
      aksi: $Enums.AksiLog
      keterangan: string | null
      ip_address: string | null
      user_agent: string | null
      dibuat_pada: Date
    }, ExtArgs["result"]["log_aktivitas"]>
    composites: {}
  }

  type log_aktivitasGetPayload<S extends boolean | null | undefined | log_aktivitasDefaultArgs> = $Result.GetResult<Prisma.$log_aktivitasPayload, S>

  type log_aktivitasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<log_aktivitasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_aktivitasCountAggregateInputType | true
    }

  export interface log_aktivitasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log_aktivitas'], meta: { name: 'log_aktivitas' } }
    /**
     * Find zero or one Log_aktivitas that matches the filter.
     * @param {log_aktivitasFindUniqueArgs} args - Arguments to find a Log_aktivitas
     * @example
     * // Get one Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends log_aktivitasFindUniqueArgs>(args: SelectSubset<T, log_aktivitasFindUniqueArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log_aktivitas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {log_aktivitasFindUniqueOrThrowArgs} args - Arguments to find a Log_aktivitas
     * @example
     * // Get one Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends log_aktivitasFindUniqueOrThrowArgs>(args: SelectSubset<T, log_aktivitasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_aktivitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_aktivitasFindFirstArgs} args - Arguments to find a Log_aktivitas
     * @example
     * // Get one Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends log_aktivitasFindFirstArgs>(args?: SelectSubset<T, log_aktivitasFindFirstArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_aktivitas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_aktivitasFindFirstOrThrowArgs} args - Arguments to find a Log_aktivitas
     * @example
     * // Get one Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends log_aktivitasFindFirstOrThrowArgs>(args?: SelectSubset<T, log_aktivitasFindFirstOrThrowArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Log_aktivitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_aktivitasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.findMany()
     * 
     * // Get first 10 Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.findMany({ take: 10 })
     * 
     * // Only select the `id_log`
     * const log_aktivitasWithId_logOnly = await prisma.log_aktivitas.findMany({ select: { id_log: true } })
     * 
     */
    findMany<T extends log_aktivitasFindManyArgs>(args?: SelectSubset<T, log_aktivitasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log_aktivitas.
     * @param {log_aktivitasCreateArgs} args - Arguments to create a Log_aktivitas.
     * @example
     * // Create one Log_aktivitas
     * const Log_aktivitas = await prisma.log_aktivitas.create({
     *   data: {
     *     // ... data to create a Log_aktivitas
     *   }
     * })
     * 
     */
    create<T extends log_aktivitasCreateArgs>(args: SelectSubset<T, log_aktivitasCreateArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Log_aktivitas.
     * @param {log_aktivitasCreateManyArgs} args - Arguments to create many Log_aktivitas.
     * @example
     * // Create many Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends log_aktivitasCreateManyArgs>(args?: SelectSubset<T, log_aktivitasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Log_aktivitas and returns the data saved in the database.
     * @param {log_aktivitasCreateManyAndReturnArgs} args - Arguments to create many Log_aktivitas.
     * @example
     * // Create many Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Log_aktivitas and only return the `id_log`
     * const log_aktivitasWithId_logOnly = await prisma.log_aktivitas.createManyAndReturn({
     *   select: { id_log: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends log_aktivitasCreateManyAndReturnArgs>(args?: SelectSubset<T, log_aktivitasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log_aktivitas.
     * @param {log_aktivitasDeleteArgs} args - Arguments to delete one Log_aktivitas.
     * @example
     * // Delete one Log_aktivitas
     * const Log_aktivitas = await prisma.log_aktivitas.delete({
     *   where: {
     *     // ... filter to delete one Log_aktivitas
     *   }
     * })
     * 
     */
    delete<T extends log_aktivitasDeleteArgs>(args: SelectSubset<T, log_aktivitasDeleteArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log_aktivitas.
     * @param {log_aktivitasUpdateArgs} args - Arguments to update one Log_aktivitas.
     * @example
     * // Update one Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends log_aktivitasUpdateArgs>(args: SelectSubset<T, log_aktivitasUpdateArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Log_aktivitas.
     * @param {log_aktivitasDeleteManyArgs} args - Arguments to filter Log_aktivitas to delete.
     * @example
     * // Delete a few Log_aktivitas
     * const { count } = await prisma.log_aktivitas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends log_aktivitasDeleteManyArgs>(args?: SelectSubset<T, log_aktivitasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_aktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_aktivitasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends log_aktivitasUpdateManyArgs>(args: SelectSubset<T, log_aktivitasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_aktivitas and returns the data updated in the database.
     * @param {log_aktivitasUpdateManyAndReturnArgs} args - Arguments to update many Log_aktivitas.
     * @example
     * // Update many Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Log_aktivitas and only return the `id_log`
     * const log_aktivitasWithId_logOnly = await prisma.log_aktivitas.updateManyAndReturn({
     *   select: { id_log: true },
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
    updateManyAndReturn<T extends log_aktivitasUpdateManyAndReturnArgs>(args: SelectSubset<T, log_aktivitasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log_aktivitas.
     * @param {log_aktivitasUpsertArgs} args - Arguments to update or create a Log_aktivitas.
     * @example
     * // Update or create a Log_aktivitas
     * const log_aktivitas = await prisma.log_aktivitas.upsert({
     *   create: {
     *     // ... data to create a Log_aktivitas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_aktivitas we want to update
     *   }
     * })
     */
    upsert<T extends log_aktivitasUpsertArgs>(args: SelectSubset<T, log_aktivitasUpsertArgs<ExtArgs>>): Prisma__log_aktivitasClient<$Result.GetResult<Prisma.$log_aktivitasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Log_aktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_aktivitasCountArgs} args - Arguments to filter Log_aktivitas to count.
     * @example
     * // Count the number of Log_aktivitas
     * const count = await prisma.log_aktivitas.count({
     *   where: {
     *     // ... the filter for the Log_aktivitas we want to count
     *   }
     * })
    **/
    count<T extends log_aktivitasCountArgs>(
      args?: Subset<T, log_aktivitasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_aktivitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_aktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_aktivitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_aktivitasAggregateArgs>(args: Subset<T, Log_aktivitasAggregateArgs>): Prisma.PrismaPromise<GetLog_aktivitasAggregateType<T>>

    /**
     * Group by Log_aktivitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {log_aktivitasGroupByArgs} args - Group by arguments.
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
      T extends log_aktivitasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: log_aktivitasGroupByArgs['orderBy'] }
        : { orderBy?: log_aktivitasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, log_aktivitasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_aktivitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log_aktivitas model
   */
  readonly fields: log_aktivitasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log_aktivitas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__log_aktivitasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends log_aktivitas$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, log_aktivitas$penggunaArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the log_aktivitas model
   */
  interface log_aktivitasFieldRefs {
    readonly id_log: FieldRef<"log_aktivitas", 'Int'>
    readonly id_pengguna: FieldRef<"log_aktivitas", 'Int'>
    readonly modul: FieldRef<"log_aktivitas", 'String'>
    readonly aksi: FieldRef<"log_aktivitas", 'AksiLog'>
    readonly keterangan: FieldRef<"log_aktivitas", 'String'>
    readonly ip_address: FieldRef<"log_aktivitas", 'String'>
    readonly user_agent: FieldRef<"log_aktivitas", 'String'>
    readonly dibuat_pada: FieldRef<"log_aktivitas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * log_aktivitas findUnique
   */
  export type log_aktivitasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * Filter, which log_aktivitas to fetch.
     */
    where: log_aktivitasWhereUniqueInput
  }

  /**
   * log_aktivitas findUniqueOrThrow
   */
  export type log_aktivitasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * Filter, which log_aktivitas to fetch.
     */
    where: log_aktivitasWhereUniqueInput
  }

  /**
   * log_aktivitas findFirst
   */
  export type log_aktivitasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * Filter, which log_aktivitas to fetch.
     */
    where?: log_aktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_aktivitas to fetch.
     */
    orderBy?: log_aktivitasOrderByWithRelationInput | log_aktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_aktivitas.
     */
    cursor?: log_aktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_aktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_aktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_aktivitas.
     */
    distinct?: Log_aktivitasScalarFieldEnum | Log_aktivitasScalarFieldEnum[]
  }

  /**
   * log_aktivitas findFirstOrThrow
   */
  export type log_aktivitasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * Filter, which log_aktivitas to fetch.
     */
    where?: log_aktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_aktivitas to fetch.
     */
    orderBy?: log_aktivitasOrderByWithRelationInput | log_aktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for log_aktivitas.
     */
    cursor?: log_aktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_aktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_aktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_aktivitas.
     */
    distinct?: Log_aktivitasScalarFieldEnum | Log_aktivitasScalarFieldEnum[]
  }

  /**
   * log_aktivitas findMany
   */
  export type log_aktivitasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * Filter, which log_aktivitas to fetch.
     */
    where?: log_aktivitasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of log_aktivitas to fetch.
     */
    orderBy?: log_aktivitasOrderByWithRelationInput | log_aktivitasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing log_aktivitas.
     */
    cursor?: log_aktivitasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` log_aktivitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` log_aktivitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of log_aktivitas.
     */
    distinct?: Log_aktivitasScalarFieldEnum | Log_aktivitasScalarFieldEnum[]
  }

  /**
   * log_aktivitas create
   */
  export type log_aktivitasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * The data needed to create a log_aktivitas.
     */
    data: XOR<log_aktivitasCreateInput, log_aktivitasUncheckedCreateInput>
  }

  /**
   * log_aktivitas createMany
   */
  export type log_aktivitasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many log_aktivitas.
     */
    data: log_aktivitasCreateManyInput | log_aktivitasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log_aktivitas createManyAndReturn
   */
  export type log_aktivitasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * The data used to create many log_aktivitas.
     */
    data: log_aktivitasCreateManyInput | log_aktivitasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * log_aktivitas update
   */
  export type log_aktivitasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * The data needed to update a log_aktivitas.
     */
    data: XOR<log_aktivitasUpdateInput, log_aktivitasUncheckedUpdateInput>
    /**
     * Choose, which log_aktivitas to update.
     */
    where: log_aktivitasWhereUniqueInput
  }

  /**
   * log_aktivitas updateMany
   */
  export type log_aktivitasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update log_aktivitas.
     */
    data: XOR<log_aktivitasUpdateManyMutationInput, log_aktivitasUncheckedUpdateManyInput>
    /**
     * Filter which log_aktivitas to update
     */
    where?: log_aktivitasWhereInput
    /**
     * Limit how many log_aktivitas to update.
     */
    limit?: number
  }

  /**
   * log_aktivitas updateManyAndReturn
   */
  export type log_aktivitasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * The data used to update log_aktivitas.
     */
    data: XOR<log_aktivitasUpdateManyMutationInput, log_aktivitasUncheckedUpdateManyInput>
    /**
     * Filter which log_aktivitas to update
     */
    where?: log_aktivitasWhereInput
    /**
     * Limit how many log_aktivitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * log_aktivitas upsert
   */
  export type log_aktivitasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * The filter to search for the log_aktivitas to update in case it exists.
     */
    where: log_aktivitasWhereUniqueInput
    /**
     * In case the log_aktivitas found by the `where` argument doesn't exist, create a new log_aktivitas with this data.
     */
    create: XOR<log_aktivitasCreateInput, log_aktivitasUncheckedCreateInput>
    /**
     * In case the log_aktivitas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<log_aktivitasUpdateInput, log_aktivitasUncheckedUpdateInput>
  }

  /**
   * log_aktivitas delete
   */
  export type log_aktivitasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
    /**
     * Filter which log_aktivitas to delete.
     */
    where: log_aktivitasWhereUniqueInput
  }

  /**
   * log_aktivitas deleteMany
   */
  export type log_aktivitasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log_aktivitas to delete
     */
    where?: log_aktivitasWhereInput
    /**
     * Limit how many log_aktivitas to delete.
     */
    limit?: number
  }

  /**
   * log_aktivitas.pengguna
   */
  export type log_aktivitas$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * log_aktivitas without action
   */
  export type log_aktivitasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log_aktivitas
     */
    select?: log_aktivitasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log_aktivitas
     */
    omit?: log_aktivitasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: log_aktivitasInclude<ExtArgs> | null
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


  export const PeranScalarFieldEnum: {
    id_peran: 'id_peran',
    nama_peran: 'nama_peran',
    deskripsi: 'deskripsi',
    dibuat_pada: 'dibuat_pada',
    diperbarui_pada: 'diperbarui_pada'
  };

  export type PeranScalarFieldEnum = (typeof PeranScalarFieldEnum)[keyof typeof PeranScalarFieldEnum]


  export const Hak_aksesScalarFieldEnum: {
    id_hak_akses: 'id_hak_akses',
    nama_akses: 'nama_akses',
    modul: 'modul',
    deskripsi: 'deskripsi',
    dibuat_pada: 'dibuat_pada'
  };

  export type Hak_aksesScalarFieldEnum = (typeof Hak_aksesScalarFieldEnum)[keyof typeof Hak_aksesScalarFieldEnum]


  export const Peran_hak_aksesScalarFieldEnum: {
    id_peran: 'id_peran',
    id_hak_akses: 'id_hak_akses'
  };

  export type Peran_hak_aksesScalarFieldEnum = (typeof Peran_hak_aksesScalarFieldEnum)[keyof typeof Peran_hak_aksesScalarFieldEnum]


  export const PenggunaScalarFieldEnum: {
    id_pengguna: 'id_pengguna',
    id_pegawai: 'id_pegawai',
    nama_pengguna: 'nama_pengguna',
    username: 'username',
    email: 'email',
    nomor_hp: 'nomor_hp',
    kata_sandi: 'kata_sandi',
    id_peran: 'id_peran',
    status_aktif: 'status_aktif',
    foto: 'foto',
    terakhir_login: 'terakhir_login',
    dibuat_pada: 'dibuat_pada',
    diperbarui_pada: 'diperbarui_pada',
    dihapus_pada: 'dihapus_pada'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id_pegawai: 'id_pegawai',
    nip: 'nip',
    nama_pegawai: 'nama_pegawai',
    email: 'email',
    nomor_hp: 'nomor_hp',
    tempat_lahir: 'tempat_lahir',
    tanggal_lahir: 'tanggal_lahir',
    alamat: 'alamat',
    kecamatan: 'kecamatan',
    kabupaten: 'kabupaten',
    provinsi: 'provinsi',
    gender: 'gender',
    status_kawin: 'status_kawin',
    jumlah_anak: 'jumlah_anak',
    tanggal_masuk: 'tanggal_masuk',
    jabatan: 'jabatan',
    departemen: 'departemen',
    jenis_pegawai: 'jenis_pegawai',
    foto: 'foto',
    jarak_km: 'jarak_km',
    status_aktif: 'status_aktif',
    dibuat_pada: 'dibuat_pada',
    diperbarui_pada: 'diperbarui_pada',
    dihapus_pada: 'dihapus_pada'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


  export const Pendidikan_pegawaiScalarFieldEnum: {
    id_pendidikan: 'id_pendidikan',
    id_pegawai: 'id_pegawai',
    jenjang: 'jenjang',
    institusi: 'institusi',
    jurusan: 'jurusan',
    tahun_lulus: 'tahun_lulus',
    dibuat_pada: 'dibuat_pada',
    diperbarui_pada: 'diperbarui_pada'
  };

  export type Pendidikan_pegawaiScalarFieldEnum = (typeof Pendidikan_pegawaiScalarFieldEnum)[keyof typeof Pendidikan_pegawaiScalarFieldEnum]


  export const Pengaturan_tunjanganScalarFieldEnum: {
    id_pengaturan: 'id_pengaturan',
    tarif_per_km: 'tarif_per_km',
    keterangan: 'keterangan',
    status_aktif: 'status_aktif',
    dibuat_pada: 'dibuat_pada',
    diperbarui_pada: 'diperbarui_pada'
  };

  export type Pengaturan_tunjanganScalarFieldEnum = (typeof Pengaturan_tunjanganScalarFieldEnum)[keyof typeof Pengaturan_tunjanganScalarFieldEnum]


  export const Tunjangan_transportScalarFieldEnum: {
    id_tunjangan: 'id_tunjangan',
    id_pegawai: 'id_pegawai',
    bulan: 'bulan',
    tahun: 'tahun',
    jarak_km: 'jarak_km',
    hari_masuk: 'hari_masuk',
    tarif_per_km: 'tarif_per_km',
    total_tunjangan: 'total_tunjangan',
    dibuat_pada: 'dibuat_pada',
    diperbarui_pada: 'diperbarui_pada'
  };

  export type Tunjangan_transportScalarFieldEnum = (typeof Tunjangan_transportScalarFieldEnum)[keyof typeof Tunjangan_transportScalarFieldEnum]


  export const Log_aktivitasScalarFieldEnum: {
    id_log: 'id_log',
    id_pengguna: 'id_pengguna',
    modul: 'modul',
    aksi: 'aksi',
    keterangan: 'keterangan',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    dibuat_pada: 'dibuat_pada'
  };

  export type Log_aktivitasScalarFieldEnum = (typeof Log_aktivitasScalarFieldEnum)[keyof typeof Log_aktivitasScalarFieldEnum]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'StatusKawin'
   */
  export type EnumStatusKawinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKawin'>
    


  /**
   * Reference to a field of type 'StatusKawin[]'
   */
  export type ListEnumStatusKawinFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKawin[]'>
    


  /**
   * Reference to a field of type 'JenisPegawai'
   */
  export type EnumJenisPegawaiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPegawai'>
    


  /**
   * Reference to a field of type 'JenisPegawai[]'
   */
  export type ListEnumJenisPegawaiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPegawai[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AksiLog'
   */
  export type EnumAksiLogFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AksiLog'>
    


  /**
   * Reference to a field of type 'AksiLog[]'
   */
  export type ListEnumAksiLogFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AksiLog[]'>
    
  /**
   * Deep Input Types
   */


  export type peranWhereInput = {
    AND?: peranWhereInput | peranWhereInput[]
    OR?: peranWhereInput[]
    NOT?: peranWhereInput | peranWhereInput[]
    id_peran?: IntFilter<"peran"> | number
    nama_peran?: StringFilter<"peran"> | string
    deskripsi?: StringNullableFilter<"peran"> | string | null
    dibuat_pada?: DateTimeFilter<"peran"> | Date | string
    diperbarui_pada?: DateTimeFilter<"peran"> | Date | string
    pengguna?: PenggunaListRelationFilter
    peran_hak_akses?: Peran_hak_aksesListRelationFilter
  }

  export type peranOrderByWithRelationInput = {
    id_peran?: SortOrder
    nama_peran?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    pengguna?: penggunaOrderByRelationAggregateInput
    peran_hak_akses?: peran_hak_aksesOrderByRelationAggregateInput
  }

  export type peranWhereUniqueInput = Prisma.AtLeast<{
    id_peran?: number
    nama_peran?: string
    AND?: peranWhereInput | peranWhereInput[]
    OR?: peranWhereInput[]
    NOT?: peranWhereInput | peranWhereInput[]
    deskripsi?: StringNullableFilter<"peran"> | string | null
    dibuat_pada?: DateTimeFilter<"peran"> | Date | string
    diperbarui_pada?: DateTimeFilter<"peran"> | Date | string
    pengguna?: PenggunaListRelationFilter
    peran_hak_akses?: Peran_hak_aksesListRelationFilter
  }, "id_peran" | "nama_peran">

  export type peranOrderByWithAggregationInput = {
    id_peran?: SortOrder
    nama_peran?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    _count?: peranCountOrderByAggregateInput
    _avg?: peranAvgOrderByAggregateInput
    _max?: peranMaxOrderByAggregateInput
    _min?: peranMinOrderByAggregateInput
    _sum?: peranSumOrderByAggregateInput
  }

  export type peranScalarWhereWithAggregatesInput = {
    AND?: peranScalarWhereWithAggregatesInput | peranScalarWhereWithAggregatesInput[]
    OR?: peranScalarWhereWithAggregatesInput[]
    NOT?: peranScalarWhereWithAggregatesInput | peranScalarWhereWithAggregatesInput[]
    id_peran?: IntWithAggregatesFilter<"peran"> | number
    nama_peran?: StringWithAggregatesFilter<"peran"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"peran"> | string | null
    dibuat_pada?: DateTimeWithAggregatesFilter<"peran"> | Date | string
    diperbarui_pada?: DateTimeWithAggregatesFilter<"peran"> | Date | string
  }

  export type hak_aksesWhereInput = {
    AND?: hak_aksesWhereInput | hak_aksesWhereInput[]
    OR?: hak_aksesWhereInput[]
    NOT?: hak_aksesWhereInput | hak_aksesWhereInput[]
    id_hak_akses?: IntFilter<"hak_akses"> | number
    nama_akses?: StringFilter<"hak_akses"> | string
    modul?: StringFilter<"hak_akses"> | string
    deskripsi?: StringNullableFilter<"hak_akses"> | string | null
    dibuat_pada?: DateTimeFilter<"hak_akses"> | Date | string
    peran_hak_akses?: Peran_hak_aksesListRelationFilter
  }

  export type hak_aksesOrderByWithRelationInput = {
    id_hak_akses?: SortOrder
    nama_akses?: SortOrder
    modul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    peran_hak_akses?: peran_hak_aksesOrderByRelationAggregateInput
  }

  export type hak_aksesWhereUniqueInput = Prisma.AtLeast<{
    id_hak_akses?: number
    nama_akses?: string
    AND?: hak_aksesWhereInput | hak_aksesWhereInput[]
    OR?: hak_aksesWhereInput[]
    NOT?: hak_aksesWhereInput | hak_aksesWhereInput[]
    modul?: StringFilter<"hak_akses"> | string
    deskripsi?: StringNullableFilter<"hak_akses"> | string | null
    dibuat_pada?: DateTimeFilter<"hak_akses"> | Date | string
    peran_hak_akses?: Peran_hak_aksesListRelationFilter
  }, "id_hak_akses" | "nama_akses">

  export type hak_aksesOrderByWithAggregationInput = {
    id_hak_akses?: SortOrder
    nama_akses?: SortOrder
    modul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    _count?: hak_aksesCountOrderByAggregateInput
    _avg?: hak_aksesAvgOrderByAggregateInput
    _max?: hak_aksesMaxOrderByAggregateInput
    _min?: hak_aksesMinOrderByAggregateInput
    _sum?: hak_aksesSumOrderByAggregateInput
  }

  export type hak_aksesScalarWhereWithAggregatesInput = {
    AND?: hak_aksesScalarWhereWithAggregatesInput | hak_aksesScalarWhereWithAggregatesInput[]
    OR?: hak_aksesScalarWhereWithAggregatesInput[]
    NOT?: hak_aksesScalarWhereWithAggregatesInput | hak_aksesScalarWhereWithAggregatesInput[]
    id_hak_akses?: IntWithAggregatesFilter<"hak_akses"> | number
    nama_akses?: StringWithAggregatesFilter<"hak_akses"> | string
    modul?: StringWithAggregatesFilter<"hak_akses"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"hak_akses"> | string | null
    dibuat_pada?: DateTimeWithAggregatesFilter<"hak_akses"> | Date | string
  }

  export type peran_hak_aksesWhereInput = {
    AND?: peran_hak_aksesWhereInput | peran_hak_aksesWhereInput[]
    OR?: peran_hak_aksesWhereInput[]
    NOT?: peran_hak_aksesWhereInput | peran_hak_aksesWhereInput[]
    id_peran?: IntFilter<"peran_hak_akses"> | number
    id_hak_akses?: IntFilter<"peran_hak_akses"> | number
    peran?: XOR<PeranScalarRelationFilter, peranWhereInput>
    hak_akses?: XOR<Hak_aksesScalarRelationFilter, hak_aksesWhereInput>
  }

  export type peran_hak_aksesOrderByWithRelationInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
    peran?: peranOrderByWithRelationInput
    hak_akses?: hak_aksesOrderByWithRelationInput
  }

  export type peran_hak_aksesWhereUniqueInput = Prisma.AtLeast<{
    id_peran_id_hak_akses?: peran_hak_aksesId_peranId_hak_aksesCompoundUniqueInput
    AND?: peran_hak_aksesWhereInput | peran_hak_aksesWhereInput[]
    OR?: peran_hak_aksesWhereInput[]
    NOT?: peran_hak_aksesWhereInput | peran_hak_aksesWhereInput[]
    id_peran?: IntFilter<"peran_hak_akses"> | number
    id_hak_akses?: IntFilter<"peran_hak_akses"> | number
    peran?: XOR<PeranScalarRelationFilter, peranWhereInput>
    hak_akses?: XOR<Hak_aksesScalarRelationFilter, hak_aksesWhereInput>
  }, "id_peran_id_hak_akses">

  export type peran_hak_aksesOrderByWithAggregationInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
    _count?: peran_hak_aksesCountOrderByAggregateInput
    _avg?: peran_hak_aksesAvgOrderByAggregateInput
    _max?: peran_hak_aksesMaxOrderByAggregateInput
    _min?: peran_hak_aksesMinOrderByAggregateInput
    _sum?: peran_hak_aksesSumOrderByAggregateInput
  }

  export type peran_hak_aksesScalarWhereWithAggregatesInput = {
    AND?: peran_hak_aksesScalarWhereWithAggregatesInput | peran_hak_aksesScalarWhereWithAggregatesInput[]
    OR?: peran_hak_aksesScalarWhereWithAggregatesInput[]
    NOT?: peran_hak_aksesScalarWhereWithAggregatesInput | peran_hak_aksesScalarWhereWithAggregatesInput[]
    id_peran?: IntWithAggregatesFilter<"peran_hak_akses"> | number
    id_hak_akses?: IntWithAggregatesFilter<"peran_hak_akses"> | number
  }

  export type penggunaWhereInput = {
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    id_pengguna?: IntFilter<"pengguna"> | number
    id_pegawai?: IntNullableFilter<"pengguna"> | number | null
    nama_pengguna?: StringFilter<"pengguna"> | string
    username?: StringFilter<"pengguna"> | string
    email?: StringNullableFilter<"pengguna"> | string | null
    nomor_hp?: StringNullableFilter<"pengguna"> | string | null
    kata_sandi?: StringFilter<"pengguna"> | string
    id_peran?: IntFilter<"pengguna"> | number
    status_aktif?: BoolFilter<"pengguna"> | boolean
    foto?: StringNullableFilter<"pengguna"> | string | null
    terakhir_login?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    dibuat_pada?: DateTimeFilter<"pengguna"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pengguna"> | Date | string
    dihapus_pada?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    peran?: XOR<PeranScalarRelationFilter, peranWhereInput>
    pegawai?: XOR<PegawaiNullableScalarRelationFilter, pegawaiWhereInput> | null
    log_aktivitas?: Log_aktivitasListRelationFilter
  }

  export type penggunaOrderByWithRelationInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrderInput | SortOrder
    nama_pengguna?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    nomor_hp?: SortOrderInput | SortOrder
    kata_sandi?: SortOrder
    id_peran?: SortOrder
    status_aktif?: SortOrder
    foto?: SortOrderInput | SortOrder
    terakhir_login?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrderInput | SortOrder
    peran?: peranOrderByWithRelationInput
    pegawai?: pegawaiOrderByWithRelationInput
    log_aktivitas?: log_aktivitasOrderByRelationAggregateInput
  }

  export type penggunaWhereUniqueInput = Prisma.AtLeast<{
    id_pengguna?: number
    id_pegawai?: number
    username?: string
    email?: string
    nomor_hp?: string
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    nama_pengguna?: StringFilter<"pengguna"> | string
    kata_sandi?: StringFilter<"pengguna"> | string
    id_peran?: IntFilter<"pengguna"> | number
    status_aktif?: BoolFilter<"pengguna"> | boolean
    foto?: StringNullableFilter<"pengguna"> | string | null
    terakhir_login?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    dibuat_pada?: DateTimeFilter<"pengguna"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pengguna"> | Date | string
    dihapus_pada?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    peran?: XOR<PeranScalarRelationFilter, peranWhereInput>
    pegawai?: XOR<PegawaiNullableScalarRelationFilter, pegawaiWhereInput> | null
    log_aktivitas?: Log_aktivitasListRelationFilter
  }, "id_pengguna" | "id_pegawai" | "username" | "email" | "nomor_hp">

  export type penggunaOrderByWithAggregationInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrderInput | SortOrder
    nama_pengguna?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    nomor_hp?: SortOrderInput | SortOrder
    kata_sandi?: SortOrder
    id_peran?: SortOrder
    status_aktif?: SortOrder
    foto?: SortOrderInput | SortOrder
    terakhir_login?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrderInput | SortOrder
    _count?: penggunaCountOrderByAggregateInput
    _avg?: penggunaAvgOrderByAggregateInput
    _max?: penggunaMaxOrderByAggregateInput
    _min?: penggunaMinOrderByAggregateInput
    _sum?: penggunaSumOrderByAggregateInput
  }

  export type penggunaScalarWhereWithAggregatesInput = {
    AND?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    OR?: penggunaScalarWhereWithAggregatesInput[]
    NOT?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    id_pengguna?: IntWithAggregatesFilter<"pengguna"> | number
    id_pegawai?: IntNullableWithAggregatesFilter<"pengguna"> | number | null
    nama_pengguna?: StringWithAggregatesFilter<"pengguna"> | string
    username?: StringWithAggregatesFilter<"pengguna"> | string
    email?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    nomor_hp?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    kata_sandi?: StringWithAggregatesFilter<"pengguna"> | string
    id_peran?: IntWithAggregatesFilter<"pengguna"> | number
    status_aktif?: BoolWithAggregatesFilter<"pengguna"> | boolean
    foto?: StringNullableWithAggregatesFilter<"pengguna"> | string | null
    terakhir_login?: DateTimeNullableWithAggregatesFilter<"pengguna"> | Date | string | null
    dibuat_pada?: DateTimeWithAggregatesFilter<"pengguna"> | Date | string
    diperbarui_pada?: DateTimeWithAggregatesFilter<"pengguna"> | Date | string
    dihapus_pada?: DateTimeNullableWithAggregatesFilter<"pengguna"> | Date | string | null
  }

  export type pegawaiWhereInput = {
    AND?: pegawaiWhereInput | pegawaiWhereInput[]
    OR?: pegawaiWhereInput[]
    NOT?: pegawaiWhereInput | pegawaiWhereInput[]
    id_pegawai?: IntFilter<"pegawai"> | number
    nip?: StringFilter<"pegawai"> | string
    nama_pegawai?: StringFilter<"pegawai"> | string
    email?: StringNullableFilter<"pegawai"> | string | null
    nomor_hp?: StringNullableFilter<"pegawai"> | string | null
    tempat_lahir?: StringNullableFilter<"pegawai"> | string | null
    tanggal_lahir?: DateTimeNullableFilter<"pegawai"> | Date | string | null
    alamat?: StringNullableFilter<"pegawai"> | string | null
    kecamatan?: StringNullableFilter<"pegawai"> | string | null
    kabupaten?: StringNullableFilter<"pegawai"> | string | null
    provinsi?: StringNullableFilter<"pegawai"> | string | null
    gender?: EnumGenderFilter<"pegawai"> | $Enums.Gender
    status_kawin?: EnumStatusKawinFilter<"pegawai"> | $Enums.StatusKawin
    jumlah_anak?: IntFilter<"pegawai"> | number
    tanggal_masuk?: DateTimeFilter<"pegawai"> | Date | string
    jabatan?: StringFilter<"pegawai"> | string
    departemen?: StringFilter<"pegawai"> | string
    jenis_pegawai?: EnumJenisPegawaiFilter<"pegawai"> | $Enums.JenisPegawai
    foto?: StringNullableFilter<"pegawai"> | string | null
    jarak_km?: FloatNullableFilter<"pegawai"> | number | null
    status_aktif?: BoolFilter<"pegawai"> | boolean
    dibuat_pada?: DateTimeFilter<"pegawai"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pegawai"> | Date | string
    dihapus_pada?: DateTimeNullableFilter<"pegawai"> | Date | string | null
    pendidikan?: Pendidikan_pegawaiListRelationFilter
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    tunjangan_transport?: Tunjangan_transportListRelationFilter
  }

  export type pegawaiOrderByWithRelationInput = {
    id_pegawai?: SortOrder
    nip?: SortOrder
    nama_pegawai?: SortOrder
    email?: SortOrderInput | SortOrder
    nomor_hp?: SortOrderInput | SortOrder
    tempat_lahir?: SortOrderInput | SortOrder
    tanggal_lahir?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    kecamatan?: SortOrderInput | SortOrder
    kabupaten?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    gender?: SortOrder
    status_kawin?: SortOrder
    jumlah_anak?: SortOrder
    tanggal_masuk?: SortOrder
    jabatan?: SortOrder
    departemen?: SortOrder
    jenis_pegawai?: SortOrder
    foto?: SortOrderInput | SortOrder
    jarak_km?: SortOrderInput | SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrderInput | SortOrder
    pendidikan?: pendidikan_pegawaiOrderByRelationAggregateInput
    pengguna?: penggunaOrderByWithRelationInput
    tunjangan_transport?: tunjangan_transportOrderByRelationAggregateInput
  }

  export type pegawaiWhereUniqueInput = Prisma.AtLeast<{
    id_pegawai?: number
    nip?: string
    email?: string
    AND?: pegawaiWhereInput | pegawaiWhereInput[]
    OR?: pegawaiWhereInput[]
    NOT?: pegawaiWhereInput | pegawaiWhereInput[]
    nama_pegawai?: StringFilter<"pegawai"> | string
    nomor_hp?: StringNullableFilter<"pegawai"> | string | null
    tempat_lahir?: StringNullableFilter<"pegawai"> | string | null
    tanggal_lahir?: DateTimeNullableFilter<"pegawai"> | Date | string | null
    alamat?: StringNullableFilter<"pegawai"> | string | null
    kecamatan?: StringNullableFilter<"pegawai"> | string | null
    kabupaten?: StringNullableFilter<"pegawai"> | string | null
    provinsi?: StringNullableFilter<"pegawai"> | string | null
    gender?: EnumGenderFilter<"pegawai"> | $Enums.Gender
    status_kawin?: EnumStatusKawinFilter<"pegawai"> | $Enums.StatusKawin
    jumlah_anak?: IntFilter<"pegawai"> | number
    tanggal_masuk?: DateTimeFilter<"pegawai"> | Date | string
    jabatan?: StringFilter<"pegawai"> | string
    departemen?: StringFilter<"pegawai"> | string
    jenis_pegawai?: EnumJenisPegawaiFilter<"pegawai"> | $Enums.JenisPegawai
    foto?: StringNullableFilter<"pegawai"> | string | null
    jarak_km?: FloatNullableFilter<"pegawai"> | number | null
    status_aktif?: BoolFilter<"pegawai"> | boolean
    dibuat_pada?: DateTimeFilter<"pegawai"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pegawai"> | Date | string
    dihapus_pada?: DateTimeNullableFilter<"pegawai"> | Date | string | null
    pendidikan?: Pendidikan_pegawaiListRelationFilter
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    tunjangan_transport?: Tunjangan_transportListRelationFilter
  }, "id_pegawai" | "nip" | "email">

  export type pegawaiOrderByWithAggregationInput = {
    id_pegawai?: SortOrder
    nip?: SortOrder
    nama_pegawai?: SortOrder
    email?: SortOrderInput | SortOrder
    nomor_hp?: SortOrderInput | SortOrder
    tempat_lahir?: SortOrderInput | SortOrder
    tanggal_lahir?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    kecamatan?: SortOrderInput | SortOrder
    kabupaten?: SortOrderInput | SortOrder
    provinsi?: SortOrderInput | SortOrder
    gender?: SortOrder
    status_kawin?: SortOrder
    jumlah_anak?: SortOrder
    tanggal_masuk?: SortOrder
    jabatan?: SortOrder
    departemen?: SortOrder
    jenis_pegawai?: SortOrder
    foto?: SortOrderInput | SortOrder
    jarak_km?: SortOrderInput | SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrderInput | SortOrder
    _count?: pegawaiCountOrderByAggregateInput
    _avg?: pegawaiAvgOrderByAggregateInput
    _max?: pegawaiMaxOrderByAggregateInput
    _min?: pegawaiMinOrderByAggregateInput
    _sum?: pegawaiSumOrderByAggregateInput
  }

  export type pegawaiScalarWhereWithAggregatesInput = {
    AND?: pegawaiScalarWhereWithAggregatesInput | pegawaiScalarWhereWithAggregatesInput[]
    OR?: pegawaiScalarWhereWithAggregatesInput[]
    NOT?: pegawaiScalarWhereWithAggregatesInput | pegawaiScalarWhereWithAggregatesInput[]
    id_pegawai?: IntWithAggregatesFilter<"pegawai"> | number
    nip?: StringWithAggregatesFilter<"pegawai"> | string
    nama_pegawai?: StringWithAggregatesFilter<"pegawai"> | string
    email?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    nomor_hp?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    tempat_lahir?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    tanggal_lahir?: DateTimeNullableWithAggregatesFilter<"pegawai"> | Date | string | null
    alamat?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    kecamatan?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    kabupaten?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    provinsi?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"pegawai"> | $Enums.Gender
    status_kawin?: EnumStatusKawinWithAggregatesFilter<"pegawai"> | $Enums.StatusKawin
    jumlah_anak?: IntWithAggregatesFilter<"pegawai"> | number
    tanggal_masuk?: DateTimeWithAggregatesFilter<"pegawai"> | Date | string
    jabatan?: StringWithAggregatesFilter<"pegawai"> | string
    departemen?: StringWithAggregatesFilter<"pegawai"> | string
    jenis_pegawai?: EnumJenisPegawaiWithAggregatesFilter<"pegawai"> | $Enums.JenisPegawai
    foto?: StringNullableWithAggregatesFilter<"pegawai"> | string | null
    jarak_km?: FloatNullableWithAggregatesFilter<"pegawai"> | number | null
    status_aktif?: BoolWithAggregatesFilter<"pegawai"> | boolean
    dibuat_pada?: DateTimeWithAggregatesFilter<"pegawai"> | Date | string
    diperbarui_pada?: DateTimeWithAggregatesFilter<"pegawai"> | Date | string
    dihapus_pada?: DateTimeNullableWithAggregatesFilter<"pegawai"> | Date | string | null
  }

  export type pendidikan_pegawaiWhereInput = {
    AND?: pendidikan_pegawaiWhereInput | pendidikan_pegawaiWhereInput[]
    OR?: pendidikan_pegawaiWhereInput[]
    NOT?: pendidikan_pegawaiWhereInput | pendidikan_pegawaiWhereInput[]
    id_pendidikan?: IntFilter<"pendidikan_pegawai"> | number
    id_pegawai?: IntFilter<"pendidikan_pegawai"> | number
    jenjang?: StringFilter<"pendidikan_pegawai"> | string
    institusi?: StringFilter<"pendidikan_pegawai"> | string
    jurusan?: StringNullableFilter<"pendidikan_pegawai"> | string | null
    tahun_lulus?: IntNullableFilter<"pendidikan_pegawai"> | number | null
    dibuat_pada?: DateTimeFilter<"pendidikan_pegawai"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pendidikan_pegawai"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, pegawaiWhereInput>
  }

  export type pendidikan_pegawaiOrderByWithRelationInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    jenjang?: SortOrder
    institusi?: SortOrder
    jurusan?: SortOrderInput | SortOrder
    tahun_lulus?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    pegawai?: pegawaiOrderByWithRelationInput
  }

  export type pendidikan_pegawaiWhereUniqueInput = Prisma.AtLeast<{
    id_pendidikan?: number
    AND?: pendidikan_pegawaiWhereInput | pendidikan_pegawaiWhereInput[]
    OR?: pendidikan_pegawaiWhereInput[]
    NOT?: pendidikan_pegawaiWhereInput | pendidikan_pegawaiWhereInput[]
    id_pegawai?: IntFilter<"pendidikan_pegawai"> | number
    jenjang?: StringFilter<"pendidikan_pegawai"> | string
    institusi?: StringFilter<"pendidikan_pegawai"> | string
    jurusan?: StringNullableFilter<"pendidikan_pegawai"> | string | null
    tahun_lulus?: IntNullableFilter<"pendidikan_pegawai"> | number | null
    dibuat_pada?: DateTimeFilter<"pendidikan_pegawai"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pendidikan_pegawai"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, pegawaiWhereInput>
  }, "id_pendidikan">

  export type pendidikan_pegawaiOrderByWithAggregationInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    jenjang?: SortOrder
    institusi?: SortOrder
    jurusan?: SortOrderInput | SortOrder
    tahun_lulus?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    _count?: pendidikan_pegawaiCountOrderByAggregateInput
    _avg?: pendidikan_pegawaiAvgOrderByAggregateInput
    _max?: pendidikan_pegawaiMaxOrderByAggregateInput
    _min?: pendidikan_pegawaiMinOrderByAggregateInput
    _sum?: pendidikan_pegawaiSumOrderByAggregateInput
  }

  export type pendidikan_pegawaiScalarWhereWithAggregatesInput = {
    AND?: pendidikan_pegawaiScalarWhereWithAggregatesInput | pendidikan_pegawaiScalarWhereWithAggregatesInput[]
    OR?: pendidikan_pegawaiScalarWhereWithAggregatesInput[]
    NOT?: pendidikan_pegawaiScalarWhereWithAggregatesInput | pendidikan_pegawaiScalarWhereWithAggregatesInput[]
    id_pendidikan?: IntWithAggregatesFilter<"pendidikan_pegawai"> | number
    id_pegawai?: IntWithAggregatesFilter<"pendidikan_pegawai"> | number
    jenjang?: StringWithAggregatesFilter<"pendidikan_pegawai"> | string
    institusi?: StringWithAggregatesFilter<"pendidikan_pegawai"> | string
    jurusan?: StringNullableWithAggregatesFilter<"pendidikan_pegawai"> | string | null
    tahun_lulus?: IntNullableWithAggregatesFilter<"pendidikan_pegawai"> | number | null
    dibuat_pada?: DateTimeWithAggregatesFilter<"pendidikan_pegawai"> | Date | string
    diperbarui_pada?: DateTimeWithAggregatesFilter<"pendidikan_pegawai"> | Date | string
  }

  export type pengaturan_tunjanganWhereInput = {
    AND?: pengaturan_tunjanganWhereInput | pengaturan_tunjanganWhereInput[]
    OR?: pengaturan_tunjanganWhereInput[]
    NOT?: pengaturan_tunjanganWhereInput | pengaturan_tunjanganWhereInput[]
    id_pengaturan?: IntFilter<"pengaturan_tunjangan"> | number
    tarif_per_km?: FloatFilter<"pengaturan_tunjangan"> | number
    keterangan?: StringNullableFilter<"pengaturan_tunjangan"> | string | null
    status_aktif?: BoolFilter<"pengaturan_tunjangan"> | boolean
    dibuat_pada?: DateTimeFilter<"pengaturan_tunjangan"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pengaturan_tunjangan"> | Date | string
  }

  export type pengaturan_tunjanganOrderByWithRelationInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pengaturan_tunjanganWhereUniqueInput = Prisma.AtLeast<{
    id_pengaturan?: number
    AND?: pengaturan_tunjanganWhereInput | pengaturan_tunjanganWhereInput[]
    OR?: pengaturan_tunjanganWhereInput[]
    NOT?: pengaturan_tunjanganWhereInput | pengaturan_tunjanganWhereInput[]
    tarif_per_km?: FloatFilter<"pengaturan_tunjangan"> | number
    keterangan?: StringNullableFilter<"pengaturan_tunjangan"> | string | null
    status_aktif?: BoolFilter<"pengaturan_tunjangan"> | boolean
    dibuat_pada?: DateTimeFilter<"pengaturan_tunjangan"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pengaturan_tunjangan"> | Date | string
  }, "id_pengaturan">

  export type pengaturan_tunjanganOrderByWithAggregationInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    _count?: pengaturan_tunjanganCountOrderByAggregateInput
    _avg?: pengaturan_tunjanganAvgOrderByAggregateInput
    _max?: pengaturan_tunjanganMaxOrderByAggregateInput
    _min?: pengaturan_tunjanganMinOrderByAggregateInput
    _sum?: pengaturan_tunjanganSumOrderByAggregateInput
  }

  export type pengaturan_tunjanganScalarWhereWithAggregatesInput = {
    AND?: pengaturan_tunjanganScalarWhereWithAggregatesInput | pengaturan_tunjanganScalarWhereWithAggregatesInput[]
    OR?: pengaturan_tunjanganScalarWhereWithAggregatesInput[]
    NOT?: pengaturan_tunjanganScalarWhereWithAggregatesInput | pengaturan_tunjanganScalarWhereWithAggregatesInput[]
    id_pengaturan?: IntWithAggregatesFilter<"pengaturan_tunjangan"> | number
    tarif_per_km?: FloatWithAggregatesFilter<"pengaturan_tunjangan"> | number
    keterangan?: StringNullableWithAggregatesFilter<"pengaturan_tunjangan"> | string | null
    status_aktif?: BoolWithAggregatesFilter<"pengaturan_tunjangan"> | boolean
    dibuat_pada?: DateTimeWithAggregatesFilter<"pengaturan_tunjangan"> | Date | string
    diperbarui_pada?: DateTimeWithAggregatesFilter<"pengaturan_tunjangan"> | Date | string
  }

  export type tunjangan_transportWhereInput = {
    AND?: tunjangan_transportWhereInput | tunjangan_transportWhereInput[]
    OR?: tunjangan_transportWhereInput[]
    NOT?: tunjangan_transportWhereInput | tunjangan_transportWhereInput[]
    id_tunjangan?: IntFilter<"tunjangan_transport"> | number
    id_pegawai?: IntFilter<"tunjangan_transport"> | number
    bulan?: IntFilter<"tunjangan_transport"> | number
    tahun?: IntFilter<"tunjangan_transport"> | number
    jarak_km?: FloatFilter<"tunjangan_transport"> | number
    hari_masuk?: IntFilter<"tunjangan_transport"> | number
    tarif_per_km?: FloatFilter<"tunjangan_transport"> | number
    total_tunjangan?: FloatFilter<"tunjangan_transport"> | number
    dibuat_pada?: DateTimeFilter<"tunjangan_transport"> | Date | string
    diperbarui_pada?: DateTimeFilter<"tunjangan_transport"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, pegawaiWhereInput>
  }

  export type tunjangan_transportOrderByWithRelationInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    pegawai?: pegawaiOrderByWithRelationInput
  }

  export type tunjangan_transportWhereUniqueInput = Prisma.AtLeast<{
    id_tunjangan?: number
    id_pegawai_bulan_tahun?: tunjangan_transportId_pegawaiBulanTahunCompoundUniqueInput
    AND?: tunjangan_transportWhereInput | tunjangan_transportWhereInput[]
    OR?: tunjangan_transportWhereInput[]
    NOT?: tunjangan_transportWhereInput | tunjangan_transportWhereInput[]
    id_pegawai?: IntFilter<"tunjangan_transport"> | number
    bulan?: IntFilter<"tunjangan_transport"> | number
    tahun?: IntFilter<"tunjangan_transport"> | number
    jarak_km?: FloatFilter<"tunjangan_transport"> | number
    hari_masuk?: IntFilter<"tunjangan_transport"> | number
    tarif_per_km?: FloatFilter<"tunjangan_transport"> | number
    total_tunjangan?: FloatFilter<"tunjangan_transport"> | number
    dibuat_pada?: DateTimeFilter<"tunjangan_transport"> | Date | string
    diperbarui_pada?: DateTimeFilter<"tunjangan_transport"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, pegawaiWhereInput>
  }, "id_tunjangan" | "id_pegawai_bulan_tahun">

  export type tunjangan_transportOrderByWithAggregationInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    _count?: tunjangan_transportCountOrderByAggregateInput
    _avg?: tunjangan_transportAvgOrderByAggregateInput
    _max?: tunjangan_transportMaxOrderByAggregateInput
    _min?: tunjangan_transportMinOrderByAggregateInput
    _sum?: tunjangan_transportSumOrderByAggregateInput
  }

  export type tunjangan_transportScalarWhereWithAggregatesInput = {
    AND?: tunjangan_transportScalarWhereWithAggregatesInput | tunjangan_transportScalarWhereWithAggregatesInput[]
    OR?: tunjangan_transportScalarWhereWithAggregatesInput[]
    NOT?: tunjangan_transportScalarWhereWithAggregatesInput | tunjangan_transportScalarWhereWithAggregatesInput[]
    id_tunjangan?: IntWithAggregatesFilter<"tunjangan_transport"> | number
    id_pegawai?: IntWithAggregatesFilter<"tunjangan_transport"> | number
    bulan?: IntWithAggregatesFilter<"tunjangan_transport"> | number
    tahun?: IntWithAggregatesFilter<"tunjangan_transport"> | number
    jarak_km?: FloatWithAggregatesFilter<"tunjangan_transport"> | number
    hari_masuk?: IntWithAggregatesFilter<"tunjangan_transport"> | number
    tarif_per_km?: FloatWithAggregatesFilter<"tunjangan_transport"> | number
    total_tunjangan?: FloatWithAggregatesFilter<"tunjangan_transport"> | number
    dibuat_pada?: DateTimeWithAggregatesFilter<"tunjangan_transport"> | Date | string
    diperbarui_pada?: DateTimeWithAggregatesFilter<"tunjangan_transport"> | Date | string
  }

  export type log_aktivitasWhereInput = {
    AND?: log_aktivitasWhereInput | log_aktivitasWhereInput[]
    OR?: log_aktivitasWhereInput[]
    NOT?: log_aktivitasWhereInput | log_aktivitasWhereInput[]
    id_log?: IntFilter<"log_aktivitas"> | number
    id_pengguna?: IntNullableFilter<"log_aktivitas"> | number | null
    modul?: StringFilter<"log_aktivitas"> | string
    aksi?: EnumAksiLogFilter<"log_aktivitas"> | $Enums.AksiLog
    keterangan?: StringNullableFilter<"log_aktivitas"> | string | null
    ip_address?: StringNullableFilter<"log_aktivitas"> | string | null
    user_agent?: StringNullableFilter<"log_aktivitas"> | string | null
    dibuat_pada?: DateTimeFilter<"log_aktivitas"> | Date | string
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }

  export type log_aktivitasOrderByWithRelationInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrderInput | SortOrder
    modul?: SortOrder
    aksi?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    pengguna?: penggunaOrderByWithRelationInput
  }

  export type log_aktivitasWhereUniqueInput = Prisma.AtLeast<{
    id_log?: number
    AND?: log_aktivitasWhereInput | log_aktivitasWhereInput[]
    OR?: log_aktivitasWhereInput[]
    NOT?: log_aktivitasWhereInput | log_aktivitasWhereInput[]
    id_pengguna?: IntNullableFilter<"log_aktivitas"> | number | null
    modul?: StringFilter<"log_aktivitas"> | string
    aksi?: EnumAksiLogFilter<"log_aktivitas"> | $Enums.AksiLog
    keterangan?: StringNullableFilter<"log_aktivitas"> | string | null
    ip_address?: StringNullableFilter<"log_aktivitas"> | string | null
    user_agent?: StringNullableFilter<"log_aktivitas"> | string | null
    dibuat_pada?: DateTimeFilter<"log_aktivitas"> | Date | string
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
  }, "id_log">

  export type log_aktivitasOrderByWithAggregationInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrderInput | SortOrder
    modul?: SortOrder
    aksi?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    ip_address?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    dibuat_pada?: SortOrder
    _count?: log_aktivitasCountOrderByAggregateInput
    _avg?: log_aktivitasAvgOrderByAggregateInput
    _max?: log_aktivitasMaxOrderByAggregateInput
    _min?: log_aktivitasMinOrderByAggregateInput
    _sum?: log_aktivitasSumOrderByAggregateInput
  }

  export type log_aktivitasScalarWhereWithAggregatesInput = {
    AND?: log_aktivitasScalarWhereWithAggregatesInput | log_aktivitasScalarWhereWithAggregatesInput[]
    OR?: log_aktivitasScalarWhereWithAggregatesInput[]
    NOT?: log_aktivitasScalarWhereWithAggregatesInput | log_aktivitasScalarWhereWithAggregatesInput[]
    id_log?: IntWithAggregatesFilter<"log_aktivitas"> | number
    id_pengguna?: IntNullableWithAggregatesFilter<"log_aktivitas"> | number | null
    modul?: StringWithAggregatesFilter<"log_aktivitas"> | string
    aksi?: EnumAksiLogWithAggregatesFilter<"log_aktivitas"> | $Enums.AksiLog
    keterangan?: StringNullableWithAggregatesFilter<"log_aktivitas"> | string | null
    ip_address?: StringNullableWithAggregatesFilter<"log_aktivitas"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"log_aktivitas"> | string | null
    dibuat_pada?: DateTimeWithAggregatesFilter<"log_aktivitas"> | Date | string
  }

  export type peranCreateInput = {
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    pengguna?: penggunaCreateNestedManyWithoutPeranInput
    peran_hak_akses?: peran_hak_aksesCreateNestedManyWithoutPeranInput
  }

  export type peranUncheckedCreateInput = {
    id_peran?: number
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    pengguna?: penggunaUncheckedCreateNestedManyWithoutPeranInput
    peran_hak_akses?: peran_hak_aksesUncheckedCreateNestedManyWithoutPeranInput
  }

  export type peranUpdateInput = {
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUpdateManyWithoutPeranNestedInput
    peran_hak_akses?: peran_hak_aksesUpdateManyWithoutPeranNestedInput
  }

  export type peranUncheckedUpdateInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUncheckedUpdateManyWithoutPeranNestedInput
    peran_hak_akses?: peran_hak_aksesUncheckedUpdateManyWithoutPeranNestedInput
  }

  export type peranCreateManyInput = {
    id_peran?: number
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type peranUpdateManyMutationInput = {
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peranUncheckedUpdateManyInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hak_aksesCreateInput = {
    nama_akses: string
    modul: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    peran_hak_akses?: peran_hak_aksesCreateNestedManyWithoutHak_aksesInput
  }

  export type hak_aksesUncheckedCreateInput = {
    id_hak_akses?: number
    nama_akses: string
    modul: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    peran_hak_akses?: peran_hak_aksesUncheckedCreateNestedManyWithoutHak_aksesInput
  }

  export type hak_aksesUpdateInput = {
    nama_akses?: StringFieldUpdateOperationsInput | string
    modul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    peran_hak_akses?: peran_hak_aksesUpdateManyWithoutHak_aksesNestedInput
  }

  export type hak_aksesUncheckedUpdateInput = {
    id_hak_akses?: IntFieldUpdateOperationsInput | number
    nama_akses?: StringFieldUpdateOperationsInput | string
    modul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    peran_hak_akses?: peran_hak_aksesUncheckedUpdateManyWithoutHak_aksesNestedInput
  }

  export type hak_aksesCreateManyInput = {
    id_hak_akses?: number
    nama_akses: string
    modul: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
  }

  export type hak_aksesUpdateManyMutationInput = {
    nama_akses?: StringFieldUpdateOperationsInput | string
    modul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hak_aksesUncheckedUpdateManyInput = {
    id_hak_akses?: IntFieldUpdateOperationsInput | number
    nama_akses?: StringFieldUpdateOperationsInput | string
    modul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peran_hak_aksesCreateInput = {
    peran: peranCreateNestedOneWithoutPeran_hak_aksesInput
    hak_akses: hak_aksesCreateNestedOneWithoutPeran_hak_aksesInput
  }

  export type peran_hak_aksesUncheckedCreateInput = {
    id_peran: number
    id_hak_akses: number
  }

  export type peran_hak_aksesUpdateInput = {
    peran?: peranUpdateOneRequiredWithoutPeran_hak_aksesNestedInput
    hak_akses?: hak_aksesUpdateOneRequiredWithoutPeran_hak_aksesNestedInput
  }

  export type peran_hak_aksesUncheckedUpdateInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
    id_hak_akses?: IntFieldUpdateOperationsInput | number
  }

  export type peran_hak_aksesCreateManyInput = {
    id_peran: number
    id_hak_akses: number
  }

  export type peran_hak_aksesUpdateManyMutationInput = {

  }

  export type peran_hak_aksesUncheckedUpdateManyInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
    id_hak_akses?: IntFieldUpdateOperationsInput | number
  }

  export type penggunaCreateInput = {
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    peran: peranCreateNestedOneWithoutPenggunaInput
    pegawai?: pegawaiCreateNestedOneWithoutPenggunaInput
    log_aktivitas?: log_aktivitasCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateInput = {
    id_pengguna?: number
    id_pegawai?: number | null
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    id_peran: number
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    log_aktivitas?: log_aktivitasUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUpdateInput = {
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peran?: peranUpdateOneRequiredWithoutPenggunaNestedInput
    pegawai?: pegawaiUpdateOneWithoutPenggunaNestedInput
    log_aktivitas?: log_aktivitasUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    id_peran?: IntFieldUpdateOperationsInput | number
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log_aktivitas?: log_aktivitasUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaCreateManyInput = {
    id_pengguna?: number
    id_pegawai?: number | null
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    id_peran: number
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
  }

  export type penggunaUpdateManyMutationInput = {
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type penggunaUncheckedUpdateManyInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    id_peran?: IntFieldUpdateOperationsInput | number
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pegawaiCreateInput = {
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pendidikan?: pendidikan_pegawaiCreateNestedManyWithoutPegawaiInput
    pengguna?: penggunaCreateNestedOneWithoutPegawaiInput
    tunjangan_transport?: tunjangan_transportCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateInput = {
    id_pegawai?: number
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pendidikan?: pendidikan_pegawaiUncheckedCreateNestedManyWithoutPegawaiInput
    pengguna?: penggunaUncheckedCreateNestedOneWithoutPegawaiInput
    tunjangan_transport?: tunjangan_transportUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: pendidikan_pegawaiUpdateManyWithoutPegawaiNestedInput
    pengguna?: penggunaUpdateOneWithoutPegawaiNestedInput
    tunjangan_transport?: tunjangan_transportUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateInput = {
    id_pegawai?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: pendidikan_pegawaiUncheckedUpdateManyWithoutPegawaiNestedInput
    pengguna?: penggunaUncheckedUpdateOneWithoutPegawaiNestedInput
    tunjangan_transport?: tunjangan_transportUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiCreateManyInput = {
    id_pegawai?: number
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
  }

  export type pegawaiUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pegawaiUncheckedUpdateManyInput = {
    id_pegawai?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pendidikan_pegawaiCreateInput = {
    jenjang: string
    institusi: string
    jurusan?: string | null
    tahun_lulus?: number | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    pegawai: pegawaiCreateNestedOneWithoutPendidikanInput
  }

  export type pendidikan_pegawaiUncheckedCreateInput = {
    id_pendidikan?: number
    id_pegawai: number
    jenjang: string
    institusi: string
    jurusan?: string | null
    tahun_lulus?: number | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pendidikan_pegawaiUpdateInput = {
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: pegawaiUpdateOneRequiredWithoutPendidikanNestedInput
  }

  export type pendidikan_pegawaiUncheckedUpdateInput = {
    id_pendidikan?: IntFieldUpdateOperationsInput | number
    id_pegawai?: IntFieldUpdateOperationsInput | number
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pendidikan_pegawaiCreateManyInput = {
    id_pendidikan?: number
    id_pegawai: number
    jenjang: string
    institusi: string
    jurusan?: string | null
    tahun_lulus?: number | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pendidikan_pegawaiUpdateManyMutationInput = {
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pendidikan_pegawaiUncheckedUpdateManyInput = {
    id_pendidikan?: IntFieldUpdateOperationsInput | number
    id_pegawai?: IntFieldUpdateOperationsInput | number
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pengaturan_tunjanganCreateInput = {
    tarif_per_km: number
    keterangan?: string | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pengaturan_tunjanganUncheckedCreateInput = {
    id_pengaturan?: number
    tarif_per_km: number
    keterangan?: string | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pengaturan_tunjanganUpdateInput = {
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pengaturan_tunjanganUncheckedUpdateInput = {
    id_pengaturan?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pengaturan_tunjanganCreateManyInput = {
    id_pengaturan?: number
    tarif_per_km: number
    keterangan?: string | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pengaturan_tunjanganUpdateManyMutationInput = {
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pengaturan_tunjanganUncheckedUpdateManyInput = {
    id_pengaturan?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tunjangan_transportCreateInput = {
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    pegawai: pegawaiCreateNestedOneWithoutTunjangan_transportInput
  }

  export type tunjangan_transportUncheckedCreateInput = {
    id_tunjangan?: number
    id_pegawai: number
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type tunjangan_transportUpdateInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: pegawaiUpdateOneRequiredWithoutTunjangan_transportNestedInput
  }

  export type tunjangan_transportUncheckedUpdateInput = {
    id_tunjangan?: IntFieldUpdateOperationsInput | number
    id_pegawai?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tunjangan_transportCreateManyInput = {
    id_tunjangan?: number
    id_pegawai: number
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type tunjangan_transportUpdateManyMutationInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tunjangan_transportUncheckedUpdateManyInput = {
    id_tunjangan?: IntFieldUpdateOperationsInput | number
    id_pegawai?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_aktivitasCreateInput = {
    modul: string
    aksi: $Enums.AksiLog
    keterangan?: string | null
    ip_address?: string | null
    user_agent?: string | null
    dibuat_pada?: Date | string
    pengguna?: penggunaCreateNestedOneWithoutLog_aktivitasInput
  }

  export type log_aktivitasUncheckedCreateInput = {
    id_log?: number
    id_pengguna?: number | null
    modul: string
    aksi: $Enums.AksiLog
    keterangan?: string | null
    ip_address?: string | null
    user_agent?: string | null
    dibuat_pada?: Date | string
  }

  export type log_aktivitasUpdateInput = {
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUpdateOneWithoutLog_aktivitasNestedInput
  }

  export type log_aktivitasUncheckedUpdateInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_pengguna?: NullableIntFieldUpdateOperationsInput | number | null
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_aktivitasCreateManyInput = {
    id_log?: number
    id_pengguna?: number | null
    modul: string
    aksi: $Enums.AksiLog
    keterangan?: string | null
    ip_address?: string | null
    user_agent?: string | null
    dibuat_pada?: Date | string
  }

  export type log_aktivitasUpdateManyMutationInput = {
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_aktivitasUncheckedUpdateManyInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_pengguna?: NullableIntFieldUpdateOperationsInput | number | null
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PenggunaListRelationFilter = {
    every?: penggunaWhereInput
    some?: penggunaWhereInput
    none?: penggunaWhereInput
  }

  export type Peran_hak_aksesListRelationFilter = {
    every?: peran_hak_aksesWhereInput
    some?: peran_hak_aksesWhereInput
    none?: peran_hak_aksesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type penggunaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type peran_hak_aksesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type peranCountOrderByAggregateInput = {
    id_peran?: SortOrder
    nama_peran?: SortOrder
    deskripsi?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type peranAvgOrderByAggregateInput = {
    id_peran?: SortOrder
  }

  export type peranMaxOrderByAggregateInput = {
    id_peran?: SortOrder
    nama_peran?: SortOrder
    deskripsi?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type peranMinOrderByAggregateInput = {
    id_peran?: SortOrder
    nama_peran?: SortOrder
    deskripsi?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type peranSumOrderByAggregateInput = {
    id_peran?: SortOrder
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

  export type hak_aksesCountOrderByAggregateInput = {
    id_hak_akses?: SortOrder
    nama_akses?: SortOrder
    modul?: SortOrder
    deskripsi?: SortOrder
    dibuat_pada?: SortOrder
  }

  export type hak_aksesAvgOrderByAggregateInput = {
    id_hak_akses?: SortOrder
  }

  export type hak_aksesMaxOrderByAggregateInput = {
    id_hak_akses?: SortOrder
    nama_akses?: SortOrder
    modul?: SortOrder
    deskripsi?: SortOrder
    dibuat_pada?: SortOrder
  }

  export type hak_aksesMinOrderByAggregateInput = {
    id_hak_akses?: SortOrder
    nama_akses?: SortOrder
    modul?: SortOrder
    deskripsi?: SortOrder
    dibuat_pada?: SortOrder
  }

  export type hak_aksesSumOrderByAggregateInput = {
    id_hak_akses?: SortOrder
  }

  export type PeranScalarRelationFilter = {
    is?: peranWhereInput
    isNot?: peranWhereInput
  }

  export type Hak_aksesScalarRelationFilter = {
    is?: hak_aksesWhereInput
    isNot?: hak_aksesWhereInput
  }

  export type peran_hak_aksesId_peranId_hak_aksesCompoundUniqueInput = {
    id_peran: number
    id_hak_akses: number
  }

  export type peran_hak_aksesCountOrderByAggregateInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
  }

  export type peran_hak_aksesAvgOrderByAggregateInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
  }

  export type peran_hak_aksesMaxOrderByAggregateInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
  }

  export type peran_hak_aksesMinOrderByAggregateInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
  }

  export type peran_hak_aksesSumOrderByAggregateInput = {
    id_peran?: SortOrder
    id_hak_akses?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PegawaiNullableScalarRelationFilter = {
    is?: pegawaiWhereInput | null
    isNot?: pegawaiWhereInput | null
  }

  export type Log_aktivitasListRelationFilter = {
    every?: log_aktivitasWhereInput
    some?: log_aktivitasWhereInput
    none?: log_aktivitasWhereInput
  }

  export type log_aktivitasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type penggunaCountOrderByAggregateInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrder
    nama_pengguna?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nomor_hp?: SortOrder
    kata_sandi?: SortOrder
    id_peran?: SortOrder
    status_aktif?: SortOrder
    foto?: SortOrder
    terakhir_login?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrder
  }

  export type penggunaAvgOrderByAggregateInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrder
    id_peran?: SortOrder
  }

  export type penggunaMaxOrderByAggregateInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrder
    nama_pengguna?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nomor_hp?: SortOrder
    kata_sandi?: SortOrder
    id_peran?: SortOrder
    status_aktif?: SortOrder
    foto?: SortOrder
    terakhir_login?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrder
  }

  export type penggunaMinOrderByAggregateInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrder
    nama_pengguna?: SortOrder
    username?: SortOrder
    email?: SortOrder
    nomor_hp?: SortOrder
    kata_sandi?: SortOrder
    id_peran?: SortOrder
    status_aktif?: SortOrder
    foto?: SortOrder
    terakhir_login?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrder
  }

  export type penggunaSumOrderByAggregateInput = {
    id_pengguna?: SortOrder
    id_pegawai?: SortOrder
    id_peran?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumStatusKawinFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKawin | EnumStatusKawinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKawinFilter<$PrismaModel> | $Enums.StatusKawin
  }

  export type EnumJenisPegawaiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPegawai | EnumJenisPegawaiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPegawaiFilter<$PrismaModel> | $Enums.JenisPegawai
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Pendidikan_pegawaiListRelationFilter = {
    every?: pendidikan_pegawaiWhereInput
    some?: pendidikan_pegawaiWhereInput
    none?: pendidikan_pegawaiWhereInput
  }

  export type PenggunaNullableScalarRelationFilter = {
    is?: penggunaWhereInput | null
    isNot?: penggunaWhereInput | null
  }

  export type Tunjangan_transportListRelationFilter = {
    every?: tunjangan_transportWhereInput
    some?: tunjangan_transportWhereInput
    none?: tunjangan_transportWhereInput
  }

  export type pendidikan_pegawaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tunjangan_transportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pegawaiCountOrderByAggregateInput = {
    id_pegawai?: SortOrder
    nip?: SortOrder
    nama_pegawai?: SortOrder
    email?: SortOrder
    nomor_hp?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kecamatan?: SortOrder
    kabupaten?: SortOrder
    provinsi?: SortOrder
    gender?: SortOrder
    status_kawin?: SortOrder
    jumlah_anak?: SortOrder
    tanggal_masuk?: SortOrder
    jabatan?: SortOrder
    departemen?: SortOrder
    jenis_pegawai?: SortOrder
    foto?: SortOrder
    jarak_km?: SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrder
  }

  export type pegawaiAvgOrderByAggregateInput = {
    id_pegawai?: SortOrder
    jumlah_anak?: SortOrder
    jarak_km?: SortOrder
  }

  export type pegawaiMaxOrderByAggregateInput = {
    id_pegawai?: SortOrder
    nip?: SortOrder
    nama_pegawai?: SortOrder
    email?: SortOrder
    nomor_hp?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kecamatan?: SortOrder
    kabupaten?: SortOrder
    provinsi?: SortOrder
    gender?: SortOrder
    status_kawin?: SortOrder
    jumlah_anak?: SortOrder
    tanggal_masuk?: SortOrder
    jabatan?: SortOrder
    departemen?: SortOrder
    jenis_pegawai?: SortOrder
    foto?: SortOrder
    jarak_km?: SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrder
  }

  export type pegawaiMinOrderByAggregateInput = {
    id_pegawai?: SortOrder
    nip?: SortOrder
    nama_pegawai?: SortOrder
    email?: SortOrder
    nomor_hp?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    kecamatan?: SortOrder
    kabupaten?: SortOrder
    provinsi?: SortOrder
    gender?: SortOrder
    status_kawin?: SortOrder
    jumlah_anak?: SortOrder
    tanggal_masuk?: SortOrder
    jabatan?: SortOrder
    departemen?: SortOrder
    jenis_pegawai?: SortOrder
    foto?: SortOrder
    jarak_km?: SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
    dihapus_pada?: SortOrder
  }

  export type pegawaiSumOrderByAggregateInput = {
    id_pegawai?: SortOrder
    jumlah_anak?: SortOrder
    jarak_km?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumStatusKawinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKawin | EnumStatusKawinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKawinWithAggregatesFilter<$PrismaModel> | $Enums.StatusKawin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKawinFilter<$PrismaModel>
    _max?: NestedEnumStatusKawinFilter<$PrismaModel>
  }

  export type EnumJenisPegawaiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPegawai | EnumJenisPegawaiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPegawaiWithAggregatesFilter<$PrismaModel> | $Enums.JenisPegawai
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPegawaiFilter<$PrismaModel>
    _max?: NestedEnumJenisPegawaiFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PegawaiScalarRelationFilter = {
    is?: pegawaiWhereInput
    isNot?: pegawaiWhereInput
  }

  export type pendidikan_pegawaiCountOrderByAggregateInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    jenjang?: SortOrder
    institusi?: SortOrder
    jurusan?: SortOrder
    tahun_lulus?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pendidikan_pegawaiAvgOrderByAggregateInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    tahun_lulus?: SortOrder
  }

  export type pendidikan_pegawaiMaxOrderByAggregateInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    jenjang?: SortOrder
    institusi?: SortOrder
    jurusan?: SortOrder
    tahun_lulus?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pendidikan_pegawaiMinOrderByAggregateInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    jenjang?: SortOrder
    institusi?: SortOrder
    jurusan?: SortOrder
    tahun_lulus?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pendidikan_pegawaiSumOrderByAggregateInput = {
    id_pendidikan?: SortOrder
    id_pegawai?: SortOrder
    tahun_lulus?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type pengaturan_tunjanganCountOrderByAggregateInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
    keterangan?: SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pengaturan_tunjanganAvgOrderByAggregateInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
  }

  export type pengaturan_tunjanganMaxOrderByAggregateInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
    keterangan?: SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pengaturan_tunjanganMinOrderByAggregateInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
    keterangan?: SortOrder
    status_aktif?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type pengaturan_tunjanganSumOrderByAggregateInput = {
    id_pengaturan?: SortOrder
    tarif_per_km?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type tunjangan_transportId_pegawaiBulanTahunCompoundUniqueInput = {
    id_pegawai: number
    bulan: number
    tahun: number
  }

  export type tunjangan_transportCountOrderByAggregateInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type tunjangan_transportAvgOrderByAggregateInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
  }

  export type tunjangan_transportMaxOrderByAggregateInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type tunjangan_transportMinOrderByAggregateInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
    dibuat_pada?: SortOrder
    diperbarui_pada?: SortOrder
  }

  export type tunjangan_transportSumOrderByAggregateInput = {
    id_tunjangan?: SortOrder
    id_pegawai?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    jarak_km?: SortOrder
    hari_masuk?: SortOrder
    tarif_per_km?: SortOrder
    total_tunjangan?: SortOrder
  }

  export type EnumAksiLogFilter<$PrismaModel = never> = {
    equals?: $Enums.AksiLog | EnumAksiLogFieldRefInput<$PrismaModel>
    in?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    not?: NestedEnumAksiLogFilter<$PrismaModel> | $Enums.AksiLog
  }

  export type log_aktivitasCountOrderByAggregateInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrder
    modul?: SortOrder
    aksi?: SortOrder
    keterangan?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    dibuat_pada?: SortOrder
  }

  export type log_aktivitasAvgOrderByAggregateInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrder
  }

  export type log_aktivitasMaxOrderByAggregateInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrder
    modul?: SortOrder
    aksi?: SortOrder
    keterangan?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    dibuat_pada?: SortOrder
  }

  export type log_aktivitasMinOrderByAggregateInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrder
    modul?: SortOrder
    aksi?: SortOrder
    keterangan?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    dibuat_pada?: SortOrder
  }

  export type log_aktivitasSumOrderByAggregateInput = {
    id_log?: SortOrder
    id_pengguna?: SortOrder
  }

  export type EnumAksiLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AksiLog | EnumAksiLogFieldRefInput<$PrismaModel>
    in?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    not?: NestedEnumAksiLogWithAggregatesFilter<$PrismaModel> | $Enums.AksiLog
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAksiLogFilter<$PrismaModel>
    _max?: NestedEnumAksiLogFilter<$PrismaModel>
  }

  export type penggunaCreateNestedManyWithoutPeranInput = {
    create?: XOR<penggunaCreateWithoutPeranInput, penggunaUncheckedCreateWithoutPeranInput> | penggunaCreateWithoutPeranInput[] | penggunaUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPeranInput | penggunaCreateOrConnectWithoutPeranInput[]
    createMany?: penggunaCreateManyPeranInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type peran_hak_aksesCreateNestedManyWithoutPeranInput = {
    create?: XOR<peran_hak_aksesCreateWithoutPeranInput, peran_hak_aksesUncheckedCreateWithoutPeranInput> | peran_hak_aksesCreateWithoutPeranInput[] | peran_hak_aksesUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutPeranInput | peran_hak_aksesCreateOrConnectWithoutPeranInput[]
    createMany?: peran_hak_aksesCreateManyPeranInputEnvelope
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
  }

  export type penggunaUncheckedCreateNestedManyWithoutPeranInput = {
    create?: XOR<penggunaCreateWithoutPeranInput, penggunaUncheckedCreateWithoutPeranInput> | penggunaCreateWithoutPeranInput[] | penggunaUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPeranInput | penggunaCreateOrConnectWithoutPeranInput[]
    createMany?: penggunaCreateManyPeranInputEnvelope
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
  }

  export type peran_hak_aksesUncheckedCreateNestedManyWithoutPeranInput = {
    create?: XOR<peran_hak_aksesCreateWithoutPeranInput, peran_hak_aksesUncheckedCreateWithoutPeranInput> | peran_hak_aksesCreateWithoutPeranInput[] | peran_hak_aksesUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutPeranInput | peran_hak_aksesCreateOrConnectWithoutPeranInput[]
    createMany?: peran_hak_aksesCreateManyPeranInputEnvelope
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type penggunaUpdateManyWithoutPeranNestedInput = {
    create?: XOR<penggunaCreateWithoutPeranInput, penggunaUncheckedCreateWithoutPeranInput> | penggunaCreateWithoutPeranInput[] | penggunaUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPeranInput | penggunaCreateOrConnectWithoutPeranInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutPeranInput | penggunaUpsertWithWhereUniqueWithoutPeranInput[]
    createMany?: penggunaCreateManyPeranInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutPeranInput | penggunaUpdateWithWhereUniqueWithoutPeranInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutPeranInput | penggunaUpdateManyWithWhereWithoutPeranInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type peran_hak_aksesUpdateManyWithoutPeranNestedInput = {
    create?: XOR<peran_hak_aksesCreateWithoutPeranInput, peran_hak_aksesUncheckedCreateWithoutPeranInput> | peran_hak_aksesCreateWithoutPeranInput[] | peran_hak_aksesUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutPeranInput | peran_hak_aksesCreateOrConnectWithoutPeranInput[]
    upsert?: peran_hak_aksesUpsertWithWhereUniqueWithoutPeranInput | peran_hak_aksesUpsertWithWhereUniqueWithoutPeranInput[]
    createMany?: peran_hak_aksesCreateManyPeranInputEnvelope
    set?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    disconnect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    delete?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    update?: peran_hak_aksesUpdateWithWhereUniqueWithoutPeranInput | peran_hak_aksesUpdateWithWhereUniqueWithoutPeranInput[]
    updateMany?: peran_hak_aksesUpdateManyWithWhereWithoutPeranInput | peran_hak_aksesUpdateManyWithWhereWithoutPeranInput[]
    deleteMany?: peran_hak_aksesScalarWhereInput | peran_hak_aksesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type penggunaUncheckedUpdateManyWithoutPeranNestedInput = {
    create?: XOR<penggunaCreateWithoutPeranInput, penggunaUncheckedCreateWithoutPeranInput> | penggunaCreateWithoutPeranInput[] | penggunaUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: penggunaCreateOrConnectWithoutPeranInput | penggunaCreateOrConnectWithoutPeranInput[]
    upsert?: penggunaUpsertWithWhereUniqueWithoutPeranInput | penggunaUpsertWithWhereUniqueWithoutPeranInput[]
    createMany?: penggunaCreateManyPeranInputEnvelope
    set?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    disconnect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    delete?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    connect?: penggunaWhereUniqueInput | penggunaWhereUniqueInput[]
    update?: penggunaUpdateWithWhereUniqueWithoutPeranInput | penggunaUpdateWithWhereUniqueWithoutPeranInput[]
    updateMany?: penggunaUpdateManyWithWhereWithoutPeranInput | penggunaUpdateManyWithWhereWithoutPeranInput[]
    deleteMany?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
  }

  export type peran_hak_aksesUncheckedUpdateManyWithoutPeranNestedInput = {
    create?: XOR<peran_hak_aksesCreateWithoutPeranInput, peran_hak_aksesUncheckedCreateWithoutPeranInput> | peran_hak_aksesCreateWithoutPeranInput[] | peran_hak_aksesUncheckedCreateWithoutPeranInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutPeranInput | peran_hak_aksesCreateOrConnectWithoutPeranInput[]
    upsert?: peran_hak_aksesUpsertWithWhereUniqueWithoutPeranInput | peran_hak_aksesUpsertWithWhereUniqueWithoutPeranInput[]
    createMany?: peran_hak_aksesCreateManyPeranInputEnvelope
    set?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    disconnect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    delete?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    update?: peran_hak_aksesUpdateWithWhereUniqueWithoutPeranInput | peran_hak_aksesUpdateWithWhereUniqueWithoutPeranInput[]
    updateMany?: peran_hak_aksesUpdateManyWithWhereWithoutPeranInput | peran_hak_aksesUpdateManyWithWhereWithoutPeranInput[]
    deleteMany?: peran_hak_aksesScalarWhereInput | peran_hak_aksesScalarWhereInput[]
  }

  export type peran_hak_aksesCreateNestedManyWithoutHak_aksesInput = {
    create?: XOR<peran_hak_aksesCreateWithoutHak_aksesInput, peran_hak_aksesUncheckedCreateWithoutHak_aksesInput> | peran_hak_aksesCreateWithoutHak_aksesInput[] | peran_hak_aksesUncheckedCreateWithoutHak_aksesInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutHak_aksesInput | peran_hak_aksesCreateOrConnectWithoutHak_aksesInput[]
    createMany?: peran_hak_aksesCreateManyHak_aksesInputEnvelope
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
  }

  export type peran_hak_aksesUncheckedCreateNestedManyWithoutHak_aksesInput = {
    create?: XOR<peran_hak_aksesCreateWithoutHak_aksesInput, peran_hak_aksesUncheckedCreateWithoutHak_aksesInput> | peran_hak_aksesCreateWithoutHak_aksesInput[] | peran_hak_aksesUncheckedCreateWithoutHak_aksesInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutHak_aksesInput | peran_hak_aksesCreateOrConnectWithoutHak_aksesInput[]
    createMany?: peran_hak_aksesCreateManyHak_aksesInputEnvelope
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
  }

  export type peran_hak_aksesUpdateManyWithoutHak_aksesNestedInput = {
    create?: XOR<peran_hak_aksesCreateWithoutHak_aksesInput, peran_hak_aksesUncheckedCreateWithoutHak_aksesInput> | peran_hak_aksesCreateWithoutHak_aksesInput[] | peran_hak_aksesUncheckedCreateWithoutHak_aksesInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutHak_aksesInput | peran_hak_aksesCreateOrConnectWithoutHak_aksesInput[]
    upsert?: peran_hak_aksesUpsertWithWhereUniqueWithoutHak_aksesInput | peran_hak_aksesUpsertWithWhereUniqueWithoutHak_aksesInput[]
    createMany?: peran_hak_aksesCreateManyHak_aksesInputEnvelope
    set?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    disconnect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    delete?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    update?: peran_hak_aksesUpdateWithWhereUniqueWithoutHak_aksesInput | peran_hak_aksesUpdateWithWhereUniqueWithoutHak_aksesInput[]
    updateMany?: peran_hak_aksesUpdateManyWithWhereWithoutHak_aksesInput | peran_hak_aksesUpdateManyWithWhereWithoutHak_aksesInput[]
    deleteMany?: peran_hak_aksesScalarWhereInput | peran_hak_aksesScalarWhereInput[]
  }

  export type peran_hak_aksesUncheckedUpdateManyWithoutHak_aksesNestedInput = {
    create?: XOR<peran_hak_aksesCreateWithoutHak_aksesInput, peran_hak_aksesUncheckedCreateWithoutHak_aksesInput> | peran_hak_aksesCreateWithoutHak_aksesInput[] | peran_hak_aksesUncheckedCreateWithoutHak_aksesInput[]
    connectOrCreate?: peran_hak_aksesCreateOrConnectWithoutHak_aksesInput | peran_hak_aksesCreateOrConnectWithoutHak_aksesInput[]
    upsert?: peran_hak_aksesUpsertWithWhereUniqueWithoutHak_aksesInput | peran_hak_aksesUpsertWithWhereUniqueWithoutHak_aksesInput[]
    createMany?: peran_hak_aksesCreateManyHak_aksesInputEnvelope
    set?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    disconnect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    delete?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    connect?: peran_hak_aksesWhereUniqueInput | peran_hak_aksesWhereUniqueInput[]
    update?: peran_hak_aksesUpdateWithWhereUniqueWithoutHak_aksesInput | peran_hak_aksesUpdateWithWhereUniqueWithoutHak_aksesInput[]
    updateMany?: peran_hak_aksesUpdateManyWithWhereWithoutHak_aksesInput | peran_hak_aksesUpdateManyWithWhereWithoutHak_aksesInput[]
    deleteMany?: peran_hak_aksesScalarWhereInput | peran_hak_aksesScalarWhereInput[]
  }

  export type peranCreateNestedOneWithoutPeran_hak_aksesInput = {
    create?: XOR<peranCreateWithoutPeran_hak_aksesInput, peranUncheckedCreateWithoutPeran_hak_aksesInput>
    connectOrCreate?: peranCreateOrConnectWithoutPeran_hak_aksesInput
    connect?: peranWhereUniqueInput
  }

  export type hak_aksesCreateNestedOneWithoutPeran_hak_aksesInput = {
    create?: XOR<hak_aksesCreateWithoutPeran_hak_aksesInput, hak_aksesUncheckedCreateWithoutPeran_hak_aksesInput>
    connectOrCreate?: hak_aksesCreateOrConnectWithoutPeran_hak_aksesInput
    connect?: hak_aksesWhereUniqueInput
  }

  export type peranUpdateOneRequiredWithoutPeran_hak_aksesNestedInput = {
    create?: XOR<peranCreateWithoutPeran_hak_aksesInput, peranUncheckedCreateWithoutPeran_hak_aksesInput>
    connectOrCreate?: peranCreateOrConnectWithoutPeran_hak_aksesInput
    upsert?: peranUpsertWithoutPeran_hak_aksesInput
    connect?: peranWhereUniqueInput
    update?: XOR<XOR<peranUpdateToOneWithWhereWithoutPeran_hak_aksesInput, peranUpdateWithoutPeran_hak_aksesInput>, peranUncheckedUpdateWithoutPeran_hak_aksesInput>
  }

  export type hak_aksesUpdateOneRequiredWithoutPeran_hak_aksesNestedInput = {
    create?: XOR<hak_aksesCreateWithoutPeran_hak_aksesInput, hak_aksesUncheckedCreateWithoutPeran_hak_aksesInput>
    connectOrCreate?: hak_aksesCreateOrConnectWithoutPeran_hak_aksesInput
    upsert?: hak_aksesUpsertWithoutPeran_hak_aksesInput
    connect?: hak_aksesWhereUniqueInput
    update?: XOR<XOR<hak_aksesUpdateToOneWithWhereWithoutPeran_hak_aksesInput, hak_aksesUpdateWithoutPeran_hak_aksesInput>, hak_aksesUncheckedUpdateWithoutPeran_hak_aksesInput>
  }

  export type peranCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<peranCreateWithoutPenggunaInput, peranUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: peranCreateOrConnectWithoutPenggunaInput
    connect?: peranWhereUniqueInput
  }

  export type pegawaiCreateNestedOneWithoutPenggunaInput = {
    create?: XOR<pegawaiCreateWithoutPenggunaInput, pegawaiUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutPenggunaInput
    connect?: pegawaiWhereUniqueInput
  }

  export type log_aktivitasCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<log_aktivitasCreateWithoutPenggunaInput, log_aktivitasUncheckedCreateWithoutPenggunaInput> | log_aktivitasCreateWithoutPenggunaInput[] | log_aktivitasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: log_aktivitasCreateOrConnectWithoutPenggunaInput | log_aktivitasCreateOrConnectWithoutPenggunaInput[]
    createMany?: log_aktivitasCreateManyPenggunaInputEnvelope
    connect?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
  }

  export type log_aktivitasUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<log_aktivitasCreateWithoutPenggunaInput, log_aktivitasUncheckedCreateWithoutPenggunaInput> | log_aktivitasCreateWithoutPenggunaInput[] | log_aktivitasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: log_aktivitasCreateOrConnectWithoutPenggunaInput | log_aktivitasCreateOrConnectWithoutPenggunaInput[]
    createMany?: log_aktivitasCreateManyPenggunaInputEnvelope
    connect?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type peranUpdateOneRequiredWithoutPenggunaNestedInput = {
    create?: XOR<peranCreateWithoutPenggunaInput, peranUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: peranCreateOrConnectWithoutPenggunaInput
    upsert?: peranUpsertWithoutPenggunaInput
    connect?: peranWhereUniqueInput
    update?: XOR<XOR<peranUpdateToOneWithWhereWithoutPenggunaInput, peranUpdateWithoutPenggunaInput>, peranUncheckedUpdateWithoutPenggunaInput>
  }

  export type pegawaiUpdateOneWithoutPenggunaNestedInput = {
    create?: XOR<pegawaiCreateWithoutPenggunaInput, pegawaiUncheckedCreateWithoutPenggunaInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutPenggunaInput
    upsert?: pegawaiUpsertWithoutPenggunaInput
    disconnect?: pegawaiWhereInput | boolean
    delete?: pegawaiWhereInput | boolean
    connect?: pegawaiWhereUniqueInput
    update?: XOR<XOR<pegawaiUpdateToOneWithWhereWithoutPenggunaInput, pegawaiUpdateWithoutPenggunaInput>, pegawaiUncheckedUpdateWithoutPenggunaInput>
  }

  export type log_aktivitasUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<log_aktivitasCreateWithoutPenggunaInput, log_aktivitasUncheckedCreateWithoutPenggunaInput> | log_aktivitasCreateWithoutPenggunaInput[] | log_aktivitasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: log_aktivitasCreateOrConnectWithoutPenggunaInput | log_aktivitasCreateOrConnectWithoutPenggunaInput[]
    upsert?: log_aktivitasUpsertWithWhereUniqueWithoutPenggunaInput | log_aktivitasUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: log_aktivitasCreateManyPenggunaInputEnvelope
    set?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    disconnect?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    delete?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    connect?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    update?: log_aktivitasUpdateWithWhereUniqueWithoutPenggunaInput | log_aktivitasUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: log_aktivitasUpdateManyWithWhereWithoutPenggunaInput | log_aktivitasUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: log_aktivitasScalarWhereInput | log_aktivitasScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type log_aktivitasUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<log_aktivitasCreateWithoutPenggunaInput, log_aktivitasUncheckedCreateWithoutPenggunaInput> | log_aktivitasCreateWithoutPenggunaInput[] | log_aktivitasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: log_aktivitasCreateOrConnectWithoutPenggunaInput | log_aktivitasCreateOrConnectWithoutPenggunaInput[]
    upsert?: log_aktivitasUpsertWithWhereUniqueWithoutPenggunaInput | log_aktivitasUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: log_aktivitasCreateManyPenggunaInputEnvelope
    set?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    disconnect?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    delete?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    connect?: log_aktivitasWhereUniqueInput | log_aktivitasWhereUniqueInput[]
    update?: log_aktivitasUpdateWithWhereUniqueWithoutPenggunaInput | log_aktivitasUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: log_aktivitasUpdateManyWithWhereWithoutPenggunaInput | log_aktivitasUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: log_aktivitasScalarWhereInput | log_aktivitasScalarWhereInput[]
  }

  export type pendidikan_pegawaiCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<pendidikan_pegawaiCreateWithoutPegawaiInput, pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput> | pendidikan_pegawaiCreateWithoutPegawaiInput[] | pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput | pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput[]
    createMany?: pendidikan_pegawaiCreateManyPegawaiInputEnvelope
    connect?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<penggunaCreateWithoutPegawaiInput, penggunaUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPegawaiInput
    connect?: penggunaWhereUniqueInput
  }

  export type tunjangan_transportCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<tunjangan_transportCreateWithoutPegawaiInput, tunjangan_transportUncheckedCreateWithoutPegawaiInput> | tunjangan_transportCreateWithoutPegawaiInput[] | tunjangan_transportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: tunjangan_transportCreateOrConnectWithoutPegawaiInput | tunjangan_transportCreateOrConnectWithoutPegawaiInput[]
    createMany?: tunjangan_transportCreateManyPegawaiInputEnvelope
    connect?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
  }

  export type pendidikan_pegawaiUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<pendidikan_pegawaiCreateWithoutPegawaiInput, pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput> | pendidikan_pegawaiCreateWithoutPegawaiInput[] | pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput | pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput[]
    createMany?: pendidikan_pegawaiCreateManyPegawaiInputEnvelope
    connect?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
  }

  export type penggunaUncheckedCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<penggunaCreateWithoutPegawaiInput, penggunaUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPegawaiInput
    connect?: penggunaWhereUniqueInput
  }

  export type tunjangan_transportUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<tunjangan_transportCreateWithoutPegawaiInput, tunjangan_transportUncheckedCreateWithoutPegawaiInput> | tunjangan_transportCreateWithoutPegawaiInput[] | tunjangan_transportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: tunjangan_transportCreateOrConnectWithoutPegawaiInput | tunjangan_transportCreateOrConnectWithoutPegawaiInput[]
    createMany?: tunjangan_transportCreateManyPegawaiInputEnvelope
    connect?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumStatusKawinFieldUpdateOperationsInput = {
    set?: $Enums.StatusKawin
  }

  export type EnumJenisPegawaiFieldUpdateOperationsInput = {
    set?: $Enums.JenisPegawai
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pendidikan_pegawaiUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<pendidikan_pegawaiCreateWithoutPegawaiInput, pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput> | pendidikan_pegawaiCreateWithoutPegawaiInput[] | pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput | pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput[]
    upsert?: pendidikan_pegawaiUpsertWithWhereUniqueWithoutPegawaiInput | pendidikan_pegawaiUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: pendidikan_pegawaiCreateManyPegawaiInputEnvelope
    set?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    disconnect?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    delete?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    connect?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    update?: pendidikan_pegawaiUpdateWithWhereUniqueWithoutPegawaiInput | pendidikan_pegawaiUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: pendidikan_pegawaiUpdateManyWithWhereWithoutPegawaiInput | pendidikan_pegawaiUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: pendidikan_pegawaiScalarWhereInput | pendidikan_pegawaiScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<penggunaCreateWithoutPegawaiInput, penggunaUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPegawaiInput
    upsert?: penggunaUpsertWithoutPegawaiInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutPegawaiInput, penggunaUpdateWithoutPegawaiInput>, penggunaUncheckedUpdateWithoutPegawaiInput>
  }

  export type tunjangan_transportUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<tunjangan_transportCreateWithoutPegawaiInput, tunjangan_transportUncheckedCreateWithoutPegawaiInput> | tunjangan_transportCreateWithoutPegawaiInput[] | tunjangan_transportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: tunjangan_transportCreateOrConnectWithoutPegawaiInput | tunjangan_transportCreateOrConnectWithoutPegawaiInput[]
    upsert?: tunjangan_transportUpsertWithWhereUniqueWithoutPegawaiInput | tunjangan_transportUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: tunjangan_transportCreateManyPegawaiInputEnvelope
    set?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    disconnect?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    delete?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    connect?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    update?: tunjangan_transportUpdateWithWhereUniqueWithoutPegawaiInput | tunjangan_transportUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: tunjangan_transportUpdateManyWithWhereWithoutPegawaiInput | tunjangan_transportUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: tunjangan_transportScalarWhereInput | tunjangan_transportScalarWhereInput[]
  }

  export type pendidikan_pegawaiUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<pendidikan_pegawaiCreateWithoutPegawaiInput, pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput> | pendidikan_pegawaiCreateWithoutPegawaiInput[] | pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput | pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput[]
    upsert?: pendidikan_pegawaiUpsertWithWhereUniqueWithoutPegawaiInput | pendidikan_pegawaiUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: pendidikan_pegawaiCreateManyPegawaiInputEnvelope
    set?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    disconnect?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    delete?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    connect?: pendidikan_pegawaiWhereUniqueInput | pendidikan_pegawaiWhereUniqueInput[]
    update?: pendidikan_pegawaiUpdateWithWhereUniqueWithoutPegawaiInput | pendidikan_pegawaiUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: pendidikan_pegawaiUpdateManyWithWhereWithoutPegawaiInput | pendidikan_pegawaiUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: pendidikan_pegawaiScalarWhereInput | pendidikan_pegawaiScalarWhereInput[]
  }

  export type penggunaUncheckedUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<penggunaCreateWithoutPegawaiInput, penggunaUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutPegawaiInput
    upsert?: penggunaUpsertWithoutPegawaiInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutPegawaiInput, penggunaUpdateWithoutPegawaiInput>, penggunaUncheckedUpdateWithoutPegawaiInput>
  }

  export type tunjangan_transportUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<tunjangan_transportCreateWithoutPegawaiInput, tunjangan_transportUncheckedCreateWithoutPegawaiInput> | tunjangan_transportCreateWithoutPegawaiInput[] | tunjangan_transportUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: tunjangan_transportCreateOrConnectWithoutPegawaiInput | tunjangan_transportCreateOrConnectWithoutPegawaiInput[]
    upsert?: tunjangan_transportUpsertWithWhereUniqueWithoutPegawaiInput | tunjangan_transportUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: tunjangan_transportCreateManyPegawaiInputEnvelope
    set?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    disconnect?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    delete?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    connect?: tunjangan_transportWhereUniqueInput | tunjangan_transportWhereUniqueInput[]
    update?: tunjangan_transportUpdateWithWhereUniqueWithoutPegawaiInput | tunjangan_transportUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: tunjangan_transportUpdateManyWithWhereWithoutPegawaiInput | tunjangan_transportUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: tunjangan_transportScalarWhereInput | tunjangan_transportScalarWhereInput[]
  }

  export type pegawaiCreateNestedOneWithoutPendidikanInput = {
    create?: XOR<pegawaiCreateWithoutPendidikanInput, pegawaiUncheckedCreateWithoutPendidikanInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutPendidikanInput
    connect?: pegawaiWhereUniqueInput
  }

  export type pegawaiUpdateOneRequiredWithoutPendidikanNestedInput = {
    create?: XOR<pegawaiCreateWithoutPendidikanInput, pegawaiUncheckedCreateWithoutPendidikanInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutPendidikanInput
    upsert?: pegawaiUpsertWithoutPendidikanInput
    connect?: pegawaiWhereUniqueInput
    update?: XOR<XOR<pegawaiUpdateToOneWithWhereWithoutPendidikanInput, pegawaiUpdateWithoutPendidikanInput>, pegawaiUncheckedUpdateWithoutPendidikanInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pegawaiCreateNestedOneWithoutTunjangan_transportInput = {
    create?: XOR<pegawaiCreateWithoutTunjangan_transportInput, pegawaiUncheckedCreateWithoutTunjangan_transportInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutTunjangan_transportInput
    connect?: pegawaiWhereUniqueInput
  }

  export type pegawaiUpdateOneRequiredWithoutTunjangan_transportNestedInput = {
    create?: XOR<pegawaiCreateWithoutTunjangan_transportInput, pegawaiUncheckedCreateWithoutTunjangan_transportInput>
    connectOrCreate?: pegawaiCreateOrConnectWithoutTunjangan_transportInput
    upsert?: pegawaiUpsertWithoutTunjangan_transportInput
    connect?: pegawaiWhereUniqueInput
    update?: XOR<XOR<pegawaiUpdateToOneWithWhereWithoutTunjangan_transportInput, pegawaiUpdateWithoutTunjangan_transportInput>, pegawaiUncheckedUpdateWithoutTunjangan_transportInput>
  }

  export type penggunaCreateNestedOneWithoutLog_aktivitasInput = {
    create?: XOR<penggunaCreateWithoutLog_aktivitasInput, penggunaUncheckedCreateWithoutLog_aktivitasInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutLog_aktivitasInput
    connect?: penggunaWhereUniqueInput
  }

  export type EnumAksiLogFieldUpdateOperationsInput = {
    set?: $Enums.AksiLog
  }

  export type penggunaUpdateOneWithoutLog_aktivitasNestedInput = {
    create?: XOR<penggunaCreateWithoutLog_aktivitasInput, penggunaUncheckedCreateWithoutLog_aktivitasInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutLog_aktivitasInput
    upsert?: penggunaUpsertWithoutLog_aktivitasInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutLog_aktivitasInput, penggunaUpdateWithoutLog_aktivitasInput>, penggunaUncheckedUpdateWithoutLog_aktivitasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumStatusKawinFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKawin | EnumStatusKawinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKawinFilter<$PrismaModel> | $Enums.StatusKawin
  }

  export type NestedEnumJenisPegawaiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPegawai | EnumJenisPegawaiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPegawaiFilter<$PrismaModel> | $Enums.JenisPegawai
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumStatusKawinWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKawin | EnumStatusKawinFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKawin[] | ListEnumStatusKawinFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKawinWithAggregatesFilter<$PrismaModel> | $Enums.StatusKawin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKawinFilter<$PrismaModel>
    _max?: NestedEnumStatusKawinFilter<$PrismaModel>
  }

  export type NestedEnumJenisPegawaiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPegawai | EnumJenisPegawaiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPegawai[] | ListEnumJenisPegawaiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPegawaiWithAggregatesFilter<$PrismaModel> | $Enums.JenisPegawai
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPegawaiFilter<$PrismaModel>
    _max?: NestedEnumJenisPegawaiFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAksiLogFilter<$PrismaModel = never> = {
    equals?: $Enums.AksiLog | EnumAksiLogFieldRefInput<$PrismaModel>
    in?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    not?: NestedEnumAksiLogFilter<$PrismaModel> | $Enums.AksiLog
  }

  export type NestedEnumAksiLogWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AksiLog | EnumAksiLogFieldRefInput<$PrismaModel>
    in?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    notIn?: $Enums.AksiLog[] | ListEnumAksiLogFieldRefInput<$PrismaModel>
    not?: NestedEnumAksiLogWithAggregatesFilter<$PrismaModel> | $Enums.AksiLog
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAksiLogFilter<$PrismaModel>
    _max?: NestedEnumAksiLogFilter<$PrismaModel>
  }

  export type penggunaCreateWithoutPeranInput = {
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pegawai?: pegawaiCreateNestedOneWithoutPenggunaInput
    log_aktivitas?: log_aktivitasCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateWithoutPeranInput = {
    id_pengguna?: number
    id_pegawai?: number | null
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    log_aktivitas?: log_aktivitasUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaCreateOrConnectWithoutPeranInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPeranInput, penggunaUncheckedCreateWithoutPeranInput>
  }

  export type penggunaCreateManyPeranInputEnvelope = {
    data: penggunaCreateManyPeranInput | penggunaCreateManyPeranInput[]
    skipDuplicates?: boolean
  }

  export type peran_hak_aksesCreateWithoutPeranInput = {
    hak_akses: hak_aksesCreateNestedOneWithoutPeran_hak_aksesInput
  }

  export type peran_hak_aksesUncheckedCreateWithoutPeranInput = {
    id_hak_akses: number
  }

  export type peran_hak_aksesCreateOrConnectWithoutPeranInput = {
    where: peran_hak_aksesWhereUniqueInput
    create: XOR<peran_hak_aksesCreateWithoutPeranInput, peran_hak_aksesUncheckedCreateWithoutPeranInput>
  }

  export type peran_hak_aksesCreateManyPeranInputEnvelope = {
    data: peran_hak_aksesCreateManyPeranInput | peran_hak_aksesCreateManyPeranInput[]
    skipDuplicates?: boolean
  }

  export type penggunaUpsertWithWhereUniqueWithoutPeranInput = {
    where: penggunaWhereUniqueInput
    update: XOR<penggunaUpdateWithoutPeranInput, penggunaUncheckedUpdateWithoutPeranInput>
    create: XOR<penggunaCreateWithoutPeranInput, penggunaUncheckedCreateWithoutPeranInput>
  }

  export type penggunaUpdateWithWhereUniqueWithoutPeranInput = {
    where: penggunaWhereUniqueInput
    data: XOR<penggunaUpdateWithoutPeranInput, penggunaUncheckedUpdateWithoutPeranInput>
  }

  export type penggunaUpdateManyWithWhereWithoutPeranInput = {
    where: penggunaScalarWhereInput
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyWithoutPeranInput>
  }

  export type penggunaScalarWhereInput = {
    AND?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
    OR?: penggunaScalarWhereInput[]
    NOT?: penggunaScalarWhereInput | penggunaScalarWhereInput[]
    id_pengguna?: IntFilter<"pengguna"> | number
    id_pegawai?: IntNullableFilter<"pengguna"> | number | null
    nama_pengguna?: StringFilter<"pengguna"> | string
    username?: StringFilter<"pengguna"> | string
    email?: StringNullableFilter<"pengguna"> | string | null
    nomor_hp?: StringNullableFilter<"pengguna"> | string | null
    kata_sandi?: StringFilter<"pengguna"> | string
    id_peran?: IntFilter<"pengguna"> | number
    status_aktif?: BoolFilter<"pengguna"> | boolean
    foto?: StringNullableFilter<"pengguna"> | string | null
    terakhir_login?: DateTimeNullableFilter<"pengguna"> | Date | string | null
    dibuat_pada?: DateTimeFilter<"pengguna"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pengguna"> | Date | string
    dihapus_pada?: DateTimeNullableFilter<"pengguna"> | Date | string | null
  }

  export type peran_hak_aksesUpsertWithWhereUniqueWithoutPeranInput = {
    where: peran_hak_aksesWhereUniqueInput
    update: XOR<peran_hak_aksesUpdateWithoutPeranInput, peran_hak_aksesUncheckedUpdateWithoutPeranInput>
    create: XOR<peran_hak_aksesCreateWithoutPeranInput, peran_hak_aksesUncheckedCreateWithoutPeranInput>
  }

  export type peran_hak_aksesUpdateWithWhereUniqueWithoutPeranInput = {
    where: peran_hak_aksesWhereUniqueInput
    data: XOR<peran_hak_aksesUpdateWithoutPeranInput, peran_hak_aksesUncheckedUpdateWithoutPeranInput>
  }

  export type peran_hak_aksesUpdateManyWithWhereWithoutPeranInput = {
    where: peran_hak_aksesScalarWhereInput
    data: XOR<peran_hak_aksesUpdateManyMutationInput, peran_hak_aksesUncheckedUpdateManyWithoutPeranInput>
  }

  export type peran_hak_aksesScalarWhereInput = {
    AND?: peran_hak_aksesScalarWhereInput | peran_hak_aksesScalarWhereInput[]
    OR?: peran_hak_aksesScalarWhereInput[]
    NOT?: peran_hak_aksesScalarWhereInput | peran_hak_aksesScalarWhereInput[]
    id_peran?: IntFilter<"peran_hak_akses"> | number
    id_hak_akses?: IntFilter<"peran_hak_akses"> | number
  }

  export type peran_hak_aksesCreateWithoutHak_aksesInput = {
    peran: peranCreateNestedOneWithoutPeran_hak_aksesInput
  }

  export type peran_hak_aksesUncheckedCreateWithoutHak_aksesInput = {
    id_peran: number
  }

  export type peran_hak_aksesCreateOrConnectWithoutHak_aksesInput = {
    where: peran_hak_aksesWhereUniqueInput
    create: XOR<peran_hak_aksesCreateWithoutHak_aksesInput, peran_hak_aksesUncheckedCreateWithoutHak_aksesInput>
  }

  export type peran_hak_aksesCreateManyHak_aksesInputEnvelope = {
    data: peran_hak_aksesCreateManyHak_aksesInput | peran_hak_aksesCreateManyHak_aksesInput[]
    skipDuplicates?: boolean
  }

  export type peran_hak_aksesUpsertWithWhereUniqueWithoutHak_aksesInput = {
    where: peran_hak_aksesWhereUniqueInput
    update: XOR<peran_hak_aksesUpdateWithoutHak_aksesInput, peran_hak_aksesUncheckedUpdateWithoutHak_aksesInput>
    create: XOR<peran_hak_aksesCreateWithoutHak_aksesInput, peran_hak_aksesUncheckedCreateWithoutHak_aksesInput>
  }

  export type peran_hak_aksesUpdateWithWhereUniqueWithoutHak_aksesInput = {
    where: peran_hak_aksesWhereUniqueInput
    data: XOR<peran_hak_aksesUpdateWithoutHak_aksesInput, peran_hak_aksesUncheckedUpdateWithoutHak_aksesInput>
  }

  export type peran_hak_aksesUpdateManyWithWhereWithoutHak_aksesInput = {
    where: peran_hak_aksesScalarWhereInput
    data: XOR<peran_hak_aksesUpdateManyMutationInput, peran_hak_aksesUncheckedUpdateManyWithoutHak_aksesInput>
  }

  export type peranCreateWithoutPeran_hak_aksesInput = {
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    pengguna?: penggunaCreateNestedManyWithoutPeranInput
  }

  export type peranUncheckedCreateWithoutPeran_hak_aksesInput = {
    id_peran?: number
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    pengguna?: penggunaUncheckedCreateNestedManyWithoutPeranInput
  }

  export type peranCreateOrConnectWithoutPeran_hak_aksesInput = {
    where: peranWhereUniqueInput
    create: XOR<peranCreateWithoutPeran_hak_aksesInput, peranUncheckedCreateWithoutPeran_hak_aksesInput>
  }

  export type hak_aksesCreateWithoutPeran_hak_aksesInput = {
    nama_akses: string
    modul: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
  }

  export type hak_aksesUncheckedCreateWithoutPeran_hak_aksesInput = {
    id_hak_akses?: number
    nama_akses: string
    modul: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
  }

  export type hak_aksesCreateOrConnectWithoutPeran_hak_aksesInput = {
    where: hak_aksesWhereUniqueInput
    create: XOR<hak_aksesCreateWithoutPeran_hak_aksesInput, hak_aksesUncheckedCreateWithoutPeran_hak_aksesInput>
  }

  export type peranUpsertWithoutPeran_hak_aksesInput = {
    update: XOR<peranUpdateWithoutPeran_hak_aksesInput, peranUncheckedUpdateWithoutPeran_hak_aksesInput>
    create: XOR<peranCreateWithoutPeran_hak_aksesInput, peranUncheckedCreateWithoutPeran_hak_aksesInput>
    where?: peranWhereInput
  }

  export type peranUpdateToOneWithWhereWithoutPeran_hak_aksesInput = {
    where?: peranWhereInput
    data: XOR<peranUpdateWithoutPeran_hak_aksesInput, peranUncheckedUpdateWithoutPeran_hak_aksesInput>
  }

  export type peranUpdateWithoutPeran_hak_aksesInput = {
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUpdateManyWithoutPeranNestedInput
  }

  export type peranUncheckedUpdateWithoutPeran_hak_aksesInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    pengguna?: penggunaUncheckedUpdateManyWithoutPeranNestedInput
  }

  export type hak_aksesUpsertWithoutPeran_hak_aksesInput = {
    update: XOR<hak_aksesUpdateWithoutPeran_hak_aksesInput, hak_aksesUncheckedUpdateWithoutPeran_hak_aksesInput>
    create: XOR<hak_aksesCreateWithoutPeran_hak_aksesInput, hak_aksesUncheckedCreateWithoutPeran_hak_aksesInput>
    where?: hak_aksesWhereInput
  }

  export type hak_aksesUpdateToOneWithWhereWithoutPeran_hak_aksesInput = {
    where?: hak_aksesWhereInput
    data: XOR<hak_aksesUpdateWithoutPeran_hak_aksesInput, hak_aksesUncheckedUpdateWithoutPeran_hak_aksesInput>
  }

  export type hak_aksesUpdateWithoutPeran_hak_aksesInput = {
    nama_akses?: StringFieldUpdateOperationsInput | string
    modul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type hak_aksesUncheckedUpdateWithoutPeran_hak_aksesInput = {
    id_hak_akses?: IntFieldUpdateOperationsInput | number
    nama_akses?: StringFieldUpdateOperationsInput | string
    modul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type peranCreateWithoutPenggunaInput = {
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    peran_hak_akses?: peran_hak_aksesCreateNestedManyWithoutPeranInput
  }

  export type peranUncheckedCreateWithoutPenggunaInput = {
    id_peran?: number
    nama_peran: string
    deskripsi?: string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    peran_hak_akses?: peran_hak_aksesUncheckedCreateNestedManyWithoutPeranInput
  }

  export type peranCreateOrConnectWithoutPenggunaInput = {
    where: peranWhereUniqueInput
    create: XOR<peranCreateWithoutPenggunaInput, peranUncheckedCreateWithoutPenggunaInput>
  }

  export type pegawaiCreateWithoutPenggunaInput = {
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pendidikan?: pendidikan_pegawaiCreateNestedManyWithoutPegawaiInput
    tunjangan_transport?: tunjangan_transportCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateWithoutPenggunaInput = {
    id_pegawai?: number
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pendidikan?: pendidikan_pegawaiUncheckedCreateNestedManyWithoutPegawaiInput
    tunjangan_transport?: tunjangan_transportUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiCreateOrConnectWithoutPenggunaInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutPenggunaInput, pegawaiUncheckedCreateWithoutPenggunaInput>
  }

  export type log_aktivitasCreateWithoutPenggunaInput = {
    modul: string
    aksi: $Enums.AksiLog
    keterangan?: string | null
    ip_address?: string | null
    user_agent?: string | null
    dibuat_pada?: Date | string
  }

  export type log_aktivitasUncheckedCreateWithoutPenggunaInput = {
    id_log?: number
    modul: string
    aksi: $Enums.AksiLog
    keterangan?: string | null
    ip_address?: string | null
    user_agent?: string | null
    dibuat_pada?: Date | string
  }

  export type log_aktivitasCreateOrConnectWithoutPenggunaInput = {
    where: log_aktivitasWhereUniqueInput
    create: XOR<log_aktivitasCreateWithoutPenggunaInput, log_aktivitasUncheckedCreateWithoutPenggunaInput>
  }

  export type log_aktivitasCreateManyPenggunaInputEnvelope = {
    data: log_aktivitasCreateManyPenggunaInput | log_aktivitasCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type peranUpsertWithoutPenggunaInput = {
    update: XOR<peranUpdateWithoutPenggunaInput, peranUncheckedUpdateWithoutPenggunaInput>
    create: XOR<peranCreateWithoutPenggunaInput, peranUncheckedCreateWithoutPenggunaInput>
    where?: peranWhereInput
  }

  export type peranUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: peranWhereInput
    data: XOR<peranUpdateWithoutPenggunaInput, peranUncheckedUpdateWithoutPenggunaInput>
  }

  export type peranUpdateWithoutPenggunaInput = {
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    peran_hak_akses?: peran_hak_aksesUpdateManyWithoutPeranNestedInput
  }

  export type peranUncheckedUpdateWithoutPenggunaInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
    nama_peran?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    peran_hak_akses?: peran_hak_aksesUncheckedUpdateManyWithoutPeranNestedInput
  }

  export type pegawaiUpsertWithoutPenggunaInput = {
    update: XOR<pegawaiUpdateWithoutPenggunaInput, pegawaiUncheckedUpdateWithoutPenggunaInput>
    create: XOR<pegawaiCreateWithoutPenggunaInput, pegawaiUncheckedCreateWithoutPenggunaInput>
    where?: pegawaiWhereInput
  }

  export type pegawaiUpdateToOneWithWhereWithoutPenggunaInput = {
    where?: pegawaiWhereInput
    data: XOR<pegawaiUpdateWithoutPenggunaInput, pegawaiUncheckedUpdateWithoutPenggunaInput>
  }

  export type pegawaiUpdateWithoutPenggunaInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: pendidikan_pegawaiUpdateManyWithoutPegawaiNestedInput
    tunjangan_transport?: tunjangan_transportUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateWithoutPenggunaInput = {
    id_pegawai?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: pendidikan_pegawaiUncheckedUpdateManyWithoutPegawaiNestedInput
    tunjangan_transport?: tunjangan_transportUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type log_aktivitasUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: log_aktivitasWhereUniqueInput
    update: XOR<log_aktivitasUpdateWithoutPenggunaInput, log_aktivitasUncheckedUpdateWithoutPenggunaInput>
    create: XOR<log_aktivitasCreateWithoutPenggunaInput, log_aktivitasUncheckedCreateWithoutPenggunaInput>
  }

  export type log_aktivitasUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: log_aktivitasWhereUniqueInput
    data: XOR<log_aktivitasUpdateWithoutPenggunaInput, log_aktivitasUncheckedUpdateWithoutPenggunaInput>
  }

  export type log_aktivitasUpdateManyWithWhereWithoutPenggunaInput = {
    where: log_aktivitasScalarWhereInput
    data: XOR<log_aktivitasUpdateManyMutationInput, log_aktivitasUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type log_aktivitasScalarWhereInput = {
    AND?: log_aktivitasScalarWhereInput | log_aktivitasScalarWhereInput[]
    OR?: log_aktivitasScalarWhereInput[]
    NOT?: log_aktivitasScalarWhereInput | log_aktivitasScalarWhereInput[]
    id_log?: IntFilter<"log_aktivitas"> | number
    id_pengguna?: IntNullableFilter<"log_aktivitas"> | number | null
    modul?: StringFilter<"log_aktivitas"> | string
    aksi?: EnumAksiLogFilter<"log_aktivitas"> | $Enums.AksiLog
    keterangan?: StringNullableFilter<"log_aktivitas"> | string | null
    ip_address?: StringNullableFilter<"log_aktivitas"> | string | null
    user_agent?: StringNullableFilter<"log_aktivitas"> | string | null
    dibuat_pada?: DateTimeFilter<"log_aktivitas"> | Date | string
  }

  export type pendidikan_pegawaiCreateWithoutPegawaiInput = {
    jenjang: string
    institusi: string
    jurusan?: string | null
    tahun_lulus?: number | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput = {
    id_pendidikan?: number
    jenjang: string
    institusi: string
    jurusan?: string | null
    tahun_lulus?: number | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pendidikan_pegawaiCreateOrConnectWithoutPegawaiInput = {
    where: pendidikan_pegawaiWhereUniqueInput
    create: XOR<pendidikan_pegawaiCreateWithoutPegawaiInput, pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput>
  }

  export type pendidikan_pegawaiCreateManyPegawaiInputEnvelope = {
    data: pendidikan_pegawaiCreateManyPegawaiInput | pendidikan_pegawaiCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutPegawaiInput = {
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    peran: peranCreateNestedOneWithoutPenggunaInput
    log_aktivitas?: log_aktivitasCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateWithoutPegawaiInput = {
    id_pengguna?: number
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    id_peran: number
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    log_aktivitas?: log_aktivitasUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaCreateOrConnectWithoutPegawaiInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutPegawaiInput, penggunaUncheckedCreateWithoutPegawaiInput>
  }

  export type tunjangan_transportCreateWithoutPegawaiInput = {
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type tunjangan_transportUncheckedCreateWithoutPegawaiInput = {
    id_tunjangan?: number
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type tunjangan_transportCreateOrConnectWithoutPegawaiInput = {
    where: tunjangan_transportWhereUniqueInput
    create: XOR<tunjangan_transportCreateWithoutPegawaiInput, tunjangan_transportUncheckedCreateWithoutPegawaiInput>
  }

  export type tunjangan_transportCreateManyPegawaiInputEnvelope = {
    data: tunjangan_transportCreateManyPegawaiInput | tunjangan_transportCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type pendidikan_pegawaiUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: pendidikan_pegawaiWhereUniqueInput
    update: XOR<pendidikan_pegawaiUpdateWithoutPegawaiInput, pendidikan_pegawaiUncheckedUpdateWithoutPegawaiInput>
    create: XOR<pendidikan_pegawaiCreateWithoutPegawaiInput, pendidikan_pegawaiUncheckedCreateWithoutPegawaiInput>
  }

  export type pendidikan_pegawaiUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: pendidikan_pegawaiWhereUniqueInput
    data: XOR<pendidikan_pegawaiUpdateWithoutPegawaiInput, pendidikan_pegawaiUncheckedUpdateWithoutPegawaiInput>
  }

  export type pendidikan_pegawaiUpdateManyWithWhereWithoutPegawaiInput = {
    where: pendidikan_pegawaiScalarWhereInput
    data: XOR<pendidikan_pegawaiUpdateManyMutationInput, pendidikan_pegawaiUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type pendidikan_pegawaiScalarWhereInput = {
    AND?: pendidikan_pegawaiScalarWhereInput | pendidikan_pegawaiScalarWhereInput[]
    OR?: pendidikan_pegawaiScalarWhereInput[]
    NOT?: pendidikan_pegawaiScalarWhereInput | pendidikan_pegawaiScalarWhereInput[]
    id_pendidikan?: IntFilter<"pendidikan_pegawai"> | number
    id_pegawai?: IntFilter<"pendidikan_pegawai"> | number
    jenjang?: StringFilter<"pendidikan_pegawai"> | string
    institusi?: StringFilter<"pendidikan_pegawai"> | string
    jurusan?: StringNullableFilter<"pendidikan_pegawai"> | string | null
    tahun_lulus?: IntNullableFilter<"pendidikan_pegawai"> | number | null
    dibuat_pada?: DateTimeFilter<"pendidikan_pegawai"> | Date | string
    diperbarui_pada?: DateTimeFilter<"pendidikan_pegawai"> | Date | string
  }

  export type penggunaUpsertWithoutPegawaiInput = {
    update: XOR<penggunaUpdateWithoutPegawaiInput, penggunaUncheckedUpdateWithoutPegawaiInput>
    create: XOR<penggunaCreateWithoutPegawaiInput, penggunaUncheckedCreateWithoutPegawaiInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutPegawaiInput, penggunaUncheckedUpdateWithoutPegawaiInput>
  }

  export type penggunaUpdateWithoutPegawaiInput = {
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peran?: peranUpdateOneRequiredWithoutPenggunaNestedInput
    log_aktivitas?: log_aktivitasUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPegawaiInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    id_peran?: IntFieldUpdateOperationsInput | number
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log_aktivitas?: log_aktivitasUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type tunjangan_transportUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: tunjangan_transportWhereUniqueInput
    update: XOR<tunjangan_transportUpdateWithoutPegawaiInput, tunjangan_transportUncheckedUpdateWithoutPegawaiInput>
    create: XOR<tunjangan_transportCreateWithoutPegawaiInput, tunjangan_transportUncheckedCreateWithoutPegawaiInput>
  }

  export type tunjangan_transportUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: tunjangan_transportWhereUniqueInput
    data: XOR<tunjangan_transportUpdateWithoutPegawaiInput, tunjangan_transportUncheckedUpdateWithoutPegawaiInput>
  }

  export type tunjangan_transportUpdateManyWithWhereWithoutPegawaiInput = {
    where: tunjangan_transportScalarWhereInput
    data: XOR<tunjangan_transportUpdateManyMutationInput, tunjangan_transportUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type tunjangan_transportScalarWhereInput = {
    AND?: tunjangan_transportScalarWhereInput | tunjangan_transportScalarWhereInput[]
    OR?: tunjangan_transportScalarWhereInput[]
    NOT?: tunjangan_transportScalarWhereInput | tunjangan_transportScalarWhereInput[]
    id_tunjangan?: IntFilter<"tunjangan_transport"> | number
    id_pegawai?: IntFilter<"tunjangan_transport"> | number
    bulan?: IntFilter<"tunjangan_transport"> | number
    tahun?: IntFilter<"tunjangan_transport"> | number
    jarak_km?: FloatFilter<"tunjangan_transport"> | number
    hari_masuk?: IntFilter<"tunjangan_transport"> | number
    tarif_per_km?: FloatFilter<"tunjangan_transport"> | number
    total_tunjangan?: FloatFilter<"tunjangan_transport"> | number
    dibuat_pada?: DateTimeFilter<"tunjangan_transport"> | Date | string
    diperbarui_pada?: DateTimeFilter<"tunjangan_transport"> | Date | string
  }

  export type pegawaiCreateWithoutPendidikanInput = {
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pengguna?: penggunaCreateNestedOneWithoutPegawaiInput
    tunjangan_transport?: tunjangan_transportCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateWithoutPendidikanInput = {
    id_pegawai?: number
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pengguna?: penggunaUncheckedCreateNestedOneWithoutPegawaiInput
    tunjangan_transport?: tunjangan_transportUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type pegawaiCreateOrConnectWithoutPendidikanInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutPendidikanInput, pegawaiUncheckedCreateWithoutPendidikanInput>
  }

  export type pegawaiUpsertWithoutPendidikanInput = {
    update: XOR<pegawaiUpdateWithoutPendidikanInput, pegawaiUncheckedUpdateWithoutPendidikanInput>
    create: XOR<pegawaiCreateWithoutPendidikanInput, pegawaiUncheckedCreateWithoutPendidikanInput>
    where?: pegawaiWhereInput
  }

  export type pegawaiUpdateToOneWithWhereWithoutPendidikanInput = {
    where?: pegawaiWhereInput
    data: XOR<pegawaiUpdateWithoutPendidikanInput, pegawaiUncheckedUpdateWithoutPendidikanInput>
  }

  export type pegawaiUpdateWithoutPendidikanInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pengguna?: penggunaUpdateOneWithoutPegawaiNestedInput
    tunjangan_transport?: tunjangan_transportUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateWithoutPendidikanInput = {
    id_pegawai?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pengguna?: penggunaUncheckedUpdateOneWithoutPegawaiNestedInput
    tunjangan_transport?: tunjangan_transportUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type pegawaiCreateWithoutTunjangan_transportInput = {
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pendidikan?: pendidikan_pegawaiCreateNestedManyWithoutPegawaiInput
    pengguna?: penggunaCreateNestedOneWithoutPegawaiInput
  }

  export type pegawaiUncheckedCreateWithoutTunjangan_transportInput = {
    id_pegawai?: number
    nip: string
    nama_pegawai: string
    email?: string | null
    nomor_hp?: string | null
    tempat_lahir?: string | null
    tanggal_lahir?: Date | string | null
    alamat?: string | null
    kecamatan?: string | null
    kabupaten?: string | null
    provinsi?: string | null
    gender: $Enums.Gender
    status_kawin?: $Enums.StatusKawin
    jumlah_anak?: number
    tanggal_masuk: Date | string
    jabatan: string
    departemen: string
    jenis_pegawai: $Enums.JenisPegawai
    foto?: string | null
    jarak_km?: number | null
    status_aktif?: boolean
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    pendidikan?: pendidikan_pegawaiUncheckedCreateNestedManyWithoutPegawaiInput
    pengguna?: penggunaUncheckedCreateNestedOneWithoutPegawaiInput
  }

  export type pegawaiCreateOrConnectWithoutTunjangan_transportInput = {
    where: pegawaiWhereUniqueInput
    create: XOR<pegawaiCreateWithoutTunjangan_transportInput, pegawaiUncheckedCreateWithoutTunjangan_transportInput>
  }

  export type pegawaiUpsertWithoutTunjangan_transportInput = {
    update: XOR<pegawaiUpdateWithoutTunjangan_transportInput, pegawaiUncheckedUpdateWithoutTunjangan_transportInput>
    create: XOR<pegawaiCreateWithoutTunjangan_transportInput, pegawaiUncheckedCreateWithoutTunjangan_transportInput>
    where?: pegawaiWhereInput
  }

  export type pegawaiUpdateToOneWithWhereWithoutTunjangan_transportInput = {
    where?: pegawaiWhereInput
    data: XOR<pegawaiUpdateWithoutTunjangan_transportInput, pegawaiUncheckedUpdateWithoutTunjangan_transportInput>
  }

  export type pegawaiUpdateWithoutTunjangan_transportInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: pendidikan_pegawaiUpdateManyWithoutPegawaiNestedInput
    pengguna?: penggunaUpdateOneWithoutPegawaiNestedInput
  }

  export type pegawaiUncheckedUpdateWithoutTunjangan_transportInput = {
    id_pegawai?: IntFieldUpdateOperationsInput | number
    nip?: StringFieldUpdateOperationsInput | string
    nama_pegawai?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_lahir?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    kabupaten?: NullableStringFieldUpdateOperationsInput | string | null
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    status_kawin?: EnumStatusKawinFieldUpdateOperationsInput | $Enums.StatusKawin
    jumlah_anak?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan?: StringFieldUpdateOperationsInput | string
    departemen?: StringFieldUpdateOperationsInput | string
    jenis_pegawai?: EnumJenisPegawaiFieldUpdateOperationsInput | $Enums.JenisPegawai
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    jarak_km?: NullableFloatFieldUpdateOperationsInput | number | null
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pendidikan?: pendidikan_pegawaiUncheckedUpdateManyWithoutPegawaiNestedInput
    pengguna?: penggunaUncheckedUpdateOneWithoutPegawaiNestedInput
  }

  export type penggunaCreateWithoutLog_aktivitasInput = {
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
    peran: peranCreateNestedOneWithoutPenggunaInput
    pegawai?: pegawaiCreateNestedOneWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateWithoutLog_aktivitasInput = {
    id_pengguna?: number
    id_pegawai?: number | null
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    id_peran: number
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
  }

  export type penggunaCreateOrConnectWithoutLog_aktivitasInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutLog_aktivitasInput, penggunaUncheckedCreateWithoutLog_aktivitasInput>
  }

  export type penggunaUpsertWithoutLog_aktivitasInput = {
    update: XOR<penggunaUpdateWithoutLog_aktivitasInput, penggunaUncheckedUpdateWithoutLog_aktivitasInput>
    create: XOR<penggunaCreateWithoutLog_aktivitasInput, penggunaUncheckedCreateWithoutLog_aktivitasInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutLog_aktivitasInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutLog_aktivitasInput, penggunaUncheckedUpdateWithoutLog_aktivitasInput>
  }

  export type penggunaUpdateWithoutLog_aktivitasInput = {
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peran?: peranUpdateOneRequiredWithoutPenggunaNestedInput
    pegawai?: pegawaiUpdateOneWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutLog_aktivitasInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    id_peran?: IntFieldUpdateOperationsInput | number
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type penggunaCreateManyPeranInput = {
    id_pengguna?: number
    id_pegawai?: number | null
    nama_pengguna: string
    username: string
    email?: string | null
    nomor_hp?: string | null
    kata_sandi: string
    status_aktif?: boolean
    foto?: string | null
    terakhir_login?: Date | string | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
    dihapus_pada?: Date | string | null
  }

  export type peran_hak_aksesCreateManyPeranInput = {
    id_hak_akses: number
  }

  export type penggunaUpdateWithoutPeranInput = {
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pegawai?: pegawaiUpdateOneWithoutPenggunaNestedInput
    log_aktivitas?: log_aktivitasUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutPeranInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    log_aktivitas?: log_aktivitasUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateManyWithoutPeranInput = {
    id_pengguna?: IntFieldUpdateOperationsInput | number
    id_pegawai?: NullableIntFieldUpdateOperationsInput | number | null
    nama_pengguna?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_hp?: NullableStringFieldUpdateOperationsInput | string | null
    kata_sandi?: StringFieldUpdateOperationsInput | string
    status_aktif?: BoolFieldUpdateOperationsInput | boolean
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    terakhir_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    dihapus_pada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type peran_hak_aksesUpdateWithoutPeranInput = {
    hak_akses?: hak_aksesUpdateOneRequiredWithoutPeran_hak_aksesNestedInput
  }

  export type peran_hak_aksesUncheckedUpdateWithoutPeranInput = {
    id_hak_akses?: IntFieldUpdateOperationsInput | number
  }

  export type peran_hak_aksesUncheckedUpdateManyWithoutPeranInput = {
    id_hak_akses?: IntFieldUpdateOperationsInput | number
  }

  export type peran_hak_aksesCreateManyHak_aksesInput = {
    id_peran: number
  }

  export type peran_hak_aksesUpdateWithoutHak_aksesInput = {
    peran?: peranUpdateOneRequiredWithoutPeran_hak_aksesNestedInput
  }

  export type peran_hak_aksesUncheckedUpdateWithoutHak_aksesInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
  }

  export type peran_hak_aksesUncheckedUpdateManyWithoutHak_aksesInput = {
    id_peran?: IntFieldUpdateOperationsInput | number
  }

  export type log_aktivitasCreateManyPenggunaInput = {
    id_log?: number
    modul: string
    aksi: $Enums.AksiLog
    keterangan?: string | null
    ip_address?: string | null
    user_agent?: string | null
    dibuat_pada?: Date | string
  }

  export type log_aktivitasUpdateWithoutPenggunaInput = {
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_aktivitasUncheckedUpdateWithoutPenggunaInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type log_aktivitasUncheckedUpdateManyWithoutPenggunaInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    modul?: StringFieldUpdateOperationsInput | string
    aksi?: EnumAksiLogFieldUpdateOperationsInput | $Enums.AksiLog
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    ip_address?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pendidikan_pegawaiCreateManyPegawaiInput = {
    id_pendidikan?: number
    jenjang: string
    institusi: string
    jurusan?: string | null
    tahun_lulus?: number | null
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type tunjangan_transportCreateManyPegawaiInput = {
    id_tunjangan?: number
    bulan: number
    tahun: number
    jarak_km: number
    hari_masuk: number
    tarif_per_km: number
    total_tunjangan: number
    dibuat_pada?: Date | string
    diperbarui_pada?: Date | string
  }

  export type pendidikan_pegawaiUpdateWithoutPegawaiInput = {
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pendidikan_pegawaiUncheckedUpdateWithoutPegawaiInput = {
    id_pendidikan?: IntFieldUpdateOperationsInput | number
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pendidikan_pegawaiUncheckedUpdateManyWithoutPegawaiInput = {
    id_pendidikan?: IntFieldUpdateOperationsInput | number
    jenjang?: StringFieldUpdateOperationsInput | string
    institusi?: StringFieldUpdateOperationsInput | string
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahun_lulus?: NullableIntFieldUpdateOperationsInput | number | null
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tunjangan_transportUpdateWithoutPegawaiInput = {
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tunjangan_transportUncheckedUpdateWithoutPegawaiInput = {
    id_tunjangan?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tunjangan_transportUncheckedUpdateManyWithoutPegawaiInput = {
    id_tunjangan?: IntFieldUpdateOperationsInput | number
    bulan?: IntFieldUpdateOperationsInput | number
    tahun?: IntFieldUpdateOperationsInput | number
    jarak_km?: FloatFieldUpdateOperationsInput | number
    hari_masuk?: IntFieldUpdateOperationsInput | number
    tarif_per_km?: FloatFieldUpdateOperationsInput | number
    total_tunjangan?: FloatFieldUpdateOperationsInput | number
    dibuat_pada?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui_pada?: DateTimeFieldUpdateOperationsInput | Date | string
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