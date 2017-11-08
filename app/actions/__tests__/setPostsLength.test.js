import { setPostsLength } from '../creators';

let mockDispatch = {
    dispatch: (action) => {}
};

describe("set posts length action creator", ()=> {

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
    })

    it("should set posts length", ()=> {

      expect(mockDispatch.dispatch).toHaveBeenCalledTimes(0);
      expect(setPostsLength().type).toBe("setPostsLength");
      expect(setPostsLength(10).length).toBe(10);

    })
});