.. _`r-maldiquant`:

r-maldiquant
============

|downloads|

A complete analysis pipeline for matrix-assisted laser desorption/ionization-time-of-flight (MALDI-TOF) and other two-dimensional mass spectrometry data. In addition to commonly used plotting and processing methods it includes distinctive features, namely baseline subtraction methods such as morphological filters (TopHat) or the statistics-sensitive non-linear iterative peak-clipping algorithm (SNIP), peak alignment using warping functions, handling of replicated measurements as well as allowing spectra with different resolutions.

======== ===========
Home     http://strimmerlab.org/software/maldiquant/ https://github.com/sgibb/MALDIquant/
Versions 1.14
License  GPL (>= 3)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-maldiquant
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-maldiquant

and update with::

   conda update r-maldiquant



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-maldiquant.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-maldiquant/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-maldiquant/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-maldiquant/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-maldiquant
.. |docker| image:: https://quay.io/repository/biocontainers/r-maldiquant/status
                :target: https://quay.io/repository/biocontainers/r-maldiquant


