import { Component, OnInit } from '@angular/core';
import { Departmentservice } from '../departmentservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

   department:Department=new Department()
   deptId!:number
  constructor(private departmentService:Departmentservice,private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.deptId=this.activatedRoute.snapshot.params['deptId'];
    this.departmentService.getDepartmentById(this.deptId).subscribe(data => {
      this.department=data;
    },
    error=>console.log(error));
  }
  
  updateDepartment(){
    this.departmentService.updateDepartmentById(this.deptId,this.department).subscribe(data=>{
      this.goToDepartmentList();
    }, error=>console.log(error)
    );
  }
  goToDepartmentList(){
    this.router.navigate(['departments'])
  }
}


