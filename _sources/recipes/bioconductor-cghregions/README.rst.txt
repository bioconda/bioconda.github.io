:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghregions'
.. highlight: bash

bioconductor-cghregions
=======================

.. conda:recipe:: bioconductor-cghregions
   :replaces_section_title:

   Dimension Reduction for Array CGH Data with Minimal Information Loss

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CGHregions.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghregions/meta.yaml>`_
   :links: biotools: :biotools:`cghregions`, doi: :doi:`10.1002/9783527678679.dg00687`

   


.. conda:package:: bioconductor-cghregions

   |downloads_bioconductor-cghregions| |docker_bioconductor-cghregions|

   :versions: 1.40.0-0, 1.38.0-0, 1.36.0-0, 1.34.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-cghbase: >=1.42.0,<1.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghregions

   and update with::

      conda update bioconductor-cghregions

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghregions:<tag>

   (see `bioconductor-cghregions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghregions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghregions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghregions
   :alt:   (downloads)
.. |docker_bioconductor-cghregions| image:: https://quay.io/repository/biocontainers/bioconductor-cghregions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghregions
.. _`bioconductor-cghregions/tags`: https://quay.io/repository/biocontainers/bioconductor-cghregions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghregions/README.html