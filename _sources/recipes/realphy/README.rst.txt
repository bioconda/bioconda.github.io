:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'realphy'
.. highlight: bash

realphy
=======

.. conda:recipe:: realphy
   :replaces_section_title:
   :noindex:

   The Reference sequence Alignment based Phylogeny

   :homepage: https://realphy.unibas.ch/realphy
   :license: No commercial use
   :recipe: /`realphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/realphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/realphy/meta.yaml>`_

   


.. conda:package:: realphy

   |downloads_realphy| |docker_realphy|

   :versions:
      
      

      ``1.13-1``,  ``1.13-0``,  ``1.12-3``,  ``1.12-2``

      

   
   :depends openjdk: ``>8.0.121``
   :depends zlib: 
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

      mamba install realphy

   and update with::

      mamba update realphy

  To create a new environment, run::

      mamba create --name myenvname realphy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/realphy:<tag>

   (see `realphy/tags`_ for valid values for ``<tag>``)


.. |downloads_realphy| image:: https://img.shields.io/conda/dn/bioconda/realphy.svg?style=flat
   :target: https://anaconda.org/bioconda/realphy
   :alt:   (downloads)
.. |docker_realphy| image:: https://quay.io/repository/biocontainers/realphy/status
   :target: https://quay.io/repository/biocontainers/realphy
.. _`realphy/tags`: https://quay.io/repository/biocontainers/realphy?tab=tags


.. raw:: html

    <script>
        var package = "realphy";
        var versions = ["1.13","1.13","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/realphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/realphy/README.html