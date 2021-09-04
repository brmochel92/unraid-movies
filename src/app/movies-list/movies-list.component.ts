import { Component, OnInit } from '@angular/core'; 

interface movieInterface {
  title: string;
  distributedBy: string;
  movieRating: string;
  description: string;
  uploadedDate: string;
  releasedDate: string;
  genre: string;
  views: number;
  coverImage: string;
  movieResolution: string;
  movieAudio: string;

}

const movieArray: movieInterface[]=[
  {
    title: '1917',
    distributedBy: 'Universal Pictures',
    movieRating: 'R',
    description: `April 6th, 1917. As a regiment assembles 
    to wage war deep in enemy territory, two soldiers are 
    assigned to race against time and deliver a message that 
    will stop 1,600 men from walking straight into a deadly trap. ... 
    Two British soldiers are sent to deliver an urgent message to an 
    isolated regiment.`,
    uploadedDate: '08-08-2021',
    releasedDate: '12-25-2019',
    genre: 'Action',
    views: 3,
    coverImage: '../../assets/images/movieCovers/1917.png',
    movieResolution: '4K (HEVC Main 10 HDR)',
    movieAudio: 'English (7.1 Channel)'
  },
  {
    title: 'A Quiet Place Part II',
    distributedBy: 'Paramount',
    movieRating: 'PG-13',
    description: `Following the events at home, the Abbott family now 
    face the terrors of the outside world. Forced to venture into the 
    unknown, they realize that the creatures that hunt by sound are not 
    the only threats that lurk beyond the sand path.`,
    uploadedDate: '08-08-2021',
    releasedDate: '05-28-2021',
    genre: 'Thriller',
    views: 5,
    coverImage: '../../assets/images/movieCovers/aquietplacepartII.jpg',
    movieResolution: '4K (HEVC Main 10 HDR)',
    movieAudio: 'English (AC3 5.1)'
  },
  {
    title: 'After We Collided',
    distributedBy: 'Voltage Pictures',
    movieRating: 'R',
    description: `Tessa finds herself struggling with her complicated 
    relationship with Hardin; she faces a dilemma that could change their 
    lives forever.`,
    uploadedDate: '08-08-2021',
    releasedDate: '10-23-2020',
    genre: 'Romance',
    views: 2,
    coverImage: '../../assets/images/movieCovers/afterwecollided.jpg',
    movieResolution: '1080p (H.264)',
    movieAudio: 'English (AAC Stereo)'
  },
  {
    title: 'Alone',
    distributedBy: 'Mill House Motion Pictures',
    movieRating: 'R',
    description: `A cold-blooded killer hunts a recently widowed young 
    woman in the Pacific Northwest wilderness after she escapes from his 
    remote cabin.`,
    uploadedDate: '08-08-2021',
    releasedDate: '10-16-2020',
    genre: 'Thriller',
    views: 1,
    coverImage: '../../assets/images/movieCovers/alone.jpg',
    movieResolution: '1080p (H.264)',
    movieAudio: 'English (AC3 5.1)'
  },
  {
    title: 'An American Pickle',
    distributedBy: 'Sony Pictures',
    movieRating: 'R',
    description: `An immigrant worker at a pickle factory is accidentally 
    preserved for 100 years and wakes up in modern day Brooklyn. He learns 
    his only surviving relative is his great grandson, a computer coder who 
    he can’t connect with.`,
    uploadedDate: '08-08-2021',
    releasedDate: '08-06-2020',
    genre: 'Comedy',
    views: 5,
    coverImage: '../../assets/images/movieCovers/anamericanpickle.jpg',
    movieResolution: '1080p (H.264)',
    movieAudio: 'English (AAC 5.1)'
  },
  {
    title: 'Aquaman',
    distributedBy: 'Warner Bros. Pictures',
    movieRating: 'R',
    description: `Once home to the most advanced civilization on Earth, 
    Atlantis is now an underwater kingdom ruled by the power-hungry King 
    Orm. With a vast army at his disposal, Orm plans to conquer the remaining 
    oceanic people and then the surface world. Standing in his way is Arthur 
    Curry, Orm's half-human, half-Atlantean brother and true heir to the 
    throne.`,
    uploadedDate: '08-08-2021',
    releasedDate: '12-21-2018',
    genre: 'Action',
    views: 3,
    coverImage: '../../assets/images/movieCovers/aquaman.jpg',
    movieResolution: '4K (HEVC Main 10 HDR)',
    movieAudio: 'English (AC3 5.1)'
  },
  {
    title: 'Arkansas',
    distributedBy: 'Rhea Films',
    movieRating: 'R',
    description: `Kyle and Swin live by the orders of an Arkansas-based 
    drug kingpin named Frog, whom they've never met. But when a deal goes 
    horribly wrong, the consequences are deadly.`,
    uploadedDate: '08-08-2021',
    releasedDate: '05-05-2020',
    genre: 'Drama',
    views: 1,
    coverImage: '../../assets/images/movieCovers/arkansas.jpg',
    movieResolution: '1080p (H.264)',
    movieAudio: 'English (AC3 5.1)'
  },
  {
    title: 'Bad Boys For Life',
    distributedBy: 'Columbia Pictures',
    movieRating: 'R',
    description: `Marcus and Mike are forced to confront new threats, career 
    changes, and midlife crises as they join the newly created elite team AMMO 
    of the Miami police department to take down the ruthless Armando Armas, 
    the vicious leader of a Miami drug cartel.`,
    uploadedDate: '08-08-2021',
    releasedDate: '01-14-2020',
    genre: 'Action',
    views: 2,
    coverImage: '../../assets/images/movieCovers/badboysforlife.jpg',
    movieResolution: '1080p (H.264)',
    movieAudio: 'English (AAC 5.1)'
  },
  {
    title: 'Beetlejuice',
    distributedBy: 'Warner Bros. Pictures',
    movieRating: 'R',
    description: `Thanks to an untimely demise via drowning, a young couple 
    end up as poltergeists in their New England farmhouse, where they fail to 
    meet the challenge of scaring away the insufferable new owners, who want 
    to make drastic changes. In desperation, the undead newlyweds turn to an 
    expert frightmeister, but he's got a diabolical agenda of his own.`,
    uploadedDate: '08-08-2021',
    releasedDate: '08-31-2020',
    genre: 'Action',
    views: 1,
    coverImage: '../../assets/images/movieCovers/beetlejuice.jpg',
    movieResolution: '4K (HEVC Main 10 HDR)',
    movieAudio: 'English (AC3 5.1)'
  },
  {
    title: 'Bill & Ted Face the Music',
    distributedBy: 'Metro-Goldwyn-Mayer',
    movieRating: 'R',
    description: `Yet to fulfill their rock and roll destiny, the now 
    middle-aged best friends Bill and Ted set out on a new adventure when 
    a visitor from the future warns them that only their song can save life 
    as we know it. Along the way, they are helped by their daughters, a 
    new batch of historical figures and a few music legends—to seek the 
    song that will set their world right and bring harmony to the universe.`,
    uploadedDate: '08-08-2021',
    releasedDate: '08-28-2020',
    genre: 'Comedy',
    views: 1,
    coverImage: '../../assets/images/movieCovers/billandtedfacethemusic.jpg',
    movieResolution: '1080p (H.264)',
    movieAudio: 'English (AC3 5.1)'
  },

]

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  containMovieArray = movieArray;

}
