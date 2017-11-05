import postsService from '../postsService';

const fullUrl = 'http://localhost:9090/api/posts';
postsService.url = fullUrl;

describe('check postsService methods', () => {

  // get all posts
  it('expect getAllPosts to return posts array', () => {
    expect.assertions(1);
    return postsService.getAllPosts()
      .then( data => expect(data).toHaveProperty("posts", expect.any(Array)) )
  });

  // get posts range
  it('expect getPostsRange to slice the posts array', () => {
    expect.assertions(1);
    return postsService.getPostsRange(0, 4)
      .then( data => expect(data.length).toBe(4) )
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
    return postsService.getPostInfo('AngularJS - Modules')
      .then( data => expect(data.title).toBe("AngularJS - Modules") );
  });

  // get post to edit
  it('expect getPostToEdit return same post sent as argument', () => {
    expect.assertions(1);
    return postsService.getPostToEdit('AngularJS - Modules')
      .then( data => expect(data.title).toBe("AngularJS - Modules") );
  });

  // searchPosts
  it('expect searchPosts return relevant posts', () => {
    expect.assertions(1);
    return postsService.searchPosts('category', 'javascript')
      .then( data => expect(data[0].tags.includes("JavaScript")).toBe(true) );
  });

});
