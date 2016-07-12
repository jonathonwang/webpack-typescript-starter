// Import Sass -- Separated at Compile Time
import '../sass/app.scss';
// Partial Imports
import { Greeter } from './partial';

( () => {

	let greeter = new Greeter("world");
	console.log(greeter);
	console.log(greeter.greeting);
})();
