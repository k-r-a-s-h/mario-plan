import React from 'react'

function ProjectDetails( props ) {
    const id = props.match.params.id; 
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title-{id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic repudiandae sapiente laudantium fugiat. Deserunt perspiciatis quam blanditiis, similique ab, aspernatur officiis quo consequuntur aliquam quod reiciendis quas numquam modi?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted By krishna</div>
                <div>2nd Septemmer ,2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
