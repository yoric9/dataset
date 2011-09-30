//UNESCO Data
var dataset = $.dataset({url : '/data/unesco_primary_enrolment.json'});

//ISO Data
var dataset = $.dataset({url : '/data/iso_3166.json', strict: true});

//Sort countries starting with a by length of official name
dataset
  .filterRows(function(row) {
    return row('name')[0].toLowerCase() === 'a';
  })
  .sortBy(function(a,b) {
    return (a('official_length') > b('official_name'));
});

//Google Spreadsheet
var transform = function(response_json) {
  return response_json["feed"];
}
var dataset = $.dataset({
  url : '/data/google_spreadsheet.json',
  transform: transform
});
