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
    return `${getAdmine()} is admine`;
  };

  this.getName = function () {
    return 'Username is classified';
  };

  this.getStrAgeUser = function () {
    return `Age ${getAdmine()}: ${this.age}`;
  };
}

function FirstDefaultUser(name, isAdmine) {
  FirstUser.apply(this, arguments);
  const getNameUser = this.getName;
  this.age = 24;

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

function SecondAdmine(name, isAdmine) {
  this.name = name;
  this.isAdmine = isAdmine;
  this.age = 19;
}

SecondAdmine.prototype = Object.create(SecondUser.prototype);

SecondAdmine.prototype.getIsAdmine = function () {
  return `${SecondUser.prototype.getIsAdmine.call(this)} is admine`;
};

SecondAdmine.prototype.getName = function () {
  return 'Username is classified';
};

SecondAdmine.prototype.getStrAgeUser = function () {
  return `Age: ${this.age}`;
};

function SecondDefaultUser(name, isAdmine) {
  this.name = name;
  this.isAdmine = isAdmine;
  this.age = 49;
}

SecondDefaultUser.prototype = Object.create(SecondUser.prototype);

SecondDefaultUser.prototype.getIsAdmine = function () {
  return 'Admin information is not available';
};

SecondDefaultUser.prototype.getName = function () {
  return `User name: ${SecondUser.prototype.getName.call(this)}`;
};

SecondDefaultUser.prototype.getAge = function () {
  return this.age;
};
