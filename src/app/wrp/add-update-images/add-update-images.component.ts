import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-update-images',
  templateUrl: './add-update-images.component.html',
  styleUrls: ['./add-update-images.component.css']
})


export class AddUpdateImagesComponent implements OnInit {
  
  displayedColumns: string[] = ['location', 'thumbnails', 'action'];
  
  public imagePath;
  imgURL: any;
  public message: string;
 
  previewOld(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  
  
  ///////////////////////////////////  Start ////////////////////////////
  
  fileData1: File = null;
  fileData2: File = null;
  fileData3: File = null;
  fileData4: File = null;
  fileData5: File = null;
  fileData6: File = null;
  
  previewUrl1:any = null;
  previewUrl2:any = null;
  previewUrl3:any = null;
  previewUrl4:any = null;
  previewUrl5:any = null;
  previewUrl6:any = null;
  
  
  fileProgress1(fileInput: any) {
      this.fileData1 = <File>fileInput.target.files[0];
      
      console.log("=================  fileProgress1 <File>fileInput.target.files[0] = " + <File>fileInput.target.files[0] );
      console.log("=================  fileProgress1 this.fileData1 = " + this.fileData1 );
      this.preview1();
  }
  
   fileProgress2(fileInput: any) {
      this.fileData2 = <File>fileInput.target.files[0];
      this.preview2();
  }
  
   fileProgress3(fileInput: any) {
      this.fileData3 = <File>fileInput.target.files[0];
      this.preview3();
  }
  
   fileProgress4(fileInput: any) {
      this.fileData4 = <File>fileInput.target.files[0];
      this.preview4();
  }
  
   fileProgress5(fileInput: any) {
      this.fileData5 = <File>fileInput.target.files[0];
      this.preview5();
  }
  
   fileProgress6(fileInput: any) {
      this.fileData6 = <File>fileInput.target.files[0];
      this.preview6();
  }
  
  
  
  preview1() {
    // Show preview 
    var mimeType = this.fileData1.type;
    
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData1); 
    
    
    reader.onload = (_event) => { 
      this.previewUrl1 = reader.result; 
      
    }
  }
  
  preview2() {
    // Show preview 
    var mimeType = this.fileData2.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData2); 
    
    reader.onload = (_event) => { 
      this.previewUrl2 = reader.result; 
    }
  }
  
  preview3() {
    // Show preview 
    var mimeType = this.fileData3.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData3); 
    
    reader.onload = (_event) => { 
      this.previewUrl3 = reader.result; 
    }
  }
  
  preview4() {
    // Show preview 
    var mimeType = this.fileData4.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData4); 
    
    reader.onload = (_event) => { 
      this.previewUrl4 = reader.result; 
    }
  }
  
  
  preview5() {
    // Show preview 
    var mimeType = this.fileData5.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData5); 
    
    reader.onload = (_event) => { 
      this.previewUrl5 = reader.result; 
    }
  }
  
  preview6() {
    // Show preview 
    var mimeType = this.fileData6.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData6); 
    
    reader.onload = (_event) => { 
      this.previewUrl6 = reader.result; 
    }
  }
  
  
  /////////////////////////////////////////  End /////////////////////////
  
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private http: HttpClient) { }
  
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
  
  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
  
  onSubmit() {
      const formData = new FormData();
      formData.append('file', this.fileData);
      this.http.post('url/to/your/api', formData)
        .subscribe(res => {
          console.log(res);
          //this.uploadedFilePath = res.data.filePath;
          alert('SUCCESS !!');
        }) 
  }
  

  //constructor() { }

  columns = [];
  //datas = [ 1, 2, 3, 4, 5, 6 ];
  
  datas: any[] = [
	  {id:  '1', preview: '"previewUrl1"' , file: '"fileProgress1($event)"'}, 
	  {id:  '2', preview: '"previewUrl2"' , file: '"fileProgress2($event)"'},
	  {id:  '3', preview: '"previewUrl3"' , file: '"fileProgress3($event)"'},
	  {id:  '4', preview: '"previewUrl4"' , file: '"fileProgress4($event)"'},
	  {id:  '5', preview: '"previewUrl5"' , file: '"fileProgress5($event)"'},
	  {id:  '6', preview: '"previewUrl6"' , file: '"fileProgress6($event)"'}
  ];
  
  
  
  dropdownOptions = [
      { label: 'BCM', value: 1 },
      { label: 'ACM', value: 2 },
      { label: 'CHART 1', value: 3 },
      { label: 'CHART 2', value: 4 },
      { label: 'DWG', value: 5 },
      { label: 'PIVOT', value: 6 },
  ];
  
  ngOnInit() {
  	  this.columns = [0];
  }

}
