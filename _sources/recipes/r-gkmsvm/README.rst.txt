:orphan:  .. only available via index, not via toctree

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

   :versions: 0.79.0-1, 0.79.0-0, 0.71.0-0
   
   :depends bioconductor-biocgenerics: >=0.26.0,<0.28.0
   :depends bioconductor-biostrings: >=2.48.0,<2.50.0
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicranges: >=1.32.7,<1.34.0
   :depends bioconductor-iranges: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-s4vectors: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-kernlab: 
   :depends r-rcpp: 
   :depends r-rocr: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gkmsvm

   and update with::

      conda update r-gkmsvm

   or use the docker container::

      docker pull quay.io/biocontainers/r-gkmsvm:<tag>

   (see `r-gkmsvm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gkmsvm| image:: https://img.shields.io/conda/dn/bioconda/r-gkmsvm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gkmsvm| image:: https://quay.io/repository/biocontainers/r-gkmsvm/status
   :target: https://quay.io/repository/biocontainers/r-gkmsvm
.. _`r-gkmsvm/tags`: https://quay.io/repository/biocontainers/r-gkmsvm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gkmsvm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gkmsvm/README.html