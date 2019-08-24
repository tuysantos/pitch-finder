import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { DateFormatPipe } from "./pipes/dateFormat";
import { CurrencyConverterPipe } from "./pipes/currencyConverter";
import { DurationPipe } from "./pipes/duration";
import { RequestCacheService } from "./services/request-cache.service";
import { CachingInterceptor } from "./services/cache-interceptor";

@NgModule({
  declarations: [
    PaginationComponent,
    DateFormatPipe,
    CurrencyConverterPipe,
    DurationPipe
  ],
  imports: [CommonModule],
  exports: [
    PaginationComponent,
    DateFormatPipe,
    CurrencyConverterPipe,
    DurationPipe
  ],
  providers: [
    RequestCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ]
})
export class CoreModule {}
