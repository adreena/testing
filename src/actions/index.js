import {SAVE_COMMENT} from './types.js';

export function save_comment(new_comment){
  console.log(new_comment);
  return {
    type: SAVE_COMMENT,
    payload: new_comment
  };
}
