export class Alert {
	id: number;
	supplier: string;
	status: string;
	alert_test: string;

	
	constructor(supplier: string, status: string, alert_test: string){
	
		this.supplier = supplier;
		this.status = status;
		this.alert_test= alert_test;
		}
	
}