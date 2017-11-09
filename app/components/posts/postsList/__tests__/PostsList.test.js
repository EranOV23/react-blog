import React from 'react';
import PostsList from '../PostsList';
import '../postsList.scss';
import '../post.scss';

// import renderer from 'react-test-renderer';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('PostsList', () => {

  const testProps = {
    posts: [
      {
        title: "AngularJS - Modules",
        author: "Ilan Cohen",
        date: "1421186400000",
        tags: ["JavaScript", "AngularJS"],
        mdPath:  "data/posts/md/AngularJS - Modules.md",
        htmlPath: "data/posts/html/AngularJS - Modules.html",
        description: "You can think of a module as a container"
      }
    ],
    query: "",
  };

  it('renders correctly' , () => {
    const wrapper = shallow(
      <PostsList {...testProps} />
    );


    expect(wrapper.find('Post').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

});