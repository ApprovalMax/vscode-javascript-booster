/*$ { fixture: 'should-trigger-at-if', expected: true } $*/

function test() {
    let a;
    if (true) { /*# { pos: 6 } #*/
        a = 1;
    } else {
        a = 0;
    }
}

/*$ { fixture: 'should-trigger-all-inside-if', expected: true } $*/

function test() {
    let a;
    if (true) {
        a = 1; /*# { pos: 11 } #*/
    } else {
        a = 0;
    }
}

/*$ { fixture: 'should-trigger-with-return', expected: true } $*/

function test() {
    if (true) { /*# { pos: 6 } #*/
        return 1;
    } else {
        return 0;
    }
}

/*$ { fixture: 'should-not-trigger-if-if-has-other-statements', expected: false } $*/

function test() {
    let a;
    if (true) {
        a = 1; /*# { pos: 11 } #*/
        let b = 2;
    } else {
        a = 0;
    }
}
