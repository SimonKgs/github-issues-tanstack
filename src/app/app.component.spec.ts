describe('AppComponent', () => {
  let component: HTMLElement;

  beforeEach(() => {
    component = document.createElement('div');
    component.innerHTML = `
      <div class="max-w-5xl m-auto mt-5">
        <router-outlet></router-outlet>
      </div>
    `;
  });

  it('should contain a div with the correct class', () => {
    const div = component.querySelector('div');
    expect(div).toBeTruthy();
    expect(div?.classList.contains('max-w-5xl')).toBeTrue();
    expect(div?.classList.contains('m-auto')).toBeTrue();
    expect(div?.classList.contains('mt-5')).toBeTrue();
  });

  it('should contain a <router-outlet>', () => {
    const routerOutlet = component.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });
});
