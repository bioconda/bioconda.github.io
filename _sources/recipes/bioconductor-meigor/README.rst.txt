:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meigor'
.. highlight: bash

bioconductor-meigor
===================

.. conda:recipe:: bioconductor-meigor
   :replaces_section_title:

   MEIGO \- MEtaheuristics for bIoinformatics Global Optimization

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/MEIGOR.html
   :license: GPL-3
   :recipe: /`bioconductor-meigor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meigor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meigor/meta.yaml>`_
   :links: biotools: :biotools:`meigor`, doi: :doi:`10.1186/1471-2105-15-136`

   Global Optimization


.. conda:package:: bioconductor-meigor

   |downloads_bioconductor-meigor| |docker_bioconductor-meigor|

   :versions: 1.20.0-0, 1.18.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-cnorode: >=1.28.0,<1.29.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-desolve: 
   :depends r-rsolnp: 
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meigor

   and update with::

      conda update bioconductor-meigor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meigor:<tag>

   (see `bioconductor-meigor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meigor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meigor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meigor
   :alt:   (downloads)
.. |docker_bioconductor-meigor| image:: https://quay.io/repository/biocontainers/bioconductor-meigor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meigor
.. _`bioconductor-meigor/tags`: https://quay.io/repository/biocontainers/bioconductor-meigor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meigor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meigor/README.html