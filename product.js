        let prodArr = []

        function submitProduct() {
            let productName = prodName.value
            let productPrice = prodPrice.value
            let productDescription = prodDesc.value
            let productImage = prodImg.value

            let prodobj = {
                productName,
                productDescription,
                productPrice,
                productImage,
            }

            prodArr.push(prodobj)

            console.log(productName)
            console.log(prodArr)
            prodName.value = '';
            prodDesc.value = '';
            prodImg.value = '';
            prodPrice.value = '';

            displayProd();

        }


        function displayProd() {
            result.innerHTML = ''
            for (let i = 0; i < prodArr.length; i++) {
                result.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${prodArr[i].productImage}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${prodArr[i].productName}</h5>
                <p class="card-text">${prodArr[i].productDescription}</p>
                

                <div class='d-flex gap-4'><button class='btn btn-danger' onclick= 'deleteItem(${i})'>Delete</button><button class='btn btn-success' onclick= 'editItem(${i})'>Edit item</button></div>

                </div>
                        </div>`;
            }
        }

        function deleteLastProd() {
            prodArr.pop()
            console.log(prodArr)
            displayProd()
        }


        function addAsFirst() {
            prodArr.unshift(prodName.value)
            console.log(prodArr)
            displayProd()
        }

        function deleteFirst() {
            prodArr.shift(prodName.value)
            console.log(prodArr)
            displayProd()
        }

        function reverseSelection() {
            prodArr.reverse(prodName.value)
            console.log(prodArr)
            displayProd()
        }


        function deleteItem(some) {
            let isdelete = confirm('Are you sure you want to delete this item')
            if (isdelete) {
                console.log(some)
                prodArr.splice(some, 1)
                displayProd()
            }
        }

        function editItem(edit) {
            let newItem = prompt(`Edit the item? name:${prodArr[edit].productName}`, prodArr[edit].productName);
            let desc = prompt(`Edit the item desscription? Desc:${prodArr[edit].productDescription, prodArr[edit].productDescription}`);
            let img = prompt(`Edit the image? Desc:${prodArr[edit].productImage, prodArr[edit].productImage}`);



            if (newItem, desc, img) {
            prodArr.splice(edit, 1, { productName: newItem, productDescription: desc, productImage: img });
                
            displayProd();
            }
            

        }