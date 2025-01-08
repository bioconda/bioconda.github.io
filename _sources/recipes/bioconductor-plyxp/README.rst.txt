:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plyxp'
.. highlight: bash

bioconductor-plyxp
==================

.. conda:recipe:: bioconductor-plyxp
   :replaces_section_title:
   :noindex:

   Data masks for SummarizedExperiment enabling dplyr\-like manipulation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/plyxp.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-plyxp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyxp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyxp/meta.yaml>`_

   The package provides \`rlang\` data masks for the SummarizedExperiment class. The enables the evaluation of unquoted expression in different contexts of the SummarizedExperiment object with optional access to other contexts. The goal for \`plyxp\` is for evaluation to feel like a data.frame object without ever needing to unwind to a rectangular data.frame.


.. conda:package:: bioconductor-plyxp

   |downloads_bioconductor-plyxp| |docker_bioconductor-plyxp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-glue: 
   :depends r-pillar: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-s7: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-vctrs: 
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

      mamba install bioconductor-plyxp

   and update with::

      mamba update bioconductor-plyxp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plyxp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plyxp:<tag>

   (see `bioconductor-plyxp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plyxp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plyxp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plyxp
   :alt:   (downloads)
.. |docker_bioconductor-plyxp| image:: https://quay.io/repository/biocontainers/bioconductor-plyxp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plyxp
.. _`bioconductor-plyxp/tags`: https://quay.io/repository/biocontainers/bioconductor-plyxp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plyxp";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plyxp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plyxp/README.html