:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mytai'
.. highlight: bash

r-mytai
=======

.. conda:recipe:: r-mytai
   :replaces_section_title:
   :noindex:

   Investigate the evolution of biological processes by capturing evolutionary signatures in transcriptomes. This package aims to provide a transcriptome analysis environment to quantify the average evolutionary age of genes contributing to a transcriptome of interest.

   :homepage: https://github.com/drostlab/myTAI
   :license: GPL / GPL-2.0-or-later
   :recipe: /`r-mytai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mytai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mytai/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx835`

   


.. conda:package:: r-mytai

   |downloads_r-mytai| |docker_r-mytai|

   :versions:
      
      

      ``2.3.5-0``,  ``2.3.4-0``,  ``0.9.3-1``,  ``0.9.3-0``

      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends fribidi: ``>=1.0.16,<2.0a0``
   :depends harfbuzz: ``>=9.0.0,<10.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: ``>=1.0.8``
   :depends r-dplyr: ``>=0.3.0``
   :depends r-fitdistrplus: ``>=1.0_2``
   :depends r-foreach: ``>=1.4.2``
   :depends r-ggforce: 
   :depends r-ggplot2: ``>=1.0.1``
   :depends r-ggplotify: 
   :depends r-ggrepel: 
   :depends r-ggridges: 
   :depends r-ggtext: 
   :depends r-gridextra: 
   :depends r-nortest: ``>=1.0_2``
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-r.utils: ``>=2.12.2``
   :depends r-rcolorbrewer: ``>=1.1_2``
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcpparmadillo: 
   :depends r-rcppthread: 
   :depends r-readr: ``>=0.2.2``
   :depends r-reshape2: ``>=1.4.1``
   :depends r-scales: 
   :depends r-taxize: ``>=0.6.0``
   :depends r-textshaping: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-mytai

   and update with::

      mamba update r-mytai

  To create a new environment, run::

      mamba create --name myenvname r-mytai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mytai:<tag>

   (see `r-mytai/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mytai| image:: https://img.shields.io/conda/dn/bioconda/r-mytai.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mytai
   :alt:   (downloads)
.. |docker_r-mytai| image:: https://quay.io/repository/biocontainers/r-mytai/status
   :target: https://quay.io/repository/biocontainers/r-mytai
.. _`r-mytai/tags`: https://quay.io/repository/biocontainers/r-mytai?tab=tags


.. raw:: html

    <script>
        var package = "r-mytai";
        var versions = ["2.3.5","2.3.4","0.9.3","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mytai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mytai/README.html