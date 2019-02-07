.. title:: Package Recipe 'r-genometricorr'
.. highlight: bash


r-genometricorr
===============

.. conda:recipe:: r-genometricorr
   :replaces_section_title:

   Genometric Correlation \(GenometriCorr\) is an R package for spatial correlation of genome\-wide interval datasets.

   :homepage: http://genometricorr.sourceforge.net
   :license: Artistic-2.0
   :recipe: /`r-genometricorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genometricorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genometricorr/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1002529`

   


.. conda:package:: r-genometricorr

   |downloads_r-genometricorr| |docker_r-genometricorr|

   :versions: 1.1.17

   :depends: :conda:package:`bioconductor-genomeinfodb`  :conda:package:`bioconductor-genomicfeatures`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-iranges`  :conda:package:`bioconductor-rtracklayer`  :conda:package:`bioconductor-s4vectors`  :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene`  :conda:package:`r-base` >=3.1.0 :conda:package:`r-gdata`  :conda:package:`r-gplots`  :conda:package:`r-rcurl`  :conda:package:`r-tcltk2`  :conda:package:`xorg-libx11`  

   :required~by: |required_by_r-genometricorr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-genometricorr

   and update with::

      conda update r-genometricorr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-genometricorr


.. |required_by_r-genometricorr| conda:required_by:: r-genometricorr
.. |downloads_r-genometricorr| image:: https://img.shields.io/conda/dn/bioconda/r-genometricorr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-genometricorr| image:: https://quay.io/repository/biocontainers/r-genometricorr/status
   :target: https://quay.io/repository/biocontainers/r-genometricorr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-genometricorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-genometricorr/README.html

