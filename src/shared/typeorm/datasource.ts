import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { join } from 'node:path';
// import * as process from 'process';

const config = new ConfigService();
console.log(config.get<string>('DATABASE_HOST'));

const dataSource = new DataSource({
  type: 'postgres',
  host: config.get<string>('DATABASE_HOST'),
  port: config.get<number>('DATABASE_PORT'),
  database: config.get<string>('DATABASE_NAME'),
  schema: config.get<string>('DATABASE_SCHEMA'),
  username: config.get<string>('DATABASE_USER'),
  password: config.get<string>('DATABASE_PASSWORD'),
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: ['dist/database/migrations/*.{ts,js}'],
  logging: true,
  migrationsRun: true,
  synchronize: true, // never use TRUE in production!
});

export default dataSource;
