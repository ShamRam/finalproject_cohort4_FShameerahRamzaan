import { StaffComponent } from './../staff/staff.component';
import { StaffService } from 'src/app/shared/staff.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  constructor(private service:StaffService,
  private dialog : MatDialog) { }

listData: MatTableDataSource<any>;
DisplayedColumns: string[] = ['id', 'firstname', 'lastname', 'dob', 'emailid', 'phonenumber', 'address', 'nicnumber', 'role', 'ispermanentstaff', 'actions'];
@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
searchKey: string;

  ngOnInit(): void {
    this.service.getStaffs().Subscribe(
      list => {
        let array  = lsit.map(item => {
          return { 
            id:item.id,
            ...item.payload.val()
          };

          this.listData = new MatTableDataSource(array);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;

        });

      }
    );
  }

  onSearchClear(){
    this.searchKey= "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
this.dialog.open(StaffComponent, dialogConfig)
  }
  onEdit(row){
    this.service.populateForm(row)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
this.dialog.open(StaffComponent, dialogConfig)
  }

  onDelete(id){
    if (confirm('Are you sure to delete this record?'))
    this.service.deleteStaff(id);
  
  }
}
