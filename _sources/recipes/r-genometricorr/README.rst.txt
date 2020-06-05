:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-genometricorr'
.. highlight: bash

r-genometricorr
===============

.. conda:recipe:: r-genometricorr
   :replaces_section_title:
   :noindex:

   Genometric Correlation \(GenometriCorr\) is an R package for spatial correlation of genome\-wide interval datasets.

   :homepage: http://genometricorr.sourceforge.net
   :license: Artistic-2.0
   :recipe: /`r-genometricorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genometricorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genometricorr/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1002529`

   


.. conda:package:: r-genometricorr

   |downloads_r-genometricorr| |docker_r-genometricorr|

   :versions:
      
      

      ``1.1.17-0``

      

   
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: 
   :depends r-base: ``>=3.1.0``
   :depends r-gdata: 
   :depends r-gplots: 
   :depends r-rcurl: 
   :depends r-tcltk2: 
   :depends xorg-libx11: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-genometricorr

   and update with::

      conda update r-genometricorr

   or use the docker container::

      docker pull quay.io/biocontainers/r-genometricorr:<tag>

   (see `r-genometricorr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-genometricorr| image:: https://img.shields.io/conda/dn/bioconda/r-genometricorr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-genometricorr
   :alt:   (downloads)
.. |docker_r-genometricorr| image:: https://quay.io/repository/biocontainers/r-genometricorr/status
   :target: https://quay.io/repository/biocontainers/r-genometricorr
.. _`r-genometricorr/tags`: https://quay.io/repository/biocontainers/r-genometricorr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-genometricorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-genometricorr/README.html