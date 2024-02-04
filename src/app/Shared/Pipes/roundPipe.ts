import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'round'
})
export class RoundPipe implements PipeTransform {
    transform(value: number, decimals: number): number {
        return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    }
}