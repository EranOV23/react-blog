import postsService from '../postsService';
import moment from 'moment';


const fullUrl = 'http://localhost:9090/api/posts';
postsService.url = fullUrl;

describe('check postsService methods', () => {

  // get all posts
  it('expect getAllPosts to return posts array', () => {
    expect.assertions(1);
    const expected = [{
      _id: "5a22f52afc2cc6d645d19471",
      title: "Beach Bum",
      img: "https://i.pinimg.com/564x/c4/cb/80/c4cb802ab0f22028489d248f61942103.jpg",
      author: "Eran Ovadia",
      date: "1421186400000",
      tags: ["Vodka", "Liqueurs"],
      mdPath: "data/posts/md/AngularJS - Controllers.md",
      htmlPath: "data/posts/html/AngularJS - Controllers.html",
      description: "Meat: 2 oz Grey goose la poire flavored vodka \n Produce: 1 Mint, Fresh \n Condiments: 1 dash Grenadine, 1 oz Lime juice, Fresh \n Beer, Wine & Liquor: 1/2 oz Cointreau, 1/2 oz Maraschino liqueur"
    }
  ];
    return postsService.getAllPosts()
      .then( data => expect(data).toEqual(expect.arrayContaining(expected)) )
  });

  // get posts length
  it('expect getPostsLength to return posts array length', () => {
    expect.assertions(1);
    return postsService.getPostsLength()
      .then(data => expect(data).toBeGreaterThanOrEqual(1));
  });

  // get post info
  it('expect getPostInfo return same post sent as argument', () => {
    expect.assertions(1);
    return postsService.getPostInfo('Beach Bum')
      .then( data => expect(data.title).toBe("Beach Bum") );
  });

  // get post to edit
  it('expect getPostToEdit return same post sent as argument', () => {
    expect.assertions(1);
    return postsService.getPostToEdit('Beach Bum')
      .then( data => expect(data.title).toBe("Beach Bum") );
  });

  // searchPosts
  it('expect searchPosts return relevant posts', () => {
    expect.assertions(1);
    return postsService.searchPosts('search', 'gin')
      .then( (data) => {
        if(data[0])
          return expect(JSON.stringify(data[0]).toLowerCase().includes("gin")).toBe(true)
      }
    );
  });

  // filter categories
  it('expect filter categories return relevant posts', () => {
    expect.assertions(1);
    return postsService.searchPosts('category', 'Vodka')
      .then( (data) => {
        if(data[0])
          return expect(data[0].tags.includes("Vodka")).toBe(true)
      });
  });

  // filter authors
  it('expect filter authors return relevant posts', () => {
    expect.assertions(1);
    return postsService.searchPosts('authors', 'eran')
      .then( (data) => {
        if(data[0])
          return expect(data[0].author).toBe("Eran Ovadia")
      });
  });

  // filter dates
  it('expect filter dates return relevant posts', () => {
    expect.assertions(1);
    return postsService.searchPosts('month', 'January-2015')
      .then( (data) => {
        if(data[0])
          return expect(moment(parseInt(data[0].date)).format("MMMM-YYYY")).toBe("January-2015")
      });
  });

});
