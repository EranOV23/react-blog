import { getPostsLength } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

let mockPostsService = {
    getPostsLength: () => {
        return {then: cb => cb(true)};
    }
};

describe("get posts length action creator", ()=>{
    
    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
        spyOn(mockPostsService, "getPostsLength").and.callThrough();
    })

    it("should return posts length", ()=>{
        let thunked = getPostsLength(mockPostsService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);
        
        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getPostsRequset");
        expect(mockPostsService.getPostsLength).toHaveBeenCalled();

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getPostsLength");
        expect(secondAction.length).toBe(true);

    });
})
