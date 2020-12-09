:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiornaseq'
.. highlight: bash

r-bcbiornaseq
=============

.. conda:recipe:: r-bcbiornaseq
   :replaces_section_title:
   :noindex:

   R package for bcbio RNA\-seq analysis.

   :homepage: http://bioinformatics.sph.harvard.edu/bcbioRNASeq/
   :developer docs: https://github.com/hbc/bcbioRNASeq
   :license: GPL / GPL-3.0
   :recipe: /`r-bcbiornaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq/meta.yaml>`_

   


.. conda:package:: r-bcbiornaseq

   |downloads_r-bcbiornaseq| |docker_r-bcbiornaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.39-0</code>,  <code>0.3.37-0</code>,  <code>0.3.36-0</code>,  <code>0.3.34-0</code>,  <code>0.3.33-1</code>,  <code>0.3.33-0</code>,  <code>0.3.32-0</code>,  <code>0.3.31-0</code>,  <code>0.3.30-0</code>,  </span></summary>
      

      ``0.3.39-0``,  ``0.3.37-0``,  ``0.3.36-0``,  ``0.3.34-0``,  ``0.3.33-1``,  ``0.3.33-0``,  ``0.3.32-0``,  ``0.3.31-0``,  ``0.3.30-0``,  ``0.3.29-0``,  ``0.3.28-0``,  ``0.3.27-0``,  ``0.3.26-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.4-0``,  ``0.2.4a-0``,  ``0.2.3a-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biocstyle: 
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-degreport: 
   :depends bioconductor-deseq2: ``>=1.28``
   :depends bioconductor-dose: 
   :depends bioconductor-edger: ``>=3.30``
   :depends bioconductor-ensdb.hsapiens.v75: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-org.mm.eg.db: 
   :depends bioconductor-pathview: 
   :depends bioconductor-rhdf5: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-summarizedexperiment: ``>=1.18``
   :depends bioconductor-tximport: ``>=1.16``
   :depends bioconductor-vsn: 
   :depends r-acidgenerics: ``>=0.4.1``
   :depends r-acidplots: ``>=0.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-basejump: ``>=0.13.3``
   :depends r-bcbiobase: ``>=0.6.16``
   :depends r-cli: ``>=2.2``
   :depends r-cowplot: ``>=1.1``
   :depends r-deseqanalysis: 
   :depends r-ggplot2: ``>=3.3``
   :depends r-goalie: ``>=0.4.11``
   :depends r-hexbin: 
   :depends r-knitr: 
   :depends r-rlang: ``>=0.4``
   :depends r-rmarkdown: 
   :depends r-roxygen2: 
   :depends r-scales: ``>=1.1``
   :depends r-sessioninfo: ``>=1.1``
   :depends r-tidyverse: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiornaseq

   and update with::

      conda update r-bcbiornaseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiornaseq:<tag>

   (see `r-bcbiornaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiornaseq
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq
.. _`r-bcbiornaseq/tags`: https://quay.io/repository/biocontainers/r-bcbiornaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html