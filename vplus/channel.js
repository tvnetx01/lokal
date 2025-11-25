async function initializePlayer(id, url, drmKeys, enableCustomConfig) {
    const video = document.getElementById(id);
    if (!video) {
        console.error(`Video element with ID '${id}'no non non no.`);
        return;
    }


    const ui = video['ui'];
    if (!ui) {
        console.error(`Shaka UI not found on video element with ID '${id}'.`);
        return;
    }

    const controls = ui.getControls();
    const player = controls.getPlayer();

    const config = {
        'controlPanelElements': ['play_pause', 'time_and_duration', 'playback_rate', 'mute', 'spacer', 'captions', 'language', 'quality', 'fullscreen'],
        'playbackRates': [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        'seekBarColors': { base: 'rgba(255,255,255,.2)', buffered: 'rgba(255,255,255,.4)', played: 'rgb(255,0,0)' }
    };

    ui.configure(config);

    const drmKeyObj = {};
    drmKeys.split(';').forEach(keyPair => {
        const [key, value] = keyPair.trim().split(':');
        if (key && value) {
            drmKeyObj[key.trim()] = value.trim();
        }
    });

    console.log("Configured DRM Keys:", drmKeyObj);

    player.configure({ drm: { clearKeys: drmKeyObj } });

    window.player = player;
    window.ui = ui;

    player.addEventListener('error', (event) => {
        console.error('Player Error:', event.detail);
    });
    controls.addEventListener('error', (event) => {
        console.error('UI Error:', event.detail);
    });

   if (enableCustomConfig) {
        player.configure('manifest.dash.ignoreMinBufferTime', true);
        player.configure('streaming.rebufferingGoal', 3); // 3 seconds
    }

    try {
        await player.load(url);
        console.log('The video has now been loaded!');
    } catch (error) {
        onPlayerError(error);
      }
    }

    function onPlayerErrorEvent(errorEvent) {
      onPlayerError(errorEvent.detail);
    }

   
document.addEventListener('shaka-ui-loaded', function () {



initializePlayer('soccerch', '3.visionplus.id/out/v1/63c0da12bb4d48afbaf053f51dff2353/index.mpd', '4035323a7fe64767ab8f3345ed9b93be:67377b8d429603f8bf30c161bda269e5');

    initializePlayer('ss1', '2.visionplus.id/out/v1/89a6e4261cd7470f83e5869e90440cff/index.mpd', '39c4dc6704cf4ceea2fd4863b88d8a7d:4e9d7954c2ff46759289da4fc9f018ea');


    initializePlayer('ss2x', '1.visionplus.id/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd', '911e72adf36946afbdbb4f80782a8394:08aec548a851ba64b7172ae7f05cb91c');

    initializePlayer('ss3', '4.visionplus.id/out/v1/eb98aca0a1be41f7b9c05dac051a250e/index.mpd', 'ed1723eb360145ccafa1b466130186da:c7c4171e98de14c23be427f6ab16ef72');    


   initializePlayer('ss2', '1.visionplus.id/out/v1/d2c68a3dfb644808b416bd90dcc92d5f/index.mpd', '911e72adf36946afbdbb4f80782a8394:08aec548a851ba64b7172ae7f05cb91c');    

 
    initializePlayer('ss4', '3.visionplus.id/out/v1/2fcc58ccec8c45e9aa094fb980eb642d/index.mpd', 'b576e5f5f1bc4cbaa866e5b0face5a30:3377be6c3b5f688ebed687312c9b9d95');    
    
    initializePlayer('sindo', '3.visionplus.id/out/v1/7a69cfc9e135493f87ac4efd63000429/index.mpd', '764e726a234a435c87a82e4a1da6a69b:0de18199ebb3316e3aed8529e39542b7');

    initializePlayer('spotvid', '1.visionplus.id/out/v1/b4814ae93ca84dd3bb5b0aff76ca263f/index.mpd', '3197f7f5086c4315af2b7a94bc9201cb:17462a74739ae0d9855705ffc2c0e1b5');
  
    initializePlayer('spotv2id', '2.visionplus.id/out/v1/46d9cf39b9a84183b8d5022ac8f4bc41/index.mpd', '1539f043249e413d91906036f305831e:671e24fd8d234c7f38d85055815f902a');
  
   initializePlayer('sss', '3.visionplus.id/out/v1/2fcc58ccec8c45e9aa094fb980eb642d/index.mpd', 'b576e5f5f1bc4cbaa866e5b0face5a30:3377be6c3b5f688ebed687312c9b9d95');    

   
  
  initializePlayer('bein1vp', '3.visionplus.id/out/v1/3b0660e05eed4d769521eb0275aab3ab/index.mpd', '3ae6a430c1b8420ea280e317143d8d3a:142473ee925db0db0083c74a178c8298');

    initializePlayer('bein2vp', '4.visionplus.id/out/v1/cfca527d0f16403396a71b2d3d54c32f/index.mpd', '3d756d566ca94e6499518ffb1474d5d0:dbe4ad6803e74739b8f954d23cc58e7b');
      
   initializePlayer('bein3vp', '1.visionplus.id/out/v1/a265695db5cb461095cbfefc02ad793b/index.mpd', '344d320ca45641a88cf002db351ed9a4:246cc6ee7ab235cb824ed3b904b7040b');

   initializePlayer('bein4vp', '2.visionplus.id/out/v1/2e55bc8199044c27b1dbb827af65a04f/index.mpd', 'aef1823177ad40199de440504d992ad5:b95c919408eec7663214a9a67af831ba');

    initializePlayer('bein5vp', '1.visionplus.id/out/v1/fe4d00f07e2f43b789102b84b4d243a9/index.mpd', 'c48c8e48dba24420b5dcef9f5b847b12:daad0aeb165b9a26b706f2a261b8fafe');

initializePlayer('moji_fm', '3.visionplus.id/out/v1/2f1c4190dcf045c9aafc447d54ef7c91/index.mpd', '22bd0016090143f795a275629a6e7a0a:cae11accebe3ca7535141d35f4d41a1d');

 initializePlayer('ent', '2.visionplus.id/out/v1/a90cb773466446b08595007bab12b920/index.mpd', '62f0fb29203c45419e2ea683c5c365e6:10b227a6ea7d65628f025e41318b927c');

   
   initializePlayer('musictv', '4.visionplus.id/out/v1/c20d75deb06f401aa89681a9e5054de7/index.mpd', '55d8bf610e3142408ecfa5295d7eba39:0774f3ae6ea32f9b4c24896f1fb5bb40');

initializePlayer('indosiarvp', '2.visionplus.id/out/v1/bb2b6e6606cb417f807fa017c1a2aa7f/index.mpd', 'ab1fe99e4e4f4cbe95930b3154c1fb19:c7f529deccbf6709e3e65c61c8d1344f');

initializePlayer('sctvvp', '1.visionplus.id/out/v1/9e9aba7068ca4c7f8a73381bef5f8742/index.mpd', '93d5b9f9d5d14f15b1ba9582f332d1fc:116e4014a662fef4ea5d7671dd5120d8');

initializePlayer('mojivp', '3.visionplus.id/out/v1/2f1c4190dcf045c9aafc447d54ef7c91/index.mpd', '22bd0016090143f795a275629a6e7a0a:cae11accebe3ca7535141d35f4d41a1d');

initializePlayer('mentarivp', '4.visionplus.id/out/v1/703a71abac3844748b1e68166242d4f3/index.mpd', '340ff241ff754b038f07096e17104cdc:839bdf4f1523661ba61df2dc219878a3');
 
 initializePlayer('mnctv', '3.visionplus.id/out/v1/d6b026ad50f14b7f9af5ddd5450007d4/index.mpd', 'c3004565365a42d08e3bde39a516d64e:dbfdc0967cfbbed01dba730c99d9c14a');

    
   initializePlayer('rcti', '3.visionplus.id/out/v1/997ce8767b604fae9fce05379b3b8b3a/index.mpd', 'd386001215594043a8995db796ad9e9c:3404792cb4c804902acdc6ca65c1a298');

  initializePlayer('gtv', '2.visionplus.id/out/v1/b8b9b1d5f80f45649b4a3619291551ab/index.mpd', '036e85de0bb448eeb21d39ab300da48e:4c6f9b15dfab2a169b2b78a498c4d77d');
      
  initializePlayer('inews_itv', '2.visionplus.id/out/v1/7b0404cd6a8a4a908123f10774854e46/index.mpd', '8ee7df15ff584967a3eb7b885bafc71e:9a297bf2200eee7dee21b9ace9f57c77');

  initializePlayer('xinews_itv', '2.visionplus.id/out/v1/7b0404cd6a8a4a908123f10774854e46/index.mpd', '8ee7df15ff584967a3eb7b885bafc71e:9a297bf2200eee7dee21b9ace9f57c77');
      
  initializePlayer('trans7', '2.visionplus.id/out/v1/0fd7b7d368bc44bc9b4dece20acc3e33/index.mpd', '78477d2156944b7cb35762a47973aa9c:31805b3c0d03080f9ed33411258e5baf'); 

   
  initializePlayer('transtv', '3.visionplus.id/out/v1/7a69cfc9e135493f87ac4efd63000429/index.mpd', '764e726a234a435c87a82e4a1da6a69b:0de18199ebb3316e3aed8529e39542b7');
  
  initializePlayer('antv', '4.visionplus.id/out/v1/0a6c6b1534444ab4bd903af8761e6747/index.mpd', '251c384e846841abafa1f7c723d57e66:e45b06a38cd261b74c5160f0912c042f');
  
  initializePlayer('tvone', '1.visionplus.id/out/v1/f3df48faafaf4198a65b9763140fce30/index.mpd', 'eab667a8f7f14ff7bf00d790314a10f0:1d6693bc942f036053fc1c3c3b3b5032');
  
  initializePlayer('metrotv', '2.visionplus.id/out/v1/fd4360b1c12c4375848c8f085fd51d41/index.mpd', 'c64493155d8b443c834a13d4970cf834:509294911ac3c2d779ae2225a23460b4');
  
  initializePlayer('tvri', '4.visionplus.id/out/v1/b642f32e396042f981d83fbb5f472272/index.mpd', 'ca65af90adc5e3ddb180e16426bb67da:b6f87a3a128dbd75ead036f596edeae7');
  
  initializePlayer('kompas', '3.visionplus.id/out/v1/dafcaf8b26064ae7b27702088240b535/index.mpd', 'c1e5a6713acc4774a622d01177224094:d88b67279524d26984f9c0041442b5c6');
  
  initializePlayer('rtv', '1.visionplus.id/out/v1/abf3e254818c4608aab8aa109a972203/index.mpd', '87484c0b2a4c41b9b08249ef7817ad7f:ff4f3f232f747e5e7f616b4741fa5c32');
  
  initializePlayer('mdtv', '4.visionplus.id/out/v1/6941abe8211d4ce8bd13d9b96bdd1630/index.mpd', '91dec6fd9fd84b879aacc027bf532790:588a2214bfb91fc0150b9ac2a745cef8');
  
  initializePlayer('jaktv', '2.visionplus.id/out/v1/1f05c642353a4a778d8a544837e1b49c/index.mpd', '5dfa046b3bf14866a143470d9c8dd74d:97e354284ee7a67e5dafbce04e17c4c0');
   
      initializePlayer('jtv', '1.visionplus.id/out/v1/77641c37b4834a9db823ec5137774973/index.mpd', '994121840707471a920b2e65bdf21b7e:0033ae3118a0153ad05fc9a066a8805c');
      
   initializePlayer('balitv', '1.visionplus.id/out/v1/f16b53f0d5ed459da208c459049c9bb0/index.mpd', '9cf20a8618854bb8bf3b7891c6cb5606:7284d5c76c7f913632c715f3d5c5aa8a');
   
   initializePlayer('daaitv', '2.visionplus.id/out/v1/744044c3985142399fbd466f9f3fd8fa/index.mpd', 'b2fdc5d5def7460a8dfb78492b66dd4f:a99645e65ce190e9556dda93be172cd4');
   
   initializePlayer('bandungtv', '1.visionplus.id/out/v1/f16b53f0d5ed459da208c459049c9bb0/index.mpd', '86e50e1506af46c780233c0091b67159:549788738d10df77094a0d4efaf0d567');
  
  // MOVIES
   initializePlayer('tvn_movies', '2.visionplus.id/out/v1/096d5cf064294e7ea3a7f59ee2899669/index.mpd', '17fb563c784848f09d8a1ea88a2fa989:1d0bd94eab5d5f56a950b784d9345439');
      
      
   initializePlayer('hits_movies', '3.visionplus.id/out/v1/de93893d01e6446daaf052a7fec694fc/index.mpd', '07af9ce05d8f4960a1b9113e7fdb8e7e:12b66b374d9c804f7311cb6a8d421c8c');
      
  initializePlayer('imc', '1.visionplus.id/out/v1/65432a4c12ca4a52abf473a0e41d7c7e/index.mpd', 'a04c73e95eeb411dabcba8c35a5a58e8:3f9195dc468d3372f69c6bec5bfa75bb');
      
      
  initializePlayer('thrill', '2.visionplus.id/out/v1/3c619ecc120b46e999d1eaa627cc544f/index.mpd', '3ffab3471a994535bdf7fc663792f08b:6e82876474df025c39ae804ba738ff17');
  
  
  initializePlayer('celestial_movies', '3.visionplus.id/out/v1/fd25e662b7154c60a94f7c061573ba2d/index.mpd', 'de4a383599bb4ec4a24f8c61f2b9a3ba:5166677d7f6797bcf459cf7c8b66dcb9');
  
  initializePlayer('celestial_clasic_movies', '4.visionplus.id/out/v1/6bdbe6ce7f034807aba5f09bed048b05/index.mpd', '974d4fb195224f66a2271de806e62018:0e92ec1a28d59da80161c3541c6eb8eb');
  
   initializePlayer('zee_bioskop', '3.visionplus.id/out/v1/81cb1af2ea4d4842a94f1c83957b4cd2/index.mpd', '398ef14ec7014ad8ae75414a7efd2a0f:99a6225691aa669f0f22677b4536705e');
      
  initializePlayer('axn', '1.visionplus.id/out/v1/456143d3b12140e1a872b25f067ddb62/index.mpd', '2b095c9946d242cb9108e6a589a26072:8bc2cdfd0e86f7cfa935ef05978be229');
      
  
  initializePlayer('my_cinema', '1.visionplus.id/out/v1/797ea46c6d3c4d8cac25f69cb1bc3d5c/index.mpd', 'bea73061f73a4f32a1a8cae8e54880e3:53cf01fafa3a3ad63fb79b665b87c89d');
  
  initializePlayer('my_cinema_asia', '2.visionplus.id/out/v1/d54b3c66f88b43478a35732b902b7194/index.mpd', 'c9ec474742854a9c95bdc93682eadb87:c74ecc2bac2876d4b709c0ec01eaa6c2');
  
  initializePlayer('my_family', '2.visionplus.id/out/v1/6c4cc0ea7bd2454eb9a42ee7b6da9c28/index.mpd', '197d66b18a164417853988963c5cff5f:26d3aecba6ac4d8838e1c9790562c2fc');
  
  
  //entertainment
  
  
  
  initializePlayer('rock_entertainment', '2.visionplus.id/out/v1/4cae4723d4d54a7fb71020bd7939a202/index.mpd', 'a44cd51b688a458d97f534c286e58243:d62302543075463e472e23d7e947f10b');
  
  initializePlayer('mtv', '4.visionplus.id/out/v1/b26eb25311954fcb8ece0c1923c6cce2/index.mpd', '92acc43956cf494fb989d30fe087364f:73bb4869e9f1e2cb9995ee225dda4b7a');
  
  initializePlayer('mtv90', '4.visionplus.id/out/v1/dd9cfc9ae76a4f8abbaa89708a915e38/index.mpd', 'e1c47039932145ee82ffd5ba663fdf3f:b11a040f74a5e81b06b5f771cf1f7567');
  
 
  
  
  
  initializePlayer('vprime', '3.visionplus.id/out/v1/873c24d3946048f68e459250f1d2fd98/index.mpd', '483c71dd36fd45dd965321e8c568ba42:719598f53c998c618adf76a8f4f17fd1');
  
  
  initializePlayer('tvn', '4.visionplus.id/out/v1/6dc5412d26ea4e65961c825d866f2a34/index.mpd', '2e8cbd6f664b4ace966d3edfad94c18e:cff33777777f7e61078ae2ae41ed0636');
  
  initializePlayer('hits', '3.visionplus.id/out/v1/333a9658ed6a4424a92e319114fb7111/index.mpd', '9e9d9ca2bb814de9bfd73d7c19bfe190:e8c178a885d1a1e042ca34ec5ea3b938');
  
  initializePlayer('kix', '2.visionplus.id/out/v1/7a50d44c0a154dd29880c3728fb49a56/index.mpd', '85f74e4d84834605a4b01820091ea627:c2881a45f94ec6ecbec1303f4e3b1fd6');
  
  initializePlayer('Rockaction', '4.visionplus.id/out/v1/010bb28c19b64975b318d3b00f58b18b/index.mpd', 'd4126f7fd6134adfbedb3a0daefd7657:920f1adcca60069c887da7f1d225607d');
  
  initializePlayer('one', '4.visionplus.id/out/v1/9ec31bcce34848d69d4771270ff23ab9/index.mpd', 'be886ebe45024d4b80110269211b3adb:91b1858f34ece95c8377366fb87d99c4');
 
  
  //pengetahuan
  initializePlayer('outdoorchannel', '2.visionplus.id/out/v1/c169ca1dcbe249c5bf233aabc3db4a4f/index.mpd', '7efd32eb4765465c8a19aba6987770c8:733e8d3f4fb8f7ae021168d92f922645');
  
  initializePlayer('lovenature', '3.visionplus.id/out/v1/15500e8f0dc44058ba0431d39a8fed57/index.mpd', '6c4190749d6f4b51bde2df71715e843b:9dfc9803c0fdbb1cd6df2188a6f29064');
  
  
  initializePlayer('BBCEarth', '4.visionplus.id/out/v1/4e5b2a283adf462c8b6b55b2ef059fac/index.mpd', '5709bc59805c4f23b000306efea48438:1772cf06c2f5dd3980a3245cd31fd356');
  
  initializePlayer('History', '1.visionplus.id/out/v1/936ed6f98448469b924a0ce456586651/index.mpd', 'dc32fe8b8e0b4b849724d4a34e390c83:62a98c5670883a0a034df0c27b435a5e');
  
  initializePlayer('CrimeInvestigation', '3.visionplus.id/out/v1/384f26c1c3b74ce09fa60bed24719b79/index.mpd', 'ce73b28200934af786104ce175d0dc45:b3a7b83221ed0d8fe18b8fcf92b5861a');
  
  initializePlayer('CGTN_Doc', '1.visionplus.id/out/v1/9757e131659a4ab8ba08d448c4a3779e/index.mpd', '349ac1b8d5f2493d97ffd88d364de38c:92e769c36e60dcd8573c08fd9c27b9bf');
  
  initializePlayer('cgtn', '4.visionplus.id/out/v1/c3e6d7241fbf404082087774d7221635/index.mpd', '4c2c7834abd740669637bc4b029c9aee:2f7808671f1a6f63ebd86850d8d7cc5f');
  
  initializePlayer('food_travel', '4.visionplus.id/out/v1/77d7eac1b90247ac9aa745bd2eb47fa8/index.mpd', 'c263b43be6b94fb682b1d701e0aaf847:83491ecbe2968e91ed563ce2c41428dc');
  
  initializePlayer('life_time', '4.visionplus.id/out/v1/1880fc1b32d3449196e80345f6cd5918/index.mpd', '59de57168ce94a96bed1606f10c65f67:459fdec6262975e03adc82d62b749f44');
  
  //KIDS 
  
  initializePlayer('kidstv', '1.visionplus.id/out/v1/9041826689ae4f9c9619576d411fa989/index.mpd', 'ec31647c5c3b490bbb5c840ca3e96c9e:a28271a4ba4d085efa1f7738e0f82ea1');
  
  initializePlayer('nick_jr', '2.visionplus.id/out/v1/3fe6d9eb97ed455c942eb8d3d1c2c2e8/index.mpd', '676b60c2b84b49b6b316207a590203e4:da9878a96062ea105895f310e052fa7b');
  
  initializePlayer('animax', '4.visionplus.id/out/v1/ab3ef0f0e4144c3c8b7e60f1873a3bcc/index.mpd', '6f309276a94e45be89a8860159456e84:3fe2eec12885264556ca4e29aa6c0c40');
  
  initializePlayer('my_kids', '3.visionplus.id/out/v1/a241815698e84bc68f1bb6c4996ee92a/index.mpd', '35bfaeb1bb9f4481a1db8fa2aca2747d:263a8c2e3a37ffb9d6b218fb610172f7');
  
  initializePlayer('cebebies', '3.visionplus.id/out/v1/2a5668fb3b9f4e34ab7c02cdc6ef56db/index.mpd', '736777e5823249849d71a7d41ddc35aa:f831235372e07e24fb70f7336291c549');
  
  initializePlayer('nickeloden', '4.visionplus.id/out/v1/27163af9499b4bcca2da96677b158efe/index.mpd', 'c1d5f77cd96049f78b6b253540b31722:ba8d0801fe81187d35633e1d3b3855d5');
  
 
  initializePlayer('Zoomoo', '1.visionplus.id/out/v1/8554b3cb938e44038093df2d65080932/index.mpd', '780f283e8dd84dc195d93899ea9fcabe:59103ac45e9c5e411651e3fa26a2e6d9');
  
 
  
  
  //berita
  
  
  
  initializePlayer('IDX', '2.visionplus.id/out/v1/db34a1b61f414d2181c29f1892bc8d0b/index.mpd', '941717a97fe946069fd7ebc7afb48402:305d9297ec5797e7fd8aca03142b3b7e');

     
      });

    
