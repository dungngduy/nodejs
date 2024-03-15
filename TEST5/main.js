const content = document.querySelector('.content') || document.createElement('div');
const tbody = document.querySelector('tbody') || document.createElement('div');

fetch(`http://localhost:3000/coupons`)
.then(res => res.json())
.then(data => {
    const dataHtml = data.map(coupon => {
        return `
            <tr>
                <td>${coupon.id}</td>
                <td>${coupon.nameCoupon}</td>
                <td>${coupon.discount}%</td>
                <td>
                    <button id="btn-update" class="btn btn-warning" type="submit" data-id="${coupon.id}">Sửa</button>
                    <button id="btn-delete" class="btn btn-danger" type="submit" data-id="${coupon.id}">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = dataHtml;

    const btnDelete = document.querySelectorAll('#btn-delete');
    for (const btn of btnDelete) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(confirm('Bạn có chắc muốn xóa mã này?')){
                const idCoupon = btn.dataset.id;
                funcDelete(idCoupon);
            }
        })
    }

    const btnUpdate = document.querySelectorAll('#btn-update');
    for (const btn of btnUpdate) {
        btn.addEventListener('click', () => {
            const idCoupon = btn.dataset.id;
            fetch(`http://localhost:3000/coupons/${idCoupon}`)
            .then(res => res.json())
            .then(coupon => {
                content.innerHTML = `
                    <form action="" method="post">
                        <label for="">Mã giảm giá</label><br>
                        <input type="text" name="" class="form-control" id="nameCoupon" value="${coupon.nameCoupon}"><br>
                        <label for="">Giảm giá</label><br>
                        <input type="text" name="" class="form-control" id="discount" value="${coupon.discount}"><br>
                        
                        <div class="w-25 m-auto">
                            <button class="w-100 btn btn-primary" id="btn-save" type="submit">Lưu</button>
                        </div>
                    </form>
                `;

                const btnSave = document.querySelector('#btn-save');
                const nameCoupon = document.querySelector('#nameCoupon');
                const discount = document.querySelector('#discount');
                btnSave.addEventListener('click', (e) => {
                    e.preventDefault();
                    if(nameCoupon.value == ''){
                        alert('Mã giảm giá không được để trống');
                        nameCoupon.focus();
                        return false;
                    }else if(discount.value == ''){
                        alert('% giảm giá không được để trống');
                        discount.focus();
                        return false;
                    }else if(isNaN(Number(discount.value)) || discount.value <= 0){
                        alert('Mã giảm giá phải là số');
                        discount.focus();
                        return false;
                    }else{
                        const newCoupon = {
                            id: idCoupon,
                            nameCoupon: nameCoupon.value,
                            discount: discount.value
                        };
                        funcUpdate(newCoupon, idCoupon);
                    }
                })
            })
        })
    }
})
.catch(err => console.log(err))

const funcDelete = function(idCoupon){
    fetch(`http://localhost:3000/coupons/${idCoupon}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        alert('Xóa mã giảm giá thành công')
    })
    .catch(err => console.log(err))
}

const funcUpdate = function(data, idCoupon){
    fetch(`http://localhost:3000/coupons/${idCoupon}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Cập nhật mã giảm giá thành công');
    })
    .catch(err => console.log(err))
}

const btnAdd = document.querySelector('#btn-add') || document.createElement('div');
btnAdd.addEventListener('click', () => {
    content.innerHTML = `
        <form action="" method="post">
            <label for="">Mã giảm giá</label><br>
            <input type="text" name="" class="form-control" id="nameCoupon"><br>
            <label for="">Giảm giá</label><br>
            <input type="text" name="" class="form-control" id="discount"><br>
            
            <div class="w-25 m-auto">
                <button class="w-100 btn btn-primary" id="btn-save" type="submit">Thêm mã</button>
            </div>
        </form>
    `;

    const btnSave = document.querySelector('#btn-save');
    const nameCoupon = document.querySelector('#nameCoupon');
    const discount = document.querySelector('#discount');
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        if(nameCoupon.value == ''){
            alert('Mã giảm giá không được để trống');
            nameCoupon.focus();
            return false;
        }else if(discount.value == ''){
            alert('% giảm giá không được để trống');
            discount.focus();
            return false;
        }else if(isNaN(Number(discount.value)) || discount.value <= 0){
            alert('Mã giảm giá phải là số');
            discount.focus();
            return false;
        }else{
            const newCoupon = {
                nameCoupon: nameCoupon.value,
                discount: discount.value
            };
            funcAdd(newCoupon);
        }
    })
})

const funcAdd = function(data){
    fetch(`http://localhost:3000/coupons`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Thêm mã giảm giá thành công');
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
        .then(data => {
            if(checkLogin(data, username.value, password.value)){
                alert('Đăng nhập thành công');
                window.location.href = './index.html';
            }else{
                alert('Tài khoản hoặc mật khẩu không đúng');
                password.focus();
            }
        })
    }
})

const checkLogin = function(data, user, pass){
    return data.some(data => {
        return data.username == user && data.password == pass;
    })
}