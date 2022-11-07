select users.name as name, sum(Round(fare_rate*distance/1000,-2)) as fare
from users
 inner join tickets on tickets.user=users.id
 inner join trains on tickets.train=trains.id
 inner join types on trains.type=types.id
where users.id = 3
group by users.name;


select types.max_seats - count(trains.id) as sell
from trains
 inner join types on trains.type = types.id
 inner join tickets on tickets.train = trains.id
where trains.id = 16
group by trains.id;