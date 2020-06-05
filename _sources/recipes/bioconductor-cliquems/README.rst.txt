:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cliquems'
.. highlight: bash

bioconductor-cliquems
=====================

.. conda:recipe:: bioconductor-cliquems
   :replaces_section_title:
   :noindex:

   Annotation of Isotopes\, Adducts and Fragmentation Adducts for in\-Source LC\/MS Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cliqueMS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cliquems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliquems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliquems/meta.yaml>`_

   Annotates data from liquid chromatography coupled to mass spectrometry \(LC\/MS\) metabolomics experiments. Based on a network algorithm \(O.Senan\, A. Aguilar\- Mogas\, M. Navarro\, O. Yanes\, R.Guimerà and M. Sales\-Pardo\, Bioinformatics\, 35\(20\)\, 2019\)\, \'CliqueMS\' builds a weighted similarity network where nodes are features and edges are weighted according to the similarity of this features. Then it searches for the most plausible division of the similarity network into cliques \(fully connected components\). Finally it annotates metabolites within each clique\, obtaining for each annotated metabolite the neutral mass and their features\, corresponding to isotopes\, ionization adducts and fragmentation adducts of that metabolite.


.. conda:package:: bioconductor-cliquems

   |downloads_bioconductor-cliquems| |docker_bioconductor-cliquems|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-msnbase: ``>=2.14.0,<2.15.0``
   :depends bioconductor-xcms: ``>=3.10.0,<3.11.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bh: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-qlcmatrix: 
   :depends r-rcpp: ``>=0.12.15``
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cliquems

   and update with::

      conda update bioconductor-cliquems

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cliquems:<tag>

   (see `bioconductor-cliquems/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cliquems| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cliquems.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cliquems
   :alt:   (downloads)
.. |docker_bioconductor-cliquems| image:: https://quay.io/repository/biocontainers/bioconductor-cliquems/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cliquems
.. _`bioconductor-cliquems/tags`: https://quay.io/repository/biocontainers/bioconductor-cliquems?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cliquems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cliquems/README.html