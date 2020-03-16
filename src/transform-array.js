module.exports = function transform(arr) {
    if(typeof(arr) !== 'object' || (!Array.isArray(arr))) {
        throw new Error();
    };

    if (arr.length === 0) return arr;

    let result = [];
    let sequences = ['--discard-prev', '--discard-next' , '--double-prev' , '--double-next'];
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--double-prev') {
                if (i !== 0) {
                    result.push(arr[i - 1]);
                }
            }
            

            else if(arr[i] === '--double-next') {
                if(i < arr.length - 1) {
                    result.push(arr[i + 1]);
                }
            }

            else if(arr[i] === '--discard-prev') {
                if(result.length > 0) {
                    result.pop();
                }
            }

            else if(arr[i] === '--discard-next') {
                if(i < arr.length - 1) {
                    i++;
                }
            }
        
        
            else {
                result.push(arr[i]);
            }
    }   
    return result;
};