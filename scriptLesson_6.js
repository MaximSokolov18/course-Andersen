function FirstUser(name, isAdmine) {
  const self = this;
  self.name = name;
  self.isAdmine = isAdmine;

  self.getName = function () {
    return self.name;
  };

  self.getIsAdmine = function () {
    return self.isAdmine;
  };
}

function FirstAdmine(name, isAdmine) {
  FirstUser.apply(this, arguments);
  const getAdmine = this.getIsAdmine;
  this.age = 18;

  this.getIsAdmine = function () {
    return getAdmine() + ' is admine';
  };

  this.getName = function () {
    return 'Username is classified';
  };

  this.getStrAgeUser = function () {
    return `Age ${getAdmine()}: ` + this.age;
  };
}

function FirstDefaultUser(name, isAdmine) {
  FirstUser.apply(this, arguments);
  const getNameUser = this.getName;
  this.age = 24;

  this.getName = function () {
    return 'User name: ' + getNameUser();
  };

  this.getIsAdmine = function () {
    return 'Admin information is not available';
  };

  this.getAge = function () {
    return this.age;
  };
}
