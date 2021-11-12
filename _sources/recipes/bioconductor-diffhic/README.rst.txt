:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffhic'
.. highlight: bash

bioconductor-diffhic
====================

.. conda:recipe:: bioconductor-diffhic
   :replaces_section_title:
   :noindex:

   Differential Analyis of Hi\-C Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/diffHic.html
   :license: GPL-3
   :recipe: /`bioconductor-diffhic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffhic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffhic/meta.yaml>`_

   Detects differential interactions across biological conditions in a Hi\-C experiment. Methods are provided for read alignment and data pre\-processing into interaction counts. Statistical analysis is based on edgeR and supports normalization and filtering. Several visualization options are also available.


.. conda:package:: bioconductor-diffhic

   |downloads_bioconductor-diffhic| |docker_bioconductor-diffhic|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-csaw: ``>=1.28.0,<1.29.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-interactionset: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-zlibbioc: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-locfit: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffhic

   and update with::

      conda update bioconductor-diffhic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffhic:<tag>

   (see `bioconductor-diffhic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffhic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffhic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffhic
   :alt:   (downloads)
.. |docker_bioconductor-diffhic| image:: https://quay.io/repository/biocontainers/bioconductor-diffhic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffhic
.. _`bioconductor-diffhic/tags`: https://quay.io/repository/biocontainers/bioconductor-diffhic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffhic";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffhic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffhic/README.html