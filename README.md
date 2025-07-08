# JavaScript Drum Kit - Çoklu Ses Seti ve Kayıt Özelliği

Bu proje, klavye veya mouse ile farklı ses setlerinden davul sesi çalmanızı sağlayan interaktif bir JavaScript drum kit uygulamasıdır. Aynı zamanda sesleri kaydedip tekrar oynatabilme, ses seviyesi ve tempo ayarı ile gece/gündüz modu gibi gelişmiş özellikler içerir.

---

## Özellikler

- **Farklı Ses Setleri:** Rock, elektronik vb. ses setleri arasında geçiş yapabilme.
- **Ses Seviyesi Kontrolü:** Slider ile ses seviyesini ayarlayabilme.
- **Tempo Kontrolü:** Seslerin oynatma hızını değiştirebilme.
- **Kayıt ve Oynatma:** 10 saniyeye kadar ses kaydı yapabilir ve tekrar dinleyebilirsiniz.
- **Tuş ve Mouse Desteği:** Klavyeden veya mouse tıklamasıyla sesleri çalabilme.
- **Gece/Gündüz Modu:** Temayı kolayca değiştirebilme.
- **Görsel Geri Bildirim:** Tuşlara basıldığında animasyonlu efekt.

---

## Kullanım

1. **Ses Çalma:**  
   Klavyenizde ilgili tuşa basın veya ekrandaki tuşlara tıklayın.  
   Desteklenen tuşlar ve karşılık gelen sesler `.key` sınıfı ve `data-key` attribute’u ile tanımlıdır.

2. **Ses Seti Değiştirme:**  
   Sağ üstteki açılır menüden farklı ses setlerini seçin.

3. **Ses Seviyesi ve Tempo:**  
   Sliderlar ile oynatma ses seviyesini ve hızını ayarlayın.

4. **Kayıt:**  
   "⏺️ Kayıt" butonuna basarak 10 saniyelik kayıt yapabilirsiniz. Kayıt sırasında buton kırmızı olur.  
   Kayıt bittikten sonra "▶️ Oynat" butonuyla kaydı dinleyin.

5. **Tema Değiştirme:**  
   "Gece/Gündüz Modu" butonuna basarak tema değiştirebilirsiniz.

---

## Teknik Detaylar

- Sesler dinamik olarak seçilen klasörden yüklenir (`soundSet` değişkeni).
- Kayıt esnasında her sesin zamanı `Date.now()` ile kaydedilir ve tekrar oynatılırken zaman farkına göre gecikmeli tetiklenir.
- Tuş animasyonu 200ms boyunca devam eder.
- `keydown` ve `click` eventleri ile kullanıcı etkileşimi sağlanır.
- Temalar CSS ile `dark-mode` sınıfı üzerinden kontrol edilir.

---

## Geliştirme ve Katkı

- Projeye yeni ses setleri ekleyebilirsiniz.
- Kayıt süresi ve özellikleri artırılabilir.
- Mobil uyumluluk geliştirilebilir.
- Daha kapsamlı tema seçenekleri eklenebilir.

---

## Örnek HTML Yapısı

```html
<div class="key" data-key="65">A</div>
<div class="key" data-key="83">S</div>
<!-- Diğer tuşlar -->
<select id="soundSet">
  <option value="rock">Rock</option>
  <option value="electronic">Electronic</option>
</select>
<input type="range" id="volume" min="0" max="1" step="0.01" value="1" />
<input type="range" id="speed" min="0.5" max="2" step="0.1" value="1" />
<button id="recordBtn">⏺️ Kayıt</button>
<button id="playBtn">▶️ Oynat</button>
<button id="themeToggle">Tema Değiştir</button>
