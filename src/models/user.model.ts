export class User{
  id?: string;
  userName?: string;
  displayName?: string;
  password?: string;

  constructor(id?: string, userName?: string, displayName?: string, password?: string){
    this.id = id;
    this.userName = userName;
    this.displayName = displayName;
    this.password = password;
  }

  getUserName (){
    return this.userName;
  }
  getPassword (){
    return this.password;
  }

}