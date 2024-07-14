const math = require('mathjs');

let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  // Product code yang ingin dihitung total quantity-nya
  const productCodeToCheck = "FBR00040101";
  
  // Inisialisasi objek untuk menyimpan total quantity berdasarkan storageId
  let totalQuantityByStorageId = {};
  
  // Menghitung total quantity untuk productCode tertentu
  productBin.data.forEach(item => {
    if (item.productCode === productCodeToCheck) {
      if (totalQuantityByStorageId[item.storageId]) {
        totalQuantityByStorageId[item.storageId] += item.quantity;
      } else {
        totalQuantityByStorageId[item.storageId] = item.quantity;
       
      }
    }
  });
  
  // Menampilkan hasil total quantity untuk setiap storageId
  console.log(`Total quantity untuk productCode ${productCodeToCheck}:`);
  Object.keys(totalQuantityByStorageId).forEach(storageId => {
  console.log(`Storage ID ${storageId}: ${totalQuantityByStorageId[storageId]}`);
  
  
  });

  let values = Object.values(totalQuantityByStorageId)//variabel dan fungsi untuk mengambil nilai dari dalam object JSON
  let totalquantity = math.add(...values);//variabel yang memiliki fungsi untuk menjumlahkan keseluruhan variabel di dalam array
  console.log('Total Quantity :' +totalquantity)//menampilkan hasil penjumlahan Quantity Product
  