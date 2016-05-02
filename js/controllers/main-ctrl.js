angular
  .module('vr')
  .controller('mainController', function() {
    var vm = this; //viewmodel
    vm.appTitle = 'Visit Rome',
    vm.searchInput = '',
    vm.sights = [
      {
        "name": "Colosseum",
        "desc": "Iconic ancient Roman gladiatorial arena",
        "longDesc": "The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built. ",
        "img": "http://www.aesu.com/wp-content/uploads/2013/09/Colosseum.jpg",
        "openH": "08",
        "openM": "30",
        "closedH": "15",
        "closedM": "30",
        "address": "Piazza del Colosseo",
        "phone": "+390 6 3996 7700",
        "prices": "adult/reduced incl Roman Forum & Palatino 12/7.50"
      },
      {
        "name": "Pantheon",
        "desc": "Landmark Roman church & historic tombs",
        "longDesc": "The Pantheon is a building in Rome, Italy, on the site of an earlier building commissioned by Marcus Agrippa during the reign of Augustus. The present building was completed by the emperor Hadrian and probably dedicated about 126 AD.",
        "img": "http://www.mejplacehostel.com/wp-content/uploads/2015/12/Pantheon.jpg",
        "openH": "09",
        "openM": "00",
        "closedH": "19",
        "closedM": "30",
        "address": "Piazza della Rotonda"
      },
      {
        "id": 3,
        "name": "Trevi Fountain",
        "desc": "Iconic 18th-century sculpted fountain",
        "longDesc": "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Pietro Bracci.",
        "img": "http://www.beautytour.info/wp-content/uploads/2016/01/Trevi-Fountain-Rome-Italia.jpg",
        "address": "Piazza di Trevi"
      },
      {
        "id": 4,
        "name": "Vatican Museums",
        "desc": "Museum in Vatican City",
        "long-desc": "The Vatican Museums are the museums of the Vatican City and are located within the city's boundaries.",
        "img": "http://blogs-images.forbes.com/forbestravelguide/files/2013/03/TheVaticanMuseumsInterior_FB.jpg",
        "openH": "09",
        "openM": "00",
        "closedH": "16",
        "closedM": "00",
        "address": "Viale Vaticano",
        "phone": "+390 6 6988 4676",
        "prices": "adult/reduced 16/8, last Sun of month free"
      }
    ],
    vm.links = [
      {
        "href": "#", 
        "linkName": "Explore"
      },
      {
        "href": "#", 
        "linkName": "Hotels"
      },
      {
        "href": "#", 
        "linkName": "Food"
      },
      {
        "href": "#", 
        "linkName": "Survival Guide"
      },
      {
        "href": "#", 
        "linkName": "Map"
      },
      {
        "href": "#", 
        "linkName": "Emergency"
      }
    ]
  });