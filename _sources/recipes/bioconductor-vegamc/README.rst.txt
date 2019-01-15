.. _`bioconductor-vegamc`:

bioconductor-vegamc
===================

|downloads|

This package enables the detection of driver chromosomal imbalances including loss of heterozygosity \(LOH\) from array comparative genomic hybridization \(aCGH\) data. VegaMC performs a joint segmentation of a dataset and uses a statistical framework to distinguish between driver and passenger mutation. VegaMC has been implemented so that it can be immediately integrated with the output produced by PennCNV tool. In addition\, VegaMC produces in output two web pages that allows a rapid navigation between both the detected regions and the altered genes. In the web page that summarizes the altered genes\, the link to the respective Ensembl gene web page is reported.

============= ===========
Home          http://bioconductor.org/packages/3.7/bioc/html/VegaMC.html
Versions      3.18.0, 3.16.0
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vegamc



Links         biotools: :biotools:`vegamc`, doi: :doi:`10.1093/bioinformatics/bts453`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-vegamc

and update with::

   conda update bioconductor-vegamc



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-vegamc.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-vegamc/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-vegamc/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-vegamc/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-vegamc
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-vegamc/status
                :target: https://quay.io/repository/biocontainers/bioconductor-vegamc

