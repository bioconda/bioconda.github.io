:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'azure-cli'
.. highlight: bash

azure-cli
=========

.. conda:recipe:: azure-cli
   :replaces_section_title:
   :noindex:

   Microsoft Azure Cross Platform Command Line

   :homepage: https://github.com/azure/azure-xplat-cli
   :license: Apache v2.0
   :recipe: /`azure-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/azure-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/azure-cli/meta.yaml>`_

   


.. conda:package:: azure-cli

   |downloads_azure-cli| |docker_azure-cli|

   :versions:
      
      

      ``0.10.3-0``

      

   
   :depends nodejs: 
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

      mamba install azure-cli

   and update with::

      mamba update azure-cli

  To create a new environment, run::

      mamba create --name myenvname azure-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/azure-cli:<tag>

   (see `azure-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_azure-cli| image:: https://img.shields.io/conda/dn/bioconda/azure-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/azure-cli
   :alt:   (downloads)
.. |docker_azure-cli| image:: https://quay.io/repository/biocontainers/azure-cli/status
   :target: https://quay.io/repository/biocontainers/azure-cli
.. _`azure-cli/tags`: https://quay.io/repository/biocontainers/azure-cli?tab=tags


.. raw:: html

    <script>
        var package = "azure-cli";
        var versions = ["0.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/azure-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/azure-cli/README.html