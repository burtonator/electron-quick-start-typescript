// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

export class MyClass {

    public message: string = "hello world";

}

const myClass = new MyClass();
document.body.innerHTML = myClass.message;
