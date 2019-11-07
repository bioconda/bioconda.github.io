:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagxovarian'
.. highlight: bash

bioconductor-metagxovarian
==========================

.. conda:recipe:: bioconductor-metagxovarian
   :replaces_section_title:

   Transcriptomic Ovarian Cancer Datasets

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/MetaGxOvarian.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagxovarian <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxovarian>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxovarian/meta.yaml>`_

   A collection of Ovarian Cancer Transcriptomic Datasets that are part of the MetaGxData package compendium.


.. conda:package:: bioconductor-metagxovarian

   |downloads_bioconductor-metagxovarian| |docker_bioconductor-metagxovarian|

   :versions: 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-annotationhub: >=2.18.0,<2.19.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends bioconductor-impute: >=1.60.0,<1.61.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lattice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagxovarian

   and update with::

      conda update bioconductor-metagxovarian

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagxovarian:<tag>

   (see `bioconductor-metagxovarian/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagxovarian| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxovarian.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagxovarian
   :alt:   (downloads)
.. |docker_bioconductor-metagxovarian| image:: https://quay.io/repository/biocontainers/bioconductor-metagxovarian/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxovarian
.. _`bioconductor-metagxovarian/tags`: https://quay.io/repository/biocontainers/bioconductor-metagxovarian?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxovarian/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxovarian/README.html