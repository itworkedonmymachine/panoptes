import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../helper/statusioHelper';

import platformStatusIdPairs from '../static/statusioPairs';

export const statusioStores = platformStatusIdPairs.map((pair) =>
  createRawStatusStore(pair.platform, pair.statusId)
);
export const statusioTickerStores = statusioStores.map((rawStatusStore) =>
  createSummarizedStatusStore(rawStatusStore)
);
