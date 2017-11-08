import postsList from '../postsList';

const posts = postsList.posts;

describe('postsList to have a property of posts array with post items in it', () => {

  it('expect postsList to have property of posts', ()=> {
    expect(postsList).toHaveProperty("posts", expect.any(Array));
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("author", expect.any(String))
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("title", expect.any(String))
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("date", expect.any(String))
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("description", expect.any(String))
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("tags", expect.any(Array))
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("mdPath", expect.any(String))
  });

  it('expect posts array to have at least post item', ()=> {
    expect(posts[0]).toHaveProperty("htmlPath", expect.any(String))
  });

  it('expect posts List to not be empty', ()=> {
    expect(posts.length).toBeGreaterThanOrEqual(1)
  });
});
