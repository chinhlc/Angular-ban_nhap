import {Injectable} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";
import {Meta} from "@angular/platform-browser";

@Injectable()
export class ThemeManager {
  constructor(protected storage: LocalStorageService, private meta: Meta,) {}

  buildTheme() {
    let styles = '';
    let color = '#1EB4B4';
    let store = this.storage.retrieve('store');
    if (store !== null && !!store['theme_color'] && store['theme_color']) {
      color = store['theme_color'];
    }
    if (color.charAt(0) !== '#') {
      color = '#'+color;
    }

    // Overide $green-one;
    styles += '.blue {';
    styles += '    color: '+color+';';
    styles += '}';
    styles += '.btn-default,.btn-default[disabled]:focus,.btn-default[disabled]:active, .btn-default[disabled]:hover,';
    styles += '.btn-default,.btn-default:focus,.btn-default:active, .btn-default:hover{';
    styles += '    background: '+color+';';
    styles += '}';

    let css = document.createElement("style");
    css.id = 'idstyle-theme-manager';
    css.type = "text/css";
    css.innerHTML = styles;

    if (document.getElementById('idstyle-theme-manager') === null) {
      document.body.appendChild(css);
    } else {
      document.getElementById('idstyle-theme-manager').remove();
      document.body.appendChild(css);
    }
  }
}
