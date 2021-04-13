//===================  Temporary Example code ========================================
import { TPLItemDetailsComponent } from './home/example/tplitem-details/tplitem-details.component';
import { SearchTPLItemComponent } from './home/example/search-tplitem/search-tplitem.component';
import { CreateTPLItemComponent } from './home/example/create-tplitem/create-tplitem.component';
import { TPLItemListComponent } from './home/example/tplitem-list/tplitem-list.component';
import { TPLItemTableComponent } from './home/example/tplitem-table/tplitem-table.component';
import { UpdateTPLItemComponent } from './home/example/update-tplitem/update-tplitem.component';
import { ProposedUxComponent } from './home/example/proposed-ux/proposed-ux.component';

//========================================================================================================================
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartOverrideComponent } from './wrp/part-override/part-override.component';
import { AddNewWrpComponent } from './wrp/add-new-wrp/add-new-wrp.component';
import { ViewCurrentWrpVoucherComponent } from './wrp/view-current-wrp-voucher/view-current-wrp-voucher.component';
import { WrpSummaryEditComponent } from './wrp/wrp-summary-edit/wrp-summary-edit.component';
import { WrpVoucherCreateComponent } from './wrp/wrp-voucher-create/wrp-voucher-create.component';
import { VoucherTrackingDataComponent } from './wrp/voucher-tracking-data/voucher-tracking-data.component';
import { ViewHistoricalWrpVoucherComponent } from './wrp/view-historical-wrp-voucher/view-historical-wrp-voucher.component';
import { AssignMtcComponent } from './wrp/assign-mtc/assign-mtc.component';
import { SetCriteriaComponent } from './wrp/set-criteria/set-criteria.component';
import { AddUpdateImagesComponent } from './wrp/add-update-images/add-update-images.component';
import { ManualVoucherDataUploadComponent } from './wrp/manual-voucher-data-upload/manual-voucher-data-upload.component';
import { WrpVoucherDetailComponent } from './wrp/wrp-voucher-detail/wrp-voucher-detail.component';


import { HomeComponent } from './home/home.component';
import { UserRoleMappingComponent } from './administration/user-role-mapping/user-role-mapping.component';
import { CqSupplierSetupComponent } from './administration/cq-supplier-setup/cq-supplier-setup.component';
import { SupplierProfileComponent } from './administration/supplier-profile/supplier-profile.component';
import { LaborHandlingComponent } from './administration/labor-handling/labor-handling.component';

import { HistoricalComponent } from './call-in-part-list/historical/historical.component';
import { ActiveComponent } from './call-in-part-list/active/active.component';
import { CreateRequestComponent } from './call-in-part-list/create-request/create-request.component';

import { CurrentComponent } from './transfer-part-list/current/current.component';
import { TplHistoricalComponent } from './transfer-part-list/historical/tpl-historical.component';

import { CurrentVoucherComponent } from './voucher/current-voucher/current-voucher.component';
import { HistoricalVoucherComponent } from './voucher/historical-voucher/historical-voucher.component';

import { DailyWarrantyClaimsComponent } from './warranty-claim/daily-warranty-claims/daily-warranty-claims.component';
import { WarrantyReportsComponent } from './warranty-claim/warranty-reports/warranty-reports.component';

import { BlockPartsComponent } from './maintenance/block-parts/block-parts.component';
import { HondaHolidayComponent } from './maintenance/honda-holiday/honda-holiday.component';
import { ManageBomComponent } from './maintenance/manage-bom/manage-bom.component';
import { ManageCategoriesComponent } from './maintenance/manage-categories/manage-categories.component';
import { ManageMessageCenterComponent } from './maintenance/manage-message-center/manage-message-center.component';
import { ManagePartCostComponent } from './maintenance/manage-part-cost/manage-part-cost.component';
import { ShippingCostComponent } from './maintenance/shipping-cost/shipping-cost.component';
import { WrpUpdatesComponent } from './maintenance/wrp-updates/wrp-updates.component';

