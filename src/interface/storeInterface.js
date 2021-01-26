class PlatformStatus {
  constructor(platform, statusPageLink, rawStatusStore, summarizedStatusStore) {
    this._platform = platform;
    this._statusPageLink = statusPageLink;
    this._rawStatusStore = rawStatusStore;
    this._summarizedStatusStore = summarizedStatusStore;
  }

  get platform() {
    return this._platform;
  }

  get rawStatusStore() {
    return this._rawStatusStore;
  }

  get summarizedStatusStore() {
    return this._summarizedStatusStore;
  }

  get statusPageLink() {
    return this._statusPageLink;
  }
}

export default PlatformStatus;
