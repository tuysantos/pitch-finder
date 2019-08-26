import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-pitch-card",
  templateUrl: "./pitch-card.component.html",
  styleUrls: ["./pitch-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchCardComponent implements OnInit {
  @Input() slotId: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() price: string;
  @Input() availabilities: number;
  @Input() currency: string;
  @Input() exchangeRate: string;
  @Input() convertedCurrency: string;

  constructor() {}

  ngOnInit() {}
}
