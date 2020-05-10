:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topconfects'
.. highlight: bash

bioconductor-topconfects
========================

.. conda:recipe:: bioconductor-topconfects
   :replaces_section_title:

   Top Confident Effect Sizes

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/topconfects.html
   :license: LGPL-2.1 | file LICENSE
   :recipe: /`bioconductor-topconfects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topconfects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topconfects/meta.yaml>`_

   Rank results by confident effect sizes\, while maintaining False Discovery Rate and False Coverage\-statement Rate control. Topconfects is alternative presentation of TREAT results with improved usability\, eliminating p\-values and instead providing confidence bounds. The main application is differential gene expression analysis\, providing genes ranked in order of confident log2 fold change\, but it can be applied to any collection of effect sizes with associated standard errors.


.. conda:package:: bioconductor-topconfects

   |downloads_bioconductor-topconfects| |docker_bioconductor-topconfects|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1
   
   :depends r-assertthat: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-topconfects

   and update with::

      conda update bioconductor-topconfects

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topconfects:<tag>

   (see `bioconductor-topconfects/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topconfects| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topconfects.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topconfects
   :alt:   (downloads)
.. |docker_bioconductor-topconfects| image:: https://quay.io/repository/biocontainers/bioconductor-topconfects/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topconfects
.. _`bioconductor-topconfects/tags`: https://quay.io/repository/biocontainers/bioconductor-topconfects?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topconfects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topconfects/README.html