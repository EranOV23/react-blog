import { getAllPosts } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

let mockPostsService = {
    getAllPosts: () => {
        return {then: cb => cb(true)};
    }
};

describe("get all posts action creator", ()=>{

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
        spyOn(mockPostsService, "getAllPosts").and.callThrough();
    });

    it("should get all posts", ()=> {
        let thunked = getAllPosts(mockPostsService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);

        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getPostsRequset");
        expect(mockPostsService.getAllPosts).toHaveBeenCalled();

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getPostsRespond");
        expect(secondAction.posts).toBe(true);
        
    });
});

