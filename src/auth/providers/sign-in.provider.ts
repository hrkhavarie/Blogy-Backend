import { forwardRef, Inject, Injectable, RequestTimeoutException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/sign-in.dto';
import { HashingProvider } from './hashing.provider';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class SignInProvider {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly userService: UsersService,
        private readonly hashingProvider: HashingProvider,

        //Injecting jwt service
        private readonly jwtService: JwtService,

        //Inject JwtConfiguration
        @Inject(jwtConfig.KEY)
        private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
    ) { }

    public async login(signInDto: SignInDto) {

        //Find the user using email ID        
        let user = await this.userService.findOneByEmail(signInDto.email);

        // Compare password to the hash

        let isEqual: Boolean = false;
        try {
            isEqual = await this.hashingProvider.comparePassword(
                signInDto.password,
                user.password,
            )

        } catch (error) {
            throw new RequestTimeoutException(error, {
                description: "Password dose not match"
            })
        }

        if (!isEqual) {
            throw new UnauthorizedException('Incorrect Password')
        }

        // generate access token
        const accessToken = await this.jwtService.signAsync(
            {
                sub: user.id,
                email: user.email,
            },
            {
                audience: String(this.jwtConfiguration.audience) ,
                issuer: this.jwtConfiguration.issuer,
                secret: this.jwtConfiguration.secret,
                expiresIn: this.jwtConfiguration.accessTokenTtl
            })

        //Send confirmation
        return {
            accessToken
        };
    }
}


