# Valorant API Client

Bu proje, [https://utku.berkaykoc.net/api/valorant/](https://utku.berkaykoc.net/api/valorant/) API'sini kullanarak Valorant oyunundaki silahlar, haritalar ve ajanlar hakkında bilgi almanızı sağlar.

## Kurulum

1. Bu projeyi klonlayın:
```sh
git clone https://github.com/utkuberkaykoc/valorant-api.git
cd valorant-api 
```
2. Gerekli paketleri yükleyin:
```
npm install
```
3. Uygulamayı başlatın:
```
npm start
```

## Kullanım

### Silah Bilgisi

Silah bilgisi almak için `getWeaponInfo` fonksiyonunu kullanın:
```javascript
getWeaponInfo('phantom');
```

### Harita Bilgisi

Harita bilgisi almak için `getMapInfo` fonksiyonunu kullanın:
```javascript
getMapInfo('breeze');
```

### Ajan Bilgisi

Ajan bilgisi almak için `getAgentInfo` fonksiyonunu kullanın:
```javascript
getAgentInfo('jett');
```

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
