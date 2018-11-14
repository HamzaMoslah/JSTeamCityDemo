import $ from "jquery";
import Hello from "./hello.ts";

let hello = new Hello("Hamzawi !!!");

$("body").append(`greeting: ${hello.greeting()}`);
