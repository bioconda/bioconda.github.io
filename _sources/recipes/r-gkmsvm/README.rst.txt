.. title:: Package Recipe 'r-gkmsvm'
.. highlight: bash


r-gkmsvm
========

.. conda:recipe:: r-gkmsvm
   :replaces_section_title:

   Imports the \'gkmSVM\' v2.0 functionalities into R \<http\:\/\/www.beerlab.org\/gkmsvm\/\> It also uses the \'kernlab\' library \(separate R package by different authors\) for various SVM algorithms.

   :homepage: https://CRAN.R-project.org/package=gkmSVM
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-gkmsvm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm/meta.yaml>`_

   


.. conda:package:: r-gkmsvm

   |downloads_r-gkmsvm| |docker_r-gkmsvm|

   :versions: 0.79.0, 0.71.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.26.0,<0.28.0 :conda:package:`bioconductor-biostrings` >=2.48.0,<2.50.0 :conda:package:`bioconductor-genomeinfodb`  :conda:package:`bioconductor-genomicranges` >=1.32.7,<1.34.0 :conda:package:`bioconductor-iranges`  :conda:package:`bioconductor-rtracklayer`  :conda:package:`bioconductor-s4vectors`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-kernlab`  :conda:package:`r-rcpp`  :conda:package:`r-rocr`  :conda:package:`r-seqinr`  

   :required~by: |required_by_r-gkmsvm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gkmsvm

   and update with::

      conda update r-gkmsvm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-gkmsvm


.. |required_by_r-gkmsvm| conda:required_by:: r-gkmsvm
.. |downloads_r-gkmsvm| image:: https://img.shields.io/conda/dn/bioconda/r-gkmsvm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gkmsvm| image:: https://quay.io/repository/biocontainers/r-gkmsvm/status
   :target: https://quay.io/repository/biocontainers/r-gkmsvm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gkmsvm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gkmsvm/README.html

