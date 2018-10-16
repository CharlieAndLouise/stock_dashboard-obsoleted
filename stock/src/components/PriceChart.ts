import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnInit, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { StockService } from "../injectors/StockService";
import { Chart } from "models";
import { Subscription } from "rxjs";
import { Brain } from "../injectors/Brain";

@Component({
    template: "<div #chart></div>",
    selector: "price"
})
export class PriceChartComponent implements OnDestroy {

    @Input()
    width: number = 700;
    @Input()
    height: number = 400;
    @Input()
    symbol: string;    

    @ViewChild("chart") container: ElementRef;

    __chart: any;
    __data: any;
    __option: any = {
        width: this.width,
        height: this.height,
        candlestick: {
            risingColor: { stroke: "#ed093a", fill: "#ed093a" },
            fallingColor: { stroke: "#079618", fill: "#079618" }
        }
    };

    subscription: Subscription;

    constructor(private stockService: StockService, private brain: Brain) {
        this.subscription = this.brain.symbolSelected.subscribe((symbol: string)=>{
            this.symbol = symbol;
            this.loadPriceData();
        });
        
    }
    

    private loadPriceData() {
        this.stockService.queryStockChart(this.symbol, "1m").subscribe((data)=>{
            this.__data = data.map((chart: Chart)=>{
                return [chart.label, chart.low, chart.open, chart.close, chart.high];
            });
            this.drawChart();
        });
    }

    private drawChart() {
        //let chartData = new window["google"].visualization.arrayToDataTable(this.__data, true);
        let chartData = new window["google"].visualization.DataTable();
        chartData.addColumn("string", "date");
        chartData.addColumn("number", "low");
        chartData.addColumn("number", "open");
        chartData.addColumn("number", "close");
        chartData.addColumn("number", "high");

        chartData.addRows(this.__data, true);
        
        if (!this.__chart) {
            this.__chart = new window["google"].visualization.CandlestickChart(this.container.nativeElement);
        }

        this.__chart.draw(chartData, this.__option);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}