class PlatformStatus {
  constructor(platform, rawStatusStore, summarizedStatusStore) {
    this._platform = platform;
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
}

export default PlatformStatus;
