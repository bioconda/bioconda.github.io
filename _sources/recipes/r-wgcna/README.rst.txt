.. title:: Package Recipe 'r-wgcna'
.. highlight: bash


r-wgcna
=======

.. conda:recipe:: r-wgcna
   :replaces_section_title:

   Functions necessary to perform Weighted Correlation Network Analysis on high\-dimensional data as originally described in Horvath and Zhang \(2005\) \<doi\:10.2202\/1544\-6115.1128\> and Langfelder and Horvath \(2008\) \<doi\:10.1186\/1471\-2105\-9\-559\>. Includes functions for rudimentary data cleaning\, construction of correlation networks\, module identification\, summarization\, and relating of variables and modules to sample traits. Also includes a number of utility functions for data manipulation and visualization.

   :homepage: http://horvath.genetics.ucla.edu/html/CoexpressionNetwork/Rpackages/WGCNA/
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-wgcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wgcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wgcna/meta.yaml>`_
   :links: biotools: :biotools:`wgcna`, doi: :doi:`10.1186/1471-2105-9-559`

   


.. conda:package:: r-wgcna

   |downloads_r-wgcna| |docker_r-wgcna|

   :versions: 1.66, 1.64_1, 1.61, 1.51

   :depends: :conda:package:`bioconductor-annotationdbi`  :conda:package:`bioconductor-go.db`  :conda:package:`bioconductor-impute`  :conda:package:`bioconductor-preprocesscore`  :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-dynamictreecut` >=1.62 :conda:package:`r-fastcluster`  :conda:package:`r-foreach`  :conda:package:`r-hmisc`  :conda:package:`r-matrixstats` >=0.8.1 :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-robust`  :conda:package:`r-survival`  

   :required~by: |required_by_r-wgcna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-wgcna

   and update with::

      conda update r-wgcna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-wgcna


.. |required_by_r-wgcna| conda:required_by:: r-wgcna
.. |downloads_r-wgcna| image:: https://img.shields.io/conda/dn/bioconda/r-wgcna.svg?style=flat
   :alt:   (downloads)
.. |docker_r-wgcna| image:: https://quay.io/repository/biocontainers/r-wgcna/status
   :target: https://quay.io/repository/biocontainers/r-wgcna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wgcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wgcna/README.html

