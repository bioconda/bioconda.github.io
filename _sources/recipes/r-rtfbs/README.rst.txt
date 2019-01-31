.. _`r-rtfbs`:

r-rtfbs
=======

|downloads|

Identifies and scores possible Transcription Factor Binding Sites and allows for FDR analysis and pruning.  It supports splitting of sequences based on size or a specified GFF\, grouping by G\+C content\, and specification of Markov model order.  The heavy lifting is done in C while all results are made available via R.

============= ===========
Home          http://compgen.cshl.edu/rtfbs
Versions      0.3.9
License       BSD_3_clause
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-rtfbs/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-rtfbs

and update with::

   conda update r-rtfbs



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-rtfbs.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-rtfbs/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-rtfbs/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-rtfbs/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-rtfbs
.. |docker| image:: https://quay.io/repository/biocontainers/r-rtfbs/status
                :target: https://quay.io/repository/biocontainers/r-rtfbs

