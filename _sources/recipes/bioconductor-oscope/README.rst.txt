.. _`bioconductor-oscope`:

bioconductor-oscope
===================

|downloads|

Oscope is a statistical pipeline developed to identifying and recovering the base cycle profiles of oscillating genes in an unsynchronized single cell RNA\-seq experiment. The Oscope pipeline includes three modules\: a sine model module to search for candidate oscillator pairs\; a K\-medoids clustering module to cluster candidate oscillators into groups\; and an extended nearest insertion module to recover the base cycle order for each oscillator group.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/Oscope.html
Versions      1.6.0, 1.8.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oscope



Links         biotools: :biotools:`oscope`, doi: :doi:`10.1038/nmeth.3549`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-oscope

and update with::

   conda update bioconductor-oscope



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-oscope.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-oscope/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-oscope/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-oscope/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-oscope
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-oscope/status
                :target: https://quay.io/repository/biocontainers/bioconductor-oscope

