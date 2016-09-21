import * as myModule from "my-module";
import {myMember} from "my-module";
import {foo, bar} from "my-module";
import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from "my-module";
import "my-module";
import myDefault from "my-module";
import myDefault, {foo, bar} from "my-module";

const myFunction = () => {};

export {myFunction};
export const foo = Math.sqrt(2);
export default function() {}
export default class {}
