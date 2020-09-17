
function submit()
{
    var name = $("#name").val();
    var nameEncoded = encodeURIComponent(name);
    var loading = document.querySelector("#loading");
    var fields = document.querySelector("#fields");
    var btnSubmit = document.querySelector("#btn-submit");
    var loaderText = document.querySelector("#loader-text");

    if (name.length <= 0)
    {
        $("#input-error").removeClass("hidden");
    }
    else
    {
        loading.style.display = "block";
        fields.style.display = "none";
        btnSubmit.style.display = "none";
        loaderText.style.display = "block";
        setTimeout(function () { showResult(nameEncoded); }, 3000);
    }

}

function showResult(name)
{
    window.location.href = "result.html" + `?name=${name}`;

}