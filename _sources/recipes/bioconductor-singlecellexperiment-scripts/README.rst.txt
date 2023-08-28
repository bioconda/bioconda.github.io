:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellexperiment-scripts'
.. highlight: bash

bioconductor-singlecellexperiment-scripts
=========================================

.. conda:recipe:: bioconductor-singlecellexperiment-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for operations associated with the SingleCellExperiment package. Functions in R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-singlecellexperiment-scripts
   :license: GPL / GPL-3
   :recipe: /`bioconductor-singlecellexperiment-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment-scripts/meta.yaml>`_

   


.. conda:package:: bioconductor-singlecellexperiment-scripts

   |downloads_bioconductor-singlecellexperiment-scripts| |docker_bioconductor-singlecellexperiment-scripts|

   :versions:
      
      

      ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends bioconductor-singlecellexperiment: 
   :depends r-base: 
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-singlecellexperiment-scripts

   and update with::

      mamba update bioconductor-singlecellexperiment-scripts

  To create a new environment, run::

      mamba create --name myenvname bioconductor-singlecellexperiment-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellexperiment-scripts:<tag>

   (see `bioconductor-singlecellexperiment-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellexperiment-scripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellexperiment-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellexperiment-scripts
   :alt:   (downloads)
.. |docker_bioconductor-singlecellexperiment-scripts| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts
.. _`bioconductor-singlecellexperiment-scripts/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellexperiment-scripts";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellexperiment-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellexperiment-scripts/README.html