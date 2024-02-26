import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarInvitacionPage } from './agregar-invitacion.page';

describe('AgregarInvitacionPage', () => {
  let component: AgregarInvitacionPage;
  let fixture: ComponentFixture<AgregarInvitacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarInvitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
