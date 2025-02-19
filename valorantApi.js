const axios = require('axios');

// API URL
const apiUrl = 'https://utku.berkaykoc.net/api/valorant';

// Silah bilgisi alma fonksiyonu
async function getWeaponInfo(weaponName) {
  try {
    const response = await axios.get(`${apiUrl}/weapon`, {
      params: { name: weaponName }
    });
    console.log('Silah Bilgisi:', response.data);
  } catch (error) {
    console.error('Silah bilgisi alınamadı:', error.response ? error.response.data : error.message);
  }
}

// Harita bilgisi alma fonksiyonu
async function getMapInfo(mapName) {
  try {
    const response = await axios.get(`${apiUrl}/map`, {
      params: { name: mapName }
    });
    console.log('Harita Bilgisi:', response.data);
  } catch (error) {
    console.error('Harita bilgisi alınamadı:', error.response ? error.response.data : error.message);
  }
}

// Ajan bilgisi alma fonksiyonu
async function getAgentInfo(agentName) {
  try {
    const response = await axios.get(`${apiUrl}/agent`, {
      params: { name: agentName }
    });
    console.log('Ajan Bilgisi:', response.data);
  } catch (error) {
    console.error('Ajan bilgisi alınamadı:', error.response ? error.response.data : error.message);
  }
}

// Örnek kullanımlar
getWeaponInfo('phantom');
getMapInfo('breeze');
getAgentInfo('jett');

/*
        _   _            _               _               _                           _   
  _   _| |_| | ___   _  | |__   ___ _ __| | ____ _ _   _| | _____   ___   _ __   ___| |_ 
 | | | | __| |/ / | | | | '_ \ / _ \ '__| |/ / _` | | | | |/ / _ \ / __| | '_ \ / _ \ __|
 | |_| | |_|   <| |_| |_| |_) |  __/ |  |   < (_| | |_| |   < (_) | (__ _| | | |  __/ |_ 
  \__,_|\__|_|\_\\__,_(_)_.__/ \___|_|  |_|\_\__,_|\__, |_|\_\___/ \___(_)_| |_|\___|\__|
                                                   |___/                                 
*/