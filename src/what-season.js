module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  else if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
    throw new Error ();
  }

  let monhts = ['winter', 'winter', 
                'spring', 'spring', 'spring', 
                'summer', 'summer', 'summer', 
                'autumn', 'autumn', 'autumn', 
                'winter'];

    return monhts[date.getMonth()];
};
