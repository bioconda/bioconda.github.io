:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitoclone2'
.. highlight: bash

bioconductor-mitoclone2
=======================

.. conda:recipe:: bioconductor-mitoclone2
   :replaces_section_title:
   :noindex:

   Clonal Population Identification in Single\-Cell RNA\-Seq Data using Mitochondrial and Somatic Mutations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/mitoClone2.html
   :license: GPL-3
   :recipe: /`bioconductor-mitoclone2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoclone2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoclone2/meta.yaml>`_

   This package primarily identifies variants in mitochondrial genomes from BAM alignment files. It filters these variants to remove RNA editing events then estimates their evolutionary relationship \(i.e. their phylogenetic tree\) and groups single cells into clones. It also visualizes the mutations and providing additional genomic context.


.. conda:package:: bioconductor-mitoclone2

   |downloads_bioconductor-mitoclone2| |docker_bioconductor-mitoclone2|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-deepsnv: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rhtslib: ``>=2.0.0,<2.1.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mitoclone2

   and update with::

      conda update bioconductor-mitoclone2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mitoclone2:<tag>

   (see `bioconductor-mitoclone2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mitoclone2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitoclone2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitoclone2
   :alt:   (downloads)
.. |docker_bioconductor-mitoclone2| image:: https://quay.io/repository/biocontainers/bioconductor-mitoclone2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitoclone2
.. _`bioconductor-mitoclone2/tags`: https://quay.io/repository/biocontainers/bioconductor-mitoclone2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mitoclone2";
        var versions = ["1.4.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitoclone2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitoclone2/README.html