export const errorInServer = (err: unknown) => {
  return {
    error: true,
    status: 500,
    msg: 'Erro no servidor.',
    data: err,
  };
};
