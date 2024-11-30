:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ampvis'
.. highlight: bash

r-ampvis
========

.. conda:recipe:: r-ampvis
   :replaces_section_title:
   :noindex:

   A package to visualise amplicon data

   :homepage: https://github.com/MadsAlbertsen/ampvis
   :license: AGPL-3
   :recipe: /`r-ampvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis/meta.yaml>`_

   


.. conda:package:: r-ampvis

   |downloads_r-ampvis| |docker_r-ampvis|

   :versions:
      
      

      ``1.27.0-6``,  ``1.27.0-5``,  ``1.27.0-4``,  ``1.27.0-3``,  ``1.27.0-2``,  ``1.27.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-phyloseq: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-vegan: 
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

      mamba install r-ampvis

   and update with::

      mamba update r-ampvis

  To create a new environment, run::

      mamba create --name myenvname r-ampvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ampvis:<tag>

   (see `r-ampvis/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ampvis| image:: https://img.shields.io/conda/dn/bioconda/r-ampvis.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ampvis
   :alt:   (downloads)
.. |docker_r-ampvis| image:: https://quay.io/repository/biocontainers/r-ampvis/status
   :target: https://quay.io/repository/biocontainers/r-ampvis
.. _`r-ampvis/tags`: https://quay.io/repository/biocontainers/r-ampvis?tab=tags


.. raw:: html

    <script>
        var package = "r-ampvis";
        var versions = ["1.27.0","1.27.0","1.27.0","1.27.0","1.27.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ampvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ampvis/README.html