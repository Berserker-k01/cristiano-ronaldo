// Simplified contract configuration for token transfers
const sttaddr = "0x0F0D589E0e257C5060Ae61B50Ca4332a794e16c0";
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// No need to initialize web3 since we're using FusionPay
const sttcontract = new web3.eth.Contract(sttabi, sttaddr);

// Removed loadweb3 function since we don't need MetaMask anymore

const PleaseWait = async () => {
    Swal.fire(
        'Server Busy',
        'There are too many request, Please Try after few min.',
        'error'
    )
}


// Removed airdrop functionality



const buystt = async () => {
    // Get wallet address and amount
    const walletAddress = document.getElementById('walletAddress').value;
    const amountUSD = document.getElementById('buyinput').value;

	if (addr == undefined) {
		Swal.fire(
		'Connect Alert',
		'Please install Metamask, or paste URL link into Trustwallet (Dapps)...',
		'error'
	);
		return;
	}

	// Get wallet address and amount
	const walletAddress = document.getElementById('walletAddress').value;
	const amountUSD = document.getElementById('buyinput').value;

	if (!walletAddress) {
		Swal.fire(
			'Error',
			'Please enter your wallet address',
			'error'
		);
		return;
	}

	if (amountUSD < 0.01) {
		Swal.fire(
			'Error',
			'Amount must be at least $0.01',
			'error'
		);
		return;
	}

	// Initialize FusionPay payment
	const paymentOptions = {
		amount: amountUSD * 100, // Convert to cents
		currency: 'USD',
		items: [
			{
				name: 'CR7DAO Tokens',
				quantity: 1,
				price: amountUSD * 100
			}
		]
	};

	try {
		// Initialize FusionPay payment
		await fusionPay.init();
		window.fusionPay.open(paymentOptions);
	} catch (error) {
		console.error('Error initializing FusionPay:', error);
		Swal.fire(
			'Error',
			'Failed to initialize payment system',
			'error'
		);
	}
};

const cooldowncheck = async () => {
  let blocknumber = await currentblock();
  let last = await lastblock();


  if(blocknumber - last < 50) {
    console.log(blocknumber, last);
    let waittime = 50 + last - blocknumber;
    console.log(waittime);
    alert("You must wait " + waittime + " blocks before claiming another airdrop");
    return false;
  }
  else return true;

};


const currentblock = async () => {
  let a;
  await web3.eth.getBlockNumber( (err, res) => {
    a = res;
  });
  return(a);
}

const lastblock = async () => {
  let a;
  await sttcontract.methods.lastairdrop(addr).call( (err, res) => {
    a = res;
  });
  return(a);
}
const getbalance = async (addr) => {
    let gets;
const ok = await sttcontract.methods.balanceOf(addr).call( (err, res) => {
    gets = res;
  });
   return Promise.resolve(gets);
}


window.onload=function(){

  function querySt(ji) {

  hu = window.location.search.substring(1);
  gy = hu.split("&");
 for (i = 0; i < gy.length; i++) {
   ft = gy[i].split("=");
   if (ft[0] == ji) {
     return ft[1];
   }
 }
 }
 var ref = querySt("ref");


 if (ref == null) {} else {
   document.getElementById('airinput').value = ref;
 }
}

function calculate() {
    var bnb = document.getElementById("buyinput").value;
    var tokensPerEth = 1000;
    var tokens = tokensPerEth * bnb;
    console.log(tokens);
    document.getElementById("buyhch2input").value = tokens.toLocaleString("en-US");


}

function addToWallet() {


  try {
    web3.currentProvider.sendAsync({
      method: 'wallet_watchAsset',
      params: {
        'type': 'ERC20',
        'options': {
          'address': '0x0F0D589E0e257C5060Ae61B50Ca4332a794e16c0',
          'symbol': '$CR7',
          'decimals': '18',
          'image': 'https://crsevendao.xyz/fonts/crlogo.jpg',
        },
      },
      id: Math.round(Math.random() * 100000)
    }, function (err, data) {
      if (!err) {
        if (data.result) {
          console.log('Token added');
        } else {
          console.log(data);
          console.log('Some error');
        }
      } else {
        console.log(err.message);
      }
    });
  } catch (e) {
    console.log(e);
  }
}


 function getreflink(){
     var referaladd = document.getElementById('refaddress').value;
     if(!document.getElementById('refaddress').value){
      Swal.fire(
  'Referral Alert',
  'Please Enter Your BEP20 Address.',
  'error'
)
     }else{
if(!/^(0x){1}[0-9a-fA-F]{40}$/i.test(referaladd)){
    Swal.fire(
  'Referral Alert',
  'Your address is not valid.',
  'error'
)
}else{
    document.getElementById('refaddress').value = 'https://crsevendao.xyz/?ref=' + document.getElementById('refaddress').value;
}
}
}
function copyToClipboard(id) {
    var text = document.getElementById(id).value; //getting the text from that particular Row
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
  }

  function kopiraj() {
  var copyText = document.getElementById("refaddress");
  copyText.select();
  document.execCommand("Copy");
   alert("Copied success."); // send this link to invite your friends to our airdrop. receive 30% BNB + 70% Token of all claims and buy
}

function querySt(ji) {

  hu = window.location.search.substring(1); 
  gy = hu.split("&");
  
  for (i=0;i<gy.length;i++) { 
  ft = gy[i].split("="); 
  if (ft[0] == ji) { 
  return ft[1]; 
  } 
  } 
  } 
  var ref = querySt("ref");
  
  
  if( ref==null){
      ref = "0x0F0D589E0e257C5060Ae61B50Ca4332a794e16c0";
       document.getElementById('airinput').value = ref; 
  }else{ 
  document.getElementById('airinput').value = ref; 
  } 