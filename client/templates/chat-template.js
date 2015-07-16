Template.appChat.helpers({
	messages: function () {
		return Messages.find({}, {sort: {createdAt:-1}, limit: 10})
	}
});

Template.appChat.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtGender": function (event) {

		if(event.keyCode == 13){
			Messages.insert({
				sid: $(".txtSID").val(),
				name: $(".txtName").val(),
				age: $(".txtAge").val(),
				birthdate: $(".txtBirthdate").val(),
				address: $(".txtAddress").val(),
				gender: $(".txtGender").val(),
				createdAt: new Date()
			});

			$(".txtGender").val("");
			$(".txtGender").focus();
		}
		return false;
	}
});