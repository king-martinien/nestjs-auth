import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { configValidationSchema } from '../schema/config-validation.schema';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`environment/.env.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
