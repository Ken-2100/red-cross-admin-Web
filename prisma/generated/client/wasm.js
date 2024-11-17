
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.UserAssessmentScalarFieldEnum = {
  id: 'id',
  cpr: 'cpr',
  firsAid: 'firsAid',
  pathogen: 'pathogen',
  preparedness: 'preparedness',
  teamwork: 'teamwork',
  userId: 'userId'
};

exports.Prisma.UserInfoScalarFieldEnum = {
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

exports.Prisma.ChoicesScalarFieldEnum = {
  id: 'id',
  v: 'v',
  isCorrect: 'isCorrect',
  question_id: 'question_id',
  text: 'text'
};

exports.Prisma.InstructorsScalarFieldEnum = {
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

exports.Prisma.Module_quizScalarFieldEnum = {
  id: 'id',
  v: 'v',
  module_name: 'module_name',
  questions: 'questions',
  total_score: 'total_score',
  user_id: 'user_id'
};

exports.Prisma.ModulesScalarFieldEnum = {
  id: 'id',
  v: 'v',
  createdAt: 'createdAt',
  moduleName: 'moduleName',
  totalScore: 'totalScore',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.QuestionsScalarFieldEnum = {
  id: 'id',
  v: 'v',
  choices: 'choices',
  module_id: 'module_id',
  questionText: 'questionText'
};

exports.Prisma.RatingsScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  UserAssessment: 'UserAssessment',
  UserInfo: 'UserInfo',
  choices: 'choices',
  instructors: 'instructors',
  module_quiz: 'module_quiz',
  modules: 'modules',
  questions: 'questions',
  ratings: 'ratings'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
