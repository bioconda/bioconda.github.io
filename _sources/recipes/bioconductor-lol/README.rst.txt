:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lol'
.. highlight: bash

bioconductor-lol
================

.. conda:recipe:: bioconductor-lol
   :replaces_section_title:

   Various optimization methods for Lasso inference with matrix warpper

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/lol.html
   :license: GPL-2
   :recipe: /`bioconductor-lol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lol/meta.yaml>`_
   :links: biotools: :biotools:`lol`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-lol

   |downloads_bioconductor-lol| |docker_bioconductor-lol|

   :versions: 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-matrix: 
   :depends r-penalized: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lol

   and update with::

      conda update bioconductor-lol

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lol:<tag>

   (see `bioconductor-lol/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lol| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lol.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lol| image:: https://quay.io/repository/biocontainers/bioconductor-lol/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lol
.. _`bioconductor-lol/tags`: https://quay.io/repository/biocontainers/bioconductor-lol?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lol/README.html