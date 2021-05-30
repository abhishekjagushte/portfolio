import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndAchievementsComponent } from './skills-and-achievements.component';

describe('SkillsAndAchievementsComponent', () => {
  let component: SkillsAndAchievementsComponent;
  let fixture: ComponentFixture<SkillsAndAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndAchievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
