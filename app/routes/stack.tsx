import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamSelectionScreen from '../screens/TelaCadastroEquipes';
import TeamFormScreen from '../screens/TelaFormularioEquipe';
import HomeScreen from '../screens/TelaInicio';
import LoginScreen from '../screens/TelaLogin';
import NewMatchScreen from '../screens/TelaNovaPartida';
import EquipePorModalidadeScreen from '../screens/TelasEquipesModalidades';
import CameraScreen from '../screens/CameraScreen';


export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TeamSelection: undefined;
  TeamForm: { sport: string };
  NewMatch: undefined;
  EquipesModalidade: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="TeamSelection" component={TeamSelectionScreen} options={{ title: 'Cadastro de Equipes' }} />
        <Stack.Screen name="TeamForm" component={TeamFormScreen} options={{ title: 'Formulário de Equipe' }} />
        <Stack.Screen name="NewMatch" component={NewMatchScreen} options={{ title: 'Nova Partida' }} />
        <Stack.Screen name="EquipesModalidade" component={EquipePorModalidadeScreen} options={{ title: 'Equipes por Modalidade' }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Câmera' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}