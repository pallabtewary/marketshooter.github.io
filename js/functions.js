function sendEmail() {
    Email.send({
        SecureToken: "89798828-a4c8-4616-ac8b-5525b5e7a677",
        To: 'shootermarket@gmail.com',
        From: "noreply.marketshooter@gmail.com",
        Subject: "New Message Received From: "+document.getElementById('name').value,
        Body: "Name: " + document.getElementById('name').value
            + "<br>Email: " + document.getElementById('email').value
            + "<br>Subject: " + document.getElementById('subject').value
            + "<br>Phone: " + document.getElementById('phone').value
            + "<br>Message: " + document.getElementById('message').value
    }).then(
        message => swal("Message sent successfully!")
    );
}

function sendEmailForPayment() {
    $(".btn .fa-spinner").show();
    $(".btn .btn-text").html("Uploading...");
    document.getElementById("upload").disabled = true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telegramId = document.getElementById('telegram-id').value;
    var file = event.srcElement.querySelector('[type="file"]').files[0];
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
        var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
        Email.send({
            SecureToken: "89798828-a4c8-4616-ac8b-5525b5e7a677",
            To: 'shootermarket@gmail.com',
            From: "noreply.marketshooter@gmail.com",
            Subject: "Course Payment Screenshot From " + name,
            Body: "Name: " + name
                + "<br>Email: " + email
                + "<br>Telegram Id: " + telegramId,
            Attachments: [
                {
                    name: file.name,
                    data: dataUri
                }]
        }).then(
            message => Swal.fire({
                title: 'Screenshot uploaded successfully!',
                text: "press ok to close.",
                icon: 'success',
                allowOutsideClick: false,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                // showCancelButton: true,
                confirmButtonColor: '#0e2e50',
                // cancelButtonColor: '#d33',
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("upload").disabled = false;
                    $(".btn .fa-spinner").hide();
                    $(".btn .btn-text").html("Upload");
                }
            }),
        );
    };
}

function copyToClipboard(element, copyIcon, copiedIcon) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $(copyIcon).hide();
    $(copiedIcon).show();
    setTimeout(function () {
        $(copiedIcon).hide();
        $(copyIcon).show();
    }, 5000);
    let timerInterval
    Swal.fire({
        position: 'center-left',
        html: 'ID Copied successfully',
        timer: 500,
        showCancelButton: false,
        showConfirmButton: false,
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('ID Copied successfully')
        }
    })
}