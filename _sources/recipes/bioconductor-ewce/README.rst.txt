:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ewce'
.. highlight: bash

bioconductor-ewce
=================

.. conda:recipe:: bioconductor-ewce
   :replaces_section_title:
   :noindex:

   Expression Weighted Celltype Enrichment

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/EWCE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ewce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewce/meta.yaml>`_

   Used to determine which cell types are enriched within gene lists. The package provides tools for testing enrichments within simple gene lists \(such as human disease associated genes\) and those resulting from differential expression studies. The package does not depend upon any particular Single Cell Transcriptome dataset and user defined datasets can be loaded in and used in the analyses.


.. conda:package:: bioconductor-ewce

   |downloads_bioconductor-ewce| |docker_bioconductor-ewce|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.0.0,<3.1.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-ewcedata: ``>=1.0.0,<1.1.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-future: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-hgnchelper: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-rnomni: ``>=1.0``
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ewce

   and update with::

      conda update bioconductor-ewce

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ewce:<tag>

   (see `bioconductor-ewce/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ewce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ewce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ewce
   :alt:   (downloads)
.. |docker_bioconductor-ewce| image:: https://quay.io/repository/biocontainers/bioconductor-ewce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ewce
.. _`bioconductor-ewce/tags`: https://quay.io/repository/biocontainers/bioconductor-ewce?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ewce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ewce/README.html