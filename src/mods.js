import { BLOCKS } from "./blocks.js";
export const registry = [];
export function defineMod(m) {
  if (!m || (m.id !== 15 && m.id !== 16))
    throw new Error("mod id must be 15 or 16");
  if (typeof m.name !== "string" || !m.name)
    throw new Error("mod name must be non-empty string");
  if (typeof m.paint !== "function")
    throw new Error("mod paint must be function");
  if (registry.some((r) => r.id === m.id))
    throw new Error("mod id already registered: " + m.id);
  registry.push(m);
  BLOCKS[m.id] = m.name;
  return m;
}
