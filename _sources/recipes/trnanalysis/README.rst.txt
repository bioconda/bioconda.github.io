:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trnanalysis'
.. highlight: bash

trnanalysis
===========

.. conda:recipe:: trnanalysis
   :replaces_section_title:

   tRNA analysis pipeline

   :homepage: https://trnanalysis.readthedocs.io/en/latest/
   :license: MIT
   :recipe: /`trnanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnanalysis/meta.yaml>`_

   


.. conda:package:: trnanalysis

   |downloads_trnanalysis| |docker_trnanalysis|

   :versions: 0.1.8-1, 0.1.8-0, 0.1.7-2, 0.1.7-1, 0.1.7-0, 0.1.6-1, 0.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.2-0, 0.1.0-0
   
   :depends bcftools: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bowtie: 
   :depends cgat-apps: 
   :depends cgatcore: 
   :depends configparser: 
   :depends ez_setup: 
   :depends fastq-screen: 
   :depends fastqc: 
   :depends multiqc: 
   :depends mysqlclient: 
   :depends numpy: >=1.16.4
   :depends pandas: 
   :depends pysam: 
   :depends python: >=3
   :depends pyyaml: >=5.1
   :depends r-base: 
   :depends r-codetools: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-fastqcr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-ggthemes: 
   :depends r-gridbase: 
   :depends r-htmltools: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tidyverse: 
   :depends r-yaml: 
   :depends ruffus: 
   :depends samtools: 
   :depends seaborn: 
   :depends seqtk: 
   :depends sortedcontainers: 
   :depends subread: 
   :depends trimmomatic: 
   :depends trnascan-se: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trnanalysis

   and update with::

      conda update trnanalysis

   or use the docker container::

      docker pull quay.io/biocontainers/trnanalysis:<tag>

   (see `trnanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_trnanalysis| image:: https://img.shields.io/conda/dn/bioconda/trnanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/trnanalysis
   :alt:   (downloads)
.. |docker_trnanalysis| image:: https://quay.io/repository/biocontainers/trnanalysis/status
   :target: https://quay.io/repository/biocontainers/trnanalysis
.. _`trnanalysis/tags`: https://quay.io/repository/biocontainers/trnanalysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trnanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trnanalysis/README.html