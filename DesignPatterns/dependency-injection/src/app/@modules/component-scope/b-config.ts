export class BConfig {
    source: string;
    timestamp: Date;
    instance: number;

    constructor(source: string, instance?: number) {
        this.source = source;
        this.timestamp = new Date();
        this.instance = instance ? instance : 1;
    }
}
