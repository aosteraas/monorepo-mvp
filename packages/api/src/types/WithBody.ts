export type WithBody<T, B> = Omit<T, 'body'> & { body: B };
