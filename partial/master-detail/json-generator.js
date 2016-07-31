[{
    'repeat(10)': {
        _id: '{{objectId()}}',
        id: '{{objectId()}}',
        name: {
            first: '{{firstName()}}',
            last: '{{surname()}}'
        },
        birthday: '{{moment(this.date(new Date(2014, 0, 1), new Date())).toISOString()}}',
        age: '{{integer(30, 50)}}',
        created: '{{moment(this.date(new Date())).toISOString()}}',
        addresses: [{
            'repeat(1,4)': {
                street: '{{integer(100, 999)}} {{street()}}',
                city: '{{city()}}',
                state: '{{state()}}',
                zip: '{{integer(11111, 99999)}}'
            }}]

    }
}]
