import { Handler } from 'aws-lambda';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';

export const commonMiddleware = (handler: Handler) =>
  middy(handler).use([
    httpJsonBodyParser(),
    httpEventNormalizer(),
    httpErrorHandler(),
  ]);
