import './stylesheets/main.css';

// Small helpers you might want to keep
import './helpers/context_menu.js';
import './helpers/external_links.js';

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote, ipcRenderer } from 'electron';

// const app = remote.app;

function download() {
	console.log('Downloading');
	ipcRenderer.send('download', {
		url: 'http://markdaggett.com/images/ExpertJavaScript-ch6.pdf',
		filename: `ExpertJavaScript-ch6.pdf`,
	});
}

document.querySelector('#btn').addEventListener('click', download);
