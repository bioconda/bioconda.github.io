:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bascule'
.. highlight: bash

r-bascule
=========

.. conda:recipe:: r-bascule
   :replaces_section_title:
   :noindex:

   Bayesian inference and clustering of mutational signatures leveraging biological priors

   :homepage: https://github.com/caravagnalab/bascule
   :documentation: https://caravagnalab.github.io/bascule/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-bascule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bascule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bascule/meta.yaml>`_

   BASCULE is a Bayesian model to fit multiple signature types from multiple patients\, leveraging
   a pre\-existing catalogue of known signatures such as COSMIC. BASCULE searches for known
   signatures from the input catalogue as well as for new signatures that outside the catalogue\,
   accounting for hidden structure in the input data \(e.g.\, distinct tumour types\). Moreover\,
   bascule performs tensor clustering to retrieve latent groups in the input cohort from the
   exposures of multiple signature types jointly. The model uses non\-negative matrix factorisation
   and variational inference implemented in the pybascule Python package.



.. conda:package:: r-bascule

   |downloads_r-bascule| |docker_r-bascule|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-ggh4x: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-ggsci: 
   :depends r-ggtext: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-lsa: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-polychrome: 
   :depends r-progress: 
   :depends r-quadprog: 
   :depends r-reshape2: 
   :depends r-reticulate: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install r-bascule

   and update with::

      mamba update r-bascule

  To create a new environment, run::

      mamba create --name myenvname r-bascule

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-bascule:<tag>

   (see `r-bascule/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bascule| image:: https://img.shields.io/conda/dn/bioconda/r-bascule.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bascule
   :alt:   (downloads)
.. |docker_r-bascule| image:: https://quay.io/repository/biocontainers/r-bascule/status
   :target: https://quay.io/repository/biocontainers/r-bascule
.. _`r-bascule/tags`: https://quay.io/repository/biocontainers/r-bascule?tab=tags


.. raw:: html

    <script>
        var package = "r-bascule";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bascule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bascule/README.html