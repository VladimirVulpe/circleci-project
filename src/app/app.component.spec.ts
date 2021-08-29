import { async, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'circleci-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('circleci-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('circleci-project app is running!');
  });

  // it('should change text on button click', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Good morning and hello world!');
  // });

  it('should have this initial text before button click', () => {
    
    const fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;

    expect(component.btnVal).toBe('hello world');
  }); 

  it('should click on button and change text content', waitForAsync(() => {
    
    const fixture = TestBed.createComponent(AppComponent);
    let component = fixture.componentInstance;
    let buttonElement = fixture.debugElement.nativeElement.querySelector('button');
    let label = fixture.debugElement.nativeElement.querySelector('label');

    spyOn(component, 'setButtonText');
    spyOnProperty(component, "btnVal", "get").and.returnValue('Good morning and hello world!');
    //Trigger click event after spyOn
    buttonElement.click('Good morning and hello world!');

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.setButtonText).toHaveBeenCalled();

      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('[aria-label="Message Body"]')?.textContent?.trim()).toEqual('Good morning and hello world!');
      expect(component.btnVal.trim()).toEqual('Good morning and hello world!');
      expect(label.textContent.trim()).toEqual('Good morning and hello world!');
    });
  })); 
});
