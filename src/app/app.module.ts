import { TeacherService } from './shared/teacher.service';
import { SubjectService } from './shared/subject.service';
import { StudentService } from './shared/student.service';
import { SchoolclassService } from './shared/schoolclass.service';
import { SalaryService } from './shared/salary.service';
import { NoticeService } from './shared/notice.service';
import { GuardianService } from './shared/guardian.service';
import { FeeService } from './shared/fee.service';
import { EmarkService } from './shared/emark.service';
import { AppuserService } from './shared/appuser.service';
import { StaffService } from './shared/staff.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SmiconComponent } from './smicon/smicon.component';
import { StaffsComponent } from './staffs/staffs.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LocationComponent } from './location/location.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { GuardiansComponent } from './guardians/guardians.component';
import { GuardianComponent } from './guardians/guardian/guardian.component';
import { EmarksComponent } from './emarks/emarks.component';
import { EmarkComponent } from './emarks/emark/emark.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { AppusersComponent } from './appusers/appusers.component';
import { AppuserComponent } from './appusers/appuser/appuser.component';
import { FeesComponent } from './fees/fees.component';
import { FeeComponent } from './fees/fee/fee.component';
import { SchoolclassesComponent } from './schoolclasses/schoolclasses.component';
import { SchoolclassComponent } from './schoolclasses/schoolclass/schoolclass.component';
import { SalariesComponent } from './salaries/salaries.component';
import { SalaryComponent } from './salaries/salary/salary.component';
import { NoticesComponent } from './notices/notices.component';
import { NoticeComponent } from './notices/notice/notice.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SmiconComponent,
    StaffsComponent,
    StaffComponent,
    LocationComponent,
    InquiryComponent,
    StaffListComponent,
    TeachersComponent,
    TeacherComponent,
    StudentsComponent,
    StudentComponent,
    GuardiansComponent,
    GuardianComponent,
    EmarksComponent,
    EmarkComponent,
    SubjectsComponent,
    SubjectComponent,
    AppusersComponent,
    AppuserComponent,
    FeesComponent,
    FeeComponent,
    SchoolclassesComponent,
    SchoolclassComponent,
    SalariesComponent,
    SalaryComponent,
    NoticesComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
 
  providers: [StaffService, AppuserService, EmarkService, FeeService, GuardianService, NoticeService, SalaryService, SchoolclassService,StudentService, SubjectService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
