:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compgo'
.. highlight: bash

bioconductor-compgo
===================

.. conda:recipe:: bioconductor-compgo
   :replaces_section_title:

   This package contains functions to accomplish several tasks. It is able to download full genome databases from UCSC\, import .bed files easily\, annotate these .bed file regions with genes \(plus distance\) from aforementioned database dumps\, interface with DAVID to create functional annotation and gene ontology enrichment charts based on gene lists \(such as those generated from input .bed files\) and finally visualise and compare these enrichments using either directed acyclic graphs or scatterplots.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CompGO.html
   :license: GPL-2
   :recipe: /`bioconductor-compgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compgo/meta.yaml>`_

   


.. conda:package:: bioconductor-compgo

   |downloads_bioconductor-compgo| |docker_bioconductor-compgo|

   :versions: 1.18.0-0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-pathview: >=1.22.0,<1.23.0
   :depends bioconductor-pcamethods: >=1.74.0,<1.75.0
   :depends bioconductor-rdavidwebservice: >=1.20.0,<1.21.0
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: >=3.2.0,<3.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compgo

   and update with::

      conda update bioconductor-compgo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compgo:<tag>

   (see `bioconductor-compgo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compgo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-compgo| image:: https://quay.io/repository/biocontainers/bioconductor-compgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compgo
.. _`bioconductor-compgo/tags`: https://quay.io/repository/biocontainers/bioconductor-compgo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compgo/README.html