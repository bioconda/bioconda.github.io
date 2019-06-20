:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genenetworkbuilder'
.. highlight: bash

bioconductor-genenetworkbuilder
===============================

.. conda:recipe:: bioconductor-genenetworkbuilder
   :replaces_section_title:

   Appliation for discovering direct or indirect targets of transcription factors using ChIP\-chip or ChIP\-seq\, and microarray or RNA\-seq gene expression data. Inputting a list of genes of potential targets of one TF from ChIP\-chip or ChIP\-seq\, and the gene expression results\, GeneNetworkBuilder generates a regulatory network of the TF.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/GeneNetworkBuilder.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genenetworkbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genenetworkbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genenetworkbuilder/meta.yaml>`_

   


.. conda:package:: bioconductor-genenetworkbuilder

   |downloads_bioconductor-genenetworkbuilder| |docker_bioconductor-genenetworkbuilder|

   :versions: 1.24.1-0, 1.24.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-htmlwidgets: 
   :depends r-plyr: 
   :depends r-rcpp: >=0.9.13
   :depends r-rjson: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genenetworkbuilder

   and update with::

      conda update bioconductor-genenetworkbuilder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genenetworkbuilder:<tag>

   (see `bioconductor-genenetworkbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genenetworkbuilder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genenetworkbuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genenetworkbuilder
   :alt:   (downloads)
.. |docker_bioconductor-genenetworkbuilder| image:: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder
.. _`bioconductor-genenetworkbuilder/tags`: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genenetworkbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genenetworkbuilder/README.html