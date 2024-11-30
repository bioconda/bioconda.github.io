:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itol-config'
.. highlight: bash

itol-config
===========

.. conda:recipe:: itol-config
   :replaces_section_title:
   :noindex:

   Package to create iTOL config files

   :homepage: https://github.com/jodyphelan/itol-config
   :documentation: https://jodyphelan.github.io/itol-config/
   
   :license: MIT / MIT
   :recipe: /`itol-config <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itol-config>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itol-config/meta.yaml>`_

   


.. conda:package:: itol-config

   |downloads_itol-config| |docker_itol-config|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: ``>=3.8``
   :depends tomli: 
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

      mamba install itol-config

   and update with::

      mamba update itol-config

  To create a new environment, run::

      mamba create --name myenvname itol-config

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/itol-config:<tag>

   (see `itol-config/tags`_ for valid values for ``<tag>``)


.. |downloads_itol-config| image:: https://img.shields.io/conda/dn/bioconda/itol-config.svg?style=flat
   :target: https://anaconda.org/bioconda/itol-config
   :alt:   (downloads)
.. |docker_itol-config| image:: https://quay.io/repository/biocontainers/itol-config/status
   :target: https://quay.io/repository/biocontainers/itol-config
.. _`itol-config/tags`: https://quay.io/repository/biocontainers/itol-config?tab=tags


.. raw:: html

    <script>
        var package = "itol-config";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itol-config/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itol-config/README.html