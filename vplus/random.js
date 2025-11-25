
 
  function getRandomProxyNumber() {
    let randomNumber;
    const excludedNumbers = [ 31, 35, 62];
    do {
     
      const array = new Uint32Array(1);
      if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        crypto.getRandomValues(array);
        randomNumber = (array[0] % 122) + 1;
      } else {
       
        randomNumber = Math.floor(Math.random() * 122) + 1;
      }
    } while (excludedNumbers.includes(randomNumber)); 
    
    return randomNumber;
  }
  
  
  function getRandomProxyUrl() {
    const randomNumber = getRandomProxyNumber();
    const proxyUrl = `https://pision.hbx${randomNumber}.workers.dev/`;
    console.log(`[Proxy] Generated random number: ${randomNumber}`);
    console.log(`[Proxy] Menggunakan proxy server: ${proxyUrl}`);
    return proxyUrl;
  }
  
 
  let originalInitializePlayer = null;
  
 
  function overrideInitializePlayer() {
    if (window.initializePlayer && !window.initializePlayer._overridden) {
      originalInitializePlayer = window.initializePlayer;
      
      window.initializePlayer = function(channelId, streamUrl, drmLicense) {
        console.log('[Player] Original URL:', streamUrl);
        
       
        if (streamUrl && !streamUrl.includes('pision.bhx')) {
          
          streamUrl = streamUrl.replace(/^https?:\/\//, '');
         
          const proxyUrl = getRandomProxyUrl();
          streamUrl = proxyUrl + streamUrl;
        }
        
        console.log('[Player] Modified URL:', streamUrl);
        console.log('[Player] Memanggil initializePlayer dengan proxy acak');
        
       
        return originalInitializePlayer(channelId, streamUrl, drmLicense);
      };
      
      window.initializePlayer._overridden = true;
      console.log('[Player] Fungsi initializePlayer berhasil di-override');
    }
  }
  
  
  setTimeout(overrideInitializePlayer, 100);
  setTimeout(overrideInitializePlayer, 500);
  setTimeout(overrideInitializePlayer, 1000);
