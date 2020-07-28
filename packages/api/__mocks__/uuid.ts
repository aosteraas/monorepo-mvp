import { v4 } from 'uuid';
import { mockDeep } from 'jest-mock-extended';

const v4Mock = mockDeep<typeof v4>(jest.fn().mockReturnValue('random-string'));

module.exports = {
  v4: v4Mock,
};
