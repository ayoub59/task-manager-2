
<h1>wax wax bro</h1>
<h2>{{$heading }}</h2>
@unless (count($listings) == 0)

@foreach($listings as $listing)
<a href="/listings/{{$listing["id"]}}">
    <h3>{{$listing["title"] }}</h3>

</a>    
    <p>{{$listing["discriptions"] }}</p>
@endforeach 

    
@else
<p>no data</p>

@endunless
