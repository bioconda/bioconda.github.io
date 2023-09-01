:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harvesttools'
.. highlight: bash

harvesttools
============

.. conda:recipe:: harvesttools
   :replaces_section_title:
   :noindex:

   HarvestTools is a part of the Harvest software suite and provides file conversion between Gingr files and various standard text formats

   :homepage: https://github.com/marbl/harvest-tools
   :license: custom; see https://raw.githubusercontent.com/marbl/harvest-tools/master/LICENSE.txt
   :recipe: /`harvesttools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvesttools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvesttools/meta.yaml>`_

   


.. conda:package:: harvesttools

   |downloads_harvesttools| |docker_harvesttools|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install harvesttools

   and update with::

      mamba update harvesttools

  To create a new environment, run::

      mamba create --name myenvname harvesttools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/harvesttools:<tag>

   (see `harvesttools/tags`_ for valid values for ``<tag>``)


.. |downloads_harvesttools| image:: https://img.shields.io/conda/dn/bioconda/harvesttools.svg?style=flat
   :target: https://anaconda.org/bioconda/harvesttools
   :alt:   (downloads)
.. |docker_harvesttools| image:: https://quay.io/repository/biocontainers/harvesttools/status
   :target: https://quay.io/repository/biocontainers/harvesttools
.. _`harvesttools/tags`: https://quay.io/repository/biocontainers/harvesttools?tab=tags


.. raw:: html

    <script>
        var package = "harvesttools";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harvesttools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harvesttools/README.html