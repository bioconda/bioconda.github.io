.. title:: Package Recipe 'bioconductor-gpart'
.. highlight: bash


bioconductor-gpart
==================

.. conda:recipe:: bioconductor-gpart
   :replaces_section_title:

   we provide a new SNP sequence partitioning method which partitions the whole SNP sequence based on not only LD block structures but also gene location information. The LD block construction for GPART is performed using Big\-LD algorithm\, with additional improvement from previous version reported in Kim et al.\(2017\). We also add a visualization tool to show the LD heatmap with the information of LD block boundaries and gene locations in the package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gpart.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gpart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpart/meta.yaml>`_

   


.. conda:package:: bioconductor-gpart

   |downloads_bioconductor-gpart| |docker_bioconductor-gpart|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-organismdbi` >=1.24.0,<1.25.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg38.knowngene` >=3.4.0,<3.5.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-igraph`  :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-gpart|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gpart

   and update with::

      conda update bioconductor-gpart

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gpart


.. |required_by_bioconductor-gpart| conda:required_by:: bioconductor-gpart
.. |downloads_bioconductor-gpart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpart.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gpart| image:: https://quay.io/repository/biocontainers/bioconductor-gpart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpart







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpart/README.html

