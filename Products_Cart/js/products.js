const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/12166276/pexels-photo-12166276.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 79.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 788.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/8539296/pexels-photo-8539296.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1279.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://images.pexels.com/photos/19671/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/832811/pexels-photo-832811.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/2929411/pexels-photo-2929411.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/67654/pexels-photo-67654.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/2508735/pexels-photo-2508735.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://images.pexels.com/photos/433098/pexels-photo-433098.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/2376994/pexels-photo-2376994.jpeg?auto=compress&cs=tinysrgb&w=600',
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

