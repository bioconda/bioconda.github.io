.. _`bioconductor-gothic`:

bioconductor-gothic
===================

|downloads|

This is a Hi\-C analysis package using a cumulative binomial test to detect interactions between distal genomic loci that have significantly more reads than expected by chance in Hi\-C experiments. It takes mapped paired NGS reads as input and gives back the list of significant interactions for a given bin size in the genome.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GOTHiC.html
Versions      1.16.0, 1.14.0, 1.12.0, 1.10.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-gothic/meta.yaml



Links         biotools: :biotools:`gothic`, doi: :doi:`10.1101/gr.185272.114`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gothic

and update with::

   conda update bioconductor-gothic



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gothic.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gothic/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gothic/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gothic/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gothic
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gothic/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gothic

