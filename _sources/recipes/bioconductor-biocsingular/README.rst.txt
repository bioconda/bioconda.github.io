:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocsingular'
.. highlight: bash

bioconductor-biocsingular
=========================

.. conda:recipe:: bioconductor-biocsingular
   :replaces_section_title:

   Implements exact and approximate methods for singular value decomposition and principal components analysis\, in a framework that allows them to be easily switched within Bioconductor packages or workflows. Where possible\, parallelization is achieved using the BiocParallel framework.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/BiocSingular.html
   :license: GPL-3
   :recipe: /`bioconductor-biocsingular <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsingular>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocsingular/meta.yaml>`_

   


.. conda:package:: bioconductor-biocsingular

   |downloads_bioconductor-biocsingular| |docker_bioconductor-biocsingular|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocsingular

   and update with::

      conda update bioconductor-biocsingular

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocsingular:<tag>

   (see `bioconductor-biocsingular/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocsingular| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocsingular.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocsingular
   :alt:   (downloads)
.. |docker_bioconductor-biocsingular| image:: https://quay.io/repository/biocontainers/bioconductor-biocsingular/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocsingular
.. _`bioconductor-biocsingular/tags`: https://quay.io/repository/biocontainers/bioconductor-biocsingular?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocsingular/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocsingular/README.html