export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
        <button type='submit' onClick={handleClick} className="btn btn-outline w-28">Create</button>
    );
  }
  