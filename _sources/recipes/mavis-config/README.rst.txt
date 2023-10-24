:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mavis-config'
.. highlight: bash

mavis-config
============

.. conda:recipe:: mavis-config
   :replaces_section_title:
   :noindex:

   Config validation for running MAVIS via Snakemake

   :homepage: https://github.com/bcgsc/mavis_config.git
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mavis-config <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis-config>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis-config/meta.yaml>`_

   


.. conda:package:: mavis-config

   |downloads_mavis-config| |docker_mavis-config|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends braceexpand: 
   :depends python: ``>=3.7``
   :depends snakemake-minimal: ``>=7.18.1``
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

      mamba install mavis-config

   and update with::

      mamba update mavis-config

  To create a new environment, run::

      mamba create --name myenvname mavis-config

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mavis-config:<tag>

   (see `mavis-config/tags`_ for valid values for ``<tag>``)


.. |downloads_mavis-config| image:: https://img.shields.io/conda/dn/bioconda/mavis-config.svg?style=flat
   :target: https://anaconda.org/bioconda/mavis-config
   :alt:   (downloads)
.. |docker_mavis-config| image:: https://quay.io/repository/biocontainers/mavis-config/status
   :target: https://quay.io/repository/biocontainers/mavis-config
.. _`mavis-config/tags`: https://quay.io/repository/biocontainers/mavis-config?tab=tags


.. raw:: html

    <script>
        var package = "mavis-config";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mavis-config/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mavis-config/README.html