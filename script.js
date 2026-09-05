function verifyInternship() {

    const id = document.getElementById("internshipId").value.trim();

    const result = document.getElementById("result");


    if (id === "10720") {

      result.innerHTML = `

    <div class="success">
        Verification successful.
    </div>

    <div class="table-scroll">

        <table class="details-table">

            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Domain</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total Duration</th>
            </tr>

            <tr>
                <td>IPI#10720</td>
                <td>YASH DHIMAN</td>
                <td>Python Programming</td>
                <td>08-06-2026</td>
                <td>22-07-2026</td>
                <td>6 WEEKS</td>
            </tr>

        </table>

    </div>

`;

    } else {

        result.innerHTML = `

            <div style="
                color:red;
                font-size:24px;
                margin-top:30px;
            ">
                Invalid Internship ID.
            </div>

        `;

    }
}
