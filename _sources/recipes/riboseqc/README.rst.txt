:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboseqc'
.. highlight: bash

riboseqc
========

.. conda:recipe:: riboseqc
   :replaces_section_title:
   :noindex:

   Read length specific QC of Ribo\-seq data

   :homepage: https://github.com/ohlerlab/RiboseQC
   :license: GPL3 / GPL-3
   :recipe: /`riboseqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseqc/meta.yaml>`_

   A powerful analysis tool for the analysis of Ribo\-seq data\, which is able to provide read\-length specific analysis of both cytoplasmic and organellar ribosome\, and provides interactive visualization of results in a dynamic html report


.. conda:package:: riboseqc

   |downloads_riboseqc| |docker_riboseqc|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicfiles: 
   :depends bioconductor-rtracklayer: 
   :depends r-ade4: 
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-devtools: 
   :depends r-domc: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-iterators: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-multitaper: 
   :depends r-r.methodss3: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-seqinr: 
   :depends r-viridis: 
   :depends r-xnomial: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install riboseqc

   and update with::

      mamba update riboseqc

  To create a new environment, run::

      mamba create --name myenvname riboseqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/riboseqc:<tag>

   (see `riboseqc/tags`_ for valid values for ``<tag>``)


.. |downloads_riboseqc| image:: https://img.shields.io/conda/dn/bioconda/riboseqc.svg?style=flat
   :target: https://anaconda.org/bioconda/riboseqc
   :alt:   (downloads)
.. |docker_riboseqc| image:: https://quay.io/repository/biocontainers/riboseqc/status
   :target: https://quay.io/repository/biocontainers/riboseqc
.. _`riboseqc/tags`: https://quay.io/repository/biocontainers/riboseqc?tab=tags


.. raw:: html

    <script>
        var package = "riboseqc";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseqc/README.html