:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneclassifiers'
.. highlight: bash

bioconductor-geneclassifiers
============================

.. conda:recipe:: bioconductor-geneclassifiers
   :replaces_section_title:

   This packages aims for easy accessible application of classifiers which have been published in literature using an ExpressionSet as input.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geneClassifiers.html
   :license: GPL-2
   :recipe: /`bioconductor-geneclassifiers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneclassifiers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneclassifiers/meta.yaml>`_

   


.. conda:package:: bioconductor-geneclassifiers

   |downloads_bioconductor-geneclassifiers| |docker_bioconductor-geneclassifiers|

   :versions: 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneclassifiers

   and update with::

      conda update bioconductor-geneclassifiers

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneclassifiers:<tag>

   (see `bioconductor-geneclassifiers/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneclassifiers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneclassifiers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneclassifiers
   :alt:   (downloads)
.. |docker_bioconductor-geneclassifiers| image:: https://quay.io/repository/biocontainers/bioconductor-geneclassifiers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneclassifiers
.. _`bioconductor-geneclassifiers/tags`: https://quay.io/repository/biocontainers/bioconductor-geneclassifiers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneclassifiers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneclassifiers/README.html