:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splicinggraphs'
.. highlight: bash

bioconductor-splicinggraphs
===========================

.. conda:recipe:: bioconductor-splicinggraphs
   :replaces_section_title:
   :noindex:

   Create\, manipulate\, visualize splicing graphs\, and assign RNA\-seq reads to them

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SplicingGraphs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-splicinggraphs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs/meta.yaml>`_
   :links: biotools: :biotools:`splicinggraphs`, doi: :doi:`10.1093/bioinformatics/18.suppl_1.s181`

   This package allows the user to create\, manipulate\, and visualize splicing graphs and their bubbles based on a gene model for a given organism. Additionally it allows the user to assign RNA\-seq reads to the edges of a set of splicing graphs\, and to summarize them in different ways.


.. conda:package:: bioconductor-splicinggraphs

   |downloads_bioconductor-splicinggraphs| |docker_bioconductor-splicinggraphs|

   :versions:
      
      

      ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.24.0-1``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rgraphviz: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicinggraphs

   and update with::

      conda update bioconductor-splicinggraphs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splicinggraphs:<tag>

   (see `bioconductor-splicinggraphs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splicinggraphs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicinggraphs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splicinggraphs
   :alt:   (downloads)
.. |docker_bioconductor-splicinggraphs| image:: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs
.. _`bioconductor-splicinggraphs/tags`: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicinggraphs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicinggraphs/README.html