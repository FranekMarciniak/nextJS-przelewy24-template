export interface IShipingOption {
  shipping_rate_data: {
    type: string;
    fixed_amount: {
      amount: number;
      currency: string;
    };
    display_name: string;
    // Delivers between 5-7 business days
    delivery_estimate: {
      minimum: {
        unit: string;
        value: number;
      };
      maximum: {
        unit: string;
        value: number;
      };
    };
  };
}

const shipingOptions: IShipingOption[] = [
  {
    shipping_rate_data: {
      type: "fixed_amount",
      fixed_amount: {
        amount: 1500,
        currency: "pln",
      },
      display_name: "InPost",
      // Delivers in exactly 1 business day
      delivery_estimate: {
        minimum: {
          unit: "business_day",
          value: 1,
        },
        maximum: {
          unit: "business_day",
          value: 2,
        },
      },
    },
  },
  {
    shipping_rate_data: {
      type: "fixed_amount",
      fixed_amount: {
        amount: 1100,
        currency: "pln",
      },
      display_name: "Poczta polska",
      // Delivers in exactly 1 business day
      delivery_estimate: {
        minimum: {
          unit: "business_day",
          value: 2,
        },
        maximum: {
          unit: "business_day",
          value: 5,
        },
      },
    },
  },
];

export default shipingOptions;
