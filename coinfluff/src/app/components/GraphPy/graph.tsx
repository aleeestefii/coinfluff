import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

interface DataPoint {
  timestamp: string;
  close: number;
}

interface GraphProps {}

const Graph: React.FC<GraphProps> = () => {
  const [historicalData, setHistoricalData] = useState<DataPoint[]>([]);
  const [predictedData, setPredictedData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

 
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('CKX8dF6jSiNp1fYfDZPJGrYynLNsw1B8Q8wT2jmNlatorPFIrBdzHjNBjCdRRtvm'); // Your backend API
        const { realPrices, predictions } = response.data;
        setHistoricalData(realPrices);todos
        setPredictedData(predictions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Prepare data for Plotly
  const realPricesTrace = {
    x: historicalData.map(point => point.timestamp),
    y: historicalData.map(point => point.close),
    mode: 'lines+markers',
    name: 'Precio Real de Bitcoin',
    line: { color: 'blue' },
  };

  const predictedPricesTrace = {
    x: predictedData.map(point => point.timestamp),
    y: predictedData.map(point => point.close),
    mode: 'lines',
    name: 'Predicción de Bitcoin',
    line: { color: 'red', dash: 'dash' },
  };

  return (
    <div>
      <h1>Predicción Interactiva del Precio de Bitcoin (Próximas 48 horas)</h1>
      <Plot
        data={[realPricesTrace, predictedPricesTrace]}
        layout={{
          title: 'Predicción del Precio de Bitcoin (Próximas 48 horas)',
          xaxis: {
            title: 'Fecha',
            rangeslider: { visible: true },
            tickformat: '%Y-%m-%d %H:%M',
          },
          yaxis: { title: 'Precio (USD)' },
          template: 'plotly_dark',
        }}
      />
    </div>
  );
};

export default Graph;