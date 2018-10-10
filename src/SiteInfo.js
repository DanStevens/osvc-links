function escapeRegExp(str) {
  return str.replace(/[[\]/\{}()*+?.\\^$|]/g, "\\$&");
}

export default class SiteInfo {
  constructor(siteName, intfName, vhost = "", podDomain = "custhelp.com") {
    this._siteName = siteName;
    this._intfName = intfName;
    this._vhost = vhost;
    this._podDomain = podDomain;
  }

  get siteName() {
    return this._siteName;
  }

  set siteName(value) {
    this._siteName = value.trim().toLowerCase();
  }

  get intfName() {
    return this._intfName;
  }

  set intfName(value) {
    this._intfName = value.trim().toLowerCase();
  }

  get vhost() {
    return this._vhost;
  }

  set vhost(value) {
    this._vhost = value.trim().toLowerCase();
  }

  get podDomain() {
    return this._podDomain;
  }

  set podDomain(value) {
    this._podDomain = value.trim().toLowerCase();
  }

  get suffix() {
    let result = /__.+$/.exec(this.siteName);
    return result ? result[0] : '';
  }
  get suffixDashed() {
    let suffix = this.suffix;
    return suffix ? suffix.replace(/_/g, '-') : '';
  }

  get intfNameDashed() {
    let intfName = this.intfName;
    return intfName ? intfName.replace(/_/g, '-') : '';
  }

  get hostName() {
    return this.vhost || this.intfNameDashed + this.suffixDashed + '.' + this.podDomain;
  }

  get baseUri() {
    return `https://${this.hostName}/`;
  }

  get cpRoot() {
    return `${this.baseUri}app/`;
  }

  get cpHome() {
    return `${this.cpRoot}home`;
  }

  get cpAdmin() {
    return `${this.baseUri}ci/admin`;
  }

  get cpAbout() {
    return `${this.baseUri}ci/about`;
  }

  get cfgRoot() {
    return `${this.baseUri}cgi-bin/${this.intfName}.cfg`;
  }

  get launchPage() {
    return `${this.cfgRoot}/php/admin/launch.php`;
  }

  get installer() {
    return `https://installer-${this.siteName.replace(/_/g, '-')}.${this.podDomain}` +
      `/RightNow.Installer.application?launch=${this.cfgRoot}&dbname=${this.siteName}` +
      '&trace=true&lang=en_GB';
  }

  get accessInterface() {
    return `${this.cfgRoot}/php/admin/session/login.php`;
  }

  get scriptsRoot() {
    return `${this.cfgRoot}/php/custom/`;
  }

  get restApiRoot() {
    return `${this.baseUri}services/rest/connect`;
  }

  get connectApiWsdl() {
    return `${this.baseUri}services/soap/connect/soap?wsdl=typed`;
  }

  get connectApiWsdl1_2() {
    return `${this.baseUri}services/soap/connect/soap?wsdl=typed_v1.2`;
  }

  get kfApiWsdl() {
    return `${this.baseUri}services/soap/connect/kf_soap?wsdl`;
  }

  get chatApiWsdl() {
    return `${this.baseUri}services/soap/connect/chat_soap?wsdl`;
  }

  get legacyConnectApiWsdl() {
    return `${this.cfgRoot}/services/soap?wsdl=typed`;
  }

  get legacyConnectApiWsdl1_2() {
    return `${this.cfgRoot}/services/soap?wsdl=typed_v1.2`;
  }

  get legacyKfApiWsdl() {
    return `${this.cfgRoot}/services/kf_soap?wsdl`;
  }

  get legacyChatApiWsdl() {
    return `${this.cfgRoot}/services/chat_soap?wsdl`;
  }

  get launchArgs() {
    return `launch=${this.cfgRoot} dbname=${this.siteName} isNetworkDeployed=true`;
  }

  get cpAdminRegex() {
    return `https:\\/\\/${this.vhost ? escapeRegExp(this.vhost) : this.intfNameDashed}` +
           `(--[\\w-]*)?\\.${escapeRegExp(this.podDomain)}\\/ci\\/admin.*`;
  }

  isEqual(other) {
    return other === this || (
      this.siteName === other.siteName &&
      this.intfName === other.intfName &&
      this.vhost === other.vhost &&
      this.podDomain === other.podDomain
    );
  }

  copy() {
    return new SiteInfo(this.siteName, this.intfName, this.vhost, this.podDomain);
  }
  
}