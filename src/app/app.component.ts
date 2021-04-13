import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {


   constructor(private router: Router) {}
 todayDate : Date = new Date();
 
 //dateFilter = (d: Date): boolean => {
   // const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
   // return day !== 0 && day !== 6;
  //}
  
  dateFilter(d: Date): boolean {
		const day = d.getDay();
    const month = d.getMonth();
		const todays_date = d.getDate();
		const todaysDateObject = new Date();
		const today = todaysDateObject.getDate();
    const actualMonth = todaysDateObject.getMonth();
    console.log(todays_date)

    	/** Prevent actual system date from being selected.*/
    if (month === actualMonth && todays_date === today) {
      return false;
    } else if (day !== 0 && day !== 6) {
      return true;
    } else {
      return false;
    }

		/** Prevent Saturday, Sunday.*/
//		return day !== 0 && day !== 6;
	}
		
 MainTabLinks = [
       {label: 'Home', link: '/home'},
       {label: 'Administration', link: '/user-role-mapping'},
       {label: 'Call-in Part List', link: '/call-in-part-historical'},
       {label: 'Transfer Part List', link: '/transfer-part-current'},
       {label: 'Voucher', link: '/current-voucher'},
       {label: 'Warranty Claim', link: '/daily-warranty-claim'},
       {label: 'Maintenance', link: '/manage-message-center'},
       {label: 'Audit Trail', link: '/call-in'},
       {label: 'WRP', link: '/add-new-wrp'},
 
       ];		
	
 HomeTabLinks = [
	    {label: 'Home', link: 'home'},
	    //The links below are temporary code used for showing how Angualar and RESTFul API work together for CQP/WRP project
	    {label: 'API Persistence Example', link: 'tplitems'}, 
	    {label: 'Material Table Example', link: 'table' },
	    {label: 'Insert and Stored Procedure Example', link: 'add'}, 
	    {label: 'Search API Example', link: 'search'}, 
	    {label: 'WRP Database Example', link: 'part-override'},
	    {label: 'Proposed UX', link: 'proposed-ux'},
	  ];
	  	
 WRPTabLinks = [
	    {label: 'Add new WRP', link: 'add-new-wrp'},
	    {label: 'WRP Summary Edit', link: 'wrp-summary-edit'},
	    {label: 'WRP Voucher Create', link: 'wrp-voucher-create'},
	    {label: 'Voucher Tracking Data', link: 'voucher-tracking-data'},
	    {label: 'Part Override', link: 'part-override'},
	    {label: 'View Current WRP Voucher', link: 'view-current-wrp-voucher'},
	    {label: 'View Historical WRP Voucher', link: 'view-historical-wrp-voucher'},
	  ];	
 
 AdministrationTabLinks = [
	    {label: 'User Role Mapping', link: 'user-role-mapping'},
	    {label: 'CQ Supplier Setup', link: 'cq-supplier-setup'},
	    {label: 'Supplier Profile', link: 'supplier-profile'},
	    {label: 'Labor/Handling', link: 'labor-handling'},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	  ];
 
 CallInPartListTabLinks = [
	    {label: 'Historical', link: 'call-in-part-historical'},
	    {label: 'Active', link: 'call-in-part-active'},
	    {label: 'Create Request', link: 'create-request'},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	  ];
 
 TransferPartListTabLinks = [
	    {label: 'Current', link: 'transfer-part-current'},
	    {label: 'Historical', link: 'transfer-part-historical'},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	  ];
 
 VoucherTabLinks = [
	    {label: 'Current Voucher', link: 'current-voucher'},
	    {label: 'Historical Voucher', link: 'historical-voucher'},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	  ];
 
 WarrantyClaimTabLinks = [
	    {label: 'Daily Warranty Claim', link: 'daily-warranty-claim'},
	    {label: 'Warranty Reports', link: 'warranty-reports'},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	  ];
 
 MaintenanceTabLinks = [
	    {label: 'Manage Message Center', link: 'manage-message-center'},
	    {label: 'Manage Part Cost', link: 'manage-part-cost'},
	    {label: 'Block Parts', link: 'block-parts'},
	    {label: 'Shipping Cost', link: 'shipping-cost'},
	    {label: 'Honda Holiday', link: 'honda-holiday'},
	    {label: 'WRP Updates', link: 'wrp-updates'},
	    {label: 'Manage Categories', link: 'manage-categories'},
	    {label: 'Manage BOM', link: 'manage-bom'},
	  
	  ];
 
 AuditTrailTabLinks = [
	    {label: 'Call-In', link: 'call-in'},
	    {label: 'Transfer Part List', link: 'audit-trail-transfer-part-list'},
	    {label: 'Voucher', link: 'audit-trail-voucher'},
	    {label: 'Administration', link: 'audit-trail-administration'},
	    {label: 'Category', link: 'audit-trail-category'},
	    {label: 'Bill Of Materials', link: 'audit-trail-bom'},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	    {label: '              '},
	  ];
 
 
  title = 'cqp-angular8-springboot-client';
  //selectedStatus: number;
  //selectedConclusion: number;

   findBySpecField(data, reqField, value, resField) {
    var container = data;
    for (var i = 0; i < container.length; i++) {
      if (container[i][reqField] == value) {
        return (container[i][resField]);
      }
    }
    return '';
  }
  
  //General tab
  
  onTabPanelClick(event, tab) {
   console.log("================  tab = " + tab.label + "====== event = " + event.label);
  }
 

  moveToSelectedTab($event) {
    var tabName = $event.tab.textLabel;
    console.log("================ tabName = " + tabName);
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
        for (let tabLink of this.MainTabLinks) {
             if (tabName == tabLink.label) {
                console.log("================ tabLink.link = " + tabLink.link);
                //(<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
                this.router.navigate([tabLink.link]);
             }
        }; 
    }
 }

  
  
}
