import PlatformStatus from './storeInterface';
import {
  createRawStatusStore,
  createSummarizedStatusStore,
} from '../store/statuspageStore';

class StatuspageStore extends PlatformStatus {
  constructor(platform, pageId) {
    const statusPageLink = `https://${pageId}.statuspage.io`;
    const rawStatusStore = createRawStatusStore(platform, pageId);
    const summarizedStatusStore = createSummarizedStatusStore(rawStatusStore);
    super(platform, statusPageLink, rawStatusStore, summarizedStatusStore);

    this._pageId = pageId;
  }
}

export default StatuspageStore;
