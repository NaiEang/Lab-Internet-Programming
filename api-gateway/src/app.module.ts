import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ReceiptsController } from './receipts/receipts.controller';
import { ReceiptsService } from './receipts/receipts.service';
import { Receipt } from './database/entities/receipts.entity';
import { NotificationModule } from './notifications/notification.module';
import { CoreModule } from './core/core.module';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ConfigModule } from '@nestjs/config';
import { Product } from './modules/product/entities/product.entity';
import { Category } from './modules/category/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // 1. Database Connection (Required for Task 4)
    DatabaseModule.forRoot({
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2233', // check your local db password
      database: 'nest_db', // check your local db name
      entities: [Receipt, Category, Product],
    }),
    DatabaseModule.forFeature([Receipt]),
    OrdersModule,
    CategoryModule,
    ProductModule,
    NotificationModule.forRoot({
      appName: 'API_Gateway',
      defaultChannel: 'log',
      enable: true,
    }),
    CoreModule,
  ],
  controllers: [ReceiptsController], // 3. Add the Controller here!
  providers: [ReceiptsService], // 4. Add the Service here!
})
export class AppModule {}
