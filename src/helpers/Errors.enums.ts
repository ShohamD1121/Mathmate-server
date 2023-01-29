export enum ServerError {
  BadRequest = 'Bad Request',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'Not Found',
  InternalServerError = 'Internal Server Error',
}

export enum UpdateErrorMessages {
  EmailNotUpdatable = 'The email field is not updatable',
  IdNotUpdatable = 'The id field is not updatable',
  CreatedAtNotUpdatable = 'The createdAt field is not updatable',
}

export enum TagErrorMessages {
  NotFound = 'One or more provided tags do not exist in the tags table',
}