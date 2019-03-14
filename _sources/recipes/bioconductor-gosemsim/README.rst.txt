:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gosemsim'
.. highlight: bash

bioconductor-gosemsim
=====================

.. conda:recipe:: bioconductor-gosemsim
   :replaces_section_title:

   The semantic comparisons of Gene Ontology \(GO\) annotations provide quantitative ways to compute similarities between genes and gene groups\, and have became important basis for many bioinformatics analysis approaches. GOSemSim is an R package for semantic similarity computation among GO terms\, sets of GO terms\, gene products and gene clusters. GOSemSim implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GOSemSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gosemsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosemsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gosemsim/meta.yaml>`_
   :links: biotools: :biotools:`gosemsim`

   


.. conda:package:: bioconductor-gosemsim

   |downloads_bioconductor-gosemsim| |docker_bioconductor-gosemsim|

   :versions: 2.8.0-0, 2.6.2-0, 2.4.0-0, 2.2.0-1, 2.2.0-0, 1.30.3-0, 1.29.0-0, 1.28.2-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gosemsim

   and update with::

      conda update bioconductor-gosemsim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gosemsim:<tag>

   (see `bioconductor-gosemsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gosemsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gosemsim.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gosemsim| image:: https://quay.io/repository/biocontainers/bioconductor-gosemsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gosemsim
.. _`bioconductor-gosemsim/tags`: https://quay.io/repository/biocontainers/bioconductor-gosemsim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gosemsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gosemsim/README.html