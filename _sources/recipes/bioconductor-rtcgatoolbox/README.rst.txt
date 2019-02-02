.. _`bioconductor-rtcgatoolbox`:

bioconductor-rtcgatoolbox
=========================

|downloads|

Managing data from large scale projects such as The Cancer Genome Atlas \(TCGA\) for further analysis is an important and time consuming step for research projects. Several efforts\, such as Firehose project\, make TCGA pre\-processed data publicly available via web services and data portals but it requires managing\, downloading and preparing the data for following steps. We developed an open source and extensible R based data client for Firehose pre\-processed data and demonstrated its use with sample case studies. Results showed that RTCGAToolbox could improve data management for researchers who are interested with TCGA data. In addition\, it can be integrated with other analysis pipelines for following data analysis.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/RTCGAToolbox.html
Versions      2.12.1, 2.10.0, 2.8.0, 2.6.0
License       file LICENSE
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-rtcgatoolbox/meta.yaml



Links         biotools: :biotools:`rtcgatoolbox`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rtcgatoolbox

and update with::

   conda update bioconductor-rtcgatoolbox



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rtcgatoolbox/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rtcgatoolbox/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rtcgatoolbox/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rtcgatoolbox
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox

