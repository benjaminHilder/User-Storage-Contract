pragma solidity 0.8.14;

contract userStorage {
    struct User {
        uint id;
        string name;
        string job;
        uint age;
    }

    User[] public users;
    uint public nextId = 1;

    function create(string memory _name, string memory _job, uint _age) public {
        users.push(User(nextId, _name, _job, _age));
        nextId++;
    }

    function readName(uint _id) public view returns(string memory) {
        return(users[_id - 1].name);
    }
    
    function readJob(uint _id) public view returns(string memory) {
        return(users[_id - 1].job);
    }
    
    function readAge(uint _id) public view returns(uint) {
        return(users[_id - 1].age);
    }

    function updateName(uint _id, string memory _name) public {
        users[_id - 1].name = _name;
    }

    function updateJob(uint _id, string memory _job) public {
        users[_id - 1].job = _job;
    }

    function updateAge(uint _id, uint _age) public {
        users[_id - 1].age = _age;
    }

    function updateAllInfo(uint _id, string memory _name, string memory _job, uint _age) public {
        users[_id - 1].name = _name;
        users[_id - 1].job = _job;
        users[_id - 1].age = _age;
    }

    function remove(uint _id) public {
        delete users[_id - 1];
    }

    //function find(uint _id) view internal returns(uint) {
    //    for(uint i = 0; i < users.length; i++) {
    //        if(users[i].id == _id) {
    //            return i;
    //        }
    //    }
    //    revert('Cannot find user you were looking for');
    //}
}