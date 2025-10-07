:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dipper'
.. highlight: bash

dipper
======

.. conda:recipe:: dipper
   :replaces_section_title:
   :noindex:

   DIPPER\: An ultrafast tool for phylogenetic tree reconstruction.

   :homepage: https://github.com/TurakhiaLab/DIPPER
   :documentation: https://turakhia.ucsd.edu/DIPPER
   
   :license: MIT / MIT
   :recipe: /`dipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dipper/meta.yaml>`_

   DIPPER \(DIstance\-based Phylogenetic PlacER\) is a tool designed for ultrafast and ultralarge phylogenetic tree reconstruction on GPUs. It is capable of reconstructing a phylogenetic tree with 10 million taxa\, with a minimal memory footprint.


.. conda:package:: dipper

   |downloads_dipper| |docker_dipper|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends boost-cpp: 
   :depends libboost: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends tbb: ``2019.9.*``
   :depends tbb: ``>=2019.9``
   :depends tbb-devel: ``2019.9.*``
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

      mamba install dipper

   and update with::

      mamba update dipper

  To create a new environment, run::

      mamba create --name myenvname dipper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dipper:<tag>

   (see `dipper/tags`_ for valid values for ``<tag>``)


.. |downloads_dipper| image:: https://img.shields.io/conda/dn/bioconda/dipper.svg?style=flat
   :target: https://anaconda.org/bioconda/dipper
   :alt:   (downloads)
.. |docker_dipper| image:: https://quay.io/repository/biocontainers/dipper/status
   :target: https://quay.io/repository/biocontainers/dipper
.. _`dipper/tags`: https://quay.io/repository/biocontainers/dipper?tab=tags


.. raw:: html

    <script>
        var package = "dipper";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dipper/README.html