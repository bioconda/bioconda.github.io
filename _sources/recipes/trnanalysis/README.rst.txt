:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trnanalysis'
.. highlight: bash

trnanalysis
===========

.. conda:recipe:: trnanalysis
   :replaces_section_title:
   :noindex:

   tRNA analysis pipeline

   :homepage: https://trnanalysis.readthedocs.io/en/latest/
   :license: MIT
   :recipe: /`trnanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnanalysis/meta.yaml>`_

   


.. conda:package:: trnanalysis

   |downloads_trnanalysis| |docker_trnanalysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.10-1</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-1</code>,  <code>0.1.8-0</code>,  <code>0.1.7-2</code>,  <code>0.1.7-1</code>,  <code>0.1.7-0</code>,  <code>0.1.6-1</code>,  </span></summary>
      

      ``0.1.10-1``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-org.hs.eg.db: 
   :depends bowtie: 
   :depends cgat-apps: 
   :depends cgatcore: ``>=0.6.5``
   :depends configparser: 
   :depends ez_setup: 
   :depends fastq-screen: 
   :depends fastqc: 
   :depends multiqc: 
   :depends mysqlclient: 
   :depends numpy: ``>=1.16.4``
   :depends pandas: 
   :depends pysam: ``0.15.2.*``
   :depends python: ``>=3``
   :depends pyyaml: ``>=5.1``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install trnanalysis

   and update with::

      mamba update trnanalysis

  To create a new environment, run::

      mamba create --name myenvname trnanalysis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trnanalysis:<tag>

   (see `trnanalysis/tags`_ for valid values for ``<tag>``)


.. |downloads_trnanalysis| image:: https://img.shields.io/conda/dn/bioconda/trnanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/trnanalysis
   :alt:   (downloads)
.. |docker_trnanalysis| image:: https://quay.io/repository/biocontainers/trnanalysis/status
   :target: https://quay.io/repository/biocontainers/trnanalysis
.. _`trnanalysis/tags`: https://quay.io/repository/biocontainers/trnanalysis?tab=tags


.. raw:: html

    <script>
        var package = "trnanalysis";
        var versions = ["0.1.10","0.1.10","0.1.9","0.1.8","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trnanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trnanalysis/README.html