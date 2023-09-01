:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlecellnet-cli'
.. highlight: bash

singlecellnet-cli
=================

.. conda:recipe:: singlecellnet-cli
   :replaces_section_title:
   :noindex:

   A set of command\-line wrappers for the core functions in the SingleCellNet package.

   :homepage: https://github.com/ebi-gene-expression-group/singlecellnet-cli
   :license: Apache-2.0
   :recipe: /`singlecellnet-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlecellnet-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlecellnet-cli/meta.yaml>`_

   


.. conda:package:: singlecellnet-cli

   |downloads_singlecellnet-cli| |docker_singlecellnet-cli|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends bats: 
   :depends bioconductor-singlecellexperiment: 
   :depends r-optparse: 
   :depends r-singlecellnet: 
   :depends r-workflowscriptscommon: 
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

      mamba install singlecellnet-cli

   and update with::

      mamba update singlecellnet-cli

  To create a new environment, run::

      mamba create --name myenvname singlecellnet-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/singlecellnet-cli:<tag>

   (see `singlecellnet-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_singlecellnet-cli| image:: https://img.shields.io/conda/dn/bioconda/singlecellnet-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/singlecellnet-cli
   :alt:   (downloads)
.. |docker_singlecellnet-cli| image:: https://quay.io/repository/biocontainers/singlecellnet-cli/status
   :target: https://quay.io/repository/biocontainers/singlecellnet-cli
.. _`singlecellnet-cli/tags`: https://quay.io/repository/biocontainers/singlecellnet-cli?tab=tags


.. raw:: html

    <script>
        var package = "singlecellnet-cli";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlecellnet-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlecellnet-cli/README.html