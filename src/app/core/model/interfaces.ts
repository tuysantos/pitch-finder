export class IResult {
  meta: ICriteria;
  data: IPitch[];
  error: IError;
}

export class ICriteria {
  total_items: number;
  filter: IFilter;
}

export class IFilter {
  starts: string;
  ends: string;
  fromTime: string;
  toTime: string;
}

export class IPitch {
  type: string;
  id: string;
  attributes: IAttributes;
}

export class IAttributes {
  starts: string;
  ends: string;
  price: string;
  admin_fee: string;
  currency: string;
  availabilities: number;
}

export class IFilterSearch {
  id: string;
  starts: string;
  ends: string;
}

export class IError {
  errorNum: number;
  message: string;
}
