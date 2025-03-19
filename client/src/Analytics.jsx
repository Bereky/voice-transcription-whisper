import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";

const  Analytics = () => {
    const { callId } = useParams();
    const [analytics, setAnalytics] = useState(null);
  
    useEffect(() => {
      fetch(`/api/analytics/${callId}`)
        .then(res => res.json())
        .then(data => setAnalytics(data));
    }, [callId]);
  
    return (
        <Layout>

        {analytics && (
          <div>
            <h2>{analytics.filename}</h2>
            <p>Duration: {analytics.duration}s</p>
            <h3>Transcription:</h3>
            <div>{analytics.transcription}</div>
          </div>
        )}
        </Layout>
    );
  }

  
  export default Analytics