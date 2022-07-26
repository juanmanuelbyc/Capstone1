const speakers = [
   {
      id: 1,
      name: 'Yochai Benkler',
      position: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
      activity: 'ddddddd dfd fdf sdfd dfsdf dfd sfdsf dsfsd fsd dsfsd dsfsd dsfsdf fdsf',
      imageUrl: 'images/project/speaker1-pic.jpg',
      },
   {
      id: 2,
      name: 'SohYeong Noh',
      position: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
      activity: 'ddddddd dfd fdf sdfd dfsdf dfd sfdsf dsfsd fsd dsfsd dsfsd dsfsdf fdsf',
      imageUrl: 'images/project/speaker1-pic.jpg',
      },
   {
      id: 3,
      name: 'Lila Tretikov',
      position: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
      activity: 'ddddddd dfd fdf sdfd dfsdf dfd sfdsf dsfsd fsd dsfsd dsfsd dsfsdf fdsf',
      imageUrl: 'images/project/speaker1-pic.jpg',
      },
   {
      id: 4,
      name: 'Kilnam Chon',
      position: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
      activity: 'ddddddd dfd fdf sdfd dfsdf dfd sfdsf dsfsd fsd dsfsd dsfsd dsfsdf fdsf',
      imageUrl: 'images/project/speaker1-pic.jpg',
      },
   {
      id: 5,
      name: 'Julia Leda',
      position: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
      activity: 'ddddddd dfd fdf sdfd dfsdf dfd sfdsf dsfsd fsd dsfsd dsfsd dsfsdf fdsf',
      imageUrl: 'images/project/speaker1-pic.jpg',
      },
   {
      id: 6,
      name: 'Ryan Merkley',
      position: 'Berkman Professor of Entreprenurial Legal Studies at Harvard Law School',
      activity: 'ddddddd dfd fdf sdfd dfsdf dfd sfdsf dsfsd fsd dsfsd dsfsd dsfsdf fdsf',
      imageUrl: 'images/project/speaker1-pic.jpg',
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