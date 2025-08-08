:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'octopusv'
.. highlight: bash

octopusv
========

.. conda:recipe:: octopusv
   :replaces_section_title:
   :noindex:

   OctopusV\: Advanced Structural Variant Analysis Toolkit.

   :homepage: https://github.com/ylab-hi/octopusV
   :license: MIT / MIT
   :recipe: /`octopusv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopusv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopusv/meta.yaml>`_

   


.. conda:package:: octopusv

   |downloads_octopusv| |docker_octopusv|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends jinja2: ``>=3.1.5``
   :depends loguru: ``>=0.7.2``
   :depends matplotlib-base: ``>=3.9.2``
   :depends natsort: ``>=8.4.0``
   :depends pytest-cov: ``>=4.1.0``
   :depends python: ``>=3.10,<3.13``
   :depends rich: ``>=13.7.1``
   :depends seaborn: ``>=0.13.2``
   :depends typer: ``>=0.12.3``
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

      mamba install octopusv

   and update with::

      mamba update octopusv

  To create a new environment, run::

      mamba create --name myenvname octopusv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/octopusv:<tag>

   (see `octopusv/tags`_ for valid values for ``<tag>``)


.. |downloads_octopusv| image:: https://img.shields.io/conda/dn/bioconda/octopusv.svg?style=flat
   :target: https://anaconda.org/bioconda/octopusv
   :alt:   (downloads)
.. |docker_octopusv| image:: https://quay.io/repository/biocontainers/octopusv/status
   :target: https://quay.io/repository/biocontainers/octopusv
.. _`octopusv/tags`: https://quay.io/repository/biocontainers/octopusv?tab=tags


.. raw:: html

    <script>
        var package = "octopusv";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/octopusv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/octopusv/README.html