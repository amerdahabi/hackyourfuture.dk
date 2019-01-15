export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      {/*language=CSS*/}
      <style jsx>
        {`
            .content {
                padding: 1rem 5vw;
                margin: 2rem auto;
                max-width: 1200px;
                font-size: 1.4rem;
                line-height: 2.2rem;
                background-color: #f3f3f3;
                box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
                0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                0px 2px 1px -1px rgba(0, 0, 0, 0.12);
                border-radius: 4px;
            }

            .content:nth-child(even) {
                background-color: #f9f9f9;
            }

            @media (max-width: 768px) {
                .content {
                    padding: 1rem 5vw;
                    margin: 0;
                    font-size: 1rem;
                    line-height: 2.2rem;
                    background-color: #eee;
                    box-shadow: none;
                    border-radius: 0;
                }
            }

            @media (min-width: 1200px) {
                .content {
                    text-align: justify;
                }
            }
        `}
      </style>
      {children}
    </div>
  )
}