:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-genome-launcher'
.. highlight: bash

atol-genome-launcher
====================

.. conda:recipe:: atol-genome-launcher
   :replaces_section_title:
   :noindex:

   Utility code for AToL\'s Genome Engine. This package provides modules for launching assemblies and annotations based on metadata ingested by the atol\-bpa\-datamapper.

   :homepage: https://github.com/TomHarrop/atol-genome-launcher
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-genome-launcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-genome-launcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-genome-launcher/meta.yaml>`_

   


.. conda:package:: atol-genome-launcher

   |downloads_atol-genome-launcher| |docker_atol-genome-launcher|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends pandas: ``>=2.3.3,<3``
   :depends python: ``>=3.12,<3.13``
   :depends snakemake: ``>=9.11.6,<10``
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

      mamba install atol-genome-launcher

   and update with::

      mamba update atol-genome-launcher

  To create a new environment, run::

      mamba create --name myenvname atol-genome-launcher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atol-genome-launcher:<tag>

   (see `atol-genome-launcher/tags`_ for valid values for ``<tag>``)


.. |downloads_atol-genome-launcher| image:: https://img.shields.io/conda/dn/bioconda/atol-genome-launcher.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-genome-launcher
   :alt:   (downloads)
.. |docker_atol-genome-launcher| image:: https://quay.io/repository/biocontainers/atol-genome-launcher/status
   :target: https://quay.io/repository/biocontainers/atol-genome-launcher
.. _`atol-genome-launcher/tags`: https://quay.io/repository/biocontainers/atol-genome-launcher?tab=tags


.. raw:: html

    <script>
        var package = "atol-genome-launcher";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-genome-launcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-genome-launcher/README.html