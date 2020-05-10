:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brainstars'
.. highlight: bash

bioconductor-brainstars
=======================

.. conda:recipe:: bioconductor-brainstars
   :replaces_section_title:

   query gene expression data and plots from BrainStars \(B\*\)

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/BrainStars.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brainstars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainstars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainstars/meta.yaml>`_
   :links: biotools: :biotools:`brainstars`, doi: :doi:`10.1097/HTR.0b013e3181a7ecb0`

   This package can search and get gene expression data and plots from BrainStars \(B\*\). BrainStars is a quantitative expression database of the adult mouse brain. The database has genome\-wide expression profile at 51 adult mouse CNS regions.


.. conda:package:: bioconductor-brainstars

   |downloads_bioconductor-brainstars| |docker_bioconductor-brainstars|

   :versions: 1.32.0-0, 1.30.0-0, 1.28.0-1, 1.26.0-0, 1.24.0-0, 1.22.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainstars

   and update with::

      conda update bioconductor-brainstars

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brainstars:<tag>

   (see `bioconductor-brainstars/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brainstars| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainstars.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brainstars
   :alt:   (downloads)
.. |docker_bioconductor-brainstars| image:: https://quay.io/repository/biocontainers/bioconductor-brainstars/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainstars
.. _`bioconductor-brainstars/tags`: https://quay.io/repository/biocontainers/bioconductor-brainstars?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainstars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainstars/README.html