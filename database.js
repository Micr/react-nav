fs = require('fs');
path = require('path');

var database = {
    read: {
        filter: function (name, value, cb) {
            fs.readFile(path.resolve('./data/offers.json'), 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
              var filterFunction;
              function lowerBound(value) {
                  return value >= bounds[1];
              }
              function doubleBound(value) {
                  return value >= bounds[0] && value <= bounds[1];
              }
              var bounds = value.split('-');
              if (bounds[1] === "") {
                  filterFunction = lowerBound;
              } else {
                  filterFunction = doubleBound;
              }
              var offers = JSON.parse(data);
              offers.filter(function (offer) {
                  return filterFunction(offer);
              });
            });
        }
    }
};

module.exports = database;
