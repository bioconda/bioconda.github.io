:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusde'
.. highlight: bash

bioconductor-consensusde
========================

.. conda:recipe:: bioconductor-consensusde
   :replaces_section_title:
   :noindex:

   RNA\-seq analysis using multiple algorithms

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/consensusDE.html
   :license: GPL-3
   :recipe: /`bioconductor-consensusde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusde/meta.yaml>`_

   This package allows users to perform DE analysis using multiple algorithms. It seeks consensus from multiple methods. Currently it supports \"Voom\"\, \"EdgeR\" and \"DESeq\". It uses RUV\-seq \(optional\) to remove unwanted sources of variation.


.. conda:package:: bioconductor-consensusde

   |downloads_bioconductor-consensusde| |docker_bioconductor-consensusde|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-airway: ``>=1.18.0,<1.19.0``
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-edaseq: ``>=2.32.0,<2.33.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensembldb: ``>=2.22.0,<2.23.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-pcamethods: ``>=1.90.0,<1.91.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-ruvseq: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-txdb.dmelanogaster.ucsc.dm3.ensgene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-consensusde

   and update with::

      conda update bioconductor-consensusde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensusde:<tag>

   (see `bioconductor-consensusde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensusde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusde
   :alt:   (downloads)
.. |docker_bioconductor-consensusde| image:: https://quay.io/repository/biocontainers/bioconductor-consensusde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusde
.. _`bioconductor-consensusde/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-consensusde";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusde/README.html