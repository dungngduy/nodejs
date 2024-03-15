const content = document.querySelector('.content') || document.createElement('div');
const tbody = document.querySelector('tbody') || document.createElement('div');

fetch(`http://localhost:3000/subjects`)
.then(res => res.json())
.then(data => {
    const dataHtml = data.map(subject => {
        return `
            <tr>
                <td>${subject.id}</td>
                <td>${subject.name}</td>
                <td><img src="${subject.image}" alt="" width="180px" height="100px"></td>
                <td>
                    <button id="btn-update" class="btn btn-primary" type="submit" data-id="${subject.id}">Sửa</button>
                    <button id="btn-delete" class="btn btn-danger" type="submit" data-id="${subject.id}">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = dataHtml;

    // delete
    const btnDelete = document.querySelectorAll('#btn-delete');
    for (const btn of btnDelete) {
        btn.addEventListener('click', () => {
            if(confirm('Bạn có muốn xóa khóa học này không?')){
                const idSubject = btn.dataset.id;
                funcDelete(idSubject);
            }
        })
    }

    const btnUpdate = document.querySelectorAll('#btn-update');
    for (const btn of btnUpdate) {
        btn.addEventListener('click', () => {
            const idSubject = btn.dataset.id;
            fetch(`http://localhost:3000/subjects/${idSubject}`)
            .then(res => res.json())
            .then(data => {
                content.innerHTML = `
                    <h2>Sửa Môn Học</h2>
                    <form action="">
                        <label for="">Tên môn học</label><br>
                        <input type="text" id="name" class="form-control" value="${data.name}"><br>
                        <label for="">Ảnh</label><br>
                        <input type="text" id="image" class="form-control" value="${data.image}"><br>
                        <div class="w-25 mx-auto">
                            <button id="btn-save" class="btn btn-primary w-100" type="submit">Sửa môn học</button>
                        </div>
                    </form>
                `;

                const btnSave = document.querySelector('#btn-save');
                const name = document.querySelector('#name');
                const image = document.querySelector('#image');
                btnSave.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (name.value == "") {
                        alert('Tên môn học không được để trống');
                        name.focus();
                        return false;
                    } else if (image.value == "") {
                        alert('Ảnh khóa học không được để trống');
                        image.focus();
                        return false;
                    } else {
                        const newSubject = {
                            id: idSubject,
                            name: name.value,
                            image: image.value
                        };
                        funcUpdate(idSubject, newSubject);
                    }
                })
            })
            .catch(err => console.log(err))
        })
    }
})
.catch(err => console.log(err))

// delete
const funcDelete = function(idSubject){
    fetch(`http://localhost:3000/subjects/${idSubject}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        alert('Xóa môn học thành công');
    })
    .catch(err => console.log(err))
}

// update
const funcUpdate = function(idSubject, data){
    fetch(`http://localhost:3000/subjects/${idSubject}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Sửa môn học thành công');
    })
    .catch(err => console.log(err));
}

// add
const btnAdd = document.querySelector('#btn-add') || document.createElement('div');
btnAdd.addEventListener('click', () => {
    content.innerHTML = `
        <h2>Thêm Môn Học</h2>
        <form action="">
            <label for="">Tên môn học</label><br>
            <input type="text" id="name" class="form-control" placeholder="Nhập tên môn học"><br>
            <label for="">Ảnh</label><br>
            <input type="text" id="image" class="form-control" placeholder="Ảnh môn học"><br>
            <div class="w-25 mx-auto">
                <button id="btn-save" type="submit" class="btn btn-primary w-100">Thêm môn học</button>
            </div>
        </form>
    `;

    const btnSave = document.querySelector('#btn-save');
    const name = document.querySelector('#name');
    const image = document.querySelector('#image');
    btnSave.addEventListener('click', function(e){
        e.preventDefault();
        if (name.value == "") {
            alert('Tên môn học không được để trống');
            name.focus();
            return false;
        } else if (image.value == "") {
            alert('Ảnh khóa học không được để trống');
            image.focus();
            return false;
        } else {
            const newSubject = {
                name: name.value,
                image: image.value
            };
            funcAdd(newSubject);
        }
    })
})

const funcAdd = function(data){
    fetch(`http://localhost:3000/subjects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Thêm môn học thành công');
    })
    .catch(err => console.log(err))
}

//login
const btnLogin = document.querySelector('#btn-login') || document.createElement('div');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (username.value == "") {
        alert('Tên đăng nhập không được để trống');
        username.focus();
        return false;
    } else if (password.value == "") {
        alert('Mật khẩu không được để trống');
        password.focus();
        return false;
    } else {
        fetch(`http://localhost:3000/users`)
        .then(res => res.json())
        .then(data => {
            if(checkLogin(data, username.value, password.value)){
                alert('Đăng nhập thành công');
                window.location.href = './index.html';
            }else{
                alert('Tài khoản hoặc mật khẩu không chính xác');
                username.focus();
            }
        })
    }
})

const checkLogin = function(data, user, pass){
    return data.some((data) => {
        return data.username == user && data.password == pass;
    })
}