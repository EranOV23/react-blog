import { getPostsRange } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

let mockPostsService = {
    getPostsRange: () => {
        return {then: cb => cb(true)};
    }
};

describe("get posts range action creator", ()=>{
    
    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
        spyOn(mockPostsService, "getPostsRange").and.callThrough();
    })

    it("should return posts range", ()=>{
        let thunked = getPostsRange(mockPostsService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);
        
        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getPostsRequset");
        expect(mockPostsService.getPostsRange).toHaveBeenCalled();

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getPostsRespond");
        expect(secondAction.response).toBe(true);

    });
})
