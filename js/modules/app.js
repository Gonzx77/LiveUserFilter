export const getAllUsers = async() => {
    let res = fetch("https://6674179975872d0e0a950e53.mockapi.io/user");
    return res;
};