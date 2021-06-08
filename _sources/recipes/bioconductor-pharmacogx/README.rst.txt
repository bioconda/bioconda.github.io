:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pharmacogx'
.. highlight: bash

bioconductor-pharmacogx
=======================

.. conda:recipe:: bioconductor-pharmacogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Pharmacogenomic Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PharmacoGx.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pharmacogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx/meta.yaml>`_

   Contains a set of functions to perform large\-scale analysis of pharmaco\-genomic data. These include the PharmacoSet object for storing the results of pharmacogenomic experiments\, as well as a number of functions for computing common summaries of drug\-dose response and correlating them with the molecular features in a cancer cell\-line.


.. conda:package:: bioconductor-pharmacogx

   |downloads_bioconductor-pharmacogx| |docker_bioconductor-pharmacogx|

   :versions:
      
      

      ``2.4.0-0``,  ``2.2.4-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-coregx: ``>=1.4.0,<1.5.0``
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-catools: 
   :depends r-data.table: 
   :depends r-downloader: 
   :depends r-ggplot2: 
   :depends r-glue: 
   :depends r-jsonlite: 
   :depends r-magicaxis: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pharmacogx

   and update with::

      conda update bioconductor-pharmacogx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pharmacogx:<tag>

   (see `bioconductor-pharmacogx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pharmacogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pharmacogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pharmacogx
   :alt:   (downloads)
.. |docker_bioconductor-pharmacogx| image:: https://quay.io/repository/biocontainers/bioconductor-pharmacogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pharmacogx
.. _`bioconductor-pharmacogx/tags`: https://quay.io/repository/biocontainers/bioconductor-pharmacogx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html