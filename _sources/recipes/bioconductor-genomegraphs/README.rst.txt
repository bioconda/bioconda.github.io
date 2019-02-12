:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomegraphs'
.. highlight: bash

bioconductor-genomegraphs
=========================

.. conda:recipe:: bioconductor-genomegraphs
   :replaces_section_title:

   Genomic data analyses requires integrated visualization of known genomic information and new experimental data. GenomeGraphs uses the biomaRt package to perform live annotation queries to Ensembl and translates this to e.g. gene\/transcript structures in viewports of the grid graphics package. This results in genomic information plotted together with your data.  Another strength of GenomeGraphs is to plot different data types such as array CGH\, gene expression\, sequencing and other data\, together in one plot using the same genome coordinate system.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomeGraphs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomegraphs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomegraphs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomegraphs/meta.yaml>`_
   :links: biotools: :biotools:`genomegraphs`, doi: :doi:`10.1186/1471-2105-10-2`

   


.. conda:package:: bioconductor-genomegraphs

   |downloads_bioconductor-genomegraphs| |docker_bioconductor-genomegraphs|

   :versions: 1.42.0-0, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomegraphs

   and update with::

      conda update bioconductor-genomegraphs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomegraphs:<tag>

   (see `bioconductor-genomegraphs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomegraphs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomegraphs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomegraphs| image:: https://quay.io/repository/biocontainers/bioconductor-genomegraphs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomegraphs
.. _`bioconductor-genomegraphs/tags`: https://quay.io/repository/biocontainers/bioconductor-genomegraphs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomegraphs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomegraphs/README.html