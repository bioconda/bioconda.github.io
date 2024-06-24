:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgs-canopy'
.. highlight: bash

mgs-canopy
==========

.. conda:recipe:: mgs-canopy
   :replaces_section_title:
   :noindex:

   Canopy clustering algorithm

   :homepage: https://github.com/fplaza/mgs-canopy-algorithm
   :license: GPL3
   :recipe: /`mgs-canopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgs-canopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgs-canopy/meta.yaml>`_
   :links: doi: :doi:`10.1038/nbt.2939`

   


.. conda:package:: mgs-canopy

   |downloads_mgs-canopy| |docker_mgs-canopy|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install mgs-canopy

   and update with::

      mamba update mgs-canopy

  To create a new environment, run::

      mamba create --name myenvname mgs-canopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgs-canopy:<tag>

   (see `mgs-canopy/tags`_ for valid values for ``<tag>``)


.. |downloads_mgs-canopy| image:: https://img.shields.io/conda/dn/bioconda/mgs-canopy.svg?style=flat
   :target: https://anaconda.org/bioconda/mgs-canopy
   :alt:   (downloads)
.. |docker_mgs-canopy| image:: https://quay.io/repository/biocontainers/mgs-canopy/status
   :target: https://quay.io/repository/biocontainers/mgs-canopy
.. _`mgs-canopy/tags`: https://quay.io/repository/biocontainers/mgs-canopy?tab=tags


.. raw:: html

    <script>
        var package = "mgs-canopy";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgs-canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgs-canopy/README.html