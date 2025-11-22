// src/components/LocationSelector.tsx
import { useState } from 'react';

interface LocationCoords {
  lat: number;
  lng: number;
}

interface LocationResult {
  coords: LocationCoords;
  endereco: string;
  metodo: 'gps' | 'manual';
}

interface Props {
  onLocationSelected: (result: LocationResult) => void;
}

export function LocationSelector({ onLocationSelected }: Props) {
  const [selectedMethod, setSelectedMethod] = useState<'gps' | 'manual' | null>(null);
  const [loading, setLoading] = useState(false);
  const [enderecoManual, setEnderecoManual] = useState('');

  // OPÇÃO 1: GPS AUTOMÁTICO
  const usarGPS = async () => {
    setLoading(true);
    try {
      if (!navigator.geolocation) {
        throw new Error('Geolocalização não suportada no seu dispositivo');
      }

      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 60000
        });
      });

      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      let endereco = 'Localização atual';
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}&addressdetails=1`
        );
        const data = await response.json();
        if (data.address) {
          const { road, house_number, suburb, city } = data.address;
          endereco = [road, house_number, suburb, city].filter(Boolean).join(', ');
        }
      } catch (error) {
        console.log('Usando coordenadas do GPS');
      }

      onLocationSelected({
        coords,
        endereco,
        metodo: 'gps'
      });

    } catch (error: any) {
      alert(`Erro: ${error.message || 'Não foi possível obter a localização'}`);
    } finally {
      setLoading(false);
    }
  };

  // OPÇÃO 2: ENDEREÇO MANUAL
  const buscarPorEndereco = async () => {
    if (!enderecoManual.trim()) {
      alert('Por favor, digite um endereço');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(enderecoManual)}&limit=1&countrycodes=br`
      );
      const data = await response.json();
      
      if (data.length === 0) {
        throw new Error('Endereço não encontrado. Tente com: Rua, número, bairro');
      }

      const coords = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };

      onLocationSelected({
        coords,
        endereco: data[0].display_name,
        metodo: 'manual'
      });

    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // TELA INICIAL - ESCOLHA DO MÉTODO
  if (!selectedMethod) {
    return (
      <div className="w-full max-w-md mx-auto p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
          🌍 Como deseja informar a localização?
        </h3>
        
        <div className="space-y-4 sm:space-y-6 mb-6">
          <button 
            className="w-full flex items-center gap-4 p-4 sm:p-6 border-2 border-gray-200 rounded-xl bg-white hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setSelectedMethod('gps')}
            disabled={loading}
          >
            <div className="text-2xl">📍</div>
            <div className="flex-1">
              <strong className="block text-base sm:text-lg font-semibold text-gray-800">
                Usar minha localização atual
              </strong>
              <small className="text-sm text-gray-600">
                Mais rápido e preciso - usa GPS do celular
              </small>
            </div>
            <div className="text-blue-500 font-bold text-lg">→</div>
          </button>

          <button 
            className="w-full flex items-center gap-4 p-4 sm:p-6 border-2 border-gray-200 rounded-xl bg-white hover:border-green-500 hover:bg-green-50 transition-all duration-300 text-left disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setSelectedMethod('manual')}
            disabled={loading}
          >
            <div className="text-2xl">🏠</div>
            <div className="flex-1">
              <strong className="block text-base sm:text-lg font-semibold text-gray-800">
                Digitar endereço
              </strong>
              <small className="text-sm text-gray-600">
                Para locais que você conhece
              </small>
            </div>
            <div className="text-green-500 font-bold text-lg">→</div>
          </button>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
          <small className="text-sm text-blue-800">
            💡 <strong>Dica:</strong> No celular, o GPS é mais preciso
          </small>
        </div>
      </div>
    );
  }

  // TELA DO GPS
  if (selectedMethod === 'gps') {
    return (
      <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <button 
            onClick={() => setSelectedMethod(null)}
            className="px-3 py-2 text-blue-500 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
            disabled={loading}
          >
            ← Voltar
          </button>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
            📍 Localização por GPS
          </h4>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <p className="font-semibold text-green-800 mb-2">Para melhor precisão:</p>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✅ Ative o GPS do seu celular</li>
              <li>✅ Permita o acesso à localização</li>
              <li>✅ Fique em área aberta</li>
            </ul>
          </div>
          
          <button 
            onClick={usarGPS}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Obtendo localização...
              </>
            ) : (
              '📍 Obter Minha Localização'
            )}
          </button>

          {loading && (
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded text-center">
              <p className="text-yellow-800">⏳ Pode levar alguns segundos...</p>
              <small className="text-yellow-600">
                Permita o acesso quando o navegador solicitar
              </small>
            </div>
          )}
        </div>
      </div>
    );
  }

  // TELA MANUAL
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <button 
          onClick={() => setSelectedMethod(null)}
          className="px-3 py-2 text-blue-500 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          disabled={loading}
        >
          ← Voltar
        </button>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
          🏠 Endereço Manual
        </h4>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700">
          Digite o endereço completo:
        </label>
        
        <input 
          type="text"
          placeholder="Ex: Rua Maria Cândida, 245, Jardim Ângela, São Paulo"
          value={enderecoManual}
          onChange={(e) => setEnderecoManual(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
          disabled={loading}
        />
        
        <div className="space-y-2 text-sm text-gray-600">
          <p>🎯 <strong>Formato ideal:</strong> Rua, número, bairro, cidade</p>
          <p>📱 <strong>Mobile:</strong> Use o teclado do seu celular</p>
        </div>

        <button 
          onClick={buscarPorEndereco}
          disabled={loading || !enderecoManual.trim()}
          className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Buscando endereço...
            </>
          ) : (
            '🔍 Buscar Localização'
          )}
        </button>
      </div>
    </div>
  );
}