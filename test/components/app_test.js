import App from '../../src/components/app';
import {renderComponent, expect} from '../test_helper';

describe('App', ()=>{
  let component;
  beforeEach(()=>{
    component = renderComponent(App);
  });

  it('should contain comment-box', ()=>{
    expect(component.find('.comment-box')).to.exist;
  });
});
