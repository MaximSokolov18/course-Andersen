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

function FirstAdmine(name, isAdmine, age) {
  FirstUser.apply(this, arguments);
  const getAdmine = this.getIsAdmine;
  this.age = age;

  this.getIsAdmine = function () {
    return `${getAdmine()} is admine`;
  };

  this.getName = function () {
    return 'Username is classified';
  };

  this.getStrAgeUser = function () {
    return `Age ${getAdmine()}: ${this.age}`;
  };
}

function FirstDefaultUser(name, isAdmine, age) {
  FirstUser.apply(this, arguments);
  const getNameUser = this.getName;
  this.age = age;

  this.getName = function () {
    return `User name: ${getNameUser()}`;
  };

  this.getIsAdmine = function () {
    return 'Admin information is not available';
  };

  this.getAge = function () {
    return this.age;
  };
}

function SecondUser(name, isAdmine) {
  this.name = name;
  this.isAdmine = isAdmine;
}

SecondUser.prototype.getName = function () {
  return this.name;
};

SecondUser.prototype.getIsAdmine = function () {
  return this.isAdmine;
};

function SecondAdmine(name, isAdmine, age) {
  SecondUser.apply(this, arguments);
  this.age = age;
}

SecondAdmine.prototype = Object.create(SecondUser.prototype);
SecondAdmine.prototype.constructor = SecondAdmine;

SecondAdmine.prototype.getIsAdmine = function () {
  return `${SecondUser.prototype.getIsAdmine.call(this)} is admine`;
};

SecondAdmine.prototype.getName = function () {
  return 'Username is classified';
};

SecondAdmine.prototype.getStrAgeUser = function () {
  return `Age: ${this.age}`;
};

function SecondDefaultUser(name, isAdmine, age) {
  SecondUser.apply(this, arguments);
  this.age = age;
}

SecondDefaultUser.prototype = Object.create(SecondUser.prototype);
SecondDefaultUser.prototype.constructor = SecondDefaultUser;

SecondDefaultUser.prototype.getIsAdmine = function () {
  return 'Admin information is not available';
};

SecondDefaultUser.prototype.getName = function () {
  return `User name: ${SecondUser.prototype.getName.call(this)}`;
};

SecondDefaultUser.prototype.getAge = function () {
  return this.age;
};

class ThirdUser {
  constructor(name, isAdmine) {
    this.name = name;
    this.isAdmine = isAdmine;
  }

  getName() {
    return this.name;
  }

  getIsAdmine() {
    return this.isAdmine;
  }
}

class ThirdAdmine extends ThirdUser {
  constructor(name, isAdmine, age) {
    super(name, isAdmine);
    this.age = age;
  }

  getIsAdmine() {
    return `${super.getIsAdmine()} is admine`;
  }

  getName() {
    return 'Username is classified';
  }

  getStrAgeUser() {
    return `Age ${super.getIsAdmine()}: ${this.age}`;
  }
}

class ThirdDefaultUser extends ThirdUser {
  constructor(name, isAdmine, age) {
    super(name, isAdmine);
    this.age = age;
  }

  getIsAdmine() {
    return 'Admin information is not available';
  }

  getName() {
    return `User name: ${super.getName()}`;
  }

  getAge() {
    return this.age;
  }
}
