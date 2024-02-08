:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snaketool-utils'
.. highlight: bash

snaketool-utils
===============

.. conda:recipe:: snaketool-utils
   :replaces_section_title:
   :noindex:

   Utility functions for Snaketool CLI for bioinformatics tools

   :homepage: https://github.com/beardymcjohnface/snaketool-utils
   :license: MIT
   :recipe: /`snaketool-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaketool-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaketool-utils/meta.yaml>`_

   


.. conda:package:: snaketool-utils

   |downloads_snaketool-utils| |docker_snaketool-utils|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends click: ``>=8.1.3``
   :depends python: ``>=3.7``
   :depends pyyaml: ``>=6.0``
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

      mamba install snaketool-utils

   and update with::

      mamba update snaketool-utils

  To create a new environment, run::

      mamba create --name myenvname snaketool-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snaketool-utils:<tag>

   (see `snaketool-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_snaketool-utils| image:: https://img.shields.io/conda/dn/bioconda/snaketool-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/snaketool-utils
   :alt:   (downloads)
.. |docker_snaketool-utils| image:: https://quay.io/repository/biocontainers/snaketool-utils/status
   :target: https://quay.io/repository/biocontainers/snaketool-utils
.. _`snaketool-utils/tags`: https://quay.io/repository/biocontainers/snaketool-utils?tab=tags


.. raw:: html

    <script>
        var package = "snaketool-utils";
        var versions = ["0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snaketool-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snaketool-utils/README.html