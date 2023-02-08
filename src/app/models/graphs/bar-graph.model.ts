export class BarGraph {
    constructor(
        public title: string,
        
        // this is the Y Axis
        public metrics: {
            title: string,
            level: number
        }[],

        //this is the X Axis
        public items: {
            title: string
            image: string
            measure: number
            color: string
        }[]
    ) {

        // This converts the height to be compatible with CSS declaration
        for (const item of items) {
            item.measure = item.measure * 0.75
        }
        
        // This converts the height to be compatible with CSS declaration
        for (const metric of metrics) {
            metric.level = metric.level * 0.75
        }

    }
}