.. _`r-ahocorasicktrie`:

r-ahocorasicktrie
=================

|downloads|

Aho-Corasick is an optimal algorithm for finding many keywords in a text. It can locate all matches in a text in O(N+M) time; i.e., the time needed scales linearly with the number of keywords (N) and the size of the text (M). Compare this to the naive approach which takes O(N*M) time to loop through each pattern and scan for it in the text. This implementation builds the trie (the generic name of the data structure) and runs the search in a single function call. If you want to search multiple texts with the same trie, the function will take a list or vector of texts and return a list of matches to each text. By default, all 128 ASCII characters are allowed in both the keywords and the text. A more efficient trie is possible if the alphabet size can be reduced. For example, DNA sequences use at most 19 distinct characters and usually only 4; protein sequences use at most 26 distinct characters and usually only 20. UTF-8 (Unicode) matching is not currently supported.

======== ===========
Home     https://github.com/chambm/AhoCorasickTrie
Versions 0.1.0
License  Apache License 2.0
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ahocorasicktrie
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-ahocorasicktrie

and update with::

   conda update r-ahocorasicktrie



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-ahocorasicktrie.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-ahocorasicktrie/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-ahocorasicktrie/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-ahocorasicktrie/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-ahocorasicktrie
.. |docker| image:: https://quay.io/repository/biocontainers/r-ahocorasicktrie/status
                :target: https://quay.io/repository/biocontainers/r-ahocorasicktrie