import { AdministrationComponent } from './audit-trail/administration/administration.component';
import { BillOfMaterialsComponent } from './audit-trail/bill-of-materials/bill-of-materials.component';
import { CallInComponent } from './audit-trail/call-in/call-in.component';
import { CategoryComponent } from './audit-trail/category/category.component';
import { TransferPartListComponent } from './audit-trail/transfer-part-list/transfer-part-list.component';
import { VoucherComponent } from './audit-trail/voucher/voucher.component';


const routes: Routes = [
  { path: '', redirectTo: 'tplitem', pathMatch: 'full' },
  { path: 'tplitems', component: TPLItemListComponent },
  { path: 'add', component: CreateTPLItemComponent },
  { path: 'search', component: SearchTPLItemComponent },
  { path: 'table', component: TPLItemTableComponent },
  { path: 'update/:id', component: UpdateTPLItemComponent },
  { path: 'details/:id', component: TPLItemDetailsComponent },
  { path: 'part-override', component: PartOverrideComponent },
  { path: 'proposed-ux', component: ProposedUxComponent },
   
   
  
  { path: 'add-new-wrp', component: AddNewWrpComponent },
  { path: 'view-current-wrp-voucher', component: ViewCurrentWrpVoucherComponent },
  { path: 'wrp-summary-edit', component: WrpSummaryEditComponent },
  { path: 'wrp-voucher-create', component: WrpVoucherCreateComponent },
  { path: 'voucher-tracking-data', component: VoucherTrackingDataComponent },
  { path: 'view-historical-wrp-voucher', component: ViewHistoricalWrpVoucherComponent },
  { path: 'assign-mtc', component: AssignMtcComponent },
  { path: 'set-criteria', component: SetCriteriaComponent },
  { path: 'add-update-images', component: AddUpdateImagesComponent },
  { path: 'manual-voucher-data-upload', component: ManualVoucherDataUploadComponent },
  { path: 'wrp-voucher-detail', component: WrpVoucherDetailComponent },
  
  { path: 'home', component: HomeComponent },
  { path: 'user-role-mapping', component: UserRoleMappingComponent },
  { path: 'cq-supplier-setup', component: CqSupplierSetupComponent },
  { path: 'supplier-profile', component: SupplierProfileComponent },
  { path: 'labor-handling', component: LaborHandlingComponent },
  
  { path: 'call-in-part-historical', component: HistoricalComponent },
  { path: 'call-in-part-active', component: ActiveComponent },
  { path: 'create-request', component: CreateRequestComponent },
  
  { path: 'transfer-part-current', component: CurrentComponent },
  { path: 'transfer-part-historical', component: TplHistoricalComponent },
  
  { path: 'current-voucher', component: CurrentVoucherComponent },
  { path: 'historical-voucher', component: HistoricalVoucherComponent },
  
  { path: 'daily-warranty-claim', component: DailyWarrantyClaimsComponent },
  { path: 'warranty-reports', component: WarrantyReportsComponent },
  
  { path: 'block-parts', component: BlockPartsComponent },
  { path: 'honda-holiday', component: HondaHolidayComponent },
  { path: 'manage-bom', component: ManageBomComponent },
  { path: 'manage-categories', component: ManageCategoriesComponent },
  { path: 'manage-message-center', component: ManageMessageCenterComponent },
  { path: 'manage-part-cost', component: ManagePartCostComponent },
  { path: 'shipping-cost', component: ShippingCostComponent },
  { path: 'wrp-updates', component: WrpUpdatesComponent },
  
  { path: 'audit-trail-administration', component: AdministrationComponent },
  { path: 'audit-trail-bom', component: BillOfMaterialsComponent },
  { path: 'call-in', component: CallInComponent },
  { path: 'audit-trail-category', component: CategoryComponent },
  { path: 'audit-trail-transfer-part-list', component: TransferPartListComponent },
  { path: 'audit-trail-voucher', component: VoucherComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
