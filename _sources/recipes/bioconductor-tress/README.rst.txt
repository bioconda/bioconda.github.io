:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tress'
.. highlight: bash

bioconductor-tress
==================

.. conda:recipe:: bioconductor-tress
   :replaces_section_title:
   :noindex:

   Toolbox for mRNA epigenetics sequencing analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TRESS.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-tress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tress/meta.yaml>`_

   This package is devoted to analyzing MeRIP\-seq data. Current functionalities include 1. detect transcriptome wide m6A methylation regions 2. detect transcriptome wide differential m6A methylation regions.


.. conda:package:: bioconductor-tress

   |downloads_bioconductor-tress| |docker_bioconductor-tress|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tress

   and update with::

      conda update bioconductor-tress

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tress:<tag>

   (see `bioconductor-tress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tress
   :alt:   (downloads)
.. |docker_bioconductor-tress| image:: https://quay.io/repository/biocontainers/bioconductor-tress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tress
.. _`bioconductor-tress/tags`: https://quay.io/repository/biocontainers/bioconductor-tress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tress";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tress/README.html