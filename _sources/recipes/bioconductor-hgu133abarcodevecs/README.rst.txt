:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133abarcodevecs'
.. highlight: bash

bioconductor-hgu133abarcodevecs
===============================

.. conda:recipe:: bioconductor-hgu133abarcodevecs
   :replaces_section_title:

   hgu133a data for barcode

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/hgu133abarcodevecs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hgu133abarcodevecs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133abarcodevecs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133abarcodevecs/meta.yaml>`_

   Data used by the barcode package for microarrays of type hgu133a.


.. conda:package:: bioconductor-hgu133abarcodevecs

   |downloads_bioconductor-hgu133abarcodevecs| |docker_bioconductor-hgu133abarcodevecs|

   :versions: 1.24.0-0, 1.22.0-1, 1.22.0-0, 1.20.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133abarcodevecs

   and update with::

      conda update bioconductor-hgu133abarcodevecs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133abarcodevecs:<tag>

   (see `bioconductor-hgu133abarcodevecs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133abarcodevecs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133abarcodevecs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133abarcodevecs
   :alt:   (downloads)
.. |docker_bioconductor-hgu133abarcodevecs| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133abarcodevecs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133abarcodevecs
.. _`bioconductor-hgu133abarcodevecs/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133abarcodevecs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133abarcodevecs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133abarcodevecs/README.html