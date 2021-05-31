:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaia'
.. highlight: bash

bioconductor-gaia
=================

.. conda:recipe:: bioconductor-gaia
   :replaces_section_title:
   :noindex:

   GAIA\: An R package for genomic analysis of significant chromosomal aberrations.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/gaia.html
   :license: GPL-2
   :recipe: /`bioconductor-gaia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaia/meta.yaml>`_

   This package allows to assess the statistical significance of chromosomal aberrations.


.. conda:package:: bioconductor-gaia

   |downloads_bioconductor-gaia| |docker_bioconductor-gaia|

   :versions:
      
      

      ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gaia

   and update with::

      conda update bioconductor-gaia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gaia:<tag>

   (see `bioconductor-gaia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gaia
   :alt:   (downloads)
.. |docker_bioconductor-gaia| image:: https://quay.io/repository/biocontainers/bioconductor-gaia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaia
.. _`bioconductor-gaia/tags`: https://quay.io/repository/biocontainers/bioconductor-gaia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaia/README.html