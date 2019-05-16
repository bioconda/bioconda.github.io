:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trendy'
.. highlight: bash

bioconductor-trendy
===================

.. conda:recipe:: bioconductor-trendy
   :replaces_section_title:

   Trendy implements segmented \(or breakpoint\) regression models to estimate breakpoints which represent changes in expression for each feature\/gene in high throughput data with ordered conditions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Trendy.html
   :license: GPL-3
   :recipe: /`bioconductor-trendy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trendy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trendy/meta.yaml>`_

   


.. conda:package:: bioconductor-trendy

   |downloads_bioconductor-trendy| |docker_bioconductor-trendy|

   :versions: 1.4.4-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-magrittr: 
   :depends r-segmented: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trendy

   and update with::

      conda update bioconductor-trendy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trendy:<tag>

   (see `bioconductor-trendy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trendy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trendy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trendy
   :alt:   (downloads)
.. |docker_bioconductor-trendy| image:: https://quay.io/repository/biocontainers/bioconductor-trendy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trendy
.. _`bioconductor-trendy/tags`: https://quay.io/repository/biocontainers/bioconductor-trendy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trendy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trendy/README.html