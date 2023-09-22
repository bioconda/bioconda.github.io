:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-common'
.. highlight: bash

snakemake-interface-common
==========================

.. conda:recipe:: snakemake-interface-common
   :replaces_section_title:
   :noindex:

   Common functions and classes for Snakemake and its plugins

   :homepage: https://github.com/snakemake/snakemake-interface-common
   :license: MIT / MIT
   :recipe: /`snakemake-interface-common <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-common>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-common/meta.yaml>`_

   


.. conda:package:: snakemake-interface-common

   |downloads_snakemake-interface-common| |docker_snakemake-interface-common|

   :versions:
      
      

      ``1.7.1-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``

      

   
   :depends python: ``>=3.7.0,<4.0.0``
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

      mamba install snakemake-interface-common

   and update with::

      mamba update snakemake-interface-common

  To create a new environment, run::

      mamba create --name myenvname snakemake-interface-common

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-common:<tag>

   (see `snakemake-interface-common/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-common| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-common.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-common
   :alt:   (downloads)
.. |docker_snakemake-interface-common| image:: https://quay.io/repository/biocontainers/snakemake-interface-common/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-common
.. _`snakemake-interface-common/tags`: https://quay.io/repository/biocontainers/snakemake-interface-common?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-common";
        var versions = ["1.7.1","1.4.1","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-common/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-common/README.html