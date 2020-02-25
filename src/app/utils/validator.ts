import { ValidatorFn, AbstractControl } from '@angular/forms';

//校验密码：只能输入6-20个字母、数字、下划线  
export function regexValidator(nameRe: RegExp, validName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden || !control.value ? null : { [validName]: { value: control.value } };
    };
}
