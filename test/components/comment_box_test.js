import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', ()=>{

  let component;
  beforeEach(()=>{
      component = renderComponent(CommentBox);
  });

  it('should have the correct class', ()=>{
    expect(component).to.have.class('comment-box');
  });
  it('should contain textarea', ()=>{
    expect(component.find('textarea')).to.exist;
  });

  it('should contain a button', ()=>{
    expect(component.find('button')).to.exist;
  });

  describe('entering text', ()=>{
    beforeEach(()=>{
      component.find('textarea').simulate('change','new text');
    });

    it('shows text entered',()=>{
      expect(component.find('textarea')).to.have.value('new text');
    });

    it('clears out after submit',()=>{
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });
});
