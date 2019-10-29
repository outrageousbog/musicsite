import {State} from './State';

export interface Song {
  state: State;
  name: string;
  id: string;
  artist: string;
}
