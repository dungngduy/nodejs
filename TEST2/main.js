const content = document.querySelector('.content') || document.createElement('div');
const tbody = document.querySelector('tbody');

fetch('http://localhost:3000/person')
.then(res => res.json())
.then(data => {
    const dataHtml = data.map(person => {
        return `
            <tr>
                <td>${person['id']}</td>
                <td>${person['name']}</td>
                <td>${person['age']}</td>
                <td><img src="${person['avatar']}" alt="" width="100px" height="100px"></td>
                <td>
                    <button id="btn-update" type="submit" data-id="${person.id}">Sửa</button>
                    <button id="btn-delete" type="submit" data-id="${person.id}">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
    tbody.innerHTML = dataHtml;

    const btnDelete = document.querySelectorAll('#btn-delete');
    for (const btn of btnDelete) {
        btn.addEventListener('click', () => {
            if(confirm('Bạn có muốn xóa người dùng này không?')){
                const idPerson = btn.dataset.id;
                funcDelete(idPerson);
            }
        })
    }

    const btnUpdate = document.querySelectorAll('#btn-update');
    for (const btn of btnUpdate) {
        btn.addEventListener('click', () => {
            const idPerson = btn.dataset.id;
            fetch(`http://localhost:3000/person/${idPerson}`)
            .then(res => res.json())
            .then(data => {
                content.innerHTML = `
                    <h2 class="text-center text-uppercase mb-3">Form Sửa Người Dùng</h2>
                    <form action="" method="post">
                        <label for="">Tên người dùng</label><br>
                        <input type="text" id="name" value="${data.name}"><br>
                        <label for="">Tuổi</label><br>
                        <input type="text" id="age" value="${data.age}"><br>
                        <label for="">Avatar</label><br>
                        <input type="text" id="avatar" value="${data.avatar}"><br>
                        <button id="btn-update" type="submit">Lưu</button>
                    </form>
                `;

                const btnUpdate = document.querySelector('#btn-update');
                const name = document.querySelector('#name');
                const age = document.querySelector('#age');
                const avatar = document.querySelector('#avatar');
                btnUpdate.addEventListener('click', (e) => {
                    e.preventDefault();
                    if(name.value == ''){
                        alert('Tên người dùng không được để trống');
                        name.focus();
                        return false;
                    }else if(age.value == ''){
                        alert('Tuổi không được để trống');
                        age.focus();
                        return false;
                    }else if(isNaN(Number(age.value)) || age.value <= 0){
                        alert('Tuổi phải là sô');
                        age.focus();
                        return false;
                    }else if(avatar.value == ''){
                        alert('Ảnh đại diện không được để trống');
                        avatar.focus();
                        return false;
                    }else{
                        const newPerson = {
                            id: idPerson,
                            name: name.value,
                            age: age.value,
                            avatar: avatar.value
                        }
                        funcUpdate(newPerson, idPerson);
                    }
                })
            })
            .catch(err => console.log(err))
        })
    }
})
.catch(err => console.log(err));

// delete
const funcDelete = function(idPerson){
    fetch('http://localhost:3000/person/' + idPerson , {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
        alert('Bạn đã xóa thành công');
    })
    .catch(err => console.log(err));
}

// update
const funcUpdate = function(data, idPerson){
    fetch(`http://localhost:3000/person/${idPerson}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert('Sửa sản phẩm thành công');
    })
    .catch(err => console.log(err))
}

// add
const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    content.innerHTML = `
        <h2 class="text-center text-uppercase mb-3">Form Thêm Người Dùng</h2>
        <form action="" method="post">
            <label for="">Tên người dùng</label><br>
            <input type="text" id="name"><br>
            <label for="">Tuổi</label><br>
            <input type="text" id="age"><br>
            <label for="">Avatar</label><br>
            <input type="text" id="avatar"><br>
            <button id="btn-save" type="submit">Thêm</button>
        </form>
    `;
    const btnSave = document.querySelector('#btn-save');
    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const avatar = document.querySelector('#avatar');
    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == ''){
            alert('Tên người dùng không được để trống');
            name.focus();
            return false;
        }else if(age.value == ''){
            alert('Tuổi không được để trống');
            age.focus();
            return false;
        }else if(isNaN(Number(age.value)) || age.value <= 0){
            alert('Tuổi phải là sô');
            age.focus();
            return false;
        }else if(avatar.value == ''){
            alert('Ảnh đại diện không được để trống');
            avatar.focus();
            return false;
        }else{
            const newPerson = {
                name: name.value,
                age: age.value,
                avatar: avatar.value
            }
            funcAdd(newPerson);
        }
    })
});

const funcAdd = function(data){
    fetch('http://localhost:3000/person', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert('Thêm người dùng thành công');
    })
    .catch(err => console.log(err))
}