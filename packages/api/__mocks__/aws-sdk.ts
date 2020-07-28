import { mockDeep } from 'jest-mock-extended';
import AWS, { S3 } from 'aws-sdk';

const s3Mock = mockDeep<S3>({
  getSignedUrlPromise: jest.fn().mockResolvedValue('asdasd'),
});

AWS.S3 = s3Mock as any;

module.exports = AWS;
