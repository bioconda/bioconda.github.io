:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blockbuster'
.. highlight: bash

blockbuster
===========

.. conda:recipe:: blockbuster
   :replaces_section_title:
   :noindex:

   Blockbuster detects blocks of overlapping reads using a gaussian\-distribution approach.

   :homepage: http://hoffmann.bioinf.uni-leipzig.de/LIFE/blockbuster.html
   :license: The 3-Clause BSD License
   :recipe: /`blockbuster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockbuster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockbuster/meta.yaml>`_

   


.. conda:package:: blockbuster

   |downloads_blockbuster| |docker_blockbuster|

   :versions:
      
      

      ``0.0.1.1-8``,  ``0.0.1.1-7``,  ``0.0.1.1-6``,  ``0.0.1.1-5``,  ``0.0.1.1-4``,  ``0.0.1.1-3``,  ``0.0.1.1-2``,  ``0.0.1.1-1``

      

   
   :depends libgcc: ``>=13``
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

      mamba install blockbuster

   and update with::

      mamba update blockbuster

  To create a new environment, run::

      mamba create --name myenvname blockbuster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blockbuster:<tag>

   (see `blockbuster/tags`_ for valid values for ``<tag>``)


.. |downloads_blockbuster| image:: https://img.shields.io/conda/dn/bioconda/blockbuster.svg?style=flat
   :target: https://anaconda.org/bioconda/blockbuster
   :alt:   (downloads)
.. |docker_blockbuster| image:: https://quay.io/repository/biocontainers/blockbuster/status
   :target: https://quay.io/repository/biocontainers/blockbuster
.. _`blockbuster/tags`: https://quay.io/repository/biocontainers/blockbuster?tab=tags


.. raw:: html

    <script>
        var package = "blockbuster";
        var versions = ["0.0.1.1","0.0.1.1","0.0.1.1","0.0.1.1","0.0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockbuster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockbuster/README.html