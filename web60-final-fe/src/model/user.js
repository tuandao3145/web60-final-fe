export function generateInitialUsers () {

    const initialUser = [];


    // nếu chưa có dữ liệu trg local thì khởi tạo dữ liệu
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(initialUser));
    }
}

export function getUsers() {
    // vào localStorage lấy dữ liệu với key = users
    let json = localStorage.getItem('users');

    return !json ? [] : JSON.parse(json);
}
 
export async function login (email, password) {

    // login lên API
    let item = {email, password}
    let result = await fetch('https://keyboard-shop.herokuapp.com/api/users/login', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json();
    localStorage.setItem("users", JSON.stringify(result));



    const users = getUsers();

    const foundUser = users.find((user) => user.email == email && user.password == password);

    // nếu tìm thấy ng dùng => lưu trạng thái đăng nhập vào localStorage
    if(foundUser) {
        localStorage.setItem('current-user', JSON.stringify(foundUser));
    }

    return foundUser;
};

export function autoLogin() {
    //tìm trong localStorage xem current-user có giá trị hay k
    const json = localStorage.getItem('current-user');
    return json ? JSON.parse(json) : null;
}

export async function register(email, password) {

    //register lên API
    let item = {email, password}
    let result = await fetch('https://keyboard-shop.herokuapp.com/api/users/register', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json();
    localStorage.setItem("users", JSON.stringify(result))
};

