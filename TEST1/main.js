/**
1. Xây dựng chức năng hiển thị (2 điểm)
Hiển thị danh sách sản phẩm theo dạng table
2. Xây dựng chức năng xóa (2 điểm)
Xóa sản phẩm: 1đ
Xóa có confirm và hiển thị thông báo sau khi xóa thành công : 1đ
3. Xây dựng chức năng thêm mới (2 điểm)
Thêm sản phẩm : 1 đ
Hiển thị thông báo sau khi thêm : 0.5đ
Validate form: 0.5đ
4. Xây dựng chức năng cập nhật sản phẩm (2 điểm)
Cập nhật sản phẩm: 1đ
Hiển thị thông báo sau khi cập nhật: 0.5đ
Validate form: 0.5đ
5. Xây dựng chức năng đăng nhập (1 điểm) 
Đăng nhập thành công : 0.5đ
Thông báo sau khi đăng nhập thành công: 0.5đ
6. Xây dựng giao diện sử dụng bootstrap hoặc tailwindcss (1 điểm)
*/

// 1
const listProducts = 'http://localhost:3000/products';
const tbody = document.querySelector('tbody') || document.createElement('div');
const btnAdd = document.querySelector('.btn-add') || document.createElement('div');
const content = document.querySelector('.content') || document.createElement('div');
fetch(listProducts)
.then(res => res.json())
.then(data => {
    const dataHtml = data.map(product => {
        return `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button type="submit" class="btn-update btn btn-warning" data-id="${product.id}">Sửa</button>
                    <button type="submit" class="btn-delete btn btn-danger" data-id="${product.id}">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = dataHtml;

    // 2
    const btnDelete = document.querySelectorAll('.btn-delete');
    for (const btn of btnDelete) {
        btn.addEventListener('click', () =>{
            if(confirm('Bạn có muốn xóa sản phẩm này?')){
                const idProduct = btn.dataset.id;
                deleteProduct(idProduct);
            }
        });
    }

    // 4
    const btnUpdate = document.querySelectorAll('.btn-update');
    for (const btn of btnUpdate) {
        btn.addEventListener('click', () =>{
            const idProduct = btn.dataset.id;
            fetch(`${listProducts}/${idProduct}`)
            .then(res => res.json())
            .then(data => {
                content.innerHTML = `
                    <h2 class="text-center text-uppercase mb-3">Form Sửa Sản Phẩm</h2>
                    <form action="" method="post">
                        <labbel>Tên sản phẩm</labbel><br>
                        <input type="text" name="" id="name" value="${data.name}" class="form-control"><br>
                        <labbel>Giá</labbel><br>
                        <input type="text" name="" id="price" value="${data.price}" class="form-control"><br>
                        <div class="container w-25">
                            <button type="submit" class="w-100 mx-auto btn-save btn btn-primary">Lưu</button>
                        </div>
                    </form>
                `;

                const btnSave = document.querySelector('.btn-save');
                const nameProduct = document.getElementById('name');
                const price = document.getElementById('price');
                btnSave.addEventListener('click', function(e){
                    e.preventDefault();
                    if(nameProduct.value == ''){
                        alert('Tên sản phẩm không được để trống');
                        nameProduct.focus();
                        return false;
                    }else if(price.value == ''){
                        alert('Giá sản phẩm không được để trống');
                        price.focus();
                        return false;
                    }else if(isNaN(Number(price.value)) || Number(price.value) <= 0){
                        alert('Giá sản phẩm phải lớn hơn 0');
                        price.focus();
                        return false;
                    }

                    const newProduct = {
                        id: idProduct,
                        name: nameProduct.value,
                        price: price.value,
                    }
                    updateProduct(idProduct, newProduct);
                });
            })
            .catch(err => console.log(err)) 
        });
    }
}).catch(err => console.log(err));

// delete
const deleteProduct = function(idProduct){
    fetch(`${listProducts}/${idProduct}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        alert('Bạn đã xóa thành công');
    })
    .catch(err => console.log(err));
}

// add
btnAdd.addEventListener('click', () => {
    content.innerHTML = `
        <h2 class="text-center text-uppercase mb-3">Form Thêm Sản Phẩm</h2>
        <form action="" method="post">
            <labbel>Tên sản phẩm</labbel><br>
            <input type="text" name="" id="name" class="form-control" placeholder="Tên sản phẩm"><br>
            <labbel>Giá</labbel><br>
            <input type="text" name="" id="price" class="form-control" placeholder="Giá sản phẩm"><br>
            <div class="container w-25">
                <button type="submit" class="w-100 mx-auto btn-submit btn btn-primary">Thêm sản phẩm</button>
            </div>
        </form>
    `;
    const btnSubmit = document.querySelector('.btn-submit');
    const nameProduct = document.getElementById('name');
    const price = document.getElementById('price');
    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        if(nameProduct.value == ''){
            alert('Tên sản phẩm không được để trống');
            nameProduct.focus();
            return false;
        }else if(price.value == ''){
            alert('Giá sản phẩm không được để trống');
            price.focus();
            return false;
        }else if(isNaN(Number(price.value)) || Number(price.value) <= 0){
            alert('Giá sản phẩm phải lớn hơn 0');
            price.focus();
            return false;
        }

        const newProduct = {
            name: nameProduct.value,
            price: price.value,
        }
        addProduct(newProduct);
    })  
});

const addProduct = function(data){
    fetch(listProducts, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Bạn đã thêm sản phẩm thành công');
    })
    .catch(err => console.log(err));
}

// update
const updateProduct = function(id, data){
    fetch(`${listProducts}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Bạn đã sửa sản phẩm thành công');
    })
    .catch(err => console.log(err));
}

//login
const btnCheckLogin = document.querySelector('.btn-login') || document.createElement('div');
const username = document.getElementById('username');
const password = document.getElementById('password');
btnCheckLogin.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value == ''){
        alert('Bạn chưa nhập tài khoản');
        username.focus();
        return false;
    }else if(password.value == ''){
        alert('Bạn chưa nhập mật khẩu');
        password.focus();
        return false;
    }

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
        if(checkLogin(data, username.value, password.value)){
            alert('Bạn đã đăng nhập thành công');
            window.location.href = './index.html';
        }
    })
    .catch(err => console.log(err))
});

const checkLogin = function(data, user, pass){
    return data.some((data) => {
        return data.username = user && data.password == pass;
    })
}