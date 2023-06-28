const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 79.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 788.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 1279.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
    price: 9.99,
  },
];

const cartItems = [];

display(products);

function display(arrayProduct)
{
  // for displaying product from above json
  let resultProducts = arrayProduct.map(function(value,index)
  {
    return (`<article class="product">
    <img
      src="${value.image}"
      class="product-img img"
      alt=""
    />
    <footer>
      <h5 class="product-name">${value.title}</h5>
      <span class="product-price">${value.price}</span>
      <span><button type="button" class="btn btn-secondary btn-sm" title="add to cart" onclick="addToCart(${index})"> Add To Cart</button></span>
    </footer>
  </article>`);
  })

  document.getElementById("products").innerHTML=resultProducts.join("");

  // for displaying companies from above json

  let resultCompanies = products.map(function(company)
  {
    return (`
    <button class="company-btn" onClick="filterCompany('${company.company}')">${company.company}</button>`);
  })
  resultCompanies.unshift(`<button class="company-btn" onClick="filterCompany('all')">all</button>`);
  document.getElementById("companies").innerHTML = resultCompanies.join("");
}

// filter product by ikea

function filterCompany(company)
  {
    let filterProducts = products.filter(function(value)
  {
    if(company == "all")
    {
      return true;
    }
    else
    {
      return value.company == company;
    }
  });
  display(filterProducts);
}

function addToCart(index)
{
  let finalitem = products[index];
  let haveIndex =  cartItems.findIndex(function(value)
  {
    return value.title == finalitem.title;
  });

  if(haveIndex < 0)
  {
    finalitem["Qty"] = 1;
    cartItems.push(finalitem);
  }
  else
  {
    cartItems[haveIndex].Qty++;
  }
}

function displayCart()
{
  const cartInfo = cartItems.map(function(value)
  {
    return (`<tbody>
    <tr>                            
      <td>${value.title}</td>
      <td>${value.company}</td>
      <td><img src="${value.image}" alt="Img" class="img-fluid"/></td>
      <td>${value.price}</td>
      <td>${value.Qty}</td>
      <td>${value.price * value.Qty}</td>
    </tr>
  </tbody>`);
  });

  cartInfo.unshift(`<thead>
  <tr>
    <th scope="col">Title</th>
    <th scope="col">Company</th>
    <th scope="col">Image</th>
    <th scope="col">price</th>
    <th scope="col">Quantity</th>
    <th scope="col">P*Q</th>
  </tr>
</thead>`);

document.getElementById("CartInfo").innerHTML = cartInfo.join("");

let totCartPrice = cartItems.reduce(function(pre,curr)
{
  return pre + curr.price * curr.Qty;
},0);
document.getElementById("totPrice").innerHTML =  totCartPrice;
}

