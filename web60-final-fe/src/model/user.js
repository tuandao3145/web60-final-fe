
// export function getUsers() {
//     // vào localStorage lấy dữ liệu với key = users
//     let json =  localStorage.getItem('users');
//     return !json ? [] : JSON.parse(json);
// }

export async function login(email, password) {

    // login lên API
    let item = { "email":email, "password":password }
    let data = await fetch('https://keyboard-shop.herokuapp.com/api/users/login', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    if (data.status === 200) {

        let user = await data.json();
        localStorage.setItem("current-user", JSON.stringify(user));

        return user;
    }
};

export function autoLogin() {
    //tìm trong localStorage xem current-user có giá trị hay k
    const json = localStorage.getItem('current-user');
    return json ? JSON.parse(json) : null;
}

export async function register(email, password) {

    //register lên API
    let item = { "email":email, "password":password }
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

export function logout() {
    //clear localStorage
    localStorage.clear();
};

export async function forgotPassword(email) {
    // gửi yêu cầu reset pass lên API
    let item = { "email":email}
    let result = await fetch('https://keyboard-shop.herokuapp.com/api/users/forgotpassword', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })
    result = await result.json();
}

