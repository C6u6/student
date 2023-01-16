import { SetMetadata } from '@nestjs/common';

export const LoginRequired = (...roles: string[]) => SetMetadata('Loggedin', roles);