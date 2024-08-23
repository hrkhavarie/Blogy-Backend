import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingProvider {
    /* 
    Abstract classes are similar to interfaces, but we use them to provide common behavior to subclasses or implement inversion of control using the Template Method design pattern. 
    */
   abstract hashPassword(data: string| Buffer):Promise<string>;

   abstract comparePassword(
    data:string | Buffer , 
    encrypted : string , 
   ): Promise<Boolean>
}
