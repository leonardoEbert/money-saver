import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from '@/shared/typeorm/typeorm.service';

const options = new TypeOrmConfigService();
export default registerAs('typeorm', () => options.createTypeOrmOptions());
export const connectionSource = new DataSource(
  options.createTypeOrmOptions() as DataSourceOptions,
);
