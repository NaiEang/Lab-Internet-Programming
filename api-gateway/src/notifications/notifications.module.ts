import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { OrdersModule } from 'src/orders/orders.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => OrdersModule)],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
