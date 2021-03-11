const db = require('../models/index.spec')
const Users = require('../../lib/User');

describe('user data', function() {    
    it('returns data for a user', function() {
        let user = new Users(db, 1);
        user.getUserById
        .then( (data) => {
            expect(data.google_id).toBe("randomGoogleId")
            expect(data.facebook_id).toBe("randomFBId")
            expect(data.email).toBe("jondoe@test.com")
            expect(data.password).toBe("pass123")
            expect(data.first_name).toBe('jon')
            expect(data.last_name).toBe("doe")
        } )        
    })
})