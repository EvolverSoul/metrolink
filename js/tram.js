function Tram (route, startingStation)
{
    this._route = route;
    this._currentStation = startingStation;
}

Tram.prototype = {
    getCurrentStation: function()
    {
        return this._currentStation;
    },

    drive: function ()
    {
        var routeStations = this._route.getStations();
        var currentStationIndex = routeStations.indexOf(this._currentStation);
        var nextStationIndex = currentStationIndex + 1;

        if (nextStationIndex >= routeStations.length)
        {
            return "End of the line has been reached. Get off, jerks."
        }

        this._currentStation = routeStations[nextStationIndex];

        return "Now arrving at: " + this._currentStation.getName();
    }

}