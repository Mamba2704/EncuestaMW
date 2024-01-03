function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('ppto')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}