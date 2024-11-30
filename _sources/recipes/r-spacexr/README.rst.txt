:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-spacexr'
.. highlight: bash

r-spacexr
=========

.. conda:recipe:: r-spacexr
   :replaces_section_title:
   :noindex:

   Cell type identification and cell type\-specific differential expression in spatial transcriptomics

   :homepage: https://github.com/dmcable/spacexr
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-spacexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spacexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spacexr/meta.yaml>`_

   


.. conda:package:: r-spacexr

   |downloads_r-spacexr| |docker_r-spacexr|

   :versions:
      
      

      ``2.2.1-1``,  ``2.2.1-0``

      

   
   :depends openssh: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-compquadform: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-evaluate: 
   :depends r-fields: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-lifecycle: 
   :depends r-locfdr: 
   :depends r-matrix: 
   :depends r-metafor: 
   :depends r-mgcv: 
   :depends r-pals: 
   :depends r-quadprog: 
   :depends r-readr: 
   :depends r-remotes: 
   :depends r-reshape2: 
   :depends r-rfast: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tibble: 
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

      mamba install r-spacexr

   and update with::

      mamba update r-spacexr

  To create a new environment, run::

      mamba create --name myenvname r-spacexr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-spacexr:<tag>

   (see `r-spacexr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-spacexr| image:: https://img.shields.io/conda/dn/bioconda/r-spacexr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spacexr
   :alt:   (downloads)
.. |docker_r-spacexr| image:: https://quay.io/repository/biocontainers/r-spacexr/status
   :target: https://quay.io/repository/biocontainers/r-spacexr
.. _`r-spacexr/tags`: https://quay.io/repository/biocontainers/r-spacexr?tab=tags


.. raw:: html

    <script>
        var package = "r-spacexr";
        var versions = ["2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spacexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spacexr/README.html