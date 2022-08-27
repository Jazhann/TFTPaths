import { TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from '../card/card.component';
import { PoolComponent } from './pool.component';

describe('PoolComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        PoolComponent,
        CardComponent
      ],
    }).compileComponents();
  }));

  it('should create a pool', () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const pool = fixture.debugElement.componentInstance;
    expect(pool).toBeTruthy();
  });

  it('should set form teamSize', () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const pool = fixture.debugElement.componentInstance;
    pool.ngOnInit();
    expect(pool.formFilters).toBeTruthy();
  });

  it('should select a Champion', () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const pool = fixture.debugElement.componentInstance;
    const mockChampion = pool.champions[0];
    pool.ngOnInit();
    pool.selectChampion(mockChampion);
    expect(pool.teamSize).toBe(1);
    expect(pool.rolesPool).toContain(mockChampion.roles[0]);
  });

  it('should select a Role', () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const pool = fixture.debugElement.componentInstance;
    const mockRole = pool.champions[0].roles[0];
    pool.ngOnInit();
    pool.selectRole(mockRole);
    expect(pool.teamSize).toBeGreaterThan(0);
  });

  it('should check if a role is selected', () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const pool = fixture.debugElement.componentInstance;
    const mockRole = pool.champions[0].roles[0];
    pool.ngOnInit();
    pool.selectRole(mockRole);
    expect(pool.checkRoleFilter(mockRole)).toBe(true);
  });

  it('should reset composition', () => {
    const fixture = TestBed.createComponent(PoolComponent);
    const pool = fixture.debugElement.componentInstance;
    const mockRole = pool.champions[0].roles[0];
    pool.ngOnInit();
    pool.selectRole(mockRole);
    pool.resetComposition();
    expect(pool.teamSize).toBe(0);
    expect(pool.rolesCount.lenght).toBeUndefined();
    expect(pool.rolesPool.lenght).toBeUndefined();
  });
});
