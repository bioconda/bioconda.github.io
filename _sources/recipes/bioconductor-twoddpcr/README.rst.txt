.. _`bioconductor-twoddpcr`:

bioconductor-twoddpcr
=====================

|downloads|

The twoddpcr package takes Droplet Digital PCR \(ddPCR\) droplet amplitude data from Bio\-Rad\'s QuantaSoft and can classify the droplets. A summary of the positive\/negative droplet counts can be generated\, which can then be used to estimate the number of molecules using the Poisson distribution. This is the first open source package that facilitates the automatic classification of general two channel ddPCR data. Previous work includes \'definetherain\' \(Jones et al.\, 2014\) and \'ddpcRquant\' \(Trypsteen et al.\, 2015\) which both handle one channel ddPCR experiments only. The \'ddpcr\' package available on CRAN \(Attali et al.\, 2016\) supports automatic gating of a specific class of two channel ddPCR experiments only.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/twoddpcr.html
Versions      1.6.0
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-twoddpcr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-twoddpcr

and update with::

   conda update bioconductor-twoddpcr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-twoddpcr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-twoddpcr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-twoddpcr
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-twoddpcr/status
                :target: https://quay.io/repository/biocontainers/bioconductor-twoddpcr

