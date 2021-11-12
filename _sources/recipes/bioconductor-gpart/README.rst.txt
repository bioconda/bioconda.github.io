:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpart'
.. highlight: bash

bioconductor-gpart
==================

.. conda:recipe:: bioconductor-gpart
   :replaces_section_title:
   :noindex:

   Human genome partitioning of dense sequencing data by identifying haplotype blocks

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/gpart.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gpart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpart/meta.yaml>`_

   we provide a new SNP sequence partitioning method which partitions the whole SNP sequence based on not only LD block structures but also gene location information. The LD block construction for GPART is performed using Big\-LD algorithm\, with additional improvement from previous version reported in Kim et al.\(2017\). We also add a visualization tool to show the LD heatmap with the information of LD block boundaries and gene locations in the package.


.. conda:package:: bioconductor-gpart

   |downloads_bioconductor-gpart| |docker_bioconductor-gpart|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-organismdbi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.14.0,<3.15.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-igraph: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gpart

   and update with::

      conda update bioconductor-gpart

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpart:<tag>

   (see `bioconductor-gpart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpart
   :alt:   (downloads)
.. |docker_bioconductor-gpart| image:: https://quay.io/repository/biocontainers/bioconductor-gpart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpart
.. _`bioconductor-gpart/tags`: https://quay.io/repository/biocontainers/bioconductor-gpart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpart";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpart/README.html