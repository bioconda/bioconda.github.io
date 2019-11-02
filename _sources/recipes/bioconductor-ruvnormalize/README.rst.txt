:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvnormalize'
.. highlight: bash

bioconductor-ruvnormalize
=========================

.. conda:recipe:: bioconductor-ruvnormalize
   :replaces_section_title:

   RUVnormalize is meant to remove unwanted variation from gene expression data when the factor of interest is not defined\, e.g.\, to clean up a dataset for general use or to do any kind of unsupervised analysis.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RUVnormalize.html
   :license: GPL-3
   :recipe: /`bioconductor-ruvnormalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalize/meta.yaml>`_
   :links: biotools: :biotools:`ruvnormalize`

   


.. conda:package:: bioconductor-ruvnormalize

   |downloads_bioconductor-ruvnormalize| |docker_bioconductor-ruvnormalize|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-ruvnormalizedata: >=1.5.0,<1.6.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ruvnormalize

   and update with::

      conda update bioconductor-ruvnormalize

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvnormalize:<tag>

   (see `bioconductor-ruvnormalize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvnormalize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvnormalize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvnormalize
   :alt:   (downloads)
.. |docker_bioconductor-ruvnormalize| image:: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize
.. _`bioconductor-ruvnormalize/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvnormalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvnormalize/README.html