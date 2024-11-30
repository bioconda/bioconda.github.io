:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sc3-scripts'
.. highlight: bash

sc3-scripts
===========

.. conda:recipe:: sc3-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the SC3 package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-sc3-scripts
   :license: GPL / GPL-3
   :recipe: /`sc3-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc3-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc3-scripts/meta.yaml>`_

   


.. conda:package:: sc3-scripts

   |downloads_sc3-scripts| |docker_sc3-scripts|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-sc3: ``>=1.10.0,<1.11``
   :depends bioconductor-singlecellexperiment-scripts: 
   :depends r-base: ``>=3.5.1,<3.5.2.0a0``
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :depends scater-scripts: 
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

      mamba install sc3-scripts

   and update with::

      mamba update sc3-scripts

  To create a new environment, run::

      mamba create --name myenvname sc3-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sc3-scripts:<tag>

   (see `sc3-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_sc3-scripts| image:: https://img.shields.io/conda/dn/bioconda/sc3-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/sc3-scripts
   :alt:   (downloads)
.. |docker_sc3-scripts| image:: https://quay.io/repository/biocontainers/sc3-scripts/status
   :target: https://quay.io/repository/biocontainers/sc3-scripts
.. _`sc3-scripts/tags`: https://quay.io/repository/biocontainers/sc3-scripts?tab=tags


.. raw:: html

    <script>
        var package = "sc3-scripts";
        var versions = ["0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sc3-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sc3-scripts/README.html