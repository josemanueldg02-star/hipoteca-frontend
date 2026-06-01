import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css'; 

function App() {
  const [capital, setCapital] = useState(150000);
  const [interes, setInteres] = useState(3.5);
  const [anios, setAnios] = useState(30);
  const [resultado, setResultado] = useState(null);

  const calcularHipoteca = async () => {
    try {
      const response = await fetch('http://localhost:8083/api/hipoteca/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          capital: capital,
          interesAnual: interes,
          anios: anios
        })
      });
      
      const data = await response.json();
      setResultado(data);
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("No se pudo conectar. ¿Está Java encendido en el puerto 8083?");
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#ecf0f1' }}>🏦 Simulador Hipotecario Financiero</h1>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '18px', color: '#2c3e50' }}>
            Capital Prestado: {capital.toLocaleString('es-ES')} €
          </label>
          <input 
            type="range" 
            min="10000" max="500000" step="1000" 
            value={capital} 
            onChange={(e) => setCapital(Number(e.target.value))}
            style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '18px', color: '#2c3e50' }}>
            Tipo de Interés (TIN): {interes} %
          </label>
          <input 
            type="range" 
            min="0.1" max="10" step="0.1" 
            value={interes} 
            onChange={(e) => setInteres(Number(e.target.value))}
            style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', fontSize: '18px', color: '#2c3e50' }}>
            Plazo de amortización: {anios} años
          </label>
          <input 
            type="range" 
            min="5" max="40" step="1" 
            value={anios} 
            onChange={(e) => setAnios(Number(e.target.value))}
            style={{ width: '100%', marginTop: '10px', cursor: 'pointer' }}
          />
        </div>

        <button 
          onClick={calcularHipoteca}
          style={{ width: '100%', padding: '15px', backgroundColor: '#007bff', color: 'white', fontSize: '18px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' }}
        >
          Calcular Cuota Mensual
        </button>
      </div>

      {/* --- RESULTADOS Y GRÁFICA INTERACTIVA --- */}
    
      {resultado && resultado.cuotaMensual && (
        <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #28a745', borderRadius: '10px', backgroundColor: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ color: '#2c3e50' }}>💰 Cuota Fija Mensual: <span style={{ color: '#28a745', fontSize: '36px' }}>{resultado.cuotaMensual?.toLocaleString('es-ES')} €</span></h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', fontSize: '18px', borderBottom: '1px solid #eee', paddingBottom: '20px', color: '#2c3e50' }}>
            
            <p><strong>Total Intereses:</strong><br/>{(resultado.totalIntereses || resultado.totalInteres)?.toLocaleString('es-ES')} €</p>
            <p><strong>Total a Pagar:</strong><br/>{resultado.totalPagado?.toLocaleString('es-ES')} €</p>
          </div>

          {resultado.cuadroAmortizacion && (
            <div style={{ marginTop: '30px', height: '400px' }}>
              <h3 style={{ marginBottom: '20px', color: '#6c757d' }}>📊 Evolución de la Cuota (Sistema Francés)</h3>
              
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={resultado.cuadroAmortizacion}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip formatter={(value) => value + " €"} labelFormatter={(label) => "Mes " + label} />
                  <Legend />
                  <Line type="monotone" dataKey="intereses" name="Intereses pagados" stroke="#ff4d4d" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="principal" name="Capital devuelto" stroke="#28a745" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default App;