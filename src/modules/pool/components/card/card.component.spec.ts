import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CardComponent
      ],
    }).compileComponents();
  }));

  it('should create a card', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const card = fixture.debugElement.componentInstance;
    expect(card).toBeTruthy();
  });

  it('should get a imageUrl', () => {
    const mockResponse = 'url(../../assets/images/champions/johndoe.png)';
    const fixture = TestBed.createComponent(CardComponent);
    const card = fixture.debugElement.componentInstance;
    expect(card.getImage('johndoe').changingThisBreaksApplicationSecurity).toEqual(mockResponse);
  });

  it('should emit a value', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const card = fixture.debugElement.componentInstance;
    let valueEmitted;
    card.championClicked.subscribe( event =>{
      valueEmitted = event;
    })
    card.selectChampion('John Doe');
    expect(valueEmitted).toBe('John Doe');
  });
});
