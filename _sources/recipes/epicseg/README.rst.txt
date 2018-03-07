.. _`epicseg`:

epicseg
=======

|downloads|

EpiCSeg \(Epigenome Count\-based Segmentation\) is a software for annotating the genome based on the state of the chromatin. It provides tools for extracting count data from BAM files\, typlically corresponding to ChIP\-seq experiments for histone marks \(but other choices are possible\) it learns a statistical model for the read counts based on a HMM\, it annotates the genome\, and it provides tools for displaying and analyzing the obtained models and segmentations. EpiCSeg can be used as an R package or from the command line via Rscript.

============= ===========
Home          http://github.com/lamortenera/epicseg
Versions      1.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epicseg



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install epicseg

and update with::

   conda update epicseg



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/epicseg.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/epicseg/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/epicseg/README.html
.. |downloads| image:: https://anaconda.org/bioconda/epicseg/badges/downloads.svg
               :target: https://anaconda.org/bioconda/epicseg
.. |docker| image:: https://quay.io/repository/biocontainers/epicseg/status
                :target: https://quay.io/repository/biocontainers/epicseg

