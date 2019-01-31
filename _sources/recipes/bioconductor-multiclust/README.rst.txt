.. _`bioconductor-multiclust`:

bioconductor-multiclust
=======================

|downloads|

Clustering is carried out to identify patterns in transcriptomics profiles to determine clinically relevant subgroups of patients. Feature \(gene\) selection is a critical and an integral part of the process. Currently\, there are many feature selection and clustering methods to identify the relevant genes and perform clustering of samples. However\, choosing an appropriate methodology is difficult. In addition\, extensive feature selection methods have not been supported by the available packages. Hence\, we developed an integrative R\-package called multiClust that allows researchers to experiment with the choice of combination of methods for gene selection and clustering with ease. Using multiClust\, we identified the best performing clustering methodology in the context of clinical outcome. Our observations demonstrate that simple methods such as variance\-based ranking perform well on the majority of data sets\, provided that the appropriate number of genes is selected. However\, different gene ranking and selection methods remain relevant as no methodology works for all studies.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/multiClust.html
Versions      1.10.0, 1.8.2
License       GPL (>= 2)
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-multiclust/meta.yaml



Links         biotools: :biotools:`multiclust`, doi: :doi:`10.4137/cin.s38000`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-multiclust

and update with::

   conda update bioconductor-multiclust



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-multiclust.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-multiclust/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-multiclust/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-multiclust/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-multiclust
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-multiclust/status
                :target: https://quay.io/repository/biocontainers/bioconductor-multiclust

