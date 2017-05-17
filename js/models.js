class Users{
	constructor(username, passwd){
		this.username = username;
		this.passwd = passwd;
	}
}

class Race{
	constructor(id, name, description){
		this.id = id;
		this.name = name;
		this.description = description;
	}
}

class Round{
	constructor(id, name, description, race){
		this.id = id;
		this.name = name;
		this.description = description;
		this.race = race;
	}
}

class ConditionType{
	constructor(id, name, description){
		this.id = id;
		this.name = name;
		this.description = description;
	}
}

class Condition{
	constructor(id, name, description, conditionType, sport, minimum, maximum, equal){
		this.id = id;
		this.name = name;
		this.description = description;
		this.conditionType = conditionType;
		this.sport = sport;
		this.minimum = minimum;
		this.maximum = maximum;
		this.equal = equal;
	}
}

class SportSpecialization {
	constructor(id, name, description){
		this.id = id;
		this.name = name;
		this.description = description;
	}
}

class Sport {
	constructor(id, name, description, specialization){
		this.id = id;
		this.name = name;
		this.description = description;
		this.specialization = specialization;
	}
}

class SportEvent {
	constructor(id, sport, specialization, condition, round, user){
		this.id = id;
		this.sport = sport;
		this.specialization = specialization;
		this.condition = condition;
		this.round = round;
		this.user = user;
	}
}

class Seria {
	constructor(id, name, description){
		this.id = id;
		this.name = name;
		this.description = description;
	}
}

class Season {
	constructor(id, name, description){
		this.id = id;
		this.name = name;
		this.description = description;
	}
}

class Championship {
  constructor(id, name, description, seria, season, sportEvent, condition, startDate, endDate) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.seria = seria;
		this.season = season;
		this.sportEvent = sportEvent;
		this.condition = condition;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
