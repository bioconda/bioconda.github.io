.. _`splicemap`:

splicemap
=========

|downloads|

Detects splice junctions from RNA\-seq data. This method does not depend on any existing annotation of gene structures and is capable of finding novel splice junctions with high sensitivity and specificity. It can handle long reads \(50–100 nt\) and can exploit paired\-read information to improve mapping accuracy.

============= ===========
Home          http://www.stanford.edu/group/wonglab/SpliceMap/
Versions      3.3.5.2
License       file
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/SpliceMap



Links         biotools: :biotools:`splicemap`, doi: :doi:`10.1093/nar/gkq211`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install splicemap

and update with::

   conda update splicemap



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/splicemap.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/splicemap/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/splicemap/README.html
.. |downloads| image:: https://anaconda.org/bioconda/splicemap/badges/downloads.svg
               :target: https://anaconda.org/bioconda/splicemap
.. |docker| image:: https://quay.io/repository/biocontainers/splicemap/status
                :target: https://quay.io/repository/biocontainers/splicemap

