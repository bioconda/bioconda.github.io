:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cascade-config'
.. highlight: bash

cascade-config
==============

.. conda:recipe:: cascade-config
   :replaces_section_title:
   :noindex:

   Cascading configuration from the CLI and config files.

   :homepage: https://github.com/RalfG/cascade-config
   :license: Apache-2.0
   :recipe: /`cascade-config <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cascade-config>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cascade-config/meta.yaml>`_

   


.. conda:package:: cascade-config

   |downloads_cascade-config| |docker_cascade-config|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends jsonschema: 
   :depends python: ``>=3.6``
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

      mamba install cascade-config

   and update with::

      mamba update cascade-config

  To create a new environment, run::

      mamba create --name myenvname cascade-config

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cascade-config:<tag>

   (see `cascade-config/tags`_ for valid values for ``<tag>``)


.. |downloads_cascade-config| image:: https://img.shields.io/conda/dn/bioconda/cascade-config.svg?style=flat
   :target: https://anaconda.org/bioconda/cascade-config
   :alt:   (downloads)
.. |docker_cascade-config| image:: https://quay.io/repository/biocontainers/cascade-config/status
   :target: https://quay.io/repository/biocontainers/cascade-config
.. _`cascade-config/tags`: https://quay.io/repository/biocontainers/cascade-config?tab=tags


.. raw:: html

    <script>
        var package = "cascade-config";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cascade-config/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cascade-config/README.html