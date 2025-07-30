import api from './api';

export async function getPartidas() {
  const response = await api.get('/partidas');
  return response.data;
}

export async function postPartida(partida: { local: string; horario: string }) {
  const response = await api.post('/partidas', partida);
  return response.data;
}