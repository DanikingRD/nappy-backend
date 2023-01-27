import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
  const DATABASE_URL = process.env.DATABASE_URL.replace(
    '<password>',
    DATABASE_PASSWORD,
  );
  return {
    DATABASE_URL,
  };
});
