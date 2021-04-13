

import { Component, OnInit } from '@angular/core';
import { TPLItem } from '../../../service/tplitem';
import { ActivatedRoute, Router } from '@angular/router';
import { TPLItemService } from '../../../service/tplitem.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-update-tplitem',
  templateUrl: './update-tplitem.component.html',
  styleUrls: ['./update-tplitem.component.css']
})
export class UpdateTPLItemComponent implements OnInit {

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

  updateTPLItem() {
    this.tplitemService.updateTPLItem(this.id, this.tplitem)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tplitem = new TPLItem();
    this.gotoList();
  }

  onSubmit() {
    this.updateTPLItem();    
  }

  gotoList() {
    this.router.navigate(['/tplitems']);
  }
}

