:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge-dups-runner'
.. highlight: bash

purge-dups-runner
=================

.. conda:recipe:: purge-dups-runner
   :replaces_section_title:
   :noindex:

   High Performance Cluster \(HPC\) runner.

   :homepage: https://github.com/dfguan/runner
   :license: MIT / MIT
   :recipe: /`purge-dups-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge-dups-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge-dups-runner/meta.yaml>`_

   


.. conda:package:: purge-dups-runner

   |downloads_purge-dups-runner| |docker_purge-dups-runner|

   :versions:
      
      

      ``2019.12.20-0``

      

   
   :depends python: ``>=3``
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

      mamba install purge-dups-runner

   and update with::

      mamba update purge-dups-runner

  To create a new environment, run::

      mamba create --name myenvname purge-dups-runner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/purge-dups-runner:<tag>

   (see `purge-dups-runner/tags`_ for valid values for ``<tag>``)


.. |downloads_purge-dups-runner| image:: https://img.shields.io/conda/dn/bioconda/purge-dups-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/purge-dups-runner
   :alt:   (downloads)
.. |docker_purge-dups-runner| image:: https://quay.io/repository/biocontainers/purge-dups-runner/status
   :target: https://quay.io/repository/biocontainers/purge-dups-runner
.. _`purge-dups-runner/tags`: https://quay.io/repository/biocontainers/purge-dups-runner?tab=tags


.. raw:: html

    <script>
        var package = "purge-dups-runner";
        var versions = ["2019.12.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge-dups-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge-dups-runner/README.html