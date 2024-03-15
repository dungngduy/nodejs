const content = document.querySelector('.content') || document.createElement('div');
const tbody = document.querySelector('tbody') || document.createElement('div');

fetch(`http://localhost:3000/subjects`)
.then(res => res.json())
.then(data => {
    const html = data.map(subject => {
        return `
            <tr>
                <td>${subject.id}</td>
                <td>${subject.name}</td>
                <td width="600px">${subject.description}</td>
                <td>
                    <button class="btn btn-primary" id="btn-update" type="submit" data-id="${subject.id}">Sửa</button>
                    <button class="btn btn-danger" id="btn-delete" type="submit" data-id="${subject.id}">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = html;

    const btnDelete = document.querySelectorAll('#btn-delete');
    for (const btn of btnDelete) {
        btn.addEventListener('click', () => {
            if(confirm('Bạn có chắc chắn muốn xóa khóa học này?')){
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
            .then(subject => {
                content.innerHTML = `
                    <form action="" method="post">
                        <label for="">Tên khóa học</label><br>
                        <input class="form-control" type="text" name="" id="name" value="${subject.name}"><br>
                        <label for="">Mô tả</label><br>
                        <textarea class="form-control" name="" id="description" cols="80" rows="10">${subject.description}</textarea><br>

                        <div class="w-25 m-auto">
                            <button class="btn btn-primary w-100" id="update" type="submit">Lưu</button>
                        </div>
                    </form>
                `;

                const update = document.querySelector('#update');
                const nameSubject = document.querySelector('#name');
                const description = document.querySelector('#description');
                update.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.preventDefault();
                    if(nameSubject.value == ''){
                        alert('Tên khóa học không được để trống');
                        nameSubject.focus();
                        return false;
                    }else if(description.value == ''){
                        alert('Mô tả không được để trống');
                        description.focus();
                        return false;
                    }else{
                        const newSubject = {
                            id: idSubject,
                            name: nameSubject.value,
                            description: description.value
                        };
                        funcUpdate(newSubject, idSubject);
                    }
                })
            })
        })
    }
})
.catch(err => console.log(err))

const funcDelete = function(idSubject){
    fetch(`http://localhost:3000/subjects/${idSubject}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        alert('Xóa khóa học thành công');
    })
    .catch(err => console.log(err));
}

const funcUpdate = function(data, idSubject){
    fetch(`http://localhost:3000/subjects/${idSubject}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
        alert('Cập nhật khóa học thành công')
    })
    .catch(err => console.log(err))
}

const btnAdd = document.querySelector('#btn-add') || document.createElement('div');
btnAdd.addEventListener('click', () => {
    content.innerHTML = `
        <form action="" method="post">
            <label for="">Tên khóa học</label><br>
            <input class="form-control" type="text" name="" id="name"><br>
            <label for="">Mô tả</label><br>
            <textarea class="form-control" name="" id="description" cols="80" rows="10"></textarea><br>

            <div class="w-25 m-auto">
                <button class="btn btn-primary w-100" id="add" type="submit">Thêm khóa học</button>
            </div>
        </form>
    `;

    const add = document.querySelector('#add');
    const nameSubject = document.querySelector('#name');
    const description = document.querySelector('#description');
    add.addEventListener('click', (e) => {
        e.preventDefault();
        if(nameSubject.value == ''){
            alert('Tên khóa học không được để trống');
            nameSubject.focus();
            return false;
        }else if(description.value == ''){
            alert('Mô tả không được để trống');
            description.focus();
            return false;
        }else{
            const newSubject = {
                name: nameSubject.value,
                description: description.value
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
        alert('Thêm khóa học thành công');
    })
    .catch(err => console.log(err))
}

const btnLogin = document.querySelector('#btn-login') || document.createElement('div');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if(username.value == ''){
        alert('Tên tài khoản không được để trống');
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