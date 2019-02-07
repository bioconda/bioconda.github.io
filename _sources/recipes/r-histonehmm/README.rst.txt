.. title:: Package Recipe 'r-histonehmm'
.. highlight: bash


r-histonehmm
============

.. conda:recipe:: r-histonehmm
   :replaces_section_title:

   histoneHMM is a software to analyse ChIP\-seq data of histone modifications with broad genomic footprints like H3K27me3. It allows for calling modified regions in single samples as well as for calling differentially modified regions in a comparison of two samples

   :homepage: http://histonehmm.molgen.mpg.de/
   :developer docs: https://github.com/matthiasheinig/histoneHMM
   :license: GPL
   :recipe: /`r-histonehmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-histonehmm/meta.yaml>`_

   


.. conda:package:: r-histonehmm

   |downloads_r-histonehmm| |docker_r-histonehmm|

   :versions: 1.7, 1.6

   :depends: :conda:package:`bioconductor-biocstyle`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-rsamtools`  :conda:package:`libgcc`  :conda:package:`r-base` 3.4.1* :conda:package:`r-mvtnorm`  :conda:package:`r-optparse`  :conda:package:`r-rcpp`  

   :required~by: |required_by_r-histonehmm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-histonehmm

   and update with::

      conda update r-histonehmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-histonehmm


.. |required_by_r-histonehmm| conda:required_by:: r-histonehmm
.. |downloads_r-histonehmm| image:: https://img.shields.io/conda/dn/bioconda/r-histonehmm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-histonehmm| image:: https://quay.io/repository/biocontainers/r-histonehmm/status
   :target: https://quay.io/repository/biocontainers/r-histonehmm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-histonehmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-histonehmm/README.html

