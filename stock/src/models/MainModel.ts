import { Company } from "./Company";

export class MainModel {
    selectedStockSymbol: string;
}

class FavoriteStockModel {
    stocks: Company[] = [];
    selectedStock: Company;
}

export interface IAppState {

}

