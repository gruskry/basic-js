module.exports = function countCats(matrix) {
        let Cats = 0 ;
            for (let x of matrix) {
                for (let y of x) {
                    if (y === '^^')
                    Cats++;
                }
            }
            return Cats;
}
