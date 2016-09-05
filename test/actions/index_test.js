import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {save_comment} from '../../src/actions';

describe('actions', ()=>{

  describe('save_comment', ()=>{

    it('has the correct type',()=>{
      const action = save_comment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload',()=>{
      const action = save_comment('new comment');
      expect(action.payload).to.equal('new comment');
    });
  });


});
