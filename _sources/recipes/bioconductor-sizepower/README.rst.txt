:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sizepower'
.. highlight: bash

bioconductor-sizepower
======================

.. conda:recipe:: bioconductor-sizepower
   :replaces_section_title:

   Sample Size and Power Calculation in Micorarray Studies

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/sizepower.html
   :license: LGPL
   :recipe: /`bioconductor-sizepower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sizepower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sizepower/meta.yaml>`_
   :links: biotools: :biotools:`sizepower`, doi: :doi:`10.1038/nmeth.3252`

   This package has been prepared to assist users in computing either a sample size or power value for a microarray experimental study. The user is referred to the cited references for technical background on the methodology underpinning these calculations. This package provides support for five types of sample size and power calculations. These five types can be adapted in various ways to encompass many of the standard designs encountered in practice.


.. conda:package:: bioconductor-sizepower

   |downloads_bioconductor-sizepower| |docker_bioconductor-sizepower|

   :versions: 1.56.0-0, 1.54.0-1, 1.54.0-0, 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sizepower

   and update with::

      conda update bioconductor-sizepower

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sizepower:<tag>

   (see `bioconductor-sizepower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sizepower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sizepower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sizepower
   :alt:   (downloads)
.. |docker_bioconductor-sizepower| image:: https://quay.io/repository/biocontainers/bioconductor-sizepower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sizepower
.. _`bioconductor-sizepower/tags`: https://quay.io/repository/biocontainers/bioconductor-sizepower?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sizepower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sizepower/README.html