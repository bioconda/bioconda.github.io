:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfquant'
.. highlight: bash

orfquant
========

.. conda:recipe:: orfquant
   :replaces_section_title:
   :noindex:

   SaTAnn is a method that annotates and quantifies translation at the single ORF level using Ribo\-seq data.

   :homepage: https://github.com/ohlerlab/ORFquant
   :license: GPL3 / GPL-3 or above
   :recipe: /`orfquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfquant/meta.yaml>`_

   


.. conda:package:: orfquant

   |downloads_orfquant| |docker_orfquant|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicfiles: 
   :depends bioconductor-rtracklayer: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-devtools: 
   :depends r-domc: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-multitaper: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
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

      mamba install orfquant

   and update with::

      mamba update orfquant

  To create a new environment, run::

      mamba create --name myenvname orfquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orfquant:<tag>

   (see `orfquant/tags`_ for valid values for ``<tag>``)


.. |downloads_orfquant| image:: https://img.shields.io/conda/dn/bioconda/orfquant.svg?style=flat
   :target: https://anaconda.org/bioconda/orfquant
   :alt:   (downloads)
.. |docker_orfquant| image:: https://quay.io/repository/biocontainers/orfquant/status
   :target: https://quay.io/repository/biocontainers/orfquant
.. _`orfquant/tags`: https://quay.io/repository/biocontainers/orfquant?tab=tags


.. raw:: html

    <script>
        var package = "orfquant";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfquant/README.html