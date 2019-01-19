.. _`fastspar`:

fastspar
========

|downloads|

Rapid and scalable correlation estimation for compositional data

============= ===========
Home          https://github.com/scwatts/fastspar
Versions      0.0.9, 0.0.6
License       GPLv3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastspar



Links         doi: :doi:`https://doi.org/10.1093/bioinformatics/bty734`, doi: :doi:`https://doi.org/10.1371/journal.pcbi.1002687`

============= ===========

\`\`FastSpar\`\` is a C\+\+ implementation of the SparCC algorithm
which is up to several thousand times faster than the original
Python2 release and uses much less memory. The \`\`FastSpar\`\`
implementation provides threading support and a \*p\*\-value
estimator which accounts for the possibility of repetitious data
permutations.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install fastspar

and update with::

   conda update fastspar



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/fastspar.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/fastspar/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/fastspar/README.html
.. |downloads| image:: https://anaconda.org/bioconda/fastspar/badges/downloads.svg
               :target: https://anaconda.org/bioconda/fastspar
.. |docker| image:: https://quay.io/repository/biocontainers/fastspar/status
                :target: https://quay.io/repository/biocontainers/fastspar

