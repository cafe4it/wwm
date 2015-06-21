if (Meteor.isServer) {
    Meteor.methods({
        createGuestUser: function () {
            if (!Meteor.user() && Meteor.clientConnected) {
                var clientAddress = Meteor.clientConnected.clientAddress,
                    guest = Meteor.users.findOne({'status.lastLogin.ipAddr' : clientAddress,'roles':{$nin : ['user','moderator','admin']}})
                if ('undefined' === typeof(guest)) {
                    guest = Fake.user({fields: ['fullname', 'email', 'username']}),
                    guest = _.extend(guest, {
                        password: Meteor.clientConnected.id,
                        roles: ['guest'],
                        profile: {
                            fullName: guest.fullname,
                            token: Meteor.clientConnected.id,
                            gender: _.random(0, 1)
                        }
                    });

                    var guestId = Accounts.createUser({
                        username: guest.username,
                        email: guest.email,
                        password: guest.password,
                        profile: guest.profile
                    });

                    Meteor.users.update({_id: guestId}, {
                        $set: {
                            'emails.0.verified': true
                        }
                    });

                    Roles.addUsersToRoles(guestId, guest.roles);
                    return {
                        username: guest.username,
                        token: guest.password
                    };
                }
                else{
                    return {
                        username : guest.username,
                        token : guest.profile.token
                    }
                }

            }
            return false;
        },
        createNormalUser: function (user) {
            if (user) {

            }
            return false;
        }
    })
}