:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'colord'
.. highlight: bash

colord
======

.. conda:recipe:: colord
   :replaces_section_title:
   :noindex:

   A versatile compressor of third generation sequencing reads.

   :homepage: https://github.com/refresh-bio/colord
   :license: GPL / GPL-3
   :recipe: /`colord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colord/meta.yaml>`_

   


.. conda:package:: colord

   |downloads_colord| |docker_colord|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
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

      mamba install colord

   and update with::

      mamba update colord

  To create a new environment, run::

      mamba create --name myenvname colord

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/colord:<tag>

   (see `colord/tags`_ for valid values for ``<tag>``)


.. |downloads_colord| image:: https://img.shields.io/conda/dn/bioconda/colord.svg?style=flat
   :target: https://anaconda.org/bioconda/colord
   :alt:   (downloads)
.. |docker_colord| image:: https://quay.io/repository/biocontainers/colord/status
   :target: https://quay.io/repository/biocontainers/colord
.. _`colord/tags`: https://quay.io/repository/biocontainers/colord?tab=tags


.. raw:: html

    <script>
        var package = "colord";
        var versions = ["1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colord/README.html