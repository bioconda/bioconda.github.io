.. _`pal_finder`:

pal_finder
==========

|downloads|

Find microsatellite repeat elements from sequencing reads and design PCR primers to amplify them

============= ===========
Home          http://sourceforge.net/projects/palfinder/
Versions      0.02.04
License       GPLv3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/pal_finder/meta.yaml



============= ===========

Finds microsatellite repeat elements directly from raw 454
or Illumina paired\-end sequencing reads\, and designs PCR primers
to amplify these repeat loci in an automated fashion. Exact
matches to repeats or 2\-\, 3\-\, 4\-\, 5\-\, and\/or 6\-mers are located
and primer3 is then used to generate primer pairs to amplify
regions containing microsatellite loci.


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install pal_finder

and update with::

   conda update pal_finder



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/pal_finder.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/pal_finder/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/pal_finder/README.html
.. |downloads| image:: https://anaconda.org/bioconda/pal_finder/badges/downloads.svg
               :target: https://anaconda.org/bioconda/pal_finder
.. |docker| image:: https://quay.io/repository/biocontainers/pal_finder/status
                :target: https://quay.io/repository/biocontainers/pal_finder

