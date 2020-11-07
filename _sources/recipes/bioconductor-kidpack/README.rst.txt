:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kidpack'
.. highlight: bash

bioconductor-kidpack
====================

.. conda:recipe:: bioconductor-kidpack
   :replaces_section_title:
   :noindex:

   DKFZ kidney package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/kidpack.html
   :license: GPL-2
   :recipe: /`bioconductor-kidpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kidpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kidpack/meta.yaml>`_

   kidney microarray data


.. conda:package:: bioconductor-kidpack

   |downloads_bioconductor-kidpack| |docker_bioconductor-kidpack|

   :versions:
      
      

      ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kidpack

   and update with::

      conda update bioconductor-kidpack

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kidpack:<tag>

   (see `bioconductor-kidpack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kidpack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kidpack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kidpack
   :alt:   (downloads)
.. |docker_bioconductor-kidpack| image:: https://quay.io/repository/biocontainers/bioconductor-kidpack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kidpack
.. _`bioconductor-kidpack/tags`: https://quay.io/repository/biocontainers/bioconductor-kidpack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kidpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kidpack/README.html