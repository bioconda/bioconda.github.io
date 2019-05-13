:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-frma'
.. highlight: bash

bioconductor-frma
=================

.. conda:recipe:: bioconductor-frma
   :replaces_section_title:

   Preprocessing and analysis for single microarrays and microarray batches.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/frma.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-frma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-frma/meta.yaml>`_
   :links: biotools: :biotools:`frma`

   


.. conda:package:: bioconductor-frma

   |downloads_bioconductor-frma| |docker_bioconductor-frma|

   :versions: 1.34.0-0, 1.32.0-0, 1.28.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dbi: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-frma

   and update with::

      conda update bioconductor-frma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-frma:<tag>

   (see `bioconductor-frma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-frma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-frma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-frma
   :alt:   (downloads)
.. |docker_bioconductor-frma| image:: https://quay.io/repository/biocontainers/bioconductor-frma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-frma
.. _`bioconductor-frma/tags`: https://quay.io/repository/biocontainers/bioconductor-frma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-frma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-frma/README.html