:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adsplit'
.. highlight: bash

bioconductor-adsplit
====================

.. conda:recipe:: bioconductor-adsplit
   :replaces_section_title:

   This package implements clustering of microarray gene expression profiles according to functional annotations. For each term genes are annotated to\, splits into two subclasses are computed and a significance of the supporting gene set is determined.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/adSplit.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit/meta.yaml>`_

   


.. conda:package:: bioconductor-adsplit

   |downloads_bioconductor-adsplit| |docker_bioconductor-adsplit|

   :versions: 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   :depends bioconductor-kegg.db: >=3.2.0,<3.3.0
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: >=1.9.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adsplit

   and update with::

      conda update bioconductor-adsplit

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adsplit:<tag>

   (see `bioconductor-adsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adsplit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adsplit.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-adsplit| image:: https://quay.io/repository/biocontainers/bioconductor-adsplit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adsplit
.. _`bioconductor-adsplit/tags`: https://quay.io/repository/biocontainers/bioconductor-adsplit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adsplit/README.html