export const getCustomMessage = (type: string) => {
    var messages = {
      '404': 'No se encontro el elemento',
      '505': 'Error interno',
      '403': 'No Autorizado',
      'default': 'Un error ha sucedido'
    };
    return messages[type] || messages['default'];
  }