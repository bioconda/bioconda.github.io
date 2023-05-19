:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccimpute'
.. highlight: bash

bioconductor-ccimpute
=====================

.. conda:recipe:: bioconductor-ccimpute
   :replaces_section_title:
   :noindex:

   ccImpute\: an accurate and scalable consensus clustering based approach to impute dropout events in the single\-cell RNA\-seq data \(https\:\/\/doi.org\/10.1186\/s12859\-022\-04814\-8\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ccImpute.html
   :license: GPL-3
   :recipe: /`bioconductor-ccimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccimpute/meta.yaml>`_

   Dropout events make the lowly expressed genes indistinguishable from true zero expression and different than the low expression present in cells of the same type. This issue makes any subsequent downstream analysis difficult. ccImpute is an imputation algorithm that uses cell similarity established by consensus clustering to impute the most probable dropout events in the scRNA\-seq datasets. ccImpute demonstrated performance which exceeds the performance of existing imputation approaches while introducing the least amount of new noise as measured by clustering performance characteristics on datasets with known cell identities.


.. conda:package:: bioconductor-ccimpute

   |downloads_bioconductor-ccimpute| |docker_bioconductor-ccimpute|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-simlr: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rcppeigen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccimpute

   and update with::

      conda update bioconductor-ccimpute

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccimpute:<tag>

   (see `bioconductor-ccimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccimpute
   :alt:   (downloads)
.. |docker_bioconductor-ccimpute| image:: https://quay.io/repository/biocontainers/bioconductor-ccimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccimpute
.. _`bioconductor-ccimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-ccimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccimpute";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccimpute/README.html