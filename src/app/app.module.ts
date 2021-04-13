import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTPLItemComponent } from './home/example/create-tplitem/create-tplitem.component';
import { TPLItemDetailsComponent } from './home/example/tplitem-details/tplitem-details.component';
import { TPLItemListComponent } from './home/example/tplitem-list/tplitem-list.component';
import { UpdateTPLItemComponent } from './home/example/update-tplitem/update-tplitem.component';
import { SearchTPLItemComponent } from './home/example/search-tplitem/search-tplitem.component';
import { TPLItemTableComponent } from './home/example/tplitem-table/tplitem-table.component';
import { ProposedUxComponent, DialogContentExampleDialog, CustomDateFormatMonthYear, CustomDateFormat1, CustomDateFormat2 } from './home/example/proposed-ux/proposed-ux.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { MatDialogModule} from '@angular/material/dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
//import 'hammerjs';



import { MatTabsModule, 
	MatToolbarModule, 
	MatIconModule, 
	MatSidenavModule, 
	MatListModule, 
	MatButtonModule } from  '@angular/material';
	
import { PartOverrideComponent } from './wrp/part-override/part-override.component';
import { AddNewWrpComponent } from './wrp/add-new-wrp/add-new-wrp.component';
import { WrpSummaryEditComponent } from './wrp/wrp-summary-edit/wrp-summary-edit.component';
import { WrpVoucherCreateComponent } from './wrp/wrp-voucher-create/wrp-voucher-create.component';
import { VoucherTrackingDataComponent } from './wrp/voucher-tracking-data/voucher-tracking-data.component';
import { ViewCurrentWrpVoucherComponent } from './wrp/view-current-wrp-voucher/view-current-wrp-voucher.component';
import { ViewHistoricalWrpVoucherComponent } from './wrp/view-historical-wrp-voucher/view-historical-wrp-voucher.component';
import { AssignMtcComponent } from './wrp/assign-mtc/assign-mtc.component';
import { SetCriteriaComponent } from './wrp/set-criteria/set-criteria.component';
import { AddUpdateImagesComponent } from './wrp/add-update-images/add-update-images.component';
import { ManualVoucherDataUploadComponent } from './wrp/manual-voucher-data-upload/manual-voucher-data-upload.component';
import { CurrentVoucherDetailComponent } from './wrp/current-voucher-detail/current-voucher-detail.component';
import { WrpVoucherDetailComponent } from './wrp/wrp-voucher-detail/wrp-voucher-detail.component';
import { HomeComponent } from './home/home.component';
import { UserRoleMappingComponent } from './administration/user-role-mapping/user-role-mapping.component';
import { CqSupplierSetupComponent } from './administration/cq-supplier-setup/cq-supplier-setup.component';
import { SupplierProfileComponent } from './administration/supplier-profile/supplier-profile.component';
import { LaborHandlingComponent } from './administration/labor-handling/labor-handling.component';
import { HistoricalComponent } from './call-in-part-list/historical/historical.component';
import { TplHistoricalComponent } from './transfer-part-list/historical/tpl-historical.component';
import { ActiveComponent } from './call-in-part-list/active/active.component';
import { CreateRequestComponent } from './call-in-part-list/create-request/create-request.component';
import { CurrentComponent } from './transfer-part-list/current/current.component';
import { HistoricalVoucherComponent } from './voucher/historical-voucher/historical-voucher.component';
import { CurrentVoucherComponent } from './voucher/current-voucher/current-voucher.component';
import { DailyWarrantyClaimsComponent } from './warranty-claim/daily-warranty-claims/daily-warranty-claims.component';
import { WarrantyReportsComponent } from './warranty-claim/warranty-reports/warranty-reports.component';
import { ManageMessageCenterComponent } from './maintenance/manage-message-center/manage-message-center.component';
import { ManagePartCostComponent } from './maintenance/manage-part-cost/manage-part-cost.component';
import { BlockPartsComponent } from './maintenance/block-parts/block-parts.component';
import { ShippingCostComponent } from './maintenance/shipping-cost/shipping-cost.component';
import { HondaHolidayComponent } from './maintenance/honda-holiday/honda-holiday.component';
import { WrpUpdatesComponent } from './maintenance/wrp-updates/wrp-updates.component';
import { ManageCategoriesComponent } from './maintenance/manage-categories/manage-categories.component';
import { ManageBomComponent } from './maintenance/manage-bom/manage-bom.component';
import { CallInComponent } from './audit-trail/call-in/call-in.component';
import { TransferPartListComponent } from './audit-trail/transfer-part-list/transfer-part-list.component';
import { VoucherComponent } from './audit-trail/voucher/voucher.component';
import { AdministrationComponent } from './audit-trail/administration/administration.component';
import { CategoryComponent } from './audit-trail/category/category.component';
import { BillOfMaterialsComponent } from './audit-trail/bill-of-materials/bill-of-materials.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTPLItemComponent,
    TPLItemDetailsComponent,
    TPLItemListComponent,
    UpdateTPLItemComponent,
    SearchTPLItemComponent,
    TPLItemTableComponent,
    PartOverrideComponent,
    AddNewWrpComponent,
    WrpSummaryEditComponent,
    WrpVoucherCreateComponent,
    VoucherTrackingDataComponent,
    ViewCurrentWrpVoucherComponent,
    ViewHistoricalWrpVoucherComponent,
    AssignMtcComponent,
    SetCriteriaComponent,
    AddUpdateImagesComponent,
    ManualVoucherDataUploadComponent,
    CurrentVoucherDetailComponent,
    WrpVoucherDetailComponent,
    HomeComponent,
    UserRoleMappingComponent,
    CqSupplierSetupComponent,
    SupplierProfileComponent,
    LaborHandlingComponent,
    HistoricalComponent,
    TplHistoricalComponent,
    ActiveComponent,
    CreateRequestComponent,
    CurrentComponent,
    HistoricalVoucherComponent,
    CurrentVoucherComponent,
    DailyWarrantyClaimsComponent,
    WarrantyReportsComponent,
    ManageMessageCenterComponent,
    ManagePartCostComponent,
    BlockPartsComponent,
    ShippingCostComponent,
    HondaHolidayComponent,
    WrpUpdatesComponent,
    ManageCategoriesComponent,
    ManageBomComponent,
    CallInComponent,
    TransferPartListComponent,
    VoucherComponent,
    AdministrationComponent,
    CategoryComponent,
    BillOfMaterialsComponent,
    ProposedUxComponent,
    DialogContentExampleDialog,
    CustomDateFormat1, 
    CustomDateFormat2
   
  ],
  
   entryComponents: [
    ProposedUxComponent, DialogContentExampleDialog,
  ],
  
  
  imports: [
	    BrowserModule,
	    AppRoutingModule,
	    FormsModule,
	    HttpClientModule,
	    MaterialModule,
	    BrowserAnimationsModule,
	    FlexLayoutModule,
	    ReactiveFormsModule,
	    MatTabsModule,
	    MatToolbarModule,
	    MatSidenavModule,
	    MatListModule,
	    MatButtonModule,
	    MatIconModule,
	    GridModule,
	    DropDownsModule,
	   
	   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   todayDate : Date = new Date();
}
