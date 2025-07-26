'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "09b49223ff84a7681a6c28d55f338fd9",
".git/config": "0b9f66dee48806cb0a842cd87e7738df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d06599b48b3fa890544194c677208ba1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5e6fbaf6a9300c1ed4e0b28f9f657c6",
".git/logs/refs/heads/gh-pages": "c5e6fbaf6a9300c1ed4e0b28f9f657c6",
".git/logs/refs/remotes/origin/gh-pages": "e11e255e0ce15623c4cc9c08987d1e10",
".git/objects/02/af722f3006ab38efc37495a2c63d7bc21efa99": "9bd65315ba5b3868c937ce7d03f64bd5",
".git/objects/04/035e9ef906affab61d515fe925641514deb2d1": "621b0b27ab03c8cd9a7f8fc1478ec3a2",
".git/objects/04/f42ce9170b507413cdf9a39b7f795dcd7f7309": "01f20616df121936ec10d2c4018c2faf",
".git/objects/05/8fa655e1b330aeeb75996dbd41c2687da5a7ed": "b80d43657347533c6477ca811a78aea7",
".git/objects/07/266ae18b44ea06b673b8abed76fc056864585f": "e7f23a93efed6438d42545cd021fbf18",
".git/objects/0c/02db0c4324a0da78d1302a04a1c527904a4908": "c72445ca0195cf5527755f3ac1998071",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/12/467c3c500b9266d1a9f7f9eee8775185916e92": "d2900da055fd42c2c8b3da1257b8c51a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/a8d7d47dd2b4bba68394c79cd93d231b505f16": "a4989349a0dad73caa26935f884148bb",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/23/51e21aee3d5347c91aa3784a8f8fcc94e41766": "340548649eae9b1bc48a26595313bd9a",
".git/objects/23/fcf9e63ba345a1eed94ac2c013189457013035": "9ba1febfc0b312642e17fa70bd2cc487",
".git/objects/25/0517c20e874dc175d81665a719f97903214932": "374de8f6512387f69abfa2e300c2046a",
".git/objects/2c/94e7c716a09fd32d339f56ee354a9b5a77b959": "74d3258f4b5338a03496a850593a8b56",
".git/objects/37/be3898666dfced2ff40952b7954de21fb92402": "10f9cbd8e1aba14849de4a352465a605",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/45/abe1ddfe8b9743221a4abaed59da62ec39f8b2": "43b135eb5c0eaf2b07e0c9046ac9bc88",
".git/objects/47/93535323825c5d9b5f3632678e57c54449a78b": "f04fd23ddb009fd854eba033f0635f2b",
".git/objects/4c/4ec655392b76d923a7b8f47af4698410987433": "19a8b215248fb5847475f1e70de48b8f",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/ac2ef7cd9e91076ae525a2b4d02dbfd61a500a": "db1fd53afacd672fe79b92da471da857",
".git/objects/4d/c4d7e5e264371264f7da99a15612f3733c3d1f": "0ef055835ca52bb3b0ef174e7dbae9fc",
".git/objects/4f/5412dc8bb339e3a608597df2c4670d83dacc12": "2e1b2c0d24079b8bb0973d3244630dab",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/58/0ee737fafcdb6f546f7ec279fd16bc27d2d49c": "9ab45e0e33b7946dcf4c642c63ee1ad4",
".git/objects/59/da85c10627f773f82d604421d92ba4d60cb8a8": "77caf897c530bc1833e30192c7ffe8dd",
".git/objects/5b/3fd7866369c6e0dd3ccf4b7c9daf32dedc4a7f": "f7503420701ca40a7aaae55844259c0d",
".git/objects/5b/c1d85f8d69296e3b28d3efc9510d2b13f5885a": "0c3c7cb1b4b930405157f6d622d52dc8",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/de9513c1846dbc660135e2ea873c24b7762eb5": "70f518d24d34f1a5d4241f143ad7744d",
".git/objects/5e/1acc17f0815e7070cab40ba8d52614494868ab": "cd2f94c30b27fa8b3aa2dce7d0b35939",
".git/objects/61/ceb9462acd9b7c06b7ac8b58aa0b267004dd9e": "026ab76824c3aa14d15c84f7ecd4be0b",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/41fb1dd4f463e4f63263be51e59c2ae434a8bd": "6a5273de77e87559b5bed96db8337a85",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/6b36cb250c13a071f78aee8f0ce809a6d9736a": "821ded1a730fa151aa4077160a1ed613",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/5614e971b901f2908e2b4d5e3b22648d6618c4": "56f6a99144a3acb5c0864eed3d3c59d4",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/c6643ee2e4dd5de22a8217b2e3f7be7a47b597": "064f5ecdc7d34f454c76d2a438ca942c",
".git/objects/7b/89175eff6f6c66d9ac640a531e1bdb114b0127": "4acc82bdee49d029c61eaa9fb1f080f4",
".git/objects/7d/91ed215310fee37220586169a69e5e07309147": "50889550041045518acd4a0ea7ede766",
".git/objects/7f/f3c1dc0bb8c27f9e5f0dfadd52c54d20508cf8": "8af7cb39449fb2b01039ea922972974d",
".git/objects/84/1d31d038c41be0d39f02df191c2a07b0205571": "8f308dab8ca81d5f10ccdd1d2aab3076",
".git/objects/87/c5fb58ab8663576aebef51b937f16d5d681465": "17d18249d4bfdb6c51fe33bb732e23e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/80a6edfda45fc002e1a01193d5f0e2c25aa35e": "a21adb87de37a9167021cd493c37831a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4e6196a5d66f5ffa8ee809cbd808ac3b752cd1": "43ecb285ec5534288ff1bdf7ed3ca928",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/7249d6e747f2a1bb8d69555c63e0b42dc8eb09": "26fc3764faef33779fdd7a040684d1c8",
".git/objects/93/f86c1f515241d99028879240d174e0add89977": "92be1ed6a64ab747c6486ecd2ef1572b",
".git/objects/96/f5b8660ba2849c58917e3284100490c10fe385": "e57b8616d46c263725d07a6920dd9319",
".git/objects/9a/0877113c38b856d3c06b672c9c3f2da10c86a6": "734cdbb90f10131e1626d7258894f884",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/b83978cf2191d3a81eb90962c8bb8c6fc3e357": "3befe0e55dcd43351f03a1982a080491",
".git/objects/9f/af32a39d957e9ae1de487a9207d059b622b2f1": "b3e5ed2babb17513621df17c56c5e815",
".git/objects/a3/0156155837e0aaa9162b9ccc86e0318920ab6d": "e587b487e66116df2892fd371d1573f4",
".git/objects/a4/3e42f363010193553c563408676d854687409d": "468fd757553469287daaff7fe0195ff7",
".git/objects/a9/0c264cc1b2872a5f7391d744cce70b3009b634": "97a58bc768221512112f5e54cea8c987",
".git/objects/ab/90bb7c2fa95fa9b30ab8d76189b0ff7ac10827": "67971cdcf81dc4deca9e5df6b823d1a7",
".git/objects/af/a79e366b2dd7e7474bbbdcbc710c3b7dd384ea": "ef8e76195bff44c56a8479c2014d6289",
".git/objects/b1/28b97055b9fad6a328121d35c6efdb8f04fbc5": "f3f5c100d42864df9c6c40f8aa62bd37",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/2ea0e55ea444faab1c43ad6dee9d98ce4508a4": "da239c5c4d56a944a45ff2c741816407",
".git/objects/be/66ce88649fbf76c84a6abf3db4ea98e7ffe97e": "5607c435b41b19deb8ffc492e4b7082e",
".git/objects/c3/5052a0f9f5fc6f2a01e556eb03bcef3ac97657": "4d68b53fa71b3580f970797078669efc",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/bc32642df0831f7ca27ebb5f7ec88717c71853": "aacc2e497f1b3c992ac4abf5d3fc44d0",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/38fd464274b3cee83f3410ea50100a303d0168": "37a133711d4fb38a531c10ae580feb72",
".git/objects/cc/f3e3e77da037a96ba1bf0b1c304e2268825fb5": "4afa5246c1cf46669c51ea38a23bbd12",
".git/objects/cd/91bc7f7ace0d818bda24a1c271fb2a9e0ed3e5": "4872029d52346e82b4aacc8527622357",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6486be8fe54b9c190b0ab3bb20264ad3200cfc": "c29d73238bb1cfcc54a1db423bbca7c6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4e8ec062c742130ee9617a3a8c24aae6c53cc4": "ed31a2a13d6d3feadb49e3b14e75c6f8",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/17a99db9ec5b658996ccc6476269dd5ff3e017": "6be6da8b6a905abeb0c362e681de07c8",
".git/objects/dc/5e376cd13475ecf6f21006ff43c7095fc12400": "a4c2b52e072566502f10350a6ac97f81",
".git/objects/dd/6d2b5fbec29a93a29f108320b57d195ee21a1b": "28de45500d704b90bff2e22885215c7e",
".git/objects/df/f0a4769e97acae41bde4a9320ad66947dafc31": "ac31300be9401d2c6d9aa9f5cd93b2c2",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/3876198be0c20f1c9f668422af99674b1c433e": "7bb764aba4a6c2a25eddea066b598c77",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e7/862c2d2663904a2af1d8e353b8e7e28ba59da5": "f7bacf867ea2187063d69896e17137be",
".git/objects/e7/c3f78a4499fdb376986aa35809739dacb8bcd4": "e69e852ef898138cf3c64e48d36a88a3",
".git/objects/e9/4e0b8e6f00c88c52ff4b8d9aa0dd391f91698c": "1fd21b33f97390d752332ac9c629fa1e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1f6bf0c3126d3a6878007276fb776244aa15f9": "015b350918cb891e6c5fbb62c5e88db3",
".git/objects/ef/8027e865b7d27b156c420f6eb1ecb439b4c3b3": "324c7aa314726d72f75a632f7eb0134e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/930fc105d034c5a0cedbc298ca0a3eb3163e48": "c5a18f4d8f635e54b6b5139baea3214b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/a42aa40a4777268f63141f038c63dd83e0a7e6": "bfecc5b98a230356e7b19786b0bdd29c",
".git/objects/f8/df493eedfde50ebffcc232187e863d22284a8c": "78e74585da5ae42a16e6916b54e946dc",
".git/objects/fb/495625068542948ac872e45eb2c6a72abb7b96": "88048e8f7c1541456aad61745712be48",
".git/refs/heads/gh-pages": "ea78e108acf0287a6028cc9c5457615f",
".git/refs/remotes/origin/gh-pages": "ea78e108acf0287a6028cc9c5457615f",
"assets/AssetManifest.bin": "a69028b17f4adc8c27f77f756aed0b6b",
"assets/AssetManifest.bin.json": "11faac97ec0ddd4710b2e407cbbf246e",
"assets/AssetManifest.json": "d4945eca09e6adb50eb90b38bc789896",
"assets/FontManifest.json": "08335e301912c5ae856764f47ce29df5",
"assets/fonts/MaterialIcons-Regular.otf": "fe3ab5663e4464c84edb082ab4b033fd",
"assets/lib/fonts/DMSans-Bold.ttf": "9def97569c21a2e08c818845776c4f21",
"assets/lib/fonts/DMSans-Light.ttf": "737e8e7b386545e9636f14b1678e9d82",
"assets/lib/fonts/DMSans-Medium.ttf": "2dd767322ccc760c0c31d6a900b9d3b2",
"assets/lib/fonts/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/lib/fonts/DMSans-SemiBold.ttf": "b475f362cd4f51d0bb56cb036c86ef73",
"assets/lib/fonts/DMSans-Thin.ttf": "3d8bd9931375bff65eed852ce7c56a02",
"assets/lib/images/apple%2520icon.png": "2f1259ac6dbe7f29c315e3898fc94736",
"assets/lib/images/background.png": "e9967350077b2f8ab4789f37ebe17b50",
"assets/lib/images/belly.png": "40c16758028ca9f1e6e1d33df67bbf81",
"assets/lib/images/bone_after.png": "a9b2558550d60703999271dbd5d242af",
"assets/lib/images/bone_before.png": "9b6832c27a13144730d459c9729b71b5",
"assets/lib/images/boy.png": "241265a3aa2badf9a19dd7b7502fa4d3",
"assets/lib/images/cardiology.png": "aad54f6d8f6df9c67cb6fb3a4f65d832",
"assets/lib/images/compass.png": "ac25899fe2a5c4a89288eab84d67e6f2",
"assets/lib/images/customWorkout.jpg": "5b4b302f3bf01b31dc599399ab52aec4",
"assets/lib/images/endurance.png": "62bcd8060295657d58ace2b4347120f1",
"assets/lib/images/exerciseInformation.jpg": "c1ac41c344a3875cd552416c928e4212",
"assets/lib/images/exercises/benchPress%2520(barbell).jpg": "527bd23cb671070d0f05cdc43ed53a52",
"assets/lib/images/exercises/benchPress%2520(barbell).png": "f65ed163402c0f3478acd52c2b1ccf9c",
"assets/lib/images/exercises/benchPress%2520(dumbbell).jpeg": "c32d11919c77bbf12a6fbd36f152eda3",
"assets/lib/images/exercises/benchPress%2520(dumbbell).png": "10c6fdde5aff8e5da317edfb1f111d65",
"assets/lib/images/exercises/bicepCurl%2520(barbell).png": "8c8effbf8d47f8ddf7e71862b15dd905",
"assets/lib/images/exercises/bicepCurl%2520(dumbbell).png": "1a737571c7b134c0ff8c6188dae776f0",
"assets/lib/images/exercises/bicepCurl%2520(machine).png": "0c6558e2338d26a7ef0f4164f87830b8",
"assets/lib/images/exercises/chestFly%2520(dumbbell).jpeg": "cecdc4c2ac8ab0771a9b77c786356c47",
"assets/lib/images/exercises/chestFly%2520(dumbbell).png": "203f7e4905fa619143aac085950d553c",
"assets/lib/images/exercises/chestFly%2520(machine).jpeg": "2cf465e111384fff6f20483933f4e886",
"assets/lib/images/exercises/chestFly%2520(machine).png": "01c675e0ac94f61f3de5df4de40c67a2",
"assets/lib/images/exercises/lateralRaise%2520(cable).jpeg": "c18945682dbd4dc1e0645f09ab9925e6",
"assets/lib/images/exercises/lateralRaise%2520(cable).png": "00fc911e974a2915297b42a44544621d",
"assets/lib/images/exercises/lateralRaise%2520(dumbbell).jpeg": "a9d5f6a0bb651ed5503cc0ee56e636ed",
"assets/lib/images/exercises/lateralRaise%2520(dumbbell).png": "8976943913d7520574ffc57b5909a7a8",
"assets/lib/images/exercises/latPulldown.jpeg": "14e8f3bac3bca3ba046525ff222421a2",
"assets/lib/images/exercises/latPulldown.png": "8c3cbd99480486cceec60a361a22ea2d",
"assets/lib/images/exercises/overheadPress%2520(barbell).jpeg": "5a27552b91629db20c900489786db59c",
"assets/lib/images/exercises/overheadPress%2520(barbell).png": "6ef523893e41bafc0d53e2d2ba1f54b3",
"assets/lib/images/exercises/overheadPress%2520(dumbbell).jpeg": "216391752eea57171aad3c0ecbdc972c",
"assets/lib/images/exercises/overheadPress%2520(dumbbell).png": "f5a62ff45aec89fc193d317fa7749cc3",
"assets/lib/images/exercises/seatedCableRow.jpeg": "131f57207be133ebc9d1be633e1e6820",
"assets/lib/images/exercises/seatedCableRow.png": "65db9e98372325ae526669cba046f7bb",
"assets/lib/images/exercises/seatedInclineCurl%2520(dumbbell).png": "9f3a0784c1476acd740210ed9b67b08d",
"assets/lib/images/exercises/skullcrusher%2520(barbell).png": "ebbd124e007fd952a5f92250d5c70ad9",
"assets/lib/images/exercises/skullcrusher%2520(dumbbell).png": "cb6a8e14443dc1cb25503633fc4fa5b0",
"assets/lib/images/exercises/straightArmLatPulldown.jpeg": "9270e8e7cdb2a4f0cbc5ffeb8a9155a9",
"assets/lib/images/exercises/straightArmLatPulldown.png": "e45506024d0654aa79461d672e861837",
"assets/lib/images/exercises/TBarRow.jpeg": "c9f3fefc7eeeaf5f356d377effd3b363",
"assets/lib/images/exercises/TBarRow.png": "f9952c4e0b32724395c9432fa8155847",
"assets/lib/images/exercises/tricepRopePushdown.png": "678a5d50a51135d834be0950125372b9",
"assets/lib/images/exercises/tricepStraightBarPushdown.png": "99675835edb184652ef378c248eb3f8f",
"assets/lib/images/fitness.png": "548834e18d34012ef425a600139bcfb5",
"assets/lib/images/google%2520icon.png": "dc783842a31aa50a0cf06196a8019cc5",
"assets/lib/images/gymfit_app_logo.png": "0eb81c3ae71ee41fb2c2eb2dc375b121",
"assets/lib/images/hypertension_after.png": "58b2a7c502a6eafe99bfed7a5b7f4ff8",
"assets/lib/images/hypertension_before.png": "675aec6f67e8e4a846b5047f118016bf",
"assets/lib/images/man.png": "fcee650c2ada1eb9ad61327a49ad5339",
"assets/lib/images/muscle.png": "e700e345fe7a34b758c9b6d434806a6f",
"assets/lib/images/none_after.png": "f6a0d3b8cc211f9a9af987598513a96f",
"assets/lib/images/none_before.png": "ce70a65f6f9c2320b81f44793783866f",
"assets/lib/images/quickStart.jpg": "d651405833cb84bab8e57a0d2ad095f9",
"assets/lib/images/reccomendedTraining.jpg": "8e8dc6e3a04b0db21fafff1aa9ffe65d",
"assets/lib/images/robot.png": "fcbc532396a23f2251cd58aa91c2d25e",
"assets/lib/images/sneeze_after.png": "fa77499622eef9282f300272ddc97279",
"assets/lib/images/sneeze_before.png": "2e1d3eb24d07caaac580e7babd5b7b89",
"assets/lib/images/strong.png": "f312647566808ab424681c109483db26",
"assets/lib/images/water.png": "c1ec3de4dac773c2f5b3450cc6e7b30a",
"assets/lib/images/woman.png": "a975934bb378afc4ca8c133df451f56e",
"assets/NOTICES": "4063a041e571060892a2b2924fcf0724",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c7f2c9c113cf4de708f820141f40b763",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dae9a10ceb8987b6c13901454278624e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6eb7afb1b5145c8a5aecf9b1ee6a4e35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bf3068a568957e892ec41f86abf0527",
"/": "1bf3068a568957e892ec41f86abf0527",
"main.dart.js": "6d854b23d82d6590700a9f7ff7d8fdd3",
"manifest.json": "8728eb3c81ac401ba7800436f9415302",
"version.json": "e91e6c52d5a3bcd611d387e1c511f10a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
