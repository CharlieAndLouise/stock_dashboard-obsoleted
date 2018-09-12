import { Company } from "./Company";

export class MainModel {
    favoriteStock: FavoriteStockModel = new FavoriteStockModel();    
}

class FavoriteStockModel {
    stocks: Company[] = [];
    selectedStock: Company;
}

