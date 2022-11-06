:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scuttle'
.. highlight: bash

bioconductor-scuttle
====================

.. conda:recipe:: bioconductor-scuttle
   :replaces_section_title:
   :noindex:

   Single\-Cell RNA\-Seq Analysis Utilities

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/scuttle.html
   :license: GPL-3
   :recipe: /`bioconductor-scuttle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle/meta.yaml>`_

   Provides basic utility functions for performing single\-cell analyses\, focusing on simple normalization\, quality control and data transformations. Also provides some helper functions to assist development of other packages.


.. conda:package:: bioconductor-scuttle

   |downloads_bioconductor-scuttle| |docker_bioconductor-scuttle|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.4-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-beachmat: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scuttle

   and update with::

      conda update bioconductor-scuttle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scuttle:<tag>

   (see `bioconductor-scuttle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scuttle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scuttle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scuttle
   :alt:   (downloads)
.. |docker_bioconductor-scuttle| image:: https://quay.io/repository/biocontainers/bioconductor-scuttle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scuttle
.. _`bioconductor-scuttle/tags`: https://quay.io/repository/biocontainers/bioconductor-scuttle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scuttle";
        var versions = ["1.8.0","1.4.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scuttle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scuttle/README.html