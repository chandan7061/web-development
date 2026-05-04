function submit(){
    console.log("submit button clicked");

    const fn = document.getElementById("FullName").value;
    console.log(fn);

    document.getElementById("mydata").innerText = fn;
    document.getElementById("FullName").value = "";
}