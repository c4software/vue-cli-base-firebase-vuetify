import dev from './dev'
import prod from './prod'
import {isDebug} from "../helpers/utils";

let data = isDebug() ? dev : prod;

export default data
