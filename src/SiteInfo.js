
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
    return /__.+$/.exec(this.siteName)[0] || null;
  }
  get suffixDashed() {
    return this.suffix.replace(/_/g, '-');
  }

  get intfNameDashed() {
    return this.intfName.replace(/_/g, '-');
  }

  get hostName() {
    return this.vhost || this.intfNameDashed + this.suffixDashed + '.' + this.podDomain;
  }

  get baseUri() {
    return 'https://' + this.hostName + '/';
  }

  get cpRoot() {
    return this.baseUri + 'app/';
  }

  get cfgRoot() {
    return this.baseUri + 'cgi-bin/' + this.intfName +'.cfg';
  }

  get launchPage() {
    return this.cfgRoot + '/php/admin/launch.php';
  }

  get installer() {
    return 'https://installer-' + this.siteName.replace(/_/g, '-') + '.' + this.podDomain +
    '/RightNow.Installer.application?launch=' + this.cfgRoot + '&dbname=' + this.siteName +
    '&trace=true&lang=en_GB';
  }
  
}