import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisInvitacionesPage } from './mis-invitaciones.page';

describe('MisInvitacionesPage', () => {
  let component: MisInvitacionesPage;
  let fixture: ComponentFixture<MisInvitacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisInvitacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
