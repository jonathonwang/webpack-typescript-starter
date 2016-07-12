// Import Sass -- Separated at Compile Time
import '../sass/app.scss';

// NPM Dependency Imports
import * as Vue from 'vue';
// Partial Imports
import Tasks from './partial';
( () => {

	const VueContainer = new Vue ({
		el: 'html',
		components: {
			Tasks
		}
	});

})();
