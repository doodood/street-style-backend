
import * as moment from 'moment';

const Utils = exports;

Utils.info = (message) => {
    console.log('[INFO][' + moment().format('YYYY.MM.DD HH:mm:ss') + ']: ' +  message);
}

Utils.error = (error) => {
    console.error('[ERROR][' + moment().format('YYYY.MM.DD HH:mm:ss') + ']: ' +  error);
}
