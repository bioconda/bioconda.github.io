.. title:: Package Recipe 'bioconductor-decomplexdisease'
.. highlight: bash


bioconductor-decomplexdisease
=============================

.. conda:recipe:: bioconductor-decomplexdisease
   :replaces_section_title:

   It is designed to find the differential expressed genes \(DEGs\) for complex disease\, which is characterized by the heterogeneous genomic expression profiles. Different from the established DEG analysis tools\, it does not assume the patients of complex diseases to share the common DEGs. By applying a bi\-clustering algorithm\, DECD finds the DEGs shared by as many patients. In this way\, DECD describes the DEGs of complex disease in a novel syntax\, e.g. a gene list composed of 200 genes are differentially expressed in 30\% percent of studied complex disease. Applying the DECD analysis results\, users are possible to find the patients affected by the same mechanism based on the shared signatures.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DEComplexDisease.html
   :license: GPL-3
   :recipe: /`bioconductor-decomplexdisease <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease/meta.yaml>`_

   


.. conda:package:: bioconductor-decomplexdisease

   |downloads_bioconductor-decomplexdisease| |docker_bioconductor-decomplexdisease|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp` >=0.12.7 

   :required~by: |required_by_bioconductor-decomplexdisease|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-decomplexdisease

   and update with::

      conda update bioconductor-decomplexdisease

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-decomplexdisease


.. |required_by_bioconductor-decomplexdisease| conda:required_by:: bioconductor-decomplexdisease
.. |downloads_bioconductor-decomplexdisease| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decomplexdisease.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-decomplexdisease| image:: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decomplexdisease/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decomplexdisease/README.html

