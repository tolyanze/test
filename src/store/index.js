import { createStore } from 'vuex'

const store = {
  state:{
    user: [
      {
        "name": "Ferdinand Carney",
        "phone": "(640) 447-3254",
        "email": "in@aol.net",
        "address": "563-4648 Curabitur Street",
        "position_name": "Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
        "department": "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
        "hire_date": "Dec 24, 2020"
      },
      {
        "name": "Deborah Gonzales",
        "phone": "1-258-431-9358",
        "email": "hendrerit@icloud.net",
        "address": "705 Pede Avenue",
        "position_name": "dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum",
        "department": "Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus",
        "hire_date": "Oct 25, 2020"
      },
      {
        "name": "Adrienne Mason",
        "phone": "1-395-514-3388",
        "email": "erat.eget.ipsum@icloud.ca",
        "address": "963 Montes, Avenue",
        "position_name": "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
        "department": "interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac",
        "hire_date": "Nov 15, 2020"
      },
      {
        "name": "Jonas Simon",
        "phone": "1-886-528-2605",
        "email": "at.augue.id@icloud.org",
        "address": "Ap #746-9362 Egestas Street",
        "position_name": "faucibus leo, in lobortis tellus justo sit amet nulla. Donec",
        "department": "montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
        "hire_date": "Jan 23, 2021"
      },
      {
        "name": "April Faulkner",
        "phone": "1-773-867-6849",
        "email": "tristique.pellentesque@aol.net",
        "address": "101-9945 Magna St.",
        "position_name": "ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices,",
        "department": "lectus. Cum sociis natoque penatibus et magnis dis parturient montes,",
        "hire_date": "Dec 28, 2020"
      },
      {
        "name": "Demetrius Church",
        "phone": "(451) 793-8149",
        "email": "erat.eget@aol.ca",
        "address": "P.O. Box 251, 1167 Odio. St.",
        "position_name": "ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel",
        "department": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit",
        "hire_date": "Jan 26, 2021"
      },
      {
        "name": "Giselle Poole",
        "phone": "(212) 422-5714",
        "email": "ullamcorper.duis@protonmail.edu",
        "address": "Ap #653-2069 Donec Av.",
        "position_name": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean",
        "department": "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
        "hire_date": "Nov 24, 2020"
      },
      {
        "name": "Harding Bernard",
        "phone": "1-717-186-7936",
        "email": "ut.dolor@outlook.net",
        "address": "Ap #978-6038 Eu Rd.",
        "position_name": "tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
        "department": "amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis",
        "hire_date": "Nov 23, 2020"
      },
      {
        "name": "Shaeleigh Meyer",
        "phone": "1-932-356-6563",
        "email": "ridiculus.mus@protonmail.org",
        "address": "297-513 Consequat Av.",
        "position_name": "lectus pede et risus. Quisque libero lacus, varius et, euismod",
        "department": "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
        "hire_date": "Sep 7, 2020"
      },
      {
        "name": "Aileen Holmes",
        "phone": "(404) 481-8236",
        "email": "mauris.non.dui@aol.edu",
        "address": "P.O. Box 779, 1201 Proin Rd.",
        "position_name": "Duis cursus, diam at pretium aliquet, metus urna convallis erat,",
        "department": "augue ac ipsum. Phasellus vitae mauris sit amet lorem semper",
        "hire_date": "Oct 25, 2020"
      },
      {
        "name": "Stephen Hernandez",
        "phone": "1-153-325-4615",
        "email": "lacus.cras.interdum@outlook.ca",
        "address": "9659 Primis Avenue",
        "position_name": "Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin",
        "department": "ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam",
        "hire_date": "Nov 22, 2020"
      },
      {
        "name": "Cody Byers",
        "phone": "(863) 431-7321",
        "email": "turpis.non@icloud.couk",
        "address": "192-4949 Leo. Avenue",
        "position_name": "neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis.",
        "department": "feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc,",
        "hire_date": "Nov 18, 2020"
      },
      {
        "name": "Erasmus Gonzalez",
        "phone": "(155) 670-1879",
        "email": "ultricies@aol.org",
        "address": "Ap #549-1558 Dignissim Road",
        "position_name": "vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt",
        "department": "metus vitae velit egestas lacinia. Sed congue, elit sed consequat",
        "hire_date": "Nov 12, 2020"
      },
      {
        "name": "Preston Hopper",
        "phone": "(589) 533-7744",
        "email": "consequat.nec@yahoo.edu",
        "address": "4383 Aliquet Ave",
        "position_name": "mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
        "department": "quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus",
        "hire_date": "Sep 28, 2020"
      },
      {
        "name": "Uma Booth",
        "phone": "1-328-434-6145",
        "email": "nunc@aol.net",
        "address": "P.O. Box 418, 9121 Dictum Street",
        "position_name": "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
        "department": "libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet",
        "hire_date": "Dec 15, 2020"
      },
      {
        "name": "Hop Savage",
        "phone": "(253) 346-1055",
        "email": "dis.parturient.montes@protonmail.com",
        "address": "Ap #215-3625 Nunc Rd.",
        "position_name": "risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi",
        "department": "aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non,",
        "hire_date": "Sep 13, 2020"
      },
      {
        "name": "Haley Duncan",
        "phone": "(976) 162-7547",
        "email": "id.blandit@yahoo.edu",
        "address": "151-850 Duis Av.",
        "position_name": "ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget",
        "department": "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit",
        "hire_date": "Jan 20, 2021"
      },
      {
        "name": "Miranda Mooney",
        "phone": "1-893-670-7109",
        "email": "est@protonmail.ca",
        "address": "5415 Ut St.",
        "position_name": "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus",
        "department": "Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus",
        "hire_date": "Nov 24, 2020"
      },
      {
        "name": "Pamela Hendricks",
        "phone": "(428) 285-0845",
        "email": "phasellus.vitae.mauris@aol.org",
        "address": "5878 Dolor St.",
        "position_name": "cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam",
        "department": "purus mauris a nunc. In at pede. Cras vulputate velit",
        "hire_date": "Sep 5, 2020"
      },
      {
        "name": "Graham Dickerson",
        "phone": "1-466-708-7683",
        "email": "parturient.montes@hotmail.org",
        "address": "Ap #300-4458 A, Avenue",
        "position_name": "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras",
        "department": "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
        "hire_date": "Dec 15, 2020"
      },
      {
        "name": "Wallace Cooley",
        "phone": "1-442-434-3134",
        "email": "lorem.donec.elementum@google.com",
        "address": "P.O. Box 741, 8557 Pede Avenue",
        "position_name": "eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra",
        "department": "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus",
        "hire_date": "Nov 17, 2020"
      },
      {
        "name": "Noble Hanson",
        "phone": "(650) 858-0878",
        "email": "erat@aol.com",
        "address": "3642 Enim. St.",
        "position_name": "lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam",
        "department": "Donec tempor, est ac mattis semper, dui lectus rutrum urna,",
        "hire_date": "Sep 18, 2020"
      },
      {
        "name": "Kyla Burns",
        "phone": "(384) 635-3535",
        "email": "quam@protonmail.edu",
        "address": "571-7818 Phasellus Rd.",
        "position_name": "et tristique pellentesque, tellus sem mollis dui, in sodales elit",
        "department": "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per",
        "hire_date": "Sep 23, 2020"
      },
      {
        "name": "Adara Chase",
        "phone": "(615) 727-1133",
        "email": "ipsum.suspendisse.sagittis@yahoo.com",
        "address": "209-9236 Donec Ave",
        "position_name": "in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris",
        "department": "nunc est, mollis non, cursus non, egestas a, dui. Cras",
        "hire_date": "Dec 2, 2020"
      },
      {
        "name": "Duncan Strickland",
        "phone": "(338) 214-2725",
        "email": "eu.tellus.eu@outlook.org",
        "address": "988-7682 Sapien St.",
        "position_name": "Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non,",
        "department": "ac mattis ornare, lectus ante dictum mi, ac mattis velit",
        "hire_date": "Jan 1, 2021"
      },
      {
        "name": "Kato Winters",
        "phone": "1-848-444-5171",
        "email": "semper.auctor@hotmail.com",
        "address": "283-990 Elit. Rd.",
        "position_name": "ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,",
        "department": "vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac",
        "hire_date": "Jan 20, 2021"
      },
      {
        "name": "Dawn Ortega",
        "phone": "(665) 496-0182",
        "email": "donec.nibh.quisque@google.org",
        "address": "Ap #218-1174 Curabitur Av.",
        "position_name": "tristique senectus et netus et malesuada fames ac turpis egestas.",
        "department": "metus. In nec orci. Donec nibh. Quisque nonummy ipsum non",
        "hire_date": "Dec 24, 2020"
      },
      {
        "name": "Aurora Crane",
        "phone": "1-626-242-5880",
        "email": "odio@icloud.ca",
        "address": "2994 Aenean Rd.",
        "position_name": "lorem, sit amet ultricies sem magna nec quam. Curabitur vel",
        "department": "venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec",
        "hire_date": "Oct 5, 2020"
      },
      {
        "name": "Alea Colon",
        "phone": "(286) 623-2963",
        "email": "aliquet@google.net",
        "address": "P.O. Box 714, 9399 Adipiscing Rd.",
        "position_name": "orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna",
        "department": "Proin mi. Aliquam gravida mauris ut mi. Duis risus odio,",
        "hire_date": "Sep 7, 2020"
      },
      {
        "name": "Adria Bush",
        "phone": "(655) 446-5776",
        "email": "duis.ac.arcu@yahoo.org",
        "address": "381-3295 Odio. Ave",
        "position_name": "non enim commodo hendrerit. Donec porttitor tellus non magna. Nam",
        "department": "lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet",
        "hire_date": "Dec 1, 2020"
      },
      {
        "name": "Akeem Levy",
        "phone": "1-254-241-6616",
        "email": "sodales@yahoo.ca",
        "address": "104-2346 Porta Rd.",
        "position_name": "Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis",
        "department": "Proin nisl sem, consequat nec, mollis vitae, posuere at, velit.",
        "hire_date": "Dec 13, 2020"
      },
      {
        "name": "Abigail Craig",
        "phone": "(631) 938-4282",
        "email": "ornare.in.faucibus@hotmail.net",
        "address": "P.O. Box 758, 889 Eros Rd.",
        "position_name": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet,",
        "department": "justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,",
        "hire_date": "Oct 3, 2020"
      },
      {
        "name": "Adam Joyce",
        "phone": "(813) 146-0602",
        "email": "turpis.aliquam@protonmail.com",
        "address": "981-3312 Mattis. Rd.",
        "position_name": "sem, vitae aliquam eros turpis non enim. Mauris quis turpis",
        "department": "Quisque libero lacus, varius et, euismod et, commodo at, libero.",
        "hire_date": "Sep 20, 2020"
      },
      {
        "name": "Baker Sawyer",
        "phone": "(739) 916-4445",
        "email": "nam.consequat@protonmail.edu",
        "address": "462-1944 Ut St.",
        "position_name": "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc",
        "department": "enim diam vel arcu. Curabitur ut odio vel est tempor",
        "hire_date": "Dec 5, 2020"
      },
      {
        "name": "Elaine Meyer",
        "phone": "(227) 634-3641",
        "email": "lorem@google.couk",
        "address": "652-513 Scelerisque St.",
        "position_name": "consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque",
        "department": "Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis",
        "hire_date": "Sep 18, 2020"
      },
      {
        "name": "Grace Mckee",
        "phone": "1-586-533-8156",
        "email": "accumsan.interdum.libero@hotmail.net",
        "address": "Ap #273-5112 Sem Rd.",
        "position_name": "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
        "department": "cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
        "hire_date": "Oct 10, 2020"
      },
      {
        "name": "Serena Sweeney",
        "phone": "1-261-577-8317",
        "email": "morbi@aol.ca",
        "address": "P.O. Box 414, 2021 Donec Rd.",
        "position_name": "Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum",
        "department": "consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate",
        "hire_date": "Jan 13, 2021"
      },
      {
        "name": "Melanie Simon",
        "phone": "(871) 215-2249",
        "email": "luctus.felis@icloud.com",
        "address": "2843 Blandit Av.",
        "position_name": "dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis",
        "department": "enim mi tempor lorem, eget mollis lectus pede et risus.",
        "hire_date": "Sep 13, 2020"
      },
      {
        "name": "Daniel Frank",
        "phone": "(437) 284-8561",
        "email": "sollicitudin.commodo@hotmail.com",
        "address": "6538 At Rd.",
        "position_name": "tellus sem mollis dui, in sodales elit erat vitae risus.",
        "department": "vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu.",
        "hire_date": "Jan 13, 2021"
      },
      {
        "name": "Glenna Burgess",
        "phone": "1-771-516-6736",
        "email": "penatibus.et@icloud.com",
        "address": "9371 Velit. Av.",
        "position_name": "elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu",
        "department": "et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim",
        "hire_date": "Oct 13, 2020"
      },
      {
        "name": "Urielle Bennett",
        "phone": "1-134-216-1884",
        "email": "ligula@yahoo.ca",
        "address": "Ap #950-9866 Et Ave",
        "position_name": "a, aliquet vel, vulputate eu, odio. Phasellus at augue id",
        "department": "Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi,",
        "hire_date": "Dec 2, 2020"
      },
      {
        "name": "Dorothy Albert",
        "phone": "1-385-499-8817",
        "email": "lorem@hotmail.edu",
        "address": "888-9223 Elit. Rd.",
        "position_name": "sit amet, risus. Donec nibh enim, gravida sit amet, dapibus",
        "department": "massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius",
        "hire_date": "Sep 23, 2020"
      },
      {
        "name": "Quon Newton",
        "phone": "(713) 578-5257",
        "email": "phasellus.ornare@google.couk",
        "address": "1354 Et St.",
        "position_name": "lacinia orci, consectetuer euismod est arcu ac orci. Ut semper",
        "department": "nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse",
        "hire_date": "Nov 28, 2020"
      },
      {
        "name": "Holly Alvarez",
        "phone": "1-343-426-2507",
        "email": "nulla@outlook.ca",
        "address": "Ap #478-8113 A Ave",
        "position_name": "at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum",
        "department": "vel arcu eu odio tristique pharetra. Quisque ac libero nec",
        "hire_date": "Nov 15, 2020"
      },
      {
        "name": "Hillary Bradley",
        "phone": "1-844-523-6130",
        "email": "sed.dictum@aol.edu",
        "address": "P.O. Box 994, 2023 Senectus Rd.",
        "position_name": "Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna",
        "department": "vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur",
        "hire_date": "Oct 28, 2020"
      },
      {
        "name": "Addison Hines",
        "phone": "1-987-406-2087",
        "email": "egestas@outlook.ca",
        "address": "Ap #109-4418 Facilisis Rd.",
        "position_name": "a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc",
        "department": "vitae aliquam eros turpis non enim. Mauris quis turpis vitae",
        "hire_date": "Jan 14, 2021"
      },
      {
        "name": "Dominique Graves",
        "phone": "(378) 321-2217",
        "email": "nibh@outlook.couk",
        "address": "403-8297 Non Ave",
        "position_name": "sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci",
        "department": "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut",
        "hire_date": "Oct 9, 2020"
      },
      {
        "name": "Brody Pickett",
        "phone": "(734) 632-7697",
        "email": "tincidunt.orci@icloud.ca",
        "address": "P.O. Box 775, 6593 Magna. Ave",
        "position_name": "pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
        "department": "urna justo faucibus lectus, a sollicitudin orci sem eget massa.",
        "hire_date": "Jan 16, 2021"
      },
      {
        "name": "Ezra Mcleod",
        "phone": "(937) 667-5653",
        "email": "lacinia@protonmail.org",
        "address": "P.O. Box 273, 6187 Suspendisse Road",
        "position_name": "lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id,",
        "department": "mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam",
        "hire_date": "Jan 14, 2021"
      },
      {
        "name": "Jason Flynn",
        "phone": "1-285-886-2319",
        "email": "leo.cras@icloud.couk",
        "address": "P.O. Box 303, 9462 Sodales. Ave",
        "position_name": "aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
        "department": "nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor",
        "hire_date": "Dec 15, 2020"
      }
    ]
  },
  mutations: {

  }
}

export default createStore(store);