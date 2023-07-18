import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './modules/customer/customer.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './auth/auth.module';
import { GoogleCloudStorageModule } from './modules/gcp/gcs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.CONN_MONGO),
    CustomerModule,
    ProductModule,
    AuthModule,
    GoogleCloudStorageModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
