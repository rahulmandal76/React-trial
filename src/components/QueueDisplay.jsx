import {FaTrashRestoreAlt,FaUserNinja,FaRegCheckCircle} from "react-icons/fa";

function QueueDisplay({queue,onUpdateStatus,onRemove}) {

    const getStatusColor = (status) => {
        switch (status) {
            case 'Waiting':
                 return 'var(--warning)';
             case 'Serving':
                 return 'var(--success)';
            case 'Completed':
                 return 'var(--info)'; 
            default:
                return 'var(--text)';   
        }
    }

  return (
    <div className="queue-display">
        <h2> Current Queue </h2>
        {Array.isArray(queue) && queue.length === 0 ? (
            <p className="empty-queue"> No Customer Data </p> ) : (
        <div className="queue-list">
            {Array.isArray(queue) &&
             queue.map((customer) => (
                    <div className="queue-item" key={customer.id}>
                        <div className="customer-info">
                            <h3>{customer.name}</h3>
                            <p>{customer.service}</p>
                            <span className="status"
                             style={{color:getStatusColor(customer.status)}}
                             >{customer.status}</span>
                        </div>
                        <div className="actions">
                            {customer.status === "Waiting" && (
                                <button className="serve-btn" onClick={() => onUpdateStatus(customer.id, "Serving")}>
                                  <FaUserNinja/>  Serve
                                </button>
                            )}
                            {customer.status === "Serving" && (
                                <button className="complete-btn" onClick={() => onUpdateStatus(customer.id, "Completed")}>
                                  <FaRegCheckCircle/>  Complete
                                </button>
                            )}
                            <button className="remove-btn" onClick={() => onRemove(customer.id)}>
                              <FaTrashRestoreAlt className="cross-icon" />  Remove
                            </button>
                        </div>
                    </div>
                ))}
        </div>
        )}
    </div>
  );
}

export default QueueDisplay