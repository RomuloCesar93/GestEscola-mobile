import { Camera } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      Alert.alert('Foto capturada', photo.uri);
    }
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return <View><Alert title="Sem permissão para usar a câmera" /></View>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef} />
      <Button title="Alternar Câmera" onPress={toggleCameraType} />
      <Button title="Tirar Foto" onPress={takePicture} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
});
