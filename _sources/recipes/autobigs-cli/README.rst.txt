:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autobigs-cli'
.. highlight: bash

autobigs-cli
============

.. conda:recipe:: autobigs-cli
   :replaces_section_title:
   :noindex:

   A CLI tool to rapidly fetch fetch MLST profiles given sequences for various diseases.

   :homepage: https://github.com/Syph-and-VPD-Lab/autoBIGS.cli
   :license: GPL-3.0-or-later
   :recipe: /`autobigs-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autobigs-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autobigs-cli/meta.yaml>`_

   


.. conda:package:: autobigs-cli

   |downloads_autobigs-cli| |docker_autobigs-cli|

   :versions:
      
      

      ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``

      

   
   :depends autobigs-engine: ``0.13.*``
   :depends python: ``>=3.12``
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

      mamba install autobigs-cli

   and update with::

      mamba update autobigs-cli

  To create a new environment, run::

      mamba create --name myenvname autobigs-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/autobigs-cli:<tag>

   (see `autobigs-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_autobigs-cli| image:: https://img.shields.io/conda/dn/bioconda/autobigs-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/autobigs-cli
   :alt:   (downloads)
.. |docker_autobigs-cli| image:: https://quay.io/repository/biocontainers/autobigs-cli/status
   :target: https://quay.io/repository/biocontainers/autobigs-cli
.. _`autobigs-cli/tags`: https://quay.io/repository/biocontainers/autobigs-cli?tab=tags


.. raw:: html

    <script>
        var package = "autobigs-cli";
        var versions = ["0.6.2","0.6.0","0.5.0","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autobigs-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autobigs-cli/README.html