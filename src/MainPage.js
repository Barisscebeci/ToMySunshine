// src/MainPage.js
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainPage.css";

const slidesData = [
  {
    image: "/image/1.jpg",
    title: "19 Haziran 2023 - İlk Hendek Buluşmamız",
    description:
      "Mavi kelebeğimle ilk yakınlaşmalarımızdan bir fotoğraf. Bugün bazı şeylerin ilk tohumları atılmıştı. Aşk bahçen değildim o zamanlar :). Seninle bazı şeylerin ilerleyebileceğini düşündüğüm ve işte bu dediğim anlardan en özeli. Seni çooooook seviyorum.",
  },
  {
    image: "/image/2.jpg",
    title: "22 Haziran 2023 - Zıbar Öncesi İlk Kampüs Date",
    description:
      "Bu gün ise benim için çok ayrı bir yeri var. Benim güzeller güzeli sevgilim. Tüm bu sürecin en başında ne kadar da çocukmuşuz ama...",
  },
  {
    image: "/image/3.jpg",
    title: "3 Temmuz 2023 - İlk Deniz Fotoğrafı",
    description:
      "Aşkımmm, burada o kadar kıskanmıştım ki seni anlatamam. Burada aşırı seksi gözüküyordun birtanem. Hiç şaka yapmıyorum, bana ilk bu fotoğrafı attığında 'Ne yapıyor bu, aşırı seksi bir güzelime sahibim.' demiştim kendi kendime. Neyse ki o zamanlar güzelim lafını kullanıyordummm. Yerim ama he.",
  },
  {
    image: "/image/20.jpg",
    title: "7 Ağustos 2023 - İlk Günlerimiz",
    description:
      "Karımı almaya gelmiştim. O günkü o şık kombini, valizlerini alışı ve gidecek oluşu çok üzülmüştüm o gün biliyor musun? İlk defa 'Gitme' diye kendime o zaman demiştim. Biraz da sırlarımızı dökelim be ya.",
  },
  {
    image: "/image/26.jpg",
    title: "9 Eylül 2023 - Biga",
    description:
      "İlk defa evimin sen olduğunu ve yanından hiç ayrılmak istemediğimi fark ettiğim gün. O gün aşırı mutsuzdum gideceğim için. Ne olurdu orada barınabilseydim. Şu anda da orada, karımın yanında olmak istiyorum, çünkü benim evim güzelimin yanı. Doğum gününü kutlayabildiğim için çok mutluydum sevgilim. İyi ki doğdun, senin anan benim için doğurdu seni bea :))",
  },
  {
    image: "/image/17.jpg",
    title: "5 Kasım 2023 - İkinci Kez Bir Arada Kutlamamız",
    description:
      "3. ayımız kutlu olsun sevgilim. Yazdığın mektup hala aklımda, bu mektupla beni o kadar etkilemiştin ki götüm erimişti, haberin olsun hayatım.",
  },
  {
    image: "/image/4.jpg",
    title: "25 Kasım 2023 - İlk İstanbul Gezimiz",
    description:
      "Defalarca aşık olduğum, öpmeye bakmaya kıyamadığım canım sevgilim. Bu gün o kadar güzeldin ki anlatamam. (Her zaman çok güzelsin canım sevgilim.) Tekrar tekrar baktığım, gezerken de eğlendiğim, sevdiğim, bir ömür geçirmek istediğim canım sevgilim, iyi ki varsın, iyi ki benimlesin.",
  },
  {
    image: "/image/15.jpg",
    title: "5 Aralık 2023",
    description:
      "4. ayımız. Allah'ım zaman ne çabuk geçmiş, bunu koymadan edemedim.",
  },
  {
    image: "/image/19.jpg",
    title: "10 Aralık 2023 - İlk Kocaeli ve ÇGHB",
    description:
      "Daha dün gibi aklımda. Bugün o kadar istekli gitmiştik ki ve muradımıza erdik. Karım, benden önce hep buraya gitmek isterken benimle birlikte bitti. Bunu ben kaptığım için çok şanslı hissediyorum kendimi, çünkü aşırı mutlu bir Kocaeli günümüzdü.",
  },
  {
    image: "/image/6.jpg",
    title: "16 Aralık 2023 - Serdivan Factory Karaköy",
    description:
      "Bu fotoğrafı koyma sebebim aşırı tatlı olmamız. Arkadaşımla tanıştıktan sonra tatlı yemeye gelmiştik, güzelimi yine darlıyorum :) Her bir anımızda bu kadar özel ve güzel olduğun için seni yerim.",
  },
  {
    image: "/image/5.jpg",
    title: "23 Aralık 2023 - İkinci İstanbul Çıkartması",
    description:
      "Aşkımmm, bu fotoğraf o kadar güzel ki dilim damağım tutuluyor. Burada o kadar sahiplenici tutmuşum ki eriyip bitiyorum. Sana sahip olmayı, bazı anlarda seni yönetmeyi ve biraz kontrolüm altına almayı bayılıyorum. Tüm bunların fotoğrafa yansıma hali. Tüm bu süreçlerin en güzellerinden bir tanesi. Tüm bu süreçte yanımda olduğun için sana binlerce kez teşekkür ediyorum. Her yılımız böyle geçsin Allah'ım, yardım et!",
  },
  {
    image: "/image/9.jpg",
    title: "23 Aralık 2023 - Sn. Antuan Kilisesi",
    description:
      "Güzelimi bu açıdan çekmeye bayılıyorum. Amen birtanem, amen! Kızma bana bu konuda, bunu demeden geçemedim birtanem.",
  },
  {
    image: "/image/21.jpg",
    title: "30 Aralık 2023",
    description:
      "2023 yılının son günleri. Bu foto özel istek bir foto hayatım, çünkü bayılıyorum bu fotoya.",
  },
  {
    image: "/image/16.jpg",
    title: "1 Ocak 2024 - İlk Kore ve Yılın İlk Günü",
    description:
      "Yılın ilk gününe beraber girmemiz, daha sonra o günü taçlandırmak için Kore mutfağına götürdüğümdeki mutluluğunu unutamıyorum sevgilim. Ergen edam vardı karşımda, yerim ama ergen edamı he valla.",
  },
  {
    image: "/image/8.jpg",
    title: "8 Ocak 2024 - Rumeli Köftecisi Adapazarı",
    description:
      "İlk ıslama köftemiz hem de en hasından. Karım biraz bayılmıştı ama olsun, ben de karımın güzelliğine bayılmıştım. İlk defa kendi rızamla snap atmıştım telefonundan. Yakınken her şey ne kadar güzelmiş ama.",
  },
  {
    image: "/image/7.jpg",
    title: "12 Ocak 2024 - İlk Kar Anımız",
    description:
      "İlk kar yağışı, güneşimden çok fazla etkilendiğim bir gün. Bizim için çok güzel günlerden biri. Yeni yılda bu kadar büyülediğin için teşekkür ederim yavrum. Birinci yılımız kutlu olsun :)",
  },

  {
    image: "/image/10.jpg",
    title: "5 Mart 2024 - 7. Ay Bitimi Kutlamamız",
    description:
      "Kırmızılar içerisinde instax'a bile konu olacak o güzelliğini bana bahşettiğin için teşekkür ederim aşkım. Tekrardan nice 7. aylarımız olsun. Hep böyle birbirimizden destek alıp kahkahalarımız eksik olmasın birtanem. Senin her zaman omzunda olduğumu unutma.",
  },
  {
    image: "/image/11.jpg",
    title: "8 Mart 2024 - Donas Anısı",
    description:
      "Çok mükemmel çıktığımız için koydum. Bu fotoğrafımıza bayılıyorum hayatım, şuna bak ya! Allah'ım deliricem ama he. Beni kudurtmaktan aldığın minik keyif şaka mı :)))",
  },
  {
    image: "/image/12.jpg",
    title: "10 Mart 2024 - Benim Bilmediğim Yer:)",
    description:
      "Şunun şaheserliğine bakar mısın? Sticker olacak güzellikte bir anımız daha. Fotoğrafları geçtikçe ne kadar güzel anılar biriktirdiğimizi tekrar tekrar görüyorum hayatım. Hep böyle kendimiz olup eğlenmeyi, birbirimizi anlamayı bilelim.",
  },
  {
    image: "/image/27.jpg",
    title: "5 Nisan 2024 - Salash Öncesi",
    description:
      "Şu karımdaki mutluluğa bakar mısın? Sanırım seni mutlu edebildiğim her süreçte bunu yapacağım aşkım.",
  },
  {
    image: "/image/28.jpg",
    title: "19 Nisan 2024 - Son Görkem",
    description:
      "Kim bilebilirdi ki bunun son olacağını? Bundan habersiz yemişiz. İlk beni götürdüğün yer, yerim ama bu son olmamalı. Geçerken uğrayalım aşkım, canım çekti bea :))",
  },
  {
    image: "/image/13-b.jpg",
    title: "26 Nisan 2024 - Karım Beni Mideye Götürmeden Önce",
    description:
      "Ben bir şey demiyorum. Karım beni çok lezzetli bulduğu için yemeye çalışıyor sanırım.",
  },
  {
    image: "/image/13.jpg",
    title: "27 Nisan 2024 - Pandora Sonrası",
    description:
      "Aksiliklerle başlayan bir gün. Karımı sakinleştirmeye çalışıp 'Yenisini alırız' dediğim, pandoramızın büyük geldiği, ıhlamur kasrına gittiğimiz (Karım ait olduğu yerde her zamanki gibi) çok spontane gelişen bu günde şaheserimi seninle paylaşmak istedim birtanem. Fotolarda bir insan bu kadar güzel çıkabilir mi be ya!",
  },
  {
    image: "/image/31.jpg",
    title: "5 Mayıs 2024 - Eskişehir",
    description:
      "İlk Eskişehirimiz. Elbet bir daha gideriz ama bu fotoyu da koymak istedim.",
  },
  {
    image: "/image/29.jpg",
    title: "11 Mayıs 2024 - Nihan Kuşla Tanışma",
    description:
      "Geçen sene bugünlerde biri bana 'Seneye bu gün sevgilini ailen olan o güzelini abinle ve Nihan kuşla tanıştıracaksın.' deselerdi 'Sallama la' derdim. Hayat sürprizlere gebe. Seninle birlikte olduğum için dünyanın en şanslı insanı hissediyorum kendimi. O günkü gerginliğimiz hala aklımda be aşkım.",
  },
  {
    image: "/image/14-b.jpg",
    title: "18 Mayıs 2024 - İlk Gölpark",
    description:
      "Balımla ilk gölpark anımız. Artık sonlara doğru geliyoruz çünkü yıl dönümümüz yaklaşıyor. Bu yaklaşırken şunları eklemek istiyorum: Güzel sevgilim, seni çooook ama çoooook seviyorum. Hep böyle gezilerimiz, birbirimizle anılarımız, dertleşmelerimiz, birbirimizden güç bulmamız olsun. Public alanda öpüşmemizi söylemeden geçemem. Karım aşırı güzel ya, yerim karımı.",
  },
  {
    image: "/image/14.jpg",
    title: "18 Mayıs 2024 - İlk Gölpark",
    description: "Birinci yılımız kutlu olsun sevgilim.",
  },
  {
    image: "/image/77.jpg",
    title: "31 Mayıs 2024 - Mezuniyet :(",
    description:
      "Güzelimin mezuniyeti, hayatımdaki en mutlu olduğum günlerden bir tanesi. Bunu eklemeden geçemezdim tabii ki, çünkü burada aşırı etkilenmiştim. Topluluktaki ilk dansımız, ilk çiftetelli oynayışımız, dans ederken beni etkilemen, kıyafetinin aşırı yakışması, saçların, gözlerin, yüzün, elbisen... Aşırı mükemmel olduğu bir gün daha. Karım her zaman mükemmel. Bu vesile ile tekrardan teşekkür ederim sevgilim, beni o gün davet ettiğin için. Kavalyen olmaktan onur duydum. Seni çooook ama çoooook seviyorum.",
  },

  {
    image: "/image/18.jpg",
    title: "Barışından Önce",
    description:
      "Aşkım ya, ben perçem istiyorum. Bende görmek istiyorum, herkes görmüş, bir ben göremedim be ya.",
  },

  {
    image: "/image/22.jpg",
    title: "4 Haziran 2024 - İlk Bowling",
    description: "",
  },
  {
    image: "/image/23.jpg",
    title: "5 Haziran 2024 - İlk Düzce",
    description:
      "Güzelimi Düzce'ye ilk götürüşüm. Hayatımın belli bir döneminin geçtiği bu yerleri karımla gezmek, ona olayları anlatmak ve takıldığım yerlere götürmek ulaşabileceğim en yüksek seviyeydi. Küçük ve ergen Barış görse gurur duyardı benimle.",
  },

  {
    image: "/image/30.jpg",
    title: "10 Haziran 2024 - Veda Vakti",
    description:
      "Keşke hiç veda etmesek, sürekli birlikte olabilsek, hep bir şeyler yapabilsek, hep birlikte kalabilsek ya da hep yan yana olabilsek. Vedalar da sevdaya dahil be balım. Uzak kaldık diye üzülüyoruz, biliyorum. Elimizden gelen en iyisi neyse o şekilde geçireceğiz bu süreci. Yeter ki çalışalım be balım, çünkü çalışmazsak bir şeylere geç kalacağız. Ben bu öpücüğü her gün görebildiğim, hissedebildiğim konumlara geçmek istiyorum artık. Ne kadar zor olsa da ayrılmak insanın canı çok yanıyormuş be balım. Çok fazla ağladım, çok fazla üzüldüm. Sana hiçbir şey yansıtmamaya çalıştım elimden geldiğince. Mesela Yusuf'un yanına gönderirken keşke burada birlikte yemek yeseydik, daha fazla vakit geçirebilseydik dedim. El salladıktan sonra çok ağladım. Belpaşa'ya kadar çok fazla, hem de. Seni çoooook seviyorum, duydun mu beni? Rabbim bir daha yakın olup birbirimizi görememezlik yaptırmasın inşallah.",
  },
];
const MainPage = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000, // 5 saniye
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        sliderRef.current.slickNext();
      } else if (event.key === "ArrowLeft") {
        sliderRef.current.slickPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="main-container">
      <Slider ref={sliderRef} {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="card">
            <img src={slide.image} alt={slide.title} className="card-image" />
            <h2 className="card-title">{slide.title}</h2>
            <p className="card-description">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainPage;
