import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { ReceiptsController } from './receipts/receipts.controller';
import { ReceiptsService } from './receipts/receipts.service';
import { Receipt } from './database/entities/receipts.entity';

@Module({
  imports: [
    // 1. Database Connection (Required for Task 4)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2233', // check your local db password
      database: 'nest_db', // check your local db name
      entities: [Receipt],
      synchronize: true, // This creates the table automatically
    }),
    // 2. Register the Receipt Entity for the Repository
    TypeOrmModule.forFeature([Receipt]),
    OrdersModule,
  ],
  controllers: [ReceiptsController], // 3. Add the Controller here!
  providers: [ReceiptsService], // 4. Add the Service here!
})
export class AppModule {}
