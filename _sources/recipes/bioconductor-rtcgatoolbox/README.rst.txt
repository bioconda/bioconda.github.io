:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcgatoolbox'
.. highlight: bash

bioconductor-rtcgatoolbox
=========================

.. conda:recipe:: bioconductor-rtcgatoolbox
   :replaces_section_title:

   Managing data from large scale projects such as The Cancer Genome Atlas \(TCGA\) for further analysis is an important and time consuming step for research projects. Several efforts\, such as Firehose project\, make TCGA pre\-processed data publicly available via web services and data portals but it requires managing\, downloading and preparing the data for following steps. We developed an open source and extensible R based data client for Firehose pre\-processed data and demonstrated its use with sample case studies. Results showed that RTCGAToolbox could improve data management for researchers who are interested with TCGA data. In addition\, it can be integrated with other analysis pipelines for following data analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RTCGAToolbox.html
   :license: file LICENSE
   :recipe: /`bioconductor-rtcgatoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcgatoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcgatoolbox/meta.yaml>`_
   :links: biotools: :biotools:`rtcgatoolbox`

   


.. conda:package:: bioconductor-rtcgatoolbox

   |downloads_bioconductor-rtcgatoolbox| |docker_bioconductor-rtcgatoolbox|

   :versions: 2.12.1-0, 2.10.0-0, 2.8.0-0, 2.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-delayedarray: >=0.8.0,<0.9.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-raggedexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-tcgautils: >=1.2.0,<1.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-rcircos: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcgatoolbox

   and update with::

      conda update bioconductor-rtcgatoolbox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcgatoolbox:<tag>

   (see `bioconductor-rtcgatoolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcgatoolbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcgatoolbox.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rtcgatoolbox| image:: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox
.. _`bioconductor-rtcgatoolbox/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcgatoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcgatoolbox/README.html