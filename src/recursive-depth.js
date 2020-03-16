module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) return 1;
        else {
            let depth = 0
            arr.map(el => el instanceof Array ? depth=Math.max(this.calculateDepth(el), depth):depth)

            return ++depth;
        }
        
    }
}