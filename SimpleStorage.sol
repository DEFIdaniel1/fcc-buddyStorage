// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BuddyStorage {
    //initialized to 0 if not indicated w/ =
    uint256 public number;

    function store(uint _number) public virtual {
        number = _number;
        retrieveNumber();
    }

    //view, pure are free
    function retrieveNumber() public view returns (uint) {
        return number;
    }

    struct People {
        uint number;
        string name;
    }

    mapping(string => uint) public nameToNumber;

    People public person = People({number: 989, name: "Baby Billy"});

    People[] public people;

    function addBabyBilly() public {
        people.push(People({name: person.name, number: person.number}));
        nameToNumber[person.name] = person.number;
    }

    function addPerson(string memory _name, uint _number) public {
        People memory newPerson = People({number: _number, name: _name});
        people.push(newPerson);
        nameToNumber[_name] = _number;
    }
}