:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scran-cli'
.. highlight: bash

scran-cli
=========

.. conda:recipe:: scran-cli
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the scran R package. Scran implements functions for low\-level analyses of single\-cell RNA\-seq data.Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/scran-cli
   :license: Apache / Apache 2
   :recipe: /`scran-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scran-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scran-cli/meta.yaml>`_

   


.. conda:package:: scran-cli

   |downloads_scran-cli| |docker_scran-cli|

   :versions:
      
      

      ``0.0.1-0``,  ``v0.0.1-1``,  ``v0.0.1-0``

      

   
   :depends bioconductor-scran: ``1.12.1.*``
   :depends dropletutils-scripts: 
   :depends r-igraph: 
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
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

      mamba install scran-cli

   and update with::

      mamba update scran-cli

  To create a new environment, run::

      mamba create --name myenvname scran-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scran-cli:<tag>

   (see `scran-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_scran-cli| image:: https://img.shields.io/conda/dn/bioconda/scran-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scran-cli
   :alt:   (downloads)
.. |docker_scran-cli| image:: https://quay.io/repository/biocontainers/scran-cli/status
   :target: https://quay.io/repository/biocontainers/scran-cli
.. _`scran-cli/tags`: https://quay.io/repository/biocontainers/scran-cli?tab=tags


.. raw:: html

    <script>
        var package = "scran-cli";
        var versions = ["0.0.1","v0.0.1","v0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scran-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scran-cli/README.html