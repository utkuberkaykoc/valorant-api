const fetch = require('node-fetch');

const apiUrl = 'https://utku.berkaykoc.net/api/valorant';

async function getWeaponInfo(weaponName, language = "en") {
  try {
    const response = await fetch(`${apiUrl}/weapon?name=${weaponName}&lang=${language}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getMapInfo(mapName, language = "en") {
  try {
    const response = await fetch(`${apiUrl}/map?name=${mapName}&lang=${language}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAgentInfo(agentName, language = "en") {
  try {
    const response = await fetch(`${apiUrl}/agent?name=${agentName}&lang=${language}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getWeaponInfo,
  getMapInfo,
  getAgentInfo
};