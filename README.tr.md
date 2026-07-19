<div align="center">

# To-Do Project

**Vanilla HTML, CSS ve JavaScript ile geliştirilmiş, glassmorphism (cam efekti) tarzında sade bir yapılacaklar listesi — framework yok, bağımlılık yok, build adımı yok.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

[Canlı Demo](https://zikreddincikla.github.io/glass-todo/) · [Hata Bildir](https://github.com/zikreddincikla) · [Yazar](https://github.com/zikreddincikla)

[🇬🇧 English](README.md) | 🇹🇷 Türkçe

</div>
 
---

## Genel Bakış

To-Do Project, tamamen tarayıcı içinde çalışan hafif bir görev yöneticisidir. Her görev doğrudan `localStorage`'a yazılır, bu sayede listeniz sayfa yenilemelerinde ve tarayıcı yeniden başlatmalarında kaybolmaz — backend yok, veritabanı yok, tek bir `npm install` bile yok.

Proje; semantik HTML, CSS Grid/Flexbox yerleşimi, `backdrop-filter` cam efektleri ve framework'süz DOM manipülasyonu gibi sağlam temelleri göstermek amacıyla oluşturulmuştur.

> [!TIP]
> Herhangi bir build aracı olmadığı için `index.html`'e çift tıklamanız yeterli, uygulama doğrudan çalışır. Kurulum süreci bundan ibaret.

## Özellikler

- **Görev ekleme** — buton tıklaması veya `Enter` tuşu ile
- **Görev tamamlama** — tek tıkla bir görevin tamamlanma durumunu değiştirin
- **Görev silme** — tek tek öğeleri anında kaldırın
- **Toplu işlemler** — kenar çubuğundan Tümünü İşaretle, Tümünün İşaretini Kaldır ve Tümünü Temizle
- **Kalıcı depolama** — görevler `localStorage`'a kaydedilir, geri döndüğünüzde hâlâ orada olurlar
- **Geçmiş paneli** — oturumunuz boyunca yapılan görevlerin devam eden bir kaydı
- **Duyarlı (responsive) yerleşim** — `1080px` altında 3 sütunlu masaüstü ızgarasından alt alta dizilmiş mobil görünüme geçer
- **Glassmorphism arayüz** — `backdrop-filter: blur()` ile buzlu cam paneller
- **SEO'ya hazır** — link önizlemeleri için Open Graph ve Twitter Card meta etiketleri zaten bağlanmış

## Teknoloji Yığını

| Katman | Teknoloji | Notlar |
|---|---|---|
| Yapı | HTML5 | Semantik etiketler (`<header>`, `<main>`, `<aside>`, `<article>`, `<footer>`) |
| Stil | CSS3 | CSS Grid + Flexbox, `backdrop-filter`, duyarlı media query'ler |
| Davranış | Vanilla JavaScript (ES6) | DOM API, event listener'lar, `localStorage` |
| Build araçları | Yok | Sıfır bağımlılık, sıfır konfigürasyon |

## Başlarken

Kurulum gerekmez — bu projenin kurulacak hiçbir bağımlılığı yok.

```bash
git clone https://github.com/zikreddincikla/glass-todo.git
cd to-do-project
```

Ardından `index.html` dosyasını tarayıcınızda açmanız yeterli. Geliştirme sırasında canlı yenileme (live-reload) istiyorsanız, isteğe bağlı olarak herhangi bir statik sunucuyla servis edebilirsiniz:

```bash
npx serve .
```

<details>
<summary><b>Proje yapısı</b></summary>

```
to-do-project/
├── index.html      # Markup ve sayfa yapısı
├── style.css       # Yerleşim, tema, glassmorphism efektleri
├── app.js          # To-do mantığı, localStorage senkronizasyonu, event yönetimi
└── Pictures/
    ├── Sunset.png  # Arka plan + sosyal medya önizleme görseli
    └── icon.ico    # Favicon
```

</details>

<details>
<summary><b>Kalıcılık nasıl çalışıyor</b></summary>

Her ekleme, işaretleme veya silme işlemi `save_todo()` fonksiyonunu çağırır; bu fonksiyon mevcut listeyi düz bir `{ text, completed }` nesneleri dizisine serileştirir ve `localStorage`'a `todos` anahtarı altında yazar[^1]. Sayfa yüklendiğinde `load_todo()` bu diziyi geri okur ve DOM'u buradan yeniden oluşturur — yani arayüz her zaman depodaki verinin doğrudan bir yansımasıdır, tam tersi değil.

[^1]: Bu, tarayıcınızın site verilerini temizlemenin yapılacaklar listenizi de sileceği anlamına gelir — şu an bulut senkronizasyonu ya da dışa aktarma seçeneği bulunmuyor.

</details>

## Yazar

**Zikreddin** tarafından geliştirildi ve sürdürülüyor.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/zikreddincikla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zikreddin-%C3%A7%C4%B1klasa%C4%9F%C4%B1rc%C4%B1o%C4%9Flu-64667a395/)

## Lisans

MIT Lisansı altında dağıtılmaktadır. Detaylar için `LICENSE` dosyasına bakın.

---

<div align="center">

© 2026 Zikreddin — Tüm hakları saklıdır.

</div>
