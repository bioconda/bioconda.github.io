:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcellminer'
.. highlight: bash

bioconductor-rcellminer
=======================

.. conda:recipe:: bioconductor-rcellminer
   :replaces_section_title:

   The NCI\-60 cancer cell line panel has been used over the course of several decades as an anti\-cancer drug screen. This panel was developed as part of the Developmental Therapeutics Program \(DTP\, http\:\/\/dtp.nci.nih.gov\/\) of the U.S. National Cancer Institute \(NCI\). Thousands of compounds have been tested on the NCI\-60\, which have been extensively characterized by many platforms for gene and protein expression\, copy number\, mutation\, and others \(Reinhold\, et al.\, 2012\). The purpose of the CellMiner project \(http\:\/\/discover.nci.nih.gov\/ cellminer\) has been to integrate data from multiple platforms used to analyze the NCI\-60 and to provide a powerful suite of tools for exploration of NCI\-60 data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rcellminer.html
   :license: LGPL-3 + file LICENSE
   :recipe: /`bioconductor-rcellminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminer/meta.yaml>`_

   


.. conda:package:: bioconductor-rcellminer

   |downloads_bioconductor-rcellminer| |docker_bioconductor-rcellminer|

   :versions: 2.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-rcellminerdata: >=2.4.0,<2.5.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fingerprint: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-rcdk: 
   :depends r-shiny: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcellminer

   and update with::

      conda update bioconductor-rcellminer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcellminer:<tag>

   (see `bioconductor-rcellminer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcellminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcellminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcellminer
   :alt:   (downloads)
.. |docker_bioconductor-rcellminer| image:: https://quay.io/repository/biocontainers/bioconductor-rcellminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcellminer
.. _`bioconductor-rcellminer/tags`: https://quay.io/repository/biocontainers/bioconductor-rcellminer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcellminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcellminer/README.html