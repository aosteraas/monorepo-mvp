export type WithPathParams<T, B> = Omit<T, 'pathParameters'> & {
  pathParameters: B;
};
