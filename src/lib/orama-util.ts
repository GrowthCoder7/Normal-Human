// src/lib/orama-utils.ts (concept snippet)
import { OramaManager } from "./orama";
export async function recreateOramaIndexForAccount(accountId: string){
  const mgr = new OramaManager(accountId);
  await mgr.initialize();
  // optionally: clear and re-insert emails from DB
  // mgr.clear() // implement in OramaManager if needed
}
