import { TestBed, inject } from '@angular/core/testing';

import { HeaderInterceptorService } from './header-interceptor.service';

describe('HeaderInterceptorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ HeaderInterceptorService ]
        });
    });

    it('should be created',
        inject([ HeaderInterceptorService ],
            (headerInterceptorService: HeaderInterceptorService) => {
                expect(headerInterceptorService).toBeTruthy();
            }
        )
    );
});
