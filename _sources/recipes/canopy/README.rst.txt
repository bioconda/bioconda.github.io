:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'canopy'
.. highlight: bash

canopy
======

.. conda:recipe:: canopy
   :replaces_section_title:
   :noindex:

   Canopy \- Metagenomics Canopy Clustering Implementation

   :homepage: https://github.com/hildebra/canopy2/
   :license: GPL-2.0-or-later
   :recipe: /`canopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canopy/meta.yaml>`_

   


.. conda:package:: canopy

   |downloads_canopy| |docker_canopy|

   :versions:
      
      

      ``0.25-0``

      

   
   :depends _openmp_mutex: ``* *_llvm``
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=18.1.3``
   :depends zlib: 
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

      mamba install canopy

   and update with::

      mamba update canopy

  To create a new environment, run::

      mamba create --name myenvname canopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/canopy:<tag>

   (see `canopy/tags`_ for valid values for ``<tag>``)


.. |downloads_canopy| image:: https://img.shields.io/conda/dn/bioconda/canopy.svg?style=flat
   :target: https://anaconda.org/bioconda/canopy
   :alt:   (downloads)
.. |docker_canopy| image:: https://quay.io/repository/biocontainers/canopy/status
   :target: https://quay.io/repository/biocontainers/canopy
.. _`canopy/tags`: https://quay.io/repository/biocontainers/canopy?tab=tags


.. raw:: html

    <script>
        var package = "canopy";
        var versions = ["0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canopy/README.html