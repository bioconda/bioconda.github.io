:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocgenerics'
.. highlight: bash

bioconductor-biocgenerics
=========================

.. conda:recipe:: bioconductor-biocgenerics
   :replaces_section_title:

   S4 generic functions used in Bioconductor

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BiocGenerics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgenerics/meta.yaml>`_
   :links: biotools: :biotools:`biocgenerics`

   The package defines S4 generic functions used in Bioconductor.


.. conda:package:: bioconductor-biocgenerics

   |downloads_bioconductor-biocgenerics| |docker_bioconductor-biocgenerics|

   :versions: 0.34.0-0, 0.32.0-0, 0.30.0-1, 0.28.0-1, 0.28.0-0, 0.26.0-0, 0.24.0-1, 0.24.0-0, 0.22.1-0, 0.22.0-0, 0.20.0-0, 0.18.0-0, 0.16.1-0, 0.16.0-0, 0.14.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocgenerics

   and update with::

      conda update bioconductor-biocgenerics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocgenerics:<tag>

   (see `bioconductor-biocgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocgenerics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocgenerics
   :alt:   (downloads)
.. |docker_bioconductor-biocgenerics| image:: https://quay.io/repository/biocontainers/bioconductor-biocgenerics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocgenerics
.. _`bioconductor-biocgenerics/tags`: https://quay.io/repository/biocontainers/bioconductor-biocgenerics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocgenerics/README.html