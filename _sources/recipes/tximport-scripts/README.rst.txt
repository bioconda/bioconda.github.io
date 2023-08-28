:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tximport-scripts'
.. highlight: bash

tximport-scripts
================

.. conda:recipe:: tximport-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the tximport package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/tximport-scripts
   :license: GPL / GPL-3
   :recipe: /`tximport-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tximport-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tximport-scripts/meta.yaml>`_

   


.. conda:package:: tximport-scripts

   |downloads_tximport-scripts| |docker_tximport-scripts|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends bioconductor-dropletutils: 
   :depends bioconductor-tximport: ``1.10.*``
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

      mamba install tximport-scripts

   and update with::

      mamba update tximport-scripts

  To create a new environment, run::

      mamba create --name myenvname tximport-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tximport-scripts:<tag>

   (see `tximport-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_tximport-scripts| image:: https://img.shields.io/conda/dn/bioconda/tximport-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/tximport-scripts
   :alt:   (downloads)
.. |docker_tximport-scripts| image:: https://quay.io/repository/biocontainers/tximport-scripts/status
   :target: https://quay.io/repository/biocontainers/tximport-scripts
.. _`tximport-scripts/tags`: https://quay.io/repository/biocontainers/tximport-scripts?tab=tags


.. raw:: html

    <script>
        var package = "tximport-scripts";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tximport-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tximport-scripts/README.html