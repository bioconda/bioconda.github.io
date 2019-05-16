:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kimod'
.. highlight: bash

bioconductor-kimod
==================

.. conda:recipe:: bioconductor-kimod
   :replaces_section_title:

   This package allows to work with mixed omics data \(transcriptomics\, proteomics\, microarray\-chips\, rna\-seq data\)\, introducing the following improvements\: distance options \(for numeric and\/or categorical variables\) for each of the tables\, bootstrap resampling techniques on the residuals matrices for all methods\, that enable perform confidence ellipses for the projection of individuals\, variables and biplot methodology to project variables \(gene expression\) on the compromise. Since the main purpose of the package is to use these techniques to omic data analysis\, it includes an example data from four different microarray platforms \(i.e.\,Agilent\, Affymetrix HGU 95\, Affymetrix HGU 133 and Affymetrix HGU 133plus 2.0\) on the NCI\-60 cell lines.NCI60\_4arrays is a list containing the NCI\-60 microarray data with only few hundreds of genes randomly selected in each platform to keep the size of the package small. The data are the same that the package omicade4 used to implement the co\-inertia analysis. The references in packages follow the style of the APA\-6th norm.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/kimod.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-kimod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kimod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kimod/meta.yaml>`_
   :links: biotools: :biotools:`kimod`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-kimod

   |downloads_bioconductor-kimod| |docker_bioconductor-kimod|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kimod

   and update with::

      conda update bioconductor-kimod

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kimod:<tag>

   (see `bioconductor-kimod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kimod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kimod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kimod
   :alt:   (downloads)
.. |docker_bioconductor-kimod| image:: https://quay.io/repository/biocontainers/bioconductor-kimod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kimod
.. _`bioconductor-kimod/tags`: https://quay.io/repository/biocontainers/bioconductor-kimod?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kimod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kimod/README.html