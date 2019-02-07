.. title:: Package Recipe 'bioconductor-splicinggraphs'
.. highlight: bash


bioconductor-splicinggraphs
===========================

.. conda:recipe:: bioconductor-splicinggraphs
   :replaces_section_title:

   This package allows the user to create\, manipulate\, and visualize splicing graphs and their bubbles based on a gene model for a given organism. Additionally it allows the user to assign RNA\-seq reads to the edges of a set of splicing graphs\, and to summarize them in different ways.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SplicingGraphs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-splicinggraphs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splicinggraphs/meta.yaml>`_
   :links: biotools: :biotools:`splicinggraphs`, doi: :doi:`10.1093/bioinformatics/18.suppl_1.s181`

   


.. conda:package:: bioconductor-splicinggraphs

   |downloads_bioconductor-splicinggraphs| |docker_bioconductor-splicinggraphs|

   :versions: 1.22.1, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  

   :required~by: |required_by_bioconductor-splicinggraphs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splicinggraphs

   and update with::

      conda update bioconductor-splicinggraphs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-splicinggraphs


.. |required_by_bioconductor-splicinggraphs| conda:required_by:: bioconductor-splicinggraphs
.. |downloads_bioconductor-splicinggraphs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splicinggraphs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-splicinggraphs| image:: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splicinggraphs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splicinggraphs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splicinggraphs/README.html

