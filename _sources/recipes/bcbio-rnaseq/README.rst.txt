:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-rnaseq'
.. highlight: bash

bcbio-rnaseq
============

.. conda:recipe:: bcbio-rnaseq
   :replaces_section_title:

   Report generation for bcbio\-nextgen RNA\-seq runs

   :homepage: https://github.com/roryk/bcbio.rnaseq
   :license: MIT
   :recipe: /`bcbio-rnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-rnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-rnaseq/meta.yaml>`_

   


.. conda:package:: bcbio-rnaseq

   |downloads_bcbio-rnaseq| |docker_bcbio-rnaseq|

   :versions: 1.2.0-3, 1.2.0-2, 1.2.0-1, 1.2.0-0, 1.1.1-1, 1.0.4-1, 1.0.3-1
   
   :depends bioconductor-biomart: 
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-degreport: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-org.mm.eg.db: 
   :depends bioconductor-tximport: 
   :depends bioconductor-vsn: 
   :depends openjdk: 
   :depends r-base: 3.3.2*
   :depends r-chbutils: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-quantreg: 
   :depends r-readr: 
   :depends r-rmarkdown: 
   :depends r-sleuth: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-rnaseq

   and update with::

      conda update bcbio-rnaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bcbio-rnaseq:<tag>

   (see `bcbio-rnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-rnaseq| image:: https://img.shields.io/conda/dn/bioconda/bcbio-rnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-rnaseq
   :alt:   (downloads)
.. |docker_bcbio-rnaseq| image:: https://quay.io/repository/biocontainers/bcbio-rnaseq/status
   :target: https://quay.io/repository/biocontainers/bcbio-rnaseq
.. _`bcbio-rnaseq/tags`: https://quay.io/repository/biocontainers/bcbio-rnaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-rnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-rnaseq/README.html