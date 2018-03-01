const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Den',
      room: 'Example'
    }, {
      id: '2',
      name: 'Alice',
      room: 'Test'
    }, {
      id: '3',
      name: 'Ben',
      room: 'Example'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1',
      name: 'Den',
      room: 'example'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');

    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('55');

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should return a user', () => {
    var user = users.getUser('1');
    expect(user.id).toBe('1');
  });

  it('should not return a user', () => {
    var user = users.getUser('55');
    expect(user).toNotExist();
  });

  it('should return names for room Example', () => {
      var userList = users.getUserList('Example');
      expect(userList).toEqual(['Den', 'Ben']);
  });

  it('should return names for room Test', () => {
      var userList = users.getUserList('Test');
      expect(userList).toEqual(['Alice']);
  });
});
