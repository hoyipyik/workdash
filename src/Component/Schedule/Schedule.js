import React, { Component } from 'react';
import AddSchedule from './AddSchedule';
import EditSchedule from './EditSchedule';
import ListScheule from './ListSchedule';

class Schedule extends Component {

    render() {
        return (
            <div className="container">
                <h1>Schedules</h1>
                <AddSchedule
                    updateScheduleAddItem={this.props.updateScheduleAddItem}
                />
                <div className="flex-row">
                    <div className="flex-large">
                    <h4>Task</h4>
                        <ListScheule
                            scheduleData={this.props.scheduleData}
                        />
                    </div>
                    <div className="flex-large">
                    <h4>Edit</h4>
                        <EditSchedule/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;