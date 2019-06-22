:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-impute'
.. highlight: bash

bioconductor-impute
===================

.. conda:recipe:: bioconductor-impute
   :replaces_section_title:

   Imputation for microarray data \(currently KNN only\)

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/impute.html
   :license: GPL-2
   :recipe: /`bioconductor-impute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impute/meta.yaml>`_
   :links: biotools: :biotools:`impute`, doi: :doi:`10.1007/978-3-642-57489-4_7`

   


.. conda:package:: bioconductor-impute

   |downloads_bioconductor-impute| |docker_bioconductor-impute|

   :versions: 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.1-0, 1.46.0-1, 1.46.0-0, 1.44.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran-ng: >=7,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-impute

   and update with::

      conda update bioconductor-impute

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-impute:<tag>

   (see `bioconductor-impute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-impute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-impute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-impute
   :alt:   (downloads)
.. |docker_bioconductor-impute| image:: https://quay.io/repository/biocontainers/bioconductor-impute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-impute
.. _`bioconductor-impute/tags`: https://quay.io/repository/biocontainers/bioconductor-impute?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-impute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-impute/README.html