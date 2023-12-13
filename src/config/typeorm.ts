import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from '@/shared/typeorm/typeorm.service';

const options = new TypeOrmConfigService();
const connectionSource = new DataSource(
  options.createTypeOrmOptions() as DataSourceOptions,
);

export default connectionSource;
