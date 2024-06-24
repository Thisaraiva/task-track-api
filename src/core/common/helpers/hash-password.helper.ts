// src/core/common/helpers/hash-password.helper.ts
import * as bcrypt from 'bcrypt';

export async function hashPasswordToSave(password: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
}
