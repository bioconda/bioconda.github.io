:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-amountain'
.. highlight: bash

bioconductor-amountain
======================

.. conda:recipe:: bioconductor-amountain
   :replaces_section_title:

   A pure data\-driven gene network\, weighted gene co\-expression network \(WGCN\) could be constructed only from expression profile. Different layers in such networks may represent different time points\, multiple conditions or various species. AMOUNTAIN aims to search active modules in multi\-layer WGCN using a continuous optimization approach.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/AMOUNTAIN.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-amountain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amountain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-amountain/meta.yaml>`_
   :links: biotools: :biotools:`amountain`, doi: :doi:`10.1101/056952`

   


.. conda:package:: bioconductor-amountain

   |downloads_bioconductor-amountain| |docker_bioconductor-amountain|

   :versions: 1.12.0-0, 1.10.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends gsl: >=2.5,<2.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-amountain

   and update with::

      conda update bioconductor-amountain

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-amountain:<tag>

   (see `bioconductor-amountain/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-amountain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-amountain.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-amountain
   :alt:   (downloads)
.. |docker_bioconductor-amountain| image:: https://quay.io/repository/biocontainers/bioconductor-amountain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-amountain
.. _`bioconductor-amountain/tags`: https://quay.io/repository/biocontainers/bioconductor-amountain?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-amountain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-amountain/README.html