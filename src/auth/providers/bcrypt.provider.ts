import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider implements HashingProvider {
    public async hashPassword(data: string | Buffer): Promise<string> {

        // Generate salt
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(data, salt);

    }

    comparePassword(
        data: string | Buffer,
        encrypted: string,
    ): Promise<Boolean> {
        return bcrypt.compare(data , encrypted);
    }
}
