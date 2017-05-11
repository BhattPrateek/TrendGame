var db = require('./config');

const insertSearch = (searchString, callback) => {
  db('trends').insert({name: searchString}).then((resp) => {
    callback(null, resp);
  }).catch((err) => {
    callback(err, null);
  });
};

const getSearches = (numberOfSearches, callback) => {
  db.select('name').from('trends').then((data) => {
    let dataSlice = data.slice(numberOfSearches * -1);
    let dataClean = dataSlice.map((search) => {
      return search.name;
    });
    dataClean.reverse();
    callback(null, dataClean);
  }).catch((err) => {
    callback(err, null);
  });
};

module.exports.insertSearch = insertSearch;
module.exports.getSearches = getSearches;
