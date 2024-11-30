:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'garnett-cli'
.. highlight: bash

garnett-cli
===========

.. conda:recipe:: garnett-cli
   :replaces_section_title:
   :noindex:

   Collection of wrapper scripts for the Garnett scRNAseq cell type classification tool.

   :homepage: https://github.com/ebi-gene-expression-group/garnett-cli
   :license: Apache / Apache-2.0
   :recipe: /`garnett-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnett-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnett-cli/meta.yaml>`_

   


.. conda:package:: garnett-cli

   |downloads_garnett-cli| |docker_garnett-cli|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``v0.0.1-0``

      

   
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-org.mm.eg.db: 
   :depends monocle3-cli: ``0.0.7.*``
   :depends r-garnett: ``0.2.8.*``
   :depends r-glmnet: ``2.0_18.*``
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

      mamba install garnett-cli

   and update with::

      mamba update garnett-cli

  To create a new environment, run::

      mamba create --name myenvname garnett-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/garnett-cli:<tag>

   (see `garnett-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_garnett-cli| image:: https://img.shields.io/conda/dn/bioconda/garnett-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/garnett-cli
   :alt:   (downloads)
.. |docker_garnett-cli| image:: https://quay.io/repository/biocontainers/garnett-cli/status
   :target: https://quay.io/repository/biocontainers/garnett-cli
.. _`garnett-cli/tags`: https://quay.io/repository/biocontainers/garnett-cli?tab=tags


.. raw:: html

    <script>
        var package = "garnett-cli";
        var versions = ["0.0.5","0.0.5","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/garnett-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/garnett-cli/README.html