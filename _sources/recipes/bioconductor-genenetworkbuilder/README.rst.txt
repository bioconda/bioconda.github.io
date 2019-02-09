.. title:: Package Recipe 'bioconductor-genenetworkbuilder'
.. highlight: bash


bioconductor-genenetworkbuilder
===============================

.. conda:recipe:: bioconductor-genenetworkbuilder
   :replaces_section_title:

   Appliation for discovering direct or indirect targets of transcription factors using ChIP\-chip or ChIP\-seq\, and microarray or RNA\-seq gene expression data. Inputting a list of genes of potential targets of one TF from ChIP\-chip or ChIP\-seq\, and the gene expression results\, GeneNetworkBuilder generates a regulatory network of the TF.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GeneNetworkBuilder.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genenetworkbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genenetworkbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genenetworkbuilder/meta.yaml>`_

   


.. conda:package:: bioconductor-genenetworkbuilder

   |downloads_bioconductor-genenetworkbuilder| |docker_bioconductor-genenetworkbuilder|

   :versions: 1.24.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-htmlwidgets`  :conda:package:`r-plyr`  :conda:package:`r-rcpp` >=0.9.13 :conda:package:`r-rjson`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-genenetworkbuilder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genenetworkbuilder

   and update with::

      conda update bioconductor-genenetworkbuilder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genenetworkbuilder


.. |required_by_bioconductor-genenetworkbuilder| conda:required_by:: bioconductor-genenetworkbuilder
.. |downloads_bioconductor-genenetworkbuilder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genenetworkbuilder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genenetworkbuilder| image:: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genenetworkbuilder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genenetworkbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genenetworkbuilder/README.html

