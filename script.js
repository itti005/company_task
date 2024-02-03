$(document).ready(function() {
    // Fetched data from JSON file
    $.ajax({
        url: 'data.php',
        dataType: 'json',
        success: function(data) {
            //  total number of entries to the console
            console.log('Total entries:', data.length);
            
            data.forEach(function(entry, index) {
                entry.serialNo = index + 1;
            });

            // Populate DataTable with JSON data and enable searching and sorting
            $('#newsTable').DataTable({
                data: data,
                columns: [
                    { data: 'serialNo' }, 
                    { data: 'title', render: function(data) {
                        return '<span style="font-size: 16px; font-weight: bold;">' + data + '</span>'; 
                    }},
                    { data: 'description' },
                    { data: 'link', render: function(data) {
                        return '<a href="' + data + '" target="_blank" style="width: 100%; display: inline-block;">' + data + '</a>'; 
                    }},
                    { data: 'pubDate' },
                    { data: 'dc:creator.#text', render: function(data) {
                        return '<span style="font-weight: bold;">' + (data ? data : 'N/A') + '</span>'; 
                    }}
                ],
                // Enable searching and sorting
                searching: true,
                ordering: true,
                // Pagination
                paging: data.length > 5, 
                pageLength: data.length > 5 ? 5 : data.length, 
                lengthMenu: [5, 10, 20] // Entries dropdown
            });
        }
    });
});
