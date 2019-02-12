.. title:: Package Recipe 'bioconductor-gsva'
.. highlight: bash


bioconductor-gsva
=================

.. conda:recipe:: bioconductor-gsva
   :replaces_section_title:

   Gene Set Variation Analysis \(GSVA\) is a non\-parametric\, unsupervised method for estimating variation of gene set enrichment through the samples of a expression data set. GSVA performs a change in coordinate systems\, transforming the data from a gene by sample matrix to a gene\-set by sample matrix\, thereby allowing the evaluation of pathway enrichment for each sample. This new matrix of GSVA enrichment scores facilitates applying standard analytical methods like functional enrichment\, survival analysis\, clustering\, CNV\-pathway analysis or cross\-tissue pathway analysis\, in a pathway\-centric manner.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSVA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gsva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsva/meta.yaml>`_
   :links: biotools: :biotools:`gsva`

   


.. conda:package:: bioconductor-gsva

   |downloads_bioconductor-gsva| |docker_bioconductor-gsva|

   :versions: 1.30.0, 1.28.0, 1.26.0, 1.24.2, 1.24.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-geneplotter` >=1.60.0,<1.61.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-shiny`  :conda:package:`r-shinythemes`  

   :required~by: |required_by_bioconductor-gsva|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsva

   and update with::

      conda update bioconductor-gsva

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gsva


.. |required_by_bioconductor-gsva| conda:required_by:: bioconductor-gsva
.. |downloads_bioconductor-gsva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsva.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsva| image:: https://quay.io/repository/biocontainers/bioconductor-gsva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsva







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsva/README.html

