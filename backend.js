// A $( document ).ready() block.
$(document).ready(function() {
  $("#card_1").click(function() {
    $("#all").hide();
    $("#facts_1").show();
    var jsonObj =
      {
      "query": [
        {
          "code": "Region",
          "selection": {
            "filter": "vs:RegionKommun07EjAggr",
            "values": [
              "0182"
            ]
          }
        },
        {
          "code": "Forandringar",
          "selection": {
            "filter": "item",
            "values": [
              "100",
              "110",
              "115",
              "130",
              "140",
              "150"
            ]
          }
        },
        {
          "code": "Kon",
          "selection": {
            "filter": "item",
            "values": [
              "1+2"
            ]
          }
        },
        {
          "code": "Tid",
          "selection": {
            "filter": "item",
            "values": [
              "2021M07"
            ]
          }
        }
      ],
      "response": {
        "format": "json"
      }
    };
    $.ajax({
      method: "POST",
      url: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101G/ManadBefStatRegion",
      data: JSON.stringify(jsonObj)
    })
    .done(function(data) {
      $('#data').append('<tr><td>Folkmängd</td><td>'+ data["data"]["0"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Folkökning</td><td>'+ data["data"]["1"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Födda</td><td>'+ data["data"]["2"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Döda</td><td>'+ data["data"]["3"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Inflyttningar</td><td>'+ data["data"]["4"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Utflyttningar</td><td>'+ data["data"]["5"]["values"]["0"] +'</td></tr>');
    });
  });
  $("#card_2").click(function() {
    $("#all").hide();
    $("#facts_1").show();
    var jsonObj =
    {
      "query": [
        {
          "code": "Region",
          "selection": {
            "filter": "item",
            "values": [
              "0182"
            ]
          }
        },
        {
          "code": "Drivmedel",
          "selection": {
            "filter": "item",
            "values": [
              "100",
              "110",
              "120",
              "130",
              "140",
              "150",
              "160",
              "190"
            ]
          }
        },
        {
          "code": "Tid",
          "selection": {
            "filter": "item",
            "values": [
              "2021M08"
            ]
          }
        }
      ],
      "response": {
        "format": "json"
      }
    };
    $.ajax({
      method: "POST",
      url: "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/PersBilarDrivMedel",
      data: JSON.stringify(jsonObj)
    })
    .done(function(data) {
      console.log(data);
      $('#data').append('<tr><td>Bensin</td><td>'+ data["data"]["0"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Diesel</td><td>'+ data["data"]["1"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>El</td><td>'+ data["data"]["2"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Elhybrid</td><td>'+ data["data"]["3"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Etanol</td><td>'+ data["data"]["4"]["values"]["0"] +'</td></tr>');
      $('#data').append('<tr><td>Gas</td><td>'+ data["data"]["5"]["values"]["0"] +'</td></tr>');
    });
  });
});
