import { CurrencyType } from "@/types/CurrencyType";

export class CurrencyClass {
  readonly data: CurrencyType[] = [];

  constructor(data: { [key: string]: number }) {
    this.data = Object.entries(data).map(([currency, value]) => ({
      currency,
      value: Number(value),
    }));
  }
}
