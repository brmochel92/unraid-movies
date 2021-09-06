import { Component, OnInit } from '@angular/core';

interface upcomingMoviesInterface {
  title: string;
  distributedBy: string;
  movieRating: string;
  description: string;
  releaseDate: string;
  genre: string;
  coverImage: string;
}

const upcomingMoviesArray: upcomingMoviesInterface[]= [
  {
    title: `Don't Breathe 2`,
    distributedBy: 'Sony Pictures',
    movieRating: 'R',
    description: `The sequel is set in the years following the initial deadly 
    home invasion, where Norman Nordstrom (Stephen Lang) lives in quiet solace 
    until his past sins catch up to him.`,
    releaseDate: '08-13-2021',
    genre: 'Thriller',
    coverImage: '../../assets/images/movieCovers/dontbreathe2.jpg',
  },
  {
    title: 'The Killing of Kenneth Chamberlain',
    distributedBy: 'Gravitas Ventures',
    movieRating: 'R',
    description: `The events that led to the death of Kenneth Chamberlain 
    Sr., an elderly African American veteran with bipolar disorder, who was 
    killed during a conflict with police officers who were dispatched to check 
    on him.`,
    releaseDate: '09-17-2021',
    genre: 'Thriller',
    coverImage: '../../assets/images/movieCovers/killingofkenneth.jpeg',
  },
  {
    title: 'Candyman',
    distributedBy: 'Universal Pictures',
    movieRating: 'R',
    description: `In present day, a decade after the last of the Cabrini towers 
    were torn down, Anthony and his partner move into a loft in the now gentrified 
    Cabrini. A chance encounter with an old-timer exposes Anthony to the true story 
    behind Candyman. Anxious to use these macabre details in his studio as fresh grist 
    for paintings, he unknowingly opens a door to a complex past that unravels his 
    own sanity and unleashes a terrifying wave of violence.`,
    releaseDate: '08-27-2021',
    genre: 'Horror',
    coverImage: '../../assets/images/movieCovers/candyman.png',
  },
  {
    title: 'Halloween Kills',
    distributedBy: 'Blumhouse Productions',
    movieRating: 'R',
    description: `An injured Laurie Strode leads a vigilante mob to hunt down 
    unstoppable killer Michael Myers and end his reign of terror once and for 
    all.`,
    releaseDate: '10-15-2021',
    genre: 'Horror',
    coverImage: '../../assets/images/movieCovers/halloweenkills.jpg',
  },
  {
    title: 'Ghostbusters: Afterlife',
    distributedBy: 'Sony Pictures',
    movieRating: 'PG-13',
    description: `When a single mother and her two children move to a new 
    town, they soon discover that they have a connection to the original 
    Ghostbusters and their grandfather's secret legacy.`,
    releaseDate: '11-11-2021',
    genre: 'Comedy',
    coverImage: '../../assets/images/movieCovers/ghostbustersafterlife.jpg',
  },
  {
    title: 'Spider-Man: No Way Home',
    distributedBy: 'Sony Pictures',
    movieRating: 'PG-13',
    description: `Peter Parker's relaxing European vacation takes an 
    unexpected turn when Nick Fury shows up in his hotel room to recruit 
    him for a mission. The world is in danger as four massive elemental 
    creatures -- each representing Earth, air, water and fire -- emerge 
    from a hole torn in the universe. Parker soon finds himself donning 
    the Spider-Man suit to help Fury and fellow superhero Mysterio stop 
    the evil entities from wreaking havoc across the continent.`,
    releaseDate: '12-17-2021',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/spidermannowayhome.jpg',
  },
  {
    title: 'The Matrix Resurrections',
    distributedBy: 'Warner Bros. Pictures',
    movieRating: 'R',
    description: `The Matrix Resurrections is an upcoming American science 
    fiction action film produced, co-written, and directed by Lana 
    Wachowski. It is the fourth installment in The Matrix film series.`,
    releaseDate: '12-22-2021',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/matrixresurrection.jpg',
  },
  {
    title: `The King's Man`,
    distributedBy: '20th Century Studios',
    movieRating: 'R',
    description: `One man must race against time to stop history's worst 
    tyrants and criminal masterminds as they get together to plot a war that 
    could wipe out millions of people and destroy humanity.`,
    releaseDate: '12-22-2021',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/kingsman.jpg',
  },
  {
    title: 'Morbius',
    distributedBy: 'Sony Pictures',
    movieRating: 'PG-13',
    description: `Biochemist Michael Morbius tries to cure himself of a 
    rare blood disease, but when his experiment goes wrong, he inadvertently 
    infects himself with a form of vampirism instead.`,
    releaseDate: '01-28-2022',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/morbiusimage.jpg',
  },
  {
    title: 'The Batman',
    distributedBy: 'DC Films',
    movieRating: 'PG-13',
    description: `The Riddler plays a deadly game of cat and mouse with 
    Batman and Commissioner Gordon in Gotham City.`,
    releaseDate: '03-04-2022',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/thebatman.jpg',
  },
  {
    title: 'The Jurassic World: Dominion',
    distributedBy: 'Universal Pictures',
    movieRating: 'PG-13',
    description: `Jurassic World: Dominion is an upcoming American 
    science fiction adventure film directed by Colin Trevorrow, who 
    wrote the screenplay with Emily Carmichael, based on a story by 
    Trevorrow and his writing partner, Derek Connolly.`,
    releaseDate: '06-10-2022',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/jurassicdominion.jpg',
  },
  {
    title: 'Top Gun: Maverick',
    distributedBy: 'Paramount Pictures',
    movieRating: 'PG-13',
    description: `Pete "Maverick" Mitchell keeps pushing the envelope 
    after years of service as one of the Navy's top aviators. He must 
    soon confront the past while training a new squad of graduates for 
    a dangerous mission that demands the ultimate sacrifice.`,
    releaseDate: '05-27-2022',
    genre: 'Action',
    coverImage: '../../assets/images/movieCovers/topgunmaverick.jpg',
  },
  
]

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  searchedKeyword: string;

  constructor() {
    this.searchedKeyword = "";
  }

  ngOnInit(): void {
  }

  containUpcomingMovieArray = upcomingMoviesArray;

}
