import './App.css';
import ModelViewer from './modalViewer';
import { useParams } from 'react-router-dom';

function App() {
  const params = useParams()
  console.log(params)
  return (
    <ModelViewer scale="40" modelPath={params?.url} />
  );
}

export default App;
