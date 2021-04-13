

import { TPLItem } from '../../../service/tplitem';
import { Component, OnInit, Input } from '@angular/core';
import { TPLItemService } from '../../../service/tplitem.service';
import { TPLItemListComponent } from '../tplitem-list/tplitem-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-tplitem-details',
  templateUrl: './tplitem-details.component.html',
  styleUrls: ['./tplitem-details.component.css']
})
export class TPLItemDetailsComponent implements OnInit {

  id: number;
  tplitem: TPLItem;

  constructor(private route: ActivatedRoute,private router: Router,
    private tplitemService: TPLItemService) { }

  ngOnInit() {
    this.tplitem = new TPLItem();

    this.id = this.route.snapshot.params['id'];
    
    this.tplitemService.getTPLItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.tplitem = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['tplitems']);
  }
}
