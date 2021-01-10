import PlatformStatus from './storeInterface';
import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../helper/statuspageHelper';

class StatuspageStore extends PlatformStatus {
  constructor(platform, pageId) {
    const rawStatusStore = createRawStatusStore(platform, pageId);
    const summarizedStatusStore = createSummarizedStatusStore(rawStatusStore);
    super(platform, rawStatusStore, summarizedStatusStore);

    this._pageId = pageId;
  }
}

export default StatuspageStore;
