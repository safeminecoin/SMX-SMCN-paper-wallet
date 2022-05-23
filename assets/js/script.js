function refreshdiv() {
	$('#addr-container').load(document.URL +  ' #addr-container');
	$("#addr-container").show();
}

function printDiv() {    
  var printContents = document.getElementById('addr-container').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  }
  
function gen() {
  $("#qrcodeAddress").html("");
  $("#qrcodePrivate").html("");
  $("#pwd-container").show();
  $("#addr-container").show();
  $("#donate").show();
  var coins = document.getElementById("coins");
  var selection = coins.options[coins.selectedIndex].value;
  
  
if (selection == "SafeMineCoin") {
newsmcn();
var namecoin="SafeMineCoin";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/smcn.png" width="60">');
function getConfig() {
	var networkConfigs = {
		'BTC': {
			'uri': 'SMCN:',
			'title': 'SafeMineCoin Wallet',
			'name': 'SafeMineCoin',
			'ticker': 'SMCN',
			'network': {
				'messagePrefix': '\x18SMCN Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'pubKeyHash': 0x3F,
				'scriptHash': 0x1C,
				'wif': 0x34
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newsmcn(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}
else if (selection == "SafeMineX"){
newsmx();
var namecoin="SafeMineX";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/smx.png" width="60">');
function getConfig() {
	var networkConfigs = {
		'SMX': {
			'uri': 'SMX:',
			'title': 'SafeMineX Wallet',
			'name': 'SafeMineX',
			'ticker': 'SMX',
			'network': {
				'messagePrefix': '\x19SafeMineX Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'pubKeyHash': 0x3F,
				'scriptHash': 0x4B,
				'wif': 0x4F
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newsmx(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}

}


  
  
  
