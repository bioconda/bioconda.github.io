:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-readqpcr'
.. highlight: bash

bioconductor-readqpcr
=====================

.. conda:recipe:: bioconductor-readqpcr
   :replaces_section_title:

   The package provides functions to read raw RT\-qPCR data of different platforms.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ReadqPCR.html
   :license: LGPL-3
   :recipe: /`bioconductor-readqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-readqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-readqpcr/meta.yaml>`_
   :links: biotools: :biotools:`readqpcr`

   


.. conda:package:: bioconductor-readqpcr

   |downloads_bioconductor-readqpcr| |docker_bioconductor-readqpcr|

   :versions: 1.32.0-0, 1.30.0-1, 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-readqpcr

   and update with::

      conda update bioconductor-readqpcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-readqpcr:<tag>

   (see `bioconductor-readqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-readqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-readqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-readqpcr
   :alt:   (downloads)
.. |docker_bioconductor-readqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-readqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-readqpcr
.. _`bioconductor-readqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-readqpcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-readqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-readqpcr/README.html