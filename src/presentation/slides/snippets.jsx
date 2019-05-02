
export const standardCode = `    import { OnInit, Component } from '@angular/core';
    
    import { SomeService } from '../../services/some.service';
    
    @Component({
        ...
    })
    class SomeComponent implements OnInit {
    
        constructor(
            public someService: SomeService
        ) {}

        ngOnInit() {
            this.someService.dispatchAction1();
            this.someService.dispatchAction2();
            this.someService.dispatchAction3();
        }
    }
`;

export const someServiceCode = `    import { Injectable } from '@angular/core';
    import { dispatch } from '@angular-redux/store';

    const actionOneCreator = () => ({
        type: 'ACTION_ONE'
    });

    const actionTwoCreator = () => ({
        type: 'ACTION_TWO'
    });

    const actionThreeCreator = () => ({
        type: 'ACTION_THREE'
    });

    @Injectable()
    class SomeService {
        @dispatch doAction1 = actionOneCreator;
        @dispatch doAction2 = actionTwoCreator;
        @dispatch doAction3 = actionThreeCreator;
    }
`;

export const someEpicsSideEffect = `    import { Injectable } from '@angular/core';
    import { Router } from '@angular/router';
    import { Epic } from 'redux-observable-decorator';
    import { ActionsObservable } from 'redux-observable';
    import { Action } from 'redux';
    import { tap } from 'rxjs/operators/tap';


    @Injectable()
    class SomeEpics {
         constructor(
            public router: Router   
         ) {}

         @Epic()
         reactToAction1 = (action$: ActionsObservable<Action>) => (
            action$.ofType('ACTION_ONE')
                .pipe(
                    // navigation side-effect
                    tap(() => this.router.navigateByUrl('/somePath'))
                )
         )
        
        @Epic()
        reactToAction2 = (action$: ActionsObservable<Action>) => (
            action$.ofType('ACTION_TWO')
                // ...
        )
        
        @Epic()
        reactToAction3 = (action$: ActionsObservable<Action>) => (
            action$.ofType('ACTION_THREE')
                // ...
        )
    }
`;

export const simpleSequenceUsingPayloadCode = `    @Epic()
    reactToAction1 = (action$: ActionsObservable<Action>) => (
       action$.ofType('ACTION_ONE')
           .pipe(
               tap(() => this.router.navigateByUrl('/somePath')),
               map((actionOne) => ({
                 type: 'ACTION_TWO',
                 payload: actionOne.payload.something
               }))
           )
    )
`;

export const simpleSequenceCode = `    @Epic()
    reactToAction1 = (action$: ActionsObservable<Action>) => (
       action$.ofType('ACTION_ONE')
           .pipe(
               tap(() => this.router.navigateByUrl('/somePath')),
               map(() => ({ type: 'ACTION_TWO' }))
           )
    )
`;

export const simpleSequenceDispatchingCode = `    this.someService.dispatchAction1();
    this.someService.dispatchAction2();
`;

export const simpleSequenceHandlingNavigationCode = `    @Epic()
    reactToAction1 = (action$: ActionsObservable<Action>) => (
       action$.ofType('ACTION_ONE')
           .pipe(
               mergeMap(() => this.router.navigateByUrl('/somePath')),
               mapTo({ type: 'ACTION_TWO' })
           )
    )
`;

export const simpleSequenceManyHandlingNavigationCode = `    @Epic()
    reactToAction1 = (action$: ActionsObservable<Action>) => (
       action$.ofType('ACTION_ONE')
           .pipe(
               mergeMap(() => this.router.navigateByUrl('/somePath')),
               mergeMap(() => [
                 { type: 'ACTION_TWO' },
                 { type: 'ACTION_THREE' }
               ])
           )
    )
`;

export const finalStandardCode = `    import { OnInit, Component } from '@angular/core';
    
    import { SomeService } from '../../services/some.service';
    
    @Component({
        ...
    })
    class SomeComponent implements OnInit {
    
        constructor(
            public someService: SomeService
        ) {}

        ngOnInit() {
            this.someService.dispatchAction1();
        }
    }
`;

export const finalSomeEpicsCode = `    import { Injectable } from '@angular/core';
    import { Epic } from 'redux-observable-decorator';
    import { ActionsObservable } from 'redux-observable';
    import { Action } from 'redux';


    @Injectable()
    class SomeEpics {
        @Epic()
        reactToAction1 = (action$: ActionsObservable<Action>) => (
            action$.ofType('ACTION_ONE')
                .pipe(
                    mergeMap(() => this.router.navigateByUrl('/somePath')),
                    mergeMap(() => [
                        { type: 'ACTION_TWO' },
                        { type: 'ACTION_THREE' }
                    ])
                )
        )
        
        @Epic()
        reactToAction2 = (action$: ActionsObservable<Action>) => (
            action$.ofType('ACTION_TWO')
                // ...
        )
        
        @Epic()
        reactToAction3 = (action$: ActionsObservable<Action>) => (
            action$.ofType('ACTION_THREE')
                // ...
        )
    }
`;
