import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
	greeting = 'World';
	changeHandler (e) {
		this.greeting = e.target.value;
	}
}
