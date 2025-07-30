import api from './api';

export async function getEquipes() {
  const response = await api.get('/equipes');
  return response.data;
}

export async function postEquipe(equipe: { nome: string }) {
  const response = await api.post('/equipes', equipe);
  return response.data;
}