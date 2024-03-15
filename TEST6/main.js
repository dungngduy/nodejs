const content = document.querySelector('.content') || document.createElement('div');
const tbody = document.querySelector('tbody') || document.createElement('div');

fetch(`http://localhost:3000/products`)
.then(res => res.json())
.then(data => {
    const dataHtml = data.map(product => {
        return `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}đ</td>
                <td>
                    <button id="btn-update" type="submit" data-id="${product.id}">Sửa</button>
                    <button id="btn-delete" type="submit" data-id="${product.id}">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = dataHtml;

    const btnDelete = document.querySelectorAll('#btn-delete');
    for (const btn of btnDelete) {
        btn.addEventListener('click', () => {
            if(confirm('Bạn có chắc muốn xóa sản phẩm này?')){
                const idProduct = btn.dataset.id;
                funcDelete(idProduct);
            }
        })
    }

    const btnUpdate = document.querySelectorAll('#btn-update');
    for (const btn of btnUpdate) {
        btn.addEventListener('click', () => {
            const idProduct = btn.dataset.id;
            fetch(`http://localhost:3000/products/${idProduct}`)
            .then(res => res.json())
            .then((data) => {
                content.innerHTML = `
                    <form action="" method="post">
                        <label for="">Tên sản phẩm</label><br>
                        <input type="text" name="" id="name" value="${data.name}"><br>
                        <label for="">Giá</label><br>
                        <input type="text" name="" id="price" value="${data.price}"><br>

                        <div>
                            <button id="btn-save" type="submit">Lưu</button>
                        </div>
                    </form>
                `;

                const btnSave = document.querySelector('#btn-save');
                const nameProduct = document.querySelector('#name');
                const price = document.querySelector('#price');

                btnSave.addEventListener('click', (e) => {
                    e.preventDefault();
                    if(nameProduct.value == ''){
                        alert('Tên sản phẩm không được để trống');
                        nameProduct.focus();
                        return false;
                    }else if(price.value == ''){
                        alert('Giá sản phẩm không được để trống');
                        price.focus();
                        return false;
                    }else if(isNaN(Number(price.value)) || price.value < 0){
                        alert('Giá sản phẩm phải lớn hơn 0');
                    }else{
                        const newProduct = {
                            id: idProduct,
                            name: nameProduct.value,
                            price: price.value
                        }
                        funcUpdate(newProduct, idProduct);
                    }
                })
            })
        })
    }
})
.catch(err => console.log(err))

const funcDelete = function(idProduct){
    fetch(`http://localhost:3000/products/${idProduct}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        alert('Xóa sản phẩm thành công');
    })
    .catch(err => console.log(err))
}

const funcUpdate = function(data, idProduct){
    fetch(`http://localhost:3000/products/${idProduct}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert('Cập nhật sản phẩm thành công');
    })
    .catch(err => console.log(err))
}

const btnAdd = document.querySelector('#btn-add') || document.createElement('div');
btnAdd.addEventListener('click', () => {
    content.innerHTML = `
        <form action="" method="post">
            <label for="">Tên sản phẩm</label><br>
            <input type="text" name="" id="name"><br>
            <label for="">Giá</label><br>
            <input type="text" name="" id="price"><br>

            <div>
                <button id="btn-save" type="submit">Thêm sản phẩm</button>
            </div>
        </form>
    `;

    const btnSave = document.querySelector('#btn-save');
    const nameProduct = document.querySelector('#name');
    const price = document.querySelector('#price');

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        if(nameProduct.value == ''){
            alert('Tên sản phẩm không được để trống');
            nameProduct.focus();
            return false;
        }else if(price.value == ''){
            alert('Giá sản phẩm không được để trống');
            price.focus();
            return false;
        }else if(isNaN(Number(price.value)) || price.value < 0){
            alert('Giá sản phẩm phải lớn hơn 0');
        }else{
            const newProduct = {
                name: nameProduct.value,
                price: price.value
            }
            funcAdd(newProduct);
        }
    })
})

const funcAdd = function(data){
    fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert('Thêm sản phẩm thành công');
    })
    .catch(err => console.log(err))
}

const btnLogin = document.querySelector('#btn-login') || document.createElement('div');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if(username.value == ''){
        alert('Tên đăng nhập không được để trống');
        username.focus();
        return false;
    }else if(password.value == ''){
        alert('Mật khẩu không được để trống');
        password.focus();
        return false;
    }else{
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then((data) => {
            if(checkLogin(data, username.value, password.value)){
                alert('Đăng nhập thành công');
                window.location.href = './index.html';
            }else{
                alert('Tài khoản hoặc mật khẩu không đúng');
                password.focus();
            }
        })
        .catch(err => console.log(err))
    }
})

const checkLogin = function(data, user, pass){
    return data.some(data => {
        return data.username == user && data.password == pass;
    })
}