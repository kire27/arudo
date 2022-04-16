import React from "react";

function Controls() {
    type myOwnType = 1 | 2 | 3;
    let variable: myOwnType = 3;
    console.log(variable);

    interface interfaceObject {
        first: string;
        second: number;
    }
    const object: interfaceObject = {
        first: "jeff",
        second: 33,
    };
    console.log(object);

    function toDo(a: number, b: number): void {
        console.log(a + b);
    }
    toDo(5, 8);

    type MyList = [number?, string?];
    const arr: MyList = [];
    arr.push(443);
    arr.push(684);
    arr.push("edf");
    console.log(arr);

    class Observable<T> {
        constructor(public value: T) {}
    }
    let x: Observable<number>;
    let y: Observable<interfaceObject>;
    let z: Observable<64>;

    return <div></div>;
}

export default Controls;
