const speakers = [
   {
      id: 1,
      name: '1909 Royal Pioneer',
      position: 'Gentleman’s motorcycle built for reliability and smoothness, not built to a price.',
      activity: 'A very well styled, advanced machine for the times that used their own engine design and chassis.',
      imageUrl: 'images/royal1909.jpg',
      },
   {
      id: 2,
      name: '1936 Harley VLD',
      position: 'Announced in July 1929 as a replacement for the inlet-over-exhaust “pocket valve” twins.',
      activity: 'Despite strong marketing and abundant features, the new VL was not an instant success.',
      imageUrl: 'images/harleyVLD.jpg',
      },
   {
      id: 3,
      name: '1955 Goggo 200 DeLuxe',
      position: 'Using very stylish “Deco” steel bodies and trim, Goggos were all enclosed, full body scooters.',
      activity: 'Over about ten years of production 100, 125, 150 and 200cc machines were manufactured.',
      imageUrl: 'images/gogo200.jpg',
      },
   {
      id: 4,
      name: 'The American Daredevil',
      position: 'Evel Knievels rocket bike used to jump over of Snake River Canyon in Idaho. ',
      activity: 'Knievel engaged experts to help him build the “bike,” including Navy engineer Robert Truax.',
      imageUrl: 'images/rocketbike.jpg',
      },
   {
      id: 5,
      name: '1974 Ducati 750 Super',
      position: 'Championship winning 750 cc V-Twin, a race modified 750GT designed by Fabio Taglioni.',
      activity: 'Riding 750GTs, in 1972 Paul Smart and Bruno Spaggiari finished first and second at Imola 200.',
      imageUrl: 'images/ducati1974.jpg',
      },
   {
      id: 6,
      name: 'HD XR750 Cut away bike',
      position: 'This bike illustrates the most dominant production racer ever built',
      activity: 'Today’s XR750 racers are very similar to the first “alloy” versions from 1972.',
      imageUrl: 'images/harley750.jpg',
      }
]

document.querySelector('.speakers-container').innerHTML = speakers.map((speaker) =>
   `<div class="speaker-card flex">
   <div class="speaker-image">
      <img class="chess-board" src="images/chess-board.jpg">
      <img class="speaker-pic" src=${speaker.imageUrl}>
   </div>
   <div class="speaker-info">
      <h4 class="speaker-name">${speaker.name}</h4>
      <h5 class="speaker-pos">${speaker.position}</h5>
      <div class="grey-line"></div>
      <p class="speaker-act">${speaker.activity}</p>
   </div>
 </div>`).join('');