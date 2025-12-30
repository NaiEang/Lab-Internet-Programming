import { Inject, Injectable } from '@nestjs/common';
// import { OrdersService } from 'src/orders/orders.service';
// import { forwardRef } from '@nestjs/common';
import { EVENT_PUBLISHER } from 'src/core/tokens';

type EventPublisher = { publish: (event: string, payload: any) => void };

@Injectable()
export class NotificationsService {
  constructor(
    @Inject(EVENT_PUBLISHER)
    private readonly publisher: EventPublisher,
  ) {}

  notify(event: string, payload: any) {
    // Instead of doing it ourselves, we let the publisher handle it
    this.publisher.publish(event, payload);
    return { ok: true };
  }
}
