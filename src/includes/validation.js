import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from 'vee-validate';
import {required, min, max,} from '@vee-validate/rules';

export default {
    install(app){
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);
        app.component('ErrorMessage', ErrorMessage);

        defineRule('required', required);
        defineRule('min', min);
        defineRule('max', max);

        configure({
            generateMessage:(ctx)=>{
                const messages = {
                    required: `Это поле ${ctx.field} является обязательным.`,
                    min: `Поле ${ctx.field} слишком короткое`,
                    max: `Поле ${ctx.field} слишком длинное`
                };

                const message = messages[ctx.rule.name]
                    ? messages[ctx.rule.name]
                    : `Поле ${ctx.field} недействительно`;

                return message;
            }
        })
    }
}