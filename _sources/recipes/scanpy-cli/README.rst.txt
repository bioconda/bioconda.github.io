:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy-cli'
.. highlight: bash

scanpy-cli
==========

.. conda:recipe:: scanpy-cli
   :replaces_section_title:
   :noindex:

   CLI for Scanpy

   :homepage: https://github.com/nictru/scanpy-cli
   :license: MIT
   :recipe: /`scanpy-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-cli/meta.yaml>`_

   


.. conda:package:: scanpy-cli

   |downloads_scanpy-cli| |docker_scanpy-cli|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.4-0``

      

   
   :depends leidenalg: ``>=0.10.2``
   :depends python: ``>=3.12``
   :depends python-igraph: ``>=0.11.8``
   :depends rich-click: ``>=1.8.8``
   :depends scanpy: ``>=1.11.0``
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

      mamba install scanpy-cli

   and update with::

      mamba update scanpy-cli

  To create a new environment, run::

      mamba create --name myenvname scanpy-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scanpy-cli:<tag>

   (see `scanpy-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_scanpy-cli| image:: https://img.shields.io/conda/dn/bioconda/scanpy-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scanpy-cli
   :alt:   (downloads)
.. |docker_scanpy-cli| image:: https://quay.io/repository/biocontainers/scanpy-cli/status
   :target: https://quay.io/repository/biocontainers/scanpy-cli
.. _`scanpy-cli/tags`: https://quay.io/repository/biocontainers/scanpy-cli?tab=tags


.. raw:: html

    <script>
        var package = "scanpy-cli";
        var versions = ["0.1.6","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-cli/README.html