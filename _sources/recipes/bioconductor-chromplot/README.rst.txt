:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromplot'
.. highlight: bash

bioconductor-chromplot
======================

.. conda:recipe:: bioconductor-chromplot
   :replaces_section_title:

   Package designed to visualize genomic data along the chromosomes\, where the vertical chromosomes are sorted by number\, with sex chromosomes at the end.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chromPlot.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-chromplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromplot/meta.yaml>`_
   :links: biotools: :biotools:`chromplot`, doi: :doi:`10.1093/bioinformatics/btw137`

   


.. conda:package:: bioconductor-chromplot

   |downloads_bioconductor-chromplot| |docker_bioconductor-chromplot|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromplot

   and update with::

      conda update bioconductor-chromplot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromplot:<tag>

   (see `bioconductor-chromplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromplot.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chromplot| image:: https://quay.io/repository/biocontainers/bioconductor-chromplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromplot
.. _`bioconductor-chromplot/tags`: https://quay.io/repository/biocontainers/bioconductor-chromplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromplot/README.html