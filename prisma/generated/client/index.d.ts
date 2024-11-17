
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
 * Model UserAssessment
 * 
 */
export type UserAssessment = $Result.DefaultSelection<Prisma.$UserAssessmentPayload>
/**
 * Model UserInfo
 * 
 */
export type UserInfo = $Result.DefaultSelection<Prisma.$UserInfoPayload>
/**
 * Model choices
 * 
 */
export type choices = $Result.DefaultSelection<Prisma.$choicesPayload>
/**
 * Model instructors
 * 
 */
export type instructors = $Result.DefaultSelection<Prisma.$instructorsPayload>
/**
 * Model module_quiz
 * 
 */
export type module_quiz = $Result.DefaultSelection<Prisma.$module_quizPayload>
/**
 * Model modules
 * 
 */
export type modules = $Result.DefaultSelection<Prisma.$modulesPayload>
/**
 * Model questions
 * 
 */
export type questions = $Result.DefaultSelection<Prisma.$questionsPayload>
/**
 * Model ratings
 * 
 */
export type ratings = $Result.DefaultSelection<Prisma.$ratingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserAssessments
 * const userAssessments = await prisma.userAssessment.findMany()
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
   * // Fetch zero or more UserAssessments
   * const userAssessments = await prisma.userAssessment.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.userAssessment`: Exposes CRUD operations for the **UserAssessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAssessments
    * const userAssessments = await prisma.userAssessment.findMany()
    * ```
    */
  get userAssessment(): Prisma.UserAssessmentDelegate<ExtArgs>;

  /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<ExtArgs>;

  /**
   * `prisma.choices`: Exposes CRUD operations for the **choices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choices.findMany()
    * ```
    */
  get choices(): Prisma.choicesDelegate<ExtArgs>;

  /**
   * `prisma.instructors`: Exposes CRUD operations for the **instructors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructors.findMany()
    * ```
    */
  get instructors(): Prisma.instructorsDelegate<ExtArgs>;

  /**
   * `prisma.module_quiz`: Exposes CRUD operations for the **module_quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Module_quizs
    * const module_quizs = await prisma.module_quiz.findMany()
    * ```
    */
  get module_quiz(): Prisma.module_quizDelegate<ExtArgs>;

  /**
   * `prisma.modules`: Exposes CRUD operations for the **modules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.modules.findMany()
    * ```
    */
  get modules(): Prisma.modulesDelegate<ExtArgs>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.questionsDelegate<ExtArgs>;

  /**
   * `prisma.ratings`: Exposes CRUD operations for the **ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.ratingsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    UserAssessment: 'UserAssessment',
    UserInfo: 'UserInfo',
    choices: 'choices',
    instructors: 'instructors',
    module_quiz: 'module_quiz',
    modules: 'modules',
    questions: 'questions',
    ratings: 'ratings'
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
      modelProps: "userAssessment" | "userInfo" | "choices" | "instructors" | "module_quiz" | "modules" | "questions" | "ratings"
      txIsolationLevel: never
    }
    model: {
      UserAssessment: {
        payload: Prisma.$UserAssessmentPayload<ExtArgs>
        fields: Prisma.UserAssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>
          }
          findFirst: {
            args: Prisma.UserAssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>
          }
          findMany: {
            args: Prisma.UserAssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>[]
          }
          create: {
            args: Prisma.UserAssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>
          }
          createMany: {
            args: Prisma.UserAssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>
          }
          update: {
            args: Prisma.UserAssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>
          }
          deleteMany: {
            args: Prisma.UserAssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPayload>
          }
          aggregate: {
            args: Prisma.UserAssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAssessment>
          }
          groupBy: {
            args: Prisma.UserAssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAssessmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserAssessmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAssessmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserAssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<UserAssessmentCountAggregateOutputType> | number
          }
        }
      }
      UserInfo: {
        payload: Prisma.$UserInfoPayload<ExtArgs>
        fields: Prisma.UserInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findFirst: {
            args: Prisma.UserInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          findMany: {
            args: Prisma.UserInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>[]
          }
          create: {
            args: Prisma.UserInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          createMany: {
            args: Prisma.UserInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          update: {
            args: Prisma.UserInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          deleteMany: {
            args: Prisma.UserInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInfoPayload>
          }
          aggregate: {
            args: Prisma.UserInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInfo>
          }
          groupBy: {
            args: Prisma.UserInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInfoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserInfoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserInfoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserInfoCountArgs<ExtArgs>
            result: $Utils.Optional<UserInfoCountAggregateOutputType> | number
          }
        }
      }
      choices: {
        payload: Prisma.$choicesPayload<ExtArgs>
        fields: Prisma.choicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.choicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.choicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>
          }
          findFirst: {
            args: Prisma.choicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.choicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>
          }
          findMany: {
            args: Prisma.choicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>[]
          }
          create: {
            args: Prisma.choicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>
          }
          createMany: {
            args: Prisma.choicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.choicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>
          }
          update: {
            args: Prisma.choicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>
          }
          deleteMany: {
            args: Prisma.choicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.choicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.choicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$choicesPayload>
          }
          aggregate: {
            args: Prisma.ChoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoices>
          }
          groupBy: {
            args: Prisma.choicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoicesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.choicesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.choicesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.choicesCountArgs<ExtArgs>
            result: $Utils.Optional<ChoicesCountAggregateOutputType> | number
          }
        }
      }
      instructors: {
        payload: Prisma.$instructorsPayload<ExtArgs>
        fields: Prisma.instructorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instructorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instructorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          findFirst: {
            args: Prisma.instructorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instructorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          findMany: {
            args: Prisma.instructorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          create: {
            args: Prisma.instructorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          createMany: {
            args: Prisma.instructorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.instructorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          update: {
            args: Prisma.instructorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          deleteMany: {
            args: Prisma.instructorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instructorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.instructorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          aggregate: {
            args: Prisma.InstructorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructors>
          }
          groupBy: {
            args: Prisma.instructorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.instructorsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.instructorsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.instructorsCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorsCountAggregateOutputType> | number
          }
        }
      }
      module_quiz: {
        payload: Prisma.$module_quizPayload<ExtArgs>
        fields: Prisma.module_quizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.module_quizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.module_quizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>
          }
          findFirst: {
            args: Prisma.module_quizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.module_quizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>
          }
          findMany: {
            args: Prisma.module_quizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>[]
          }
          create: {
            args: Prisma.module_quizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>
          }
          createMany: {
            args: Prisma.module_quizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.module_quizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>
          }
          update: {
            args: Prisma.module_quizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>
          }
          deleteMany: {
            args: Prisma.module_quizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.module_quizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.module_quizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$module_quizPayload>
          }
          aggregate: {
            args: Prisma.Module_quizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule_quiz>
          }
          groupBy: {
            args: Prisma.module_quizGroupByArgs<ExtArgs>
            result: $Utils.Optional<Module_quizGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.module_quizFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.module_quizAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.module_quizCountArgs<ExtArgs>
            result: $Utils.Optional<Module_quizCountAggregateOutputType> | number
          }
        }
      }
      modules: {
        payload: Prisma.$modulesPayload<ExtArgs>
        fields: Prisma.modulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          findFirst: {
            args: Prisma.modulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          findMany: {
            args: Prisma.modulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>[]
          }
          create: {
            args: Prisma.modulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          createMany: {
            args: Prisma.modulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.modulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          update: {
            args: Prisma.modulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          deleteMany: {
            args: Prisma.modulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.modulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulesPayload>
          }
          aggregate: {
            args: Prisma.ModulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModules>
          }
          groupBy: {
            args: Prisma.modulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModulesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.modulesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.modulesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.modulesCountArgs<ExtArgs>
            result: $Utils.Optional<ModulesCountAggregateOutputType> | number
          }
        }
      }
      questions: {
        payload: Prisma.$questionsPayload<ExtArgs>
        fields: Prisma.questionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findFirst: {
            args: Prisma.questionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          findMany: {
            args: Prisma.questionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>[]
          }
          create: {
            args: Prisma.questionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          createMany: {
            args: Prisma.questionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          update: {
            args: Prisma.questionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          deleteMany: {
            args: Prisma.questionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.questionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.questionsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.questionsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.questionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      ratings: {
        payload: Prisma.$ratingsPayload<ExtArgs>
        fields: Prisma.ratingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ratingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ratingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findFirst: {
            args: Prisma.ratingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ratingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findMany: {
            args: Prisma.ratingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          create: {
            args: Prisma.ratingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          createMany: {
            args: Prisma.ratingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ratingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          update: {
            args: Prisma.ratingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          deleteMany: {
            args: Prisma.ratingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ratingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ratingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          aggregate: {
            args: Prisma.RatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatings>
          }
          groupBy: {
            args: Prisma.ratingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ratingsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ratingsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ratingsCountArgs<ExtArgs>
            result: $Utils.Optional<RatingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Count Type UserInfoCountOutputType
   */

  export type UserInfoCountOutputType = {
    ratings: number
  }

  export type UserInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | UserInfoCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfoCountOutputType
     */
    select?: UserInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserAssessment
   */

  export type AggregateUserAssessment = {
    _count: UserAssessmentCountAggregateOutputType | null
    _min: UserAssessmentMinAggregateOutputType | null
    _max: UserAssessmentMaxAggregateOutputType | null
  }

  export type UserAssessmentMinAggregateOutputType = {
    id: string | null
    cpr: string | null
    firsAid: string | null
    pathogen: string | null
    preparedness: string | null
    teamwork: string | null
    userId: string | null
  }

  export type UserAssessmentMaxAggregateOutputType = {
    id: string | null
    cpr: string | null
    firsAid: string | null
    pathogen: string | null
    preparedness: string | null
    teamwork: string | null
    userId: string | null
  }

  export type UserAssessmentCountAggregateOutputType = {
    id: number
    cpr: number
    firsAid: number
    pathogen: number
    preparedness: number
    teamwork: number
    userId: number
    _all: number
  }


  export type UserAssessmentMinAggregateInputType = {
    id?: true
    cpr?: true
    firsAid?: true
    pathogen?: true
    preparedness?: true
    teamwork?: true
    userId?: true
  }

  export type UserAssessmentMaxAggregateInputType = {
    id?: true
    cpr?: true
    firsAid?: true
    pathogen?: true
    preparedness?: true
    teamwork?: true
    userId?: true
  }

  export type UserAssessmentCountAggregateInputType = {
    id?: true
    cpr?: true
    firsAid?: true
    pathogen?: true
    preparedness?: true
    teamwork?: true
    userId?: true
    _all?: true
  }

  export type UserAssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAssessment to aggregate.
     */
    where?: UserAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessments to fetch.
     */
    orderBy?: UserAssessmentOrderByWithRelationInput | UserAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAssessments
    **/
    _count?: true | UserAssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAssessmentMaxAggregateInputType
  }

  export type GetUserAssessmentAggregateType<T extends UserAssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAssessment[P]>
      : GetScalarType<T[P], AggregateUserAssessment[P]>
  }




  export type UserAssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAssessmentWhereInput
    orderBy?: UserAssessmentOrderByWithAggregationInput | UserAssessmentOrderByWithAggregationInput[]
    by: UserAssessmentScalarFieldEnum[] | UserAssessmentScalarFieldEnum
    having?: UserAssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAssessmentCountAggregateInputType | true
    _min?: UserAssessmentMinAggregateInputType
    _max?: UserAssessmentMaxAggregateInputType
  }

  export type UserAssessmentGroupByOutputType = {
    id: string
    cpr: string
    firsAid: string
    pathogen: string
    preparedness: string
    teamwork: string
    userId: string
    _count: UserAssessmentCountAggregateOutputType | null
    _min: UserAssessmentMinAggregateOutputType | null
    _max: UserAssessmentMaxAggregateOutputType | null
  }

  type GetUserAssessmentGroupByPayload<T extends UserAssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], UserAssessmentGroupByOutputType[P]>
        }
      >
    >


  export type UserAssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpr?: boolean
    firsAid?: boolean
    pathogen?: boolean
    preparedness?: boolean
    teamwork?: boolean
    userId?: boolean
  }, ExtArgs["result"]["userAssessment"]>


  export type UserAssessmentSelectScalar = {
    id?: boolean
    cpr?: boolean
    firsAid?: boolean
    pathogen?: boolean
    preparedness?: boolean
    teamwork?: boolean
    userId?: boolean
  }


  export type $UserAssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAssessment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpr: string
      firsAid: string
      pathogen: string
      preparedness: string
      teamwork: string
      userId: string
    }, ExtArgs["result"]["userAssessment"]>
    composites: {}
  }

  type UserAssessmentGetPayload<S extends boolean | null | undefined | UserAssessmentDefaultArgs> = $Result.GetResult<Prisma.$UserAssessmentPayload, S>

  type UserAssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAssessmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAssessmentCountAggregateInputType | true
    }

  export interface UserAssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAssessment'], meta: { name: 'UserAssessment' } }
    /**
     * Find zero or one UserAssessment that matches the filter.
     * @param {UserAssessmentFindUniqueArgs} args - Arguments to find a UserAssessment
     * @example
     * // Get one UserAssessment
     * const userAssessment = await prisma.userAssessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAssessmentFindUniqueArgs>(args: SelectSubset<T, UserAssessmentFindUniqueArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAssessment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAssessmentFindUniqueOrThrowArgs} args - Arguments to find a UserAssessment
     * @example
     * // Get one UserAssessment
     * const userAssessment = await prisma.userAssessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAssessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentFindFirstArgs} args - Arguments to find a UserAssessment
     * @example
     * // Get one UserAssessment
     * const userAssessment = await prisma.userAssessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAssessmentFindFirstArgs>(args?: SelectSubset<T, UserAssessmentFindFirstArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAssessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentFindFirstOrThrowArgs} args - Arguments to find a UserAssessment
     * @example
     * // Get one UserAssessment
     * const userAssessment = await prisma.userAssessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAssessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAssessments
     * const userAssessments = await prisma.userAssessment.findMany()
     * 
     * // Get first 10 UserAssessments
     * const userAssessments = await prisma.userAssessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAssessmentWithIdOnly = await prisma.userAssessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAssessmentFindManyArgs>(args?: SelectSubset<T, UserAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAssessment.
     * @param {UserAssessmentCreateArgs} args - Arguments to create a UserAssessment.
     * @example
     * // Create one UserAssessment
     * const UserAssessment = await prisma.userAssessment.create({
     *   data: {
     *     // ... data to create a UserAssessment
     *   }
     * })
     * 
     */
    create<T extends UserAssessmentCreateArgs>(args: SelectSubset<T, UserAssessmentCreateArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAssessments.
     * @param {UserAssessmentCreateManyArgs} args - Arguments to create many UserAssessments.
     * @example
     * // Create many UserAssessments
     * const userAssessment = await prisma.userAssessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAssessmentCreateManyArgs>(args?: SelectSubset<T, UserAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAssessment.
     * @param {UserAssessmentDeleteArgs} args - Arguments to delete one UserAssessment.
     * @example
     * // Delete one UserAssessment
     * const UserAssessment = await prisma.userAssessment.delete({
     *   where: {
     *     // ... filter to delete one UserAssessment
     *   }
     * })
     * 
     */
    delete<T extends UserAssessmentDeleteArgs>(args: SelectSubset<T, UserAssessmentDeleteArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAssessment.
     * @param {UserAssessmentUpdateArgs} args - Arguments to update one UserAssessment.
     * @example
     * // Update one UserAssessment
     * const userAssessment = await prisma.userAssessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAssessmentUpdateArgs>(args: SelectSubset<T, UserAssessmentUpdateArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAssessments.
     * @param {UserAssessmentDeleteManyArgs} args - Arguments to filter UserAssessments to delete.
     * @example
     * // Delete a few UserAssessments
     * const { count } = await prisma.userAssessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAssessmentDeleteManyArgs>(args?: SelectSubset<T, UserAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAssessments
     * const userAssessment = await prisma.userAssessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAssessmentUpdateManyArgs>(args: SelectSubset<T, UserAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAssessment.
     * @param {UserAssessmentUpsertArgs} args - Arguments to update or create a UserAssessment.
     * @example
     * // Update or create a UserAssessment
     * const userAssessment = await prisma.userAssessment.upsert({
     *   create: {
     *     // ... data to create a UserAssessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAssessment we want to update
     *   }
     * })
     */
    upsert<T extends UserAssessmentUpsertArgs>(args: SelectSubset<T, UserAssessmentUpsertArgs<ExtArgs>>): Prisma__UserAssessmentClient<$Result.GetResult<Prisma.$UserAssessmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UserAssessments that matches the filter.
     * @param {UserAssessmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAssessment = await prisma.userAssessment.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserAssessmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAssessment.
     * @param {UserAssessmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAssessment = await prisma.userAssessment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAssessmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserAssessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentCountArgs} args - Arguments to filter UserAssessments to count.
     * @example
     * // Count the number of UserAssessments
     * const count = await prisma.userAssessment.count({
     *   where: {
     *     // ... the filter for the UserAssessments we want to count
     *   }
     * })
    **/
    count<T extends UserAssessmentCountArgs>(
      args?: Subset<T, UserAssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAssessmentAggregateArgs>(args: Subset<T, UserAssessmentAggregateArgs>): Prisma.PrismaPromise<GetUserAssessmentAggregateType<T>>

    /**
     * Group by UserAssessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentGroupByArgs} args - Group by arguments.
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
      T extends UserAssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAssessmentGroupByArgs['orderBy'] }
        : { orderBy?: UserAssessmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAssessment model
   */
  readonly fields: UserAssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAssessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserAssessment model
   */ 
  interface UserAssessmentFieldRefs {
    readonly id: FieldRef<"UserAssessment", 'String'>
    readonly cpr: FieldRef<"UserAssessment", 'String'>
    readonly firsAid: FieldRef<"UserAssessment", 'String'>
    readonly pathogen: FieldRef<"UserAssessment", 'String'>
    readonly preparedness: FieldRef<"UserAssessment", 'String'>
    readonly teamwork: FieldRef<"UserAssessment", 'String'>
    readonly userId: FieldRef<"UserAssessment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserAssessment findUnique
   */
  export type UserAssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessment to fetch.
     */
    where: UserAssessmentWhereUniqueInput
  }

  /**
   * UserAssessment findUniqueOrThrow
   */
  export type UserAssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessment to fetch.
     */
    where: UserAssessmentWhereUniqueInput
  }

  /**
   * UserAssessment findFirst
   */
  export type UserAssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessment to fetch.
     */
    where?: UserAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessments to fetch.
     */
    orderBy?: UserAssessmentOrderByWithRelationInput | UserAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssessments.
     */
    cursor?: UserAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssessments.
     */
    distinct?: UserAssessmentScalarFieldEnum | UserAssessmentScalarFieldEnum[]
  }

  /**
   * UserAssessment findFirstOrThrow
   */
  export type UserAssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessment to fetch.
     */
    where?: UserAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessments to fetch.
     */
    orderBy?: UserAssessmentOrderByWithRelationInput | UserAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssessments.
     */
    cursor?: UserAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssessments.
     */
    distinct?: UserAssessmentScalarFieldEnum | UserAssessmentScalarFieldEnum[]
  }

  /**
   * UserAssessment findMany
   */
  export type UserAssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessments to fetch.
     */
    where?: UserAssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessments to fetch.
     */
    orderBy?: UserAssessmentOrderByWithRelationInput | UserAssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAssessments.
     */
    cursor?: UserAssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessments.
     */
    skip?: number
    distinct?: UserAssessmentScalarFieldEnum | UserAssessmentScalarFieldEnum[]
  }

  /**
   * UserAssessment create
   */
  export type UserAssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * The data needed to create a UserAssessment.
     */
    data: XOR<UserAssessmentCreateInput, UserAssessmentUncheckedCreateInput>
  }

  /**
   * UserAssessment createMany
   */
  export type UserAssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAssessments.
     */
    data: UserAssessmentCreateManyInput | UserAssessmentCreateManyInput[]
  }

  /**
   * UserAssessment update
   */
  export type UserAssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * The data needed to update a UserAssessment.
     */
    data: XOR<UserAssessmentUpdateInput, UserAssessmentUncheckedUpdateInput>
    /**
     * Choose, which UserAssessment to update.
     */
    where: UserAssessmentWhereUniqueInput
  }

  /**
   * UserAssessment updateMany
   */
  export type UserAssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAssessments.
     */
    data: XOR<UserAssessmentUpdateManyMutationInput, UserAssessmentUncheckedUpdateManyInput>
    /**
     * Filter which UserAssessments to update
     */
    where?: UserAssessmentWhereInput
  }

  /**
   * UserAssessment upsert
   */
  export type UserAssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * The filter to search for the UserAssessment to update in case it exists.
     */
    where: UserAssessmentWhereUniqueInput
    /**
     * In case the UserAssessment found by the `where` argument doesn't exist, create a new UserAssessment with this data.
     */
    create: XOR<UserAssessmentCreateInput, UserAssessmentUncheckedCreateInput>
    /**
     * In case the UserAssessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAssessmentUpdateInput, UserAssessmentUncheckedUpdateInput>
  }

  /**
   * UserAssessment delete
   */
  export type UserAssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
    /**
     * Filter which UserAssessment to delete.
     */
    where: UserAssessmentWhereUniqueInput
  }

  /**
   * UserAssessment deleteMany
   */
  export type UserAssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAssessments to delete
     */
    where?: UserAssessmentWhereInput
  }

  /**
   * UserAssessment findRaw
   */
  export type UserAssessmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserAssessment aggregateRaw
   */
  export type UserAssessmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserAssessment without action
   */
  export type UserAssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessment
     */
    select?: UserAssessmentSelect<ExtArgs> | null
  }


  /**
   * Model UserInfo
   */

  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoAvgAggregateOutputType = {
    v: number | null
  }

  export type UserInfoSumAggregateOutputType = {
    v: number | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: string | null
    v: number | null
    address: string | null
    category: string | null
    certificateUrl: string | null
    certificatedApproved: boolean | null
    contact: string | null
    dateCreated: Date | null
    dateEnded: string | null
    dateStarted: string | null
    email: string | null
    gender: string | null
    name: string | null
    orNumber: string | null
    password: string | null
    profilePictureUrl: string | null
    userType: string | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: string | null
    v: number | null
    address: string | null
    category: string | null
    certificateUrl: string | null
    certificatedApproved: boolean | null
    contact: string | null
    dateCreated: Date | null
    dateEnded: string | null
    dateStarted: string | null
    email: string | null
    gender: string | null
    name: string | null
    orNumber: string | null
    password: string | null
    profilePictureUrl: string | null
    userType: string | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    v: number
    address: number
    category: number
    certificateUrl: number
    certificatedApproved: number
    contact: number
    dateCreated: number
    dateEnded: number
    dateStarted: number
    email: number
    gender: number
    name: number
    orNumber: number
    password: number
    profilePictureUrl: number
    userType: number
    _all: number
  }


  export type UserInfoAvgAggregateInputType = {
    v?: true
  }

  export type UserInfoSumAggregateInputType = {
    v?: true
  }

  export type UserInfoMinAggregateInputType = {
    id?: true
    v?: true
    address?: true
    category?: true
    certificateUrl?: true
    certificatedApproved?: true
    contact?: true
    dateCreated?: true
    dateEnded?: true
    dateStarted?: true
    email?: true
    gender?: true
    name?: true
    orNumber?: true
    password?: true
    profilePictureUrl?: true
    userType?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    v?: true
    address?: true
    category?: true
    certificateUrl?: true
    certificatedApproved?: true
    contact?: true
    dateCreated?: true
    dateEnded?: true
    dateStarted?: true
    email?: true
    gender?: true
    name?: true
    orNumber?: true
    password?: true
    profilePictureUrl?: true
    userType?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    v?: true
    address?: true
    category?: true
    certificateUrl?: true
    certificatedApproved?: true
    contact?: true
    dateCreated?: true
    dateEnded?: true
    dateStarted?: true
    email?: true
    gender?: true
    name?: true
    orNumber?: true
    password?: true
    profilePictureUrl?: true
    userType?: true
    _all?: true
  }

  export type UserInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInfoWhereInput
    orderBy?: UserInfoOrderByWithAggregationInput | UserInfoOrderByWithAggregationInput[]
    by: UserInfoScalarFieldEnum[] | UserInfoScalarFieldEnum
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _avg?: UserInfoAvgAggregateInputType
    _sum?: UserInfoSumAggregateInputType
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }

  export type UserInfoGroupByOutputType = {
    id: string
    v: number
    address: string
    category: string
    certificateUrl: string
    certificatedApproved: boolean
    contact: string
    dateCreated: Date
    dateEnded: string | null
    dateStarted: string
    email: string
    gender: string
    name: string
    orNumber: string
    password: string
    profilePictureUrl: string
    userType: string
    _count: UserInfoCountAggregateOutputType | null
    _avg: UserInfoAvgAggregateOutputType | null
    _sum: UserInfoSumAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    address?: boolean
    category?: boolean
    certificateUrl?: boolean
    certificatedApproved?: boolean
    contact?: boolean
    dateCreated?: boolean
    dateEnded?: boolean
    dateStarted?: boolean
    email?: boolean
    gender?: boolean
    name?: boolean
    orNumber?: boolean
    password?: boolean
    profilePictureUrl?: boolean
    userType?: boolean
    ratings?: boolean | UserInfo$ratingsArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInfo"]>


  export type UserInfoSelectScalar = {
    id?: boolean
    v?: boolean
    address?: boolean
    category?: boolean
    certificateUrl?: boolean
    certificatedApproved?: boolean
    contact?: boolean
    dateCreated?: boolean
    dateEnded?: boolean
    dateStarted?: boolean
    email?: boolean
    gender?: boolean
    name?: boolean
    orNumber?: boolean
    password?: boolean
    profilePictureUrl?: boolean
    userType?: boolean
  }

  export type UserInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | UserInfo$ratingsArgs<ExtArgs>
    _count?: boolean | UserInfoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInfo"
    objects: {
      ratings: Prisma.$ratingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      address: string
      category: string
      certificateUrl: string
      certificatedApproved: boolean
      contact: string
      dateCreated: Date
      dateEnded: string | null
      dateStarted: string
      email: string
      gender: string
      name: string
      orNumber: string
      password: string
      profilePictureUrl: string
      userType: string
    }, ExtArgs["result"]["userInfo"]>
    composites: {}
  }

  type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoDefaultArgs> = $Result.GetResult<Prisma.$UserInfoPayload, S>

  type UserInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserInfoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInfo'], meta: { name: 'UserInfo' } }
    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInfoFindUniqueArgs>(args: SelectSubset<T, UserInfoFindUniqueArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserInfo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInfoFindFirstArgs>(args?: SelectSubset<T, UserInfoFindFirstArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInfoFindManyArgs>(args?: SelectSubset<T, UserInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
     */
    create<T extends UserInfoCreateArgs>(args: SelectSubset<T, UserInfoCreateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserInfos.
     * @param {UserInfoCreateManyArgs} args - Arguments to create many UserInfos.
     * @example
     * // Create many UserInfos
     * const userInfo = await prisma.userInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInfoCreateManyArgs>(args?: SelectSubset<T, UserInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
     */
    delete<T extends UserInfoDeleteArgs>(args: SelectSubset<T, UserInfoDeleteArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInfoUpdateArgs>(args: SelectSubset<T, UserInfoUpdateArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInfoDeleteManyArgs>(args?: SelectSubset<T, UserInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInfoUpdateManyArgs>(args: SelectSubset<T, UserInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
     */
    upsert<T extends UserInfoUpsertArgs>(args: SelectSubset<T, UserInfoUpsertArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more UserInfos that matches the filter.
     * @param {UserInfoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userInfo = await prisma.userInfo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserInfoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserInfo.
     * @param {UserInfoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userInfo = await prisma.userInfo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserInfoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInfo model
   */
  readonly fields: UserInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ratings<T extends UserInfo$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, UserInfo$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserInfo model
   */ 
  interface UserInfoFieldRefs {
    readonly id: FieldRef<"UserInfo", 'String'>
    readonly v: FieldRef<"UserInfo", 'Int'>
    readonly address: FieldRef<"UserInfo", 'String'>
    readonly category: FieldRef<"UserInfo", 'String'>
    readonly certificateUrl: FieldRef<"UserInfo", 'String'>
    readonly certificatedApproved: FieldRef<"UserInfo", 'Boolean'>
    readonly contact: FieldRef<"UserInfo", 'String'>
    readonly dateCreated: FieldRef<"UserInfo", 'DateTime'>
    readonly dateEnded: FieldRef<"UserInfo", 'String'>
    readonly dateStarted: FieldRef<"UserInfo", 'String'>
    readonly email: FieldRef<"UserInfo", 'String'>
    readonly gender: FieldRef<"UserInfo", 'String'>
    readonly name: FieldRef<"UserInfo", 'String'>
    readonly orNumber: FieldRef<"UserInfo", 'String'>
    readonly password: FieldRef<"UserInfo", 'String'>
    readonly profilePictureUrl: FieldRef<"UserInfo", 'String'>
    readonly userType: FieldRef<"UserInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserInfo findUnique
   */
  export type UserInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findFirst
   */
  export type UserInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: UserInfoOrderByWithRelationInput | UserInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: UserInfoScalarFieldEnum | UserInfoScalarFieldEnum[]
  }

  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }

  /**
   * UserInfo createMany
   */
  export type UserInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInfos.
     */
    data: UserInfoCreateManyInput | UserInfoCreateManyInput[]
  }

  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
  }

  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }

  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
  }

  /**
   * UserInfo findRaw
   */
  export type UserInfoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserInfo aggregateRaw
   */
  export type UserInfoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserInfo.ratings
   */
  export type UserInfo$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    cursor?: ratingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * UserInfo without action
   */
  export type UserInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
  }


  /**
   * Model choices
   */

  export type AggregateChoices = {
    _count: ChoicesCountAggregateOutputType | null
    _avg: ChoicesAvgAggregateOutputType | null
    _sum: ChoicesSumAggregateOutputType | null
    _min: ChoicesMinAggregateOutputType | null
    _max: ChoicesMaxAggregateOutputType | null
  }

  export type ChoicesAvgAggregateOutputType = {
    v: number | null
  }

  export type ChoicesSumAggregateOutputType = {
    v: number | null
  }

  export type ChoicesMinAggregateOutputType = {
    id: string | null
    v: number | null
    isCorrect: boolean | null
    question_id: string | null
    text: string | null
  }

  export type ChoicesMaxAggregateOutputType = {
    id: string | null
    v: number | null
    isCorrect: boolean | null
    question_id: string | null
    text: string | null
  }

  export type ChoicesCountAggregateOutputType = {
    id: number
    v: number
    isCorrect: number
    question_id: number
    text: number
    _all: number
  }


  export type ChoicesAvgAggregateInputType = {
    v?: true
  }

  export type ChoicesSumAggregateInputType = {
    v?: true
  }

  export type ChoicesMinAggregateInputType = {
    id?: true
    v?: true
    isCorrect?: true
    question_id?: true
    text?: true
  }

  export type ChoicesMaxAggregateInputType = {
    id?: true
    v?: true
    isCorrect?: true
    question_id?: true
    text?: true
  }

  export type ChoicesCountAggregateInputType = {
    id?: true
    v?: true
    isCorrect?: true
    question_id?: true
    text?: true
    _all?: true
  }

  export type ChoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which choices to aggregate.
     */
    where?: choicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choicesOrderByWithRelationInput | choicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: choicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned choices
    **/
    _count?: true | ChoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoicesMaxAggregateInputType
  }

  export type GetChoicesAggregateType<T extends ChoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateChoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoices[P]>
      : GetScalarType<T[P], AggregateChoices[P]>
  }




  export type choicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: choicesWhereInput
    orderBy?: choicesOrderByWithAggregationInput | choicesOrderByWithAggregationInput[]
    by: ChoicesScalarFieldEnum[] | ChoicesScalarFieldEnum
    having?: choicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoicesCountAggregateInputType | true
    _avg?: ChoicesAvgAggregateInputType
    _sum?: ChoicesSumAggregateInputType
    _min?: ChoicesMinAggregateInputType
    _max?: ChoicesMaxAggregateInputType
  }

  export type ChoicesGroupByOutputType = {
    id: string
    v: number
    isCorrect: boolean
    question_id: string
    text: string
    _count: ChoicesCountAggregateOutputType | null
    _avg: ChoicesAvgAggregateOutputType | null
    _sum: ChoicesSumAggregateOutputType | null
    _min: ChoicesMinAggregateOutputType | null
    _max: ChoicesMaxAggregateOutputType | null
  }

  type GetChoicesGroupByPayload<T extends choicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoicesGroupByOutputType[P]>
            : GetScalarType<T[P], ChoicesGroupByOutputType[P]>
        }
      >
    >


  export type choicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    isCorrect?: boolean
    question_id?: boolean
    text?: boolean
  }, ExtArgs["result"]["choices"]>


  export type choicesSelectScalar = {
    id?: boolean
    v?: boolean
    isCorrect?: boolean
    question_id?: boolean
    text?: boolean
  }


  export type $choicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "choices"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      isCorrect: boolean
      question_id: string
      text: string
    }, ExtArgs["result"]["choices"]>
    composites: {}
  }

  type choicesGetPayload<S extends boolean | null | undefined | choicesDefaultArgs> = $Result.GetResult<Prisma.$choicesPayload, S>

  type choicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<choicesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChoicesCountAggregateInputType | true
    }

  export interface choicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['choices'], meta: { name: 'choices' } }
    /**
     * Find zero or one Choices that matches the filter.
     * @param {choicesFindUniqueArgs} args - Arguments to find a Choices
     * @example
     * // Get one Choices
     * const choices = await prisma.choices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends choicesFindUniqueArgs>(args: SelectSubset<T, choicesFindUniqueArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Choices that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {choicesFindUniqueOrThrowArgs} args - Arguments to find a Choices
     * @example
     * // Get one Choices
     * const choices = await prisma.choices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends choicesFindUniqueOrThrowArgs>(args: SelectSubset<T, choicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choicesFindFirstArgs} args - Arguments to find a Choices
     * @example
     * // Get one Choices
     * const choices = await prisma.choices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends choicesFindFirstArgs>(args?: SelectSubset<T, choicesFindFirstArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Choices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choicesFindFirstOrThrowArgs} args - Arguments to find a Choices
     * @example
     * // Get one Choices
     * const choices = await prisma.choices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends choicesFindFirstOrThrowArgs>(args?: SelectSubset<T, choicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choices.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choicesWithIdOnly = await prisma.choices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends choicesFindManyArgs>(args?: SelectSubset<T, choicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Choices.
     * @param {choicesCreateArgs} args - Arguments to create a Choices.
     * @example
     * // Create one Choices
     * const Choices = await prisma.choices.create({
     *   data: {
     *     // ... data to create a Choices
     *   }
     * })
     * 
     */
    create<T extends choicesCreateArgs>(args: SelectSubset<T, choicesCreateArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Choices.
     * @param {choicesCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choices = await prisma.choices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends choicesCreateManyArgs>(args?: SelectSubset<T, choicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Choices.
     * @param {choicesDeleteArgs} args - Arguments to delete one Choices.
     * @example
     * // Delete one Choices
     * const Choices = await prisma.choices.delete({
     *   where: {
     *     // ... filter to delete one Choices
     *   }
     * })
     * 
     */
    delete<T extends choicesDeleteArgs>(args: SelectSubset<T, choicesDeleteArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Choices.
     * @param {choicesUpdateArgs} args - Arguments to update one Choices.
     * @example
     * // Update one Choices
     * const choices = await prisma.choices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends choicesUpdateArgs>(args: SelectSubset<T, choicesUpdateArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Choices.
     * @param {choicesDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends choicesDeleteManyArgs>(args?: SelectSubset<T, choicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choices = await prisma.choices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends choicesUpdateManyArgs>(args: SelectSubset<T, choicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choices.
     * @param {choicesUpsertArgs} args - Arguments to update or create a Choices.
     * @example
     * // Update or create a Choices
     * const choices = await prisma.choices.upsert({
     *   create: {
     *     // ... data to create a Choices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choices we want to update
     *   }
     * })
     */
    upsert<T extends choicesUpsertArgs>(args: SelectSubset<T, choicesUpsertArgs<ExtArgs>>): Prisma__choicesClient<$Result.GetResult<Prisma.$choicesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Choices that matches the filter.
     * @param {choicesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const choices = await prisma.choices.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: choicesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Choices.
     * @param {choicesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const choices = await prisma.choices.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: choicesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choicesCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choices.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends choicesCountArgs>(
      args?: Subset<T, choicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoicesAggregateArgs>(args: Subset<T, ChoicesAggregateArgs>): Prisma.PrismaPromise<GetChoicesAggregateType<T>>

    /**
     * Group by Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {choicesGroupByArgs} args - Group by arguments.
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
      T extends choicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: choicesGroupByArgs['orderBy'] }
        : { orderBy?: choicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, choicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the choices model
   */
  readonly fields: choicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for choices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__choicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the choices model
   */ 
  interface choicesFieldRefs {
    readonly id: FieldRef<"choices", 'String'>
    readonly v: FieldRef<"choices", 'Int'>
    readonly isCorrect: FieldRef<"choices", 'Boolean'>
    readonly question_id: FieldRef<"choices", 'String'>
    readonly text: FieldRef<"choices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * choices findUnique
   */
  export type choicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where: choicesWhereUniqueInput
  }

  /**
   * choices findUniqueOrThrow
   */
  export type choicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where: choicesWhereUniqueInput
  }

  /**
   * choices findFirst
   */
  export type choicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where?: choicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choicesOrderByWithRelationInput | choicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for choices.
     */
    cursor?: choicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of choices.
     */
    distinct?: ChoicesScalarFieldEnum | ChoicesScalarFieldEnum[]
  }

  /**
   * choices findFirstOrThrow
   */
  export type choicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where?: choicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choicesOrderByWithRelationInput | choicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for choices.
     */
    cursor?: choicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of choices.
     */
    distinct?: ChoicesScalarFieldEnum | ChoicesScalarFieldEnum[]
  }

  /**
   * choices findMany
   */
  export type choicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * Filter, which choices to fetch.
     */
    where?: choicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of choices to fetch.
     */
    orderBy?: choicesOrderByWithRelationInput | choicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing choices.
     */
    cursor?: choicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` choices.
     */
    skip?: number
    distinct?: ChoicesScalarFieldEnum | ChoicesScalarFieldEnum[]
  }

  /**
   * choices create
   */
  export type choicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * The data needed to create a choices.
     */
    data: XOR<choicesCreateInput, choicesUncheckedCreateInput>
  }

  /**
   * choices createMany
   */
  export type choicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many choices.
     */
    data: choicesCreateManyInput | choicesCreateManyInput[]
  }

  /**
   * choices update
   */
  export type choicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * The data needed to update a choices.
     */
    data: XOR<choicesUpdateInput, choicesUncheckedUpdateInput>
    /**
     * Choose, which choices to update.
     */
    where: choicesWhereUniqueInput
  }

  /**
   * choices updateMany
   */
  export type choicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update choices.
     */
    data: XOR<choicesUpdateManyMutationInput, choicesUncheckedUpdateManyInput>
    /**
     * Filter which choices to update
     */
    where?: choicesWhereInput
  }

  /**
   * choices upsert
   */
  export type choicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * The filter to search for the choices to update in case it exists.
     */
    where: choicesWhereUniqueInput
    /**
     * In case the choices found by the `where` argument doesn't exist, create a new choices with this data.
     */
    create: XOR<choicesCreateInput, choicesUncheckedCreateInput>
    /**
     * In case the choices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<choicesUpdateInput, choicesUncheckedUpdateInput>
  }

  /**
   * choices delete
   */
  export type choicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
    /**
     * Filter which choices to delete.
     */
    where: choicesWhereUniqueInput
  }

  /**
   * choices deleteMany
   */
  export type choicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which choices to delete
     */
    where?: choicesWhereInput
  }

  /**
   * choices findRaw
   */
  export type choicesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * choices aggregateRaw
   */
  export type choicesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * choices without action
   */
  export type choicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the choices
     */
    select?: choicesSelect<ExtArgs> | null
  }


  /**
   * Model instructors
   */

  export type AggregateInstructors = {
    _count: InstructorsCountAggregateOutputType | null
    _avg: InstructorsAvgAggregateOutputType | null
    _sum: InstructorsSumAggregateOutputType | null
    _min: InstructorsMinAggregateOutputType | null
    _max: InstructorsMaxAggregateOutputType | null
  }

  export type InstructorsAvgAggregateOutputType = {
    v: number | null
  }

  export type InstructorsSumAggregateOutputType = {
    v: number | null
  }

  export type InstructorsMinAggregateOutputType = {
    id: string | null
    v: number | null
    address: string | null
    contact: string | null
    createdAt: Date | null
    email: string | null
    field: string | null
    gender: string | null
    name: string | null
    profilePicture: string | null
    updatedAt: Date | null
  }

  export type InstructorsMaxAggregateOutputType = {
    id: string | null
    v: number | null
    address: string | null
    contact: string | null
    createdAt: Date | null
    email: string | null
    field: string | null
    gender: string | null
    name: string | null
    profilePicture: string | null
    updatedAt: Date | null
  }

  export type InstructorsCountAggregateOutputType = {
    id: number
    v: number
    address: number
    contact: number
    createdAt: number
    email: number
    field: number
    gender: number
    name: number
    profilePicture: number
    updatedAt: number
    _all: number
  }


  export type InstructorsAvgAggregateInputType = {
    v?: true
  }

  export type InstructorsSumAggregateInputType = {
    v?: true
  }

  export type InstructorsMinAggregateInputType = {
    id?: true
    v?: true
    address?: true
    contact?: true
    createdAt?: true
    email?: true
    field?: true
    gender?: true
    name?: true
    profilePicture?: true
    updatedAt?: true
  }

  export type InstructorsMaxAggregateInputType = {
    id?: true
    v?: true
    address?: true
    contact?: true
    createdAt?: true
    email?: true
    field?: true
    gender?: true
    name?: true
    profilePicture?: true
    updatedAt?: true
  }

  export type InstructorsCountAggregateInputType = {
    id?: true
    v?: true
    address?: true
    contact?: true
    createdAt?: true
    email?: true
    field?: true
    gender?: true
    name?: true
    profilePicture?: true
    updatedAt?: true
    _all?: true
  }

  export type InstructorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instructors to aggregate.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instructors
    **/
    _count?: true | InstructorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorsMaxAggregateInputType
  }

  export type GetInstructorsAggregateType<T extends InstructorsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructors[P]>
      : GetScalarType<T[P], AggregateInstructors[P]>
  }




  export type instructorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instructorsWhereInput
    orderBy?: instructorsOrderByWithAggregationInput | instructorsOrderByWithAggregationInput[]
    by: InstructorsScalarFieldEnum[] | InstructorsScalarFieldEnum
    having?: instructorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorsCountAggregateInputType | true
    _avg?: InstructorsAvgAggregateInputType
    _sum?: InstructorsSumAggregateInputType
    _min?: InstructorsMinAggregateInputType
    _max?: InstructorsMaxAggregateInputType
  }

  export type InstructorsGroupByOutputType = {
    id: string
    v: number
    address: string
    contact: string
    createdAt: Date
    email: string
    field: string
    gender: string
    name: string
    profilePicture: string
    updatedAt: Date
    _count: InstructorsCountAggregateOutputType | null
    _avg: InstructorsAvgAggregateOutputType | null
    _sum: InstructorsSumAggregateOutputType | null
    _min: InstructorsMinAggregateOutputType | null
    _max: InstructorsMaxAggregateOutputType | null
  }

  type GetInstructorsGroupByPayload<T extends instructorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorsGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorsGroupByOutputType[P]>
        }
      >
    >


  export type instructorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    address?: boolean
    contact?: boolean
    createdAt?: boolean
    email?: boolean
    field?: boolean
    gender?: boolean
    name?: boolean
    profilePicture?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instructors"]>


  export type instructorsSelectScalar = {
    id?: boolean
    v?: boolean
    address?: boolean
    contact?: boolean
    createdAt?: boolean
    email?: boolean
    field?: boolean
    gender?: boolean
    name?: boolean
    profilePicture?: boolean
    updatedAt?: boolean
  }


  export type $instructorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instructors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      address: string
      contact: string
      createdAt: Date
      email: string
      field: string
      gender: string
      name: string
      profilePicture: string
      updatedAt: Date
    }, ExtArgs["result"]["instructors"]>
    composites: {}
  }

  type instructorsGetPayload<S extends boolean | null | undefined | instructorsDefaultArgs> = $Result.GetResult<Prisma.$instructorsPayload, S>

  type instructorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<instructorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InstructorsCountAggregateInputType | true
    }

  export interface instructorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instructors'], meta: { name: 'instructors' } }
    /**
     * Find zero or one Instructors that matches the filter.
     * @param {instructorsFindUniqueArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instructorsFindUniqueArgs>(args: SelectSubset<T, instructorsFindUniqueArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Instructors that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {instructorsFindUniqueOrThrowArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instructorsFindUniqueOrThrowArgs>(args: SelectSubset<T, instructorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindFirstArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instructorsFindFirstArgs>(args?: SelectSubset<T, instructorsFindFirstArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Instructors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindFirstOrThrowArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instructorsFindFirstOrThrowArgs>(args?: SelectSubset<T, instructorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructors.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorsWithIdOnly = await prisma.instructors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends instructorsFindManyArgs>(args?: SelectSubset<T, instructorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Instructors.
     * @param {instructorsCreateArgs} args - Arguments to create a Instructors.
     * @example
     * // Create one Instructors
     * const Instructors = await prisma.instructors.create({
     *   data: {
     *     // ... data to create a Instructors
     *   }
     * })
     * 
     */
    create<T extends instructorsCreateArgs>(args: SelectSubset<T, instructorsCreateArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Instructors.
     * @param {instructorsCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructors = await prisma.instructors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instructorsCreateManyArgs>(args?: SelectSubset<T, instructorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Instructors.
     * @param {instructorsDeleteArgs} args - Arguments to delete one Instructors.
     * @example
     * // Delete one Instructors
     * const Instructors = await prisma.instructors.delete({
     *   where: {
     *     // ... filter to delete one Instructors
     *   }
     * })
     * 
     */
    delete<T extends instructorsDeleteArgs>(args: SelectSubset<T, instructorsDeleteArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Instructors.
     * @param {instructorsUpdateArgs} args - Arguments to update one Instructors.
     * @example
     * // Update one Instructors
     * const instructors = await prisma.instructors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instructorsUpdateArgs>(args: SelectSubset<T, instructorsUpdateArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Instructors.
     * @param {instructorsDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instructorsDeleteManyArgs>(args?: SelectSubset<T, instructorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructors = await prisma.instructors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instructorsUpdateManyArgs>(args: SelectSubset<T, instructorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Instructors.
     * @param {instructorsUpsertArgs} args - Arguments to update or create a Instructors.
     * @example
     * // Update or create a Instructors
     * const instructors = await prisma.instructors.upsert({
     *   create: {
     *     // ... data to create a Instructors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructors we want to update
     *   }
     * })
     */
    upsert<T extends instructorsUpsertArgs>(args: SelectSubset<T, instructorsUpsertArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Instructors that matches the filter.
     * @param {instructorsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const instructors = await prisma.instructors.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: instructorsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Instructors.
     * @param {instructorsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const instructors = await prisma.instructors.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: instructorsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructors.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends instructorsCountArgs>(
      args?: Subset<T, instructorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorsAggregateArgs>(args: Subset<T, InstructorsAggregateArgs>): Prisma.PrismaPromise<GetInstructorsAggregateType<T>>

    /**
     * Group by Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsGroupByArgs} args - Group by arguments.
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
      T extends instructorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instructorsGroupByArgs['orderBy'] }
        : { orderBy?: instructorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, instructorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instructors model
   */
  readonly fields: instructorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instructors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instructorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the instructors model
   */ 
  interface instructorsFieldRefs {
    readonly id: FieldRef<"instructors", 'String'>
    readonly v: FieldRef<"instructors", 'Int'>
    readonly address: FieldRef<"instructors", 'String'>
    readonly contact: FieldRef<"instructors", 'String'>
    readonly createdAt: FieldRef<"instructors", 'DateTime'>
    readonly email: FieldRef<"instructors", 'String'>
    readonly field: FieldRef<"instructors", 'String'>
    readonly gender: FieldRef<"instructors", 'String'>
    readonly name: FieldRef<"instructors", 'String'>
    readonly profilePicture: FieldRef<"instructors", 'String'>
    readonly updatedAt: FieldRef<"instructors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * instructors findUnique
   */
  export type instructorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors findUniqueOrThrow
   */
  export type instructorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors findFirst
   */
  export type instructorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instructors.
     */
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors findFirstOrThrow
   */
  export type instructorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instructors.
     */
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors findMany
   */
  export type instructorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors create
   */
  export type instructorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * The data needed to create a instructors.
     */
    data: XOR<instructorsCreateInput, instructorsUncheckedCreateInput>
  }

  /**
   * instructors createMany
   */
  export type instructorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instructors.
     */
    data: instructorsCreateManyInput | instructorsCreateManyInput[]
  }

  /**
   * instructors update
   */
  export type instructorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * The data needed to update a instructors.
     */
    data: XOR<instructorsUpdateInput, instructorsUncheckedUpdateInput>
    /**
     * Choose, which instructors to update.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors updateMany
   */
  export type instructorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instructors.
     */
    data: XOR<instructorsUpdateManyMutationInput, instructorsUncheckedUpdateManyInput>
    /**
     * Filter which instructors to update
     */
    where?: instructorsWhereInput
  }

  /**
   * instructors upsert
   */
  export type instructorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * The filter to search for the instructors to update in case it exists.
     */
    where: instructorsWhereUniqueInput
    /**
     * In case the instructors found by the `where` argument doesn't exist, create a new instructors with this data.
     */
    create: XOR<instructorsCreateInput, instructorsUncheckedCreateInput>
    /**
     * In case the instructors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instructorsUpdateInput, instructorsUncheckedUpdateInput>
  }

  /**
   * instructors delete
   */
  export type instructorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Filter which instructors to delete.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors deleteMany
   */
  export type instructorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instructors to delete
     */
    where?: instructorsWhereInput
  }

  /**
   * instructors findRaw
   */
  export type instructorsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * instructors aggregateRaw
   */
  export type instructorsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * instructors without action
   */
  export type instructorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
  }


  /**
   * Model module_quiz
   */

  export type AggregateModule_quiz = {
    _count: Module_quizCountAggregateOutputType | null
    _avg: Module_quizAvgAggregateOutputType | null
    _sum: Module_quizSumAggregateOutputType | null
    _min: Module_quizMinAggregateOutputType | null
    _max: Module_quizMaxAggregateOutputType | null
  }

  export type Module_quizAvgAggregateOutputType = {
    v: number | null
    total_score: number | null
  }

  export type Module_quizSumAggregateOutputType = {
    v: number | null
    total_score: number | null
  }

  export type Module_quizMinAggregateOutputType = {
    id: string | null
    v: number | null
    module_name: string | null
    total_score: number | null
    user_id: string | null
  }

  export type Module_quizMaxAggregateOutputType = {
    id: string | null
    v: number | null
    module_name: string | null
    total_score: number | null
    user_id: string | null
  }

  export type Module_quizCountAggregateOutputType = {
    id: number
    v: number
    module_name: number
    questions: number
    total_score: number
    user_id: number
    _all: number
  }


  export type Module_quizAvgAggregateInputType = {
    v?: true
    total_score?: true
  }

  export type Module_quizSumAggregateInputType = {
    v?: true
    total_score?: true
  }

  export type Module_quizMinAggregateInputType = {
    id?: true
    v?: true
    module_name?: true
    total_score?: true
    user_id?: true
  }

  export type Module_quizMaxAggregateInputType = {
    id?: true
    v?: true
    module_name?: true
    total_score?: true
    user_id?: true
  }

  export type Module_quizCountAggregateInputType = {
    id?: true
    v?: true
    module_name?: true
    questions?: true
    total_score?: true
    user_id?: true
    _all?: true
  }

  export type Module_quizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module_quiz to aggregate.
     */
    where?: module_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_quizs to fetch.
     */
    orderBy?: module_quizOrderByWithRelationInput | module_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: module_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned module_quizs
    **/
    _count?: true | Module_quizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Module_quizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Module_quizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Module_quizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Module_quizMaxAggregateInputType
  }

  export type GetModule_quizAggregateType<T extends Module_quizAggregateArgs> = {
        [P in keyof T & keyof AggregateModule_quiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule_quiz[P]>
      : GetScalarType<T[P], AggregateModule_quiz[P]>
  }




  export type module_quizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: module_quizWhereInput
    orderBy?: module_quizOrderByWithAggregationInput | module_quizOrderByWithAggregationInput[]
    by: Module_quizScalarFieldEnum[] | Module_quizScalarFieldEnum
    having?: module_quizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Module_quizCountAggregateInputType | true
    _avg?: Module_quizAvgAggregateInputType
    _sum?: Module_quizSumAggregateInputType
    _min?: Module_quizMinAggregateInputType
    _max?: Module_quizMaxAggregateInputType
  }

  export type Module_quizGroupByOutputType = {
    id: string
    v: number
    module_name: string
    questions: string[]
    total_score: number
    user_id: string
    _count: Module_quizCountAggregateOutputType | null
    _avg: Module_quizAvgAggregateOutputType | null
    _sum: Module_quizSumAggregateOutputType | null
    _min: Module_quizMinAggregateOutputType | null
    _max: Module_quizMaxAggregateOutputType | null
  }

  type GetModule_quizGroupByPayload<T extends module_quizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Module_quizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Module_quizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Module_quizGroupByOutputType[P]>
            : GetScalarType<T[P], Module_quizGroupByOutputType[P]>
        }
      >
    >


  export type module_quizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    module_name?: boolean
    questions?: boolean
    total_score?: boolean
    user_id?: boolean
  }, ExtArgs["result"]["module_quiz"]>


  export type module_quizSelectScalar = {
    id?: boolean
    v?: boolean
    module_name?: boolean
    questions?: boolean
    total_score?: boolean
    user_id?: boolean
  }


  export type $module_quizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module_quiz"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      module_name: string
      questions: string[]
      total_score: number
      user_id: string
    }, ExtArgs["result"]["module_quiz"]>
    composites: {}
  }

  type module_quizGetPayload<S extends boolean | null | undefined | module_quizDefaultArgs> = $Result.GetResult<Prisma.$module_quizPayload, S>

  type module_quizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<module_quizFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Module_quizCountAggregateInputType | true
    }

  export interface module_quizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module_quiz'], meta: { name: 'module_quiz' } }
    /**
     * Find zero or one Module_quiz that matches the filter.
     * @param {module_quizFindUniqueArgs} args - Arguments to find a Module_quiz
     * @example
     * // Get one Module_quiz
     * const module_quiz = await prisma.module_quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends module_quizFindUniqueArgs>(args: SelectSubset<T, module_quizFindUniqueArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Module_quiz that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {module_quizFindUniqueOrThrowArgs} args - Arguments to find a Module_quiz
     * @example
     * // Get one Module_quiz
     * const module_quiz = await prisma.module_quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends module_quizFindUniqueOrThrowArgs>(args: SelectSubset<T, module_quizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Module_quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_quizFindFirstArgs} args - Arguments to find a Module_quiz
     * @example
     * // Get one Module_quiz
     * const module_quiz = await prisma.module_quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends module_quizFindFirstArgs>(args?: SelectSubset<T, module_quizFindFirstArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Module_quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_quizFindFirstOrThrowArgs} args - Arguments to find a Module_quiz
     * @example
     * // Get one Module_quiz
     * const module_quiz = await prisma.module_quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends module_quizFindFirstOrThrowArgs>(args?: SelectSubset<T, module_quizFindFirstOrThrowArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Module_quizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_quizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Module_quizs
     * const module_quizs = await prisma.module_quiz.findMany()
     * 
     * // Get first 10 Module_quizs
     * const module_quizs = await prisma.module_quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const module_quizWithIdOnly = await prisma.module_quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends module_quizFindManyArgs>(args?: SelectSubset<T, module_quizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Module_quiz.
     * @param {module_quizCreateArgs} args - Arguments to create a Module_quiz.
     * @example
     * // Create one Module_quiz
     * const Module_quiz = await prisma.module_quiz.create({
     *   data: {
     *     // ... data to create a Module_quiz
     *   }
     * })
     * 
     */
    create<T extends module_quizCreateArgs>(args: SelectSubset<T, module_quizCreateArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Module_quizs.
     * @param {module_quizCreateManyArgs} args - Arguments to create many Module_quizs.
     * @example
     * // Create many Module_quizs
     * const module_quiz = await prisma.module_quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends module_quizCreateManyArgs>(args?: SelectSubset<T, module_quizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module_quiz.
     * @param {module_quizDeleteArgs} args - Arguments to delete one Module_quiz.
     * @example
     * // Delete one Module_quiz
     * const Module_quiz = await prisma.module_quiz.delete({
     *   where: {
     *     // ... filter to delete one Module_quiz
     *   }
     * })
     * 
     */
    delete<T extends module_quizDeleteArgs>(args: SelectSubset<T, module_quizDeleteArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Module_quiz.
     * @param {module_quizUpdateArgs} args - Arguments to update one Module_quiz.
     * @example
     * // Update one Module_quiz
     * const module_quiz = await prisma.module_quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends module_quizUpdateArgs>(args: SelectSubset<T, module_quizUpdateArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Module_quizs.
     * @param {module_quizDeleteManyArgs} args - Arguments to filter Module_quizs to delete.
     * @example
     * // Delete a few Module_quizs
     * const { count } = await prisma.module_quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends module_quizDeleteManyArgs>(args?: SelectSubset<T, module_quizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Module_quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_quizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Module_quizs
     * const module_quiz = await prisma.module_quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends module_quizUpdateManyArgs>(args: SelectSubset<T, module_quizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module_quiz.
     * @param {module_quizUpsertArgs} args - Arguments to update or create a Module_quiz.
     * @example
     * // Update or create a Module_quiz
     * const module_quiz = await prisma.module_quiz.upsert({
     *   create: {
     *     // ... data to create a Module_quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module_quiz we want to update
     *   }
     * })
     */
    upsert<T extends module_quizUpsertArgs>(args: SelectSubset<T, module_quizUpsertArgs<ExtArgs>>): Prisma__module_quizClient<$Result.GetResult<Prisma.$module_quizPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Module_quizs that matches the filter.
     * @param {module_quizFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const module_quiz = await prisma.module_quiz.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: module_quizFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Module_quiz.
     * @param {module_quizAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const module_quiz = await prisma.module_quiz.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: module_quizAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Module_quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_quizCountArgs} args - Arguments to filter Module_quizs to count.
     * @example
     * // Count the number of Module_quizs
     * const count = await prisma.module_quiz.count({
     *   where: {
     *     // ... the filter for the Module_quizs we want to count
     *   }
     * })
    **/
    count<T extends module_quizCountArgs>(
      args?: Subset<T, module_quizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Module_quizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module_quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Module_quizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Module_quizAggregateArgs>(args: Subset<T, Module_quizAggregateArgs>): Prisma.PrismaPromise<GetModule_quizAggregateType<T>>

    /**
     * Group by Module_quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_quizGroupByArgs} args - Group by arguments.
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
      T extends module_quizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: module_quizGroupByArgs['orderBy'] }
        : { orderBy?: module_quizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, module_quizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModule_quizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module_quiz model
   */
  readonly fields: module_quizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module_quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__module_quizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the module_quiz model
   */ 
  interface module_quizFieldRefs {
    readonly id: FieldRef<"module_quiz", 'String'>
    readonly v: FieldRef<"module_quiz", 'Int'>
    readonly module_name: FieldRef<"module_quiz", 'String'>
    readonly questions: FieldRef<"module_quiz", 'String[]'>
    readonly total_score: FieldRef<"module_quiz", 'Int'>
    readonly user_id: FieldRef<"module_quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * module_quiz findUnique
   */
  export type module_quizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * Filter, which module_quiz to fetch.
     */
    where: module_quizWhereUniqueInput
  }

  /**
   * module_quiz findUniqueOrThrow
   */
  export type module_quizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * Filter, which module_quiz to fetch.
     */
    where: module_quizWhereUniqueInput
  }

  /**
   * module_quiz findFirst
   */
  export type module_quizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * Filter, which module_quiz to fetch.
     */
    where?: module_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_quizs to fetch.
     */
    orderBy?: module_quizOrderByWithRelationInput | module_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for module_quizs.
     */
    cursor?: module_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of module_quizs.
     */
    distinct?: Module_quizScalarFieldEnum | Module_quizScalarFieldEnum[]
  }

  /**
   * module_quiz findFirstOrThrow
   */
  export type module_quizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * Filter, which module_quiz to fetch.
     */
    where?: module_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_quizs to fetch.
     */
    orderBy?: module_quizOrderByWithRelationInput | module_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for module_quizs.
     */
    cursor?: module_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of module_quizs.
     */
    distinct?: Module_quizScalarFieldEnum | Module_quizScalarFieldEnum[]
  }

  /**
   * module_quiz findMany
   */
  export type module_quizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * Filter, which module_quizs to fetch.
     */
    where?: module_quizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_quizs to fetch.
     */
    orderBy?: module_quizOrderByWithRelationInput | module_quizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing module_quizs.
     */
    cursor?: module_quizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_quizs.
     */
    skip?: number
    distinct?: Module_quizScalarFieldEnum | Module_quizScalarFieldEnum[]
  }

  /**
   * module_quiz create
   */
  export type module_quizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * The data needed to create a module_quiz.
     */
    data: XOR<module_quizCreateInput, module_quizUncheckedCreateInput>
  }

  /**
   * module_quiz createMany
   */
  export type module_quizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many module_quizs.
     */
    data: module_quizCreateManyInput | module_quizCreateManyInput[]
  }

  /**
   * module_quiz update
   */
  export type module_quizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * The data needed to update a module_quiz.
     */
    data: XOR<module_quizUpdateInput, module_quizUncheckedUpdateInput>
    /**
     * Choose, which module_quiz to update.
     */
    where: module_quizWhereUniqueInput
  }

  /**
   * module_quiz updateMany
   */
  export type module_quizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update module_quizs.
     */
    data: XOR<module_quizUpdateManyMutationInput, module_quizUncheckedUpdateManyInput>
    /**
     * Filter which module_quizs to update
     */
    where?: module_quizWhereInput
  }

  /**
   * module_quiz upsert
   */
  export type module_quizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * The filter to search for the module_quiz to update in case it exists.
     */
    where: module_quizWhereUniqueInput
    /**
     * In case the module_quiz found by the `where` argument doesn't exist, create a new module_quiz with this data.
     */
    create: XOR<module_quizCreateInput, module_quizUncheckedCreateInput>
    /**
     * In case the module_quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<module_quizUpdateInput, module_quizUncheckedUpdateInput>
  }

  /**
   * module_quiz delete
   */
  export type module_quizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
    /**
     * Filter which module_quiz to delete.
     */
    where: module_quizWhereUniqueInput
  }

  /**
   * module_quiz deleteMany
   */
  export type module_quizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module_quizs to delete
     */
    where?: module_quizWhereInput
  }

  /**
   * module_quiz findRaw
   */
  export type module_quizFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * module_quiz aggregateRaw
   */
  export type module_quizAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * module_quiz without action
   */
  export type module_quizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_quiz
     */
    select?: module_quizSelect<ExtArgs> | null
  }


  /**
   * Model modules
   */

  export type AggregateModules = {
    _count: ModulesCountAggregateOutputType | null
    _avg: ModulesAvgAggregateOutputType | null
    _sum: ModulesSumAggregateOutputType | null
    _min: ModulesMinAggregateOutputType | null
    _max: ModulesMaxAggregateOutputType | null
  }

  export type ModulesAvgAggregateOutputType = {
    v: number | null
    totalScore: number | null
  }

  export type ModulesSumAggregateOutputType = {
    v: number | null
    totalScore: number[]
  }

  export type ModulesMinAggregateOutputType = {
    id: string | null
    v: number | null
    createdAt: Date | null
    moduleName: string | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ModulesMaxAggregateOutputType = {
    id: string | null
    v: number | null
    createdAt: Date | null
    moduleName: string | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ModulesCountAggregateOutputType = {
    id: number
    v: number
    createdAt: number
    moduleName: number
    totalScore: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ModulesAvgAggregateInputType = {
    v?: true
    totalScore?: true
  }

  export type ModulesSumAggregateInputType = {
    v?: true
    totalScore?: true
  }

  export type ModulesMinAggregateInputType = {
    id?: true
    v?: true
    createdAt?: true
    moduleName?: true
    updatedAt?: true
    userId?: true
  }

  export type ModulesMaxAggregateInputType = {
    id?: true
    v?: true
    createdAt?: true
    moduleName?: true
    updatedAt?: true
    userId?: true
  }

  export type ModulesCountAggregateInputType = {
    id?: true
    v?: true
    createdAt?: true
    moduleName?: true
    totalScore?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ModulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to aggregate.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModulesMaxAggregateInputType
  }

  export type GetModulesAggregateType<T extends ModulesAggregateArgs> = {
        [P in keyof T & keyof AggregateModules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModules[P]>
      : GetScalarType<T[P], AggregateModules[P]>
  }




  export type modulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modulesWhereInput
    orderBy?: modulesOrderByWithAggregationInput | modulesOrderByWithAggregationInput[]
    by: ModulesScalarFieldEnum[] | ModulesScalarFieldEnum
    having?: modulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModulesCountAggregateInputType | true
    _avg?: ModulesAvgAggregateInputType
    _sum?: ModulesSumAggregateInputType
    _min?: ModulesMinAggregateInputType
    _max?: ModulesMaxAggregateInputType
  }

  export type ModulesGroupByOutputType = {
    id: string
    v: number
    createdAt: Date
    moduleName: string
    totalScore: number[]
    updatedAt: Date
    userId: string
    _count: ModulesCountAggregateOutputType | null
    _avg: ModulesAvgAggregateOutputType | null
    _sum: ModulesSumAggregateOutputType | null
    _min: ModulesMinAggregateOutputType | null
    _max: ModulesMaxAggregateOutputType | null
  }

  type GetModulesGroupByPayload<T extends modulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModulesGroupByOutputType[P]>
            : GetScalarType<T[P], ModulesGroupByOutputType[P]>
        }
      >
    >


  export type modulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    createdAt?: boolean
    moduleName?: boolean
    totalScore?: boolean
    updatedAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["modules"]>


  export type modulesSelectScalar = {
    id?: boolean
    v?: boolean
    createdAt?: boolean
    moduleName?: boolean
    totalScore?: boolean
    updatedAt?: boolean
    userId?: boolean
  }


  export type $modulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modules"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      createdAt: Date
      moduleName: string
      totalScore: number[]
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["modules"]>
    composites: {}
  }

  type modulesGetPayload<S extends boolean | null | undefined | modulesDefaultArgs> = $Result.GetResult<Prisma.$modulesPayload, S>

  type modulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<modulesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModulesCountAggregateInputType | true
    }

  export interface modulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modules'], meta: { name: 'modules' } }
    /**
     * Find zero or one Modules that matches the filter.
     * @param {modulesFindUniqueArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modulesFindUniqueArgs>(args: SelectSubset<T, modulesFindUniqueArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Modules that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {modulesFindUniqueOrThrowArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modulesFindUniqueOrThrowArgs>(args: SelectSubset<T, modulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesFindFirstArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modulesFindFirstArgs>(args?: SelectSubset<T, modulesFindFirstArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Modules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesFindFirstOrThrowArgs} args - Arguments to find a Modules
     * @example
     * // Get one Modules
     * const modules = await prisma.modules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modulesFindFirstOrThrowArgs>(args?: SelectSubset<T, modulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.modules.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.modules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modulesWithIdOnly = await prisma.modules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modulesFindManyArgs>(args?: SelectSubset<T, modulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Modules.
     * @param {modulesCreateArgs} args - Arguments to create a Modules.
     * @example
     * // Create one Modules
     * const Modules = await prisma.modules.create({
     *   data: {
     *     // ... data to create a Modules
     *   }
     * })
     * 
     */
    create<T extends modulesCreateArgs>(args: SelectSubset<T, modulesCreateArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Modules.
     * @param {modulesCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const modules = await prisma.modules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modulesCreateManyArgs>(args?: SelectSubset<T, modulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Modules.
     * @param {modulesDeleteArgs} args - Arguments to delete one Modules.
     * @example
     * // Delete one Modules
     * const Modules = await prisma.modules.delete({
     *   where: {
     *     // ... filter to delete one Modules
     *   }
     * })
     * 
     */
    delete<T extends modulesDeleteArgs>(args: SelectSubset<T, modulesDeleteArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Modules.
     * @param {modulesUpdateArgs} args - Arguments to update one Modules.
     * @example
     * // Update one Modules
     * const modules = await prisma.modules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modulesUpdateArgs>(args: SelectSubset<T, modulesUpdateArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Modules.
     * @param {modulesDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.modules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modulesDeleteManyArgs>(args?: SelectSubset<T, modulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const modules = await prisma.modules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modulesUpdateManyArgs>(args: SelectSubset<T, modulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modules.
     * @param {modulesUpsertArgs} args - Arguments to update or create a Modules.
     * @example
     * // Update or create a Modules
     * const modules = await prisma.modules.upsert({
     *   create: {
     *     // ... data to create a Modules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modules we want to update
     *   }
     * })
     */
    upsert<T extends modulesUpsertArgs>(args: SelectSubset<T, modulesUpsertArgs<ExtArgs>>): Prisma__modulesClient<$Result.GetResult<Prisma.$modulesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Modules that matches the filter.
     * @param {modulesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const modules = await prisma.modules.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: modulesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Modules.
     * @param {modulesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const modules = await prisma.modules.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: modulesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.modules.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends modulesCountArgs>(
      args?: Subset<T, modulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModulesAggregateArgs>(args: Subset<T, ModulesAggregateArgs>): Prisma.PrismaPromise<GetModulesAggregateType<T>>

    /**
     * Group by Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modulesGroupByArgs} args - Group by arguments.
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
      T extends modulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modulesGroupByArgs['orderBy'] }
        : { orderBy?: modulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, modulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modules model
   */
  readonly fields: modulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the modules model
   */ 
  interface modulesFieldRefs {
    readonly id: FieldRef<"modules", 'String'>
    readonly v: FieldRef<"modules", 'Int'>
    readonly createdAt: FieldRef<"modules", 'DateTime'>
    readonly moduleName: FieldRef<"modules", 'String'>
    readonly totalScore: FieldRef<"modules", 'Int[]'>
    readonly updatedAt: FieldRef<"modules", 'DateTime'>
    readonly userId: FieldRef<"modules", 'String'>
  }
    

  // Custom InputTypes
  /**
   * modules findUnique
   */
  export type modulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules findUniqueOrThrow
   */
  export type modulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules findFirst
   */
  export type modulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * modules findFirstOrThrow
   */
  export type modulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * modules findMany
   */
  export type modulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: modulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: modulesOrderByWithRelationInput | modulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: modulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModulesScalarFieldEnum | ModulesScalarFieldEnum[]
  }

  /**
   * modules create
   */
  export type modulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * The data needed to create a modules.
     */
    data: XOR<modulesCreateInput, modulesUncheckedCreateInput>
  }

  /**
   * modules createMany
   */
  export type modulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: modulesCreateManyInput | modulesCreateManyInput[]
  }

  /**
   * modules update
   */
  export type modulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * The data needed to update a modules.
     */
    data: XOR<modulesUpdateInput, modulesUncheckedUpdateInput>
    /**
     * Choose, which modules to update.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules updateMany
   */
  export type modulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<modulesUpdateManyMutationInput, modulesUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: modulesWhereInput
  }

  /**
   * modules upsert
   */
  export type modulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * The filter to search for the modules to update in case it exists.
     */
    where: modulesWhereUniqueInput
    /**
     * In case the modules found by the `where` argument doesn't exist, create a new modules with this data.
     */
    create: XOR<modulesCreateInput, modulesUncheckedCreateInput>
    /**
     * In case the modules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modulesUpdateInput, modulesUncheckedUpdateInput>
  }

  /**
   * modules delete
   */
  export type modulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
    /**
     * Filter which modules to delete.
     */
    where: modulesWhereUniqueInput
  }

  /**
   * modules deleteMany
   */
  export type modulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: modulesWhereInput
  }

  /**
   * modules findRaw
   */
  export type modulesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * modules aggregateRaw
   */
  export type modulesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * modules without action
   */
  export type modulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modules
     */
    select?: modulesSelect<ExtArgs> | null
  }


  /**
   * Model questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    v: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    v: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    v: number | null
    module_id: string | null
    questionText: string | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    v: number | null
    module_id: string | null
    questionText: string | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    v: number
    choices: number
    module_id: number
    questionText: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    v?: true
  }

  export type QuestionsSumAggregateInputType = {
    v?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    v?: true
    module_id?: true
    questionText?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    v?: true
    module_id?: true
    questionText?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    v?: true
    choices?: true
    module_id?: true
    questionText?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to aggregate.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type questionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionsWhereInput
    orderBy?: questionsOrderByWithAggregationInput | questionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: questionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: string
    v: number
    choices: string[]
    module_id: string
    questionText: string
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends questionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type questionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    choices?: boolean
    module_id?: boolean
    questionText?: boolean
  }, ExtArgs["result"]["questions"]>


  export type questionsSelectScalar = {
    id?: boolean
    v?: boolean
    choices?: boolean
    module_id?: boolean
    questionText?: boolean
  }


  export type $questionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      choices: string[]
      module_id: string
      questionText: string
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type questionsGetPayload<S extends boolean | null | undefined | questionsDefaultArgs> = $Result.GetResult<Prisma.$questionsPayload, S>

  type questionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<questionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface questionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questions'], meta: { name: 'questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {questionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionsFindUniqueArgs>(args: SelectSubset<T, questionsFindUniqueArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {questionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionsFindUniqueOrThrowArgs>(args: SelectSubset<T, questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionsFindFirstArgs>(args?: SelectSubset<T, questionsFindFirstArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionsFindFirstOrThrowArgs>(args?: SelectSubset<T, questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionsFindManyArgs>(args?: SelectSubset<T, questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Questions.
     * @param {questionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends questionsCreateArgs>(args: SelectSubset<T, questionsCreateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {questionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionsCreateManyArgs>(args?: SelectSubset<T, questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {questionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends questionsDeleteArgs>(args: SelectSubset<T, questionsDeleteArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Questions.
     * @param {questionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionsUpdateArgs>(args: SelectSubset<T, questionsUpdateArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {questionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionsDeleteManyArgs>(args?: SelectSubset<T, questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionsUpdateManyArgs>(args: SelectSubset<T, questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {questionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends questionsUpsertArgs>(args: SelectSubset<T, questionsUpsertArgs<ExtArgs>>): Prisma__questionsClient<$Result.GetResult<Prisma.$questionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {questionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const questions = await prisma.questions.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: questionsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Questions.
     * @param {questionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const questions = await prisma.questions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: questionsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionsCountArgs>(
      args?: Subset<T, questionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionsGroupByArgs} args - Group by arguments.
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
      T extends questionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionsGroupByArgs['orderBy'] }
        : { orderBy?: questionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questions model
   */
  readonly fields: questionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the questions model
   */ 
  interface questionsFieldRefs {
    readonly id: FieldRef<"questions", 'String'>
    readonly v: FieldRef<"questions", 'Int'>
    readonly choices: FieldRef<"questions", 'String[]'>
    readonly module_id: FieldRef<"questions", 'String'>
    readonly questionText: FieldRef<"questions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * questions findUnique
   */
  export type questionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findUniqueOrThrow
   */
  export type questionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions findFirst
   */
  export type questionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findFirstOrThrow
   */
  export type questionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions findMany
   */
  export type questionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionsOrderByWithRelationInput | questionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * questions create
   */
  export type questionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * The data needed to create a questions.
     */
    data: XOR<questionsCreateInput, questionsUncheckedCreateInput>
  }

  /**
   * questions createMany
   */
  export type questionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionsCreateManyInput | questionsCreateManyInput[]
  }

  /**
   * questions update
   */
  export type questionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * The data needed to update a questions.
     */
    data: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
    /**
     * Choose, which questions to update.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions updateMany
   */
  export type questionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionsUpdateManyMutationInput, questionsUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionsWhereInput
  }

  /**
   * questions upsert
   */
  export type questionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * The filter to search for the questions to update in case it exists.
     */
    where: questionsWhereUniqueInput
    /**
     * In case the questions found by the `where` argument doesn't exist, create a new questions with this data.
     */
    create: XOR<questionsCreateInput, questionsUncheckedCreateInput>
    /**
     * In case the questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionsUpdateInput, questionsUncheckedUpdateInput>
  }

  /**
   * questions delete
   */
  export type questionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
    /**
     * Filter which questions to delete.
     */
    where: questionsWhereUniqueInput
  }

  /**
   * questions deleteMany
   */
  export type questionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionsWhereInput
  }

  /**
   * questions findRaw
   */
  export type questionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * questions aggregateRaw
   */
  export type questionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * questions without action
   */
  export type questionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questions
     */
    select?: questionsSelect<ExtArgs> | null
  }


  /**
   * Model ratings
   */

  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    v: number | null
    rate1: number | null
    rate2: number | null
    rate3: number | null
    rate4: number | null
    rate5: number | null
  }

  export type RatingsSumAggregateOutputType = {
    v: number | null
    rate1: number | null
    rate2: number | null
    rate3: number | null
    rate4: number | null
    rate5: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: string | null
    v: number | null
    createdAt: Date | null
    instructorId: string | null
    rate1: number | null
    rate2: number | null
    rate3: number | null
    rate4: number | null
    rate5: number | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: string | null
    v: number | null
    createdAt: Date | null
    instructorId: string | null
    rate1: number | null
    rate2: number | null
    rate3: number | null
    rate4: number | null
    rate5: number | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    v: number
    createdAt: number
    instructorId: number
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    v?: true
    rate1?: true
    rate2?: true
    rate3?: true
    rate4?: true
    rate5?: true
  }

  export type RatingsSumAggregateInputType = {
    v?: true
    rate1?: true
    rate2?: true
    rate3?: true
    rate4?: true
    rate5?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    v?: true
    createdAt?: true
    instructorId?: true
    rate1?: true
    rate2?: true
    rate3?: true
    rate4?: true
    rate5?: true
    updatedAt?: true
    userId?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    v?: true
    createdAt?: true
    instructorId?: true
    rate1?: true
    rate2?: true
    rate3?: true
    rate4?: true
    rate5?: true
    updatedAt?: true
    userId?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    v?: true
    createdAt?: true
    instructorId?: true
    rate1?: true
    rate2?: true
    rate3?: true
    rate4?: true
    rate5?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to aggregate.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type ratingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithAggregationInput | ratingsOrderByWithAggregationInput[]
    by: RatingsScalarFieldEnum[] | RatingsScalarFieldEnum
    having?: ratingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }

  export type RatingsGroupByOutputType = {
    id: string
    v: number
    createdAt: Date
    instructorId: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt: Date
    userId: string
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends ratingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type ratingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v?: boolean
    createdAt?: boolean
    instructorId?: boolean
    rate1?: boolean
    rate2?: boolean
    rate3?: boolean
    rate4?: boolean
    rate5?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | ratings$userArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>


  export type ratingsSelectScalar = {
    id?: boolean
    v?: boolean
    createdAt?: boolean
    instructorId?: boolean
    rate1?: boolean
    rate2?: boolean
    rate3?: boolean
    rate4?: boolean
    rate5?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ratingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ratings$userArgs<ExtArgs>
  }

  export type $ratingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ratings"
    objects: {
      user: Prisma.$UserInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v: number
      createdAt: Date
      instructorId: string | null
      rate1: number
      rate2: number
      rate3: number
      rate4: number
      rate5: number
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["ratings"]>
    composites: {}
  }

  type ratingsGetPayload<S extends boolean | null | undefined | ratingsDefaultArgs> = $Result.GetResult<Prisma.$ratingsPayload, S>

  type ratingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ratingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface ratingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ratings'], meta: { name: 'ratings' } }
    /**
     * Find zero or one Ratings that matches the filter.
     * @param {ratingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ratingsFindUniqueArgs>(args: SelectSubset<T, ratingsFindUniqueArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ratings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ratingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ratingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ratingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ratingsFindFirstArgs>(args?: SelectSubset<T, ratingsFindFirstArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ratingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ratingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ratingsFindManyArgs>(args?: SelectSubset<T, ratingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ratings.
     * @param {ratingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
     */
    create<T extends ratingsCreateArgs>(args: SelectSubset<T, ratingsCreateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ratings.
     * @param {ratingsCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ratingsCreateManyArgs>(args?: SelectSubset<T, ratingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ratings.
     * @param {ratingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
     */
    delete<T extends ratingsDeleteArgs>(args: SelectSubset<T, ratingsDeleteArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ratings.
     * @param {ratingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ratingsUpdateArgs>(args: SelectSubset<T, ratingsUpdateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ratings.
     * @param {ratingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ratingsDeleteManyArgs>(args?: SelectSubset<T, ratingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ratingsUpdateManyArgs>(args: SelectSubset<T, ratingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ratings.
     * @param {ratingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
     */
    upsert<T extends ratingsUpsertArgs>(args: SelectSubset<T, ratingsUpsertArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Ratings that matches the filter.
     * @param {ratingsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ratings = await prisma.ratings.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ratingsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ratings.
     * @param {ratingsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ratings = await prisma.ratings.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ratingsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingsCountArgs>(
      args?: Subset<T, ratingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsGroupByArgs} args - Group by arguments.
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
      T extends ratingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ratingsGroupByArgs['orderBy'] }
        : { orderBy?: ratingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ratingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ratings model
   */
  readonly fields: ratingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ratingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ratings$userArgs<ExtArgs> = {}>(args?: Subset<T, ratings$userArgs<ExtArgs>>): Prisma__UserInfoClient<$Result.GetResult<Prisma.$UserInfoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the ratings model
   */ 
  interface ratingsFieldRefs {
    readonly id: FieldRef<"ratings", 'String'>
    readonly v: FieldRef<"ratings", 'Int'>
    readonly createdAt: FieldRef<"ratings", 'DateTime'>
    readonly instructorId: FieldRef<"ratings", 'String'>
    readonly rate1: FieldRef<"ratings", 'Int'>
    readonly rate2: FieldRef<"ratings", 'Int'>
    readonly rate3: FieldRef<"ratings", 'Int'>
    readonly rate4: FieldRef<"ratings", 'Int'>
    readonly rate5: FieldRef<"ratings", 'Int'>
    readonly updatedAt: FieldRef<"ratings", 'DateTime'>
    readonly userId: FieldRef<"ratings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ratings findUnique
   */
  export type ratingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findUniqueOrThrow
   */
  export type ratingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findFirst
   */
  export type ratingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findFirstOrThrow
   */
  export type ratingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findMany
   */
  export type ratingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings create
   */
  export type ratingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * The data needed to create a ratings.
     */
    data: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
  }

  /**
   * ratings createMany
   */
  export type ratingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ratings.
     */
    data: ratingsCreateManyInput | ratingsCreateManyInput[]
  }

  /**
   * ratings update
   */
  export type ratingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * The data needed to update a ratings.
     */
    data: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
    /**
     * Choose, which ratings to update.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings updateMany
   */
  export type ratingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
  }

  /**
   * ratings upsert
   */
  export type ratingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * The filter to search for the ratings to update in case it exists.
     */
    where: ratingsWhereUniqueInput
    /**
     * In case the ratings found by the `where` argument doesn't exist, create a new ratings with this data.
     */
    create: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
    /**
     * In case the ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
  }

  /**
   * ratings delete
   */
  export type ratingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter which ratings to delete.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings deleteMany
   */
  export type ratingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to delete
     */
    where?: ratingsWhereInput
  }

  /**
   * ratings findRaw
   */
  export type ratingsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ratings aggregateRaw
   */
  export type ratingsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ratings.user
   */
  export type ratings$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInfoInclude<ExtArgs> | null
    where?: UserInfoWhereInput
  }

  /**
   * ratings without action
   */
  export type ratingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserAssessmentScalarFieldEnum: {
    id: 'id',
    cpr: 'cpr',
    firsAid: 'firsAid',
    pathogen: 'pathogen',
    preparedness: 'preparedness',
    teamwork: 'teamwork',
    userId: 'userId'
  };

  export type UserAssessmentScalarFieldEnum = (typeof UserAssessmentScalarFieldEnum)[keyof typeof UserAssessmentScalarFieldEnum]


  export const UserInfoScalarFieldEnum: {
    id: 'id',
    v: 'v',
    address: 'address',
    category: 'category',
    certificateUrl: 'certificateUrl',
    certificatedApproved: 'certificatedApproved',
    contact: 'contact',
    dateCreated: 'dateCreated',
    dateEnded: 'dateEnded',
    dateStarted: 'dateStarted',
    email: 'email',
    gender: 'gender',
    name: 'name',
    orNumber: 'orNumber',
    password: 'password',
    profilePictureUrl: 'profilePictureUrl',
    userType: 'userType'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  export const ChoicesScalarFieldEnum: {
    id: 'id',
    v: 'v',
    isCorrect: 'isCorrect',
    question_id: 'question_id',
    text: 'text'
  };

  export type ChoicesScalarFieldEnum = (typeof ChoicesScalarFieldEnum)[keyof typeof ChoicesScalarFieldEnum]


  export const InstructorsScalarFieldEnum: {
    id: 'id',
    v: 'v',
    address: 'address',
    contact: 'contact',
    createdAt: 'createdAt',
    email: 'email',
    field: 'field',
    gender: 'gender',
    name: 'name',
    profilePicture: 'profilePicture',
    updatedAt: 'updatedAt'
  };

  export type InstructorsScalarFieldEnum = (typeof InstructorsScalarFieldEnum)[keyof typeof InstructorsScalarFieldEnum]


  export const Module_quizScalarFieldEnum: {
    id: 'id',
    v: 'v',
    module_name: 'module_name',
    questions: 'questions',
    total_score: 'total_score',
    user_id: 'user_id'
  };

  export type Module_quizScalarFieldEnum = (typeof Module_quizScalarFieldEnum)[keyof typeof Module_quizScalarFieldEnum]


  export const ModulesScalarFieldEnum: {
    id: 'id',
    v: 'v',
    createdAt: 'createdAt',
    moduleName: 'moduleName',
    totalScore: 'totalScore',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ModulesScalarFieldEnum = (typeof ModulesScalarFieldEnum)[keyof typeof ModulesScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    v: 'v',
    choices: 'choices',
    module_id: 'module_id',
    questionText: 'questionText'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    v: 'v',
    createdAt: 'createdAt',
    instructorId: 'instructorId',
    rate1: 'rate1',
    rate2: 'rate2',
    rate3: 'rate3',
    rate4: 'rate4',
    rate5: 'rate5',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserAssessmentWhereInput = {
    AND?: UserAssessmentWhereInput | UserAssessmentWhereInput[]
    OR?: UserAssessmentWhereInput[]
    NOT?: UserAssessmentWhereInput | UserAssessmentWhereInput[]
    id?: StringFilter<"UserAssessment"> | string
    cpr?: StringFilter<"UserAssessment"> | string
    firsAid?: StringFilter<"UserAssessment"> | string
    pathogen?: StringFilter<"UserAssessment"> | string
    preparedness?: StringFilter<"UserAssessment"> | string
    teamwork?: StringFilter<"UserAssessment"> | string
    userId?: StringFilter<"UserAssessment"> | string
  }

  export type UserAssessmentOrderByWithRelationInput = {
    id?: SortOrder
    cpr?: SortOrder
    firsAid?: SortOrder
    pathogen?: SortOrder
    preparedness?: SortOrder
    teamwork?: SortOrder
    userId?: SortOrder
  }

  export type UserAssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAssessmentWhereInput | UserAssessmentWhereInput[]
    OR?: UserAssessmentWhereInput[]
    NOT?: UserAssessmentWhereInput | UserAssessmentWhereInput[]
    cpr?: StringFilter<"UserAssessment"> | string
    firsAid?: StringFilter<"UserAssessment"> | string
    pathogen?: StringFilter<"UserAssessment"> | string
    preparedness?: StringFilter<"UserAssessment"> | string
    teamwork?: StringFilter<"UserAssessment"> | string
    userId?: StringFilter<"UserAssessment"> | string
  }, "id">

  export type UserAssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    cpr?: SortOrder
    firsAid?: SortOrder
    pathogen?: SortOrder
    preparedness?: SortOrder
    teamwork?: SortOrder
    userId?: SortOrder
    _count?: UserAssessmentCountOrderByAggregateInput
    _max?: UserAssessmentMaxOrderByAggregateInput
    _min?: UserAssessmentMinOrderByAggregateInput
  }

  export type UserAssessmentScalarWhereWithAggregatesInput = {
    AND?: UserAssessmentScalarWhereWithAggregatesInput | UserAssessmentScalarWhereWithAggregatesInput[]
    OR?: UserAssessmentScalarWhereWithAggregatesInput[]
    NOT?: UserAssessmentScalarWhereWithAggregatesInput | UserAssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAssessment"> | string
    cpr?: StringWithAggregatesFilter<"UserAssessment"> | string
    firsAid?: StringWithAggregatesFilter<"UserAssessment"> | string
    pathogen?: StringWithAggregatesFilter<"UserAssessment"> | string
    preparedness?: StringWithAggregatesFilter<"UserAssessment"> | string
    teamwork?: StringWithAggregatesFilter<"UserAssessment"> | string
    userId?: StringWithAggregatesFilter<"UserAssessment"> | string
  }

  export type UserInfoWhereInput = {
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    id?: StringFilter<"UserInfo"> | string
    v?: IntFilter<"UserInfo"> | number
    address?: StringFilter<"UserInfo"> | string
    category?: StringFilter<"UserInfo"> | string
    certificateUrl?: StringFilter<"UserInfo"> | string
    certificatedApproved?: BoolFilter<"UserInfo"> | boolean
    contact?: StringFilter<"UserInfo"> | string
    dateCreated?: DateTimeFilter<"UserInfo"> | Date | string
    dateEnded?: StringNullableFilter<"UserInfo"> | string | null
    dateStarted?: StringFilter<"UserInfo"> | string
    email?: StringFilter<"UserInfo"> | string
    gender?: StringFilter<"UserInfo"> | string
    name?: StringFilter<"UserInfo"> | string
    orNumber?: StringFilter<"UserInfo"> | string
    password?: StringFilter<"UserInfo"> | string
    profilePictureUrl?: StringFilter<"UserInfo"> | string
    userType?: StringFilter<"UserInfo"> | string
    ratings?: RatingsListRelationFilter
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    category?: SortOrder
    certificateUrl?: SortOrder
    certificatedApproved?: SortOrder
    contact?: SortOrder
    dateCreated?: SortOrder
    dateEnded?: SortOrder
    dateStarted?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    orNumber?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    userType?: SortOrder
    ratings?: ratingsOrderByRelationAggregateInput
  }

  export type UserInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserInfoWhereInput | UserInfoWhereInput[]
    OR?: UserInfoWhereInput[]
    NOT?: UserInfoWhereInput | UserInfoWhereInput[]
    v?: IntFilter<"UserInfo"> | number
    address?: StringFilter<"UserInfo"> | string
    category?: StringFilter<"UserInfo"> | string
    certificateUrl?: StringFilter<"UserInfo"> | string
    certificatedApproved?: BoolFilter<"UserInfo"> | boolean
    contact?: StringFilter<"UserInfo"> | string
    dateCreated?: DateTimeFilter<"UserInfo"> | Date | string
    dateEnded?: StringNullableFilter<"UserInfo"> | string | null
    dateStarted?: StringFilter<"UserInfo"> | string
    gender?: StringFilter<"UserInfo"> | string
    name?: StringFilter<"UserInfo"> | string
    orNumber?: StringFilter<"UserInfo"> | string
    password?: StringFilter<"UserInfo"> | string
    profilePictureUrl?: StringFilter<"UserInfo"> | string
    userType?: StringFilter<"UserInfo"> | string
    ratings?: RatingsListRelationFilter
  }, "id" | "email">

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    category?: SortOrder
    certificateUrl?: SortOrder
    certificatedApproved?: SortOrder
    contact?: SortOrder
    dateCreated?: SortOrder
    dateEnded?: SortOrder
    dateStarted?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    orNumber?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    userType?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _avg?: UserInfoAvgOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
    _sum?: UserInfoSumOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    OR?: UserInfoScalarWhereWithAggregatesInput[]
    NOT?: UserInfoScalarWhereWithAggregatesInput | UserInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserInfo"> | string
    v?: IntWithAggregatesFilter<"UserInfo"> | number
    address?: StringWithAggregatesFilter<"UserInfo"> | string
    category?: StringWithAggregatesFilter<"UserInfo"> | string
    certificateUrl?: StringWithAggregatesFilter<"UserInfo"> | string
    certificatedApproved?: BoolWithAggregatesFilter<"UserInfo"> | boolean
    contact?: StringWithAggregatesFilter<"UserInfo"> | string
    dateCreated?: DateTimeWithAggregatesFilter<"UserInfo"> | Date | string
    dateEnded?: StringNullableWithAggregatesFilter<"UserInfo"> | string | null
    dateStarted?: StringWithAggregatesFilter<"UserInfo"> | string
    email?: StringWithAggregatesFilter<"UserInfo"> | string
    gender?: StringWithAggregatesFilter<"UserInfo"> | string
    name?: StringWithAggregatesFilter<"UserInfo"> | string
    orNumber?: StringWithAggregatesFilter<"UserInfo"> | string
    password?: StringWithAggregatesFilter<"UserInfo"> | string
    profilePictureUrl?: StringWithAggregatesFilter<"UserInfo"> | string
    userType?: StringWithAggregatesFilter<"UserInfo"> | string
  }

  export type choicesWhereInput = {
    AND?: choicesWhereInput | choicesWhereInput[]
    OR?: choicesWhereInput[]
    NOT?: choicesWhereInput | choicesWhereInput[]
    id?: StringFilter<"choices"> | string
    v?: IntFilter<"choices"> | number
    isCorrect?: BoolFilter<"choices"> | boolean
    question_id?: StringFilter<"choices"> | string
    text?: StringFilter<"choices"> | string
  }

  export type choicesOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    isCorrect?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
  }

  export type choicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: choicesWhereInput | choicesWhereInput[]
    OR?: choicesWhereInput[]
    NOT?: choicesWhereInput | choicesWhereInput[]
    v?: IntFilter<"choices"> | number
    isCorrect?: BoolFilter<"choices"> | boolean
    question_id?: StringFilter<"choices"> | string
    text?: StringFilter<"choices"> | string
  }, "id">

  export type choicesOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    isCorrect?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
    _count?: choicesCountOrderByAggregateInput
    _avg?: choicesAvgOrderByAggregateInput
    _max?: choicesMaxOrderByAggregateInput
    _min?: choicesMinOrderByAggregateInput
    _sum?: choicesSumOrderByAggregateInput
  }

  export type choicesScalarWhereWithAggregatesInput = {
    AND?: choicesScalarWhereWithAggregatesInput | choicesScalarWhereWithAggregatesInput[]
    OR?: choicesScalarWhereWithAggregatesInput[]
    NOT?: choicesScalarWhereWithAggregatesInput | choicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"choices"> | string
    v?: IntWithAggregatesFilter<"choices"> | number
    isCorrect?: BoolWithAggregatesFilter<"choices"> | boolean
    question_id?: StringWithAggregatesFilter<"choices"> | string
    text?: StringWithAggregatesFilter<"choices"> | string
  }

  export type instructorsWhereInput = {
    AND?: instructorsWhereInput | instructorsWhereInput[]
    OR?: instructorsWhereInput[]
    NOT?: instructorsWhereInput | instructorsWhereInput[]
    id?: StringFilter<"instructors"> | string
    v?: IntFilter<"instructors"> | number
    address?: StringFilter<"instructors"> | string
    contact?: StringFilter<"instructors"> | string
    createdAt?: DateTimeFilter<"instructors"> | Date | string
    email?: StringFilter<"instructors"> | string
    field?: StringFilter<"instructors"> | string
    gender?: StringFilter<"instructors"> | string
    name?: StringFilter<"instructors"> | string
    profilePicture?: StringFilter<"instructors"> | string
    updatedAt?: DateTimeFilter<"instructors"> | Date | string
  }

  export type instructorsOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    field?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    updatedAt?: SortOrder
  }

  export type instructorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: instructorsWhereInput | instructorsWhereInput[]
    OR?: instructorsWhereInput[]
    NOT?: instructorsWhereInput | instructorsWhereInput[]
    v?: IntFilter<"instructors"> | number
    address?: StringFilter<"instructors"> | string
    contact?: StringFilter<"instructors"> | string
    createdAt?: DateTimeFilter<"instructors"> | Date | string
    email?: StringFilter<"instructors"> | string
    field?: StringFilter<"instructors"> | string
    gender?: StringFilter<"instructors"> | string
    name?: StringFilter<"instructors"> | string
    profilePicture?: StringFilter<"instructors"> | string
    updatedAt?: DateTimeFilter<"instructors"> | Date | string
  }, "id">

  export type instructorsOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    field?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    updatedAt?: SortOrder
    _count?: instructorsCountOrderByAggregateInput
    _avg?: instructorsAvgOrderByAggregateInput
    _max?: instructorsMaxOrderByAggregateInput
    _min?: instructorsMinOrderByAggregateInput
    _sum?: instructorsSumOrderByAggregateInput
  }

  export type instructorsScalarWhereWithAggregatesInput = {
    AND?: instructorsScalarWhereWithAggregatesInput | instructorsScalarWhereWithAggregatesInput[]
    OR?: instructorsScalarWhereWithAggregatesInput[]
    NOT?: instructorsScalarWhereWithAggregatesInput | instructorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"instructors"> | string
    v?: IntWithAggregatesFilter<"instructors"> | number
    address?: StringWithAggregatesFilter<"instructors"> | string
    contact?: StringWithAggregatesFilter<"instructors"> | string
    createdAt?: DateTimeWithAggregatesFilter<"instructors"> | Date | string
    email?: StringWithAggregatesFilter<"instructors"> | string
    field?: StringWithAggregatesFilter<"instructors"> | string
    gender?: StringWithAggregatesFilter<"instructors"> | string
    name?: StringWithAggregatesFilter<"instructors"> | string
    profilePicture?: StringWithAggregatesFilter<"instructors"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"instructors"> | Date | string
  }

  export type module_quizWhereInput = {
    AND?: module_quizWhereInput | module_quizWhereInput[]
    OR?: module_quizWhereInput[]
    NOT?: module_quizWhereInput | module_quizWhereInput[]
    id?: StringFilter<"module_quiz"> | string
    v?: IntFilter<"module_quiz"> | number
    module_name?: StringFilter<"module_quiz"> | string
    questions?: StringNullableListFilter<"module_quiz">
    total_score?: IntFilter<"module_quiz"> | number
    user_id?: StringFilter<"module_quiz"> | string
  }

  export type module_quizOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    module_name?: SortOrder
    questions?: SortOrder
    total_score?: SortOrder
    user_id?: SortOrder
  }

  export type module_quizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: module_quizWhereInput | module_quizWhereInput[]
    OR?: module_quizWhereInput[]
    NOT?: module_quizWhereInput | module_quizWhereInput[]
    v?: IntFilter<"module_quiz"> | number
    module_name?: StringFilter<"module_quiz"> | string
    questions?: StringNullableListFilter<"module_quiz">
    total_score?: IntFilter<"module_quiz"> | number
    user_id?: StringFilter<"module_quiz"> | string
  }, "id">

  export type module_quizOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    module_name?: SortOrder
    questions?: SortOrder
    total_score?: SortOrder
    user_id?: SortOrder
    _count?: module_quizCountOrderByAggregateInput
    _avg?: module_quizAvgOrderByAggregateInput
    _max?: module_quizMaxOrderByAggregateInput
    _min?: module_quizMinOrderByAggregateInput
    _sum?: module_quizSumOrderByAggregateInput
  }

  export type module_quizScalarWhereWithAggregatesInput = {
    AND?: module_quizScalarWhereWithAggregatesInput | module_quizScalarWhereWithAggregatesInput[]
    OR?: module_quizScalarWhereWithAggregatesInput[]
    NOT?: module_quizScalarWhereWithAggregatesInput | module_quizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"module_quiz"> | string
    v?: IntWithAggregatesFilter<"module_quiz"> | number
    module_name?: StringWithAggregatesFilter<"module_quiz"> | string
    questions?: StringNullableListFilter<"module_quiz">
    total_score?: IntWithAggregatesFilter<"module_quiz"> | number
    user_id?: StringWithAggregatesFilter<"module_quiz"> | string
  }

  export type modulesWhereInput = {
    AND?: modulesWhereInput | modulesWhereInput[]
    OR?: modulesWhereInput[]
    NOT?: modulesWhereInput | modulesWhereInput[]
    id?: StringFilter<"modules"> | string
    v?: IntFilter<"modules"> | number
    createdAt?: DateTimeFilter<"modules"> | Date | string
    moduleName?: StringFilter<"modules"> | string
    totalScore?: IntNullableListFilter<"modules">
    updatedAt?: DateTimeFilter<"modules"> | Date | string
    userId?: StringFilter<"modules"> | string
  }

  export type modulesOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    moduleName?: SortOrder
    totalScore?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type modulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: modulesWhereInput | modulesWhereInput[]
    OR?: modulesWhereInput[]
    NOT?: modulesWhereInput | modulesWhereInput[]
    v?: IntFilter<"modules"> | number
    createdAt?: DateTimeFilter<"modules"> | Date | string
    moduleName?: StringFilter<"modules"> | string
    totalScore?: IntNullableListFilter<"modules">
    updatedAt?: DateTimeFilter<"modules"> | Date | string
    userId?: StringFilter<"modules"> | string
  }, "id">

  export type modulesOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    moduleName?: SortOrder
    totalScore?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: modulesCountOrderByAggregateInput
    _avg?: modulesAvgOrderByAggregateInput
    _max?: modulesMaxOrderByAggregateInput
    _min?: modulesMinOrderByAggregateInput
    _sum?: modulesSumOrderByAggregateInput
  }

  export type modulesScalarWhereWithAggregatesInput = {
    AND?: modulesScalarWhereWithAggregatesInput | modulesScalarWhereWithAggregatesInput[]
    OR?: modulesScalarWhereWithAggregatesInput[]
    NOT?: modulesScalarWhereWithAggregatesInput | modulesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"modules"> | string
    v?: IntWithAggregatesFilter<"modules"> | number
    createdAt?: DateTimeWithAggregatesFilter<"modules"> | Date | string
    moduleName?: StringWithAggregatesFilter<"modules"> | string
    totalScore?: IntNullableListFilter<"modules">
    updatedAt?: DateTimeWithAggregatesFilter<"modules"> | Date | string
    userId?: StringWithAggregatesFilter<"modules"> | string
  }

  export type questionsWhereInput = {
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    id?: StringFilter<"questions"> | string
    v?: IntFilter<"questions"> | number
    choices?: StringNullableListFilter<"questions">
    module_id?: StringFilter<"questions"> | string
    questionText?: StringFilter<"questions"> | string
  }

  export type questionsOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    choices?: SortOrder
    module_id?: SortOrder
    questionText?: SortOrder
  }

  export type questionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: questionsWhereInput | questionsWhereInput[]
    OR?: questionsWhereInput[]
    NOT?: questionsWhereInput | questionsWhereInput[]
    v?: IntFilter<"questions"> | number
    choices?: StringNullableListFilter<"questions">
    module_id?: StringFilter<"questions"> | string
    questionText?: StringFilter<"questions"> | string
  }, "id">

  export type questionsOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    choices?: SortOrder
    module_id?: SortOrder
    questionText?: SortOrder
    _count?: questionsCountOrderByAggregateInput
    _avg?: questionsAvgOrderByAggregateInput
    _max?: questionsMaxOrderByAggregateInput
    _min?: questionsMinOrderByAggregateInput
    _sum?: questionsSumOrderByAggregateInput
  }

  export type questionsScalarWhereWithAggregatesInput = {
    AND?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    OR?: questionsScalarWhereWithAggregatesInput[]
    NOT?: questionsScalarWhereWithAggregatesInput | questionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"questions"> | string
    v?: IntWithAggregatesFilter<"questions"> | number
    choices?: StringNullableListFilter<"questions">
    module_id?: StringWithAggregatesFilter<"questions"> | string
    questionText?: StringWithAggregatesFilter<"questions"> | string
  }

  export type ratingsWhereInput = {
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    id?: StringFilter<"ratings"> | string
    v?: IntFilter<"ratings"> | number
    createdAt?: DateTimeFilter<"ratings"> | Date | string
    instructorId?: StringNullableFilter<"ratings"> | string | null
    rate1?: IntFilter<"ratings"> | number
    rate2?: IntFilter<"ratings"> | number
    rate3?: IntFilter<"ratings"> | number
    rate4?: IntFilter<"ratings"> | number
    rate5?: IntFilter<"ratings"> | number
    updatedAt?: DateTimeFilter<"ratings"> | Date | string
    userId?: StringFilter<"ratings"> | string
    user?: XOR<UserInfoNullableRelationFilter, UserInfoWhereInput> | null
  }

  export type ratingsOrderByWithRelationInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserInfoOrderByWithRelationInput
  }

  export type ratingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    v?: IntFilter<"ratings"> | number
    createdAt?: DateTimeFilter<"ratings"> | Date | string
    instructorId?: StringNullableFilter<"ratings"> | string | null
    rate1?: IntFilter<"ratings"> | number
    rate2?: IntFilter<"ratings"> | number
    rate3?: IntFilter<"ratings"> | number
    rate4?: IntFilter<"ratings"> | number
    rate5?: IntFilter<"ratings"> | number
    updatedAt?: DateTimeFilter<"ratings"> | Date | string
    userId?: StringFilter<"ratings"> | string
    user?: XOR<UserInfoNullableRelationFilter, UserInfoWhereInput> | null
  }, "id">

  export type ratingsOrderByWithAggregationInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ratingsCountOrderByAggregateInput
    _avg?: ratingsAvgOrderByAggregateInput
    _max?: ratingsMaxOrderByAggregateInput
    _min?: ratingsMinOrderByAggregateInput
    _sum?: ratingsSumOrderByAggregateInput
  }

  export type ratingsScalarWhereWithAggregatesInput = {
    AND?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    OR?: ratingsScalarWhereWithAggregatesInput[]
    NOT?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ratings"> | string
    v?: IntWithAggregatesFilter<"ratings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ratings"> | Date | string
    instructorId?: StringNullableWithAggregatesFilter<"ratings"> | string | null
    rate1?: IntWithAggregatesFilter<"ratings"> | number
    rate2?: IntWithAggregatesFilter<"ratings"> | number
    rate3?: IntWithAggregatesFilter<"ratings"> | number
    rate4?: IntWithAggregatesFilter<"ratings"> | number
    rate5?: IntWithAggregatesFilter<"ratings"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ratings"> | Date | string
    userId?: StringWithAggregatesFilter<"ratings"> | string
  }

  export type UserAssessmentCreateInput = {
    id?: string
    cpr: string
    firsAid: string
    pathogen: string
    preparedness: string
    teamwork: string
    userId: string
  }

  export type UserAssessmentUncheckedCreateInput = {
    id?: string
    cpr: string
    firsAid: string
    pathogen: string
    preparedness: string
    teamwork: string
    userId: string
  }

  export type UserAssessmentUpdateInput = {
    cpr?: StringFieldUpdateOperationsInput | string
    firsAid?: StringFieldUpdateOperationsInput | string
    pathogen?: StringFieldUpdateOperationsInput | string
    preparedness?: StringFieldUpdateOperationsInput | string
    teamwork?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssessmentUncheckedUpdateInput = {
    cpr?: StringFieldUpdateOperationsInput | string
    firsAid?: StringFieldUpdateOperationsInput | string
    pathogen?: StringFieldUpdateOperationsInput | string
    preparedness?: StringFieldUpdateOperationsInput | string
    teamwork?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssessmentCreateManyInput = {
    id?: string
    cpr: string
    firsAid: string
    pathogen: string
    preparedness: string
    teamwork: string
    userId: string
  }

  export type UserAssessmentUpdateManyMutationInput = {
    cpr?: StringFieldUpdateOperationsInput | string
    firsAid?: StringFieldUpdateOperationsInput | string
    pathogen?: StringFieldUpdateOperationsInput | string
    preparedness?: StringFieldUpdateOperationsInput | string
    teamwork?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAssessmentUncheckedUpdateManyInput = {
    cpr?: StringFieldUpdateOperationsInput | string
    firsAid?: StringFieldUpdateOperationsInput | string
    pathogen?: StringFieldUpdateOperationsInput | string
    preparedness?: StringFieldUpdateOperationsInput | string
    teamwork?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoCreateInput = {
    id?: string
    v: number
    address: string
    category: string
    certificateUrl?: string
    certificatedApproved?: boolean
    contact: string
    dateCreated?: Date | string
    dateEnded?: string | null
    dateStarted: string
    email: string
    gender: string
    name: string
    orNumber: string
    password: string
    profilePictureUrl: string
    userType: string
    ratings?: ratingsCreateNestedManyWithoutUserInput
  }

  export type UserInfoUncheckedCreateInput = {
    id?: string
    v: number
    address: string
    category: string
    certificateUrl?: string
    certificatedApproved?: boolean
    contact: string
    dateCreated?: Date | string
    dateEnded?: string | null
    dateStarted: string
    email: string
    gender: string
    name: string
    orNumber: string
    password: string
    profilePictureUrl: string
    userType: string
    ratings?: ratingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserInfoUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    certificatedApproved?: BoolFieldUpdateOperationsInput | boolean
    contact?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnded?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    ratings?: ratingsUpdateManyWithoutUserNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    certificatedApproved?: BoolFieldUpdateOperationsInput | boolean
    contact?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnded?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
    ratings?: ratingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserInfoCreateManyInput = {
    id?: string
    v: number
    address: string
    category: string
    certificateUrl?: string
    certificatedApproved?: boolean
    contact: string
    dateCreated?: Date | string
    dateEnded?: string | null
    dateStarted: string
    email: string
    gender: string
    name: string
    orNumber: string
    password: string
    profilePictureUrl: string
    userType: string
  }

  export type UserInfoUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    certificatedApproved?: BoolFieldUpdateOperationsInput | boolean
    contact?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnded?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    certificatedApproved?: BoolFieldUpdateOperationsInput | boolean
    contact?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnded?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type choicesCreateInput = {
    id?: string
    v: number
    isCorrect: boolean
    question_id: string
    text: string
  }

  export type choicesUncheckedCreateInput = {
    id?: string
    v: number
    isCorrect: boolean
    question_id: string
    text: string
  }

  export type choicesUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type choicesUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type choicesCreateManyInput = {
    id?: string
    v: number
    isCorrect: boolean
    question_id: string
    text: string
  }

  export type choicesUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type choicesUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    question_id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type instructorsCreateInput = {
    id?: string
    v: number
    address: string
    contact: string
    createdAt?: Date | string
    email: string
    field: string
    gender: string
    name: string
    profilePicture: string
    updatedAt?: Date | string
  }

  export type instructorsUncheckedCreateInput = {
    id?: string
    v: number
    address: string
    contact: string
    createdAt?: Date | string
    email: string
    field: string
    gender: string
    name: string
    profilePicture: string
    updatedAt?: Date | string
  }

  export type instructorsUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type instructorsUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type instructorsCreateManyInput = {
    id?: string
    v: number
    address: string
    contact: string
    createdAt?: Date | string
    email: string
    field: string
    gender: string
    name: string
    profilePicture: string
    updatedAt?: Date | string
  }

  export type instructorsUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type instructorsUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type module_quizCreateInput = {
    id?: string
    v: number
    module_name: string
    questions?: module_quizCreatequestionsInput | string[]
    total_score: number
    user_id: string
  }

  export type module_quizUncheckedCreateInput = {
    id?: string
    v: number
    module_name: string
    questions?: module_quizCreatequestionsInput | string[]
    total_score: number
    user_id: string
  }

  export type module_quizUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    module_name?: StringFieldUpdateOperationsInput | string
    questions?: module_quizUpdatequestionsInput | string[]
    total_score?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type module_quizUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    module_name?: StringFieldUpdateOperationsInput | string
    questions?: module_quizUpdatequestionsInput | string[]
    total_score?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type module_quizCreateManyInput = {
    id?: string
    v: number
    module_name: string
    questions?: module_quizCreatequestionsInput | string[]
    total_score: number
    user_id: string
  }

  export type module_quizUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    module_name?: StringFieldUpdateOperationsInput | string
    questions?: module_quizUpdatequestionsInput | string[]
    total_score?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type module_quizUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    module_name?: StringFieldUpdateOperationsInput | string
    questions?: module_quizUpdatequestionsInput | string[]
    total_score?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type modulesCreateInput = {
    id?: string
    v: number
    createdAt: Date | string
    moduleName: string
    totalScore?: modulesCreatetotalScoreInput | number[]
    updatedAt?: Date | string
    userId: string
  }

  export type modulesUncheckedCreateInput = {
    id?: string
    v: number
    createdAt: Date | string
    moduleName: string
    totalScore?: modulesCreatetotalScoreInput | number[]
    updatedAt?: Date | string
    userId: string
  }

  export type modulesUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleName?: StringFieldUpdateOperationsInput | string
    totalScore?: modulesUpdatetotalScoreInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type modulesUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleName?: StringFieldUpdateOperationsInput | string
    totalScore?: modulesUpdatetotalScoreInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type modulesCreateManyInput = {
    id?: string
    v: number
    createdAt: Date | string
    moduleName: string
    totalScore?: modulesCreatetotalScoreInput | number[]
    updatedAt?: Date | string
    userId: string
  }

  export type modulesUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleName?: StringFieldUpdateOperationsInput | string
    totalScore?: modulesUpdatetotalScoreInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type modulesUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moduleName?: StringFieldUpdateOperationsInput | string
    totalScore?: modulesUpdatetotalScoreInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type questionsCreateInput = {
    id?: string
    v: number
    choices?: questionsCreatechoicesInput | string[]
    module_id: string
    questionText: string
  }

  export type questionsUncheckedCreateInput = {
    id?: string
    v: number
    choices?: questionsCreatechoicesInput | string[]
    module_id: string
    questionText: string
  }

  export type questionsUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    choices?: questionsUpdatechoicesInput | string[]
    module_id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
  }

  export type questionsUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    choices?: questionsUpdatechoicesInput | string[]
    module_id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
  }

  export type questionsCreateManyInput = {
    id?: string
    v: number
    choices?: questionsCreatechoicesInput | string[]
    module_id: string
    questionText: string
  }

  export type questionsUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    choices?: questionsUpdatechoicesInput | string[]
    module_id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
  }

  export type questionsUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    choices?: questionsUpdatechoicesInput | string[]
    module_id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
  }

  export type ratingsCreateInput = {
    id?: string
    v: number
    createdAt?: Date | string
    instructorId?: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt?: Date | string
    user?: UserInfoCreateNestedOneWithoutRatingsInput
  }

  export type ratingsUncheckedCreateInput = {
    id?: string
    v: number
    createdAt?: Date | string
    instructorId?: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt?: Date | string
    userId: string
  }

  export type ratingsUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserInfoUpdateOneWithoutRatingsNestedInput
  }

  export type ratingsUncheckedUpdateInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ratingsCreateManyInput = {
    id?: string
    v: number
    createdAt?: Date | string
    instructorId?: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt?: Date | string
    userId: string
  }

  export type ratingsUpdateManyMutationInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ratingsUncheckedUpdateManyInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type UserAssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    cpr?: SortOrder
    firsAid?: SortOrder
    pathogen?: SortOrder
    preparedness?: SortOrder
    teamwork?: SortOrder
    userId?: SortOrder
  }

  export type UserAssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    cpr?: SortOrder
    firsAid?: SortOrder
    pathogen?: SortOrder
    preparedness?: SortOrder
    teamwork?: SortOrder
    userId?: SortOrder
  }

  export type UserAssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    cpr?: SortOrder
    firsAid?: SortOrder
    pathogen?: SortOrder
    preparedness?: SortOrder
    teamwork?: SortOrder
    userId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }

  export type RatingsListRelationFilter = {
    every?: ratingsWhereInput
    some?: ratingsWhereInput
    none?: ratingsWhereInput
  }

  export type ratingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    category?: SortOrder
    certificateUrl?: SortOrder
    certificatedApproved?: SortOrder
    contact?: SortOrder
    dateCreated?: SortOrder
    dateEnded?: SortOrder
    dateStarted?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    orNumber?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    userType?: SortOrder
  }

  export type UserInfoAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    category?: SortOrder
    certificateUrl?: SortOrder
    certificatedApproved?: SortOrder
    contact?: SortOrder
    dateCreated?: SortOrder
    dateEnded?: SortOrder
    dateStarted?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    orNumber?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    userType?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    category?: SortOrder
    certificateUrl?: SortOrder
    certificatedApproved?: SortOrder
    contact?: SortOrder
    dateCreated?: SortOrder
    dateEnded?: SortOrder
    dateStarted?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    orNumber?: SortOrder
    password?: SortOrder
    profilePictureUrl?: SortOrder
    userType?: SortOrder
  }

  export type UserInfoSumOrderByAggregateInput = {
    v?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type choicesCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    isCorrect?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
  }

  export type choicesAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type choicesMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    isCorrect?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
  }

  export type choicesMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    isCorrect?: SortOrder
    question_id?: SortOrder
    text?: SortOrder
  }

  export type choicesSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type instructorsCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    field?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    updatedAt?: SortOrder
  }

  export type instructorsAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type instructorsMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    field?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    updatedAt?: SortOrder
  }

  export type instructorsMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    field?: SortOrder
    gender?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    updatedAt?: SortOrder
  }

  export type instructorsSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type module_quizCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    module_name?: SortOrder
    questions?: SortOrder
    total_score?: SortOrder
    user_id?: SortOrder
  }

  export type module_quizAvgOrderByAggregateInput = {
    v?: SortOrder
    total_score?: SortOrder
  }

  export type module_quizMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    module_name?: SortOrder
    total_score?: SortOrder
    user_id?: SortOrder
  }

  export type module_quizMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    module_name?: SortOrder
    total_score?: SortOrder
    user_id?: SortOrder
  }

  export type module_quizSumOrderByAggregateInput = {
    v?: SortOrder
    total_score?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type modulesCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    moduleName?: SortOrder
    totalScore?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type modulesAvgOrderByAggregateInput = {
    v?: SortOrder
    totalScore?: SortOrder
  }

  export type modulesMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    moduleName?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type modulesMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    moduleName?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type modulesSumOrderByAggregateInput = {
    v?: SortOrder
    totalScore?: SortOrder
  }

  export type questionsCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    choices?: SortOrder
    module_id?: SortOrder
    questionText?: SortOrder
  }

  export type questionsAvgOrderByAggregateInput = {
    v?: SortOrder
  }

  export type questionsMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    module_id?: SortOrder
    questionText?: SortOrder
  }

  export type questionsMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    module_id?: SortOrder
    questionText?: SortOrder
  }

  export type questionsSumOrderByAggregateInput = {
    v?: SortOrder
  }

  export type UserInfoNullableRelationFilter = {
    is?: UserInfoWhereInput | null
    isNot?: UserInfoWhereInput | null
  }

  export type ratingsCountOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ratingsAvgOrderByAggregateInput = {
    v?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
  }

  export type ratingsMaxOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ratingsMinOrderByAggregateInput = {
    id?: SortOrder
    v?: SortOrder
    createdAt?: SortOrder
    instructorId?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ratingsSumOrderByAggregateInput = {
    v?: SortOrder
    rate1?: SortOrder
    rate2?: SortOrder
    rate3?: SortOrder
    rate4?: SortOrder
    rate5?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ratingsCreateNestedManyWithoutUserInput = {
    create?: XOR<ratingsCreateWithoutUserInput, ratingsUncheckedCreateWithoutUserInput> | ratingsCreateWithoutUserInput[] | ratingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUserInput | ratingsCreateOrConnectWithoutUserInput[]
    createMany?: ratingsCreateManyUserInputEnvelope
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
  }

  export type ratingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ratingsCreateWithoutUserInput, ratingsUncheckedCreateWithoutUserInput> | ratingsCreateWithoutUserInput[] | ratingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUserInput | ratingsCreateOrConnectWithoutUserInput[]
    createMany?: ratingsCreateManyUserInputEnvelope
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type ratingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ratingsCreateWithoutUserInput, ratingsUncheckedCreateWithoutUserInput> | ratingsCreateWithoutUserInput[] | ratingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUserInput | ratingsCreateOrConnectWithoutUserInput[]
    upsert?: ratingsUpsertWithWhereUniqueWithoutUserInput | ratingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ratingsCreateManyUserInputEnvelope
    set?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    disconnect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    delete?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    update?: ratingsUpdateWithWhereUniqueWithoutUserInput | ratingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ratingsUpdateManyWithWhereWithoutUserInput | ratingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
  }

  export type ratingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ratingsCreateWithoutUserInput, ratingsUncheckedCreateWithoutUserInput> | ratingsCreateWithoutUserInput[] | ratingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUserInput | ratingsCreateOrConnectWithoutUserInput[]
    upsert?: ratingsUpsertWithWhereUniqueWithoutUserInput | ratingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ratingsCreateManyUserInputEnvelope
    set?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    disconnect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    delete?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    update?: ratingsUpdateWithWhereUniqueWithoutUserInput | ratingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ratingsUpdateManyWithWhereWithoutUserInput | ratingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
  }

  export type module_quizCreatequestionsInput = {
    set: string[]
  }

  export type module_quizUpdatequestionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type modulesCreatetotalScoreInput = {
    set: number[]
  }

  export type modulesUpdatetotalScoreInput = {
    set?: number[]
    push?: number | number[]
  }

  export type questionsCreatechoicesInput = {
    set: string[]
  }

  export type questionsUpdatechoicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserInfoCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserInfoCreateWithoutRatingsInput, UserInfoUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutRatingsInput
    connect?: UserInfoWhereUniqueInput
  }

  export type UserInfoUpdateOneWithoutRatingsNestedInput = {
    create?: XOR<UserInfoCreateWithoutRatingsInput, UserInfoUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutRatingsInput
    upsert?: UserInfoUpsertWithoutRatingsInput
    disconnect?: boolean
    delete?: UserInfoWhereInput | boolean
    connect?: UserInfoWhereUniqueInput
    update?: XOR<XOR<UserInfoUpdateToOneWithWhereWithoutRatingsInput, UserInfoUpdateWithoutRatingsInput>, UserInfoUncheckedUpdateWithoutRatingsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type ratingsCreateWithoutUserInput = {
    id?: string
    v: number
    createdAt?: Date | string
    instructorId?: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt?: Date | string
  }

  export type ratingsUncheckedCreateWithoutUserInput = {
    id?: string
    v: number
    createdAt?: Date | string
    instructorId?: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt?: Date | string
  }

  export type ratingsCreateOrConnectWithoutUserInput = {
    where: ratingsWhereUniqueInput
    create: XOR<ratingsCreateWithoutUserInput, ratingsUncheckedCreateWithoutUserInput>
  }

  export type ratingsCreateManyUserInputEnvelope = {
    data: ratingsCreateManyUserInput | ratingsCreateManyUserInput[]
  }

  export type ratingsUpsertWithWhereUniqueWithoutUserInput = {
    where: ratingsWhereUniqueInput
    update: XOR<ratingsUpdateWithoutUserInput, ratingsUncheckedUpdateWithoutUserInput>
    create: XOR<ratingsCreateWithoutUserInput, ratingsUncheckedCreateWithoutUserInput>
  }

  export type ratingsUpdateWithWhereUniqueWithoutUserInput = {
    where: ratingsWhereUniqueInput
    data: XOR<ratingsUpdateWithoutUserInput, ratingsUncheckedUpdateWithoutUserInput>
  }

  export type ratingsUpdateManyWithWhereWithoutUserInput = {
    where: ratingsScalarWhereInput
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyWithoutUserInput>
  }

  export type ratingsScalarWhereInput = {
    AND?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
    OR?: ratingsScalarWhereInput[]
    NOT?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
    id?: StringFilter<"ratings"> | string
    v?: IntFilter<"ratings"> | number
    createdAt?: DateTimeFilter<"ratings"> | Date | string
    instructorId?: StringNullableFilter<"ratings"> | string | null
    rate1?: IntFilter<"ratings"> | number
    rate2?: IntFilter<"ratings"> | number
    rate3?: IntFilter<"ratings"> | number
    rate4?: IntFilter<"ratings"> | number
    rate5?: IntFilter<"ratings"> | number
    updatedAt?: DateTimeFilter<"ratings"> | Date | string
    userId?: StringFilter<"ratings"> | string
  }

  export type UserInfoCreateWithoutRatingsInput = {
    id?: string
    v: number
    address: string
    category: string
    certificateUrl?: string
    certificatedApproved?: boolean
    contact: string
    dateCreated?: Date | string
    dateEnded?: string | null
    dateStarted: string
    email: string
    gender: string
    name: string
    orNumber: string
    password: string
    profilePictureUrl: string
    userType: string
  }

  export type UserInfoUncheckedCreateWithoutRatingsInput = {
    id?: string
    v: number
    address: string
    category: string
    certificateUrl?: string
    certificatedApproved?: boolean
    contact: string
    dateCreated?: Date | string
    dateEnded?: string | null
    dateStarted: string
    email: string
    gender: string
    name: string
    orNumber: string
    password: string
    profilePictureUrl: string
    userType: string
  }

  export type UserInfoCreateOrConnectWithoutRatingsInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutRatingsInput, UserInfoUncheckedCreateWithoutRatingsInput>
  }

  export type UserInfoUpsertWithoutRatingsInput = {
    update: XOR<UserInfoUpdateWithoutRatingsInput, UserInfoUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserInfoCreateWithoutRatingsInput, UserInfoUncheckedCreateWithoutRatingsInput>
    where?: UserInfoWhereInput
  }

  export type UserInfoUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserInfoWhereInput
    data: XOR<UserInfoUpdateWithoutRatingsInput, UserInfoUncheckedUpdateWithoutRatingsInput>
  }

  export type UserInfoUpdateWithoutRatingsInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    certificatedApproved?: BoolFieldUpdateOperationsInput | boolean
    contact?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnded?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUncheckedUpdateWithoutRatingsInput = {
    v?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    certificatedApproved?: BoolFieldUpdateOperationsInput | boolean
    contact?: StringFieldUpdateOperationsInput | string
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnded?: NullableStringFieldUpdateOperationsInput | string | null
    dateStarted?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    orNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: StringFieldUpdateOperationsInput | string
    userType?: StringFieldUpdateOperationsInput | string
  }

  export type ratingsCreateManyUserInput = {
    id?: string
    v: number
    createdAt?: Date | string
    instructorId?: string | null
    rate1: number
    rate2: number
    rate3: number
    rate4: number
    rate5: number
    updatedAt?: Date | string
  }

  export type ratingsUpdateWithoutUserInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ratingsUncheckedUpdateWithoutUserInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ratingsUncheckedUpdateManyWithoutUserInput = {
    v?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    rate1?: IntFieldUpdateOperationsInput | number
    rate2?: IntFieldUpdateOperationsInput | number
    rate3?: IntFieldUpdateOperationsInput | number
    rate4?: IntFieldUpdateOperationsInput | number
    rate5?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserInfoCountOutputTypeDefaultArgs instead
     */
    export type UserInfoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserInfoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAssessmentDefaultArgs instead
     */
    export type UserAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAssessmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserInfoDefaultArgs instead
     */
    export type UserInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserInfoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use choicesDefaultArgs instead
     */
    export type choicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = choicesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use instructorsDefaultArgs instead
     */
    export type instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = instructorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use module_quizDefaultArgs instead
     */
    export type module_quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = module_quizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use modulesDefaultArgs instead
     */
    export type modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = modulesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use questionsDefaultArgs instead
     */
    export type questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = questionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ratingsDefaultArgs instead
     */
    export type ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ratingsDefaultArgs<ExtArgs>

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