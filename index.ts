console.clear();
import { fromEvent } from 'rxjs';
import { distinctUntilKeyChanged, pluck } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilkeychangedd

// push buttons on keyboard no reaction on repeating push
const keys$ = fromEvent(document, 'keyup').pipe(
  distinctUntilKeyChanged<KeyboardEvent>('code'),
  pluck('key')
);

keys$.subscribe(console.log);
