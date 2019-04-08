:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-safe'
.. highlight: bash

bioconductor-safe
=================

.. conda:recipe:: bioconductor-safe
   :replaces_section_title:

   SAFE is a resampling\-based method for testing functional categories in gene expression experiments. SAFE can be applied to 2\-sample and multi\-class comparisons\, or simple linear regressions. Other experimental designs can also be accommodated through user\-defined functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/safe.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-safe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-safe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-safe/meta.yaml>`_
   :links: biotools: :biotools:`safe`, doi: :doi:`10.1093/bioinformatics/bti260`

   


.. conda:package:: bioconductor-safe

   |downloads_bioconductor-safe| |docker_bioconductor-safe|

   :versions: 3.22.0-0, 3.20.0-0, 3.18.0-0, 3.16.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-sparsem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-safe

   and update with::

      conda update bioconductor-safe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-safe:<tag>

   (see `bioconductor-safe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-safe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-safe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-safe| image:: https://quay.io/repository/biocontainers/bioconductor-safe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-safe
.. _`bioconductor-safe/tags`: https://quay.io/repository/biocontainers/bioconductor-safe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-safe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-safe/README.html