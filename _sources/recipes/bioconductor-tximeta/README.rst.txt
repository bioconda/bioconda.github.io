:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tximeta'
.. highlight: bash

bioconductor-tximeta
====================

.. conda:recipe:: bioconductor-tximeta
   :replaces_section_title:

   Transcript quantification import from Salmon with automatic population of metadata and transcript ranges. Filtered\, combined\, or de novo transcriptomes can be linked to the appropriate sources with linkedTxomes and shared for reproducible analyses.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tximeta.html
   :license: GPL-2
   :recipe: /`bioconductor-tximeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximeta/meta.yaml>`_

   


.. conda:package:: bioconductor-tximeta

   |downloads_bioconductor-tximeta| |docker_bioconductor-tximeta|

   :versions: 1.0.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biocfilecache: >=1.6.0,<1.7.0
   
   :depends bioconductor-ensembldb: >=2.6.0,<2.7.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends bioconductor-tximport: >=1.10.0,<1.11.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-jsonlite: 
   
   :depends r-rappdirs: 
   
   :depends r-tibble: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tximeta

   and update with::

      conda update bioconductor-tximeta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tximeta:<tag>

   (see `bioconductor-tximeta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tximeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tximeta.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tximeta| image:: https://quay.io/repository/biocontainers/bioconductor-tximeta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tximeta
.. _`bioconductor-tximeta/tags`: https://quay.io/repository/biocontainers/bioconductor-tximeta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tximeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tximeta/README.html