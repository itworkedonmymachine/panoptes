import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../helper/statuspageHelper';

import platformStatuspageIdPairs from '../static/statuspagePairs';

export const statuspageStores = platformStatuspageIdPairs.map((pair) =>
  createRawStatusStore(pair.platform, pair.pageId)
);
export const statuspageTickerStores = statuspageStores.map((rawStatusStore) =>
  createSummarizedStatusStore(rawStatusStore)
);
