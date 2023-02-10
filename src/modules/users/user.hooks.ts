import { passwordHashRounds } from 'src/common/constants';
import { makeHash } from 'src/common/utils/bcrypt';
import { UserSchema } from './schema';

async function handlePasswordHash(next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    this.password = await makeHash(this.password, passwordHashRounds);
    this.passwordConfirm = undefined;
  } catch (error) {
    console.log(error);
  }
  return next();
}

export const userHooksFactory = () => {
  const schema = UserSchema;
  schema.pre('save', handlePasswordHash);
  return schema;
};