:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxbreast'
.. highlight: bash

bioconductor-metagxbreast
=========================

.. conda:recipe:: bioconductor-metagxbreast
   :replaces_section_title:
   :noindex:

   Transcriptomic Breast Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/MetaGxBreast.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-metagxbreast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxbreast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxbreast/meta.yaml>`_

   A collection of Breast Cancer Transcriptomic Datasets that are part of the MetaGxData package compendium.


.. conda:package:: bioconductor-metagxbreast

   |downloads_bioconductor-metagxbreast| |docker_bioconductor-metagxbreast|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagxbreast

   and update with::

      conda update bioconductor-metagxbreast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagxbreast:<tag>

   (see `bioconductor-metagxbreast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagxbreast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxbreast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxbreast
   :alt:   (downloads)
.. |docker_bioconductor-metagxbreast| image:: https://quay.io/repository/biocontainers/bioconductor-metagxbreast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxbreast
.. _`bioconductor-metagxbreast/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxbreast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagxbreast";
        var versions = ["1.18.0","1.14.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxbreast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxbreast/README.html