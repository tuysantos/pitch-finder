import { IResult, IPitch } from "./model/interfaces";

export const pitchMock: IResult = {
  meta: {
    total_items: 14,
    filter: {
      starts: "2018-01-09",
      ends: "2018-01-15",
      fromTime: "00:00",
      toTime: "23:59"
    }
  },
  data: [
    {
      type: "slots",
      id: "446273",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446270",
      attributes: {
        starts: "2018-01-09T07:20:00+00:00",
        ends: "2018-01-09T08:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 0
      }
    },
    {
      type: "slots",
      id: "446271",
      attributes: {
        starts: "2018-01-09T08:00:00+00:00",
        ends: "2018-01-09T08:40:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 0
      }
    },
    {
      type: "slots",
      id: "446272",
      attributes: {
        starts: "2018-01-09T08:40:00+00:00",
        ends: "2018-01-09T09:20:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },

    {
      type: "slots",
      id: "446273",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446274",
      attributes: {
        starts: "2018-01-09T10:00:00+00:00",
        ends: "2018-01-09T10:40:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 3
      }
    },
    {
      type: "slots",
      id: "446275",
      attributes: {
        starts: "2018-01-09T10:40:00+00:00",
        ends: "2018-01-09T11:20:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 3
      }
    },
    {
      type: "slots",
      id: "446276",
      attributes: {
        starts: "2018-01-09T11:20:00+00:00",
        ends: "2018-01-09T12:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446277",
      attributes: {
        starts: "2018-01-09T12:00:00+00:00",
        ends: "2018-01-09T12:40:00+00:00",
        price: "12.05",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 0
      }
    },
    {
      type: "slots",
      id: "446278",
      attributes: {
        starts: "2018-01-09T12:40:00+00:00",
        ends: "2018-01-09T13:20:00+00:00",
        price: "12.05",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 0
      }
    },
    {
      type: "slots",
      id: "446279",
      attributes: {
        starts: "2018-01-09T13:20:00+00:00",
        ends: "2018-01-09T14:00:00+00:00",
        price: "12.05",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 1
      }
    },
    {
      type: "slots",
      id: "446280",
      attributes: {
        starts: "2018-01-09T14:00:00+00:00",
        ends: "2018-01-09T14:40:00+00:00",
        price: "12.05",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446281",
      attributes: {
        starts: "2018-01-09T14:40:00+00:00",
        ends: "2018-01-09T15:20:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446282",
      attributes: {
        starts: "2018-01-09T15:20:00+00:00",
        ends: "2018-01-09T16:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    }
  ],
  error: { errorNum: 0, message: "" }
};

export const pitchMockResults: IPitch[] = [
  {
    type: "slots",
    id: "446273",
    attributes: {
      starts: "2018-01-09T09:20:00+00:00",
      ends: "2018-01-09T10:00:00+00:00",
      price: "9.90",
      admin_fee: "0.00",
      currency: "GBP",
      availabilities: 4
    }
  },
  {
    type: "slots",
    id: "446274",
    attributes: {
      starts: "2018-01-09T10:20:00+00:00",
      ends: "2018-01-09T10:40:00+00:00",
      price: "10.90",
      admin_fee: "0.00",
      currency: "GBP",
      availabilities: 1
    }
  },
  {
    type: "slots",
    id: "446275",
    attributes: {
      starts: "2018-01-09T11:00:00+00:00",
      ends: "2018-01-09T11:40:00+00:00",
      price: "12.90",
      admin_fee: "0.00",
      currency: "GBP",
      availabilities: 2
    }
  }
];
