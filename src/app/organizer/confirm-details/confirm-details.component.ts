import { Component, OnInit } 	from '@angular/core';
import { Location }				from '@angular/common';
import { Router }				from '@angular/router';

@Component({
  selector: 'confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {
	selectedPackages = [];
	packageNames = [];

	constructor(private location: Location,
				private router	: Router	) { }

	ngOnInit() {
		this.selectedPackages = JSON.parse(localStorage.selectedPacks);
	}

	purchase() {
		if (localStorage.newEvent !== undefined) {
			let event = JSON.parse(localStorage.newEvent)

			//event.packageID = this.selectedPack.toString();
			//localStorage.setItem('newEvent', JSON.stringify(event));

			//let path = ['/home'];
			let path = ['/organizer', 'event', event.id, 'purchase'];
			//let path = ['/home', {outlets: {spa: ['event', event.id, 'confirmation']}}];
			this.router.navigate(path);
			//let path = ['/event', this.event.id, 'purchase'];
			//this.router.navigate(path);
		}
	}

	goBack(): void {
		this.location.back();
	}

}
