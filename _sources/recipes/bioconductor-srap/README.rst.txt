:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-srap'
.. highlight: bash

bioconductor-srap
=================

.. conda:recipe:: bioconductor-srap
   :replaces_section_title:
   :noindex:

   Simplified RNA\-Seq Analysis Pipeline

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/sRAP.html
   :license: GPL-3
   :recipe: /`bioconductor-srap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srap/meta.yaml>`_
   :links: biotools: :biotools:`srap`

   This package provides a pipeline for gene expression analysis \(primarily for RNA\-Seq data\).  The normalization function is specific for RNA\-Seq analysis\, but all other functions \(Quality Control Figures\, Differential Expression and Visualization\, and Functional Enrichment via BD\-Func\) will work with any type of gene expression data.


.. conda:package:: bioconductor-srap

   |downloads_bioconductor-srap| |docker_bioconductor-srap|

   :versions:
      
      

      ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-qvalue: ``>=2.20.0,<2.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gplots: 
   :depends r-pls: 
   :depends r-rocr: 
   :depends r-writexls: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-srap

   and update with::

      conda update bioconductor-srap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-srap:<tag>

   (see `bioconductor-srap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-srap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-srap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-srap
   :alt:   (downloads)
.. |docker_bioconductor-srap| image:: https://quay.io/repository/biocontainers/bioconductor-srap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-srap
.. _`bioconductor-srap/tags`: https://quay.io/repository/biocontainers/bioconductor-srap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-srap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-srap/README.html