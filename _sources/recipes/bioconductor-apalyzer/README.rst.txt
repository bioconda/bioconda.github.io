:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apalyzer'
.. highlight: bash

bioconductor-apalyzer
=====================

.. conda:recipe:: bioconductor-apalyzer
   :replaces_section_title:
   :noindex:

   A toolkit for APA analysis using RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/APAlyzer.html
   :license: LGPL-3
   :recipe: /`bioconductor-apalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apalyzer/meta.yaml>`_

   Perform 3\'UTR APA\, Intronic APA and gene expression analysis using RNA\-seq data.


.. conda:package:: bioconductor-apalyzer

   |downloads_bioconductor-apalyzer| |docker_bioconductor-apalyzer|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq: ``>=1.39.0,<1.40.0``
   :depends bioconductor-ensembldb: ``>=2.12.0,<2.13.0``
   :depends bioconductor-genomicalignments: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicfeatures: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-rsubread: ``>=2.2.0,<2.3.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-variantannotation: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-repmis: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-apalyzer

   and update with::

      conda update bioconductor-apalyzer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-apalyzer:<tag>

   (see `bioconductor-apalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apalyzer
   :alt:   (downloads)
.. |docker_bioconductor-apalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-apalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apalyzer
.. _`bioconductor-apalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-apalyzer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apalyzer/README.html