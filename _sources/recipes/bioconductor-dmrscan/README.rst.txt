.. _`bioconductor-dmrscan`:

bioconductor-dmrscan
====================

|downloads|

This package detects significant differentially methylated regions \(for both qualitative and quantitative traits\)\, using a scan statistic with underlying Poisson heuristics. The scan statistic will depend on a sequence of window sizes \(\# of CpGs within each window\) and on a threshold for each window size. This threshold can be calculated by three different means\: i\) analytically using Siegmund et.al \(2012\) solution \(preferred\)\, ii\) an important sampling as suggested by Zhang \(2008\)\, and a iii\) full MCMC modeling of the data\, choosing between a number of different options for modeling the dependency between each CpG.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/DMRScan.html
Versions      
License       GPL-3
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-dmrscan/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-dmrscan

and update with::

   conda update bioconductor-dmrscan



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-dmrscan.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-dmrscan/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-dmrscan/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-dmrscan/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-dmrscan
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-dmrscan/status
                :target: https://quay.io/repository/biocontainers/bioconductor-dmrscan

