import { cp } from './cp.js';
import { rm } from "./rm.js";

export const mv = async (props) => {
  const copied = await cp(props, true);
  if (copied) {
    await rm(props);
  }
}