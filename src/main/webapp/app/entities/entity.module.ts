import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationH2RegionModule } from './region/region.module';
import { JhipsterSampleApplicationH2CountryModule } from './country/country.module';
import { JhipsterSampleApplicationH2LocationModule } from './location/location.module';
import { JhipsterSampleApplicationH2DepartmentModule } from './department/department.module';
import { JhipsterSampleApplicationH2TaskModule } from './task/task.module';
import { JhipsterSampleApplicationH2EmployeeModule } from './employee/employee.module';
import { JhipsterSampleApplicationH2JobModule } from './job/job.module';
import { JhipsterSampleApplicationH2JobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationH2RegionModule,
        JhipsterSampleApplicationH2CountryModule,
        JhipsterSampleApplicationH2LocationModule,
        JhipsterSampleApplicationH2DepartmentModule,
        JhipsterSampleApplicationH2TaskModule,
        JhipsterSampleApplicationH2EmployeeModule,
        JhipsterSampleApplicationH2JobModule,
        JhipsterSampleApplicationH2JobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationH2EntityModule {}
