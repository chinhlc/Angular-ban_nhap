import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class FormMessService {
  constructor( protected translate: TranslateService) {}

  public MessValidate(mess: string) {
    let validate = mess;
    this.translate.get(mess).subscribe((_mess) => {
      validate = _mess;
    });
    return validate;
  }
}
