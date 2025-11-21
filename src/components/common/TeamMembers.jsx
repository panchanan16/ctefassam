import { Loader, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

function TeamMembers() {
  // Team members data (20 members total)
  const allMembers = [
    {
      id: 1,
      lmNo: 6084,
      name: "LIPIKA BORUAH",
      photo: "",
      contact: "8472032009",
      district:
        "Asst. Prof.Education, Jagiroad College, Dist: Morigoan, Pin-782410",
      email: "lipika6231@gmail.com",
    },
    {
      id: 2,
      lmNo: 6083,
      name: "NILAKSHI BORAH",
      photo: "",
      contact: "9706598868",
      district:
        "Deptt. Of Education, Asst Prof. North Guwahati College,PIN-781031, North Guwahati assam",
      email: "nilakshiborah8@gmail.com",
    },
    {
      id: 3,
      lmNo: 6082,
      name: "PRINCIPAL- DR. AJIT HAZARIKA, TYAGBIR HEM BARUAH COLLEGE, JAMUGURIHAT, DIST: SONITPUR",
      photo: "",
      contact: "7002186618",
      district: "Karchantola, Talakabari Bangali, Jamugurihat, Assam 784189",
      email: "tyagabirhbcollege1963@gmail.com",
    },
    {
      id: 4,
      lmNo: 6081,
      name: "DR.PALLABI DEVI",
      photo: "",
      contact: "8638372381",
      district:
        "Deptt. Of Education, Jagiroad college, Morigoan district, PIN-782410",
      email: "pallabidevi1@gmail.com",
    },
    {
      id: 5,
      lmNo: 6080,
      name: "CHOW KOTONG LUNGKING",
      photo: "",
      contact: "9401589254",
      district: "Deptt. Of Education, Khagarijan college, Nagoan, PIN-782003",
      email: "cklungking@gmail.com",
    },
    {
      id: 6,
      lmNo: 6079,
      name: "MS. BIKASHITA BORAH",
      photo: "",
      contact: "8474824554",
      district:
        "Asst. Prof. Education, Jagiroad College, P.O. Jagiroad, PIN 782410",
      email: "bikashitaborah14@gmail.com",
    },
    {
      id: 7,
      lmNo: 6075,
      name: "DR. LUCKY CHETIA",
      photo: "",
      contact: "9101404500",
      district:
        "Asst. Prof. Political Science, Sonari College, Charaideo, Assam pin-",
      email: "luckychetia1982@gmail.com",
    },
    {
      id: 8,
      lmNo: 6074,
      name: "DIPAK NATH",
      photo: "",
      contact: "9435233841",
      district: "Furcating high school, furcating, golaghat, pin-785621",
      email: "dnath@gmail.com",
    },
    {
      id: 9,
      lmNo: 6073,
      name: "MALABIKANEOG",
      photo: "",
      contact: "9101342954",
      district: "Prof. College of Teacher Education, Golaghat, PIN",
      email: "malabikaneog71@gmail.com",
    },
    {
      id: 10,
      lmNo: 6072,
      name: "BORNALEE SARMAH",
      photo: "",
      contact: "7002173611",
      district: "Lecturer, College of Teacher Education, Golaghat, Assam",
      email: "bornaleesarmah17@gmail.com",
    },
    {
      id: 11,
      lmNo: 6069,
      name: "MUKTIJUDDHA FAGU GUWALA MODEL SCHOOL SYCOTTA T.E, MARIANI",
      photo: "",
      contact: "9864551780",
      district: "Kukurapohia Ouguria Gaon, Assam 785633",
      email: "school@gmail.com",
    },
    {
      id: 12,
      lmNo: 6068,
      name: "INSTITUTION MEMBER",
      photo: "",
      contact: "9835698954",
      district: "Cinnamara higher secondary school, Jorhat, Assam, Pin-785008",
      email: "cinnamarahss1886@gmail.com",
    },
    {
      id: 13,
      lmNo: 6067,
      name: "BINA NANDI",
      photo: "",
      contact: "9707259469",
      district:
        "Asst. teacher, CRCC,JiadhalChariali H S- Aradhal cluster, Dhemaji, PIN-787057",
      email: "bina.nandi37@gmai.com",
    },
    {
      id: 14,
      lmNo: 6066,
      name: "RANJU BORUAH",
      photo: "",
      contact: "9864442321",
      district:
        "Asst. Teacher CRCC, Gyandeep High school, Dhemaji, PIN-787057 Assam",
      email: "ranjuboruah23@gmail.com",
    },
    {
      id: 15,
      lmNo: 6063,
      name: "TARINI KANTA BISWAS",
      photo: "",
      contact: "8133076551",
      district:
        "Asso. Prof. Education, Chilarai college, Golokganj, Dist- Dhubri, PIN-783334 Assam",
      email: "tkbiswas65@gmail.com",
    },
    {
      id: 16,
      lmNo: 6062,
      name: "MR. KHAIRUL ANAM",
      photo: "",
      contact: "700262904",
      district:
        "Asst. Prof, Political Sc., Halupather LPS, P.O. Rupaisiding, Tinsukia PIN-786153, Assam, PIN-786153",
      email: "anam33367@gmail.com",
    },
    {
      id: 17,
      lmNo: 6061,
      name: "RASHMIREKHA BORGOHAIN",
      photo: "",
      contact: "8876662993",
      district:
        "Asst. Prof, Political Science, Doomdoomacollege,Tinsukia,PPIN-586151,Assam",
      email: "rasmirekhaborgohain@gmail.com",
    },
    {
      id: 18,
      lmNo: 6060,
      name: "MD.AKHTAR HUSSAIN",
      photo: "",
      contact: "9864183638",
      district:
        "Asst. Prof, Economics, B R Moran Govt. Model college, Doomdooma PIN- 786151",
      email: "aktareconomics@gmail.com",
    },
    {
      id: 19,
      lmNo: 6059,
      name: "DR. RIMI BORAH",
      photo: "",
      contact: "7002261847",
      district:
        "Asst. Prof.Education, Padma Nath Gohain Baruah Govt. Model college, Kakopathar, Tinsukia, PIN- 786152",
      email: "rimiborah7@gmail.com",
    },
    {
      id: 20,
      lmNo: 6058,
      name: "PARIJAT NEOG",
      photo: "",
      contact: "8638005423",
      district: "Lecturer, College of TE, Jonaki nagarGolaghat,PIN-785621 Assm",
      email: "parijatneog0@gmail.com",
    },
    {
      id: 21,
      lmNo: 6056,
      name: "PARTHAJIT BORA",
      photo: "",
      contact: "7002921637",
      district:
        "PGT, Govt. BHS school, Golaghat, Near DC Court, Golaghat, PIN-785621",
      email: "boraparthajit05@gmail.com",
    },
    {
      id: 22,
      lmNo: 6055,
      name: "NITYANAND KONWAR",
      photo: "",
      contact: "9954017470",
      district: "Deppt. Of Hindi, Govt. High school, Norh Lakhimpur,PIN-787031",
      email: "nityanandkonwar@gmail.com",
    },
    {
      id: 23,
      lmNo: 6054,
      name: "DR. CHITTARANJAN NATH",
      photo: "",
      contact: "9101138725",
      district: "Asst. Prof. English, ADP college, Nagoan, PIN-782001, Assam",
      email: "crnath7@gmail.com",
    },
    {
      id: 24,
      lmNo: 6053,
      name: "DR. KABERI BORPUZARI SARMAH",
      photo: "",
      contact: "9957402332",
      district:
        "Asst. Prof. Political Sc., Doomdooma college, Dist- Tinsukia, PIN-786151",
      email: "kberi.borpuzarisarmah@gmail.com",
    },
    {
      id: 25,
      lmNo: 6052,
      name: "DURGA DEVI",
      photo: "",
      contact: "6002629308",
      district:
        "Asst. Prof. Economics, Doomdooma college, Dist-Tinsukia, Assam",
      email: "Durgadevi95dc@gmail.com",
    },
    {
      id: 26,
      lmNo: 6051,
      name: "PROF. SARMISTHA BHATTACHARYYA",
      photo: "",
      contact: "6000732274",
      district:
        "Deptt. Of Commerce, Doomdooma college, Dist- Tinsukia, Pin-786151 Assam",
      email: "sarmisthabhattcharyya7@gmail.com",
    },
    {
      id: 27,
      lmNo: 6050,
      name: "KAROBI BORAH",
      photo: "",
      contact: "8011585273",
      district:
        "Asst. Prof. Economics, Doomdooma college, P.O Doodooma, Dist- Tinsukia, PIN_786151 Assam",
      email: "karobiborah2@gmail.com",
    },
    {
      id: 28,
      lmNo: 6049,
      name: "DR. INDRANI GOGOI",
      photo: "",
      contact: "8638242574",
      district:
        "Asst. Prof. English,Nowboisa college, P.O Nowboisa, Dist- Lakhimpur, Pin-787001",
      email: "igogoi811@gmail.com",
    },
    {
      id: 29,
      lmNo: 6048,
      name: "ISHMIREKHAHANDIQUE KONWAR",
      photo: "",
      contact: "9401122533",
      district:
        "Asst. Prof. Education, North Lakhimpur college (autonomous) Khelmati, North Lakhimpur, PIN-787031 Assam",
      email: "ishmirekhakonwar@gmail.com",
    },
    {
      id: 30,
      lmNo: 6047,
      name: "DR. JATINDRA BORAH",
      photo: "",
      contact: "8638036959",
      district: "Asst. Prof. Education, Tihu college, Nalbari, Assam",
      email: "Jborahhgc@gmail.com",
    },
    {
      id: 31,
      lmNo: 6046,
      name: "DR.LOKMAN ALI",
      photo: "",
      contact: "9954811482",
      district: "Asso. Prof, Education, Doomdooma college, Dist- Tinsukia",
      email: "",
    },
    {
      id: 32,
      lmNo: 6045,
      name: "DR. BIMAN ARANDHARA",
      photo: "",
      contact: "9401803553",
      district:
        "Asst. Prof., GolaghatCommerce college, Golaghat, PIN-785621, Assam",
      email: "bimanarandhara@gmail.com",
    },
    {
      id: 33,
      lmNo: 6044,
      name: "DR.BORNALI BORAH HANDIQUE",
      photo: "",
      contact: "8638104894",
      district: "North Lakhimpur college, (autonomous)",
      email: "bborah27@gmail.com",
    },
    {
      id: 34,
      lmNo: 6041,
      name: "DR. BIMAN CH. CHETIA- PRINCIPAL",
      photo: "",
      contact: "9435086753",
      district:
        "Principal North Lakhimpur college (autonomous), Khelmati,, N. Lakhimpur,PIN-787031, Assam",
      email: "bimanchetia@yahoo.co.in",
    },
    {
      id: 35,
      lmNo: 6040,
      name: "DHARMAJEET BORAH",
      photo: "",
      contact: "9365027925",
      district:
        "Asst. Prof. Education, Govt. Model college, Deithor, Dist: Karbi Anglong, PIN-782480",
      email: "dharmajeet66@gmail.com",
    },
    {
      id: 36,
      lmNo: 6039,
      name: "DR.SUNIL KR DAS",
      photo: "",
      contact: "9101182544",
      district:
        "Asst. Prof. Education, Tihu college Tihu, Dist: Nalbari, Assam PIN-781371",
      email: "skdabkd@rediffmail.com",
    },
    {
      id: 37,
      lmNo: 6038,
      name: "DR.PRANATIKHOUND RAHMAN",
      photo: "",
      contact: "9435389643 / 8472843425",
      district:
        "Lecturer, college of Teacher Education,Golaghat, Dist-Golaghat Assam-785612",
      email: "pranatikhound@gail.com",
    },
    {
      id: 38,
      lmNo: 6009,
      name: "MALABIKA HAZARIKA",
      photo: "",
      contact: "6002157883",
      district:
        "Asst. Prof. Deptt. of Education, Tihu college, Tihu PIN-781371",
      email: "malabikahaz8136@gmail.com",
    },
    {
      id: 39,
      lmNo: 6008,
      name: "DEEPA BARUAH",
      photo: "",
      contact: "6003622843",
      district:
        "Principal, MNC Balika Vidyapith, Nalbari, District- Nalbari,Assam",
      email: "deepabaruah73@gmail.com",
    },
    {
      id: 40,
      lmNo: 6007,
      name: "CHINTAMAYEE SARANGI, PHD",
      photo: "",
      contact: "9435023844",
      district: "Dept. Of Education, Goalpara college, PIN-783101,Assam",
      email: "csarangi1965@gmail.com",
    },
    {
      id: 41,
      lmNo: 5095,
      name: "ARUNDHUTI HANDIQUE",
      photo: "",
      contact: "8011494870",
      district:
        "Biswanath college of Education, Biswanath Chariali, Assam, PIN-784176",
      email: "arundhatihandique@gmail.com",
    },
    {
      id: 42,
      lmNo: 5094,
      name: "MAYURI BORUAH",
      photo: "",
      contact: "7086851654",
      district: "Biswanath College of Education, Biswanath chariali,PIN-784176",
      email: "boruahmayuri26@gmail.com",
    },
    {
      id: 43,
      lmNo: 5093,
      name: "MUNMI BORAH",
      photo: "",
      contact: "8721047053",
      district: "Deptt. Of Education, Dibrugarh University, Dibrugarh Assam",
      email: "munmiborah2mb@gmail.com",
    },
    {
      id: 44,
      lmNo: 5000,
      name: "PARTHA PRATIM MAZUMDAR",
      photo: "",
      contact: "9706630579",
      district:
        "Asst. Teacher,Bhojkuchi high school, Village Bhojkuchi, Dist-Nalbari,PIN-781378 assam",
      email: "Parthapratimmazumder1988@ gmail.com",
    },
    {
      id: 45,
      lmNo: 4999,
      name: "DR.NAMITA DAS",
      photo: "",
      contact: "9365304984",
      district:
        "Asst. Prof. Deptt of Philosophy, Bapujee college, Sarukhetri, Assam PIN-781307",
      email: "phil.namita@gmail.com",
    },
    {
      id: 46,
      lmNo: 4955,
      name: "NOWBOICHA COLLEGE",
      photo: "",
      contact: "7002782168",
      district:
        "Principal, Nowboicha college, Dist-Lakhimpur,P.ONowboicha, PIN-787023",
      email: "principalnowboichacollege@gmail.com",
    },
    {
      id: 47,
      lmNo: 4946,
      name: "DR. NAMITA GOSWAMI",
      photo: "",
      contact: "9864068232",
      district: "Principal, College of Education, Christian basti,",
      email: "namitagoswami234@gmail.com",
    },
    {
      id: 48,
      lmNo: 4945,
      name: "RIPUNJAY BORDOLOI",
      photo: "",
      contact: "9864366161",
      district: "Chengamari High School, P.O Chengamari, PIN-784175 Assam",
      email: "ripunjaybordoloi@gmail.com",
    },
    {
      id: 49,
      lmNo: 4944,
      name: "SUKANYA GOSWAMI",
      photo: "",
      contact: "7002570364",
      district: "Lecturer, DIET, Nalbari, Karia",
      email: "sukanyagoswami17@gmail.com",
    },
    {
      id: 50,
      lmNo: 4943,
      name: "RITU SARKAR",
      photo: "",
      contact: "7005863624",
      district:
        "Department of Education, Asaam Don Bosco University, Tapesia Campus",
      email: "ritusarkar43@gmail.com",
    },
    {
      id: 51,
      lmNo: 4942,
      name: "AGNES HUMTSOE",
      photo: "",
      contact: "8974417821",
      district:
        "Assam Don Bosco University, Tapesia Gardens Kamarkuchi Sonapur-782402",
      email: "agneshumsoe@gmail.com",
    },
    {
      id: 52,
      lmNo: 4941,
      name: "MITALI DEVI",
      photo: "",
      contact: "8254071256",
      district:
        "Assistant Professor, Behali Degree College P. O. Borgang Dist- Biswanath (Assam)- 784167",
      email: "mitalidevi111@gmail.com",
    },
  ];

  const [visibleMembers, setVisibleMembers] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleMembers((prev) => Math.min(prev + 10, allMembers.length));
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4">Our Team Members</h2>
        <div className="w-20 h-1 bg-[#658C58] mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the talented individuals who make our success possible
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allMembers.slice(0, visibleMembers).map((member, index) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            style={{
              animation: `fadeInUp 0.5s ease-out ${(index % 10) * 0.05}s both`,
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={member.photo ? member.photo : 'https://raymetrics.com/wp-content/uploads/2016/08/dummy-prod-1.jpg'}
                alt={member.name}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[#31694E]">
                {member.name}
              </h3>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[#BBC863]" />
                  <span>{member.contact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#658C58]" />
                  <span>{member.district}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail
                    size={16}
                    className="text-[#31694E] mt-0.5 flex-shrink-0"
                  />
                  <span className="break-all">{member.email}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleMembers < allMembers.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-8 py-4 bg-[#31694E] hover:bg-[#658C58] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin" size={20} />
                <span>Loading...</span>
              </>
            ) : (
              <span>View More Members</span>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

export default TeamMembers;
